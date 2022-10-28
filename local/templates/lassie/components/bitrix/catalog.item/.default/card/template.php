<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $item
 * @var array $actualItem
 * @var array $minOffer
 * @var array $itemIds
 * @var array $price
 * @var array $measureRatio
 * @var bool $haveOffers
 * @var bool $showSubscribe
 * @var array $morePhoto
 * @var bool $showSlider
 * @var bool $itemHasDetailUrl
 * @var string $imgTitle
 * @var string $productTitle
 * @var string $buttonSizeClass
 * @var string $discountPositionClass
 * @var string $labelPositionClass
 * @var CatalogSectionComponent $component
 */

?>

<article class="good">
    <div class="good__content">
    <a href="<?=$item['DETAIL_PAGE_URL']?>" class="good__link">
        <img src="<?=$item['PREVIEW_PICTURE']['SRC']?>" alt="Товар" class="good__img" title="">
		<? if (isset($item["PROPERTIES"]["FLAG"])):?>
            <span class="flag flag_type_<?=$item["PROPERTIES"]["FLAG"]["VALUE"]?>">
                <?=$item["PROPERTIES"]["FLAG"]["VALUE"]?>
            </span>
		<? endif;?>
    </a>
        <h4 class="good__name"><?=$productTitle?></h4>
        <div class="good__price-wrapper" data-entity="price-block">
			<? $spanClass = "good__price";
			if ($arParams['SHOW_OLD_PRICE'] === 'Y' && $price['RATIO_PRICE'] < $price['RATIO_BASE_PRICE']) {
				$spanClass .= " good__price_new";
			}
			?>
            <span class="<?=$spanClass?>" id="<?=$itemIds['PRICE']?>">
                            <?
							if (!empty($price)) {
								if ($arParams['PRODUCT_DISPLAY_MODE'] === 'N' && $haveOffers) {
									echo Loc::getMessage(
										'CT_BCI_TPL_MESS_PRICE_SIMPLE_MODE',
										array(
											'#PRICE#' => $price['PRINT_RATIO_PRICE'],
											'#VALUE#' => $measureRatio,
											'#UNIT#' => $minOffer['ITEM_MEASURE']['TITLE']
										)
									);
								}
								else {
									echo $price['PRINT_RATIO_PRICE'];
								}
							}
							?>
                            </span>
			<?
			if ($arParams['SHOW_OLD_PRICE'] === 'Y')
			{
				?>
                <span class="good__price good__price_old" id="<?=$itemIds['PRICE_OLD']?>"
                            <?=($price['RATIO_PRICE'] >= $price['RATIO_BASE_PRICE'] ? 'style="display: none;"' : '')?>
                            >
								<?=$price['PRINT_RATIO_BASE_PRICE']?>
							</span>
				<?
			}
			if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y')
			{
				$percentLabel = "Скидка {$price['PERCENT']}%"
				?>
                <span class="good__discount" id="<?=$itemIds['DSC_PERC']?>"
                            <?=($price['PERCENT'] > 0 ? '' : 'style="display: none;"')?>>
                                <?=$percentLabel?>
                            </span>
				<?
			}
			?>
        </div>
    </div>
    <div class="good__hover">
		<?
		if (!$haveOffers)
		{
		?>
				<? if (isset($item["PRODUCT_PROPERTIES"]["SIZE"])):?>
                <div id="<?=$itemIds['BASKET_PROP_DIV']?>">
                <div class="good__order-row">
                    <label class="good__order-label">Выберите размер</label>
					<? foreach ($item["PRODUCT_PROPERTIES"]["SIZE"]["VALUES"] as $index=>$size):
						$checked = $index === $item["PRODUCT_PROPERTIES"]["SIZE"]['SELECTED'] ? 'checked' : '';
						$id = "good{$item["ID"]}-size$index" ?>
                        <div class="checkbox-tile">
                            <input id="<?=$id?>" name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?="SIZE"?>]"
                                   type="radio" value="<?=$index?>" <?=$checked?> required class="checkbox-tile__elem">
                            <label for="<?=$id?>" class="checkbox-tile__label"><?=$size?></label>
                        </div>
					<? endforeach;?>
                </div>
                </div>
                <? endif;?>
		<?
		}

		?>
		<?if (!$haveOffers):
			if ($actualItem['CAN_BUY'] && $arParams['USE_PRODUCT_QUANTITY']):?>
                <div class="good__order-row" data-entity="quantity-block">
                    <label for="<?=$itemIds['QUANTITY']?>?>" class="good__order-label">Количество</label>
                    <div class="input-number">
                        <input id="<?=$itemIds['QUANTITY']?>"  name="<?=$arParams['PRODUCT_QUANTITY_VARIABLE']?>"
                               value="<?=$measureRatio?>" type="number" required class="input-number__elem">
                        <div class="input-number__counter">
                            <span id="<?=$itemIds['QUANTITY_UP']?>" class="input-number__counter-spin input-number__counter-spin_more">Больше</span>
                            <span id="<?=$itemIds['QUANTITY_DOWN']?>" class="input-number__counter-spin input-number__counter-spin_less">Меньше</span>
                        </div>
                    </div>
                </div>
			<?endif;
		endif;
		?>
		<?
		if (!$haveOffers)
		{
			if ($actualItem['CAN_BUY'])
			{
				?>
                <div class="product-item-button-container" id="<?=$itemIds['BASKET_ACTIONS']?>">
                    <button id="<?=$itemIds['BUY_LINK']?>" class="btn btn-link"
                            href="javascript:void(0)" rel="nofollow">
						<?=($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])?>
                    </button>
                </div>
				<?
			}
			else
			{
				?>
                <div class="product-item-button-container">
                    <a class="btn btn-link <?=$buttonSizeClass?>"
                       id="<?=$itemIds['NOT_AVAILABLE_MESS']?>" href="javascript:void(0)" rel="nofollow">
						<?=$arParams['MESS_NOT_AVAILABLE']?>
                    </a>
                </div>
				<?
			}
		}
		?>
    </div>
</article>