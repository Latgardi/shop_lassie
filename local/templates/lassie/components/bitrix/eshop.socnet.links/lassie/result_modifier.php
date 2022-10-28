<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if (isset($arResult["SOCSERV"]["FACEBOOK"])) {
	$arResult["SOCSERV"]["FACEBOOK"]["ICON_CLASS"] = "icon-facebook";
}
if (isset($arResult["SOCSERV"]["TWITTER"])) {
	$arResult["SOCSERV"]["TWITTER"]["ICON_CLASS"] = "icon-twitter-bird";
}
if (isset($arResult["SOCSERV"]["VKONTAKTE"])) {
	$arResult["SOCSERV"]["VKONTAKTE"]["ICON_CLASS"] = "icon-vkontakte";
}


if (isset($arParams["ODNOKLASSNIKI"]) && !empty($arParams["ODNOKLASSNIKI"]))
	$arResult["SOCSERV"]["ODNOKLASSNIKI"] = array(
		"LINK" => $arParams["ODNOKLASSNIKI"],
		"CLASS" => "ok",
		"NAME" => "Odnoklassniki",
		"ICON_CLASS" => "icon-odnoklassniki"
	);
