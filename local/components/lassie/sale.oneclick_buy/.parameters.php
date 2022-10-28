<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$arComponentParameters = array(
	"GROUPS" => array(),
	"PARAMETERS" => array(
		"BUTTON_LABEL" => array(
			"PARENT" => "BASE",
			"NAME" => "Button label",
			"TYPE" => "STRING"
		),
		"ITEM_ID" => array(
			"PARENT" => "BASE",
			"NAME" => "Item ID",
			"TYPE" => "INT",
		),
		"BASKET_MODE" => array(
			"PARENT" => "BASE",
			"NAME" => "Basket mode",
			"TYPE" => "CHECKBOX",
			"DEFAULT" => "N",
		),
		"PRODUCT_PROPS_VARIABLE" => array(
			"NAME" => "Basket Prop Div",
			"TYPE" => "STRING",
		),
		"BASKET_PROP_DIV" => array(
			"NAME" => "Basket Prop Div"
		),
		"PRODUCT_PROPERTIES" => array(
			"NAME" => "Product Properties",
		),
		"QUANTITY_ID" => array(
			"NAME" => "Quantity ID",
		)

	),
);