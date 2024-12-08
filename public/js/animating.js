var PageTransitions=function(a, e) {
	"use strict";

	var t=a(".animated-sections"),
	o= !1,
	n= !0,
	i= !1,
	s=(a(window), {
		WebkitAnimation:"webkitAnimationEnd", OAnimation:"oAnimationEnd", msAnimation:"MSAnimationEnd", animation:"animationend"
	}

	[Modernizr.prefixed("animation")]),
c=Modernizr.cssanimations;

function m(e) {
	if( !e)return !1;
	var t=a(e);
	t=t[0],
	(t=a(t))&&(a("ul.main-menu a").removeClass("active"), t.addClass("active"))
}

function d() {
	var e=a("#page-ajax-loaded");

	function t() {
		e.removeClass("animated-section-moveToRight closed"),
		e.show(),
		a("body").addClass("ajax-page-visible")
	}

	var o=a(".ajax-page-load").each((function() {
				if(o=a(this).attr("href"), location.hash==location.hash.split("/")[0]+"/" +o.substr(0, o.length-5)) {
					var n=a(this).attr("href"); return t(), e.load(n),  !1
				}
			}));

	a(document).on("click", ".main-menu, #ajax-page-close-button", (function(t) {
				t.preventDefault(), a("#page-ajax-loaded").addClass("animated-section-moveToRight closed"), a("body").removeClass("ajax-page-visible"), setTimeout((function() {
							a("#page-ajax-loaded.closed").html(""), e.hide()
						}), 500), location.hash=location.hash.split("/")[0]

			})).on("click", ".ajax-page-load", (function() {
				var e=location.hash.split("/")[0]+"/" +a(this).attr("href").substr(0, a(this).attr("href").length-5); return location.hash=e, t(),  !1
			}))
}

function r(e, m) {
	if( !e.attr("data-animation")) {
		var d=parseInt(Math.floor(3*Math.random())+1);
		e.data("animation", d)
	}

	var r,
	p,
	h,
	u=e.data("animation").toString();

	if(-1 !=u.indexOf("-")) {
		var f=u.split("-");
		h=parseInt(f[Math.floor(Math.random()*f.length)])
	}

	else h=parseInt(u);
	if(h>67)return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"),
	 !1;

	switch(h) {

		case 1: r="animated-section-moveFromLeft animated-section-ontop", p="animated-section-scaleDown";
		break;

		case 2: r="animated-section-moveFromBottom animated-section-ontop", p="animated-section-scaleDown";
		break;

		//case 3: r="animated-section-rotateSlideIn", p="animated-section-rotateSlideOut"
	}

	var v,
	b=t,
	k=b.data("current");
	m=e.attr("href").split("#")[1];
	v=k;
	var F=a('section[data-id="' +k+'"]');

	if(v !=(k=m)) {
		o= !0,
		b.data("current", k);
		var g=a("section[data-id=" +k+"]").addClass("section-active");

		g.scrollTop(0),
		F.addClass(p).on(s, (function() {
					F.off(s), n= !0, i&&(l(b, g, F), n= !1)

				})),
		g.addClass(r).on(s, (function() {
					g.off(s), i= !0, n&&(l(b, g, F), i= !1, o= !1)
				}))
	}

	else o= !1;
	c||l(F, g)
}

function l(a, e, t) {
	 !function(a, e) {
		e.attr("class", e.data("originalClassList")),
		a.attr("class", a.data("originalClassList")+" section-active")
	}

	(e, t)
}

return {
	init:function(e) {
		a(".animated-section").each((function() {
		var e=a(this); e.data("originalClassList", e.attr("class"))
        })),
		t.each((function() {
					""===location.hash&&a("section[data-id=" +i+"]").addClass("section-active")

		})),
		a(".nav-anim").on("click", (function(e) {
					if(e.preventDefault(), o)return !1; var t=a(this); m(t), r(t), location.hash=a(this).attr("href")

		})),
		window.onhashchange=function(e) {
			if(location.hash) {
				if(o)return !1;
				var t=a(n+' a[href*="' +location.hash.split("/")[0]+'"]');
				m(t),
				r(t),
				d()
			}
		}

		;
		var n=e.menu,
		i=""===location.hash?location.hash=a("section.animated-section").first().attr("data-id"):location.hash;
		location.hash=i;
		var s=a(n+' a[href*="' +location.hash.split("/")[0]+'"]');

		m(s),
		r(s),
		a("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'),
		d(),
		a(".lmpixels-arrow-right").click((function() {
					var e=a(".main-menu a.active").parent("li"); e.next("li").children("a").click(), e.is(":last-child")&&a(".main-menu li:first-child").children("a").click()

				})),
		a(".lmpixels-arrow-left").click((function() {
					var e=a(".main-menu a.active").parent("li"); e.prev("li").children("a").click(), e.is(":first-child")&&a(".main-menu li:last-child").children("a").click()
				}))
	}
}
}

(jQuery);