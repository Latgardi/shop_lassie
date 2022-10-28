<?
if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();
/**
 * Bitrix vars
 *
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @global CMain $APPLICATION
 * @global CUser $USER
 */
?>

<div class="mfeedback">
<?if(!empty($arResult["ERROR_MESSAGE"]))
{
	foreach($arResult["ERROR_MESSAGE"] as $v)
		ShowError($v);
}
if($arResult["OK_MESSAGE"] <> '')
{
	?><div class="mf-ok-text"><?=$arResult["OK_MESSAGE"]?></div><?
}
?>
    <form method="post" id="review_form" action="<?=POST_FORM_ACTION_URI?>" class="form js-form-validate">
		<?=bitrix_sessid_post()?>
        <div class="form__row">
            <div class="form__col form__col_width_130">
                <label class="form__label">Оцените товар</label>
            </div>
            <div class="form__col">
                <div class="raiting">
                    <input id="raiting1-item5" name="Review[raiting]" type="radio" value="5" required class="raiting__check">
                    <label for="raiting1-item5" class="raiting__star raiting__star_choose">5 звезда</label>
                    <input id="raiting1-item4" name="Review[raiting]" type="radio" value="4" required class="raiting__check">
                    <label for="raiting1-item4" class="raiting__star raiting__star_choose">4 звезды</label>
                    <input id="raiting1-item3" name="Review[raiting]" type="radio" value="3" required class="raiting__check">
                    <label for="raiting1-item3" class="raiting__star raiting__star_choose">3 звезды</label>
                    <input id="raiting1-item2" name="Review[raiting]" type="radio" value="2" required class="raiting__check">
                    <label for="raiting1-item2" class="raiting__star raiting__star_choose">2 звезды</label>
                    <input id="raiting1-item1" name="Review[raiting]" type="radio" value="1" required class="raiting__check">
                    <label for="raiting1-item1" class="raiting__star raiting__star_choose">1 звёзд</label>
                </div>
            </div>
        </div>
        <div class="form__row">
            <div class="form__col form__col_width_130">
                <label for="review-name" class="form__label">Ваше имя</label>
            </div>
            <div class="form__col form__col_width_260">
                <input id="review-name" name="Review[name]" required class="input" type="text" value="<?=$arResult["AUTHOR_NAME"]?>">
            </div>
        </div>
        <div class="form__row">
            <div class="form__col form__col_width_130">
                <label for="review-email" class="form__label">Электронная почта</label>
            </div>
            <div class="form__col form__col_width_260">
                <input id="review-email" name="Review[email]" type="email" required class="input" value="<?=$arResult["AUTHOR_EMAIL"]?>">
            </div>
        </div>
        <div class="form__row">
            <div class="form__col form__col_width_130">
                <label for="review-message" class="form__label">Ваше сообщение</label>
            </div>
            <div class="form__col form__col_width_400">
                <textarea id="review-message" name="Review[message]" required class="textarea"><?=$arResult["MESSAGE"]?></textarea>
            </div>
        </div>
        <div class="form__row review-form__antispam-row">
            <div class="form__col form__col_width_130">
                <label for="review-spam" class="form__label">Защита от спама</label>
            </div>
            <div class="form__col form__col_width_130">
                <input type="hidden" id="captcha_sid" name="captcha_sid" value="<?=$arResult["capCode"]?>">
                <input id="review-spam" name="captcha_word" required class="input" type="text">
                <a id="refresh_captcha" href="javascript:void(0);" class="link review-form__refresh-captcha text">Обновить картинку</a>
            </div>
            <div class="form__col form__col_width_130">
                <img id="captcha_img" src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["capCode"]?>" alt="защита от спама">
            </div>
        </div>
       <div class="form__row review-form__btn-row">
            <div class="form__col form__col_width_280">
                <input type="hidden" name="PARAMS_HASH" value="<?=$arResult["PARAMS_HASH"]?>">
                <button type="submit" class="btn review-form__submit">Оставить отзыв</button>
            </div>
            <div class="form__col review-form__reset-col">
                <button type="reset" class="form__reset link text">Очистить форму</button>
            </div>
        </div>
    </form>
    <script>
        let form = document.getElementById("review_form")
        form.addEventListener("submit", function (event) {

        })

        document.getElementById("refresh_captcha").onclick = function () {
            BX.ajax.get("/include/refresh_captcha.php", function (data) {
                document.getElementById("captcha_img")
                    .setAttribute("src", "/bitrix/tools/captcha.php?captcha_sid=" + data)
                document.getElementById("captcha_sid")
                    .setAttribute("value", data)
            })
        }
    </script>
