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

<form class="header__search search" action="<?echo $arResult["FORM_ACTION"]?>">
	<input name="q" type="search" placeholder="Поиск по каталогу" class="search__input">
	<button type="submit" class="search__btn" >
        <span class="search__btn-icon icon-search"></span>
	</button>
</form>
