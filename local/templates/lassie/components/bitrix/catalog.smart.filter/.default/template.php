<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);?>
		<form name="<?echo $arResult["FILTER_NAME"]."_form"?>" action="<?echo $arResult["FORM_ACTION"]?>" method="get" class="catalog-page__filter catalog__filter form">
            <fieldset class="form__fieldset">
                <legend class="form__title form__title_align_center">Фильтр</legend>
			<?foreach($arResult["HIDDEN"] as $arItem):?>
			<input type="hidden" name="<?echo $arItem["CONTROL_NAME"]?>" id="<?echo $arItem["CONTROL_ID"]?>" value="<?echo $arItem["HTML_VALUE"]?>" />
			<?endforeach;?>
				<?
				//not prices
				foreach($arResult["ITEMS"] as $key=>$arItem):
					if (empty($arItem["VALUES"]) || isset($arItem["PRICE"])) {
						continue;
					}

					if ($arItem["DISPLAY_TYPE"] == "A"
						&& ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0)) {
						continue;
					}
							$arCur = current($arItem["VALUES"]);
                    ?>
                <div class="form__row form__row_direction_column">
                    <?
                        $isSize = $arItem["CODE"] === "SIZE";
                        $checkboxClass = $isSize ? "checkbox-tile checkbox-tile_size_big" : "checkbox";
                        $labelClass = $isSize ? "checkbox-tile__label" : "checkbox__label form__label";
                        $inputClass = $isSize ? "checkbox-tile__elem" : "checkbox__elem";
                    ?>
                    <label class="form__label"><?=$arItem["NAME"]?></label>
                    <?if ($isSize):?>
                    <div class="form__content-group">
                        <?endif;?>
										<?foreach($arItem["VALUES"] as $val => $ar):?>
											<div class="<?=$checkboxClass?>">
                                                <input
                                                        id="<?=$ar["CONTROL_ID"]?>"
                                                        type="checkbox"
                                                        value="<?=$ar["HTML_VALUE"] ?>"
                                                        name="<?=$ar["CONTROL_NAME"] ?>"
                                                        class="<?=$inputClass?>"
													    <?=$ar["CHECKED"]? 'checked="checked"': '' ?>
                                                        onclick="smartFilter.click(this)"
                                                >
                                                <label for="<?=$ar["CONTROL_ID"]?>" class="<?=$labelClass?>"><?=$ar["VALUE"];?></label>
											</div>
										<?endforeach;
                        if ($isSize):?>
                    </div>
                            <?endif;?>
                </div>
                <? endforeach;?>
				<?
				//prices
                foreach($arResult["ITEMS"] as $key=>$arItem)
				{
					$key = $arItem["ENCODED_ID"];
					if(isset($arItem["PRICE"])):
						if ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0)
							continue;

						$step_num = 4;
						$step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / $step_num;
						$prices = array();
						if (Bitrix\Main\Loader::includeModule("currency"))
						{
							for ($i = 0; $i < $step_num; $i++)
							{
								$prices[$i] = CCurrencyLang::CurrencyFormat($arItem["VALUES"]["MIN"]["VALUE"] + $step*$i, $arItem["VALUES"]["MIN"]["CURRENCY"], false);
							}
							$prices[$step_num] = CCurrencyLang::CurrencyFormat($arItem["VALUES"]["MAX"]["VALUE"], $arItem["VALUES"]["MAX"]["CURRENCY"], false);
						}
						else
						{
							$precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
							for ($i = 0; $i < $step_num; $i++)
							{
								$prices[$i] = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step*$i, $precision, ".", "");
							}
							$prices[$step_num] = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
						}

						?>
                <div class="form__row form__row_direction_column">
                    <label class="form__label"><?=$arItem["NAME"]?></label>
                    <div class="range-slider">
                        <input class="range-slider__elem" type="text">
                        <div class="range-slider__output-row">
                            <input
                                    class="input range-slider__output"
                                    type="text"
                                    name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>"
                                    id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
                                    value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>"
                                    onkeyup="smartFilter.keyup(this)"
                            />
                            <input
                                    class="input range-slider__output"
                                    type="text"
                                    name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>"
                                    id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
                                    value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>"
                                    onkeyup="smartFilter.keyup(this)"
                            />
                        </div>
                    </div>
                    </div>
				<?endif;
				}
				?>
			<!--//row-->
                <button type="submit" class="btn" id="set_filter">
                    <input
                            class="btn"
                            type="submit"
                            id="set_filter"
                            name="set_filter"
                            value="<?=GetMessage("CT_BCSF_SET_FILTER")?>"
                    />
                </button>

            </fieldset>
		</form>
<script type="text/javascript">
	var smartFilter = new JCSmartFilter('<?=CUtil::JSEscape($arResult["FORM_ACTION"])?>', '<?=CUtil::JSEscape($arParams["FILTER_VIEW_MODE"])?>', <?=CUtil::PhpToJSObject($arResult["JS_FILTER_PARAMS"])?>);
</script>