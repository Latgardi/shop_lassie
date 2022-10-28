<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
$asset = Bitrix\Main\Page\Asset::getInstance();
$curPage = $APPLICATION->GetCurPage(true);?>
<!DOCTYPE html>
<html lang="ru">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="imagetoolbar" content="no">
		<meta name="msthemecompatible" content="no">
		<meta name="cleartype" content="on">
		<meta name="HandheldFriendly" content="True">
		<meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="address=no">
		<meta name="google" value="notranslate">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<meta name="application-name" content="">
		<meta name="msapplication-tooltip" content="">
		<title><? $APPLICATION->ShowTitle(); ?></title>
        <!--<script type="text/javascript" src="/local/templates/lassie/js/app.min.js"></script>-->
        <?
        $asset->addCss(SITE_TEMPLATE_PATH . "/css/styles.css");
        $asset->addCss("https://fonts.googleapis.com/css?family=Roboto:400,500,700&amp;subset=latin,cyrillic");
		$asset->addJs(SITE_TEMPLATE_PATH . "/js/app.js");
        $APPLICATION->ShowHead();
		?>

	</head>

	<body>
	<div id="panel">
		<? $APPLICATION->ShowPanel(); ?>
	</div>
		<header class="header">
			<div class="header__top">
				<div class="container header__container header__container_top">
					<?/*$APPLICATION->IncludeComponent("bitrix:sender.subscribe", "lassie", array(
						"SET_TITLE" => "N",
						"AJAX_MODE" => "Y",
					));*/?>
					<div class="header__col header__col_top-left"><span class="header__icon icon-mail"></span><a href="javascript:void(0);" class="link">Подписаться</a>
					</div>
					<div class="header__col header__col_top-right">
						<ul class="header__top-menu menu">
							<li class="menu__item"><a href="javascript:void(0);" class="link menu__name">О компании</a>
							</li>
							<li class="menu__item"><a href="javascript:void(0);" class="link menu__name">Оплата</a>
							</li>
							<li class="menu__item"><a href="javascript:void(0);" class="link menu__name">Доставка</a>
							</li>
						</ul>
						<div>
							<?$APPLICATION->IncludeComponent(
	"bitrix:search.title", 
	".default", 
	array(
		"NUM_CATEGORIES" => "1",
		"TOP_COUNT" => "5",
		"CHECK_DATES" => "N",
		"SHOW_OTHERS" => "N",
		"PAGE" => SITE_DIR."search/",
		"CATEGORY_0_TITLE" => GetMessage("SEARCH_GOODS"),
		"CATEGORY_0" => array(
			0 => "iblock_catalog",
		),
		"CATEGORY_0_iblock_catalog" => array(
			0 => "all",
		),
		"CATEGORY_OTHERS_TITLE" => GetMessage("SEARCH_OTHER"),
		"SHOW_INPUT" => "Y",
		"INPUT_ID" => "title-search-input",
		"CONTAINER_ID" => "search",
		"PRICE_CODE" => array(
			0 => "BASE",
		),
		"SHOW_PREVIEW" => "Y",
		"PREVIEW_WIDTH" => "75",
		"PREVIEW_HEIGHT" => "75",
		"CONVERT_CURRENCY" => "Y",
		"COMPONENT_TEMPLATE" => ".default",
		"ORDER" => "date",
		"USE_LANGUAGE_GUESS" => "Y",
		"PRICE_VAT_INCLUDE" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"CURRENCY_ID" => "RUB"
	),
	false
);?>
						</div>
					</div>
				</div>
			</div>
			<div class="header__middle">
				<div class="container header__container header__container_middle">
					<div class="header__col header__col_logo">
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/company_logo.php"),
							false
						);?>
					</div>
					<div class="header__contacts"><span class="header__icon icon-comment"></span>
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/company_phone_day.php"
							),
							false
						);?>
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/company_phone_day_night.php"
							),
							false
						);?>
						<div class="header__col header__col_contacts"><a href="javascript:void(0);" class="link">Контактная информация</a>
						</div>
					</div>
                    <?$APPLICATION->IncludeComponent(
	"bitrix:sale.basket.basket.line", 
	".default", 
	array(
		"PATH_TO_BASKET" => SITE_DIR."personal/cart/",
		"PATH_TO_PERSONAL" => SITE_DIR."personal/",
		"SHOW_PERSONAL_LINK" => "Y",
		"SHOW_NUM_PRODUCTS" => "Y",
		"SHOW_TOTAL_PRICE" => "Y",
		"SHOW_PRODUCTS" => "N",
		"POSITION_FIXED" => "N",
		"SHOW_AUTHOR" => "N",
		"PATH_TO_REGISTER" => SITE_DIR."login/",
		"PATH_TO_PROFILE" => SITE_DIR."personal/",
		"COMPONENT_TEMPLATE" => ".default",
		"PATH_TO_ORDER" => SITE_DIR."personal/order/make/",
		"SHOW_EMPTY_VALUES" => "Y",
		"PATH_TO_AUTHORIZE" => "",
		"SHOW_REGISTRATION" => "N",
		"HIDE_ON_BASKET_PAGES" => "N"
	),
	false
);?>
						</div>
					</div>
			<div class="header__bottom">
					<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"lassie_left",
	array(
		"ROOT_MENU_TYPE" => "left",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_TIME" => "36000000",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_THEME" => "site",
		"CACHE_SELECTED_ITEMS" => "N",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MAX_LEVEL" => "3",
		"CHILD_MENU_TYPE" => "left",
		"USE_EXT" => "Y",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "N",
		"COMPONENT_TEMPLATE" => "lassie"
	),
	false
);?>
			</div>
		</header>
<main class="content <?=$APPLICATION->ShowProperty("main", "catalog-page")?>">
<?if ($curPage != SITE_DIR."index.php"):?>
      <div class="container">
			<?$APPLICATION->IncludeComponent(
				"bitrix:breadcrumb",
				"universal",
				array(
					"START_FROM" => "0",
					"PATH" => "",
					"SITE_ID" => "-"
				),
				false,
				Array('HIDE_ICONS' => 'Y')
			);?>
    <h1 id="pagetitle"><?$APPLICATION->ShowTitle(false);?></h1>
	<? endif;?>