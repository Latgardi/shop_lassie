<?php
namespace Custom\Currencies;

use Bitrix\Main\Loader;

class Agents
{
	public static function currencyUpdaterAgent()
	{
		Loader::includeModule("custom.currencies");
		$updater = new Updater();
		$updater->updateCurrencies();
		return "currencyUpdaterAgent();";
	}
}