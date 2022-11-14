<?php
namespace Custom\Currencies;

use Bitrix\Main\ORM\Objectify\EntityObject;
use Bitrix\Main\Type\DateTime;
use Custom\Currencies\CurrencyTable;

class DbHelper
{
	private Utility $utility;
	private string $currencyCollection;
	private string $currency;

	public function __construct()
	{
		$this->currencyCollection = CurrencyTable::getCollectionClass();
		$this->currency = CurrencyTable::getObjectClass();
		$this->utility = new Utility();
	}

	public function update(array $currencyArray): void
	{
		$this->isEmptyTable() ? $this->fillTable($currencyArray) : $this->updateTable($currencyArray);
	}

	private function fillTable(array $currencyArray): void
	{
		if (!empty($currencyArray)) {
			$currencies = new $this->currencyCollection();
			$currencies[] = $this->getBynCurrency();
			foreach ($currencyArray as $currencyFields) {
				$currency = new $this->currency();
				$currency->setId($currencyFields["Cur_ID"]);
				$currency->setCurrency($currencyFields["Cur_Abbreviation"]);
				$currency->setRate($this->utility->calculateRate(
					$currencyFields["Cur_OfficialRate"],
					$currencyFields["Cur_Scale"]
				));
				$currency->setDate($this->utility->getDate($currencyFields["Date"]));
				$currencies[] = $currency;
			}
			$currencies->save();
		}
	}

	private function updateTable(array $currencyArray): void
	{
		if (!empty($currencyArray)) {
			$currencies = CurrencyTable::getList()->fetchCollection();
			$update = false;

			foreach ($currencyArray as $currencyFields) {
				$currency = $currencies->getByPrimary($currencyFields["Cur_ID"]);
				if ($currency->getDate() == $this->utility->getDate($currencyFields["Date"])) {
					continue;
				}
				$update = true;

				if (isset($currency)) {
					$currency->setRate($this->utility->calculateRate(
						$currencyFields["Cur_OfficialRate"],
						$currencyFields["Cur_Scale"]
					));
					$currency->setDate($this->utility->getDate($currencyFields["Date"]));
				}
			}
			if ($update) {
				$currencies->save();
			}
		}
	}

	private function getBynCurrency(): EntityObject
	{
		$id = 1;
		$currencyCode = "BYN";
		$currencyRate = 1;

		$currency = new $this->currency();
		$currency->setId($id);
		$currency->setCurrency($currencyCode);
		$currency->setRate($currencyRate);
		$currency->setDate(new DateTime());

		return $currency;
	}

	private function isEmptyTable(): bool
	{
		return CurrencyTable::getCount() === 0;
	}

}