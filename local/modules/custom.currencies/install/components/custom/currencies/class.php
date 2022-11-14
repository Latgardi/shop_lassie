<?php

use Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Engine\Response\AjaxJson;
use Bitrix\Main\Entity\Query;
use Bitrix\Main\Loader;
use Custom\Currencies\CurrencyTable;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

class CurrenciesComponent extends \CBitrixComponent implements Controllerable
{
	private const FLAGS_API_URL = "https://flagcdn.com/";
	private const FLAGS_API_EXTENSION = ".svg";

	public function configureActions(): array
	{
		return array();
	}

	public function executeComponent(): void
	{
		\Bitrix\Main\UI\Extension::load("ui.forms");
		if ($this->StartResultCache()) {
			$this->getResult();
			$this->includeComponentTemplate();
		}
	}

	public function convertAction($currencyValue, $requestCurrencyID, $targetCurrencyID): AjaxJson
	{
		$convertedValue = $this->convert((float) $currencyValue, (int) $requestCurrencyID, (int) $targetCurrencyID);
		$response = new AjaxJson(["convertedValue" => $convertedValue]);
		return $response;
	}

	private function convert(float $currencyValue, int $requestCurrencyID, int $targetCurrencyID)
	{
		Loader::includeModule("custom.currencies");
		$query = new Query(CurrencyTable::getEntity());
		$query->where(Query::filter()
				->logic("or")
				->where([
					["ID", $requestCurrencyID],
					["ID", $targetCurrencyID]
				])
		);
		$query->setSelect(array("ID", "RATE"));
		$result = $query->exec();
		$rates = array();
		foreach ($result->fetchAll() as $currency) {
			if ((int) $currency["ID"] === $requestCurrencyID) {
				$rates["request_rate"] = (float) $currency["RATE"];
			} elseif ((int) $currency["ID"] === $targetCurrencyID) {
				$rates["target_rate"] = (float) $currency["RATE"];
			}
		}
		$result = ($currencyValue * $rates["request_rate"]) / $rates["target_rate"];
		$precision = 4;
		return round($result, $precision);
	}

	private function getCurrencies()
	{
		Loader::includeModule("custom.currencies");
		$query = new Query(CurrencyTable::getEntity());
		$query->setSelect(array("ID", "CURRENCY", "RATE"));
		$result = $query->exec();
		return $result->fetchAll();
	}

	private function getFlags()
	{
		if (isset($this->arResult["CURRENCIES"])) {
			foreach ($this->arResult["CURRENCIES"] as $key => $currency) {
				if ($currency["CURRENCY"] === "XDR") {
					continue;
				}
				$countryCode = strtolower(substr($currency["CURRENCY"], 0, -1));
				$flagUrl = self::FLAGS_API_URL. $countryCode . self::FLAGS_API_EXTENSION;
				$this->arResult["CURRENCIES"][$key]["FLAG_URL"] = $flagUrl;
			}
		}
	}

	private function getResult(): void
	{
		$this->arResult["FIRST_CUR_INPUT_ID"] = "cur_" . md5($this->randString());
		$this->arResult["SECOND_CUR_INPUT_ID"] = "cur_" . md5($this->randString());
		$this->arResult["SUBMIT_BUTTON_ID"] = "sub_" . md5($this->randString());
		$this->arResult["CURRENCIES"] = $this->getCurrencies();
		$this->getFlags();
	}
}