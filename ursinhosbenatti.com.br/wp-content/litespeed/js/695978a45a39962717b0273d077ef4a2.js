/*! E-Gallery v1.2.0 by Elementor */
var EGallery = function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var s = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    return i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) i.d(n, s, function(e) {
                return t[e]
            }.bind(null, s));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 9)
}([function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e) {
    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    t.exports = function(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }
}, function(t, e, i) {
    var n = i(5),
        s = i(6);
    t.exports = function(t, e) {
        return !e || "object" !== n(e) && "function" != typeof e ? s(t) : e
    }
}, function(t, e) {
    function i(e) {
        return t.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, i(e)
    }
    t.exports = i
}, function(t, e, i) {
    var n = i(7);
    t.exports = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && n(t, e)
    }
}, function(t, e) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function(t) {
            return i(t)
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
        })(t)
    }

    function s(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = s = function(t) {
            return n(t)
        } : t.exports = s = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, s(e)
    }
    t.exports = s
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}, function(t, e) {
    function i(e, n) {
        return t.exports = i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, i(e, n)
    }
    t.exports = i
}, function(t, e, i) {}, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(0),
        s = i.n(n),
        r = i(1),
        a = i.n(r),
        o = i(2),
        l = i.n(o),
        u = i(3),
        c = i.n(u),
        h = i(4),
        y = i.n(h);
    var g = function() {
            function t(e) {
                var i = this;
                s()(this, t), this.settings = jQuery.extend(!0, this.getDefaultSettings(), e), this.$container = jQuery(this.settings.container), this.timeouts = [], this.initElements(), this.prepareGallery();
                var n = this.runGallery.bind(this);
                this.runGallery = this.debounce(function() {
                    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                    i.settings.lazyLoad ? n.apply(void 0, e) : i.allImagesPromise.then(function() {
                        return n.apply(void 0, e)
                    })
                }, 300), this.settings.lazyLoad && (this.handleScroll = this.debounce(function() {
                    return i.lazyLoadImages()
                }, 16)), this.bindEvents(), this.runGallery()
            }
            return a()(t, [{
                key: "getDefaultSettings",
                value: function() {
                    return {}
                }
            }, {
                key: "getItemClass",
                value: function(t) {
                    return this.settings.classesPrefix + t
                }
            }, {
                key: "initElements",
                value: function() {
                    this.elements = {
                        $window: jQuery(window)
                    };
                    var t = "-" + (this.settings.rtl ? "rtl" : "ltr"),
                        e = this.getItemClass(this.settings.classes.container) + " " + this.getItemClass(this.settings.type) + " " + this.getItemClass(t);
                    this.settings.lazyLoad && (e += " " + this.getItemClass(this.settings.classes.lazyLoad)), this.$container.addClass(e)
                }
            }, {
                key: "bindEvents",
                value: function() {
                    this.elements.$window.on("resize", this.runGallery), this.settings.lazyLoad && this.elements.$window.on("scroll", this.handleScroll)
                }
            }, {
                key: "getNestedObjectData",
                value: function(t, e) {
                    var i = e.split("."),
                        n = i.splice(0, 1);
                    return i.length ? this.getNestedObjectData(t[n], i.join(".")) : {
                        object: t,
                        key: e
                    }
                }
            }, {
                key: "getTemplateArgs",
                value: function(t, e) {
                    var i = this.getNestedObjectData(t, e);
                    return i.object[i.key] || ""
                }
            }, {
                key: "getCurrentBreakpoint",
                value: function() {
                    var t = Object.keys(this.settings.breakpoints).map(Number).sort(function(t, e) {
                            return t - e
                        }),
                        e = 0;
                    return t.some(function(t) {
                        return innerWidth < t && (e = t, !0)
                    }), e
                }
            }, {
                key: "getCurrentDeviceSetting",
                value: function(t) {
                    var e = this.getCurrentBreakpoint();
                    return e ? this.settings.breakpoints[e][t] : this.settings[t]
                }
            }, {
                key: "getActiveItems",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = this.settings.tags,
                        i = [];
                    if (!e.length) return t ? (this.$items.each(function(t) {
                        i.push(t)
                    }), i) : this.$items;
                    var n = this.$items.filter(function(n, s) {
                        var r = s.dataset.eGalleryTags;
                        return !!r && (r = r.split(/[ ,]+/), !!e.some(function(t) {
                            return r.includes(t)
                        }) && (t && i.push(n), !0))
                    });
                    return t ? i : n
                }
            }, {
                key: "getImageData",
                value: function(t) {
                    return this.settings.tags.length && (t = this.getActiveItems(!0)[t]), this.imagesData[t]
                }
            }, {
                key: "compileTemplate",
                value: function(t, e) {
                    var i = this;
                    return t.replace(/{{([^}]+)}}/g, function(t, n) {
                        return i.getTemplateArgs(e, n.trim())
                    })
                }
            }, {
                key: "createOverlay",
                value: function(t) {
                    var e = this.settings,
                        i = e.classes,
                        n = e.overlayTemplate,
                        s = jQuery("<div>", {
                            class: this.getItemClass(i.overlay)
                        }),
                        r = this.compileTemplate(n, jQuery.extend(!0, this.settings, t));
                    return s.html(r), s
                }
            }, {
                key: "createItem",
                value: function(t) {
                    var e, i = this.settings.classes,
                        n = jQuery("<div>", {
                            class: this.getItemClass(i.item),
                            "data-e-gallery-tags": t.tags
                        }),
                        s = jQuery("<div>", {
                            class: this.getItemClass(i.image)
                        });
                    this.settings.lazyLoad || s.css("background-image", "url(" + t.thumbnail + ")"), this.settings.overlay && (e = this.createOverlay(t));
                    var r = n;
                    return t.url && (r = jQuery("<a>", {
                        class: this.getItemClass(i.link),
                        href: t.url
                    }), n.html(r)), r.html(s), e && r.append(e), n
                }
            }, {
                key: "debounce",
                value: function(t, e) {
                    var i, n = this;
                    return function() {
                        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                        clearTimeout(i), i = setTimeout(function() {
                            return t.apply(void 0, r)
                        }, e), n.timeouts.push(i)
                    }
                }
            }, {
                key: "buildGallery",
                value: function() {
                    var t = this,
                        e = this.settings.items;
                    this.$items = jQuery(), e.forEach(function(e) {
                        var i = t.createItem(e);
                        t.$items = t.$items.add(i), t.$container.append(i)
                    })
                }
            }, {
                key: "loadImages",
                value: function() {
                    var t = this,
                        e = [];
                    this.settings.items.forEach(function(i, n) {
                        var s = new Image,
                            r = new Promise(function(t) {
                                s.onload = t
                            });
                        e.push(r), r.then(function() {
                            return t.calculateImageSize(s, n)
                        }), s.src = i.thumbnail
                    }), this.allImagesPromise = Promise.all(e)
                }
            }, {
                key: "lazyLoadImages",
                value: function() {
                    var t = this;
                    if (!this.lazyLoadComplete) {
                        var e = this.getActiveItems(),
                            i = this.getActiveItems(!0);
                        e.each(function(e, n) {
                            var s = t.settings.items[i[e]];
                            if (s.loading || ! function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                                        i = t.getBoundingClientRect().top,
                                        n = t.offsetHeight,
                                        s = i + n;
                                    return ("middle" === e ? i + n / 2 : "bottom" === e ? s : i) <= innerHeight && s >= 0
                                }(n)) return !0;
                            s.loading = !0;
                            var r = jQuery(n),
                                a = new Image;
                            return new Promise(function(t) {
                                a.onload = t
                            }).then(function() {
                                r.find(t.settings.selectors.image).css("background-image", 'url("' + s.thumbnail + '")').addClass(t.getItemClass(t.settings.classes.imageLoaded)), t.loadedItemsCount++, t.loadedItemsCount === t.settings.items.length && (t.lazyLoadComplete = !0)
                            }), a.src = s.thumbnail, !0
                        })
                    }
                }
            }, {
                key: "calculateImageSize",
                value: function(t, e) {
                    this.imagesData[e] = {
                        width: t.width,
                        height: t.height,
                        ratio: t.width / t.height
                    }
                }
            }, {
                key: "createImagesData",
                value: function() {
                    var t = this;
                    this.settings.items.forEach(function(e, i) {
                        return t.calculateImageSize(e, i)
                    })
                }
            }, {
                key: "makeGalleryFromContent",
                value: function() {
                    var t = this.settings.selectors,
                        e = this.settings.lazyLoad,
                        i = [];
                    this.$items = this.$container.find(t.items), this.$items.each(function(n, s) {
                        var r = jQuery(s).find(t.image);
                        i[n] = {
                            thumbnail: r.data("thumbnail")
                        }, e ? (i[n].width = r.data("width"), i[n].height = r.data("height")) : r.css("background-image", 'url("'.concat(r.data("thumbnail"), '")'))
                    }), this.settings.items = i
                }
            }, {
                key: "prepareGallery",
                value: function() {
                    this.settings.items ? this.buildGallery() : this.makeGalleryFromContent(), this.imagesData = [], this.settings.lazyLoad ? (this.loadedItemsCount = 0, this.lazyLoadComplete = !1, this.createImagesData()) : this.loadImages()
                }
            }, {
                key: "runGallery",
                value: function(t) {
                    var e = this,
                        i = this.$container[0].style;
                    i.setProperty("--hgap", this.getCurrentDeviceSetting("horizontalGap") + "px"), i.setProperty("--vgap", this.getCurrentDeviceSetting("verticalGap") + "px"), i.setProperty("--animation-duration", this.settings.animationDuration + "ms"), this.$items.addClass(this.getItemClass(this.settings.classes.hidden)), this.getActiveItems().removeClass(this.getItemClass(this.settings.classes.hidden)), this.settings.lazyLoad && setTimeout(function() {
                        return e.lazyLoadImages()
                    }, 300), this.run(t)
                }
            }, {
                key: "setSettings",
                value: function(t, e) {
                    var i = this.getNestedObjectData(this.settings, t);
                    i.object && (i.object[i.key] = e, this.runGallery(!0))
                }
            }, {
                key: "unbindEvents",
                value: function() {
                    this.elements.$window.off("resize", this.runGallery)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unbindEvents(), this.$container.empty(), this.timeouts.forEach(function(t) {
                        return clearTimeout(t)
                    })
                }
            }]), t
        }(),
        f = function(t) {
            function e() {
                return s()(this, e), l()(this, c()(e).apply(this, arguments))
            }
            return y()(e, t), a()(e, [{
                key: "getDefaultSettings",
                value: function() {
                    return {
                        aspectRatio: "16:9"
                    }
                }
            }, {
                key: "setItemsPosition",
                value: function() {
                    var t = this.getCurrentDeviceSetting("columns");
                    this.getActiveItems().each(function(e, i) {
                        i.style.setProperty("--column", e % t), i.style.setProperty("--row", Math.floor(e / t))
                    })
                }
            }, {
                key: "setContainerSize",
                value: function() {
                    var t = this.getCurrentDeviceSetting("columns"),
                        e = Math.ceil(this.getActiveItems().length / t),
                        i = this.$container[0].style;
                    i.setProperty("--columns", t), i.setProperty("--rows", e);
                    var n = this.getActiveItems().width(),
                        s = this.settings.aspectRatio.split(":"),
                        r = s[1] / s[0],
                        a = (r * n * e + this.getCurrentDeviceSetting("horizontalGap") * (e - 1)) / this.$container.width() * 100;
                    i.setProperty("--aspect-ratio", 100 * r + "%"), i.setProperty("--container-aspect-ratio", a + "%")
                }
            }, {
                key: "run",
                value: function() {
                    var t = this,
                        e = this.getItemClass(this.settings.classes.animated);
                    this.$container.addClass(e), setTimeout(function() {
                        t.setItemsPosition(), t.setContainerSize(), setTimeout(function() {
                            return t.$container.removeClass(e)
                        }, t.settings.animationDuration)
                    }, 50)
                }
            }]), e
        }(g),
        m = function(t) {
            function e() {
                return s()(this, e), l()(this, c()(e).apply(this, arguments))
            }
            return y()(e, t), a()(e, [{
                key: "getDefaultSettings",
                value: function() {
                    return {
                        idealRowHeight: 200,
                        lastRow: "auto",
                        breakpoints: {
                            1024: {
                                idealRowHeight: 150
                            },
                            768: {
                                idealRowHeight: 100
                            }
                        }
                    }
                }
            }, {
                key: "run",
                value: function() {
                    this.rowsHeights = [], this.rowsCount = 0, this.containerWidth = this.$container.width(), this.makeJustifiedRow(0)
                }
            }, {
                key: "makeJustifiedRow",
                value: function(t) {
                    for (var e = 0, i = t;; i++) {
                        var n = this.getImageData(i),
                            s = Math.round(this.getCurrentDeviceSetting("idealRowHeight") * n.ratio);
                        s > this.containerWidth && (s = this.containerWidth);
                        var r = e + s;
                        if (r > this.containerWidth)
                            if (this.containerWidth - e < r - this.containerWidth) {
                                this.fitImagesInContainer(t, i, e), this.rowsCount++, this.makeJustifiedRow(i);
                                break
                            }
                        var a = i === this.getActiveItems().length - 1;
                        if (n.computedWidth = s, a) {
                            var o = this.getCurrentDeviceSetting("lastRow");
                            if ("hide" !== o) {
                                var l = "fit" === o || .7 <= r / this.containerWidth ? r : this.containerWidth;
                                this.fitImagesInContainer(t, i + 1, l)
                            }
                            this.inflateGalleryHeight();
                            break
                        }
                        e = r
                    }
                }
            }, {
                key: "fitImagesInContainer",
                value: function(t, e, i) {
                    for (var n = e - t - 1, s = this.getActiveItems(), r = 0, a = t; a < e; a++) {
                        var o = this.getImageData(a),
                            l = o.computedWidth / i,
                            u = s.get(a),
                            c = this.getItemClass(this.settings.classes.firstRowItem);
                        if (u.style.setProperty("--item-width", l), u.style.setProperty("--gap-count", n), u.style.setProperty("--item-height", o.height / o.width * 100 + "%"), u.style.setProperty("--item-start", r), u.style.setProperty("--item-row-index", a - t), r += l, a === t) {
                            u.classList.add(c);
                            var h = l * (this.containerWidth - n * this.getCurrentDeviceSetting("horizontalGap"));
                            this.rowsHeights.push(h / o.ratio)
                        } else u.classList.remove(c)
                    }
                }
            }, {
                key: "inflateGalleryHeight",
                value: function() {
                    var t = this.rowsHeights.reduce(function(t, e) {
                            return t + e
                        }) + this.rowsCount * this.getCurrentDeviceSetting("verticalGap"),
                        e = t / this.containerWidth,
                        i = this.rowsHeights.map(function(e) {
                            return e / t * 100
                        }),
                        n = -1,
                        s = 0;
                    this.getActiveItems().each(function(t, e) {
                        "0" === e.style.getPropertyValue("--item-row-index") && ++n && (s += i[n - 1]), e.style.setProperty("--item-top", s + "%"), e.style.setProperty("--item-height", i[n] + "%"), e.style.setProperty("--row", n)
                    }), this.$container[0].style.setProperty("--container-aspect-ratio", e)
                }
            }]), e
        }(g),
        d = function(t) {
            function e() {
                return s()(this, e), l()(this, c()(e).apply(this, arguments))
            }
            return y()(e, t), a()(e, [{
                key: "run",
                value: function(t) {
                    var e = this,
                        i = this.getCurrentBreakpoint();
                    if (t || i !== this.currentBreakpoint) {
                        this.currentBreakpoint = i;
                        for (var n = [], s = [], r = [], a = this.getCurrentDeviceSetting("columns"), o = this.$container.width(), l = (o - this.getCurrentDeviceSetting("horizontalGap") * (a - 1)) / a, u = this.getActiveItems(), c = 0, h = 0; h < a; h++) s[h] = 0, n[h] = 0;
                        u.each(function(t, i) {
                            var o = e.getImageData(t),
                                u = l / o.ratio,
                                h = t % a;
                            c = n[h], jQuery.each(n, function(t, e) {
                                e && c > e + 5 && (c = e, h = t)
                            }), r[t] = n[h], n[h] += u, i.style.setProperty("--item-height", o.height / o.width * 100 + "%"), i.style.setProperty("--column", h), i.style.setProperty("--items-in-column", s[h]), s[h]++
                        });
                        var y = Math.max.apply(Math, n),
                            g = n.indexOf(y),
                            f = s[g] - 1,
                            m = y / o;
                        this.$container[0].style.setProperty("--columns", a), this.$container[0].style.setProperty("--highest-column-gap-count", f), this.$container.css("padding-bottom", 100 * m + "%"), u.each(function(t, e) {
                            var i = r[t] ? r[t] / y * 100 : 0;
                            e.style.setProperty("--percent-height", i + "%")
                        })
                    }
                }
            }]), e
        }(g);
    i(8);
    i.d(e, "default", function() {
        return p
    });
    var p = function() {
        function t(e) {
            s()(this, t), this.userSettings = e, this.initGalleriesTypes(), this.createGallery()
        }
        return a()(t, [{
            key: "getDefaultSettings",
            value: function() {
                return {
                    container: null,
                    items: null,
                    type: "grid",
                    tags: [],
                    overlay: !1,
                    overlayTemplate: '<div class="{{ classesPrefix }}{{ classes.overlayTitle }}">{{ title }}</div><div class="{{ classesPrefix }}{{ classes.overlayDescription }}">{{ description }}</div>',
                    columns: 5,
                    horizontalGap: 10,
                    verticalGap: 10,
                    rtl: !1,
                    animationDuration: 350,
                    lazyLoad: !1,
                    classesPrefix: "e-gallery-",
                    classes: {
                        container: "container",
                        item: "item",
                        image: "image",
                        overlay: "overlay",
                        overlayTitle: "overlay__title",
                        overlayDescription: "overlay__description",
                        link: "link",
                        firstRowItem: "first-row-item",
                        animated: "-animated",
                        hidden: "item--hidden",
                        lazyLoad: "-lazyload",
                        imageLoaded: "image-loaded"
                    },
                    selectors: {
                        items: ".e-gallery-item",
                        image: ".e-gallery-image"
                    },
                    breakpoints: {
                        1024: {
                            horizontalGap: 5,
                            verticalGap: 5,
                            columns: 4
                        },
                        768: {
                            horizontalGap: 1,
                            verticalGap: 1,
                            columns: 2
                        }
                    }
                }
            }
        }, {
            key: "initGalleriesTypes",
            value: function() {
                this.galleriesTypes = {
                    grid: f,
                    justified: m,
                    masonry: d
                }
            }
        }, {
            key: "createGallery",
            value: function() {
                var t = jQuery.extend(this.getDefaultSettings(), this.userSettings),
                    e = this.galleriesTypes[t.type];
                this.galleryHandler = new e(t)
            }
        }, {
            key: "setSettings",
            value: function(t, e) {
                this.galleryHandler.setSettings(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.galleryHandler.destroy()
            }
        }]), t
    }()
}]).default;;