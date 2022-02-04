(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        742: function(t, e, n) {
            var content = n(759);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(234).default)("36ad1ede", content, !0, {
                sourceMap: !1
            })
        },
        758: function(t, e, n) {
            "use strict";
            n(742)
        },
        759: function(t, e, n) {
            var l = n(233)(!1);
            l.push([t.i, ".section.bg-theme.tc-light.ov-h.ptb-100{margin-bottom:70px}.text-white.mb-0{padding-top:50px}.alert.alert-info.msg-alert{width:100%!important;margin-bottom:20px}", ""]), t.exports = l
        },
        774: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = n(15),
                r = (n(55), n(104), {
                    head: {
                        title: "avaxbayc | My Mints"
                    },
                    data: function() {
                        return {
                            allRanks: [],
                            punks: [],
                            allPunks: [],
                            balanceOf: 0,
                            balance: 0,
                            walletAddress: 0,
                            last_add: !1,
                            walletStatus: !1,
                            isLoadMyApes: !1,
                            btn_loading: !1,
                            connectingWallet: !1
                        }
                    },
                    created: function() {
                        var t = this;
                        window.onscroll = function() {
                            document.documentElement.scrollTop + window.innerHeight + 400 > document.documentElement.offsetHeight && t.addPunks()
                        }, this.allRanks = JSON.parse(JSON.stringify(this.$apeRanks))[0], setInterval((function() {
                            t.walletStatus = t.$walletManager.walletStatus, t.walletStatus && !t.isLoadMyApes && (t.isLoadMyApes = !0, t.loadMyApes())
                        }), 1e3)
                    },
                    methods: {
                        addPunks: function() {
                            var t = this;
                            this.last_add || (this.last_add = setTimeout((function() {
                                for (var e = t.punks.length, i = e; i < e + 15 && i < t.allPunks.length; i++) t.allPunks[i].rank = t.allRanks[t.allPunks[i].tokenId], t.punks.push(t.allPunks[i]);
                                clearTimeout(t.last_add), t.last_add = !1
                            }), 500))
                        },
                        tryToConnect: function() {
                            this.connectingWallet = !0, this.$walletManager.tryToConnect(), this.walletStatus && (this.connectingWallet = !1)
                        },
                        loadMyApes: function() {
                            var t = this;
                            return Object(l.a)(regeneratorRuntime.mark((function e() {
                                var n, l, r, i, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.allPunks = [], t.punks = [], t.btn_loading) {
                                                e.next = 28;
                                                break
                                            }
                                            return e.prev = 3, t.btn_loading = !0, e.next = 7, t.$walletManager.getSelectedWallet();
                                        case 7:
                                            return n = e.sent, t.walletAddress = n, e.next = 11, web3.eth.getBalance(n);
                                        case 11:
                                            return l = e.sent, t.balance = web3.utils.fromWei(l, "ether"), console.log("-----------------", t.balance), e.next = 16, window.contractGlobal.methods.getUserTokens(n).call();
                                        case 16:
                                            return r = e.sent, e.next = 19, window.contractGlobal.methods.balanceOf(n).call();
                                        case 19:
                                            for (t.balanceOf = e.sent, i = 0; i < r.length; i++) o = r[i], t.$apeList[o].rank = t.allRanks[t.$apeList[o].tokenId], t.allPunks.push(t.$apeList[o]);
                                            t.btn_loading = !1, e.next = 27;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t0 = e.catch(3), t.btn_loading = !1;
                                        case 27:
                                            t.filterAttr();
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 24]
                                ])
                            })))()
                        },
                        filterAttr: function() {
                            this.punks = [];
                            for (var i = 0; i < 500 && i < this.allPunks.length; i++) this.allPunks[i].rank = this.allRanks[this.allPunks[i].tokenId], this.punks.push(this.allPunks[i])
                        }
                    }
                }),
                o = (n(758), n(40)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "main"
                    }, [n("section", {
                        staticClass: "section bg-theme tc-light ov-h ptb-100"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "row align-items-center justify-content-center"
                    }, [n("div", {
                        staticClass: "col-md-9 col-lg-7"
                    }, [t._m(0), t._v(" "), n("h4", {
                        staticClass: "text-white"
                    }, [t._v("Total Mints: "), n("strong", [t._v(t._s(t.balanceOf))])]), t._v(" "), n("p", {
                        staticClass: "text-white"
                    }, [t._v("Wallet Address:\n              "), 0 != t.walletAddress ? n("a", {
                        staticClass: "bring-to-front",
                        attrs: {
                            target: "_blank",
                            href: "https://snowtrace.io/address/" + this.walletAddress
                        }
                    }, [t._v("\n                " + t._s(t.walletAddress) + "\n              ")]) : t._e()])])])])]), t._v(" "), n("div", {
                        staticClass: "module ptb-100"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 text-center"
                    }, [null === t.walletStatus ? n("div", [n("div", {
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
                    }, [t._v("Connect to wallet\n                  "), 1 == t.connectingWallet ? n("i", {
                        staticClass: "spinner-border spinner-border-sm text-white"
                    }) : t._e()])])]) : !1 === t.walletStatus ? n("div", [n("div", {
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
                    }, [t._v("Connect to wallet\n                ")])])]) : t.btn_loading ? n("div", [n("div", {
                        staticClass: "alert alert-info msg-alert",
                        attrs: {
                            role: "alert"
                        }
                    }, [t._v("\n                Processing your wallet ...\n              ")])]) : !0 === t.walletStatus ? n("div", [0 == t.punks.length ? n("div", [n("div", {
                        staticClass: "alert alert-primary msg-alert pb-5",
                        attrs: {
                            role: "alert"
                        }
                    }, [t._v("\n                  Your Gallery Is Empty\n                  "), n("NuxtLink", {
                        staticClass: "page-scroll",
                        attrs: {
                            to: "/mint"
                        }
                    }, [t._v("Mint")]), t._v("\n                  Some Apes\n                ")], 1)]) : t._e(), t._v(" "), n("div", {
                        staticClass: "row"
                    }, t._l(t.punks, (function(e, l) {
                        return n("div", {
                            staticClass: "col-md-4 col-lg-4 pb-5"
                        }, [n("NuxtLink", {
                            attrs: {
                                to: "/detail/" + e.tokenId
                            }
                        }, [n("div", {
                            staticClass: "single-partner-wrap card-bottom-line white-bg shadow-sm rounded text-center"
                        }, [n("img", {
                            staticClass: "img-fluid",
                            attrs: {
                                src: "/assets/BaycImages/ape/" + e.tokenId + ".png",
                                alt: "AvaxBayc #" + e.tokenId
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "partner-heading mb-2"
                        }, [n("h4", {
                            staticClass: "mt-3 text-primary"
                        }, [t._v("# " + t._s(e.tokenId))]), t._v(" "), n("p", {
                            staticClass: "text-primary-alt"
                        }, [t._v("Rank # " + t._s(e.rank))])]), t._v(" "), t._l(e.traits, (function(e, l, r) {
                            return n("label", {
                                staticClass: "text-left p-2 m-2",
                                staticStyle: {
                                    display: "inline-block"
                                }
                            }, [n("h5", {
                                staticClass: "text-primary"
                            }, [t._v(t._s(l))]), t._v(" "), n("span", {
                                staticClass: "text-primary-alt"
                            }, [t._v(t._s(e))])])
                        }))], 2)])], 1)
                    })), 0)]) : t._e()])])])])])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0"
                    }, [n("h1", {
                        staticClass: "text-white mb-0"
                    }, [t._v("My Wallet")])])
                }], !1, null, null, null);
            e.default = component.exports
        }
    }
]);