<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
CJSCore::Init(["ajax", "ui.entity-selector"]);
\Bitrix\Main\UI\Extension::load(["ui.buttons.icons", "ui.icons.service"]);
?>
<div name="currency-converter">
    <div class="ui-ctl ui-ctl-textbox cur-inline-block">
        <input id="<?=$arResult["FIRST_CUR_INPUT_ID"]?>" inputmode="decimal"
               class="ui-ctl-element">
    </div>
    <div id="first-dropdown" class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown cur-inline-block">
        <div class="ui-ctl-after ui-ctl-icon-angle"></div>
    </div>
    <div class="cur-conversion-sym">
        <p>&#x2B82;</p>
    </div>
    <div class="ui-ctl ui-ctl-textbox cur-inline-block">
        <input id="<?=$arResult["SECOND_CUR_INPUT_ID"]?>" value="0" inputmode="decimal" class="ui-ctl-element">
    </div>
    <div id="second-dropdown" class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown cur-inline-block">
        <div class="ui-ctl-after ui-ctl-icon-angle"></div>
    </div>
    <button id="<?=$arResult["SUBMIT_BUTTON_ID"]?>" class="ui-btn ui-btn-primary ui-btn-icon-business">Рассчитать</button>
</div>
<script>
    const arResult = <?=CUtil::PhpToJSObject($arResult)?>;
</script>