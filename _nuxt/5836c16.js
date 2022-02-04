(window.webpackJsonp = window.webpackJsonp || []).push([
	[7], {
		738: function(t, e, n) {
			var content = n(751);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(234).default)("259b29cc", content, !0, {
				sourceMap: !1
			})
		},
		750: function(t, e, n) {
			"use strict";
			n(738)
		},
		751: function(t, e, n) {
			var c = n(233)(!1);
			c.push([t.i, "#demo{text-align:center;font-size:60px;margin-top:0}", ""]), t.exports = c
		},
		770: function(t, e, n) {
			"use strict";
			n.r(e);
			n(104);
			var c = new Date("2022/01/6 10:00 GMT").getTime(),
				l = (setInterval((function() {
					var t = (new Date).getTime(),
						e = c - t,
						n = Math.floor(e / 864e5),
						l = Math.floor(e % 864e5 / 36e5),
						o = Math.floor(e % 36e5 / 6e4),
						r = Math.floor(e % 6e4 / 1e3);
					document.getElementById("demo").innerHTML = n + "d " + l + "h " + o + "m " + r + "s "
				}), 1e3), {
					head: {
						title: "avaxbayc | Marketplace"
					},
					mounted: function() {},
					created: function() {},
					methods: {}
				}),
				o = (n(750), n(40)),
				component = Object(o.a)(l, (function() {
					var t = this,
						e = t.$createElement;
					t._self._c;
					return t._m(0)
				}), [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [n("div", {
						staticClass: "section m-0 p-0",
						attrs: {
							id: "main"
						}
					}, [n("div", {
						staticClass: "particles-container is-fixed particles-bg op-20",
						attrs: {
							id: "particles-bg2"
						}
					})]), t._v(" "), n("div", {
						staticClass: "main"
					}, [n("section", {
						staticClass: "section"
					}, [n("div", {
						staticClass: "container"
					}, [n("div", {
						staticClass: "row align-items-center justify-content-center"
					}, [n("div", {
						staticClass: "col-md-9 col-lg-7"
					}, [n("div", {
						staticClass: "page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0"
					}, [n("h2", {
						staticClass: "text-white mb-0"
					}, [t._v("Marketplace will be launched at")]), t._v(" "), n("p", {
						attrs: {
							id: "demo"
						}
					})])])])])])])])
				}], !1, null, null, null);
			e.default = component.exports
		}
	}
]);