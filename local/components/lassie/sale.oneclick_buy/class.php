<?php
namespace Lassie\Components;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Catalog\v2\Property\PropertyCollection;
use Bitrix\Iblock\ElementPropertyTable;
use Bitrix\Iblock\ElementTable;
use Bitrix\Iblock\PropertyTable;
use Bitrix\Iblock\Template\Entity\ElementCatalog;
use Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Application;
use Bitrix\Main\Engine\Response\AjaxJson;
use Bitrix\Main\ErrorCollection;
use Bitrix\Sale\Basket;

class SaleOneClickBuyComponent extends \CBitrixComponent implements Controllerable
{
	private const DEFAULT_PAY_SYSTEM_ID = 1;
	private const PHYSICAL_PERSON = 1;

	public function onPrepareComponentParams($arParams): ?array
	{
		if (isset($arParams["BASKET_MODE"])) {
			unset(
				$arParams["ITEM_ID"],
				$arParams["PRODUCT_PROPERTIES"],
				$arParams["PRODUCT_PROPS_VARIABLE"],
				$arParams["BASKET_PROP_DIV"],
				$arParams["QUANTITY_ID"]
			);
		} else if (!isset($arParams["ITEM_ID"])) {
			return null;
		}
		return $arParams;
	}

	public function configureActions(): array
	{
		return array(
			"order" => array(
				"prefilters" => array()
			)
		);
	}

	public function orderAction($phoneNumber, $quantity = null, $properties = null)
	{
		$a = new PropertyCollection()
		return $this->makeOrder((int)$quantity, $phoneNumber, $properties);
	}

	public function executeComponent(): void
	{
		\Bitrix\Main\UI\Extension::load("ui.forms");
		$this->getResult();
		$this->includeComponentTemplate();
	}

	protected function listKeysSignedParameters(): array
	{
		return [
			"ITEM_ID",
			"PRODUCT_PROPS_VARIABLE",
			"PRODUCT_PROPERTIES",
			"BASKET_MODE"
		];
	}

	private function getBasket(?int $quantity, ?array $properties): \Bitrix\Sale\BasketBase
	{
		if (isset($this->arParams["BASKET_MODE"])) {
			$basket = Basket::loadItemsForFUser($this->getUserID(), SITE_ID);
		} else {
			$itemID = $this->arParams["ITEM_ID"];
			$basket = \Bitrix\Sale\Basket::create(SITE_ID);
			$basketItem = $basket->createItem("catalog", $itemID);
			$basketItem->setFields(array(
				"PRODUCT_ID" => $itemID,
				"QUANTITY" => $quantity,
				"CURRENCY" => \Bitrix\Currency\CurrencyManager::getBaseCurrency(),
				'PRODUCT_PROVIDER_CLASS' => '\CCatalogProductProvider',
			));
			if (isset($properties) and isset($this->arParams["PRODUCT_PROPERTIES"])) {
				$productProperties = array();
				$q = new \Bitrix\Main\Entity\Query(PropertyTable::getEntity());
				$q->setSelect(array("CODE", "NAME"));
				foreach (array_keys($this->arParams["PRODUCT_PROPERTIES"]) as $code) {
					$q->setFilter(array("=CODE" => $code));
				}
				$result = $q->exec()->fetchAll();
				foreach ($result as $property) {
					$productProperties[$property["CODE"]] = $property["NAME"];
				}
				foreach ($productProperties as $code => $name) {
					$value = $properties[$this->arParams["PRODUCT_PROPS_VARIABLE"] . "[$code"];
					$collection = $basketItem->getPropertyCollection();
					$item = $collection->createItem();
					$item->setFields(array(
						"NAME" => $name,
						"CODE" => $code,
						"VALUE" => $value,
					));
				}
			}
			$basket->save();
		}
		return $basket;
	}

	private function getUserID()
	{
		global $USER;
		return $USER->IsAuthorized() ? $USER->GetID() : \CSaleUser::GetAnonymousUserID();
	}

	private function makeOrder(?int $quantity, string $phoneNumber, ?array $properties): AjaxJson
	{
		\Bitrix\Main\Loader::includeModule("sale");
		\Bitrix\Main\Loader::includeModule("currency");

		try {
			$basket = $this->getBasket($quantity, $properties);

			$order = \Bitrix\Sale\Order::create(SITE_ID, $this->getUserID());
			$order->setPersonTypeId(self::PHYSICAL_PERSON);
			$order->setBasket($basket);

			$collection = $order->getPropertyCollection();
			$phoneProperty = $collection->getPhone();
			$phoneProperty->setValue($phoneNumber);
			$oneClickBuyProperty = $collection->getItemByOrderPropertyCode("ONE_CLICK_BUY");
			$oneClickBuyProperty->setValue("Y");

			$shipmentCollection = $order->getShipmentCollection();
			$shipment = $shipmentCollection->createItem();
			$service = \Bitrix\Sale\Delivery\Services\Manager::getById(\Bitrix\Sale\Delivery\Services\EmptyDeliveryService::getEmptyDeliveryServiceId());
			$shipment->setFields(array(
				'DELIVERY_ID' => $service['ID'],
				'DELIVERY_NAME' => $service['NAME'],
			));
			$shipmentItemCollection = $shipment->getShipmentItemCollection();
			foreach ($basket as $item) {
				$shipmentItem = $shipmentItemCollection->createItem($item);
				$shipmentItem->setQuantity($item->getQuantity());
			}

			$paymentCollection = $order->getPaymentCollection();
			$payment = $paymentCollection->createItem();
			$paySystemService = \Bitrix\Sale\PaySystem\Manager::getObjectById(self::DEFAULT_PAY_SYSTEM_ID);
			$payment->setFields(array(
				'PAY_SYSTEM_ID' => $paySystemService->getField("PAY_SYSTEM_ID"),
				'PAY_SYSTEM_NAME' => $paySystemService->getField("NAME"),
			));

			$order->doFinalAction(true);
			$result = $order->save();
			if ($result->isSuccess()) {
				return AjaxJson::createSuccess();
			} else {
				return AjaxJson::createError($result->getErrorCollection());
			}
		} catch (\Error|\Exception $e) {
			$result = new \Bitrix\Main\Result();
			$result->addError($e);
			return AjaxJson::createError($result->getErrorCollection());
		}
	}

	private function getResult(): void
	{
		$this->arResult["BUY_BUTTON_ID"] = "buy_".md5($this->randString());
		$this->arResult["PHONE_INPUT_ID"] = "phone_".md5($this->randString());
		$this->arResult["SIGNED_PARAMS"] = $this->getSignedParameters();
		$this->arResult["JS_PARAMS"] = $this->getJSParams();
	}

	private function getJSParams(): array
	{
		$jsParams = array();
		if (!isset($this->arParams["BASKET_MODE"]) || $this->arParams["BASKET_MODE"] === "N") {
			$jsParams["BASKET_PROP_DIV"] = $this->arParams["BASKET_PROP_DIV"];
			$jsParams["QUANTITY_ID"] = $this->arParams["QUANTITY_ID"];
		} else {
			$jsParams["BASKET_MODE"] = true;
		}
		$jsParams["PHONE_INPUT_ID"] = $this->arResult["PHONE_INPUT_ID"];
		$jsParams["SIGNED_PARAMS"] = $this->arResult["SIGNED_PARAMS"];
		$jsParams["BUY_BUTTON_ID"] = $this->arResult["BUY_BUTTON_ID"];
		return $jsParams;
	}
}