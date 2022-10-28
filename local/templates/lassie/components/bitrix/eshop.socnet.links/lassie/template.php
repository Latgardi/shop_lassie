<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
	die();

$this->setFrameMode(true);

if (is_array($arResult["SOCSERV"]) && !empty($arResult["SOCSERV"])):?>
<h3 class="footer__title">Социальные сети</h3>
<ul class="footer__socials socials">
			<?foreach($arResult["SOCSERV"] as $socserv):?>
			<li class="socials__item">
				<a
					class="socials__name socials__name_<?=htmlspecialcharsbx($socserv["CLASS"])?>"
					target="_blank"
					href="<?=htmlspecialcharsbx($socserv["LINK"])?>"
				>
                    <span class="<?=htmlspecialcharsbx($socserv["ICON_CLASS"])?>"></span>
                </a>
			</li>
			<?endforeach?>
		</ul>
    <p class="footer__text">Следи за новостями и акциями
        <br>в социальных сетях. Будь первым!</p>
<? endif;?>

