<?php
use Bitrix\Main\Localization\Loc;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
CJSCore::Init(["ajax", "ui.dialogs.messagebox"]);
?>

<button type="submit" id ="<?=$arResult["BUY_BUTTON_ID"]?>" class="btn form__btn">
	<?=$arParams["BUTTON_LABEL"] ?? Loc::getMessage("ONECLICK_BUY_BUTTON_LABEL")?>
</button>

<script>
    const arParams = <?=CUtil::PhpToJSObject($arResult["JS_PARAMS"])?>;
    BX.message({
        ONECLICK_BUY_OK_CAPTION: "<?=Loc::getMessage("ONECLICK_BUY_OK_CAPTION")?>",
        ONECLICK_BUY_INPUT_NUMBER: "<?=Loc::getMessage("ONECLICK_BUY_INPUT_NUMBER")?>",
        ONECLICK_BUY_CANCEL_CAPTION: "<?=Loc::getMessage("ONECLICK_BUY_CANCEL_CAPTION")?>",
        ONECLICK_BUY_THANKS_MESSAGE: "<?=Loc::getMessage("ONECLICK_BUY_THANKS_MESSAGE")?>",
        ONECLICK_BUY_NO_PROPERTY_MESSAGE: "<?=Loc::getMessage("ONECLICK_BUY_NO_PROPERTY_MESSAGE")?>"
    })
</script>
