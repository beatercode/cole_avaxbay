(window.webpackJsonp = window.webpackJsonp || []).push([
	[4], {
		744: function(t, e, r) {
			var content = r(762);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, r(234).default)("cb154d66", content, !0, {
				sourceMap: !1
			})
		},
		745: function(t, e, r) {
			var content = r(764);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, r(234).default)("08701428", content, !0, {
				sourceMap: !1
			})
		},
		761: function(t, e, r) {
			"use strict";
			r(744)
		},
		762: function(t, e, r) {
			var n = r(233)(!1);
			n.push([t.i, ".msg-alert{margin-top:20px;width:auto}", ""]), t.exports = n
		},
		763: function(t, e, r) {
			"use strict";
			r(745)
		},
		764: function(t, e, r) {
			var n = r(233)(!1);
			n.push([t.i, ".img-detail{width:65%}.img-wrap-detail{text-align:center}.card.bg-azalea-grad-alt{margin-top:32px}.my-swal{z-index:9999}#ape{margin-bottom:70px}", ""]), t.exports = n
		},
		775: function(t, e, r) {
			"use strict";
			r.r(e);
			var n = r(15),
				o = (r(55), r(104), r(760)),
				c = r.n(o),
				l = r(743),
				d = r.n(l),
				f = {
					name: "detail",
					head: function() {
						return {
							title: "avaxbayc | #" + this.$route.params.id,
							meta: [{
								charset: "utf-8"
							}, {
								name: "viewport",
								content: "width=device-width, initial-scale=1, shrink-to-fit=no"
							}, {
								hid: "description",
								name: "description",
								content: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’"
							}, {
								hid: "image",
								name: "image",
								content: this.ipfs
							}, {
								hid: "twitter_card",
								name: "twitter:card",
								content: "summary"
							}, {
								hid: "twitter_title",
								name: "twitter:title",
								content: "avaxbayc | #" + this.$route.params.id
							}, {
								hid: "twitter_description",
								name: "twitter:description",
								content: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id
							}, {
								hid: "twitter_image_src",
								name: "twitter:image:src",
								content: this.ipfs
							}, {
								hid: "twitter_image_src",
								name: "twitter:image:src",
								content: this.ipfs
							}, {
								hid: "og_title",
								name: "og_title",
								content: "avaxbayc | Bored Ape" + this.$route.params.id
							}, {
								hid: "og_description",
								name: "og:description",
								content: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id
							}, {
								hid: "og_image",
								name: "og:image",
								content: this.ipfs
							}, {
								hid: "og_image",
								name: "og:image:alt",
								content: "Bored Ape" + this.$route.params.id
							}, {
								hid: "og_image_width",
								name: "og:image:width",
								content: 1024
							}, {
								hid: "og_image_height",
								name: "og:image:height",
								content: 512
							}, {
								hid: "og_url",
								name: "og:url",
								content: "https://avaxbayc.com/detail/" + this.$route.params.id
							}, {
								hid: "og_site_name",
								name: "og:site_name",
								content: "avaxbayc"
							}, {
								hid: "og_type",
								name: "og:type",
								content: "website"
							}, {
								hid: "author",
								name: "author",
								content: "Avalanche Bayc"
							}]
						}
					},
					components: {
						Swal: c.a,
						VueCompareImage: d.a
					},
					data: function() {
						return {
							offerPrice: 0,
							rank: "",
							transactionHash: "",
							showAlert: "",
							alertMessage: "",
							ipfs: "",
							is_transfering: !1,
							walletStatus: !1,
							btn_loading: !1,
							connectingWallet: !1,
							currentPunk: "",
							is_load_this_punk: !1,
							is_it_for_bidder: !1,
							punk_loading: !0,
							punks_attributes: {},
							token_owner: !1,
							is_for_sale: !1,
							isCanceling: !1,
							is_it_mine: !1,
							bid: {},
							offer: {},
							isBuying: !1,
							is_bidding: !1,
							isOffering: !1,
							showBidModal: !1,
							canShowOffer: !1,
							canShowBid: !1
						}
					},
					created: function() {
						var t = this;
						this.btn_loading = !0, setInterval((function() {
							t.walletStatus = t.$walletManager.walletStatus, t.btn_loading = !1
						}), 1e3)
					},
					mounted: function() {
						NioApp.components.docReady[21](jQuery), NioApp.components.winLoad[0](jQuery), NioApp.components.docReady[20](jQuery), NioApp.components.docReady[3](jQuery), NioApp.components.docReady[14](jQuery), NioApp.components.docReady[21](jQuery), this.initData(), this.updateApe()
					},
					methods: {
						initData: function() {
							var t = this;
							if (this.$route.params.id >= 0 && this.$route.params.id < 1e4) {
								this.rank = JSON.parse(JSON.stringify(this.$apeRanks))[0][this.$route.params.id];
								var e = JSON.parse(JSON.stringify(this.$apeList[this.$route.params.id]));
								this.ipfs = e.image, this.currentPunk = JSON.parse(JSON.stringify(this.$apeList[this.$route.params.id])), setTimeout((function() {
									t.walletStatus = t.$walletManager.walletStatus, t.is_load_this_punk || (t.is_load_this_punk = !0, t.loadData())
								}), 100)
							} else window.location.href = "/"
						},
						tryToConnect: function() {
							this.connectingWallet = !0, this.$walletManager.tryToConnect(), this.walletStatus && (this.connectingWallet = !1)
						},
						updateApe: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.$axios.$get("https://avaxbayc.com/backend/update/?token_id=" + t.$route.params.id);
										case 2:
											r = e.sent, console.log("apes updated ... ", r);
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						loadData: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var r, n;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t.canShowOffer = !1, t.offer = {}, e.next = 4, t.$walletManager.getSelectedWallet();
										case 4:
											return r = e.sent, console.log("-------selectedWallet--------", r), e.next = 8, window.contractGlobal.methods.ownerOf(t.$route.params.id).call();
										case 8:
											return t.token_owner = e.sent, console.log("-------token_owner--------", t.token_owner), t.is_it_mine = !1, r.toLowerCase() === t.token_owner.toLowerCase() && (t.is_it_mine = !0), e.prev = 12, e.next = 15, window.contractGlobal.methods.getMarketLotInfo(t.$route.params.id).call();
										case 15:
											n = e.sent, t.offer = n[0] ? n : null, t.offerPrice = window.web3.utils.fromWei(t.offer.price), e.next = 23;
											break;
										case 20:
											e.prev = 20, e.t0 = e.catch(12), console.log(e.t0);
										case 23:
											console.log("------------------------", t.offer), t.offer.owner.toLowerCase() === t.token_owner.toLowerCase() && (t.canShowOffer = !0);
										case 25:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[12, 20]
								])
							})))()
						},
						showBid: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.$walletManager.getSelectedWallet();
										case 2:
											r = e.sent, c.a.fire({
												input: "text",
												title: "Make a bid",
												text: "Enter Bid Price",
												type: "warning",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function(e) {
													t.is_bidding || (t.is_bidding = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function n() {
														return regeneratorRuntime.wrap((function(n) {
															for (;;) switch (n.prev = n.next) {
																case 0:
																	if (n.prev = 0, !(t.bid && e >= t.bid.value && e >= 1) && t.bid) {
																		n.next = 6;
																		break
																	}
																	return n.next = 4, window.contract.methods.enterBidForPunk(t.$route.params.id).send({
																		from: r,
																		value: e
																	}, (function(e, r) {
																		r ? (c.a.fire({
																			title: "Bid successfully created",
																			text: "Refresh page after 'Enter Bid For Punk' Activity",
																			icon: "success",
																			confirmButtonText: "Cool"
																		}), t.is_bidding = !1) : c.a.fire({
																			title: "Error!",
																			text: "Bid Rejected",
																			icon: "error",
																			confirmButtonText: "Cool"
																		}), t.is_bidding = !1
																	}));
																case 4:
																	n.next = 7;
																	break;
																case 6:
																	e < 100 ? (c.a.fire({
																		title: "Error!",
																		text: "Bid value must be more than 100",
																		icon: "error",
																		confirmButtonText: "Cool"
																	}), t.is_bidding = !1) : (c.a.fire({
																		title: "Bid value must be more than Active bid",
																		text: "".concat(window.web3.utils.fromWei(e)),
																		icon: "error",
																		confirmButtonText: "Cool"
																	}), t.is_bidding = !1);
																case 7:
																	n.next = 12;
																	break;
																case 9:
																	n.prev = 9, n.t0 = n.catch(0), console.log(n.t0);
																case 12:
																	t.is_bidding = !1;
																case 13:
																case "end":
																	return n.stop()
															}
														}), n, null, [
															[0, 9]
														])
													}))), 500), t.is_bidding = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLoading()
												}
											});
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						getPunkOffer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, window.contract.methods.punksOfferedForSale(t.$route.params.id).call();
										case 3:
											r = e.sent, t.offer = r[0] ? r : null, e.next = 10;
											break;
										case 7:
											e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
										case 10:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 7]
								])
							})))()
						},
						showNewOffer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											t.showAlert = "", t.alertMessage = "", t.transactionHash = "", c.a.fire({
												customClass: {
													container: "my-swal"
												},
												input: "text",
												title: "List For Sale",
												text: "Enter Avalanche Price",
												type: "warning",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function(e) {
													t.isOffering || (t.isOffering = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
														return regeneratorRuntime.wrap((function(r) {
															for (;;) switch (r.prev = r.next) {
																case 0:
																	try {
																		setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
																			var o, l, d, f;
																			return regeneratorRuntime.wrap((function(r) {
																				for (;;) switch (r.prev = r.next) {
																					case 0:
																						return r.prev = 0, r.next = 3, t.$walletManager.getSelectedWallet();
																					case 3:
																						return o = r.sent, r.next = 6, t._checkApprovalForAll();
																					case 6:
																						if (l = r.sent, d = !1, l) {
																							r.next = 14;
																							break
																						}
																						return r.next = 11, t._firstApproveThen();
																					case 11:
																						d = r.sent, r.next = 15;
																						break;
																					case 14:
																						d = !0;
																					case 15:
																						d && (f = window.web3.utils.toWei(e), window.contract.methods.putOnMarket(t.$route.params.id, f).send({
																							from: o
																						}, function() {
																							var e = Object(n.a)(regeneratorRuntime.mark((function e(r, n) {
																								var o;
																								return regeneratorRuntime.wrap((function(e) {
																									for (;;) switch (e.prev = e.next) {
																										case 0:
																											if (r ? (t.showAlert = "error", t.alertMessage = "Error: please check your wallet") : (t.showAlert = "success", t.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
																												e.next = 11;
																												break
																											}
																											o = null;
																										case 3:
																											if (null != o) {
																												e.next = 9;
																												break
																											}
																											return e.next = 6, web3.eth.getTransactionReceipt(n);
																										case 6:
																											o = e.sent, e.next = 3;
																											break;
																										case 9:
																											o && o.status && (t.showAlert = "done", t.transactionHash = o.transactionHash, t.is_load_this_punk = !1, t.initData(), t.updateApe()), o && !o.status && (t.showAlert = "error", t.alertMessage = "Error: please check transaction", t.transactionHash = o.transactionHash);
																										case 11:
																											t.isOffering = !1;
																										case 12:
																										case "end":
																											return e.stop()
																									}
																								}), e)
																							})));
																							return function(t, r) {
																								return e.apply(this, arguments)
																							}
																						}())), r.next = 23;
																						break;
																					case 18:
																						r.prev = 18, r.t0 = r.catch(0), console.log(r.t0), c.a.fire({
																							customClass: {
																								container: "my-swal"
																							},
																							title: "Error!",
																							text: "Error Please Check console",
																							icon: "error",
																							confirmButtonText: "Okay"
																						}), t.isOffering = !1;
																					case 23:
																						return r.prev = 23, r.finish(23);
																					case 25:
																					case "end":
																						return r.stop()
																				}
																			}), r, null, [
																				[0, 18, 23, 25]
																			])
																		}))), 500)
																	} catch (e) {
																		console.log(e), t.isOffering = !1
																	}
																	case 1:
																	case "end":
																		return r.stop()
															}
														}), r)
													}))), 500), t.isOffering = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLoading()
												}
											});
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						showOffer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											c.a.fire({
												customClass: {
													container: "my-swal"
												},
												input: "text",
												title: "Make an offer",
												text: "Enter Offer Price",
												type: "warning",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function(e) {
													t.is_bidding || (t.is_bidding = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
														var n, o;
														return regeneratorRuntime.wrap((function(r) {
															for (;;) switch (r.prev = r.next) {
																case 0:
																	if (r.prev = 0, !(e > 2)) {
																		r.next = 15;
																		break
																	}
																	return r.next = 4, t.$walletManager.getSelectedWallet();
																case 4:
																	return n = r.sent, r.next = 7, t._checkApprovalForAll();
																case 7:
																	if (o = r.sent, !1, !(!!o || t._firstApproveThen())) {
																		r.next = 13;
																		break
																	}
																	return r.next = 13, window.contract.methods.offerPunkForSale(t.$route.params.id, e).send({
																		from: n
																	}, (function(e, r) {
																		r ? (c.a.fire({
																			customClass: {
																				container: "my-swal"
																			},
																			title: "New Offer successfully created!",
																			text: "Refresh page after 'Offer Punk For Sale' Activity",
																			icon: "success",
																			confirmButtonText: "Cool"
																		}), t.is_bidding = !1) : (c.a.fire({
																			customClass: {
																				container: "my-swal"
																			},
																			title: "Error!",
																			text: "Bid rejected",
																			icon: "error",
																			confirmButtonText: "Cool"
																		}), t.is_bidding = !1), t.isOffering = !1
																	}));
																case 13:
																	r.next = 16;
																	break;
																case 15:
																	e < 2 ? (c.a.fire({
																		customClass: {
																			container: "my-swal"
																		},
																		title: "Error!",
																		text: "Bid value must be more than 2",
																		icon: "error",
																		confirmButtonText: "Cool"
																	}), t.is_bidding = !1) : (c.a.fire({
																		customClass: {
																			container: "my-swal"
																		},
																		title: "Bid value must be more than Active bid",
																		text: "".concat(window.web3.utils.fromWei(e)),
																		icon: "error",
																		confirmButtonText: "Cool"
																	}), t.is_bidding = !1);
																case 16:
																	r.next = 21;
																	break;
																case 18:
																	r.prev = 18, r.t0 = r.catch(0), console.log(r.t0);
																case 21:
																	t.is_bidding = !1;
																case 22:
																case "end":
																	return r.stop()
															}
														}), r, null, [
															[0, 18]
														])
													}))), 500), t.is_bidding = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLoading()
												}
											});
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						_checkApprovalForAll: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var r, a;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.$walletManager.getSelectedWallet();
										case 2:
											return r = e.sent, e.prev = 3, e.next = 6, window.contract.methods.isApprovedForAll(r, t.$walletManager.myAddress).call();
										case 6:
											return a = e.sent, e.abrupt("return", a);
										case 10:
											e.prev = 10, e.t0 = e.catch(3), console.log(e.t0);
										case 13:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[3, 10]
								])
							})))()
						},
						_firstApproveThen: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.$walletManager.getSelectedWallet();
										case 2:
											return r = e.sent, e.next = 5, window.contract.methods.setApprovalForAll(t.$walletManager.myAddress, !0).send({
												from: r
											}, (function(e, r) {
												if (r) return !0;
												c.a.fire({
													customClass: {
														container: "my-swal"
													},
													title: "Error!",
													text: "Offer Rejected",
													icon: "error",
													confirmButtonText: "Cool"
												}), t.isOffering = !1
											}));
										case 5:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						CancelOffer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											c.a.fire({
												customClass: {
													container: "my-swal"
												},
												title: "Remove From Sale List",
												text: "Are you Sure?",
												type: "danger",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function() {
													t.isCanceling || (t.isCanceling = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
														var r;
														return regeneratorRuntime.wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	return e.prev = 0, e.next = 3, t.$walletManager.getSelectedWallet();
																case 3:
																	r = e.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
																		return regeneratorRuntime.wrap((function(e) {
																			for (;;) switch (e.prev = e.next) {
																				case 0:
																					return e.prev = 0, e.next = 3, window.contract.methods.withdrawFromMarket(t.$route.params.id).send({
																						from: r
																					}, (function(e, r) {
																						r ? c.a.fire({
																							title: "Ape no longer for Sale",
																							text: "Refresh page",
																							icon: "success",
																							confirmButtonText: "Cool"
																						}) : c.a.fire({
																							customClass: {
																								container: "my-swal"
																							},
																							title: "Error!",
																							text: "Offer Cancellation failed",
																							icon: "error",
																							confirmButtonText: "Cool"
																						}), t.isCanceling = !1
																					}));
																				case 3:
																					e.next = 8;
																					break;
																				case 5:
																					e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
																				case 8:
																				case "end":
																					return e.stop()
																			}
																		}), e, null, [
																			[0, 5]
																		])
																	}))), 500), e.next = 10;
																	break;
																case 7:
																	e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
																case 10:
																case "end":
																	return e.stop()
															}
														}), e, null, [
															[0, 7]
														])
													}))), 500), t.isCanceling = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLozading()
												}
											});
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						AcceptOffer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.$walletManager.getSelectedWallet();
										case 2:
											r = e.sent, t.isBuying = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
												return regeneratorRuntime.wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															if (e.prev = 0, !t.offer) {
																e.next = 6;
																break
															}
															return e.next = 4, window.contract.methods.buyFromMarket(t.$route.params.id, r).send({
																from: r,
																value: t.offer[3]
															}, (function(e, r) {
																r ? c.a.fire({
																	customClass: {
																		container: "my-swal"
																	},
																	title: "Ape Was Bought",
																	text: "Ape was bought for ".concat(window.web3.utils.fromWei(t.offer[3])),
																	icon: "success",
																	confirmButtonText: "Cool"
																}) : c.a.fire({
																	customClass: {
																		container: "my-swal"
																	},
																	title: "Error!",
																	text: "request failed",
																	icon: "error",
																	confirmButtonText: "Cool"
																}), t.isBuying = !1
															}));
														case 4:
															e.next = 7;
															break;
														case 6:
															c.a.fire({
																customClass: {
																	container: "my-swal"
																},
																title: "Error!",
																text: "Ape has not any Offer",
																icon: "error",
																confirmButtonText: "Cool"
															});
														case 7:
															e.next = 12;
															break;
														case 9:
															e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);
														case 12:
														case "end":
															return e.stop()
													}
												}), e, null, [
													[0, 9]
												])
											}))), 500);
										case 5:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						CancelMyBid: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											c.a.fire({
												customClass: {
													container: "my-swal"
												},
												title: "Cancel my bid",
												text: "Are you Sure?",
												type: "danger",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function() {
													t.isCanceling || (t.isCanceling = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
														var r;
														return regeneratorRuntime.wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	return e.prev = 0, e.next = 3, t.$walletManager.getSelectedWallet();
																case 3:
																	r = e.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
																		return regeneratorRuntime.wrap((function(e) {
																			for (;;) switch (e.prev = e.next) {
																				case 0:
																					return e.prev = 0, e.next = 3, window.contract.methods.withdrawBidForPunk(t.$route.params.id).send({
																						from: r
																					}, (function(e, r) {
																						r ? c.a.fire({
																							title: "Withdraw Bid Done",
																							text: "Refresh page after 'Ape No Longer For Sale' Activity",
																							icon: "success",
																							confirmButtonText: "Cool"
																						}) : c.a.fire({
																							title: "Error!",
																							text: "Bid Cancellation failed",
																							icon: "error",
																							confirmButtonText: "Cool"
																						}), t.isCanceling = !1
																					}));
																				case 3:
																					e.next = 8;
																					break;
																				case 5:
																					e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
																				case 8:
																				case "end":
																					return e.stop()
																			}
																		}), e, null, [
																			[0, 5]
																		])
																	}))), 500), e.next = 10;
																	break;
																case 7:
																	e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
																case 10:
																case "end":
																	return e.stop()
															}
														}), e, null, [
															[0, 7]
														])
													}))), 500), t.isCanceling = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLozading()
												}
											});
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						AcceptBid: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.$walletManager.getSelectedWallet();
										case 2:
											e.sent, c.a.fire({
												title: "Accept Bid",
												text: "Accept Current Bid",
												type: "warning",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function() {
													t.is_bidding || (t.is_bidding = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
														var r, n;
														return regeneratorRuntime.wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	return e.prev = 0, e.next = 3, t.$walletManager.getSelectedWallet();
																case 3:
																	return r = e.sent, e.next = 6, t._checkApprovalForAll();
																case 6:
																	if (n = e.sent, !t.bid) {
																		e.next = 13;
																		break
																	}
																	if (!1, !(!!n || t._firstApproveThen())) {
																		e.next = 13;
																		break
																	}
																	return e.next = 13, window.contract.methods.acceptBidForPunk(t.$route.params.id, 0).send({
																		from: r
																	}, (function(e, r) {
																		r ? (c.a.fire({
																			title: "Ape Was Sold!",
																			text: "Refresh page after 'Offer Punk For Sale' Activity",
																			icon: "success",
																			confirmButtonText: "Cool"
																		}), t.is_bidding = !1) : (c.a.fire({
																			title: "Error!",
																			text: "rejected",
																			icon: "error",
																			confirmButtonText: "Cool"
																		}), t.is_bidding = !1), t.isOffering = !1
																	}));
																case 13:
																	e.next = 18;
																	break;
																case 15:
																	e.prev = 15, e.t0 = e.catch(0), console.log(e.t0);
																case 18:
																	t.is_bidding = !1;
																case 19:
																case "end":
																	return e.stop()
															}
														}), e, null, [
															[0, 15]
														])
													}))), 500), t.is_bidding = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLoading()
												}
											});
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						ShowTransfer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											t.showAlert = "", t.alertMessage = "", t.transactionHash = "", c.a.fire({
												customClass: {
													container: "my-swal"
												},
												input: "text",
												title: "Transfer Your avaxbayc",
												text: "Enter Wallet Address",
												type: "warning",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function(e) {
													t.is_transfering || (t.is_transfering = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
														var o;
														return regeneratorRuntime.wrap((function(r) {
															for (;;) switch (r.prev = r.next) {
																case 0:
																	if (r.prev = 0, !window.web3.utils.isAddress(e)) {
																		r.next = 9;
																		break
																	}
																	return r.next = 5, t.$walletManager.getSelectedWallet();
																case 5:
																	o = r.sent, e.toLowerCase() == o.toLowerCase() ? c.a.fire({
																		customClass: {
																			container: "my-swal"
																		},
																		title: "Transfer Failed!",
																		text: "You cant send to your current wallet",
																		icon: "error",
																		confirmButtonText: "Okay"
																	}) : setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
																		return regeneratorRuntime.wrap((function(r) {
																			for (;;) switch (r.prev = r.next) {
																				case 0:
																					try {
																						window.contract.methods.safeTransferFrom(o, e, t.$route.params.id).send({
																							from: o
																						}, function() {
																							var e = Object(n.a)(regeneratorRuntime.mark((function e(r, n) {
																								var o;
																								return regeneratorRuntime.wrap((function(e) {
																									for (;;) switch (e.prev = e.next) {
																										case 0:
																											if (r ? (t.showAlert = "error", t.alertMessage = "Error: please check your wallet") : (t.showAlert = "success", t.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
																												e.next = 11;
																												break
																											}
																											o = null;
																										case 3:
																											if (null != o) {
																												e.next = 9;
																												break
																											}
																											return e.next = 6, web3.eth.getTransactionReceipt(n);
																										case 6:
																											o = e.sent, e.next = 3;
																											break;
																										case 9:
																											o && o.status && (t.showAlert = "transferDone", t.transactionHash = o.transactionHash, t.is_load_this_punk = !1, t.initData(), t.updateApe()), o && !o.status && (t.showAlert = "error", t.alertMessage = "Error: please check transaction", t.transactionHash = o.transactionHash);
																										case 11:
																											t.is_transfering = !1;
																										case 12:
																										case "end":
																											return e.stop()
																									}
																								}), e)
																							})));
																							return function(t, r) {
																								return e.apply(this, arguments)
																							}
																						}())
																					} catch (e) {
																						console.log(e), c.a.fire({
																							customClass: {
																								container: "my-swal"
																							},
																							title: "Error!",
																							text: "Wallet address is not valid",
																							icon: "error",
																							confirmButtonText: "Okay"
																						}), t.is_transfering = !1
																					}
																					case 1:
																					case "end":
																						return r.stop()
																			}
																		}), r)
																	}))), 500), r.next = 11;
																	break;
																case 9:
																	c.a.fire({
																		customClass: {
																			container: "my-swal"
																		},
																		title: "Error!",
																		text: "Wallet address is not valid",
																		icon: "error",
																		confirmButtonText: "Okay"
																	}), t.is_transfering = !1;
																case 11:
																	r.next = 17;
																	break;
																case 13:
																	r.prev = 13, r.t0 = r.catch(0), console.log(r.t0), t.is_transfering = !1;
																case 17:
																case "end":
																	return r.stop()
															}
														}), r, null, [
															[0, 13]
														])
													}))), 500), t.is_transfering = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLoading()
												}
											});
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						NewCancelOffer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											c.a.fire({
												customClass: {
													container: "my-swal"
												},
												title: "Remove From Sale List",
												text: "Are you Sure?",
												type: "danger",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function() {
													t.isCanceling || (t.isCanceling = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
														var r;
														return regeneratorRuntime.wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	return e.prev = 0, e.next = 3, t.$walletManager.getSelectedWallet();
																case 3:
																	r = e.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
																		return regeneratorRuntime.wrap((function(e) {
																			for (;;) switch (e.prev = e.next) {
																				case 0:
																					return e.prev = 0, e.next = 3, window.contract.methods.withdrawFromMarket(t.$route.params.id).send({
																						from: r
																					}, function() {
																						var e = Object(n.a)(regeneratorRuntime.mark((function e(r, n) {
																							var o;
																							return regeneratorRuntime.wrap((function(e) {
																								for (;;) switch (e.prev = e.next) {
																									case 0:
																										if (r ? (t.showAlert = "error", t.alertMessage = "Error: please check your wallet") : (t.showAlert = "success", t.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
																											e.next = 11;
																											break
																										}
																										o = null;
																									case 3:
																										if (null != o) {
																											e.next = 9;
																											break
																										}
																										return e.next = 6, web3.eth.getTransactionReceipt(n);
																									case 6:
																										o = e.sent, e.next = 3;
																										break;
																									case 9:
																										o && o.status && (t.showAlert = "done", t.transactionHash = o.transactionHash, t.is_load_this_punk = !1, t.initData(), t.updateApe()), o && !o.status && (t.showAlert = "error", t.alertMessage = "Error: please check transaction", t.transactionHash = o.transactionHash);
																									case 11:
																										t.isCanceling = !1;
																									case 12:
																									case "end":
																										return e.stop()
																								}
																							}), e)
																						})));
																						return function(t, r) {
																							return e.apply(this, arguments)
																						}
																					}());
																				case 3:
																					e.next = 8;
																					break;
																				case 5:
																					e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
																				case 8:
																				case "end":
																					return e.stop()
																			}
																		}), e, null, [
																			[0, 5]
																		])
																	}))), 500), e.next = 10;
																	break;
																case 7:
																	e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
																case 10:
																case "end":
																	return e.stop()
															}
														}), e, null, [
															[0, 7]
														])
													}))), 500), t.isCanceling = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLozading()
												}
											});
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						NewAcceptOffer: function() {
							var t = this;
							return Object(n.a)(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											c.a.fire({
												customClass: {
													container: "my-swal"
												},
												title: "Accept This Offer",
												text: "Are you Sure?",
												type: "primary",
												showCancelButton: !0,
												showLoaderOnConfirm: !0,
												preConfirm: function() {
													t.isBuying || (t.isBuying = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
														var r;
														return regeneratorRuntime.wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	return e.prev = 0, e.next = 3, t.$walletManager.getSelectedWallet();
																case 3:
																	r = e.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
																		return regeneratorRuntime.wrap((function(e) {
																			for (;;) switch (e.prev = e.next) {
																				case 0:
																					return e.prev = 0, e.next = 3, window.contract.methods.buyFromMarket(t.$route.params.id, r).send({
																						from: r,
																						value: t.offer[3]
																					}, function() {
																						var e = Object(n.a)(regeneratorRuntime.mark((function e(r, n) {
																							var o;
																							return regeneratorRuntime.wrap((function(e) {
																								for (;;) switch (e.prev = e.next) {
																									case 0:
																										if (r ? (t.showAlert = "error", t.alertMessage = "Error: please check your wallet") : (t.showAlert = "success", t.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
																											e.next = 11;
																											break
																										}
																										o = null;
																									case 3:
																										if (null != o) {
																											e.next = 9;
																											break
																										}
																										return e.next = 6, web3.eth.getTransactionReceipt(n);
																									case 6:
																										o = e.sent, e.next = 3;
																										break;
																									case 9:
																										o && o.status && (t.showAlert = "done", t.transactionHash = o.transactionHash, t.is_load_this_punk = !1, t.initData(), t.updateApe(), c.a.fire({
																											customClass: {
																												container: "my-swal"
																											},
																											title: "Ape Bought",
																											text: "Ape bought for ".concat(window.web3.utils.fromWei(t.offer[3])),
																											icon: "success",
																											confirmButtonText: "Cool"
																										})), o && !o.status && (t.showAlert = "error", t.alertMessage = "Error: please check transaction", t.transactionHash = o.transactionHash);
																									case 11:
																										t.isBuying = !1;
																									case 12:
																									case "end":
																										return e.stop()
																								}
																							}), e)
																						})));
																						return function(t, r) {
																							return e.apply(this, arguments)
																						}
																					}());
																				case 3:
																					e.next = 8;
																					break;
																				case 5:
																					e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
																				case 8:
																				case "end":
																					return e.stop()
																			}
																		}), e, null, [
																			[0, 5]
																		])
																	}))), 500), e.next = 10;
																	break;
																case 7:
																	e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
																case 10:
																case "end":
																	return e.stop()
															}
														}), e, null, [
															[0, 7]
														])
													}))), 500), t.isBuying = !0)
												},
												allowOutsideClick: function() {
													return !c.a.isLozading()
												}
											});
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						}
					}
				},
				m = f,
				h = (r(761), r(763), r(40)),
				component = Object(h.a)(m, (function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("div", [r("div", {
						staticClass: "main"
					}, [t._m(0), t._v(" "), r("section", {
						staticClass: "section bg-theme tc-light ov-h mb-100",
						attrs: {
							id: "ape"
						}
					}, [r("div", {
						staticClass: "container"
					}, [r("div", {
						staticClass: "row align-items-center justify-content-center"
					}, [r("div", {
						staticClass: "col-md-9 col-lg-7"
					}, [r("div", {
						staticClass: "page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0"
					}, [r("h1", {
						staticClass: "text-white mb-0"
					}, [t._v("AvaxBayc #" + t._s(this.$route.params.id))])])])])])]), t._v(" "), r("section", {
						staticClass: "project-details-section ptb-100",
						attrs: {
							id: "apeDetail"
						}
					}, [r("div", {
						staticClass: "container"
					}, [r("div", {
						staticClass: "row justify-content-between"
					}, [r("div", {
						staticClass: "col-md-12 col-lg-6"
					}, [r("div", {
						staticClass: "img-wrap-detail mb-md-4 mb-lg-0"
					}, [r("a", {
						staticClass: "team-show content-popup",
						attrs: {
							href: "#team-popup-1"
						}
					}), t._v(" "), r("img", {
						staticClass: "img-detail rounded shadow-sm",
						attrs: {
							src: "/assets/BaycImages/ape/" + this.$route.params.id + ".png",
							alt: "AvaxBayc #" + this.$route.params.id
						}
					}), t._v(" "), r("div", {
						staticClass: "team-popup bg-theme-dark tc-light mfp-hide",
						attrs: {
							id: "team-popup-1"
						}
					}, [r("a", {
						staticClass: "mfp-close",
						attrs: {
							title: "Close"
						}
					}, [t._v("Ã—")]), t._v(" "), r("div", {
						staticClass: "row align-items-start"
					}, [r("div", {
						staticClass: "col-md-6"
					}, [r("div", {
						staticClass: "team-photo"
					}, [r("img", {
						staticClass: "img-detail rounded shadow-sm",
						attrs: {
							src: "/assets/BaycImages/ape/" + this.$route.params.id + ".png",
							alt: "AvaxBayc #" + this.$route.params.id
						}
					})])]), t._v(" "), r("div", {
						staticClass: "col-md-6"
					}, [r("div", {
						staticClass: "team-popup-info pl-md-3"
					}, [r("h2", {
						staticClass: "mb-0 mb-2"
					}, [t._v("AvaxBayc # " + t._s(this.$route.params.id))]), t._v(" "), r("h5", {
						staticClass: "text-primary-alt"
					}, [t._v("Rarity Rank # " + t._s(t.rank))]), t._v(" "), r("ul", {
						staticClass: "team-social team-social-s2 mb-4"
					}, [r("li", [r("a", {
						attrs: {
							target: "_blank",
							href: "https://storageapi.fleek.co/5704903c-be02-4029-a317-eaaa27d00a12-bucket/ABayc/" + this.$route.params.id + ".png"
						}
					}, [r("em", {
						staticClass: "fa fa-download bring-to-front fa-2x"
					})])]), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "telegram",
							url: "https://`avaxbayc`.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-telegram fa-2x"
					})])], 1), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "twitter",
							url: "https://avaxbayc.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-twitter fa-2x"
					})])], 1), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "facebook",
							url: "https://avaxbayc.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-facebook fa-2x"
					})])], 1), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "whatsapp",
							url: "https://avaxbayc.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-whatsapp fa-2x"
					})])], 1)])]), t._v(" "), t._l(t.currentPunk.traits, (function(e, n, o) {
						return r("div", {
							staticClass: "p-2 m-2",
							staticStyle: {
								display: "inline-block"
							}
						}, [r("h3", {
							staticClass: "text-white-50"
						}, [t._v(t._s(n))]), t._v(" "), r("span", {
							staticClass: "text-secondary"
						}, [t._v(t._s(e))])])
					}))], 2)])])]), t._v(" "), r("ul", {
						staticClass: "team-social team-social-s2 mt-5 text-center "
					}, [r("li", [r("a", {
						attrs: {
							target: "_blank",
							href: "https://storageapi.fleek.co/5704903c-be02-4029-a317-eaaa27d00a12-bucket/ABayc/" + this.$route.params.id + ".png"
						}
					}, [r("em", {
						staticClass: "fa fa-download bring-to-front fa-2x"
					})])]), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "telegram",
							url: "https://avaxbayc.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-telegram fa-2x"
					})])], 1), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "twitter",
							url: "https://avaxbayc.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-twitter fa-2x"
					})])], 1), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "facebook",
							url: "https://avaxbayc.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-facebook fa-2x"
					})])], 1), t._v(" "), r("li", [r("ShareNetwork", {
						staticClass: "bring-to-front",
						attrs: {
							network: "whatsapp",
							url: "https://avaxbayc.com" + this.$route.path,
							title: "AvaxBayc #" + this.$route.params.id,
							description: "Bored Ape Yacht Club comes to Avalanche. Check out my Bored Ape from #avaxbayc â€” Ape in with me and join the minting ðŸ’ | Bored ape #" + this.$route.params.id,
							hashtags: "avaxbayc,Avalanche,BAYC,APES,avaxbayc" + this.$route.params.id
						}
					}, [r("i", {
						staticClass: "fab fa-whatsapp fa-2x"
					})])], 1)])]), t._v(" "), r("div", {
						staticClass: "col-md-12 col-lg-6"
					}, [r("div", {
						staticClass: "project-details-sidebar"
					}, [r("ul", {
						staticClass: "project-info-list"
					}, [r("li", {
						staticClass: "d-flex align-items-center mb-3 p-4 rounded shadow-sm "
					}, [r("div", {
						staticClass: "d-block"
					}, [r("h2", {
						staticClass: "mb-0 text-white-50 mb-2 text-primary"
					}, [t._v("AvaxBayc # " + t._s(this.$route.params.id))]), t._v(" "), r("p", {
						staticClass: "text-primary-alt"
					}, [t._v("Rarity Rank # " + t._s(t.rank))]), t._v(" "), "0x0000000000000000000000000000000000000000" != this.token_owner ? r("p", [t._v("Owned by : "), this.is_it_mine ? r("strong", {
						staticClass: "text-success"
					}, [t._v("(it`s\n                        mine)")]) : t._e(), t._v(" "), r("a", {
						staticClass: "bring-to-front",
						attrs: {
							target: "_blank",
							href: "https://snowtrace.io/address/" + this.token_owner
						}
					}, [t._v("\n                          " + t._s(this.token_owner.substr(0, 5)) + "\n                          ...\n                          " + t._s(this.token_owner.substr(this.token_owner.length - 4, this.token_owner.length - 1)) + "\n                        ")])]) : r("p", {}, [r("strong", {
						staticClass: "text-black"
					}, [t._v("Not Minted Yet")])])])]), t._v(" "), t._l(t.currentPunk.traits, (function(e, n, o) {
						return r("div", {
							staticClass: "p-2 m-2",
							staticStyle: {
								display: "inline-block"
							}
						}, [r("h3", {
							staticClass: "text-primary"
						}, [t._v(t._s(n))]), t._v(" "), r("span", {
							staticClass: "text-primary-alt"
						}, [t._v(t._s(e))])])
					})), t._v(" "), r("hr"), t._v(" "), t.btn_loading ? r("div", [r("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                      Processing ...\n                    ")])]) : !1 === t.walletStatus ? r("div", [r("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                      Try to connect your wallet\n                    ")])]) : null === t.walletStatus ? r("div", [r("div", {
						staticClass: "alert alert-info msg-alert",
						attrs: {
							role: "alert"
						}
					}, [r("p", [t._v("Please Connect Your Metamask")]), t._v(" "), r("button", {
						staticClass: "btn btn-primary rounded",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.tryToConnect()
							}
						}
					}, [t._v("Connect to wallet\n                        "), 1 == t.connectingWallet ? r("i", {
						staticClass: "spinner-border spinner-border-sm text-white"
					}) : t._e()])])]) : t._e(), t._v(" "), this.$walletManager.startTestMarket && t.canShowOffer && t.offer && t.offer.isForSale ? r("li", {
						staticClass: "d-flex align-items-center mb-3 p-4 rounded shadow-sm border"
					}, [r("div", {
						staticClass: "d-block"
					}, [r("h5", {
						staticClass: "mb-0 text-dark"
					}, [t._v("Market Summery")]), t._v(" "), r("p", [r("i", {
						staticClass: "text-dark"
					}, [t._v("Offered by owner for "), r("strong", {
						staticClass: "text-primary-alt",
						staticStyle: {
							"font-size": "x-large"
						}
					}, [t._v(t._s(t.offerPrice))]), t._v(" "), r("span", {
						staticClass: "text-primary"
					}, [t._v("Avalanche")])])]), t._v(" "), t.is_it_mine && !this.isCanceling ? r("button", {
						staticClass: "btn btn-danger btn-sm rounded",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.NewCancelOffer()
							}
						}
					}, [t._v("\n                        Remove From Sale List\n                      ")]) : t._e(), t._v(" "), t.is_it_mine || this.isBuying ? t._e() : r("button", {
						staticClass: "btn btn-primary btn-sm rounded",
						attrs: {
							type: "button"
						},
						on: {
							click: function(e) {
								return t.NewAcceptOffer()
							}
						}
					}, [t._v("\n                        Accept offer\n                      ")]), t._v(" "), this.isCanceling ? r("label", [t._v("Processing ...")]) : t._e(), t._v(" "), this.isBuying ? r("label", [t._v("Processing ...")]) : t._e()])]) : t._e()], 2)])])]), t._v(" "), this.is_it_mine ? r("div", {
						staticClass: "card "
					}, [r("div", {
						staticClass: "row align-items-center"
					}, ["transferDone" !== t.showAlert ? r("div", {
						staticClass: "col-lg-3 col-sm-4 download-option"
					}, [r("em", {
						staticClass: "icon fa fa-exchange-alt"
					}), t._v(" "), this.is_transfering ? t._e() : r("button", {
						staticClass: "btn btn-outline btn-dark btn-md",
						on: {
							click: function(e) {
								return t.ShowTransfer()
							}
						}
					}, [t._v("\n                  Transfer\n                ")]), t._v(" "), this.is_transfering ? r("label", [t._v("Transferring process ...")]) : t._e()]) : t._e(), t._v(" "), this.$walletManager.startTestMarket && !0 === t.walletStatus ? r("div", {
						staticClass: "col-lg-3 col-sm-4 download-option"
					}, [!t.offer && t.is_it_mine || !t.canShowOffer && t.offer && t.is_it_mine ? r("em", {
						staticClass: "icon fa fa-receipt"
					}) : t._e(), t._v(" "), this.isOffering ? t._e() : r("div", [!t.offer && t.is_it_mine || !t.canShowOffer && t.offer && t.is_it_mine ? r("button", {
						staticClass: "btn btn-outline btn-dark btn-md",
						attrs: {
							type: "button"
						},
						on: {
							click: t.showNewOffer
						}
					}, [t._v("\n                    List For Sale\n                  ")]) : t._e()]), t._v(" "), this.isOffering ? r("label", [t._v("Processing ...")]) : t._e()]) : t._e()]), t._v(" "), r("div", {
						staticClass: "col-12 download-option"
					}, ["success" === t.showAlert ? r("div", {
						staticClass: "alert alert-success msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                " + t._s(t.alertMessage) + "\n              ")]) : t._e(), t._v(" "), "done" === t.showAlert || "transferDone" === t.showAlert ? r("div", {
						staticClass: "alert alert-success msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                Transaction Approved :\n                "), r("a", {
						staticClass: "bring-to-front",
						attrs: {
							target: "_blank",
							href: "https://https://snowtrace.io/tx/" + t.transactionHash
						}
					}, [t._v("\n                  " + t._s(this.transactionHash.substr(0, 5)) + "\n                  ...\n                  " + t._s(this.transactionHash.substr(this.transactionHash.length - 4, this.transactionHash.length - 1)) + "\n                ")]), t._v(" "), r("br"), t._v(" "), r("NuxtLink", {
						staticClass: "mr-5 bring-to-front text-dark",
						attrs: {
							to: "/myWallet"
						}
					}, [t._v("\n                  Open My Wallet\n                ")])], 1) : t._e(), t._v(" "), "error" === t.showAlert ? r("div", {
						staticClass: "alert alert-danger msg-alert",
						attrs: {
							role: "alert"
						}
					}, [t._v("\n                " + t._s(t.alertMessage) + "\n\n                "), t.transactionHash ? r("div", [t._v("\n                  transactionHash:\n                  "), r("a", {
						staticClass: "bring-to-front",
						attrs: {
							target: "_blank",
							href: "https://https://snowtrace.io/tx/" + t.transactionHash
						}
					}, [t._v("\n                    " + t._s(this.transactionHash.substr(0, 5)) + "\n                    ...\n                    " + t._s(this.transactionHash.substr(this.transactionHash.length - 4, this.transactionHash.length - 1)) + "\n                  ")])]) : t._e()]) : t._e()])]) : t._e()])])])])
				}), [function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("div", {
						staticClass: "modal"
					}, [r("p", [t._v("\n          Enter Bid Price\n        ")]), t._v(" "), r("br"), t._v(" "), r("div", {
						staticClass: "InputBox -full"
					}, [r("input", {
						staticClass: "bring-to-front",
						attrs: {
							type: "text",
							placeholder: "more than 100",
							id: "NEWBID-BID_PRICE"
						}
					}), t._v(" "), r("i", {
						staticClass: "ri-input-cursor-move"
					})])])
				}], !1, null, null, null);
			e.default = component.exports
		}
	}
]);