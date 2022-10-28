<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
$curPage = $APPLICATION->GetCurPage(true);
if ($curPage != SITE_DIR."index.php"):
?>
</div>
<?endif;?>
</main>
		<footer class="footer">
			<div class="container footer__container">
				<div class="footer__col">
					<?$APPLICATION->IncludeComponent(
						"bitrix:menu",
						"lassie_bottom",
						array(
							"ALLOW_MULTI_SELECT" => "N",
							"DELAY" => "N",
							"MAX_LEVEL" => "1",
							"MENU_CACHE_GET_VARS" => array(
							),
							"MENU_CACHE_TIME" => "3600",
							"MENU_CACHE_TYPE" => "N",
							"ROOT_MENU_TYPE" => "goods",
							"USE_EXT" => "N",
							"NAME" => "Покупки"
						),
						false
					);?>
				</div>
				<div class="footer__col">
					<?$APPLICATION->IncludeComponent(
						"bitrix:menu",
						"lassie_bottom",
						array(
							"ALLOW_MULTI_SELECT" => "N",
							"DELAY" => "N",
							"MAX_LEVEL" => "1",
							"MENU_CACHE_GET_VARS" => array(
							),
							"MENU_CACHE_TIME" => "3600",
							"MENU_CACHE_TYPE" => "N",
							"ROOT_MENU_TYPE" => "lassie",
							"USE_EXT" => "N",
							"NAME" => "Lassie"
						),
						false
					);?>
				</div>
				<div class="footer__col">
					<?$APPLICATION->IncludeComponent(
						"bitrix:menu",
						"lassie_bottom",
						array(
							"ALLOW_MULTI_SELECT" => "N",
							"DELAY" => "N",
							"MAX_LEVEL" => "1",
							"MENU_CACHE_GET_VARS" => array(
							),
							"MENU_CACHE_TIME" => "3600",
							"MENU_CACHE_TYPE" => "N",
							"ROOT_MENU_TYPE" => "lassie_club",
							"USE_EXT" => "N",
							"NAME" => "Lassie клуб"
						),
						false
					);?>
				</div>
				<div class="footer__col">
					<?$APPLICATION->IncludeComponent(
						"bitrix:eshop.socnet.links",
						"lassie",
						array(
							"FACEBOOK" => "sac",
							"GOOGLE" => "",
							"INSTAGRAM" => "",
							"TWITTER" => "asa",
							"VKONTAKTE" => "asa",
							"COMPONENT_TEMPLATE" => "lassie",
							"ODNOKLASSNIKI" => "asa"
						),
						false
					);?>
                </div>
			</div>
			<div class="footer__bottom">
				<div class="container footer__container">
					<div class="footer__bottom-col">
						<p class="footer__text">Официальный интернет-магазин Lassie® в России</p>
					</div>
					<div class="footer__bottom-col">
						<div class="footer__text-group"><a href="tel:+78003331204" class="footer__text">8 (800) 333-12-04 </a><span class="footer__text">(горячая линия)</span>
						</div>
						<div class="footer__text-group"><a href="tel:+74952150435" class="footer__text">8 (495) 215-04-35 </a><span class="footer__text">(ежедневно с 9:00 до 24:00)</span>
						</div><a href="mailto:order@lassieshop.ru" class="footer__text footer__text_block">order@lassieshop.ru</a>
					</div>
				</div>
			</div>
		</footer>
	</body>

</html>