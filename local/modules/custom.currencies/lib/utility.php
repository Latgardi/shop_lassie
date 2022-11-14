<?php

namespace Custom\Currencies;

use Bitrix\Main\Type\DateTime;

class Utility
{
	public function calculateRate(float $rate, int $scale): float
	{
		return $rate / $scale;
	}

	public function getDate(string $date): DateTime
	{
		$format = "Y-m-d H:i:s";
		$replaceableSym = "T";

		return new DateTime(str_replace($replaceableSym, " ", $date), $format);
	}
}