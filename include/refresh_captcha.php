<?php
//if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include.php");
global $APPLICATION;
echo $APPLICATION->CaptchaGetCode();
