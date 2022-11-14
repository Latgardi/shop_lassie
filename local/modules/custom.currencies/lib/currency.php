<?php
namespace Custom\Currencies;

use Bitrix\Main\Entity\DataManager;
use Bitrix\Main\Entity\DatetimeField;
use Bitrix\Main\Entity\FloatField;
use Bitrix\Main\Entity\IntegerField;
use Bitrix\Main\Entity\StringField;

class CurrencyTable extends DataManager
{
	public static function getTableName(): string
	{
		return "hr_rates";
	}

	public static function getMap(): array
	{
		return array(
			new IntegerField("ID", array(
				"primary" => true,
			)),
			new StringField("CURRENCY", array(
				"required" => true,
			)),
			new FloatField("RATE", array(
				"required" => true,
			)),
			new DatetimeField("DATE", array(
				"required" => true,
			))
		);
	}

	public static function getCollectionClass()
	{
		return parent::getCollectionClass(); // TODO: Change the autogenerated stub
	}
}