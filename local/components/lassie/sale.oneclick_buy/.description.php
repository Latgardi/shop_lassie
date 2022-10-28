<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Localization\Loc;

$arComponentDescription = [
	"NAME" => "One Click Buy",
	"DESCRIPTION" => "oneclickbuy",
	"COMPLEX" => "N",
	"PATH" => [
		"ID" => "lassie",
		"CHILD" => array(
			"ID" => "oneclick_buy",
			"NAME" => "OneClickBuy"
		)
	],
];
?>