(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        746: function(t, e, r) {
            var content = r(766);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(234).default)("1b7833da", content, !0, {
                sourceMap: !1
            })
        },
        765: function(t, e, r) {
            "use strict";
            r(746)
        },
        766: function(t, e, r) {
            var n = r(233)(!1);
            n.push([t.i, "a.btn.btn-primary.btn-round{left:40px}#mintTime{margin-bottom:35px}", ""]), t.exports = n
        },
        776: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(15),
                l = (r(55), r(104), r(743)),
                o = {
                    layout: "Footer",
                    components: {
                        VueCompareImage: r.n(l).a
                    },
                    head: {
                        title: "AvaxBayc | Bored Ape Yacht Club Now On Avalanche"
                    },
                    data: function() {
                        return {
                            apeLeft: 1e4,
                            apePercent: 0,
                            apePercentString: 0
                        }
                    },
                    created: function() {
                        var t = this;
                        /*this.$walletManager.mintStart*/ !0 && setInterval((function() {
                            t.loadApeLeft()
                        }), 1e4), setTimeout((function() {
                            $(".clients-carousel").owlCarousel({
                                autoplay: !0,
                                loop: !0,
                                margin: 15,
                                dots: !1,
                                slideTransition: "linear",
                                autoplayTimeout: 4500,
                                autoplayHoverPause: !0,
                                autoplaySpeed: 4500,
                                responsive: {
                                    0: {
                                        items: 2
                                    },
                                    500: {
                                        items: 3
                                    },
                                    600: {
                                        items: 4
                                    },
                                    800: {
                                        items: 5
                                    },
                                    1200: {
                                        items: 6
                                    }
                                }
                            }), $(".screen-carousel").owlCarousel({
                                loop: !0,
                                margin: 0,
                                center: !0,
                                dots: !0,
                                nav: !1,
                                autoplay: !0,
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    768: {
                                        items: 3
                                    },
                                    991: {
                                        items: 4
                                    },
                                    1200: {
                                        items: 4
                                    },
                                    1920: {
                                        items: 4
                                    }
                                }
                            })
                        }), 100)
                    },
                    mounted: function() {
                        /*this.$walletManager.mintStart*/ !0 && this.loadApeLeft(), NioApp.components.docReady[3](jQuery), NioApp.components.docReady[14](jQuery), NioApp.components.docReady[21](jQuery), NioApp.components.winLoad[0](jQuery), NioApp.components.docReady[13](jQuery), NioApp.winLoad()
                    },
                    methods: {
                        copyContract: function() {
                            navigator.clipboard.writeText(this.$walletManager.myAddress), toastr.clear(), toastr.options = {
                                closeButton: !0,
                                newestOnTop: !1,
                                preventDuplicates: !0,
                                positionClass: "toast-bottom-right",
                                showDuration: "1000",
                                hideDuration: "10000",
                                timeOut: "2000",
                                extendedTimeOut: "1000"
                            }, toastr.success("Contract Copied")
                        },
                        loadApeLeft: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
                                                var r;
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, window.contractGlobal.methods.getNotMintedAmount().call();
                                                        case 2:
                                                            r = e.sent, t.apeLeft = parseInt(r), t.apePercent = 100 * (1e4 - parseInt(r)) / 1e4, t.apePercentString = t.apePercent + "%";
                                                        case 6:
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
                },
                d = (r(765), r(40)),
                component = Object(d.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("div", {
                        staticClass: "header-banner bg-theme-grad-alt ",
                        attrs: {
                            id: "main"
                        }
                    }, [t._m(0), t._v(" "), r("div", {
                        staticClass: "token-box token-box-s1  "
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row no-gutters justify-content-center"
                    }, [r("div", {
                        staticClass: "col-xl-6 col-md-7"
                    }, [r("div", {
                        staticClass: " token-status-s1  tc-light text-left split split-right split-md-right",
                        staticStyle: {
                            "box-shadow": "none"
                        }
                    }, [r("h5", {
                        staticClass: "title-sm"
                    }, [t._v("Mint Progress (" + t._s(t.apePercentString) + ")")]), t._v(" "), r("div", {
                        staticClass: "progress-bar progress-bar-s1",
                        staticStyle: {
                            padding: "0"
                        }
                    }, [r("div", {
                        staticClass: "progress-percent progress-percent-s1 bg-theme-grad-alt",
                        style: {
                            width: t.apePercentString
                        }
                    })]), t._v(" "), r("div", {
                        staticClass: "progress-points"
                    }, [r("span", [t._v("Remaining " + t._s(t.apeLeft))]), t._v(" "), r("span", [t._v("10,000 Apes Total")])])])]), t._v(" "), r("div", {
                        staticClass: "col-xl-4 col-md-5"
                    }, [r("div", {
                        staticClass: "token-countdown-wrapper split split-left split-md-left"
                    }, [this.$walletManager.mintStart ? r("h5", {
                        staticClass: "title-sm"
                    }, [t._v("Mint is live")]) : t._e(), t._v(" "), /*this.$walletManager.mintStart*/ !0 ? r("small", [t._v("Mint Before All Gone (Minted: " + t._s(1e4 - t.apeLeft) + ")")]) : r("small", [t._v("Mint Before All Gone (Minted: 0)")]), t._v(" "), /*this.$walletManager.mintStart*/ !0 ? r("NuxtLink", {
                        staticClass: "btn btn-primary btn-round",
                        attrs: {
                            to: "/mint"
                        }
                    }, [t._v("Mint\n                  Now\n                ")]) : t._e(), t._v(" "), /*this.$walletManager.mintStart*/ !0 ? t._e() : r("div", {
                        staticClass: "countdown-small countdown-s2 countdown",
                        attrs: {
                            "data-date": "2022/02/1 10:00:00 GMT",
                            "data-day-text": "D",
                            "data-hour-text": "H",
                            "data-min-text": "M",
                            "data-sec-text": "S"
                        }
                    })], 1)])])])]), t._v(" "), r("div", {
                        staticClass: "particles-container particles-bg",
                        attrs: {
                            id: "particles-bg"
                        }
                    })]), t._v(" "), t._m(1)])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "nk-banner"
                    }, [r("div", {
                        staticClass: "banner banner-fs banner-single banner-with-token-box-s1 ",
                        staticStyle: {
                            "background-image": "url('/assets/images/baycbackground.jpg')",
                            opacity: "0.5",
                            "background-repeat": "round"
                        }
                    }, [r("div", {
                        staticClass: "ui-shape ui-shape-header ui-shape-light"
                    }), t._v(" "), r("div", {
                        staticClass: "banner-wrap"
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row align-items-center justify-content-center"
                    }, [r("div", {
                        staticClass: "col-sm-10 col-md-10 col-xl-9"
                    }, [r("div", {
                        staticClass: "banner-caption tc-light text-center"
                    }, [r("div", {
                        staticClass: "cpn-title"
                    }, [r("h1", {
                        staticClass: "title title-xl-s2 title-semibold pt-5 mt-5 "
                    }, [t._v("BORED APE YACHT CLUB ON AVALANCHE")])]), t._v(" "), r("div", {
                        staticClass: "cpn-text cpn-text-center"
                    }, [r("p", {
                        staticClass: "lead  "
                    }, [t._v("After the success of "), r("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://boredapeyachtclub.com/#/"
                        }
                    }, [t._v("Original\n                        Bayc Ethereum")]), t._v(",\n                        AvaxBayc are now on Avalanche! Don't miss the chance to own them\n                      ")]), t._v(" "), r("p", {
                        staticClass: "lead"
                    }, [t._v("\n                        AvaxBayc is among the first high-quality art projects on Avalanche\n                      ")])])])])])]), t._v(" "), r("div", {
                        staticClass: "banner-social-wrap text-center  "
                    }, [r("ul", {
                        staticClass: "banner-social banner-social-vertical"
                    }, [r("li", [r("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://t.me/avaxbayc"
                        }
                    }, [r("em", {
                        staticClass: "fab fa-telegram"
                    })])]), t._v(" "), r("li", [r("a", {
                        attrs: {
                            href: "https://twitter.com/avaxbayc",
                            target: "_blank"
                        }
                    }, [r("em", {
                        staticClass: "fab fa-twitter"
                    })])]), t._v(" "), r("li", [r("a", {
                        attrs: {
                            href: "https://avaxbayc.medium.com/",
                            target: "_blank"
                        }
                    }, [r("em", {
                        staticClass: "fab fa-medium-m"
                    })])])])])])]), t._v(" "), r("div", {
                        staticClass: "nk-ovm mask-b mask-contain-bottom"
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("main", {
                        staticClass: "nk-pages"
                    }, [r("section", {
                        staticClass: "section bg-light",
                        attrs: {
                            id: "about"
                        }
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "nk-block nk-block-features-s2"
                    }, [r("div", {
                        staticClass: "row align-items-center flex-row-reverse gutter-vr-30px"
                    }, [r("div", {
                        staticClass: "col-lg-5"
                    }, [r("div", {
                        staticClass: "gfx py-4 mx-auto mx-lg-0 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [r("img", {
                        attrs: {
                            src: "./assets/bg5.png",
                            alt: "gfx"
                        }
                    })])]), t._v(" "), r("div", {
                        staticClass: "col-lg-7"
                    }, [r("div", {
                        staticClass: "nk-block-text pdb-r"
                    }, [r("h2", {
                        staticClass: "title title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("About AvaxBayc ")]), t._v(" "), r("h2", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("The AvaxBayc is a homage to the Bored Ape\n                    Yacht Club and not affiliated with Yuga Labs LLC. ")]), t._v(" "), r("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [t._v("\n                    AvaxBayc, is an exclusive 10,000 only mint-able premium NFT. No two pieces of these 10,000\n                    digital\n                    beauties are alike. Each being unique and pristine, there is an order of rarity that makes certain\n                    ones more valuable than the others. each Bored Ape is inspired by its Ethereum counterpart.\n                  ")]), t._v(" "), r("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".5"
                        }
                    }, [t._v("\n                    AvaxBayc is the first ape on Avalanche blockchain, everyone can get an Ape. Well, as long as you\n                    are within\n                    the first 10,000. All Apes will cost the same amount.\n                  ")]), t._v(" "), r("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".7"
                        }
                    }, [t._v("\n                    AvaxBayc is among the first high-quality art projects on avalanche still nascent NFT landscape.\n                    With their\n                    Ethereum counterparts already trading in the secondary market for over 100 ETH a piece\n                  ")])]), t._v(" "), r("div", {
                        staticClass: "row gutter-vr-20px flex-wrap"
                    }, [r("div", {
                        staticClass: "col-sm-6"
                    }, [r("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".4"
                        }
                    }, [r("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-1"
                    }, [r("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), r("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [r("h6", [t._v("MARKETPLACE")]), t._v(" "), r("p", [t._v("Market place where you can trade your AvaxBayc Bored Apes Yacht Club")])])])]), t._v(" "), r("div", {
                        staticClass: "col-sm-6"
                    }, [r("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".4"
                        }
                    }, [r("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-2"
                    }, [r("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), r("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [r("h6", [t._v("ERC-721")]), t._v(" "), r("p", [t._v("The apes are stored as ERC-721 tokens on the AvaxBayc blockchain and hosted on IPFS.\n                          Purchasing an ape costs 1.5 AVAX.")])])])]), t._v(" "), r("div", {
                        staticClass: "col-sm-6"
                    }, [r("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".5"
                        }
                    }, [r("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-3"
                    }, [r("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), r("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [r("h6", [t._v("Fair Launch")]), t._v(" "), r("p", [t._v("Fair Launch, fair distribution.")])])])]), t._v(" "), r("div", {
                        staticClass: "col-sm-6"
                    }, [r("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".6"
                        }
                    }, [r("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-4"
                    }, [r("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), r("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [r("h6", [t._v("Rarity")]), t._v(" "), r("p", [t._v("10,000 Provably-rare Bored Ape tokens.")])])])])])])])])])]), t._v(" "), r("section", {
                        staticClass: "section bg-theme tc-light ov-h",
                        attrs: {
                            id: "roadmap"
                        }
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "section-head text-center wide-auto-sm"
                    }, [r("h4", {
                        staticClass: "title title-semibold animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("Roadmap")]), t._v(" "), r("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("\n              Our goal is to continue these activities long into the future and make it a primary purpose of our\n              community, to be a force for good in our world\n            ")])]), t._v(" "), r("div", {
                        staticClass: "nk-block"
                    }, [r("div", {
                        staticClass: "row justify-content-center"
                    }, [r("div", {
                        staticClass: "col-xl-12"
                    }, [r("div", {
                        staticClass: "roadmap-all mgb-m50 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [r("div", {
                        staticClass: "roadmap-wrap roadmap-wrap-s1 mb-0"
                    }, [r("div", {
                        staticClass: "row no-gutters"
                    }, [r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 roadmap-done text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("1")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Build Tech")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("Build Smart Contract")]), t._v(" "), r("li", [t._v("Redesign All Apes Backgrounds")])])])])]), t._v(" "), r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 roadmap-done text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("2")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Create Community")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("Telegram")]), t._v(" "), r("li", [t._v("Twitter")]), t._v(" "), r("li", [t._v("Start gathering the community")])])])])]), t._v(" "), r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 roadmap-done text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("3")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Website Designs")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("Designing website")]), t._v(" "), r("li", [t._v("Launching the website.")])])])])]), t._v(" "), r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 roadmap-done text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("4")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Launch minting!")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("Start at\n                                "), r("h5", [t._v("\n                                  Thursday,January 6,2022 at 10AM GMT\n                                ")])])])])])])])]), t._v(" "), r("div", {
                        staticClass: "roadmap-wrap roadmap-wrap-s1 mb-0"
                    }, [r("div", {
                        staticClass: "row flex-row-reverse no-gutters"
                    }, [r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1  roadmap-done text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("5")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Campaigns")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("Marketing campaigns.")]), t._v(" "), r("li", [t._v("we'll have amazing giveaways!")])])])])]), t._v(" "), r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("6")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Sold out")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("All AvaxBayc  sold out!")])])])])]), t._v(" "), r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("7")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Marketplace")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("Launching the Marketplace")])])])])]), t._v(" "), r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("8")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Mutants")])]), t._v(" "), r("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [r("li", [t._v("Airdrop")])])])])])])]), t._v(" "), r("div", {
                        staticClass: "roadmap-wrap roadmap-wrap-s1 mb-lg-0"
                    }, [r("div", {
                        staticClass: "row no-gutters"
                    }, [r("div", {
                        staticClass: "col-lg"
                    }, [r("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [r("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [r("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [r("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("coming Soon")]), t._v(" "), r("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("More details coming soon, Make sure to follow us on socials. ")])])])])])])])])])])])]), t._v(" "), r("div", {
                        staticClass: "nk-ovm shape-n"
                    })]), t._v(" "), r("section", {
                        staticClass: "section bg-white",
                        attrs: {
                            id: "team"
                        }
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "section-head section-head-s7 text-center wide-auto-sm"
                    }, [r("h2", {
                        staticClass: "title title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("Team")])]), t._v(" "), r("div", {
                        staticClass: "nk-block nk-block-team-list"
                    }, [r("div", {
                        staticClass: "section-head section-head-sm section-head-s7 text-center wide-auto-sm"
                    }, [r("h2", {
                        staticClass: "title-md title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("Core Team Member")])]), t._v(" "), r("div", {
                        staticClass: "row justify-content-center"
                    }, [r("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [r("div", {
                        staticClass: "team animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [r("div", {
                        staticClass: "team-photo"
                    }, [r("img", {
                        attrs: {
                            src: "./assets/BaycImages/ape/8633.png",
                            alt: "team"
                        }
                    }), t._v(" "), r("ul", {
                        staticClass: "team-social"
                    })]), t._v(" "), r("h5", {
                        staticClass: "team-name title title-sm"
                    }, [t._v("Lukas")]), t._v(" "), r("span", {
                        staticClass: "team-position"
                    }, [t._v("CEO & Software Engineer")])])]), t._v(" "), r("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [r("div", {
                        staticClass: "team animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".4"
                        }
                    }, [r("div", {
                        staticClass: "team-photo"
                    }, [r("img", {
                        attrs: {
                            src: "./assets/BaycImages/ape/120.png",
                            alt: "team"
                        }
                    }), t._v(" "), r("ul", {
                        staticClass: "team-social"
                    })]), t._v(" "), r("h5", {
                        staticClass: "team-name title title-sm"
                    }, [t._v("Mahi")]), t._v(" "), r("span", {
                        staticClass: "team-position"
                    }, [t._v("CTO & Lead Blockchain")])])])])])])])])
                }], !1, null, null, null);
            e.default = component.exports
        }
    }
]);