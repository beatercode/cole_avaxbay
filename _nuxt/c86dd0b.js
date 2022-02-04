(window.webpackJsonp = window.webpackJsonp || []).push([
	[9], {
		740: function(t, e, n) {
			var content = n(755);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(234).default)("549a7158", content, !0, {
				sourceMap: !1
			})
		},
		741: function(t, e, n) {
			var content = n(757);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(234).default)("466a9d92", content, !0, {
				sourceMap: !1
			})
		},
		754: function(t, e, n) {
			"use strict";
			n(740)
		},
		755: function(t, e, n) {
			var r = n(233)(!1);
			r.push([t.i, ".msg-alert{margin-top:20px;width:auto}", ""]), t.exports = r
		},
		756: function(t, e, n) {
			"use strict";
			n(741)
		},
		757: function(t, e, n) {
			var r = n(233)(!1);
			r.push([t.i, ".alert.alert-info.msg-alert{width:380px}.token-action.token-action-s2.flex-wrap.flex-sm-nowrap{display:block}", ""]), t.exports = r
		},
		772: function(t, e, n) {
			"use strict";
			n.r(e);
			var r = n(15),
				o = (n(55), n(104), {
					name: "mint",
					head: {
						title: "avaxbayc | Mint"
					},
					data: function() {
						return {
							walletStatus: !1,
							apeLeft: 0,
							transactionHash: "",
							loadApe: !1,
							box_msg: "",
							box_msg_danger: "",
							btn_loading: !1,
							connectingWallet: !1,
							showAlert: "",
							alertMessage: "",
							fape_count: 10,
							expectedBlockTime: 1e3
						}
					},
					created: function() {
						var t = this;
						/*this.$walletManager.mintStart*/ !0 && setInterval((function() {
							t.loadApeLeft()
						}), 1e4), setInterval((function() {
							t.walletStatus = t.$walletManager.walletStatus, t.$walletManager.listenMMAccount()
						}), 1e3)
					},
					mounted: function() {
						/*this.$walletManager.mintStart*/ !0 && this.loadApeLeft(), NioApp.components.docReady[21](jQuery), NioApp.components.winLoad[0](jQuery), NioApp.components.docReady[3](jQuery), NioApp.components.docReady[14](jQuery), NioApp.components.docReady[13](jQuery), NioApp.winLoad()
					},
					methods: {
						tryToConnect: function() {
							this.connectingWallet = !0, this.$walletManager.tryToConnect(), this.walletStatus && (this.connectingWallet = !1)
						},
						mintApe: function() {
							var t = this;
							return Object(r.a)(regeneratorRuntime.mark((function e() {
								var n, o;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!1 !== t.btn_loading) {
												e.next = 24;
												break
											}
											return t.transactionHash = null, t.showAlert = "", t.btn_loading = !0, t.box_msg = "", t.box_msg_danger = "", e.prev = 6, e.next = 9, t.$walletManager.getSelectedWallet();
										case 9:
											n = e.sent, o = 1.5, t.$walletManager.startTestMarket && (o = 1.5), console.log("mint fape ", t.fape_count), console.log("mint price ", o), window.contract.methods.mint(t.fape_count).send({
												from: n,
												value: window.web3Global.utils.toWei(t.fape_count * o + "")
											}, function() {
												var e = Object(r.a)(regeneratorRuntime.mark((function e(n, r) {
													var o;
													return regeneratorRuntime.wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																if (n ? (t.showAlert = "error", t.alertMessage = "Error: please check your wallet") : (t.showAlert = "success", t.alertMessage = "Your transaction has been broadcast to network please wait...!"), !r) {
																	e.next = 11;
																	break
																}
																o = null;
															case 3:
																if (null != o) {
																	e.next = 9;
																	break
																}
																return e.next = 6, web3.eth.getTransactionReceipt(r);
															case 6:
																o = e.sent, e.next = 3;
																break;
															case 9:
																o && o.status && (t.showAlert = "done", t.transactionHash = o.transactionHash), o && !o.status && (t.showAlert = "error", t.alertMessage = "Error: please check transaction", t.transactionHash = o.transactionHash);
															case 11:
																t.btn_loading = !1;
															case 12:
															case "end":
																return e.stop()
														}
													}), e)
												})));
												return function(t, n) {
													return e.apply(this, arguments)
												}
											}()), e.next = 24;
											break;
										case 17:
											e.prev = 17, e.t0 = e.catch(6), t.walletStatus = t.$walletManager.walletStatus, t.showAlert = "error", t.alertMessage = "Error on minting", t.btn_loading = !1, console.log(e.t0.message);
										case 24:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[6, 17]
								])
							})))()
						},
						tmp_mintApe: function() {
							return Object(r.a)(regeneratorRuntime.mark((function t() {
								return regeneratorRuntime.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
										case "end":
											return t.stop()
									}
								}), t)
							})))()
						},
						loadApeLeft: function() {
							var t = this;
							return Object(r.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											setTimeout(Object(r.a)(regeneratorRuntime.mark((function e() {
												var n;
												return regeneratorRuntime.wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, window.contractGlobal.methods.getNotMintedAmount().call();
														case 2:
															n = e.sent, t.apeLeft = parseInt(n);
														case 4:
														case "end":
															return e.stop()
													}
												}), e)
											}))), 1e3);
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						}
					}
				}),
				l = o,
				c = (n(754), n(756), n(40)),
				component = Object(c.a)(l, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [n("main", {
						staticClass: "nk-pages tc-light"
					}, [n("section", {
						staticClass: "section bg-theme tc-light ov-h "
					}, [n("div", {
						staticClass: "header-banner "
					}, [n("div", {
						staticClass: "nk-banner"
					}, [n("div", {
						staticClass: "banner banner-fs banner-single banner-s1 banner-s1-overlay"
					}, [n("div", {
						staticClass: "banner-wrap"
					}, [n("div", {
						staticClass: "container"
					}, [n("div", {
						staticClass: "row align-items-center justify-content-center justify-content-lg-between gutter-vr-60px"
					}, [n("div", {
						staticClass: "col-lg-6 col-xl-6 text-center text-lg-left"
					}, [n("div", {
						staticClass: "banner-caption tc-light"
					}, [t._m(0), t._v(" "), n("div", {
						staticClass: "cpn-btns"
					}, [n("nuxt-link", {
						staticClass: "btn btn-md btn-primary btn-outline",
						attrs: {
							to: "/gallery"
						}
					}, [t._v("\n                                All Apes Gallery\n                              ")])], 1), t._v(" "), t._m(1)])]), t._v(" "), n("div", {
						staticClass: "col-lg-6 col-xl-5 col-md-8 col-sm-9"
					}, [n("div", {
						staticClass: "token-status token-status-s3 round bg-theme tc-light  "
					}, [/*this.$walletManager.mintStart*/ !0 ? t._e() : n("h4", {
						staticClass: "title-md title-thin"
					}, [t._v("Mint will be started at")]), t._v(" "), /*this.$walletManager.mintStart*/ !0 ? t._e() : n("div", {
						staticClass: "countdown-s2 countdown",
						attrs: {
							"data-date": "2022/01/6 10:00:00 GMT"
						}
					}), t._v(" "), n("div", {
						staticClass: "token-info token-info-s1"
					}, [t._m(2), t._v(" "), n("div", {
						staticClass: "token-info-item token-info-item-s1"
					}, [t._m(3), t._v(" "), /*this.$walletManager.mintStart*/ !0 ? n("h4", [t._v(t._s(t.apeLeft.toLocaleString()) + " Remaining")]) : n("h4", [t._v("10,000 Remaining")])])]), t._v(" "), n("div", {
						staticClass: "token-action token-action-s2 flex-wrap flex-sm-nowrap"
					}, [t.btn_loading ? n("div", {
						staticClass: "msg-alert alert alert-info small"
					}, [t._v("\n                            Processing (" + t._s(t.fape_count) + ") NFT , please wait ...\n                          ")]) : !1 === t.walletStatus ? n("div", [n("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [n("p", {
						staticClass: "text-black-50"
					}, [t._v("Checking Your Wallet")]), t._v(" "), n("button", {
						staticClass: "btn btn-primary rounded",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.tryToConnect()
							}
						}
					}, [t._v("Connect to\n                                wallet\n                              ")])])]) : null === t.walletStatus ? n("div", [n("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [n("p", {
						staticClass: "text-black-50"
					}, [t._v("Please Connect Your Metamask")]), t._v(" "), n("button", {
						staticClass: "btn btn-primary rounded",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.tryToConnect()
							}
						}
					}, [t._v("Connect to\n                                wallet\n                              ")])])]) : !0 === t.walletStatus && /*this.$walletManager.mintStart*/ !0 ? n("div", {
						staticClass: "token-min-s2"
					}, [n("button", {
						staticClass: "btn btn-md btn-secondary",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.mintApe()
							}
						}
					}, [t._v("Mint\n                            ")]), t._v(" "), n("span", [t._v("Select Your Number:")]), t._v(" "), n("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.fape_count,
							expression: "fape_count"
						}],
						staticClass: "form-control",
						on: {
							change: function(e) {
								var n = Array.prototype.filter.call(e.target.options, (function(t) {
									return t.selected
								})).map((function(t) {
									return "_value" in t ? t._value : t.value
								}));
								t.fape_count = e.target.multiple ? n : n[0]
							}
						}
					}, [n("option", {
						attrs: {
							value: "1"
						}
					}, [t._v("1")]), t._v(" "), n("option", {
						attrs: {
							value: "2"
						}
					}, [t._v("2")]), t._v(" "), n("option", {
						attrs: {
							value: "5"
						}
					}, [t._v("5")]), t._v(" "), n("option", {
						attrs: {
							value: "10"
						}
					}, [t._v("10")]), t._v(" "), n("option", {
						attrs: {
							value: "20"
						}
					}, [t._v("20")])])]) : t._e(), t._v(" "), "success" === t.showAlert ? n("div", {
						staticClass: "alert alert-success msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                            " + t._s(t.alertMessage) + "\n                          ")]) : t._e(), t._v(" "), "done" === t.showAlert ? n("div", {
						staticClass: "alert alert-success msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                            Transaction Approved :\n                            "), n("a", {
						staticClass: "text-primary",
						attrs: {
							target: "_blank",
							href: "https://snowtrace.io/address/" + t.transactionHash
						}
					}, [t._v("\n                              " + t._s(this.transactionHash.substr(0, 5)) + "\n                              ...\n                              " + t._s(this.transactionHash.substr(this.transactionHash.length - 4, this.transactionHash.length - 1)) + "\n                            ")]), t._v(" "), n("br"), t._v(" "), n("NuxtLink", {
						staticClass: "mr-5 text-primary-alt",
						attrs: {
							to: "/myWallet"
						}
					}, [t._v("\n                              My Wallet\n                            ")])], 1) : t._e(), t._v(" "), "error" === t.showAlert ? n("div", {
						staticClass: "alert alert-danger msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                            " + t._s(t.alertMessage) + "\n\n                            "), t.transactionHash ? n("div", [t._v("\n                              transactionHash:\n                              "), n("a", {
						staticClass: "text-primary",
						attrs: {
							target: "_blank",
							href: "https://https://snowtrace.io/tx/" + t.transactionHash
						}
					}, [t._v("\n                                " + t._s(this.transactionHash.substr(0, 5)) + "\n                                ...\n                                " + t._s(this.transactionHash.substr(this.transactionHash.length - 4, this.transactionHash.length - 1)) + "\n                              ")])]) : t._e(), t._v(" "), 1 != t.walletStatus ? n("button", {
						staticClass: "btn btn-primary rounded",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.tryToConnect()
							}
						}
					}, [t._v("\n                              Try Connect to wallet\n                              "), 1 == t.connectingWallet ? n("i", {
						staticClass: "spinner-border spinner-border-sm text-white"
					}) : t._e()]) : t._e()]) : t._e()])])])])])])])]), t._v(" "), n("div", {
						staticClass: "nk-ovm shape-q"
					})])])])])
				}), [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "cpn-head mt-0"
					}, [n("h1", {
						staticClass: "title title-thin title-xl-2  "
					}, [t._v("Mint Bored Ape Yacht Club On Avalanche")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "cpn-social"
					}, [n("h4", {
						staticClass: "title-xs  "
					}, [t._v("JOIN OUR COMMUNITY")]), t._v(" "), n("ul", {
						staticClass: "social"
					}, [n("li", {
						staticClass: " "
					}, [n("a", {
						attrs: {
							href: "https://t.me/avaxbayc",
							target: "_blank"
						}
					}, [n("em", {
						staticClass: "social-icon fas fa-paper-plane"
					})])]), t._v(" "), n("li", {
						staticClass: " "
					}, [n("a", {
						attrs: {
							href: "https://twitter.com/avaxbayc",
							target: "_blank"
						}
					}, [n("em", {
						staticClass: "social-icon fab fa-twitter"
					})])])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "token-info-item token-info-item-s1"
					}, [n("div", {
						staticClass: "token-info-item-list"
					}, [n("span", [t._v("Token Price:")]), t._v(" "), n("h4", [t._v("1 NFT = 1.5 AVAX")])]), t._v(" "), n("div", {
						staticClass: "token-info-item-list"
					}, [n("span", [t._v("We Accept:")]), t._v(" "), n("h4", [n("img", {
						attrs: {
							src: "./assets/images/polywhite.png",
							width: "25px"
						}
					}), t._v(" "), n("em", {
						staticClass: "fa fa-dollar"
					}), t._v(" AVAX")])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("span", [t._v("Tokens Availablen "), n("br", {
						staticClass: "d-none d-md-block"
					}), t._v("Total: 10,000")])
				}], !1, null, null, null);
			e.default = component.exports
		}
	}
]);