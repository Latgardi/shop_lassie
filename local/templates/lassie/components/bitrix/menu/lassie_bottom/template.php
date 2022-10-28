<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

/**
 * @var CBitrixComponentTemplate $this
 * @var CBitrixMenuComponent $component
 * @var array $arParams
 * @var array $arResult
 */

if (!empty($arResult)):?>
<h3 class="footer__title"><?=$arParams["NAME"]?></h3>
<ul class="list">
    <? foreach ($arResult as $item): ?>
    <li class="list__item">
        <a href="<?=$item['LINK']?>" class="footer__text"><?=$item['TEXT']?></a>
    </li>
    <? endforeach;?>
</ul>
<? endif;?>