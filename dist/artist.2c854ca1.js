!function(a) {
    function b() {
        g.hasClass(j) ? h.toggleClass(k) : h.toggleClass(l), n && g.one("transitionend", function() {
            n.trigger("focus");
        });
    }
    function c() {
        g.hasClass(j) ? h.removeClass(k) : h.removeClass(l);
    }
    function d() {
        g.hasClass(j) ? (h.addClass(k), g.animate({
            left: "0px"
        }, o), x.animate({
            left: p
        }, o), i.animate({
            left: p
        }, o)) : (h.addClass(l), g.animate({
            right: "0px"
        }, o), x.animate({
            right: p
        }, o), i.animate({
            right: p
        }, o)), n && n.trigger("focus");
    }
    function e() {
        g.hasClass(j) ? (h.removeClass(k), g.animate({
            left: "-" + p
        }, o), x.animate({
            left: "0px"
        }, o), i.animate({
            left: "0px"
        }, o)) : (h.removeClass(l), g.animate({
            right: "-" + p
        }, o), x.animate({
            right: "0px"
        }, o), i.animate({
            right: "0px"
        }, o));
    }
    function f() {
        a(q).addClass(s), a(q).on("click", function(b) {
            var c = a(this);
            c.hasClass(s) ? (c.siblings(q).addClass(s).removeClass(r), c.removeClass(s).addClass(r)) : c.addClass(s).removeClass(r), b.stopPropagation();
        });
    }
    var g = a(".pushy"), h = a("body"), i = a(".push"), j = "pushy-left", k = "pushy-open-left", l = "pushy-open-right", m = a(".site-overlay"), n = a(g.data("focus")), o = 200, p = g.width() + "px", q = ".pushy-submenu", r = "pushy-submenu-open", s = "pushy-submenu-closed";
    if ("undefined" != typeof g.data("menu-btn-selector")) var t = g.data("menu-btn-selector");
    else var t = ".menu-btn";
    var u = a(t + ", .pushy-link"), v = a(t), w = "#container";
    "undefined" != typeof g.data("container-selector") && (w = g.data("container-selector"));
    var x = a(w);
    a(document).on("keyup", function(a) {
        27 == a.keyCode && (h.hasClass(k) || h.hasClass(l)) && (y ? c() : (e(), z = !1), v && v.trigger("focus"));
    });
    var y = function() {
        var a = document.createElement("p"), b = !1, c = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
        if (null !== document.body) {
            document.body.insertBefore(a, null);
            for(var d in c)void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]));
            return document.body.removeChild(a), void 0 !== b && b.length > 0 && "none" !== b;
        }
        return !1;
    }();
    if (y) f(), u.on("click", function() {
        b();
    }), m.on("click", function() {
        b();
    });
    else {
        h.addClass("no-csstransforms3d"), g.hasClass(j) ? g.css({
            left: "-" + p
        }) : g.css({
            right: "-" + p
        }), x.css({
            "overflow-x": "hidden"
        });
        var z = !1;
        f(), u.on("click", function() {
            z ? (e(), z = !1) : (d(), z = !0);
        }), m.on("click", function() {
            z ? (e(), z = !1) : (d(), z = !0);
        });
    }
}(jQuery);

//# sourceMappingURL=artist.2c854ca1.js.map
