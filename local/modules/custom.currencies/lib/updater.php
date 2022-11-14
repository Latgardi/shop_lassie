<?php
namespace Custom\Currencies;

use Custom\Currencies\CurrencyTable;

class Updater
{
	private const API_URL = "https://www.nbrb.by/api/exrates/rates?periodicity=0";
	private $dbHelper;

	public function __construct()
	{
		$this->dbHelper = new DbHelper();
	}

	public function updateCurrencies(): void
	{
		$currencyArray = $this->getCurrencyArray();
		$this->dbHelper->update($currencyArray);
	}

	private function getCurrencyArray()
	{
		$data = file_get_contents(self::API_URL);
		return json_decode($data, true);
	}
}