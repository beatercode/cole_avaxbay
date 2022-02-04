(window.webpackJsonp = window.webpackJsonp || []).push([
	[10], {
		773: function(t, e, n) {
			"use strict";
			n.r(e);
			var l = n(15),
				r = (n(55), n(104), {
					data: function() {
						return {
							punks: [],
							allPunks: [],
							last_add: !1,
							walletStatus: !1,
							isLoadMyApes: !1,
							btn_loading: !1,
							connectingWallet: !1
						}
					},
					created: function() {
						var t = this;
						setInterval((function() {
							t.walletStatus = t.$walletManager.walletStatus, t.walletStatus && !t.isLoadMyApes && (t.isLoadMyApes = !0, t.loadMyApes())
						}), 1e3)
					},
					methods: {
						tryToConnect: function() {
							this.connectingWallet = !0, this.$walletManager.tryToConnect(), this.walletStatus && (this.connectingWallet = !1)
						},
						loadMyApes: function() {
							var t = this;
							return Object(l.a)(regeneratorRuntime.mark((function e() {
								var n, l, r, i;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t.allPunks = [], t.punks = [], t.btn_loading) {
												e.next = 20;
												break
											}
											return e.prev = 3, t.btn_loading = !0, e.next = 7, t.$walletManager.getSelectedWallet();
										case 7:
											return n = e.sent, e.next = 10, t.$axios.$get("http://fantomapes.com/backend/my?wallet=" + n);
										case 10:
											for (l = e.sent, r = JSON.parse(l.msg), i = 0; i < r.length; i++) t.allPunks.push(t.$apeList[r[i].token_id]);
											t.btn_loading = !1, e.next = 19;
											break;
										case 16:
											e.prev = 16, e.t0 = e.catch(3), t.btn_loading = !1;
										case 19:
											t.filterAttr();
										case 20:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[3, 16]
								])
							})))()
						},
						filterAttr: function() {
							this.punks = [];
							for (var i = 0; i < 15 && i < this.allPunks.length; i++) this.punks.push(this.allPunks[i])
						}
					}
				}),
				o = n(40),
				component = Object(o.a)(r, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "main"
					}, [t._m(0), t._v(" "), n("div", {
						staticClass: "module ptb-100"
					}, [n("div", {
						staticClass: "container"
					}, [n("div", {
						staticClass: "row"
					}, [n("div", {
						staticClass: "col-lg-3 col-md-3 sidebar"
					}), t._v(" "), n("div", {
						staticClass: "col-lg-9 col-md-9"
					}, [n("div", {
						staticClass: "row"
					}, [t.btn_loading ? n("div", [n("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                  Processing ...\n                ")])]) : !0 === t.walletStatus ? n("div", [0 == t.punks.length ? n("div", [n("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                    Your apes gallery is empty\n                    "), n("NuxtLink", {
						staticClass: "page-scroll",
						attrs: {
							to: "/mint"
						}
					}, [t._v("Mint")]), t._v("\n                    some apes\n\n                  ")], 1)]) : t._e(), t._v(" "), t._l(t.punks, (function(e, l) {
						return n("div", {
							staticClass: "col-md-4 col-lg-4 pb-5"
						}, [n("div", {
							staticClass: "single-partner-wrap card-bottom-line white-bg shadow-sm rounded text-center"
						}, [n("a", {
							attrs: {
								href: "#"
							}
						}, [n("img", {
							staticClass: "img-fluid",
							attrs: {
								src: "https://gateway.pinata.cloud/ipfs/QmfKuxooQh9Vyg87LP9YfuFfUYwW3JKzemjMjZcQoyhrRV/" + e.tokenId + ".png",
								alt: "partner logo"
							}
						}), t._v(" "), n("div", {
							staticClass: "partner-heading mb-2"
						}, [n("h5", {
							staticClass: "mb-0 ape-gallery"
						}, [t._v("# " + t._s(e.tokenId))])])])])])
					}))], 2) : !1 === t.walletStatus ? n("div", [n("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                  Try to connect your wallet\n                ")])]) : null === t.walletStatus ? n("div", [n("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [n("p", [t._v("Please Connect Your Metamask")]), t._v(" "), n("button", {
						staticClass: "btn btn-primary rounded",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.tryToConnect()
							}
						}
					}, [t._v("Connect to wallet\n                    "), 1 == t.connectingWallet ? n("i", {
						staticClass: "spinner-border spinner-border-sm text-white"
					}) : t._e()])])]) : t._e()])])])])])])
				}), [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("section", {
						staticClass: "hero-section ptb-100 gradient-overlay",
						staticStyle: {
							background: "url('/assets/img/landing/bayc-mutant-hero.webp')no-repeat center center / cover"
						}
					}, [n("div", {
						staticClass: "container"
					}, [n("div", {
						staticClass: "row align-items-center justify-content-center"
					}, [n("div", {
						staticClass: "col-md-9 col-lg-7"
					}, [n("div", {
						staticClass: "page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0"
					}, [n("h1", {
						staticClass: "text-white mb-0"
					}, [t._v("AvaxBayc Gallery")])])])])])])
				}], !1, null, null, null);
			e.default = component.exports
		}
	}
]);