window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-62593004-2');


window.FleetCart = {
    csrfToken: 'J5RTz15FbdRaQDnGy6LVycTzCWpY67IFrNxDVQF1',
    stripePublishableKey: 'pk_test_cL7ldQ3mAgoWWGnpaRt3JEhv',
    langs: {
        'storefront::products.loading': 'Loading...',
    },
};


var Ziggy = {
    namedRoutes: {
        "debugbar.openhandler": {
            "uri": "_debugbar\/open",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "debugbar.clockwork": {
            "uri": "_debugbar\/clockwork\/{id}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "debugbar.telescope": {
            "uri": "_debugbar\/telescope\/{id}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "debugbar.assets.css": {
            "uri": "_debugbar\/assets\/stylesheets",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "debugbar.assets.js": {
            "uri": "_debugbar\/assets\/javascript",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "debugbar.cache.delete": {
            "uri": "_debugbar\/cache\/{key}\/{tags?}",
            "methods": ["DELETE"],
            "domain": null
        },
        "bone.captcha.image": {
            "uri": "captcha\/image",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "bone.captcha.image.tag": {
            "uri": "captcha\/image_tag",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "license.create": {
            "uri": "license",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "license.store": {
            "uri": "license",
            "methods": ["POST"],
            "domain": null
        },
        "account.dashboard.index": {
            "uri": "en\/account",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "account.profile.edit": {
            "uri": "en\/account\/profile",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "account.profile.update": {
            "uri": "en\/account\/profile",
            "methods": ["PUT"],
            "domain": null
        },
        "account.orders.index": {
            "uri": "en\/account\/orders",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "account.orders.show": {
            "uri": "en\/account\/orders\/{id}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "account.wishlist.index": {
            "uri": "en\/account\/wishlist",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "account.wishlist.destroy": {
            "uri": "en\/account\/wishlist\/{productId}",
            "methods": ["DELETE"],
            "domain": null
        },
        "account.reviews.index": {
            "uri": "en\/account\/reviews",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "products.index": {
            "uri": "en\/products",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "products.show": {
            "uri": "en\/products\/{slug}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "login": {
            "uri": "en\/login",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "login.post": {
            "uri": "en\/login",
            "methods": ["POST"],
            "domain": null
        },
        "login.redirect": {
            "uri": "en\/login\/{provider}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "login.callback": {
            "uri": "en\/login\/{provider}\/callback",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "logout": {
            "uri": "en\/logout",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "register": {
            "uri": "en\/register",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "register.post": {
            "uri": "en\/register",
            "methods": ["POST"],
            "domain": null
        },
        "reset": {
            "uri": "en\/password\/reset",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "reset.post": {
            "uri": "en\/password\/reset",
            "methods": ["POST"],
            "domain": null
        },
        "reset.complete": {
            "uri": "en\/password\/reset\/{email}\/{code}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "reset.complete.post": {
            "uri": "en\/password\/reset\/{email}\/{code}",
            "methods": ["POST"],
            "domain": null
        },
        "cart.taxes.store": {
            "uri": "en\/cart\/taxes",
            "methods": ["POST"],
            "domain": null
        },
        "products.reviews.store": {
            "uri": "en\/products\/{productId}\/reviews",
            "methods": ["POST"],
            "domain": null
        },
        "current_currency.store": {
            "uri": "en\/current-currency\/{code}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "cart.coupon.store": {
            "uri": "en\/cart\/coupon",
            "methods": ["POST"],
            "domain": null
        },
        "contact.create": {
            "uri": "en\/contact",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "contact.store": {
            "uri": "en\/contact",
            "methods": ["POST"],
            "domain": null
        },
        "compare.index": {
            "uri": "en\/compare",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "compare.store": {
            "uri": "en\/compare",
            "methods": ["POST"],
            "domain": null
        },
        "compare.destroy": {
            "uri": "en\/compare\/{id}",
            "methods": ["DELETE"],
            "domain": null
        },
        "checkout.create": {
            "uri": "en\/checkout",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "checkout.store": {
            "uri": "en\/checkout",
            "methods": ["POST"],
            "domain": null
        },
        "checkout.complete.store": {
            "uri": "en\/checkout\/complete\/{orderId}\/{paymentGateway}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "checkout.complete.show": {
            "uri": "en\/checkout\/complete",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "checkout.payment_canceled.store": {
            "uri": "en\/checkout\/payment-canceled\/{orderId}",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "cart.index": {
            "uri": "en\/cart",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "cart.items.store": {
            "uri": "en\/cart\/items",
            "methods": ["POST"],
            "domain": null
        },
        "cart.items.update": {
            "uri": "en\/cart\/items\/{cartItemId}",
            "methods": ["PUT"],
            "domain": null
        },
        "cart.items.destroy": {
            "uri": "en\/cart\/items\/{cartItemId}",
            "methods": ["DELETE"],
            "domain": null
        },
        "cart.shipping_method.store": {
            "uri": "en\/cart\/shipping-method",
            "methods": ["POST"],
            "domain": null
        },
        "wishlist.store": {
            "uri": "en\/wishlist",
            "methods": ["POST"],
            "domain": null
        },
        "countries.states.index": {
            "uri": "en\/countries\/{code}\/states",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "home": {
            "uri": "en",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "cookie_bar.accepted": {
            "uri": "en\/cookie-bar",
            "methods": ["POST"],
            "domain": null
        },
        "products.quick_view.show": {
            "uri": "en\/products\/{slug}\/quick-view",
            "methods": ["GET", "HEAD"],
            "domain": null
        },
        "current_theme.store": {
            "uri": "en\/current-theme",
            "methods": ["POST"],
            "domain": null
        },
        "pages.show": {
            "uri": "en\/{slug}",
            "methods": ["GET", "HEAD"],
            "domain": null
        }
    },
    baseUrl: 'http://fleetcart.envaysoft.com/',
    baseProtocol: 'http',
    baseDomain: 'fleetcart.envaysoft.com',
    basePort: false,
    defaultParameters: []
};

! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("route", [], t) : "object" == typeof exports ? exports.route = t() : e.route = t()
}(this, function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 5)
    }([function(e, t, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            o = Array.isArray,
            i = function() {
                for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                return e
            }(),
            a = function(e, t) {
                for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) void 0 !== e[n] && (r[n] = e[n]);
                return r
            };
        e.exports = {
            arrayToObject: a,
            assign: function(e, t) {
                return Object.keys(t).reduce(function(e, r) {
                    return e[r] = t[r], e
                }, e)
            },
            combine: function(e, t) {
                return [].concat(e, t)
            },
            compact: function(e) {
                for (var t = [{
                        obj: {
                            o: e
                        },
                        prop: "o"
                    }], r = [], n = 0; n < t.length; ++n)
                    for (var i = t[n], a = i.obj[i.prop], u = Object.keys(a), c = 0; c < u.length; ++c) {
                        var l = u[c],
                            s = a[l];
                        "object" == typeof s && null !== s && -1 === r.indexOf(s) && (t.push({
                            obj: a,
                            prop: l
                        }), r.push(s))
                    }
                return function(e) {
                    for (; e.length > 1;) {
                        var t = e.pop(),
                            r = t.obj[t.prop];
                        if (o(r)) {
                            for (var n = [], i = 0; i < r.length; ++i) void 0 !== r[i] && n.push(r[i]);
                            t.obj[t.prop] = n
                        }
                    }
                }(t), e
            },
            decode: function(e, t, r) {
                var n = e.replace(/\+/g, " ");
                if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(n)
                } catch (e) {
                    return n
                }
            },
            encode: function(e, t, r) {
                if (0 === e.length) return e;
                var n = e;
                if ("symbol" == typeof e ? n = Symbol.prototype.toString.call(e) : "string" != typeof e && (n = String(e)), "iso-8859-1" === r) return escape(n).replace(/%u[0-9a-f]{4}/gi, function(e) {
                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                });
                for (var o = "", a = 0; a < n.length; ++a) {
                    var u = n.charCodeAt(a);
                    45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 ? o += n.charAt(a) : u < 128 ? o += i[u] : u < 2048 ? o += i[192 | u >> 6] + i[128 | 63 & u] : u < 55296 || u >= 57344 ? o += i[224 | u >> 12] + i[128 | u >> 6 & 63] + i[128 | 63 & u] : (a += 1, u = 65536 + ((1023 & u) << 10 | 1023 & n.charCodeAt(a)), o += i[240 | u >> 18] + i[128 | u >> 12 & 63] + i[128 | u >> 6 & 63] + i[128 | 63 & u])
                }
                return o
            },
            isBuffer: function(e) {
                return !(!e || "object" != typeof e || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)))
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            merge: function e(t, r, i) {
                if (!r) return t;
                if ("object" != typeof r) {
                    if (o(t)) t.push(r);
                    else {
                        if (!t || "object" != typeof t) return [t, r];
                        (i && (i.plainObjects || i.allowPrototypes) || !n.call(Object.prototype, r)) && (t[r] = !0)
                    }
                    return t
                }
                if (!t || "object" != typeof t) return [t].concat(r);
                var u = t;
                return o(t) && !o(r) && (u = a(t, i)), o(t) && o(r) ? (r.forEach(function(r, o) {
                    if (n.call(t, o)) {
                        var a = t[o];
                        a && "object" == typeof a && r && "object" == typeof r ? t[o] = e(a, r, i) : t.push(r)
                    } else t[o] = r
                }), t) : Object.keys(r).reduce(function(t, o) {
                    var a = r[o];
                    return n.call(t, o) ? t[o] = e(t[o], a, i) : t[o] = a, t
                }, u)
            }
        }
    }, function(e, t, r) {
        "use strict";
        var n = String.prototype.replace,
            o = /%20/g,
            i = r(0),
            a = {
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            };
        e.exports = i.assign({
            default: a.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return n.call(e, o, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            }
        }, a)
    }, function(e, t, r) {
        "use strict";
        var n = r(3),
            o = r(4),
            i = r(1);
        e.exports = {
            formats: i,
            parse: o,
            stringify: n
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            o = r(1),
            i = Object.prototype.hasOwnProperty,
            a = {
                brackets: function(e) {
                    return e + "[]"
                },
                comma: "comma",
                indices: function(e, t) {
                    return e + "[" + t + "]"
                },
                repeat: function(e) {
                    return e
                }
            },
            u = Array.isArray,
            c = Array.prototype.push,
            l = function(e, t) {
                c.apply(e, u(t) ? t : [t])
            },
            s = Date.prototype.toISOString,
            f = o.default,
            p = {
                addQueryPrefix: !1,
                allowDots: !1,
                charset: "utf-8",
                charsetSentinel: !1,
                delimiter: "&",
                encode: !0,
                encoder: n.encode,
                encodeValuesOnly: !1,
                format: f,
                formatter: o.formatters[f],
                indices: !1,
                serializeDate: function(e) {
                    return s.call(e)
                },
                skipNulls: !1,
                strictNullHandling: !1
            },
            d = function e(t, r, o, i, a, c, s, f, d, y, h, m, b) {
                var g, v = t;
                if ("function" == typeof s ? v = s(r, v) : v instanceof Date ? v = y(v) : "comma" === o && u(v) && (v = v.join(",")), null === v) {
                    if (i) return c && !m ? c(r, p.encoder, b) : r;
                    v = ""
                }
                if ("string" == typeof(g = v) || "number" == typeof g || "boolean" == typeof g || "symbol" == typeof g || "bigint" == typeof g || n.isBuffer(v)) return c ? [h(m ? r : c(r, p.encoder, b)) + "=" + h(c(v, p.encoder, b))] : [h(r) + "=" + h(String(v))];
                var O, w = [];
                if (void 0 === v) return w;
                if (u(s)) O = s;
                else {
                    var j = Object.keys(v);
                    O = f ? j.sort(f) : j
                }
                for (var P = 0; P < O.length; ++P) {
                    var x = O[P];
                    a && null === v[x] || (u(v) ? l(w, e(v[x], "function" == typeof o ? o(r, x) : r, o, i, a, c, s, f, d, y, h, m, b)) : l(w, e(v[x], r + (d ? "." + x : "[" + x + "]"), o, i, a, c, s, f, d, y, h, m, b)))
                }
                return w
            };
        e.exports = function(e, t) {
            var r, n = e,
                c = function(e) {
                    if (!e) return p;
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                    var t = e.charset || p.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var r = o.default;
                    if (void 0 !== e.format) {
                        if (!i.call(o.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                        r = e.format
                    }
                    var n = o.formatters[r],
                        a = p.filter;
                    return ("function" == typeof e.filter || u(e.filter)) && (a = e.filter), {
                        addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                        allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                        delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                        encode: "boolean" == typeof e.encode ? e.encode : p.encode,
                        encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
                        encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                        filter: a,
                        formatter: n,
                        serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                        skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                        sort: "function" == typeof e.sort ? e.sort : null,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
                    }
                }(t);
            "function" == typeof c.filter ? n = (0, c.filter)("", n) : u(c.filter) && (r = c.filter);
            var s, f = [];
            if ("object" != typeof n || null === n) return "";
            s = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
            var y = a[s];
            r || (r = Object.keys(n)), c.sort && r.sort(c.sort);
            for (var h = 0; h < r.length; ++h) {
                var m = r[h];
                c.skipNulls && null === n[m] || l(f, d(n[m], m, y, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.formatter, c.encodeValuesOnly, c.charset))
            }
            var b = f.join(c.delimiter),
                g = !0 === c.addQueryPrefix ? "?" : "";
            return c.charsetSentinel && ("iso-8859-1" === c.charset ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), b.length > 0 ? g + b : ""
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            o = Object.prototype.hasOwnProperty,
            i = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decoder: n.decode,
                delimiter: "&",
                depth: 5,
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictNullHandling: !1
            },
            a = function(e) {
                return e.replace(/&#(\d+);/g, function(e, t) {
                    return String.fromCharCode(parseInt(t, 10))
                })
            },
            u = function(e, t, r) {
                if (e) {
                    var n = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                        i = /(\[[^[\]]*])/g,
                        a = r.depth > 0 && /(\[[^[\]]*])/.exec(n),
                        u = a ? n.slice(0, a.index) : n,
                        c = [];
                    if (u) {
                        if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
                        c.push(u)
                    }
                    for (var l = 0; r.depth > 0 && null !== (a = i.exec(n)) && l < r.depth;) {
                        if (l += 1, !r.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes) return;
                        c.push(a[1])
                    }
                    return a && c.push("[" + n.slice(a.index) + "]"),
                        function(e, t, r) {
                            for (var n = t, o = e.length - 1; o >= 0; --o) {
                                var i, a = e[o];
                                if ("[]" === a && r.parseArrays) i = [].concat(n);
                                else {
                                    i = r.plainObjects ? Object.create(null) : {};
                                    var u = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                        c = parseInt(u, 10);
                                    r.parseArrays || "" !== u ? !isNaN(c) && a !== u && String(c) === u && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (i = [])[c] = n : i[u] = n : i = {
                                        0: n
                                    }
                                }
                                n = i
                            }
                            return n
                        }(c, t, r)
                }
            };
        e.exports = function(e, t) {
            var r = function(e) {
                if (!e) return i;
                if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
                var t = void 0 === e.charset ? i.charset : e.charset;
                return {
                    allowDots: void 0 === e.allowDots ? i.allowDots : !!e.allowDots,
                    allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
                    arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
                    charset: t,
                    charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
                    comma: "boolean" == typeof e.comma ? e.comma : i.comma,
                    decoder: "function" == typeof e.decoder ? e.decoder : i.decoder,
                    delimiter: "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
                    depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
                    ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                    interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
                    parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
                    parseArrays: !1 !== e.parseArrays,
                    plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
                    strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
                }
            }(t);
            if ("" === e || null == e) return r.plainObjects ? Object.create(null) : {};
            for (var c = "string" == typeof e ? function(e, t) {
                    var r, u = {},
                        c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                        l = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                        s = c.split(t.delimiter, l),
                        f = -1,
                        p = t.charset;
                    if (t.charsetSentinel)
                        for (r = 0; r < s.length; ++r) 0 === s[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === s[r] ? p = "utf-8" : "utf8=%26%2310003%3B" === s[r] && (p = "iso-8859-1"), f = r, r = s.length);
                    for (r = 0; r < s.length; ++r)
                        if (r !== f) {
                            var d, y, h = s[r],
                                m = h.indexOf("]="),
                                b = -1 === m ? h.indexOf("=") : m + 1; - 1 === b ? (d = t.decoder(h, i.decoder, p), y = t.strictNullHandling ? null : "") : (d = t.decoder(h.slice(0, b), i.decoder, p), y = t.decoder(h.slice(b + 1), i.decoder, p)), y && t.interpretNumericEntities && "iso-8859-1" === p && (y = a(y)), y && t.comma && y.indexOf(",") > -1 && (y = y.split(",")), o.call(u, d) ? u[d] = n.combine(u[d], y) : u[d] = y
                        }
                    return u
                }(e, r) : e, l = r.plainObjects ? Object.create(null) : {}, s = Object.keys(c), f = 0; f < s.length; ++f) {
                var p = s[f],
                    d = u(p, c[p], r);
                l = n.merge(l, d, r)
            }
            return n.compact(l)
        }
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.r(t);
        var o = function() {
                function e(t, r, n) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.name = t, this.ziggy = n, this.route = this.ziggy.namedRoutes[this.name], void 0 === this.name) throw new Error("Ziggy Error: You must provide a route name");
                    if (void 0 === this.route) throw new Error("Ziggy Error: route '".concat(this.name, "' is not found in the route list"));
                    this.absolute = void 0 === r || r, this.domain = this.setDomain(), this.path = this.route.uri.replace(/^\//, "")
                }
                var t, r;
                return t = e, (r = [{
                    key: "setDomain",
                    value: function() {
                        if (!this.absolute) return "/";
                        if (!this.route.domain) return this.ziggy.baseUrl.replace(/\/?$/, "/");
                        var e = (this.route.domain || this.ziggy.baseDomain).replace(/\/+$/, "");
                        return this.ziggy.basePort && e.replace(/\/+$/, "") === this.ziggy.baseDomain.replace(/\/+$/, "") && (e = this.ziggy.baseDomain + ":" + this.ziggy.basePort), this.ziggy.baseProtocol + "://" + e + "/"
                    }
                }, {
                    key: "construct",
                    value: function() {
                        return this.domain + this.path
                    }
                }]) && n(t.prototype, r), e
            }(),
            i = r(2);

        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (l = function(e) {
                if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                var r;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, n)
                }

                function n() {
                    return function(e, t, r) {
                        return (function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }() ? Reflect.construct : function(e, t, r) {
                            var n = [null];
                            n.push.apply(n, t);
                            var o = new(Function.bind.apply(e, n));
                            return r && s(o, r.prototype), o
                        }).apply(null, arguments)
                    }(e, arguments, f(this).constructor)
                }
                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), s(n, e)
            })(e)
        }

        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        r.d(t, "default", function() {
            return d
        });
        var p = function(e) {
            function t(e, r, n) {
                var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (i = function(e, t) {
                    return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }(this, f(t).call(this))).name = e, i.absolute = n, i.ziggy = a || Ziggy, i.urlBuilder = i.name ? new o(e, n, i.ziggy) : null, i.template = i.urlBuilder ? i.urlBuilder.construct() : "", i.urlParams = i.normalizeParams(r), i.queryParams = {}, i.hydrated = "", i
            }
            var r, n;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t)
            }(t, l(String)), r = t, (n = [{
                key: "normalizeParams",
                value: function(e) {
                    return void 0 === e ? {} : ((e = "object" !== u(e) ? [e] : e).hasOwnProperty("id") && -1 == this.template.indexOf("{id}") && (e = [e.id]), this.numericParamIndices = Array.isArray(e), a({}, e))
                }
            }, {
                key: "with",
                value: function(e) {
                    return this.urlParams = this.normalizeParams(e), this
                }
            }, {
                key: "withQuery",
                value: function(e) {
                    return a(this.queryParams, e), this
                }
            }, {
                key: "hydrateUrl",
                value: function() {
                    var e = this;
                    if (this.hydrated) return this.hydrated;
                    var t = this.template.replace(/{([^}]+)}/gi, function(t, r) {
                        var n, o, i = e.trimParam(t);
                        if (e.ziggy.defaultParameters.hasOwnProperty(i) && (n = e.ziggy.defaultParameters[i]), n && !e.urlParams[i]) return delete e.urlParams[i], n;
                        if (e.numericParamIndices ? (e.urlParams = Object.values(e.urlParams), o = e.urlParams.shift()) : (o = e.urlParams[i], delete e.urlParams[i]), void 0 === o) {
                            if (-1 === t.indexOf("?")) throw new Error("Ziggy Error: '" + i + "' key is required for route '" + e.name + "'");
                            return ""
                        }
                        return o.id ? encodeURIComponent(o.id) : encodeURIComponent(o)
                    });
                    return null != this.urlBuilder && "" !== this.urlBuilder.path && (t = t.replace(/\/+$/, "")), this.hydrated = t, this.hydrated
                }
            }, {
                key: "matchUrl",
                value: function() {
                    var e = window.location.hostname + (window.location.port ? ":" + window.location.port : "") + window.location.pathname,
                        t = this.template.replace(/(\/\{[^\}]*\?\})/g, "/").replace(/(\{[^\}]*\})/gi, "[^/?]+").replace(/\/?$/, "").split("://")[1],
                        r = this.template.replace(/(\{[^\}]*\})/gi, "[^/?]+").split("://")[1],
                        n = e.replace(/\/?$/, "/"),
                        o = new RegExp("^" + r + "/$").test(n),
                        i = new RegExp("^" + t + "/$").test(n);
                    return o || i
                }
            }, {
                key: "constructQuery",
                value: function() {
                    if (0 === Object.keys(this.queryParams).length && 0 === Object.keys(this.urlParams).length) return "";
                    var e = a(this.urlParams, this.queryParams);
                    return Object(i.stringify)(e, {
                        encodeValuesOnly: !0,
                        skipNulls: !0,
                        addQueryPrefix: !0,
                        arrayFormat: "indices"
                    })
                }
            }, {
                key: "current",
                value: function() {
                    var e = this,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = Object.keys(this.ziggy.namedRoutes),
                        o = n.filter(function(r) {
                            return -1 !== e.ziggy.namedRoutes[r].methods.indexOf("GET") && new t(r, void 0, void 0, e.ziggy).matchUrl()
                        })[0];
                    if (r) {
                        var i = new RegExp("^" + r.replace("*", ".*").replace(".", ".") + "$", "i");
                        return i.test(o)
                    }
                    return o
                }
            }, {
                key: "check",
                value: function(e) {
                    return Object.keys(this.ziggy.namedRoutes).includes(e)
                }
            }, {
                key: "extractParams",
                value: function(e, t, r) {
                    var n = this,
                        o = e.split(r);
                    return t.split(r).reduce(function(e, t, r) {
                        return 0 === t.indexOf("{") && -1 !== t.indexOf("}") && o[r] ? a(e, (i = {}, u = n.trimParam(t), c = o[r], u in i ? Object.defineProperty(i, u, {
                            value: c,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : i[u] = c, i)) : e;
                        var i, u, c
                    }, {})
                }
            }, {
                key: "parse",
                value: function() {
                    this.return = this.hydrateUrl() + this.constructQuery()
                }
            }, {
                key: "url",
                value: function() {
                    return this.parse(), this.return
                }
            }, {
                key: "toString",
                value: function() {
                    return this.url()
                }
            }, {
                key: "trimParam",
                value: function(e) {
                    return e.replace(/{|}|\?/g, "")
                }
            }, {
                key: "valueOf",
                value: function() {
                    return this.url()
                }
            }, {
                key: "params",
                get: function() {
                    var e = this.ziggy.namedRoutes[this.current()];
                    return a(this.extractParams(window.location.hostname, e.domain || "", "."), this.extractParams(window.location.pathname.slice(1), e.uri, "/"))
                }
            }]) && c(r.prototype, n), t
        }();

        function d(e, t, r, n) {
            return new p(e, t, r, n)
        }
    }]).default
});


(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": []




    };
    var aa, ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = { lf: !0 },
                fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.lf;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var ia = ca,
        ja = this || self,
        la = /^[\w+/_-]+[=]{0,2}$/,
        ma = null;
    var pa = function() {},
        qa = function(a) { return "function" == typeof a },
        g = function(a) { return "string" == typeof a },
        ra = function(a) { return "number" == typeof a && !isNaN(a) },
        ua = function(a) { return "[object Array]" == Object.prototype.toString.call(Object(a)) },
        r = function(a, b) {
            if (Array.prototype.indexOf) { var c = a.indexOf(b); return "number" == typeof c ? c : -1 }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        va = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        wa = function(a, b) {
            if (!ra(a) ||
                !ra(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ya = function(a, b) {
            for (var c = new xa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        za = function(a, b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Aa = function(a) { return Math.round(Number(a)) || 0 },
        Ba = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Ca = function(a) {
            var b = [];
            if (ua(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ea = function(a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        Fa = function() { return (new Date).getTime() },
        xa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    xa.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    xa.prototype.get = function(a) { return this.values[this.prefix + a] };
    var Ga = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Ha = function(a) {
            var b = !1;
            return function() {
                if (!b) try { a() } catch (c) {}
                b = !0
            }
        },
        Ia = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ka = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        La = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ma = function(a) {
            var b = [];
            za(a, function(c, d) { 10 > c.length && d && b.push(c) });
            return b.join(",")
        },
        Na = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b.push(d) : 2048 > d ? b.push(192 | d >> 6, 128 | d & 63) : 55296 > d || 57344 <= d ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        };
    /*
       jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Oa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Pa = function(a) { if (null == a) return String(a); var b = Oa.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Qa = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Ra = function(a) {
            if (!a || "object" != Pa(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Qa(a, "constructor") && !Qa(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Qa(a, b)
        },
        B = function(a, b) {
            var c = b || ("array" == Pa(a) ? [] : {}),
                d;
            for (d in a)
                if (Qa(a, d)) { var e = a[d]; "array" == Pa(e) ? ("array" != Pa(c[d]) && (c[d] = []), c[d] = B(e, c[d])) : Ra(e) ? (Ra(c[d]) || (c[d] = {}), c[d] = B(e, c[d])) : c[d] = e }
            return c
        };
    var qb;
    var rb = [],
        sb = [],
        tb = [],
        vb = [],
        wb = [],
        xb = {},
        yb, zb, Ab, Bb = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Cb = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = xb[c],
                e = {},
                f;
            for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[f]);
            return void 0 !== d ? d(e) : qb(c, e, b)
        },
        Eb = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Db(a[e], b, c));
            return d
        },
        Fb = function(a) { var b = a["function"]; if (!b) throw "Error: No function name given for function call."; var c = xb[b]; return c ? c.priorityOverride || 0 : 0 },
        Db = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Db(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = rb[f];
                        if (!h || b.Lc(h)) return;
                        c[f] = !0;
                        try {
                            var k = Eb(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Cb(k, b);
                            Ab && (d = Ab.Mf(d, k))
                        } catch (y) { b.te && b.te(y, Number(f)), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Db(a[l], b, c)] = Db(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var q = Db(a[n], b, c);
                            zb && (m = m || q === zb.ub);
                            d.push(q)
                        }
                        return zb && m ? zb.Pf(d) : d.join("");
                    case "escape":
                        d = Db(a[1], b, c);
                        if (zb && ua(a[1]) && "macro" === a[1][0] && zb.mg(a)) return zb.Jg(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Sa[a[u]] && (d = Sa[a[u]](d));
                        return d;
                    case "tag":
                        var p = a[1];
                        if (!vb[p]) throw Error("Unable to resolve tag reference " + p + ".");
                        return d = {
                            fe: a[2],
                            index: p
                        };
                    case "zb":
                        var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        t["function"] = a[1];
                        var v = Gb(t, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Gb = function(a, b, c) { try { return yb(Eb(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var Ib = function() { var a = function(b) { return { toString: function() { return b } } }; return { qd: a("convert_case_to"), rd: a("convert_false_to"), sd: a("convert_null_to"), td: a("convert_true_to"), ud: a("convert_undefined_to"), rh: a("debug_mode_metadata"), ra: a("function"), Qe: a("instance_name"), Ue: a("live_only"), We: a("malware_disabled"), Xe: a("metadata"), sh: a("original_vendor_template_id"), af: a("once_per_event"), Dd: a("once_per_load"), Ld: a("setup_tags"), Nd: a("tag_id"), Od: a("teardown_tags") } }();
    var Jb = null,
        Mb = function(a) {
            function b(q) { for (var u = 0; u < q.length; u++) d[q[u]] = !0 }
            var c = [],
                d = [];
            Jb = Kb(a);
            for (var e = 0; e < sb.length; e++) {
                var f = sb[e],
                    h = Lb(f);
                if (h) {
                    for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(f.block || [])
                } else null === h && b(f.block || [])
            }
            for (var m = [], n = 0; n < vb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        Lb = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) { var d = Jb(b[c]); if (0 === d) return !1; if (2 === d) return null }
            for (var e = a.unless || [], f = 0; f < e.length; f++) {
                var h = Jb(e[f]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Kb = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = Gb(tb[c], a)); return b[c] } };
    /*
       Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var D = window,
        F = document,
        fc = navigator,
        gc = F.currentScript && F.currentScript.src,
        hc = function(a, b) {
            var c = D[a];
            D[a] = void 0 === c ? b : c;
            return D[a]
        },
        ic = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        jc = function(a, b, c) {
            var d = F.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            ic(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ma) b: {
                var f = ja.document,
                    h = f.querySelector && f.querySelector("script[nonce]");
                if (h) { var k = h.nonce || h.getAttribute("nonce"); if (k && la.test(k)) { ma = k; break b } }
                ma = ""
            }
            e = ma;
            e && d.setAttribute("nonce", e);
            var l = F.getElementsByTagName("script")[0] || F.body || F.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        kc = function() { if (gc) { var a = gc.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 },
        lc = function(a, b) {
            var c = F.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = F.body && F.body.lastChild ||
                F.body || F.head;
            d.parentNode.insertBefore(c, d);
            ic(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        mc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        nc = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        oc = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        G = function(a) { D.setTimeout(a, 0) },
        qc = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        rc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        sc = function(a) {
            var b = F.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        tc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        uc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var wc = function(a) { return vc ? F.querySelectorAll(a) : null },
        xc = function(a, b) {
            if (!vc) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        yc = !1;
    if (F.querySelectorAll) try {
        var zc = F.querySelectorAll(":root");
        zc && 1 == zc.length && zc[0] == F.documentElement && (yc = !0)
    } catch (a) {}
    var vc = yc;
    var H = { qa: "_ee", nc: "event_callback", tb: "event_timeout", D: "gtag.config", X: "allow_ad_personalization_signals", oc: "restricted_data_processing", Qa: "allow_google_signals", Y: "cookie_expires", sb: "cookie_update", Ra: "session_duration", ca: "user_properties" };
    H.ad = "page_view";
    H.Qg = "user_engagement";
    H.ma = "purchase";
    H.Cb = "refund";
    H.Sa = "begin_checkout";
    H.Ab = "add_to_cart";
    H.Bb = "remove_from_cart";
    H.Ag = "view_cart";
    H.zd = "add_to_wishlist";
    H.Ta = "view_item";
    H.Pg = "view_promotion";
    H.Hg = "select_promotion";
    H.Cg = "click_item_list";
    H.Zc = "view_item_list";
    H.yd = "add_payment_info";
    H.yg = "add_shipping_info";
    H.Xg = "allow_custom_scripts";
    H.dh = "allow_display_features";
    H.gh = "allow_enhanced_conversions";
    H.Ud = "enhanced_conversions";
    H.Eb = "client_id";
    H.P = "cookie_domain";
    H.Fb = "cookie_name";
    H.Da = "cookie_path";
    H.aa = "currency";
    H.Hb = "custom_params";
    H.oh = "custom_map";
    H.md = "groups";
    H.Ea = "language";
    H.kh = "country";
    H.uh = "non_interaction";
    H.Ya = "page_location";
    H.Za = "page_referrer";
    H.jc = "page_title";
    H.$a = "send_page_view";
    H.oa = "send_to";
    H.kc = "session_engaged";
    H.Pb = "session_id";
    H.mc = "session_number";
    H.cf = "tracking_id";
    H.na = "linker";
    H.Ua = "accept_incoming";
    H.C = "domains";
    H.Xa = "url_position";
    H.Va = "decorate_forms";
    H.od = "phone_conversion_number";
    H.Wd = "phone_conversion_callback";
    H.Xd = "phone_conversion_css_class";
    H.Yd = "phone_conversion_options";
    H.Te = "phone_conversion_ids";
    H.Se = "phone_conversion_country_code";
    H.Ad = "aw_remarketing";
    H.Bd = "aw_remarketing_only";
    H.W = "value";
    H.Ve = "quantity";
    H.Ge = "affiliation";
    H.Td = "tax";
    H.Le = "shipping";
    H.gd = "list_name";
    H.Rd = "checkout_step";
    H.Qd = "checkout_option";
    H.Ie = "coupon";
    H.Je = "promotions";
    H.ab = "transaction_id";
    H.cb = "user_id";
    H.Ca = "conversion_linker";
    H.Aa = "conversion_cookie_prefix";
    H.S = "cookie_prefix";
    H.M = "items";
    H.Hd = "aw_merchant_id";
    H.Ed = "aw_feed_country";
    H.Gd = "aw_feed_language";
    H.Cd = "discount";
    H.Md = "disable_merchant_reported_purchases";
    H.ic = "new_customer";
    H.Kd = "customer_lifetime_value";
    H.qh = "dc_natural_search";
    H.ph = "dc_custom_params";
    H.df = "trip_type";
    H.Vd = "passengers";
    H.Pe = "method";
    H.Ze = "search_term";
    H.ih = "content_type";
    H.Re = "optimize_id";
    H.Me = "experiments";
    H.Nb = "google_signals";
    H.ld = "google_tld";
    H.Qb = "update";
    H.kd = "firebase_id";
    H.Lb = "ga_restrict_domain";
    H.hd = "event_settings";
    H.Ye = "screen_name";
    H.Oe = "_x_19";
    H.Ne = "_x_20";
    H.ia = "transport_url";
    H.ee = [H.X, H.Qa, H.oc, H.P, H.Y, H.Fb,
        H.Da, H.S, H.sb, H.Hb, H.nc, H.hd, H.tb, H.Lb, H.Nb, H.ld, H.md, H.na, H.oa, H.$a, H.Ra, H.Qb, H.ca, H.ia
    ];
    H.ae = [H.Ya, H.Za, H.jc, H.Ea, H.Ye, H.cb, H.kd];
    H.ef = [H.ma, H.Cb, H.Sa, H.Ab, H.Bb, H.Ag, H.zd, H.Ta, H.Pg, H.Hg, H.Zc, H.Cg, H.yd, H.yg];
    H.xd = [H.oa, H.Ad, H.Bd, H.Hb, H.$a, H.Ea, H.W, H.aa, H.ab, H.cb, H.Ca, H.Aa, H.S, H.P, H.Y, H.Ya, H.Za, H.od, H.Wd, H.Xd, H.Yd, H.M, H.Hd, H.Ed, H.Gd, H.Cd, H.Md, H.ic, H.Kd, H.X, H.oc, H.Qb, H.kd, H.Ud, H.ia];
    H.de = [H.X, H.Qa, H.sb];
    H.ke = [H.Y, H.tb, H.Ra];
    var Pc = /[A-Z]+/,
        Qc = /\s/,
        Rc = function(a) {
            if (g(a) && (a = Ea(a), !Qc.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Pc.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], o: d }
                    }
                }
            }
        },
        Tc = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Rc(a[c]);
                d && (b[d.id] = d)
            }
            Sc(b);
            var e = [];
            za(b, function(f, h) { e.push(h) });
            return e
        };

    function Sc(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.o[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Uc = {},
        Vc = null,
        Wc = Math.random();
    Uc.s = "UA-62593004-2";
    Uc.yb = "1t0";
    var Xc = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0, __paused: !0, __tg: !0 },
        Yc = "www.googletagmanager.com/gtm.js";
    Yc = "www.googletagmanager.com/gtag/js";
    var Zc = Yc,
        $c = null,
        bd = null,
        cd = null,
        dd = "//www.googletagmanager.com/a?id=" + Uc.s + "&cv=1",
        ed = {},
        fd = {},
        gd = function() {
            var a = Vc.sequence || 0;
            Vc.sequence = a + 1;
            return a
        };
    var hd = {},
        I = function(a, b) {
            hd[a] = hd[a] || [];
            hd[a][b] = !0
        },
        id = function(a) { for (var b = [], c = hd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") };
    var jd = function() { return "&tc=" + vb.filter(function(a) { return a }).length },
        md = function() { kd || (kd = D.setTimeout(ld, 500)) },
        ld = function() {
            kd && (D.clearTimeout(kd), kd = void 0);
            void 0 === nd || od[nd] && !pd && !qd || (rd[nd] || sd.og() || 0 >= td-- ? (I("GTM", 1), rd[nd] = !0) : (sd.Sg(), mc(ud()), od[nd] = !0, vd = wd = qd = pd = ""))
        },
        ud = function() {
            var a = nd;
            if (void 0 === a) return "";
            var b = id("GTM"),
                c = id("TAGGING");
            return [xd, od[a] ? "" : "&es=1", yd[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", jd(), pd, qd, wd, vd, "&z=0"].join("")
        },
        zd = function() {
            return [dd, "&v=3&t=t", "&pid=" +
                wa(), "&rv=" + Uc.yb
            ].join("")
        },
        Ad = "0.005000" > Math.random(),
        xd = zd(),
        Bd = function() { xd = zd() },
        od = {},
        pd = "",
        qd = "",
        vd = "",
        wd = "",
        nd = void 0,
        yd = {},
        rd = {},
        kd = void 0,
        sd = function(a, b) {
            var c = 0,
                d = 0;
            return {
                og: function() {
                    if (c < a) return !1;
                    Fa() - d >= b && (c = 0);
                    return c >= a
                },
                Sg: function() {
                    Fa() - d >= b && (c = 0);
                    c++;
                    d = Fa()
                }
            }
        }(2, 1E3),
        td = 1E3,
        Cd = function(a, b) {
            if (Ad && !rd[a] && nd !== a) {
                ld();
                nd = a;
                vd = pd = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                yd[a] = "&e=" + c + "&eid=" + a;
                md()
            }
        },
        Dd = function(a, b, c) {
            if (Ad && !rd[a] &&
                b) {
                a !== nd && (ld(), nd = a);
                var d, e = String(b[Ib.ra] || "").replace(/_/g, "");
                0 === e.indexOf("cvt") && (e = "cvt");
                d = e;
                var f = c + d;
                pd = pd ? pd + "." + f : "&tr=" + f;
                var h = b["function"];
                if (!h) throw Error("Error: No function name given for function call.");
                var k = (xb[h] ? "1" : "2") + d;
                vd = vd ? vd + "." + k : "&ti=" + k;
                md();
                2022 <= ud().length && ld()
            }
        },
        Ed = function(a, b, c) {
            if (Ad && !rd[a]) {
                a !== nd && (ld(), nd = a);
                var d = c + b;
                qd = qd ? qd +
                    "." + d : "&epr=" + d;
                md();
                2022 <= ud().length && ld()
            }
        };
    var Fd = {},
        Gd = new xa,
        Hd = {},
        Id = {},
        Ld = {
            name: "dataLayer",
            set: function(a, b) {
                B(La(a, b), Hd);
                Jd()
            },
            get: function(a) { return Kd(a, 2) },
            reset: function() {
                Gd = new xa;
                Hd = {};
                Jd()
            }
        },
        Kd = function(a, b) {
            if (2 != b) {
                var c = Gd.get(a);
                if (Ad) {
                    var d = Md(a);
                    c !== d && I("GTM", 5)
                }
                return c
            }
            return Md(a)
        },
        Md = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                f = void 0;
            var h = function(k, l) {
                for (var m = 0; void 0 !== k && m < d.length; m++) {
                    if (null === k) return !1;
                    k = k[d[m]]
                }
                return void 0 !== k || 1 < m ? k : l.length ? h(Nd(l.pop()), l) : Od(d)
            };
            e = !0;
            f = h(Hd.eventModel, [b, c]);
            return e ? f : Od(d)
        },
        Od = function(a) {
            for (var b = Hd, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var Nd = function(a) { if (a) { var b = Od(["gtag", "targets", a]); return Ra(b) ? b : void 0 } },
        Pd = function(a, b) {
            function c(f) { f && za(f, function(h) { d[h] = null }) }
            var d = {};
            c(Hd);
            delete d.eventModel;
            c(Nd(a));
            c(Nd(b));
            c(Hd.eventModel);
            var e = [];
            za(d, function(f) { e.push(f) });
            return e
        };
    var Qd = function(a, b) { Id.hasOwnProperty(a) || (Gd.set(a, b), B(La(a, b), Hd), Jd()) },
        Jd = function(a) {
            za(Id, function(b, c) {
                Gd.set(b, c);
                B(La(b, void 0), Hd);
                B(La(b, c), Hd);
                a && delete Id[b]
            })
        },
        Rd = function(a, b, c) { Fd[a] = Fd[a] || {}; var d = 1 !== c ? Md(b) : Gd.get(b); "array" === Pa(d) || "object" === Pa(d) ? Fd[a][b] = B(d) : Fd[a][b] = d },
        Sd = function(a, b) { if (Fd[a]) return Fd[a][b] },
        Td = function(a, b) { Fd[a] && delete Fd[a][b] };
    var Ud = function() { var a = !1; return a };
    var Q = function(a, b, c, d) { return (2 === Vd() || d || "http:" != D.location.protocol ? a : b) + c },
        Vd = function() {
            var a = kc(),
                b;
            if (1 === a) a: {
                var c = Zc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = F.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Xd = function(a, b, c) {
            if (D[a.functionName]) return b.Rc && G(b.Rc), D[a.functionName];
            var d = Wd();
            D[a.functionName] = d;
            if (a.Db)
                for (var e = 0; e < a.Db.length; e++) D[a.Db[e]] = D[a.Db[e]] || Wd();
            a.Ob && void 0 === D[a.Ob] && (D[a.Ob] = c);
            jc(Q("https://", "http://", a.bd), b.Rc, b.Dg);
            return d
        },
        Wd = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Yd = { functionName: "_googWcmImpl", Ob: "_googWcmAk", bd: "www.gstatic.com/wcm/loader.js" },
        Zd = { functionName: "_gaPhoneImpl", Ob: "ga_wpid", bd: "www.gstatic.com/gaphone/loader.js" },
        $d = { He: "", hf: "1" },
        ae = { functionName: "_googCallTrackingImpl", Db: [Zd.functionName, Yd.functionName], bd: "www.gstatic.com/call-tracking/call-tracking_" + ($d.He || $d.hf) + ".js" },
        be = {},
        ce = function(a, b, c, d) {
            I("GTM", 22);
            if (c) {
                d = d || {};
                var e = Xd(Yd, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.da && (f.autoreplace = c);
                e(2, d.da, f, c, 0, new Date, d.options)
            }
        },
        de = function(a, b, c) {
            I("GTM", 23);
            if (b) {
                c = c || {};
                var d = Xd(Zd, c, a),
                    e = {};
                void 0 !== c.da ? e.receiver = c.da : e.replace = b;
                e.ga_wpid = a;
                e.destination = b;
                d(2, new Date,
                    e)
            }
        },
        ee = function(a, b, c, d) {
            I("GTM", 21);
            if (b && c) {
                d = d || {};
                for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: new Date }, f = 0; f < a.length; f++) {
                    var h = a[f];
                    be[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.o.length ? (e.adData = { ak: h.o[0], cl: h.o[1] }, be[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = { gaWpid: h.containerId }, be[h.id] = !0))
                }(e.gaData || e.adData) && Xd(ae, d)(d.da, e, d.options)
            }
        },
        fe = function() {
            var a = !1;
            return a
        },
        ge = function(a, b) {
            if (a)
                if (Ud()) {} else {
                    if (g(a)) {
                        var c = Rc(a);
                        if (!c) return;
                        a = c
                    }
                    var d = function(x) { return b ? b.getWithConfig(x) : Md(x, a.containerId, a.id) },
                        e = void 0,
                        f = !1,
                        h = d(H.Te);
                    if (h && ua(h)) {
                        e = [];
                        for (var k = 0; k < h.length; k++) {
                            var l = Rc(h[k]);
                            l && (e.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (f = !0))
                        }
                    }
                    if (!e || f) {
                        var m = d(H.od),
                            n;
                        if (m) {
                            ua(m) ? n = m : n = [m];
                            var q = d(H.Wd),
                                u = d(H.Xd),
                                p = d(H.Yd),
                                t = d(H.Se),
                                v = q || u,
                                w = 1;
                            "UA" !== a.prefix || e || (w = 5);
                            for (var y = 0; y < n.length; y++) y < w && (e ? ee(e, n[y], t, { da: v, options: p }) : "AW" === a.prefix && a.o[1] ? fe() ? ee([a], n[y], t || "US", { da: v, options: p }) : ce(a.o[0], a.o[1], n[y], { da: v, options: p }) : "UA" === a.prefix && (fe() ? ee([a], n[y], t || "US", { da: v }) : de(a.containerId, n[y], { da: v })))
                        }
                    }
                }
        };
    var je = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        ke = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        le = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        me = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var oe = function(a) {
            var b = Kd("gtm.whitelist");
            b && I("GTM", 9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Ka(Ca(b), ke),
                d = Kd("gtm.blacklist");
            d || (d = Kd("tagTypeBlacklist")) && I("GTM", 3);
            d ?
                I("GTM", 8) : d = [];
            ne() && (d = Ca(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= r(Ca(d), "google") && I("GTM", 2);
            var e = d && Ka(Ca(d), le),
                f = {};
            return function(h) {
                var k = h && h[Ib.ra];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var l = fd[k] || [],
                    m = a(k, l);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > r(c, k))
                            if (l && 0 < l.length)
                                for (var q = 0; q <
                                    l.length; q++) {
                                    if (0 > r(c, l[q])) {
                                        I("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else { n = !1; break a }
                        n = !0
                    }
                    m = n
                }
                var u = !1;
                if (d) {
                    var p = 0 <= r(e, k);
                    if (p) u = p;
                    else {
                        var t = ya(e, l || []);
                        t && I("GTM", 10);
                        u = t
                    }
                }
                var v = !m || u;
                v || !(0 <= r(l, "sandboxedScripts")) || c && -1 !== r(c, "sandboxedScripts") || (v = ya(e, me));
                return f[k] = v
            }
        },
        ne = function() { return je.test(D.location && D.location.hostname) };
    var pe = {
        Mf: function(a, b) {
            b[Ib.qd] && "string" === typeof a && (a = 1 == b[Ib.qd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Ib.sd) && null === a && (a = b[Ib.sd]);
            b.hasOwnProperty(Ib.ud) && void 0 === a && (a = b[Ib.ud]);
            b.hasOwnProperty(Ib.td) && !0 === a && (a = b[Ib.td]);
            b.hasOwnProperty(Ib.rd) && !1 === a && (a = b[Ib.rd]);
            return a
        }
    };
    var qe = { active: !0, isWhitelisted: function() { return !0 } },
        re = function(a) { var b = Vc.zones;!b && a && (b = Vc.zones = a()); return b };
    var se = function() {};
    var te = !1,
        ue = 0,
        ve = [];

    function we(a) {
        if (!te) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) { te = !0; for (var e = 0; e < ve.length; e++) G(ve[e]) }
            ve.push = function() { for (var f = 0; f < arguments.length; f++) G(arguments[f]); return 0 }
        }
    }

    function xe() { if (!te && 140 > ue) { ue++; try { F.documentElement.doScroll("left"), we() } catch (a) { D.setTimeout(xe, 50) } } }
    var ye = function(a) { te ? a() : ve.push(a) };
    var ze = {},
        Ae = {},
        Be = function(a, b, c, d) {
            if (!Ae[a] || Xc[b] || "__zone" === b) return -1;
            var e = {};
            Ra(d) && (e = B(d, e));
            e.id = c;
            e.status = "timeout";
            return Ae[a].tags.push(e) - 1
        },
        Ce = function(a, b, c, d) {
            if (Ae[a]) {
                var e = Ae[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function De(a) {
        for (var b = ze[a] || [], c = 0; c < b.length; c++) b[c]();
        ze[a] = { push: function(d) { d(Uc.s, Ae[a]) } }
    }
    var Ge = function(a, b, c) {
            Ae[a] = { tags: [] };
            qa(b) && Ee(a, b);
            c && D.setTimeout(function() { return De(a) }, Number(c));
            return Fe(a)
        },
        Ee = function(a, b) {
            ze[a] = ze[a] || [];
            ze[a].push(Ha(function() { return G(function() { b(Uc.s, Ae[a]) }) }))
        };

    function Fe(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return Ha(function() {
                    b++;
                    d && b >= c && De(a)
                })
            },
            yf: function() {
                d = !0;
                b >= c && De(a)
            }
        }
    };
    var He = function() {
        function a(d) { return !ra(d) || 0 > d ? 0 : d }
        if (!Vc._li && D.performance && D.performance.timing) {
            var b = D.performance.timing.navigationStart,
                c = ra(Ld.get("gtm.start")) ? Ld.get("gtm.start") : 0;
            Vc._li = { cst: a(c - b), cbt: a(bd - b) }
        }
    };
    var Le = {},
        Me = function() { return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject] },
        Ne = !1;
    var Oe = function(a) {
            D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
            var b = D.GoogleAnalyticsObject;
            if (D[b]) D.hasOwnProperty(b) || I("GTM", 12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                D[b] = c
            }
            He();
            return D[b]
        },
        Pe = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = Me();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var Re = function(a) {},
        Qe = function() { return D.GoogleAnalyticsObject || "ga" };
    var Te = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Ue = /:[0-9]+$/,
        Ve = function(a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var f = d[e].split("="); if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) { var h = f.slice(1).join("="); return c ? h : decodeURIComponent(h).replace(/\+/g, " ") } } },
        Ye = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = We(a.protocol) || We(D.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : D.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || D.location.hostname).replace(Ue, "").toLowerCase());
            var f = b,
                h, k = We(a.protocol);
            f && (f = String(f).toLowerCase());
            switch (f) {
                case "url_no_fragment":
                    h = Xe(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(Ue, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || I("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= r(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = Ve(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        We = function(a) { return a ? a.replace(":", "").toLowerCase() : "" },
        Xe = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Ze = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || I("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Ue, "");
            return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port }
        };

    function df(a, b, c, d) {
        var e = vb[a],
            f = ef(a, b, c, d);
        if (!f) return null;
        var h = Db(e[Ib.Ld], c, []);
        if (h && h.length) {
            var k = h[0];
            f = df(k.index, { B: f, w: 1 === k.fe ? b.terminate : f, terminate: b.terminate }, c, d)
        }
        return f
    }

    function ef(a, b, c, d) {
        function e() {
            if (f[Ib.We]) k();
            else {
                var w = Eb(f, c, []),
                    y = Be(c.id, String(f[Ib.ra]), Number(f[Ib.Nd]), w[Ib.Xe]),
                    x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var A = Fa() - C;
                        Dd(c.id, vb[a], "5");
                        Ce(c.id, y, "success", A);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var A = Fa() - C;
                        Dd(c.id, vb[a], "6");
                        Ce(c.id, y, "failure", A);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Dd(c.id, f, "1");
                var z = function() {
                    var A = Fa() - C;
                    Dd(c.id, f, "7");
                    Ce(c.id, y, "exception", A);
                    x || (x = !0, k())
                };
                var C = Fa();
                try { Cb(w, c) } catch (A) { z(A) }
            }
        }
        var f = vb[a],
            h = b.B,
            k = b.w,
            l = b.terminate;
        if (c.Lc(f)) return null;
        var m = Db(f[Ib.Od], c, []);
        if (m && m.length) {
            var n = m[0],
                q = df(n.index, { B: h, w: k, terminate: l }, c, d);
            if (!q) return null;
            h = q;
            k = 2 === n.fe ? l : q
        }
        if (f[Ib.Dd] || f[Ib.af]) {
            var u = f[Ib.Dd] ? wb : c.ah,
                p = h,
                t = k;
            if (!u[a]) {
                e = Ha(e);
                var v = ff(a, u, e);
                h = v.B;
                k = v.w
            }
            return function() { u[a](p, t) }
        }
        return e
    }

    function ff(a, b, c) {
        var d = [],
            e = [];
        b[a] = gf(d, e, c);
        return { B: function() { b[a] = hf; for (var f = 0; f < d.length; f++) d[f]() }, w: function() { b[a] = jf; for (var f = 0; f < e.length; f++) e[f]() } }
    }

    function gf(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function hf(a) { a() }

    function jf(a, b) { b() };
    var mf = function(a, b) {
        for (var c = [], d = 0; d < vb.length; d++)
            if (a.kb[d]) {
                var e = vb[d];
                var f = b.add();
                try {
                    var h = df(d, { B: f, w: f, terminate: f }, a, d);
                    h ? c.push({ Ee: d, ze: Fb(e), Xf: h }) : (kf(d, a), f())
                } catch (l) { f() }
            }
        b.yf();
        c.sort(lf);
        for (var k = 0; k < c.length; k++) c[k].Xf();
        return 0 < c.length
    };

    function lf(a, b) {
        var c, d = b.ze,
            e = a.ze;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Ee,
                k = b.Ee;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }

    function kf(a, b) {
        if (!Ad) return;
        var c = function(d) {
            var e = b.Lc(vb[d]) ? "3" : "4",
                f = Db(vb[d][Ib.Ld], b, []);
            f && f.length && c(f[0].index);
            Dd(b.id, vb[d], e);
            var h = Db(vb[d][Ib.Od], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var nf = !1,
        of = function(a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (nf) return !1;
                nf = !0
            }
            Cd(a, b);
            var f = Ge(a, d, e);
            Rd(a, "event", 1);
            Rd(a, "ecommerce", 1);
            Rd(a, "gtm");
            var h = { id: a, name: b, Lc: oe(c), kb: [], ah: [], te: function() { I("GTM", 6) } };
            h.kb = Mb(h);
            var k = mf(h, f);
            "gtm.js" !== b && "gtm.sync" !== b || Re(Uc.s);
            if (!k) return k;
            for (var l = 0; l < h.kb.length; l++)
                if (h.kb[l]) { var m = vb[l]; if (m && !Xc[String(m[Ib.ra])]) return !0 }
            return !1
        };
    var pf = function(a, b) {
        var c = Bb(a, b);
        vb.push(c);
        return vb.length - 1
    };
    var qf = /^https?:\/\/www\.googletagmanager\.com/;

    function rf() { var a; return a }

    function tf(a, b) {}

    function sf(a) { 0 !== a.indexOf("http://") && 0 !== a.indexOf("https://") && (a = "https://" + a); "/" === a[a.length - 1] && (a = a.substring(0, a.length - 1)); return a }

    function uf() { var a = !1; return a };
    var vf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.h = {};
            this.globalConfig = {};
            this.B = function() {};
            this.w = function() {}
        },
        wf = function(a) {
            var b = new vf;
            b.eventModel = a;
            return b
        },
        xf = function(a, b) { a.targetConfig = b; return a },
        yf = function(a, b) { a.containerConfig = b; return a },
        zf = function(a, b) { a.h = b; return a },
        Af = function(a, b) { a.globalConfig = b; return a },
        Bf = function(a, b) { a.B = b; return a },
        Cf = function(a, b) { a.w = b; return a };
    vf.prototype.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.h[a]) return this.h[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a] };
    var Df = function(a) {
        function b(e) { za(e, function(f) { c[f] = null }) }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        za(c, function(e) { d.push(e) });
        return d
    };
    var Ef = {},
        Ff = ["G"];
    Ef.Fe = "";
    var Gf = Ef.Fe.split(",");

    function Hf() { var a = Vc; return a.gcq = a.gcq || new If }
    var Jf = function(a, b, c) { Hf().register(a, b, c) },
        Kf = function(a, b, c, d) { Hf().push("event", [b, a], c, d) },
        Lf = function(a, b) { Hf().push("config", [a], b) },
        Mf = {},
        Nf = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.i = {};
            this.m = null;
            this.h = !1
        },
        Of = function(a, b, c, d, e) {
            this.type = a;
            this.m = b;
            this.N = c || "";
            this.h = d;
            this.i = e
        },
        If = function() {
            this.i = {};
            this.m = {};
            this.h = []
        },
        Pf = function(a, b) { var c = Rc(b); return a.i[c.containerId] = a.i[c.containerId] || new Nf },
        Qf = function(a, b, c, d) {
            if (d.N) {
                var e = Pf(a, d.N),
                    f = e.m;
                if (f) {
                    var h = B(c),
                        k = B(e.targetConfig[d.N]),
                        l = B(e.containerConfig),
                        m = B(e.i),
                        n = B(a.m),
                        q = Kd("gtm.uniqueEventId"),
                        u = Rc(d.N).prefix,
                        p = Cf(Bf(Af(zf(yf(xf(wf(h), k), l), m), n), function() { Ed(q, u, "2"); }), function() { Ed(q, u, "3"); });
                    try {
                        Ed(q, u, "1");
                        f(d.N, b, d.m, p)
                    } catch (t) {
                        Ed(q, u, "4");
                    }
                }
            }
        };
    If.prototype.register = function(a, b, c) {
        if (3 !== Pf(this, a).status) {
            Pf(this, a).m = b;
            Pf(this, a).status = 3;
            c && (Pf(this, a).i = c);
            var d = Rc(a),
                e = Mf[d.containerId];
            if (void 0 !== e) {
                var f = Vc[d.containerId].bootstrap,
                    h = d.prefix.toUpperCase();
                Vc[d.containerId]._spx && (h = h.toLowerCase());
                var k = Kd("gtm.uniqueEventId"),
                    l = h,
                    m = Fa() - f;
                if (Ad && !rd[k]) {
                    k !== nd && (ld(), nd = k);
                    var n = l + "." + Math.floor(f - e) + "." + Math.floor(m);
                    wd = wd ? wd + "," + n : "&cl=" + n
                }
                delete Mf[d.containerId]
            }
            this.flush()
        }
    };
    If.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Fa() / 1E3);
        if (c) {
            var f = Rc(c),
                h;
            if (h = f) {
                var k;
                if (k = 1 === Pf(this, c).status) a: { var l = f.prefix;k = !0 }
                h = k
            }
            if (h && (Pf(this, c).status = 2, this.push("require", [], f.containerId), Mf[f.containerId] = Fa(), !Ud())) {
                var m = encodeURIComponent(f.containerId),
                    n = ("http:" != D.location.protocol ? "https:" : "http:") +
                    "//www.googletagmanager.com";
                jc(n + "/gtag/js?id=" + m + "&l=dataLayer&cx=c")
            }
        }
        this.h.push(new Of(a, e, c, b, d));
        d || this.flush()
    };
    If.prototype.flush = function(a) {
        for (var b = this; this.h.length;) {
            var c = this.h[0];
            if (c.i) c.i = !1, this.h.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Pf(this, c.N).status && !a) return;
                    break;
                case "set":
                    za(c.h[0], function(l, m) { B(La(l, m), b.m) });
                    break;
                case "config":
                    var d = c.h[0],
                        e = !!d[H.Qb];
                    delete d[H.Qb];
                    var f = Pf(this, c.N),
                        h = Rc(c.N),
                        k = h.containerId === h.id;
                    e || (k ? f.containerConfig = {} : f.targetConfig[c.N] = {});
                    f.h && e || Qf(this, H.D, d, c);
                    f.h = !0;
                    delete d[H.qa];
                    k ? B(d, f.containerConfig) : B(d, f.targetConfig[c.N]);
                    break;
                case "event":
                    Qf(this, c.h[1], c.h[0], c)
            }
            this.h.shift()
        }
    };
    var Rf = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), f = 0; f < e.length; f++) {
                var h = e[f].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        Uf = function(a, b, c, d) {
            var e = Sf(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = Tf(e, function(f) { return f.Jb }, b);
                if (1 === e.length) return e[0].id;
                e = Tf(e, function(f) { return f.lb }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function Wf(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= Rf(b, e).indexOf(c)
    }
    var Zf = function(a, b, c, d, e, f) {
        d = d || "auto";
        var h = { path: c || "/" };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                f && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var q = void 0,
                u = void 0,
                p;
            for (p in h)
                if (h.hasOwnProperty(p)) {
                    var t = h[p];
                    if (null != t) switch (p) {
                        case "secure":
                            t && (m += "; secure");
                            break;
                        case "domain":
                            q = t;
                            break;
                        default:
                            "path" == p && (u = t), "expires" == p && t instanceof Date && (t =
                                t.toUTCString()), m += "; " + p + "=" + t
                    }
                }
            if ("auto" === q) {
                for (var v = Xf(), w = 0; w < v.length; ++w) { var y = "none" != v[w] ? v[w] : void 0; if (!Yf(y, u) && Wf(m + (y ? "; domain=" + y : ""), a, l)) { k = !0; break a } }
                k = !1
            } else q && "none" != q && (m += "; domain=" + q),
            k = !Yf(q, u) && Wf(m, a, l)
        }
        return k
    };

    function Tf(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Sf(a, b) {
        for (var c = [], d = Rf(a), e = 0; e < d.length; e++) {
            var f = d[e].split("."),
                h = f.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = f.shift();
                k && (k = k.split("-"), c.push({ id: f.join("."), Jb: 1 * k[0] || 1, lb: 1 * k[1] || 1 }))
            }
        }
        return c
    }
    var $f = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ag = /(^|\.)doubleclick\.net$/i,
        Yf = function(a, b) { return ag.test(document.location.hostname) || "/" === b && $f.test(a) },
        Xf = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            ag.test(e) || $f.test(e) || a.push("none");
            return a
        };
    var bg = "G".split(/,/),
        cg = !1;
    var dg = null,
        eg = {},
        fg = {},
        gg;

    function hg(a, b) {
        var c = { event: a };
        b && (c.eventModel = B(b), b[H.nc] && (c.eventCallback = b[H.nc]), b[H.tb] && (c.eventTimeout = b[H.tb]));
        return c
    }
    var ig = function() {
            dg = dg || !Vc.gtagRegistered;
            Vc.gtagRegistered = !0;
            return dg
        },
        jg = function(a) {
            if (void 0 === fg[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = pf("gtagua", { trackingId: a.id });
                        break;
                    case "AW":
                        b = pf("gtagaw", { conversionId: a });
                        break;
                    case "DC":
                        b = pf("gtagfl", { targetId: a.id });
                        break;
                    case "GF":
                        b = pf("gtaggf", { conversionId: a });
                        break;
                    case "G":
                        b = pf("get", { trackingId: a.id, isAutoTag: !0 });
                        break;
                    case "HA":
                        b = pf("gtagha", { conversionId: a });
                        break;
                    case "GP":
                        b = pf("gtaggp", { conversionId: a.id });
                        break;
                    default:
                        return
                }
                if (!gg) {
                    var c =
                        Bb("v", { name: "send_to", dataLayerVersion: 2 });
                    rb.push(c);
                    gg = ["macro", rb.length - 1]
                }
                var d = { arg0: gg, arg1: a.id, ignore_case: !1 };
                d[Ib.ra] = "_lc";
                tb.push(d);
                var e = { "if": [tb.length - 1], add: [b] };
                e["if"] && (e.add || e.block) && sb.push(e);
                fg[a.id] = b
            }
        },
        kg = function(a) {
            za(eg, function(b, c) {
                var d = r(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        lg = Ha(function() {}),
        mg = function(a) {
            if (a.containerId !== Uc.s && "G" !== a.prefix) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = 14;
                        break;
                    case "AW":
                        b = 15;
                        break;
                    case "DC":
                        b = 16;
                        break;
                    default:
                        b = 17
                }
                I("GTM", b)
            }
        };
    var ng = {
            config: function(a) {
                var b = a[2] || {};
                if (2 > a.length || !g(a[1]) || !Ra(b)) return;
                var c = Rc(a[1]);
                if (!c) return;
                kg(c.id);
                var d = c.id,
                    e = b[H.md] || "default";
                e = e.toString().split(",");
                for (var f = 0; f < e.length; f++) eg[e[f]] = eg[e[f]] || [], eg[e[f]].push(d);
                delete b[H.md];
                B(b);
                if (ig()) {
                    if (cg && -1 !== r(bg, c.prefix)) {
                        "G" === c.prefix && (b[H.qa] = !0);
                        Lf(b, c.id);
                        return
                    }
                    jg(c);
                    mg(c)
                } else lg();
                Qd("gtag.targets." + c.id, void 0);
                Qd("gtag.targets." + c.id, B(b));
                var h = {};
                h[H.oa] = c.id;
                return hg(H.D, h);
            },
            event: function(a) {
                var b = a[1];
                if (g(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ra(a[2]) && void 0 != a[2]) return;
                        c = a[2]
                    }
                    var d = hg(b, c);
                    var e;
                    var f = c && c[H.oa];
                    void 0 === f && (f = Kd(H.oa, 2), void 0 === f && (f = "default"));
                    if (g(f) || ua(f)) {
                        for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h.length; l++) 0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(eg[h[l]] || []);
                        e = Tc(k)
                    } else e = void 0;
                    var m = e;
                    if (!m) return;
                    var n = ig();
                    n || lg();
                    for (var q = [], u = 0; n && u < m.length; u++) {
                        var p = m[u];
                        mg(p);
                        if (cg && -1 !== r(bg, p.prefix)) {
                            var t = B(c);
                            "G" === p.prefix && (t[H.qa] = !0);
                            Kf(b, t, p.id)
                        } else jg(p);
                        q.push(p.id)
                    }
                    B(c, { event: b });
                    d.eventModel = d.eventModel || {};
                    0 < m.length ? d.eventModel[H.oa] = q.join() : delete d.eventModel[H.oa];
                    return d
                }
            },
            js: function(a) { if (2 == a.length && a[1].getTime) return { event: "gtm.js", "gtm.start": a[1].getTime() } },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Ra(a[1]) ? b = B(a[1]) : 3 == a.length && g(a[1]) && (b = {}, Ra(a[2]) || ua(a[2]) ? b[a[1]] = B(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (ig()) {
                        var c = B(b);
                        Hf().push("set", [c])
                    }
                    B(b);
                    b._clear = !0;
                    return b
                }
            }
        },
        og = { policy: !0 };
    var pg = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) { d = !1; break }
                d && (c.end(), c.end = null)
            }
        },
        rg = function(a) {
            var b = qg(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var sg = !1,
        tg = [];

    function ug() { if (!sg) { sg = !0; for (var a = 0; a < tg.length; a++) G(tg[a]) } }
    var vg = function(a) { sg ? G(a) : tg.push(a) };
    var Kg = function(a) {
        if (Jg(a)) return a;
        this.h = a
    };
    Kg.prototype.dg = function() { return this.h };
    var Jg = function(a) { return !a || "object" !== Pa(a) || Ra(a) ? !1 : "getUntrustedUpdateValue" in a };
    Kg.prototype.getUntrustedUpdateValue = Kg.prototype.dg;
    var Lg = [],
        Mg = !1,
        Ng = function(a) { return D["dataLayer"].push(a) },
        Og = function(a) {
            var b = Vc["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {++d === c && a() }
        };

    function Pg(a) {
        var b = a._clear;
        za(a, function(f, h) { "_clear" !== f && (b && Qd(f, void 0), Qd(f, h)) });
        $c || ($c = a["gtm.start"]);
        var c = a.event;
        if (!c) return !1;
        var d = a["gtm.uniqueEventId"];
        d || (d = gd(), a["gtm.uniqueEventId"] = d, Qd("gtm.uniqueEventId", d));
        cd = c;
        var e =
            Qg(a);
        cd = null;
        switch (c) {
            case "gtm.init":
                I("GTM", 19), e && I("GTM", 20)
        }
        return e
    }

    function Qg(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = Vc.zones;
        d = e ? e.checkState(Uc.s, c) : qe;
        return d.active ? of(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }

    function Rg() {
        for (var a = !1; !Mg && 0 < Lg.length;) {
            Mg = !0;
            delete Hd.eventModel;
            Jd();
            var b = Lg.shift();
            if (null != b) {
                var c = Jg(b);
                if (c) {
                    var d = b;
                    b = Jg(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
                        var h = e[f],
                            k = Kd(h, 1);
                        if (ua(k) || Ra(k)) k = B(k);
                        Id[h] = k
                    }
                }
                try {
                    if (qa(b)) try { b.call(Ld) } catch (v) {} else if (ua(b)) {
                        var l = b;
                        if (g(l[0])) {
                            var m =
                                l[0].split("."),
                                n = m.pop(),
                                q = l.slice(1),
                                u = Kd(m.join("."), 2);
                            if (void 0 !== u && null !== u) try { u[n].apply(u, q) } catch (v) {}
                        }
                    } else {
                        var p = b;
                        if (p && ("[object Arguments]" == Object.prototype.toString.call(p) || Object.prototype.hasOwnProperty.call(p, "callee"))) {
                            a: {
                                if (b.length && g(b[0])) { var t = ng[b[0]]; if (t && (!c || !og[b[0]])) { b = t(b); break a } }
                                b = void 0
                            }
                            if (!b) { Mg = !1; continue }
                        }
                        a = Pg(b) || a
                    }
                } finally { c && Jd(!0) }
            }
            Mg = !1
        }
        return !a
    }

    function Sg() { var a = Rg(); try { pg(D["dataLayer"], Uc.s) } catch (b) {} return a }
    var Ug = function() {
            var a = hc("dataLayer", []),
                b = hc("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            ye(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
            vg(function() { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < Vc.SANDBOXED_JS_SEMAPHORE) { d = []; for (var e = 0; e < arguments.length; e++) d[e] = new Kg(arguments[e]) } else d = [].slice.call(arguments, 0);
                var f = c.apply(a, d);
                Lg.push.apply(Lg, d);
                if (300 <
                    this.length)
                    for (I("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof f || f;
                return Rg() && h
            };
            Lg.push.apply(Lg, a.slice(0));
            Tg() && G(Sg)
        },
        Tg = function() { var a = !0; return a };
    var Vg = {};
    Vg.ub = new String("undefined");
    var Wg = function(a) { this.h = function(b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Vg.ub ? b : a[d]); return c.join("") } };
    Wg.prototype.toString = function() { return this.h("undefined") };
    Wg.prototype.valueOf = Wg.prototype.toString;
    Vg.jf = Wg;
    Vg.xc = {};
    Vg.Pf = function(a) { return new Wg(a) };
    var Xg = {};
    Vg.Tg = function(a, b) {
        var c = gd();
        Xg[c] = [a, b];
        return c
    };
    Vg.be = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Xg[c];
            if (d && "function" === typeof d[b]) d[b]();
            Xg[c] = void 0
        }
    };
    Vg.mg = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Vg.Jg = function(a) {
        if (a === Vg.ub) return a;
        var b = gd();
        Vg.xc[b] = a;
        return 'google_tag_manager["' + Uc.s + '"].macro(' + b + ")"
    };
    Vg.xg = function(a, b, c) { a instanceof Vg.jf && (a = a.h(Vg.Tg(b, c)), b = pa); return { Jc: a, B: b } };
    var Yg = function(a, b, c) {
            function d(f, h) { var k = f[h]; return k }
            var e = { event: b, "gtm.element": a, "gtm.elementClasses": d(a, "className"), "gtm.elementId": a["for"] || qc(a, "id") || "", "gtm.elementTarget": a.formTarget || d(a, "target") || "" };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        Zg = function(a) {
            Vc.hasOwnProperty("autoEventsSettings") || (Vc.autoEventsSettings = {});
            var b = Vc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        $g = function(a, b, c) { Zg(a)[b] = c },
        ah = function(a, b, c, d) {
            var e = Zg(a),
                f = Ga(e, b, d);
            e[b] = c(f)
        },
        bh = function(a, b, c) { var d = Zg(a); return Ga(d, b, c) };
    var ch = function() {
            for (var a = fc.userAgent + (F.cookie || "") + (F.referrer || ""), b = a.length, c = D.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, f, h;
            if (a)
                for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Fa() / 1E3)].join(".")
        },
        fh = function(a, b, c, d) { var e = dh(b); return Uf(a, e, eh(c), d) },
        gh = function(a, b, c, d) {
            var e = "" + dh(c),
                f = eh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        dh = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        eh = function(a) { if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length - 1 };
    var hh = ["1"],
        ih = {},
        mh = function(a, b, c, d) {
            var e = jh(a);
            ih[e] || kh(e, b, c) || (lh(e, ch(), b, c, d), kh(e, b, c))
        };

    function lh(a, b, c, d, e) {
        var f = gh(b, "1", d, c);
        Zf(a, f, c, d, 0 == e ? void 0 : new Date(Fa() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function kh(a, b, c) {
        var d = fh(a, b, c, hh);
        d && (ih[a] = d);
        return d
    }

    function jh(a) { return (a || "_gcl") + "_au" };
    var nh = function() {
        for (var a = [], b = F.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({ dd: e[1], value: e[2] })
        }
        var f = {};
        if (!a || !a.length) return f;
        for (var h = 0; h < a.length; h++) { var k = a[h].value.split("."); "1" == k[0] && 3 == k.length && k[1] && (f[a[h].dd] || (f[a[h].dd] = []), f[a[h].dd].push({ timestamp: k[1], $f: k[2] })) }
        return f
    };

    function oh() { for (var a = ph, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function qh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ph, rh;

    function sh(a) {
        ph = ph || qh();
        rh = rh || oh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                m = (f & 3) << 4 | h >> 4,
                n = (h & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (n = 64));
            b.push(ph[l], ph[m], ph[n], ph[q])
        }
        return b.join("")
    }

    function th(a) {
        function b(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = rh[m];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        ph = ph || qh();
        rh = rh || oh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var uh;

    function vh(a, b) {
        if (!a || b === F.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) { if (a[c].test(b)) return !0 } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var zh = function() {
            var a = wh,
                b = xh,
                c = yh(),
                d = function(h) { a(h.target || h.srcElement || {}) },
                e = function(h) { b(h.target || h.srcElement || {}) };
            if (!c.init) {
                nc(F, "mousedown", d);
                nc(F, "keyup", d);
                nc(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Ah = function(a, b, c) {
            for (var d = yh().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h = d[f];
                if ((!c || h.forms) && vh(h.domains, a)) {
                    var k = h.placement;
                    void 0 == k && (k = h.fragment ? 2 : 1);
                    k === b && Ia(e, h.callback())
                }
            }
            return e
        },
        yh = function() {
            var a = hc("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = { decorators: [] }, a.gl = b);
            return b
        };
    var Bh = /(.*?)\*(.*?)\*(.*)/,
        Ch = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Dh = /^(?:www\.|m\.|amp\.)+/,
        Eh = /([^?#]+)(\?[^#]*)?(#.*)?/,
        Gh = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(sh(String(d))))
                }
            var e = b.join("*");
            return ["1", Fh(e), e].join("*")
        },
        Fh = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() /
                    60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = uh)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var h = f, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[f] = h
                }
                d = e
            }
            uh = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ uh[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        Ih = function() {
            return function(a) {
                var b = Ze(D.location.href),
                    c = b.search.replace("?", ""),
                    d = Ve(c, "_gl", !0) || "";
                a.query = Hh(d) || {};
                var e = Ye(b, "fragment").match(/(.*?)(^|&)_gl=([^&]*)&?(.*)/);
                a.fragment = Hh(e && e[3] || "") || {}
            }
        },
        Jh = function() {
            var a =
                Ih(),
                b = yh();
            b.data || (b.data = { query: {}, fragment: {} }, a(b.data));
            var c = {},
                d = b.data;
            d && (Ia(c, d.query), Ia(c, d.fragment));
            return c
        },
        Hh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Bh.exec(d);
                            if (f) { c = f; break a }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === Fh(k, n)) { l = !0; break a }
                            l = !1
                        }
                        if (l) { for (var q = {}, u = k ? k.split("*") : [], p = 0; p < u.length; p += 2) q[u[p]] = th(u[p + 1]); return q }
                    }
                }
            } catch (t) {}
        };

    function Kh(a, b, c) {
        function d(m) {
            var n = m,
                q = /(.*?)(^|&)_gl=([^&]*)&?(.*)/.exec(n),
                u = n;
            if (q) {
                var p = q[2],
                    t = q[4];
                u = q[1];
                t && (u = u + p + t)
            }
            m = u;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Eh.exec(b);
        if (!e) return "";
        var f = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + f + h + k
    }

    function Lh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Ah(b, 1, c),
            e = Ah(b, 2, c);
        if (Ja(d)) {
            var f = Gh(d);
            if (c) {
                if (a && a.action) {
                    var h = (a.method || "").toLowerCase();
                    if ("get" === h) {
                        for (var k = a.childNodes || [], l = !1, m = 0; m < k.length; m++) {
                            var n = k[m];
                            if ("_gl" === n.name) {
                                n.setAttribute("value", f);
                                l = !0;
                                break
                            }
                        }
                        if (!l) {
                            var q = F.createElement("input");
                            q.setAttribute("type", "hidden");
                            q.setAttribute("name", "_gl");
                            q.setAttribute("value", f);
                            a.appendChild(q)
                        }
                    } else if ("post" === h) {
                        var u = Kh(f, a.action);
                        Te.test(u) && (a.action =
                            u)
                    }
                }
            } else Mh(f, a, !1)
        }
        if (!c && Ja(e)) {
            var p = Gh(e);
            Mh(p, a, !0)
        }
    }

    function Mh(a, b, c) {
        if (b.href) {
            var d = Kh(a, b.href, void 0 === c ? !1 : c);
            Te.test(d) && (b.href = d)
        }
    }
    var wh = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Lh(e, e.hostname) }
            } catch (h) {}
        },
        xh = function(a) {
            try {
                if (a.action) {
                    var b = Ye(Ze(a.action), "host");
                    Lh(a, b)
                }
            } catch (c) {}
        },
        Nh = function(a, b, c, d) {
            zh();
            var e = "fragment" === c ? 2 : 1,
                f = { callback: a, domains: b, fragment: 2 === e, placement: e, forms: !!d };
            yh().decorators.push(f)
        },
        Oh = function() {
            var a = F.location.hostname,
                b = Ch.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Dh, ""),
                l = e.replace(Dh, ""),
                m;
            if (!(m = k === l)) {
                var n = "." + l;
                m = k.substring(k.length - n.length, k.length) === n
            }
            return m
        },
        Ph = function(a, b) { return !1 === a ? !1 : a || b || Oh() };
    var Qh = {};
    var Rh = /^\w+$/,
        Sh = /^[\w-]+$/,
        Th = /^~?[\w-]+$/,
        Uh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp" };

    function Vh(a) { return a && "string" == typeof a && a.match(Rh) ? a : "_gcl" }
    var Xh = function() {
            var a = Ze(D.location.href),
                b = Ye(a, "query", !1, void 0, "gclid"),
                c = Ye(a, "query", !1, void 0, "gclsrc"),
                d = Ye(a, "query", !1, void 0, "dclid");
            if (!b || !c) {
                var e = a.hash.replace("#", "");
                b = b || Ve(e, "gclid", void 0);
                c = c || Ve(e, "gclsrc", void 0)
            }
            return Wh(b, c, d)
        },
        Wh = function(a, b, c) {
            var d = {},
                e = function(f, h) {
                    d[h] || (d[h] = []);
                    d[h].push(f)
                };
            d.gclid = a;
            d.gclsrc = b;
            d.dclid = c;
            if (void 0 !== a && a.match(Sh)) switch (b) {
                case void 0:
                    e(a, "aw");
                    break;
                case "aw.ds":
                    e(a, "aw");
                    e(a, "dc");
                    break;
                case "ds":
                    e(a, "dc");
                    break;
                case "3p.ds":
                    (void 0 ==
                        Qh.gtm_3pds ? 0 : Qh.gtm_3pds) && e(a, "dc");
                    break;
                case "gf":
                    e(a, "gf");
                    break;
                case "ha":
                    e(a, "ha");
                    break;
                case "gp":
                    e(a, "gp")
            }
            c && e(c, "dc");
            return d
        },
        Zh = function(a) {
            var b = Xh();
            Yh(b, a)
        };

    function Yh(a, b, c) {
        function d(q, u) {
            var p = $h(q, e);
            p && Zf(p, u, h, f, l, !0)
        }
        b = b || {};
        var e = Vh(b.prefix),
            f = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Ka ? 7776E3 : b.Ka;
        c = c || Fa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(q) { return ["GCL", m, q].join(".") };
        a.aw && (!0 === b.Lh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]));
        a.gp && d("gp", n(a.gp[0]))
    }
    var bi = function(a, b, c, d, e) {
            for (var f = Jh(), h = Vh(b), k = 0; k < a.length; ++k) {
                var l = a[k];
                if (void 0 !== Uh[l]) {
                    var m = $h(l, h),
                        n = f[m];
                    if (n) {
                        var q = Math.min(ai(n), Fa()),
                            u;
                        b: {
                            for (var p = q, t = Rf(m, F.cookie), v = 0; v < t.length; ++v)
                                if (ai(t[v]) > p) { u = !0; break b }
                            u = !1
                        }
                        u || Zf(m, n, c, d, 0 == e ? void 0 : new Date(q + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var w = { prefix: b, path: c, domain: d };
            Yh(Wh(f.gclid, f.gclsrc), w)
        },
        $h = function(a, b) { var c = Uh[a]; if (void 0 !== c) return b + c },
        ai = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
                0)
        };

    function ci(a) { var b = a.split("."); if (3 == b.length && "GCL" == b[0] && b[1]) return b[2] }
    var di = function(a, b, c, d, e) {
            if (ua(b)) {
                var f = Vh(e);
                Nh(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = $h(a[k], f);
                        if (l) {
                            var m = Rf(l, F.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        ei = function(a) { return a.filter(function(b) { return Th.test(b) }) },
        fi = function(a, b) {
            for (var c = Vh(b && b.prefix), d = {}, e = 0; e < a.length; e++) Uh[a[e]] && (d[a[e]] = Uh[a[e]]);
            za(d, function(f, h) {
                var k = Rf(c + h, F.cookie);
                if (k.length) {
                    var l = k[0],
                        m = ai(l),
                        n = {};
                    n[f] = [ci(l)];
                    Yh(n, b, m)
                }
            })
        };
    var gi = /^\d+\.fls\.doubleclick\.net$/;

    function hi(a) {
        var b = Ze(D.location.href),
            c = Ye(b, "host", !1);
        if (c && c.match(gi)) { var d = Ye(b, "path").split(a + "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0] }
    }

    function ii(a, b) {
        if ("aw" == a || "dc" == a) { var c = hi("gcl" + a); if (c) return c.split(".") }
        var d = Vh(b);
        if ("_gcl" == d) {
            var e;
            e = Xh()[a] || [];
            if (0 < e.length) return e
        }
        var f = $h(a, d),
            h;
        if (f) {
            var k = [];
            if (F.cookie) {
                var l = Rf(f, F.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = ci(l[m]);
                        n && -1 === r(k, n) && k.push(n)
                    }
                    h = ei(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var ji = function() {
            var a = hi("gac");
            if (a) return decodeURIComponent(a);
            var b = nh(),
                c = [];
            za(b, function(d, e) {
                for (var f = [], h = 0; h < e.length; h++) f.push(e[h].$f);
                f = ei(f);
                f.length && c.push(d + ":" + f.join(","))
            });
            return c.join(";")
        },
        ki = function(a, b, c, d, e) {
            mh(b, c, d, e);
            var f = ih[jh(b)],
                h = Xh().dc || [],
                k = !1;
            if (f && 0 < h.length) {
                var l = Vc.joined_au = Vc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var q = "https://adservice.google.com/ddm/regclk",
                            u = q = q + "?gclid=" + h[n] + "&auiddc=" + f;
                        fc.sendBeacon && fc.sendBeacon(u) || mc(u);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && f) {
                var p = jh(b),
                    t = ih[p];
                t && lh(p, t, c, d, e)
            }
        };
    var li;
    if (3 === Uc.yb.length) li = "g";
    else {
        var mi = "G";
        mi = "g";
        li = mi
    }
    var ni = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: li, OPT: "o" },
        oi = function(a) {
            var b = Uc.s.split("-"),
                c = b[0].toUpperCase(),
                d = ni[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Uc.yb.length) {
                var h = void 0;
                h = h || (Ud() ? "s" : "o");
                f = "2" + (h || "w")
            } else f =
                "";
            return f + d + Uc.yb + e
        };
    var pi = function(a) { return !(void 0 === a || null === a || 0 === (a + "").length) },
        qi = function(a, b) {
            var c;
            if (2 === b.V) return a("ord", wa(1E11, 1E13)), !0;
            if (3 === b.V) return a("ord", "1"), a("num", wa(1E11, 1E13)), !0;
            if (4 === b.V) return pi(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.V) c = "1";
            else if (6 === b.V) c = b.Yc;
            else return !1;
            pi(c) && a("qty", c);
            pi(b.Gb) && a("cost", b.Gb);
            pi(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        ri = encodeURIComponent,
        si = function(a, b) {
            function c(n, q, u) {
                f.hasOwnProperty(n) || (q += "", e += ";" + n + "=" +
                    (u ? q : ri(q)))
            }
            var d = a.Ec,
                e = a.protocol;
            e += a.Zb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + ri(d) + (";type=" + ri(a.Hc)) + (";cat=" + ri(a.fb));
            var f = a.Rf || {};
            za(f, function(n, q) { e += ";" + ri(n) + "=" + ri(q + "") });
            if (qi(c, a)) {
                pi(a.hc) && c("u", a.hc);
                pi(a.fc) && c("tran", a.fc);
                c("gtm", oi());
                !1 === a.vf && c("npa", "1");
                if (a.Dc) {
                    var h = ii("dc", a.Fa);
                    h && h.length && c("gcldc", h.join("."));
                    var k = ii("aw", a.Fa);
                    k && k.length && c("gclaw", k.join("."));
                    var l = ji();
                    l && c("gac", l);
                    mh(a.Fa, void 0, a.Nf, a.Of);
                    var m = ih[jh(a.Fa)];
                    m && c("auiddc", m)
                }
                pi(a.Uc) && c("prd", a.Uc, !0);
                za(a.fd, function(n, q) { c(n, q) });
                e += b || "";
                pi(a.Ub) && c("~oref", a.Ub);
                a.Zb ? lc(e + "?", a.B) : mc(e + "?", a.B, a.w)
            } else G(a.w)
        };
    var ti = ["input", "select", "textarea"],
        ui = ["button", "hidden", "image", "reset", "submit"],
        vi = function(a) { var b = a.tagName.toLowerCase(); return !va(ti, function(c) { return c === b }) || "input" === b && va(ui, function(c) { return c === a.type.toLowerCase() }) ? !1 : !0 },
        wi = function(a) { return a.form ? a.form.tagName ? a.form : F.getElementById(a.form) : tc(a, ["form"], 100) },
        xi = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (vi(h)) {
                    if (h.getAttribute(c) === d) return f;
                    f++
                }
            }
            return 0
        };
    var zi = function(a) {
            var b;
            if (a.hasOwnProperty("conversion_data")) b = "conversion_data";
            else if (a.hasOwnProperty("price")) b = "price";
            else return;
            var c = b,
                d = "/pagead/conversion/" + yi(a.conversion_id) + "/?",
                e = yi(JSON.stringify(a[c])),
                f = "https://www.googletraveladservices.com/travel/flights/clk" + d + c + "=" + e;
            if (a.conversionLinkerEnabled) {
                var h = ii("gf", a.cookiePrefix);
                if (h && h.length)
                    for (var k = 0; k < h.length; k++) f += "&gclgf=" + yi(h[k])
            }
            mc(f, a.onSuccess, a.onFailure)
        },
        yi = function(a) {
            return null === a || void 0 === a || 0 === String(a).length ?
                "" : encodeURIComponent(String(a))
        };
    var Ai = !!D.MutationObserver,
        Bi = void 0,
        Ci = function(a) {
            if (!Bi) {
                var b = function() {
                    var c = F.body;
                    if (c)
                        if (Ai)(new MutationObserver(function() { for (var e = 0; e < Bi.length; e++) G(Bi[e]) })).observe(c, { childList: !0, subtree: !0 });
                        else {
                            var d = !1;
                            nc(c, "DOMNodeInserted", function() { d || (d = !0, G(function() { d = !1; for (var e = 0; e < Bi.length; e++) G(Bi[e]) })) })
                        }
                };
                Bi = [];
                F.body ? b() : G(b)
            }
            Bi.push(a)
        };
    var Yi = D.clearTimeout,
        Zi = D.setTimeout,
        R = function(a, b, c) { if (Ud()) { b && G(b) } else return jc(a, b, c) },
        $i = function() { return D.location.href },
        aj = function(a) { return Ye(Ze(a), "fragment") },
        bj = function(a) { return Xe(Ze(a)) },
        U = function(a, b) { return Kd(a, b || 2) },
        cj = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Ng(a)) : d = Ng(a);
            return d
        },
        dj = function(a, b) { D[a] = b },
        X = function(a, b, c) {
            b && (void 0 === D[a] || c && !D[a]) && (D[a] =
                b);
            return D[a]
        },
        ej = function(a, b, c) { return Rf(a, b, void 0 === c ? !0 : !!c) },
        fj = function(a, b) { if (Ud()) { b && G(b) } else lc(a, b) },
        gj = function(a) { return !!bh(a, "init", !1) },
        hj = function(a) { $g(a, "init", !0) },
        ij = function(a, b) {
            var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Zc;
            c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            R(Q("https://", "http://", c))
        },
        jj = function(a, b) { var c = a[b]; return c };
    var kj = Vg.xg;
    var lj;
    var Ij = new xa;

    function Jj(a, b) {
        function c(h) {
            var k = Ze(h),
                l = Ye(k, "protocol"),
                m = Ye(k, "host", !0),
                n = Ye(k, "port"),
                q = Ye(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
            return [l, m, n, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Kj(a) { return Lj(a) ? 1 : 0 }

    function Lj(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ua(c)) {
            for (var d = 0; d < c.length; d++)
                if (Kj({ "function": a["function"], arg0: b, arg1: c[d] })) return !0;
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var e;
                a: {
                    if (b) {
                        var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < f.length; h++)
                                if (b[f[h]]) { e = b[f[h]](c); break a }
                        } catch (v) {}
                    }
                    e = !1
                }
                return e;
            case "_ew":
                var k, l;
                k = String(b);
                l = String(c);
                var m = k.length -
                    l.length;
                return 0 <= m && k.indexOf(l, m) == m;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var n;
                n = String(b).split(",");
                return 0 <= r(n, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var u = a.ignore_case ? "i" : void 0;
                try {
                    var p = String(c) + u,
                        t = Ij.get(p);
                    t || (t = new RegExp(c, u), Ij.set(p, t));
                    q = t.test(b)
                } catch (v) { q = !1 }
                return q;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Jj(b,
                    c)
        }
        return !1
    };
    var Mj = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Nj = {},
        Oj = encodeURI,
        Y = encodeURIComponent,
        Pj = mc;
    var Qj = function(a, b) {
        if (!a) return !1;
        var c = Ye(Ze(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Rj = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null };
    Nj.ng = function() { var a = !1; return a };
    var dl = function() {
        var a = D.gaGlobal = D.gaGlobal || {};
        a.hid = a.hid || wa();
        return a.hid
    };
    var ol = window,
        pl = document,
        ql = function(a) {
            var b = ol._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === ol["ga-disable-" + a]) return !0;
            try { var c = ol.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {}
            for (var d = Rf("AMP_TOKEN", pl.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return pl.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var tl = function(a) {
        za(a, function(c) { "_" === c.charAt(0) && delete a[c] });
        var b = a[H.ca] || {};
        za(b, function(c) { "_" === c.charAt(0) && delete b[c] })
    };
    var xl = function(a, b, c) { Kf(b, c, a) },
        yl = function(a, b, c) { Kf(b, c, a, !0) },
        Al = function(a, b) {};

    function zl(a, b) {}
    var Bl = function(a) { var b = tf(a, "/2"); return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? Q("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js") : "https://www.google.com/pagead/conversion_async.js" },
        Cl = !1,
        Dl = [],
        El = ["aw", "dc"],
        Fl = function(a) {
            var b = D.google_trackConversion,
                c = a.gtm_onFailure;
            "function" == typeof b ? b(a) || c() : c()
        },
        Gl = function() { for (; 0 < Dl.length;) Fl(Dl.shift()) },
        Hl = function(a) {
            if (!Cl) {
                Cl = !0;
                He();
                var b = function() {
                    Gl();
                    Dl = { push: Fl }
                };
                Ud() ? b() : jc(a, b, function() {
                    Gl();
                    Cl = !1
                })
            }
        },
        Il = function(a) {
            if (a) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && b.push({ item_id: d.id, quantity: d.quantity, value: d.price, start_date: d.start_date, end_date: d.end_date })
                }
                return b
            }
        },
        Jl = function(a, b, c, d) {
            var e = Rc(a),
                f = b == H.D,
                h = e.o[0],
                k = e.o[1],
                l = void 0 !== k,
                m = function(W) { return d.getWithConfig(W) },
                n = !1 !== m(H.Ca),
                q = m(H.Aa) || m(H.S),
                u = m(H.P),
                p = m(H.Y),
                t = Bl(m(H.ia));
            if (f) {
                var v = m(H.na) || {};
                if (n) {
                    Ph(v[H.Ua], !!v[H.C]) && bi(El, q, void 0, u, p);
                    var w = { prefix: q, domain: u, Ka: p };
                    Zh(w);
                    fi(["aw", "dc"], w)
                }
                v[H.C] &&
                    di(El, v[H.C], v[H.Xa], !!v[H.Va], q);
                var y = !1;
                y ? ge(e, d) : ge(e)
            }
            var x = !1 === m(H.Ad) || !1 === m(H.$a);
            if (!f || !l && !x)
                if (!0 === m(H.Bd) && (l = !1), !1 !== m(H.X) || l) {
                    var z = {
                        google_conversion_id: h,
                        google_remarketing_only: !l,
                        onload_callback: d.B,
                        gtm_onFailure: d.w,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: k,
                        google_conversion_language: m(H.Ea),
                        google_conversion_value: m(H.W),
                        google_conversion_currency: m(H.aa),
                        google_conversion_order_id: m(H.ab),
                        google_user_id: m(H.cb),
                        google_conversion_page_url: m(H.Ya),
                        google_conversion_referrer_url: m(H.Za),
                        google_gtm: oi(),
                        google_transport_url: tf(m(H.ia), "/")
                    };
                    z.google_restricted_data_processing = m(H.oc);
                    Ud() && (z.opt_image_generator = function() { return new Image }, z.google_enable_display_cookie_match = !1);
                    !1 === m(H.X) && (z.google_allow_ad_personalization_signals = !1);
                    z.google_read_gcl_cookie_opt_out = !n;
                    n && q && (z.google_gcl_cookie_prefix = q);
                    var C = function() {
                        var W = m(H.Hb),
                            S = { event: b };
                        if (ua(W)) {
                            I("GTM", 26);
                            for (var na = 0; na < W.length; ++na) {
                                var ha = W[na],
                                    N = m(ha);
                                void 0 !== N && (S[ha] = N)
                            }
                            return S
                        }
                        var L = d.eventModel;
                        if (!L) return null;
                        B(L, S);
                        for (var P = 0; P < H.xd.length; ++P) delete S[H.xd[P]];
                        return S
                    }();
                    C && (z.google_custom_params = C);
                    !l && m(H.M) && (z.google_gtag_event_data = { items: m(H.M), value: m(H.W) });
                    if (l && b == H.ma) {
                        z.google_conversion_merchant_id = m(H.Hd);
                        z.google_basket_feed_country =
                            m(H.Ed);
                        z.google_basket_feed_language = m(H.Gd);
                        z.google_basket_discount = m(H.Cd);
                        z.google_basket_transaction_type = b;
                        z.google_disable_merchant_reported_conversions = !0 === m(H.Md);
                        Ud() && (z.google_disable_merchant_reported_conversions = !0);
                        var A = Il(m(H.M));
                        A && (z.google_conversion_items = A)
                    }
                    var E = function(W, S) { void 0 != S && "" !== S && (z.google_additional_conversion_params = z.google_additional_conversion_params || {}, z.google_additional_conversion_params[W] = S) };
                    l && ("boolean" === typeof m(H.ic) && E("vdnc", m(H.ic)), E("vdltv",
                        m(H.Kd)));
                    var J = !0;
                    J && Dl.push(z)
                }
            Hl(t)
        };
    var Kl = function(a, b, c, d, e, f) {
            var h = { config: a, gtm: oi() };
            c && (mh(d, void 0, e, f), h.auiddc = ih[jh(d)]);
            b && (h.loadInsecure = b);
            void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = []);
            D.__dc_ns_processor.push(h);
            jc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
        },
        Ll = function(a, b, c) {
            var d = /^u([1-9]\d?|100)$/,
                e = a.getWithConfig(H.oh) || {},
                f = Pd(b, c);
            var h = {},
                k = {};
            if (Ra(e))
                for (var l in e)
                    if (e.hasOwnProperty(l) &&
                        d.test(l)) {
                        var m = e[l];
                        g(m) && (h[l] = m)
                    }
            for (var n = 0; n < f.length; n++) {
                var q = f[n];
                d.test(q) && (h[q] = q)
            }
            for (var u in h) h.hasOwnProperty(u) && (k[u] = a.getWithConfig(h[u]));
            return k
        },
        Ml = function(a) {
            function b(l, m, n) { void 0 !== n && 0 !== (n + "").length && d.push(l + m + ":" + c(n + "")) }
            var c = encodeURIComponent,
                d = [],
                e = a(H.M) || [];
            if (ua(e))
                for (var f = 0; f < e.length; f++) {
                    var h = e[f],
                        k = f + 1;
                    b("i", k, h.id);
                    b("p", k, h.price);
                    b("q", k, h.quantity);
                    b("c", k, a(H.kh));
                    b("l", k, a(H.Ea))
                }
            return d.join("|")
        },
        Nl = function(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) { var c = { standard: 2, unique: 3, per_session: 4, transactions: 5, items_sold: 6, "": 1 }[(b[5] || "").toLowerCase()]; if (c) return { containerId: "DC-" + b[1], N: b[3] ? a : "", pf: b[1], nf: b[3] || "", fb: b[4] || "", V: c } }
        },
        Pl = function(a, b, c, d) {
            var e = Nl(a);
            if (e) {
                var f = function(M) { return d.getWithConfig(M) },
                    h = !1 !== f(H.Ca),
                    k = f(H.Aa) || f(H.S),
                    l = f(H.P),
                    m = f(H.Y),
                    n = f(H.qh),
                    q = 3 === Vd();
                if (b === H.D) {
                    var u = f(H.na) || {},
                        p = f(H.sb),
                        t = void 0 === p ? !0 : !!p;
                    if (h) {
                        if (Ph(u[H.Ua], !!u[H.C])) {
                            bi(Ol, k, void 0, l,
                                m);
                        }
                        var v = { prefix: k, domain: l, Ka: m };
                        Zh(v);
                        fi(Ol, v);
                        ki(t, k, void 0, l, m)
                    }
                    if (u[H.C]) { di(Ol, u[H.C], u[H.Xa], !!u[H.Va], k); }
                    if (n && n.exclusion_parameters && n.engines)
                        if (Ud()) {} else Kl(n, q, h, k, l, m);
                    G(d.B)
                } else {
                    var w = {},
                        y = f(H.ph);
                    if (Ra(y))
                        for (var x in y)
                            if (y.hasOwnProperty(x)) {
                                var z = y[x];
                                void 0 !== z && null !==
                                    z && (w[x] = z)
                            }
                    var C = "";
                    if (5 === e.V || 6 === e.V) C = Ml(f);
                    var A = Ll(d, e.containerId, e.N),
                        E = !0 === f(H.Xg);
                    if (Ud() && E) { E = !1 }
                    var J = { fb: e.fb, Dc: h, Nf: l, Of: m, Fa: k, Gb: f(H.W), V: e.V, Rf: w, Ec: e.pf, Hc: e.nf, w: d.w, B: d.B, Ub: Xe(Ze(D.location.href)), Uc: C, protocol: q ? "http:" : "https:", Yc: f(H.Ve), Zb: E, sessionId: f(H.Pb), fc: void 0, transactionId: f(H.ab), hc: void 0, fd: A, vf: !1 !== f(H.X) };
                    si(J)
                }
            } else G(d.w)
        },
        Ol = ["aw", "dc"];
    var Ql = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
        Sl = function(a, b, c, d) {
            var e = function(w) { return d.getWithConfig(w) },
                f = Rc(a).o[0],
                h = !1 !== e(H.Ca),
                k = e(H.Aa) || e(H.S),
                l = e(H.P),
                m = e(H.Y);
            if (b === H.D) {
                if (h) {
                    var n = { prefix: k, domain: l, Ka: m };
                    Zh(n);
                    fi(["aw", "dc"], n)
                }
                G(d.B)
            } else {
                var q = { conversion_id: f, onFailure: d.w, onSuccess: d.B, conversionLinkerEnabled: h, cookiePrefix: k },
                    u = Ql.test(D.location.href);
                if (b !== H.ma) G(d.w);
                else {
                    var t = { partner_id: f, trip_type: e(H.df), total_price: e(H.W), currency: e(H.aa), is_direct_booking: u, flight_segment: Rl(e(H.M)) },
                        v = e(H.Vd);
                    v && "object" === typeof v && (t.passengers_total = v.total, t.passengers_adult = v.adult, t.passengers_child = v.child, t.passengers_infant_in_seat = v.infant_in_seat, t.passengers_infant_in_lap = v.infant_in_lap);
                    q.conversion_data = t;
                    zi(q)
                }
            }
        },
        Rl = function(a) {
            if (a) {
                for (var b = [], c = 0, d = 0; d < a.length; ++d) { var e = a[d];!e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = { cabin: e.travel_class, fare_product: e.fare_product, booking_code: e.booking_code, flight_number: e.flight_number, origin: e.origin, destination: e.destination, departure_date: e.start_date }, c++) }
                return b
            }
        };
    var Xl = function(a, b, c, d) {
            var e = Rc(a),
                f = function(w) { return d.getWithConfig(w) },
                h = !1 !== f(H.Ca),
                k = f(H.Aa) || f(H.S),
                l = f(H.P),
                m = f(H.Y);
            if (b === H.D) {
                var n = f(H.na) || {};
                if (h) {
                    Ph(n[H.Ua], !!n[H.C]) && bi(Tl, k, void 0, l, m);
                    var q = { prefix: k, domain: l, Ka: m };
                    Zh(q);
                    fi(["aw", "dc"], q)
                }
                if (n[H.C]) { di(Tl, n[H.C], n[H.Xa], !!n[H.Va], k); }
                G(d.B)
            } else {
                var u = e.o[0];
                if (/^\d+$/.test(u)) {
                    var p = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + encodeURIComponent(u) +
                        "/";
                    if (b === H.ma) {
                        var t = Ul(f(H.ab), f(H.W), f(H.aa), f(H.M));
                        t = encodeURIComponent(Vl(t));
                        p += "?data=" + t
                    } else if (b === H.Ta) {
                        var v = Wl(u, f(H.W), f(H.Td), f(H.aa), f(H.M));
                        v = encodeURIComponent(Vl(v));
                        p += "?label=FH&guid=ON&script=0&ord=" + wa(0, 4294967295) + ("&price=" + v)
                    } else { G(d.w); return }
                    h && (p += ii("ha", k).map(function(w) { return "&gclha=" + encodeURIComponent(w) }).join(""));
                    mc(p, d.B, d.w)
                } else G(d.w)
            }
        },
        Ul = function(a, b, c, d) {
            var e = {};
            Yl(a) && (e.hct_booking_xref = a);
            g(c) && (e.hct_currency_code = c);
            Yl(b) && (e.hct_total_price =
                b, e.hct_base_price = b);
            if (!ua(d) || 0 === d.length) return e;
            var f = d[0];
            if (!Ra(f)) return e;
            Yl(f[Zl.sa]) && (e.hct_partner_hotel_id = f[Zl.sa]);
            g(f[Zl.ja]) && (e.hct_checkin_date = f[Zl.ja]);
            g(f[Zl.Pa]) && (e.hct_checkout_date = f[Zl.Pa]);
            return e
        },
        Wl = function(a, b, c, d, e) {
            function f(n) { void 0 === n && (n = 0); if (Yl(n)) return l + n }

            function h(n, q, u) { u(q) && (k[n] = q) }
            var k = {};
            k.partner_id = a;
            var l = "USD";
            g(d) && (l = k.currency = d);
            Yl(b) && (k.base_price_value_string = f(b), k.display_price_value_string = f(b));
            Yl(c) && (k.tax_price_value_string =
                f(c));
            g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
            if (!ua(e) || 0 == e.length) return k;
            var m = e[0];
            if (!Ra(m)) return k;
            Yl(m[Zl.Fd]) && (k.total_price_value_string = f(m[Zl.Fd]));
            h("partner_hotel_id", m[Zl.sa], Yl);
            h("check_in_date", m[Zl.ja], g);
            h("check_out_date", m[Zl.Pa], g);
            h("adults", m[Zl.$e], $l);
            h(Zl.Jd, m[Zl.Jd], g);
            h(Zl.Id, m[Zl.Id], g);
            return k
        },
        Vl = function(a) {
            var b = [];
            za(a, function(c, d) { b.push(c + "=" + d) });
            return b.join(";")
        },
        Yl = function(a) { return g(a) || $l(a) },
        $l = function(a) { return "number" === typeof a },
        Zl = { sa: "id", Fd: "price", ja: "start_date", Pa: "end_date", $e: "occupancy", Jd: "room_id", Id: "rate_rule_id" },
        Tl = ["ha"];
    var nm = function(a, b, c, d) {
            var e = "https://www.google-analytics.com/analytics.js",
                f = Oe();
            if (qa(f)) {
                var h = "gtag_" + a.split("-").join("_"),
                    k = function(x) {
                        var z = [].slice.call(arguments, 0);
                        z[0] = h + "." + z[0];
                        f.apply(window, z)
                    },
                    l = function() {
                        var x = function(E, J) { for (var M = 0; J && M < J.length; M++) k(E, J[M]) },
                            z = em(b, d);
                        if (z) {
                            var C = z.action;
                            if ("impressions" === C) x("ec:addImpression", z.hg);
                            else if ("promo_click" === C || "promo_view" === C) {
                                var A = z.Vc;
                                x("ec:addPromo", z.Vc);
                                A && 0 < A.length && "promo_click" === C && k("ec:setAction", C)
                            } else x("ec:addProduct",
                                z.La), k("ec:setAction", C, z.eb)
                        }
                    },
                    m = function() {
                        if (Ud()) {} else {
                            var x = d.getWithConfig(H.Re);
                            x && (k("require", x, { dataLayer: "dataLayer" }), k("require", "render"))
                        }
                    },
                    n = fm(a, h, b, d);
                gm(h, n.Ga) && (f(function() { Me() && Me().remove(h) }), hm[h] = !1);
                f("create", a, n.Ga);
                (function() {
                    var x = d.getWithConfig("custom_map");
                    f(function() {
                        if (Ra(x)) {
                            var z = n.ka,
                                C = Me().getByName(h),
                                A;
                            for (A in x)
                                if (x.hasOwnProperty(A) && /^(dimension|metric)\d+$/.test(A) && void 0 != x[A]) {
                                    var E = C.get(im(x[A]));
                                    jm(z, A, E)
                                }
                        }
                    })
                })();
                (function(x) {
                    if (x) {
                        var z = {};
                        if (Ra(x))
                            for (var C in km) km.hasOwnProperty(C) && lm(km[C], C, x[C], z);
                        k("require", "linkid", z)
                    }
                })(n.linkAttribution);
                var u = n[H.na];
                if (u && u[H.C]) {
                    var p = u[H.Xa];
                    Pe(h + ".", u[H.C], void 0 === p ? !!u.use_anchor : "fragment" === p, !!u[H.Va])
                }
                var t = function(x, z, C) {
                    C && (z = "" + z);
                    n.ka[x] = z
                };
                if (b === H.ad) m(), k("send", "pageview", n.ka);
                else if (b === H.D) {
                    m();
                    var v = !1;
                    v ? ge(a, d) : ge(a);
                    0 != n.sendPageView && k("send", "pageview", n.ka)
                } else "screen_view" === b ? k("send", "screenview", n.ka) : "timing_complete" === b ? (t("timingCategory",
                    n.eventCategory, !0), t("timingVar", n.name, !0), t("timingValue", Aa(n.value)), void 0 !== n.eventLabel && t("timingLabel", n.eventLabel, !0), k("send", "timing", n.ka)) : "exception" === b ? k("send", "exception", n.ka) : "optimize.callback" !== b && (0 <= r([H.Zc, "select_content", H.Ta, H.Ab, H.Bb, H.Sa, "set_checkout_option", H.ma, H.Cb, "view_promotion", "checkout_progress"], b) && (k("require", "ec", "ec.js"), l()), t("eventCategory", n.eventCategory, !0), t("eventAction", n.eventAction || b, !0), void 0 !== n.eventLabel && t("eventLabel", n.eventLabel, !0), void 0 !== n.value && t("eventValue", Aa(n.value)), k("send", "event", n.ka));
                if (!mm) {
                    mm = !0;
                    He();
                    var w = d.w,
                        y = function() { Me().loaded || w() };
                    Ud() ? G(y) : jc(e, y, w)
                }
            } else G(d.w)
        },
        mm, hm = {},
        om = { client_id: 1, client_storage: "storage", cookie_name: 1, cookie_domain: 1, cookie_expires: 1, cookie_path: 1, cookie_update: 1, sample_rate: 1, site_speed_sample_rate: 1, use_amp_client_id: 1, store_gac: 1, conversion_linker: "storeGac" },
        pm = {
            anonymize_ip: 1,
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName",
                source: "campaignSource",
                medium: "campaignMedium",
                term: "campaignTerm",
                content: "campaignContent",
                id: "campaignId"
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        },
        qm = { content_id: 1, event_category: 1, event_action: 1, event_label: 1, link_attribution: 1, linker: 1, method: 1, name: 1, send_page_view: 1, value: 1 },
        km = {
            cookie_name: 1,
            cookie_expires: "duration",
            levels: 1
        },
        rm = { anonymize_ip: 1, fatal: 1, non_interaction: 1, use_amp_client_id: 1, send_page_view: 1, store_gac: 1, conversion_linker: 1 },
        lm = function(a, b, c, d) {
            if (void 0 !== c)
                if (rm[b] && (c = Ba(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[im(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        im = function(a) { return a && g(a) ? a.replace(/(_[a-z])/g, function(b) { return b[1].toUpperCase() }) : a },
        sm = function(a) {
            var b = "general";
            0 <= r([H.yd, H.Ab, H.zd, H.Sa, "checkout_progress", H.ma, H.Cb,
                H.Bb, "set_checkout_option"
            ], a) ? b = "ecommerce" : 0 <= r("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        jm = function(a, b, c) { a.hasOwnProperty(b) || (a[b] = c) },
        tm = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        fm = function(a, b,
            c, d) {
            var e = function(A) { return d.getWithConfig(A) },
                f = {},
                h = {},
                k = {},
                l = tm(e(H.Me));
            l && jm(h, "exp", l);
            var m = e("custom_map");
            if (Ra(m))
                for (var n in m)
                    if (m.hasOwnProperty(n) && /^(dimension|metric)\d+$/.test(n) && void 0 != m[n]) {
                        var q = e(String(m[n]));
                        void 0 !== q && jm(h, n, q)
                    }
            var u = Pd(a);
            for (var p = 0; p < u.length; ++p) {
                var t = u[p],
                    v = e(t);
                if (qm.hasOwnProperty(t)) lm(qm[t], t, v, f);
                else if (pm.hasOwnProperty(t)) lm(pm[t],
                    t, v, h);
                else if (om.hasOwnProperty(t)) lm(om[t], t, v, k);
                else if (/^(dimension|metric|content_group)\d+$/.test(t)) lm(1, t, v, h);
                else if ("developer_id" === t) {} else t === H.S && 0 > r(u, H.Fb) && (k.cookieName = v + "_ga")
            }
            jm(k, "cookieDomain", "auto");
            jm(h, "forceSSL", !0);
            jm(f, "eventCategory", sm(c));
            0 <= r(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && jm(h, "nonInteraction", !0);
            "login" === c || "sign_up" === c || "share" === c ? jm(f, "eventLabel", e(H.Pe)) : "search" === c || "view_search_results" === c ? jm(f, "eventLabel", e(H.Ze)) : "select_content" === c && jm(f, "eventLabel", e(H.ih));
            var y = f[H.na] || {},
                x = y[H.Ua];
            x || 0 != x && y[H.C] ? k.allowLinker = !0 : !1 === x && jm(k, "useAmpClientId", !1);
            if (!1 === e(H.dh) || !1 === e(H.X) || !1 === e(H.Qa)) h.allowAdFeatures = !1;
            !1 === e(H.X) && I("GTM", 27);
            k.name = b;
            h["&gtm"] = oi(!0);
            h.hitCallback = d.B;
            var z = e(H.Oe) || Kd("gtag.remote_config." + a + ".url", 2),
                C = e(H.Ne) || Kd("gtag.remote_config." +
                    a + ".dualId", 2);
            z && null != gc && (k._x_19 = z);
            C && (k._x_20 = C);
            f.ka = h;
            f.Ga = k;
            return f
        },
        em = function(a, b) {
            function c(v) {
                var w = B(v);
                w.list = v.list_name;
                w.listPosition = v.list_position;
                w.position = v.list_position || v.creative_slot;
                w.creative = v.creative_name;
                return w
            }

            function d(v) { for (var w = [], y = 0; v && y < v.length; y++) v[y] && w.push(c(v[y])); return w.length ? w : void 0 }

            function e(v) { return { id: f(H.ab), affiliation: f(H.Ge), revenue: f(H.W), tax: f(H.Td), shipping: f(H.Le), coupon: f(H.Ie), list: f(H.gd) || v } }
            for (var f = function(v) { return b.getWithConfig(v) },
                    h = f(H.M), k, l = 0; h && l < h.length && !(k = h[l][H.gd]); l++);
            var m = f("custom_map");
            if (Ra(m))
                for (var n = 0; h && n < h.length; ++n) {
                    var q = h[n],
                        u;
                    for (u in m) m.hasOwnProperty(u) && /^(dimension|metric)\d+$/.test(u) && void 0 != m[u] && jm(q, u, q[m[u]])
                }
            var p = null,
                t = f(H.Je);
            a === H.ma || a === H.Cb ? p = { action: a, eb: e(), La: d(h) } : a === H.Ab ? p = { action: "add", La: d(h) } : a === H.Bb ? p = { action: "remove", La: d(h) } : a === H.Ta ? p = { action: "detail", eb: e(k), La: d(h) } : a === H.Zc ? p = { action: "impressions", hg: d(h) } : "view_promotion" === a ? p = { action: "promo_view", Vc: d(t) } :
                "select_content" === a && t && 0 < t.length ? p = { action: "promo_click", Vc: d(t) } : "select_content" === a ? p = { action: "click", eb: { list: f(H.gd) || k }, La: d(h) } : a === H.Sa || "checkout_progress" === a ? p = { action: "checkout", La: d(h), eb: { step: a === H.Sa ? 1 : f(H.Rd), option: f(H.Qd) } } : "set_checkout_option" === a && (p = { action: "checkout_option", eb: { step: f(H.Rd), option: f(H.Qd) } });
            p && (p.yh = f(H.aa));
            return p
        },
        um = {},
        gm = function(a, b) {
            var c = um[a];
            um[a] = B(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) &&
                    c[e] !== b[e]) return !0;
            return !1
        };
    var Z = { a: {} };



    Z.a.gtagha = ["google"],
        function() {
            var a = !1;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = cd,
                    f = U("eventModel");
                if (a) {
                    Jf(d.id, Xl);
                    if (e === H.D) {
                        var h = U("gtag.targets." + d.id);
                        Lf(h, d.id)
                    } else Kf(e, f, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = Cf(Bf(wf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) { return Md(l, d.containerId, d.id) };
                    Xl(d.id, e, (new Date).getTime(),
                        k)
                }
            };
            Z.__gtagha = b;
            Z.__gtagha.b = "gtagha";
            Z.__gtagha.g = !0;
            Z.__gtagha.priorityOverride = 0;
        }();
    Z.a.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.b = "e";
                Z.__e.g = !0;
                Z.__e.priorityOverride = 0
            })(function(a) { return String(Sd(a.vtp_gtmEventId, "event")) })
        }();

    Z.a.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.b = "v";
                Z.__v.g = !0;
                Z.__v.priorityOverride = 0
            })(function(a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = U(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1); return void 0 !== c ? c : a.vtp_defaultValue })
        }();








    Z.a.gtagaw = ["google"],
        function() {
            (function(a) {
                Z.__gtagaw = a;
                Z.__gtagaw.b = "gtagaw";
                Z.__gtagaw.g = !0;
                Z.__gtagaw.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_conversionId,
                    c = cd;
                Jf(b.id, Jl);
                if (c === H.D) {
                    var d = U("gtag.targets." + b.id);
                    Lf(d, b.id)
                } else {
                    var e = U("eventModel");
                    Kf(c, e, b.id)
                }
                G(a.vtp_gtmOnSuccess)
            })
        }();

    Z.a.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.b = "get";
                Z.__get.g = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                if (a.vtp_isAutoTag) {
                    var b = String(a.vtp_trackingId),
                        c = cd || "",
                        d = {};
                    if (c === H.D) {
                        var e = U("gtag.targets." + b);
                        B(e, d);
                        d[H.qa] = !0;
                        Lf(d, b)
                    } else {
                        var f = U("eventModel");
                        B(f, d);
                        d[H.qa] = !0;
                        Kf(c, d, b)
                    }
                } else {
                    var h = a.vtp_settings;
                    (a.vtp_deferrable ? yl : xl)(String(h.streamId), String(a.vtp_eventName), h.eventParameters || {})
                }
                a.vtp_gtmOnSuccess()
            })
        }();


    Z.a.gtagfl = [],
        function() {
            function a(d) { var e = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(d); if (e) return { containerId: "DC-" + e[1], N: e[3] && d } }
            var b = !1;
            var c = function(d) {
                var e = d.vtp_targetId,
                    f = cd,
                    h = U("eventModel");
                if (b) {
                    Jf(e, Pl);
                    if (f === H.D) {
                        var k = U("gtag.targets." + e);
                        Lf(k, e)
                    } else Kf(f, h, e);
                    G(d.vtp_gtmOnSuccess)
                } else {
                    var l = a(e);
                    if (l) {
                        var m = Cf(Bf(wf(h), d.vtp_gtmOnSuccess),
                            d.vtp_gtmOnFailure);
                        m.getWithConfig = function(n) { return Md(n, l.containerId, l.N) };
                        Pl(e, f, (new Date).getTime(), m)
                    } else G(d.vtp_gtmOnFailure)
                }
            };
            Z.__gtagfl = c;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0;
            Z.__gtagfl.priorityOverride = 0;
        }();


    Z.a.gtaggf = ["google"],
        function() {
            var a = !1;
            a = !0;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = cd,
                    f = U("eventModel");
                if (a) {
                    Jf(d.id, Sl);
                    if (e === H.D) {
                        var h = U("gtag.targets." + d.id);
                        Lf(h, d.id)
                    } else Kf(e, f, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = Cf(Bf(wf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) { return Md(l, d.containerId, d.id) };
                    Sl(d.id, e,
                        (new Date).getTime(), k)
                }
            };
            Z.__gtaggf = b;
            Z.__gtaggf.b = "gtaggf";
            Z.__gtaggf.g = !0;
            Z.__gtaggf.priorityOverride = 0;
        }();




    Z.a.gtagua = ["google"],
        function() {
            var a = !1;
            a = !0;
            var b = function(c) {
                var d = c.vtp_trackingId,
                    e = cd,
                    f = U("eventModel");
                if (a) {
                    Jf(d, nm);
                    if (e === H.D) {
                        var h = U("gtag.targets." + d);
                        Lf(h, d)
                    } else Kf(e, f, d);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = Cf(Bf(wf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) { return Md(l, d, void 0) };
                    nm(d, e, (new Date).getTime(), k)
                }
            };
            Z.__gtagua =
                b;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0;
            Z.__gtagua.priorityOverride = 0;
        }();


    var vm = {};
    vm.macro = function(a) { if (Vg.xc.hasOwnProperty(a)) return Vg.xc[a] }, vm.onHtmlSuccess = Vg.be(!0), vm.onHtmlFailure = Vg.be(!1);
    vm.dataLayer = Ld;
    vm.callback = function(a) {
        ed.hasOwnProperty(a) && qa(ed[a]) && ed[a]();
        delete ed[a]
    };

    function wm() {
        Vc[Uc.s] = vm;
        Ia(fd, Z.a);
        zb = zb || Vg;
        Ab = pe
    }

    function xm() {
        Qh.gtm_3pds = !0;
        Vc = D.google_tag_manager = D.google_tag_manager || {};
        if (Vc[Uc.s]) {
            var a = Vc.zones;
            a && a.unregisterChild(Uc.s)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) rb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) vb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k <
                h.length; k++) tb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], q = {}, u = 0; u < n.length; u++) q[n[u][0]] = Array.prototype.slice.call(n[u], 1);
                sb.push(q)
            }
            xb = Z;
            yb = Kj;
            wm();
            Ug();
            te = !1;
            ue = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) we();
            else {
                nc(F, "DOMContentLoaded", we);
                nc(F, "readystatechange", we);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var p = !0;
                    try { p = !D.frameElement } catch (y) {}
                    p && xe()
                }
                nc(D, "load", we)
            }
            sg = !1;
            "complete" === F.readyState ? ug() : nc(D,
                "load", ug);
            a: { if (!Ad) break a;D.setInterval(Bd, 864E5); }
            bd = (new Date).getTime();
            vm.bootstrap = bd;
        }
    }
    xm();

})

var Ge = function(a, b, c) {
        Ae[a] = { tags: [] };
        qa(b) && Ee(a, b);
        c &&
            D.setTimeout(function() {
                return De(a);
            }, Number(c));
        return Fe(a);
    },
    Ee = function(a, b) {
        ze[a] = ze[a] || [];
        ze[a].push(
            Ha(function() {
                return G(function() {
                    b(Uc.s, Ae[a]);
                });
            })
        );
    };

function Fe(a) {
    var b = 0,
        c = 0,
        d = !1;
    return {
        add: function() {
            c++;
            return Ha(function() {
                b++;
                d && b >= c && De(a);
            });
        },
        yf: function() {
            d = !0;
            b >= c && De(a);
        }
    };
}
var He = function() {
    function a(d) {
        return !ra(d) || 0 > d ? 0 : d;
    }
    if (!Vc._li && D.performance && D.performance.timing) {
        var b = D.performance.timing.navigationStart,
            c = ra(Ld.get("gtm.start")) ? Ld.get("gtm.start") : 0;
        Vc._li = { cst: a(c - b), cbt: a(bd - b) };
    }
};
var Le = {},
    Me = function() {
        return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject];
    },
    Ne = !1;
var Oe = function(a) {
        D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
        var b = D.GoogleAnalyticsObject;
        if (D[b]) D.hasOwnProperty(b) || I("GTM", 12);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments);
            };
            c.l = Number(new Date());
            D[b] = c;
        }
        He();
        return D[b];
    },
    Pe = function(a, b, c, d) {
        b = String(b)
            .replace(/\s+/g, "")
            .split(",");
        var e = Me();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d);
    };
var Re = function(a) {},
    Qe = function() {
        return D.GoogleAnalyticsObject || "ga";
    };
var Te = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
var Ue = /:[0-9]+$/,
    Ve = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var h = f.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
            }
        }
    },
    Ye = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = We(a.protocol) || We(D.location.protocol);
        "port" === b
            ?
            (a.port = String(
                Number(a.hostname ? a.port : D.location.port) ||
                ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
            )) :
            "host" === b &&
            (a.hostname = (a.hostname || D.location.hostname)
                .replace(Ue, "")
                .toLowerCase());
        var f = b,
            h,
            k = We(a.protocol);
        f && (f = String(f).toLowerCase());
        switch (f) {
            case "url_no_fragment":
                h = Xe(a);
                break;
            case "protocol":
                h = k;
                break;
            case "host":
                h = a.hostname.replace(Ue, "").toLowerCase();
                if (c) {
                    var l = /^www\d*\./.exec(h);
                    l && l[0] && (h = h.substr(l[0].length));
                }
                break;
            case "port":
                h = String(
                    Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : "")
                );
                break;
            case "path":
                a.pathname || a.hostname || I("TAGGING", 1);
                h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = h.split("/");
                0 <= r(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                h = m.join("/");
                break;
            case "query":
                h = a.search.replace("?", "");
                e && (h = Ve(h, e, void 0));
                break;
            case "extension":
                var n = a.pathname.split(".");
                h = 1 < n.length ? n[n.length - 1] : "";
                h = h.split("/")[0];
                break;
            case "fragment":
                h = a.hash.replace("#", "");
                break;
            default:
                h = a && a.href;
        }
        return h;
    },
    We = function(a) {
        return a ? a.replace(":", "").toLowerCase() : "";
    },
    Xe = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c);
        }
        return b;
    },
    Ze = function(a) {
        var b = F.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || I("TAGGING", 1), (c = "/" + c));
        var d = b.hostname.replace(Ue, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
    };

function df(a, b, c, d) {
    var e = vb[a],
        f = ef(a, b, c, d);
    if (!f) return null;
    var h = Db(e[Ib.Ld], c, []);
    if (h && h.length) {
        var k = h[0];
        f = df(
            k.index, { B: f, w: 1 === k.fe ? b.terminate : f, terminate: b.terminate },
            c,
            d
        );
    }
    return f;
}

function ef(a, b, c, d) {
    function e() {
        if (f[Ib.We]) k();
        else {
            var w = Eb(f, c, []),
                y = Be(c.id, String(f[Ib.ra]), Number(f[Ib.Nd]), w[Ib.Xe]),
                x = !1;
            w.vtp_gtmOnSuccess = function() {
                if (!x) {
                    x = !0;
                    var A = Fa() - C;
                    Dd(c.id, vb[a], "5");
                    Ce(c.id, y, "success", A);
                    h();
                }
            };
            w.vtp_gtmOnFailure = function() {
                if (!x) {
                    x = !0;
                    var A = Fa() - C;
                    Dd(c.id, vb[a], "6");
                    Ce(c.id, y, "failure", A);
                    k();
                }
            };
            w.vtp_gtmTagId = f.tag_id;
            w.vtp_gtmEventId = c.id;
            Dd(c.id, f, "1");
            var z = function() {
                var A = Fa() - C;
                Dd(c.id, f, "7");
                Ce(c.id, y, "exception", A);
                x || ((x = !0), k());
            };
            var C = Fa();
            try {
                Cb(w, c);
            } catch (A) {
                z(A);
            }
        }
    }
    var f = vb[a],
        h = b.B,
        k = b.w,
        l = b.terminate;
    if (c.Lc(f)) return null;
    var m = Db(f[Ib.Od], c, []);
    if (m && m.length) {
        var n = m[0],
            q = df(n.index, { B: h, w: k, terminate: l }, c, d);
        if (!q) return null;
        h = q;
        k = 2 === n.fe ? l : q;
    }
    if (f[Ib.Dd] || f[Ib.af]) {
        var u = f[Ib.Dd] ? wb : c.ah,
            p = h,
            t = k;
        if (!u[a]) {
            e = Ha(e);
            var v = ff(a, u, e);
            h = v.B;
            k = v.w;
        }
        return function() {
            u[a](p, t);
        };
    }
    return e;
}

function ff(a, b, c) {
    var d = [],
        e = [];
    b[a] = gf(d, e, c);
    return {
        B: function() {
            b[a] = hf;
            for (var f = 0; f < d.length; f++) d[f]();
        },
        w: function() {
            b[a] = jf;
            for (var f = 0; f < e.length; f++) e[f]();
        }
    };
}

function gf(a, b, c) {
    return function(d, e) {
        a.push(d);
        b.push(e);
        c();
    };
}

function hf(a) {
    a();
}

function jf(a, b) {
    b();
}
var mf = function(a, b) {
    for (var c = [], d = 0; d < vb.length; d++)
        if (a.kb[d]) {
            var e = vb[d];
            var f = b.add();
            try {
                var h = df(d, { B: f, w: f, terminate: f }, a, d);
                h ? c.push({ Ee: d, ze: Fb(e), Xf: h }) : (kf(d, a), f());
            } catch (l) {
                f();
            }
        }
    b.yf();
    c.sort(lf);
    for (var k = 0; k < c.length; k++) c[k].Xf();
    return 0 < c.length;
};

function lf(a, b) {
    var c,
        d = b.ze,
        e = a.ze;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
        var h = a.Ee,
            k = b.Ee;
        f = h > k ? 1 : h < k ? -1 : 0;
    }
    return f;
}

function kf(a, b) {
    if (!Ad) return;
    var c = function(d) {
        var e = b.Lc(vb[d]) ? "3" : "4",
            f = Db(vb[d][Ib.Ld], b, []);
        f && f.length && c(f[0].index);
        Dd(b.id, vb[d], e);
        var h = Db(vb[d][Ib.Od], b, []);
        h && h.length && c(h[0].index);
    };
    c(a);
}
var nf = !1,
    of = function(a, b, c, d, e) {
        if ("gtm.js" == b) {
            if (nf) return !1;
            nf = !0;
        }
        Cd(a, b);
        var f = Ge(a, d, e);
        Rd(a, "event", 1);
        Rd(a, "ecommerce", 1);
        Rd(a, "gtm");
        var h = {
            id: a,
            name: b,
            Lc: oe(c),
            kb: [],
            ah: [],
            te: function() {
                I("GTM", 6);
            }
        };
        h.kb = Mb(h);
        var k = mf(h, f);
        ("gtm.js" !== b && "gtm.sync" !== b) || Re(Uc.s);
        if (!k) return k;
        for (var l = 0; l < h.kb.length; l++)
            if (h.kb[l]) {
                var m = vb[l];
                if (m && !Xc[String(m[Ib.ra])]) return !0;
            }
        return !1;
    };
var pf = function(a, b) {
    var c = Bb(a, b);
    vb.push(c);
    return vb.length - 1;
};
var qf = /^https?:\/\/www\.googletagmanager\.com/;

function rf() {
    var a;
    return a;
}

function tf(a, b) {}

function sf(a) {
    0 !== a.indexOf("http://") &&
        0 !== a.indexOf("https://") &&
        (a = "https://" + a);
    "/" === a[a.length - 1] && (a = a.substring(0, a.length - 1));
    return a;
}

function uf() {
    var a = !1;
    return a;
}
var vf = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.h = {};
        this.globalConfig = {};
        this.B = function() {};
        this.w = function() {};
    },
    wf = function(a) {
        var b = new vf();
        b.eventModel = a;
        return b;
    },
    xf = function(a, b) {
        a.targetConfig = b;
        return a;
    },
    yf = function(a, b) {
        a.containerConfig = b;
        return a;
    },
    zf = function(a, b) {
        a.h = b;
        return a;
    },
    Af = function(a, b) {
        a.globalConfig = b;
        return a;
    },
    Bf = function(a, b) {
        a.B = b;
        return a;
    },
    Cf = function(a, b) {
        a.w = b;
        return a;
    };
vf.prototype.getWithConfig = function(a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.h[a]) return this.h[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
};
var Df = function(a) {
    function b(e) {
        za(e, function(f) {
            c[f] = null;
        });
    }
    var c = {};
    b(a.eventModel);
    b(a.targetConfig);
    b(a.containerConfig);
    b(a.globalConfig);
    var d = [];
    za(c, function(e) {
        d.push(e);
    });
    return d;
};
var Ef = {},
    Ff = ["G"];
Ef.Fe = "";
var Gf = Ef.Fe.split(",");

function Hf() {
    var a = Vc;
    return (a.gcq = a.gcq || new If());
}
var Jf = function(a, b, c) {
        Hf().register(a, b, c);
    },
    Kf = function(a, b, c, d) {
        Hf().push("event", [b, a], c, d);
    },
    Lf = function(a, b) {
        Hf().push("config", [a], b);
    },
    Mf = {},
    Nf = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.i = {};
        this.m = null;
        this.h = !1;
    },
    Of = function(a, b, c, d, e) {
        this.type = a;
        this.m = b;
        this.N = c || "";
        this.h = d;
        this.i = e;
    },
    If = function() {
        this.i = {};
        this.m = {};
        this.h = [];
    },
    Pf = function(a, b) {
        var c = Rc(b);
        return (a.i[c.containerId] = a.i[c.containerId] || new Nf());
    },
    Qf = function(a, b, c, d) {
        if (d.N) {
            var e = Pf(a, d.N),
                f = e.m;
            if (f) {
                var h = B(c),
                    k = B(e.targetConfig[d.N]),
                    l = B(e.containerConfig),
                    m = B(e.i),
                    n = B(a.m),
                    q = Kd("gtm.uniqueEventId"),
                    u = Rc(d.N).prefix,
                    p = Cf(
                        Bf(Af(zf(yf(xf(wf(h), k), l), m), n), function() {
                            Ed(q, u, "2");
                        }),
                        function() {
                            Ed(q, u, "3");
                        }
                    );
                try {
                    Ed(q, u, "1");
                    f(d.N, b, d.m, p);
                } catch (t) {
                    Ed(q, u, "4");
                }
            }
        }
    };
If.prototype.register = function(a, b, c) {
    if (3 !== Pf(this, a).status) {
        Pf(this, a).m = b;
        Pf(this, a).status = 3;
        c && (Pf(this, a).i = c);
        var d = Rc(a),
            e = Mf[d.containerId];
        if (void 0 !== e) {
            var f = Vc[d.containerId].bootstrap,
                h = d.prefix.toUpperCase();
            Vc[d.containerId]._spx && (h = h.toLowerCase());
            var k = Kd("gtm.uniqueEventId"),
                l = h,
                m = Fa() - f;
            if (Ad && !rd[k]) {
                k !== nd && (ld(), (nd = k));
                var n = l + "." + Math.floor(f - e) + "." + Math.floor(m);
                wd = wd ? wd + "," + n : "&cl=" + n;
            }
            delete Mf[d.containerId];
        }
        this.flush();
    }
};
If.prototype.push = function(a, b, c, d) {
    var e = Math.floor(Fa() / 1e3);
    if (c) {
        var f = Rc(c),
            h;
        if ((h = f)) {
            var k;
            if ((k = 1 === Pf(this, c).status))
                a: {
                    var l = f.prefix;
                    k = !0;
                }
            h = k;
        }
        if (
            h &&
            ((Pf(this, c).status = 2),
                this.push("require", [], f.containerId),
                (Mf[f.containerId] = Fa()), !Ud())
        ) {
            var m = encodeURIComponent(f.containerId),
                n =
                ("http:" != D.location.protocol ? "https:" : "http:") +
                "//www.googletagmanager.com";
            jc(n + "/gtag/js?id=" + m + "&l=dataLayer&cx=c");
        }
    }
    this.h.push(new Of(a, e, c, b, d));
    d || this.flush();
};
If.prototype.flush = function(a) {
    for (var b = this; this.h.length;) {
        var c = this.h[0];
        if (c.i)(c.i = !1), this.h.push(c);
        else
            switch (c.type) {
                case "require":
                    if (3 !== Pf(this, c.N).status && !a) return;
                    break;
                case "set":
                    za(c.h[0], function(l, m) {
                        B(La(l, m), b.m);
                    });
                    break;
                case "config":
                    var d = c.h[0],
                        e = !!d[H.Qb];
                    delete d[H.Qb];
                    var f = Pf(this, c.N),
                        h = Rc(c.N),
                        k = h.containerId === h.id;
                    e || (k ? (f.containerConfig = {}) : (f.targetConfig[c.N] = {}));
                    (f.h && e) || Qf(this, H.D, d, c);
                    f.h = !0;
                    delete d[H.qa];
                    k ? B(d, f.containerConfig) : B(d, f.targetConfig[c.N]);
                    break;
                case "event":
                    Qf(this, c.h[1], c.h[0], c);
            }
        this.h.shift();
    }
};
var Rf = function(a, b, c) {
        for (
            var d = [], e = String(b || document.cookie).split(";"), f = 0; f < e.length; f++
        ) {
            var h = e[f].split("="),
                k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h
                    .slice(1)
                    .join("=")
                    .replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l);
            }
        }
        return d;
    },
    Uf = function(a, b, c, d) {
        var e = Sf(a, d);
        if (1 === e.length) return e[0].id;
        if (0 !== e.length) {
            e = Tf(
                e,
                function(f) {
                    return f.Jb;
                },
                b
            );
            if (1 === e.length) return e[0].id;
            e = Tf(
                e,
                function(f) {
                    return f.lb;
                },
                c
            );
            return e[0] ? e[0].id : void 0;
        }
    };

function Wf(a, b, c) {
    var d = document.cookie;
    document.cookie = a;
    var e = document.cookie;
    return d != e || (void 0 != c && 0 <= Rf(b, e).indexOf(c));
}
var Zf = function(a, b, c, d, e, f) {
    d = d || "auto";
    var h = { path: c || "/" };
    e && (h.expires = e);
    "none" !== d && (h.domain = d);
    var k;
    a: {
        var l = b,
            m;
        if (void 0 == l) m = a + "=deleted; expires=" + new Date(0).toUTCString();
        else {
            f && (l = encodeURIComponent(l));
            var n = l;
            n && 1200 < n.length && (n = n.substring(0, 1200));
            l = n;
            m = a + "=" + l;
        }
        var q = void 0,
            u = void 0,
            p;
        for (p in h)
            if (h.hasOwnProperty(p)) {
                var t = h[p];
                if (null != t)
                    switch (p) {
                        case "secure":
                            t && (m += "; secure");
                            break;
                        case "domain":
                            q = t;
                            break;
                        default:
                            "path" == p && (u = t),
                                "expires" == p && t instanceof Date && (t = t.toUTCString()),
                                (m += "; " + p + "=" + t);
                    }
            }
        if ("auto" === q) {
            for (var v = Xf(), w = 0; w < v.length; ++w) {
                var y = "none" != v[w] ? v[w] : void 0;
                if (!Yf(y, u) && Wf(m + (y ? "; domain=" + y : ""), a, l)) {
                    k = !0;
                    break a;
                }
            }
            k = !1;
        } else
            q && "none" != q && (m += "; domain=" + q),
        (k = !Yf(q, u) && Wf(m, a, l));
    }
    return k;
};

function Tf(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
        var k = a[h],
            l = b(k);
        l === c ?
            d.push(k) :
            void 0 === f || l < f ?
            ((e = [k]), (f = l)) :
            l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
}

function Sf(a, b) {
    for (var c = [], d = Rf(a), e = 0; e < d.length; e++) {
        var f = d[e].split("."),
            h = f.shift();
        if (!b || -1 !== b.indexOf(h)) {
            var k = f.shift();
            k &&
                ((k = k.split("-")),
                    c.push({ id: f.join("."), Jb: 1 * k[0] || 1, lb: 1 * k[1] || 1 }));
        }
    }
    return c;
}
var $f = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    ag = /(^|\.)doubleclick\.net$/i,
    Yf = function(a, b) {
        return ag.test(document.location.hostname) || ("/" === b && $f.test(a));
    },
    Xf = function() {
        var a = [],
            b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"];
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = document.location.hostname;
        ag.test(e) || $f.test(e) || a.push("none");
        return a;
    };
var bg = "G".split(/,/),
    cg = !1;
var dg = null,
    eg = {},
    fg = {},
    gg;

function hg(a, b) {
    var c = { event: a };
    b &&
        ((c.eventModel = B(b)),
            b[H.nc] && (c.eventCallback = b[H.nc]),
            b[H.tb] && (c.eventTimeout = b[H.tb]));
    return c;
}
var ig = function() {
        dg = dg || !Vc.gtagRegistered;
        Vc.gtagRegistered = !0;
        return dg;
    },
    jg = function(a) {
        if (void 0 === fg[a.id]) {
            var b;
            switch (a.prefix) {
                case "UA":
                    b = pf("gtagua", { trackingId: a.id });
                    break;
                case "AW":
                    b = pf("gtagaw", { conversionId: a });
                    break;
                case "DC":
                    b = pf("gtagfl", { targetId: a.id });
                    break;
                case "GF":
                    b = pf("gtaggf", { conversionId: a });
                    break;
                case "G":
                    b = pf("get", { trackingId: a.id, isAutoTag: !0 });
                    break;
                case "HA":
                    b = pf("gtagha", { conversionId: a });
                    break;
                case "GP":
                    b = pf("gtaggp", { conversionId: a.id });
                    break;
                default:
                    return;
            }
            if (!gg) {
                var c = Bb("v", { name: "send_to", dataLayerVersion: 2 });
                rb.push(c);
                gg = ["macro", rb.length - 1];
            }
            var d = { arg0: gg, arg1: a.id, ignore_case: !1 };
            d[Ib.ra] = "_lc";
            tb.push(d);
            var e = { if: [tb.length - 1], add: [b] };
            e["if"] && (e.add || e.block) && sb.push(e);
            fg[a.id] = b;
        }
    },
    kg = function(a) {
        za(eg, function(b, c) {
            var d = r(c, a);
            0 <= d && c.splice(d, 1);
        });
    },
    mg = function(a) {
        if (a.containerId !== Uc.s && "G" !== a.prefix) {
            var b;
            switch (a.prefix) {
                case "UA":
                    b = 14;
                    break;
                case "AW":
                    b = 15;
                    break;
                case "DC":
                    b = 16;
                    break;
                default:
                    b = 17;
            }
            I("GTM", b);
        }
    };
var ng = {
        config: function(a) {
            var b = a[2] || {};
            if (2 > a.length || !g(a[1]) || !Ra(b)) return;
            var c = Rc(a[1]);
            if (!c) return;
            kg(c.id);
            var d = c.id,
                e = b[H.md] || "default";
            e = e.toString().split(",");
            for (var f = 0; f < e.length; f++)
                (eg[e[f]] = eg[e[f]] || []), eg[e[f]].push(d);
            delete b[H.md];
            B(b);
            if (ig()) {
                if (cg && -1 !== r(bg, c.prefix)) {
                    "G" === c.prefix && (b[H.qa] = !0);
                    Lf(b, c.id);
                    return;
                }
                jg(c);
                mg(c);
            } else lg();
            Qd("gtag.targets." + c.id, void 0);
            Qd("gtag.targets." + c.id, B(b));
            var h = {};
            h[H.oa] = c.id;
            return hg(H.D, h);
        },
        event: function(a) {
            var b = a[1];
            if (g(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Ra(a[2]) && void 0 != a[2]) return;
                    c = a[2];
                }
                var d = hg(b, c);
                var e;
                var f = c && c[H.oa];
                void 0 === f && ((f = Kd(H.oa, 2)), void 0 === f && (f = "default"));
                if (g(f) || ua(f)) {
                    for (
                        var h = f
                            .toString()
                            .replace(/\s+/g, "")
                            .split(","),
                            k = [],
                            l = 0; l < h.length; l++
                    )
                        0 <= h[l].indexOf("-") ?
                        k.push(h[l]) :
                        (k = k.concat(eg[h[l]] || []));
                    e = Tc(k);
                } else e = void 0;
                var m = e;
                if (!m) return;
                var n = ig();
                n || lg();
                for (var q = [], u = 0; n && u < m.length; u++) {
                    var p = m[u];
                    mg(p);
                    if (cg && -1 !== r(bg, p.prefix)) {
                        var t = B(c);
                        "G" === p.prefix && (t[H.qa] = !0);
                        Kf(b, t, p.id);
                    } else jg(p);
                    q.push(p.id);
                }
                B(c, { event: b });
                d.eventModel = d.eventModel || {};
                0 < m.length ?
                    (d.eventModel[H.oa] = q.join()) :
                    delete d.eventModel[H.oa];
                return d;
            }
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime)
                return { event: "gtm.js", "gtm.start": a[1].getTime() };
        },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && Ra(a[1]) ?
                (b = B(a[1])) :
                3 == a.length &&
                g(a[1]) &&
                ((b = {}),
                    Ra(a[2]) || ua(a[2]) ? (b[a[1]] = B(a[2])) : (b[a[1]] = a[2]));
            if (b) {
                if (ig()) {
                    var c = B(b);
                    Hf().push("set", [c]);
                }
                B(b);
                b._clear = !0;
                return b;
            }
        }
    },
    og = { policy: !0 };
var pg = function(a, b) {
        var c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            var d = !0,
                e;
            for (e in c)
                if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break;
                }
            d && (c.end(), (c.end = null));
        }
    },
    rg = function(a) {
        var b = qg(),
            c = b && b.hide;
        c && c.end && (c[a] = !0);
    };
var sg = !1,
    tg = [];

function ug() {
    if (!sg) {
        sg = !0;
        for (var a = 0; a < tg.length; a++) G(tg[a]);
    }
}
var vg = function(a) {
    sg ? G(a) : tg.push(a);
};
var Kg = function(a) {
    if (Jg(a)) return a;
    this.h = a;
};
Kg.prototype.dg = function() {
    return this.h;
};
var Jg = function(a) {
    return !a || "object" !== Pa(a) || Ra(a) ?
        !1 :
        "getUntrustedUpdateValue" in a;
};
Kg.prototype.getUntrustedUpdateValue = Kg.prototype.dg;
var Lg = [],
    Mg = !1,
    Ng = function(a) {
        return D["dataLayer"].push(a);
    },
    Og = function(a) {
        var b = Vc["dataLayer"],
            c = b ? b.subscribers : 1,
            d = 0;
        return function() {
            ++d === c && a();
        };
    };

function Pg(a) {
    var b = a._clear;
    za(a, function(f, h) {
        "_clear" !== f && (b && Qd(f, void 0), Qd(f, h));
    });
    $c || ($c = a["gtm.start"]);
    var c = a.event;
    if (!c) return !1;
    var d = a["gtm.uniqueEventId"];
    d || ((d = gd()), (a["gtm.uniqueEventId"] = d), Qd("gtm.uniqueEventId", d));
    cd = c;
    var e = Qg(a);
    cd = null;
    switch (c) {
        case "gtm.init":
            I("GTM", 19), e && I("GTM", 20);
    }
    return e;
}

function Qg(a) {
    var b = a.event,
        c = a["gtm.uniqueEventId"],
        d,
        e = Vc.zones;
    d = e ? e.checkState(Uc.s, c) : qe;
    return d.active ?
        of(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ?
        !0 :
        !1 :
        !1;
}

function Rg() {
    for (var a = !1; !Mg && 0 < Lg.length;) {
        Mg = !0;
        delete Hd.eventModel;
        Jd();
        var b = Lg.shift();
        if (null != b) {
            var c = Jg(b);
            if (c) {
                var d = b;
                b = Jg(d) ? d.getUntrustedUpdateValue() : void 0;
                for (
                    var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"],
                        f = 0; f < e.length; f++
                ) {
                    var h = e[f],
                        k = Kd(h, 1);
                    if (ua(k) || Ra(k)) k = B(k);
                    Id[h] = k;
                }
            }
            try {
                if (qa(b))
                    try {
                        b.call(Ld);
                    } catch (v) {}
                else if (ua(b)) {
                    var l = b;
                    if (g(l[0])) {
                        var m = l[0].split("."),
                            n = m.pop(),
                            q = l.slice(1),
                            u = Kd(m.join("."), 2);
                        if (void 0 !== u && null !== u)
                            try {
                                u[n].apply(u, q);
                            } catch (v) {}
                    }
                } else {
                    var p = b;
                    if (
                        p &&
                        ("[object Arguments]" == Object.prototype.toString.call(p) ||
                            Object.prototype.hasOwnProperty.call(p, "callee"))
                    ) {
                        a: {
                            if (b.length && g(b[0])) {
                                var t = ng[b[0]];
                                if (t && (!c || !og[b[0]])) {
                                    b = t(b);
                                    break a;
                                }
                            }
                            b = void 0;
                        }
                        if (!b) {
                            Mg = !1;
                            continue;
                        }
                    }
                    a = Pg(b) || a;
                }
            } finally {
                c && Jd(!0);
            }
        }
        Mg = !1;
    }
    return !a;
}

function Sg() {
    var a = Rg();
    try {
        pg(D["dataLayer"], Uc.s);
    } catch (b) {}
    return a;
}
var Ug = function() {
        var a = hc("dataLayer", []),
            b = hc("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        ye(function() {
            b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
        });
        vg(function() {
            b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var d;
            if (0 < Vc.SANDBOXED_JS_SEMAPHORE) {
                d = [];
                for (var e = 0; e < arguments.length; e++)
                    d[e] = new Kg(arguments[e]);
            } else d = [].slice.call(arguments, 0);
            var f = c.apply(a, d);
            Lg.push.apply(Lg, d);
            if (300 < this.length)
                for (I("GTM", 4); 300 < this.length;) this.shift();
            var h = "boolean" !== typeof f || f;
            return Rg() && h;
        };
        Lg.push.apply(Lg, a.slice(0));
        Tg() && G(Sg);
    },
    Tg = function() {
        var a = !0;
        return a;
    };
var Vg = {};
Vg.ub = new String("undefined");
var Wg = function(a) {
    this.h = function(b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d] === Vg.ub ? b : a[d]);
        return c.join("");
    };
};
Wg.prototype.toString = function() {
    return this.h("undefined");
};
Wg.prototype.valueOf = Wg.prototype.toString;
Vg.jf = Wg;
Vg.xc = {};
Vg.Pf = function(a) {
    return new Wg(a);
};
var Xg = {};
Vg.Tg = function(a, b) {
    var c = gd();
    Xg[c] = [a, b];
    return c;
};
Vg.be = function(a) {
    var b = a ? 0 : 1;
    return function(c) {
        var d = Xg[c];
        if (d && "function" === typeof d[b]) d[b]();
        Xg[c] = void 0;
    };
};
Vg.mg = function(a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
        (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
};
Vg.Jg = function(a) {
    if (a === Vg.ub) return a;
    var b = gd();
    Vg.xc[b] = a;
    return 'google_tag_manager["' + Uc.s + '"].macro(' + b + ")";
};
Vg.xg = function(a, b, c) {
    a instanceof Vg.jf && ((a = a.h(Vg.Tg(b, c))), (b = pa));
    return { Jc: a, B: b };
};
var Yg = function(a, b, c) {
        function d(f, h) {
            var k = f[h];
            return k;
        }
        var e = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": d(a, "className"),
            "gtm.elementId": a["for"] || qc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || d(a, "target") || ""
        };
        c && (e["gtm.triggers"] = c.join(","));
        e["gtm.elementUrl"] =
            (a.attributes && a.attributes.formaction ? a.formAction : "") ||
            a.action ||
            d(a, "href") ||
            a.src ||
            a.code ||
            a.codebase ||
            "";
        return e;
    },
    Zg = function(a) {
        Vc.hasOwnProperty("autoEventsSettings") || (Vc.autoEventsSettings = {});
        var b = Vc.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a];
    },
    $g = function(a, b, c) {
        Zg(a)[b] = c;
    },
    ah = function(a, b, c, d) {
        var e = Zg(a),
            f = Ga(e, b, d);
        e[b] = c(f);
    },
    bh = function(a, b, c) {
        var d = Zg(a);
        return Ga(d, b, c);
    };
var ch = function() {
        for (
            var a = fc.userAgent + (F.cookie || "") + (F.referrer || ""),
                b = a.length,
                c = D.history.length; 0 < c;

        )
            a += c-- ^ b++;
        var d = 1,
            e,
            f,
            h;
        if (a)
            for (d = 0, f = a.length - 1; 0 <= f; f--)
                (h = a.charCodeAt(f)),
                (d = ((d << 6) & 268435455) + h + (h << 14)),
                (e = d & 266338304),
                (d = 0 != e ? d ^ (e >> 21) : d);
        return [
            Math.round(2147483647 * Math.random()) ^ (d & 2147483647),
            Math.round(Fa() / 1e3)
        ].join(".");
    },
    fh = function(a, b, c, d) {
        var e = dh(b);
        return Uf(a, e, eh(c), d);
    },
    gh = function(a, b, c, d) {
        var e = "" + dh(c),
            f = eh(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".");
    },
    dh = function(a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length;
    },
    eh = function(a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1;
    };
var hh = ["1"],
    ih = {},
    mh = function(a, b, c, d) {
        var e = jh(a);
        ih[e] || kh(e, b, c) || (lh(e, ch(), b, c, d), kh(e, b, c));
    };

function lh(a, b, c, d, e) {
    var f = gh(b, "1", d, c);
    Zf(
        a,
        f,
        c,
        d,
        0 == e ? void 0 : new Date(Fa() + 1e3 * (void 0 == e ? 7776e3 : e))
    );
}

function kh(a, b, c) {
    var d = fh(a, b, c, hh);
    d && (ih[a] = d);
    return d;
}

function jh(a) {
    return (a || "_gcl") + "_au";
}
var nh = function() {
    for (
        var a = [],
            b = F.cookie.split(";"),
            c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
            d = 0; d < b.length; d++
    ) {
        var e = b[d].match(c);
        e && a.push({ dd: e[1], value: e[2] });
    }
    var f = {};
    if (!a || !a.length) return f;
    for (var h = 0; h < a.length; h++) {
        var k = a[h].value.split(".");
        "1" == k[0] &&
            3 == k.length &&
            k[1] &&
            (f[a[h].dd] || (f[a[h].dd] = []),
                f[a[h].dd].push({ timestamp: k[1], $f: k[2] }));
    }
    return f;
};

function oh() {
    for (var a = ph, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
}

function qh() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
}
var ph, rh;

function sh(a) {
    ph = ph || qh();
    rh = rh || oh();
    for (var b = [], c = 0; c < a.length; c += 3) {
        var d = c + 1 < a.length,
            e = c + 2 < a.length,
            f = a.charCodeAt(c),
            h = d ? a.charCodeAt(c + 1) : 0,
            k = e ? a.charCodeAt(c + 2) : 0,
            l = f >> 2,
            m = ((f & 3) << 4) | (h >> 4),
            n = ((h & 15) << 2) | (k >> 6),
            q = k & 63;
        e || ((q = 64), d || (n = 64));
        b.push(ph[l], ph[m], ph[n], ph[q]);
    }
    return b.join("");
}

function th(a) {
    function b(l) {
        for (; d < a.length;) {
            var m = a.charAt(d++),
                n = rh[m];
            if (null != n) return n;
            if (!/^[\s\xa0]*$/.test(m))
                throw Error("Unknown base64 encoding at char: " + m);
        }
        return l;
    }
    ph = ph || qh();
    rh = rh || oh();
    for (var c = "", d = 0;;) {
        var e = b(-1),
            f = b(0),
            h = b(64),
            k = b(64);
        if (64 === k && -1 === e) return c;
        c += String.fromCharCode((e << 2) | (f >> 4));
        64 != h &&
            ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
                64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)));
    }
}
var uh;

function vh(a, b) {
    if (!a || b === F.location.hostname) return !1;
    for (var c = 0; c < a.length; c++)
        if (a[c] instanceof RegExp) {
            if (a[c].test(b)) return !0;
        } else if (0 <= b.indexOf(a[c])) return !0;
    return !1;
}
var zh = function() {
        var a = wh,
            b = xh,
            c = yh(),
            d = function(h) {
                a(h.target || h.srcElement || {});
            },
            e = function(h) {
                b(h.target || h.srcElement || {});
            };
        if (!c.init) {
            nc(F, "mousedown", d);
            nc(F, "keyup", d);
            nc(F, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this);
            };
            c.init = !0;
        }
    },
    Ah = function(a, b, c) {
        for (var d = yh().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h = d[f];
            if ((!c || h.forms) && vh(h.domains, a)) {
                var k = h.placement;
                void 0 == k && (k = h.fragment ? 2 : 1);
                k === b && Ia(e, h.callback());
            }
        }
        return e;
    },
    yh = function() {
        var a = hc("google_tag_data", {}),
            b = a.gl;
        (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
        return b;
    };
var Bh = /(.*?)\*(.*?)\*(.*)/,
    Ch = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Dh = /^(?:www\.|m\.|amp\.)+/,
    Eh = /([^?#]+)(\?[^#]*)?(#.*)?/,
    Gh = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d &&
                    d === d &&
                    null !== d &&
                    "[object Object]" !== d.toString() &&
                    (b.push(c), b.push(sh(String(d))));
            }
        var e = b.join("*");
        return ["1", Fh(e), e].join("*");
    },
    Fh = function(a, b) {
        var c = [
                window.navigator.userAgent,
                new Date().getTimezoneOffset(),
                window.navigator.userLanguage || window.navigator.language,
                Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
                a
            ].join("*"),
            d;
        if (!(d = uh)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, k = 0; 8 > k; k++)
                    h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
                e[f] = h;
            }
            d = e;
        }
        uh = d;
        for (var l = 4294967295, m = 0; m < c.length; m++)
            l = (l >>> 8) ^ uh[(l ^ c.charCodeAt(m)) & 255];
        return ((l ^ -1) >>> 0).toString(36);
    },
    Ih = function() {
        return function(a) {
            var b = Ze(D.location.href),
                c = b.search.replace("?", ""),
                d = Ve(c, "_gl", !0) || "";
            a.query = Hh(d) || {};
            var e = Ye(b, "fragment").match(/(.*?)(^|&)_gl=([^&]*)&?(.*)/);
            a.fragment = Hh((e && e[3]) || "") || {};
        };
    },
    Jh = function() {
        var a = Ih(),
            b = yh();
        b.data || ((b.data = { query: {}, fragment: {} }), a(b.data));
        var c = {},
            d = b.data;
        d && (Ia(c, d.query), Ia(c, d.fragment));
        return c;
    },
    Hh = function(a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = Bh.exec(d);
                        if (f) {
                            c = f;
                            break a;
                        }
                        d = decodeURIComponent(d);
                    }
                    c = void 0;
                }
                var h = c;
                if (h && "1" === h[1]) {
                    var k = h[3],
                        l;
                    a: {
                        for (var m = h[2], n = 0; n < b; ++n)
                            if (m === Fh(k, n)) {
                                l = !0;
                                break a;
                            }
                        l = !1;
                    }
                    if (l) {
                        for (
                            var q = {}, u = k ? k.split("*") : [], p = 0; p < u.length; p += 2
                        )
                            q[u[p]] = th(u[p + 1]);
                        return q;
                    }
                }
            }
        } catch (t) {}
    };

function Kh(a, b, c) {
    function d(m) {
        var n = m,
            q = /(.*?)(^|&)_gl=([^&]*)&?(.*)/.exec(n),
            u = n;
        if (q) {
            var p = q[2],
                t = q[4];
            u = q[1];
            t && (u = u + p + t);
        }
        m = u;
        var v = m.charAt(m.length - 1);
        m && "&" !== v && (m += "&");
        return m + l;
    }
    c = void 0 === c ? !1 : c;
    var e = Eh.exec(b);
    if (!e) return "";
    var f = e[1],
        h = e[2] || "",
        k = e[3] || "",
        l = "_gl=" + a;
    c ? (k = "#" + d(k.substring(1))) : (h = "?" + d(h.substring(1)));
    return "" + f + h + k;
}

function Lh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
        d = Ah(b, 1, c),
        e = Ah(b, 2, c);
    if (Ja(d)) {
        var f = Gh(d);
        if (c) {
            if (a && a.action) {
                var h = (a.method || "").toLowerCase();
                if ("get" === h) {
                    for (var k = a.childNodes || [], l = !1, m = 0; m < k.length; m++) {
                        var n = k[m];
                        if ("_gl" === n.name) {
                            n.setAttribute("value", f);
                            l = !0;
                            break;
                        }
                    }
                    if (!l) {
                        var q = F.createElement("input");
                        q.setAttribute("type", "hidden");
                        q.setAttribute("name", "_gl");
                        q.setAttribute("value", f);
                        a.appendChild(q);
                    }
                } else if ("post" === h) {
                    var u = Kh(f, a.action);
                    Te.test(u) && (a.action = u);
                }
            }
        } else Mh(f, a, !1);
    }
    if (!c && Ja(e)) {
        var p = Gh(e);
        Mh(p, a, !0);
    }
}

function Mh(a, b, c) {
    if (b.href) {
        var d = Kh(a, b.href, void 0 === c ? !1 : c);
        Te.test(d) && (b.href = d);
    }
}
var wh = function(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a;
                    }
                    c = c.parentNode;
                    d--;
                }
                b = null;
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                ("http:" !== f && "https:" !== f) || Lh(e, e.hostname);
            }
        } catch (h) {}
    },
    xh = function(a) {
        try {
            if (a.action) {
                var b = Ye(Ze(a.action), "host");
                Lh(a, b);
            }
        } catch (c) {}
    },
    Nh = function(a, b, c, d) {
        zh();
        var e = "fragment" === c ? 2 : 1,
            f = {
                callback: a,
                domains: b,
                fragment: 2 === e,
                placement: e,
                forms: !!d
            };
        yh().decorators.push(f);
    },
    Oh = function() {
        var a = F.location.hostname,
            b = Ch.exec(F.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                h = f[1];
            e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-");
        }
        var k = a.replace(Dh, ""),
            l = e.replace(Dh, ""),
            m;
        if (!(m = k === l)) {
            var n = "." + l;
            m = k.substring(k.length - n.length, k.length) === n;
        }
        return m;
    },
    Ph = function(a, b) {
        return !1 === a ? !1 : a || b || Oh();
    };
var Qh = {};
var Rh = /^\w+$/,
    Sh = /^[\w-]+$/,
    Th = /^~?[\w-]+$/,
    Uh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp" };

function Vh(a) {
    return a && "string" == typeof a && a.match(Rh) ? a : "_gcl";
}
var Xh = function() {
        var a = Ze(D.location.href),
            b = Ye(a, "query", !1, void 0, "gclid"),
            c = Ye(a, "query", !1, void 0, "gclsrc"),
            d = Ye(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || Ve(e, "gclid", void 0);
            c = c || Ve(e, "gclsrc", void 0);
        }
        return Wh(b, c, d);
    },
    Wh = function(a, b, c) {
        var d = {},
            e = function(f, h) {
                d[h] || (d[h] = []);
                d[h].push(f);
            };
        d.gclid = a;
        d.gclsrc = b;
        d.dclid = c;
        if (void 0 !== a && a.match(Sh))
            switch (b) {
                case void 0:
                    e(a, "aw");
                    break;
                case "aw.ds":
                    e(a, "aw");
                    e(a, "dc");
                    break;
                case "ds":
                    e(a, "dc");
                    break;
                case "3p.ds":
                    (void 0 == Qh.gtm_3pds ? 0 : Qh.gtm_3pds) && e(a, "dc");
                    break;
                case "gf":
                    e(a, "gf");
                    break;
                case "ha":
                    e(a, "ha");
                    break;
                case "gp":
                    e(a, "gp");
            }
        c && e(c, "dc");
        return d;
    },
    Zh = function(a) {
        var b = Xh();
        Yh(b, a);
    };

function Yh(a, b, c) {
    function d(q, u) {
        var p = $h(q, e);
        p && Zf(p, u, h, f, l, !0);
    }
    b = b || {};
    var e = Vh(b.prefix),
        f = b.domain || "auto",
        h = b.path || "/",
        k = void 0 == b.Ka ? 7776e3 : b.Ka;
    c = c || Fa();
    var l = 0 == k ? void 0 : new Date(c + 1e3 * k),
        m = Math.round(c / 1e3),
        n = function(q) {
            return ["GCL", m, q].join(".");
        };
    a.aw && (!0 === b.Lh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
    a.dc && d("dc", n(a.dc[0]));
    a.gf && d("gf", n(a.gf[0]));
    a.ha && d("ha", n(a.ha[0]));
    a.gp && d("gp", n(a.gp[0]));
}
var bi = function(a, b, c, d, e) {
        for (var f = Jh(), h = Vh(b), k = 0; k < a.length; ++k) {
            var l = a[k];
            if (void 0 !== Uh[l]) {
                var m = $h(l, h),
                    n = f[m];
                if (n) {
                    var q = Math.min(ai(n), Fa()),
                        u;
                    b: {
                        for (var p = q, t = Rf(m, F.cookie), v = 0; v < t.length; ++v)
                            if (ai(t[v]) > p) {
                                u = !0;
                                break b;
                            }
                        u = !1;
                    }
                    u ||
                        Zf(
                            m,
                            n,
                            c,
                            d,
                            0 == e ? void 0 : new Date(q + 1e3 * (null == e ? 7776e3 : e)), !0
                        );
                }
            }
        }
        var w = { prefix: b, path: c, domain: d };
        Yh(Wh(f.gclid, f.gclsrc), w);
    },
    $h = function(a, b) {
        var c = Uh[a];
        if (void 0 !== c) return b + c;
    },
    ai = function(a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1e3 * (Number(b[1]) || 0);
    };

function ci(a) {
    var b = a.split(".");
    if (3 == b.length && "GCL" == b[0] && b[1]) return b[2];
}
var di = function(a, b, c, d, e) {
        if (ua(b)) {
            var f = Vh(e);
            Nh(
                function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = $h(a[k], f);
                        if (l) {
                            var m = Rf(l, F.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1]);
                        }
                    }
                    return h;
                },
                b,
                c,
                d
            );
        }
    },
    ei = function(a) {
        return a.filter(function(b) {
            return Th.test(b);
        });
    },
    fi = function(a, b) {
        for (var c = Vh(b && b.prefix), d = {}, e = 0; e < a.length; e++)
            Uh[a[e]] && (d[a[e]] = Uh[a[e]]);
        za(d, function(f, h) {
            var k = Rf(c + h, F.cookie);
            if (k.length) {
                var l = k[0],
                    m = ai(l),
                    n = {};
                n[f] = [ci(l)];
                Yh(n, b, m);
            }
        });
    };
var gi = /^\d+\.fls\.doubleclick\.net$/;

function hi(a) {
    var b = Ze(D.location.href),
        c = Ye(b, "host", !1);
    if (c && c.match(gi)) {
        var d = Ye(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
}

function ii(a, b) {
    if ("aw" == a || "dc" == a) {
        var c = hi("gcl" + a);
        if (c) return c.split(".");
    }
    var d = Vh(b);
    if ("_gcl" == d) {
        var e;
        e = Xh()[a] || [];
        if (0 < e.length) return e;
    }
    var f = $h(a, d),
        h;
    if (f) {
        var k = [];
        if (F.cookie) {
            var l = Rf(f, F.cookie);
            if (l && 0 != l.length) {
                for (var m = 0; m < l.length; m++) {
                    var n = ci(l[m]);
                    n && -1 === r(k, n) && k.push(n);
                }
                h = ei(k);
            } else h = k;
        } else h = k;
    } else h = [];
    return h;
}
var ji = function() {
        var a = hi("gac");
        if (a) return decodeURIComponent(a);
        var b = nh(),
            c = [];
        za(b, function(d, e) {
            for (var f = [], h = 0; h < e.length; h++) f.push(e[h].$f);
            f = ei(f);
            f.length && c.push(d + ":" + f.join(","));
        });
        return c.join(";");
    },
    ki = function(a, b, c, d, e) {
        mh(b, c, d, e);
        var f = ih[jh(b)],
            h = Xh().dc || [],
            k = !1;
        if (f && 0 < h.length) {
            var l = (Vc.joined_au = Vc.joined_au || {}),
                m = b || "_gcl";
            if (!l[m])
                for (var n = 0; n < h.length; n++) {
                    var q = "https://adservice.google.com/ddm/regclk",
                        u = (q = q + "?gclid=" + h[n] + "&auiddc=" + f);
                    (fc.sendBeacon && fc.sendBeacon(u)) || mc(u);
                    k = l[m] = !0;
                }
        }
        null == a && (a = k);
        if (a && f) {
            var p = jh(b),
                t = ih[p];
            t && lh(p, t, c, d, e);
        }
    };
var li;
// if (3 === Uc.yb.length) li = "g";
// else {
//     var mi = "G";
//     mi = "g";
//     li = mi;
// }
var ni = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: li,
        OPT: "o"
    },
    oi = function(a) {
        var b = Uc.s.split("-"),
            c = b[0].toUpperCase(),
            d = ni[c] || "i",
            e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
            f;
        if (3 === Uc.yb.length) {
            var h = void 0;
            h = h || (Ud() ? "s" : "o");
            f = "2" + (h || "w");
        } else f = "";
        return f + d + Uc.yb + e;
    };
var pi = function(a) {
        return !(void 0 === a || null === a || 0 === (a + "").length);
    },
    qi = function(a, b) {
        var c;
        if (2 === b.V) return a("ord", wa(1e11, 1e13)), !0;
        if (3 === b.V) return a("ord", "1"), a("num", wa(1e11, 1e13)), !0;
        if (4 === b.V) return pi(b.sessionId) && a("ord", b.sessionId), !0;
        if (5 === b.V) c = "1";
        else if (6 === b.V) c = b.Yc;
        else return !1;
        pi(c) && a("qty", c);
        pi(b.Gb) && a("cost", b.Gb);
        pi(b.transactionId) && a("ord", b.transactionId);
        return !0;
    },
    ri = encodeURIComponent,
    si = function(a, b) {
        function c(n, q, u) {
            f.hasOwnProperty(n) ||
                ((q += ""), (e += ";" + n + "=" + (u ? q : ri(q))));
        }
        var d = a.Ec,
            e = a.protocol;
        e += a.Zb ?
            "//" + d + ".fls.doubleclick.net/activityi" :
            "//ad.doubleclick.net/activity";
        e += ";src=" + ri(d) + (";type=" + ri(a.Hc)) + (";cat=" + ri(a.fb));
        var f = a.Rf || {};
        za(f, function(n, q) {
            e += ";" + ri(n) + "=" + ri(q + "");
        });
        if (qi(c, a)) {
            pi(a.hc) && c("u", a.hc);
            pi(a.fc) && c("tran", a.fc);
            c("gtm", oi());
            !1 === a.vf && c("npa", "1");
            if (a.Dc) {
                var h = ii("dc", a.Fa);
                h && h.length && c("gcldc", h.join("."));
                var k = ii("aw", a.Fa);
                k && k.length && c("gclaw", k.join("."));
                var l = ji();
                l && c("gac", l);
                mh(a.Fa, void 0, a.Nf, a.Of);
                var m = ih[jh(a.Fa)];
                m && c("auiddc", m);
            }
            pi(a.Uc) && c("prd", a.Uc, !0);
            za(a.fd, function(n, q) {
                c(n, q);
            });
            e += b || "";
            pi(a.Ub) && c("~oref", a.Ub);
            a.Zb ? lc(e + "?", a.B) : mc(e + "?", a.B, a.w);
        } else G(a.w);
    };
var ti = ["input", "select", "textarea"],
    ui = ["button", "hidden", "image", "reset", "submit"],
    vi = function(a) {
        var b = a.tagName.toLowerCase();
        return !va(ti, function(c) {
                return c === b;
            }) ||
            ("input" === b &&
                va(ui, function(c) {
                    return c === a.type.toLowerCase();
                })) ?
            !1 :
            !0;
    },
    wi = function(a) {
        return a.form ?
            a.form.tagName ?
            a.form :
            F.getElementById(a.form) :
            tc(a, ["form"], 100);
    },
    xi = function(a, b, c) {
        if (!a.elements) return 0;
        for (
            var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++
        ) {
            var h = a.elements[e];
            if (vi(h)) {
                if (h.getAttribute(c) === d) return f;
                f++;
            }
        }
        return 0;
    };
var zi = function(a) {
        var b;
        if (a.hasOwnProperty("conversion_data")) b = "conversion_data";
        else if (a.hasOwnProperty("price")) b = "price";
        else return;
        var c = b,
            d = "/pagead/conversion/" + yi(a.conversion_id) + "/?",
            e = yi(JSON.stringify(a[c])),
            f =
            "https://www.googletraveladservices.com/travel/flights/clk" +
            d +
            c +
            "=" +
            e;
        if (a.conversionLinkerEnabled) {
            var h = ii("gf", a.cookiePrefix);
            if (h && h.length)
                for (var k = 0; k < h.length; k++) f += "&gclgf=" + yi(h[k]);
        }
        mc(f, a.onSuccess, a.onFailure);
    },
    yi = function(a) {
        return null === a || void 0 === a || 0 === String(a).length ?
            "" :
            encodeURIComponent(String(a));
    };
var Ai = !!D.MutationObserver,
    Bi = void 0,
    Ci = function(a) {
        if (!Bi) {
            var b = function() {
                var c = F.body;
                if (c)
                    if (Ai)
                        new MutationObserver(function() {
                            for (var e = 0; e < Bi.length; e++) G(Bi[e]);
                        }).observe(c, { childList: !0, subtree: !0 });
                    else {
                        var d = !1;
                        nc(c, "DOMNodeInserted", function() {
                            d ||
                                ((d = !0),
                                    G(function() {
                                        d = !1;
                                        for (var e = 0; e < Bi.length; e++) G(Bi[e]);
                                    }));
                        });
                    }
            };
            Bi = [];
            F.body ? b() : G(b);
        }
        Bi.push(a);
    };
var Yi = D.clearTimeout,
    Zi = D.setTimeout,
    R = function(a, b, c) {
        if (Ud()) {
            b && G(b);
        } else return jc(a, b, c);
    },
    $i = function() {
        return D.location.href;
    },
    aj = function(a) {
        return Ye(Ze(a), "fragment");
    },
    bj = function(a) {
        return Xe(Ze(a));
    },
    U = function(a, b) {
        return Kd(a, b || 2);
    },
    cj = function(a, b, c) {
        var d;
        b
            ?
            ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Ng(a))) :
            (d = Ng(a));
        return d;
    },
    dj = function(a, b) {
        D[a] = b;
    },
    X = function(a, b, c) {
        b && (void 0 === D[a] || (c && !D[a])) && (D[a] = b);
        return D[a];
    },
    ej = function(a, b, c) {
        return Rf(a, b, void 0 === c ? !0 : !!c);
    },
    fj = function(a, b) {
        if (Ud()) {
            b && G(b);
        } else lc(a, b);
    },
    gj = function(a) {
        return !!bh(a, "init", !1);
    },
    hj = function(a) {
        $g(a, "init", !0);
    },
    ij = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Zc;
        c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        R(Q("https://", "http://", c));
    },
    jj = function(a, b) {
        var c = a[b];
        return c;
    };
var kj = Vg.xg;
var lj;
var Ij = new xa();

function Jj(a, b) {
    function c(h) {
        var k = Ze(h),
            l = Ye(k, "protocol"),
            m = Ye(k, "host", !0),
            n = Ye(k, "port"),
            q = Ye(k, "path")
            .toLowerCase()
            .replace(/\/$/, "");
        if (
            void 0 === l ||
            ("http" == l && "80" == n) ||
            ("https" == l && "443" == n)
        )
            (l = "web"), (n = "default");
        return [l, m, n, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
        if (d[f] !== e[f]) return !1;
    return !0;
}

function Kj(a) {
    return Lj(a) ? 1 : 0;
}

function Lj(a) {
    var b = a.arg0,
        c = a.arg1;
    if (a.any_of && ua(c)) {
        for (var d = 0; d < c.length; d++)
            if (Kj({ function: a["function"], arg0: b, arg1: c[d] })) return !0;
        return !1;
    }
    switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var e;
            a: {
                if (b) {
                    var f = [
                        "matches",
                        "webkitMatchesSelector",
                        "mozMatchesSelector",
                        "msMatchesSelector",
                        "oMatchesSelector"
                    ];
                    try {
                        for (var h = 0; h < f.length; h++)
                            if (b[f[h]]) {
                                e = b[f[h]](c);
                                break a;
                            }
                    } catch (v) {}
                }
                e = !1;
            }
            return e;
        case "_ew":
            var k, l;
            k = String(b);
            l = String(c);
            var m = k.length - l.length;
            return 0 <= m && k.indexOf(l, m) == m;
        case "_eq":
            return String(b) == String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            var n;
            n = String(b).split(",");
            return 0 <= r(n, String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            var q;
            var u = a.ignore_case ? "i" : void 0;
            try {
                var p = String(c) + u,
                    t = Ij.get(p);
                t || ((t = new RegExp(c, u)), Ij.set(p, t));
                q = t.test(b);
            } catch (v) {
                q = !1;
            }
            return q;
        case "_sw":
            return 0 == String(b).indexOf(String(c));
        case "_um":
            return Jj(b, c);
    }
    return !1;
}
var Mj = function(a, b) {
    var c = function() {};
    c.prototype = a.prototype;
    var d = new c();
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d;
};
var Nj = {},
    Oj = encodeURI,
    Y = encodeURIComponent,
    Pj = mc;
var Qj = function(a, b) {
    if (!a) return !1;
    var c = Ye(Ze(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
            var f = c.length - e.length;
            0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
            if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
    }
    return !1;
};
var Rj = function(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
};
Nj.ng = function() {
    var a = !1;
    return a;
};
var dl = function() {
    var a = (D.gaGlobal = D.gaGlobal || {});
    a.hid = a.hid || wa();
    return a.hid;
};
var ol = window,
    pl = document,
    ql = function(a) {
        var b = ol._gaUserPrefs;
        if ((b && b.ioo && b.ioo()) || (a && !0 === ol["ga-disable-" + a]))
            return !0;
        try {
            var c = ol.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
        } catch (f) {}
        for (var d = Rf("AMP_TOKEN", pl.cookie, !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e]) return !0;
        return pl.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
var tl = function(a) {
    za(a, function(c) {
        "_" === c.charAt(0) && delete a[c];
    });
    var b = a[H.ca] || {};
    za(b, function(c) {
        "_" === c.charAt(0) && delete b[c];
    });
};
var xl = function(a, b, c) {
        Kf(b, c, a);
    },
    yl = function(a, b, c) {
        Kf(b, c, a, !0);
    },
    Al = function(a, b) {};

function zl(a, b) {}
var Bl = function(a) {
        var b = tf(a, "/2");
        return b ?
            b :
            -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ?
            Q(
                "https://",
                "http://",
                "www.googleadservices.com/pagead/conversion_async.js"
            ) :
            "https://www.google.com/pagead/conversion_async.js";
    },
    Cl = !1,
    Dl = [],
    El = ["aw", "dc"],
    Fl = function(a) {
        var b = D.google_trackConversion,
            c = a.gtm_onFailure;
        "function" == typeof b ? b(a) || c() : c();
    },
    Gl = function() {
        for (; 0 < Dl.length;) Fl(Dl.shift());
    },
    Hl = function(a) {
        if (!Cl) {
            Cl = !0;
            He();
            var b = function() {
                Gl();
                Dl = { push: Fl };
            };
            Ud() ?
                b() :
                jc(a, b, function() {
                    Gl();
                    Cl = !1;
                });
        }
    },
    Il = function(a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d &&
                    b.push({
                        item_id: d.id,
                        quantity: d.quantity,
                        value: d.price,
                        start_date: d.start_date,
                        end_date: d.end_date
                    });
            }
            return b;
        }
    },
    Jl = function(a, b, c, d) {
        var e = Rc(a),
            f = b == H.D,
            h = e.o[0],
            k = e.o[1],
            l = void 0 !== k,
            m = function(W) {
                return d.getWithConfig(W);
            },
            n = !1 !== m(H.Ca),
            q = m(H.Aa) || m(H.S),
            u = m(H.P),
            p = m(H.Y),
            t = Bl(m(H.ia));
        if (f) {
            var v = m(H.na) || {};
            if (n) {
                Ph(v[H.Ua], !!v[H.C]) && bi(El, q, void 0, u, p);
                var w = { prefix: q, domain: u, Ka: p };
                Zh(w);
                fi(["aw", "dc"], w);
            }
            v[H.C] && di(El, v[H.C], v[H.Xa], !!v[H.Va], q);
            var y = !1;
            y ? ge(e, d) : ge(e);
        }
        var x = !1 === m(H.Ad) || !1 === m(H.$a);
        if (!f || (!l && !x))
            if ((!0 === m(H.Bd) && (l = !1), !1 !== m(H.X) || l)) {
                var z = {
                    google_conversion_id: h,
                    google_remarketing_only: !l,
                    onload_callback: d.B,
                    gtm_onFailure: d.w,
                    google_conversion_format: "3",
                    google_conversion_color: "ffffff",
                    google_conversion_domain: "",
                    google_conversion_label: k,
                    google_conversion_language: m(H.Ea),
                    google_conversion_value: m(H.W),
                    google_conversion_currency: m(H.aa),
                    google_conversion_order_id: m(H.ab),
                    google_user_id: m(H.cb),
                    google_conversion_page_url: m(H.Ya),
                    google_conversion_referrer_url: m(H.Za),
                    google_gtm: oi(),
                    google_transport_url: tf(m(H.ia), "/")
                };
                z.google_restricted_data_processing = m(H.oc);
                Ud() &&
                    ((z.opt_image_generator = function() {
                            return new Image();
                        }),
                        (z.google_enable_display_cookie_match = !1));
                !1 === m(H.X) && (z.google_allow_ad_personalization_signals = !1);
                z.google_read_gcl_cookie_opt_out = !n;
                n && q && (z.google_gcl_cookie_prefix = q);
                var C = (function() {
                    var W = m(H.Hb),
                        S = { event: b };
                    if (ua(W)) {
                        I("GTM", 26);
                        for (var na = 0; na < W.length; ++na) {
                            var ha = W[na],
                                N = m(ha);
                            void 0 !== N && (S[ha] = N);
                        }
                        return S;
                    }
                    var L = d.eventModel;
                    if (!L) return null;
                    B(L, S);
                    for (var P = 0; P < H.xd.length; ++P) delete S[H.xd[P]];
                    return S;
                })();
                C && (z.google_custom_params = C);
                !l &&
                    m(H.M) &&
                    (z.google_gtag_event_data = { items: m(H.M), value: m(H.W) });
                if (l && b == H.ma) {
                    z.google_conversion_merchant_id = m(H.Hd);
                    z.google_basket_feed_country = m(H.Ed);
                    z.google_basket_feed_language = m(H.Gd);
                    z.google_basket_discount = m(H.Cd);
                    z.google_basket_transaction_type = b;
                    z.google_disable_merchant_reported_conversions = !0 === m(H.Md);
                    Ud() && (z.google_disable_merchant_reported_conversions = !0);
                    var A = Il(m(H.M));
                    A && (z.google_conversion_items = A);
                }
                var E = function(W, S) {
                    void 0 != S &&
                        "" !== S &&
                        ((z.google_additional_conversion_params =
                                z.google_additional_conversion_params || {}),
                            (z.google_additional_conversion_params[W] = S));
                };
                l &&
                    ("boolean" === typeof m(H.ic) && E("vdnc", m(H.ic)),
                        E("vdltv", m(H.Kd)));
                var J = !0;
                J && Dl.push(z);
            }
        Hl(t);
    };
var Kl = function(a, b, c, d, e, f) {
        var h = { config: a, gtm: oi() };
        c && (mh(d, void 0, e, f), (h.auiddc = ih[jh(d)]));
        b && (h.loadInsecure = b);
        void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = []);
        D.__dc_ns_processor.push(h);
        jc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js");
    },
    Ll = function(a, b, c) {
        var d = /^u([1-9]\d?|100)$/,
            e = a.getWithConfig(H.oh) || {},
            f = Pd(b, c);
        var h = {},
            k = {};
        if (Ra(e))
            for (var l in e)
                if (e.hasOwnProperty(l) && d.test(l)) {
                    var m = e[l];
                    g(m) && (h[l] = m);
                }
        for (var n = 0; n < f.length; n++) {
            var q = f[n];
            d.test(q) && (h[q] = q);
        }
        for (var u in h) h.hasOwnProperty(u) && (k[u] = a.getWithConfig(h[u]));
        return k;
    },
    Ml = function(a) {
        function b(l, m, n) {
            void 0 !== n &&
                0 !== (n + "").length &&
                d.push(l + m + ":" + c(n + ""));
        }
        var c = encodeURIComponent,
            d = [],
            e = a(H.M) || [];
        if (ua(e))
            for (var f = 0; f < e.length; f++) {
                var h = e[f],
                    k = f + 1;
                b("i", k, h.id);
                b("p", k, h.price);
                b("q", k, h.quantity);
                b("c", k, a(H.kh));
                b("l", k, a(H.Ea));
            }
        return d.join("|");
    },
    Nl = function(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
            var c = {
                standard: 2,
                unique: 3,
                per_session: 4,
                transactions: 5,
                items_sold: 6,
                "": 1
            }[(b[5] || "").toLowerCase()];
            if (c)
                return {
                    containerId: "DC-" + b[1],
                    N: b[3] ? a : "",
                    pf: b[1],
                    nf: b[3] || "",
                    fb: b[4] || "",
                    V: c
                };
        }
    },
    Pl = function(a, b, c, d) {
        var e = Nl(a);
        if (e) {
            var f = function(M) {
                    return d.getWithConfig(M);
                },
                h = !1 !== f(H.Ca),
                k = f(H.Aa) || f(H.S),
                l = f(H.P),
                m = f(H.Y),
                n = f(H.qh),
                q = 3 === Vd();
            if (b === H.D) {
                var u = f(H.na) || {},
                    p = f(H.sb),
                    t = void 0 === p ? !0 : !!p;
                if (h) {
                    if (Ph(u[H.Ua], !!u[H.C])) {
                        bi(Ol, k, void 0, l, m);
                    }
                    var v = { prefix: k, domain: l, Ka: m };
                    Zh(v);
                    fi(Ol, v);
                    ki(t, k, void 0, l, m);
                }
                if (u[H.C]) {
                    di(Ol, u[H.C], u[H.Xa], !!u[H.Va], k);
                }
                if (n && n.exclusion_parameters && n.engines)
                    if (Ud()) {} else Kl(n, q, h, k, l, m);
                G(d.B);
            } else {
                var w = {},
                    y = f(H.ph);
                if (Ra(y))
                    for (var x in y)
                        if (y.hasOwnProperty(x)) {
                            var z = y[x];
                            void 0 !== z && null !== z && (w[x] = z);
                        }
                var C = "";
                if (5 === e.V || 6 === e.V) C = Ml(f);
                var A = Ll(d, e.containerId, e.N),
                    E = !0 === f(H.Xg);
                if (Ud() && E) {
                    E = !1;
                }
                var J = {
                    fb: e.fb,
                    Dc: h,
                    Nf: l,
                    Of: m,
                    Fa: k,
                    Gb: f(H.W),
                    V: e.V,
                    Rf: w,
                    Ec: e.pf,
                    Hc: e.nf,
                    w: d.w,
                    B: d.B,
                    Ub: Xe(Ze(D.location.href)),
                    Uc: C,
                    protocol: q ? "http:" : "https:",
                    Yc: f(H.Ve),
                    Zb: E,
                    sessionId: f(H.Pb),
                    fc: void 0,
                    transactionId: f(H.ab),
                    hc: void 0,
                    fd: A,
                    vf: !1 !== f(H.X)
                };
                si(J);
            }
        } else G(d.w);
    },
    Ol = ["aw", "dc"];
var Ql = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
    Sl = function(a, b, c, d) {
        var e = function(w) {
                return d.getWithConfig(w);
            },
            f = Rc(a).o[0],
            h = !1 !== e(H.Ca),
            k = e(H.Aa) || e(H.S),
            l = e(H.P),
            m = e(H.Y);
        if (b === H.D) {
            if (h) {
                var n = { prefix: k, domain: l, Ka: m };
                Zh(n);
                fi(["aw", "dc"], n);
            }
            G(d.B);
        } else {
            var q = {
                    conversion_id: f,
                    onFailure: d.w,
                    onSuccess: d.B,
                    conversionLinkerEnabled: h,
                    cookiePrefix: k
                },
                u = Ql.test(D.location.href);
            if (b !== H.ma) G(d.w);
            else {
                var t = {
                        partner_id: f,
                        trip_type: e(H.df),
                        total_price: e(H.W),
                        currency: e(H.aa),
                        is_direct_booking: u,
                        flight_segment: Rl(e(H.M))
                    },
                    v = e(H.Vd);
                v &&
                    "object" === typeof v &&
                    ((t.passengers_total = v.total),
                        (t.passengers_adult = v.adult),
                        (t.passengers_child = v.child),
                        (t.passengers_infant_in_seat = v.infant_in_seat),
                        (t.passengers_infant_in_lap = v.infant_in_lap));
                q.conversion_data = t;
                zi(q);
            }
        }
    },
    Rl = function(a) {
        if (a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d];
                !e ||
                    (void 0 !== e.category &&
                        "" !== e.category &&
                        "FlightSegment" !== e.category) ||
                    ((b[c] = {
                            cabin: e.travel_class,
                            fare_product: e.fare_product,
                            booking_code: e.booking_code,
                            flight_number: e.flight_number,
                            origin: e.origin,
                            destination: e.destination,
                            departure_date: e.start_date
                        }),
                        c++);
            }
            return b;
        }
    };
var Xl = function(a, b, c, d) {
        var e = Rc(a),
            f = function(w) {
                return d.getWithConfig(w);
            },
            h = !1 !== f(H.Ca),
            k = f(H.Aa) || f(H.S),
            l = f(H.P),
            m = f(H.Y);
        if (b === H.D) {
            var n = f(H.na) || {};
            if (h) {
                Ph(n[H.Ua], !!n[H.C]) && bi(Tl, k, void 0, l, m);
                var q = { prefix: k, domain: l, Ka: m };
                Zh(q);
                fi(["aw", "dc"], q);
            }
            if (n[H.C]) {
                di(Tl, n[H.C], n[H.Xa], !!n[H.Va], k);
            }
            G(d.B);
        } else {
            var u = e.o[0];
            if (/^\d+$/.test(u)) {
                var p =
                    "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" +
                    encodeURIComponent(u) +
                    "/";
                if (b === H.ma) {
                    var t = Ul(f(H.ab), f(H.W), f(H.aa), f(H.M));
                    t = encodeURIComponent(Vl(t));
                    p += "?data=" + t;
                } else if (b === H.Ta) {
                    var v = Wl(u, f(H.W), f(H.Td), f(H.aa), f(H.M));
                    v = encodeURIComponent(Vl(v));
                    p +=
                        "?label=FH&guid=ON&script=0&ord=" +
                        wa(0, 4294967295) +
                        ("&price=" + v);
                } else {
                    G(d.w);
                    return;
                }
                h &&
                    (p += ii("ha", k)
                        .map(function(w) {
                            return "&gclha=" + encodeURIComponent(w);
                        })
                        .join(""));
                mc(p, d.B, d.w);
            } else G(d.w);
        }
    },
    Ul = function(a, b, c, d) {
        var e = {};
        Yl(a) && (e.hct_booking_xref = a);
        g(c) && (e.hct_currency_code = c);
        Yl(b) && ((e.hct_total_price = b), (e.hct_base_price = b));
        if (!ua(d) || 0 === d.length) return e;
        var f = d[0];
        if (!Ra(f)) return e;
        Yl(f[Zl.sa]) && (e.hct_partner_hotel_id = f[Zl.sa]);
        g(f[Zl.ja]) && (e.hct_checkin_date = f[Zl.ja]);
        g(f[Zl.Pa]) && (e.hct_checkout_date = f[Zl.Pa]);
        return e;
    },
    Wl = function(a, b, c, d, e) {
        function f(n) {
            void 0 === n && (n = 0);
            if (Yl(n)) return l + n;
        }

        function h(n, q, u) {
            u(q) && (k[n] = q);
        }
        var k = {};
        k.partner_id = a;
        var l = "USD";
        g(d) && (l = k.currency = d);
        Yl(b) &&
            ((k.base_price_value_string = f(b)),
                (k.display_price_value_string = f(b)));
        Yl(c) && (k.tax_price_value_string = f(c));
        g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
        if (!ua(e) || 0 == e.length) return k;
        var m = e[0];
        if (!Ra(m)) return k;
        Yl(m[Zl.Fd]) && (k.total_price_value_string = f(m[Zl.Fd]));
        h("partner_hotel_id", m[Zl.sa], Yl);
        h("check_in_date", m[Zl.ja], g);
        h("check_out_date", m[Zl.Pa], g);
        h("adults", m[Zl.$e], $l);
        h(Zl.Jd, m[Zl.Jd], g);
        h(Zl.Id, m[Zl.Id], g);
        return k;
    },
    Vl = function(a) {
        var b = [];
        za(a, function(c, d) {
            b.push(c + "=" + d);
        });
        return b.join(";");
    },
    Yl = function(a) {
        return g(a) || $l(a);
    },
    $l = function(a) {
        return "number" === typeof a;
    },
    Zl = {
        sa: "id",
        Fd: "price",
        ja: "start_date",
        Pa: "end_date",
        $e: "occupancy",
        Jd: "room_id",
        Id: "rate_rule_id"
    },
    Tl = ["ha"];
var nm = function(a, b, c, d) {
        var e = "https://www.google-analytics.com/analytics.js",
            f = Oe();
        if (qa(f)) {
            var h = "gtag_" + a.split("-").join("_"),
                k = function(x) {
                    var z = [].slice.call(arguments, 0);
                    z[0] = h + "." + z[0];
                    f.apply(window, z);
                },
                l = function() {
                    var x = function(E, J) {
                            for (var M = 0; J && M < J.length; M++) k(E, J[M]);
                        },
                        z = em(b, d);
                    if (z) {
                        var C = z.action;
                        if ("impressions" === C) x("ec:addImpression", z.hg);
                        else if ("promo_click" === C || "promo_view" === C) {
                            var A = z.Vc;
                            x("ec:addPromo", z.Vc);
                            A &&
                                0 < A.length &&
                                "promo_click" === C &&
                                k("ec:setAction", C);
                        } else x("ec:addProduct", z.La), k("ec:setAction", C, z.eb);
                    }
                },
                m = function() {
                    if (Ud()) {} else {
                        var x = d.getWithConfig(H.Re);
                        x &&
                            (k("require", x, { dataLayer: "dataLayer" }),
                                k("require", "render"));
                    }
                },
                n = fm(a, h, b, d);
            gm(h, n.Ga) &&
                (f(function() {
                        Me() && Me().remove(h);
                    }),
                    (hm[h] = !1));
            f("create", a, n.Ga);
            (function() {
                var x = d.getWithConfig("custom_map");
                f(function() {
                    if (Ra(x)) {
                        var z = n.ka,
                            C = Me().getByName(h),
                            A;
                        for (A in x)
                            if (
                                x.hasOwnProperty(A) &&
                                /^(dimension|metric)\d+$/.test(A) &&
                                void 0 != x[A]
                            ) {
                                var E = C.get(im(x[A]));
                                jm(z, A, E);
                            }
                    }
                });
            })();
            (function(x) {
                if (x) {
                    var z = {};
                    if (Ra(x))
                        for (var C in km) km.hasOwnProperty(C) && lm(km[C], C, x[C], z);
                    k("require", "linkid", z);
                }
            })(n.linkAttribution);
            var u = n[H.na];
            if (u && u[H.C]) {
                var p = u[H.Xa];
                Pe(
                    h + ".",
                    u[H.C],
                    void 0 === p ? !!u.use_anchor : "fragment" === p, !!u[H.Va]
                );
            }
            var t = function(x, z, C) {
                C && (z = "" + z);
                n.ka[x] = z;
            };
            if (b === H.ad) m(), k("send", "pageview", n.ka);
            else if (b === H.D) {
                m();
                var v = !1;
                v ? ge(a, d) : ge(a);
                0 != n.sendPageView && k("send", "pageview", n.ka);
            } else
                "screen_view" === b ?
                k("send", "screenview", n.ka) :
                "timing_complete" === b ?
                (t("timingCategory", n.eventCategory, !0),
                    t("timingVar", n.name, !0),
                    t("timingValue", Aa(n.value)),
                    void 0 !== n.eventLabel && t("timingLabel", n.eventLabel, !0),
                    k("send", "timing", n.ka)) :
                "exception" === b ?
                k("send", "exception", n.ka) :
                "optimize.callback" !== b &&
                (0 <=
                    r(
                        [
                            H.Zc,
                            "select_content",
                            H.Ta,
                            H.Ab,
                            H.Bb,
                            H.Sa,
                            "set_checkout_option",
                            H.ma,
                            H.Cb,
                            "view_promotion",
                            "checkout_progress"
                        ],
                        b
                    ) && (k("require", "ec", "ec.js"), l()),
                    t("eventCategory", n.eventCategory, !0),
                    t("eventAction", n.eventAction || b, !0),
                    void 0 !== n.eventLabel && t("eventLabel", n.eventLabel, !0),
                    void 0 !== n.value && t("eventValue", Aa(n.value)),
                    k("send", "event", n.ka));
            if (!mm) {
                mm = !0;
                He();
                var w = d.w,
                    y = function() {
                        Me().loaded || w();
                    };
                Ud() ? G(y) : jc(e, y, w);
            }
        } else G(d.w);
    },
    mm,
    hm = {},
    om = {
        client_id: 1,
        client_storage: "storage",
        cookie_name: 1,
        cookie_domain: 1,
        cookie_expires: 1,
        cookie_path: 1,
        cookie_update: 1,
        sample_rate: 1,
        site_speed_sample_rate: 1,
        use_amp_client_id: 1,
        store_gac: 1,
        conversion_linker: "storeGac"
    },
    pm = {
        anonymize_ip: 1,
        app_id: 1,
        app_installer_id: 1,
        app_name: 1,
        app_version: 1,
        campaign: {
            name: "campaignName",
            source: "campaignSource",
            medium: "campaignMedium",
            term: "campaignTerm",
            content: "campaignContent",
            id: "campaignId"
        },
        currency: "currencyCode",
        description: "exDescription",
        fatal: "exFatal",
        language: 1,
        non_interaction: 1,
        page_hostname: "hostname",
        page_referrer: "referrer",
        page_path: "page",
        page_location: "location",
        page_title: "title",
        screen_name: 1,
        transport_type: "transport",
        user_id: 1
    },
    qm = {
        content_id: 1,
        event_category: 1,
        event_action: 1,
        event_label: 1,
        link_attribution: 1,
        linker: 1,
        method: 1,
        name: 1,
        send_page_view: 1,
        value: 1
    },
    km = {
        cookie_name: 1,
        cookie_expires: "duration",
        levels: 1
    },
    rm = {
        anonymize_ip: 1,
        fatal: 1,
        non_interaction: 1,
        use_amp_client_id: 1,
        send_page_view: 1,
        store_gac: 1,
        conversion_linker: 1
    },
    lm = function(a, b, c, d) {
        if (void 0 !== c)
            if (
                (rm[b] && (c = Ba(c)),
                    "anonymize_ip" !== b || c || (c = void 0),
                    1 === a)
            )
                d[im(b)] = c;
            else if (g(a)) d[a] = c;
        else
            for (var e in a)
                a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    im = function(a) {
        return a && g(a) ?
            a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase();
            }) :
            a;
    },
    sm = function(a) {
        var b = "general";
        0 <=
            r(
                [
                    H.yd,
                    H.Ab,
                    H.zd,
                    H.Sa,
                    "checkout_progress",
                    H.ma,
                    H.Cb,
                    H.Bb,
                    "set_checkout_option"
                ],
                a
            ) ?
            (b = "ecommerce") :
            0 <=
            r(
                "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
                    " "
                ),
                a
            ) ?
            (b = "engagement") :
            "exception" === a && (b = "error");
        return b;
    },
    jm = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c);
    },
    tm = function(a) {
        if (ua(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id,
                        f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
                }
            }
            return 0 < b.length ? b.join("!") : void 0;
        }
    },
    fm = function(a, b, c, d) {
        var e = function(A) {
                return d.getWithConfig(A);
            },
            f = {},
            h = {},
            k = {},
            l = tm(e(H.Me));
        l && jm(h, "exp", l);
        var m = e("custom_map");
        if (Ra(m))
            for (var n in m)
                if (
                    m.hasOwnProperty(n) &&
                    /^(dimension|metric)\d+$/.test(n) &&
                    void 0 != m[n]
                ) {
                    var q = e(String(m[n]));
                    void 0 !== q && jm(h, n, q);
                }
        var u = Pd(a);
        for (var p = 0; p < u.length; ++p) {
            var t = u[p],
                v = e(t);
            if (qm.hasOwnProperty(t)) lm(qm[t], t, v, f);
            else if (pm.hasOwnProperty(t)) lm(pm[t], t, v, h);
            else if (om.hasOwnProperty(t)) lm(om[t], t, v, k);
            else if (/^(dimension|metric|content_group)\d+$/.test(t))
                lm(1, t, v, h);
            else if ("developer_id" === t) {} else t === H.S && 0 > r(u, H.Fb) && (k.cookieName = v + "_ga");
        }
        jm(k, "cookieDomain", "auto");
        jm(h, "forceSSL", !0);
        jm(f, "eventCategory", sm(c));
        0 <=
            r(
                [
                    "view_item",
                    "view_item_list",
                    "view_promotion",
                    "view_search_results"
                ],
                c
            ) && jm(h, "nonInteraction", !0);
        "login" === c || "sign_up" === c || "share" === c ?
            jm(f, "eventLabel", e(H.Pe)) :
            "search" === c || "view_search_results" === c ?
            jm(f, "eventLabel", e(H.Ze)) :
            "select_content" === c && jm(f, "eventLabel", e(H.ih));
        var y = f[H.na] || {},
            x = y[H.Ua];
        x || (0 != x && y[H.C]) ?
            (k.allowLinker = !0) :
            !1 === x && jm(k, "useAmpClientId", !1);
        if (!1 === e(H.dh) || !1 === e(H.X) || !1 === e(H.Qa))
            h.allowAdFeatures = !1;
        !1 === e(H.X) && I("GTM", 27);
        k.name = b;
        h["&gtm"] = oi(!0);
        h.hitCallback = d.B;
        var z = e(H.Oe) || Kd("gtag.remote_config." + a + ".url", 2),
            C = e(H.Ne) || Kd("gtag.remote_config." + a + ".dualId", 2);
        z && null != gc && (k._x_19 = z);
        C && (k._x_20 = C);
        f.ka = h;
        f.Ga = k;
        return f;
    },
    em = function(a, b) {
        function c(v) {
            var w = B(v);
            w.list = v.list_name;
            w.listPosition = v.list_position;
            w.position = v.list_position || v.creative_slot;
            w.creative = v.creative_name;
            return w;
        }

        function d(v) {
            for (var w = [], y = 0; v && y < v.length; y++) v[y] && w.push(c(v[y]));
            return w.length ? w : void 0;
        }

        function e(v) {
            return {
                id: f(H.ab),
                affiliation: f(H.Ge),
                revenue: f(H.W),
                tax: f(H.Td),
                shipping: f(H.Le),
                coupon: f(H.Ie),
                list: f(H.gd) || v
            };
        }
        for (
            var f = function(v) {
                    return b.getWithConfig(v);
                },
                h = f(H.M),
                k,
                l = 0; h && l < h.length && !(k = h[l][H.gd]); l++
        );
        var m = f("custom_map");
        if (Ra(m))
            for (var n = 0; h && n < h.length; ++n) {
                var q = h[n],
                    u;
                for (u in m)
                    m.hasOwnProperty(u) &&
                    /^(dimension|metric)\d+$/.test(u) &&
                    void 0 != m[u] &&
                    jm(q, u, q[m[u]]);
            }
        var p = null,
            t = f(H.Je);
        a === H.ma || a === H.Cb ?
            (p = { action: a, eb: e(), La: d(h) }) :
            a === H.Ab ?
            (p = { action: "add", La: d(h) }) :
            a === H.Bb ?
            (p = { action: "remove", La: d(h) }) :
            a === H.Ta ?
            (p = { action: "detail", eb: e(k), La: d(h) }) :
            a === H.Zc ?
            (p = { action: "impressions", hg: d(h) }) :
            "view_promotion" === a ?
            (p = { action: "promo_view", Vc: d(t) }) :
            "select_content" === a && t && 0 < t.length ?
            (p = { action: "promo_click", Vc: d(t) }) :
            "select_content" === a ?
            (p = { action: "click", eb: { list: f(H.gd) || k }, La: d(h) }) :
            a === H.Sa || "checkout_progress" === a ?
            (p = {
                action: "checkout",
                La: d(h),
                eb: { step: a === H.Sa ? 1 : f(H.Rd), option: f(H.Qd) }
            }) :
            "set_checkout_option" === a &&
            (p = {
                action: "checkout_option",
                eb: { step: f(H.Rd), option: f(H.Qd) }
            });
        p && (p.yh = f(H.aa));
        return p;
    },
    um = {},
    gm = function(a, b) {
        var c = um[a];
        um[a] = B(b);
        if (!c) return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
        return !1;
    };
var Z = { a: {} };

(Z.a.gtagha = ["google"]),
(function() {
    var a = !1;
    var b = function(c) {
        var d = c.vtp_conversionId,
            e = cd,
            f = U("eventModel");
        if (a) {
            Jf(d.id, Xl);
            if (e === H.D) {
                var h = U("gtag.targets." + d.id);
                Lf(h, d.id);
            } else Kf(e, f, d.id);
            G(c.vtp_gtmOnSuccess);
        } else {
            var k = Cf(Bf(wf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
            k.getWithConfig = function(l) {
                return Md(l, d.containerId, d.id);
            };
            Xl(d.id, e, new Date().getTime(), k);
        }
    };
    Z.__gtagha = b;
    Z.__gtagha.b = "gtagha";
    Z.__gtagha.g = !0;
    Z.__gtagha.priorityOverride = 0;
})();
(Z.a.e = ["google"]),
(function() {
    (function(a) {
        Z.__e = a;
        Z.__e.b = "e";
        Z.__e.g = !0;
        Z.__e.priorityOverride = 0;
    })(function(a) {
        return String(Sd(a.vtp_gtmEventId, "event"));
    });
})();

(Z.a.v = ["google"]),
(function() {
    (function(a) {
        Z.__v = a;
        Z.__v.b = "v";
        Z.__v.g = !0;
        Z.__v.priorityOverride = 0;
    })(function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = U(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
    });
})();

(Z.a.gtagaw = ["google"]),
(function() {
    (function(a) {
        Z.__gtagaw = a;
        Z.__gtagaw.b = "gtagaw";
        Z.__gtagaw.g = !0;
        Z.__gtagaw.priorityOverride = 0;
    })(function(a) {
        var b = a.vtp_conversionId,
            c = cd;
        Jf(b.id, Jl);
        if (c === H.D) {
            var d = U("gtag.targets." + b.id);
            Lf(d, b.id);
        } else {
            var e = U("eventModel");
            Kf(c, e, b.id);
        }
        G(a.vtp_gtmOnSuccess);
    });
})();

(Z.a.get = ["google"]),
(function() {
    (function(a) {
        Z.__get = a;
        Z.__get.b = "get";
        Z.__get.g = !0;
        Z.__get.priorityOverride = 0;
    })(function(a) {
        if (a.vtp_isAutoTag) {
            var b = String(a.vtp_trackingId),
                c = cd || "",
                d = {};
            if (c === H.D) {
                var e = U("gtag.targets." + b);
                B(e, d);
                d[H.qa] = !0;
                Lf(d, b);
            } else {
                var f = U("eventModel");
                B(f, d);
                d[H.qa] = !0;
                Kf(c, d, b);
            }
        } else {
            var h = a.vtp_settings;
            (a.vtp_deferrable ? yl : xl)(
                String(h.streamId),
                String(a.vtp_eventName),
                h.eventParameters || {}
            );
        }
        a.vtp_gtmOnSuccess();
    });
})();

(Z.a.gtagfl = []),
(function() {
    function a(d) {
        var e = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(d);
        if (e) return { containerId: "DC-" + e[1], N: e[3] && d };
    }
    var b = !1;
    var c = function(d) {
        var e = d.vtp_targetId,
            f = cd,
            h = U("eventModel");
        if (b) {
            Jf(e, Pl);
            if (f === H.D) {
                var k = U("gtag.targets." + e);
                Lf(k, e);
            } else Kf(f, h, e);
            G(d.vtp_gtmOnSuccess);
        } else {
            var l = a(e);
            if (l) {
                var m = Cf(Bf(wf(h), d.vtp_gtmOnSuccess), d.vtp_gtmOnFailure);
                m.getWithConfig = function(n) {
                    return Md(n, l.containerId, l.N);
                };
                Pl(e, f, new Date().getTime(), m);
            } else G(d.vtp_gtmOnFailure);
        }
    };
    Z.__gtagfl = c;
    Z.__gtagfl.b = "gtagfl";
    Z.__gtagfl.g = !0;
    Z.__gtagfl.priorityOverride = 0;
})();

(Z.a.gtaggf = ["google"]),
(function() {
    var a = !1;
    a = !0;
    var b = function(c) {
        var d = c.vtp_conversionId,
            e = cd,
            f = U("eventModel");
        if (a) {
            Jf(d.id, Sl);
            if (e === H.D) {
                var h = U("gtag.targets." + d.id);
                Lf(h, d.id);
            } else Kf(e, f, d.id);
            G(c.vtp_gtmOnSuccess);
        } else {
            var k = Cf(Bf(wf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
            k.getWithConfig = function(l) {
                return Md(l, d.containerId, d.id);
            };
            Sl(d.id, e, new Date().getTime(), k);
        }
    };
    Z.__gtaggf = b;
    Z.__gtaggf.b = "gtaggf";
    Z.__gtaggf.g = !0;
    Z.__gtaggf.priorityOverride = 0;
})();

(Z.a.gtagua = ["google"]),
(function() {
    var a = !1;
    a = !0;
    var b = function(c) {
        var d = c.vtp_trackingId,
            e = cd,
            f = U("eventModel");
        if (a) {
            Jf(d, nm);
            if (e === H.D) {
                var h = U("gtag.targets." + d);
                Lf(h, d);
            } else Kf(e, f, d);
            G(c.vtp_gtmOnSuccess);
        } else {
            var k = Cf(Bf(wf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
            k.getWithConfig = function(l) {
                return Md(l, d, void 0);
            };
            nm(d, e, new Date().getTime(), k);
        }
    };
    Z.__gtagua = b;
    Z.__gtagua.b = "gtagua";
    Z.__gtagua.g = !0;
    Z.__gtagua.priorityOverride = 0;
})();

var vm = {};
(vm.macro = function(a) {
    if (Vg.xc.hasOwnProperty(a)) return Vg.xc[a];
}),
(vm.onHtmlSuccess = Vg.be(!0)),
(vm.onHtmlFailure = Vg.be(!1));
vm.dataLayer = Ld;
vm.callback = function(a) {
    ed.hasOwnProperty(a) && qa(ed[a]) && ed[a]();
    delete ed[a];
};

function wm() {
    Vc[Uc.s] = vm;
    Ia(fd, Z.a);
    zb = zb || Vg;
    Ab = pe;
}

function xm() {
    Qh.gtm_3pds = !0;
    Vc = D.google_tag_manager = D.google_tag_manager || {};
    if (Vc[Uc.s]) {
        var a = Vc.zones;
        a && a.unregisterChild(Uc.s);
    } else {
        for (
            var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++
        )
            rb.push(c[d]);
        for (var e = b.tags || [], f = 0; f < e.length; f++) vb.push(e[f]);
        for (var h = b.predicates || [], k = 0; k < h.length; k++) tb.push(h[k]);
        for (var l = b.rules || [], m = 0; m < l.length; m++) {
            for (var n = l[m], q = {}, u = 0; u < n.length; u++)
                q[n[u][0]] = Array.prototype.slice.call(n[u], 1);
            sb.push(q);
        }
        xb = Z;
        yb = Kj;
        wm();
        Ug();
        te = !1;
        ue = 0;
        if (
            ("interactive" == F.readyState && !F.createEventObject) ||
            "complete" == F.readyState
        )
            we();
        else {
            nc(F, "DOMContentLoaded", we);
            nc(F, "readystatechange", we);
            if (F.createEventObject && F.documentElement.doScroll) {
                var p = !0;
                try {
                    p = !D.frameElement;
                } catch (y) {}
                p && xe();
            }
            nc(D, "load", we);
        }
        sg = !1;
        "complete" === F.readyState ? ug() : nc(D, "load", ug);
        a: {
            if (!Ad) break a;
            D.setInterval(Bd, 864e5);
        }
        bd = new Date().getTime();
        vm.bootstrap = bd;
    }
}