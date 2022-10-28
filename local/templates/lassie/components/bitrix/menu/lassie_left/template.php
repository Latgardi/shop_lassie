<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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

if (empty($arResult["ALL_ITEMS"]))
	return;

$menuBlockId = "catalog_menu_".$this->randString();
?>
<div class="container">
    <nav class="header__nav navigation">
        <ul class="header__menu menu menu_width_full">
<? foreach($arResult["MENU_STRUCTURE"] as $itemID => $arColumns):?>
            <li class="menu__item">
                <a class="menu__name" href="<?=$arResult["ALL_ITEMS"][$itemID]["LINK"]?>">
					<?=htmlspecialcharsbx($arResult["ALL_ITEMS"][$itemID]["TEXT"], ENT_COMPAT, false)?>
                </a>
                <? if (is_array($arColumns) && count($arColumns) > 0): ?>
                <ul class="dropdown-menu">
                    <li class="dropdown-menu__content">
                        <div class="dropdown-menu__img">
                            <img src="assets/images/header-submenu-1.jpg" alt="девочка">
                        </div>
                        <div class="dropdown-menu__menu-col">
                            <ul class="vertical-menu">
                                <? foreach($arColumns as $key=>$arRow):
								    foreach($arRow as $itemIdLevel_2=>$arLevel_3): ?>
                                <li class="vertical-menu__item">
									<? if (is_array($arLevel_3) && count($arLevel_3) > 0): ?>
                                    <span class="vertical-menu__name"><?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["TEXT"]?></span>
                                    <ul class="vertical-menu__submenu">
										<?foreach($arLevel_3 as $itemIdLevel_3):?>
                                        <li class="vertical-menu__submenu-item">
                                            <a
                                                    href="<?=$arResult["ALL_ITEMS"][$itemIdLevel_3]["LINK"]?>" class="link vertical-menu__submenu-name"
                                            >
												<?=$arResult["ALL_ITEMS"][$itemIdLevel_3]["TEXT"]?>
                                            </a>
                                        <?endforeach;?>
                                    </ul>
                                    <? else: ?>
                                        <a
                                                href="<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["LINK"]?>" class="vertical-menu__name"
                                        >
											<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["TEXT"]?>
                                        </a>
                                    <? endif; ?>
                                </li>
                                <? endforeach;
                                endforeach; ?>
                            </ul>
                        </div>
                    </li>
                </ul>
                <? endif; ?>
            </li>
            <? endforeach; ?>

        </ul>
        <button class="burger-btn header__nav-btn js-nav-btn"><span class="burger-btn__switch">Развернуть меню </span>
        </button>
        <div class="navigation__collapse">
            <ul class="navigation__collapse-menu vertical-menu">
				<? foreach($arResult["MENU_STRUCTURE"] as $itemID => $arColumns):?>
                <li class="navigation__collapse-item vertical-menu__item">
                    <a class="vertical-menu__name"
                       href="<?=$arResult["ALL_ITEMS"][$itemID]["LINK"]?>"
                    >
						<?=htmlspecialcharsbx($arResult["ALL_ITEMS"][$itemID]["TEXT"], ENT_COMPAT, false)?>
                    </a>
                </li>
                <? endforeach;?>
            </ul>
        </div>
    </nav>
</div>