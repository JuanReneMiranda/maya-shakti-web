!function(s){function a(){o.hasClass(l)?r.toggleClass(u):r.toggleClass(m),d&&o.one("transitionend",function(){d.trigger("focus")})}function e(){o.hasClass(l)?(r.addClass(u),o.animate({left:"0px"},f),k.animate({left:h},f),i.animate({left:h},f)):(r.addClass(m),o.animate({right:"0px"},f),k.animate({right:h},f),i.animate({right:h},f)),d&&d.trigger("focus")}function n(){o.hasClass(l)?(r.removeClass(u),o.animate({left:"-"+h},f),k.animate({left:"0px"},f),i.animate({left:"0px"},f)):(r.removeClass(m),o.animate({right:"-"+h},f),k.animate({right:"0px"},f),i.animate({right:"0px"},f))}function t(){s(p).addClass(v),s(p).on("click",function(a){var e=s(this);e.hasClass(v)?(e.siblings(p).addClass(v).removeClass(C),e.removeClass(v).addClass(C)):e.addClass(v).removeClass(C),a.stopPropagation()})}var o=s(".pushy"),r=s("body"),i=s(".push"),l="pushy-left",u="pushy-open-left",m="pushy-open-right",c=s(".site-overlay"),d=s(o.data("focus")),f=200,h=o.width()+"px",p=".pushy-submenu",C="pushy-submenu-open",v="pushy-submenu-closed";if(void 0!==o.data("menu-btn-selector"))var g=o.data("menu-btn-selector");else var g=".menu-btn";var y=s(g+", .pushy-link"),b=s(g),x="#container";void 0!==o.data("container-selector")&&(x=o.data("container-selector"));var k=s(x);s(document).on("keyup",function(s){27==s.keyCode&&(r.hasClass(u)||r.hasClass(m))&&(w?o.hasClass(l)?r.removeClass(u):r.removeClass(m):(n(),T=!1),b&&b.trigger("focus"))});var w=function(){var s=document.createElement("p"),a=!1,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};if(null!==document.body){for(var n in document.body.insertBefore(s,null),e)void 0!==s.style[n]&&(s.style[n]="translate3d(1px,1px,1px)",a=window.getComputedStyle(s).getPropertyValue(e[n]));return document.body.removeChild(s),void 0!==a&&a.length>0&&"none"!==a}return!1}();if(w)t(),y.on("click",function(){a()}),c.on("click",function(){a()});else{r.addClass("no-csstransforms3d"),o.hasClass(l)?o.css({left:"-"+h}):o.css({right:"-"+h}),k.css({"overflow-x":"hidden"});var T=!1;t(),y.on("click",function(){T?(n(),T=!1):(e(),T=!0)}),c.on("click",function(){T?(n(),T=!1):(e(),T=!0)})}}(jQuery);//# sourceMappingURL=index.4a544ecd.js.map

//# sourceMappingURL=index.4a544ecd.js.map
