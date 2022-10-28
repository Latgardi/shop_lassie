<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogElementComponent $component
 */

$component = $this->getComponent();
$arParams = $component->applyTemplateModifications();

$images = array();
if (isset($arResult["PROPERTIES"]["IMAGES"])) {
	foreach ($arResult["PROPERTIES"]["IMAGES"]["VALUE"] as $id) {
		$images[] = CFile::GetPath($id);
	}
}
$arResult["IMAGES"] = $images;

