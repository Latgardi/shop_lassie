!(function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw ((j.code = "MODULE_NOT_FOUND"), j);
            }
            var k = (c[g] = { exports: {} });
            b[g][0].call(
                k.exports,
                function (a) {
                    var c = b[g][1][a];
                    return e(c ? c : a);
                },
                k,
                k.exports,
                a,
                b,
                c,
                d
            );
        }
        return c[g].exports;
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
})(
    {
        1: [
            function (a, b, c) {
                "use strict";
                (function () {
                    var a, c, d, e, f, g, h, i, j, k;
                    (c = window.device),
                        (a = {}),
                        (window.device = a),
                        (e = window.document.documentElement),
                        (k = window.navigator.userAgent.toLowerCase()),
                        (a.ios = function () {
                            return a.iphone() || a.ipod() || a.ipad();
                        }),
                        (a.iphone = function () {
                            return !a.windows() && f("iphone");
                        }),
                        (a.ipod = function () {
                            return f("ipod");
                        }),
                        (a.ipad = function () {
                            return f("ipad");
                        }),
                        (a.android = function () {
                            return !a.windows() && f("android");
                        }),
                        (a.androidPhone = function () {
                            return a.android() && f("mobile");
                        }),
                        (a.androidTablet = function () {
                            return a.android() && !f("mobile");
                        }),
                        (a.blackberry = function () {
                            return f("blackberry") || f("bb10") || f("rim");
                        }),
                        (a.blackberryPhone = function () {
                            return a.blackberry() && !f("tablet");
                        }),
                        (a.blackberryTablet = function () {
                            return a.blackberry() && f("tablet");
                        }),
                        (a.windows = function () {
                            return f("windows");
                        }),
                        (a.windowsPhone = function () {
                            return a.windows() && f("phone");
                        }),
                        (a.windowsTablet = function () {
                            return a.windows() && f("touch") && !a.windowsPhone();
                        }),
                        (a.fxos = function () {
                            return (f("(mobile;") || f("(tablet;")) && f("; rv:");
                        }),
                        (a.fxosPhone = function () {
                            return a.fxos() && f("mobile");
                        }),
                        (a.fxosTablet = function () {
                            return a.fxos() && f("tablet");
                        }),
                        (a.meego = function () {
                            return f("meego");
                        }),
                        (a.cordova = function () {
                            return window.cordova && "file:" === location.protocol;
                        }),
                        (a.nodeWebkit = function () {
                            return "object" == typeof window.process;
                        }),
                        (a.mobile = function () {
                            return a.androidPhone() || a.iphone() || a.ipod() || a.windowsPhone() || a.blackberryPhone() || a.fxosPhone() || a.meego();
                        }),
                        (a.tablet = function () {
                            return a.ipad() || a.androidTablet() || a.blackberryTablet() || a.windowsTablet() || a.fxosTablet();
                        }),
                        (a.desktop = function () {
                            return !a.tablet() && !a.mobile();
                        }),
                        (a.television = function () {
                            var a;
                            for (let television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], a = 0; a < television.length; ) {
                                if (f(television[a])) return !0;
                                a++;
                            }
                            return !1;
                        }),
                        (a.portrait = function () {
                            return window.innerHeight / window.innerWidth > 1;
                        }),
                        (a.landscape = function () {
                            return window.innerHeight / window.innerWidth < 1;
                        }),
                        (a.noConflict = function () {
                            return (window.device = c), this;
                        }),
                        (f = function (a) {
                            return -1 !== k.indexOf(a);
                        }),
                        (h = function (a) {
                            var b;
                            return (b = new RegExp(a, "i")), e.className.match(b);
                        }),
                        (d = function (a) {
                            var b = null;
                            h(a) || ((b = e.className.replace(/^\s+|\s+$/g, "")), (e.className = b + " " + a));
                        }),
                        (j = function (a) {
                            h(a) && (e.className = e.className.replace(" " + a, ""));
                        }),
                        a.ios()
                            ? a.ipad()
                                ? d("ios ipad tablet")
                                : a.iphone()
                                    ? d("ios iphone mobile")
                                    : a.ipod() && d("ios ipod mobile")
                            : a.android()
                                ? d(a.androidTablet() ? "android tablet" : "android mobile")
                                : a.blackberry()
                                    ? d(a.blackberryTablet() ? "blackberry tablet" : "blackberry mobile")
                                    : a.windows()
                                        ? d(a.windowsTablet() ? "windows tablet" : a.windowsPhone() ? "windows mobile" : "desktop")
                                        : a.fxos()
                                            ? d(a.fxosTablet() ? "fxos tablet" : "fxos mobile")
                                            : a.meego()
                                                ? d("meego mobile")
                                                : a.nodeWebkit()
                                                    ? d("node-webkit")
                                                    : a.television()
                                                        ? d("television")
                                                        : a.desktop() && d("desktop"),
                    a.cordova() && d("cordova"),
                        (g = function () {
                            a.landscape() ? (j("portrait"), d("landscape")) : (j("landscape"), d("portrait"));
                        }),
                        (i = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize"),
                        window.addEventListener ? window.addEventListener(i, g, !1) : window.attachEvent ? window.attachEvent(i, g) : (window[i] = g),
                        g(),
                        "function" == typeof define && "object" == typeof define.amd && define.amd
                            ? define(function () {
                                return a;
                            })
                            : "undefined" != typeof b && b.exports
                                ? (b.exports = a)
                                : (window.device = a);
                }.call(void 0));
            },
            {},
        ],
        2: [
            function (a, b, c) {
                (function (b) {
                    "use strict";
                    function c(a) {
                        return a && a.__esModule ? a : { default: a };
                    }
                    var d = a("jquery"),
                        e = c(d);
                    (b.jQuery = a("jquery")),
                        a("jquery-validation"),
                        e["default"](function () {
                            jQuery.extend(jQuery.validator.messages, {
                                required: "????????????????????, ?????????????????? ?????? ????????",
                                email:
                                    "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",
                            }),
                                jQuery.validator.addMethod(
                                    "tel",
                                    function (a, b) {
                                        return this.optional(b) || /^[\d\+][\d\(\)\ -]{3,18}\d$/.test(a);
                                    },
                                    "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"
                                ),
                                e["default"](".js-form-validate").validate({
                                    highlight: function (a, b, c) {
                                        e["default"](a).is('[type="checkbox"]') ||
                                        e["default"](a).is('[type="radio"]') ||
                                        (e["default"](a).addClass("invalid").removeClass("valid"),
                                            e["default"](a.form)
                                                .find("label[for=" + a.id + "]")
                                                .removeClass("form__label_valid")
                                                .addClass("form__label_invalid"));
                                    },
                                    unhighlight: function (a, b, c) {
                                        e["default"](a).is('[type="checkbox"]') ||
                                        e["default"](a).is('[type="radio"]') ||
                                        (e["default"](a).removeClass("invalid").addClass("valid"),
                                            e["default"](a.form)
                                                .find("label[for=" + a.id + "]")
                                                .addClass("form__label_valid")
                                                .removeClass("form__label_invalid"));
                                    },
                                    ignore: [],
                                    errorClass: "form__error",
                                    validClass: "form__valid",
                                    wrapper: "div",
                                    errorPlacement: function (a, b) {
                                        b.after(a), a.addClass("form__error-wrapper").append('<span class="form__error-hide"></span>');
                                        var c = a.outerWidth(),
                                            d = a.offset().left,
                                            f = e["default"](window).width();
                                        d + c > f && a.css({ left: 0, top: "100%" });
                                    },
                                    rules: {
                                        "Order[name]": { required: !0 },
                                        "Order[mail]": { required: !0, email: !0 },
                                        "Order[phone]": { required: !0, tel: !0 },
                                        "Order[city]": { required: !0 },
                                        "Order[street]": { required: !0 },
                                        "Order[postcode]": { required: !0 },
                                        "Order[house]": { required: !0 },
                                        "Order[delivery]": { required: !0 },
                                        "Order[payment]": { required: !0 },
                                        "Review[raiting]": { required: !0 },
                                        "Review[name]": { required: !0 },
                                        "Review[email]": { required: !0, email: !0 },
                                        "Review[message]": { required: !0 },
                                        "Review[spam]": { required: !0 },
                                    },
                                    messages: {
                                        "Order[delivery]": {
                                            required:
                                                "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",
                                        },
                                        "Order[payment]": {
                                            required:
                                                "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b",
                                        },
                                        "Review[raiting]": {
                                            required:
                                                "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043e\u0446\u0435\u043d\u043a\u0443 \u0442\u043e\u0432\u0430\u0440\u0443",
                                        },
                                    },
                                }),
                                e["default"](".form").on("click", function (a) {
                                    var b = e["default"](this),
                                        c = e["default"](a.target),
                                        d = c.closest(".form__error-hide"),
                                        f = c.closest(".form__reset");
                                    if ((d.length && c.closest(".form__error-wrapper").hide(), f.length)) {
                                        var j,
                                            k,
                                            g = b.find(".form__label"),
                                            h = b.find(".form__error-wrapper"),
                                            i = this.elements;
                                        for (b.trigger("reset"), j = 0, k = i.length; k > j; j++) e["default"](i[j]).removeClass("valid invalid");
                                        g.each(function () {
                                            e["default"](this).removeClass("form__label_valid form__label_invalid");
                                        }),
                                            h.each(function () {
                                                e["default"](this).hide();
                                            });
                                    }
                                });
                        });
                }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
            },
            { jquery: 13, "jquery-validation": 11 },
        ],
        3: [
            function (a, b, c) {
                (function (b) {
                    "use strict";
                    function c(a) {
                        return a && a.__esModule ? a : { default: a };
                    }
                    var d = a("jquery"),
                        e = c(d);
                    (b.jQuery = a("jquery")),
                        a("../slider/jquery.bxslider"),
                        e["default"](function () {
                            e["default"](".gallery__thumbnails").each(function () {
                                var a = e["default"](this),
                                    b = a.find(".gallery__thumbnails-item"),
                                    c = a.closest(".gallery"),
                                    d = c.find(".gallery__display-img");
                                d.load(function () {
                                    var c = a.outerWidth(),
                                        d = 0;
                                    b.each(function () {
                                        d += e["default"](this).outerWidth(!0);
                                    }),
                                    d > c && a.bxSlider({ pager: !1, touchEnabled: !0, slideWidth: 80, slideMargin: 20, maxSlides: 5 });
                                });
                            }),
                                e["default"](".gallery").on("mouseover click", function (a) {
                                    var b = e["default"](this),
                                        c = e["default"](a.target),
                                        d = c.closest(".gallery__thumbnails-item");
                                    if (d.length) {
                                        var f = d.find(".gallery__thumbnails-img"),
                                            g = f.attr("src"),
                                            h = b.find(".gallery__display"),
                                            i = h.find(".gallery__display-img"),
                                            j = i.attr("src");
                                        "mouseover" === a.type
                                            ? (i.attr("src", g),
                                                d.one("mouseout", function () {
                                                    i.attr("src", j);
                                                }))
                                            : "click" === a.type &&
                                            (c.hasClass("gallery__item_active") || (d.addClass("gallery__thumbnails-item_active").siblings().removeClass("gallery__thumbnails-item_active"), i.attr("src", g), d.off("mouseout")));
                                    }
                                });
                        });
                }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
            },
            { "../slider/jquery.bxslider": 7, jquery: 13 },
        ],
        4: [
            function (a, b, c) {
                "use strict";
                function d(a) {
                    return a && a.__esModule ? a : { default: a };
                }
                var e = a("jquery"),
                    f = d(e);
                !(function () {
                    f["default"](".input-number__counter-spin").on("click", function (a) {
                        var b = f["default"](this),
                            c = b.closest(".input-number"),
                            d = c.find(".input-number__elem"),
                            e = parseInt(d.val()) || 0,
                            g = parseInt(d.attr("step")) || 1,
                            h = parseInt(d.attr("min")) || 0;
                        b.hasClass("input-number__counter-spin_less") && e > h ? d.val(e - g) : b.hasClass("input-number__counter-spin_more") && d.val(e + g);
                    });
                })(f["default"]);
            },
            { jquery: 13 },
        ],
        5: [
            function (a, b, c) {
                "use strict";
                function d(a) {
                    return a && a.__esModule ? a : { default: a };
                }
                var e = a("jquery"),
                    f = d(e);
                f["default"](function () {
                    f["default"](".js-nav-btn").on("click", function (a) {
                        var b = f["default"](this),
                            c = b.closest(".navigation"),
                            d = c.find(".navigation__collapse");
                        a.preventDefault(), d.slideToggle();
                    });
                });
            },
            { jquery: 13 },
        ],
        6: [
            function (a, b, c) {
                "use strict";
                function d(a) {
                    return a && a.__esModule ? a : { default: a };
                }
                var e = a("jquery"),
                    f = d(e);
                f["default"](function () {
                    f["default"](".js-popup-open").on("click", function (a) {
                        var b = f["default"](this),
                            c = b.data("popup");
                        f["default"]("[data-popup=" + c + "]").addClass("popup_active");
                    }),
                        f["default"](".popup").on("click", function (a) {
                            var b = f["default"](this),
                                c = f["default"](a.target),
                                d = c.closest(".js-popup-close"),
                                e = c.closest(".popup__content");
                            (d.length || !e.length) && b.removeClass("popup_active");
                        });
                });
            },
            { jquery: 13 },
        ],
        7: [
            function (a, b, c) {
                "use strict";
                !(function (a) {
                    var b = {},
                        c = {
                            mode: "horizontal",
                            slideSelector: "",
                            infiniteLoop: !0,
                            hideControlOnEnd: !1,
                            speed: 500,
                            easing: null,
                            slideMargin: 0,
                            startSlide: 0,
                            randomStart: !1,
                            captions: !1,
                            ticker: !1,
                            tickerHover: !1,
                            adaptiveHeight: !1,
                            adaptiveHeightSpeed: 500,
                            video: !1,
                            useCSS: !0,
                            preloadImages: "visible",
                            responsive: !0,
                            slideZIndex: 50,
                            wrapperClass: "bx-wrapper",
                            touchEnabled: !0,
                            swipeThreshold: 50,
                            oneToOneTouch: !0,
                            preventDefaultSwipeX: !0,
                            preventDefaultSwipeY: !1,
                            pager: !0,
                            pagerType: "full",
                            pagerShortSeparator: " / ",
                            pagerSelector: null,
                            buildPager: null,
                            pagerCustom: null,
                            controls: !0,
                            nextText: "Next",
                            prevText: "Prev",
                            nextSelector: null,
                            prevSelector: null,
                            autoControls: !1,
                            startText: "Start",
                            stopText: "Stop",
                            autoControlsCombine: !1,
                            autoControlsSelector: null,
                            auto: !1,
                            pause: 4e3,
                            autoStart: !0,
                            autoDirection: "next",
                            autoHover: !1,
                            autoDelay: 0,
                            autoSlideForOnePage: !1,
                            minSlides: 1,
                            maxSlides: 1,
                            moveSlides: 0,
                            slideWidth: 0,
                            onSliderLoad: function () {},
                            onSlideBefore: function () {},
                            onSlideAfter: function () {},
                            onSlideNext: function () {},
                            onSlidePrev: function () {},
                            onSliderResize: function () {},
                        };
                    a.fn.bxSlider = function (d) {
                        if (0 == this.length) return this;
                        if (this.length > 1)
                            return (
                                this.each(function () {
                                    a(this).bxSlider(d);
                                }),
                                    this
                            );
                        var e = {},
                            f = this;
                        b.el = this;
                        var g = a(window).width(),
                            h = a(window).height(),
                            j = function () {
                                (e.settings = a.extend({}, c, d)),
                                    (e.settings.slideWidth = parseInt(e.settings.slideWidth)),
                                    (e.children = f.children(e.settings.slideSelector)),
                                e.children.length < e.settings.minSlides && (e.settings.minSlides = e.children.length),
                                e.children.length < e.settings.maxSlides && (e.settings.maxSlides = e.children.length),
                                e.settings.randomStart && (e.settings.startSlide = Math.floor(Math.random() * e.children.length)),
                                    (e.active = { index: e.settings.startSlide }),
                                    (e.carousel = e.settings.minSlides > 1 || e.settings.maxSlides > 1),
                                e.carousel && (e.settings.preloadImages = "all"),
                                    (e.minThreshold = e.settings.minSlides * e.settings.slideWidth + (e.settings.minSlides - 1) * e.settings.slideMargin),
                                    (e.maxThreshold = e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin),
                                    (e.working = !1),
                                    (e.controls = {}),
                                    (e.interval = null),
                                    (e.animProp = "vertical" == e.settings.mode ? "top" : "left"),
                                    (e.usingCSS =
                                        e.settings.useCSS &&
                                        "fade" != e.settings.mode &&
                                        (function () {
                                            var a = document.createElement("div"),
                                                b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                            for (var c in b) if (void 0 !== a.style[b[c]]) return (e.cssPrefix = b[c].replace("Perspective", "").toLowerCase()), (e.animProp = "-" + e.cssPrefix + "-transform"), !0;
                                            return !1;
                                        })()),
                                "vertical" == e.settings.mode && (e.settings.maxSlides = e.settings.minSlides),
                                    f.data("origStyle", f.attr("style")),
                                    f.children(e.settings.slideSelector).each(function () {
                                        a(this).data("origStyle", a(this).attr("style"));
                                    }),
                                    k();
                            },
                            k = function () {
                                f.wrap('<div class="' + e.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'),
                                    (e.viewport = f.parent()),
                                    (e.loader = a('<div class="bx-loading" />')),
                                    e.viewport.prepend(e.loader),
                                    f.css({ width: "horizontal" == e.settings.mode ? 100 * e.children.length + 215 + "%" : "auto", position: "relative" }),
                                    e.usingCSS && e.settings.easing ? f.css("-" + e.cssPrefix + "-transition-timing-function", e.settings.easing) : e.settings.easing || (e.settings.easing = "swing");
                                q();
                                e.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }),
                                    e.viewport.parent().css({ maxWidth: o() }),
                                e.settings.pager || e.viewport.parent().css({ margin: "0 auto 0px" }),
                                    e.children.css({ float: "horizontal" == e.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }),
                                    e.children.css("width", p()),
                                "horizontal" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginRight", e.settings.slideMargin),
                                "vertical" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginBottom", e.settings.slideMargin),
                                "fade" == e.settings.mode && (e.children.css({ position: "absolute", zIndex: 0, display: "none" }), e.children.eq(e.settings.startSlide).css({ zIndex: e.settings.slideZIndex, display: "block" })),
                                    (e.controls.el = a('<div class="bx-controls" />')),
                                e.settings.captions && z(),
                                    (e.active.last = e.settings.startSlide == r() - 1),
                                e.settings.video && f.fitVids();
                                var c = e.children.eq(e.settings.startSlide);
                                "all" == e.settings.preloadImages && (c = e.children),
                                    e.settings.ticker
                                        ? (e.settings.pager = !1)
                                        : (e.settings.pager && w(),
                                        e.settings.controls && x(),
                                        e.settings.auto && e.settings.autoControls && y(),
                                        (e.settings.controls || e.settings.autoControls || e.settings.pager) && e.viewport.after(e.controls.el)),
                                    l(c, m);
                            },
                            l = function (b, c) {
                                var d = b.find("img, iframe").length;
                                if (0 == d) return void c();
                                var e = 0;
                                b.find("img, iframe").each(function () {
                                    a(this)
                                        .one("load", function () {
                                            ++e == d && c();
                                        })
                                        .each(function () {
                                            this.complete && a(this).load();
                                        });
                                });
                            },
                            m = function () {
                                if (e.settings.infiniteLoop && "fade" != e.settings.mode && !e.settings.ticker) {
                                    var b = "vertical" == e.settings.mode ? e.settings.minSlides : e.settings.maxSlides,
                                        c = e.children.slice(0, b).clone().addClass("bx-clone"),
                                        d = e.children.slice(-b).clone().addClass("bx-clone");
                                    f.append(c).prepend(d);
                                }
                                e.loader.remove(),
                                    t(),
                                "vertical" == e.settings.mode && (e.settings.adaptiveHeight = !0),
                                    e.viewport.height(n()),
                                    f.redrawSlider(),
                                    e.settings.onSliderLoad(e.active.index),
                                    (e.initialized = !0),
                                e.settings.responsive && a(window).bind("resize", Q),
                                e.settings.auto && e.settings.autoStart && (r() > 1 || e.settings.autoSlideForOnePage) && J(),
                                e.settings.ticker && K(),
                                e.settings.pager && F(e.settings.startSlide),
                                e.settings.controls && I(),
                                e.settings.touchEnabled && !e.settings.ticker && M();
                            },
                            n = function () {
                                var b = 0,
                                    c = a();
                                if ("vertical" == e.settings.mode || e.settings.adaptiveHeight)
                                    if (e.carousel) {
                                        var d = 1 == e.settings.moveSlides ? e.active.index : e.active.index * s();
                                        for (c = e.children.eq(d), i = 1; i <= e.settings.maxSlides - 1; i++) c = d + i >= e.children.length ? c.add(e.children.eq(i - 1)) : c.add(e.children.eq(d + i));
                                    } else c = e.children.eq(e.active.index);
                                else c = e.children;
                                return (
                                    "vertical" == e.settings.mode
                                        ? (c.each(function (c) {
                                            b += a(this).outerHeight();
                                        }),
                                        e.settings.slideMargin > 0 && (b += e.settings.slideMargin * (e.settings.minSlides - 1)))
                                        : (b = Math.max.apply(
                                            Math,
                                            c
                                                .map(function () {
                                                    return a(this).outerHeight(!1);
                                                })
                                                .get()
                                        )),
                                        "border-box" == e.viewport.css("box-sizing")
                                            ? (b += parseFloat(e.viewport.css("padding-top")) + parseFloat(e.viewport.css("padding-bottom")) + parseFloat(e.viewport.css("border-top-width")) + parseFloat(e.viewport.css("border-bottom-width")))
                                            : "padding-box" == e.viewport.css("box-sizing") && (b += parseFloat(e.viewport.css("padding-top")) + parseFloat(e.viewport.css("padding-bottom"))),
                                        b
                                );
                            },
                            o = function () {
                                var a = "100%";
                                return e.settings.slideWidth > 0 && (a = "horizontal" == e.settings.mode ? e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin : e.settings.slideWidth), a;
                            },
                            p = function () {
                                var a = e.settings.slideWidth,
                                    b = e.viewport.width();
                                return (
                                    0 == e.settings.slideWidth || (e.settings.slideWidth > b && !e.carousel) || "vertical" == e.settings.mode
                                        ? (a = b)
                                        : e.settings.maxSlides > 1 && "horizontal" == e.settings.mode && (b > e.maxThreshold || (b < e.minThreshold && (a = (b - e.settings.slideMargin * (e.settings.minSlides - 1)) / e.settings.minSlides))),
                                        a
                                );
                            },
                            q = function () {
                                var a = 1;
                                if ("horizontal" == e.settings.mode && e.settings.slideWidth > 0)
                                    if (e.viewport.width() < e.minThreshold) a = e.settings.minSlides;
                                    else if (e.viewport.width() > e.maxThreshold) a = e.settings.maxSlides;
                                    else {
                                        var b = e.children.first().width() + e.settings.slideMargin;
                                        a = Math.floor((e.viewport.width() + e.settings.slideMargin) / b);
                                    }
                                else "vertical" == e.settings.mode && (a = e.settings.minSlides);
                                return a;
                            },
                            r = function () {
                                var a = 0;
                                if (e.settings.moveSlides > 0)
                                    if (e.settings.infiniteLoop) a = Math.ceil(e.children.length / s());
                                    else for (var b = 0, c = 0; b < e.children.length; ) ++a, (b = c + q()), (c += e.settings.moveSlides <= q() ? e.settings.moveSlides : q());
                                else a = Math.ceil(e.children.length / q());
                                return a;
                            },
                            s = function () {
                                return e.settings.moveSlides > 0 && e.settings.moveSlides <= q() ? e.settings.moveSlides : q();
                            },
                            t = function () {
                                if (e.children.length > e.settings.maxSlides && e.active.last && !e.settings.infiniteLoop) {
                                    if ("horizontal" == e.settings.mode) {
                                        var a = e.children.last(),
                                            b = a.position();
                                        u(-(b.left - (e.viewport.width() - a.outerWidth())), "reset", 0);
                                    } else if ("vertical" == e.settings.mode) {
                                        var c = e.children.length - e.settings.minSlides,
                                            b = e.children.eq(c).position();
                                        u(-b.top, "reset", 0);
                                    }
                                } else {
                                    var b = e.children.eq(e.active.index * s()).position();
                                    e.active.index == r() - 1 && (e.active.last = !0), void 0 != b && ("horizontal" == e.settings.mode ? u(-b.left, "reset", 0) : "vertical" == e.settings.mode && u(-b.top, "reset", 0));
                                }
                            },
                            u = function aa(a, b, c, d) {
                                if (e.usingCSS) {
                                    var g = "vertical" == e.settings.mode ? "translate3d(0, " + a + "px, 0)" : "translate3d(" + a + "px, 0, 0)";
                                    f.css("-" + e.cssPrefix + "-transition-duration", c / 1e3 + "s"),
                                        "slide" == b
                                            ? (f.css(e.animProp, g),
                                                f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                                                    f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), G();
                                                }))
                                            : "reset" == b
                                                ? f.css(e.animProp, g)
                                                : "ticker" == b &&
                                                (f.css("-" + e.cssPrefix + "-transition-timing-function", "linear"),
                                                    f.css(e.animProp, g),
                                                    f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                                                        f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), aa(d.resetValue, "reset", 0), L();
                                                    }));
                                } else {
                                    var h = {};
                                    (h[e.animProp] = a),
                                        "slide" == b
                                            ? f.animate(h, c, e.settings.easing, function () {
                                                G();
                                            })
                                            : "reset" == b
                                                ? f.css(e.animProp, a)
                                                : "ticker" == b &&
                                                f.animate(h, speed, "linear", function () {
                                                    aa(d.resetValue, "reset", 0), L();
                                                });
                                }
                            },
                            v = function () {
                                for (var b = "", c = r(), d = 0; c > d; d++) {
                                    var f = "";
                                    e.settings.buildPager && a.isFunction(e.settings.buildPager) ? ((f = e.settings.buildPager(d)), e.pagerEl.addClass("bx-custom-pager")) : ((f = d + 1), e.pagerEl.addClass("bx-default-pager")),
                                        (b += '<div class="bx-pager-item"><a href="" data-slide-index="' + d + '" class="bx-pager-link">' + f + "</a></div>");
                                }
                                e.pagerEl.html(b);
                            },
                            w = function () {
                                e.settings.pagerCustom
                                    ? (e.pagerEl = a(e.settings.pagerCustom))
                                    : ((e.pagerEl = a('<div class="bx-pager" />')), e.settings.pagerSelector ? a(e.settings.pagerSelector).html(e.pagerEl) : e.controls.el.addClass("bx-has-pager").append(e.pagerEl), v()),
                                    e.pagerEl.on("click", "a", E);
                            },
                            x = function () {
                                (e.controls.next = a('<a class="bx-next" href="">' + e.settings.nextText + "</a>")),
                                    (e.controls.prev = a('<a class="bx-prev" href="">' + e.settings.prevText + "</a>")),
                                    e.controls.next.bind("click", A),
                                    e.controls.prev.bind("click", B),
                                e.settings.nextSelector && a(e.settings.nextSelector).append(e.controls.next),
                                e.settings.prevSelector && a(e.settings.prevSelector).append(e.controls.prev),
                                e.settings.nextSelector ||
                                e.settings.prevSelector ||
                                ((e.controls.directionEl = a('<div class="bx-controls-direction" />')),
                                    e.controls.directionEl.append(e.controls.prev).append(e.controls.next),
                                    e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl));
                            },
                            y = function () {
                                (e.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + e.settings.startText + "</a></div>")),
                                    (e.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + e.settings.stopText + "</a></div>")),
                                    (e.controls.autoEl = a('<div class="bx-controls-auto" />')),
                                    e.controls.autoEl.on("click", ".bx-start", C),
                                    e.controls.autoEl.on("click", ".bx-stop", D),
                                    e.settings.autoControlsCombine ? e.controls.autoEl.append(e.controls.start) : e.controls.autoEl.append(e.controls.start).append(e.controls.stop),
                                    e.settings.autoControlsSelector ? a(e.settings.autoControlsSelector).html(e.controls.autoEl) : e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl),
                                    H(e.settings.autoStart ? "stop" : "start");
                            },
                            z = function () {
                                e.children.each(function (b) {
                                    var c = a(this).find("img:first").attr("title");
                                    void 0 != c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>");
                                });
                            },
                            A = function (a) {
                                e.settings.auto && f.stopAuto(), f.goToNextSlide(), a.preventDefault();
                            },
                            B = function (a) {
                                e.settings.auto && f.stopAuto(), f.goToPrevSlide(), a.preventDefault();
                            },
                            C = function (a) {
                                f.startAuto(), a.preventDefault();
                            },
                            D = function (a) {
                                f.stopAuto(), a.preventDefault();
                            },
                            E = function (b) {
                                e.settings.auto && f.stopAuto();
                                var c = a(b.currentTarget);
                                if (void 0 !== c.attr("data-slide-index")) {
                                    var d = parseInt(c.attr("data-slide-index"));
                                    d != e.active.index && f.goToSlide(d), b.preventDefault();
                                }
                            },
                            F = function (b) {
                                var c = e.children.length;
                                return "short" == e.settings.pagerType
                                    ? (e.settings.maxSlides > 1 && (c = Math.ceil(e.children.length / e.settings.maxSlides)), void e.pagerEl.html(b + 1 + e.settings.pagerShortSeparator + c))
                                    : (e.pagerEl.find("a").removeClass("active"),
                                        void e.pagerEl.each(function (c, d) {
                                            a(d).find("a").eq(b).addClass("active");
                                        }));
                            },
                            G = function () {
                                if (e.settings.infiniteLoop) {
                                    var a = "";
                                    0 == e.active.index
                                        ? (a = e.children.eq(0).position())
                                        : e.active.index == r() - 1 && e.carousel
                                            ? (a = e.children.eq((r() - 1) * s()).position())
                                            : e.active.index == e.children.length - 1 && (a = e.children.eq(e.children.length - 1).position()),
                                    a && ("horizontal" == e.settings.mode ? u(-a.left, "reset", 0) : "vertical" == e.settings.mode && u(-a.top, "reset", 0));
                                }
                                (e.working = !1), e.settings.onSlideAfter(e.children.eq(e.active.index), e.oldIndex, e.active.index);
                            },
                            H = function (a) {
                                e.settings.autoControlsCombine ? e.controls.autoEl.html(e.controls[a]) : (e.controls.autoEl.find("a").removeClass("active"), e.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"));
                            },
                            I = function () {
                                1 == r()
                                    ? (e.controls.prev.addClass("disabled"), e.controls.next.addClass("disabled"))
                                    : !e.settings.infiniteLoop &&
                                    e.settings.hideControlOnEnd &&
                                    (0 == e.active.index
                                        ? (e.controls.prev.addClass("disabled"), e.controls.next.removeClass("disabled"))
                                        : e.active.index == r() - 1
                                            ? (e.controls.next.addClass("disabled"), e.controls.prev.removeClass("disabled"))
                                            : (e.controls.prev.removeClass("disabled"), e.controls.next.removeClass("disabled")));
                            },
                            J = function () {
                                if (e.settings.autoDelay > 0) {
                                    setTimeout(f.startAuto, e.settings.autoDelay);
                                } else f.startAuto();
                                e.settings.autoHover &&
                                f.hover(
                                    function () {
                                        e.interval && (f.stopAuto(!0), (e.autoPaused = !0));
                                    },
                                    function () {
                                        e.autoPaused && (f.startAuto(!0), (e.autoPaused = null));
                                    }
                                );
                            },
                            K = function () {
                                var b = 0;
                                if ("next" == e.settings.autoDirection) f.append(e.children.clone().addClass("bx-clone"));
                                else {
                                    f.prepend(e.children.clone().addClass("bx-clone"));
                                    var c = e.children.first().position();
                                    b = "horizontal" == e.settings.mode ? -c.left : -c.top;
                                }
                                u(b, "reset", 0),
                                    (e.settings.pager = !1),
                                    (e.settings.controls = !1),
                                    (e.settings.autoControls = !1),
                                e.settings.tickerHover &&
                                !e.usingCSS &&
                                e.viewport.hover(
                                    function () {
                                        f.stop();
                                    },
                                    function () {
                                        var b = 0;
                                        e.children.each(function (c) {
                                            b += "horizontal" == e.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0);
                                        });
                                        var c = e.settings.speed / b,
                                            d = "horizontal" == e.settings.mode ? "left" : "top",
                                            g = c * (b - Math.abs(parseInt(f.css(d))));
                                        L(g);
                                    }
                                ),
                                    L();
                            },
                            L = function (a) {
                                let speed = a ? a : e.settings.speed;
                                var b = { left: 0, top: 0 },
                                    c = { left: 0, top: 0 };
                                "next" == e.settings.autoDirection ? (b = f.find(".bx-clone").first().position()) : (c = e.children.first().position());
                                var d = "horizontal" == e.settings.mode ? -b.left : -b.top,
                                    g = "horizontal" == e.settings.mode ? -c.left : -c.top,
                                    h = { resetValue: g };
                                u(d, "ticker", speed, h);
                            },
                            M = function () {
                                (e.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }), e.viewport.bind("touchstart", N);
                            },
                            N = function (a) {
                                if (e.working) a.preventDefault();
                                else {
                                    e.touch.originalPos = f.position();
                                    var b = a.originalEvent;
                                    (e.touch.start.x = b.changedTouches[0].pageX), (e.touch.start.y = b.changedTouches[0].pageY), e.viewport.bind("touchmove", O), e.viewport.bind("touchend", P);
                                }
                            },
                            O = function (a) {
                                var b = a.originalEvent,
                                    c = Math.abs(b.changedTouches[0].pageX - e.touch.start.x),
                                    d = Math.abs(b.changedTouches[0].pageY - e.touch.start.y);
                                if ((3 * c > d && e.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * d > c && e.settings.preventDefaultSwipeY && a.preventDefault(), "fade" != e.settings.mode && e.settings.oneToOneTouch)) {
                                    var f = 0;
                                    if ("horizontal" == e.settings.mode) {
                                        var g = b.changedTouches[0].pageX - e.touch.start.x;
                                        f = e.touch.originalPos.left + g;
                                    } else {
                                        var g = b.changedTouches[0].pageY - e.touch.start.y;
                                        f = e.touch.originalPos.top + g;
                                    }
                                    u(f, "reset", 0);
                                }
                            },
                            P = function va(a) {
                                e.viewport.unbind("touchmove", O);
                                var b = a.originalEvent,
                                    c = 0;
                                if (((e.touch.end.x = b.changedTouches[0].pageX), (e.touch.end.y = b.changedTouches[0].pageY), "fade" == e.settings.mode)) {
                                    var d = Math.abs(e.touch.start.x - e.touch.end.x);
                                    d >= e.settings.swipeThreshold && (e.touch.start.x > e.touch.end.x ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto());
                                } else {
                                    var d = 0;
                                    "horizontal" == e.settings.mode ? ((d = e.touch.end.x - e.touch.start.x), (c = e.touch.originalPos.left)) : ((d = e.touch.end.y - e.touch.start.y), (c = e.touch.originalPos.top)),
                                        !e.settings.infiniteLoop && ((0 == e.active.index && d > 0) || (e.active.last && 0 > d))
                                            ? u(c, "reset", 200)
                                            : Math.abs(d) >= e.settings.swipeThreshold
                                                ? (0 > d ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto())
                                                : u(c, "reset", 200);
                                }
                                e.viewport.unbind("touchend", va);
                            },
                            Q = function (b) {
                                if (e.initialized) {
                                    var c = a(window).width(),
                                        d = a(window).height();
                                    (g != c || h != d) && ((g = c), (h = d), f.redrawSlider(), e.settings.onSliderResize.call(f, e.active.index));
                                }
                            };
                        return (
                            (f.goToSlide = function (b, c) {
                                if (!e.working && e.active.index != b)
                                    if (
                                        ((e.working = !0),
                                            (e.oldIndex = e.active.index),
                                            0 > b ? (e.active.index = r() - 1) : b >= r() ? (e.active.index = 0) : (e.active.index = b),
                                            e.settings.onSlideBefore(e.children.eq(e.active.index), e.oldIndex, e.active.index),
                                            "next" == c ? e.settings.onSlideNext(e.children.eq(e.active.index), e.oldIndex, e.active.index) : "prev" == c && e.settings.onSlidePrev(e.children.eq(e.active.index), e.oldIndex, e.active.index),
                                            (e.active.last = e.active.index >= r() - 1),
                                        e.settings.pager && F(e.active.index),
                                        e.settings.controls && I(),
                                        "fade" == e.settings.mode)
                                    )
                                        e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({ height: n() }, e.settings.adaptiveHeightSpeed),
                                            e.children.filter(":visible").fadeOut(e.settings.speed).css({ zIndex: 0 }),
                                            e.children
                                                .eq(e.active.index)
                                                .css("zIndex", e.settings.slideZIndex + 1)
                                                .fadeIn(e.settings.speed, function () {
                                                    a(this).css("zIndex", e.settings.slideZIndex), G();
                                                });
                                    else {
                                        e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({ height: n() }, e.settings.adaptiveHeightSpeed);
                                        var d = 0,
                                            g = { left: 0, top: 0 };
                                        if (!e.settings.infiniteLoop && e.carousel && e.active.last)
                                            if ("horizontal" == e.settings.mode) {
                                                var h = e.children.eq(e.children.length - 1);
                                                (g = h.position()), (d = e.viewport.width() - h.outerWidth());
                                            } else {
                                                var i = e.children.length - e.settings.minSlides;
                                                g = e.children.eq(i).position();
                                            }
                                        else if (e.carousel && e.active.last && "prev" == c) {
                                            var j = 1 == e.settings.moveSlides ? e.settings.maxSlides - s() : (r() - 1) * s() - (e.children.length - e.settings.maxSlides),
                                                h = f.children(".bx-clone").eq(j);
                                            g = h.position();
                                        } else if ("next" == c && 0 == e.active.index) (g = f.find("> .bx-clone").eq(e.settings.maxSlides).position()), (e.active.last = !1);
                                        else if (b >= 0) {
                                            var k = b * s();
                                            g = e.children.eq(k).position();
                                        }
                                        if ("undefined" != typeof g) {
                                            var l = "horizontal" == e.settings.mode ? -(g.left - d) : -g.top;
                                            u(l, "slide", e.settings.speed);
                                        }
                                    }
                            }),
                                (f.goToNextSlide = function () {
                                    if (e.settings.infiniteLoop || !e.active.last) {
                                        var a = parseInt(e.active.index) + 1;
                                        f.goToSlide(a, "next");
                                    }
                                }),
                                (f.goToPrevSlide = function () {
                                    if (e.settings.infiniteLoop || 0 != e.active.index) {
                                        var a = parseInt(e.active.index) - 1;
                                        f.goToSlide(a, "prev");
                                    }
                                }),
                                (f.startAuto = function (a) {
                                    e.interval ||
                                    ((e.interval = setInterval(function () {
                                        "next" == e.settings.autoDirection ? f.goToNextSlide() : f.goToPrevSlide();
                                    }, e.settings.pause)),
                                    e.settings.autoControls && 1 != a && H("stop"));
                                }),
                                (f.stopAuto = function (a) {
                                    e.interval && (clearInterval(e.interval), (e.interval = null), e.settings.autoControls && 1 != a && H("start"));
                                }),
                                (f.getCurrentSlide = function () {
                                    return e.active.index;
                                }),
                                (f.getCurrentSlideElement = function () {
                                    return e.children.eq(e.active.index);
                                }),
                                (f.getSlideCount = function () {
                                    return e.children.length;
                                }),
                                (f.redrawSlider = function () {
                                    e.children.add(f.find(".bx-clone")).width(p()),
                                        e.viewport.css("height", n()),
                                    e.settings.ticker || t(),
                                    e.active.last && (e.active.index = r() - 1),
                                    e.active.index >= r() && (e.active.last = !0),
                                    e.settings.pager && !e.settings.pagerCustom && (v(), F(e.active.index));
                                }),
                                (f.destroySlider = function () {
                                    e.initialized &&
                                    ((e.initialized = !1),
                                        a(".bx-clone", this).remove(),
                                        e.children.each(function () {
                                            void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style");
                                        }),
                                        void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"),
                                        a(this).unwrap().unwrap(),
                                    e.controls.el && e.controls.el.remove(),
                                    e.controls.next && e.controls.next.remove(),
                                    e.controls.prev && e.controls.prev.remove(),
                                    e.pagerEl && e.settings.controls && e.pagerEl.remove(),
                                        a(".bx-caption", this).remove(),
                                    e.controls.autoEl && e.controls.autoEl.remove(),
                                        clearInterval(e.interval),
                                    e.settings.responsive && a(window).unbind("resize", Q));
                                }),
                                (f.reloadSlider = function (a) {
                                    void 0 != a && (d = a), f.destroySlider(), j();
                                }),
                                j(),
                                this
                        );
                    };
                })(jQuery);
            },
            {},
        ],
        8: [
            function (a, b, c) {
                "use strict";
                function d(a) {
                    return a && a.__esModule ? a : { default: a };
                }
                var e = a("jquery"),
                    f = d(e);
                f["default"](function () {
                    f["default"](".tabs").on("click", function (a) {
                        var b = f["default"](a.target),
                            c = f["default"](this),
                            d = b.closest(".tabs__nav-item");
                        if (d.length) {
                            a.preventDefault();
                            var e = d.data("tab"),
                                g = c.find(".tabs__content"),
                                h = g.filter("[data-tab=" + e + "]");
                            if (!d.hasClass("tabs__nav-item_active")) {
                                d.addClass("tabs__nav-item_active").siblings().removeClass("tabs__nav-item_active")
                                g.removeClass("tabs__content_active")
                                h.addClass("tabs__content_active")
                            }
                            //d.hasClass("tabs__nav-item_active") || (d.addClass("tabs__nav-item_active").siblings().removeClass("tabs__nav-item_active"), g.removeClass("tabs__content_active"), h.addClass("tabs__content_active"));
                        }
                    });
                });
            },
            { jquery: 13 },
        ],
        9: [
            function (a, b, c) {
                (function (b) {
                    "use strict";
                    function c(a) {
                        return a && a.__esModule ? a : { default: a };
                    }
                    var d = a("jquery"),
                        e = c(d);
                    a("../blocks/input-number/input-number"),
                        a("../blocks/gallery/gallery"),
                        a("../blocks/tabs/tabs"),
                        a("../blocks/navigation/navigation"),
                        a("../blocks/popup/popup"),
                        a("../blocks/form/form"),
                        (b.jQuery = a("jquery")),
                        a("ion-rangeslider"),
                        a("jquery.formstyler"),
                        a("../blocks/devicejs/device"),
                        e["default"](function () {
                            function a(a) {
                                var b = a.slider.closest(".range-slider"),
                                    c = b.find(".range-slider__output"),
                                    d = c.filter('[data-type="min"]'),
                                    e = c.filter('[data-type="max"]');
                                d.val(a.from), e.val(a.to);
                            }
                            e["default"](".js-block-show").on("click", function (a) {
                                var b = e["default"](this),
                                    c = b.text(),
                                    d = b.data("text"),
                                    f = b.data("btn");
                                a.preventDefault(), b.data("text", c), b.text(d), e["default"]("[data-block=" + f + "]").toggleClass("block-show");
                            }),
                                e["default"](".slider__container").bxSlider({ auto: !0, autoHover: !0, touchEnabled: !0 }),
                                e["default"](".range-slider__elem").ionRangeSlider({
                                    type: "double",
                                    min: 0,
                                    max: 2e4,
                                    step: 100,
                                    hide_min_max: !0,
                                    hide_from_to: !0,
                                    onStart: function (b) {
                                        a(b);
                                    },
                                    onChange: function (b) {
                                        a(b);
                                    },
                                }),
                                e["default"](".js-select").each(function () {
                                    e["default"](this).styler();
                                }),
                                e["default"](".header__menu").on("click", function (a) {
                                    if (e["default"]("html").hasClass("tablet") || e["default"]("html").hasClass("mobile")) {
                                        var c = (e["default"](this), e["default"](a.target)),
                                            d = c.closest(".menu__item");
                                        d.length && d.has(".dropdown-menu") && (a.preventDefault(), d.trigger("hover"));
                                    }
                                });
                        });
                }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
            },
            {
                "../blocks/devicejs/device": 1,
                "../blocks/form/form": 2,
                "../blocks/gallery/gallery": 3,
                "../blocks/input-number/input-number": 4,
                "../blocks/navigation/navigation": 5,
                "../blocks/popup/popup": 6,
                "../blocks/tabs/tabs": 8,
                "ion-rangeslider": 10,
                jquery: 13,
                "jquery.formstyler": 12,
            },
        ],
        10: [
            function (a, b, c) {
                !(function (a, b, c, d, e) {
                    "use strict";
                    var f = 0,
                        g = (function () {
                            var e,
                                b = d.userAgent,
                                c = /msie\s\d+/i;
                            return b.search(c) > 0 && ((e = c.exec(b).toString()), (e = e.split(" ")[1]), 9 > e) ? (a("html").addClass("lt-ie9"), !0) : !1;
                        })();
                    Function.prototype.bind ||
                    (Function.prototype.bind = function (a) {
                        var b = this,
                            c = [].slice;
                        if ("function" != typeof b) throw new TypeError();
                        var d = c.call(arguments, 1),
                            e = function () {
                                if (this instanceof e) {
                                    var f = function () {};
                                    f.prototype = b.prototype;
                                    var g = new f(),
                                        h = b.apply(g, d.concat(c.call(arguments)));
                                    return Object(h) === h ? h : g;
                                }
                                return b.apply(a, d.concat(c.call(arguments)));
                            };
                        return e;
                    }),
                    Array.prototype.indexOf ||
                    (Array.prototype.indexOf = function (a, b) {
                        var c;
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var d = Object(this),
                            e = d.length >>> 0;
                        if (0 === e) return -1;
                        var f = +b || 0;
                        if ((Math.abs(f) === 1 / 0 && (f = 0), f >= e)) return -1;
                        for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c; ) {
                            if (c in d && d[c] === a) return c;
                            c++;
                        }
                        return -1;
                    });
                    var h =
                            '<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>',
                        i = '<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>',
                        j = '<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>',
                        k = '<span class="irs-disable-mask"></span>',
                        l = function (d, e, f) {
                            (this.VERSION = "2.1.1"),
                                (this.input = d),
                                (this.plugin_count = f),
                                (this.current_plugin = 0),
                                (this.calc_count = 0),
                                (this.update_tm = 0),
                                (this.old_from = 0),
                                (this.old_to = 0),
                                (this.old_min_interval = null),
                                (this.raf_id = null),
                                (this.dragging = !1),
                                (this.force_redraw = !1),
                                (this.no_diapason = !1),
                                (this.is_key = !1),
                                (this.is_update = !1),
                                (this.is_start = !0),
                                (this.is_finish = !1),
                                (this.is_active = !1),
                                (this.is_resize = !1),
                                (this.is_click = !1),
                                (this.$cache = {
                                    win: a(c),
                                    body: a(b.body),
                                    input: a(d),
                                    cont: null,
                                    rs: null,
                                    min: null,
                                    max: null,
                                    from: null,
                                    to: null,
                                    single: null,
                                    bar: null,
                                    line: null,
                                    s_single: null,
                                    s_from: null,
                                    s_to: null,
                                    shad_single: null,
                                    shad_from: null,
                                    shad_to: null,
                                    edge: null,
                                    grid: null,
                                    grid_labels: [],
                                }),
                                (this.coords = {
                                    x_gap: 0,
                                    x_pointer: 0,
                                    w_rs: 0,
                                    w_rs_old: 0,
                                    w_handle: 0,
                                    p_gap: 0,
                                    p_gap_left: 0,
                                    p_gap_right: 0,
                                    p_step: 0,
                                    p_pointer: 0,
                                    p_handle: 0,
                                    p_single_fake: 0,
                                    p_single_real: 0,
                                    p_from_fake: 0,
                                    p_from_real: 0,
                                    p_to_fake: 0,
                                    p_to_real: 0,
                                    p_bar_x: 0,
                                    p_bar_w: 0,
                                    grid_gap: 0,
                                    big_num: 0,
                                    big: [],
                                    big_w: [],
                                    big_p: [],
                                    big_x: [],
                                }),
                                (this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 });
                            var i,
                                j,
                                k,
                                g = this.$cache.input,
                                h = g.prop("value");
                            (i = {
                                type: "single",
                                min: 10,
                                max: 100,
                                from: null,
                                to: null,
                                step: 1,
                                min_interval: 0,
                                max_interval: 0,
                                drag_interval: !1,
                                values: [],
                                p_values: [],
                                from_fixed: !1,
                                from_min: null,
                                from_max: null,
                                from_shadow: !1,
                                to_fixed: !1,
                                to_min: null,
                                to_max: null,
                                to_shadow: !1,
                                prettify_enabled: !0,
                                prettify_separator: " ",
                                prettify: null,
                                force_edges: !1,
                                keyboard: !1,
                                keyboard_step: 5,
                                grid: !1,
                                grid_margin: !0,
                                grid_num: 4,
                                grid_snap: !1,
                                hide_min_max: !1,
                                hide_from_to: !1,
                                prefix: "",
                                postfix: "",
                                max_postfix: "",
                                decorate_both: !0,
                                values_separator: " \u2014 ",
                                input_values_separator: ";",
                                disable: !1,
                                onStart: null,
                                onChange: null,
                                onFinish: null,
                                onUpdate: null,
                            }),
                                (j = {
                                    type: g.data("type"),
                                    min: g.data("min"),
                                    max: g.data("max"),
                                    from: g.data("from"),
                                    to: g.data("to"),
                                    step: g.data("step"),
                                    min_interval: g.data("minInterval"),
                                    max_interval: g.data("maxInterval"),
                                    drag_interval: g.data("dragInterval"),
                                    values: g.data("values"),
                                    from_fixed: g.data("fromFixed"),
                                    from_min: g.data("fromMin"),
                                    from_max: g.data("fromMax"),
                                    from_shadow: g.data("fromShadow"),
                                    to_fixed: g.data("toFixed"),
                                    to_min: g.data("toMin"),
                                    to_max: g.data("toMax"),
                                    to_shadow: g.data("toShadow"),
                                    prettify_enabled: g.data("prettifyEnabled"),
                                    prettify_separator: g.data("prettifySeparator"),
                                    force_edges: g.data("forceEdges"),
                                    keyboard: g.data("keyboard"),
                                    keyboard_step: g.data("keyboardStep"),
                                    grid: g.data("grid"),
                                    grid_margin: g.data("gridMargin"),
                                    grid_num: g.data("gridNum"),
                                    grid_snap: g.data("gridSnap"),
                                    hide_min_max: g.data("hideMinMax"),
                                    hide_from_to: g.data("hideFromTo"),
                                    prefix: g.data("prefix"),
                                    postfix: g.data("postfix"),
                                    max_postfix: g.data("maxPostfix"),
                                    decorate_both: g.data("decorateBoth"),
                                    values_separator: g.data("valuesSeparator"),
                                    input_values_separator: g.data("inputValuesSeparator"),
                                    disable: g.data("disable"),
                                }),
                                (j.values = j.values && j.values.split(","));
                            for (k in j) j.hasOwnProperty(k) && (j[k] || delete j[k]);
                            h &&
                            ((h = h.split(j.input_values_separator || e.input_values_separator || ";")),
                            h[0] && h[0] == +h[0] && (h[0] = +h[0]),
                            h[1] && h[1] == +h[1] && (h[1] = +h[1]),
                                e && e.values && e.values.length ? ((i.from = h[0] && e.values.indexOf(h[0])), (i.to = h[1] && e.values.indexOf(h[1]))) : ((i.from = h[0] && +h[0]), (i.to = h[1] && +h[1]))),
                                a.extend(i, e),
                                a.extend(i, j),
                                (this.options = i),
                                this.validate(),
                                (this.result = {
                                    input: this.$cache.input,
                                    slider: null,
                                    min: this.options.min,
                                    max: this.options.max,
                                    from: this.options.from,
                                    from_percent: 0,
                                    from_value: null,
                                    to: this.options.to,
                                    to_percent: 0,
                                    to_value: null,
                                }),
                                this.init();
                        };
                    (l.prototype = {
                        init: function (a) {
                            (this.no_diapason = !1),
                                (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
                                (this.target = "base"),
                                this.toggleInput(),
                                this.append(),
                                this.setMinMax(),
                                a ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate()) : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
                                this.updateScene();
                        },
                        append: function () {
                            var a = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
                            this.$cache.input.before(a),
                                this.$cache.input.prop("readonly", !0),
                                (this.$cache.cont = this.$cache.input.prev()),
                                (this.result.slider = this.$cache.cont),
                                this.$cache.cont.html(h),
                                (this.$cache.rs = this.$cache.cont.find(".irs")),
                                (this.$cache.min = this.$cache.cont.find(".irs-min")),
                                (this.$cache.max = this.$cache.cont.find(".irs-max")),
                                (this.$cache.from = this.$cache.cont.find(".irs-from")),
                                (this.$cache.to = this.$cache.cont.find(".irs-to")),
                                (this.$cache.single = this.$cache.cont.find(".irs-single")),
                                (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
                                (this.$cache.line = this.$cache.cont.find(".irs-line")),
                                (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
                                "single" === this.options.type
                                    ? (this.$cache.cont.append(i),
                                        (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
                                        (this.$cache.s_single = this.$cache.cont.find(".single")),
                                        (this.$cache.from[0].style.visibility = "hidden"),
                                        (this.$cache.to[0].style.visibility = "hidden"),
                                        (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
                                    : (this.$cache.cont.append(j),
                                        (this.$cache.s_from = this.$cache.cont.find(".from")),
                                        (this.$cache.s_to = this.$cache.cont.find(".to")),
                                        (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
                                        (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
                                        this.setTopHandler()),
                            this.options.hide_from_to && ((this.$cache.from[0].style.display = "none"), (this.$cache.to[0].style.display = "none"), (this.$cache.single[0].style.display = "none")),
                                this.appendGrid(),
                                this.options.disable ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0)) : (this.$cache.cont.removeClass("irs-disabled"), (this.$cache.input[0].disabled = !1), this.bindEvents()),
                            this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
                        },
                        setTopHandler: function () {
                            var a = this.options.min,
                                b = this.options.max,
                                c = this.options.from,
                                d = this.options.to;
                            c > a && d === b ? this.$cache.s_from.addClass("type_last") : b > d && this.$cache.s_to.addClass("type_last");
                        },
                        changeLevel: function (a) {
                            switch (a) {
                                case "single":
                                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                                    break;
                                case "from":
                                    (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)),
                                        this.$cache.s_from.addClass("state_hover"),
                                        this.$cache.s_from.addClass("type_last"),
                                        this.$cache.s_to.removeClass("type_last");
                                    break;
                                case "to":
                                    (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake)),
                                        this.$cache.s_to.addClass("state_hover"),
                                        this.$cache.s_to.addClass("type_last"),
                                        this.$cache.s_from.removeClass("type_last");
                                    break;
                                case "both":
                                    (this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)),
                                        (this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer)),
                                        this.$cache.s_to.removeClass("type_last"),
                                        this.$cache.s_from.removeClass("type_last");
                            }
                        },
                        appendDisableMask: function () {
                            this.$cache.cont.append(k), this.$cache.cont.addClass("irs-disabled");
                        },
                        remove: function () {
                            this.$cache.cont.remove(),
                                (this.$cache.cont = null),
                                this.$cache.line.off("keydown.irs_" + this.plugin_count),
                                this.$cache.body.off("touchmove.irs_" + this.plugin_count),
                                this.$cache.body.off("mousemove.irs_" + this.plugin_count),
                                this.$cache.win.off("touchend.irs_" + this.plugin_count),
                                this.$cache.win.off("mouseup.irs_" + this.plugin_count),
                            g && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
                                (this.$cache.grid_labels = []),
                                (this.coords.big = []),
                                (this.coords.big_w = []),
                                (this.coords.big_p = []),
                                (this.coords.big_x = []),
                                cancelAnimationFrame(this.raf_id);
                        },
                        bindEvents: function () {
                            this.no_diapason ||
                            (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                                this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                                this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                                this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                                this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                this.options.drag_interval && "double" === this.options.type
                                    ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")))
                                    : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                                "single" === this.options.type
                                    ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                        this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                        this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                        this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                        this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                        this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                        this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")))
                                    : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                        this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                        this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                        this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                        this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                        this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                        this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                        this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                        this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                        this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                        this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                        this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                        this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                        this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                            this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")),
                            g && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
                        },
                        pointerMove: function (a) {
                            if (this.dragging) {
                                var b = a.pageX || (a.originalEvent.touches && a.originalEvent.touches[0].pageX);
                                (this.coords.x_pointer = b - this.coords.x_gap), this.calc();
                            }
                        },
                        pointerUp: function (b) {
                            this.current_plugin === this.plugin_count &&
                            this.is_active &&
                            ((this.is_active = !1),
                                this.$cache.cont.find(".state_hover").removeClass("state_hover"),
                                (this.force_redraw = !0),
                                (this.dragging = !1),
                            g && a("*").prop("unselectable", !1),
                                this.updateScene(),
                                this.restoreOriginalMinInterval(),
                            (a.contains(this.$cache.cont[0], b.target) || this.dragging) && ((this.is_finish = !0), this.callOnFinish()));
                        },
                        pointerDown: function (b, c) {
                            c.preventDefault();
                            var d = c.pageX || (c.originalEvent.touches && c.originalEvent.touches[0].pageX);
                            2 !== c.button &&
                            ("both" === b && this.setTempMinInterval(),
                                (this.current_plugin = this.plugin_count),
                                (this.target = b),
                                (this.is_active = !0),
                                (this.dragging = !0),
                                (this.coords.x_gap = this.$cache.rs.offset().left),
                                (this.coords.x_pointer = d - this.coords.x_gap),
                                this.calcPointerPercent(),
                                this.changeLevel(b),
                            g && a("*").prop("unselectable", !0),
                                this.$cache.line.trigger("focus"),
                                this.updateScene());
                        },
                        pointerClick: function (a, b) {
                            b.preventDefault();
                            var c = b.pageX || (b.originalEvent.touches && b.originalEvent.touches[0].pageX);
                            2 !== b.button &&
                            ((this.current_plugin = this.plugin_count),
                                (this.target = a),
                                (this.is_click = !0),
                                (this.coords.x_gap = this.$cache.rs.offset().left),
                                (this.coords.x_pointer = +(c - this.coords.x_gap).toFixed()),
                                (this.force_redraw = !0),
                                this.calc(),
                                this.$cache.line.trigger("focus"));
                        },
                        key: function (a, b) {
                            if (!(this.current_plugin !== this.plugin_count || b.altKey || b.ctrlKey || b.shiftKey || b.metaKey)) {
                                switch (b.which) {
                                    case 83:
                                    case 65:
                                    case 40:
                                    case 37:
                                        b.preventDefault(), this.moveByKey(!1);
                                        break;
                                    case 87:
                                    case 68:
                                    case 38:
                                    case 39:
                                        b.preventDefault(), this.moveByKey(!0);
                                }
                                return !0;
                            }
                        },
                        moveByKey: function (a) {
                            var b = this.coords.p_pointer;
                            a ? (b += this.options.keyboard_step) : (b -= this.options.keyboard_step), (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * b)), (this.is_key = !0), this.calc();
                        },
                        setMinMax: function () {
                            if (this.options) {
                                if (this.options.hide_min_max) return (this.$cache.min[0].style.display = "none"), void (this.$cache.max[0].style.display = "none");
                                this.options.values.length
                                    ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])))
                                    : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))),
                                    (this.labels.w_min = this.$cache.min.outerWidth(!1)),
                                    (this.labels.w_max = this.$cache.max.outerWidth(!1));
                            }
                        },
                        setTempMinInterval: function () {
                            var a = this.result.to - this.result.from;
                            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), (this.options.min_interval = a);
                        },
                        restoreOriginalMinInterval: function () {
                            null !== this.old_min_interval && ((this.options.min_interval = this.old_min_interval), (this.old_min_interval = null));
                        },
                        calc: function (a) {
                            if (this.options && (this.calc_count++, (10 === this.calc_count || a) && ((this.calc_count = 0), (this.coords.w_rs = this.$cache.rs.outerWidth(!1)), this.calcHandlePercent()), this.coords.w_rs)) {
                                this.calcPointerPercent();
                                var b = this.getHandleX();
                                switch (
                                    ("click" === this.target && ((this.coords.p_gap = this.coords.p_handle / 2), (b = this.getHandleX()), this.options.drag_interval ? (this.target = "both_one") : (this.target = this.chooseHandle(b))),
                                        this.target)
                                    ) {
                                    case "base":
                                        var c = (this.options.max - this.options.min) / 100,
                                            d = (this.result.from - this.options.min) / c,
                                            e = (this.result.to - this.options.min) / c;
                                        (this.coords.p_single_real = this.toFixed(d)),
                                            (this.coords.p_from_real = this.toFixed(d)),
                                            (this.coords.p_to_real = this.toFixed(e)),
                                            (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                            (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                            (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                            (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real)),
                                            (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                            (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)),
                                            (this.target = null);
                                        break;
                                    case "single":
                                        if (this.options.from_fixed) break;
                                        (this.coords.p_single_real = this.convertToRealPercent(b)),
                                            (this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real)),
                                            (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                            (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real));
                                        break;
                                    case "from":
                                        if (this.options.from_fixed) break;
                                        (this.coords.p_from_real = this.convertToRealPercent(b)),
                                            (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                        this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real),
                                            (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                            (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                            (this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                            (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real));
                                        break;
                                    case "to":
                                        if (this.options.to_fixed) break;
                                        (this.coords.p_to_real = this.convertToRealPercent(b)),
                                            (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                        this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real),
                                            (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                            (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                            (this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                            (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                                        break;
                                    case "both":
                                        if (this.options.from_fixed || this.options.to_fixed) break;
                                        (b = this.toFixed(b + 0.1 * this.coords.p_handle)),
                                            (this.coords.p_from_real = this.convertToRealPercent(b) - this.coords.p_gap_left),
                                            (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                            (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                            (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                            (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                            (this.coords.p_to_real = this.convertToRealPercent(b) + this.coords.p_gap_right),
                                            (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                            (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                            (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                            (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                                        break;
                                    case "both_one":
                                        if (this.options.from_fixed || this.options.to_fixed) break;
                                        var f = this.convertToRealPercent(b),
                                            g = this.result.from_percent,
                                            h = this.result.to_percent,
                                            i = h - g,
                                            j = i / 2,
                                            k = f - j,
                                            l = f + j;
                                        0 > k && ((k = 0), (l = k + i)),
                                        l > 100 && ((l = 100), (k = l - i)),
                                            (this.coords.p_from_real = this.calcWithStep(k)),
                                            (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                            (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                            (this.coords.p_to_real = this.calcWithStep(l)),
                                            (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                            (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                                }
                                "single" === this.options.type
                                    ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
                                        (this.coords.p_bar_w = this.coords.p_single_fake),
                                        (this.result.from_percent = this.coords.p_single_real),
                                        (this.result.from = this.convertToValue(this.coords.p_single_real)),
                                    this.options.values.length && (this.result.from_value = this.options.values[this.result.from]))
                                    : ((this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2)),
                                        (this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake)),
                                        (this.result.from_percent = this.coords.p_from_real),
                                        (this.result.from = this.convertToValue(this.coords.p_from_real)),
                                        (this.result.to_percent = this.coords.p_to_real),
                                        (this.result.to = this.convertToValue(this.coords.p_to_real)),
                                    this.options.values.length && ((this.result.from_value = this.options.values[this.result.from]), (this.result.to_value = this.options.values[this.result.to]))),
                                    this.calcMinMax(),
                                    this.calcLabels();
                            }
                        },
                        calcPointerPercent: function () {
                            return this.coords.w_rs
                                ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? (this.coords.x_pointer = 0) : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs),
                                    void (this.coords.p_pointer = this.toFixed((this.coords.x_pointer / this.coords.w_rs) * 100)))
                                : void (this.coords.p_pointer = 0);
                        },
                        convertToRealPercent: function (a) {
                            var b = 100 - this.coords.p_handle;
                            return (a / b) * 100;
                        },
                        convertToFakePercent: function (a) {
                            var b = 100 - this.coords.p_handle;
                            return (a / 100) * b;
                        },
                        getHandleX: function () {
                            var a = 100 - this.coords.p_handle,
                                b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                            return 0 > b ? (b = 0) : b > a && (b = a), b;
                        },
                        calcHandlePercent: function () {
                            "single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                                (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100));
                        },
                        chooseHandle: function (a) {
                            if ("single" === this.options.type) return "single";
                            var b = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;
                            return a >= b ? (this.options.to_fixed ? "from" : "to") : this.options.from_fixed ? "to" : "from";
                        },
                        calcMinMax: function () {
                            this.coords.w_rs && ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100), (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
                        },
                        calcLabels: function () {
                            this.coords.w_rs &&
                            !this.options.hide_from_to &&
                            ("single" === this.options.type
                                ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
                                    (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                                    (this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2),
                                    (this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)))
                                : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
                                    (this.labels.p_from_fake = (this.labels.w_from / this.coords.w_rs) * 100),
                                    (this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2),
                                    (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
                                    (this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake)),
                                    (this.labels.w_to = this.$cache.to.outerWidth(!1)),
                                    (this.labels.p_to_fake = (this.labels.w_to / this.coords.w_rs) * 100),
                                    (this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2),
                                    (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
                                    (this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake)),
                                    (this.labels.w_single = this.$cache.single.outerWidth(!1)),
                                    (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                                    (this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2),
                                    (this.labels.p_single_left = this.toFixed(this.labels.p_single_left)),
                                    (this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))));
                        },
                        updateScene: function () {
                            this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
                                clearTimeout(this.update_tm),
                                (this.update_tm = null),
                            this.options && (this.drawHandles(), this.is_active ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this))) : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
                        },
                        drawHandles: function () {
                            (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                            this.coords.w_rs &&
                            (this.coords.w_rs !== this.coords.w_rs_old && ((this.target = "base"), (this.is_resize = !0)),
                            (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) &&
                            (this.setMinMax(),
                                this.calc(!0),
                                this.drawLabels(),
                            this.options.grid && (this.calcGridMargin(), this.calcGridLabels()),
                                (this.force_redraw = !0),
                                (this.coords.w_rs_old = this.coords.w_rs),
                                this.drawShadow()),
                            this.coords.w_rs &&
                            (this.dragging || this.force_redraw || this.is_key) &&
                            ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) &&
                            (this.drawLabels(),
                                (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                                (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
                                "single" === this.options.type
                                    ? ((this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%"),
                                        (this.$cache.single[0].style.left = this.labels.p_single_left + "%"),
                                        this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from),
                                        this.$cache.input.data("from", this.result.from))
                                    : ((this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%"),
                                        (this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%"),
                                    (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"),
                                    (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"),
                                        (this.$cache.single[0].style.left = this.labels.p_single_left + "%"),
                                        this.options.values.length
                                            ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value)
                                            : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to),
                                        this.$cache.input.data("from", this.result.from),
                                        this.$cache.input.data("to", this.result.to)),
                            (this.old_from === this.result.from && this.old_to === this.result.to) || this.is_start || this.$cache.input.trigger("change"),
                                (this.old_from = this.result.from),
                                (this.old_to = this.result.to),
                            this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(),
                            (this.is_key || this.is_click) && ((this.is_key = !1), (this.is_click = !1), this.callOnFinish()),
                                (this.is_update = !1),
                                (this.is_resize = !1),
                                (this.is_finish = !1)),
                                (this.is_start = !1),
                                (this.is_key = !1),
                                (this.is_click = !1),
                                (this.force_redraw = !1)));
                        },
                        drawLabels: function () {
                            if (this.options) {
                                var c,
                                    d,
                                    e,
                                    a = this.options.values.length,
                                    b = this.options.p_values;
                                if (!this.options.hide_from_to)
                                    if ("single" === this.options.type)
                                        a ? ((c = this.decorate(b[this.result.from])), this.$cache.single.html(c)) : ((c = this.decorate(this._prettify(this.result.from), this.result.from)), this.$cache.single.html(c)),
                                            this.calcLabels(),
                                            this.labels.p_single_left < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                                            this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? (this.$cache.max[0].style.visibility = "hidden") : (this.$cache.max[0].style.visibility = "visible");
                                    else {
                                        a
                                            ? (this.options.decorate_both
                                                ? ((c = this.decorate(b[this.result.from])), (c += this.options.values_separator), (c += this.decorate(b[this.result.to])))
                                                : (c = this.decorate(b[this.result.from] + this.options.values_separator + b[this.result.to])),
                                                (d = this.decorate(b[this.result.from])),
                                                (e = this.decorate(b[this.result.to])),
                                                this.$cache.single.html(c),
                                                this.$cache.from.html(d),
                                                this.$cache.to.html(e))
                                            : (this.options.decorate_both
                                                ? ((c = this.decorate(this._prettify(this.result.from), this.result.from)), (c += this.options.values_separator), (c += this.decorate(this._prettify(this.result.to), this.result.to)))
                                                : (c = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to)),
                                                (d = this.decorate(this._prettify(this.result.from), this.result.from)),
                                                (e = this.decorate(this._prettify(this.result.to), this.result.to)),
                                                this.$cache.single.html(c),
                                                this.$cache.from.html(d),
                                                this.$cache.to.html(e)),
                                            this.calcLabels();
                                        var f = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                                            g = this.labels.p_single_left + this.labels.p_single_fake,
                                            h = this.labels.p_to_left + this.labels.p_to_fake,
                                            i = Math.max(g, h);
                                        this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left
                                            ? ((this.$cache.from[0].style.visibility = "hidden"),
                                                (this.$cache.to[0].style.visibility = "hidden"),
                                                (this.$cache.single[0].style.visibility = "visible"),
                                                this.result.from === this.result.to
                                                    ? ((this.$cache.from[0].style.visibility = "visible"), (this.$cache.single[0].style.visibility = "hidden"), (i = h))
                                                    : ((this.$cache.from[0].style.visibility = "hidden"), (this.$cache.single[0].style.visibility = "visible"), (i = Math.max(g, h))))
                                            : ((this.$cache.from[0].style.visibility = "visible"), (this.$cache.to[0].style.visibility = "visible"), (this.$cache.single[0].style.visibility = "hidden")),
                                            f < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                                            i > 100 - this.labels.p_max - 1 ? (this.$cache.max[0].style.visibility = "hidden") : (this.$cache.max[0].style.visibility = "visible");
                                    }
                            }
                        },
                        drawShadow: function () {
                            var g,
                                h,
                                i,
                                j,
                                a = this.options,
                                b = this.$cache,
                                c = "number" == typeof a.from_min && !isNaN(a.from_min),
                                d = "number" == typeof a.from_max && !isNaN(a.from_max),
                                e = "number" == typeof a.to_min && !isNaN(a.to_min),
                                f = "number" == typeof a.to_max && !isNaN(a.to_max);
                            "single" === a.type
                                ? a.from_shadow && (c || d)
                                    ? ((g = this.convertToPercent(c ? a.from_min : a.min)),
                                        (h = this.convertToPercent(d ? a.from_max : a.max) - g),
                                        (g = this.toFixed(g - (this.coords.p_handle / 100) * g)),
                                        (h = this.toFixed(h - (this.coords.p_handle / 100) * h)),
                                        (g += this.coords.p_handle / 2),
                                        (b.shad_single[0].style.display = "block"),
                                        (b.shad_single[0].style.left = g + "%"),
                                        (b.shad_single[0].style.width = h + "%"))
                                    : (b.shad_single[0].style.display = "none")
                                : (a.from_shadow && (c || d)
                                    ? ((g = this.convertToPercent(c ? a.from_min : a.min)),
                                        (h = this.convertToPercent(d ? a.from_max : a.max) - g),
                                        (g = this.toFixed(g - (this.coords.p_handle / 100) * g)),
                                        (h = this.toFixed(h - (this.coords.p_handle / 100) * h)),
                                        (g += this.coords.p_handle / 2),
                                        (b.shad_from[0].style.display = "block"),
                                        (b.shad_from[0].style.left = g + "%"),
                                        (b.shad_from[0].style.width = h + "%"))
                                    : (b.shad_from[0].style.display = "none"),
                                    a.to_shadow && (e || f)
                                        ? ((i = this.convertToPercent(e ? a.to_min : a.min)),
                                            (j = this.convertToPercent(f ? a.to_max : a.max) - i),
                                            (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                                            (j = this.toFixed(j - (this.coords.p_handle / 100) * j)),
                                            (i += this.coords.p_handle / 2),
                                            (b.shad_to[0].style.display = "block"),
                                            (b.shad_to[0].style.left = i + "%"),
                                            (b.shad_to[0].style.width = j + "%"))
                                        : (b.shad_to[0].style.display = "none"));
                        },
                        callOnStart: function () {
                            this.options.onStart && "function" == typeof this.options.onStart && this.options.onStart(this.result);
                        },
                        callOnChange: function () {
                            this.options.onChange && "function" == typeof this.options.onChange && this.options.onChange(this.result);
                        },
                        callOnFinish: function () {
                            this.options.onFinish && "function" == typeof this.options.onFinish && this.options.onFinish(this.result);
                        },
                        callOnUpdate: function () {
                            this.options.onUpdate && "function" == typeof this.options.onUpdate && this.options.onUpdate(this.result);
                        },
                        toggleInput: function () {
                            this.$cache.input.toggleClass("irs-hidden-input");
                        },
                        convertToPercent: function (a, b) {
                            var e,
                                f,
                                c = this.options.max - this.options.min,
                                d = c / 100;
                            return c ? ((e = b ? a : a - this.options.min), (f = e / d), this.toFixed(f)) : ((this.no_diapason = !0), 0);
                        },
                        convertToValue: function (a) {
                            var f,
                                g,
                                b = this.options.min,
                                c = this.options.max,
                                d = b.toString().split(".")[1],
                                e = c.toString().split(".")[1],
                                h = 0,
                                i = 0;
                            if (0 === a) return this.options.min;
                            if (100 === a) return this.options.max;
                            d && ((f = d.length), (h = f)), e && ((g = e.length), (h = g)), f && g && (h = f >= g ? f : g), 0 > b && ((i = Math.abs(b)), (b = +(b + i).toFixed(h)), (c = +(c + i).toFixed(h)));
                            var l,
                                j = ((c - b) / 100) * a + b,
                                k = this.options.step.toString().split(".")[1];
                            return (
                                k ? (j = +j.toFixed(k.length)) : ((j /= this.options.step), (j *= this.options.step), (j = +j.toFixed(0))),
                                i && (j -= i),
                                    (l = k ? +j.toFixed(k.length) : this.toFixed(j)),
                                    l < this.options.min ? (l = this.options.min) : l > this.options.max && (l = this.options.max),
                                    l
                            );
                        },
                        calcWithStep: function (a) {
                            var b = Math.round(a / this.coords.p_step) * this.coords.p_step;
                            return b > 100 && (b = 100), 100 === a && (b = 100), this.toFixed(b);
                        },
                        checkMinInterval: function (a, b, c) {
                            var e,
                                f,
                                d = this.options;
                            return d.min_interval
                                ? ((e = this.convertToValue(a)), (f = this.convertToValue(b)), "from" === c ? f - e < d.min_interval && (e = f - d.min_interval) : e - f < d.min_interval && (e = f + d.min_interval), this.convertToPercent(e))
                                : a;
                        },
                        checkMaxInterval: function (a, b, c) {
                            var e,
                                f,
                                d = this.options;
                            return d.max_interval
                                ? ((e = this.convertToValue(a)), (f = this.convertToValue(b)), "from" === c ? f - e > d.max_interval && (e = f - d.max_interval) : e - f > d.max_interval && (e = f + d.max_interval), this.convertToPercent(e))
                                : a;
                        },
                        checkDiapason: function (a, b, c) {
                            var d = this.convertToValue(a),
                                e = this.options;
                            return "number" != typeof b && (b = e.min), "number" != typeof c && (c = e.max), b > d && (d = b), d > c && (d = c), this.convertToPercent(d);
                        },
                        toFixed: function (a) {
                            return (a = a.toFixed(9)), +a;
                        },
                        _prettify: function (a) {
                            return this.options.prettify_enabled ? (this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(a) : this.prettify(a)) : a;
                        },
                        prettify: function (a) {
                            var b = a.toString();
                            return b.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
                        },
                        checkEdges: function (a, b) {
                            return this.options.force_edges ? (0 > a ? (a = 0) : a > 100 - b && (a = 100 - b), this.toFixed(a)) : this.toFixed(a);
                        },
                        validate: function () {
                            var e,
                                f,
                                a = this.options,
                                b = this.result,
                                c = a.values,
                                d = c.length;
                            if (
                                ("string" == typeof a.min && (a.min = +a.min),
                                "string" == typeof a.max && (a.max = +a.max),
                                "string" == typeof a.from && (a.from = +a.from),
                                "string" == typeof a.to && (a.to = +a.to),
                                "string" == typeof a.step && (a.step = +a.step),
                                "string" == typeof a.from_min && (a.from_min = +a.from_min),
                                "string" == typeof a.from_max && (a.from_max = +a.from_max),
                                "string" == typeof a.to_min && (a.to_min = +a.to_min),
                                "string" == typeof a.to_max && (a.to_max = +a.to_max),
                                "string" == typeof a.keyboard_step && (a.keyboard_step = +a.keyboard_step),
                                "string" == typeof a.grid_num && (a.grid_num = +a.grid_num),
                                a.max < a.min && (a.max = a.min),
                                    d)
                            )
                                for (a.p_values = [], a.min = 0, a.max = d - 1, a.step = 1, a.grid_num = a.max, a.grid_snap = !0, f = 0; d > f; f++)
                                    (e = +c[f]), isNaN(e) ? (e = c[f]) : ((c[f] = e), (e = this._prettify(e))), a.p_values.push(e);
                            ("number" != typeof a.from || isNaN(a.from)) && (a.from = a.min),
                            ("number" != typeof a.to || isNaN(a.from)) && (a.to = a.max),
                                "single" === a.type
                                    ? (a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max))
                                    : ((a.from < a.min || a.from > a.max) && (a.from = a.min), (a.to > a.max || a.to < a.min) && (a.to = a.max), a.from > a.to && (a.from = a.to)),
                            ("number" != typeof a.step || isNaN(a.step) || !a.step || a.step < 0) && (a.step = 1),
                            ("number" != typeof a.keyboard_step || isNaN(a.keyboard_step) || !a.keyboard_step || a.keyboard_step < 0) && (a.keyboard_step = 5),
                            "number" == typeof a.from_min && a.from < a.from_min && (a.from = a.from_min),
                            "number" == typeof a.from_max && a.from > a.from_max && (a.from = a.from_max),
                            "number" == typeof a.to_min && a.to < a.to_min && (a.to = a.to_min),
                            "number" == typeof a.to_max && a.from > a.to_max && (a.to = a.to_max),
                            b && (b.min !== a.min && (b.min = a.min), b.max !== a.max && (b.max = a.max), (b.from < b.min || b.from > b.max) && (b.from = a.from), (b.to < b.min || b.to > b.max) && (b.to = a.to)),
                            ("number" != typeof a.min_interval || isNaN(a.min_interval) || !a.min_interval || a.min_interval < 0) && (a.min_interval = 0),
                            ("number" != typeof a.max_interval || isNaN(a.max_interval) || !a.max_interval || a.max_interval < 0) && (a.max_interval = 0),
                            a.min_interval && a.min_interval > a.max - a.min && (a.min_interval = a.max - a.min),
                            a.max_interval && a.max_interval > a.max - a.min && (a.max_interval = a.max - a.min);
                        },
                        decorate: function (a, b) {
                            var c = "",
                                d = this.options;
                            return (
                                d.prefix && (c += d.prefix),
                                    (c += a),
                                d.max_postfix && (d.values.length && a === d.p_values[d.max] ? ((c += d.max_postfix), d.postfix && (c += " ")) : b === d.max && ((c += d.max_postfix), d.postfix && (c += " "))),
                                d.postfix && (c += d.postfix),
                                    c
                            );
                        },
                        updateFrom: function () {
                            (this.result.from = this.options.from), (this.result.from_percent = this.convertToPercent(this.result.from)), this.options.values && (this.result.from_value = this.options.values[this.result.from]);
                        },
                        updateTo: function () {
                            (this.result.to = this.options.to), (this.result.to_percent = this.convertToPercent(this.result.to)), this.options.values && (this.result.to_value = this.options.values[this.result.to]);
                        },
                        updateResult: function () {
                            (this.result.min = this.options.min), (this.result.max = this.options.max), this.updateFrom(), this.updateTo();
                        },
                        appendGrid: function () {
                            if (this.options.grid) {
                                var b,
                                    c,
                                    i,
                                    j,
                                    l,
                                    a = this.options,
                                    d = a.max - a.min,
                                    e = a.grid_num,
                                    f = 0,
                                    g = 0,
                                    h = 4,
                                    k = 0,
                                    m = "";
                                for (
                                    this.calcGridMargin(),
                                        a.grid_snap ? ((e = d / a.step), (f = this.toFixed(a.step / (d / 100)))) : (f = this.toFixed(100 / e)),
                                    e > 4 && (h = 3),
                                    e > 7 && (h = 2),
                                    e > 14 && (h = 1),
                                    e > 28 && (h = 0),
                                        b = 0;
                                    e + 1 > b;
                                    b++
                                ) {
                                    for (i = h, g = this.toFixed(f * b), g > 100 && ((g = 100), (i -= 2), 0 > i && (i = 0)), this.coords.big[b] = g, j = (g - f * (b - 1)) / (i + 1), c = 1; i >= c && 0 !== g; c++)
                                        (k = this.toFixed(g - j * c)), (m += '<span class="irs-grid-pol small" style="left: ' + k + '%"></span>');
                                    (m += '<span class="irs-grid-pol" style="left: ' + g + '%"></span>'),
                                        (l = this.convertToValue(g)),
                                        (l = a.values.length ? a.p_values[l] : this._prettify(l)),
                                        (m += '<span class="irs-grid-text js-grid-text-' + b + '" style="left: ' + g + '%">' + l + "</span>");
                                }
                                (this.coords.big_num = Math.ceil(e + 1)), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(m), this.cacheGridLabels();
                            }
                        },
                        cacheGridLabels: function () {
                            var a,
                                b,
                                c = this.coords.big_num;
                            for (b = 0; c > b; b++) (a = this.$cache.grid.find(".js-grid-text-" + b)), this.$cache.grid_labels.push(a);
                            this.calcGridLabels();
                        },
                        calcGridLabels: function () {
                            var a,
                                b,
                                c = [],
                                d = [],
                                e = this.coords.big_num;
                            for (a = 0; e > a; a++)
                                (this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1)),
                                    (this.coords.big_p[a] = this.toFixed((this.coords.big_w[a] / this.coords.w_rs) * 100)),
                                    (this.coords.big_x[a] = this.toFixed(this.coords.big_p[a] / 2)),
                                    (c[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a])),
                                    (d[a] = this.toFixed(c[a] + this.coords.big_p[a]));
                            for (
                                this.options.force_edges &&
                                (c[0] < -this.coords.grid_gap && ((c[0] = -this.coords.grid_gap), (d[0] = this.toFixed(c[0] + this.coords.big_p[0])), (this.coords.big_x[0] = this.coords.grid_gap)),
                                d[e - 1] > 100 + this.coords.grid_gap &&
                                ((d[e - 1] = 100 + this.coords.grid_gap), (c[e - 1] = this.toFixed(d[e - 1] - this.coords.big_p[e - 1])), (this.coords.big_x[e - 1] = this.toFixed(this.coords.big_p[e - 1] - this.coords.grid_gap)))),
                                    this.calcGridCollision(2, c, d),
                                    this.calcGridCollision(4, c, d),
                                    a = 0;
                                e > a;
                                a++
                            )
                                (b = this.$cache.grid_labels[a][0]), (b.style.marginLeft = -this.coords.big_x[a] + "%");
                        },
                        calcGridCollision: function (a, b, c) {
                            var d,
                                e,
                                f,
                                g = this.coords.big_num;
                            for (d = 0; g > d && ((e = d + a / 2), !(e >= g)); d += a) (f = this.$cache.grid_labels[e][0]), c[d] <= b[e] ? (f.style.visibility = "visible") : (f.style.visibility = "hidden");
                        },
                        calcGridMargin: function () {
                            this.options.grid_margin &&
                            ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                            this.coords.w_rs &&
                            ("single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                                (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100)),
                                (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
                                (this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%"),
                                (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
                        },
                        update: function (b) {
                            this.input &&
                            ((this.is_update = !0),
                                (this.options.from = this.result.from),
                                (this.options.to = this.result.to),
                                (this.options = a.extend(this.options, b)),
                                this.validate(),
                                this.updateResult(b),
                                this.toggleInput(),
                                this.remove(),
                                this.init(!0));
                        },
                        reset: function () {
                            this.input && (this.updateResult(), this.update());
                        },
                        destroy: function () {
                            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), (this.input = null), (this.options = null));
                        },
                    }),
                        (a.fn.ionRangeSlider = function (b) {
                            return this.each(function () {
                                a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new l(this, b, f++));
                            });
                        }),
                        (function () {
                            for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !c.requestAnimationFrame; ++d)
                                (c.requestAnimationFrame = c[b[d] + "RequestAnimationFrame"]), (c.cancelAnimationFrame = c[b[d] + "CancelAnimationFrame"] || c[b[d] + "CancelRequestAnimationFrame"]);
                            c.requestAnimationFrame ||
                            (c.requestAnimationFrame = function (b, d) {
                                var e = new Date().getTime(),
                                    f = Math.max(0, 16 - (e - a)),
                                    g = c.setTimeout(function () {
                                        b(e + f);
                                    }, f);
                                return (a = e + f), g;
                            }),
                            c.cancelAnimationFrame ||
                            (c.cancelAnimationFrame = function (a) {
                                clearTimeout(a);
                            });
                        })();
                })(jQuery, document, window, navigator);
            },
            {},
        ],
        11: [
            function (a, b, c) {
                !(function (a) {
                    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
                })(function (a) {
                    a.extend(a.fn, {
                        validate: function (b) {
                            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                            var c = a.data(this[0], "validator");
                            return c
                                ? c
                                : (this.attr("novalidate", "novalidate"),
                                    (c = new a.validator(b, this[0])),
                                    a.data(this[0], "validator", c),
                                c.settings.onsubmit &&
                                (this.on("click.validate", ":submit", function (b) {
                                    c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
                                }),
                                    this.on("submit.validate", function (b) {
                                        function d() {
                                            var d, e;
                                            return c.settings.submitHandler
                                                ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                                                    (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                                                c.submitButton && d.remove(),
                                                    void 0 !== e ? e : !1)
                                                : !0;
                                        }
                                        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? ((c.cancelSubmit = !1), d()) : c.form() ? (c.pendingRequest ? ((c.formSubmitted = !0), !1) : d()) : (c.focusInvalid(), !1);
                                    })))//,
                                    //c);
                        },
                        valid: function () {
                            var b, c, d;
                            return (
                                a(this[0]).is("form")
                                    ? (b = this.validate().form())
                                    : ((d = []),
                                        (b = !0),
                                        (c = a(this[0].form).validate()),
                                        this.each(function () {
                                            (b = c.element(this) && b), (d = d.concat(c.errorList));
                                        }),
                                        (c.errorList = d)),
                                    b
                            );
                        },
                        rules: function (b, c) {
                            var e,
                                f,
                                g,
                                h,
                                i,
                                j,
                                d = this[0];
                            if (b)
                                switch (((e = a.data(d.form, "validator").settings), (f = e.rules), (g = a.validator.staticRules(d)), b)) {
                                    case "add":
                                        a.extend(g, a.validator.normalizeRule(c)), delete g.messages, (f[d.name] = g), c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                                        break;
                                    case "remove":
                                        return c
                                            ? ((j = {}),
                                                a.each(c.split(/\s/), function (b, c) {
                                                    (j[c] = g[c]), delete g[c], "required" === c && a(d).removeAttr("aria-required");
                                                }),
                                                j)
                                            : (delete f[d.name], g);
                                }
                            return (
                                (h = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d)),
                                h.required && ((i = h.required), delete h.required, (h = a.extend({ required: i }, h)), a(d).attr("aria-required", "true")),
                                h.remote && ((i = h.remote), delete h.remote, (h = a.extend(h, { remote: i }))),
                                    h
                            );
                        },
                    }),
                        a.extend(a.expr[":"], {
                            blank: function (b) {
                                return !a.trim("" + a(b).val());
                            },
                            filled: function (b) {
                                return !!a.trim("" + a(b).val());
                            },
                            unchecked: function (b) {
                                return !a(b).prop("checked");
                            },
                        }),
                        (a.validator = function (b, c) {
                            (this.settings = a.extend(!0, {}, a.validator.defaults, b)), (this.currentForm = c), this.init();
                        }),
                        (a.validator.format = function (b, c) {
                            return 1 === arguments.length
                                ? function () {
                                    var c = a.makeArray(arguments);
                                    return c.unshift(b), a.validator.format.apply(this, c);
                                }
                                : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
                                c.constructor !== Array && (c = [c]),
                                    a.each(c, function (a, c) {
                                        b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                                            return c;
                                        });
                                    }),
                                    b);
                        }),
                        a.extend(a.validator, {
                            defaults: {
                                messages: {},
                                groups: {},
                                rules: {},
                                errorClass: "error",
                                validClass: "valid",
                                errorElement: "label",
                                focusCleanup: !1,
                                focusInvalid: !0,
                                errorContainer: a([]),
                                errorLabelContainer: a([]),
                                onsubmit: !0,
                                ignore: ":hidden",
                                ignoreTitle: !1,
                                onfocusin: function (a) {
                                    (this.lastActive = a),
                                    this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
                                },
                                onfocusout: function (a) {
                                    this.checkable(a) || (!(a.name in this.submitted) && this.optional(a)) || this.element(a);
                                },
                                onkeyup: function (b, c) {
                                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                                    (9 === c.which && "" === this.elementValue(b)) || -1 !== a.inArray(c.keyCode, d) || ((b.name in this.submitted || b === this.lastElement) && this.element(b));
                                },
                                onclick: function (a) {
                                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
                                },
                                highlight: function (b, c, d) {
                                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
                                },
                                unhighlight: function (b, c, d) {
                                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
                                },
                            },
                            setDefaults: function (b) {
                                a.extend(a.validator.defaults, b);
                            },
                            messages: {
                                required: "This field is required.",
                                remote: "Please fix this field.",
                                email: "Please enter a valid email address.",
                                url: "Please enter a valid URL.",
                                date: "Please enter a valid date.",
                                dateISO: "Please enter a valid date ( ISO ).",
                                number: "Please enter a valid number.",
                                digits: "Please enter only digits.",
                                creditcard: "Please enter a valid credit card number.",
                                equalTo: "Please enter the same value again.",
                                maxlength: a.validator.format("Please enter no more than {0} characters."),
                                minlength: a.validator.format("Please enter at least {0} characters."),
                                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                                range: a.validator.format("Please enter a value between {0} and {1}."),
                                max: a.validator.format("Please enter a value less than or equal to {0}."),
                                min: a.validator.format("Please enter a value greater than or equal to {0}."),
                            },
                            autoCreateRanges: !1,
                            prototype: {
                                init: function () {
                                    function d(b) {
                                        var c = a.data(this.form, "validator"),
                                            d = "on" + b.type.replace(/^validate/, ""),
                                            e = c.settings;
                                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
                                    }
                                    (this.labelContainer = a(this.settings.errorLabelContainer)),
                                        (this.errorContext = (this.labelContainer.length && this.labelContainer) || a(this.currentForm)),
                                        (this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                                        (this.submitted = {}),
                                        (this.valueCache = {}),
                                        (this.pendingRequest = 0),
                                        (this.pending = {}),
                                        (this.invalid = {}),
                                        this.reset();
                                    var c,
                                        b = (this.groups = {});
                                    a.each(this.settings.groups, function (c, d) {
                                        "string" == typeof d && (d = d.split(/\s/)),
                                            a.each(d, function (a, d) {
                                                b[d] = c;
                                            });
                                    }),
                                        (c = this.settings.rules),
                                        a.each(c, function (b, d) {
                                            c[b] = a.validator.normalizeRule(d);
                                        }),
                                        a(this.currentForm)
                                            .on(
                                                "focusin.validate focusout.validate keyup.validate",
                                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                                                d
                                            )
                                            .on("click.validate", "select, option, [type='radio'], [type='checkbox']", d),
                                    this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                                        a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
                                },
                                form: function () {
                                    return (
                                        this.checkForm(),
                                            a.extend(this.submitted, this.errorMap),
                                            (this.invalid = a.extend({}, this.errorMap)),
                                        this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                                            this.showErrors(),
                                            this.valid()
                                    );
                                },
                                checkForm: function () {
                                    this.prepareForm();
                                    for (var a = 0, b = (this.currentElements = this.elements()); b[a]; a++) this.check(b[a]);
                                    return this.valid();
                                },
                                element: function (b) {
                                    var c = this.clean(b),
                                        d = this.validationTargetFor(c),
                                        e = !0;
                                    return (
                                        (this.lastElement = d),
                                            void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), (this.currentElements = a(d)), (e = this.check(d) !== !1), e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
                                            a(b).attr("aria-invalid", !e),
                                        this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                                            this.showErrors(),
                                            e
                                    );
                                },
                                showErrors: function (b) {
                                    if (b) {
                                        a.extend(this.errorMap, b), (this.errorList = []);
                                        for (var c in b) this.errorList.push({ message: b[c], element: this.findByName(c)[0] });
                                        this.successList = a.grep(this.successList, function (a) {
                                            return !(a.name in b);
                                        });
                                    }
                                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                                },
                                resetForm: function () {
                                    a.fn.resetForm && a(this.currentForm).resetForm(), (this.submitted = {}), (this.lastElement = null), this.prepareForm(), this.hideErrors();
                                    var b,
                                        c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                                    if (this.settings.unhighlight) for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                                    else c.removeClass(this.settings.errorClass);
                                },
                                numberOfInvalids: function () {
                                    return this.objectLength(this.invalid);
                                },
                                objectLength: function (a) {
                                    var c,
                                        b = 0;
                                    for (c in a) b++;
                                    return b;
                                },
                                hideErrors: function () {
                                    this.hideThese(this.toHide);
                                },
                                hideThese: function (a) {
                                    a.not(this.containers).text(""), this.addWrapper(a).hide();
                                },
                                valid: function () {
                                    return 0 === this.size();
                                },
                                size: function () {
                                    return this.errorList.length;
                                },
                                focusInvalid: function () {
                                    if (this.settings.focusInvalid)
                                        try {
                                            a(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                                .filter(":visible")
                                                .focus()
                                                .trigger("focusin");
                                        } catch (b) {}
                                },
                                findLastActive: function () {
                                    var b = this.lastActive;
                                    return (
                                        b &&
                                        1 ===
                                        a.grep(this.errorList, function (a) {
                                            return a.element.name === b.name;
                                        }).length &&
                                        b
                                    );
                                },
                                elements: function () {
                                    var b = this,
                                        c = {};
                                    return a(this.currentForm)
                                        .find("input, select, textarea")
                                        .not(":submit, :reset, :image, :disabled")
                                        .not(this.settings.ignore)
                                        .filter(function () {
                                            return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : ((c[this.name] = !0), !0);
                                        });
                                },
                                clean: function (b) {
                                    return a(b)[0];
                                },
                                errors: function () {
                                    var b = this.settings.errorClass.split(" ").join(".");
                                    return a(this.settings.errorElement + "." + b, this.errorContext);
                                },
                                reset: function () {
                                    (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = a([])), (this.toHide = a([])), (this.currentElements = a([]));
                                },
                                prepareForm: function () {
                                    this.reset(), (this.toHide = this.errors().add(this.containers));
                                },
                                prepareElement: function (a) {
                                    this.reset(), (this.toHide = this.errorsFor(a));
                                },
                                elementValue: function (b) {
                                    var c,
                                        d = a(b),
                                        e = b.type;
                                    return "radio" === e || "checkbox" === e
                                        ? this.findByName(b.name).filter(":checked").val()
                                        : "number" === e && "undefined" != typeof b.validity
                                            ? b.validity.badInput
                                                ? !1
                                                : d.val()
                                            : ((c = d.val()), "string" == typeof c ? c.replace(/\r/g, "") : c);
                                },
                                check: function (b) {
                                    b = this.validationTargetFor(this.clean(b));
                                    var g,
                                        h,
                                        i,
                                        c = a(b).rules(),
                                        d = a.map(c, function (a, b) {
                                            return b;
                                        }).length,
                                        e = !1,
                                        f = this.elementValue(b);
                                    for (h in c) {
                                        i = { method: h, parameters: c[h] };
                                        try {
                                            if (((g = a.validator.methods[h].call(this, f, b, i.parameters)), "dependency-mismatch" === g && 1 === d)) {
                                                e = !0;
                                                continue;
                                            }
                                            if (((e = !1), "pending" === g)) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                                            if (!g) return this.formatAndAdd(b, i), !1;
                                        } catch (j) {
                                            throw (
                                                (this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + i.method + "' method.", j),
                                                j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + i.method + "' method."),
                                                    j)
                                            );
                                        }
                                    }
                                    if (!e) return this.objectLength(c) && this.successList.push(b), !0;
                                },
                                customDataMessage: function (b, c) {
                                    return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
                                },
                                customMessage: function (a, b) {
                                    var c = this.settings.messages[a];
                                    return c && (c.constructor === String ? c : c[b]);
                                },
                                findDefined: function () {
                                    for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                                    return void 0;
                                },
                                defaultMessage: function (b, c) {
                                    return this.findDefined(
                                        this.customMessage(b.name, c),
                                        this.customDataMessage(b, c),
                                        (!this.settings.ignoreTitle && b.title) || void 0,
                                        a.validator.messages[c],
                                        "<strong>Warning: No message defined for " + b.name + "</strong>"
                                    );
                                },
                                formatAndAdd: function (b, c) {
                                    var d = this.defaultMessage(b, c.method),
                                        e = /\$?\{(\d+)\}/g;
                                    "function" == typeof d ? (d = d.call(this, c.parameters, b)) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                                        this.errorList.push({ message: d, element: b, method: c.method }),
                                        (this.errorMap[b.name] = d),
                                        (this.submitted[b.name] = d);
                                },
                                addWrapper: function (a) {
                                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
                                },
                                defaultShowErrors: function () {
                                    var a, b, c;
                                    for (a = 0; this.errorList[a]; a++)
                                        (c = this.errorList[a]), this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                                    if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                                    if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                                    (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                                },
                                validElements: function () {
                                    return this.currentElements.not(this.invalidElements());
                                },
                                invalidElements: function () {
                                    return a(this.errorList).map(function () {
                                        return this.element;
                                    });
                                },
                                showLabel: function (b, c) {
                                    var d,
                                        e,
                                        f,
                                        g = this.errorsFor(b),
                                        h = this.idOrName(b),
                                        i = a(b).attr("aria-describedby");
                                    g.length
                                        ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c))
                                        : ((g = a("<" + this.settings.errorElement + ">")
                                            .attr("id", h + "-error")
                                            .addClass(this.settings.errorClass)
                                            .html(c || "")),
                                            (d = g),
                                        this.settings.wrapper &&
                                        (d = g
                                            .hide()
                                            .show()
                                            .wrap("<" + this.settings.wrapper + "/>")
                                            .parent()),
                                            this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b),
                                            g.is("label")
                                                ? g.attr("for", h)
                                                : 0 === g.parents("label[for='" + h + "']").length &&
                                                ((f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                                                    i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : (i = f),
                                                    a(b).attr("aria-describedby", i),
                                                    (e = this.groups[b.name]),
                                                e &&
                                                a.each(this.groups, function (b, c) {
                                                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"));
                                                }))),
                                    !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)),
                                        (this.toShow = this.toShow.add(g));
                                },
                                errorsFor: function (b) {
                                    var c = this.idOrName(b),
                                        d = a(b).attr("aria-describedby"),
                                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                                    return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e);
                                },
                                idOrName: function (a) {
                                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
                                },
                                validationTargetFor: function (b) {
                                    return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
                                },
                                checkable: function (a) {
                                    return /radio|checkbox/i.test(a.type);
                                },
                                findByName: function (b) {
                                    return a(this.currentForm).find("[name='" + b + "']");
                                },
                                getLength: function (b, c) {
                                    switch (c.nodeName.toLowerCase()) {
                                        case "select":
                                            return a("option:selected", c).length;
                                        case "input":
                                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                                    }
                                    return b.length;
                                },
                                depend: function (a, b) {
                                    return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0;
                                },
                                dependTypes: {
                                    boolean: function (a) {
                                        return a;
                                    },
                                    string: function (b, c) {
                                        return !!a(b, c.form).length;
                                    },
                                    function: function (a, b) {
                                        return a(b);
                                    },
                                },
                                optional: function (b) {
                                    var c = this.elementValue(b);
                                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
                                },
                                startRequest: function (a) {
                                    this.pending[a.name] || (this.pendingRequest++, (this.pending[a.name] = !0));
                                },
                                stopRequest: function (b, c) {
                                    this.pendingRequest--,
                                    this.pendingRequest < 0 && (this.pendingRequest = 0),
                                        delete this.pending[b.name],
                                        c && 0 === this.pendingRequest && this.formSubmitted && this.form()
                                            ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
                                            : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                                },
                                previousValue: function (b) {
                                    return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, "remote") });
                                },
                                destroy: function () {
                                    this.resetForm(), a(this.currentForm).off(".validate").removeData("validator");
                                },
                            },
                            classRuleSettings: {
                                required: { required: !0 },
                                email: { email: !0 },
                                url: { url: !0 },
                                date: { date: !0 },
                                dateISO: { dateISO: !0 },
                                number: { number: !0 },
                                digits: { digits: !0 },
                                creditcard: { creditcard: !0 },
                            },
                            addClassRules: function (b, c) {
                                b.constructor === String ? (this.classRuleSettings[b] = c) : a.extend(this.classRuleSettings, b);
                            },
                            classRules: function (b) {
                                var c = {},
                                    d = a(b).attr("class");
                                return (
                                    d &&
                                    a.each(d.split(" "), function () {
                                        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
                                    }),
                                        c
                                );
                            },
                            normalizeAttributeRule: function (a, b, c, d) {
                                /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && ((d = Number(d)), isNaN(d) && (d = void 0)), d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
                            },
                            attributeRules: function (b) {
                                var f,
                                    g,
                                    c = {},
                                    d = a(b),
                                    e = b.getAttribute("type");
                                for (f in a.validator.methods) "required" === f ? ((g = b.getAttribute(f)), "" === g && (g = !0), (g = !!g)) : (g = d.attr(f)), this.normalizeAttributeRule(c, e, f, g);
                                return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c;
                            },
                            dataRules: function (b) {
                                var f,
                                    g,
                                    c = {},
                                    d = a(b),
                                    e = b.getAttribute("type");
                                for (f in a.validator.methods) (g = d.data("rule" + f.charAt(0).toUpperCase() + f.substring(1).toLowerCase())), this.normalizeAttributeRule(c, e, f, g);
                                return c;
                            },
                            staticRules: function (b) {
                                var c = {},
                                    d = a.data(b.form, "validator");
                                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
                            },
                            normalizeRules: function (b, c) {
                                return (
                                    a.each(b, function (d, e) {
                                        if (e === !1) return void delete b[d];
                                        if (e.param || e.depends) {
                                            var f = !0;
                                            switch (typeof e.depends) {
                                                case "string":
                                                    f = !!a(e.depends, c.form).length;
                                                    break;
                                                case "function":
                                                    f = e.depends.call(c, c);
                                            }
                                            f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
                                        }
                                    }),
                                        a.each(b, function (d, e) {
                                            b[d] = a.isFunction(e) ? e(c) : e;
                                        }),
                                        a.each(["minlength", "maxlength"], function () {
                                            b[this] && (b[this] = Number(b[this]));
                                        }),
                                        a.each(["rangelength", "range"], function () {
                                            var c;
                                            b[this] &&
                                            (a.isArray(b[this])
                                                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                                                : "string" == typeof b[this] && ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (b[this] = [Number(c[0]), Number(c[1])])));
                                        }),
                                    a.validator.autoCreateRanges &&
                                    (null != b.min && null != b.max && ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                                    null != b.minlength && null != b.maxlength && ((b.rangelength = [b.minlength, b.maxlength]), delete b.minlength, delete b.maxlength)),
                                        b
                                );
                            },
                            normalizeRule: function (b) {
                                if ("string" == typeof b) {
                                    var c = {};
                                    a.each(b.split(/\s/), function () {
                                        c[this] = !0;
                                    }),
                                        (b = c);
                                }
                                return b;
                            },
                            addMethod: function (b, c, d) {
                                (a.validator.methods[b] = c), (a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b]), c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
                            },
                            methods: {
                                required: function (b, c, d) {
                                    if (!this.depend(d, c)) return "dependency-mismatch";
                                    if ("select" === c.nodeName.toLowerCase()) {
                                        var e = a(c).val();
                                        return e && e.length > 0;
                                    }
                                    return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
                                },
                                email: function (a, b) {
                                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
                                },
                                url: function (a, b) {
                                    return (
                                        this.optional(b) ||
                                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                                            a
                                        )
                                    );
                                },
                                date: function (a, b) {
                                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
                                },
                                dateISO: function (a, b) {
                                    return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
                                },
                                number: function (a, b) {
                                    return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
                                },
                                digits: function (a, b) {
                                    return this.optional(b) || /^\d+$/.test(a);
                                },
                                creditcard: function (a, b) {
                                    if (this.optional(b)) return "dependency-mismatch";
                                    if (/[^0-9 \-]+/.test(a)) return !1;
                                    var f,
                                        g,
                                        c = 0,
                                        d = 0,
                                        e = !1;
                                    if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19)) return !1;
                                    for (f = a.length - 1; f >= 0; f--) (g = a.charAt(f)), (d = parseInt(g, 10)), e && (d *= 2) > 9 && (d -= 9), (c += d), (e = !e);
                                    return c % 10 === 0;
                                },
                                minlength: function (b, c, d) {
                                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                                    return this.optional(c) || e >= d;
                                },
                                maxlength: function (b, c, d) {
                                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                                    return this.optional(c) || d >= e;
                                },
                                rangelength: function (b, c, d) {
                                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                                    return this.optional(c) || (e >= d[0] && e <= d[1]);
                                },
                                min: function (a, b, c) {
                                    return this.optional(b) || a >= c;
                                },
                                max: function (a, b, c) {
                                    return this.optional(b) || c >= a;
                                },
                                range: function (a, b, c) {
                                    return this.optional(b) || (a >= c[0] && a <= c[1]);
                                },
                                equalTo: function (b, c, d) {
                                    var e = a(d);
                                    return (
                                        this.settings.onfocusout &&
                                        e.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                                            a(c).valid();
                                        }),
                                        b === e.val()
                                    );
                                },
                                remote: function (b, c, d) {
                                    if (this.optional(c)) return "dependency-mismatch";
                                    var f,
                                        g,
                                        e = this.previousValue(c);
                                    return (
                                        this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                                            (e.originalMessage = this.settings.messages[c.name].remote),
                                            (this.settings.messages[c.name].remote = e.message),
                                            (d = ("string" == typeof d && { url: d }) || d),
                                            e.old === b
                                                ? e.valid
                                                : ((e.old = b),
                                                    (f = this),
                                                    this.startRequest(c),
                                                    (g = {}),
                                                    (g[c.name] = b),
                                                    a.ajax(
                                                        a.extend(
                                                            !0,
                                                            {
                                                                mode: "abort",
                                                                port: "validate" + c.name,
                                                                dataType: "json",
                                                                data: g,
                                                                context: f.currentForm,
                                                                success: function (d) {
                                                                    var h,
                                                                        i,
                                                                        j,
                                                                        g = d === !0 || "true" === d;
                                                                    (f.settings.messages[c.name].remote = e.originalMessage),
                                                                        g
                                                                            ? ((j = f.formSubmitted), f.prepareElement(c), (f.formSubmitted = j), f.successList.push(c), delete f.invalid[c.name], f.showErrors())
                                                                            : ((h = {}), (i = d || f.defaultMessage(c, "remote")), (h[c.name] = e.message = a.isFunction(i) ? i(b) : i), (f.invalid[c.name] = !0), f.showErrors(h)),
                                                                        (e.valid = g),
                                                                        f.stopRequest(c, g);
                                                                },
                                                            },
                                                            d
                                                        )
                                                    ),
                                                    "pending")
                                    );
                                },
                            },
                        });
                    var c,
                        b = {};
                    a.ajaxPrefilter
                        ? a.ajaxPrefilter(function (a, c, d) {
                            var e = a.port;
                            "abort" === a.mode && (b[e] && b[e].abort(), (b[e] = d));
                        })
                        : ((c = a.ajax),
                            (a.ajax = function (d) {
                                var e = ("mode" in d ? d : a.ajaxSettings).mode,
                                    f = ("port" in d ? d : a.ajaxSettings).port;
                                return "abort" === e ? (b[f] && b[f].abort(), (b[f] = c.apply(this, arguments)), b[f]) : c.apply(this, arguments);
                            }));
                });
            },
            {},
        ],
        12: [
            function (a, b, c) {
                !(function (d) {
                    "function" == typeof define && define.amd ? define(["jquery"], d) : "object" == typeof c ? (b.exports = d(a("jquery"))) : d(jQuery);
                })(function (a) {
                    "use strict";
                    function d(b, d) {
                        (this.element = b), (this.options = a.extend({}, c, d)), this.init();
                    }
                    function e(c) {
                        if (!a(c.target).parents().hasClass("jq-selectbox") && "OPTION" != c.target.nodeName && a("div.jq-selectbox.opened").length) {
                            var d = a("div.jq-selectbox.opened"),
                                e = a("div.jq-selectbox__search input", d),
                                f = a("div.jq-selectbox__dropdown", d),
                                g = d.find("select").data("_" + b).options;
                            g.onSelectClosed.call(d), e.length && e.val("").keyup(), f.hide().find("li.sel").addClass("selected"), d.removeClass("focused opened dropup dropdown");
                        }
                    }
                    var b = "styler",
                        c = {
                            wrapper: "form",
                            idSuffix: "-styler",
                            filePlaceholder: "\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
                            fileBrowse: "\u041e\u0431\u0437\u043e\u0440...",
                            fileNumber: "\u0412\u044b\u0431\u0440\u0430\u043d\u043e \u0444\u0430\u0439\u043b\u043e\u0432: %s",
                            selectPlaceholder: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",
                            selectSearch: !1,
                            selectSearchLimit: 10,
                            selectSearchNotFound: "\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
                            selectSearchPlaceholder: "\u041f\u043e\u0438\u0441\u043a...",
                            selectVisibleOptions: 0,
                            singleSelectzIndex: "100",
                            selectSmartPositioning: !0,
                            onSelectOpened: function () {},
                            onSelectClosed: function () {},
                            onFormStyled: function () {},
                        };
                    (d.prototype = {
                        init: function () {
                            function g() {
                                var a = "",
                                    d = "",
                                    e = "",
                                    f = "";
                                void 0 !== b.attr("id") && "" !== b.attr("id") && (a = ' id="' + b.attr("id") + c.idSuffix + '"'),
                                void 0 !== b.attr("title") && "" !== b.attr("title") && (d = ' title="' + b.attr("title") + '"'),
                                void 0 !== b.attr("class") && "" !== b.attr("class") && (e = " " + b.attr("class"));
                                var g = b.data();
                                for (var h in g) "" !== g[h] && "_styler" !== h && (f += " data-" + h + '="' + g[h] + '"');
                                (a += f), (this.id = a), (this.title = d), (this.classes = e);
                            }
                            var b = a(this.element),
                                c = this.options,
                                d = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1,
                                f = navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1;
                            if (b.is(":checkbox")) {
                                var h = function () {
                                    var c = new g(),
                                        d = a("<div" + c.id + ' class="jq-checkbox' + c.classes + '"' + c.title + '><div class="jq-checkbox__div"></div></div>');
                                    b.css({ position: "absolute", zIndex: "-1", opacity: 0, margin: 0, padding: 0 }).after(d).prependTo(d),
                                        d
                                            .attr("unselectable", "on")
                                            .css({
                                                "-webkit-user-select": "none",
                                                "-moz-user-select": "none",
                                                "-ms-user-select": "none",
                                                "-o-user-select": "none",
                                                "user-select": "none",
                                                display: "inline-block",
                                                position: "relative",
                                                overflow: "hidden",
                                            }),
                                    b.is(":checked") && d.addClass("checked"),
                                    b.is(":disabled") && d.addClass("disabled"),
                                        d.click(function (a) {
                                            a.preventDefault(), d.is(".disabled") || (b.is(":checked") ? (b.prop("checked", !1), d.removeClass("checked")) : (b.prop("checked", !0), d.addClass("checked")), b.focus().change());
                                        }),
                                        b
                                            .closest("label")
                                            .add('label[for="' + b.attr("id") + '"]')
                                            .on("click.styler", function (b) {
                                                a(b.target).is("a") || a(b.target).closest(d).length || (d.triggerHandler("click"), b.preventDefault());
                                            }),
                                        b
                                            .on("change.styler", function () {
                                                b.is(":checked") ? d.addClass("checked") : d.removeClass("checked");
                                            })
                                            .on("keydown.styler", function (a) {
                                                32 == a.which && d.click();
                                            })
                                            .on("focus.styler", function () {
                                                d.is(".disabled") || d.addClass("focused");
                                            })
                                            .on("blur.styler", function () {
                                                d.removeClass("focused");
                                            });
                                };
                                h(),
                                    b.on("refresh", function () {
                                        b
                                            .closest("label")
                                            .add('label[for="' + b.attr("id") + '"]')
                                            .off(".styler"),
                                            b.off(".styler").parent().before(b).remove(),
                                            h();
                                    });
                            } else if (b.is(":radio")) {
                                var i = function () {
                                    var d = new g(),
                                        e = a("<div" + d.id + ' class="jq-radio' + d.classes + '"' + d.title + '><div class="jq-radio__div"></div></div>');
                                    b.css({ position: "absolute", zIndex: "-1", opacity: 0, margin: 0, padding: 0 }).after(e).prependTo(e),
                                        e.attr("unselectable", "on").css({
                                            "-webkit-user-select": "none",
                                            "-moz-user-select": "none",
                                            "-ms-user-select": "none",
                                            "-o-user-select": "none",
                                            "user-select": "none",
                                            display: "inline-block",
                                            position: "relative",
                                        }),
                                    b.is(":checked") && e.addClass("checked"),
                                    b.is(":disabled") && e.addClass("disabled"),
                                        e.click(function (a) {
                                            a.preventDefault(),
                                            e.is(".disabled") ||
                                            (e
                                                .closest(c.wrapper)
                                                .find('input[name="' + b.attr("name") + '"]')
                                                .prop("checked", !1)
                                                .parent()
                                                .removeClass("checked"),
                                                b.prop("checked", !0).parent().addClass("checked"),
                                                b.focus().change());
                                        }),
                                        b
                                            .closest("label")
                                            .add('label[for="' + b.attr("id") + '"]')
                                            .on("click.styler", function (b) {
                                                a(b.target).is("a") || a(b.target).closest(e).length || (e.triggerHandler("click"), b.preventDefault());
                                            }),
                                        b
                                            .on("change.styler", function () {
                                                b.parent().addClass("checked");
                                            })
                                            .on("focus.styler", function () {
                                                e.is(".disabled") || e.addClass("focused");
                                            })
                                            .on("blur.styler", function () {
                                                e.removeClass("focused");
                                            });
                                };
                                i(),
                                    b.on("refresh", function () {
                                        b
                                            .closest("label")
                                            .add('label[for="' + b.attr("id") + '"]')
                                            .off(".styler"),
                                            b.off(".styler").parent().before(b).remove(),
                                            i();
                                    });
                            } else if (b.is(":file")) {
                                b.css({ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", opacity: 0, margin: 0, padding: 0 });
                                var j = function () {
                                    var d = new g(),
                                        e = b.data("placeholder");
                                    void 0 === e && (e = c.filePlaceholder);
                                    var f = b.data("browse");
                                    (void 0 === f || "" === f) && (f = c.fileBrowse);
                                    var h = a("<div" + d.id + ' class="jq-file' + d.classes + '"' + d.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                                        i = a('<div class="jq-file__name">' + e + "</div>").appendTo(h);
                                    a('<div class="jq-file__browse">' + f + "</div>").appendTo(h),
                                        b.after(h).appendTo(h),
                                    b.is(":disabled") && h.addClass("disabled"),
                                        b
                                            .on("change.styler", function () {
                                                var a = b.val();
                                                if (b.is("[multiple]")) {
                                                    a = "";
                                                    var d = b[0].files.length;
                                                    if (d > 0) {
                                                        var f = b.data("number");
                                                        void 0 === f && (f = c.fileNumber), (f = f.replace("%s", d)), (a = f);
                                                    }
                                                }
                                                i.text(a.replace(/.+[\\\/]/, "")), "" === a ? (i.text(e), h.removeClass("changed")) : h.addClass("changed");
                                            })
                                            .on("focus.styler", function () {
                                                h.addClass("focused");
                                            })
                                            .on("blur.styler", function () {
                                                h.removeClass("focused");
                                            })
                                            .on("click.styler", function () {
                                                h.removeClass("focused");
                                            });
                                };
                                j(),
                                    b.on("refresh", function () {
                                        b.off(".styler").parent().before(b).remove(), j();
                                    });
                            } else if (b.is('input[type="number"]')) {
                                var k = function () {
                                    var c = a('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
                                    b.after(c).prependTo(c).wrap('<div class="jq-number__field"></div>'), b.is(":disabled") && c.addClass("disabled");
                                    var d,
                                        e,
                                        f,
                                        g = null,
                                        h = null;
                                    void 0 !== b.attr("min") && (d = b.attr("min")), void 0 !== b.attr("max") && (e = b.attr("max")), (f = void 0 !== b.attr("step") && a.isNumeric(b.attr("step")) ? Number(b.attr("step")) : Number(1));
                                    var i = function (c) {
                                        var h,
                                            g = b.val();
                                        a.isNumeric(g) || ((g = 0), b.val("0")),
                                            c.is(".minus") ? ((h = parseInt(g, 10) - f), f > 0 && (h = Math.ceil(h / f) * f)) : c.is(".plus") && ((h = parseInt(g, 10) + f), f > 0 && (h = Math.floor(h / f) * f)),
                                            a.isNumeric(d) && a.isNumeric(e) ? h >= d && e >= h && b.val(h) : a.isNumeric(d) && !a.isNumeric(e) ? h >= d && b.val(h) : !a.isNumeric(d) && a.isNumeric(e) ? e >= h && b.val(h) : b.val(h);
                                    };
                                    c.is(".disabled") ||
                                    (c
                                        .on("mousedown", "div.jq-number__spin", function () {
                                            var b = a(this);
                                            i(b),
                                                (g = setTimeout(function () {
                                                    h = setInterval(function () {
                                                        i(b);
                                                    }, 40);
                                                }, 350));
                                        })
                                        .on("mouseup mouseout", "div.jq-number__spin", function () {
                                            clearTimeout(g), clearInterval(h);
                                        }),
                                        b
                                            .on("focus.styler", function () {
                                                c.addClass("focused");
                                            })
                                            .on("blur.styler", function () {
                                                c.removeClass("focused");
                                            }));
                                };
                                k(),
                                    b.on("refresh", function () {
                                        b.off(".styler").closest(".jq-number").before(b).remove(), k();
                                    });
                            } else if (b.is("select")) {
                                var l = function () {
                                    function h(b) {
                                        b.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (b) {
                                            var c = null;
                                            "mousewheel" == b.type ? (c = -1 * b.originalEvent.wheelDelta) : "DOMMouseScroll" == b.type && (c = 40 * b.originalEvent.detail),
                                            c && (b.stopPropagation(), b.preventDefault(), a(this).scrollTop(c + a(this).scrollTop()));
                                        });
                                    }
                                    function k() {
                                        for (var a = 0; a < i.length; a++) {
                                            var b = i.eq(a),
                                                d = "",
                                                e = "",
                                                f = "",
                                                g = "",
                                                h = "",
                                                k = "",
                                                l = "",
                                                m = "",
                                                n = "",
                                                o = "disabled",
                                                p = "selected sel disabled";
                                            b.prop("selected") && (e = "selected sel"),
                                            b.is(":disabled") && (e = o),
                                            b.is(":selected:disabled") && (e = p),
                                            void 0 !== b.attr("id") && "" !== b.attr("id") && (g = ' id="' + b.attr("id") + c.idSuffix + '"'),
                                            void 0 !== b.attr("title") && "" !== i.attr("title") && (h = ' title="' + b.attr("title") + '"'),
                                            void 0 !== b.attr("class") && ((l = " " + b.attr("class")), (n = ' data-jqfs-class="' + b.attr("class") + '"'));
                                            var q = b.data();
                                            for (var r in q) "" !== q[r] && (k += " data-" + r + '="' + q[r] + '"');
                                            e + l !== "" && (f = ' class="' + e + l + '"'),
                                                (d = "<li" + n + k + f + h + g + ">" + b.html() + "</li>"),
                                            b.parent().is("optgroup") &&
                                            (void 0 !== b.parent().attr("class") && (m = " " + b.parent().attr("class")),
                                                (d = "<li" + n + k + ' class="' + e + l + " option" + m + '"' + h + g + ">" + b.html() + "</li>"),
                                            b.is(":first-child") && (d = '<li class="optgroup' + m + '">' + b.parent().attr("label") + "</li>" + d)),
                                                (j += d);
                                        }
                                    }
                                    function l() {
                                        var f = new g(),
                                            l = "",
                                            m = b.data("placeholder"),
                                            n = b.data("search"),
                                            o = b.data("search-limit"),
                                            p = b.data("search-not-found"),
                                            q = b.data("search-placeholder"),
                                            r = b.data("z-index"),
                                            s = b.data("smart-positioning");
                                        void 0 === m && (m = c.selectPlaceholder),
                                        (void 0 === n || "" === n) && (n = c.selectSearch),
                                        (void 0 === o || "" === o) && (o = c.selectSearchLimit),
                                        (void 0 === p || "" === p) && (p = c.selectSearchNotFound),
                                        void 0 === q && (q = c.selectSearchPlaceholder),
                                        (void 0 === r || "" === r) && (r = c.singleSelectzIndex),
                                        (void 0 === s || "" === s) && (s = c.selectSmartPositioning);
                                        var t = a(
                                            "<div" +
                                            f.id +
                                            ' class="jq-selectbox jqselect' +
                                            f.classes +
                                            '" style="display: inline-block; position: relative; z-index:' +
                                            r +
                                            '"><div class="jq-selectbox__select"' +
                                            f.title +
                                            ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>'
                                        );
                                        b.css({ margin: 0, padding: 0 }).after(t).prependTo(t);
                                        var u = a("div.jq-selectbox__select", t),
                                            v = a("div.jq-selectbox__select-text", t),
                                            w = i.filter(":selected");
                                        k(), n && (l = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + q + '"></div><div class="jq-selectbox__not-found">' + p + "</div>");
                                        var x = a('<div class="jq-selectbox__dropdown" style="position: absolute">' + l + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + j + "</ul></div>");
                                        t.append(x);
                                        var y = a("ul", x),
                                            z = a("li", x),
                                            A = a("input", x),
                                            B = a("div.jq-selectbox__not-found", x).hide();
                                        z.length < o && A.parent().hide(), "" === b.val() ? v.text(m).addClass("placeholder") : v.text(w.text());
                                        var C = 0,
                                            D = 0;
                                        if (
                                            (z.each(function () {
                                                var b = a(this);
                                                b.css({ display: "inline-block" }), b.innerWidth() > C && ((C = b.innerWidth()), (D = b.width())), b.css({ display: "" });
                                            }),
                                            v.is(".placeholder") && v.width() > C)
                                        )
                                            v.width(v.width());
                                        else {
                                            var E = t.clone().appendTo("body").width("auto"),
                                                F = E.outerWidth();
                                            E.remove(), F == t.outerWidth() && v.width(D);
                                        }
                                        C > t.width() && x.width(C), "" === i.first().text() && "" !== b.data("placeholder") && z.first().hide(), b.css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0 });
                                        var G = t.outerHeight(),
                                            H = A.outerHeight(),
                                            I = y.css("max-height"),
                                            J = z.filter(".selected");
                                        J.length < 1 && z.first().addClass("selected sel"), void 0 === z.data("li-height") && z.data("li-height", z.outerHeight());
                                        var K = x.css("top");
                                        if (
                                            ("auto" == x.css("left") && x.css({ left: 0 }),
                                            "auto" == x.css("top") && x.css({ top: G }),
                                                x.hide(),
                                            J.length && (i.first().text() != w.text() && t.addClass("changed"), t.data("jqfs-class", J.data("jqfs-class")), t.addClass(J.data("jqfs-class"))),
                                                b.is(":disabled"))
                                        )
                                            return t.addClass("disabled"), !1;
                                        u.click(function () {
                                            if ((a("div.jq-selectbox").filter(".opened").length && c.onSelectClosed.call(a("div.jq-selectbox").filter(".opened")), b.focus(), !d)) {
                                                var e = a(window),
                                                    f = z.data("li-height"),
                                                    g = t.offset().top,
                                                    j = e.height() - G - (g - e.scrollTop()),
                                                    k = b.data("visible-options");
                                                (void 0 === k || "" === k) && (k = c.selectVisibleOptions);
                                                var l = 5 * f,
                                                    m = f * k;
                                                k > 0 && 6 > k && (l = m), 0 === k && (m = "auto");
                                                var n = function () {
                                                        x.height("auto").css({ bottom: "auto", top: K });
                                                        var a = function () {
                                                            y.css("max-height", Math.floor((j - 20 - H) / f) * f);
                                                        };
                                                        a(), y.css("max-height", m), "none" != I && y.css("max-height", I), j < x.outerHeight() + 20 && a();
                                                    },
                                                    o = function () {
                                                        x.height("auto").css({ top: "auto", bottom: K });
                                                        var a = function () {
                                                            y.css("max-height", Math.floor((g - e.scrollTop() - 20 - H) / f) * f);
                                                        };
                                                        a(), y.css("max-height", m), "none" != I && y.css("max-height", I), g - e.scrollTop() - 20 < x.outerHeight() + 20 && a();
                                                    };
                                                s === !0 || 1 === s
                                                    ? j > l + H + 20
                                                        ? (n(), t.removeClass("dropup").addClass("dropdown"))
                                                        : (o(), t.removeClass("dropdown").addClass("dropup"))
                                                    : (s === !1 || 0 === s) && j > l + H + 20 && (n(), t.removeClass("dropup").addClass("dropdown")),
                                                t.offset().left + x.outerWidth() > e.width() && x.css({ left: "auto", right: 0 }),
                                                    a("div.jqselect")
                                                        .css({ zIndex: r - 1 })
                                                        .removeClass("opened"),
                                                    t.css({ zIndex: r }),
                                                    x.is(":hidden")
                                                        ? (a("div.jq-selectbox__dropdown:visible").hide(), x.show(), t.addClass("opened focused"), c.onSelectOpened.call(t))
                                                        : (x.hide(), t.removeClass("opened dropup dropdown"), a("div.jq-selectbox").filter(".opened").length && c.onSelectClosed.call(t)),
                                                A.length &&
                                                (A.val("").keyup(),
                                                    B.hide(),
                                                    A.keyup(function () {
                                                        var c = a(this).val();
                                                        z.each(function () {
                                                            a(this)
                                                                .html()
                                                                .match(new RegExp(".*?" + c + ".*?", "i"))
                                                                ? a(this).show()
                                                                : a(this).hide();
                                                        }),
                                                        "" === i.first().text() && "" !== b.data("placeholder") && z.first().hide(),
                                                            z.filter(":visible").length < 1 ? B.show() : B.hide();
                                                    })),
                                                z.filter(".selected").length &&
                                                ("" === b.val() ? y.scrollTop(0) : ((y.innerHeight() / f) % 2 !== 0 && (f /= 2), y.scrollTop(y.scrollTop() + z.filter(".selected").position().top - y.innerHeight() / 2 + f))),
                                                    h(y);
                                            }
                                        }),
                                            z.hover(function () {
                                                a(this).siblings().removeClass("selected");
                                            });
                                        var L = z.filter(".selected").text();
                                        z.filter(":not(.disabled):not(.optgroup)").click(function () {
                                            b.focus();
                                            var d = a(this),
                                                e = d.text();
                                            if (!d.is(".selected")) {
                                                var f = d.index();
                                                (f -= d.prevAll(".optgroup").length),
                                                    d.addClass("selected sel").siblings().removeClass("selected sel"),
                                                    i.prop("selected", !1).eq(f).prop("selected", !0),
                                                    (L = e),
                                                    v.text(e),
                                                t.data("jqfs-class") && t.removeClass(t.data("jqfs-class")),
                                                    t.data("jqfs-class", d.data("jqfs-class")),
                                                    t.addClass(d.data("jqfs-class")),
                                                    b.change();
                                            }
                                            x.hide(), t.removeClass("opened dropup dropdown"), c.onSelectClosed.call(t);
                                        }),
                                            x.mouseout(function () {
                                                a("li.sel", x).addClass("selected");
                                            }),
                                            b
                                                .on("change.styler", function () {
                                                    v.text(i.filter(":selected").text()).removeClass("placeholder"),
                                                        z.removeClass("selected sel").not(".optgroup").eq(b[0].selectedIndex).addClass("selected sel"),
                                                        i.first().text() != z.filter(".selected").text() ? t.addClass("changed") : t.removeClass("changed");
                                                })
                                                .on("focus.styler", function () {
                                                    t.addClass("focused"), a("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
                                                })
                                                .on("blur.styler", function () {
                                                    t.removeClass("focused");
                                                })
                                                .on("keydown.styler keyup.styler", function (a) {
                                                    var d = z.data("li-height");
                                                    "" === b.val() ? v.text(m).addClass("placeholder") : v.text(i.filter(":selected").text()),
                                                        z.removeClass("selected sel").not(".optgroup").eq(b[0].selectedIndex).addClass("selected sel"),
                                                    (38 == a.which || 37 == a.which || 33 == a.which || 36 == a.which) && ("" === b.val() ? y.scrollTop(0) : y.scrollTop(y.scrollTop() + z.filter(".selected").position().top)),
                                                    (40 == a.which || 39 == a.which || 34 == a.which || 35 == a.which) && y.scrollTop(y.scrollTop() + z.filter(".selected").position().top - y.innerHeight() + d),
                                                    13 == a.which && (a.preventDefault(), x.hide(), t.removeClass("opened dropup dropdown"), c.onSelectClosed.call(t));
                                                })
                                                .on("keydown.styler", function (a) {
                                                    32 == a.which && (a.preventDefault(), u.click());
                                                }),
                                        e.registered || (a(document).on("click", e), (e.registered = !0));
                                    }
                                    function m() {
                                        var c = new g(),
                                            d = a("<div" + c.id + ' class="jq-select-multiple jqselect' + c.classes + '"' + c.title + ' style="display: inline-block; position: relative"></div>');
                                        b.css({ margin: 0, padding: 0 }).after(d), k(), d.append("<ul>" + j + "</ul>");
                                        var e = a("ul", d).css({ position: "relative", "overflow-x": "hidden", "-webkit-overflow-scrolling": "touch" }),
                                            f = a("li", d).attr("unselectable", "on"),
                                            l = b.attr("size"),
                                            m = e.outerHeight(),
                                            n = f.outerHeight();
                                        void 0 !== l && l > 0 ? e.css({ height: n * l }) : e.css({ height: 4 * n }),
                                        m > d.height() && (e.css("overflowY", "scroll"), h(e), f.filter(".selected").length && e.scrollTop(e.scrollTop() + f.filter(".selected").position().top)),
                                            b.prependTo(d).css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0 }),
                                            b.is(":disabled")
                                                ? (d.addClass("disabled"),
                                                    i.each(function () {
                                                        a(this).is(":selected") && f.eq(a(this).index()).addClass("selected");
                                                    }))
                                                : (f.filter(":not(.disabled):not(.optgroup)").click(function (c) {
                                                    b.focus();
                                                    var d = a(this);
                                                    if (
                                                        (c.ctrlKey || c.metaKey || d.addClass("selected"),
                                                        c.shiftKey || d.addClass("first"),
                                                        c.ctrlKey || c.metaKey || c.shiftKey || d.siblings().removeClass("selected first"),
                                                        (c.ctrlKey || c.metaKey) && (d.is(".selected") ? d.removeClass("selected first") : d.addClass("selected first"), d.siblings().removeClass("first")),
                                                            c.shiftKey)
                                                    ) {
                                                        var e = !1,
                                                            g = !1;
                                                        d.siblings().removeClass("selected").siblings(".first").addClass("selected"),
                                                            d.prevAll().each(function () {
                                                                a(this).is(".first") && (e = !0);
                                                            }),
                                                            d.nextAll().each(function () {
                                                                a(this).is(".first") && (g = !0);
                                                            }),
                                                        e &&
                                                        d.prevAll().each(function () {
                                                            return a(this).is(".selected") ? !1 : void a(this).not(".disabled, .optgroup").addClass("selected");
                                                        }),
                                                        g &&
                                                        d.nextAll().each(function () {
                                                            return a(this).is(".selected") ? !1 : void a(this).not(".disabled, .optgroup").addClass("selected");
                                                        }),
                                                        1 == f.filter(".selected").length && d.addClass("first");
                                                    }
                                                    i.prop("selected", !1),
                                                        f.filter(".selected").each(function () {
                                                            var b = a(this),
                                                                c = b.index();
                                                            b.is(".option") && (c -= b.prevAll(".optgroup").length), i.eq(c).prop("selected", !0);
                                                        }),
                                                        b.change();
                                                }),
                                                    i.each(function (b) {
                                                        a(this).data("optionIndex", b);
                                                    }),
                                                    b
                                                        .on("change.styler", function () {
                                                            f.removeClass("selected");
                                                            var b = [];
                                                            i.filter(":selected").each(function () {
                                                                b.push(a(this).data("optionIndex"));
                                                            }),
                                                                f
                                                                    .not(".optgroup")
                                                                    .filter(function (c) {
                                                                        return a.inArray(c, b) > -1;
                                                                    })
                                                                    .addClass("selected");
                                                        })
                                                        .on("focus.styler", function () {
                                                            d.addClass("focused");
                                                        })
                                                        .on("blur.styler", function () {
                                                            d.removeClass("focused");
                                                        }),
                                                m > d.height() &&
                                                b.on("keydown.styler", function (a) {
                                                    (38 == a.which || 37 == a.which || 33 == a.which) && e.scrollTop(e.scrollTop() + f.filter(".selected").position().top - n),
                                                    (40 == a.which || 39 == a.which || 34 == a.which) && e.scrollTop(e.scrollTop() + f.filter(".selected:last").position().top - e.innerHeight() + 2 * n);
                                                }));
                                    }
                                    var i = a("option", b),
                                        j = "";
                                    if (b.is("[multiple]")) {
                                        if (f || d) return;
                                        m();
                                    } else l();
                                };
                                l(),
                                    b.on("refresh", function () {
                                        b.off(".styler").parent().before(b).remove(), l();
                                    });
                            } else
                                b.is(":reset") &&
                                b.on("click", function () {
                                    setTimeout(function () {
                                        b.closest(c.wrapper).find("input, select").trigger("refresh");
                                    }, 1);
                                });
                        },
                        destroy: function () {
                            var c = a(this.element);
                            c.is(":checkbox") || c.is(":radio")
                                ? (c
                                    .removeData("_" + b)
                                    .off(".styler refresh")
                                    .removeAttr("style")
                                    .parent()
                                    .before(c)
                                    .remove(),
                                    c
                                        .closest("label")
                                        .add('label[for="' + c.attr("id") + '"]')
                                        .off(".styler"))
                                : c.is('input[type="number"]')
                                    ? c
                                        .removeData("_" + b)
                                        .off(".styler refresh")
                                        .closest(".jq-number")
                                        .before(c)
                                        .remove()
                                    : (c.is(":file") || c.is("select")) &&
                                    c
                                        .removeData("_" + b)
                                        .off(".styler refresh")
                                        .removeAttr("style")
                                        .parent()
                                        .before(c)
                                        .remove();
                        },
                    }),
                        (a.fn[b] = function (c) {
                            var e = arguments;
                            if (void 0 === c || "object" == typeof c)
                                return (
                                    this.each(function () {
                                        a.data(this, "_" + b) || a.data(this, "_" + b, new d(this, c));
                                    })
                                        .promise()
                                        .done(function () {
                                            var c = a(this[0]).data("_" + b);
                                            c && c.options.onFormStyled.call();
                                        }),
                                        this
                                );
                            if ("string" == typeof c && "_" !== c[0] && "init" !== c) {
                                var f;
                                return (
                                    this.each(function () {
                                        var g = a.data(this, "_" + b);
                                        g instanceof d && "function" == typeof g[c] && (f = g[c].apply(g, Array.prototype.slice.call(e, 1)));
                                    }),
                                        void 0 !== f ? f : this
                                );
                            }
                        }),
                        (e.registered = !1);
                });
            },
            { jquery: 13 },
        ],
        13: [
            function (a, b, c) {
                !(function (a, c) {
                    "object" == typeof b && "object" == typeof b.exports
                        ? (b.exports = a.document
                            ? c(a, !0)
                            : function (a) {
                                if (!a.document) throw new Error("jQuery requires a window with a document");
                                return c(a);
                            })
                        : c(a);
                })("undefined" != typeof window ? window : this, function (a, b) {
                    function s(a) {
                        var b = "length" in a && a.length,
                            c = n.type(a);
                        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a);
                    }
                    function x(a, b, c) {
                        if (n.isFunction(b))
                            return n.grep(a, function (a, d) {
                                return !!b.call(a, d, a) !== c;
                            });
                        if (b.nodeType)
                            return n.grep(a, function (a) {
                                return (a === b) !== c;
                            });
                        if ("string" == typeof b) {
                            if (w.test(b)) return n.filter(b, a, c);
                            b = n.filter(b, a);
                        }
                        return n.grep(a, function (a) {
                            return g.call(b, a) >= 0 !== c;
                        });
                    }
                    function D(a, b) {
                        for (; (a = a[b]) && 1 !== a.nodeType; );
                        return a;
                    }
                    function G(a) {
                        var b = (F[a] = {});
                        return (
                            n.each(a.match(E) || [], function (a, c) {
                                b[c] = !0;
                            }),
                                b
                        );
                    }
                    function I() {
                        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
                    }
                    function K() {
                        Object.defineProperty((this.cache = {}), 0, {
                            get: function () {
                                return {};
                            },
                        }),
                            (this.expando = n.expando + K.uid++);
                    }
                    function P(a, b, c) {
                        var d;
                        if (void 0 === c && 1 === a.nodeType)
                            if (((d = "data-" + b.replace(O, "-$1").toLowerCase()), (c = a.getAttribute(d)), "string" == typeof c)) {
                                try {
                                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                                } catch (e) {}
                                M.set(a, b, c);
                            } else c = void 0;
                        return c;
                    }
                    function Z() {
                        return !0;
                    }
                    function $() {
                        return !1;
                    }
                    function _() {
                        try {
                            return l.activeElement;
                        } catch (a) {}
                    }
                    function ja(a, b) {
                        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
                    }
                    function ka(a) {
                        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
                    }
                    function la(a) {
                        var b = ga.exec(a.type);
                        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
                    }
                    function ma(a, b) {
                        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
                    }
                    function na(a, b) {
                        var c, d, e, f, g, h, i, j;
                        if (1 === b.nodeType) {
                            if (L.hasData(a) && ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))) {
                                delete g.handle, (g.events = {});
                                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
                            }
                            M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
                        }
                    }
                    function oa(a, b) {
                        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                        return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
                    }
                    function pa(a, b) {
                        var c = b.nodeName.toLowerCase();
                        "input" === c && T.test(a.type) ? (b.checked = a.checked) : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
                    }
                    function sa(b, c) {
                        var d,
                            e = n(c.createElement(b)).appendTo(c.body),
                            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
                        return e.detach(), f;
                    }
                    function ta(a) {
                        var b = l,
                            c = ra[a];
                        return (
                            c ||
                            ((c = sa(a, b)),
                            ("none" !== c && c) || ((qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement)), (b = qa[0].contentDocument), b.write(), b.close(), (c = sa(a, b)), qa.detach()),
                                (ra[a] = c)),
                                c
                        );
                    }
                    function xa(a, b, c) {
                        var d,
                            e,
                            f,
                            g,
                            h = a.style;
                        return (
                            (c = c || wa(a)),
                            c && (g = c.getPropertyValue(b) || c[b]),
                            c &&
                            ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
                            va.test(g) && ua.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = g), (g = c.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f))),
                                void 0 !== g ? g + "" : g
                        );
                    }
                    function ya(a, b) {
                        return {
                            get: function () {
                                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
                            },
                        };
                    }
                    function Fa(a, b) {
                        if (b in a) return b;
                        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length; e--; ) if (((b = Ea[e] + c), b in a)) return b;
                        return d;
                    }
                    function Ga(a, b, c) {
                        var d = Aa.exec(b);
                        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
                    }
                    function Ha(a, b, c, d, e) {
                        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                            "margin" === c && (g += n.css(a, c + R[f], !0, e)),
                                d
                                    ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)))
                                    : ((g += n.css(a, "padding" + R[f], !0, e)), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
                        return g;
                    }
                    function Ia(a, b, c) {
                        var d = !0,
                            e = "width" === b ? a.offsetWidth : a.offsetHeight,
                            f = wa(a),
                            g = "border-box" === n.css(a, "boxSizing", !1, f);
                        if (0 >= e || null == e) {
                            if (((e = xa(a, b, f)), (0 > e || null == e) && (e = a.style[b]), va.test(e))) return e;
                            (d = g && (k.boxSizingReliable() || e === a.style[b])), (e = parseFloat(e) || 0);
                        }
                        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
                    }
                    function Ja(a, b) {
                        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                            (d = a[g]),
                            d.style &&
                            ((f[g] = L.get(d, "olddisplay")),
                                (c = d.style.display),
                                b
                                    ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName))))
                                    : ((e = S(d)), ("none" === c && e) || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
                        for (g = 0; h > g; g++) (d = a[g]), d.style && ((b && "none" !== d.style.display && "" !== d.style.display) || (d.style.display = b ? f[g] || "" : "none"));
                        return a;
                    }
                    function Ka(a, b, c, d, e) {
                        return new Ka.prototype.init(a, b, c, d, e);
                    }
                    function Sa() {
                        return (
                            setTimeout(function () {
                                La = void 0;
                            }),
                                (La = n.now())
                        );
                    }
                    function Ta(a, b) {
                        var c,
                            d = 0,
                            e = { height: a };
                        for (b = b ? 1 : 0; 4 > d; d += 2 - b) (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
                        return b && (e.opacity = e.width = a), e;
                    }
                    function Ua(a, b, c) {
                        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if ((d = e[f].call(c, b, a))) return d;
                    }
                    function Va(a, b, c) {
                        var d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l = this,
                            m = {},
                            o = a.style,
                            p = a.nodeType && S(a),
                            q = L.get(a, "fxshow");
                        c.queue ||
                        ((h = n._queueHooks(a, "fx")),
                        null == h.unqueued &&
                        ((h.unqueued = 0),
                            (i = h.empty.fire),
                            (h.empty.fire = function () {
                                h.unqueued || i();
                            })),
                            h.unqueued++,
                            l.always(function () {
                                l.always(function () {
                                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                                });
                            })),
                        1 === a.nodeType &&
                        ("height" in b || "width" in b) &&
                        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
                            (j = n.css(a, "display")),
                            (k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j),
                        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
                        c.overflow &&
                        ((o.overflow = "hidden"),
                            l.always(function () {
                                (o.overflow = c.overflow[0]), (o.overflowX = c.overflow[1]), (o.overflowY = c.overflow[2]);
                            }));
                        for (d in b)
                            if (((e = b[d]), Na.exec(e))) {
                                if ((delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))) {
                                    if ("show" !== e || !q || void 0 === q[d]) continue;
                                    p = !0;
                                }
                                m[d] = (q && q[d]) || n.style(a, d);
                            } else j = void 0;
                        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
                        else {
                            q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
                            f && (q.hidden = !p),
                                p
                                    ? n(a).show()
                                    : l.done(function () {
                                        n(a).hide();
                                    }),
                                l.done(function () {
                                    var b;
                                    L.remove(a, "fxshow");
                                    for (b in m) n.style(a, b, m[b]);
                                });
                            for (d in m) (g = Ua(p ? q[d] : 0, d, l)), d in q || ((q[d] = g.start), p && ((g.end = g.start), (g.start = "width" === d || "height" === d ? 1 : 0)));
                        }
                    }
                    function Wa(a, b) {
                        var c, d, e, f, g;
                        for (c in a)
                            if (((d = n.camelCase(c)), (e = b[d]), (f = a[c]), n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = n.cssHooks[d]), g && "expand" in g)) {
                                (f = g.expand(f)), delete a[d];
                                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
                            } else b[d] = e;
                    }
                    function Xa(a, b, c) {
                        var d,
                            e,
                            f = 0,
                            g = Qa.length,
                            h = n.Deferred().always(function () {
                                delete i.elem;
                            }),
                            i = function () {
                                if (e) return !1;
                                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
                            },
                            j = h.promise({
                                elem: a,
                                props: n.extend({}, b),
                                opts: n.extend(!0, { specialEasing: {} }, c),
                                originalProperties: b,
                                originalOptions: c,
                                startTime: La || Sa(),
                                duration: c.duration,
                                tweens: [],
                                createTween: function (b, c) {
                                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                                    return j.tweens.push(d), d;
                                },
                                stop: function (b) {
                                    var c = 0,
                                        d = b ? j.tweens.length : 0;
                                    if (e) return this;
                                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
                                },
                            }),
                            k = j.props;
                        for (Wa(k, j.opts.specialEasing); g > f; f++) if ((d = Qa[f].call(j, a, k, j.opts))) return d;
                        return (
                            n.map(k, Ua, j),
                            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
                                n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
                                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
                        );
                    }
                    function qb(a) {
                        return function (b, c) {
                            "string" != typeof b && ((c = b), (b = "*"));
                            var d,
                                e = 0,
                                f = b.toLowerCase().match(E) || [];
                            if (n.isFunction(c)) for (; (d = f[e++]); ) "+" === d[0] ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
                        };
                    }
                    function rb(a, b, c, d) {
                        function g(h) {
                            var i;
                            return (
                                (e[h] = !0),
                                    n.each(a[h] || [], function (a, h) {
                                        var j = h(b, c, d);
                                        return "string" != typeof j || f || e[j] ? (f ? !(i = j) : void 0) : (b.dataTypes.unshift(j), g(j), !1);
                                    }),
                                    i
                            );
                        }
                        var e = {},
                            f = a === mb;
                        return g(b.dataTypes[0]) || (!e["*"] && g("*"));
                    }
                    function sb(a, b) {
                        var c,
                            d,
                            e = n.ajaxSettings.flatOptions || {};
                        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
                        return d && n.extend(!0, a, d), a;
                    }
                    function tb(a, b, c) {
                        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                        if (d)
                            for (e in h)
                                if (h[e] && h[e].test(d)) {
                                    i.unshift(e);
                                    break;
                                }
                        if (i[0] in c) f = i[0];
                        else {
                            for (e in c) {
                                if (!i[0] || a.converters[e + " " + i[0]]) {
                                    f = e;
                                    break;
                                }
                                g || (g = e);
                            }
                            f = f || g;
                        }
                        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
                    }
                    function ub(a, b, c, d) {
                        var e,
                            f,
                            g,
                            h,
                            i,
                            j = {},
                            k = a.dataTypes.slice();
                        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                        for (f = k.shift(); f; )
                            if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), (i = f), (f = k.shift())))
                                if ("*" === f) f = i;
                                else if ("*" !== i && i !== f) {
                                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                                        for (e in j)
                                            if (((h = e.split(" ")), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
                                                g === !0 ? (g = j[e]) : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                                break;
                                            }
                                    if (g !== !0)
                                        if (g && a["throws"]) b = g(b);
                                        else
                                            try {
                                                b = g(b);
                                            } catch (l) {
                                                return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                                            }
                                }
                        return { state: "success", data: b };
                    }
                    function Ab(a, b, c, d) {
                        var e;
                        if (n.isArray(b))
                            n.each(b, function (b, e) {
                                c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
                            });
                        else if (c || "object" !== n.type(b)) d(a, b);
                        else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
                    }
                    function Jb(a) {
                        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
                    }
                    var c = [],
                        d = c.slice,
                        e = c.concat,
                        f = c.push,
                        g = c.indexOf,
                        h = {},
                        i = h.toString,
                        j = h.hasOwnProperty,
                        k = {},
                        l = a.document,
                        m = "2.1.4",
                        n = function (a, b) {
                            return new n.fn.init(a, b);
                        },
                        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                        p = /^-ms-/,
                        q = /-([\da-z])/gi,
                        r = function (a, b) {
                            return b.toUpperCase();
                        };
                    (n.fn = n.prototype = {
                        jquery: m,
                        constructor: n,
                        selector: "",
                        length: 0,
                        toArray: function () {
                            return d.call(this);
                        },
                        get: function (a) {
                            return null != a ? (0 > a ? this[a + this.length] : this[a]) : d.call(this);
                        },
                        pushStack: function (a) {
                            var b = n.merge(this.constructor(), a);
                            return (b.prevObject = this), (b.context = this.context), b;
                        },
                        each: function (a, b) {
                            return n.each(this, a, b);
                        },
                        map: function (a) {
                            return this.pushStack(
                                n.map(this, function (b, c) {
                                    return a.call(b, c, b);
                                })
                            );
                        },
                        slice: function () {
                            return this.pushStack(d.apply(this, arguments));
                        },
                        first: function () {
                            return this.eq(0);
                        },
                        last: function () {
                            return this.eq(-1);
                        },
                        eq: function (a) {
                            var b = this.length,
                                c = +a + (0 > a ? b : 0);
                            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
                        },
                        end: function () {
                            return this.prevObject || this.constructor(null);
                        },
                        push: f,
                        sort: c.sort,
                        splice: c.splice,
                    }),
                        (n.extend = n.fn.extend = function () {
                            var a,
                                b,
                                c,
                                d,
                                e,
                                f,
                                g = arguments[0] || {},
                                h = 1,
                                i = arguments.length,
                                j = !1;
                            for ("boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && ((g = this), h--); i > h; h++)
                                if (null != (a = arguments[h]))
                                    for (b in a)
                                        (c = g[b]),
                                            (d = a[b]),
                                        g !== d &&
                                        (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                                            ? (e ? ((e = !1), (f = c && n.isArray(c) ? c : [])) : (f = c && n.isPlainObject(c) ? c : {}), (g[b] = n.extend(j, f, d)))
                                            : void 0 !== d && (g[b] = d));
                            return g;
                        }),
                        n.extend({
                            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (a) {
                                throw new Error(a);
                            },
                            noop: function () {},
                            isFunction: function (a) {
                                return "function" === n.type(a);
                            },
                            isArray: Array.isArray,
                            isWindow: function (a) {
                                return null != a && a === a.window;
                            },
                            isNumeric: function (a) {
                                return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
                            },
                            isPlainObject: function (a) {
                                return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
                            },
                            isEmptyObject: function (a) {
                                var b;
                                for (b in a) return !1;
                                return !0;
                            },
                            type: function (a) {
                                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
                            },
                            globalEval: function (a) {
                                var b,
                                    c = eval;
                                (a = n.trim(a)), a && (1 === a.indexOf("use strict") ? ((b = l.createElement("script")), (b.text = a), l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
                            },
                            camelCase: function (a) {
                                return a.replace(p, "ms-").replace(q, r);
                            },
                            nodeName: function (a, b) {
                                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
                            },
                            each: function (a, b, c) {
                                var d,
                                    e = 0,
                                    f = a.length,
                                    g = s(a);
                                if (c) {
                                    if (g) for (; f > e && ((d = b.apply(a[e], c)), d !== !1); e++);
                                    else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
                                } else if (g) for (; f > e && ((d = b.call(a[e], e, a[e])), d !== !1); e++);
                                else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
                                return a;
                            },
                            trim: function (a) {
                                return null == a ? "" : (a + "").replace(o, "");
                            },
                            makeArray: function (a, b) {
                                var c = b || [];
                                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
                            },
                            inArray: function (a, b, c) {
                                return null == b ? -1 : g.call(b, a, c);
                            },
                            merge: function (a, b) {
                                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                                return (a.length = e), a;
                            },
                            grep: function (a, b, c) {
                                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) (d = !b(a[f], f)), d !== h && e.push(a[f]);
                                return e;
                            },
                            map: function (a, b, c) {
                                var d,
                                    f = 0,
                                    g = a.length,
                                    h = s(a),
                                    i = [];
                                if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
                                else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
                                return e.apply([], i);
                            },
                            guid: 1,
                            proxy: function (a, b) {
                                var c, e, f;
                                return (
                                    "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                                        n.isFunction(a)
                                            ? ((e = d.call(arguments, 2)),
                                                (f = function () {
                                                    return a.apply(b || this, e.concat(d.call(arguments)));
                                                }),
                                                (f.guid = a.guid = a.guid || n.guid++),
                                                f)
                                            : void 0
                                );
                            },
                            now: Date.now,
                            support: k,
                        }),
                        n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
                            h["[object " + b + "]"] = b.toLowerCase();
                        });
                    var t = (function (a) {
                        function ga(a, b, d, e) {
                            var f, h, j, k, l, o, r, s, w, x;
                            if (((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), (d = d || []), (k = b.nodeType), "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))) return d;
                            if (!e && p) {
                                if (11 !== k && (f = _.exec(a)))
                                    if ((j = f[1])) {
                                        if (9 === k) {
                                            if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
                                            if (h.id === j) return d.push(h), d;
                                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
                                    } else {
                                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
                                    }
                                if (c.qsa && (!q || !q.test(a))) {
                                    if (((s = r = u), (w = b), (x = 1 !== k && a), 1 === k && "object" !== b.nodeName.toLowerCase())) {
                                        for (o = g(a), (r = b.getAttribute("id")) ? (s = r.replace(ba, "\\$&")) : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; l--; ) o[l] = s + ra(o[l]);
                                        (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
                                    }
                                    if (x)
                                        try {
                                            return H.apply(d, w.querySelectorAll(x)), d;
                                        } catch (y) {
                                        } finally {
                                            r || b.removeAttribute("id");
                                        }
                                }
                            }
                            return i(a.replace(R, "$1"), b, d, e);
                        }
                        function ha() {
                            function b(c, e) {
                                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], (b[c + " "] = e);
                            }
                            var a = [];
                            return b;
                        }
                        function ia(a) {
                            return (a[u] = !0), a;
                        }
                        function ja(a) {
                            var b = n.createElement("div");
                            try {
                                return !!a(b);
                            } catch (c) {
                                return !1;
                            } finally {
                                b.parentNode && b.parentNode.removeChild(b), (b = null);
                            }
                        }
                        function ka(a, b) {
                            for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
                        }
                        function la(a, b) {
                            var c = b && a,
                                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                            if (d) return d;
                            if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
                            return a ? 1 : -1;
                        }
                        function ma(a) {
                            return function (b) {
                                var c = b.nodeName.toLowerCase();
                                return "input" === c && b.type === a;
                            };
                        }
                        function na(a) {
                            return function (b) {
                                var c = b.nodeName.toLowerCase();
                                return ("input" === c || "button" === c) && b.type === a;
                            };
                        }
                        function oa(a) {
                            return ia(function (b) {
                                return (
                                    (b = +b),
                                        ia(function (c, d) {
                                            for (var e, f = a([], c.length, b), g = f.length; g--; ) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                                        })
                                );
                            });
                        }
                        function pa(a) {
                            return a && "undefined" != typeof a.getElementsByTagName && a;
                        }
                        function qa() {}
                        function ra(a) {
                            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                            return d;
                        }
                        function sa(a, b, c) {
                            var d = b.dir,
                                e = c && "parentNode" === d,
                                f = x++;
                            return b.first
                                ? function (b, c, f) {
                                    for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
                                }
                                : function (b, c, g) {
                                    var h,
                                        i,
                                        j = [w, f];
                                    if (g) {
                                        for (; (b = b[d]); ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                                    } else
                                        for (; (b = b[d]); )
                                            if (1 === b.nodeType || e) {
                                                if (((i = b[u] || (b[u] = {})), (h = i[d]) && h[0] === w && h[1] === f)) return (j[2] = h[2]);
                                                if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                                            }
                                };
                        }
                        function ta(a) {
                            return a.length > 1
                                ? function (b, c, d) {
                                    for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                                    return !0;
                                }
                                : a[0];
                        }
                        function ua(a, b, c) {
                            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
                            return c;
                        }
                        function va(a, b, c, d, e) {
                            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                            return g;
                        }
                        function wa(a, b, c, d, e, f) {
                            return (
                                d && !d[u] && (d = wa(d)),
                                e && !e[u] && (e = wa(e, f)),
                                    ia(function (f, g, h, i) {
                                        var j,
                                            k,
                                            l,
                                            m = [],
                                            n = [],
                                            o = g.length,
                                            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                                            q = !a || (!f && b) ? p : va(p, m, a, h, i),
                                            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                                        if ((c && c(q, r, h, i), d)) for (j = va(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                                        if (f) {
                                            if (e || a) {
                                                if (e) {
                                                    for (j = [], k = r.length; k--; ) (l = r[k]) && j.push((q[k] = l));
                                                    e(null, (r = []), j, i);
                                                }
                                                for (k = r.length; k--; ) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                                            }
                                        } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
                                    })
                            );
                        }
                        function xa(a) {
                            for (
                                var b,
                                    c,
                                    e,
                                    f = a.length,
                                    g = d.relative[a[0].type],
                                    h = g || d.relative[" "],
                                    i = g ? 1 : 0,
                                    k = sa(
                                        function (a) {
                                            return a === b;
                                        },
                                        h,
                                        !0
                                    ),
                                    l = sa(
                                        function (a) {
                                            return J(b, a) > -1;
                                        },
                                        h,
                                        !0
                                    ),
                                    m = [
                                        function (a, c, d) {
                                            var e = (!g && (d || c !== j)) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                                            return (b = null), e;
                                        },
                                    ];
                                f > i;
                                i++
                            )
                                if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
                                else {
                                    if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
                                        for (e = ++i; f > e && !d.relative[a[e].type]; e++);
                                        return wa(
                                            i > 1 && ta(m),
                                            i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"),
                                            c,
                                            e > i && xa(a.slice(i, e)),
                                            f > e && xa((a = a.slice(e))),
                                            f > e && ra(a)
                                        );
                                    }
                                    m.push(c);
                                }
                            return ta(m);
                        }
                        function ya(a, b) {
                            var c = b.length > 0,
                                e = a.length > 0,
                                f = function (f, g, h, i, k) {
                                    var l,
                                        m,
                                        o,
                                        p = 0,
                                        q = "0",
                                        r = f && [],
                                        s = [],
                                        t = j,
                                        u = f || (e && d.find.TAG("*", k)),
                                        v = (w += null == t ? 1 : Math.random() || 0.1),
                                        x = u.length;
                                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                                        if (e && l) {
                                            for (m = 0; (o = a[m++]); )
                                                if (o(l, g, h)) {
                                                    i.push(l);
                                                    break;
                                                }
                                            k && (w = v);
                                        }
                                        c && ((l = !o && l) && p--, f && r.push(l));
                                    }
                                    if (((p += q), c && q !== p)) {
                                        for (m = 0; (o = b[m++]); ) o(r, s, g, h);
                                        if (f) {
                                            if (p > 0) for (; q--; ) r[q] || s[q] || (s[q] = F.call(i));
                                            s = va(s);
                                        }
                                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                                    }
                                    return k && ((w = v), (j = t)), r;
                                };
                            return c ? ia(f) : f;
                        }
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p,
                            q,
                            r,
                            s,
                            t,
                            u = "sizzle" + 1 * new Date(),
                            v = a.document,
                            w = 0,
                            x = 0,
                            y = ha(),
                            z = ha(),
                            A = ha(),
                            B = function (a, b) {
                                return a === b && (l = !0), 0;
                            },
                            C = 1 << 31,
                            D = {}.hasOwnProperty,
                            E = [],
                            F = E.pop,
                            G = E.push,
                            H = E.push,
                            I = E.slice,
                            J = function (a, b) {
                                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                                return -1;
                            },
                            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            L = "[\\x20\\t\\r\\n\\f]",
                            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                            N = M.replace("w", "w#"),
                            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
                            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
                            Q = new RegExp(L + "+", "g"),
                            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                            S = new RegExp("^" + L + "*," + L + "*"),
                            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                            V = new RegExp(P),
                            W = new RegExp("^" + N + "$"),
                            X = {
                                ID: new RegExp("^#(" + M + ")"),
                                CLASS: new RegExp("^\\.(" + M + ")"),
                                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                                ATTR: new RegExp("^" + O),
                                PSEUDO: new RegExp("^" + P),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + K + ")$", "i"),
                                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i"),
                            },
                            Y = /^(?:input|select|textarea|button)$/i,
                            Z = /^h\d$/i,
                            $ = /^[^{]+\{\s*\[native \w/,
                            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            aa = /[+~]/,
                            ba = /'|\\/g,
                            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                            da = function (a, b, c) {
                                var d = "0x" + b - 65536;
                                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
                            },
                            ea = function () {
                                m();
                            };
                        try {
                            H.apply((E = I.call(v.childNodes)), v.childNodes), E[v.childNodes.length].nodeType;
                        } catch (fa) {
                            H = {
                                apply: E.length
                                    ? function (a, b) {
                                        G.apply(a, I.call(b));
                                    }
                                    : function (a, b) {
                                        for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                                        a.length = c - 1;
                                    },
                            };
                        }
                        (c = ga.support = {}),
                            (f = ga.isXML = function (a) {
                                var b = a && (a.ownerDocument || a).documentElement;
                                return b ? "HTML" !== b.nodeName : !1;
                            }),
                            (m = ga.setDocument = function (a) {
                                var b,
                                    e,
                                    g = a ? a.ownerDocument || a : v;
                                return g !== n && 9 === g.nodeType && g.documentElement
                                    ? ((n = g),
                                        (o = g.documentElement),
                                        (e = g.defaultView),
                                    e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)),
                                        (p = !f(g)),
                                        (c.attributes = ja(function (a) {
                                            return (a.className = "i"), !a.getAttribute("className");
                                        })),
                                        (c.getElementsByTagName = ja(function (a) {
                                            return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
                                        })),
                                        (c.getElementsByClassName = $.test(g.getElementsByClassName)),
                                        (c.getById = ja(function (a) {
                                            return (o.appendChild(a).id = u), !g.getElementsByName || !g.getElementsByName(u).length;
                                        })),
                                        c.getById
                                            ? ((d.find.ID = function (a, b) {
                                                if ("undefined" != typeof b.getElementById && p) {
                                                    var c = b.getElementById(a);
                                                    return c && c.parentNode ? [c] : [];
                                                }
                                            }),
                                                (d.filter.ID = function (a) {
                                                    var b = a.replace(ca, da);
                                                    return function (a) {
                                                        return a.getAttribute("id") === b;
                                                    };
                                                }))
                                            : (delete d.find.ID,
                                                (d.filter.ID = function (a) {
                                                    var b = a.replace(ca, da);
                                                    return function (a) {
                                                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                                        return c && c.value === b;
                                                    };
                                                })),
                                        (d.find.TAG = c.getElementsByTagName
                                            ? function (a, b) {
                                                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
                                            }
                                            : function (a, b) {
                                                var c,
                                                    d = [],
                                                    e = 0,
                                                    f = b.getElementsByTagName(a);
                                                if ("*" === a) {
                                                    for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                                                    return d;
                                                }
                                                return f;
                                            }),
                                        (d.find.CLASS =
                                            c.getElementsByClassName &&
                                            function (a, b) {
                                                return p ? b.getElementsByClassName(a) : void 0;
                                            }),
                                        (r = []),
                                        (q = []),
                                    (c.qsa = $.test(g.querySelectorAll)) &&
                                    (ja(function (a) {
                                        (o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                        a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                                        a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                                        a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                                        a.querySelectorAll(":checked").length || q.push(":checked"),
                                        a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
                                    }),
                                        ja(function (a) {
                                            var b = g.createElement("input");
                                            b.setAttribute("type", "hidden"),
                                                a.appendChild(b).setAttribute("name", "D"),
                                            a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                                            a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                                                a.querySelectorAll("*,:x"),
                                                q.push(",.*:");
                                        })),
                                    (c.matchesSelector = $.test((s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector))) &&
                                    ja(function (a) {
                                        (c.disconnectedMatch = s.call(a, "div")), s.call(a, "[s!='']:x"), r.push("!=", P);
                                    }),
                                        (q = q.length && new RegExp(q.join("|"))),
                                        (r = r.length && new RegExp(r.join("|"))),
                                        (b = $.test(o.compareDocumentPosition)),
                                        (t =
                                            b || $.test(o.contains)
                                                ? function (a, b) {
                                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                                        d = b && b.parentNode;
                                                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                                                }
                                                : function (a, b) {
                                                    if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                                                    return !1;
                                                }),
                                        (B = b
                                            ? function (a, b) {
                                                if (a === b) return (l = !0), 0;
                                                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                                return d
                                                    ? d
                                                    : ((d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
                                                        1 & d || (!c.sortDetached && b.compareDocumentPosition(a) === d)
                                                            ? a === g || (a.ownerDocument === v && t(v, a))
                                                                ? -1
                                                                : b === g || (b.ownerDocument === v && t(v, b))
                                                                    ? 1
                                                                    : k
                                                                        ? J(k, a) - J(k, b)
                                                                        : 0
                                                            : 4 & d
                                                                ? -1
                                                                : 1);
                                            }
                                            : function (a, b) {
                                                if (a === b) return (l = !0), 0;
                                                var c,
                                                    d = 0,
                                                    e = a.parentNode,
                                                    f = b.parentNode,
                                                    h = [a],
                                                    i = [b];
                                                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                                                if (e === f) return la(a, b);
                                                for (c = a; (c = c.parentNode); ) h.unshift(c);
                                                for (c = b; (c = c.parentNode); ) i.unshift(c);
                                                for (; h[d] === i[d]; ) d++;
                                                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
                                            }),
                                        g)
                                    : n;
                            }),
                            (ga.matches = function (a, b) {
                                return ga(a, null, null, b);
                            }),
                            (ga.matchesSelector = function (a, b) {
                                if (((a.ownerDocument || a) !== n && m(a), (b = b.replace(U, "='$1']")), c.matchesSelector && p && (!r || !r.test(b)) && (!q || !q.test(b))))
                                    try {
                                        var d = s.call(a, b);
                                        if (d || c.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
                                    } catch (e) {}
                                return ga(b, n, null, [a]).length > 0;
                            }),
                            (ga.contains = function (a, b) {
                                return (a.ownerDocument || a) !== n && m(a), t(a, b);
                            }),
                            (ga.attr = function (a, b) {
                                (a.ownerDocument || a) !== n && m(a);
                                var e = d.attrHandle[b.toLowerCase()],
                                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
                            }),
                            (ga.error = function (a) {
                                throw new Error("Syntax error, unrecognized expression: " + a);
                            }),
                            (ga.uniqueSort = function (a) {
                                var b,
                                    d = [],
                                    e = 0,
                                    f = 0;
                                if (((l = !c.detectDuplicates), (k = !c.sortStable && a.slice(0)), a.sort(B), l)) {
                                    for (; (b = a[f++]); ) b === a[f] && (e = d.push(f));
                                    for (; e--; ) a.splice(d[e], 1);
                                }
                                return (k = null), a;
                            }),
                            (e = ga.getText = function (a) {
                                var b,
                                    c = "",
                                    d = 0,
                                    f = a.nodeType;
                                if (f) {
                                    if (1 === f || 9 === f || 11 === f) {
                                        if ("string" == typeof a.textContent) return a.textContent;
                                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                                    } else if (3 === f || 4 === f) return a.nodeValue;
                                } else for (; (b = a[d++]); ) c += e(b);
                                return c;
                            }),
                            (d = ga.selectors = {
                                cacheLength: 50,
                                createPseudo: ia,
                                match: X,
                                attrHandle: {},
                                find: {},
                                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                                preFilter: {
                                    ATTR: function (a) {
                                        return (a[1] = a[1].replace(ca, da)), (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                                    },
                                    CHILD: function (a) {
                                        return (
                                            (a[1] = a[1].toLowerCase()),
                                                "nth" === a[1].slice(0, 3)
                                                    ? (a[3] || ga.error(a[0]), (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                                                    : a[3] && ga.error(a[0]),
                                                a
                                        );
                                    },
                                    PSEUDO: function (a) {
                                        var b,
                                            c = !a[6] && a[2];
                                        return X.CHILD.test(a[0])
                                            ? null
                                            : (a[3] ? (a[2] = a[4] || a[5] || "") : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))), a.slice(0, 3));
                                    },
                                },
                                filter: {
                                    TAG: function (a) {
                                        var b = a.replace(ca, da).toLowerCase();
                                        return "*" === a
                                            ? function () {
                                                return !0;
                                            }
                                            : function (a) {
                                                return a.nodeName && a.nodeName.toLowerCase() === b;
                                            };
                                    },
                                    CLASS: function (a) {
                                        var b = y[a + " "];
                                        return (
                                            b ||
                                            ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                                                y(a, function (a) {
                                                    return b.test(("string" == typeof a.className && a.className) || ("undefined" != typeof a.getAttribute && a.getAttribute("class")) || "");
                                                }))
                                        );
                                    },
                                    ATTR: function (a, b, c) {
                                        return function (d) {
                                            var e = ga.attr(d, a);
                                            return null == e
                                                ? "!=" === b
                                                : b
                                                    ? ((e += ""),
                                                        "=" === b
                                                            ? e === c
                                                            : "!=" === b
                                                                ? e !== c
                                                                : "^=" === b
                                                                    ? c && 0 === e.indexOf(c)
                                                                    : "*=" === b
                                                                        ? c && e.indexOf(c) > -1
                                                                        : "$=" === b
                                                                            ? c && e.slice(-c.length) === c
                                                                            : "~=" === b
                                                                                ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                                                                                : "|=" === b
                                                                                    ? e === c || e.slice(0, c.length + 1) === c + "-"
                                                                                    : !1)
                                                    : !0;
                                        };
                                    },
                                    CHILD: function (a, b, c, d, e) {
                                        var f = "nth" !== a.slice(0, 3),
                                            g = "last" !== a.slice(-4),
                                            h = "of-type" === b;
                                        return 1 === d && 0 === e
                                            ? function (a) {
                                                return !!a.parentNode;
                                            }
                                            : function (b, c, i) {
                                                var j,
                                                    k,
                                                    l,
                                                    m,
                                                    n,
                                                    o,
                                                    p = f !== g ? "nextSibling" : "previousSibling",
                                                    q = b.parentNode,
                                                    r = h && b.nodeName.toLowerCase(),
                                                    s = !i && !h;
                                                if (q) {
                                                    if (f) {
                                                        for (; p; ) {
                                                            for (l = b; (l = l[p]); ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                                            o = p = "only" === a && !o && "nextSibling";
                                                        }
                                                        return !0;
                                                    }
                                                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                                        for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; (l = (++n && l && l[p]) || (m = n = 0) || o.pop()); )
                                                            if (1 === l.nodeType && ++m && l === b) {
                                                                k[a] = [w, n, m];
                                                                break;
                                                            }
                                                    } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                                                    else
                                                        for (
                                                            ;
                                                            (l = (++n && l && l[p]) || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l !== b));

                                                        );
                                                    return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                                                }
                                            };
                                    },
                                    PSEUDO: function (a, b) {
                                        var c,
                                            e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                                        return e[u]
                                            ? e(b)
                                            : e.length > 1
                                                ? ((c = [a, a, "", b]),
                                                    d.setFilters.hasOwnProperty(a.toLowerCase())
                                                        ? ia(function (a, c) {
                                                            for (var d, f = e(a, b), g = f.length; g--; ) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                                                        })
                                                        : function (a) {
                                                            return e(a, 0, c);
                                                        })
                                                : e;
                                    },
                                },
                                pseudos: {
                                    not: ia(function (a) {
                                        var b = [],
                                            c = [],
                                            d = h(a.replace(R, "$1"));
                                        return d[u]
                                            ? ia(function (a, b, c, e) {
                                                for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                                            })
                                            : function (a, e, f) {
                                                return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                                            };
                                    }),
                                    has: ia(function (a) {
                                        return function (b) {
                                            return ga(a, b).length > 0;
                                        };
                                    }),
                                    contains: ia(function (a) {
                                        return (
                                            (a = a.replace(ca, da)),
                                                function (b) {
                                                    return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                                                }
                                        );
                                    }),
                                    lang: ia(function (a) {
                                        return (
                                            W.test(a || "") || ga.error("unsupported lang: " + a),
                                                (a = a.replace(ca, da).toLowerCase()),
                                                function (b) {
                                                    var c;
                                                    do if ((c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) return (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-");
                                                    while ((b = b.parentNode) && 1 === b.nodeType);
                                                    return !1;
                                                }
                                        );
                                    }),
                                    target: function (b) {
                                        var c = a.location && a.location.hash;
                                        return c && c.slice(1) === b.id;
                                    },
                                    root: function (a) {
                                        return a === o;
                                    },
                                    focus: function (a) {
                                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                                    },
                                    enabled: function (a) {
                                        return a.disabled === !1;
                                    },
                                    disabled: function (a) {
                                        return a.disabled === !0;
                                    },
                                    checked: function (a) {
                                        var b = a.nodeName.toLowerCase();
                                        return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
                                    },
                                    selected: function (a) {
                                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                                    },
                                    empty: function (a) {
                                        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                                        return !0;
                                    },
                                    parent: function (a) {
                                        return !d.pseudos.empty(a);
                                    },
                                    header: function (a) {
                                        return Z.test(a.nodeName);
                                    },
                                    input: function (a) {
                                        return Y.test(a.nodeName);
                                    },
                                    button: function (a) {
                                        var b = a.nodeName.toLowerCase();
                                        return ("input" === b && "button" === a.type) || "button" === b;
                                    },
                                    text: function (a) {
                                        var b;
                                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                                    },
                                    first: oa(function () {
                                        return [0];
                                    }),
                                    last: oa(function (a, b) {
                                        return [b - 1];
                                    }),
                                    eq: oa(function (a, b, c) {
                                        return [0 > c ? c + b : c];
                                    }),
                                    even: oa(function (a, b) {
                                        for (var c = 0; b > c; c += 2) a.push(c);
                                        return a;
                                    }),
                                    odd: oa(function (a, b) {
                                        for (var c = 1; b > c; c += 2) a.push(c);
                                        return a;
                                    }),
                                    lt: oa(function (a, b, c) {
                                        for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                                        return a;
                                    }),
                                    gt: oa(function (a, b, c) {
                                        for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                                        return a;
                                    }),
                                },
                            }),
                            (d.pseudos.nth = d.pseudos.eq);
                        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);
                        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
                        return (
                            (qa.prototype = d.filters = d.pseudos),
                                (d.setFilters = new qa()),
                                (g = ga.tokenize = function (a, b) {
                                    var c,
                                        e,
                                        f,
                                        g,
                                        h,
                                        i,
                                        j,
                                        k = z[a + " "];
                                    if (k) return b ? 0 : k.slice(0);
                                    for (h = a, i = [], j = d.preFilter; h; ) {
                                        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                                            (c = !1),
                                        (e = T.exec(h)) && ((c = e.shift()), f.push({ value: c, type: e[0].replace(R, " ") }), (h = h.slice(c.length)));
                                        for (g in d.filter) !(e = X[g].exec(h)) || (j[g] && !(e = j[g](e))) || ((c = e.shift()), f.push({ value: c, type: g, matches: e }), (h = h.slice(c.length)));
                                        if (!c) break;
                                    }
                                    return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
                                }),
                                (h = ga.compile = function (a, b) {
                                    var c,
                                        d = [],
                                        e = [],
                                        f = A[a + " "];
                                    if (!f) {
                                        for (b || (b = g(a)), c = b.length; c--; ) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
                                        (f = A(a, ya(e, d))), (f.selector = a);
                                    }
                                    return f;
                                }),
                                (i = ga.select = function (a, b, e, f) {
                                    var i,
                                        j,
                                        k,
                                        l,
                                        m,
                                        n = "function" == typeof a && a,
                                        o = !f && g((a = n.selector || a));
                                    if (((e = e || []), 1 === o.length)) {
                                        if (((j = o[0] = o[0].slice(0)), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
                                            if (((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]), !b)) return e;
                                            n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
                                        }
                                        for (i = X.needsContext.test(a) ? 0 : j.length; i-- && ((k = j[i]), !d.relative[(l = k.type)]); )
                                            if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), (aa.test(j[0].type) && pa(b.parentNode)) || b))) {
                                                if ((j.splice(i, 1), (a = f.length && ra(j)), !a)) return H.apply(e, f), e;
                                                break;
                                            }
                                    }
                                    return (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b), e;
                                }),
                                (c.sortStable = u.split("").sort(B).join("") === u),
                                (c.detectDuplicates = !!l),
                                m(),
                                (c.sortDetached = ja(function (a) {
                                    return 1 & a.compareDocumentPosition(n.createElement("div"));
                                })),
                            ja(function (a) {
                                return (a.innerHTML = "<a href='#'></a>"), "#" === a.firstChild.getAttribute("href");
                            }) ||
                            ka("type|href|height|width", function (a, b, c) {
                                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                            }),
                            (c.attributes &&
                                ja(function (a) {
                                    return (a.innerHTML = "<input/>"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
                                })) ||
                            ka("value", function (a, b, c) {
                                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
                            }),
                            ja(function (a) {
                                return null == a.getAttribute("disabled");
                            }) ||
                            ka(K, function (a, b, c) {
                                var d;
                                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                            }),
                                ga
                        );
                    })(a);
                    (n.find = t), (n.expr = t.selectors), (n.expr[":"] = n.expr.pseudos), (n.unique = t.uniqueSort), (n.text = t.getText), (n.isXMLDoc = t.isXML), (n.contains = t.contains);
                    var u = n.expr.match.needsContext,
                        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                        w = /^.[^:#\[\.,]*$/;
                    (n.filter = function (a, b, c) {
                        var d = b[0];
                        return (
                            c && (a = ":not(" + a + ")"),
                                1 === b.length && 1 === d.nodeType
                                    ? n.find.matchesSelector(d, a)
                                        ? [d]
                                        : []
                                    : n.find.matches(
                                        a,
                                        n.grep(b, function (a) {
                                            return 1 === a.nodeType;
                                        })
                                    )
                        );
                    }),
                        n.fn.extend({
                            find: function (a) {
                                var b,
                                    c = this.length,
                                    d = [],
                                    e = this;
                                if ("string" != typeof a)
                                    return this.pushStack(
                                        n(a).filter(function () {
                                            for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
                                        })
                                    );
                                for (b = 0; c > b; b++) n.find(a, e[b], d);
                                return (d = this.pushStack(c > 1 ? n.unique(d) : d)), (d.selector = this.selector ? this.selector + " " + a : a), d;
                            },
                            filter: function (a) {
                                return this.pushStack(x(this, a || [], !1));
                            },
                            not: function (a) {
                                return this.pushStack(x(this, a || [], !0));
                            },
                            is: function (a) {
                                return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
                            },
                        });
                    var y,
                        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                        A = (n.fn.init = function (a, b) {
                            var c, d;
                            if (!a) return this;
                            if ("string" == typeof a) {
                                if (((c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a)), !c || (!c[1] && b))) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                                if (c[1]) {
                                    if (((b = b instanceof n ? b[0] : b), n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)))
                                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                                    return this;
                                }
                                return (d = l.getElementById(c[2])), d && d.parentNode && ((this.length = 1), (this[0] = d)), (this.context = l), (this.selector = a), this;
                            }
                            return a.nodeType
                                ? ((this.context = this[0] = a), (this.length = 1), this)
                                : n.isFunction(a)
                                    ? "undefined" != typeof y.ready
                                        ? y.ready(a)
                                        : a(n)
                                    : (void 0 !== a.selector && ((this.selector = a.selector), (this.context = a.context)), n.makeArray(a, this));
                        });
                    (A.prototype = n.fn), (y = n(l));
                    var B = /^(?:parents|prev(?:Until|All))/,
                        C = { children: !0, contents: !0, next: !0, prev: !0 };
                    n.extend({
                        dir: function (a, b, c) {
                            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                                if (1 === a.nodeType) {
                                    if (e && n(a).is(c)) break;
                                    d.push(a);
                                }
                            return d;
                        },
                        sibling: function (a, b) {
                            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                            return c;
                        },
                    }),
                        n.fn.extend({
                            has: function (a) {
                                var b = n(a, this),
                                    c = b.length;
                                return this.filter(function () {
                                    for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
                                });
                            },
                            closest: function (a, b) {
                                for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                                    for (c = this[d]; c && c !== b; c = c.parentNode)
                                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                                            f.push(c);
                                            break;
                                        }
                                return this.pushStack(f.length > 1 ? n.unique(f) : f);
                            },
                            index: function (a) {
                                return a ? ("string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                            },
                            add: function (a, b) {
                                return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
                            },
                            addBack: function (a) {
                                return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
                            },
                        }),
                        n.each(
                            {
                                parent: function (a) {
                                    var b = a.parentNode;
                                    return b && 11 !== b.nodeType ? b : null;
                                },
                                parents: function (a) {
                                    return n.dir(a, "parentNode");
                                },
                                parentsUntil: function (a, b, c) {
                                    return n.dir(a, "parentNode", c);
                                },
                                next: function (a) {
                                    return D(a, "nextSibling");
                                },
                                prev: function (a) {
                                    return D(a, "previousSibling");
                                },
                                nextAll: function (a) {
                                    return n.dir(a, "nextSibling");
                                },
                                prevAll: function (a) {
                                    return n.dir(a, "previousSibling");
                                },
                                nextUntil: function (a, b, c) {
                                    return n.dir(a, "nextSibling", c);
                                },
                                prevUntil: function (a, b, c) {
                                    return n.dir(a, "previousSibling", c);
                                },
                                siblings: function (a) {
                                    return n.sibling((a.parentNode || {}).firstChild, a);
                                },
                                children: function (a) {
                                    return n.sibling(a.firstChild);
                                },
                                contents: function (a) {
                                    return a.contentDocument || n.merge([], a.childNodes);
                                },
                            },
                            function (a, b) {
                                n.fn[a] = function (c, d) {
                                    var e = n.map(this, b, c);
                                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
                                };
                            }
                        );
                    var E = /\S+/g,
                        F = {};
                    (n.Callbacks = function (a) {
                        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g,
                            h = [],
                            i = !a.once && [],
                            j = function (l) {
                                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                                        b = !1;
                                        break;
                                    }
                                (d = !1), h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
                            },
                            k = {
                                add: function () {
                                    if (h) {
                                        var c = h.length;
                                        !(function g(b) {
                                            n.each(b, function (b, c) {
                                                var d = n.type(c);
                                                "function" === d ? (a.unique && k.has(c)) || h.push(c) : c && c.length && "string" !== d && g(c);
                                            });
                                        })(arguments),
                                            d ? (f = h.length) : b && ((e = c), j(b));
                                    }
                                    return this;
                                },
                                remove: function () {
                                    return (
                                        h &&
                                        n.each(arguments, function (a, b) {
                                            for (var c; (c = n.inArray(b, h, c)) > -1; ) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                                        }),
                                            this
                                    );
                                },
                                has: function (a) {
                                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                                },
                                empty: function () {
                                    return (h = []), (f = 0), this;
                                },
                                disable: function () {
                                    return (h = i = b = void 0), this;
                                },
                                disabled: function () {
                                    return !h;
                                },
                                lock: function () {
                                    return (i = void 0), b || k.disable(), this;
                                },
                                locked: function () {
                                    return !i;
                                },
                                fireWith: function (a, b) {
                                    return !h || (c && !i) || ((b = b || []), (b = [a, b.slice ? b.slice() : b]), d ? i.push(b) : j(b)), this;
                                },
                                fire: function () {
                                    return k.fireWith(this, arguments), this;
                                },
                                fired: function () {
                                    return !!c;
                                },
                            };
                        return k;
                    }),
                        n.extend({
                            Deferred: function (a) {
                                var b = [
                                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                                        ["notify", "progress", n.Callbacks("memory")],
                                    ],
                                    c = "pending",
                                    d = {
                                        state: function () {
                                            return c;
                                        },
                                        always: function () {
                                            return e.done(arguments).fail(arguments), this;
                                        },
                                        then: function () {
                                            var a = arguments;
                                            return n
                                                .Deferred(function (c) {
                                                    n.each(b, function (b, f) {
                                                        var g = n.isFunction(a[b]) && a[b];
                                                        e[f[1]](function () {
                                                            var a = g && g.apply(this, arguments);
                                                            a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                                                        });
                                                    }),
                                                        (a = null);
                                                })
                                                .promise();
                                        },
                                        promise: function (a) {
                                            return null != a ? n.extend(a, d) : d;
                                        },
                                    },
                                    e = {};
                                return (
                                    (d.pipe = d.then),
                                        n.each(b, function (a, f) {
                                            var g = f[2],
                                                h = f[3];
                                            (d[f[1]] = g.add),
                                            h &&
                                            g.add(
                                                function () {
                                                    c = h;
                                                },
                                                b[1 ^ a][2].disable,
                                                b[2][2].lock
                                            ),
                                                (e[f[0]] = function () {
                                                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                                                }),
                                                (e[f[0] + "With"] = g.fireWith);
                                        }),
                                        d.promise(e),
                                    a && a.call(e, e),
                                        e
                                );
                            },
                            when: function (a) {
                                var i,
                                    j,
                                    k,
                                    b = 0,
                                    c = d.call(arguments),
                                    e = c.length,
                                    f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
                                    g = 1 === f ? a : n.Deferred(),
                                    h = function (a, b, c) {
                                        return function (e) {
                                            (b[a] = this), (c[a] = arguments.length > 1 ? d.call(arguments) : e), c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                                        };
                                    };
                                if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                                return f || g.resolveWith(k, c), g.promise();
                            },
                        });
                    var H;
                    (n.fn.ready = function (a) {
                        return n.ready.promise().done(a), this;
                    }),
                        n.extend({
                            isReady: !1,
                            readyWait: 1,
                            holdReady: function (a) {
                                a ? n.readyWait++ : n.ready(!0);
                            },
                            ready: function (a) {
                                (a === !0 ? --n.readyWait : n.isReady) || ((n.isReady = !0), (a !== !0 && --n.readyWait > 0) || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
                            },
                        }),
                        (n.ready.promise = function (b) {
                            return H || ((H = n.Deferred()), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
                        }),
                        n.ready.promise();
                    var J = (n.access = function (a, b, c, d, e, f, g) {
                        var h = 0,
                            i = a.length,
                            j = null == c;
                        if ("object" === n.type(c)) {
                            e = !0;
                            for (h in c) n.access(a, b, h, c[h], !0, f, g);
                        } else if (
                            void 0 !== d &&
                            ((e = !0),
                            n.isFunction(d) || (g = !0),
                            j &&
                            (g
                                ? (b.call(a, d), (b = null))
                                : ((j = b),
                                    (b = function (a, b, c) {
                                        return j.call(n(a), c);
                                    }))),
                                b)
                        )
                            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
                    });
                    (n.acceptData = function (a) {
                        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
                    }),
                        (K.uid = 1),
                        (K.accepts = n.acceptData),
                        (K.prototype = {
                            key: function (a) {
                                if (!K.accepts(a)) return 0;
                                var b = {},
                                    c = a[this.expando];
                                if (!c) {
                                    c = K.uid++;
                                    try {
                                        (b[this.expando] = { value: c }), Object.defineProperties(a, b);
                                    } catch (d) {
                                        (b[this.expando] = c), n.extend(a, b);
                                    }
                                }
                                return this.cache[c] || (this.cache[c] = {}), c;
                            },
                            set: function (a, b, c) {
                                var d,
                                    e = this.key(a),
                                    f = this.cache[e];
                                if ("string" == typeof b) f[b] = c;
                                else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
                                else for (d in b) f[d] = b[d];
                                return f;
                            },
                            get: function (a, b) {
                                var c = this.cache[this.key(a)];
                                return void 0 === b ? c : c[b];
                            },
                            access: function (a, b, c) {
                                var d;
                                return void 0 === b || (b && "string" == typeof b && void 0 === c) ? ((d = this.get(a, b)), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
                            },
                            remove: function (a, b) {
                                var c,
                                    d,
                                    e,
                                    f = this.key(a),
                                    g = this.cache[f];
                                if (void 0 === b) this.cache[f] = {};
                                else {
                                    n.isArray(b) ? (d = b.concat(b.map(n.camelCase))) : ((e = n.camelCase(b)), b in g ? (d = [b, e]) : ((d = e), (d = d in g ? [d] : d.match(E) || []))), (c = d.length);
                                    for (; c--; ) delete g[d[c]];
                                }
                            },
                            hasData: function (a) {
                                return !n.isEmptyObject(this.cache[a[this.expando]] || {});
                            },
                            discard: function (a) {
                                a[this.expando] && delete this.cache[a[this.expando]];
                            },
                        });
                    var L = new K(),
                        M = new K(),
                        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        O = /([A-Z])/g;
                    n.extend({
                        hasData: function (a) {
                            return M.hasData(a) || L.hasData(a);
                        },
                        data: function (a, b, c) {
                            return M.access(a, b, c);
                        },
                        removeData: function (a, b) {
                            M.remove(a, b);
                        },
                        _data: function (a, b, c) {
                            return L.access(a, b, c);
                        },
                        _removeData: function (a, b) {
                            L.remove(a, b);
                        },
                    }),
                        n.fn.extend({
                            data: function (a, b) {
                                var c,
                                    d,
                                    e,
                                    f = this[0],
                                    g = f && f.attributes;
                                if (void 0 === a) {
                                    if (this.length && ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                                        for (c = g.length; c--; ) g[c] && ((d = g[c].name), 0 === d.indexOf("data-") && ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
                                        L.set(f, "hasDataAttrs", !0);
                                    }
                                    return e;
                                }
                                return "object" == typeof a
                                    ? this.each(function () {
                                        M.set(this, a);
                                    })
                                    : J(
                                        this,
                                        function (b) {
                                            var c,
                                                d = n.camelCase(a);
                                            if (f && void 0 === b) {
                                                if (((c = M.get(f, a)), void 0 !== c)) return c;
                                                if (((c = M.get(f, d)), void 0 !== c)) return c;
                                                if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                                            } else
                                                this.each(function () {
                                                    var c = M.get(this, d);
                                                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                                                });
                                        },
                                        null,
                                        b,
                                        arguments.length > 1,
                                        null,
                                        !0
                                    );
                            },
                            removeData: function (a) {
                                return this.each(function () {
                                    M.remove(this, a);
                                });
                            },
                        }),
                        n.extend({
                            queue: function (a, b, c) {
                                var d;
                                return a ? ((b = (b || "fx") + "queue"), (d = L.get(a, b)), c && (!d || n.isArray(c) ? (d = L.access(a, b, n.makeArray(c))) : d.push(c)), d || []) : void 0;
                            },
                            dequeue: function (a, b) {
                                b = b || "fx";
                                var c = n.queue(a, b),
                                    d = c.length,
                                    e = c.shift(),
                                    f = n._queueHooks(a, b),
                                    g = function () {
                                        n.dequeue(a, b);
                                    };
                                "inprogress" === e && ((e = c.shift()), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
                            },
                            _queueHooks: function (a, b) {
                                var c = b + "queueHooks";
                                return (
                                    L.get(a, c) ||
                                    L.access(a, c, {
                                        empty: n.Callbacks("once memory").add(function () {
                                            L.remove(a, [b + "queue", c]);
                                        }),
                                    })
                                );
                            },
                        }),
                        n.fn.extend({
                            queue: function (a, b) {
                                var c = 2;
                                return (
                                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                                        arguments.length < c
                                            ? n.queue(this[0], a)
                                            : void 0 === b
                                                ? this
                                                : this.each(function () {
                                                    var c = n.queue(this, a, b);
                                                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                                                })
                                );
                            },
                            dequeue: function (a) {
                                return this.each(function () {
                                    n.dequeue(this, a);
                                });
                            },
                            clearQueue: function (a) {
                                return this.queue(a || "fx", []);
                            },
                            promise: function (a, b) {
                                var c,
                                    d = 1,
                                    e = n.Deferred(),
                                    f = this,
                                    g = this.length,
                                    h = function () {
                                        --d || e.resolveWith(f, [f]);
                                    };
                                for ("string" != typeof a && ((b = a), (a = void 0)), a = a || "fx"; g--; ) (c = L.get(f[g], a + "queueHooks")), c && c.empty && (d++, c.empty.add(h));
                                return h(), e.promise(b);
                            },
                        });
                    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        R = ["Top", "Right", "Bottom", "Left"],
                        S = function (a, b) {
                            return (a = b || a), "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
                        },
                        T = /^(?:checkbox|radio)$/i;
                    !(function () {
                        var a = l.createDocumentFragment(),
                            b = a.appendChild(l.createElement("div")),
                            c = l.createElement("input");
                        c.setAttribute("type", "radio"),
                            c.setAttribute("checked", "checked"),
                            c.setAttribute("name", "t"),
                            b.appendChild(c),
                            (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
                            (b.innerHTML = "<textarea>x</textarea>"),
                            (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
                    })();
                    var U = "undefined";
                    k.focusinBubbles = "onfocusin" in a;
                    var V = /^key/,
                        W = /^(?:mouse|pointer|contextmenu)|click/,
                        X = /^(?:focusinfocus|focusoutblur)$/,
                        Y = /^([^.]*)(?:\.(.+)|)$/;
                    (n.event = {
                        global: {},
                        add: function (a, b, c, d, e) {
                            var f,
                                g,
                                h,
                                i,
                                j,
                                k,
                                l,
                                m,
                                o,
                                p,
                                q,
                                r = L.get(a);
                            if (r)
                                for (
                                    c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                                    c.guid || (c.guid = n.guid++),
                                    (i = r.events) || (i = r.events = {}),
                                    (g = r.handle) ||
                                    (g = r.handle = function (b) {
                                        return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                                    }),
                                        b = (b || "").match(E) || [""],
                                        j = b.length;
                                    j--;

                                )
                                    (h = Y.exec(b[j]) || []),
                                        (o = q = h[1]),
                                        (p = (h[2] || "").split(".").sort()),
                                    o &&
                                    ((l = n.event.special[o] || {}),
                                        (o = (e ? l.delegateType : l.bindType) || o),
                                        (l = n.event.special[o] || {}),
                                        (k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f)),
                                    (m = i[o]) || ((m = i[o] = []), (m.delegateCount = 0), (l.setup && l.setup.call(a, d, p, g) !== !1) || (a.addEventListener && a.addEventListener(o, g, !1))),
                                    l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                                        e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                                        (n.event.global[o] = !0));
                        },
                        remove: function (a, b, c, d, e) {
                            var f,
                                g,
                                h,
                                i,
                                j,
                                k,
                                l,
                                m,
                                o,
                                p,
                                q,
                                r = L.hasData(a) && L.get(a);
                            if (r && (i = r.events)) {
                                for (b = (b || "").match(E) || [""], j = b.length; j--; )
                                    if (((h = Y.exec(b[j]) || []), (o = q = h[1]), (p = (h[2] || "").split(".").sort()), o)) {
                                        for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                                            (k = m[f]),
                                            (!e && q !== k.origType) ||
                                            (c && c.guid !== k.guid) ||
                                            (h && !h.test(k.namespace)) ||
                                            (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                                            (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                                        g && !m.length && ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) || n.removeEvent(a, o, r.handle), delete i[o]);
                                    } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
                            }
                        },
                        trigger: function (b, c, d, e) {
                            var f,
                                g,
                                h,
                                i,
                                k,
                                m,
                                o,
                                p = [d || l],
                                q = j.call(b, "type") ? b.type : b,
                                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                            if (
                                ((g = h = d = d || l),
                                3 !== d.nodeType &&
                                8 !== d.nodeType &&
                                !X.test(q + n.event.triggered) &&
                                (q.indexOf(".") >= 0 && ((r = q.split(".")), (q = r.shift()), r.sort()),
                                    (k = q.indexOf(":") < 0 && "on" + q),
                                    (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
                                    (b.isTrigger = e ? 2 : 3),
                                    (b.namespace = r.join(".")),
                                    (b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (b.result = void 0),
                                b.target || (b.target = d),
                                    (c = null == c ? [b] : n.makeArray(c, [b])),
                                    (o = n.event.special[q] || {}),
                                e || !o.trigger || o.trigger.apply(d, c) !== !1))
                            ) {
                                if (!e && !o.noBubble && !n.isWindow(d)) {
                                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), (h = g);
                                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                                }
                                for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); )
                                    (b.type = f > 1 ? i : o.bindType || q),
                                        (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
                                    m && m.apply(g, c),
                                        (m = k && g[k]),
                                    m && m.apply && n.acceptData(g) && ((b.result = m.apply(g, c)), b.result === !1 && b.preventDefault());
                                return (
                                    (b.type = q),
                                    e ||
                                    b.isDefaultPrevented() ||
                                    (o._default && o._default.apply(p.pop(), c) !== !1) ||
                                    !n.acceptData(d) ||
                                    (k && n.isFunction(d[q]) && !n.isWindow(d) && ((h = d[k]), h && (d[k] = null), (n.event.triggered = q), d[q](), (n.event.triggered = void 0), h && (d[k] = h))),
                                        b.result
                                );
                            }
                        },
                        dispatch: function (a) {
                            a = n.event.fix(a);
                            var b,
                                c,
                                e,
                                f,
                                g,
                                h = [],
                                i = d.call(arguments),
                                j = (L.get(this, "events") || {})[a.type] || [],
                                k = n.event.special[a.type] || {};
                            if (((i[0] = a), (a.delegateTarget = this), !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
                                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped(); )
                                    for (a.currentTarget = f.elem, c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                                        (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
                                        ((a.handleObj = g),
                                            (a.data = g.data),
                                            (e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)),
                                        void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                                return k.postDispatch && k.postDispatch.call(this, a), a.result;
                            }
                        },
                        handlers: function (a, b) {
                            var c,
                                d,
                                e,
                                f,
                                g = [],
                                h = b.delegateCount,
                                i = a.target;
                            if (h && i.nodeType && (!a.button || "click" !== a.type))
                                for (; i !== this; i = i.parentNode || this)
                                    if (i.disabled !== !0 || "click" !== a.type) {
                                        for (d = [], c = 0; h > c; c++) (f = b[c]), (e = f.selector + " "), void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                                        d.length && g.push({ elem: i, handlers: d });
                                    }
                            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "),
                            filter: function (a, b) {
                                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
                            },
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function (a, b) {
                                var c,
                                    d,
                                    e,
                                    f = b.button;
                                return (
                                    null == a.pageX &&
                                    null != b.clientX &&
                                    ((c = a.target.ownerDocument || l),
                                        (d = c.documentElement),
                                        (e = c.body),
                                        (a.pageX = b.clientX + ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) - ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
                                        (a.pageY = b.clientY + ((d && d.scrollTop) || (e && e.scrollTop) || 0) - ((d && d.clientTop) || (e && e.clientTop) || 0))),
                                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                                        a
                                );
                            },
                        },
                        fix: function (a) {
                            if (a[n.expando]) return a;
                            var b,
                                c,
                                d,
                                e = a.type,
                                f = a,
                                g = this.fixHooks[e];
                            for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--; )
                                (c = d[b]), (a[c] = f[c]);
                            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
                        },
                        special: {
                            load: { noBubble: !0 },
                            focus: {
                                trigger: function () {
                                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                                },
                                delegateType: "focusin",
                            },
                            blur: {
                                trigger: function () {
                                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                                },
                                delegateType: "focusout",
                            },
                            click: {
                                trigger: function () {
                                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
                                },
                                _default: function (a) {
                                    return n.nodeName(a.target, "a");
                                },
                            },
                            beforeunload: {
                                postDispatch: function (a) {
                                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                                },
                            },
                        },
                        simulate: function (a, b, c, d) {
                            var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });
                            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
                        },
                    }),
                        (n.removeEvent = function (a, b, c) {
                            a.removeEventListener && a.removeEventListener(b, c, !1);
                        }),
                        (n.Event = function (a, b) {
                            return this instanceof n.Event
                                ? (a && a.type ? ((this.originalEvent = a), (this.type = a.type), (this.isDefaultPrevented = a.defaultPrevented || (void 0 === a.defaultPrevented && a.returnValue === !1) ? Z : $)) : (this.type = a),
                                b && n.extend(this, b),
                                    (this.timeStamp = (a && a.timeStamp) || n.now()),
                                    void (this[n.expando] = !0))
                                : new n.Event(a, b);
                        }),
                        (n.Event.prototype = {
                            isDefaultPrevented: $,
                            isPropagationStopped: $,
                            isImmediatePropagationStopped: $,
                            preventDefault: function () {
                                var a = this.originalEvent;
                                (this.isDefaultPrevented = Z), a && a.preventDefault && a.preventDefault();
                            },
                            stopPropagation: function () {
                                var a = this.originalEvent;
                                (this.isPropagationStopped = Z), a && a.stopPropagation && a.stopPropagation();
                            },
                            stopImmediatePropagation: function () {
                                var a = this.originalEvent;
                                (this.isImmediatePropagationStopped = Z), a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
                            },
                        }),
                        n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
                            n.event.special[a] = {
                                delegateType: b,
                                bindType: b,
                                handle: function (a) {
                                    var c,
                                        d = this,
                                        e = a.relatedTarget,
                                        f = a.handleObj;
                                    return (!e || (e !== d && !n.contains(d, e))) && ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
                                },
                            };
                        }),
                    k.focusinBubbles ||
                    n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                        var c = function (a) {
                            n.event.simulate(b, a.target, n.event.fix(a), !0);
                        };
                        n.event.special[b] = {
                            setup: function () {
                                var d = this.ownerDocument || this,
                                    e = L.access(d, b);
                                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
                            },
                            teardown: function () {
                                var d = this.ownerDocument || this,
                                    e = L.access(d, b) - 1;
                                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
                            },
                        };
                    }),
                        n.fn.extend({
                            on: function (a, b, c, d, e) {
                                var f, g;
                                if ("object" == typeof a) {
                                    "string" != typeof b && ((c = c || b), (b = void 0));
                                    for (g in a) this.on(g, b, c, a[g], e);
                                    return this;
                                }
                                if ((null == c && null == d ? ((d = b), (c = b = void 0)) : null == d && ("string" == typeof b ? ((d = c), (c = void 0)) : ((d = c), (c = b), (b = void 0))), d === !1)) d = $;
                                else if (!d) return this;
                                return (
                                    1 === e &&
                                    ((f = d),
                                        (d = function (a) {
                                            return n().off(a), f.apply(this, arguments);
                                        }),
                                        (d.guid = f.guid || (f.guid = n.guid++))),
                                        this.each(function () {
                                            n.event.add(this, a, d, c, b);
                                        })
                                );
                            },
                            one: function (a, b, c, d) {
                                return this.on(a, b, c, d, 1);
                            },
                            off: function (a, b, c) {
                                var d, e;
                                if (a && a.preventDefault && a.handleObj) return (d = a.handleObj), n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                                if ("object" == typeof a) {
                                    for (e in a) this.off(e, b, a[e]);
                                    return this;
                                }
                                return (
                                    (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
                                    c === !1 && (c = $),
                                        this.each(function () {
                                            n.event.remove(this, a, c, b);
                                        })
                                );
                            },
                            trigger: function (a, b) {
                                return this.each(function () {
                                    n.event.trigger(a, b, this);
                                });
                            },
                            triggerHandler: function (a, b) {
                                var c = this[0];
                                return c ? n.event.trigger(a, b, c, !0) : void 0;
                            },
                        });
                    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                        ba = /<([\w:]+)/,
                        ca = /<|&#?\w+;/,
                        da = /<(?:script|style|link)/i,
                        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        fa = /^$|\/(?:java|ecma)script/i,
                        ga = /^true\/(.*)/,
                        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                        ia = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""],
                        };
                    (ia.optgroup = ia.option),
                        (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead),
                        (ia.th = ia.td),
                        n.extend({
                            clone: function (a, b, c) {
                                var d,
                                    e,
                                    f,
                                    g,
                                    h = a.cloneNode(!0),
                                    i = n.contains(a.ownerDocument, a);
                                if (!(k.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
                                if (b)
                                    if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
                                    else na(a, h);
                                return (g = oa(h, "script")), g.length > 0 && ma(g, !i && oa(a, "script")), h;
                            },
                            buildFragment: function (a, b, c, d) {
                                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                                    if (((e = a[m]), e || 0 === e))
                                        if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                                        else if (ca.test(e)) {
                                            for (
                                                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                                                j--;

                                            )
                                                f = f.lastChild;
                                            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = "");
                                        } else l.push(b.createTextNode(e));
                                for (k.textContent = "", m = 0; (e = l[m++]); )
                                    if ((!d || -1 === n.inArray(e, d)) && ((i = n.contains(e.ownerDocument, e)), (f = oa(k.appendChild(e), "script")), i && ma(f), c)) for (j = 0; (e = f[j++]); ) fa.test(e.type || "") && c.push(e);
                                return k;
                            },
                            cleanData: function (a) {
                                for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                                    if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
                                        if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                                        L.cache[e] && delete L.cache[e];
                                    }
                                    delete M.cache[c[M.expando]];
                                }
                            },
                        }),
                        n.fn.extend({
                            text: function (a) {
                                return J(
                                    this,
                                    function (a) {
                                        return void 0 === a
                                            ? n.text(this)
                                            : this.empty().each(function () {
                                                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                                            });
                                    },
                                    null,
                                    a,
                                    arguments.length
                                );
                            },
                            append: function () {
                                return this.domManip(arguments, function (a) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var b = ja(this, a);
                                        b.appendChild(a);
                                    }
                                });
                            },
                            prepend: function () {
                                return this.domManip(arguments, function (a) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var b = ja(this, a);
                                        b.insertBefore(a, b.firstChild);
                                    }
                                });
                            },
                            before: function () {
                                return this.domManip(arguments, function (a) {
                                    this.parentNode && this.parentNode.insertBefore(a, this);
                                });
                            },
                            after: function () {
                                return this.domManip(arguments, function (a) {
                                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                                });
                            },
                            remove: function (a, b) {
                                for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                                    b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
                                return this;
                            },
                            empty: function () {
                                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ""));
                                return this;
                            },
                            clone: function (a, b) {
                                return (
                                    (a = null == a ? !1 : a),
                                        (b = null == b ? a : b),
                                        this.map(function () {
                                            return n.clone(this, a, b);
                                        })
                                );
                            },
                            html: function (a) {
                                return J(
                                    this,
                                    function (a) {
                                        var b = this[0] || {},
                                            c = 0,
                                            d = this.length;
                                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                                        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                                            a = a.replace(aa, "<$1></$2>");
                                            try {
                                                for (; d > c; c++) (b = this[c] || {}), 1 === b.nodeType && (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                                                b = 0;
                                            } catch (e) {}
                                        }
                                        b && this.empty().append(a);
                                    },
                                    null,
                                    a,
                                    arguments.length
                                );
                            },
                            replaceWith: function () {
                                var a = arguments[0];
                                return (
                                    this.domManip(arguments, function (b) {
                                        (a = this.parentNode), n.cleanData(oa(this)), a && a.replaceChild(b, this);
                                    }),
                                        a && (a.length || a.nodeType) ? this : this.remove()
                                );
                            },
                            detach: function (a) {
                                return this.remove(a, !0);
                            },
                            domManip: function (a, b) {
                                a = e.apply([], a);
                                var c,
                                    d,
                                    f,
                                    g,
                                    h,
                                    i,
                                    j = 0,
                                    l = this.length,
                                    m = this,
                                    o = l - 1,
                                    p = a[0],
                                    q = n.isFunction(p);
                                if (q || (l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)))
                                    return this.each(function (c) {
                                        var d = m.eq(c);
                                        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                                    });
                                if (l && ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)), (d = c.firstChild), 1 === c.childNodes.length && (c = d), d)) {
                                    for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) (h = c), j !== o && ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                                    if (g)
                                        for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)
                                            (h = f[j]), fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
                                }
                                return this;
                            },
                        }),
                        n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
                            n.fn[a] = function (a) {
                                for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) (c = h === g ? this : this.clone(!0)), n(e[h])[b](c), f.apply(d, c.get());
                                return this.pushStack(d);
                            };
                        });
                    var qa,
                        ra = {},
                        ua = /^margin/,
                        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
                        wa = function (b) {
                            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
                        };
                    !(function () {
                        function g() {
                            (f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                                (f.innerHTML = ""),
                                d.appendChild(e);
                            var g = a.getComputedStyle(f, null);
                            (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
                        }
                        var b,
                            c,
                            d = l.documentElement,
                            e = l.createElement("div"),
                            f = l.createElement("div");
                        f.style &&
                        ((f.style.backgroundClip = "content-box"),
                            (f.cloneNode(!0).style.backgroundClip = ""),
                            (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
                            (e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
                            e.appendChild(f),
                        a.getComputedStyle &&
                        n.extend(k, {
                            pixelPosition: function () {
                                return g(), b;
                            },
                            boxSizingReliable: function () {
                                return null == c && g(), c;
                            },
                            reliableMarginRight: function () {
                                var b,
                                    c = f.appendChild(l.createElement("div"));
                                return (
                                    (c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                                        (c.style.marginRight = c.style.width = "0"),
                                        (f.style.width = "1px"),
                                        d.appendChild(e),
                                        (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
                                        d.removeChild(e),
                                        f.removeChild(c),
                                        b
                                );
                            },
                        }));
                    })(),
                        (n.swap = function (a, b, c, d) {
                            var e,
                                f,
                                g = {};
                            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
                            e = c.apply(a, d || []);
                            for (f in b) a.style[f] = g[f];
                            return e;
                        });
                    var za = /^(none|table(?!-c[ea]).+)/,
                        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
                        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
                        Ca = { position: "absolute", visibility: "hidden", display: "block" },
                        Da = { letterSpacing: "0", fontWeight: "400" },
                        Ea = ["Webkit", "O", "Moz", "ms"];
                    n.extend({
                        cssHooks: {
                            opacity: {
                                get: function (a, b) {
                                    if (b) {
                                        var c = xa(a, "opacity");
                                        return "" === c ? "1" : c;
                                    }
                                },
                            },
                        },
                        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                        cssProps: { float: "cssFloat" },
                        style: function (a, b, c, d) {
                            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                                var e,
                                    f,
                                    g,
                                    h = n.camelCase(b),
                                    i = a.style;
                                return (
                                    (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
                                        (g = n.cssHooks[b] || n.cssHooks[h]),
                                        void 0 === c
                                            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                                                ? e
                                                : i[b]
                                            : ((f = typeof c),
                                            "string" === f && (e = Ba.exec(c)) && ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))), (f = "number")),
                                            null != c &&
                                            c === c &&
                                            ("number" !== f || n.cssNumber[h] || (c += "px"),
                                            k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                                            (g && "set" in g && void 0 === (c = g.set(a, c, d))) || (i[b] = c)),
                                                void 0)
                                );
                            }
                        },
                        css: function (a, b, c, d) {
                            var e,
                                f,
                                g,
                                h = n.camelCase(b);
                            return (
                                (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
                                    (g = n.cssHooks[b] || n.cssHooks[h]),
                                g && "get" in g && (e = g.get(a, !0, c)),
                                void 0 === e && (e = xa(a, b, d)),
                                "normal" === e && b in Da && (e = Da[b]),
                                    "" === c || c ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
                            );
                        },
                    }),
                        n.each(["height", "width"], function (a, b) {
                            n.cssHooks[b] = {
                                get: function (a, c, d) {
                                    return c
                                        ? za.test(n.css(a, "display")) && 0 === a.offsetWidth
                                            ? n.swap(a, Ca, function () {
                                                return Ia(a, b, d);
                                            })
                                            : Ia(a, b, d)
                                        : void 0;
                                },
                                set: function (a, c, d) {
                                    var e = d && wa(a);
                                    return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
                                },
                            };
                        }),
                        (n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
                            return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
                        })),
                        n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
                            (n.cssHooks[a + b] = {
                                expand: function (c) {
                                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                                    return e;
                                },
                            }),
                            ua.test(a) || (n.cssHooks[a + b].set = Ga);
                        }),
                        n.fn.extend({
                            css: function (a, b) {
                                return J(
                                    this,
                                    function (a, b, c) {
                                        var d,
                                            e,
                                            f = {},
                                            g = 0;
                                        if (n.isArray(b)) {
                                            for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                                            return f;
                                        }
                                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                                    },
                                    a,
                                    b,
                                    arguments.length > 1
                                );
                            },
                            show: function () {
                                return Ja(this, !0);
                            },
                            hide: function () {
                                return Ja(this);
                            },
                            toggle: function (a) {
                                return "boolean" == typeof a
                                    ? a
                                        ? this.show()
                                        : this.hide()
                                    : this.each(function () {
                                        S(this) ? n(this).show() : n(this).hide();
                                    });
                            },
                        }),
                        (n.Tween = Ka),
                        (Ka.prototype = {
                            constructor: Ka,
                            init: function (a, b, c, d, e, f) {
                                (this.elem = a), (this.prop = c), (this.easing = e || "swing"), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || (n.cssNumber[c] ? "" : "px"));
                            },
                            cur: function () {
                                var a = Ka.propHooks[this.prop];
                                return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
                            },
                            run: function (a) {
                                var b,
                                    c = Ka.propHooks[this.prop];
                                return (
                                    this.options.duration ? (this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)) : (this.pos = b = a),
                                        (this.now = (this.end - this.start) * b + this.start),
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                        c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
                                        this
                                );
                            },
                        }),
                        (Ka.prototype.init.prototype = Ka.prototype),
                        (Ka.propHooks = {
                            _default: {
                                get: function (a) {
                                    var b;
                                    return null == a.elem[a.prop] || (a.elem.style && null != a.elem.style[a.prop]) ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0) : a.elem[a.prop];
                                },
                                set: function (a) {
                                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : (a.elem[a.prop] = a.now);
                                },
                            },
                        }),
                        (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
                            set: function (a) {
                                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
                            },
                        }),
                        (n.easing = {
                            linear: function (a) {
                                return a;
                            },
                            swing: function (a) {
                                return 0.5 - Math.cos(a * Math.PI) / 2;
                            },
                        }),
                        (n.fx = Ka.prototype.init),
                        (n.fx.step = {});
                    var La,
                        Ma,
                        Na = /^(?:toggle|show|hide)$/,
                        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
                        Pa = /queueHooks$/,
                        Qa = [Va],
                        Ra = {
                            "*": [
                                function (a, b) {
                                    var c = this.createTween(a, b),
                                        d = c.cur(),
                                        e = Oa.exec(b),
                                        f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
                                        g = (n.cssNumber[a] || ("px" !== f && +d)) && Oa.exec(n.css(c.elem, a)),
                                        h = 1,
                                        i = 20;
                                    if (g && g[3] !== f) {
                                        (f = f || g[3]), (e = e || []), (g = +d || 1);
                                        do (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
                                        while (h !== (h = c.cur() / d) && 1 !== h && --i);
                                    }
                                    return e && ((g = c.start = +g || +d || 0), (c.unit = f), (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])), c;
                                },
                            ],
                        };
                    (n.Animation = n.extend(Xa, {
                        tweener: function (a, b) {
                            n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
                            for (var c, d = 0, e = a.length; e > d; d++) (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
                        },
                        prefilter: function (a, b) {
                            b ? Qa.unshift(a) : Qa.push(a);
                        },
                    })),
                        (n.speed = function (a, b, c) {
                            var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || (!c && b) || (n.isFunction(a) && a), duration: a, easing: (c && b) || (b && !n.isFunction(b) && b) };
                            return (
                                (d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default),
                                (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                                    (d.old = d.complete),
                                    (d.complete = function () {
                                        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
                                    }),
                                    d
                            );
                        }),
                        n.fn.extend({
                            fadeTo: function (a, b, c, d) {
                                return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
                            },
                            animate: function (a, b, c, d) {
                                var e = n.isEmptyObject(a),
                                    f = n.speed(b, c, d),
                                    g = function () {
                                        var b = Xa(this, n.extend({}, a), f);
                                        (e || L.get(this, "finish")) && b.stop(!0);
                                    };
                                return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
                            },
                            stop: function (a, b, c) {
                                var d = function (a) {
                                    var b = a.stop;
                                    delete a.stop, b(c);
                                };
                                return (
                                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                                    b && a !== !1 && this.queue(a || "fx", []),
                                        this.each(function () {
                                            var b = !0,
                                                e = null != a && a + "queueHooks",
                                                f = n.timers,
                                                g = L.get(this);
                                            if (e) g[e] && g[e].stop && d(g[e]);
                                            else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                                            for (e = f.length; e--; ) f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                                            (b || !c) && n.dequeue(this, a);
                                        })
                                );
                            },
                            finish: function (a) {
                                return (
                                    a !== !1 && (a = a || "fx"),
                                        this.each(function () {
                                            var b,
                                                c = L.get(this),
                                                d = c[a + "queue"],
                                                e = c[a + "queueHooks"],
                                                f = n.timers,
                                                g = d ? d.length : 0;
                                            for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                                            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                                            delete c.finish;
                                        })
                                );
                            },
                        }),
                        n.each(["toggle", "show", "hide"], function (a, b) {
                            var c = n.fn[b];
                            n.fn[b] = function (a, d, e) {
                                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
                            };
                        }),
                        n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
                            n.fn[a] = function (a, c, d) {
                                return this.animate(b, a, c, d);
                            };
                        }),
                        (n.timers = []),
                        (n.fx.tick = function () {
                            var a,
                                b = 0,
                                c = n.timers;
                            for (La = n.now(); b < c.length; b++) (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
                            c.length || n.fx.stop(), (La = void 0);
                        }),
                        (n.fx.timer = function (a) {
                            n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
                        }),
                        (n.fx.interval = 13),
                        (n.fx.start = function () {
                            Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
                        }),
                        (n.fx.stop = function () {
                            clearInterval(Ma), (Ma = null);
                        }),
                        (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                        (n.fn.delay = function (a, b) {
                            return (
                                (a = n.fx ? n.fx.speeds[a] || a : a),
                                    (b = b || "fx"),
                                    this.queue(b, function (b, c) {
                                        var d = setTimeout(b, a);
                                        c.stop = function () {
                                            clearTimeout(d);
                                        };
                                    })
                            );
                        }),
                        (function () {
                            var a = l.createElement("input"),
                                b = l.createElement("select"),
                                c = b.appendChild(l.createElement("option"));
                            (a.type = "checkbox"),
                                (k.checkOn = "" !== a.value),
                                (k.optSelected = c.selected),
                                (b.disabled = !0),
                                (k.optDisabled = !c.disabled),
                                (a = l.createElement("input")),
                                (a.value = "t"),
                                (a.type = "radio"),
                                (k.radioValue = "t" === a.value);
                        })();
                    var Ya,
                        Za,
                        $a = n.expr.attrHandle;
                    n.fn.extend({
                        attr: function (a, b) {
                            return J(this, n.attr, a, b, arguments.length > 1);
                        },
                        removeAttr: function (a) {
                            return this.each(function () {
                                n.removeAttr(this, a);
                            });
                        },
                    }),
                        n.extend({
                            attr: function (a, b, c) {
                                var d,
                                    e,
                                    f = a.nodeType;
                                if (a && 3 !== f && 8 !== f && 2 !== f)
                                    return typeof a.getAttribute === U
                                        ? n.prop(a, b, c)
                                        : ((1 === f && n.isXMLDoc(a)) || ((b = b.toLowerCase()), (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
                                            void 0 === c
                                                ? d && "get" in d && null !== (e = d.get(a, b))
                                                    ? e
                                                    : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                                                : null !== c
                                                    ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                                                        ? e
                                                        : (a.setAttribute(b, c + ""), c)
                                                    : void n.removeAttr(a, b));
                            },
                            removeAttr: function (a, b) {
                                var c,
                                    d,
                                    e = 0,
                                    f = b && b.match(E);
                                if (f && 1 === a.nodeType) for (; (c = f[e++]); ) (d = n.propFix[c] || c), n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
                            },
                            attrHooks: {
                                type: {
                                    set: function (a, b) {
                                        if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                                            var c = a.value;
                                            return a.setAttribute("type", b), c && (a.value = c), b;
                                        }
                                    },
                                },
                            },
                        }),
                        (Za = {
                            set: function (a, b, c) {
                                return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
                            },
                        }),
                        n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
                            var c = $a[b] || n.find.attr;
                            $a[b] = function (a, b, d) {
                                var e, f;
                                return d || ((f = $a[b]), ($a[b] = e), (e = null != c(a, b, d) ? b.toLowerCase() : null), ($a[b] = f)), e;
                            };
                        });
                    var _a = /^(?:input|select|textarea|button)$/i;
                    n.fn.extend({
                        prop: function (a, b) {
                            return J(this, n.prop, a, b, arguments.length > 1);
                        },
                        removeProp: function (a) {
                            return this.each(function () {
                                delete this[n.propFix[a] || a];
                            });
                        },
                    }),
                        n.extend({
                            propFix: { for: "htmlFor", class: "className" },
                            prop: function (a, b, c) {
                                var d,
                                    e,
                                    f,
                                    g = a.nodeType;
                                if (a && 3 !== g && 8 !== g && 2 !== g)
                                    return (
                                        (f = 1 !== g || !n.isXMLDoc(a)),
                                        f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
                                            void 0 !== c ? (e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a[b] = c)) : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                                    );
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (a) {
                                        return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                                    },
                                },
                            },
                        }),
                    k.optSelected ||
                    (n.propHooks.selected = {
                        get: function (a) {
                            var b = a.parentNode;
                            return b && b.parentNode && b.parentNode.selectedIndex, null;
                        },
                    }),
                        n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                            n.propFix[this.toLowerCase()] = this;
                        });
                    var ab = /[\t\r\n\f]/g;
                    n.fn.extend({
                        addClass: function (a) {
                            var b,
                                c,
                                d,
                                e,
                                f,
                                g,
                                h = "string" == typeof a && a,
                                i = 0,
                                j = this.length;
                            if (n.isFunction(a))
                                return this.each(function (b) {
                                    n(this).addClass(a.call(this, b, this.className));
                                });
                            if (h)
                                for (b = (a || "").match(E) || []; j > i; i++)
                                    if (((c = this[i]), (d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")))) {
                                        for (f = 0; (e = b[f++]); ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                                        (g = n.trim(d)), c.className !== g && (c.className = g);
                                    }
                            return this;
                        },
                        removeClass: function (a) {
                            var b,
                                c,
                                d,
                                e,
                                f,
                                g,
                                h = 0 === arguments.length || ("string" == typeof a && a),
                                i = 0,
                                j = this.length;
                            if (n.isFunction(a))
                                return this.each(function (b) {
                                    n(this).removeClass(a.call(this, b, this.className));
                                });
                            if (h)
                                for (b = (a || "").match(E) || []; j > i; i++)
                                    if (((c = this[i]), (d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")))) {
                                        for (f = 0; (e = b[f++]); ) for (; d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                                        (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
                                    }
                            return this;
                        },
                        toggleClass: function (a, b) {
                            var c = typeof a;
                            return "boolean" == typeof b && "string" === c
                                ? b
                                    ? this.addClass(a)
                                    : this.removeClass(a)
                                : n.isFunction(a)
                                    ? this.each(function (c) {
                                        n(this).toggleClass(a.call(this, c, this.className, b), b);
                                    })
                                    : this.each(function () {
                                        if ("string" === c) for (var b, d = 0, e = n(this), f = a.match(E) || []; (b = f[d++]); ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                                        else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || ""));
                                    });
                        },
                        hasClass: function (a) {
                            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
                            return !1;
                        },
                    });
                    var bb = /\r/g;
                    n.fn.extend({
                        val: function (a) {
                            var b,
                                c,
                                d,
                                e = this[0];
                            {
                                if (arguments.length)
                                    return (
                                        (d = n.isFunction(a)),
                                            this.each(function (c) {
                                                var e;
                                                1 === this.nodeType &&
                                                ((e = d ? a.call(this, c, n(this).val()) : a),
                                                    null == e
                                                        ? (e = "")
                                                        : "number" == typeof e
                                                            ? (e += "")
                                                            : n.isArray(e) &&
                                                            (e = n.map(e, function (a) {
                                                                return null == a ? "" : a + "";
                                                            })),
                                                    (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]),
                                                (b && "set" in b && void 0 !== b.set(this, e, "value")) || (this.value = e));
                                            })
                                    );
                                if (e)
                                    return (
                                        (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
                                            b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : ((c = e.value), "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
                                    );
                            }
                        },
                    }),
                        n.extend({
                            valHooks: {
                                option: {
                                    get: function (a) {
                                        var b = n.find.attr(a, "value");
                                        return null != b ? b : n.trim(n.text(a));
                                    },
                                },
                                select: {
                                    get: function (a) {
                                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                            if (((c = d[i]), (c.selected || i === e) && (k.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup")))) {
                                                if (((b = n(c).val()), f)) return b;
                                                g.push(b);
                                            }
                                        return g;
                                    },
                                    set: function (a, b) {
                                        for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; ) (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                                        return c || (a.selectedIndex = -1), f;
                                    },
                                },
                            },
                        }),
                        n.each(["radio", "checkbox"], function () {
                            (n.valHooks[this] = {
                                set: function (a, b) {
                                    return n.isArray(b) ? (a.checked = n.inArray(n(a).val(), b) >= 0) : void 0;
                                },
                            }),
                            k.checkOn ||
                            (n.valHooks[this].get = function (a) {
                                return null === a.getAttribute("value") ? "on" : a.value;
                            });
                        }),
                        n.each(
                            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                                " "
                            ),
                            function (a, b) {
                                n.fn[b] = function (a, c) {
                                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
                                };
                            }
                        ),
                        n.fn.extend({
                            hover: function (a, b) {
                                return this.mouseenter(a).mouseleave(b || a);
                            },
                            bind: function (a, b, c) {
                                return this.on(a, null, b, c);
                            },
                            unbind: function (a, b) {
                                return this.off(a, null, b);
                            },
                            delegate: function (a, b, c, d) {
                                return this.on(b, a, c, d);
                            },
                            undelegate: function (a, b, c) {
                                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
                            },
                        });
                    var cb = n.now(),
                        db = /\?/;
                    (n.parseJSON = function (a) {
                        return JSON.parse(a + "");
                    }),
                        (n.parseXML = function (a) {
                            var b, c;
                            if (!a || "string" != typeof a) return null;
                            try {
                                (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
                            } catch (d) {
                                b = void 0;
                            }
                            return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
                        });
                    var eb = /#.*$/,
                        fb = /([?&])_=[^&]*/,
                        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                        ib = /^(?:GET|HEAD)$/,
                        jb = /^\/\//,
                        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                        lb = {},
                        mb = {},
                        nb = "*/".concat("*"),
                        ob = a.location.href,
                        pb = kb.exec(ob.toLowerCase()) || [];
                    n.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: ob,
                            type: "GET",
                            isLocal: hb.test(pb[1]),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                            contents: { xml: /xml/, html: /html/, json: /json/ },
                            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                            converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML },
                            flatOptions: { url: !0, context: !0 },
                        },
                        ajaxSetup: function (a, b) {
                            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
                        },
                        ajaxPrefilter: qb(lb),
                        ajaxTransport: qb(mb),
                        ajax: function (a, b) {
                            function x(a, b, f, h) {
                                var j,
                                    r,
                                    s,
                                    u,
                                    w,
                                    x = b;
                                2 !== t &&
                                ((t = 2),
                                g && clearTimeout(g),
                                    (c = void 0),
                                    (e = h || ""),
                                    (v.readyState = a > 0 ? 4 : 0),
                                    (j = (a >= 200 && 300 > a) || 304 === a),
                                f && (u = tb(k, v, f)),
                                    (u = ub(k, u, v, j)),
                                    j
                                        ? (k.ifModified && ((w = v.getResponseHeader("Last-Modified")), w && (n.lastModified[d] = w), (w = v.getResponseHeader("etag")), w && (n.etag[d] = w)),
                                            204 === a || "HEAD" === k.type ? (x = "nocontent") : 304 === a ? (x = "notmodified") : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
                                        : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
                                    (v.status = a),
                                    (v.statusText = (b || x) + ""),
                                    j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                                    v.statusCode(q),
                                    (q = void 0),
                                i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                                    p.fireWith(l, [v, x]),
                                i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
                            }
                            "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
                            var c,
                                d,
                                e,
                                f,
                                g,
                                h,
                                i,
                                j,
                                k = n.ajaxSetup({}, b),
                                l = k.context || k,
                                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                                o = n.Deferred(),
                                p = n.Callbacks("once memory"),
                                q = k.statusCode || {},
                                r = {},
                                s = {},
                                t = 0,
                                u = "canceled",
                                v = {
                                    readyState: 0,
                                    getResponseHeader: function (a) {
                                        var b;
                                        if (2 === t) {
                                            if (!f) for (f = {}; (b = gb.exec(e)); ) f[b[1].toLowerCase()] = b[2];
                                            b = f[a.toLowerCase()];
                                        }
                                        return null == b ? null : b;
                                    },
                                    getAllResponseHeaders: function () {
                                        return 2 === t ? e : null;
                                    },
                                    setRequestHeader: function (a, b) {
                                        var c = a.toLowerCase();
                                        return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
                                    },
                                    overrideMimeType: function (a) {
                                        return t || (k.mimeType = a), this;
                                    },
                                    statusCode: function (a) {
                                        var b;
                                        if (a)
                                            if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                                            else v.always(a[v.status]);
                                        return this;
                                    },
                                    abort: function (a) {
                                        var b = a || u;
                                        return c && c.abort(b), x(0, b), this;
                                    },
                                };
                            if (
                                ((o.promise(v).complete = p.add),
                                    (v.success = v.done),
                                    (v.error = v.fail),
                                    (k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//")),
                                    (k.type = b.method || b.type || k.method || k.type),
                                    (k.dataTypes = n
                                        .trim(k.dataType || "*")
                                        .toLowerCase()
                                        .match(E) || [""]),
                                null == k.crossDomain &&
                                ((h = kb.exec(k.url.toLowerCase())), (k.crossDomain = !(!h || (h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))))),
                                k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)),
                                    rb(lb, k, b, v),
                                2 === t)
                            )
                                return v;
                            (i = n.event && k.global),
                            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                                (k.type = k.type.toUpperCase()),
                                (k.hasContent = !ib.test(k.type)),
                                (d = k.url),
                            k.hasContent ||
                            (k.data && ((d = k.url += (db.test(d) ? "&" : "?") + k.data), delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
                            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
                            ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
                                v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
                            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
                            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
                            u = "abort";
                            for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
                            if ((c = rb(mb, k, b, v))) {
                                (v.readyState = 1),
                                i && m.trigger("ajaxSend", [v, k]),
                                k.async &&
                                k.timeout > 0 &&
                                (g = setTimeout(function () {
                                    v.abort("timeout");
                                }, k.timeout));
                                try {
                                    (t = 1), c.send(r, x);
                                } catch (w) {
                                    if (!(2 > t)) throw w;
                                    x(-1, w);
                                }
                            } else x(-1, "No Transport");
                            return v;
                        },
                        getJSON: function (a, b, c) {
                            return n.get(a, b, c, "json");
                        },
                        getScript: function (a, b) {
                            return n.get(a, void 0, b, "script");
                        },
                    }),
                        n.each(["get", "post"], function (a, b) {
                            n[b] = function (a, c, d, e) {
                                return n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
                            };
                        }),
                        (n._evalUrl = function (a) {
                            return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
                        }),
                        n.fn.extend({
                            wrapAll: function (a) {
                                var b;
                                return n.isFunction(a)
                                    ? this.each(function (b) {
                                        n(this).wrapAll(a.call(this, b));
                                    })
                                    : (this[0] &&
                                    ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
                                    this[0].parentNode && b.insertBefore(this[0]),
                                        b
                                            .map(function () {
                                                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                                                return a;
                                            })
                                            .append(this)),
                                        this);
                            },
                            wrapInner: function (a) {
                                return n.isFunction(a)
                                    ? this.each(function (b) {
                                        n(this).wrapInner(a.call(this, b));
                                    })
                                    : this.each(function () {
                                        var b = n(this),
                                            c = b.contents();
                                        c.length ? c.wrapAll(a) : b.append(a);
                                    });
                            },
                            wrap: function (a) {
                                var b = n.isFunction(a);
                                return this.each(function (c) {
                                    n(this).wrapAll(b ? a.call(this, c) : a);
                                });
                            },
                            unwrap: function () {
                                return this.parent()
                                    .each(function () {
                                        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
                                    })
                                    .end();
                            },
                        }),
                        (n.expr.filters.hidden = function (a) {
                            return a.offsetWidth <= 0 && a.offsetHeight <= 0;
                        }),
                        (n.expr.filters.visible = function (a) {
                            return !n.expr.filters.hidden(a);
                        });
                    var vb = /%20/g,
                        wb = /\[\]$/,
                        xb = /\r?\n/g,
                        yb = /^(?:submit|button|image|reset|file)$/i,
                        zb = /^(?:input|select|textarea|keygen)/i;
                    (n.param = function (a, b) {
                        var c,
                            d = [],
                            e = function (a, b) {
                                (b = n.isFunction(b) ? b() : null == b ? "" : b), (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
                            };
                        if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || (a.jquery && !n.isPlainObject(a))))
                            n.each(a, function () {
                                e(this.name, this.value);
                            });
                        else for (c in a) Ab(c, a[c], b, e);
                        return d.join("&").replace(vb, "+");
                    }),
                        n.fn.extend({
                            serialize: function () {
                                return n.param(this.serializeArray());
                            },
                            serializeArray: function () {
                                return this.map(function () {
                                    var a = n.prop(this, "elements");
                                    return a ? n.makeArray(a) : this;
                                })
                                    .filter(function () {
                                        var a = this.type;
                                        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
                                    })
                                    .map(function (a, b) {
                                        var c = n(this).val();
                                        return null == c
                                            ? null
                                            : n.isArray(c)
                                                ? n.map(c, function (a) {
                                                    return { name: b.name, value: a.replace(xb, "\r\n") };
                                                })
                                                : { name: b.name, value: c.replace(xb, "\r\n") };
                                    })
                                    .get();
                            },
                        }),
                        (n.ajaxSettings.xhr = function () {
                            try {
                                return new XMLHttpRequest();
                            } catch (a) {}
                        });
                    var Bb = 0,
                        Cb = {},
                        Db = { 0: 200, 1223: 204 },
                        Eb = n.ajaxSettings.xhr();
                    a.attachEvent &&
                    a.attachEvent("onunload", function () {
                        for (var a in Cb) Cb[a]();
                    }),
                        (k.cors = !!Eb && "withCredentials" in Eb),
                        (k.ajax = Eb = !!Eb),
                        n.ajaxTransport(function (a) {
                            var b;
                            return k.cors || (Eb && !a.crossDomain)
                                ? {
                                    send: function (c, d) {
                                        var e,
                                            f = a.xhr(),
                                            g = ++Bb;
                                        if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                                        for (e in c) f.setRequestHeader(e, c[e]);
                                        (b = function (a) {
                                            return function () {
                                                b &&
                                                (delete Cb[g],
                                                    (b = f.onload = f.onerror = null),
                                                    "abort" === a
                                                        ? f.abort()
                                                        : "error" === a
                                                            ? d(f.status, f.statusText)
                                                            : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
                                            };
                                        }),
                                            (f.onload = b()),
                                            (f.onerror = b("error")),
                                            (b = Cb[g] = b("abort"));
                                        try {
                                            f.send((a.hasContent && a.data) || null);
                                        } catch (h) {
                                            if (b) throw h;
                                        }
                                    },
                                    abort: function () {
                                        b && b();
                                    },
                                }
                                : void 0;
                        }),
                        n.ajaxSetup({
                            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                            contents: { script: /(?:java|ecma)script/ },
                            converters: {
                                "text script": function (a) {
                                    return n.globalEval(a), a;
                                },
                            },
                        }),
                        n.ajaxPrefilter("script", function (a) {
                            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
                        }),
                        n.ajaxTransport("script", function (a) {
                            if (a.crossDomain) {
                                var b, c;
                                return {
                                    send: function (d, e) {
                                        (b = n("<script>")
                                            .prop({ async: !0, charset: a.scriptCharset, src: a.url })
                                            .on(
                                                "load error",
                                                (c = function (a) {
                                                    b.remove(), (c = null), a && e("error" === a.type ? 404 : 200, a.type);
                                                })
                                            )),
                                            l.head.appendChild(b[0]);
                                    },
                                    abort: function () {
                                        c && c();
                                    },
                                };
                            }
                        });
                    var Fb = [],
                        Gb = /(=)\?(?=&|$)|\?\?/;
                    n.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var a = Fb.pop() || n.expando + "_" + cb++;
                            return (this[a] = !0), a;
                        },
                    }),
                        n.ajaxPrefilter("json jsonp", function (b, c, d) {
                            var e,
                                f,
                                g,
                                h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
                            return h || "jsonp" === b.dataTypes[0]
                                ? ((e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                                    h ? (b[h] = b[h].replace(Gb, "$1" + e)) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                                    (b.converters["script json"] = function () {
                                        return g || n.error(e + " was not called"), g[0];
                                    }),
                                    (b.dataTypes[0] = "json"),
                                    (f = a[e]),
                                    (a[e] = function () {
                                        g = arguments;
                                    }),
                                    d.always(function () {
                                        (a[e] = f), b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)), g && n.isFunction(f) && f(g[0]), (g = f = void 0);
                                    }),
                                    "script")
                                : void 0;
                        }),
                        (n.parseHTML = function (a, b, c) {
                            if (!a || "string" != typeof a) return null;
                            "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
                            var d = v.exec(a),
                                e = !c && [];
                            return d ? [b.createElement(d[1])] : ((d = n.buildFragment([a], b, e)), e && e.length && n(e).remove(), n.merge([], d.childNodes));
                        });
                    var Hb = n.fn.load;
                    (n.fn.load = function (a, b, c) {
                        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
                        var d,
                            e,
                            f,
                            g = this,
                            h = a.indexOf(" ");
                        return (
                            h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
                                n.isFunction(b) ? ((c = b), (b = void 0)) : b && "object" == typeof b && (e = "POST"),
                            g.length > 0 &&
                            n
                                .ajax({ url: a, type: e, dataType: "html", data: b })
                                .done(function (a) {
                                    (f = arguments), g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
                                })
                                .complete(
                                    c &&
                                    function (a, b) {
                                        g.each(c, f || [a.responseText, b, a]);
                                    }
                                ),
                                this
                        );
                    }),
                        n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                            n.fn[b] = function (a) {
                                return this.on(b, a);
                            };
                        }),
                        (n.expr.filters.animated = function (a) {
                            return n.grep(n.timers, function (b) {
                                return a === b.elem;
                            }).length;
                        });
                    var Ib = a.document.documentElement;
                    (n.offset = {
                        setOffset: function (a, b, c) {
                            var d,
                                e,
                                f,
                                g,
                                h,
                                i,
                                j,
                                k = n.css(a, "position"),
                                l = n(a),
                                m = {};
                            "static" === k && (a.style.position = "relative"),
                                (h = l.offset()),
                                (f = n.css(a, "top")),
                                (i = n.css(a, "left")),
                                (j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
                                j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                            n.isFunction(b) && (b = b.call(a, c, h)),
                            null != b.top && (m.top = b.top - h.top + g),
                            null != b.left && (m.left = b.left - h.left + e),
                                "using" in b ? b.using.call(a, m) : l.css(m);
                        },
                    }),
                        n.fn.extend({
                            offset: function (a) {
                                if (arguments.length)
                                    return void 0 === a
                                        ? this
                                        : this.each(function (b) {
                                            n.offset.setOffset(this, a, b);
                                        });
                                var b,
                                    c,
                                    d = this[0],
                                    e = { top: 0, left: 0 },
                                    f = d && d.ownerDocument;
                                if (f)
                                    return (
                                        (b = f.documentElement),
                                            n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), (c = Jb(f)), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e
                                    );
                            },
                            position: function () {
                                if (this[0]) {
                                    var a,
                                        b,
                                        c = this[0],
                                        d = { top: 0, left: 0 };
                                    return (
                                        "fixed" === n.css(c, "position")
                                            ? (b = c.getBoundingClientRect())
                                            : ((a = this.offsetParent()), (b = this.offset()), n.nodeName(a[0], "html") || (d = a.offset()), (d.top += n.css(a[0], "borderTopWidth", !0)), (d.left += n.css(a[0], "borderLeftWidth", !0))),
                                            { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) }
                                    );
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var a = this.offsetParent || Ib; a && !n.nodeName(a, "html") && "static" === n.css(a, "position"); ) a = a.offsetParent;
                                    return a || Ib;
                                });
                            },
                        }),
                        n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
                            var d = "pageYOffset" === c;
                            n.fn[b] = function (e) {
                                return J(
                                    this,
                                    function (b, e, f) {
                                        var g = Jb(b);
                                        return void 0 === f ? (g ? g[c] : b[e]) : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : (b[e] = f));
                                    },
                                    b,
                                    e,
                                    arguments.length,
                                    null
                                );
                            };
                        }),
                        n.each(["top", "left"], function (a, b) {
                            n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
                                return c ? ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
                            });
                        }),
                        n.each({ Height: "height", Width: "width" }, function (a, b) {
                            n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
                                n.fn[d] = function (d, e) {
                                    var f = arguments.length && (c || "boolean" != typeof d),
                                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                                    return J(
                                        this,
                                        function (b, c, d) {
                                            var e;
                                            return n.isWindow(b)
                                                ? b.document.documentElement["client" + a]
                                                : 9 === b.nodeType
                                                    ? ((e = b.documentElement), Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]))
                                                    : void 0 === d
                                                        ? n.css(b, c, g)
                                                        : n.style(b, c, d, g);
                                        },
                                        b,
                                        f ? d : void 0,
                                        f,
                                        null
                                    );
                                };
                            });
                        }),
                        (n.fn.size = function () {
                            return this.length;
                        }),
                        (n.fn.andSelf = n.fn.addBack),
                    "function" == typeof define &&
                    define.amd &&
                    define("jquery", [], function () {
                        return n;
                    });
                    var Kb = a.jQuery,
                        Lb = a.$;
                    return (
                        (n.noConflict = function (b) {
                            return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
                        }),
                        typeof b === U && (a.jQuery = a.$ = n),
                            n
                    );
                });
            },
            {},
        ],
    },
    {},
    [9]
);
