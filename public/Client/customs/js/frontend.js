function isInViewport(element) {
    var bcr = element.getBoundingClientRect();
    return bcr.top >= 0 && bcr.left >= 0 && bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function renderFlashMessages() {
    $.each(["notice", "alert"], function(i, flashType) {
        var cookieName = "flash-" + flashType,
            cookie = Cookies.get(cookieName);
        cookie && ($("#flash-" + flashType).html(cookie.replace(/\+/g, " ")).fadeIn(), Cookies.remove(cookieName, {
            path: "/"
        }))
    }), delay(function() {
        $(".flash-messages-box").slideUp()
    }, 5e3), $(".flash-messages-box .close").click(function(e) {
        e.preventDefault, $(".flash-messages-box").slideUp()
    })
}

function logConnectionError(request, fromWhere) {
    fromWhere ? fromWhere += " " : fromWhere = "", console.log("Connection error " + fromWhere + "(status: " + request.status + "): " + request.responseText)
}

function decodeHtml(html) {
    return $("<textarea/>").html(html).text()
}

function initCollapsedSections() {
    $(".collapsed-section .collapsed-section-caption").click(function() {
        var collapsedSection = $(this).closest(".collapsed-section"),
            caption = $(this),
            content = collapsedSection.children(".collapsed-section-content");
        content.animate({
            opacity: "toggle",
            height: "toggle"
        }, function() {
            var newIconText = "";
            content.is(":visible") ? (newIconText = "[-]", collapsedSection.centerWindow(), collapsedSection.find(":input").filter(":first:visible").focus().select(), collapsedSection.trigger("collapsed-section.expand")) : (newIconText = "[+]", collapsedSection.trigger("collapsed-section.collapse")), caption.children(".collapsed-section-caption-icon").text(newIconText)
        })
    }).children(".collapsed-section-caption-icon").text("[+]")
}

function initMasterSlaveCheckBoxes() {
    $(".master-check-box").change(function() {
        var checkboxes = $(this).closest("form").find(":checkbox");
        $(this).is(":checked") ? checkboxes.prop("checked", !0) : checkboxes.prop("checked", !1)
    })
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function registerHandlebarsHelpers() {
    Handlebars.registerHelper("ifEquals", function(v1, v2, options) {
        return v1 === v2 ? options.fn(this) : options.inverse(this)
    })
}
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if (document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll("img.lazy").forEach(function(image) {
            isInViewport(image) && (image.src = image.getAttribute("data-src"), image.classList.remove("lazy"))
        })
    }, !1), function(a, b) {
        "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.Handlebars = b() : a.Handlebars = b()
    }(this, function() {
        return function(a) {
            function b(d) {
                if (c[d]) return c[d].exports;
                var e = c[d] = {
                    exports: {},
                    id: d,
                    loaded: !1
                };
                return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
            }
            var c = {};
            return b.m = a, b.c = c, b.p = "", b(0)
        }([function(a, b, c) {
            "use strict";

            function d() {
                var a = r();
                return a.compile = function(b, c) {
                    return k.compile(b, c, a)
                }, a.precompile = function(b, c) {
                    return k.precompile(b, c, a)
                }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], a.Parser = j.parser, a.parse = j.parse, a.parseWithoutProcessing = j.parseWithoutProcessing, a
            }
            var e = c(1)["default"];
            b.__esModule = !0;
            var f = c(2),
                g = e(f),
                h = c(45),
                i = e(h),
                j = c(46),
                k = c(51),
                l = c(52),
                m = e(l),
                n = c(49),
                o = e(n),
                p = c(44),
                q = e(p),
                r = g["default"].create,
                s = d();
            s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"]
        }, function(a, b) {
            "use strict";
            b["default"] = function(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }, b.__esModule = !0
        }, function(a, b, c) {
            "use strict";

            function d() {
                var a = new h.HandlebarsEnvironment;
                return n.extend(a, h), a.SafeString = j["default"], a.Exception = l["default"], a.Utils = n, a.escapeExpression = n.escapeExpression, a.VM = p, a.template = function(b) {
                    return p.template(b, a)
                }, a
            }
            var e = c(3)["default"],
                f = c(1)["default"];
            b.__esModule = !0;
            var g = c(4),
                h = e(g),
                i = c(37),
                j = f(i),
                k = c(6),
                l = f(k),
                m = c(5),
                n = e(m),
                o = c(38),
                p = e(o),
                q = c(44),
                r = f(q),
                s = d();
            s.create = d, r["default"](s), s["default"] = s, b["default"] = s, a.exports = b["default"]
        }, function(a, b) {
            "use strict";
            b["default"] = function(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }, b.__esModule = !0
        }, function(a, b, c) {
            "use strict";

            function d(a, b, c) {
                this.helpers = a || {}, this.partials = b || {}, this.decorators = c || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this)
            }
            var e = c(1)["default"];
            b.__esModule = !0, b.HandlebarsEnvironment = d;
            var f = c(5),
                g = c(6),
                h = e(g),
                i = c(10),
                j = c(30),
                k = c(32),
                l = e(k),
                m = c(33);
            b.VERSION = "4.7.6", b.COMPILER_REVISION = 8, b.LAST_COMPATIBLE_COMPILER_REVISION = 7;
            var q = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
            };
            b.REVISION_CHANGES = q;
            var r = "[object Object]";
            d.prototype = {
                constructor: d,
                logger: l["default"],
                log: l["default"].log,
                registerHelper: function(a, b) {
                    if (f.toString.call(a) === r) {
                        if (b) throw new h["default"]("Arg not supported with multiple helpers");
                        f.extend(this.helpers, a)
                    } else this.helpers[a] = b
                },
                unregisterHelper: function(a) {
                    delete this.helpers[a]
                },
                registerPartial: function(a, b) {
                    if (f.toString.call(a) === r) f.extend(this.partials, a);
                    else {
                        if (void 0 === b) throw new h["default"]('Attempting to register a partial called "' + a + '" as undefined');
                        this.partials[a] = b
                    }
                },
                unregisterPartial: function(a) {
                    delete this.partials[a]
                },
                registerDecorator: function(a, b) {
                    if (f.toString.call(a) === r) {
                        if (b) throw new h["default"]("Arg not supported with multiple decorators");
                        f.extend(this.decorators, a)
                    } else this.decorators[a] = b
                },
                unregisterDecorator: function(a) {
                    delete this.decorators[a]
                },
                resetLoggedPropertyAccesses: function() {
                    m.resetLoggedProperties()
                }
            };
            var s = l["default"].log;
            b.log = s, b.createFrame = f.createFrame, b.logger = l["default"]
        }, function(a, b) {
            "use strict";

            function c(a) {
                return k[a]
            }

            function d(a) {
                for (var b = 1; b < arguments.length; b++)
                    for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                return a
            }

            function e(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            }

            function f(a) {
                if ("string" != typeof a) {
                    if (a && a.toHTML) return a.toHTML();
                    if (null == a) return "";
                    if (!a) return a + "";
                    a = "" + a
                }
                return m.test(a) ? a.replace(l, c) : a
            }

            function g(a) {
                return !a && 0 !== a || !(!p(a) || 0 !== a.length)
            }

            function h(a) {
                var b = d({}, a);
                return b._parent = a, b
            }

            function i(a, b) {
                return a.path = b, a
            }

            function j(a, b) {
                return (a ? a + "." : "") + b
            }
            b.__esModule = !0, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;
            var k = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                l = /[&<>"'`=]/g,
                m = /[&<>"'`=]/,
                n = Object.prototype.toString;
            b.toString = n;
            var o = function(a) {
                return "function" == typeof a
            };
            o(/x/) && (b.isFunction = o = function(a) {
                return "function" == typeof a && "[object Function]" === n.call(a)
            }), b.isFunction = o;
            var p = Array.isArray || function(a) {
                return !(!a || "object" != typeof a) && "[object Array]" === n.call(a)
            };
            b.isArray = p
        }, function(a, b, c) {
            "use strict";

            function d(a, b) {
                var c = b && b.loc,
                    g = void 0,
                    h = void 0,
                    i = void 0,
                    j = void 0;
                c && (g = c.start.line, h = c.end.line, i = c.start.column, j = c.end.column, a += " - " + g + ":" + i);
                for (var k = Error.prototype.constructor.call(this, a), l = 0; l < f.length; l++) this[f[l]] = k[f[l]];
                Error.captureStackTrace && Error.captureStackTrace(this, d);
                try {
                    c && (this.lineNumber = g, this.endLineNumber = h, e ? (Object.defineProperty(this, "column", {
                        value: i,
                        enumerable: !0
                    }), Object.defineProperty(this, "endColumn", {
                        value: j,
                        enumerable: !0
                    })) : (this.column = i, this.endColumn = j))
                } catch (m) {}
            }
            var e = c(7)["default"];
            b.__esModule = !0;
            var f = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
            d.prototype = new Error, b["default"] = d, a.exports = b["default"]
        }, function(a, b, c) {
            a.exports = {
                "default": c(8),
                __esModule: !0
            }
        }, function(a, b, c) {
            var d = c(9);
            a.exports = function(a, b, c) {
                return d.setDesc(a, b, c)
            }
        }, function(a) {
            var c = Object;
            a.exports = {
                create: c.create,
                getProto: c.getPrototypeOf,
                isEnum: {}.propertyIsEnumerable,
                getDesc: c.getOwnPropertyDescriptor,
                setDesc: c.defineProperty,
                setDescs: c.defineProperties,
                getKeys: c.keys,
                getNames: c.getOwnPropertyNames,
                getSymbols: c.getOwnPropertySymbols,
                each: [].forEach
            }
        }, function(a, b, c) {
            "use strict";

            function d(a) {
                h["default"](a), j["default"](a), l["default"](a), n["default"](a), p["default"](a), r["default"](a), t["default"](a)
            }

            function e(a, b, c) {
                a.helpers[b] && (a.hooks[b] = a.helpers[b], c || delete a.helpers[b])
            }
            var f = c(1)["default"];
            b.__esModule = !0, b.registerDefaultHelpers = d, b.moveHelperToHooks = e;
            var g = c(11),
                h = f(g),
                i = c(12),
                j = f(i),
                k = c(25),
                l = f(k),
                m = c(26),
                n = f(m),
                o = c(27),
                p = f(o),
                q = c(28),
                r = f(q),
                s = c(29),
                t = f(s)
        }, function(a, b, c) {
            "use strict";
            b.__esModule = !0;
            var d = c(5);
            b["default"] = function(a) {
                a.registerHelper("blockHelperMissing", function(b, c) {
                    var e = c.inverse,
                        f = c.fn;
                    if (!0 === b) return f(this);
                    if (!1 === b || null == b) return e(this);
                    if (d.isArray(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);
                    if (c.data && c.ids) {
                        var g = d.createFrame(c.data);
                        g.contextPath = d.appendContextPath(c.data.contextPath, c.name), c = {
                            data: g
                        }
                    }
                    return f(b, c)
                })
            }, a.exports = b["default"]
        }, function(a, b, c) {
            (function(d) {
                "use strict";
                var e = c(13)["default"],
                    f = c(1)["default"];
                b.__esModule = !0;
                var g = c(5),
                    h = c(6),
                    i = f(h);
                b["default"] = function(a) {
                    a.registerHelper("each", function(a, b) {
                        function c(b, c, d) {
                            l && (l.key = b, l.index = c, l.first = 0 === c, l.last = !!d, m && (l.contextPath = m + b)), k += f(a[b], {
                                data: l,
                                blockParams: g.blockParams([a[b], b], [m + b, null])
                            })
                        }
                        if (!b) throw new i["default"]("Must pass iterator to #each");
                        var f = b.fn,
                            h = b.inverse,
                            j = 0,
                            k = "",
                            l = void 0,
                            m = void 0;
                        if (b.data && b.ids && (m = g.appendContextPath(b.data.contextPath, b.ids[0]) + "."), g.isFunction(a) && (a = a.call(this)), b.data && (l = g.createFrame(b.data)), a && "object" == typeof a)
                            if (g.isArray(a))
                                for (var n = a.length; j < n; j++) j in a && c(j, j, j === a.length - 1);
                            else if (d.Symbol && a[d.Symbol.iterator]) {
                            for (var o = [], p = a[d.Symbol.iterator](), q = p.next(); !q.done; q = p.next()) o.push(q.value);
                            a = o;
                            for (var n = a.length; j < n; j++) c(j, j, j === a.length - 1)
                        } else ! function() {
                            var b = void 0;
                            e(a).forEach(function(a) {
                                void 0 !== b && c(b, j - 1), b = a, j++
                            }), void 0 !== b && c(b, j - 1, !0)
                        }();
                        return 0 === j && (k = h(this)), k
                    })
                }, a.exports = b["default"]
            }).call(b, function() {
                return this
            }())
        }, function(a, b, c) {
            a.exports = {
                "default": c(14),
                __esModule: !0
            }
        }, function(a, b, c) {
            c(15), a.exports = c(21).Object.keys
        }, function(a, b, c) {
            var d = c(16);
            c(18)("keys", function(a) {
                return function(b) {
                    return a(d(b))
                }
            })
        }, function(a, b, c) {
            var d = c(17);
            a.exports = function(a) {
                return Object(d(a))
            }
        }, function(a) {
            a.exports = function(a) {
                if (void 0 == a) throw TypeError("Can't call method on  " + a);
                return a
            }
        }, function(a, b, c) {
            var d = c(19),
                e = c(21),
                f = c(24);
            a.exports = function(a, b) {
                var c = (e.Object || {})[a] || Object[a],
                    g = {};
                g[a] = b(c), d(d.S + d.F * f(function() {
                    c(1)
                }), "Object", g)
            }
        }, function(a, b, c) {
            var d = c(20),
                e = c(21),
                f = c(22),
                g = "prototype",
                h = function(a, b, c) {
                    var i, j, k, l = a & h.F,
                        m = a & h.G,
                        n = a & h.S,
                        o = a & h.P,
                        p = a & h.B,
                        q = a & h.W,
                        r = m ? e : e[b] || (e[b] = {}),
                        s = m ? d : n ? d[b] : (d[b] || {})[g];
                    m && (c = b);
                    for (i in c)(j = !l && s && i in s) && i in r || (k = j ? s[i] : c[i], r[i] = m && "function" != typeof s[i] ? c[i] : p && j ? f(k, d) : q && s[i] == k ? function(a) {
                        var b = function(b) {
                            return this instanceof a ? new a(b) : a(b)
                        };
                        return b[g] = a[g], b
                    }(k) : o && "function" == typeof k ? f(Function.call, k) : k, o && ((r[g] || (r[g] = {}))[i] = k))
                };
            h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, a.exports = h
        }, function(a) {
            var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = c)
        }, function(a) {
            var c = a.exports = {
                version: "1.2.6"
            };
            "number" == typeof __e && (__e = c)
        }, function(a, b, c) {
            var d = c(23);
            a.exports = function(a, b, c) {
                if (d(a), void 0 === b) return a;
                switch (c) {
                    case 1:
                        return function(c) {
                            return a.call(b, c)
                        };
                    case 2:
                        return function(c, d) {
                            return a.call(b, c, d)
                        };
                    case 3:
                        return function(c, d, e) {
                            return a.call(b, c, d, e)
                        }
                }
                return function() {
                    return a.apply(b, arguments)
                }
            }
        }, function(a) {
            a.exports = function(a) {
                if ("function" != typeof a) throw TypeError(a + " is not a function!");
                return a
            }
        }, function(a) {
            a.exports = function(a) {
                try {
                    return !!a()
                } catch (b) {
                    return !0
                }
            }
        }, function(a, b, c) {
            "use strict";
            var d = c(1)["default"];
            b.__esModule = !0;
            var e = c(6),
                f = d(e);
            b["default"] = function(a) {
                a.registerHelper("helperMissing", function() {
                    if (1 !== arguments.length) throw new f["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                })
            }, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";
            var d = c(1)["default"];
            b.__esModule = !0;
            var e = c(5),
                f = c(6),
                g = d(f);
            b["default"] = function(a) {
                a.registerHelper("if", function(a, b) {
                    if (2 != arguments.length) throw new g["default"]("#if requires exactly one argument");
                    return e.isFunction(a) && (a = a.call(this)), !b.hash.includeZero && !a || e.isEmpty(a) ? b.inverse(this) : b.fn(this)
                }), a.registerHelper("unless", function(b, c) {
                    if (2 != arguments.length) throw new g["default"]("#unless requires exactly one argument");
                    return a.helpers["if"].call(this, b, {
                        fn: c.inverse,
                        inverse: c.fn,
                        hash: c.hash
                    })
                })
            }, a.exports = b["default"]
        }, function(a, b) {
            "use strict";
            b.__esModule = !0, b["default"] = function(a) {
                a.registerHelper("log", function() {
                    for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) b.push(arguments[d]);
                    var e = 1;
                    null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b[0] = e, a.log.apply(a, b)
                })
            }, a.exports = b["default"]
        }, function(a, b) {
            "use strict";
            b.__esModule = !0, b["default"] = function(a) {
                a.registerHelper("lookup", function(a, b, c) {
                    return a ? c.lookupProperty(a, b) : a
                })
            }, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";
            var d = c(1)["default"];
            b.__esModule = !0;
            var e = c(5),
                f = c(6),
                g = d(f);
            b["default"] = function(a) {
                a.registerHelper("with", function(a, b) {
                    if (2 != arguments.length) throw new g["default"]("#with requires exactly one argument");
                    e.isFunction(a) && (a = a.call(this));
                    var c = b.fn;
                    if (e.isEmpty(a)) return b.inverse(this);
                    var d = b.data;
                    return b.data && b.ids && (d = e.createFrame(b.data), d.contextPath = e.appendContextPath(b.data.contextPath, b.ids[0])), c(a, {
                        data: d,
                        blockParams: e.blockParams([a], [d && d.contextPath])
                    })
                })
            }, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d(a) {
                g["default"](a)
            }
            var e = c(1)["default"];
            b.__esModule = !0, b.registerDefaultDecorators = d;
            var f = c(31),
                g = e(f)
        }, function(a, b, c) {
            "use strict";
            b.__esModule = !0;
            var d = c(5);
            b["default"] = function(a) {
                a.registerDecorator("inline", function(a, b, c, e) {
                    var f = a;
                    return b.partials || (b.partials = {}, f = function(e, f) {
                        var g = c.partials;
                        c.partials = d.extend({}, g, b.partials);
                        var h = a(e, f);
                        return c.partials = g, h
                    }), b.partials[e.args[0]] = e.fn, f
                })
            }, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";
            b.__esModule = !0;
            var d = c(5),
                e = {
                    methodMap: ["debug", "info", "warn", "error"],
                    level: "info",
                    lookupLevel: function(a) {
                        if ("string" == typeof a) {
                            var b = d.indexOf(e.methodMap, a.toLowerCase());
                            a = b >= 0 ? b : parseInt(a, 10)
                        }
                        return a
                    },
                    log: function(a) {
                        if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
                            var b = e.methodMap[a];
                            console[b] || (b = "log");
                            for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) d[f - 1] = arguments[f];
                            console[b].apply(console, d)
                        }
                    }
                };
            b["default"] = e, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d(a) {
                var b = i(null);
                b.constructor = !1, b.__defineGetter__ = !1, b.__defineSetter__ = !1, b.__lookupGetter__ = !1;
                var c = i(null);
                return c.__proto__ = !1, {
                    properties: {
                        whitelist: l.createNewLookupObject(c, a.allowedProtoProperties),
                        defaultValue: a.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: l.createNewLookupObject(b, a.allowedProtoMethods),
                        defaultValue: a.allowProtoMethodsByDefault
                    }
                }
            }

            function e(a, b, c) {
                return "function" == typeof a ? f(b.methods, c) : f(b.properties, c)
            }

            function f(a, b) {
                return void 0 !== a.whitelist[b] ? !0 === a.whitelist[b] : void 0 !== a.defaultValue ? a.defaultValue : (g(b), !1)
            }

            function g(a) {
                !0 !== o[a] && (o[a] = !0, n.log("error", 'Handlebars: Access has been denied to resolve the property "' + a + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))
            }

            function h() {
                j(o).forEach(function(a) {
                    delete o[a]
                })
            }
            var i = c(34)["default"],
                j = c(13)["default"],
                k = c(3)["default"];
            b.__esModule = !0, b.createProtoAccessControl = d, b.resultIsAllowed = e, b.resetLoggedProperties = h;
            var l = c(36),
                m = c(32),
                n = k(m),
                o = i(null)
        }, function(a, b, c) {
            a.exports = {
                "default": c(35),
                __esModule: !0
            }
        }, function(a, b, c) {
            var d = c(9);
            a.exports = function(a, b) {
                return d.create(a, b)
            }
        }, function(a, b, c) {
            "use strict";

            function d() {
                for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                return f.extend.apply(void 0, [e(null)].concat(b))
            }
            var e = c(34)["default"];
            b.__esModule = !0, b.createNewLookupObject = d;
            var f = c(5)
        }, function(a, b) {
            "use strict";

            function c(a) {
                this.string = a
            }
            b.__esModule = !0, c.prototype.toString = c.prototype.toHTML = function() {
                return "" + this.string
            }, b["default"] = c, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d(a) {
                var b = a && a[0] || 1,
                    c = v.COMPILER_REVISION;
                if (!(b >= v.LAST_COMPATIBLE_COMPILER_REVISION && b <= v.COMPILER_REVISION)) {
                    if (b < v.LAST_COMPATIBLE_COMPILER_REVISION) {
                        var d = v.REVISION_CHANGES[c],
                            e = v.REVISION_CHANGES[b];
                        throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                    }
                    throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
                }
            }

            function e(a, b) {
                function c(c, d, e) {
                    e.hash && (d = s.extend({}, d, e.hash), e.ids && (e.ids[0] = !0)), c = b.VM.resolvePartial.call(this, c, d, e);
                    var f = s.extend({}, e, {
                            hooks: this.hooks,
                            protoAccessControl: this.protoAccessControl
                        }),
                        g = b.VM.invokePartial.call(this, c, d, f);
                    if (null == g && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), g = e.partials[e.name](d, f)), null != g) {
                        if (e.indent) {
                            for (var h = g.split("\n"), i = 0, j = h.length; i < j && (h[i] || i + 1 !== j); i++) h[i] = e.indent + h[i];
                            g = h.join("\n")
                        }
                        return g
                    }
                    throw new u["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode")
                }

                function d(b) {
                    function c(b) {
                        return "" + a.main(g, b, g.helpers, g.partials, f, i, h)
                    }
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        f = e.data;
                    d._setup(e), !e.partial && a.useData && (f = j(b, f));
                    var h = void 0,
                        i = a.useBlockParams ? [] : void 0;
                    return a.useDepths && (h = e.depths ? b != e.depths[0] ? [b].concat(e.depths) : e.depths : [b]), (c = k(a.main, c, g, e.depths || [], f, i))(b, e)
                }
                if (!b) throw new u["default"]("No environment passed to template");
                if (!a || !a.main) throw new u["default"]("Unknown template object: " + typeof a);
                a.main.decorator = a.main_d, b.VM.checkRevision(a.compiler);
                var e = a.compiler && 7 === a.compiler[0],
                    g = {
                        strict: function(a, b, c) {
                            if (!(a && b in a)) throw new u["default"]('"' + b + '" not defined in ' + a, {
                                loc: c
                            });
                            return a[b]
                        },
                        lookupProperty: function(a, b) {
                            var c = a[b];
                            return null == c ? c : Object.prototype.hasOwnProperty.call(a, b) ? c : y.resultIsAllowed(c, g.protoAccessControl, b) ? c : void 0
                        },
                        lookup: function(a, b) {
                            for (var c = a.length, d = 0; d < c; d++) {
                                if (null != (a[d] && g.lookupProperty(a[d], b))) return a[d][b]
                            }
                        },
                        lambda: function(a, b) {
                            return "function" == typeof a ? a.call(b) : a
                        },
                        escapeExpression: s.escapeExpression,
                        invokePartial: c,
                        fn: function(b) {
                            var c = a[b];
                            return c.decorator = a[b + "_d"], c
                        },
                        programs: [],
                        program: function(a, b, c, d, e) {
                            var g = this.programs[a],
                                h = this.fn(a);
                            return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g
                        },
                        data: function(a, b) {
                            for (; a && b--;) a = a._parent;
                            return a
                        },
                        mergeIfNeeded: function(a, b) {
                            var c = a || b;
                            return a && b && a !== b && (c = s.extend({}, b, a)), c
                        },
                        nullContext: n({}),
                        noop: b.VM.noop,
                        compilerInfo: a.compiler
                    };
                return d.isTop = !0, d._setup = function(c) {
                    if (c.partial) g.protoAccessControl = c.protoAccessControl, g.helpers = c.helpers, g.partials = c.partials, g.decorators = c.decorators, g.hooks = c.hooks;
                    else {
                        var d = s.extend({}, b.helpers, c.helpers);
                        l(d, g), g.helpers = d, a.usePartial && (g.partials = g.mergeIfNeeded(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (g.decorators = s.extend({}, b.decorators, c.decorators)), g.hooks = {}, g.protoAccessControl = y.createProtoAccessControl(c);
                        var f = c.allowCallsToHelperMissing || e;
                        w.moveHelperToHooks(g, "helperMissing", f), w.moveHelperToHooks(g, "blockHelperMissing", f)
                    }
                }, d._child = function(b, c, d, e) {
                    if (a.useBlockParams && !d) throw new u["default"]("must pass block params");
                    if (a.useDepths && !e) throw new u["default"]("must pass parent depths");
                    return f(g, b, a[b], c, 0, d, e)
                }, d
            }

            function f(a, b, c, d, e, f, g) {
                function h(b) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        h = g;
                    return !g || b == g[0] || b === a.nullContext && null === g[0] || (h = [b].concat(g)), c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h)
                }
                return h = k(c, h, a, g, d, f), h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h
            }

            function g(a, b, c) {
                return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name], a
            }

            function h(a, b, c) {
                var d = c.data && c.data["partial-block"];
                c.partial = !0, c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
                var e = void 0;
                if (c.fn && c.fn !== i && function() {
                        c.data = v.createFrame(c.data);
                        var a = c.fn;
                        e = c.data["partial-block"] = function(b) {
                            var c = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            return c.data = v.createFrame(c.data), c.data["partial-block"] = d, a(b, c)
                        }, a.partials && (c.partials = s.extend({}, c.partials, a.partials))
                    }(), void 0 === a && e && (a = e), void 0 === a) throw new u["default"]("The partial " + c.name + " could not be found");
                if (a instanceof Function) return a(b, c)
            }

            function i() {
                return ""
            }

            function j(a, b) {
                return b && "root" in b || (b = b ? v.createFrame(b) : {}, b.root = a), b
            }

            function k(a, b, c, d, e, f) {
                if (a.decorator) {
                    var g = {};
                    b = a.decorator(b, g, c, d && d[0], e, f, d), s.extend(b, g)
                }
                return b
            }

            function l(a, b) {
                o(a).forEach(function(c) {
                    var d = a[c];
                    a[c] = m(d, b)
                })
            }

            function m(a, b) {
                var c = b.lookupProperty;
                return x.wrapHelper(a, function(a) {
                    return s.extend({
                        lookupProperty: c
                    }, a)
                })
            }
            var n = c(39)["default"],
                o = c(13)["default"],
                p = c(3)["default"],
                q = c(1)["default"];
            b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;
            var r = c(5),
                s = p(r),
                t = c(6),
                u = q(t),
                v = c(4),
                w = c(10),
                x = c(43),
                y = c(33)
        }, function(a, b, c) {
            a.exports = {
                "default": c(40),
                __esModule: !0
            }
        }, function(a, b, c) {
            c(41), a.exports = c(21).Object.seal
        }, function(a, b, c) {
            var d = c(42);
            c(18)("seal", function(a) {
                return function(b) {
                    return a && d(b) ? a(b) : b
                }
            })
        }, function(a) {
            a.exports = function(a) {
                return "object" == typeof a ? null !== a : "function" == typeof a
            }
        }, function(a, b) {
            "use strict";

            function c(a, b) {
                return "function" != typeof a ? a : function() {
                    var c = arguments[arguments.length - 1];
                    return arguments[arguments.length - 1] = b(c), a.apply(this, arguments)
                }
            }
            b.__esModule = !0, b.wrapHelper = c
        }, function(a, b) {
            (function(c) {
                "use strict";
                b.__esModule = !0, b["default"] = function(a) {
                    var b = void 0 !== c ? c : window,
                        d = b.Handlebars;
                    a.noConflict = function() {
                        return b.Handlebars === a && (b.Handlebars = d), a
                    }
                }, a.exports = b["default"]
            }).call(b, function() {
                return this
            }())
        }, function(a, b) {
            "use strict";
            b.__esModule = !0;
            var c = {
                helpers: {
                    helperExpression: function(a) {
                        return "SubExpression" === a.type || ("MustacheStatement" === a.type || "BlockStatement" === a.type) && !!(a.params && a.params.length || a.hash)
                    },
                    scopedId: function(a) {
                        return /^\.|this\b/.test(a.original)
                    },
                    simpleId: function(a) {
                        return 1 === a.parts.length && !c.helpers.scopedId(a) && !a.depth
                    }
                }
            };
            b["default"] = c, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d(a, b) {
                return "Program" === a.type ? a : (i["default"].yy = o, o.locInfo = function(a) {
                    return new o.SourceLocation(b && b.srcName, a)
                }, i["default"].parse(a))
            }

            function e(a, b) {
                var c = d(a, b);
                return new k["default"](b).accept(c)
            }
            var f = c(1)["default"],
                g = c(3)["default"];
            b.__esModule = !0, b.parseWithoutProcessing = d, b.parse = e;
            var h = c(47),
                i = f(h),
                j = c(48),
                k = f(j),
                l = c(50),
                m = g(l),
                n = c(5);
            b.parser = i["default"];
            var o = {};
            n.extend(o, m)
        }, function(a, b) {
            "use strict";
            b.__esModule = !0;
            var c = function() {
                function a() {
                    this.yy = {}
                }
                var b = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            program: 4,
                            EOF: 5,
                            program_repetition0: 6,
                            statement: 7,
                            mustache: 8,
                            block: 9,
                            rawBlock: 10,
                            partial: 11,
                            partialBlock: 12,
                            content: 13,
                            COMMENT: 14,
                            CONTENT: 15,
                            openRawBlock: 16,
                            rawBlock_repetition0: 17,
                            END_RAW_BLOCK: 18,
                            OPEN_RAW_BLOCK: 19,
                            helperName: 20,
                            openRawBlock_repetition0: 21,
                            openRawBlock_option0: 22,
                            CLOSE_RAW_BLOCK: 23,
                            openBlock: 24,
                            block_option0: 25,
                            closeBlock: 26,
                            openInverse: 27,
                            block_option1: 28,
                            OPEN_BLOCK: 29,
                            openBlock_repetition0: 30,
                            openBlock_option0: 31,
                            openBlock_option1: 32,
                            CLOSE: 33,
                            OPEN_INVERSE: 34,
                            openInverse_repetition0: 35,
                            openInverse_option0: 36,
                            openInverse_option1: 37,
                            openInverseChain: 38,
                            OPEN_INVERSE_CHAIN: 39,
                            openInverseChain_repetition0: 40,
                            openInverseChain_option0: 41,
                            openInverseChain_option1: 42,
                            inverseAndProgram: 43,
                            INVERSE: 44,
                            inverseChain: 45,
                            inverseChain_option0: 46,
                            OPEN_ENDBLOCK: 47,
                            OPEN: 48,
                            mustache_repetition0: 49,
                            mustache_option0: 50,
                            OPEN_UNESCAPED: 51,
                            mustache_repetition1: 52,
                            mustache_option1: 53,
                            CLOSE_UNESCAPED: 54,
                            OPEN_PARTIAL: 55,
                            partialName: 56,
                            partial_repetition0: 57,
                            partial_option0: 58,
                            openPartialBlock: 59,
                            OPEN_PARTIAL_BLOCK: 60,
                            openPartialBlock_repetition0: 61,
                            openPartialBlock_option0: 62,
                            param: 63,
                            sexpr: 64,
                            OPEN_SEXPR: 65,
                            sexpr_repetition0: 66,
                            sexpr_option0: 67,
                            CLOSE_SEXPR: 68,
                            hash: 69,
                            hash_repetition_plus0: 70,
                            hashSegment: 71,
                            ID: 72,
                            EQUALS: 73,
                            blockParams: 74,
                            OPEN_BLOCK_PARAMS: 75,
                            blockParams_repetition_plus0: 76,
                            CLOSE_BLOCK_PARAMS: 77,
                            path: 78,
                            dataName: 79,
                            STRING: 80,
                            NUMBER: 81,
                            BOOLEAN: 82,
                            UNDEFINED: 83,
                            NULL: 84,
                            DATA: 85,
                            pathSegments: 86,
                            SEP: 87,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            14: "COMMENT",
                            15: "CONTENT",
                            18: "END_RAW_BLOCK",
                            19: "OPEN_RAW_BLOCK",
                            23: "CLOSE_RAW_BLOCK",
                            29: "OPEN_BLOCK",
                            33: "CLOSE",
                            34: "OPEN_INVERSE",
                            39: "OPEN_INVERSE_CHAIN",
                            44: "INVERSE",
                            47: "OPEN_ENDBLOCK",
                            48: "OPEN",
                            51: "OPEN_UNESCAPED",
                            54: "CLOSE_UNESCAPED",
                            55: "OPEN_PARTIAL",
                            60: "OPEN_PARTIAL_BLOCK",
                            65: "OPEN_SEXPR",
                            68: "CLOSE_SEXPR",
                            72: "ID",
                            73: "EQUALS",
                            75: "OPEN_BLOCK_PARAMS",
                            77: "CLOSE_BLOCK_PARAMS",
                            80: "STRING",
                            81: "NUMBER",
                            82: "BOOLEAN",
                            83: "UNDEFINED",
                            84: "NULL",
                            85: "DATA",
                            87: "SEP"
                        },
                        productions_: [0, [3, 2],
                            [4, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [13, 1],
                            [10, 3],
                            [16, 5],
                            [9, 4],
                            [9, 4],
                            [24, 6],
                            [27, 6],
                            [38, 6],
                            [43, 2],
                            [45, 3],
                            [45, 1],
                            [26, 3],
                            [8, 5],
                            [8, 5],
                            [11, 5],
                            [12, 3],
                            [59, 5],
                            [63, 1],
                            [63, 1],
                            [64, 5],
                            [69, 1],
                            [71, 3],
                            [74, 3],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [56, 1],
                            [56, 1],
                            [79, 2],
                            [78, 1],
                            [86, 3],
                            [86, 1],
                            [6, 0],
                            [6, 2],
                            [17, 0],
                            [17, 2],
                            [21, 0],
                            [21, 2],
                            [22, 0],
                            [22, 1],
                            [25, 0],
                            [25, 1],
                            [28, 0],
                            [28, 1],
                            [30, 0],
                            [30, 2],
                            [31, 0],
                            [31, 1],
                            [32, 0],
                            [32, 1],
                            [35, 0],
                            [35, 2],
                            [36, 0],
                            [36, 1],
                            [37, 0],
                            [37, 1],
                            [40, 0],
                            [40, 2],
                            [41, 0],
                            [41, 1],
                            [42, 0],
                            [42, 1],
                            [46, 0],
                            [46, 1],
                            [49, 0],
                            [49, 2],
                            [50, 0],
                            [50, 1],
                            [52, 0],
                            [52, 2],
                            [53, 0],
                            [53, 1],
                            [57, 0],
                            [57, 2],
                            [58, 0],
                            [58, 1],
                            [61, 0],
                            [61, 2],
                            [62, 0],
                            [62, 1],
                            [66, 0],
                            [66, 2],
                            [67, 0],
                            [67, 1],
                            [70, 1],
                            [70, 2],
                            [76, 1],
                            [76, 2]
                        ],
                        performAction: function(a, b, c, d, e, f) {
                            var h = f.length - 1;
                            switch (e) {
                                case 1:
                                    return f[h - 1];
                                case 2:
                                    this.$ = d.prepareProgram(f[h]);
                                    break;
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                    this.$ = f[h];
                                    break;
                                case 9:
                                    this.$ = {
                                        type: "CommentStatement",
                                        value: d.stripComment(f[h]),
                                        strip: d.stripFlags(f[h], f[h]),
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 10:
                                    this.$ = {
                                        type: "ContentStatement",
                                        original: f[h],
                                        value: f[h],
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 11:
                                    this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                                    break;
                                case 12:
                                    this.$ = {
                                        path: f[h - 3],
                                        params: f[h - 2],
                                        hash: f[h - 1]
                                    };
                                    break;
                                case 13:
                                    this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                                    break;
                                case 14:
                                    this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                                    break;
                                case 15:
                                    this.$ = {
                                        open: f[h - 5],
                                        path: f[h - 4],
                                        params: f[h - 3],
                                        hash: f[h - 2],
                                        blockParams: f[h - 1],
                                        strip: d.stripFlags(f[h - 5], f[h])
                                    };
                                    break;
                                case 16:
                                case 17:
                                    this.$ = {
                                        path: f[h - 4],
                                        params: f[h - 3],
                                        hash: f[h - 2],
                                        blockParams: f[h - 1],
                                        strip: d.stripFlags(f[h - 5], f[h])
                                    };
                                    break;
                                case 18:
                                    this.$ = {
                                        strip: d.stripFlags(f[h - 1], f[h - 1]),
                                        program: f[h]
                                    };
                                    break;
                                case 19:
                                    var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                                        j = d.prepareProgram([i], f[h - 1].loc);
                                    j.chained = !0, this.$ = {
                                        strip: f[h - 2].strip,
                                        program: j,
                                        chain: !0
                                    };
                                    break;
                                case 20:
                                    this.$ = f[h];
                                    break;
                                case 21:
                                    this.$ = {
                                        path: f[h - 1],
                                        strip: d.stripFlags(f[h - 2], f[h])
                                    };
                                    break;
                                case 22:
                                case 23:
                                    this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                    break;
                                case 24:
                                    this.$ = {
                                        type: "PartialStatement",
                                        name: f[h - 3],
                                        params: f[h - 2],
                                        hash: f[h - 1],
                                        indent: "",
                                        strip: d.stripFlags(f[h - 4], f[h]),
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 25:
                                    this.$ = d.preparePartialBlock(f[h - 2], f[h - 1], f[h], this._$);
                                    break;
                                case 26:
                                    this.$ = {
                                        path: f[h - 3],
                                        params: f[h - 2],
                                        hash: f[h - 1],
                                        strip: d.stripFlags(f[h - 4], f[h])
                                    };
                                    break;
                                case 27:
                                case 28:
                                    this.$ = f[h];
                                    break;
                                case 29:
                                    this.$ = {
                                        type: "SubExpression",
                                        path: f[h - 3],
                                        params: f[h - 2],
                                        hash: f[h - 1],
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 30:
                                    this.$ = {
                                        type: "Hash",
                                        pairs: f[h],
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 31:
                                    this.$ = {
                                        type: "HashPair",
                                        key: d.id(f[h - 2]),
                                        value: f[h],
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 32:
                                    this.$ = d.id(f[h - 1]);
                                    break;
                                case 33:
                                case 34:
                                    this.$ = f[h];
                                    break;
                                case 35:
                                    this.$ = {
                                        type: "StringLiteral",
                                        value: f[h],
                                        original: f[h],
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 36:
                                    this.$ = {
                                        type: "NumberLiteral",
                                        value: Number(f[h]),
                                        original: Number(f[h]),
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 37:
                                    this.$ = {
                                        type: "BooleanLiteral",
                                        value: "true" === f[h],
                                        original: "true" === f[h],
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 38:
                                    this.$ = {
                                        type: "UndefinedLiteral",
                                        original: void 0,
                                        value: void 0,
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 39:
                                    this.$ = {
                                        type: "NullLiteral",
                                        original: null,
                                        value: null,
                                        loc: d.locInfo(this._$)
                                    };
                                    break;
                                case 40:
                                case 41:
                                    this.$ = f[h];
                                    break;
                                case 42:
                                    this.$ = d.preparePath(!0, f[h], this._$);
                                    break;
                                case 43:
                                    this.$ = d.preparePath(!1, f[h], this._$);
                                    break;
                                case 44:
                                    f[h - 2].push({
                                        part: d.id(f[h]),
                                        original: f[h],
                                        separator: f[h - 1]
                                    }), this.$ = f[h - 2];
                                    break;
                                case 45:
                                    this.$ = [{
                                        part: d.id(f[h]),
                                        original: f[h]
                                    }];
                                    break;
                                case 46:
                                    this.$ = [];
                                    break;
                                case 47:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 48:
                                    this.$ = [];
                                    break;
                                case 49:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 50:
                                    this.$ = [];
                                    break;
                                case 51:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 58:
                                    this.$ = [];
                                    break;
                                case 59:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 64:
                                    this.$ = [];
                                    break;
                                case 65:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 70:
                                    this.$ = [];
                                    break;
                                case 71:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 78:
                                    this.$ = [];
                                    break;
                                case 79:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 82:
                                    this.$ = [];
                                    break;
                                case 83:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 86:
                                    this.$ = [];
                                    break;
                                case 87:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 90:
                                    this.$ = [];
                                    break;
                                case 91:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 94:
                                    this.$ = [];
                                    break;
                                case 95:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 98:
                                    this.$ = [f[h]];
                                    break;
                                case 99:
                                    f[h - 1].push(f[h]);
                                    break;
                                case 100:
                                    this.$ = [f[h]];
                                    break;
                                case 101:
                                    f[h - 1].push(f[h])
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [2, 46],
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 4]
                        }, {
                            5: [2, 2],
                            7: 5,
                            8: 6,
                            9: 7,
                            10: 8,
                            11: 9,
                            12: 10,
                            13: 11,
                            14: [1, 12],
                            15: [1, 20],
                            16: 17,
                            19: [1, 23],
                            24: 15,
                            27: 16,
                            29: [1, 21],
                            34: [1, 22],
                            39: [2, 2],
                            44: [2, 2],
                            47: [2, 2],
                            48: [1, 13],
                            51: [1, 14],
                            55: [1, 18],
                            59: 19,
                            60: [1, 24]
                        }, {
                            1: [2, 1]
                        }, {
                            5: [2, 47],
                            14: [2, 47],
                            15: [2, 47],
                            19: [2, 47],
                            29: [2, 47],
                            34: [2, 47],
                            39: [2, 47],
                            44: [2, 47],
                            47: [2, 47],
                            48: [2, 47],
                            51: [2, 47],
                            55: [2, 47],
                            60: [2, 47]
                        }, {
                            5: [2, 3],
                            14: [2, 3],
                            15: [2, 3],
                            19: [2, 3],
                            29: [2, 3],
                            34: [2, 3],
                            39: [2, 3],
                            44: [2, 3],
                            47: [2, 3],
                            48: [2, 3],
                            51: [2, 3],
                            55: [2, 3],
                            60: [2, 3]
                        }, {
                            5: [2, 4],
                            14: [2, 4],
                            15: [2, 4],
                            19: [2, 4],
                            29: [2, 4],
                            34: [2, 4],
                            39: [2, 4],
                            44: [2, 4],
                            47: [2, 4],
                            48: [2, 4],
                            51: [2, 4],
                            55: [2, 4],
                            60: [2, 4]
                        }, {
                            5: [2, 5],
                            14: [2, 5],
                            15: [2, 5],
                            19: [2, 5],
                            29: [2, 5],
                            34: [2, 5],
                            39: [2, 5],
                            44: [2, 5],
                            47: [2, 5],
                            48: [2, 5],
                            51: [2, 5],
                            55: [2, 5],
                            60: [2, 5]
                        }, {
                            5: [2, 6],
                            14: [2, 6],
                            15: [2, 6],
                            19: [2, 6],
                            29: [2, 6],
                            34: [2, 6],
                            39: [2, 6],
                            44: [2, 6],
                            47: [2, 6],
                            48: [2, 6],
                            51: [2, 6],
                            55: [2, 6],
                            60: [2, 6]
                        }, {
                            5: [2, 7],
                            14: [2, 7],
                            15: [2, 7],
                            19: [2, 7],
                            29: [2, 7],
                            34: [2, 7],
                            39: [2, 7],
                            44: [2, 7],
                            47: [2, 7],
                            48: [2, 7],
                            51: [2, 7],
                            55: [2, 7],
                            60: [2, 7]
                        }, {
                            5: [2, 8],
                            14: [2, 8],
                            15: [2, 8],
                            19: [2, 8],
                            29: [2, 8],
                            34: [2, 8],
                            39: [2, 8],
                            44: [2, 8],
                            47: [2, 8],
                            48: [2, 8],
                            51: [2, 8],
                            55: [2, 8],
                            60: [2, 8]
                        }, {
                            5: [2, 9],
                            14: [2, 9],
                            15: [2, 9],
                            19: [2, 9],
                            29: [2, 9],
                            34: [2, 9],
                            39: [2, 9],
                            44: [2, 9],
                            47: [2, 9],
                            48: [2, 9],
                            51: [2, 9],
                            55: [2, 9],
                            60: [2, 9]
                        }, {
                            20: 25,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 36,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            4: 37,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            39: [2, 46],
                            44: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            4: 38,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            44: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            15: [2, 48],
                            17: 39,
                            18: [2, 48]
                        }, {
                            20: 41,
                            56: 40,
                            64: 42,
                            65: [1, 43],
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            4: 44,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            5: [2, 10],
                            14: [2, 10],
                            15: [2, 10],
                            18: [2, 10],
                            19: [2, 10],
                            29: [2, 10],
                            34: [2, 10],
                            39: [2, 10],
                            44: [2, 10],
                            47: [2, 10],
                            48: [2, 10],
                            51: [2, 10],
                            55: [2, 10],
                            60: [2, 10]
                        }, {
                            20: 45,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 46,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 47,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 41,
                            56: 48,
                            64: 42,
                            65: [1, 43],
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            33: [2, 78],
                            49: 49,
                            65: [2, 78],
                            72: [2, 78],
                            80: [2, 78],
                            81: [2, 78],
                            82: [2, 78],
                            83: [2, 78],
                            84: [2, 78],
                            85: [2, 78]
                        }, {
                            23: [2, 33],
                            33: [2, 33],
                            54: [2, 33],
                            65: [2, 33],
                            68: [2, 33],
                            72: [2, 33],
                            75: [2, 33],
                            80: [2, 33],
                            81: [2, 33],
                            82: [2, 33],
                            83: [2, 33],
                            84: [2, 33],
                            85: [2, 33]
                        }, {
                            23: [2, 34],
                            33: [2, 34],
                            54: [2, 34],
                            65: [2, 34],
                            68: [2, 34],
                            72: [2, 34],
                            75: [2, 34],
                            80: [2, 34],
                            81: [2, 34],
                            82: [2, 34],
                            83: [2, 34],
                            84: [2, 34],
                            85: [2, 34]
                        }, {
                            23: [2, 35],
                            33: [2, 35],
                            54: [2, 35],
                            65: [2, 35],
                            68: [2, 35],
                            72: [2, 35],
                            75: [2, 35],
                            80: [2, 35],
                            81: [2, 35],
                            82: [2, 35],
                            83: [2, 35],
                            84: [2, 35],
                            85: [2, 35]
                        }, {
                            23: [2, 36],
                            33: [2, 36],
                            54: [2, 36],
                            65: [2, 36],
                            68: [2, 36],
                            72: [2, 36],
                            75: [2, 36],
                            80: [2, 36],
                            81: [2, 36],
                            82: [2, 36],
                            83: [2, 36],
                            84: [2, 36],
                            85: [2, 36]
                        }, {
                            23: [2, 37],
                            33: [2, 37],
                            54: [2, 37],
                            65: [2, 37],
                            68: [2, 37],
                            72: [2, 37],
                            75: [2, 37],
                            80: [2, 37],
                            81: [2, 37],
                            82: [2, 37],
                            83: [2, 37],
                            84: [2, 37],
                            85: [2, 37]
                        }, {
                            23: [2, 38],
                            33: [2, 38],
                            54: [2, 38],
                            65: [2, 38],
                            68: [2, 38],
                            72: [2, 38],
                            75: [2, 38],
                            80: [2, 38],
                            81: [2, 38],
                            82: [2, 38],
                            83: [2, 38],
                            84: [2, 38],
                            85: [2, 38]
                        }, {
                            23: [2, 39],
                            33: [2, 39],
                            54: [2, 39],
                            65: [2, 39],
                            68: [2, 39],
                            72: [2, 39],
                            75: [2, 39],
                            80: [2, 39],
                            81: [2, 39],
                            82: [2, 39],
                            83: [2, 39],
                            84: [2, 39],
                            85: [2, 39]
                        }, {
                            23: [2, 43],
                            33: [2, 43],
                            54: [2, 43],
                            65: [2, 43],
                            68: [2, 43],
                            72: [2, 43],
                            75: [2, 43],
                            80: [2, 43],
                            81: [2, 43],
                            82: [2, 43],
                            83: [2, 43],
                            84: [2, 43],
                            85: [2, 43],
                            87: [1, 50]
                        }, {
                            72: [1, 35],
                            86: 51
                        }, {
                            23: [2, 45],
                            33: [2, 45],
                            54: [2, 45],
                            65: [2, 45],
                            68: [2, 45],
                            72: [2, 45],
                            75: [2, 45],
                            80: [2, 45],
                            81: [2, 45],
                            82: [2, 45],
                            83: [2, 45],
                            84: [2, 45],
                            85: [2, 45],
                            87: [2, 45]
                        }, {
                            52: 52,
                            54: [2, 82],
                            65: [2, 82],
                            72: [2, 82],
                            80: [2, 82],
                            81: [2, 82],
                            82: [2, 82],
                            83: [2, 82],
                            84: [2, 82],
                            85: [2, 82]
                        }, {
                            25: 53,
                            38: 55,
                            39: [1, 57],
                            43: 56,
                            44: [1, 58],
                            45: 54,
                            47: [2, 54]
                        }, {
                            28: 59,
                            43: 60,
                            44: [1, 58],
                            47: [2, 56]
                        }, {
                            13: 62,
                            15: [1, 20],
                            18: [1, 61]
                        }, {
                            33: [2, 86],
                            57: 63,
                            65: [2, 86],
                            72: [2, 86],
                            80: [2, 86],
                            81: [2, 86],
                            82: [2, 86],
                            83: [2, 86],
                            84: [2, 86],
                            85: [2, 86]
                        }, {
                            33: [2, 40],
                            65: [2, 40],
                            72: [2, 40],
                            80: [2, 40],
                            81: [2, 40],
                            82: [2, 40],
                            83: [2, 40],
                            84: [2, 40],
                            85: [2, 40]
                        }, {
                            33: [2, 41],
                            65: [2, 41],
                            72: [2, 41],
                            80: [2, 41],
                            81: [2, 41],
                            82: [2, 41],
                            83: [2, 41],
                            84: [2, 41],
                            85: [2, 41]
                        }, {
                            20: 64,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            26: 65,
                            47: [1, 66]
                        }, {
                            30: 67,
                            33: [2, 58],
                            65: [2, 58],
                            72: [2, 58],
                            75: [2, 58],
                            80: [2, 58],
                            81: [2, 58],
                            82: [2, 58],
                            83: [2, 58],
                            84: [2, 58],
                            85: [2, 58]
                        }, {
                            33: [2, 64],
                            35: 68,
                            65: [2, 64],
                            72: [2, 64],
                            75: [2, 64],
                            80: [2, 64],
                            81: [2, 64],
                            82: [2, 64],
                            83: [2, 64],
                            84: [2, 64],
                            85: [2, 64]
                        }, {
                            21: 69,
                            23: [2, 50],
                            65: [2, 50],
                            72: [2, 50],
                            80: [2, 50],
                            81: [2, 50],
                            82: [2, 50],
                            83: [2, 50],
                            84: [2, 50],
                            85: [2, 50]
                        }, {
                            33: [2, 90],
                            61: 70,
                            65: [2, 90],
                            72: [2, 90],
                            80: [2, 90],
                            81: [2, 90],
                            82: [2, 90],
                            83: [2, 90],
                            84: [2, 90],
                            85: [2, 90]
                        }, {
                            20: 74,
                            33: [2, 80],
                            50: 71,
                            63: 72,
                            64: 75,
                            65: [1, 43],
                            69: 73,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            72: [1, 79]
                        }, {
                            23: [2, 42],
                            33: [2, 42],
                            54: [2, 42],
                            65: [2, 42],
                            68: [2, 42],
                            72: [2, 42],
                            75: [2, 42],
                            80: [2, 42],
                            81: [2, 42],
                            82: [2, 42],
                            83: [2, 42],
                            84: [2, 42],
                            85: [2, 42],
                            87: [1, 50]
                        }, {
                            20: 74,
                            53: 80,
                            54: [2, 84],
                            63: 81,
                            64: 75,
                            65: [1, 43],
                            69: 82,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            26: 83,
                            47: [1, 66]
                        }, {
                            47: [2, 55]
                        }, {
                            4: 84,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            39: [2, 46],
                            44: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            47: [2, 20]
                        }, {
                            20: 85,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            4: 86,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            26: 87,
                            47: [1, 66]
                        }, {
                            47: [2, 57]
                        }, {
                            5: [2, 11],
                            14: [2, 11],
                            15: [2, 11],
                            19: [2, 11],
                            29: [2, 11],
                            34: [2, 11],
                            39: [2, 11],
                            44: [2, 11],
                            47: [2, 11],
                            48: [2, 11],
                            51: [2, 11],
                            55: [2, 11],
                            60: [2, 11]
                        }, {
                            15: [2, 49],
                            18: [2, 49]
                        }, {
                            20: 74,
                            33: [2, 88],
                            58: 88,
                            63: 89,
                            64: 75,
                            65: [1, 43],
                            69: 90,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            65: [2, 94],
                            66: 91,
                            68: [2, 94],
                            72: [2, 94],
                            80: [2, 94],
                            81: [2, 94],
                            82: [2, 94],
                            83: [2, 94],
                            84: [2, 94],
                            85: [2, 94]
                        }, {
                            5: [2, 25],
                            14: [2, 25],
                            15: [2, 25],
                            19: [2, 25],
                            29: [2, 25],
                            34: [2, 25],
                            39: [2, 25],
                            44: [2, 25],
                            47: [2, 25],
                            48: [2, 25],
                            51: [2, 25],
                            55: [2, 25],
                            60: [2, 25]
                        }, {
                            20: 92,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 74,
                            31: 93,
                            33: [2, 60],
                            63: 94,
                            64: 75,
                            65: [1, 43],
                            69: 95,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            75: [2, 60],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 74,
                            33: [2, 66],
                            36: 96,
                            63: 97,
                            64: 75,
                            65: [1, 43],
                            69: 98,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            75: [2, 66],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 74,
                            22: 99,
                            23: [2, 52],
                            63: 100,
                            64: 75,
                            65: [1, 43],
                            69: 101,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 74,
                            33: [2, 92],
                            62: 102,
                            63: 103,
                            64: 75,
                            65: [1, 43],
                            69: 104,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            33: [1, 105]
                        }, {
                            33: [2, 79],
                            65: [2, 79],
                            72: [2, 79],
                            80: [2, 79],
                            81: [2, 79],
                            82: [2, 79],
                            83: [2, 79],
                            84: [2, 79],
                            85: [2, 79]
                        }, {
                            33: [2, 81]
                        }, {
                            23: [2, 27],
                            33: [2, 27],
                            54: [2, 27],
                            65: [2, 27],
                            68: [2, 27],
                            72: [2, 27],
                            75: [2, 27],
                            80: [2, 27],
                            81: [2, 27],
                            82: [2, 27],
                            83: [2, 27],
                            84: [2, 27],
                            85: [2, 27]
                        }, {
                            23: [2, 28],
                            33: [2, 28],
                            54: [2, 28],
                            65: [2, 28],
                            68: [2, 28],
                            72: [2, 28],
                            75: [2, 28],
                            80: [2, 28],
                            81: [2, 28],
                            82: [2, 28],
                            83: [2, 28],
                            84: [2, 28],
                            85: [2, 28]
                        }, {
                            23: [2, 30],
                            33: [2, 30],
                            54: [2, 30],
                            68: [2, 30],
                            71: 106,
                            72: [1, 107],
                            75: [2, 30]
                        }, {
                            23: [2, 98],
                            33: [2, 98],
                            54: [2, 98],
                            68: [2, 98],
                            72: [2, 98],
                            75: [2, 98]
                        }, {
                            23: [2, 45],
                            33: [2, 45],
                            54: [2, 45],
                            65: [2, 45],
                            68: [2, 45],
                            72: [2, 45],
                            73: [1, 108],
                            75: [2, 45],
                            80: [2, 45],
                            81: [2, 45],
                            82: [2, 45],
                            83: [2, 45],
                            84: [2, 45],
                            85: [2, 45],
                            87: [2, 45]
                        }, {
                            23: [2, 44],
                            33: [2, 44],
                            54: [2, 44],
                            65: [2, 44],
                            68: [2, 44],
                            72: [2, 44],
                            75: [2, 44],
                            80: [2, 44],
                            81: [2, 44],
                            82: [2, 44],
                            83: [2, 44],
                            84: [2, 44],
                            85: [2, 44],
                            87: [2, 44]
                        }, {
                            54: [1, 109]
                        }, {
                            54: [2, 83],
                            65: [2, 83],
                            72: [2, 83],
                            80: [2, 83],
                            81: [2, 83],
                            82: [2, 83],
                            83: [2, 83],
                            84: [2, 83],
                            85: [2, 83]
                        }, {
                            54: [2, 85]
                        }, {
                            5: [2, 13],
                            14: [2, 13],
                            15: [2, 13],
                            19: [2, 13],
                            29: [2, 13],
                            34: [2, 13],
                            39: [2, 13],
                            44: [2, 13],
                            47: [2, 13],
                            48: [2, 13],
                            51: [2, 13],
                            55: [2, 13],
                            60: [2, 13]
                        }, {
                            38: 55,
                            39: [1, 57],
                            43: 56,
                            44: [1, 58],
                            45: 111,
                            46: 110,
                            47: [2, 76]
                        }, {
                            33: [2, 70],
                            40: 112,
                            65: [2, 70],
                            72: [2, 70],
                            75: [2, 70],
                            80: [2, 70],
                            81: [2, 70],
                            82: [2, 70],
                            83: [2, 70],
                            84: [2, 70],
                            85: [2, 70]
                        }, {
                            47: [2, 18]
                        }, {
                            5: [2, 14],
                            14: [2, 14],
                            15: [2, 14],
                            19: [2, 14],
                            29: [2, 14],
                            34: [2, 14],
                            39: [2, 14],
                            44: [2, 14],
                            47: [2, 14],
                            48: [2, 14],
                            51: [2, 14],
                            55: [2, 14],
                            60: [2, 14]
                        }, {
                            33: [1, 113]
                        }, {
                            33: [2, 87],
                            65: [2, 87],
                            72: [2, 87],
                            80: [2, 87],
                            81: [2, 87],
                            82: [2, 87],
                            83: [2, 87],
                            84: [2, 87],
                            85: [2, 87]
                        }, {
                            33: [2, 89]
                        }, {
                            20: 74,
                            63: 115,
                            64: 75,
                            65: [1, 43],
                            67: 114,
                            68: [2, 96],
                            69: 116,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            33: [1, 117]
                        }, {
                            32: 118,
                            33: [2, 62],
                            74: 119,
                            75: [1, 120]
                        }, {
                            33: [2, 59],
                            65: [2, 59],
                            72: [2, 59],
                            75: [2, 59],
                            80: [2, 59],
                            81: [2, 59],
                            82: [2, 59],
                            83: [2, 59],
                            84: [2, 59],
                            85: [2, 59]
                        }, {
                            33: [2, 61],
                            75: [2, 61]
                        }, {
                            33: [2, 68],
                            37: 121,
                            74: 122,
                            75: [1, 120]
                        }, {
                            33: [2, 65],
                            65: [2, 65],
                            72: [2, 65],
                            75: [2, 65],
                            80: [2, 65],
                            81: [2, 65],
                            82: [2, 65],
                            83: [2, 65],
                            84: [2, 65],
                            85: [2, 65]
                        }, {
                            33: [2, 67],
                            75: [2, 67]
                        }, {
                            23: [1, 123]
                        }, {
                            23: [2, 51],
                            65: [2, 51],
                            72: [2, 51],
                            80: [2, 51],
                            81: [2, 51],
                            82: [2, 51],
                            83: [2, 51],
                            84: [2, 51],
                            85: [2, 51]
                        }, {
                            23: [2, 53]
                        }, {
                            33: [1, 124]
                        }, {
                            33: [2, 91],
                            65: [2, 91],
                            72: [2, 91],
                            80: [2, 91],
                            81: [2, 91],
                            82: [2, 91],
                            83: [2, 91],
                            84: [2, 91],
                            85: [2, 91]
                        }, {
                            33: [2, 93]
                        }, {
                            5: [2, 22],
                            14: [2, 22],
                            15: [2, 22],
                            19: [2, 22],
                            29: [2, 22],
                            34: [2, 22],
                            39: [2, 22],
                            44: [2, 22],
                            47: [2, 22],
                            48: [2, 22],
                            51: [2, 22],
                            55: [2, 22],
                            60: [2, 22]
                        }, {
                            23: [2, 99],
                            33: [2, 99],
                            54: [2, 99],
                            68: [2, 99],
                            72: [2, 99],
                            75: [2, 99]
                        }, {
                            73: [1, 108]
                        }, {
                            20: 74,
                            63: 125,
                            64: 75,
                            65: [1, 43],
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            5: [2, 23],
                            14: [2, 23],
                            15: [2, 23],
                            19: [2, 23],
                            29: [2, 23],
                            34: [2, 23],
                            39: [2, 23],
                            44: [2, 23],
                            47: [2, 23],
                            48: [2, 23],
                            51: [2, 23],
                            55: [2, 23],
                            60: [2, 23]
                        }, {
                            47: [2, 19]
                        }, {
                            47: [2, 77]
                        }, {
                            20: 74,
                            33: [2, 72],
                            41: 126,
                            63: 127,
                            64: 75,
                            65: [1, 43],
                            69: 128,
                            70: 76,
                            71: 77,
                            72: [1, 78],
                            75: [2, 72],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            5: [2, 24],
                            14: [2, 24],
                            15: [2, 24],
                            19: [2, 24],
                            29: [2, 24],
                            34: [2, 24],
                            39: [2, 24],
                            44: [2, 24],
                            47: [2, 24],
                            48: [2, 24],
                            51: [2, 24],
                            55: [2, 24],
                            60: [2, 24]
                        }, {
                            68: [1, 129]
                        }, {
                            65: [2, 95],
                            68: [2, 95],
                            72: [2, 95],
                            80: [2, 95],
                            81: [2, 95],
                            82: [2, 95],
                            83: [2, 95],
                            84: [2, 95],
                            85: [2, 95]
                        }, {
                            68: [2, 97]
                        }, {
                            5: [2, 21],
                            14: [2, 21],
                            15: [2, 21],
                            19: [2, 21],
                            29: [2, 21],
                            34: [2, 21],
                            39: [2, 21],
                            44: [2, 21],
                            47: [2, 21],
                            48: [2, 21],
                            51: [2, 21],
                            55: [2, 21],
                            60: [2, 21]
                        }, {
                            33: [1, 130]
                        }, {
                            33: [2, 63]
                        }, {
                            72: [1, 132],
                            76: 131
                        }, {
                            33: [1, 133]
                        }, {
                            33: [2, 69]
                        }, {
                            15: [2, 12],
                            18: [2, 12]
                        }, {
                            14: [2, 26],
                            15: [2, 26],
                            19: [2, 26],
                            29: [2, 26],
                            34: [2, 26],
                            47: [2, 26],
                            48: [2, 26],
                            51: [2, 26],
                            55: [2, 26],
                            60: [2, 26]
                        }, {
                            23: [2, 31],
                            33: [2, 31],
                            54: [2, 31],
                            68: [2, 31],
                            72: [2, 31],
                            75: [2, 31]
                        }, {
                            33: [2, 74],
                            42: 134,
                            74: 135,
                            75: [1, 120]
                        }, {
                            33: [2, 71],
                            65: [2, 71],
                            72: [2, 71],
                            75: [2, 71],
                            80: [2, 71],
                            81: [2, 71],
                            82: [2, 71],
                            83: [2, 71],
                            84: [2, 71],
                            85: [2, 71]
                        }, {
                            33: [2, 73],
                            75: [2, 73]
                        }, {
                            23: [2, 29],
                            33: [2, 29],
                            54: [2, 29],
                            65: [2, 29],
                            68: [2, 29],
                            72: [2, 29],
                            75: [2, 29],
                            80: [2, 29],
                            81: [2, 29],
                            82: [2, 29],
                            83: [2, 29],
                            84: [2, 29],
                            85: [2, 29]
                        }, {
                            14: [2, 15],
                            15: [2, 15],
                            19: [2, 15],
                            29: [2, 15],
                            34: [2, 15],
                            39: [2, 15],
                            44: [2, 15],
                            47: [2, 15],
                            48: [2, 15],
                            51: [2, 15],
                            55: [2, 15],
                            60: [2, 15]
                        }, {
                            72: [1, 137],
                            77: [1, 136]
                        }, {
                            72: [2, 100],
                            77: [2, 100]
                        }, {
                            14: [2, 16],
                            15: [2, 16],
                            19: [2, 16],
                            29: [2, 16],
                            34: [2, 16],
                            44: [2, 16],
                            47: [2, 16],
                            48: [2, 16],
                            51: [2, 16],
                            55: [2, 16],
                            60: [2, 16]
                        }, {
                            33: [1, 138]
                        }, {
                            33: [2, 75]
                        }, {
                            33: [2, 32]
                        }, {
                            72: [2, 101],
                            77: [2, 101]
                        }, {
                            14: [2, 17],
                            15: [2, 17],
                            19: [2, 17],
                            29: [2, 17],
                            34: [2, 17],
                            39: [2, 17],
                            44: [2, 17],
                            47: [2, 17],
                            48: [2, 17],
                            51: [2, 17],
                            55: [2, 17],
                            60: [2, 17]
                        }],
                        defaultActions: {
                            4: [2, 1],
                            54: [2, 55],
                            56: [2, 20],
                            60: [2, 57],
                            73: [2, 81],
                            82: [2, 85],
                            86: [2, 18],
                            90: [2, 89],
                            101: [2, 53],
                            104: [2, 93],
                            110: [2, 19],
                            111: [2, 77],
                            116: [2, 97],
                            119: [2, 63],
                            122: [2, 69],
                            135: [2, 75],
                            136: [2, 32]
                        },
                        parseError: function(a) {
                            throw new Error(a)
                        },
                        parse: function(a) {
                            function b() {
                                var a;
                                return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                            }
                            var c = this,
                                d = [0],
                                e = [null],
                                f = [],
                                g = this.table,
                                h = "",
                                i = 0,
                                j = 0,
                                k = 0;
                            this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                            var l = this.lexer.yylloc;
                            f.push(l);
                            var m = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                                if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && void 0 !== n || (n = b()), q = g[p] && g[p][n]), void 0 === q || !q.length || !q[0]) {
                                    var x = "";
                                    if (!k) {
                                        v = [];
                                        for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                        x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                                            text: this.lexer.match,
                                            token: this.terminals_[n] || n,
                                            line: this.lexer.yylineno,
                                            loc: l,
                                            expected: v
                                        })
                                    }
                                }
                                if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                                switch (q[0]) {
                                    case 1:
                                        d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                                        break;
                                    case 2:
                                        if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                                first_line: f[f.length - (t || 1)].first_line,
                                                last_line: f[f.length - 1].last_line,
                                                first_column: f[f.length - (t || 1)].first_column,
                                                last_column: f[f.length - 1].last_column
                                            }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), void 0 !== (r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f))) return r;
                                        t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                                        break;
                                    case 3:
                                        return !0
                                }
                            }
                            return !0
                        }
                    },
                    c = function() {
                        var a = {
                            EOF: 1,
                            parseError: function(a, b) {
                                if (!this.yy.parser) throw new Error(a);
                                this.yy.parser.parseError(a, b)
                            },
                            setInput: function(a) {
                                return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function() {
                                var a = this._input[0];
                                return this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a, a.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                            },
                            unput: function(a) {
                                var b = a.length,
                                    c = a.split(/(?:\r\n?|\n)/g);
                                this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                                var d = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                                var e = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                                }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                            },
                            more: function() {
                                return this._more = !0, this
                            },
                            less: function(a) {
                                this.unput(this.match.slice(a))
                            },
                            pastInput: function() {
                                var a = this.matched.substr(0, this.matched.length - this.match.length);
                                return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var a = this.match;
                                return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var a = this.pastInput(),
                                    b = new Array(a.length + 1).join("-");
                                return a + this.upcomingInput() + "\n" + b + "^"
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var a, b, c, d, e;
                                this._more || (this.yytext = "", this.match = "");
                                for (var f = this._currentRules(), g = 0; g < f.length && (!(c = this._input.match(this.rules[f[g]])) || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                                return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                                }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var a = this.next();
                                return void 0 !== a ? a : this.lex()
                            },
                            begin: function(a) {
                                this.conditionStack.push(a)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function() {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function(a) {
                                this.begin(a)
                            }
                        };
                        return a.options = {}, a.performAction = function(a, b, c) {
                            function e(a, c) {
                                return b.yytext = b.yytext.substring(a, b.yyleng - c + a)
                            }
                            switch (c) {
                                case 0:
                                    if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;
                                    break;
                                case 1:
                                    return 15;
                                case 2:
                                    return this.popState(), 15;
                                case 3:
                                    return this.begin("raw"), 15;
                                case 4:
                                    return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (e(5, 9), "END_RAW_BLOCK");
                                case 5:
                                    return 15;
                                case 6:
                                    return this.popState(), 14;
                                case 7:
                                    return 65;
                                case 8:
                                    return 68;
                                case 9:
                                    return 19;
                                case 10:
                                    return this.popState(), this.begin("raw"), 23;
                                case 11:
                                    return 55;
                                case 12:
                                    return 60;
                                case 13:
                                    return 29;
                                case 14:
                                    return 47;
                                case 15:
                                case 16:
                                    return this.popState(), 44;
                                case 17:
                                    return 34;
                                case 18:
                                    return 39;
                                case 19:
                                    return 51;
                                case 20:
                                    return 48;
                                case 21:
                                    this.unput(b.yytext), this.popState(), this.begin("com");
                                    break;
                                case 22:
                                    return this.popState(), 14;
                                case 23:
                                    return 48;
                                case 24:
                                    return 73;
                                case 25:
                                case 26:
                                    return 72;
                                case 27:
                                    return 87;
                                case 28:
                                    break;
                                case 29:
                                    return this.popState(), 54;
                                case 30:
                                    return this.popState(), 33;
                                case 31:
                                    return b.yytext = e(1, 2).replace(/\\"/g, '"'), 80;
                                case 32:
                                    return b.yytext = e(1, 2).replace(/\\'/g, "'"), 80;
                                case 33:
                                    return 85;
                                case 34:
                                case 35:
                                    return 82;
                                case 36:
                                    return 83;
                                case 37:
                                    return 84;
                                case 38:
                                    return 81;
                                case 39:
                                    return 75;
                                case 40:
                                    return 77;
                                case 41:
                                    return 72;
                                case 42:
                                    return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;
                                case 43:
                                    return "INVALID";
                                case 44:
                                    return 5
                            }
                        }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
                            mu: {
                                rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            com: {
                                rules: [6],
                                inclusive: !1
                            },
                            raw: {
                                rules: [3, 4, 5],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 44],
                                inclusive: !0
                            }
                        }, a
                    }();
                return b.lexer = c, a.prototype = b, b.Parser = a, new a
            }();
            b["default"] = c, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d() {
                var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                this.options = a
            }

            function e(a, b, c) {
                void 0 === b && (b = a.length);
                var d = a[b - 1],
                    e = a[b - 2];
                return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
            }

            function f(a, b, c) {
                void 0 === b && (b = -1);
                var d = a[b + 1],
                    e = a[b + 2];
                return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
            }

            function g(a, b, c) {
                var d = a[null == b ? 0 : b + 1];
                if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                    var e = d.value;
                    d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e
                }
            }

            function h(a, b, c) {
                var d = a[null == b ? a.length - 1 : b - 1];
                if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
                    var e = d.value;
                    return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, d.leftStripped
                }
            }
            var i = c(1)["default"];
            b.__esModule = !0;
            var j = c(49),
                k = i(j);
            d.prototype = new k["default"], d.prototype.Program = function(a) {
                var b = !this.options.ignoreStandalone,
                    c = !this.isRootSeen;
                this.isRootSeen = !0;
                for (var d = a.body, i = 0, j = d.length; i < j; i++) {
                    var k = d[i],
                        l = this.accept(k);
                    if (l) {
                        var m = e(d, i, c),
                            n = f(d, i, c),
                            o = l.openStandalone && m,
                            p = l.closeStandalone && n,
                            q = l.inlineStandalone && m && n;
                        l.close && g(d, i, !0), l.open && h(d, i, !0), b && q && (g(d, i), h(d, i) && "PartialStatement" === k.type && (k.indent = /([ \t]+$)/.exec(d[i - 1].original)[1])), b && o && (g((k.program || k.inverse).body), h(d, i)), b && p && (g(d, i), h((k.inverse || k.program).body))
                    }
                }
                return a
            }, d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function(a) {
                this.accept(a.program), this.accept(a.inverse);
                var b = a.program || a.inverse,
                    c = a.program && a.inverse,
                    d = c,
                    i = c;
                if (c && c.chained)
                    for (d = c.body[0].program; i.chained;) i = i.body[i.body.length - 1].program;
                var j = {
                    open: a.openStrip.open,
                    close: a.closeStrip.close,
                    openStandalone: f(b.body),
                    closeStandalone: e((d || b).body)
                };
                if (a.openStrip.close && g(b.body, null, !0), c) {
                    var k = a.inverseStrip;
                    k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), !this.options.ignoreStandalone && e(b.body) && f(d.body) && (h(b.body), g(d.body))
                } else a.closeStrip.open && h(b.body, null, !0);
                return j
            }, d.prototype.Decorator = d.prototype.MustacheStatement = function(a) {
                return a.strip
            }, d.prototype.PartialStatement = d.prototype.CommentStatement = function(a) {
                var b = a.strip || {};
                return {
                    inlineStandalone: !0,
                    open: b.open,
                    close: b.close
                }
            }, b["default"] = d, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d() {
                this.parents = []
            }

            function e(a) {
                this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash")
            }

            function f(a) {
                e.call(this, a), this.acceptKey(a, "program"), this.acceptKey(a, "inverse")
            }

            function g(a) {
                this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash")
            }
            var h = c(1)["default"];
            b.__esModule = !0;
            var i = c(6),
                j = h(i);
            d.prototype = {
                constructor: d,
                mutating: !1,
                acceptKey: function(a, b) {
                    var c = this.accept(a[b]);
                    if (this.mutating) {
                        if (c && !d.prototype[c.type]) throw new j["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
                        a[b] = c
                    }
                },
                acceptRequired: function(a, b) {
                    if (this.acceptKey(a, b), !a[b]) throw new j["default"](a.type + " requires " + b)
                },
                acceptArray: function(a) {
                    for (var b = 0, c = a.length; b < c; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--)
                },
                accept: function(a) {
                    if (a) {
                        if (!this[a.type]) throw new j["default"]("Unknown type: " + a.type, a);
                        this.current && this.parents.unshift(this.current), this.current = a;
                        var b = this[a.type](a);
                        return this.current = this.parents.shift(), !this.mutating || b ? b : !1 !== b ? a : void 0
                    }
                },
                Program: function(a) {
                    this.acceptArray(a.body)
                },
                MustacheStatement: e,
                Decorator: e,
                BlockStatement: f,
                DecoratorBlock: f,
                PartialStatement: g,
                PartialBlockStatement: function(a) {
                    g.call(this, a), this.acceptKey(a, "program")
                },
                ContentStatement: function() {},
                CommentStatement: function() {},
                SubExpression: e,
                PathExpression: function() {},
                StringLiteral: function() {},
                NumberLiteral: function() {},
                BooleanLiteral: function() {},
                UndefinedLiteral: function() {},
                NullLiteral: function() {},
                Hash: function(a) {
                    this.acceptArray(a.pairs)
                },
                HashPair: function(a) {
                    this.acceptRequired(a, "value")
                }
            }, b["default"] = d, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d(a, b) {
                if (b = b.path ? b.path.original : b, a.path.original !== b) {
                    var c = {
                        loc: a.path.loc
                    };
                    throw new q["default"](a.path.original + " doesn't match " + b, c)
                }
            }

            function e(a, b) {
                this.source = a, this.start = {
                    line: b.first_line,
                    column: b.first_column
                }, this.end = {
                    line: b.last_line,
                    column: b.last_column
                }
            }

            function f(a) {
                return /^\[.*\]$/.test(a) ? a.substring(1, a.length - 1) : a
            }

            function g(a, b) {
                return {
                    open: "~" === a.charAt(2),
                    close: "~" === b.charAt(b.length - 3)
                }
            }

            function h(a) {
                return a.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "")
            }

            function i(a, b, c) {
                c = this.locInfo(c);
                for (var d = a ? "@" : "", e = [], f = 0, g = 0, h = b.length; g < h; g++) {
                    var i = b[g].part,
                        j = b[g].original !== i;
                    if (d += (b[g].separator || "") + i, j || ".." !== i && "." !== i && "this" !== i) e.push(i);
                    else {
                        if (e.length > 0) throw new q["default"]("Invalid path: " + d, {
                            loc: c
                        });
                        ".." === i && f++
                    }
                }
                return {
                    type: "PathExpression",
                    data: a,
                    depth: f,
                    parts: e,
                    original: d,
                    loc: c
                }
            }

            function j(a, b, c, d, e, f) {
                var g = d.charAt(3) || d.charAt(2),
                    h = "{" !== g && "&" !== g;
                return {
                    type: /\*/.test(d) ? "Decorator" : "MustacheStatement",
                    path: a,
                    params: b,
                    hash: c,
                    escaped: h,
                    strip: e,
                    loc: this.locInfo(f)
                }
            }

            function k(a, b, c, e) {
                d(a, c), e = this.locInfo(e);
                var f = {
                    type: "Program",
                    body: b,
                    strip: {},
                    loc: e
                };
                return {
                    type: "BlockStatement",
                    path: a.path,
                    params: a.params,
                    hash: a.hash,
                    program: f,
                    openStrip: {},
                    inverseStrip: {},
                    closeStrip: {},
                    loc: e
                }
            }

            function l(a, b, c, e, f, g) {
                e && e.path && d(a, e);
                var h = /\*/.test(a.open);
                b.blockParams = a.blockParams;
                var i = void 0,
                    j = void 0;
                if (c) {
                    if (h) throw new q["default"]("Unexpected inverse block on decorator", c);
                    c.chain && (c.program.body[0].closeStrip = e.strip), j = c.strip, i = c.program
                }
                return f && (f = i, i = b, b = f), {
                    type: h ? "DecoratorBlock" : "BlockStatement",
                    path: a.path,
                    params: a.params,
                    hash: a.hash,
                    program: b,
                    inverse: i,
                    openStrip: a.strip,
                    inverseStrip: j,
                    closeStrip: e && e.strip,
                    loc: this.locInfo(g)
                }
            }

            function m(a, b) {
                if (!b && a.length) {
                    var c = a[0].loc,
                        d = a[a.length - 1].loc;
                    c && d && (b = {
                        source: c.source,
                        start: {
                            line: c.start.line,
                            column: c.start.column
                        },
                        end: {
                            line: d.end.line,
                            column: d.end.column
                        }
                    })
                }
                return {
                    type: "Program",
                    body: a,
                    strip: {},
                    loc: b
                }
            }

            function n(a, b, c, e) {
                return d(a, c), {
                    type: "PartialBlockStatement",
                    name: a.path,
                    params: a.params,
                    hash: a.hash,
                    program: b,
                    openStrip: a.strip,
                    closeStrip: c && c.strip,
                    loc: this.locInfo(e)
                }
            }
            var o = c(1)["default"];
            b.__esModule = !0, b.SourceLocation = e, b.id = f, b.stripFlags = g, b.stripComment = h, b.preparePath = i, b.prepareMustache = j, b.prepareRawBlock = k, b.prepareBlock = l, b.prepareProgram = m, b.preparePartialBlock = n;
            var p = c(6),
                q = o(p)
        }, function(a, b, c) {
            "use strict";

            function d() {}

            function e(a, b, c) {
                if (null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
                b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
                var d = c.parse(a, b),
                    e = (new c.Compiler).compile(d, b);
                return (new c.JavaScriptCompiler).compile(e, b)
            }

            function f(a, b, c) {
                function d() {
                    var d = c.parse(a, b),
                        e = (new c.Compiler).compile(d, b),
                        f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                    return c.template(f)
                }

                function e(a, b) {
                    return f || (f = d()), f.call(this, a, b)
                }
                if (void 0 === b && (b = {}), null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
                b = m.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
                var f = void 0;
                return e._setup = function(a) {
                    return f || (f = d()), f._setup(a)
                }, e._child = function(a, b, c, e) {
                    return f || (f = d()), f._child(a, b, c, e)
                }, e
            }

            function g(a, b) {
                if (a === b) return !0;
                if (m.isArray(a) && m.isArray(b) && a.length === b.length) {
                    for (var c = 0; c < a.length; c++)
                        if (!g(a[c], b[c])) return !1;
                    return !0
                }
            }

            function h(a) {
                if (!a.path.parts) {
                    var b = a.path;
                    a.path = {
                        type: "PathExpression",
                        data: !1,
                        depth: 0,
                        parts: [b.original + ""],
                        original: b.original + "",
                        loc: b.loc
                    }
                }
            }
            var i = c(34)["default"],
                j = c(1)["default"];
            b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;
            var k = c(6),
                l = j(k),
                m = c(5),
                n = c(45),
                o = j(n),
                p = [].slice;
            d.prototype = {
                compiler: d,
                equals: function(a) {
                    var b = this.opcodes.length;
                    if (a.opcodes.length !== b) return !1;
                    for (var c = 0; c < b; c++) {
                        var d = this.opcodes[c],
                            e = a.opcodes[c];
                        if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1
                    }
                    b = this.children.length;
                    for (var c = 0; c < b; c++)
                        if (!this.children[c].equals(a.children[c])) return !1;
                    return !0
                },
                guid: 0,
                compile: function(a, b) {
                    return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds, b.blockParams = b.blockParams || [], b.knownHelpers = m.extend(i(null), {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        "if": !0,
                        unless: !0,
                        "with": !0,
                        log: !0,
                        lookup: !0
                    }, b.knownHelpers), this.accept(a)
                },
                compileProgram: function(a) {
                    var b = new this.compiler,
                        c = b.compile(a, this.options),
                        d = this.guid++;
                    return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, this.useDepths = this.useDepths || c.useDepths, d
                },
                accept: function(a) {
                    if (!this[a.type]) throw new l["default"]("Unknown type: " + a.type, a);
                    this.sourceNode.unshift(a);
                    var b = this[a.type](a);
                    return this.sourceNode.shift(), b
                },
                Program: function(a) {
                    this.options.blockParams.unshift(a.blockParams);
                    for (var b = a.body, c = b.length, d = 0; d < c; d++) this.accept(b[d]);
                    return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, this
                },
                BlockStatement: function(a) {
                    h(a);
                    var b = a.program,
                        c = a.inverse;
                    b = b && this.compileProgram(b), c = c && this.compileProgram(c);
                    var d = this.classifySexpr(a);
                    "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                },
                DecoratorBlock: function(a) {
                    var b = a.program && this.compileProgram(a.program),
                        c = this.setupFullMustacheParams(a, b, void 0),
                        d = a.path;
                    this.useDecorators = !0, this.opcode("registerDecorator", c.length, d.original)
                },
                PartialStatement: function(a) {
                    this.usePartial = !0;
                    var b = a.program;
                    b && (b = this.compileProgram(a.program));
                    var c = a.params;
                    if (c.length > 1) throw new l["default"]("Unsupported number of partial arguments: " + c.length, a);
                    c.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : c.push({
                        type: "PathExpression",
                        parts: [],
                        depth: 0
                    }));
                    var d = a.name.original,
                        e = "SubExpression" === a.name.type;
                    e && this.accept(a.name), this.setupFullMustacheParams(a, b, void 0, !0);
                    var f = a.indent || "";
                    this.options.preventIndent && f && (this.opcode("appendContent", f), f = ""), this.opcode("invokePartial", e, d, f), this.opcode("append")
                },
                PartialBlockStatement: function(a) {
                    this.PartialStatement(a)
                },
                MustacheStatement: function(a) {
                    this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                },
                Decorator: function(a) {
                    this.DecoratorBlock(a)
                },
                ContentStatement: function(a) {
                    a.value && this.opcode("appendContent", a.value)
                },
                CommentStatement: function() {},
                SubExpression: function(a) {
                    h(a);
                    var b = this.classifySexpr(a);
                    "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
                },
                ambiguousSexpr: function(a, b, c) {
                    var d = a.path,
                        e = d.parts[0],
                        f = null != b || null != c;
                    this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), d.strict = !0, this.accept(d), this.opcode("invokeAmbiguous", e, f)
                },
                simpleSexpr: function(a) {
                    var b = a.path;
                    b.strict = !0, this.accept(b), this.opcode("resolvePossibleLambda")
                },
                helperSexpr: function(a, b, c) {
                    var d = this.setupFullMustacheParams(a, b, c),
                        e = a.path,
                        f = e.parts[0];
                    if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
                    else {
                        if (this.options.knownHelpersOnly) throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                        e.strict = !0, e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, o["default"].helpers.simpleId(e))
                    }
                },
                PathExpression: function(a) {
                    this.addDepth(a.depth), this.opcode("getContext", a.depth);
                    var b = a.parts[0],
                        c = o["default"].helpers.scopedId(a),
                        d = !a.depth && !c && this.blockParamIndex(b);
                    d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, this.opcode("lookupData", a.depth, a.parts, a.strict)) : this.opcode("lookupOnContext", a.parts, a.falsy, a.strict, c) : this.opcode("pushContext")
                },
                StringLiteral: function(a) {
                    this.opcode("pushString", a.value)
                },
                NumberLiteral: function(a) {
                    this.opcode("pushLiteral", a.value)
                },
                BooleanLiteral: function(a) {
                    this.opcode("pushLiteral", a.value)
                },
                UndefinedLiteral: function() {
                    this.opcode("pushLiteral", "undefined")
                },
                NullLiteral: function() {
                    this.opcode("pushLiteral", "null")
                },
                Hash: function(a) {
                    var b = a.pairs,
                        c = 0,
                        d = b.length;
                    for (this.opcode("pushHash"); c < d; c++) this.pushParam(b[c].value);
                    for (; c--;) this.opcode("assignToHash", b[c].key);
                    this.opcode("popHash")
                },
                opcode: function(a) {
                    this.opcodes.push({
                        opcode: a,
                        args: p.call(arguments, 1),
                        loc: this.sourceNode[0].loc
                    })
                },
                addDepth: function(a) {
                    a && (this.useDepths = !0)
                },
                classifySexpr: function(a) {
                    var b = o["default"].helpers.simpleId(a.path),
                        c = b && !!this.blockParamIndex(a.path.parts[0]),
                        d = !c && o["default"].helpers.helperExpression(a),
                        e = !c && (d || b);
                    if (e && !d) {
                        var f = a.path.parts[0],
                            g = this.options;
                        g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1)
                    }
                    return d ? "helper" : e ? "ambiguous" : "simple"
                },
                pushParams: function(a) {
                    for (var b = 0, c = a.length; b < c; b++) this.pushParam(a[b])
                },
                pushParam: function(a) {
                    var b = null != a.value ? a.value : a.original || "";
                    if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), "SubExpression" === a.type && this.accept(a);
                    else {
                        if (this.trackIds) {
                            var c = void 0;
                            if (!a.parts || o["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c) {
                                var d = a.parts.slice(1).join(".");
                                this.opcode("pushId", "BlockParam", c, d)
                            } else b = a.original || b, b.replace && (b = b.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", a.type, b)
                        }
                        this.accept(a)
                    }
                },
                setupFullMustacheParams: function(a, b, c, d) {
                    var e = a.params;
                    return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e
                },
                blockParamIndex: function(a) {
                    for (var b = 0, c = this.options.blockParams.length; b < c; b++) {
                        var d = this.options.blockParams[b],
                            e = d && m.indexOf(d, a);
                        if (d && e >= 0) return [b, e]
                    }
                }
            }
        }, function(a, b, c) {
            "use strict";

            function d(a) {
                this.value = a
            }

            function e() {}

            function f(a, b, c, d) {
                var e = b.popStack(),
                    f = 0,
                    g = c.length;
                for (a && g--; f < g; f++) e = b.nameLookup(e, c[f], d);
                return a ? [b.aliasable("container.strict"), "(", e, ", ", b.quotedString(c[f]), ", ", JSON.stringify(b.source.currentLocation), " )"] : e
            }
            var g = c(13)["default"],
                h = c(1)["default"];
            b.__esModule = !0;
            var i = c(4),
                j = c(6),
                k = h(j),
                l = c(5),
                m = c(53),
                n = h(m);
            e.prototype = {
                    nameLookup: function(a, b) {
                        return this.internalNameLookup(a, b)
                    },
                    depthedLookup: function(a) {
                        return [this.aliasable("container.lookup"), '(depths, "', a, '")']
                    },
                    compilerInfo: function() {
                        var a = i.COMPILER_REVISION;
                        return [a, i.REVISION_CHANGES[a]]
                    },
                    appendToBuffer: function(a, b, c) {
                        return l.isArray(a) || (a = [a]), a = this.source.wrap(a, b), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : (a.appendToBuffer = !0, a)
                    },
                    initializeBuffer: function() {
                        return this.quotedString("")
                    },
                    internalNameLookup: function(a, b) {
                        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", a, ",", JSON.stringify(b), ")"]
                    },
                    lookupPropertyFunctionIsUsed: !1,
                    compile: function(a, b, c, d) {
                        this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {
                            decorators: [],
                            programs: [],
                            environments: []
                        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                            list: []
                        }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || a.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || a.useBlockParams;
                        var e = a.opcodes,
                            f = void 0,
                            g = void 0,
                            h = void 0,
                            i = void 0;
                        for (h = 0, i = e.length; h < i; h++) f = e[h], this.source.currentLocation = f.loc, g = g || f.loc, this[f.opcode].apply(this, f.args);
                        if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new k["default"]("Compile completed with content left on stack");
                        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]), this.decorators.push("return fn;"), d ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
                        var j = this.createFunctionContext(d);
                        if (this.isChild) return j;
                        var l = {
                            compiler: this.compilerInfo(),
                            main: j
                        };
                        this.decorators && (l.main_d = this.decorators, l.useDecorators = !0);
                        var m = this.context,
                            n = m.programs,
                            o = m.decorators;
                        for (h = 0, i = n.length; h < i; h++) n[h] && (l[h] = n[h], o[h] && (l[h + "_d"] = o[h], l.useDecorators = !0));
                        return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), this.source.currentLocation = {
                            start: {
                                line: 1,
                                column: 0
                            }
                        }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({
                            file: b.destName
                        }), l.map = l.map && l.map.toString()) : l = l.toString()), l
                    },
                    preamble: function() {
                        this.lastContext = 0, this.source = new n["default"](this.options.srcName), this.decorators = new n["default"](this.options.srcName)
                    },
                    createFunctionContext: function(a) {
                        var b = this,
                            c = "",
                            d = this.stackVars.concat(this.registers.list);
                        d.length > 0 && (c += ", " + d.join(", "));
                        var e = 0;
                        g(this.aliases).forEach(function(a) {
                            var d = b.aliases[a];
                            d.children && d.referenceCount > 1 && (c += ", alias" + ++e + "=" + a, d.children[0] = "alias" + e)
                        }), this.lookupPropertyFunctionIsUsed && (c += ", " + this.lookupPropertyFunctionVarDeclaration());
                        var f = ["container", "depth0", "helpers", "partials", "data"];
                        (this.useBlockParams || this.useDepths) && f.push("blockParams"), this.useDepths && f.push("depths");
                        var h = this.mergeSource(c);
                        return a ? (f.push(h), Function.apply(this, f)) : this.source.wrap(["function(", f.join(","), ") {\n  ", h, "}"])
                    },
                    mergeSource: function(a) {
                        var b = this.environment.isSimple,
                            c = !this.forceBuffer,
                            d = void 0,
                            e = void 0,
                            f = void 0,
                            g = void 0;
                        return this.source.each(function(a) {
                            a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, g.add(";"), f = g = void 0), e = !0, b || (c = !1))
                        }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge()
                    },
                    lookupPropertyFunctionVarDeclaration: function() {
                        return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()
                    },
                    blockValue: function(a) {
                        var b = this.aliasable("container.hooks.blockHelperMissing"),
                            c = [this.contextName(0)];
                        this.setupHelperArgs(a, 0, c);
                        var d = this.popStack();
                        c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c))
                    },
                    ambiguousBlockValue: function() {
                        var a = this.aliasable("container.hooks.blockHelperMissing"),
                            b = [this.contextName(0)];
                        this.setupHelperArgs("", 0, b, !0), this.flushInline();
                        var c = this.topStack();
                        b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"])
                    },
                    appendContent: function(a) {
                        this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, this.pendingContent = a
                    },
                    append: function() {
                        if (this.isInline()) this.replaceStack(function(a) {
                            return [" != null ? ", a, ' : ""']
                        }), this.pushSource(this.appendToBuffer(this.popStack()));
                        else {
                            var a = this.popStack();
                            this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                        }
                    },
                    appendEscaped: function() {
                        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
                    },
                    getContext: function(a) {
                        this.lastContext = a
                    },
                    pushContext: function() {
                        this.pushStackLiteral(this.contextName(this.lastContext))
                    },
                    lookupOnContext: function(a, b, c, d) {
                        var e = 0;
                        d || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[e++])), this.resolvePath("context", a, e, b, c)
                    },
                    lookupBlockParam: function(a, b) {
                        this.useBlockParams = !0, this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1)
                    },
                    lookupData: function(a, b, c) {
                        a ? this.pushStackLiteral("container.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0, c)
                    },
                    resolvePath: function(a, b, c, d, e) {
                        var g = this;
                        if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict && e, this, b, a));
                        for (var h = b.length; c < h; c++) this.replaceStack(function(e) {
                            var f = g.nameLookup(e, b[c], a);
                            return d ? [" && ", f] : [" != null ? ", f, " : ", e]
                        })
                    },
                    resolvePossibleLambda: function() {
                        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                    },
                    pushStringParam: function(a, b) {
                        this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
                    },
                    emptyHash: function(a) {
                        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}")
                    },
                    pushHash: function() {
                        this.hash && this.hashes.push(this.hash), this.hash = {
                            values: {},
                            types: [],
                            contexts: [],
                            ids: []
                        }
                    },
                    popHash: function() {
                        var a = this.hash;
                        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), this.push(this.objectLiteral(a.values))
                    },
                    pushString: function(a) {
                        this.pushStackLiteral(this.quotedString(a))
                    },
                    pushLiteral: function(a) {
                        this.pushStackLiteral(a)
                    },
                    pushProgram: function(a) {
                        null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
                    },
                    registerDecorator: function(a, b) {
                        var c = this.nameLookup("decorators", b, "decorator"),
                            d = this.setupHelperArgs(b, a);
                        this.decorators.push(["fn = ", this.decorators.functionCall(c, "", ["fn", "props", "container", d]), " || fn;"])
                    },
                    invokeHelper: function(a, b, c) {
                        var d = this.popStack(),
                            e = this.setupHelper(a, b),
                            f = [];
                        c && f.push(e.name), f.push(d), this.options.strict || f.push(this.aliasable("container.hooks.helperMissing"));
                        var g = ["(", this.itemsSeparatedBy(f, "||"), ")"],
                            h = this.source.functionCall(g, "call", e.callParams);
                        this.push(h)
                    },
                    itemsSeparatedBy: function(a, b) {
                        var c = [];
                        c.push(a[0]);
                        for (var d = 1; d < a.length; d++) c.push(b, a[d]);
                        return c
                    },
                    invokeKnownHelper: function(a, b) {
                        var c = this.setupHelper(a, b);
                        this.push(this.source.functionCall(c.name, "call", c.callParams))
                    },
                    invokeAmbiguous: function(a, b) {
                        this.useRegister("helper");
                        var c = this.popStack();
                        this.emptyHash();
                        var d = this.setupHelper(0, a, b),
                            e = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                            f = ["(", "(helper = ", e, " || ", c, ")"];
                        this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"])
                    },
                    invokePartial: function(a, b, c) {
                        var d = [],
                            e = this.setupParams(b, 1, d);
                        a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), e.helpers = "helpers", e.partials = "partials", e.decorators = "container.decorators", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), this.push(this.source.functionCall("container.invokePartial", "", d))
                    },
                    assignToHash: function(a) {
                        var b = this.popStack(),
                            c = void 0,
                            d = void 0,
                            e = void 0;
                        this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), c = this.popStack());
                        var f = this.hash;
                        c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b
                    },
                    pushId: function(a, b, c) {
                        "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                    },
                    compiler: e,
                    compileChildren: function(a, b) {
                        for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; f < g; f++) {
                            d = c[f], e = new this.compiler;
                            var h = this.matchExistingProgram(d);
                            if (null == h) {
                                this.context.programs.push("");
                                var i = this.context.programs.length;
                                d.index = i, d.name = "program" + i, this.context.programs[i] = e.compile(d, b, this.context, !this.precompile), this.context.decorators[i] = e.decorators, this.context.environments[i] = d, this.useDepths = this.useDepths || e.useDepths, this.useBlockParams = this.useBlockParams || e.useBlockParams, d.useDepths = this.useDepths, d.useBlockParams = this.useBlockParams
                            } else d.index = h.index, d.name = "program" + h.index, this.useDepths = this.useDepths || h.useDepths, this.useBlockParams = this.useBlockParams || h.useBlockParams
                        }
                    },
                    matchExistingProgram: function(a) {
                        for (var b = 0, c = this.context.environments.length; b < c; b++) {
                            var d = this.context.environments[b];
                            if (d && d.equals(a)) return d
                        }
                    },
                    programExpression: function(a) {
                        var b = this.environment.children[a],
                            c = [b.index, "data", b.blockParams];
                        return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "container.program(" + c.join(", ") + ")"
                    },
                    useRegister: function(a) {
                        this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
                    },
                    push: function(a) {
                        return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a
                    },
                    pushStackLiteral: function(a) {
                        this.push(new d(a))
                    },
                    pushSource: function(a) {
                        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a && this.source.push(a)
                    },
                    replaceStack: function(a) {
                        var b = ["("],
                            c = void 0,
                            e = void 0,
                            f = void 0;
                        if (!this.isInline()) throw new k["default"]("replaceStack on non-inline");
                        var g = this.popStack(!0);
                        if (g instanceof d) c = [g.value], b = ["(", c], f = !0;
                        else {
                            e = !0;
                            var h = this.incrStack();
                            b = ["((", this.push(h), " = ", g, ")"], c = this.topStack()
                        }
                        var i = a.call(this, c);
                        f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"))
                    },
                    incrStack: function() {
                        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                    },
                    topStackName: function() {
                        return "stack" + this.stackSlot
                    },
                    flushInline: function() {
                        var a = this.inlineStack;
                        this.inlineStack = [];
                        for (var b = 0, c = a.length; b < c; b++) {
                            var e = a[b];
                            if (e instanceof d) this.compileStack.push(e);
                            else {
                                var f = this.incrStack();
                                this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f)
                            }
                        }
                    },
                    isInline: function() {
                        return this.inlineStack.length
                    },
                    popStack: function(a) {
                        var b = this.isInline(),
                            c = (b ? this.inlineStack : this.compileStack).pop();
                        if (!a && c instanceof d) return c.value;
                        if (!b) {
                            if (!this.stackSlot) throw new k["default"]("Invalid stack pop");
                            this.stackSlot--
                        }
                        return c
                    },
                    topStack: function() {
                        var a = this.isInline() ? this.inlineStack : this.compileStack,
                            b = a[a.length - 1];
                        return b instanceof d ? b.value : b
                    },
                    contextName: function(a) {
                        return this.useDepths && a ? "depths[" + a + "]" : "depth" + a
                    },
                    quotedString: function(a) {
                        return this.source.quotedString(a)
                    },
                    objectLiteral: function(a) {
                        return this.source.objectLiteral(a)
                    },
                    aliasable: function(a) {
                        var b = this.aliases[a];
                        return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), b.aliasable = !0, b.referenceCount = 1, b)
                    },
                    setupHelper: function(a, b, c) {
                        var d = [];
                        return {
                            params: d,
                            paramsInit: this.setupHelperArgs(b, a, d, c),
                            name: this.nameLookup("helpers", b, "helper"),
                            callParams: [this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})")].concat(d)
                        }
                    },
                    setupParams: function(a, b, c) {
                        var d = {},
                            e = [],
                            f = [],
                            g = [],
                            h = !c,
                            i = void 0;
                        h && (c = []), d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());
                        var j = this.popStack(),
                            k = this.popStack();
                        (k || j) && (d.fn = k || "container.noop", d.inverse = j || "container.noop");
                        for (var l = b; l--;) i = this.popStack(), c[l] = i, this.trackIds && (g[l] = this.popStack()), this.stringParams && (f[l] = this.popStack(), e[l] = this.popStack());
                        return h && (d.args = this.source.generateArray(c)), this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), this.useBlockParams && (d.blockParams = "blockParams"), d
                    },
                    setupHelperArgs: function(a, b, c, d) {
                        var e = this.setupParams(a, b, c);
                        return e.loc = JSON.stringify(this.source.currentLocation), e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : c ? (c.push(e), "") : e
                    }
                },
                function() {
                    for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = !0
                }(), e.isValidJavaScriptVariableName = function(a) {
                    return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)
                }, b["default"] = e, a.exports = b["default"]
        }, function(a, b, c) {
            "use strict";

            function d(a, b, c) {
                if (g.isArray(a)) {
                    for (var d = [], e = 0, f = a.length; e < f; e++) d.push(b.wrap(a[e], c));
                    return d
                }
                return "boolean" == typeof a || "number" == typeof a ? a + "" : a
            }

            function e(a) {
                this.srcFile = a, this.source = []
            }
            var f = c(13)["default"];
            b.__esModule = !0;
            var g = c(5),
                h = void 0;
            h || (h = function(a, b, c, d) {
                this.src = "", d && this.add(d)
            }, h.prototype = {
                add: function(a) {
                    g.isArray(a) && (a = a.join("")), this.src += a
                },
                prepend: function(a) {
                    g.isArray(a) && (a = a.join("")), this.src = a + this.src
                },
                toStringWithSourceMap: function() {
                    return {
                        code: this.toString()
                    }
                },
                toString: function() {
                    return this.src
                }
            }), e.prototype = {
                isEmpty: function() {
                    return !this.source.length
                },
                prepend: function(a, b) {
                    this.source.unshift(this.wrap(a, b))
                },
                push: function(a, b) {
                    this.source.push(this.wrap(a, b))
                },
                merge: function() {
                    var a = this.empty();
                    return this.each(function(b) {
                        a.add(["  ", b, "\n"])
                    }), a
                },
                each: function(a) {
                    for (var b = 0, c = this.source.length; b < c; b++) a(this.source[b])
                },
                empty: function() {
                    var a = this.currentLocation || {
                        start: {}
                    };
                    return new h(a.start.line, a.start.column, this.srcFile)
                },
                wrap: function(a) {
                    var b = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
                        start: {}
                    } : arguments[1];
                    return a instanceof h ? a : (a = d(a, this, b), new h(b.start.line, b.start.column, this.srcFile, a))
                },
                functionCall: function(a, b, c) {
                    return c = this.generateList(c), this.wrap([a, b ? "." + b + "(" : "(", c, ")"])
                },
                quotedString: function(a) {
                    return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                },
                objectLiteral: function(a) {
                    var b = this,
                        c = [];
                    f(a).forEach(function(e) {
                        var f = d(a[e], b);
                        "undefined" !== f && c.push([b.quotedString(e), ":", f])
                    });
                    var e = this.generateList(c);
                    return e.prepend("{"), e.add("}"), e
                },
                generateList: function(a) {
                    for (var b = this.empty(), c = 0, e = a.length; c < e; c++) c && b.add(","), b.add(d(a[c], this));
                    return b
                },
                generateArray: function(a) {
                    var b = this.generateList(a);
                    return b.prepend("["), b.add("]"), b
                }
            }, b["default"] = e, a.exports = b["default"]
        }])
    }),
    /*!
     * UAParser.js v0.7.21
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright Â© 2012-2019 Faisal Salman <f@faisalman.com>
     * Licensed under MIT License
     */
    function(window, undefined) {
        "use strict";
        var EMPTY = "",
            UNKNOWN = "?",
            FUNC_TYPE = "function",
            UNDEF_TYPE = "undefined",
            OBJ_TYPE = "object",
            STR_TYPE = "string",
            MODEL = "model",
            NAME = "name",
            TYPE = "type",
            VENDOR = "vendor",
            VERSION = "version",
            ARCHITECTURE = "architecture",
            CONSOLE = "console",
            MOBILE = "mobile",
            TABLET = "tablet",
            SMARTTV = "smarttv",
            WEARABLE = "wearable",
            util = {
                extend: function(regexes, extensions) {
                    var mergedRegexes = {};
                    for (var i in regexes) extensions[i] && extensions[i].length % 2 == 0 ? mergedRegexes[i] = extensions[i].concat(regexes[i]) : mergedRegexes[i] = regexes[i];
                    return mergedRegexes
                },
                has: function(str1, str2) {
                    return "string" == typeof str1 && -1 !== str2.toLowerCase().indexOf(str1.toLowerCase())
                },
                lowerize: function(str) {
                    return str.toLowerCase()
                },
                major: function(version) {
                    return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, "").split(".")[0] : undefined
                },
                trim: function(str) {
                    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            mapper = {
                rgx: function(ua, arrays) {
                    for (var j, k, p, q, matches, match, i = 0; i < arrays.length && !matches;) {
                        var regex = arrays[i],
                            props = arrays[i + 1];
                        for (j = k = 0; j < regex.length && !matches;)
                            if (matches = regex[j++].exec(ua))
                                for (p = 0; p < props.length; p++) match = matches[++k], q = props[p], typeof q === OBJ_TYPE && q.length > 0 ? 2 == q.length ? typeof q[1] == FUNC_TYPE ? this[q[0]] = q[1].call(this, match) : this[q[0]] = q[1] : 3 == q.length ? typeof q[1] !== FUNC_TYPE || q[1].exec && q[1].test ? this[q[0]] = match ? match.replace(q[1], q[2]) : undefined : this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined : 4 == q.length && (this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined) : this[q] = match || undefined;
                        i += 2
                    }
                },
                str: function(str, map) {
                    for (var i in map)
                        if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                            for (var j = 0; j < map[i].length; j++)
                                if (util.has(map[i][j], str)) return i === UNKNOWN ? undefined : i
                        } else if (util.has(map[i], str)) return i === UNKNOWN ? undefined : i;
                    return str
                }
            },
            maps = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            regexes = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [NAME, VERSION],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [NAME, "Opera Mini"], VERSION
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [NAME, "Opera"], VERSION
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                    [NAME, VERSION],
                    [/(konqueror)\/([\w\.]+)/i],
                    [
                        [NAME, "Konqueror"], VERSION
                    ],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [NAME, "IE"], VERSION
                    ],
                    [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                    [
                        [NAME, "Edge"], VERSION
                    ],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [NAME, "Yandex"], VERSION
                    ],
                    [/(Avast)\/([\w\.]+)/i],
                    [
                        [NAME, "Avast Secure Browser"], VERSION
                    ],
                    [/(AVG)\/([\w\.]+)/i],
                    [
                        [NAME, "AVG Secure Browser"], VERSION
                    ],
                    [/(puffin)\/([\w\.]+)/i],
                    [
                        [NAME, "Puffin"], VERSION
                    ],
                    [/(focus)\/([\w\.]+)/i],
                    [
                        [NAME, "Firefox Focus"], VERSION
                    ],
                    [/(opt)\/([\w\.]+)/i],
                    [
                        [NAME, "Opera Touch"], VERSION
                    ],
                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [NAME, "UCBrowser"], VERSION
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [NAME, /_/g, " "], VERSION
                    ],
                    [/(windowswechat qbcore)\/([\w\.]+)/i],
                    [
                        [NAME, "WeChat(Win) Desktop"], VERSION
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [NAME, "WeChat"], VERSION
                    ],
                    [/(brave)\/([\w\.]+)/i],
                    [
                        [NAME, "Brave"], VERSION
                    ],
                    [/(qqbrowserlite)\/([\w\.]+)/i],
                    [NAME, VERSION],
                    [/(QQ)\/([\d\.]+)/i],
                    [NAME, VERSION],
                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [NAME, VERSION],
                    [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                    [NAME, VERSION],
                    [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                    [NAME, VERSION],
                    [/(MetaSr)[\/\s]?([\w\.]+)/i],
                    [NAME],
                    [/(LBBROWSER)/i],
                    [NAME],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [VERSION, [NAME, "MIUI Browser"]],
                    [/;fbav\/([\w\.]+);/i],
                    [VERSION, [NAME, "Facebook"]],
                    [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                    [NAME, VERSION],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [VERSION, [NAME, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [NAME, /(.+)/, "$1 WebView"], VERSION
                    ],
                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                    [
                        [NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION
                    ],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [VERSION, [NAME, "Android Browser"]],
                    [/(sailfishbrowser)\/([\w\.]+)/i],
                    [
                        [NAME, "Sailfish Browser"], VERSION
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [NAME, VERSION],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [NAME, "Dolphin"], VERSION
                    ],
                    [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                    [
                        [NAME, "360 Browser"]
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [NAME, "Chrome"], VERSION
                    ],
                    [/(coast)\/([\w\.]+)/i],
                    [
                        [NAME, "Opera Coast"], VERSION
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    [VERSION, [NAME, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [VERSION, [NAME, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [VERSION, NAME],
                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                        [NAME, "GSA"], VERSION
                    ],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [NAME, VERSION],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [NAME, "Netscape"], VERSION
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [NAME, VERSION]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [ARCHITECTURE, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [ARCHITECTURE, util.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [ARCHITECTURE, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [ARCHITECTURE, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [ARCHITECTURE, /ower/, "", util.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [ARCHITECTURE, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [ARCHITECTURE, util.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                    [MODEL, VENDOR, [TYPE, TABLET]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [MODEL, [VENDOR, "Apple"],
                        [TYPE, TABLET]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [MODEL, "Apple TV"],
                        [VENDOR, "Apple"],
                        [TYPE, SMARTTV]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [/(kf[A-z]+)\sbuild\/.+silk\//i],
                    [MODEL, [VENDOR, "Amazon"],
                        [TYPE, TABLET]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                    [
                        [MODEL, mapper.str, maps.device.amazon.model],
                        [VENDOR, "Amazon"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+aft([bms])\sbuild/i],
                    [MODEL, [VENDOR, "Amazon"],
                        [TYPE, SMARTTV]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [MODEL, VENDOR, [TYPE, MOBILE]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [MODEL, [VENDOR, "Apple"],
                        [TYPE, MOBILE]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [/\(bb10;\s(\w+)/i],
                    [MODEL, [VENDOR, "BlackBerry"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                    [MODEL, [VENDOR, "Asus"],
                        [TYPE, TABLET]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [VENDOR, "Sony"],
                        [MODEL, "Xperia Tablet"],
                        [TYPE, TABLET]
                    ],
                    [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [MODEL, [VENDOR, "Sony"],
                        [TYPE, MOBILE]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [VENDOR, MODEL, [TYPE, CONSOLE]],
                    [/android.+;\s(shield)\sbuild/i],
                    [MODEL, [VENDOR, "Nvidia"],
                        [TYPE, CONSOLE]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [MODEL, [VENDOR, "Sony"],
                        [TYPE, CONSOLE]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [VENDOR, mapper.str, maps.device.sprint.vendor],
                        [MODEL, mapper.str, maps.device.sprint.model],
                        [TYPE, MOBILE]
                    ],
                    [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                    [VENDOR, [MODEL, /_/g, " "],
                        [TYPE, MOBILE]
                    ],
                    [/(nexus\s9)/i],
                    [MODEL, [VENDOR, "HTC"],
                        [TYPE, TABLET]
                    ],
                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i],
                    [MODEL, [VENDOR, "Huawei"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+(bah2?-a?[lw]\d{2})/i],
                    [MODEL, [VENDOR, "Huawei"],
                        [TYPE, TABLET]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [MODEL, [VENDOR, "Microsoft"],
                        [TYPE, CONSOLE]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [MODEL, /\./g, " "],
                        [VENDOR, "Microsoft"],
                        [TYPE, MOBILE]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [MODEL, [VENDOR, "Motorola"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [MODEL, [VENDOR, "Motorola"],
                        [TYPE, TABLET]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [VENDOR, util.trim],
                        [MODEL, util.trim],
                        [TYPE, SMARTTV]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [MODEL, /^/, "SmartTV"],
                        [VENDOR, "Samsung"],
                        [TYPE, SMARTTV]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [MODEL, [VENDOR, "Sharp"],
                        [TYPE, SMARTTV]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [VENDOR, "Samsung"], MODEL, [TYPE, TABLET]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [VENDOR, [TYPE, SMARTTV], MODEL],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                    [
                        [VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]
                    ],
                    [/sie-(\w*)/i],
                    [MODEL, [VENDOR, "Siemens"],
                        [TYPE, MOBILE]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                    [
                        [VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]
                    ],
                    [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                    [MODEL, [VENDOR, "Acer"],
                        [TYPE, TABLET]
                    ],
                    [/android.+([vl]k\-?\d{3})\s+build/i],
                    [MODEL, [VENDOR, "LG"],
                        [TYPE, TABLET]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [VENDOR, "LG"], MODEL, [TYPE, TABLET]
                    ],
                    [/(lg) netcast\.tv/i],
                    [VENDOR, MODEL, [TYPE, SMARTTV]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                    [MODEL, [VENDOR, "LG"],
                        [TYPE, MOBILE]
                    ],
                    [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [MODEL, [VENDOR, "Lenovo"],
                        [TYPE, TABLET]
                    ],
                    [/(lenovo)[_\s-]?([\w-]+)/i],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [/linux;.+((jolla));/i],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [VENDOR, MODEL, [TYPE, WEARABLE]],
                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [/crkey/i],
                    [
                        [MODEL, "Chromecast"],
                        [VENDOR, "Google"],
                        [TYPE, SMARTTV]
                    ],
                    [/android.+;\s(glass)\s\d/i],
                    [MODEL, [VENDOR, "Google"],
                        [TYPE, WEARABLE]
                    ],
                    [/android.+;\s(pixel c)[\s)]/i],
                    [MODEL, [VENDOR, "Google"],
                        [TYPE, TABLET]
                    ],
                    [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                    [MODEL, [VENDOR, "Google"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [MODEL, /_/g, " "],
                        [VENDOR, "Xiaomi"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [MODEL, /_/g, " "],
                        [VENDOR, "Xiaomi"],
                        [TYPE, TABLET]
                    ],
                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                    [MODEL, [VENDOR, "Meizu"],
                        [TYPE, MOBILE]
                    ],
                    [/(mz)-([\w-]{2,})/i],
                    [
                        [VENDOR, "Meizu"], MODEL, [TYPE, MOBILE]
                    ],
                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                    [MODEL, [VENDOR, "OnePlus"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                    [MODEL, [VENDOR, "RCA"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                    [MODEL, [VENDOR, "Dell"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                    [MODEL, [VENDOR, "Verizon"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                    [
                        [VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                    [MODEL, [VENDOR, "NuVision"],
                        [TYPE, TABLET]
                    ],
                    [/android.+;\s(k88)\sbuild/i],
                    [MODEL, [VENDOR, "ZTE"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                    [MODEL, [VENDOR, "Swiss"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                    [MODEL, [VENDOR, "Swiss"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                    [MODEL, [VENDOR, "Zeki"],
                        [TYPE, TABLET]
                    ],
                    [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                    [
                        [VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                    [MODEL, [VENDOR, "Insignia"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                    [MODEL, [VENDOR, "NextBook"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                    [
                        [VENDOR, "Voice"], MODEL, [TYPE, MOBILE]
                    ],
                    [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                    [
                        [VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]
                    ],
                    [/android.+;\s(PH-1)\s/i],
                    [MODEL, [VENDOR, "Essential"],
                        [TYPE, MOBILE]
                    ],
                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                    [MODEL, [VENDOR, "Envizen"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                    [MODEL, [VENDOR, "MachSpeed"],
                        [TYPE, TABLET]
                    ],
                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                    [MODEL, [VENDOR, "Rotor"],
                        [TYPE, TABLET]
                    ],
                    [/android.+(KS(.+))\s+build/i],
                    [MODEL, [VENDOR, "Amazon"],
                        [TYPE, TABLET]
                    ],
                    [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [TYPE, util.lowerize], VENDOR, MODEL
                    ],
                    [/[\s\/\(](smart-?tv)[;\)]/i],
                    [
                        [TYPE, SMARTTV]
                    ],
                    [/(android[\w\.\s\-]{0,9});.+build/i],
                    [MODEL, [VENDOR, "Generic"]]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [VERSION, [NAME, "EdgeHTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [VERSION, [NAME, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [NAME, VERSION],
                    [/rv\:([\w\.]{1,9}).+(gecko)/i],
                    [VERSION, NAME]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [NAME, VERSION],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [NAME, [VERSION, mapper.str, maps.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [NAME, "Windows"],
                        [VERSION, mapper.str, maps.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [NAME, "BlackBerry"], VERSION
                    ],
                    [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                    [NAME, VERSION],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                    [
                        [NAME, "Symbian"], VERSION
                    ],
                    [/\((series40);/i],
                    [NAME],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [NAME, "Firefox OS"], VERSION
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                    [NAME, VERSION],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [NAME, "Chromium OS"], VERSION
                    ],
                    [/(sunos)\s?([\w\.\d]*)/i],
                    [
                        [NAME, "Solaris"], VERSION
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                    [NAME, VERSION],
                    [/(haiku)\s(\w+)/i],
                    [NAME, VERSION],
                    [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                    [
                        [VERSION, /_/g, "."],
                        [NAME, "iOS"]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [NAME, "Mac OS"],
                        [VERSION, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                    [NAME, VERSION]
                ]
            },
            UAParser = function(uastring, extensions) {
                if ("object" == typeof uastring && (extensions = uastring, uastring = undefined), !(this instanceof UAParser)) return new UAParser(uastring, extensions).getResult();
                var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY),
                    rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                return this.getBrowser = function() {
                    var browser = {
                        name: undefined,
                        version: undefined
                    };
                    return mapper.rgx.call(browser, ua, rgxmap.browser), browser.major = util.major(browser.version), browser
                }, this.getCPU = function() {
                    var cpu = {
                        architecture: undefined
                    };
                    return mapper.rgx.call(cpu, ua, rgxmap.cpu), cpu
                }, this.getDevice = function() {
                    var device = {
                        vendor: undefined,
                        model: undefined,
                        type: undefined
                    };
                    return mapper.rgx.call(device, ua, rgxmap.device), device
                }, this.getEngine = function() {
                    var engine = {
                        name: undefined,
                        version: undefined
                    };
                    return mapper.rgx.call(engine, ua, rgxmap.engine), engine
                }, this.getOS = function() {
                    var os = {
                        name: undefined,
                        version: undefined
                    };
                    return mapper.rgx.call(os, ua, rgxmap.os), os
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return ua
                }, this.setUA = function(uastring) {
                    return ua = uastring, this
                }, this
            };
        UAParser.VERSION = "0.7.21", UAParser.BROWSER = {
            NAME: NAME,
            MAJOR: "major",
            VERSION: VERSION
        }, UAParser.CPU = {
            ARCHITECTURE: ARCHITECTURE
        }, UAParser.DEVICE = {
            MODEL: MODEL,
            VENDOR: VENDOR,
            TYPE: TYPE,
            CONSOLE: CONSOLE,
            MOBILE: MOBILE,
            SMARTTV: SMARTTV,
            TABLET: TABLET,
            WEARABLE: WEARABLE,
            EMBEDDED: "embedded"
        }, UAParser.ENGINE = {
            NAME: NAME,
            VERSION: VERSION
        }, UAParser.OS = {
            NAME: NAME,
            VERSION: VERSION
        }, typeof exports !== UNDEF_TYPE ? (typeof module !== UNDEF_TYPE && module.exports && (exports = module.exports = UAParser), exports.UAParser = UAParser) : "function" == typeof define && define.amd ? define(function() {
            return UAParser
        }) : window && (window.UAParser = UAParser);
        var $ = window && (window.jQuery || window.Zepto);
        if ($ && !$.ua) {
            var parser = new UAParser;
            $.ua = parser.getResult(), $.ua.get = function() {
                return parser.getUA()
            }, $.ua.set = function(uastring) {
                parser.setUA(uastring);
                var result = parser.getResult();
                for (var prop in result) $.ua[prop] = result[prop]
            }
        }
    }("object" == typeof window ? window : this), window.UserAgent = function() {
        return UAParser()
    }(),
    function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n || e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
        return s
    }({
        1: [function(_dereq_) {
            (function(global) {
                "use strict";
                if (_dereq_(188), _dereq_(189), global._babelPolyfill) throw new Error("only one instance of babel/polyfill is allowed");
                global._babelPolyfill = !0
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            188: 188,
            189: 189
        }],
        2: [function(_dereq_, module) {
            module.exports = function(it) {
                if ("function" != typeof it) throw TypeError(it + " is not a function!");
                return it
            }
        }, {}],
        3: [function(_dereq_, module) {
            var UNSCOPABLES = _dereq_(83)("unscopables"),
                ArrayProto = Array.prototype;
            ArrayProto[UNSCOPABLES] == undefined && _dereq_(31)(ArrayProto, UNSCOPABLES, {}), module.exports = function(key) {
                ArrayProto[UNSCOPABLES][key] = !0
            }
        }, {
            31: 31,
            83: 83
        }],
        4: [function(_dereq_, module) {
            var isObject = _dereq_(38);
            module.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + " is not an object!");
                return it
            }
        }, {
            38: 38
        }],
        5: [function(_dereq_, module) {
            "use strict";
            var toObject = _dereq_(80),
                toIndex = _dereq_(76),
                toLength = _dereq_(79);
            module.exports = [].copyWithin || function(target, start) {
                var O = toObject(this),
                    len = toLength(O.length),
                    to = toIndex(target, len),
                    from = toIndex(start, len),
                    $$ = arguments,
                    end = $$.length > 2 ? $$[2] : undefined,
                    count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
                    inc = 1;
                for (from < to && to < from + count && (inc = -1, from += count - 1, to += count - 1); count-- > 0;) from in O ? O[to] = O[from] : delete O[to], to += inc, from += inc;
                return O
            }
        }, {
            76: 76,
            79: 79,
            80: 80
        }],
        6: [function(_dereq_, module) {
            "use strict";
            var toObject = _dereq_(80),
                toIndex = _dereq_(76),
                toLength = _dereq_(79);
            module.exports = [].fill || function(value) {
                for (var O = toObject(this), length = toLength(O.length), $$ = arguments, $$len = $$.length, index = toIndex($$len > 1 ? $$[1] : undefined, length), end = $$len > 2 ? $$[2] : undefined, endPos = end === undefined ? length : toIndex(end, length); endPos > index;) O[index++] = value;
                return O
            }
        }, {
            76: 76,
            79: 79,
            80: 80
        }],
        7: [function(_dereq_, module) {
            var toIObject = _dereq_(78),
                toLength = _dereq_(79),
                toIndex = _dereq_(76);
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var value, O = toIObject($this),
                        length = toLength(O.length),
                        index = toIndex(fromIndex, length);
                    if (IS_INCLUDES && el != el) {
                        for (; length > index;)
                            if ((value = O[index++]) != value) return !0
                    } else
                        for (; length > index; index++)
                            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index;
                    return !IS_INCLUDES && -1
                }
            }
        }, {
            76: 76,
            78: 78,
            79: 79
        }],
        8: [function(_dereq_, module) {
            var ctx = _dereq_(17),
                IObject = _dereq_(34),
                toObject = _dereq_(80),
                toLength = _dereq_(79),
                asc = _dereq_(9);
            module.exports = function(TYPE) {
                var IS_MAP = 1 == TYPE,
                    IS_FILTER = 2 == TYPE,
                    IS_SOME = 3 == TYPE,
                    IS_EVERY = 4 == TYPE,
                    IS_FIND_INDEX = 6 == TYPE,
                    NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
                return function($this, callbackfn, that) {
                    for (var val, res, O = toObject($this), self = IObject(O), f = ctx(callbackfn, that, 3), length = toLength(self.length), index = 0, result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined; length > index; index++)
                        if ((NO_HOLES || index in self) && (val = self[index], res = f(val, index, O), TYPE))
                            if (IS_MAP) result[index] = res;
                            else if (res) switch (TYPE) {
                        case 3:
                            return !0;
                        case 5:
                            return val;
                        case 6:
                            return index;
                        case 2:
                            result.push(val)
                    } else if (IS_EVERY) return !1;
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result
                }
            }
        }, {
            17: 17,
            34: 34,
            79: 79,
            80: 80,
            9: 9
        }],
        9: [function(_dereq_, module) {
            var isObject = _dereq_(38),
                isArray = _dereq_(36),
                SPECIES = _dereq_(83)("species");
            module.exports = function(original, length) {
                var C;
                return isArray(original) && (C = original.constructor, "function" != typeof C || C !== Array && !isArray(C.prototype) || (C = undefined), isObject(C) && null === (C = C[SPECIES]) && (C = undefined)), new(C === undefined ? Array : C)(length)
            }
        }, {
            36: 36,
            38: 38,
            83: 83
        }],
        10: [function(_dereq_, module) {
            var cof = _dereq_(11),
                TAG = _dereq_(83)("toStringTag"),
                ARG = "Arguments" == cof(function() {
                    return arguments
                }());
            module.exports = function(it) {
                var O, T, B;
                return it === undefined ? "Undefined" : null === it ? "Null" : "string" == typeof(T = (O = Object(it))[TAG]) ? T : ARG ? cof(O) : "Object" == (B = cof(O)) && "function" == typeof O.callee ? "Arguments" : B
            }
        }, {
            11: 11,
            83: 83
        }],
        11: [function(_dereq_, module) {
            var toString = {}.toString;
            module.exports = function(it) {
                return toString.call(it).slice(8, -1)
            }
        }, {}],
        12: [function(_dereq_, module) {
            "use strict";
            var $ = _dereq_(46),
                hide = _dereq_(31),
                redefineAll = _dereq_(60),
                ctx = _dereq_(17),
                strictNew = _dereq_(69),
                defined = _dereq_(18),
                forOf = _dereq_(27),
                $iterDefine = _dereq_(42),
                step = _dereq_(44),
                ID = _dereq_(82)("id"),
                $has = _dereq_(30),
                isObject = _dereq_(38),
                setSpecies = _dereq_(65),
                DESCRIPTORS = _dereq_(19),
                isExtensible = Object.isExtensible || isObject,
                SIZE = DESCRIPTORS ? "_s" : "size",
                id = 0,
                fastKey = function(it, create) {
                    if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
                    if (!$has(it, ID)) {
                        if (!isExtensible(it)) return "F";
                        if (!create) return "E";
                        hide(it, ID, ++id)
                    }
                    return "O" + it[ID]
                },
                getEntry = function(that, key) {
                    var entry, index = fastKey(key);
                    if ("F" !== index) return that._i[index];
                    for (entry = that._f; entry; entry = entry.n)
                        if (entry.k == key) return entry
                };
            module.exports = {
                getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function(that, iterable) {
                        strictNew(that, C, NAME), that._i = $.create(null), that._f = undefined, that._l = undefined, that[SIZE] = 0, iterable != undefined && forOf(iterable, IS_MAP, that[ADDER], that)
                    });
                    return redefineAll(C.prototype, {
                        clear: function() {
                            for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) entry.r = !0, entry.p && (entry.p = entry.p.n = undefined), delete data[entry.i];
                            that._f = that._l = undefined, that[SIZE] = 0
                        },
                        "delete": function(key) {
                            var that = this,
                                entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n,
                                    prev = entry.p;
                                delete that._i[entry.i], entry.r = !0, prev && (prev.n = next), next && (next.p = prev), that._f == entry && (that._f = next), that._l == entry && (that._l = prev), that[SIZE]--
                            }
                            return !!entry
                        },
                        forEach: function(callbackfn) {
                            for (var entry, f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3); entry = entry ? entry.n : this._f;)
                                for (f(entry.v, entry.k, this); entry && entry.r;) entry = entry.p
                        },
                        has: function(key) {
                            return !!getEntry(this, key)
                        }
                    }), DESCRIPTORS && $.setDesc(C.prototype, "size", {
                        get: function() {
                            return defined(this[SIZE])
                        }
                    }), C
                },
                def: function(that, key, value) {
                    var prev, index, entry = getEntry(that, key);
                    return entry ? entry.v = value : (that._l = entry = {
                        i: index = fastKey(key, !0),
                        k: key,
                        v: value,
                        p: prev = that._l,
                        n: undefined,
                        r: !1
                    }, that._f || (that._f = entry), prev && (prev.n = entry), that[SIZE]++, "F" !== index && (that._i[index] = entry)), that
                },
                getEntry: getEntry,
                setStrong: function(C, NAME, IS_MAP) {
                    $iterDefine(C, NAME, function(iterated, kind) {
                        this._t = iterated, this._k = kind, this._l = undefined
                    }, function() {
                        for (var that = this, kind = that._k, entry = that._l; entry && entry.r;) entry = entry.p;
                        return that._t && (that._l = entry = entry ? entry.n : that._t._f) ? "keys" == kind ? step(0, entry.k) : "values" == kind ? step(0, entry.v) : step(0, [entry.k, entry.v]) : (that._t = undefined, step(1))
                    }, IS_MAP ? "entries" : "values", !IS_MAP, !0), setSpecies(NAME)
                }
            }
        }, {
            17: 17,
            18: 18,
            19: 19,
            27: 27,
            30: 30,
            31: 31,
            38: 38,
            42: 42,
            44: 44,
            46: 46,
            60: 60,
            65: 65,
            69: 69,
            82: 82
        }],
        13: [function(_dereq_, module) {
            var forOf = _dereq_(27),
                classof = _dereq_(10);
            module.exports = function(NAME) {
                return function() {
                    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                    var arr = [];
                    return forOf(this, !1, arr.push, arr), arr
                }
            }
        }, {
            10: 10,
            27: 27
        }],
        14: [function(_dereq_, module) {
            "use strict";
            var hide = _dereq_(31),
                redefineAll = _dereq_(60),
                anObject = _dereq_(4),
                isObject = _dereq_(38),
                strictNew = _dereq_(69),
                forOf = _dereq_(27),
                createArrayMethod = _dereq_(8),
                $has = _dereq_(30),
                WEAK = _dereq_(82)("weak"),
                isExtensible = Object.isExtensible || isObject,
                arrayFind = createArrayMethod(5),
                arrayFindIndex = createArrayMethod(6),
                id = 0,
                frozenStore = function(that) {
                    return that._l || (that._l = new FrozenStore)
                },
                FrozenStore = function() {
                    this.a = []
                },
                findFrozen = function(store, key) {
                    return arrayFind(store.a, function(it) {
                        return it[0] === key
                    })
                };
            FrozenStore.prototype = {
                get: function(key) {
                    var entry = findFrozen(this, key);
                    if (entry) return entry[1]
                },
                has: function(key) {
                    return !!findFrozen(this, key)
                },
                set: function(key, value) {
                    var entry = findFrozen(this, key);
                    entry ? entry[1] = value : this.a.push([key, value])
                },
                "delete": function(key) {
                    var index = arrayFindIndex(this.a, function(it) {
                        return it[0] === key
                    });
                    return ~index && this.a.splice(index, 1), !!~index
                }
            }, module.exports = {
                getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function(that, iterable) {
                        strictNew(that, C, NAME), that._i = id++, that._l = undefined, iterable != undefined && forOf(iterable, IS_MAP, that[ADDER], that)
                    });
                    return redefineAll(C.prototype, {
                        "delete": function(key) {
                            return !!isObject(key) && (isExtensible(key) ? $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i] : frozenStore(this)["delete"](key))
                        },
                        has: function(key) {
                            return !!isObject(key) && (isExtensible(key) ? $has(key, WEAK) && $has(key[WEAK], this._i) : frozenStore(this).has(key))
                        }
                    }), C
                },
                def: function(that, key, value) {
                    return isExtensible(anObject(key)) ? ($has(key, WEAK) || hide(key, WEAK, {}), key[WEAK][that._i] = value) : frozenStore(that).set(key, value), that
                },
                frozenStore: frozenStore,
                WEAK: WEAK
            }
        }, {
            27: 27,
            30: 30,
            31: 31,
            38: 38,
            4: 4,
            60: 60,
            69: 69,
            8: 8,
            82: 82
        }],
        15: [function(_dereq_, module) {
            "use strict";
            var global = _dereq_(29),
                $export = _dereq_(22),
                redefine = _dereq_(61),
                redefineAll = _dereq_(60),
                forOf = _dereq_(27),
                strictNew = _dereq_(69),
                isObject = _dereq_(38),
                fails = _dereq_(24),
                $iterDetect = _dereq_(43),
                setToStringTag = _dereq_(66);
            module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
                var Base = global[NAME],
                    C = Base,
                    ADDER = IS_MAP ? "set" : "add",
                    proto = C && C.prototype,
                    O = {},
                    fixMethod = function(KEY) {
                        var fn = proto[KEY];
                        redefine(proto, KEY, "delete" == KEY ? function(a) {
                            return !(IS_WEAK && !isObject(a)) && fn.call(this, 0 === a ? 0 : a)
                        } : "has" == KEY ? function(a) {
                            return !(IS_WEAK && !isObject(a)) && fn.call(this, 0 === a ? 0 : a)
                        } : "get" == KEY ? function(a) {
                            return IS_WEAK && !isObject(a) ? undefined : fn.call(this, 0 === a ? 0 : a)
                        } : "add" == KEY ? function(a) {
                            return fn.call(this, 0 === a ? 0 : a), this
                        } : function(a, b) {
                            return fn.call(this, 0 === a ? 0 : a, b), this
                        })
                    };
                if ("function" == typeof C && (IS_WEAK || proto.forEach && !fails(function() {
                        (new C).entries().next()
                    }))) {
                    var BUGGY_ZERO, instance = new C,
                        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance,
                        THROWS_ON_PRIMITIVES = fails(function() {
                            instance.has(1)
                        }),
                        ACCEPT_ITERABLES = $iterDetect(function(iter) {
                            new C(iter)
                        });
                    ACCEPT_ITERABLES || (C = wrapper(function(target, iterable) {
                        strictNew(target, C, NAME);
                        var that = new Base;
                        return iterable != undefined && forOf(iterable, IS_MAP, that[ADDER], that), that
                    }), C.prototype = proto, proto.constructor = C), IS_WEAK || instance.forEach(function(val, key) {
                        BUGGY_ZERO = 1 / key == -Infinity
                    }), (THROWS_ON_PRIMITIVES || BUGGY_ZERO) && (fixMethod("delete"), fixMethod("has"), IS_MAP && fixMethod("get")), (BUGGY_ZERO || HASNT_CHAINING) && fixMethod(ADDER), IS_WEAK && proto.clear && delete proto.clear
                } else C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER), redefineAll(C.prototype, methods);
                return setToStringTag(C, NAME), O[NAME] = C, $export($export.G + $export.W + $export.F * (C != Base), O), IS_WEAK || common.setStrong(C, NAME, IS_MAP), C
            }
        }, {
            22: 22,
            24: 24,
            27: 27,
            29: 29,
            38: 38,
            43: 43,
            60: 60,
            61: 61,
            66: 66,
            69: 69
        }],
        16: [function(_dereq_, module) {
            var core = module.exports = {
                version: "1.2.6"
            };
            "number" == typeof __e && (__e = core)
        }, {}],
        17: [function(_dereq_, module) {
            var aFunction = _dereq_(2);
            module.exports = function(fn, that, length) {
                if (aFunction(fn), that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function(a) {
                            return fn.call(that, a)
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b)
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c)
                        }
                }
                return function() {
                    return fn.apply(that, arguments)
                }
            }
        }, {
            2: 2
        }],
        18: [function(_dereq_, module) {
            module.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it
            }
        }, {}],
        19: [function(_dereq_, module) {
            module.exports = !_dereq_(24)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, {
            24: 24
        }],
        20: [function(_dereq_, module) {
            var isObject = _dereq_(38),
                document = _dereq_(29).document,
                is = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return is ? document.createElement(it) : {}
            }
        }, {
            29: 29,
            38: 38
        }],
        21: [function(_dereq_, module) {
            var $ = _dereq_(46);
            module.exports = function(it) {
                var keys = $.getKeys(it),
                    getSymbols = $.getSymbols;
                if (getSymbols)
                    for (var key, symbols = getSymbols(it), isEnum = $.isEnum, i = 0; symbols.length > i;) isEnum.call(it, key = symbols[i++]) && keys.push(key);
                return keys
            }
        }, {
            46: 46
        }],
        22: [function(_dereq_, module) {
            var global = _dereq_(29),
                core = _dereq_(16),
                hide = _dereq_(31),
                redefine = _dereq_(61),
                ctx = _dereq_(17),
                PROTOTYPE = "prototype",
                $export = function(type, name, source) {
                    var key, own, out, exp, IS_FORCED = type & $export.F,
                        IS_GLOBAL = type & $export.G,
                        IS_STATIC = type & $export.S,
                        IS_PROTO = type & $export.P,
                        IS_BIND = type & $export.B,
                        target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
                        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
                        expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                    IS_GLOBAL && (source = name);
                    for (key in source) own = !IS_FORCED && target && key in target, out = (own ? target : source)[key], exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, target && !own && redefine(target, key, out), exports[key] != out && hide(exports, key, exp), IS_PROTO && expProto[key] != out && (expProto[key] = out)
                };
            global.core = core, $export.F = 1, $export.G = 2, $export.S = 4, $export.P = 8, $export.B = 16, $export.W = 32, module.exports = $export
        }, {
            16: 16,
            17: 17,
            29: 29,
            31: 31,
            61: 61
        }],
        23: [function(_dereq_, module) {
            var MATCH = _dereq_(83)("match");
            module.exports = function(KEY) {
                var re = /./;
                try {
                    "/./" [KEY](re)
                } catch (e) {
                    try {
                        return re[MATCH] = !1, !"/./" [KEY](re)
                    } catch (f) {}
                }
                return !0
            }
        }, {
            83: 83
        }],
        24: [function(_dereq_, module) {
            module.exports = function(exec) {
                try {
                    return !!exec()
                } catch (e) {
                    return !0
                }
            }
        }, {}],
        25: [function(_dereq_, module) {
            "use strict";
            var hide = _dereq_(31),
                redefine = _dereq_(61),
                fails = _dereq_(24),
                defined = _dereq_(18),
                wks = _dereq_(83);
            module.exports = function(KEY, length, exec) {
                var SYMBOL = wks(KEY),
                    original = "" [KEY];
                fails(function() {
                    var O = {};
                    return O[SYMBOL] = function() {
                        return 7
                    }, 7 != "" [KEY](O)
                }) && (redefine(String.prototype, KEY, exec(defined, SYMBOL, original)), hide(RegExp.prototype, SYMBOL, 2 == length ? function(string, arg) {
                    return original.call(string, this, arg)
                } : function(string) {
                    return original.call(string, this)
                }))
            }
        }, {
            18: 18,
            24: 24,
            31: 31,
            61: 61,
            83: 83
        }],
        26: [function(_dereq_, module) {
            "use strict";
            var anObject = _dereq_(4);
            module.exports = function() {
                var that = anObject(this),
                    result = "";
                return that.global && (result += "g"), that.ignoreCase && (result += "i"), that.multiline && (result += "m"), that.unicode && (result += "u"), that.sticky && (result += "y"), result
            }
        }, {
            4: 4
        }],
        27: [function(_dereq_, module) {
            var ctx = _dereq_(17),
                call = _dereq_(40),
                isArrayIter = _dereq_(35),
                anObject = _dereq_(4),
                toLength = _dereq_(79),
                getIterFn = _dereq_(84);
            module.exports = function(iterable, entries, fn, that) {
                var length, step, iterator, iterFn = getIterFn(iterable),
                    f = ctx(fn, that, entries ? 2 : 1),
                    index = 0;
                if ("function" != typeof iterFn) throw TypeError(iterable + " is not iterable!");
                if (isArrayIter(iterFn))
                    for (length = toLength(iterable.length); length > index; index++) entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                else
                    for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) call(iterator, f, step.value, entries)
            }
        }, {
            17: 17,
            35: 35,
            4: 4,
            40: 40,
            79: 79,
            84: 84
        }],
        28: [function(_dereq_, module) {
            var toIObject = _dereq_(78),
                getNames = _dereq_(46).getNames,
                toString = {}.toString,
                windowNames = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                getWindowNames = function(it) {
                    try {
                        return getNames(it)
                    } catch (e) {
                        return windowNames.slice()
                    }
                };
            module.exports.get = function(it) {
                return windowNames && "[object Window]" == toString.call(it) ? getWindowNames(it) : getNames(toIObject(it))
            }
        }, {
            46: 46,
            78: 78
        }],
        29: [function(_dereq_, module) {
            var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = global)
        }, {}],
        30: [function(_dereq_, module) {
            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function(it, key) {
                return hasOwnProperty.call(it, key)
            }
        }, {}],
        31: [function(_dereq_, module) {
            var $ = _dereq_(46),
                createDesc = _dereq_(59);
            module.exports = _dereq_(19) ? function(object, key, value) {
                return $.setDesc(object, key, createDesc(1, value))
            } : function(object, key, value) {
                return object[key] = value, object
            }
        }, {
            19: 19,
            46: 46,
            59: 59
        }],
        32: [function(_dereq_, module) {
            module.exports = _dereq_(29).document && document.documentElement
        }, {
            29: 29
        }],
        33: [function(_dereq_, module) {
            module.exports = function(fn, args, that) {
                var un = that === undefined;
                switch (args.length) {
                    case 0:
                        return un ? fn() : fn.call(that);
                    case 1:
                        return un ? fn(args[0]) : fn.call(that, args[0]);
                    case 2:
                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                    case 3:
                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                    case 4:
                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3])
                }
                return fn.apply(that, args)
            }
        }, {}],
        34: [function(_dereq_, module) {
            var cof = _dereq_(11);
            module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
                return "String" == cof(it) ? it.split("") : Object(it)
            }
        }, {
            11: 11
        }],
        35: [function(_dereq_, module) {
            var Iterators = _dereq_(45),
                ITERATOR = _dereq_(83)("iterator"),
                ArrayProto = Array.prototype;
            module.exports = function(it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it)
            }
        }, {
            45: 45,
            83: 83
        }],
        36: [function(_dereq_, module) {
            var cof = _dereq_(11);
            module.exports = Array.isArray || function(arg) {
                return "Array" == cof(arg)
            }
        }, {
            11: 11
        }],
        37: [function(_dereq_, module) {
            var isObject = _dereq_(38),
                floor = Math.floor;
            module.exports = function(it) {
                return !isObject(it) && isFinite(it) && floor(it) === it
            }
        }, {
            38: 38
        }],
        38: [function(_dereq_, module) {
            module.exports = function(it) {
                return "object" == typeof it ? null !== it : "function" == typeof it
            }
        }, {}],
        39: [function(_dereq_, module) {
            var isObject = _dereq_(38),
                cof = _dereq_(11),
                MATCH = _dereq_(83)("match");
            module.exports = function(it) {
                var isRegExp;
                return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : "RegExp" == cof(it))
            }
        }, {
            11: 11,
            38: 38,
            83: 83
        }],
        40: [function(_dereq_, module) {
            var anObject = _dereq_(4);
            module.exports = function(iterator, fn, value, entries) {
                try {
                    return entries ? fn(anObject(value)[0], value[1]) : fn(value)
                } catch (e) {
                    var ret = iterator["return"];
                    throw ret !== undefined && anObject(ret.call(iterator)), e
                }
            }
        }, {
            4: 4
        }],
        41: [function(_dereq_, module) {
            "use strict";
            var $ = _dereq_(46),
                descriptor = _dereq_(59),
                setToStringTag = _dereq_(66),
                IteratorPrototype = {};
            _dereq_(31)(IteratorPrototype, _dereq_(83)("iterator"), function() {
                return this
            }), module.exports = function(Constructor, NAME, next) {
                Constructor.prototype = $.create(IteratorPrototype, {
                    next: descriptor(1, next)
                }), setToStringTag(Constructor, NAME + " Iterator")
            }
        }, {
            31: 31,
            46: 46,
            59: 59,
            66: 66,
            83: 83
        }],
        42: [function(_dereq_, module) {
            "use strict";
            var LIBRARY = _dereq_(48),
                $export = _dereq_(22),
                redefine = _dereq_(61),
                hide = _dereq_(31),
                has = _dereq_(30),
                Iterators = _dereq_(45),
                $iterCreate = _dereq_(41),
                setToStringTag = _dereq_(66),
                getProto = _dereq_(46).getProto,
                ITERATOR = _dereq_(83)("iterator"),
                BUGGY = !([].keys && "next" in [].keys()),
                FF_ITERATOR = "@@iterator",
                KEYS = "keys",
                VALUES = "values",
                returnThis = function() {
                    return this
                };
            module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var methods, key, getMethod = function(kind) {
                        if (!BUGGY && kind in proto) return proto[kind];
                        switch (kind) {
                            case KEYS:
                            case VALUES:
                                return function() {
                                    return new Constructor(this, kind)
                                }
                        }
                        return function() {
                            return new Constructor(this, kind)
                        }
                    },
                    TAG = NAME + " Iterator",
                    DEF_VALUES = DEFAULT == VALUES,
                    VALUES_BUG = !1,
                    proto = Base.prototype,
                    $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
                    $default = $native || getMethod(DEFAULT);
                if ($native) {
                    var IteratorPrototype = getProto($default.call(new Base));
                    setToStringTag(IteratorPrototype, TAG, !0), !LIBRARY && has(proto, FF_ITERATOR) && hide(IteratorPrototype, ITERATOR, returnThis), DEF_VALUES && $native.name !== VALUES && (VALUES_BUG = !0, $default = function() {
                        return $native.call(this)
                    })
                }
                if (LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), Iterators[NAME] = $default, Iterators[TAG] = returnThis, DEFAULT)
                    if (methods = {
                            values: DEF_VALUES ? $default : getMethod(VALUES),
                            keys: IS_SET ? $default : getMethod(KEYS),
                            entries: DEF_VALUES ? getMethod("entries") : $default
                        }, FORCED)
                        for (key in methods) key in proto || redefine(proto, key, methods[key]);
                    else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                return methods
            }
        }, {
            22: 22,
            30: 30,
            31: 31,
            41: 41,
            45: 45,
            46: 46,
            48: 48,
            61: 61,
            66: 66,
            83: 83
        }],
        43: [function(_dereq_, module) {
            var ITERATOR = _dereq_(83)("iterator"),
                SAFE_CLOSING = !1;
            try {
                var riter = [7][ITERATOR]();
                riter["return"] = function() {
                    SAFE_CLOSING = !0
                }, Array.from(riter, function() {
                    throw 2
                })
            } catch (e) {}
            module.exports = function(exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return !1;
                var safe = !1;
                try {
                    var arr = [7],
                        iter = arr[ITERATOR]();
                    iter.next = function() {
                        safe = !0
                    }, arr[ITERATOR] = function() {
                        return iter
                    }, exec(arr)
                } catch (e) {}
                return safe
            }
        }, {
            83: 83
        }],
        44: [function(_dereq_, module) {
            module.exports = function(done, value) {
                return {
                    value: value,
                    done: !!done
                }
            }
        }, {}],
        45: [function(_dereq_, module) {
            module.exports = {}
        }, {}],
        46: [function(_dereq_, module) {
            var $Object = Object;
            module.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: {}.propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
            }
        }, {}],
        47: [function(_dereq_, module) {
            var $ = _dereq_(46),
                toIObject = _dereq_(78);
            module.exports = function(object, el) {
                for (var key, O = toIObject(object), keys = $.getKeys(O), length = keys.length, index = 0; length > index;)
                    if (O[key = keys[index++]] === el) return key
            }
        }, {
            46: 46,
            78: 78
        }],
        48: [function(_dereq_, module) {
            module.exports = !1
        }, {}],
        49: [function(_dereq_, module) {
            module.exports = Math.expm1 || function(x) {
                return 0 == (x = +x) ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1
            }
        }, {}],
        50: [function(_dereq_, module) {
            module.exports = Math.log1p || function(x) {
                return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x)
            }
        }, {}],
        51: [function(_dereq_, module) {
            module.exports = Math.sign || function(x) {
                return 0 == (x = +x) || x != x ? x : x < 0 ? -1 : 1
            }
        }, {}],
        52: [function(_dereq_, module) {
            var head, last, notify, global = _dereq_(29),
                macrotask = _dereq_(75).set,
                Observer = global.MutationObserver || global.WebKitMutationObserver,
                process = global.process,
                Promise = global.Promise,
                isNode = "process" == _dereq_(11)(process),
                flush = function() {
                    var parent, domain, fn;
                    for (isNode && (parent = process.domain) && (process.domain = null, parent.exit()); head;) domain = head.domain, fn = head.fn, domain && domain.enter(), fn(), domain && domain.exit(), head = head.next;
                    last = undefined, parent && parent.enter()
                };
            if (isNode) notify = function() {
                process.nextTick(flush)
            };
            else if (Observer) {
                var toggle = 1,
                    node = document.createTextNode("");
                new Observer(flush).observe(node, {
                    characterData: !0
                }), notify = function() {
                    node.data = toggle = -toggle
                }
            } else notify = Promise && Promise.resolve ? function() {
                Promise.resolve().then(flush)
            } : function() {
                macrotask.call(global, flush)
            };
            module.exports = function(fn) {
                var task = {
                    fn: fn,
                    next: undefined,
                    domain: isNode && process.domain
                };
                last && (last.next = task), head || (head = task, notify()), last = task
            }
        }, {
            11: 11,
            29: 29,
            75: 75
        }],
        53: [function(_dereq_, module) {
            var $ = _dereq_(46),
                toObject = _dereq_(80),
                IObject = _dereq_(34);
            module.exports = _dereq_(24)(function() {
                var a = Object.assign,
                    A = {},
                    B = {},
                    S = Symbol(),
                    K = "abcdefghijklmnopqrst";
                return A[S] = 7, K.split("").forEach(function(k) {
                    B[k] = k
                }), 7 != a({}, A)[S] || Object.keys(a({}, B)).join("") != K
            }) ? function(target) {
                for (var T = toObject(target), $$ = arguments, $$len = $$.length, index = 1, getKeys = $.getKeys, getSymbols = $.getSymbols, isEnum = $.isEnum; $$len > index;)
                    for (var key, S = IObject($$[index++]), keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S), length = keys.length, j = 0; length > j;) isEnum.call(S, key = keys[j++]) && (T[key] = S[key]);
                return T
            } : Object.assign
        }, {
            24: 24,
            34: 34,
            46: 46,
            80: 80
        }],
        54: [function(_dereq_, module) {
            var $export = _dereq_(22),
                core = _dereq_(16),
                fails = _dereq_(24);
            module.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY],
                    exp = {};
                exp[KEY] = exec(fn), $export($export.S + $export.F * fails(function() {
                    fn(1)
                }), "Object", exp)
            }
        }, {
            16: 16,
            22: 22,
            24: 24
        }],
        55: [function(_dereq_, module) {
            var $ = _dereq_(46),
                toIObject = _dereq_(78),
                isEnum = $.isEnum;
            module.exports = function(isEntries) {
                return function(it) {
                    for (var key, O = toIObject(it), keys = $.getKeys(O), length = keys.length, i = 0, result = []; length > i;) isEnum.call(O, key = keys[i++]) && result.push(isEntries ? [key, O[key]] : O[key]);
                    return result
                }
            }
        }, {
            46: 46,
            78: 78
        }],
        56: [function(_dereq_, module) {
            var $ = _dereq_(46),
                anObject = _dereq_(4),
                Reflect = _dereq_(29).Reflect;
            module.exports = Reflect && Reflect.ownKeys || function(it) {
                var keys = $.getNames(anObject(it)),
                    getSymbols = $.getSymbols;
                return getSymbols ? keys.concat(getSymbols(it)) : keys
            }
        }, {
            29: 29,
            4: 4,
            46: 46
        }],
        57: [function(_dereq_, module) {
            "use strict";
            var path = _dereq_(58),
                invoke = _dereq_(33),
                aFunction = _dereq_(2);
            module.exports = function() {
                for (var fn = aFunction(this), length = arguments.length, pargs = Array(length), i = 0, _ = path._, holder = !1; length > i;)(pargs[i] = arguments[i++]) === _ && (holder = !0);
                return function() {
                    var args, that = this,
                        $$ = arguments,
                        $$len = $$.length,
                        j = 0,
                        k = 0;
                    if (!holder && !$$len) return invoke(fn, pargs, that);
                    if (args = pargs.slice(), holder)
                        for (; length > j; j++) args[j] === _ && (args[j] = $$[k++]);
                    for (; $$len > k;) args.push($$[k++]);
                    return invoke(fn, args, that)
                }
            }
        }, {
            2: 2,
            33: 33,
            58: 58
        }],
        58: [function(_dereq_, module) {
            module.exports = _dereq_(29)
        }, {
            29: 29
        }],
        59: [function(_dereq_, module) {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(1 & bitmap),
                    configurable: !(2 & bitmap),
                    writable: !(4 & bitmap),
                    value: value
                }
            }
        }, {}],
        60: [function(_dereq_, module) {
            var redefine = _dereq_(61);
            module.exports = function(target, src) {
                for (var key in src) redefine(target, key, src[key]);
                return target
            }
        }, {
            61: 61
        }],
        61: [function(_dereq_, module) {
            var global = _dereq_(29),
                hide = _dereq_(31),
                SRC = _dereq_(82)("src"),
                TO_STRING = "toString",
                $toString = Function[TO_STRING],
                TPL = ("" + $toString).split(TO_STRING);
            _dereq_(16).inspectSource = function(it) {
                return $toString.call(it)
            }, (module.exports = function(O, key, val, safe) {
                "function" == typeof val && (val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key))), val.hasOwnProperty("name") || hide(val, "name", key)), O === global ? O[key] = val : (safe || delete O[key], hide(O, key, val))
            })(Function.prototype, TO_STRING, function() {
                return "function" == typeof this && this[SRC] || $toString.call(this)
            })
        }, {
            16: 16,
            29: 29,
            31: 31,
            82: 82
        }],
        62: [function(_dereq_, module) {
            module.exports = function(regExp, replace) {
                var replacer = replace === Object(replace) ? function(part) {
                    return replace[part]
                } : replace;
                return function(it) {
                    return String(it).replace(regExp, replacer)
                }
            }
        }, {}],
        63: [function(_dereq_, module) {
            module.exports = Object.is || function(x, y) {
                return x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y
            }
        }, {}],
        64: [function(_dereq_, module) {
            var getDesc = _dereq_(46).getDesc,
                isObject = _dereq_(38),
                anObject = _dereq_(4),
                check = function(O, proto) {
                    if (anObject(O), !isObject(proto) && null !== proto) throw TypeError(proto + ": can't set as prototype!")
                };
            module.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
                    try {
                        set = _dereq_(17)(Function.call, getDesc(Object.prototype, "__proto__").set, 2), set(test, []), buggy = !(test instanceof Array)
                    } catch (e) {
                        buggy = !0
                    }
                    return function(O, proto) {
                        return check(O, proto), buggy ? O.__proto__ = proto : set(O, proto), O
                    }
                }({}, !1) : undefined),
                check: check
            }
        }, {
            17: 17,
            38: 38,
            4: 4,
            46: 46
        }],
        65: [function(_dereq_, module) {
            "use strict";
            var global = _dereq_(29),
                $ = _dereq_(46),
                DESCRIPTORS = _dereq_(19),
                SPECIES = _dereq_(83)("species");
            module.exports = function(KEY) {
                var C = global[KEY];
                DESCRIPTORS && C && !C[SPECIES] && $.setDesc(C, SPECIES, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }, {
            19: 19,
            29: 29,
            46: 46,
            83: 83
        }],
        66: [function(_dereq_, module) {
            var def = _dereq_(46).setDesc,
                has = _dereq_(30),
                TAG = _dereq_(83)("toStringTag");
            module.exports = function(it, tag, stat) {
                it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {
                    configurable: !0,
                    value: tag
                })
            }
        }, {
            30: 30,
            46: 46,
            83: 83
        }],
        67: [function(_dereq_, module) {
            var global = _dereq_(29),
                SHARED = "__core-js_shared__",
                store = global[SHARED] || (global[SHARED] = {});
            module.exports = function(key) {
                return store[key] || (store[key] = {})
            }
        }, {
            29: 29
        }],
        68: [function(_dereq_, module) {
            var anObject = _dereq_(4),
                aFunction = _dereq_(2),
                SPECIES = _dereq_(83)("species");
            module.exports = function(O, D) {
                var S, C = anObject(O).constructor;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S)
            }
        }, {
            2: 2,
            4: 4,
            83: 83
        }],
        69: [function(_dereq_, module) {
            module.exports = function(it, Constructor, name) {
                if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
                return it
            }
        }, {}],
        70: [function(_dereq_, module) {
            var toInteger = _dereq_(77),
                defined = _dereq_(18);
            module.exports = function(TO_STRING) {
                return function(that, pos) {
                    var a, b, s = String(defined(that)),
                        i = toInteger(pos),
                        l = s.length;
                    return i < 0 || i >= l ? TO_STRING ? "" : undefined : (a = s.charCodeAt(i), a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536)
                }
            }
        }, {
            18: 18,
            77: 77
        }],
        71: [function(_dereq_, module) {
            var isRegExp = _dereq_(39),
                defined = _dereq_(18);
            module.exports = function(that, searchString, NAME) {
                if (isRegExp(searchString)) throw TypeError("String#" + NAME + " doesn't accept regex!");
                return String(defined(that))
            }
        }, {
            18: 18,
            39: 39
        }],
        72: [function(_dereq_, module) {
            var toLength = _dereq_(79),
                repeat = _dereq_(73),
                defined = _dereq_(18);
            module.exports = function(that, maxLength, fillString, left) {
                var S = String(defined(that)),
                    stringLength = S.length,
                    fillStr = fillString === undefined ? " " : String(fillString),
                    intMaxLength = toLength(maxLength);
                if (intMaxLength <= stringLength) return S;
                "" == fillStr && (fillStr = " ");
                var fillLen = intMaxLength - stringLength,
                    stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
                return stringFiller.length > fillLen && (stringFiller = stringFiller.slice(0, fillLen)), left ? stringFiller + S : S + stringFiller
            }
        }, {
            18: 18,
            73: 73,
            79: 79
        }],
        73: [function(_dereq_, module) {
            "use strict";
            var toInteger = _dereq_(77),
                defined = _dereq_(18);
            module.exports = function(count) {
                var str = String(defined(this)),
                    res = "",
                    n = toInteger(count);
                if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
                for (; n > 0;
                    (n >>>= 1) && (str += str)) 1 & n && (res += str);
                return res
            }
        }, {
            18: 18,
            77: 77
        }],
        74: [function(_dereq_, module) {
            var $export = _dereq_(22),
                defined = _dereq_(18),
                fails = _dereq_(24),
                spaces = "\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
                space = "[" + spaces + "]",
                non = "\u200b\x85",
                ltrim = RegExp("^" + space + space + "*"),
                rtrim = RegExp(space + space + "*$"),
                exporter = function(KEY, exec) {
                    var exp = {};
                    exp[KEY] = exec(trim), $export($export.P + $export.F * fails(function() {
                        return !!spaces[KEY]() || non[KEY]() != non
                    }), "String", exp)
                },
                trim = exporter.trim = function(string, TYPE) {
                    return string = String(defined(string)), 1 & TYPE && (string = string.replace(ltrim, "")), 2 & TYPE && (string = string.replace(rtrim, "")), string
                };
            module.exports = exporter
        }, {
            18: 18,
            22: 22,
            24: 24
        }],
        75: [function(_dereq_, module) {
            var defer, channel, port, ctx = _dereq_(17),
                invoke = _dereq_(33),
                html = _dereq_(32),
                cel = _dereq_(20),
                global = _dereq_(29),
                process = global.process,
                setTask = global.setImmediate,
                clearTask = global.clearImmediate,
                MessageChannel = global.MessageChannel,
                counter = 0,
                queue = {},
                ONREADYSTATECHANGE = "onreadystatechange",
                run = function() {
                    var id = +this;
                    if (queue.hasOwnProperty(id)) {
                        var fn = queue[id];
                        delete queue[id], fn()
                    }
                },
                listner = function(event) {
                    run.call(event.data)
                };
            setTask && clearTask || (setTask = function(fn) {
                for (var args = [], i = 1; arguments.length > i;) args.push(arguments[i++]);
                return queue[++counter] = function() {
                    invoke("function" == typeof fn ? fn : Function(fn), args)
                }, defer(counter), counter
            }, clearTask = function(id) {
                delete queue[id]
            }, "process" == _dereq_(11)(process) ? defer = function(id) {
                process.nextTick(ctx(run, id, 1))
            } : MessageChannel ? (channel = new MessageChannel, port = channel.port2, channel.port1.onmessage = listner, defer = ctx(port.postMessage, port, 1)) : global.addEventListener && "function" == typeof postMessage && !global.importScripts ? (defer = function(id) {
                global.postMessage(id + "", "*")
            }, global.addEventListener("message", listner, !1)) : defer = ONREADYSTATECHANGE in cel("script") ? function(id) {
                html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
                    html.removeChild(this), run.call(id)
                }
            } : function(id) {
                setTimeout(ctx(run, id, 1), 0)
            }), module.exports = {
                set: setTask,
                clear: clearTask
            }
        }, {
            11: 11,
            17: 17,
            20: 20,
            29: 29,
            32: 32,
            33: 33
        }],
        76: [function(_dereq_, module) {
            var toInteger = _dereq_(77),
                max = Math.max,
                min = Math.min;
            module.exports = function(index, length) {
                return index = toInteger(index), index < 0 ? max(index + length, 0) : min(index, length)
            }
        }, {
            77: 77
        }],
        77: [function(_dereq_, module) {
            var ceil = Math.ceil,
                floor = Math.floor;
            module.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
            }
        }, {}],
        78: [function(_dereq_, module) {
            var IObject = _dereq_(34),
                defined = _dereq_(18);
            module.exports = function(it) {
                return IObject(defined(it))
            }
        }, {
            18: 18,
            34: 34
        }],
        79: [function(_dereq_, module) {
            var toInteger = _dereq_(77),
                min = Math.min;
            module.exports = function(it) {
                return it > 0 ? min(toInteger(it), 9007199254740991) : 0
            }
        }, {
            77: 77
        }],
        80: [function(_dereq_, module) {
            var defined = _dereq_(18);
            module.exports = function(it) {
                return Object(defined(it))
            }
        }, {
            18: 18
        }],
        81: [function(_dereq_, module) {
            var isObject = _dereq_(38);
            module.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && "function" == typeof(fn = it.toString) && !isObject(val = fn.call(it))) return val;
                if ("function" == typeof(fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
                if (!S && "function" == typeof(fn = it.toString) && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value")
            }
        }, {
            38: 38
        }],
        82: [function(_dereq_, module) {
            var id = 0,
                px = Math.random();
            module.exports = function(key) {
                return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36))
            }
        }, {}],
        83: [function(_dereq_, module) {
            var store = _dereq_(67)("wks"),
                uid = _dereq_(82),
                Symbol = _dereq_(29).Symbol;
            module.exports = function(name) {
                return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)("Symbol." + name))
            }
        }, {
            29: 29,
            67: 67,
            82: 82
        }],
        84: [function(_dereq_, module) {
            var classof = _dereq_(10),
                ITERATOR = _dereq_(83)("iterator"),
                Iterators = _dereq_(45);
            module.exports = _dereq_(16).getIteratorMethod = function(it) {
                if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)]
            }
        }, {
            10: 10,
            16: 16,
            45: 45,
            83: 83
        }],
        85: [function(_dereq_) {
            "use strict";
            var IE8_DOM_DEFINE, $ = _dereq_(46),
                $export = _dereq_(22),
                DESCRIPTORS = _dereq_(19),
                createDesc = _dereq_(59),
                html = _dereq_(32),
                cel = _dereq_(20),
                has = _dereq_(30),
                cof = _dereq_(11),
                invoke = _dereq_(33),
                fails = _dereq_(24),
                anObject = _dereq_(4),
                aFunction = _dereq_(2),
                isObject = _dereq_(38),
                toObject = _dereq_(80),
                toIObject = _dereq_(78),
                toInteger = _dereq_(77),
                toIndex = _dereq_(76),
                toLength = _dereq_(79),
                IObject = _dereq_(34),
                IE_PROTO = _dereq_(82)("__proto__"),
                createArrayMethod = _dereq_(8),
                arrayIndexOf = _dereq_(7)(!1),
                ObjectProto = Object.prototype,
                ArrayProto = Array.prototype,
                arraySlice = ArrayProto.slice,
                arrayJoin = ArrayProto.join,
                defineProperty = $.setDesc,
                getOwnDescriptor = $.getDesc,
                defineProperties = $.setDescs,
                factories = {};
            DESCRIPTORS || (IE8_DOM_DEFINE = !fails(function() {
                return 7 != defineProperty(cel("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }), $.setDesc = function(O, P, Attributes) {
                if (IE8_DOM_DEFINE) try {
                    return defineProperty(O, P, Attributes)
                } catch (e) {}
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
                return "value" in Attributes && (anObject(O)[P] = Attributes.value), O
            }, $.getDesc = function(O, P) {
                if (IE8_DOM_DEFINE) try {
                    return getOwnDescriptor(O, P)
                } catch (e) {}
                if (has(O, P)) return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P])
            }, $.setDescs = defineProperties = function(O, Properties) {
                anObject(O);
                for (var P, keys = $.getKeys(Properties), length = keys.length, i = 0; length > i;) $.setDesc(O, P = keys[i++], Properties[P]);
                return O
            }), $export($export.S + $export.F * !DESCRIPTORS, "Object", {
                getOwnPropertyDescriptor: $.getDesc,
                defineProperty: $.setDesc,
                defineProperties: defineProperties
            });
            var keys1 = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
                keys2 = keys1.concat("length", "prototype"),
                keysLen1 = keys1.length,
                createDict = function() {
                    var iframeDocument, iframe = cel("iframe"),
                        i = keysLen1,
                        gt = ">";
                    for (iframe.style.display = "none", html.appendChild(iframe), iframe.src = "javascript:", iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write("<script>document.F=Object</script" + gt), iframeDocument.close(), createDict = iframeDocument.F; i--;) delete createDict.prototype[keys1[i]];
                    return createDict()
                },
                createGetKeys = function(names, length) {
                    return function(object) {
                        var key, O = toIObject(object),
                            i = 0,
                            result = [];
                        for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
                        for (; length > i;) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
                        return result
                    }
                },
                Empty = function() {};
            $export($export.S, "Object", {
                getPrototypeOf: $.getProto = $.getProto || function(O) {
                    return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectProto : null
                },
                getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, !0),
                create: $.create = $.create || function(O, Properties) {
                    var result;
                    return null !== O ? (Empty.prototype = anObject(O), result = new Empty, Empty.prototype = null, result[IE_PROTO] = O) : result = createDict(), Properties === undefined ? result : defineProperties(result, Properties)
                },
                keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, !1)
            });
            var construct = function(F, len, args) {
                if (!(len in factories)) {
                    for (var n = [], i = 0; i < len; i++) n[i] = "a[" + i + "]";
                    factories[len] = Function("F,a", "return new F(" + n.join(",") + ")")
                }
                return factories[len](F, args)
            };
            $export($export.P, "Function", {
                bind: function(that) {
                    var fn = aFunction(this),
                        partArgs = arraySlice.call(arguments, 1),
                        bound = function() {
                            var args = partArgs.concat(arraySlice.call(arguments));
                            return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that)
                        };
                    return isObject(fn.prototype) && (bound.prototype = fn.prototype), bound
                }
            }), $export($export.P + $export.F * fails(function() {
                html && arraySlice.call(html)
            }), "Array", {
                slice: function(begin, end) {
                    var len = toLength(this.length),
                        klass = cof(this);
                    if (end = end === undefined ? len : end, "Array" == klass) return arraySlice.call(this, begin, end);
                    for (var start = toIndex(begin, len), upTo = toIndex(end, len), size = toLength(upTo - start), cloned = Array(size), i = 0; i < size; i++) cloned[i] = "String" == klass ? this.charAt(start + i) : this[start + i];
                    return cloned
                }
            }), $export($export.P + $export.F * (IObject != Object), "Array", {
                join: function(separator) {
                    return arrayJoin.call(IObject(this), separator === undefined ? "," : separator)
                }
            }), $export($export.S, "Array", {
                isArray: _dereq_(36)
            });
            var createArrayReduce = function(isRight) {
                    return function(callbackfn, memo) {
                        aFunction(callbackfn);
                        var O = IObject(this),
                            length = toLength(O.length),
                            index = isRight ? length - 1 : 0,
                            i = isRight ? -1 : 1;
                        if (arguments.length < 2)
                            for (;;) {
                                if (index in O) {
                                    memo = O[index], index += i;
                                    break
                                }
                                if (index += i, isRight ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value")
                            }
                        for (; isRight ? index >= 0 : length > index; index += i) index in O && (memo = callbackfn(memo, O[index], index, this));
                        return memo
                    }
                },
                methodize = function($fn) {
                    return function(arg1) {
                        return $fn(this, arg1, arguments[1])
                    }
                };
            $export($export.P, "Array", {
                forEach: $.each = $.each || methodize(createArrayMethod(0)),
                map: methodize(createArrayMethod(1)),
                filter: methodize(createArrayMethod(2)),
                some: methodize(createArrayMethod(3)),
                every: methodize(createArrayMethod(4)),
                reduce: createArrayReduce(!1),
                reduceRight: createArrayReduce(!0),
                indexOf: methodize(arrayIndexOf),
                lastIndexOf: function(el, fromIndex) {
                    var O = toIObject(this),
                        length = toLength(O.length),
                        index = length - 1;
                    for (arguments.length > 1 && (index = Math.min(index, toInteger(fromIndex))), index < 0 && (index = toLength(length + index)); index >= 0; index--)
                        if (index in O && O[index] === el) return index;
                    return -1
                }
            }), $export($export.S, "Date", {
                now: function() {
                    return +new Date
                }
            });
            var lz = function(num) {
                return num > 9 ? num : "0" + num
            };
            $export($export.P + $export.F * (fails(function() {
                return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
            }) || !fails(function() {
                new Date(NaN).toISOString()
            })), "Date", {
                toISOString: function() {
                    if (!isFinite(this)) throw RangeError("Invalid time value");
                    var d = this,
                        y = d.getUTCFullYear(),
                        m = d.getUTCMilliseconds(),
                        s = y < 0 ? "-" : y > 9999 ? "+" : "";
                    return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99 ? m : "0" + lz(m)) + "Z"
                }
            })
        }, {
            11: 11,
            19: 19,
            2: 2,
            20: 20,
            22: 22,
            24: 24,
            30: 30,
            32: 32,
            33: 33,
            34: 34,
            36: 36,
            38: 38,
            4: 4,
            46: 46,
            59: 59,
            7: 7,
            76: 76,
            77: 77,
            78: 78,
            79: 79,
            8: 8,
            80: 80,
            82: 82
        }],
        86: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.P, "Array", {
                copyWithin: _dereq_(5)
            }), _dereq_(3)("copyWithin")
        }, {
            22: 22,
            3: 3,
            5: 5
        }],
        87: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.P, "Array", {
                fill: _dereq_(6)
            }), _dereq_(3)("fill")
        }, {
            22: 22,
            3: 3,
            6: 6
        }],
        88: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                $find = _dereq_(8)(6),
                KEY = "findIndex",
                forced = !0;
            KEY in [] && Array(1)[KEY](function() {
                forced = !1
            }), $export($export.P + $export.F * forced, "Array", {
                findIndex: function(callbackfn) {
                    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
                }
            }), _dereq_(3)(KEY)
        }, {
            22: 22,
            3: 3,
            8: 8
        }],
        89: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                $find = _dereq_(8)(5),
                KEY = "find",
                forced = !0;
            KEY in [] && Array(1)[KEY](function() {
                forced = !1
            }), $export($export.P + $export.F * forced, "Array", {
                find: function(callbackfn) {
                    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
                }
            }), _dereq_(3)(KEY)
        }, {
            22: 22,
            3: 3,
            8: 8
        }],
        90: [function(_dereq_) {
            "use strict";
            var ctx = _dereq_(17),
                $export = _dereq_(22),
                toObject = _dereq_(80),
                call = _dereq_(40),
                isArrayIter = _dereq_(35),
                toLength = _dereq_(79),
                getIterFn = _dereq_(84);
            $export($export.S + $export.F * !_dereq_(43)(function(iter) {
                Array.from(iter)
            }), "Array", {
                from: function(arrayLike) {
                    var length, result, step, iterator, O = toObject(arrayLike),
                        C = "function" == typeof this ? this : Array,
                        $$ = arguments,
                        $$len = $$.length,
                        mapfn = $$len > 1 ? $$[1] : undefined,
                        mapping = mapfn !== undefined,
                        index = 0,
                        iterFn = getIterFn(O);
                    if (mapping && (mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2)), iterFn == undefined || C == Array && isArrayIter(iterFn))
                        for (length = toLength(O.length), result = new C(length); length > index; index++) result[index] = mapping ? mapfn(O[index], index) : O[index];
                    else
                        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) result[index] = mapping ? call(iterator, mapfn, [step.value, index], !0) : step.value;
                    return result.length = index, result
                }
            })
        }, {
            17: 17,
            22: 22,
            35: 35,
            40: 40,
            43: 43,
            79: 79,
            80: 80,
            84: 84
        }],
        91: [function(_dereq_, module) {
            "use strict";
            var addToUnscopables = _dereq_(3),
                step = _dereq_(44),
                Iterators = _dereq_(45),
                toIObject = _dereq_(78);
            module.exports = _dereq_(42)(Array, "Array", function(iterated, kind) {
                this._t = toIObject(iterated), this._i = 0, this._k = kind
            }, function() {
                var O = this._t,
                    kind = this._k,
                    index = this._i++;
                return !O || index >= O.length ? (this._t = undefined, step(1)) : "keys" == kind ? step(0, index) : "values" == kind ? step(0, O[index]) : step(0, [index, O[index]])
            }, "values"), Iterators.Arguments = Iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), addToUnscopables("entries")
        }, {
            3: 3,
            42: 42,
            44: 44,
            45: 45,
            78: 78
        }],
        92: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22);
            $export($export.S + $export.F * _dereq_(24)(function() {
                function F() {}
                return !(Array.of.call(F) instanceof F)
            }), "Array", {
                of: function() {
                    for (var index = 0, $$ = arguments, $$len = $$.length, result = new("function" == typeof this ? this : Array)($$len); $$len > index;) result[index] = $$[index++];
                    return result.length = $$len, result
                }
            })
        }, {
            22: 22,
            24: 24
        }],
        93: [function(_dereq_) {
            _dereq_(65)("Array")
        }, {
            65: 65
        }],
        94: [function(_dereq_) {
            "use strict";
            var $ = _dereq_(46),
                isObject = _dereq_(38),
                HAS_INSTANCE = _dereq_(83)("hasInstance"),
                FunctionProto = Function.prototype;
            HAS_INSTANCE in FunctionProto || $.setDesc(FunctionProto, HAS_INSTANCE, {
                value: function(O) {
                    if ("function" != typeof this || !isObject(O)) return !1;
                    if (!isObject(this.prototype)) return O instanceof this;
                    for (; O = $.getProto(O);)
                        if (this.prototype === O) return !0;
                    return !1
                }
            })
        }, {
            38: 38,
            46: 46,
            83: 83
        }],
        95: [function(_dereq_) {
            var setDesc = _dereq_(46).setDesc,
                createDesc = _dereq_(59),
                has = _dereq_(30),
                FProto = Function.prototype,
                nameRE = /^\s*function ([^ (]*)/,
                NAME = "name";
            NAME in FProto || _dereq_(19) && setDesc(FProto, NAME, {
                configurable: !0,
                get: function() {
                    var match = ("" + this).match(nameRE),
                        name = match ? match[1] : "";
                    return has(this, NAME) || setDesc(this, NAME, createDesc(5, name)), name
                }
            })
        }, {
            19: 19,
            30: 30,
            46: 46,
            59: 59
        }],
        96: [function(_dereq_) {
            "use strict";
            var strong = _dereq_(12);
            _dereq_(15)("Map", function(get) {
                return function() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined)
                }
            }, {
                get: function(key) {
                    var entry = strong.getEntry(this, key);
                    return entry && entry.v
                },
                set: function(key, value) {
                    return strong.def(this, 0 === key ? 0 : key, value)
                }
            }, strong, !0)
        }, {
            12: 12,
            15: 15
        }],
        97: [function(_dereq_) {
            var $export = _dereq_(22),
                log1p = _dereq_(50),
                sqrt = Math.sqrt,
                $acosh = Math.acosh;
            $export($export.S + $export.F * !($acosh && 710 == Math.floor($acosh(Number.MAX_VALUE))), "Math", {
                acosh: function(x) {
                    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1))
                }
            })
        }, {
            22: 22,
            50: 50
        }],
        98: [function(_dereq_) {
            function asinh(x) {
                return isFinite(x = +x) && 0 != x ? x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1)) : x
            }
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                asinh: asinh
            })
        }, {
            22: 22
        }],
        99: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                atanh: function(x) {
                    return 0 == (x = +x) ? x : Math.log((1 + x) / (1 - x)) / 2
                }
            })
        }, {
            22: 22
        }],
        100: [function(_dereq_) {
            var $export = _dereq_(22),
                sign = _dereq_(51);
            $export($export.S, "Math", {
                cbrt: function(x) {
                    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3)
                }
            })
        }, {
            22: 22,
            51: 51
        }],
        101: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                clz32: function(x) {
                    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + .5) * Math.LOG2E) : 32
                }
            })
        }, {
            22: 22
        }],
        102: [function(_dereq_) {
            var $export = _dereq_(22),
                exp = Math.exp;
            $export($export.S, "Math", {
                cosh: function(x) {
                    return (exp(x = +x) + exp(-x)) / 2
                }
            })
        }, {
            22: 22
        }],
        103: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                expm1: _dereq_(49)
            })
        }, {
            22: 22,
            49: 49
        }],
        104: [function(_dereq_) {
            var $export = _dereq_(22),
                sign = _dereq_(51),
                pow = Math.pow,
                EPSILON = pow(2, -52),
                EPSILON32 = pow(2, -23),
                MAX32 = pow(2, 127) * (2 - EPSILON32),
                MIN32 = pow(2, -126),
                roundTiesToEven = function(n) {
                    return n + 1 / EPSILON - 1 / EPSILON
                };
            $export($export.S, "Math", {
                fround: function(x) {
                    var a, result, $abs = Math.abs(x),
                        $sign = sign(x);
                    return $abs < MIN32 ? $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32 : (a = (1 + EPSILON32 / EPSILON) * $abs, result = a - (a - $abs), result > MAX32 || result != result ? $sign * Infinity : $sign * result)
                }
            })
        }, {
            22: 22,
            51: 51
        }],
        105: [function(_dereq_) {
            var $export = _dereq_(22),
                abs = Math.abs;
            $export($export.S, "Math", {
                hypot: function() {
                    for (var arg, div, sum = 0, i = 0, $$ = arguments, $$len = $$.length, larg = 0; i < $$len;) arg = abs($$[i++]), larg < arg ? (div = larg / arg, sum = sum * div * div + 1, larg = arg) : arg > 0 ? (div = arg / larg, sum += div * div) : sum += arg;
                    return larg === Infinity ? Infinity : larg * Math.sqrt(sum)
                }
            })
        }, {
            22: 22
        }],
        106: [function(_dereq_) {
            var $export = _dereq_(22),
                $imul = Math.imul;
            $export($export.S + $export.F * _dereq_(24)(function() {
                return -5 != $imul(4294967295, 5) || 2 != $imul.length
            }), "Math", {
                imul: function(x, y) {
                    var UINT16 = 65535,
                        xn = +x,
                        yn = +y,
                        xl = UINT16 & xn,
                        yl = UINT16 & yn;
                    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0)
                }
            })
        }, {
            22: 22,
            24: 24
        }],
        107: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                log10: function(x) {
                    return Math.log(x) / Math.LN10
                }
            })
        }, {
            22: 22
        }],
        108: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                log1p: _dereq_(50)
            })
        }, {
            22: 22,
            50: 50
        }],
        109: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                log2: function(x) {
                    return Math.log(x) / Math.LN2
                }
            })
        }, {
            22: 22
        }],
        110: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                sign: _dereq_(51)
            })
        }, {
            22: 22,
            51: 51
        }],
        111: [function(_dereq_) {
            var $export = _dereq_(22),
                expm1 = _dereq_(49),
                exp = Math.exp;
            $export($export.S + $export.F * _dereq_(24)(function() {
                return -2e-17 != !Math.sinh(-2e-17)
            }), "Math", {
                sinh: function(x) {
                    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2)
                }
            })
        }, {
            22: 22,
            24: 24,
            49: 49
        }],
        112: [function(_dereq_) {
            var $export = _dereq_(22),
                expm1 = _dereq_(49),
                exp = Math.exp;
            $export($export.S, "Math", {
                tanh: function(x) {
                    var a = expm1(x = +x),
                        b = expm1(-x);
                    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x))
                }
            })
        }, {
            22: 22,
            49: 49
        }],
        113: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Math", {
                trunc: function(it) {
                    return (it > 0 ? Math.floor : Math.ceil)(it)
                }
            })
        }, {
            22: 22
        }],
        114: [function(_dereq_) {
            "use strict";
            var $ = _dereq_(46),
                global = _dereq_(29),
                has = _dereq_(30),
                cof = _dereq_(11),
                toPrimitive = _dereq_(81),
                fails = _dereq_(24),
                $trim = _dereq_(74).trim,
                NUMBER = "Number",
                $Number = global[NUMBER],
                Base = $Number,
                proto = $Number.prototype,
                BROKEN_COF = cof($.create(proto)) == NUMBER,
                TRIM = "trim" in String.prototype,
                toNumber = function(argument) {
                    var it = toPrimitive(argument, !1);
                    if ("string" == typeof it && it.length > 2) {
                        it = TRIM ? it.trim() : $trim(it, 3);
                        var third, radix, maxCode, first = it.charCodeAt(0);
                        if (43 === first || 45 === first) {
                            if (88 === (third = it.charCodeAt(2)) || 120 === third) return NaN
                        } else if (48 === first) {
                            switch (it.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    radix = 2, maxCode = 49;
                                    break;
                                case 79:
                                case 111:
                                    radix = 8, maxCode = 55;
                                    break;
                                default:
                                    return +it
                            }
                            for (var code, digits = it.slice(2), i = 0, l = digits.length; i < l; i++)
                                if ((code = digits.charCodeAt(i)) < 48 || code > maxCode) return NaN;
                            return parseInt(digits, radix)
                        }
                    }
                    return +it
                };
            $Number(" 0o1") && $Number("0b1") && !$Number("+0x1") || ($Number = function(value) {
                var it = arguments.length < 1 ? 0 : value,
                    that = this;
                return that instanceof $Number && (BROKEN_COF ? fails(function() {
                    proto.valueOf.call(that)
                }) : cof(that) != NUMBER) ? new Base(toNumber(it)) : toNumber(it)
            }, $.each.call(_dereq_(19) ? $.getNames(Base) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), function(key) {
                has(Base, key) && !has($Number, key) && $.setDesc($Number, key, $.getDesc(Base, key))
            }), $Number.prototype = proto, proto.constructor = $Number, _dereq_(61)(global, NUMBER, $Number))
        }, {
            11: 11,
            19: 19,
            24: 24,
            29: 29,
            30: 30,
            46: 46,
            61: 61,
            74: 74,
            81: 81
        }],
        115: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Number", {
                EPSILON: Math.pow(2, -52)
            })
        }, {
            22: 22
        }],
        116: [function(_dereq_) {
            var $export = _dereq_(22),
                _isFinite = _dereq_(29).isFinite;
            $export($export.S, "Number", {
                isFinite: function(it) {
                    return "number" == typeof it && _isFinite(it)
                }
            })
        }, {
            22: 22,
            29: 29
        }],
        117: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Number", {
                isInteger: _dereq_(37)
            })
        }, {
            22: 22,
            37: 37
        }],
        118: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Number", {
                isNaN: function(number) {
                    return number != number
                }
            })
        }, {
            22: 22
        }],
        119: [function(_dereq_) {
            var $export = _dereq_(22),
                isInteger = _dereq_(37),
                abs = Math.abs;
            $export($export.S, "Number", {
                isSafeInteger: function(number) {
                    return isInteger(number) && abs(number) <= 9007199254740991
                }
            })
        }, {
            22: 22,
            37: 37
        }],
        120: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            })
        }, {
            22: 22
        }],
        121: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            })
        }, {
            22: 22
        }],
        122: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Number", {
                parseFloat: parseFloat
            })
        }, {
            22: 22
        }],
        123: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Number", {
                parseInt: parseInt
            })
        }, {
            22: 22
        }],
        124: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S + $export.F, "Object", {
                assign: _dereq_(53)
            })
        }, {
            22: 22,
            53: 53
        }],
        125: [function(_dereq_) {
            var isObject = _dereq_(38);
            _dereq_(54)("freeze", function($freeze) {
                return function(it) {
                    return $freeze && isObject(it) ? $freeze(it) : it
                }
            })
        }, {
            38: 38,
            54: 54
        }],
        126: [function(_dereq_) {
            var toIObject = _dereq_(78);
            _dereq_(54)("getOwnPropertyDescriptor", function($getOwnPropertyDescriptor) {
                return function(it, key) {
                    return $getOwnPropertyDescriptor(toIObject(it), key)
                }
            })
        }, {
            54: 54,
            78: 78
        }],
        127: [function(_dereq_) {
            _dereq_(54)("getOwnPropertyNames", function() {
                return _dereq_(28).get
            })
        }, {
            28: 28,
            54: 54
        }],
        128: [function(_dereq_) {
            var toObject = _dereq_(80);
            _dereq_(54)("getPrototypeOf", function($getPrototypeOf) {
                return function(it) {
                    return $getPrototypeOf(toObject(it))
                }
            })
        }, {
            54: 54,
            80: 80
        }],
        129: [function(_dereq_) {
            var isObject = _dereq_(38);
            _dereq_(54)("isExtensible", function($isExtensible) {
                return function(it) {
                    return !!isObject(it) && (!$isExtensible || $isExtensible(it))
                }
            })
        }, {
            38: 38,
            54: 54
        }],
        130: [function(_dereq_) {
            var isObject = _dereq_(38);
            _dereq_(54)("isFrozen", function($isFrozen) {
                return function(it) {
                    return !isObject(it) || !!$isFrozen && $isFrozen(it)
                }
            })
        }, {
            38: 38,
            54: 54
        }],
        131: [function(_dereq_) {
            var isObject = _dereq_(38);
            _dereq_(54)("isSealed", function($isSealed) {
                return function(it) {
                    return !isObject(it) || !!$isSealed && $isSealed(it)
                }
            })
        }, {
            38: 38,
            54: 54
        }],
        132: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Object", {
                is: _dereq_(63)
            })
        }, {
            22: 22,
            63: 63
        }],
        133: [function(_dereq_) {
            var toObject = _dereq_(80);
            _dereq_(54)("keys", function($keys) {
                return function(it) {
                    return $keys(toObject(it))
                }
            })
        }, {
            54: 54,
            80: 80
        }],
        134: [function(_dereq_) {
            var isObject = _dereq_(38);
            _dereq_(54)("preventExtensions", function($preventExtensions) {
                return function(it) {
                    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it
                }
            })
        }, {
            38: 38,
            54: 54
        }],
        135: [function(_dereq_) {
            var isObject = _dereq_(38);
            _dereq_(54)("seal", function($seal) {
                return function(it) {
                    return $seal && isObject(it) ? $seal(it) : it
                }
            })
        }, {
            38: 38,
            54: 54
        }],
        136: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Object", {
                setPrototypeOf: _dereq_(64).set
            })
        }, {
            22: 22,
            64: 64
        }],
        137: [function(_dereq_) {
            "use strict";
            var classof = _dereq_(10),
                test = {};
            test[_dereq_(83)("toStringTag")] = "z", test + "" != "[object z]" && _dereq_(61)(Object.prototype, "toString", function() {
                return "[object " + classof(this) + "]"
            }, !0)
        }, {
            10: 10,
            61: 61,
            83: 83
        }],
        138: [function(_dereq_) {
            "use strict";
            var Wrapper, $ = _dereq_(46),
                LIBRARY = _dereq_(48),
                global = _dereq_(29),
                ctx = _dereq_(17),
                classof = _dereq_(10),
                $export = _dereq_(22),
                isObject = _dereq_(38),
                anObject = _dereq_(4),
                aFunction = _dereq_(2),
                strictNew = _dereq_(69),
                forOf = _dereq_(27),
                setProto = _dereq_(64).set,
                same = _dereq_(63),
                SPECIES = _dereq_(83)("species"),
                speciesConstructor = _dereq_(68),
                asap = _dereq_(52),
                PROMISE = "Promise",
                process = global.process,
                isNode = "process" == classof(process),
                P = global[PROMISE],
                testResolve = function(sub) {
                    var test = new P(function() {});
                    return sub && (test.constructor = Object), P.resolve(test) === test
                },
                USE_NATIVE = function() {
                    function P2(x) {
                        var self = new P(x);
                        return setProto(self, P2.prototype), self
                    }
                    var works = !1;
                    try {
                        if (works = P && P.resolve && testResolve(), setProto(P2, P), P2.prototype = $.create(P.prototype, {
                                constructor: {
                                    value: P2
                                }
                            }), P2.resolve(5).then(function() {}) instanceof P2 || (works = !1), works && _dereq_(19)) {
                            var thenableThenGotten = !1;
                            P.resolve($.setDesc({}, "then", {
                                get: function() {
                                    thenableThenGotten = !0
                                }
                            })), works = thenableThenGotten
                        }
                    } catch (e) {
                        works = !1
                    }
                    return works
                }(),
                sameConstructor = function(a, b) {
                    return !(!LIBRARY || a !== P || b !== Wrapper) || same(a, b)
                },
                getConstructor = function(C) {
                    var S = anObject(C)[SPECIES];
                    return S != undefined ? S : C
                },
                isThenable = function(it) {
                    var then;
                    return !(!isObject(it) || "function" != typeof(then = it.then)) && then
                },
                PromiseCapability = function(C) {
                    var resolve, reject;
                    this.promise = new C(function($$resolve, $$reject) {
                        if (resolve !== undefined || reject !== undefined) throw TypeError("Bad Promise constructor");
                        resolve = $$resolve, reject = $$reject
                    }), this.resolve = aFunction(resolve), this.reject = aFunction(reject)
                },
                perform = function(exec) {
                    try {
                        exec()
                    } catch (e) {
                        return {
                            error: e
                        }
                    }
                },
                notify = function(record, isReject) {
                    if (!record.n) {
                        record.n = !0;
                        var chain = record.c;
                        asap(function() {
                            for (var value = record.v, ok = 1 == record.s, i = 0, run = function(reaction) {
                                    var result, then, handler = ok ? reaction.ok : reaction.fail,
                                        resolve = reaction.resolve,
                                        reject = reaction.reject;
                                    try {
                                        handler ? (ok || (record.h = !0), result = !0 === handler ? value : handler(value), result === reaction.promise ? reject(TypeError("Promise-chain cycle")) : (then = isThenable(result)) ? then.call(result, resolve, reject) : resolve(result)) : reject(value)
                                    } catch (e) {
                                        reject(e)
                                    }
                                }; chain.length > i;) run(chain[i++]);
                            chain.length = 0, record.n = !1, isReject && setTimeout(function() {
                                var handler, console, promise = record.p;
                                isUnhandled(promise) && (isNode ? process.emit("unhandledRejection", value, promise) : (handler = global.onunhandledrejection) ? handler({
                                    promise: promise,
                                    reason: value
                                }) : (console = global.console) && console.error && console.error("Unhandled promise rejection", value)), record.a = undefined
                            }, 1)
                        })
                    }
                },
                isUnhandled = function(promise) {
                    var reaction, record = promise._d,
                        chain = record.a || record.c,
                        i = 0;
                    if (record.h) return !1;
                    for (; chain.length > i;)
                        if (reaction = chain[i++], reaction.fail || !isUnhandled(reaction.promise)) return !1;
                    return !0
                },
                $reject = function(value) {
                    var record = this;
                    record.d || (record.d = !0, record = record.r || record, record.v = value, record.s = 2, record.a = record.c.slice(), notify(record, !0))
                },
                $resolve = function(value) {
                    var then, record = this;
                    if (!record.d) {
                        record.d = !0, record = record.r || record;
                        try {
                            if (record.p === value) throw TypeError("Promise can't be resolved itself");
                            (then = isThenable(value)) ? asap(function() {
                                var wrapper = {
                                    r: record,
                                    d: !1
                                };
                                try {
                                    then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1))
                                } catch (e) {
                                    $reject.call(wrapper, e)
                                }
                            }): (record.v = value, record.s = 1, notify(record, !1))
                        } catch (e) {
                            $reject.call({
                                r: record,
                                d: !1
                            }, e)
                        }
                    }
                };
            USE_NATIVE || (P = function(executor) {
                aFunction(executor);
                var record = this._d = {
                    p: strictNew(this, P, PROMISE),
                    c: [],
                    a: undefined,
                    s: 0,
                    d: !1,
                    v: undefined,
                    h: !1,
                    n: !1
                };
                try {
                    executor(ctx($resolve, record, 1), ctx($reject, record, 1))
                } catch (err) {
                    $reject.call(record, err)
                }
            }, _dereq_(60)(P.prototype, {
                then: function(onFulfilled, onRejected) {
                    var reaction = new PromiseCapability(speciesConstructor(this, P)),
                        promise = reaction.promise,
                        record = this._d;
                    return reaction.ok = "function" != typeof onFulfilled || onFulfilled, reaction.fail = "function" == typeof onRejected && onRejected, record.c.push(reaction), record.a && record.a.push(reaction), record.s && notify(record, !1), promise
                },
                "catch": function(onRejected) {
                    return this.then(undefined, onRejected)
                }
            })), $export($export.G + $export.W + $export.F * !USE_NATIVE, {
                Promise: P
            }), _dereq_(66)(P, PROMISE), _dereq_(65)(PROMISE), Wrapper = _dereq_(16)[PROMISE], $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                reject: function(r) {
                    var capability = new PromiseCapability(this);
                    return (0, capability.reject)(r), capability.promise
                }
            }), $export($export.S + $export.F * (!USE_NATIVE || testResolve(!0)), PROMISE, {
                resolve: function(x) {
                    if (x instanceof P && sameConstructor(x.constructor, this)) return x;
                    var capability = new PromiseCapability(this);
                    return (0, capability.resolve)(x), capability.promise
                }
            }), $export($export.S + $export.F * !(USE_NATIVE && _dereq_(43)(function(iter) {
                P.all(iter)["catch"](function() {})
            })), PROMISE, {
                all: function(iterable) {
                    var C = getConstructor(this),
                        capability = new PromiseCapability(C),
                        resolve = capability.resolve,
                        reject = capability.reject,
                        values = [],
                        abrupt = perform(function() {
                            forOf(iterable, !1, values.push, values);
                            var remaining = values.length,
                                results = Array(remaining);
                            remaining ? $.each.call(values, function(promise, index) {
                                var alreadyCalled = !1;
                                C.resolve(promise).then(function(value) {
                                    alreadyCalled || (alreadyCalled = !0, results[index] = value, --remaining || resolve(results))
                                }, reject)
                            }) : resolve(results)
                        });
                    return abrupt && reject(abrupt.error), capability.promise
                },
                race: function(iterable) {
                    var C = getConstructor(this),
                        capability = new PromiseCapability(C),
                        reject = capability.reject,
                        abrupt = perform(function() {
                            forOf(iterable, !1, function(promise) {
                                C.resolve(promise).then(capability.resolve, reject)
                            })
                        });
                    return abrupt && reject(abrupt.error), capability.promise
                }
            })
        }, {
            10: 10,
            16: 16,
            17: 17,
            19: 19,
            2: 2,
            22: 22,
            27: 27,
            29: 29,
            38: 38,
            4: 4,
            43: 43,
            46: 46,
            48: 48,
            52: 52,
            60: 60,
            63: 63,
            64: 64,
            65: 65,
            66: 66,
            68: 68,
            69: 69,
            83: 83
        }],
        139: [function(_dereq_) {
            var $export = _dereq_(22),
                _apply = Function.apply;
            $export($export.S, "Reflect", {
                apply: function(target, thisArgument, argumentsList) {
                    return _apply.call(target, thisArgument, argumentsList)
                }
            })
        }, {
            22: 22
        }],
        140: [function(_dereq_) {
            var $ = _dereq_(46),
                $export = _dereq_(22),
                aFunction = _dereq_(2),
                anObject = _dereq_(4),
                isObject = _dereq_(38),
                bind = Function.bind || _dereq_(16).Function.prototype.bind;
            $export($export.S + $export.F * _dereq_(24)(function() {
                function F() {}
                return !(Reflect.construct(function() {}, [], F) instanceof F)
            }), "Reflect", {
                construct: function(Target, args) {
                    aFunction(Target);
                    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
                    if (Target == newTarget) {
                        if (args != undefined) switch (anObject(args).length) {
                            case 0:
                                return new Target;
                            case 1:
                                return new Target(args[0]);
                            case 2:
                                return new Target(args[0], args[1]);
                            case 3:
                                return new Target(args[0], args[1], args[2]);
                            case 4:
                                return new Target(args[0], args[1], args[2], args[3])
                        }
                        var $args = [null];
                        return $args.push.apply($args, args), new(bind.apply(Target, $args))
                    }
                    var proto = newTarget.prototype,
                        instance = $.create(isObject(proto) ? proto : Object.prototype),
                        result = Function.apply.call(Target, instance, args);
                    return isObject(result) ? result : instance
                }
            })
        }, {
            16: 16,
            2: 2,
            22: 22,
            24: 24,
            38: 38,
            4: 4,
            46: 46
        }],
        141: [function(_dereq_) {
            var $ = _dereq_(46),
                $export = _dereq_(22),
                anObject = _dereq_(4);
            $export($export.S + $export.F * _dereq_(24)(function() {
                Reflect.defineProperty($.setDesc({}, 1, {
                    value: 1
                }), 1, {
                    value: 2
                })
            }), "Reflect", {
                defineProperty: function(target, propertyKey, attributes) {
                    anObject(target);
                    try {
                        return $.setDesc(target, propertyKey, attributes), !0
                    } catch (e) {
                        return !1
                    }
                }
            })
        }, {
            22: 22,
            24: 24,
            4: 4,
            46: 46
        }],
        142: [function(_dereq_) {
            var $export = _dereq_(22),
                getDesc = _dereq_(46).getDesc,
                anObject = _dereq_(4);
            $export($export.S, "Reflect", {
                deleteProperty: function(target, propertyKey) {
                    var desc = getDesc(anObject(target), propertyKey);
                    return !(desc && !desc.configurable) && delete target[propertyKey]
                }
            })
        }, {
            22: 22,
            4: 4,
            46: 46
        }],
        143: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                anObject = _dereq_(4),
                Enumerate = function(iterated) {
                    this._t = anObject(iterated), this._i = 0;
                    var key, keys = this._k = [];
                    for (key in iterated) keys.push(key)
                };
            _dereq_(41)(Enumerate, "Object", function() {
                var key, that = this,
                    keys = that._k;
                do {
                    if (that._i >= keys.length) return {
                        value: undefined,
                        done: !0
                    }
                } while (!((key = keys[that._i++]) in that._t));
                return {
                    value: key,
                    done: !1
                }
            }), $export($export.S, "Reflect", {
                enumerate: function(target) {
                    return new Enumerate(target)
                }
            })
        }, {
            22: 22,
            4: 4,
            41: 41
        }],
        144: [function(_dereq_) {
            var $ = _dereq_(46),
                $export = _dereq_(22),
                anObject = _dereq_(4);
            $export($export.S, "Reflect", {
                getOwnPropertyDescriptor: function(target, propertyKey) {
                    return $.getDesc(anObject(target), propertyKey)
                }
            })
        }, {
            22: 22,
            4: 4,
            46: 46
        }],
        145: [function(_dereq_) {
            var $export = _dereq_(22),
                getProto = _dereq_(46).getProto,
                anObject = _dereq_(4);
            $export($export.S, "Reflect", {
                getPrototypeOf: function(target) {
                    return getProto(anObject(target))
                }
            })
        }, {
            22: 22,
            4: 4,
            46: 46
        }],
        146: [function(_dereq_) {
            function get(target, propertyKey) {
                var desc, proto, receiver = arguments.length < 3 ? target : arguments[2];
                return anObject(target) === receiver ? target[propertyKey] : (desc = $.getDesc(target, propertyKey)) ? has(desc, "value") ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined : isObject(proto = $.getProto(target)) ? get(proto, propertyKey, receiver) : void 0
            }
            var $ = _dereq_(46),
                has = _dereq_(30),
                $export = _dereq_(22),
                isObject = _dereq_(38),
                anObject = _dereq_(4);
            $export($export.S, "Reflect", {
                get: get
            })
        }, {
            22: 22,
            30: 30,
            38: 38,
            4: 4,
            46: 46
        }],
        147: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Reflect", {
                has: function(target, propertyKey) {
                    return propertyKey in target
                }
            })
        }, {
            22: 22
        }],
        148: [function(_dereq_) {
            var $export = _dereq_(22),
                anObject = _dereq_(4),
                $isExtensible = Object.isExtensible;
            $export($export.S, "Reflect", {
                isExtensible: function(target) {
                    return anObject(target), !$isExtensible || $isExtensible(target)
                }
            })
        }, {
            22: 22,
            4: 4
        }],
        149: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.S, "Reflect", {
                ownKeys: _dereq_(56)
            })
        }, {
            22: 22,
            56: 56
        }],
        150: [function(_dereq_) {
            var $export = _dereq_(22),
                anObject = _dereq_(4),
                $preventExtensions = Object.preventExtensions;
            $export($export.S, "Reflect", {
                preventExtensions: function(target) {
                    anObject(target);
                    try {
                        return $preventExtensions && $preventExtensions(target), !0
                    } catch (e) {
                        return !1
                    }
                }
            })
        }, {
            22: 22,
            4: 4
        }],
        151: [function(_dereq_) {
            var $export = _dereq_(22),
                setProto = _dereq_(64);
            setProto && $export($export.S, "Reflect", {
                setPrototypeOf: function(target, proto) {
                    setProto.check(target, proto);
                    try {
                        return setProto.set(target, proto), !0
                    } catch (e) {
                        return !1
                    }
                }
            })
        }, {
            22: 22,
            64: 64
        }],
        152: [function(_dereq_) {
            function set(target, propertyKey, V) {
                var existingDescriptor, proto, receiver = arguments.length < 4 ? target : arguments[3],
                    ownDesc = $.getDesc(anObject(target), propertyKey);
                if (!ownDesc) {
                    if (isObject(proto = $.getProto(target))) return set(proto, propertyKey, V, receiver);
                    ownDesc = createDesc(0)
                }
                return has(ownDesc, "value") ? !(!1 === ownDesc.writable || !isObject(receiver)) && (existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0), existingDescriptor.value = V, $.setDesc(receiver, propertyKey, existingDescriptor), !0) : ownDesc.set !== undefined && (ownDesc.set.call(receiver, V), !0)
            }
            var $ = _dereq_(46),
                has = _dereq_(30),
                $export = _dereq_(22),
                createDesc = _dereq_(59),
                anObject = _dereq_(4),
                isObject = _dereq_(38);
            $export($export.S, "Reflect", {
                set: set
            })
        }, {
            22: 22,
            30: 30,
            38: 38,
            4: 4,
            46: 46,
            59: 59
        }],
        153: [function(_dereq_) {
            var $ = _dereq_(46),
                global = _dereq_(29),
                isRegExp = _dereq_(39),
                $flags = _dereq_(26),
                $RegExp = global.RegExp,
                Base = $RegExp,
                proto = $RegExp.prototype,
                re1 = /a/g,
                re2 = /a/g,
                CORRECT_NEW = new $RegExp(re1) !== re1;
            !_dereq_(19) || CORRECT_NEW && !_dereq_(24)(function() {
                return re2[_dereq_(83)("match")] = !1, $RegExp(re1) != re1 || $RegExp(re2) == re2 || "/a/i" != $RegExp(re1, "i")
            }) || ($RegExp = function(p, f) {
                var piRE = isRegExp(p),
                    fiU = f === undefined;
                return this instanceof $RegExp || !piRE || p.constructor !== $RegExp || !fiU ? CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f) : p
            }, $.each.call($.getNames(Base), function(key) {
                key in $RegExp || $.setDesc($RegExp, key, {
                    configurable: !0,
                    get: function() {
                        return Base[key]
                    },
                    set: function(it) {
                        Base[key] = it
                    }
                })
            }), proto.constructor = $RegExp, $RegExp.prototype = proto, _dereq_(61)(global, "RegExp", $RegExp)), _dereq_(65)("RegExp")
        }, {
            19: 19,
            24: 24,
            26: 26,
            29: 29,
            39: 39,
            46: 46,
            61: 61,
            65: 65,
            83: 83
        }],
        154: [function(_dereq_) {
            var $ = _dereq_(46);
            _dereq_(19) && "g" != /./g.flags && $.setDesc(RegExp.prototype, "flags", {
                configurable: !0,
                get: _dereq_(26)
            })
        }, {
            19: 19,
            26: 26,
            46: 46
        }],
        155: [function(_dereq_) {
            _dereq_(25)("match", 1, function(defined, MATCH) {
                return function(regexp) {
                    "use strict";
                    var O = defined(this),
                        fn = regexp == undefined ? undefined : regexp[MATCH];
                    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O))
                }
            })
        }, {
            25: 25
        }],
        156: [function(_dereq_) {
            _dereq_(25)("replace", 2, function(defined, REPLACE, $replace) {
                return function(searchValue, replaceValue) {
                    "use strict";
                    var O = defined(this),
                        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue)
                }
            })
        }, {
            25: 25
        }],
        157: [function(_dereq_) {
            _dereq_(25)("search", 1, function(defined, SEARCH) {
                return function(regexp) {
                    "use strict";
                    var O = defined(this),
                        fn = regexp == undefined ? undefined : regexp[SEARCH];
                    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O))
                }
            })
        }, {
            25: 25
        }],
        158: [function(_dereq_) {
            _dereq_(25)("split", 2, function(defined, SPLIT, $split) {
                return function(separator, limit) {
                    "use strict";
                    var O = defined(this),
                        fn = separator == undefined ? undefined : separator[SPLIT];
                    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit)
                }
            })
        }, {
            25: 25
        }],
        159: [function(_dereq_) {
            "use strict";
            var strong = _dereq_(12);
            _dereq_(15)("Set", function(get) {
                return function() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined)
                }
            }, {
                add: function(value) {
                    return strong.def(this, value = 0 === value ? 0 : value, value)
                }
            }, strong)
        }, {
            12: 12,
            15: 15
        }],
        160: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                $at = _dereq_(70)(!1);
            $export($export.P, "String", {
                codePointAt: function(pos) {
                    return $at(this, pos)
                }
            })
        }, {
            22: 22,
            70: 70
        }],
        161: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                toLength = _dereq_(79),
                context = _dereq_(71),
                ENDS_WITH = "endsWith",
                $endsWith = "" [ENDS_WITH];
            $export($export.P + $export.F * _dereq_(23)(ENDS_WITH), "String", {
                endsWith: function(searchString) {
                    var that = context(this, searchString, ENDS_WITH),
                        $$ = arguments,
                        endPosition = $$.length > 1 ? $$[1] : undefined,
                        len = toLength(that.length),
                        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
                        search = String(searchString);
                    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search
                }
            })
        }, {
            22: 22,
            23: 23,
            71: 71,
            79: 79
        }],
        162: [function(_dereq_) {
            var $export = _dereq_(22),
                toIndex = _dereq_(76),
                fromCharCode = String.fromCharCode,
                $fromCodePoint = String.fromCodePoint;
            $export($export.S + $export.F * (!!$fromCodePoint && 1 != $fromCodePoint.length), "String", {
                fromCodePoint: function() {
                    for (var code, res = [], $$ = arguments, $$len = $$.length, i = 0; $$len > i;) {
                        if (code = +$$[i++], toIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
                        res.push(code < 65536 ? fromCharCode(code) : fromCharCode(55296 + ((code -= 65536) >> 10), code % 1024 + 56320))
                    }
                    return res.join("")
                }
            })
        }, {
            22: 22,
            76: 76
        }],
        163: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                context = _dereq_(71),
                INCLUDES = "includes";
            $export($export.P + $export.F * _dereq_(23)(INCLUDES), "String", {
                includes: function(searchString) {
                    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined)
                }
            })
        }, {
            22: 22,
            23: 23,
            71: 71
        }],
        164: [function(_dereq_) {
            "use strict";
            var $at = _dereq_(70)(!0);
            _dereq_(42)(String, "String", function(iterated) {
                this._t = String(iterated), this._i = 0
            }, function() {
                var point, O = this._t,
                    index = this._i;
                return index >= O.length ? {
                    value: undefined,
                    done: !0
                } : (point = $at(O, index), this._i += point.length, {
                    value: point,
                    done: !1
                })
            })
        }, {
            42: 42,
            70: 70
        }],
        165: [function(_dereq_) {
            var $export = _dereq_(22),
                toIObject = _dereq_(78),
                toLength = _dereq_(79);
            $export($export.S, "String", {
                raw: function(callSite) {
                    for (var tpl = toIObject(callSite.raw), len = toLength(tpl.length), $$ = arguments, $$len = $$.length, res = [], i = 0; len > i;) res.push(String(tpl[i++])), i < $$len && res.push(String($$[i]));
                    return res.join("")
                }
            })
        }, {
            22: 22,
            78: 78,
            79: 79
        }],
        166: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.P, "String", {
                repeat: _dereq_(73)
            })
        }, {
            22: 22,
            73: 73
        }],
        167: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                toLength = _dereq_(79),
                context = _dereq_(71),
                STARTS_WITH = "startsWith",
                $startsWith = "" [STARTS_WITH];
            $export($export.P + $export.F * _dereq_(23)(STARTS_WITH), "String", {
                startsWith: function(searchString) {
                    var that = context(this, searchString, STARTS_WITH),
                        $$ = arguments,
                        index = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length)),
                        search = String(searchString);
                    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search
                }
            })
        }, {
            22: 22,
            23: 23,
            71: 71,
            79: 79
        }],
        168: [function(_dereq_) {
            "use strict";
            _dereq_(74)("trim", function($trim) {
                return function() {
                    return $trim(this, 3)
                }
            })
        }, {
            74: 74
        }],
        169: [function(_dereq_) {
            "use strict";
            var $ = _dereq_(46),
                global = _dereq_(29),
                has = _dereq_(30),
                DESCRIPTORS = _dereq_(19),
                $export = _dereq_(22),
                redefine = _dereq_(61),
                $fails = _dereq_(24),
                shared = _dereq_(67),
                setToStringTag = _dereq_(66),
                uid = _dereq_(82),
                wks = _dereq_(83),
                keyOf = _dereq_(47),
                $names = _dereq_(28),
                enumKeys = _dereq_(21),
                isArray = _dereq_(36),
                anObject = _dereq_(4),
                toIObject = _dereq_(78),
                createDesc = _dereq_(59),
                getDesc = $.getDesc,
                setDesc = $.setDesc,
                _create = $.create,
                getNames = $names.get,
                $Symbol = global.Symbol,
                $JSON = global.JSON,
                _stringify = $JSON && $JSON.stringify,
                setter = !1,
                HIDDEN = wks("_hidden"),
                isEnum = $.isEnum,
                SymbolRegistry = shared("symbol-registry"),
                AllSymbols = shared("symbols"),
                useNative = "function" == typeof $Symbol,
                ObjectProto = Object.prototype,
                setSymbolDesc = DESCRIPTORS && $fails(function() {
                    return 7 != _create(setDesc({}, "a", {
                        get: function() {
                            return setDesc(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(it, key, D) {
                    var protoDesc = getDesc(ObjectProto, key);
                    protoDesc && delete ObjectProto[key], setDesc(it, key, D), protoDesc && it !== ObjectProto && setDesc(ObjectProto, key, protoDesc)
                } : setDesc,
                wrap = function(tag) {
                    var sym = AllSymbols[tag] = _create($Symbol.prototype);
                    return sym._k = tag, DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
                        configurable: !0,
                        set: function(value) {
                            has(this, HIDDEN) && has(this[HIDDEN], tag) && (this[HIDDEN][tag] = !1), setSymbolDesc(this, tag, createDesc(1, value))
                        }
                    }), sym
                },
                isSymbol = function(it) {
                    return "symbol" == typeof it
                },
                $defineProperty = function(it, key, D) {
                    return D && has(AllSymbols, key) ? (D.enumerable ? (has(it, HIDDEN) && it[HIDDEN][key] && (it[HIDDEN][key] = !1), D = _create(D, {
                        enumerable: createDesc(0, !1)
                    })) : (has(it, HIDDEN) || setDesc(it, HIDDEN, createDesc(1, {})), it[HIDDEN][key] = !0), setSymbolDesc(it, key, D)) : setDesc(it, key, D)
                },
                $defineProperties = function(it, P) {
                    anObject(it);
                    for (var key, keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length; l > i;) $defineProperty(it, key = keys[i++], P[key]);
                    return it
                },
                $create = function(it, P) {
                    return P === undefined ? _create(it) : $defineProperties(_create(it), P)
                },
                $propertyIsEnumerable = function(key) {
                    var E = isEnum.call(this, key);
                    return !(E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || E
                },
                $getOwnPropertyDescriptor = function(it, key) {
                    var D = getDesc(it = toIObject(it), key);
                    return !D || !has(AllSymbols, key) || has(it, HIDDEN) && it[HIDDEN][key] || (D.enumerable = !0), D
                },
                $getOwnPropertyNames = function(it) {
                    for (var key, names = getNames(toIObject(it)), result = [], i = 0; names.length > i;) has(AllSymbols, key = names[i++]) || key == HIDDEN || result.push(key);
                    return result
                },
                $getOwnPropertySymbols = function(it) {
                    for (var key, names = getNames(toIObject(it)), result = [], i = 0; names.length > i;) has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
                    return result
                },
                $stringify = function(it) {
                    if (it !== undefined && !isSymbol(it)) {
                        for (var replacer, $replacer, args = [it], i = 1, $$ = arguments; $$.length > i;) args.push($$[i++]);
                        return replacer = args[1], "function" == typeof replacer && ($replacer = replacer), !$replacer && isArray(replacer) || (replacer = function(key, value) {
                            if ($replacer && (value = $replacer.call(this, key, value)), !isSymbol(value)) return value
                        }), args[1] = replacer, _stringify.apply($JSON, args)
                    }
                },
                buggyJSON = $fails(function() {
                    var S = $Symbol();
                    return "[null]" != _stringify([S]) || "{}" != _stringify({
                        a: S
                    }) || "{}" != _stringify(Object(S))
                });
            useNative || ($Symbol = function() {
                if (isSymbol(this)) throw TypeError("Symbol is not a constructor");
                return wrap(uid(arguments.length > 0 ? arguments[0] : undefined))
            }, redefine($Symbol.prototype, "toString", function() {
                return this._k
            }), isSymbol = function(it) {
                return it instanceof $Symbol
            }, $.create = $create, $.isEnum = $propertyIsEnumerable, $.getDesc = $getOwnPropertyDescriptor, $.setDesc = $defineProperty, $.setDescs = $defineProperties, $.getNames = $names.get = $getOwnPropertyNames, $.getSymbols = $getOwnPropertySymbols, DESCRIPTORS && !_dereq_(48) && redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, !0));
            var symbolStatics = {
                "for": function(key) {
                    return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key)
                },
                keyFor: function(key) {
                    return keyOf(SymbolRegistry, key)
                },
                useSetter: function() {
                    setter = !0
                },
                useSimple: function() {
                    setter = !1
                }
            };
            $.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(it) {
                var sym = wks(it);
                symbolStatics[it] = useNative ? sym : wrap(sym)
            }), setter = !0, $export($export.G + $export.W, {
                Symbol: $Symbol
            }), $export($export.S, "Symbol", symbolStatics), $export($export.S + $export.F * !useNative, "Object", {
                create: $create,
                defineProperty: $defineProperty,
                defineProperties: $defineProperties,
                getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                getOwnPropertyNames: $getOwnPropertyNames,
                getOwnPropertySymbols: $getOwnPropertySymbols
            }), $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), "JSON", {
                stringify: $stringify
            }), setToStringTag($Symbol, "Symbol"), setToStringTag(Math, "Math", !0), setToStringTag(global.JSON, "JSON", !0)
        }, {
            19: 19,
            21: 21,
            22: 22,
            24: 24,
            28: 28,
            29: 29,
            30: 30,
            36: 36,
            4: 4,
            46: 46,
            47: 47,
            48: 48,
            59: 59,
            61: 61,
            66: 66,
            67: 67,
            78: 78,
            82: 82,
            83: 83
        }],
        170: [function(_dereq_) {
            "use strict";
            var $ = _dereq_(46),
                redefine = _dereq_(61),
                weak = _dereq_(14),
                isObject = _dereq_(38),
                has = _dereq_(30),
                frozenStore = weak.frozenStore,
                WEAK = weak.WEAK,
                isExtensible = Object.isExtensible || isObject,
                tmp = {},
                $WeakMap = _dereq_(15)("WeakMap", function(get) {
                    return function() {
                        return get(this, arguments.length > 0 ? arguments[0] : undefined)
                    }
                }, {
                    get: function(key) {
                        if (isObject(key)) {
                            if (!isExtensible(key)) return frozenStore(this).get(key);
                            if (has(key, WEAK)) return key[WEAK][this._i]
                        }
                    },
                    set: function(key, value) {
                        return weak.def(this, key, value)
                    }
                }, weak, !0, !0);
            7 != (new $WeakMap).set((Object.freeze || Object)(tmp), 7).get(tmp) && $.each.call(["delete", "has", "get", "set"], function(key) {
                var proto = $WeakMap.prototype,
                    method = proto[key];
                redefine(proto, key, function(a, b) {
                    if (isObject(a) && !isExtensible(a)) {
                        var result = frozenStore(this)[key](a, b);
                        return "set" == key ? this : result
                    }
                    return method.call(this, a, b)
                })
            })
        }, {
            14: 14,
            15: 15,
            30: 30,
            38: 38,
            46: 46,
            61: 61
        }],
        171: [function(_dereq_) {
            "use strict";
            var weak = _dereq_(14);
            _dereq_(15)("WeakSet", function(get) {
                return function() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined)
                }
            }, {
                add: function(value) {
                    return weak.def(this, value, !0)
                }
            }, weak, !1, !0)
        }, {
            14: 14,
            15: 15
        }],
        172: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                $includes = _dereq_(7)(!0);
            $export($export.P, "Array", {
                includes: function(el) {
                    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined)
                }
            }), _dereq_(3)("includes")
        }, {
            22: 22,
            3: 3,
            7: 7
        }],
        173: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.P, "Map", {
                toJSON: _dereq_(13)("Map")
            })
        }, {
            13: 13,
            22: 22
        }],
        174: [function(_dereq_) {
            var $export = _dereq_(22),
                $entries = _dereq_(55)(!0);
            $export($export.S, "Object", {
                entries: function(it) {
                    return $entries(it)
                }
            })
        }, {
            22: 22,
            55: 55
        }],
        175: [function(_dereq_) {
            var $ = _dereq_(46),
                $export = _dereq_(22),
                ownKeys = _dereq_(56),
                toIObject = _dereq_(78),
                createDesc = _dereq_(59);
            $export($export.S, "Object", {
                getOwnPropertyDescriptors: function(object) {
                    for (var key, D, O = toIObject(object), setDesc = $.setDesc, getDesc = $.getDesc, keys = ownKeys(O), result = {}, i = 0; keys.length > i;) D = getDesc(O, key = keys[i++]), key in result ? setDesc(result, key, createDesc(0, D)) : result[key] = D;
                    return result
                }
            })
        }, {
            22: 22,
            46: 46,
            56: 56,
            59: 59,
            78: 78
        }],
        176: [function(_dereq_) {
            var $export = _dereq_(22),
                $values = _dereq_(55)(!1);
            $export($export.S, "Object", {
                values: function(it) {
                    return $values(it)
                }
            })
        }, {
            22: 22,
            55: 55
        }],
        177: [function(_dereq_) {
            var $export = _dereq_(22),
                $re = _dereq_(62)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
            $export($export.S, "RegExp", {
                escape: function(it) {
                    return $re(it)
                }
            })
        }, {
            22: 22,
            62: 62
        }],
        178: [function(_dereq_) {
            var $export = _dereq_(22);
            $export($export.P, "Set", {
                toJSON: _dereq_(13)("Set")
            })
        }, {
            13: 13,
            22: 22
        }],
        179: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                $at = _dereq_(70)(!0);
            $export($export.P, "String", {
                at: function(pos) {
                    return $at(this, pos)
                }
            })
        }, {
            22: 22,
            70: 70
        }],
        180: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                $pad = _dereq_(72);
            $export($export.P, "String", {
                padLeft: function(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, !0)
                }
            })
        }, {
            22: 22,
            72: 72
        }],
        181: [function(_dereq_) {
            "use strict";
            var $export = _dereq_(22),
                $pad = _dereq_(72);
            $export($export.P, "String", {
                padRight: function(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, !1)
                }
            })
        }, {
            22: 22,
            72: 72
        }],
        182: [function(_dereq_) {
            "use strict";
            _dereq_(74)("trimLeft", function($trim) {
                return function() {
                    return $trim(this, 1)
                }
            })
        }, {
            74: 74
        }],
        183: [function(_dereq_) {
            "use strict";
            _dereq_(74)("trimRight", function($trim) {
                return function() {
                    return $trim(this, 2)
                }
            })
        }, {
            74: 74
        }],
        184: [function(_dereq_) {
            var $ = _dereq_(46),
                $export = _dereq_(22),
                $ctx = _dereq_(17),
                $Array = _dereq_(16).Array || Array,
                statics = {},
                setStatics = function(keys, length) {
                    $.each.call(keys.split(","), function(key) {
                        length == undefined && key in $Array ? statics[key] = $Array[key] : key in [] && (statics[key] = $ctx(Function.call, [][key], length))
                    })
                };
            setStatics("pop,reverse,shift,keys,values,entries", 1), setStatics("indexOf,every,some,forEach,map,filter,find,findIndex,includes", 3), setStatics("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"), $export($export.S, "Array", statics)
        }, {
            16: 16,
            17: 17,
            22: 22,
            46: 46
        }],
        185: [function(_dereq_) {
            _dereq_(91);
            var global = _dereq_(29),
                hide = _dereq_(31),
                Iterators = _dereq_(45),
                ITERATOR = _dereq_(83)("iterator"),
                NL = global.NodeList,
                HTC = global.HTMLCollection,
                NLProto = NL && NL.prototype,
                HTCProto = HTC && HTC.prototype,
                ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
            NLProto && !NLProto[ITERATOR] && hide(NLProto, ITERATOR, ArrayValues), HTCProto && !HTCProto[ITERATOR] && hide(HTCProto, ITERATOR, ArrayValues)
        }, {
            29: 29,
            31: 31,
            45: 45,
            83: 83,
            91: 91
        }],
        186: [function(_dereq_) {
            var $export = _dereq_(22),
                $task = _dereq_(75);
            $export($export.G + $export.B, {
                setImmediate: $task.set,
                clearImmediate: $task.clear
            })
        }, {
            22: 22,
            75: 75
        }],
        187: [function(_dereq_) {
            var global = _dereq_(29),
                $export = _dereq_(22),
                invoke = _dereq_(33),
                partial = _dereq_(57),
                navigator = global.navigator,
                MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent),
                wrap = function(set) {
                    return MSIE ? function(fn, time) {
                        return set(invoke(partial, [].slice.call(arguments, 2), "function" == typeof fn ? fn : Function(fn)), time)
                    } : set
                };
            $export($export.G + $export.B + $export.F * MSIE, {
                setTimeout: wrap(global.setTimeout),
                setInterval: wrap(global.setInterval)
            })
        }, {
            22: 22,
            29: 29,
            33: 33,
            57: 57
        }],
        188: [function(_dereq_, module) {
            _dereq_(85), _dereq_(169), _dereq_(124), _dereq_(132), _dereq_(136), _dereq_(137), _dereq_(125), _dereq_(135), _dereq_(134), _dereq_(130), _dereq_(131), _dereq_(129), _dereq_(126), _dereq_(128), _dereq_(133), _dereq_(127), _dereq_(95), _dereq_(94), _dereq_(114), _dereq_(115), _dereq_(116), _dereq_(117), _dereq_(118), _dereq_(119), _dereq_(120), _dereq_(121), _dereq_(122), _dereq_(123), _dereq_(97), _dereq_(98), _dereq_(99), _dereq_(100), _dereq_(101), _dereq_(102), _dereq_(103), _dereq_(104), _dereq_(105), _dereq_(106), _dereq_(107), _dereq_(108), _dereq_(109), _dereq_(110), _dereq_(111),
                _dereq_(112), _dereq_(113), _dereq_(162), _dereq_(165), _dereq_(168), _dereq_(164), _dereq_(160), _dereq_(161), _dereq_(163), _dereq_(166), _dereq_(167), _dereq_(90), _dereq_(92), _dereq_(91), _dereq_(93), _dereq_(86), _dereq_(87), _dereq_(89), _dereq_(88), _dereq_(153), _dereq_(154), _dereq_(155), _dereq_(156), _dereq_(157), _dereq_(158), _dereq_(138), _dereq_(96), _dereq_(159), _dereq_(170), _dereq_(171), _dereq_(139), _dereq_(140), _dereq_(141), _dereq_(142), _dereq_(143), _dereq_(146), _dereq_(144), _dereq_(145), _dereq_(147), _dereq_(148), _dereq_(149), _dereq_(150), _dereq_(152), _dereq_(151), _dereq_(172), _dereq_(179), _dereq_(180), _dereq_(181), _dereq_(182), _dereq_(183), _dereq_(177), _dereq_(175), _dereq_(176), _dereq_(174), _dereq_(173), _dereq_(178), _dereq_(184), _dereq_(187), _dereq_(186), _dereq_(185), module.exports = _dereq_(16)
        }, {
            100: 100,
            101: 101,
            102: 102,
            103: 103,
            104: 104,
            105: 105,
            106: 106,
            107: 107,
            108: 108,
            109: 109,
            110: 110,
            111: 111,
            112: 112,
            113: 113,
            114: 114,
            115: 115,
            116: 116,
            117: 117,
            118: 118,
            119: 119,
            120: 120,
            121: 121,
            122: 122,
            123: 123,
            124: 124,
            125: 125,
            126: 126,
            127: 127,
            128: 128,
            129: 129,
            130: 130,
            131: 131,
            132: 132,
            133: 133,
            134: 134,
            135: 135,
            136: 136,
            137: 137,
            138: 138,
            139: 139,
            140: 140,
            141: 141,
            142: 142,
            143: 143,
            144: 144,
            145: 145,
            146: 146,
            147: 147,
            148: 148,
            149: 149,
            150: 150,
            151: 151,
            152: 152,
            153: 153,
            154: 154,
            155: 155,
            156: 156,
            157: 157,
            158: 158,
            159: 159,
            16: 16,
            160: 160,
            161: 161,
            162: 162,
            163: 163,
            164: 164,
            165: 165,
            166: 166,
            167: 167,
            168: 168,
            169: 169,
            170: 170,
            171: 171,
            172: 172,
            173: 173,
            174: 174,
            175: 175,
            176: 176,
            177: 177,
            178: 178,
            179: 179,
            180: 180,
            181: 181,
            182: 182,
            183: 183,
            184: 184,
            185: 185,
            186: 186,
            187: 187,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            91: 91,
            92: 92,
            93: 93,
            94: 94,
            95: 95,
            96: 96,
            97: 97,
            98: 98,
            99: 99
        }],
        189: [function(_dereq_, module) {
            (function(global) {
                /**
                 * Copyright (c) 2014, Facebook, Inc.
                 * All rights reserved.
                 *
                 * This source code is licensed under the BSD-style license found in the
                 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
                 * additional grant of patent rights can be found in the PATENTS file in
                 * the same directory.
                 */
                ! function(global) {
                    "use strict";

                    function wrap(innerFn, outerFn, self, tryLocsList) {
                        var generator = Object.create((outerFn || Generator).prototype),
                            context = new Context(tryLocsList || []);
                        return generator._invoke = makeInvokeMethod(innerFn, self, context), generator
                    }

                    function tryCatch(fn, obj, arg) {
                        try {
                            return {
                                type: "normal",
                                arg: fn.call(obj, arg)
                            }
                        } catch (err) {
                            return {
                                type: "throw",
                                arg: err
                            }
                        }
                    }

                    function Generator() {}

                    function GeneratorFunction() {}

                    function GeneratorFunctionPrototype() {}

                    function defineIteratorMethods(prototype) {
                        ["next", "throw", "return"].forEach(function(method) {
                            prototype[method] = function(arg) {
                                return this._invoke(method, arg)
                            }
                        })
                    }

                    function AwaitArgument(arg) {
                        this.arg = arg
                    }

                    function AsyncIterator(generator) {
                        function invoke(method, arg) {
                            var result = generator[method](arg),
                                value = result.value;
                            return value instanceof AwaitArgument ? Promise.resolve(value.arg).then(invokeNext, invokeThrow) : Promise.resolve(value).then(function(unwrapped) {
                                return result.value = unwrapped, result
                            })
                        }

                        function enqueue(method, arg) {
                            function callInvokeWithMethodAndArg() {
                                return invoke(method, arg)
                            }
                            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : new Promise(function(resolve) {
                                resolve(callInvokeWithMethodAndArg())
                            })
                        }
                        "object" == typeof process && process.domain && (invoke = process.domain.bind(invoke));
                        var previousPromise, invokeNext = invoke.bind(generator, "next"),
                            invokeThrow = invoke.bind(generator, "throw");
                        invoke.bind(generator, "return");
                        this._invoke = enqueue
                    }

                    function makeInvokeMethod(innerFn, self, context) {
                        var state = GenStateSuspendedStart;
                        return function(method, arg) {
                            if (state === GenStateExecuting) throw new Error("Generator is already running");
                            if (state === GenStateCompleted) {
                                if ("throw" === method) throw arg;
                                return doneResult()
                            }
                            for (;;) {
                                var delegate = context.delegate;
                                if (delegate) {
                                    if ("return" === method || "throw" === method && delegate.iterator[method] === undefined) {
                                        context.delegate = null;
                                        var returnMethod = delegate.iterator["return"];
                                        if (returnMethod) {
                                            var record = tryCatch(returnMethod, delegate.iterator, arg);
                                            if ("throw" === record.type) {
                                                method = "throw", arg = record.arg;
                                                continue
                                            }
                                        }
                                        if ("return" === method) continue
                                    }
                                    var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
                                    if ("throw" === record.type) {
                                        context.delegate = null, method = "throw", arg = record.arg;
                                        continue
                                    }
                                    method = "next", arg = undefined;
                                    var info = record.arg;
                                    if (!info.done) return state = GenStateSuspendedYield, info;
                                    context[delegate.resultName] = info.value, context.next = delegate.nextLoc, context.delegate = null
                                }
                                if ("next" === method) context.sent = state === GenStateSuspendedYield ? arg : undefined;
                                else if ("throw" === method) {
                                    if (state === GenStateSuspendedStart) throw state = GenStateCompleted, arg;
                                    context.dispatchException(arg) && (method = "next", arg = undefined)
                                } else "return" === method && context.abrupt("return", arg);
                                state = GenStateExecuting;
                                var record = tryCatch(innerFn, self, context);
                                if ("normal" === record.type) {
                                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                                    var info = {
                                        value: record.arg,
                                        done: context.done
                                    };
                                    if (record.arg !== ContinueSentinel) return info;
                                    context.delegate && "next" === method && (arg = undefined)
                                } else "throw" === record.type && (state = GenStateCompleted, method = "throw", arg = record.arg)
                            }
                        }
                    }

                    function pushTryEntry(locs) {
                        var entry = {
                            tryLoc: locs[0]
                        };
                        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry)
                    }

                    function resetTryEntry(entry) {
                        var record = entry.completion || {};
                        record.type = "normal", delete record.arg, entry.completion = record
                    }

                    function Context(tryLocsList) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0)
                    }

                    function values(iterable) {
                        if (iterable) {
                            var iteratorMethod = iterable[iteratorSymbol];
                            if (iteratorMethod) return iteratorMethod.call(iterable);
                            if ("function" == typeof iterable.next) return iterable;
                            if (!isNaN(iterable.length)) {
                                var i = -1,
                                    next = function next() {
                                        for (; ++i < iterable.length;)
                                            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                                        return next.value = undefined, next.done = !0, next
                                    };
                                return next.next = next
                            }
                        }
                        return {
                            next: doneResult
                        }
                    }

                    function doneResult() {
                        return {
                            value: undefined,
                            done: !0
                        }
                    }
                    var undefined, hasOwn = Object.prototype.hasOwnProperty,
                        iteratorSymbol = "function" == typeof Symbol && Symbol.iterator || "@@iterator",
                        inModule = "object" == typeof module,
                        runtime = global.regeneratorRuntime;
                    if (runtime) return void(inModule && (module.exports = runtime));
                    runtime = global.regeneratorRuntime = inModule ? module.exports : {}, runtime.wrap = wrap;
                    var GenStateSuspendedStart = "suspendedStart",
                        GenStateSuspendedYield = "suspendedYield",
                        GenStateExecuting = "executing",
                        GenStateCompleted = "completed",
                        ContinueSentinel = {},
                        Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
                    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunction.displayName = "GeneratorFunction", runtime.isGeneratorFunction = function(genFun) {
                        var ctor = "function" == typeof genFun && genFun.constructor;
                        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name))
                    }, runtime.mark = function(genFun) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : genFun.__proto__ = GeneratorFunctionPrototype, genFun.prototype = Object.create(Gp), genFun
                    }, runtime.awrap = function(arg) {
                        return new AwaitArgument(arg)
                    }, defineIteratorMethods(AsyncIterator.prototype), runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
                        return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                            return result.done ? result.value : iter.next()
                        })
                    }, defineIteratorMethods(Gp), Gp[iteratorSymbol] = function() {
                        return this
                    }, Gp.toString = function() {
                        return "[object Generator]"
                    }, runtime.keys = function(object) {
                        var keys = [];
                        for (var key in object) keys.push(key);
                        return keys.reverse(),
                            function next() {
                                for (; keys.length;) {
                                    var key = keys.pop();
                                    if (key in object) return next.value = key, next.done = !1, next
                                }
                                return next.done = !0, next
                            }
                    }, runtime.values = values, Context.prototype = {
                        constructor: Context,
                        reset: function(skipTempReset) {
                            if (this.prev = 0, this.next = 0, this.sent = undefined, this.done = !1, this.delegate = null, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
                                for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined)
                        },
                        stop: function() {
                            this.done = !0;
                            var rootEntry = this.tryEntries[0],
                                rootRecord = rootEntry.completion;
                            if ("throw" === rootRecord.type) throw rootRecord.arg;
                            return this.rval
                        },
                        dispatchException: function(exception) {
                            function handle(loc, caught) {
                                return record.type = "throw", record.arg = exception, context.next = loc, !!caught
                            }
                            if (this.done) throw exception;
                            for (var context = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i],
                                    record = entry.completion;
                                if ("root" === entry.tryLoc) return handle("end");
                                if (entry.tryLoc <= this.prev) {
                                    var hasCatch = hasOwn.call(entry, "catchLoc"),
                                        hasFinally = hasOwn.call(entry, "finallyLoc");
                                    if (hasCatch && hasFinally) {
                                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
                                    } else if (hasCatch) {
                                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0)
                                    } else {
                                        if (!hasFinally) throw new Error("try statement without catch or finally");
                                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(type, arg) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i];
                                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                                    var finallyEntry = entry;
                                    break
                                }
                            }
                            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
                            var record = finallyEntry ? finallyEntry.completion : {};
                            return record.type = type, record.arg = arg, finallyEntry ? this.next = finallyEntry.finallyLoc : this.complete(record), ContinueSentinel
                        },
                        complete: function(record, afterLoc) {
                            if ("throw" === record.type) throw record.arg;
                            "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = record.arg, this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc)
                        },
                        finish: function(finallyLoc) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i];
                                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel
                            }
                        },
                        "catch": function(tryLoc) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i];
                                if (entry.tryLoc === tryLoc) {
                                    var record = entry.completion;
                                    if ("throw" === record.type) {
                                        var thrown = record.arg;
                                        resetTryEntry(entry)
                                    }
                                    return thrown
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(iterable, resultName, nextLoc) {
                            return this.delegate = {
                                iterator: values(iterable),
                                resultName: resultName,
                                nextLoc: nextLoc
                            }, ContinueSentinel
                        }
                    }
                }("object" == typeof global ? global : "object" == typeof window ? window : "object" == typeof self ? self : this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [1]), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b);
        if (("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse")) && b.transitioning)) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var b = this.$element,
            c = this.options;
        return b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do {
            a += ~~(1e6 * Math.random())
        } while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && ((c = a(b.currentTarget).data("bs." + this.type)) || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery),
function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function(a) {
    function d(c, d, e) {
        var j, f = this,
            g = c.add(this),
            h = c.find(e.tabs),
            i = d.jquery ? d : c.children(d);
        h.length || (h = c.children()), i.length || (i = c.parent().find(d)), i.length || (i = a(d)), a.extend(this, {
            click: function(c, d) {
                var i = h.eq(c);
                if ("string" == typeof c && c.replace("#", "") && (i = h.filter("[href*=" + c.replace("#", "") + "]"), c = Math.max(h.index(i), 0)), e.rotate) {
                    var k = h.length - 1;
                    if (c < 0) return f.click(k, d);
                    if (c > k) return f.click(0, d)
                }
                if (!i.length) {
                    if (j >= 0) return f;
                    c = e.initialIndex, i = h.eq(c)
                }
                return c === j ? f : (d = d || a.Event(), d.type = "onBeforeClick", g.trigger(d, [c]), d.isDefaultPrevented() ? void 0 : (b[e.effect].call(f, c, function() {
                    d.type = "onClick", g.trigger(d, [c])
                }), j = c, h.removeClass(e.current), i.addClass(e.current), f))
            },
            getConf: function() {
                return e
            },
            getTabs: function() {
                return h
            },
            getPanes: function() {
                return i
            },
            getCurrentPane: function() {
                return i.eq(j)
            },
            getCurrentTab: function() {
                return h.eq(j)
            },
            getIndex: function() {
                return j
            },
            next: function() {
                return f.click(j + 1)
            },
            prev: function() {
                return f.click(j - 1)
            },
            destroy: function() {
                return h.unbind(e.event).removeClass(e.current), i.find("a[href^=#]").unbind("click.T"), f
            }
        }), a.each("onBeforeClick,onClick".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).bind(c, e[c]), f[c] = function(b) {
                return b && a(f).bind(c, b), f
            }
        }), e.history && a.fn.history && (a.tools.history.init(h), e.event = "history"), h.each(function(b) {
            a(this).bind(e.event, function(a) {
                return f.click(b, a), a.preventDefault()
            })
        }), i.find("a[href^=#]").bind("click.T", function(b) {
            f.click(a(this).attr("href"), b)
        }), location.hash && "a" == e.tabs && c.find("[href=" + location.hash + "]").length ? f.click(location.hash) : (0 === e.initialIndex || e.initialIndex > 0) && f.click(e.initialIndex)
    }
    a.tools = a.tools || {
        version: "v1.2.5"
    }, a.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialIndex: 0,
            event: "click",
            rotate: !1,
            history: !1
        },
        addEffect: function(a, c) {
            b[a] = c
        }
    };
    var c, b = {
        "default": function(a, b) {
            this.getPanes().hide().eq(a).show(), b.call()
        },
        fade: function(a, b) {
            var c = this.getConf(),
                d = c.fadeOutSpeed,
                e = this.getPanes();
            d ? e.fadeOut(d) : e.hide(), e.eq(a).fadeIn(c.fadeInSpeed, b)
        },
        slide: function(a, b) {
            this.getPanes().slideUp(200), this.getPanes().eq(a).slideDown(400, b)
        },
        ajax: function(a, b) {
            this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b)
        }
    };
    a.tools.tabs.addEffect("horizontal", function(b, d) {
        c || (c = this.getPanes().eq(0).width()), this.getCurrentPane().animate({
            width: 0
        }, function() {
            a(this).hide()
        }), this.getPanes().eq(b).animate({
            width: c
        }, function() {
            a(this).show(), d.call()
        })
    }), a.fn.tabs = function(b, c) {
        var e = this.data("tabs");
        return e && (e.destroy(), this.removeData("tabs")), a.isFunction(c) && (c = {
            onBeforeClick: c
        }), c = a.extend({}, a.tools.tabs.conf, c), this.each(function() {
            e = new d(a(this), b, c), a(this).data("tabs", e)
        }), c.api ? e : this
    }
}(jQuery),
function($, window, document, undefined) {
    "use strict";
    var old = $.fn.twbsPagination,
        TwbsPagination = function(element, options) {
            if (this.$element = $(element), this.options = $.extend({}, $.fn.twbsPagination.defaults, options), this.options.startPage < 1 || this.options.startPage > this.options.totalPages) throw new Error("Start page option is incorrect");
            if (this.options.totalPages = parseInt(this.options.totalPages), isNaN(this.options.totalPages)) throw new Error("Total pages option is not correct!");
            if (this.options.visiblePages = parseInt(this.options.visiblePages), isNaN(this.options.visiblePages)) throw new Error("Visible pages option is not correct!");
            if (this.options.totalPages < this.options.visiblePages && (this.options.visiblePages = this.options.totalPages), this.options.onPageClick instanceof Function && this.$element.first().bind("page", this.options.onPageClick), this.options.href) {
                var m, regexp = this.options.href.replace(/[-\/\\^$*+?.|[\]]/g, "\\$&");
                regexp = regexp.replace(this.options.hrefVariable, "(\\d+)"), null != (m = new RegExp(regexp, "i").exec(window.location.href)) && (this.options.startPage = parseInt(m[1], 10))
            }
            var tagName = "function" == typeof this.$element.prop ? this.$element.prop("tagName") : this.$element.attr("tagName");
            return this.$listContainer = "UL" === tagName ? this.$element : $("<ul></ul>"), this.$listContainer.addClass(this.options.paginationClass), "UL" !== tagName && this.$element.append(this.$listContainer), this.render(this.getPages(this.options.startPage)), this.setupEvents(), this
        };
    TwbsPagination.prototype = {
        constructor: TwbsPagination,
        destroy: function() {
            return this.$element.empty(), this.$element.removeData("twbs-pagination"), this.$element.unbind("page"), this
        },
        show: function(page) {
            if (page < 1 || page > this.options.totalPages) throw new Error("Page is incorrect.");
            return this.render(this.getPages(page)), this.setupEvents(), this.$element.trigger("page", page), this
        },
        buildListItems: function(pages) {
            var $listItems = $();
            if (this.options.first && ($listItems = $listItems.add(this.buildItem("first", 1))), this.options.prev) {
                var prev = pages.currentPage > 1 ? pages.currentPage - 1 : this.options.loop ? this.options.totalPages : 1;
                $listItems = $listItems.add(this.buildItem("prev", prev))
            }
            for (var i = 0; i < pages.numeric.length; i++) $listItems = $listItems.add(this.buildItem("page", pages.numeric[i]));
            if (this.options.next) {
                var next = pages.currentPage < this.options.totalPages ? pages.currentPage + 1 : this.options.loop ? 1 : this.options.totalPages;
                $listItems = $listItems.add(this.buildItem("next", next))
            }
            return this.options.last && ($listItems = $listItems.add(this.buildItem("last", this.options.totalPages))), $listItems
        },
        buildItem: function(type, page) {
            var itemContainer = $("<li></li>"),
                itemContent = $("<a></a>"),
                itemText = null;
            switch (type) {
                case "page":
                    itemText = page, itemContainer.addClass(this.options.pageClass);
                    break;
                case "first":
                    itemText = this.options.first, itemContainer.addClass(this.options.firstClass);
                    break;
                case "prev":
                    itemText = this.options.prev, itemContainer.addClass(this.options.prevClass);
                    break;
                case "next":
                    itemText = this.options.next, itemContainer.addClass(this.options.nextClass);
                    break;
                case "last":
                    itemText = this.options.last, itemContainer.addClass(this.options.lastClass)
            }
            return itemContainer.data("page", page), itemContainer.data("page-type", type), itemContainer.append(itemContent.attr("href", this.makeHref(page)).html(itemText)), itemContainer
        },
        getPages: function(currentPage) {
            var pages = [],
                half = Math.floor(this.options.visiblePages / 2),
                start = currentPage - half + 1 - this.options.visiblePages % 2,
                end = currentPage + half;
            start <= 0 && (start = 1, end = this.options.visiblePages), end > this.options.totalPages && (start = this.options.totalPages - this.options.visiblePages + 1, end = this.options.totalPages);
            for (var itPage = start; itPage <= end;) pages.push(itPage), itPage++;
            return {
                currentPage: currentPage,
                numeric: pages
            }
        },
        render: function(pages) {
            this.$listContainer.children().remove(), this.$listContainer.append(this.buildListItems(pages));
            var children = this.$listContainer.children();
            children.filter(function() {
                return $(this).data("page") === pages.currentPage && "page" === $(this).data("page-type")
            }).addClass(this.options.activeClass), children.filter(function() {
                return "first" === $(this).data("page-type")
            }).toggleClass(this.options.disabledClass, 1 === pages.currentPage), children.filter(function() {
                return "last" === $(this).data("page-type")
            }).toggleClass(this.options.disabledClass, pages.currentPage === this.options.totalPages), children.filter(function() {
                return "prev" === $(this).data("page-type")
            }).toggleClass(this.options.disabledClass, !this.options.loop && 1 === pages.currentPage), children.filter(function() {
                return "next" === $(this).data("page-type")
            }).toggleClass(this.options.disabledClass, !this.options.loop && pages.currentPage === this.options.totalPages)
        },
        setupEvents: function() {
            var base = this;
            this.$listContainer.find("li").each(function() {
                var $this = $(this);
                if ($this.off(), $this.hasClass(base.options.disabledClass) || $this.hasClass(base.options.activeClass)) return void $this.click(function(evt) {
                    evt.preventDefault()
                });
                $this.click(function(evt) {
                    !base.options.href && evt.preventDefault(), base.show(parseInt($this.data("page"), 10))
                })
            })
        },
        makeHref: function(c) {
            return this.options.href ? this.options.href.replace(this.options.hrefVariable, c) : "#"
        }
    }, $.fn.twbsPagination = function(option) {
        var methodReturn, args = Array.prototype.slice.call(arguments, 1),
            $this = $(this),
            data = $this.data("twbs-pagination"),
            options = "object" == typeof option && option;
        return data || $this.data("twbs-pagination", data = new TwbsPagination(this, options)), "string" == typeof option && (methodReturn = data[option].apply(data, args)), methodReturn === undefined ? $this : methodReturn
    }, $.fn.twbsPagination.defaults = {
        totalPages: 0,
        startPage: 1,
        visiblePages: 5,
        href: !1,
        hrefVariable: "{{number}}",
        first: "First",
        prev: "Previous",
        next: "Next",
        last: "Last",
        loop: !1,
        onPageClick: null,
        paginationClass: "pagination",
        nextClass: "next",
        prevClass: "prev",
        lastClass: "last",
        firstClass: "first",
        pageClass: "page",
        activeClass: "active",
        disabledClass: "disabled"
    }, $.fn.twbsPagination.Constructor = TwbsPagination, $.fn.twbsPagination.noConflict = function() {
        return $.fn.twbsPagination = old, this
    }
}(jQuery, window, document),
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
function(window, document) {
    "use strict";

    function IntersectionObserverEntry(entry) {
        this.time = entry.time, this.target = entry.target, this.rootBounds = entry.rootBounds, this.boundingClientRect = entry.boundingClientRect, this.intersectionRect = entry.intersectionRect || getEmptyRect(), this.isIntersecting = !!entry.intersectionRect;
        var targetRect = this.boundingClientRect,
            targetArea = targetRect.width * targetRect.height,
            intersectionRect = this.intersectionRect,
            intersectionArea = intersectionRect.width * intersectionRect.height;
        this.intersectionRatio = targetArea ? Number((intersectionArea / targetArea).toFixed(4)) : this.isIntersecting ? 1 : 0
    }

    function IntersectionObserver(callback, opt_options) {
        var options = opt_options || {};
        if ("function" != typeof callback) throw new Error("callback must be a function");
        if (options.root && 1 != options.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = callback, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(options.rootMargin), this.thresholds = this._initThresholds(options.threshold), this.root = options.root || null, this.rootMargin = this._rootMarginValues.map(function(margin) {
            return margin.value + margin.unit
        }).join(" ")
    }

    function now() {
        return window.performance && performance.now && performance.now()
    }

    function throttle(fn, timeout) {
        var timer = null;
        return function() {
            timer || (timer = setTimeout(function() {
                fn(), timer = null
            }, timeout))
        }
    }

    function addEvent(node, event, fn, opt_useCapture) {
        "function" == typeof node.addEventListener ? node.addEventListener(event, fn, opt_useCapture || !1) : "function" == typeof node.attachEvent && node.attachEvent("on" + event, fn)
    }

    function removeEvent(node, event, fn, opt_useCapture) {
        "function" == typeof node.removeEventListener ? node.removeEventListener(event, fn, opt_useCapture || !1) : "function" == typeof node.detatchEvent && node.detatchEvent("on" + event, fn)
    }

    function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top),
            bottom = Math.min(rect1.bottom, rect2.bottom),
            left = Math.max(rect1.left, rect2.left),
            right = Math.min(rect1.right, rect2.right),
            width = right - left,
            height = bottom - top;
        return width >= 0 && height >= 0 && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
        }
    }

    function getBoundingClientRect(el) {
        var rect;
        try {
            rect = el.getBoundingClientRect()
        } catch (err) {}
        return rect ? (rect.width && rect.height || (rect = {
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        }), rect) : getEmptyRect()
    }

    function getEmptyRect() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }

    function containsDeep(parent, child) {
        for (var node = child; node;) {
            if (node == parent) return !0;
            node = getParentNode(node)
        }
        return !1
    }

    function getParentNode(node) {
        var parent = node.parentNode;
        return parent && 11 == parent.nodeType && parent.host ? parent.host : parent && parent.assignedSlot ? parent.assignedSlot.parentNode : parent
    }
    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) return void("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
            return this.intersectionRatio > 0
        }
    }));
    var registry = [];
    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100, IntersectionObserver.prototype.POLL_INTERVAL = null, IntersectionObserver.prototype.USE_MUTATION_OBSERVER = !0, IntersectionObserver.prototype.observe = function(target) {
        if (!this._observationTargets.some(function(item) {
                return item.element == target
            })) {
            if (!target || 1 != target.nodeType) throw new Error("target must be an Element");
            this._registerInstance(), this._observationTargets.push({
                element: target,
                entry: null
            }), this._monitorIntersections(), this._checkForIntersections()
        }
    }, IntersectionObserver.prototype.unobserve = function(target) {
        this._observationTargets = this._observationTargets.filter(function(item) {
            return item.element != target
        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
    }, IntersectionObserver.prototype.disconnect = function() {
        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
    }, IntersectionObserver.prototype.takeRecords = function() {
        var records = this._queuedEntries.slice();
        return this._queuedEntries = [], records
    }, IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
        var threshold = opt_threshold || [0];
        return Array.isArray(threshold) || (threshold = [threshold]), threshold.sort().filter(function(t, i, a) {
            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
            return t !== a[i - 1]
        })
    }, IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
        var marginString = opt_rootMargin || "0px",
            margins = marginString.split(/\s+/).map(function(margin) {
                var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
                if (!parts) throw new Error("rootMargin must be specified in pixels or percent");
                return {
                    value: parseFloat(parts[1]),
                    unit: parts[2]
                }
            });
        return margins[1] = margins[1] || margins[0], margins[2] = margins[2] || margins[0], margins[3] = margins[3] || margins[1], margins
    }, IntersectionObserver.prototype._monitorIntersections = function() {
        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (addEvent(window, "resize", this._checkForIntersections, !0), addEvent(document, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    }, IntersectionObserver.prototype._unmonitorIntersections = function() {
        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, removeEvent(window, "resize", this._checkForIntersections, !0), removeEvent(document, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
    }, IntersectionObserver.prototype._checkForIntersections = function() {
        var rootIsInDom = this._rootIsInDom(),
            rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
        this._observationTargets.forEach(function(item) {
            var target = item.element,
                targetRect = getBoundingClientRect(target),
                rootContainsTarget = this._rootContainsTarget(target),
                oldEntry = item.entry,
                intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect),
                newEntry = item.entry = new IntersectionObserverEntry({
                    time: now(),
                    target: target,
                    boundingClientRect: targetRect,
                    rootBounds: rootRect,
                    intersectionRect: intersectionRect
                });
            oldEntry ? rootIsInDom && rootContainsTarget ? this._hasCrossedThreshold(oldEntry, newEntry) && this._queuedEntries.push(newEntry) : oldEntry && oldEntry.isIntersecting && this._queuedEntries.push(newEntry) : this._queuedEntries.push(newEntry)
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
    }, IntersectionObserver.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
        if ("none" != window.getComputedStyle(target).display) {
            for (var targetRect = getBoundingClientRect(target), intersectionRect = targetRect, parent = getParentNode(target), atRoot = !1; !atRoot;) {
                var parentRect = null,
                    parentComputedStyle = 1 == parent.nodeType ? window.getComputedStyle(parent) : {};
                if ("none" == parentComputedStyle.display) return;
                if (parent == this.root || parent == document ? (atRoot = !0, parentRect = rootRect) : parent != document.body && parent != document.documentElement && "visible" != parentComputedStyle.overflow && (parentRect = getBoundingClientRect(parent)), parentRect && !(intersectionRect = computeRectIntersection(parentRect, intersectionRect))) break;
                parent = getParentNode(parent)
            }
            return intersectionRect
        }
    }, IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root) rootRect = getBoundingClientRect(this.root);
        else {
            var html = document.documentElement,
                body = document.body;
            rootRect = {
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
            }
        }
        return this._expandRectByRootMargin(rootRect)
    }, IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) {
                return "px" == margin.unit ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100
            }),
            newRect = {
                top: rect.top - margins[0],
                right: rect.right + margins[1],
                bottom: rect.bottom + margins[2],
                left: rect.left - margins[3]
            };
        return newRect.width = newRect.right - newRect.left, newRect.height = newRect.bottom - newRect.top, newRect
    }, IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
        var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1,
            newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
        if (oldRatio !== newRatio)
            for (var i = 0; i < this.thresholds.length; i++) {
                var threshold = this.thresholds[i];
                if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio != threshold < newRatio) return !0
            }
    }, IntersectionObserver.prototype._rootIsInDom = function() {
        return !this.root || containsDeep(document, this.root)
    }, IntersectionObserver.prototype._rootContainsTarget = function(target) {
        return containsDeep(this.root || document, target)
    }, IntersectionObserver.prototype._registerInstance = function() {
        registry.indexOf(this) < 0 && registry.push(this)
    }, IntersectionObserver.prototype._unregisterInstance = function() {
        var index = registry.indexOf(this); - 1 != index && registry.splice(index, 1)
    }, window.IntersectionObserver = IntersectionObserver, window.IntersectionObserverEntry = IntersectionObserverEntry
}(window, document),
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.8.7
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2018 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/
function() {
    var $, AbstractChosen, Chosen, SelectParser, bind = function(fn, me) {
            return function() {
                return fn.apply(me, arguments)
            }
        },
        extend = function(child, parent) {
            function ctor() {
                this.constructor = child
            }
            for (var key in parent) hasProp.call(parent, key) && (child[key] = parent[key]);
            return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
        },
        hasProp = {}.hasOwnProperty;
    SelectParser = function() {
        function SelectParser() {
            this.options_index = 0, this.parsed = []
        }
        return SelectParser.prototype.add_node = function(child) {
            return "OPTGROUP" === child.nodeName.toUpperCase() ? this.add_group(child) : this.add_option(child)
        }, SelectParser.prototype.add_group = function(group) {
            var group_position, i, len, option, ref, results1;
            for (group_position = this.parsed.length, this.parsed.push({
                    array_index: group_position,
                    group: !0,
                    label: group.label,
                    title: group.title ? group.title : void 0,
                    children: 0,
                    disabled: group.disabled,
                    classes: group.className
                }), ref = group.childNodes, results1 = [], i = 0, len = ref.length; i < len; i++) option = ref[i], results1.push(this.add_option(option, group_position, group.disabled));
            return results1
        }, SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
            if ("OPTION" === option.nodeName.toUpperCase()) return "" !== option.text ? (null != group_position && (this.parsed[group_position].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: option.value,
                text: option.text,
                html: option.innerHTML,
                title: option.title ? option.title : void 0,
                selected: option.selected,
                disabled: !0 === group_disabled ? group_disabled : option.disabled,
                group_array_index: group_position,
                group_label: null != group_position ? this.parsed[group_position].label : null,
                classes: option.className,
                style: option.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, SelectParser
    }(), SelectParser.select_to_array = function(select) {
        var child, i, len, parser, ref;
        for (parser = new SelectParser, ref = select.childNodes, i = 0, len = ref.length; i < len; i++) child = ref[i], parser.add_node(child);
        return parser.parsed
    }, AbstractChosen = function() {
        function AbstractChosen(form_field, options1) {
            this.form_field = form_field, this.options = null != options1 ? options1 : {}, this.label_click_handler = bind(this.label_click_handler, this), AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return AbstractChosen.prototype.set_default_values = function() {
            return this.click_test_action = function(_this) {
                return function(evt) {
                    return _this.test_active_click(evt)
                }
            }(this), this.activate_action = function(_this) {
                return function(evt) {
                    return _this.activate_field(evt)
                }
            }(this), this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select
        }, AbstractChosen.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
        }, AbstractChosen.prototype.choice_label = function(item) {
            return this.include_group_label_in_selected && null != item.group_label ? "<b class='group-name'>" + this.escape_html(item.group_label) + "</b>" + item.html : item.html
        }, AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, AbstractChosen.prototype.input_focus = function() {
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function(_this) {
                    return function() {
                        return _this.container_mousedown()
                    }
                }(this), 50)
            } else if (!this.active_field) return this.activate_field()
        }, AbstractChosen.prototype.input_blur = function() {
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function(_this) {
                return function() {
                    return _this.blur_test()
                }
            }(this), 100)
        }, AbstractChosen.prototype.label_click_handler = function(evt) {
            return this.is_multiple ? this.container_mousedown(evt) : this.activate_field()
        }, AbstractChosen.prototype.results_option_build = function(options) {
            var content, data, data_content, i, len, ref, shown_results;
            for (content = "", shown_results = 0, ref = this.results_data, i = 0, len = ref.length; i < len && (data = ref[i], data_content = "", data_content = data.group ? this.result_add_group(data) : this.result_add_option(data), "" !== data_content && (shown_results++, content += data_content), (null != options ? options.first : void 0) && (data.selected && this.is_multiple ? this.choice_build(data) : data.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(data))), !(shown_results >= this.max_shown_results)); i++);
            return content
        }, AbstractChosen.prototype.result_add_option = function(option) {
            var classes, option_el;
            return option.search_match && this.include_option_in_results(option) ? (classes = [], option.disabled || option.selected && this.is_multiple || classes.push("active-result"), !option.disabled || option.selected && this.is_multiple || classes.push("disabled-result"), option.selected && classes.push("result-selected"), null != option.group_array_index && classes.push("group-option"), "" !== option.classes && classes.push(option.classes), option_el = document.createElement("li"), option_el.className = classes.join(" "), option.style && (option_el.style.cssText = option.style), option_el.setAttribute("data-option-array-index", option.array_index), option_el.innerHTML = option.highlighted_html || option.html, option.title && (option_el.title = option.title), this.outerHTML(option_el)) : ""
        }, AbstractChosen.prototype.result_add_group = function(group) {
            var classes, group_el;
            return (group.search_match || group.group_match) && group.active_options > 0 ? (classes = [], classes.push("group-result"), group.classes && classes.push(group.classes), group_el = document.createElement("li"), group_el.className = classes.join(" "), group_el.innerHTML = group.highlighted_html || this.escape_html(group.label), group.title && (group_el.title = group.title), this.outerHTML(group_el)) : ""
        }, AbstractChosen.prototype.results_update_field = function() {
            if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
        }, AbstractChosen.prototype.reset_single_select_options = function() {
            var i, len, ref, result, results1;
            for (ref = this.results_data, results1 = [], i = 0, len = ref.length; i < len; i++) result = ref[i], result.selected ? results1.push(result.selected = !1) : results1.push(void 0);
            return results1
        }, AbstractChosen.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, AbstractChosen.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, AbstractChosen.prototype.winnow_results = function(options) {
            var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
            for (this.no_results_clear(), results = 0, query = this.get_search_text(), escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), regex = this.get_search_regex(escapedQuery), ref = this.results_data, i = 0, len = ref.length; i < len; i++) option = ref[i], option.search_match = !1, results_group = null, search_match = null, option.highlighted_html = "", this.include_option_in_results(option) && (option.group && (option.group_match = !1, option.active_options = 0), null != option.group_array_index && this.results_data[option.group_array_index] && (results_group = this.results_data[option.group_array_index], 0 === results_group.active_options && results_group.search_match && (results += 1), results_group.active_options += 1), text = option.group ? option.label : option.text, option.group && !this.group_search || (search_match = this.search_string_match(text, regex), option.search_match = null != search_match, option.search_match && !option.group && (results += 1), option.search_match ? (query.length && (startpos = search_match.index, prefix = text.slice(0, startpos), fix = text.slice(startpos, startpos + query.length), suffix = text.slice(startpos + query.length), option.highlighted_html = this.escape_html(prefix) + "<em>" + this.escape_html(fix) + "</em>" + this.escape_html(suffix)), null != results_group && (results_group.group_match = !0)) : null != option.group_array_index && this.results_data[option.group_array_index].search_match && (option.search_match = !0)));
            return this.result_clear_highlight(), results < 1 && query.length ? (this.update_results_content(""), this.no_results(query)) : (this.update_results_content(this.results_option_build()), (null != options ? options.skip_highlight : void 0) ? void 0 : this.winnow_results_set_highlight())
        }, AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
            var regex_flag, regex_string;
            return regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*", this.enable_split_word_search || this.search_contains || (regex_string = "^" + regex_string), regex_flag = this.case_sensitive_search ? "" : "i", new RegExp(regex_string, regex_flag)
        }, AbstractChosen.prototype.search_string_match = function(search_string, regex) {
            var match;
            return match = regex.exec(search_string), !this.search_contains && (null != match ? match[1] : void 0) && (match.index += 1), match
        }, AbstractChosen.prototype.choices_count = function() {
            var i, len, option, ref;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, ref = this.form_field.options, i = 0, len = ref.length; i < len; i++) option = ref[i], option.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, AbstractChosen.prototype.choices_click = function(evt) {
            if (evt.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show()
        }, AbstractChosen.prototype.keydown_checker = function(evt) {
            var ref, stroke;
            switch (stroke = null != (ref = evt.which) ? ref : evt.keyCode, this.search_field_scale(), 8 !== stroke && this.pending_backstroke && this.clear_backstroke(), stroke) {
                case 8:
                    this.backstroke_length = this.get_search_field_value().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(evt), this.mouse_on_container = !1;
                    break;
                case 13:
                case 27:
                    this.results_showing && evt.preventDefault();
                    break;
                case 32:
                    this.disable_search && evt.preventDefault();
                    break;
                case 38:
                    evt.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    evt.preventDefault(), this.keydown_arrow()
            }
        }, AbstractChosen.prototype.keyup_checker = function(evt) {
            var ref, stroke;
            switch (stroke = null != (ref = evt.which) ? ref : evt.keyCode, this.search_field_scale(), stroke) {
                case 8:
                    this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), this.results_search());
                    break;
                case 13:
                    evt.preventDefault(), this.results_showing && this.result_select(evt);
                    break;
                case 27:
                    this.results_showing && this.results_hide();
                    break;
                case 9:
                case 16:
                case 17:
                case 18:
                case 38:
                case 40:
                case 91:
                    break;
                default:
                    this.results_search()
            }
        }, AbstractChosen.prototype.clipboard_event_checker = function() {
            if (!this.is_disabled) return setTimeout(function(_this) {
                return function() {
                    return _this.results_search()
                }
            }(this), 50)
        }, AbstractChosen.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }, AbstractChosen.prototype.include_option_in_results = function(option) {
            return !(this.is_multiple && !this.display_selected_options && option.selected) && (!(!this.display_disabled_options && option.disabled) && !option.empty)
        }, AbstractChosen.prototype.search_results_touchstart = function(evt) {
            return this.touch_started = !0, this.search_results_mouseover(evt)
        }, AbstractChosen.prototype.search_results_touchmove = function(evt) {
            return this.touch_started = !1, this.search_results_mouseout(evt)
        }, AbstractChosen.prototype.search_results_touchend = function(evt) {
            if (this.touch_started) return this.search_results_mouseup(evt)
        }, AbstractChosen.prototype.outerHTML = function(element) {
            var tmp;
            return element.outerHTML ? element.outerHTML : (tmp = document.createElement("div"), tmp.appendChild(element), tmp.innerHTML)
        }, AbstractChosen.prototype.get_single_html = function() {
            return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
        }, AbstractChosen.prototype.get_multi_html = function() {
            return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
        }, AbstractChosen.prototype.get_no_results_html = function(terms) {
            return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + this.escape_html(terms) + "</span>\n</li>"
        }, AbstractChosen.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
        }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen
    }(), $ = jQuery, $.fn.extend({
        chosen: function(options) {
            return AbstractChosen.browser_is_supported() ? this.each(function() {
                var $this, chosen;
                if ($this = $(this), chosen = $this.data("chosen"), "destroy" === options) return void(chosen instanceof Chosen && chosen.destroy());
                chosen instanceof Chosen || $this.data("chosen", new Chosen(this, options))
            }) : this
        }
    }), Chosen = function(superClass) {
        function Chosen() {
            return Chosen.__super__.constructor.apply(this, arguments)
        }
        return extend(Chosen, superClass), Chosen.prototype.setup = function() {
                return this.form_field_jq = $(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex
            }, Chosen.prototype.set_up_html = function() {
                var container_classes, container_props;
                return container_classes = ["chosen-container"], container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && container_classes.push(this.form_field.className), this.is_rtl && container_classes.push("chosen-rtl"), container_props = {
                    "class": container_classes.join(" "),
                    title: this.form_field.title
                }, this.form_field.id.length && (container_props.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = $("<div />", container_props), this.container.width(this.container_width()), this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
            }, Chosen.prototype.on_ready = function() {
                return this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, Chosen.prototype.register_observers = function() {
                return this.container.on("touchstart.chosen", function(_this) {
                    return function(evt) {
                        _this.container_mousedown(evt)
                    }
                }(this)), this.container.on("touchend.chosen", function(_this) {
                    return function(evt) {
                        _this.container_mouseup(evt)
                    }
                }(this)), this.container.on("mousedown.chosen", function(_this) {
                    return function(evt) {
                        _this.container_mousedown(evt)
                    }
                }(this)), this.container.on("mouseup.chosen", function(_this) {
                    return function(evt) {
                        _this.container_mouseup(evt)
                    }
                }(this)), this.container.on("mouseenter.chosen", function(_this) {
                    return function(evt) {
                        _this.mouse_enter(evt)
                    }
                }(this)), this.container.on("mouseleave.chosen", function(_this) {
                    return function(evt) {
                        _this.mouse_leave(evt)
                    }
                }(this)), this.search_results.on("mouseup.chosen", function(_this) {
                    return function(evt) {
                        _this.search_results_mouseup(evt)
                    }
                }(this)), this.search_results.on("mouseover.chosen", function(_this) {
                    return function(evt) {
                        _this.search_results_mouseover(evt)
                    }
                }(this)), this.search_results.on("mouseout.chosen", function(_this) {
                    return function(evt) {
                        _this.search_results_mouseout(evt)
                    }
                }(this)), this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen", function(_this) {
                    return function(evt) {
                        _this.search_results_mousewheel(evt)
                    }
                }(this)), this.search_results.on("touchstart.chosen", function(_this) {
                    return function(evt) {
                        _this.search_results_touchstart(evt)
                    }
                }(this)), this.search_results.on("touchmove.chosen", function(_this) {
                    return function(evt) {
                        _this.search_results_touchmove(evt)
                    }
                }(this)), this.search_results.on("touchend.chosen", function(_this) {
                    return function(evt) {
                        _this.search_results_touchend(evt)
                    }
                }(this)), this.form_field_jq.on("chosen:updated.chosen", function(_this) {
                    return function(evt) {
                        _this.results_update_field(evt)
                    }
                }(this)), this.form_field_jq.on("chosen:activate.chosen", function(_this) {
                    return function(evt) {
                        _this.activate_field(evt)
                    }
                }(this)), this.form_field_jq.on("chosen:open.chosen", function(_this) {
                    return function(evt) {
                        _this.container_mousedown(evt)
                    }
                }(this)), this.form_field_jq.on("chosen:close.chosen", function(_this) {
                    return function(evt) {
                        _this.close_field(evt)
                    }
                }(this)), this.search_field.on("blur.chosen", function(_this) {
                    return function(evt) {
                        _this.input_blur(evt)
                    }
                }(this)), this.search_field.on("keyup.chosen", function(_this) {
                    return function(evt) {
                        _this.keyup_checker(evt)
                    }
                }(this)), this.search_field.on("keydown.chosen", function(_this) {
                    return function(evt) {
                        _this.keydown_checker(evt)
                    }
                }(this)), this.search_field.on("focus.chosen", function(_this) {
                    return function(evt) {
                        _this.input_focus(evt)
                    }
                }(this)), this.search_field.on("cut.chosen", function(_this) {
                    return function(evt) {
                        _this.clipboard_event_checker(evt)
                    }
                }(this)), this.search_field.on("paste.chosen", function(_this) {
                    return function(evt) {
                        _this.clipboard_event_checker(evt)
                    }
                }(this)), this.is_multiple ? this.search_choices.on("click.chosen", function(_this) {
                    return function(evt) {
                        _this.choices_click(evt)
                    }
                }(this)) : this.container.on("click.chosen", function(evt) {
                    evt.preventDefault()
                })
            }, Chosen.prototype.destroy = function() {
                return $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), this.form_field_label.length > 0 && this.form_field_label.off("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, Chosen.prototype.search_field_disabled = function() {
                return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, this.is_multiple || this.selected_item.off("focus.chosen", this.activate_field), this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.on("focus.chosen", this.activate_field)
            }, Chosen.prototype.container_mousedown = function(evt) {
                var ref;
                if (!this.is_disabled) return !evt || "mousedown" !== (ref = evt.type) && "touchstart" !== ref || this.results_showing || evt.preventDefault(), null != evt && $(evt.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !evt || $(evt.target)[0] !== this.selected_item[0] && !$(evt.target).parents("a.chosen-single").length || (evt.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), $(this.container[0].ownerDocument).on("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, Chosen.prototype.container_mouseup = function(evt) {
                if ("ABBR" === evt.target.nodeName && !this.is_disabled) return this.results_reset(evt)
            }, Chosen.prototype.search_results_mousewheel = function(evt) {
                var delta;
                if (evt.originalEvent && (delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail), null != delta) return evt.preventDefault(), "DOMMouseScroll" === evt.type && (delta *= 40), this.search_results.scrollTop(delta + this.search_results.scrollTop())
            }, Chosen.prototype.blur_test = function() {
                if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
            }, Chosen.prototype.close_field = function() {
                return $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), this.search_field.blur()
            }, Chosen.prototype.activate_field = function() {
                if (!this.is_disabled) return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, Chosen.prototype.test_active_click = function(evt) {
                var active_container;
                return active_container = $(evt.target).closest(".chosen-container"), active_container.length && this.container[0] === active_container[0] ? this.active_field = !0 : this.close_field()
            }, Chosen.prototype.results_build = function() {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, Chosen.prototype.result_do_highlight = function(el) {
                var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
                if (el.length) {
                    if (this.result_clear_highlight(), this.result_highlight = el, this.result_highlight.addClass("highlighted"), maxHeight = parseInt(this.search_results.css("maxHeight"), 10), visible_top = this.search_results.scrollTop(), visible_bottom = maxHeight + visible_top, high_top = this.result_highlight.position().top + this.search_results.scrollTop(), (high_bottom = high_top + this.result_highlight.outerHeight()) >= visible_bottom) return this.search_results.scrollTop(high_bottom - maxHeight > 0 ? high_bottom - maxHeight : 0);
                    if (high_top < visible_top) return this.search_results.scrollTop(high_top)
                }
            }, Chosen.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, Chosen.prototype.results_show = function() {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, Chosen.prototype.update_results_content = function(content) {
                return this.search_results.html(content)
            }, Chosen.prototype.results_hide = function() {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, Chosen.prototype.set_tab_index = function() {
                var ti;
                if (this.form_field.tabIndex) return ti = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = ti
            }, Chosen.prototype.set_label_behavior = function() {
                if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = $("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.on("click.chosen", this.label_click_handler)
            }, Chosen.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, Chosen.prototype.search_results_mouseup = function(evt) {
                var target;
                if (target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first(), target.length) return this.result_highlight = target, this.result_select(evt), this.search_field.focus()
            }, Chosen.prototype.search_results_mouseover = function(evt) {
                var target;
                if (target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first()) return this.result_do_highlight(target)
            }, Chosen.prototype.search_results_mouseout = function(evt) {
                if ($(evt.target).hasClass("active-result") || $(evt.target).parents(".active-result").first()) return this.result_clear_highlight()
            }, Chosen.prototype.choice_build = function(item) {
                var choice, close_link;
                return choice = $("<li />", {
                    "class": "search-choice"
                }).html("<span>" + this.choice_label(item) + "</span>"), item.disabled ? choice.addClass("search-choice-disabled") : (close_link = $("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": item.array_index
                }), close_link.on("click.chosen", function(_this) {
                    return function(evt) {
                        return _this.choice_destroy_link_click(evt)
                    }
                }(this)), choice.append(close_link)), this.search_container.before(choice)
            }, Chosen.prototype.choice_destroy_link_click = function(evt) {
                if (evt.preventDefault(), evt.stopPropagation(), !this.is_disabled) return this.choice_destroy($(evt.target))
            }, Chosen.prototype.choice_destroy = function(link) {
                if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), link.parents("li").first().remove(), this.search_field_scale()
            }, Chosen.prototype.results_reset = function() {
                if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.trigger_form_field_change(), this.active_field) return this.results_hide()
            }, Chosen.prototype.results_reset_cleanup = function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, Chosen.prototype.result_select = function(evt) {
                var high, item;
                if (this.result_highlight) return high = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? high.removeClass("active-result") : this.reset_single_select_options(), high.addClass("result-selected"), item = this.results_data[high[0].getAttribute("data-option-array-index")], item.selected = !0, this.form_field.options[item.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(item) : this.single_set_selected_text(this.choice_label(item)), this.is_multiple && (!this.hide_results_on_select || evt.metaKey || evt.ctrlKey) ? evt.metaKey || evt.ctrlKey ? this.winnow_results({
                    skip_highlight: !0
                }) : (this.search_field.val(""), this.winnow_results()) : (this.results_hide(), this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
                    selected: this.form_field.options[item.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, evt.preventDefault(), this.search_field_scale())
            }, Chosen.prototype.single_set_selected_text = function(text) {
                return null == text && (text = this.default_text), text === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(text)
            }, Chosen.prototype.result_deselect = function(pos) {
                var result_data;
                return result_data = this.results_data[pos], !this.form_field.options[result_data.options_index].disabled && (result_data.selected = !1, this.form_field.options[result_data.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
                    deselected: this.form_field.options[result_data.options_index].value
                }), this.search_field_scale(), !0)
            }, Chosen.prototype.single_deselect_control_build = function() {
                if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
            }, Chosen.prototype.get_search_field_value = function() {
                return this.search_field.val()
            }, Chosen.prototype.get_search_text = function() {
                return $.trim(this.get_search_field_value())
            }, Chosen.prototype.escape_html = function(text) {
                return $("<div/>").text(text).html()
            }, Chosen.prototype.winnow_results_set_highlight = function() {
                var do_high, selected_results;
                if (selected_results = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), null != (do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(do_high)
            }, Chosen.prototype.no_results = function(terms) {
                var no_results_html;
                return no_results_html = this.get_no_results_html(terms), this.search_results.append(no_results_html), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, Chosen.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, Chosen.prototype.keydown_arrow = function() {
                var next_sib;
                return this.results_showing && this.result_highlight ? (next_sib = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(next_sib) : void 0 : this.results_show()
            }, Chosen.prototype.keyup_arrow = function() {
                var prev_sibs;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (prev_sibs = this.result_highlight.prevAll("li.active-result"), prev_sibs.length ? this.result_do_highlight(prev_sibs.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, Chosen.prototype.keydown_backstroke = function() {
                var next_available_destroy;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (next_available_destroy = this.search_container.siblings("li.search-choice").last(), next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled") ? (this.pending_backstroke = next_available_destroy, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, Chosen.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            },
            Chosen.prototype.search_field_scale = function() {
                var div, i, len, style, style_block, styles, width;
                if (this.is_multiple) {
                    for (style_block = {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px",
                            display: "none",
                            whiteSpace: "pre"
                        }, styles = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"], i = 0, len = styles.length; i < len; i++) style = styles[i], style_block[style] = this.search_field.css(style);
                    return div = $("<div />").css(style_block), div.text(this.get_search_field_value()), $("body").append(div), width = div.width() + 25, div.remove(), this.container.is(":visible") && (width = Math.min(this.container.outerWidth() - 10, width)), this.search_field.width(width)
                }
            }, Chosen.prototype.trigger_form_field_change = function(extra) {
                return this.form_field_jq.trigger("input", extra), this.form_field_jq.trigger("change", extra)
            }, Chosen
    }(AbstractChosen)
}.call(this),
    function(root, factory) {
        "function" == typeof define && define.amd ? define("i18n", function() {
            return factory(root)
        }) : "object" == typeof module && module.exports ? module.exports = factory(root) : root.I18n = factory(root)
    }(this, function(global) {
        "use strict";
        var I18n = global && global.I18n || {},
            slice = Array.prototype.slice,
            padding = function(number) {
                return ("0" + number.toString()).substr(-2)
            },
            toFixed = function(number, precision) {
                return decimalAdjust("round", number, -precision).toFixed(precision)
            },
            isObject = function(obj) {
                var type = typeof obj;
                return "function" === type || "object" === type
            },
            isFunction = function(func) {
                return "function" == typeof func
            },
            isSet = function(value) {
                return void 0 !== value && null !== value
            },
            isArray = function(val) {
                return Array.isArray ? Array.isArray(val) : "[object Array]" === Object.prototype.toString.call(val)
            },
            isString = function(val) {
                return "string" == typeof value || "[object String]" === Object.prototype.toString.call(val)
            },
            isNumber = function(val) {
                return "number" == typeof val || "[object Number]" === Object.prototype.toString.call(val)
            },
            isBoolean = function(val) {
                return !0 === val || !1 === val
            },
            decimalAdjust = function(type, value, exp) {
                return void 0 === exp || 0 == +exp ? Math[type](value) : (value = +value, exp = +exp, isNaN(value) || "number" != typeof exp || exp % 1 != 0 ? NaN : (value = value.toString().split("e"), value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))), value = value.toString().split("e"), +(value[0] + "e" + (value[1] ? +value[1] + exp : exp))))
            },
            lazyEvaluate = function(message, scope) {
                return isFunction(message) ? message(scope) : message
            },
            merge = function(dest, obj) {
                var key, value;
                for (key in obj) obj.hasOwnProperty(key) && (value = obj[key], isString(value) || isNumber(value) || isBoolean(value) ? dest[key] = value : (null == dest[key] && (dest[key] = {}), merge(dest[key], value)));
                return dest
            },
            DATE = {
                day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                abbr_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                month_names: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                abbr_month_names: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridian: ["AM", "PM"]
            },
            NUMBER_FORMAT = {
                precision: 3,
                separator: ".",
                delimiter: ",",
                strip_insignificant_zeros: !1
            },
            CURRENCY_FORMAT = {
                unit: "$",
                precision: 2,
                format: "%u%n",
                sign_first: !0,
                delimiter: ",",
                separator: "."
            },
            PERCENTAGE_FORMAT = {
                unit: "%",
                precision: 3,
                format: "%n%u",
                separator: ".",
                delimiter: ""
            },
            SIZE_UNITS = [null, "kb", "mb", "gb", "tb"],
            DEFAULT_OPTIONS = {
                defaultLocale: "en",
                locale: "en",
                defaultSeparator: ".",
                placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
                fallbacks: !1,
                translations: {},
                missingBehaviour: "message",
                missingTranslationPrefix: ""
            };
        return I18n.reset = function() {
            var key;
            for (key in DEFAULT_OPTIONS) this[key] = DEFAULT_OPTIONS[key]
        }, I18n.initializeOptions = function() {
            var key;
            for (key in DEFAULT_OPTIONS) isSet(this[key]) || (this[key] = DEFAULT_OPTIONS[key])
        }, I18n.initializeOptions(), I18n.locales = {}, I18n.locales.get = function(locale) {
            var result = this[locale] || this[I18n.locale] || this["default"];
            return isFunction(result) && (result = result(locale)), !1 === isArray(result) && (result = [result]), result
        }, I18n.locales["default"] = function(locale) {
            var locales = [],
                list = [];
            return locale && locales.push(locale), !locale && I18n.locale && locales.push(I18n.locale), I18n.fallbacks && I18n.defaultLocale && locales.push(I18n.defaultLocale), locales.forEach(function(locale) {
                var localeParts = locale.split("-"),
                    firstFallback = null,
                    secondFallback = null;
                3 === localeParts.length ? (firstFallback = localeParts[0], secondFallback = [localeParts[0], localeParts[1]].join("-")) : 2 === localeParts.length && (firstFallback = localeParts[0]), -1 === list.indexOf(locale) && list.push(locale), I18n.fallbacks && [firstFallback, secondFallback].forEach(function(nullableFallbackLocale) {
                    void 0 !== nullableFallbackLocale && null !== nullableFallbackLocale && nullableFallbackLocale !== locale && -1 === list.indexOf(nullableFallbackLocale) && list.push(nullableFallbackLocale)
                })
            }), locales.length || locales.push("en"), list
        }, I18n.pluralization = {}, I18n.pluralization.get = function(locale) {
            return this[locale] || this[I18n.locale] || this["default"]
        }, I18n.pluralization["default"] = function(count) {
            switch (count) {
                case 0:
                    return ["zero", "other"];
                case 1:
                    return ["one"];
                default:
                    return ["other"]
            }
        }, I18n.currentLocale = function() {
            return this.locale || this.defaultLocale
        }, I18n.isSet = isSet, I18n.lookup = function(scope, options) {
            options = options || {};
            var locale, scopes, fullScope, translations, locales = this.locales.get(options.locale).slice();
            locales[0];
            for (fullScope = this.getFullScope(scope, options); locales.length;)
                if (locale = locales.shift(), scopes = fullScope.split(this.defaultSeparator), translations = this.translations[locale]) {
                    for (; scopes.length && (translations = translations[scopes.shift()]) !== undefined && null !== translations;);
                    if (translations !== undefined && null !== translations) return translations
                } if (isSet(options.defaultValue)) return lazyEvaluate(options.defaultValue, scope)
        }, I18n.pluralizationLookupWithoutFallback = function(count, locale, translations) {
            var pluralizerKey, message, pluralizer = this.pluralization.get(locale),
                pluralizerKeys = pluralizer(count);
            if (isObject(translations))
                for (; pluralizerKeys.length;)
                    if (pluralizerKey = pluralizerKeys.shift(), isSet(translations[pluralizerKey])) {
                        message = translations[pluralizerKey];
                        break
                    } return message
        }, I18n.pluralizationLookup = function(count, scope, options) {
            options = options || {};
            var locale, scopes, translations, message, locales = this.locales.get(options.locale).slice();
            locales[0];
            for (scope = this.getFullScope(scope, options); locales.length;)
                if (locale = locales.shift(), scopes = scope.split(this.defaultSeparator), translations = this.translations[locale]) {
                    for (; scopes.length && (translations = translations[scopes.shift()], isObject(translations));) 0 == scopes.length && (message = this.pluralizationLookupWithoutFallback(count, locale, translations));
                    if (null != message && message != undefined) break
                } return null != message && message != undefined || isSet(options.defaultValue) && (message = isObject(options.defaultValue) ? this.pluralizationLookupWithoutFallback(count, options.locale, options.defaultValue) : options.defaultValue, translations = options.defaultValue), {
                message: message,
                translations: translations
            }
        }, I18n.meridian = function() {
            var time = this.lookup("time"),
                date = this.lookup("date");
            return time && time.am && time.pm ? [time.am, time.pm] : date && date.meridian ? date.meridian : DATE.meridian
        }, I18n.prepareOptions = function() {
            for (var subject, args = slice.call(arguments), options = {}; args.length;)
                if ("object" == typeof(subject = args.shift()))
                    for (var attr in subject) subject.hasOwnProperty(attr) && (isSet(options[attr]) || (options[attr] = subject[attr]));
            return options
        }, I18n.createTranslationOptions = function(scope, options) {
            var translationOptions = [{
                scope: scope
            }];
            return isSet(options.defaults) && (translationOptions = translationOptions.concat(options.defaults)), isSet(options.defaultValue) && translationOptions.push({
                message: options.defaultValue
            }), translationOptions
        }, I18n.translate = function(scope, options) {
            options = options || {};
            var translation, translationOptions = this.createTranslationOptions(scope, options),
                optionsWithoutDefault = this.prepareOptions(options);
            return delete optionsWithoutDefault.defaultValue, translationOptions.some(function(translationOption) {
                if (isSet(translationOption.scope) ? translation = this.lookup(translationOption.scope, optionsWithoutDefault) : isSet(translationOption.message) && (translation = lazyEvaluate(translationOption.message, scope)), translation !== undefined && null !== translation) return !0
            }, this) ? ("string" == typeof translation ? translation = this.interpolate(translation, options) : isObject(translation) && isSet(options.count) && (translation = this.pluralize(options.count, scope, options)), translation) : this.missingTranslation(scope, options)
        }, I18n.interpolate = function(message, options) {
            options = options || {};
            var placeholder, value, name, regex, matches = message.match(this.placeholder);
            if (!matches) return message;
            for (var value; matches.length;) placeholder = matches.shift(), name = placeholder.replace(this.placeholder, "$1"), value = isSet(options[name]) ? options[name].toString().replace(/\$/gm, "_#$#_") : name in options ? this.nullPlaceholder(placeholder, message, options) : this.missingPlaceholder(placeholder, message, options), regex = new RegExp(placeholder.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}")), message = message.replace(regex, value);
            return message.replace(/_#\$#_/g, "$")
        }, I18n.pluralize = function(count, scope, options) {
            options = this.prepareOptions({
                count: String(count)
            }, options);
            var pluralizer, result;
            return result = this.pluralizationLookup(count, scope, options), result.translations == undefined || null == result.translations ? this.missingTranslation(scope, options) : result.message != undefined && null != result.message ? this.interpolate(result.message, options) : (pluralizer = this.pluralization.get(options.locale), this.missingTranslation(scope + "." + pluralizer(count)[0], options))
        }, I18n.missingTranslation = function(scope, options) {
            if ("guess" == this.missingBehaviour) {
                var s = scope.split(".").slice(-1)[0];
                return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : "") + s.replace("_", " ").replace(/([a-z])([A-Z])/g, function(match, p1, p2) {
                    return p1 + " " + p2.toLowerCase()
                })
            }
            return '[missing "' + [null != options && null != options.locale ? options.locale : this.currentLocale(), this.getFullScope(scope, options)].join(this.defaultSeparator) + '" translation]'
        }, I18n.missingPlaceholder = function(placeholder) {
            return "[missing " + placeholder + " value]"
        }, I18n.nullPlaceholder = function() {
            return I18n.missingPlaceholder.apply(I18n, arguments)
        }, I18n.toNumber = function(number, options) {
            options = this.prepareOptions(options, this.lookup("number.format"), NUMBER_FORMAT);
            var precision, formattedNumber, negative = number < 0,
                string = toFixed(Math.abs(number), options.precision).toString(),
                parts = string.split("."),
                buffer = [],
                format = options.format || "%n",
                sign = negative ? "-" : "";
            for (number = parts[0], precision = parts[1]; number.length > 0;) buffer.unshift(number.substr(Math.max(0, number.length - 3), 3)), number = number.substr(0, number.length - 3);
            return formattedNumber = buffer.join(options.delimiter), options.strip_insignificant_zeros && precision && (precision = precision.replace(/0+$/, "")), options.precision > 0 && precision && (formattedNumber += options.separator + precision), format = options.sign_first ? "%s" + format : format.replace("%n", "%s%n"), formattedNumber = format.replace("%u", options.unit).replace("%n", formattedNumber).replace("%s", sign)
        }, I18n.toCurrency = function(number, options) {
            return options = this.prepareOptions(options, this.lookup("number.currency.format"), this.lookup("number.format"), CURRENCY_FORMAT), this.toNumber(number, options)
        }, I18n.localize = function(scope, value, options) {
            switch (options || (options = {}), scope) {
                case "currency":
                    return this.toCurrency(value);
                case "number":
                    return scope = this.lookup("number.format"), this.toNumber(value, scope);
                case "percentage":
                    return this.toPercentage(value);
                default:
                    var localizedValue;
                    return localizedValue = scope.match(/^(date|time)/) ? this.toTime(scope, value) : value.toString(), this.interpolate(localizedValue, options)
            }
        }, I18n.parseDate = function(date) {
            var matches, convertedDate, fraction;
            if ("object" == typeof date) return date;
            if (matches = date.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)) {
                for (var i = 1; i <= 6; i++) matches[i] = parseInt(matches[i], 10) || 0;
                matches[2] -= 1, fraction = matches[7] ? 1e3 * ("0" + matches[7]) : null, convertedDate = matches[8] ? new Date(Date.UTC(matches[1], matches[2], matches[3], matches[4], matches[5], matches[6], fraction)) : new Date(matches[1], matches[2], matches[3], matches[4], matches[5], matches[6], fraction)
            } else "number" == typeof date ? (convertedDate = new Date, convertedDate.setTime(date)) : date.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/) ? (convertedDate = new Date, convertedDate.setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" ")))) : (date.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/), convertedDate = new Date, convertedDate.setTime(Date.parse(date)));
            return convertedDate
        }, I18n.strftime = function(date, format) {
            var options = this.lookup("date"),
                meridianOptions = I18n.meridian();
            if (options || (options = {}), options = this.prepareOptions(options, DATE), isNaN(date.getTime())) throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");
            var weekDay = date.getDay(),
                day = date.getDate(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                hour = date.getHours(),
                hour12 = hour,
                meridian = hour > 11 ? 1 : 0,
                secs = date.getSeconds(),
                mins = date.getMinutes(),
                offset = date.getTimezoneOffset(),
                absOffsetHours = Math.floor(Math.abs(offset / 60)),
                absOffsetMinutes = Math.abs(offset) - 60 * absOffsetHours,
                timezoneoffset = (offset > 0 ? "-" : "+") + (absOffsetHours.toString().length < 2 ? "0" + absOffsetHours : absOffsetHours) + (absOffsetMinutes.toString().length < 2 ? "0" + absOffsetMinutes : absOffsetMinutes);
            return hour12 > 12 ? hour12 -= 12 : 0 === hour12 && (hour12 = 12), format = format.replace("%a", options.abbr_day_names[weekDay]), format = format.replace("%A", options.day_names[weekDay]), format = format.replace("%b", options.abbr_month_names[month]), format = format.replace("%B", options.month_names[month]), format = format.replace("%d", padding(day)), format = format.replace("%e", day), format = format.replace("%-d", day), format = format.replace("%H", padding(hour)), format = format.replace("%-H", hour), format = format.replace("%I", padding(hour12)), format = format.replace("%-I", hour12), format = format.replace("%m", padding(month)), format = format.replace("%-m", month), format = format.replace("%M", padding(mins)), format = format.replace("%-M", mins), format = format.replace("%p", meridianOptions[meridian]), format = format.replace("%S", padding(secs)), format = format.replace("%-S", secs), format = format.replace("%w", weekDay), format = format.replace("%y", padding(year)), format = format.replace("%-y", padding(year).replace(/^0+/, "")), format = format.replace("%Y", year), format = format.replace("%z", timezoneoffset)
        }, I18n.toTime = function(scope, dateString) {
            var date = this.parseDate(dateString),
                format = this.lookup(scope);
            return date.toString().match(/invalid/i) ? date.toString() : format ? this.strftime(date, format) : date.toString()
        }, I18n.toPercentage = function(number, options) {
            return options = this.prepareOptions(options, this.lookup("number.percentage.format"), this.lookup("number.format"), PERCENTAGE_FORMAT), this.toNumber(number, options)
        }, I18n.toHumanSize = function(number, options) {
            for (var unit, precision, kb = 1024, size = number, iterations = 0; size >= kb && iterations < 4;) size /= kb, iterations += 1;
            return 0 === iterations ? (unit = this.t("number.human.storage_units.units.byte", {
                count: size
            }), precision = 0) : (unit = this.t("number.human.storage_units.units." + SIZE_UNITS[iterations]), precision = size - Math.floor(size) == 0 ? 0 : 1), options = this.prepareOptions(options, {
                unit: unit,
                precision: precision,
                format: "%n%u",
                delimiter: ""
            }), this.toNumber(size, options)
        }, I18n.getFullScope = function(scope, options) {
            return options = options || {}, isArray(scope) && (scope = scope.join(this.defaultSeparator)), options.scope && (scope = [options.scope, scope].join(this.defaultSeparator)), scope
        }, I18n.extend = function(obj1, obj2) {
            return void 0 === obj1 && void 0 === obj2 ? {} : merge(obj1, obj2)
        }, I18n.t = I18n.translate, I18n.l = I18n.localize, I18n.p = I18n.pluralize, I18n
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement) {
        "use strict";
        if (null == this) throw new TypeError;
        var t = Object(this),
            len = t.length >>> 0;
        if (0 === len) return -1;
        var n = 0;
        if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && n != Infinity && n != -Infinity && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= len) return -1;
        for (var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++)
            if (k in t && t[k] === searchElement) return k;
        return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (null == this) throw new TypeError("this is null or not defined");
        var O = Object(this),
            len = O.length >>> 0;
        if ("[object Function]" !== {}.toString.call(callback)) throw new TypeError(callback + " is not a function");
        for (thisArg && (T = thisArg), k = 0; k < len;) {
            var kValue;
            Object.prototype.hasOwnProperty.call(O, k) && (kValue = O[k], callback.call(T, kValue, k, O)), k++
        }
    }), Array.prototype.some || (Array.prototype.some = function(fun) {
        "use strict";
        if (void 0 === this || null === this) throw new TypeError;
        var t = Object(this),
            len = t.length >>> 0;
        if ("function" != typeof fun) throw new TypeError;
        for (var thisArg = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < len; i++)
            if (i in t && fun.call(thisArg, t[i], i, t)) return !0;
        return !1
    }),
    function(root, factory) {
        "function" == typeof define && define.amd ? define(["i18n"], factory) : factory("object" == typeof module && module.exports ? require("i18n") : root.I18n)
    }(this, function(I18n) {
        "use strict";
        I18n.translations = {
            ar: {
                items: {
                    voting_main: {
                        vote_no_more: "\u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062a\u0635\u0648\u064a\u062a \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 \u0641\u064a \u0627\u0644\u064a\u0648\u0645"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u0627\u0644\u062e\u0631\u0648\u062c \u0645\u0646 \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629"
                    }
                },
                js: {
                    pagination: {
                        first: "\u0627\u0644\u0623\u0648\u0644",
                        last: "\u0627\u0644\u0623\u062e\u064a\u0631",
                        next: "\u0627\u0644\u062a\u0627\u0644\u064a",
                        previous: "\u0627\u0644\u0633\u0627\u0628\u0642"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u062d\u062f\u062b \u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u062c\u062f\u062f\u064b\u0627.",
                            "comment-frequency": "\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u0644\u0644\u062a\u0639\u0644\u064a\u0642 \u0645\u062c\u062f\u062f\u064b\u0627",
                            "comment-placeholder": "\u0645\u0627\u0630\u0627 \u064a\u062f\u0648\u0631 \u0641\u064a \u062a\u0641\u0643\u064a\u0631\u0643\u061f",
                            max_votes_reached: "!\u0639\u0630\u0631\u0627\u064b\u060c \u0644\u0642\u062f \u0635\u0648\u062a \u0639\u062f\u0629 \u0645\u0631\u0627\u062a \u0627\u0644\u064a\u0648\u0645",
                            thanks: "\u0634\u0643\u0631\u064b\u0627 \u0644\u0643, \u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u062a\u0635\u0648\u064a\u062a\u0643 \u0648\u0633\u064a\u0638\u0647\u0631 \u0642\u0631\u064a\u0628\u064b\u0627.",
                            unknown_voting_error: ".\u0639\u0630\u0631\u0627\u064b\u060c \u062d\u062f\u062b \u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639. \u064a\u0631\u062c\u064a  \u0627\u0644\u062a\u0635\u0648\u064a\u062a \u0645\u062c\u062f\u062f\u064b\u0627 \u0641\u064a \u0648\u0642\u062a \u0644\u0627\u062d\u0642"
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\u0631\u0633\u0648\u0645 \u0645\u062a\u062d\u0631\u0643\u0629",
                                games: "\u0623\u0644\u0639\u0627\u0628",
                                videos: "\u0645\u0642\u0627\u0637\u0639 \u0641\u064a\u062f\u064a\u0648"
                            }
                        }
                    }
                }
            },
            de: {
                items: {
                    voting_main: {
                        vote_no_more: "Sie k\xf6nnen nur einmal am Tag eine Bewertung abgeben."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "Vollbild beenden"
                    }
                },
                js: {
                    pagination: {
                        first: "Erste",
                        last: "Letzte",
                        next: "N\xe4chste",
                        previous: "Vorherige"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Ein unerwarteter Fehler ist aufgetreten, bitte versuchen Sie es nochmal.",
                            "comment-frequency": "Warte bitte, um ein Kommentar abzuschicken",
                            "comment-placeholder": "Hast du Kommentare?",
                            max_votes_reached: "Sorry, zu viele Bewertungen f\xfcr heute abgegeben!",
                            thanks: "Vielen Dank, Ihre Bewertung wurde aufgenommen und die Spielebewertung wird bald aktualisiert.",
                            unknown_voting_error: "Wir bitten um Entschuldigung, es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie sp\xe4ter nochmal zu bewerten."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "Animationen",
                                games: "Spiele",
                                videos: "Videos"
                            }
                        }
                    }
                }
            },
            el: {
                items: {
                    voting_main: {
                        vote_no_more: "\u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03c8\u03b7\u03c6\u03af\u03c3\u03b5\u03c4\u03b5 \u03bc\u03cc\u03bd\u03bf \u03bc\u03b9\u03b1 \u03c6\u03bf\u03c1\u03ac \u03c4\u03b7 \u03bc\u03ad\u03c1\u03b1."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u0388\u039e\u039f\u0394\u039f\u03a3 \u0391\u03a0\u039f \u03a0\u039b\u0397\u03a1\u0397 \u039f\u0398\u039f\u039d\u0397"
                    }
                },
                js: {
                    pagination: {
                        first: "\u03a0\u03c1\u03ce\u03c4\u03bf",
                        last: "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03bf",
                        next: "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf",
                        previous: "\u03a0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u03a0\u03c1\u03bf\u03ad\u03ba\u03c5\u03c8\u03b5 \u03ad\u03bd\u03b1 \u03b1\u03c0\u03c1\u03cc\u03bf\u03c0\u03c4\u03bf \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03c0\u03c1\u03bf\u03c3\u03c0\u03b1\u03b8\u03ae\u03c3\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac.",
                            "comment-frequency": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03c0\u03b5\u03c1\u03b9\u03bc\u03ad\u03bd\u03b5\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b7\u03bc\u03bf\u03c3\u03b9\u03b5\u03cd\u03c3\u03b5\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac \u03ad\u03bd\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf",
                            "comment-placeholder": "\u03a0\u03bf\u03b9\u03ad\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bf\u03b9 \u03c3\u03ba\u03ad\u03c8\u03b5\u03b9\u03c2 \u03c3\u03bf\u03c5;",
                            max_votes_reached: "\u039b\u03c5\u03c0\u03bf\u03cd\u03bc\u03b1\u03c3\u03c4\u03b5! \u0388\u03c7\u03b5\u03c4\u03b5 \u03b4\u03ce\u03c3\u03b5\u03b9 \u03c0\u03bf\u03bb\u03bb\u03ad\u03c2 \u03c8\u03ae\u03c6\u03bf\u03c5\u03c2 \u03c3\u03ae\u03bc\u03b5\u03c1\u03b1!",
                            thanks: "\u0395\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03bc\u03b5, \u03b7 \u03c8\u03ae\u03c6\u03bf\u03c2 \u03c3\u03bf\u03c5 \u03ba\u03b1\u03c4\u03b1\u03b3\u03c1\u03ac\u03c6\u03b7\u03ba\u03b5 \u03ba\u03b1\u03b9 \u03b8\u03b1 \u03b4\u03b7\u03bc\u03bf\u03c3\u03b9\u03b5\u03c5\u03b8\u03b5\u03af \u03c3\u03cd\u03bd\u03c4\u03bf\u03bc\u03b1.",
                            unknown_voting_error: "\u039b\u03c5\u03c0\u03bf\u03cd\u03bc\u03b1\u03c3\u03c4\u03b5, \u03c0\u03c1\u03bf\u03ad\u03ba\u03c5\u03c8\u03b5 \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1. \u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03c8\u03ae\u03c6\u03b9\u03c3\u03b5 \u03be\u03b1\u03bd\u03ac \u03b1\u03c1\u03b3\u03cc\u03c4\u03b5\u03c1\u03b1!"
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animations",
                                games: "\u03c0\u03b1\u03b9\u03c7\u03bd\u03af\u03b4\u03b9\u03b1",
                                videos: "\u03b2\u03af\u03bd\u03c4\u03b5\u03bf"
                            }
                        }
                    }
                }
            },
            en: {
                items: {
                    voting_main: {
                        vote_no_more: "You can vote only once a day."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "EXIT FULL SCREEN"
                    }
                },
                js: {
                    pagination: {
                        first: "First",
                        last: "Last",
                        next: "Next",
                        previous: "Previous"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Unexpected error occurred, please try again.",
                            "comment-frequency": "Please wait to post a comment again",
                            "comment-placeholder": "What are your thoughts?",
                            max_votes_reached: "Sorry, too many votes for today.",
                            thanks: "Thank you, your vote was recorded and will be displayed soon.",
                            unknown_voting_error: "Sorry, an unexpected error occurred. Please try voting again later."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animations",
                                games: "games",
                                videos: "videos"
                            }
                        }
                    }
                }
            },
            es: {
                items: {
                    voting_main: {
                        vote_no_more: "S\xf3lo puedes votar una vez al d\xeda."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "SALIR DE PANTALLA COMPLETA"
                    }
                },
                js: {
                    pagination: {
                        first: "Primera",
                        last: "\xdaltima",
                        next: "Siguiente",
                        previous: "Anterior"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Ha ocurrido un error inesperado, por favor intente de vuelta.",
                            "comment-frequency": "Espera para volver a publicar un comentario",
                            "comment-placeholder": "\xbfEn qu\xe9 est\xe1s pensando?",
                            max_votes_reached: "Lo sentimos, demasiados votos por hoy.",
                            thanks: "Gracias, tu voto ha sido registrado y aparecer\xe1 pronto.",
                            unknown_voting_error: "Perd\xf3n, ha habido un error inesperado. Por favor vuelve a votar m\xe1s tarde."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animaciones",
                                games: "juegos",
                                videos: "v\xeddeos"
                            }
                        }
                    }
                }
            },
            fr: {
                items: {
                    voting_main: {
                        vote_no_more: "Vous ne pouvez voter qu'une seule fois par jour."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "QUITTER PLEIN \xc9CRAN"
                    }
                },
                js: {
                    pagination: {
                        first: "Premi\xe8re",
                        last: "Derni\xe8re",
                        next: "Suivante",
                        previous: "Pr\xe9c\xe9dente"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Une erreur inattendue est arriv\xe9e, merci de r\xe9essayer.",
                            "comment-frequency": "Veuillez patienter pour poster un commentaire \xe0 nouveau",
                            "comment-placeholder": "Quelles sont vos impressions?",
                            max_votes_reached: "D\xe9sol\xe9, trop de votes pour aujourd'hui.",
                            thanks: "Merci, votre vote a \xe9t\xe9 enregistr\xe9 et sera visible bient\xf4t.",
                            unknown_voting_error: "D\xe9sol\xe9, une erreur inattendue s'est produite. Veuillez r\xe9essayer de voter plus tard."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animations",
                                games: "jeux",
                                videos: "vid\xe9os"
                            }
                        }
                    }
                }
            },
            he: {
                items: {
                    voting_main: {
                        vote_no_more: "\u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e6\u05d1\u05d9\u05e2 \u05e8\u05e7 \u05e4\u05e2\u05dd \u05d1\u05d9\u05d5\u05dd"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u05d9\u05e6\u05d9\u05d0\u05d4 \u05de\u05de\u05e1\u05da \u05de\u05dc\u05d0"
                    }
                },
                js: {
                    pagination: {
                        first: "\u05e8\u05d0\u05e9\u05d5\u05df",
                        last: "\u05d0\u05d7\u05e8\u05d5\u05df",
                        next: "\u05d4\u05d1\u05d0",
                        previous: "\u05e7\u05d5\u05d3\u05dd"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u05d7\u05dc\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05dc\u05d0 \u05e6\u05e4\u05d5\u05d9\u05d4, \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05e0\u05d9\u05ea",
                            "comment-frequency": "\u05d0\u05e0\u05d0 \u05d4\u05de\u05ea\u05df \u05dc\u05e4\u05e8\u05e1\u05d5\u05dd \u05e2\u05d5\u05d3 \u05ea\u05d2\u05d5\u05d1\u05d4",
                            "comment-placeholder": "\u05e2\u05dc \u05de\u05d4 \u05d0\u05ea\u05dd \u05d7\u05d5\u05e9\u05d1\u05d9\u05dd?",
                            max_votes_reached: "\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd, \u05d9\u05d5\u05ea\u05e8 \u05de\u05d3\u05d9 \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea \u05dc\u05d4\u05d9\u05d5\u05dd",
                            thanks: "\u05ea\u05d5\u05d3\u05d4, \u05d4\u05d4\u05e6\u05d1\u05e2\u05d4 \u05e9\u05dc\u05da \u05e0\u05e8\u05e9\u05de\u05d4 \u05d5\u05ea\u05d5\u05e4\u05d9\u05e2 \u05d1\u05e7\u05e8\u05d5\u05d1.",
                            unknown_voting_error: "\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd, \u05e7\u05e8\u05ea\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4, \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d5 \u05dc\u05d4\u05e6\u05d1\u05d9\u05e2 \u05e9\u05d5\u05d1 \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\u05d4\u05e0\u05e4\u05e9\u05d5\u05ea",
                                games: "\u05de\u05e9\u05d7\u05e7\u05d9\u05dd",
                                videos: "\u05e1\u05e8\u05d8\u05d5\u05e0\u05d9\u05dd"
                            }
                        }
                    }
                }
            },
            hi: {
                items: {
                    voting_main: {
                        vote_no_more: "\u0906\u092a \u0926\u093f\u0928 \u092e\u0947\u0902 \u090f\u0915  \u0939\u0940 \u092c\u093e\u0930 \u0935\u094b\u091f \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u092a\u0942\u0930\u094d\u0923 \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0938\u0947 \u092c\u093e\u0939\u0930 \u0928\u093f\u0915\u0932\u0947\u0902"
                    }
                },
                js: {
                    pagination: {
                        first: "\u092a\u094d\u0930\u0925\u092e",
                        last: "\u0905\u0902\u0924\u093f\u092e",
                        next: "\u0905\u0917\u0932\u093e",
                        previous: "\u092a\u093f\u091b\u0932\u093e"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u0905\u0928\u092a\u0947\u0915\u094d\u0937\u093f\u0924 \u0924\u094d\u0930\u0941\u091f\u093f \u0939\u0941\u0908, \u0915\u0943\u092a\u092f\u093e \u092b\u093f\u0930 \u0938\u0947 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902\u0964",
                            "comment-frequency": "\u090f\u0915 \u0914\u0930 \u0915\u092e\u0947\u0902\u091f \u092a\u094b\u0938\u094d\u091f \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u0943\u092a\u092f\u093e \u092a\u094d\u0930\u0924\u0940\u0915\u094d\u0937\u093e \u0915\u0930\u0947\u0902",
                            "comment-placeholder": "\u0906\u092a\u0915\u0947 \u0915\u094d\u092f\u093e \u0935\u093f\u091a\u093e\u0930 \u0939\u0948\u0902?",
                            max_votes_reached: "\u0915\u094d\u0937\u092e\u093e \u0915\u0930\u0947\u0902, \u0906\u091c \u0915\u0947 \u0932\u093f\u090f \u092c\u0939\u0941\u0924 \u0905\u0927\u093f\u0915 \u0935\u094b\u091f \u0939\u094b \u0917\u090f \u0939\u0948\u0902\u0964",
                            thanks: "\u0927\u0928\u094d\u092f\u0935\u093e\u0926, \u0906\u092a\u0915\u093e \u0935\u094b\u091f \u0926\u0930\u094d\u091c \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0925\u093e \u0914\u0930 \u091c\u0932\u094d\u0926 \u0939\u0940 \u0926\u093f\u0916\u093e\u092f\u093e \u091c\u093e\u090f\u0917\u093e\u0964",
                            unknown_voting_error: "\u0915\u094d\u0937\u092e\u093e \u0915\u0930\u0947\u0902, \u0915\u0941\u091b \u0905\u092a\u094d\u0930\u0924\u094d\u092f\u093e\u0936\u093f\u0924 \u0924\u094d\u0930\u0941\u091f\u093f \u0939\u0941\u0908 \u0939\u0948\u0964 \u0915\u0943\u092a\u092f\u093e \u092c\u093e\u0926 \u092e\u0947\u0902 \u092b\u093f\u0930 \u0938\u0947 \u0935\u094b\u091f \u0926\u0947\u0902\u0964"
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\u090f\u0928\u093f\u092e\u0947\u0936\u0928",
                                games: "\u0917\u0947\u092e\u094d\u0938",
                                videos: "\u0935\u0940\u0921\u093f\u092f\u094b"
                            }
                        }
                    }
                }
            },
            id: {
                items: {
                    voting_main: {
                        vote_no_more: "Kamu hanya bisa memberi suara sekali sehari."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "KELUAR DARI LAYAR PENUH"
                    }
                },
                js: {
                    pagination: {
                        first: "Pertama",
                        last: "Terakhir",
                        next: "Selanjutnya",
                        previous: "Sebelumnya"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Terjadi kesalahan tak terduga, silahkan coba lagi.",
                            "comment-frequency": "Mohon tunggu sebentar untuk mengunggah komentar lagi.",
                            "comment-placeholder": "Masukkan komentar anda disini",
                            max_votes_reached: "Maaf, kamu sudah terlalu banyak memberi suara hari ini!",
                            thanks: "Terima kasih, suaramu telah dicatat dan akan segera muncul.",
                            unknown_voting_error: "Maaf, terjadi kesalahan tak terduga. Silakan coba lagi nanti."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animasi",
                                games: "game",
                                videos: "video"
                            }
                        }
                    }
                }
            },
            it: {
                items: {
                    voting_main: {
                        vote_no_more: "Puoi votare solo una volta al giorno"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "ESCI DA SCHERMO INTERO"
                    }
                },
                js: {
                    pagination: {
                        first: "Primo",
                        last: "Ultimo",
                        next: "Successivo",
                        previous: "Precedente"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Si \xe8 verificato un errore inaspettato, ti preghiamo di riprovare.",
                            "comment-frequency": "Ti preghiamo di attendere prima di postare un altro commento",
                            "comment-placeholder": "Quali sono i tuoi pensieri?",
                            max_votes_reached: "Siamo spiacenti, ci sono stati troppi voti oggi!",
                            thanks: "Grazie! Il tuo voto \xe8 stato registrato e verr\xe0 presto pubblicato.",
                            unknown_voting_error: "Siamo spiacenti, si \xe8 verificato un errore imprevisto. Riprova a votare pi\xf9 tardi."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animazioni",
                                games: "giochi",
                                videos: "video"
                            }
                        }
                    }
                }
            },
            ja: {
                items: {
                    voting_main: {
                        vote_no_more: "\u3042\u306a\u305f\u306f\u4e00\u65e5\u4e00\u56de\u306e\u307f\u6295\u7968\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u7d42\u4e86"
                    }
                },
                js: {
                    pagination: {
                        first: "\u6700\u521d",
                        last: "\u6700\u5f8c",
                        next: "\u5f8c",
                        previous: "\u524d"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u4e88\u671f\u3057\u306a\u3044\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
                            "comment-frequency": "\u518d\u3073\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b\u306b\u306f\u3001\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002",
                            "comment-placeholder": "\u3042\u306a\u305f\u306e\u30b3\u30e1\u30f3\u30c8\u3092\u3053\u3053\u306b\u5165\u308c\u3066\u304f\u3060\u3055\u3044",
                            max_votes_reached: "\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3001\u4eca\u65e5\u306f\u3042\u307e\u308a\u306b\u3082\u591a\u304f\u306e\u6295\u7968\u3092\u3057\u307e\u3057\u305f\u3002",
                            thanks: "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3001\u3042\u306a\u305f\u306e\u6295\u7968\u304c\u8a18\u9332\u3055\u308c\u3001\u3059\u3050\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002",
                            unknown_voting_error: "\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u4e88\u671f\u3057\u306a\u3044\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u5f8c\u307b\u3069\u3001\u3082\u3046\u4e00\u5ea6\u6295\u7968\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\u30a2\u30cb\u30e1",
                                games: "\u30b2\u30fc\u30e0",
                                videos: "\u52d5\u753b"
                            }
                        }
                    }
                }
            },
            ko: {
                items: {
                    voting_main: {
                        vote_no_more: "\ud558\ub8e8\uc5d0 \ud55c\ubc88\ub9cc \ud22c\ud45c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\uc804\uccb4 \ud654\uba74\uc5d0\uc11c \ub098\uac00\uae30"
                    }
                },
                js: {
                    pagination: {
                        first: "\ucc98\uc74c",
                        last: "\ub9c8\uc9c0\ub9c9",
                        next: "\ub2e4\uc74c",
                        previous: "\uc774\uc804"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\uc608\uc0c1\ub418\uc9c0 \uc54a\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
                            "comment-frequency": "\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",
                            "comment-placeholder": "\uc5b4\ub5bb\uac8c \uc0dd\uac01\ud558\uc2dc\ub098\uc694?",
                            max_votes_reached: "\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \uc624\ub298 \ub108\ubb34 \ub9ce\uc740 \uac8c\uc784\uc5d0 \uc774\ubbf8 \ud22c\ud45c\ud588\uc2b5\ub2c8\ub2e4!",
                            thanks: "\ud22c\ud45c\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4. \uadc0\ud558\uc758 \ud22c\ud45c\uac00 \uc800\uc7a5\ub418\uc5c8\uc73c\uba70 \uc7a0\uc2dc \ud6c4 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
                            unknown_voting_error: "\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \uc54c \uc218 \uc5c6\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \ud22c\ud45c\ud574 \uc8fc\uc138\uc694."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\uc560\ub2c8\uba54\uc774\uc158",
                                games: "\uac8c\uc784",
                                videos: "\ub3d9\uc601\uc0c1"
                            }
                        }
                    }
                }
            },
            nl: {
                items: {
                    voting_main: {
                        vote_no_more: "Je kan maar \xe9\xe9n keer per dag stemmen"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "Verlaat volledig scherm"
                    }
                },
                js: {
                    pagination: {
                        first: "Eerste",
                        last: "Laatste",
                        next: "Volgende",
                        previous: "Vorige"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Onverwachte fout, probeer opnieuw",
                            "comment-frequency": "Wacht met het plaatsen van een reactie",
                            "comment-placeholder": "Hoe denk jij erover?",
                            max_votes_reached: "Sorry, je hebt vandaag op te veel spellen gestemd!",
                            thanks: "Bedankt! Je stem is opgenomen en zal binnenkort verschijnen.",
                            unknown_voting_error: "Sorry er is een onverwachte fout opgetreden. Probeer later opnieuw te stemmen."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "anims",
                                games: "games",
                                videos: "video's"
                            }
                        }
                    }
                }
            },
            pl: {
                items: {
                    voting_main: {
                        vote_no_more: "Mo\u017cesz g\u0142osowa\u0107 tylko raz dziennie."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "WY\u0141\u0104CZ TRYB PE\u0141NOEKRANOWY"
                    }
                },
                js: {
                    pagination: {
                        first: "Pierwsza",
                        last: "Ostatnia",
                        next: "Nast\u0119pna",
                        previous: "Poprzednia"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d , spr\xf3buj ponownie.",
                            "comment-frequency": "Prosz\u0119 poczeka\u0107 przed ponownym zamieszczeniem komentarza.",
                            "comment-placeholder": "Tutaj napisz sw\xf3j komentarz",
                            max_votes_reached: "Dzienny limit g\u0142os\xf3w zosta\u0142 wykorzystany.",
                            thanks: "Dzi\u0119kujemy, Tw\xf3j g\u0142os zosta\u0142 zapisany i niebawem b\u0119dzie widoczny.",
                            unknown_voting_error: "Przepraszamy, wyst\u0105pi\u0142 niespodziewany b\u0142\u0105d. Spr\xf3buj zag\u0142osowa\u0107 ponownie p\xf3\u017aniej."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animacje",
                                games: "gry",
                                videos: "filmy"
                            }
                        }
                    }
                }
            },
            pt: {
                items: {
                    voting_main: {
                        vote_no_more: "Voc\xea pode votar apenas uma vez por dia."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "SAIR DA ECR\xc3 COMPLETO"
                    }
                },
                js: {
                    pagination: {
                        first: "Primeiro",
                        last: "\xdaltimo",
                        next: "Pr\xf3ximo",
                        previous: "Anterior"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Ocorreu um erro inesperado, por favor tente de novo.",
                            "comment-frequency": "Por favor aguarde para postar outro coment\xe1rio",
                            "comment-placeholder": "O que est\xe1s a pensar?",
                            max_votes_reached: "Desculpe, excedeu o n\xfamero de votos hoje.",
                            thanks: "Obrigado, o seu voto foi gravado e a classifica\xe7\xe3o do jogo ser\xe1 atualizada em breve.",
                            unknown_voting_error: "Desculpe, ocorreu um erro inesperado. Por favor, tente votar novamente mais tarde."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "anima\xe7\xf5es",
                                games: "jogos",
                                videos: "v\xeddeos"
                            }
                        }
                    }
                }
            },
            ro: {
                items: {
                    voting_main: {
                        vote_no_more: "Po\u0163i s\u0103 votezi doar o dat\u0103 pe zi."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "IE\u0218I DIN ECRAN COMPLET"
                    }
                },
                js: {
                    pagination: {
                        first: "Primul",
                        last: "Ultimul",
                        next: "Urm\u0103tor",
                        previous: "Anterior"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "O eroare nea\u0219teptat\u0103 a ap\u0103rut, te rug\u0103m s\u0103 \xeencerci din nou.",
                            "comment-frequency": "Te rug\u0103m s\u0103 a\u0219tep\u021bi pentru a posta un comentariu din nou",
                            "comment-placeholder": "Care sunt g\xe2ndurile tale?",
                            max_votes_reached: "Ne pare r\u0103u, prea multe voturi pentru ast\u0103zi.",
                            thanks: "\xce\u021bi mul\u021bumim, votul t\u0103u a fost \xeenregistrat \u0219i va ap\u0103rea \xeen cur\xe2nd.",
                            unknown_voting_error: "Ne pare r\u0103u, a ap\u0103rut o eroare nea\u0219teptat\u0103. Te rug\u0103m s\u0103 votezi din nou mai t\xe2rziu."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "anima\u0163ii",
                                games: "jocuri",
                                videos: "videoclipuri"
                            }
                        }
                    }
                }
            },
            ru: {
                items: {
                    voting_main: {
                        vote_no_more: "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0432 \u0434\u0435\u043d\u044c."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u0412\u042b\u0419\u0422\u0418 \u0418\u0417 \u041f\u041e\u041b\u041d\u041e\u042d\u041a\u0420\u0410\u041d\u041d\u041e\u0413\u041e \u0420\u0415\u0416\u0418\u041c\u0410"
                    }
                },
                js: {
                    pagination: {
                        first: "\u0421\u0430\u043c\u043e\u0435 \u043d\u0430\u0447\u0430\u043b\u043e",
                        last: "\u0421\u0430\u043c\u044b\u0439 \u043a\u043e\u043d\u0435\u0446",
                        next: "\u0414\u0430\u043b\u0435\u0435",
                        previous: "\u041d\u0430\u0437\u0430\u0434"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.",
                            "comment-frequency": "\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                            "comment-placeholder": "\u0427\u0442\u043e \u0434\u0443\u043c\u0430\u0435\u0442\u0435?",
                            max_votes_reached: "\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u044b\u043b\u043e \u0443\u0436\u0435 \u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432.",
                            thanks: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448 \u0433\u043e\u043b\u043e\u0441 \u0431\u044b\u043b \u0443\u0447\u0442\u0451\u043d \u0438 \u043e\u043d \u0441\u043a\u043e\u0440\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044f.",
                            unknown_voting_error: "\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437 \u043f\u043e\u0437\u0436\u0435."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438",
                                games: "\u0438\u0433\u0440\u044b",
                                videos: "\u0432\u0438\u0434\u0435\u043e"
                            }
                        }
                    }
                }
            },
            th: {
                items: {
                    voting_main: {
                        vote_no_more: "\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e42\u0e2b\u0e27\u0e15\u0e44\u0e14\u0e49\u0e27\u0e31\u0e19\u0e25\u0e30\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e15\u0e47\u0e21"
                    }
                },
                js: {
                    pagination: {
                        first: "\u0e41\u0e23\u0e01",
                        last: "\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22",
                        next: "\u0e15\u0e48\u0e2d\u0e44\u0e1b",
                        previous: "\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e04\u0e32\u0e14\u0e04\u0e34\u0e14, \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07.",
                            "comment-frequency": "\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e40\u0e2b\u0e47\u0e19\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                            "comment-placeholder": "\u0e04\u0e38\u0e13\u0e04\u0e34\u0e14\u0e22\u0e31\u0e07\u0e44\u0e07?",
                            max_votes_reached: "\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22, \u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e42\u0e2b\u0e27\u0e15\u0e40\u0e22\u0e2d\u0e30\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b.",
                            thanks: "\u0e02\u0e2d\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13, \u0e01\u0e32\u0e23\u0e42\u0e2b\u0e27\u0e15\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e41\u0e25\u0e30\u0e08\u0e30\u0e1b\u0e23\u0e32\u0e01\u0e0f\u0e43\u0e19\u0e44\u0e21\u0e48\u0e0a\u0e49\u0e32.",
                            unknown_voting_error: "\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22, \u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e04\u0e32\u0e14\u0e04\u0e34\u0e14. \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e42\u0e2b\u0e27\u0e15\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e43\u0e19\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\u0e41\u0e2d\u0e19\u0e34\u0e40\u0e21\u0e0a\u0e31\u0e48\u0e19",
                                games: "\u0e40\u0e01\u0e21",
                                videos: "\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d"
                            }
                        }
                    }
                }
            },
            tl: {
                items: {
                    voting_main: {
                        vote_no_more: "Maaari ka lamang bumoto ng isang beses sa isang araw."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "ISARA ANG BUONG SCREEN"
                    }
                },
                js: {
                    pagination: {
                        first: "Una",
                        last: "Huli",
                        next: "Kasunod",
                        previous: "Dati"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Nagkaroon ng di-inaasahang error, maaring subukan muli.",
                            "comment-frequency": "Maghintay ng ilang sandali upang mag-post ulit ng komento",
                            "comment-placeholder": "Ano ang nasa isip mo?",
                            max_votes_reached: "Paumanhin, masyadong maraming boto ang ginawa mo ngayong araw.",
                            thanks: "Salamat, ang boto mo ay nairekord na at malapit ng makita.",
                            unknown_voting_error: "Pasensya na, nagkaroon ng di inaasahang error. Maaring subukan ulit mamaya."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "mga animasyon",
                                games: "mga laro",
                                videos: "mga bidyo"
                            }
                        }
                    }
                }
            },
            tr: {
                items: {
                    voting_main: {
                        vote_no_more: "G\xfcnde sadece bir kere oy verebilirsiniz."
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "TAM EKRANDAN \xc7IK"
                    }
                },
                js: {
                    pagination: {
                        first: "\u0130lk",
                        last: "Son",
                        next: "Sonraki",
                        previous: "\xd6nceki"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "Beklenmeyen bir hata olu\u015ftu, l\xfctfen tekrar deneyin.",
                            "comment-frequency": "L\xfctfen yeni bir yorum g\xf6ndermek i\xe7in biraz bekleyin",
                            "comment-placeholder": "Ne d\xfc\u015f\xfcn\xfcyorsunuz?",
                            max_votes_reached: "\xdczg\xfcn\xfcz, bug\xfcn \xe7ok fazla oy verdiniz!",
                            thanks: "Te\u015fekk\xfcrler, verdi\u011finiz oy kaydedildi ve \xe7ok yak\u0131nda g\xf6sterilecek.",
                            unknown_voting_error: "\xdczg\xfcn\xfcz, beklenmeyen bir hata olu\u015ftu. L\xfctfen daha sonra tekrar oy verin."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "animasyonlar",
                                games: "oyun",
                                videos: "video"
                            }
                        }
                    }
                }
            },
            vi: {
                items: {
                    voting_main: {
                        vote_no_more: "B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 b\xecnh ch\u1ecdn 1 l\u1ea7n trong ng\xe0y"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "T\u1eaeT TO\xc0N M\xc0N H\xccNH"
                    }
                },
                js: {
                    pagination: {
                        first: "\u0110\u1ea7u ti\xean",
                        last: "Cu\u1ed1i c\xf9ng",
                        next: "Ti\u1ebfp",
                        previous: "Tr\u01b0\u1edbc"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "X\u1ea3y ra l\u1ed7i kh\xf4ng mong mu\u1ed1n, vui l\xf2ng th\u1eed l\u1ea1i.",
                            "comment-frequency": "Vui l\xf2ng \u0111\u1ee3i \u0111\u1ec3 \u0111\u0103ng nh\u1eadn x\xe9t l\u1ea1i.",
                            "comment-placeholder": "B\u1ea1n ngh\u0129 v\u1ec1 \u0111i\u1ec1u g\xec?",
                            max_votes_reached: "R\u1ea5t ti\u1ebfc, h\xf4m nay c\xf3 qu\xe1 nhi\u1ec1u b\xecnh ch\u1ecdn !",
                            thanks: "C\u1ea3m \u01a1n b\u1ea1n! B\xecnh ch\u1ecdn c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c ghi l\u1ea1i v\xe0 hi\u1ec3n th\u1ecb s\u1edbm",
                            unknown_voting_error: "R\u1ea5t ti\u1ebfc, c\xf3 l\u1ed7i kh\xf4ng mong mu\u1ed1n x\u1ea3y ra. Vui l\xf2ng b\xecnh ch\u1ecdn l\u1ea1i sau."
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "ho\u1ea1t h\u1ecda",
                                games: "game",
                                videos: "Video "
                            }
                        }
                    }
                }
            },
            zh: {
                items: {
                    voting_main: {
                        vote_no_more: "\u60a8\u6bcf\u5929\u53ea\u80fd\u6295\u4e00\u6b21\u7968\u3002"
                    }
                },
                javascripts: {
                    "item-maximizer": {
                        exit: "\u9000\u51fa\u5168\u5c4f"
                    }
                },
                js: {
                    pagination: {
                        first: "\u7b2c\u4e00",
                        last: "\u6700\u540e",
                        next: "\u4e0b\u4e00\u4e2a",
                        previous: "\u4e0a\u4e00\u4e2a"
                    }
                },
                views: {
                    items: {
                        show: {
                            "comment-error": "\u53d1\u751f\u4e86\u672a\u77e5\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u5c1d\u8bd5",
                            "comment-frequency": "\u8bf7\u7a0d\u7b49\u4e00\u4e0b\u624d\u80fd\u7ee7\u7eed\u8bc4\u8bba\u54e6",
                            "comment-placeholder": "\u8ddf\u5927\u5bb6\u5206\u4eab\u4f60\u7684\u60f3\u6cd5\u5427",
                            max_votes_reached: "\u5bf9\u4e0d\u8d77\uff0c\u60a8\u4eca\u5929\u7684\u6295\u7968\u6b21\u6570\u5df2\u7ecf\u8d85\u8fc7\u4e0a\u9650\uff01",
                            thanks: "\u8c22\u8c22\uff0c\u60a8\u7684\u6295\u7968\u5df2\u88ab\u8bb0\u5f55\uff0c\u6211\u4eec\u5c06\u4f1a\u66f4\u65b0\u6e38\u620f\u8bc4\u5206\u3002",
                            unknown_voting_error: "\u5bf9\u4e0d\u8d77\uff0c\u53d1\u751f\u610f\u5916\u9519\u8bef\u3002\u8bf7\u7a0d\u540e\u518d\u6b21\u5c1d\u8bd5\u91cd\u65b0\u6295\u7968\u3002"
                        }
                    },
                    shared: {
                        _header: {
                            sections: {
                                animations: "\u52a8\u753b",
                                games: "\u6e38\u620f",
                                videos: "\u89c6\u9891"
                            }
                        }
                    }
                }
            }
        }
    });
var lazyload = function(selector) {
    var toImgElement = function(element) {
            if ("IMG" === $(element).prop("tagName")) return element;
            var img = $("<img>").attr("data-src", $(element).data("src")).attr("data-srcset", $(element).data("srcset"));
            return $(element).append(img), img.get(0)
        },
        lazyImages = [].slice.call(selector);
    "IntersectionObserver" in window && function() {
        var lazyImageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src, lazyImage.srcset = lazyImage.dataset.srcset, lazyImage.classList.remove("lazy"), lazyImageObserver.unobserve(lazyImage)
                }
            })
        });
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(toImgElement(lazyImage))
        })
    }()
};
$.fn.lazyload = function() {
    lazyload(this)
};
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    Playtomic = function() {
        function Playtomic() {
            _classCallCheck(this, Playtomic), this.profileAchievements.bind(this)
        }
        return _createClass(Playtomic, [{
            key: "getPids",
            value: function(profileId) {
                var address, result;
                return regeneratorRuntime.async(function(context$2$0) {
                    for (;;) switch (context$2$0.prev = context$2$0.next) {
                        case 0:
                            return address = window.appInfo.accountServiceApiUrls.pidsUrl, address = address.replace(":profileId", profileId), context$2$0.next = 4, regeneratorRuntime.awrap($.get(address));
                        case 4:
                            return result = context$2$0.sent, context$2$0.abrupt("return", result);
                        case 6:
                        case "end":
                            return context$2$0.stop()
                    }
                }, null, this)
            }
        }, {
            key: "listAllAchievements",
            value: function(pids) {
                return regeneratorRuntime.async(function(context$2$0) {
                    for (;;) switch (context$2$0.prev = context$2$0.next) {
                        case 0:
                            return context$2$0.abrupt("return", new Promise(function(resolve) {
                                window.ID.GameAPI.Achievements.listAll({
                                    playerids: pids
                                }, function(achs) {
                                    resolve(achs)
                                })
                            }));
                        case 1:
                        case "end":
                            return context$2$0.stop()
                    }
                }, null, this)
            }
        }, {
            key: "profileAchievements",
            value: function(profileId) {
                var pids, achs;
                return regeneratorRuntime.async(function(context$2$0) {
                    for (;;) switch (context$2$0.prev = context$2$0.next) {
                        case 0:
                            return context$2$0.next = 2, regeneratorRuntime.awrap(this.getPids(profileId));
                        case 2:
                            return pids = context$2$0.sent, context$2$0.next = 5, regeneratorRuntime.awrap(this.sdkReady());
                        case 5:
                            return context$2$0.next = 7, regeneratorRuntime.awrap(this.playtomicReady());
                        case 7:
                            return context$2$0.next = 9, regeneratorRuntime.awrap(this.listAllAchievements(pids));
                        case 9:
                            return achs = context$2$0.sent, context$2$0.abrupt("return", this.groupAchievements(achs));
                        case 11:
                        case "end":
                            return context$2$0.stop()
                    }
                }, null, this)
            }
        }, {
            key: "sdkReady",
            value: function() {
                return regeneratorRuntime.async(function(context$2$0) {
                    for (var _this = this;;) switch (context$2$0.prev = context$2$0.next) {
                        case 0:
                            return context$2$0.abrupt("return", new Promise(function(resolve) {
                                window.ID ? resolve("resolved") : setTimeout(function() {
                                    return resolve(_this.sdkReady())
                                }, 200)
                            }));
                        case 1:
                        case "end":
                            return context$2$0.stop()
                    }
                }, null, this)
            }
        }, {
            key: "playtomicReady",
            value: function() {
                return regeneratorRuntime.async(function(context$2$0) {
                    for (;;) switch (context$2$0.prev = context$2$0.next) {
                        case 0:
                            return context$2$0.abrupt("return", new Promise(function(resolve) {
                                window.ID.GameAPI.init(null, null, function() {
                                    resolve("resolved")
                                })
                            }));
                        case 1:
                        case "end":
                            return context$2$0.stop()
                    }
                }, null, this)
            }
        }, {
            key: "groupAchievements",
            value: function(data) {
                var achievements = {};
                if (!data.success) return achievements;
                var _iteratorNormalCompletion = !0,
                    _didIteratorError = !1,
                    _iteratorError = undefined;
                try {
                    for (var _step, _loop = function() {
                            var p = _step.value;
                            achievements[p.appid] || (achievements[p.appid] = []);
                            var alreadySaved = !1;
                            if (alreadySaved = achievements[p.appid].map(function(ach) {
                                    if (ach.achievementid == p.achievementid) return !0
                                }), alreadySaved[0]) return "continue";
                            achievements[p.appid].push(p)
                        }, _iterator = data.achievements[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                        _loop()
                    }
                } catch (err) {
                    _didIteratorError = !0, _iteratorError = err
                } finally {
                    try {
                        !_iteratorNormalCompletion && _iterator["return"] && _iterator["return"]()
                    } finally {
                        if (_didIteratorError) throw _iteratorError
                    }
                }
                return achievements
            }
        }]), Playtomic
    }();
! function($) {
    "use strict";

    function AuthRequest(code) {
        var $body = $("body");
        this.code = code, this.url = $body.data("authSuccessPath")
    }
    if ("undefined" != typeof window.IdnetHelpers) return !1;
    AuthRequest.prototype.perform = function() {
        return $.ajax(this.url, {
            dataType: "json",
            data: {
                code: this.code
            }
        }).done(function() {
            (new UserInfo).init()
        }), !0
    }, $(window).on("id.init", function() {
        function receiveMessage(e) {
            "idnetSilentLogin" == e.data && window.location.origin && e.origin != window.location.origin && window.IdnetHelpers.silentLogin()
        }
        window.IdnetHelpers = {
            silentLogin: function() {
                if (Cookies.get("logged_in")) return !1;
                ID.getLoginStatus(function(response) {
                    try {
                        var code = response.authResponse.code;
                        if (code) {
                            var request = new AuthRequest(code);
                            return Cookies.set("autologin", "true", {
                                path: "/"
                            }), request.perform()
                        }
                    } catch (e) {
                        return !1
                    }
                })
            }
        }, window.addEventListener ? window.addEventListener("message", receiveMessage, !1) : window.attachEvent("onmessage", receiveMessage)
    })
}(jQuery);
var errorsCtn = 0,
    ErrorHandler = new function() {
        var self = {
            sendReportFor: function(url, message, scriptUrl, line) {
                var dataError = {
                    url: url,
                    browser: navigator.userAgent,
                    referrer: document.referrer,
                    message: message,
                    script_url: scriptUrl,
                    line: line,
                    errors_ctn: errorsCtn
                };
                console.log("ErrorHandler: " + JSON.stringify(dataError))
            },
            onError: function(message, scriptUrl, line) {
                if (++errorsCtn > 10) return !1;
                if (Math.random() < .99) return !1;
                if (!scriptUrl) return !1;
                var matchStr = function(str, regexp) {
                    return void 0 !== str && str.match(regexp)
                };
                return !(matchStr(message, /Script error|Error loading script/) || matchStr(scriptUrl, /googlesyndication.com|facebook.net|mscimg.com|twitter.com|pinterest.com|chrome|mzcdn|resource:/) || matchStr(navigator.userAgent, /SMART\-TV|Symbian/)) && (self.sendReportFor(window.location.href, message, scriptUrl, line, "", ""), !1)
            }
        };
        return self
    };
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}, jQuery.fn.start_spinner = function() {
    this.before('<div class="spinner" />')
}, jQuery.fn.stop_spinner = function() {
    this.parent().find(".spinner").remove()
}, jQuery.fn.centerWindow = function() {
    return this && this.length && $("html, body").scrollTop(this.offset().top - .61803399 * ($(window).height() - this.outerHeight()) / 1.61803399), this
};
var delay = function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer), timer = setTimeout(callback, ms)
        }
    }(),
    LocaleSelector = {
        init: function() {
            var _this = this;
            $(document).ready(function() {
                _this.handleClick(), $("#locale-selector-dropdown .locales-container .locale-link." + window.appInfo.currentLocale).addClass("selected"), $(".locale-link").click(function() {
                    Cookies.set("_y8_lang", $(this).attr("class").match(/(?:^| )([^ ]{2})(?: |$)/)[1], $.extend(appInfo.commonCookieOptions, {
                        expires: 999
                    }));
                    var locale_selector_dropdown = $(this).closest("#locale-selector-dropdown");
                    locale_selector_dropdown.length && (locale_selector_dropdown.find(".locale-chooser").html($(this).html()), path = document.location.pathname + document.location.search, this.href = this.href.replace(/((https?:\/\/)?[^\/]+).*/, "$1" + path), $(document).trigger("checkOverlayMenus"))
                })
            }), $(document).on("topMenu.forceClose", this.close)
        },
        open: function() {
            $("#locale-selector-dropdown .locales-container").fadeToggle(200)
        },
        close: function() {
            $("#locale-selector-dropdown .locales-container").fadeOut(200)
        },
        handleClick: function() {
            $("#locale-selector-dropdown .locale-chooser").not(".js-top-menu").click(function(event) {
                $("#locale-selector-dropdown .locales-container").toggle(), $(document).trigger("checkOverlayMenus"), event.preventDefault(), event.stopPropagation()
            })
        }
    },
    UserIdnetBonusTimer = new function() {
        var self = {
            appId: null,
            init: function() {
                if (self.appId = $("body").data("idnet-app-id"), Cookies.get("logged_in")) {
                    if (self.appId) self.getPoints();
                    else if (Cookies.get("user_pid")) {
                        var bonusValue = Cookies.get("idnet-bonus-score-value"),
                            lastScore = Cookies.get("idnet-bonus-score-last-update") > Date.now() - 18e5;
                        bonusValue && lastScore ? self.updateUserInfo(Cookies.get("idnet-bonus-score-value")) : self.getAllPoints(Cookies.get("user_pid"))
                    }
                } else self.resetScoreWith(0)
            },
            getAllPoints: function(user_pid) {
                if (undefined == user_pid) return !1;
                $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    jsonpCallback: "cb",
                    url: window.appInfo.accountServiceApiUrls.profilePointsTotalUrl.replace(":uid", user_pid),
                    error: function(request) {
                        logConnectionError(request, "in getPointsFromIdnet")
                    },
                    success: function(response) {
                        response && response.points && self.updateUserInfo(response.points)
                    }
                })
            },
            getPoints: function() {
                $.ajax({
                    type: "GET",
                    url: window.appInfo.accountServiceApiUrls.userUrl,
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    data: {
                        app_id: self.appId
                    },
                    success: function(response) {
                        response && response.points && response.points > 0 && self.updateUserInfo(response.points), "logged_in" in response && "keys" in response && 1 == response.logged_in && (-1 === $.inArray("1_hour_of_play", response.keys) ? -1 === $.inArray("10_minutes_of_play", response.keys) ? setTimeout(function() {
                            self.savePoints("10_minutes_of_play")
                        }, 6e5) : setTimeout(function() {
                            self.savePoints("1_hour_of_play")
                        }, 36e5) : -1 === $.inArray("10_minutes_of_play", response.keys) && setTimeout(function() {
                            self.savePoints("10_minutes_of_play")
                        }, 6e5))
                    }
                })
            },
            savePoints: function(key) {
                $.ajax({
                    type: "POST",
                    url: window.appInfo.accountServiceApiUrls.pointsBonusTimerUrl,
                    xhrFields: {
                        withCredentials: !0
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    dataType: "json",
                    data: {
                        app_id: self.appId,
                        key: key
                    },
                    success: function(response) {
                        "success" in response && "finished" in response && 1 == response.success && 0 == response.finished ? (self.getAllPoints(), setTimeout(function() {
                            self.savePoints("1_hour_of_play")
                        }, 3e6)) : "success" in response && 1 == response.success && self.getAllPoints()
                    }
                })
            },
            updateUserInfo: function(points) {
                0 == points || "0" == points ? $(".js-user-idnet-points").html("0") : $(".js-user-idnet-points").html(points), Cookies.set("idnet-bonus-score-last-update", Date.now(), appInfo.commonCookieOptions), Cookies.set("idnet-bonus-score-value", points, appInfo.commonCookieOptions)
            },
            resetScoreWith: function(newScore) {
                0 == newScore || "0" == points ? $(".js-user-idnet-points").html("0") : $(".js-user-idnet-points").html(newScore), Cookies.remove("idnet-bonus-score-last-update", appInfo.commonCookieOptions), Cookies.remove("idnet-bonus-score-value", appInfo.commonCookieOptions)
            }
        };
        return self
    },
    UserAge = {
        range: function(age) {
            if (age < 3 || age > 80) return null;
            var from = 3 * Math.floor(age / 3);
            return from + " - " + (from + 2)
        },
        fromDateOfBirth: function(dateOfBirth) {
            var today = new Date,
                birthDate = new Date(dateOfBirth),
                age = today.getFullYear() - birthDate.getFullYear(),
                m = today.getMonth() - birthDate.getMonth();
            return (m < 0 || 0 === m && today.getDate() < birthDate.getDate()) && age--, age
        }
    };
window.UserInfo = function() {
    function UserInfo() {
        this.MAX_HEARTED_ITEMS = 3
    }
    return UserInfo.prototype.init = function() {
        if (this.registerHandlers(), !Cookies.get("logged_in")) return this.showUserInfo(!1), $(document).trigger("library-counters-ready", [this.getLibraryCounters()]), void $(document).trigger("user-info-ready");
        var kind = $(".animations-active").length ? "animations" : "games";
        $.ajax({
            url: "/ajax/user",
            data: {
                kind: kind
            },
            error: function(request) {
                return logConnectionError(request, "in showLoginData")
            },
            success: function(_this) {
                return function(data) {
                    return _this.showUserInfo(data), _this.setCSRFTokenHeader(), $(document).triggerHandler("favorites-count", data.my_games_count), $(document).triggerHandler("hearts-count", data.hearts_count), $(document).trigger("library-counters-ready", [data]), $(document).trigger("user-info-ready", [data])
                }
            }(this)
        })
    }, UserInfo.prototype.setCSRFTokenHeader = function() {
        return $.ajaxPrefilter(function(options, originalOptions, xhr) {
            if (!options.crossDomain) return xhr.setRequestHeader("X-CSRF-Token", Cookies.get("gp-csrf-token"))
        })
    }, UserInfo.prototype.getLibraryCounters = function() {
        var visitedIds, likedIds;
        $(".animations-active").length ? (visitedIds = Cookies.get("watched_videos_ids"), likedIds = Cookies.get("liked_videos_ids")) : (visitedIds = Cookies.get("played_games_ids"), likedIds = Cookies.get("liked_games_ids"));
        var result = {
            visited_items: 0,
            liked_items: 0,
            recommended_items: 0
        };
        return visitedIds && (result.visited_items = JSON.parse(visitedIds).length, result.recommended_items = result.visited_items > 15 ? 200 : 14 * result.visited_items), likedIds && (result.liked_items = JSON.parse(likedIds).length), result
    }, UserInfo.prototype.current_user_id = function() {
        return Cookies.get("user_id")
    }, UserInfo.prototype.current_user_age_range = function() {
        var dob = Cookies.get("dob");
        if (dob) {
            var age = UserAge.fromDateOfBirth(dob);
            return UserAge.range(age)
        }
        return null
    }, UserInfo.prototype.showEditButton = function() {
        var button;
        return button = $("#toggle-edit-" + this.current_user_id()), this.revealButton(button)
    }, UserInfo.prototype.revealButton = function(button) {
        return button.removeClass("hidden")
    }, UserInfo.prototype.hideButton = function(button) {
        return button.addClass("hidden")
    }, UserInfo.prototype.isMyProfile = function(contact_id) {
        return contact_id === Cookies.get("user_id")
    }, UserInfo.prototype.isLoggedIn = function() {
        return Cookies.get("logged_in")
    }, UserInfo.prototype.registerHandlers = function() {
        var _this = this;
        return $(document).on("favorites-count", function(e, cnt) {
            _this.setFavoritesCount(cnt)
        }), $(document).on("hearts-count", function(e, cnt) {
            _this.setHeartsCount(cnt)
        }), $(document).on("user-logged-in", $.proxy(this.showEditButton, this))
    }, UserInfo.prototype.showUserInfo = function(data) {
        var policyValidator = new PolicyValidator;
        if (data && null != data && !1 !== data.logged_in) {
            if ($("#user_not_logged_in, .user_not_logged_in, .user-not-logged-in").hide(), $(".user_not_logged_in_comments").hide(), $("#profile_picture_box").attr("src", data.my_avatar), $(".profile_picture_box").attr("src", data.my_avatar), $("#username_box").html(data.username), $(".username_box").html(data.username), $(".js-favorites-count").html(data.my_games_count), null != data.user_pid && ($(".js-favorites-link").attr("href", "/users/" + data.user_pid + "/" + data.username), $(".js-edit-picture-link").attr("href", "/users/" + data.user_pid + "/" + data.username), $(".header-email nobr").html(data.email)), null != data.studio_slug) {
                var slugPlaceholder = "my-studio-slug",
                    seeMyStudio = $("#account-menu-link-see-my-studio"),
                    editMyStudio = $("#account-menu-link-edit-my-studio"),
                    seeMyStudioUrl = seeMyStudio.attr("destination"),
                    editMyStudioUrl = editMyStudio.attr("destination");
                seeMyStudioUrl && (seeMyStudio.attr("href", seeMyStudioUrl.replace(slugPlaceholder, data.studio_slug)), seeMyStudio.show()), editMyStudioUrl && (editMyStudio.attr("href", editMyStudioUrl.replace(slugPlaceholder, data.studio_slug)), editMyStudio.show())
            }
            $(".js-favorites-container").show(), $(".avatar").attr("src", data.my_avatar), $("#user_logged_in, .user_logged_in, .user-logged-in").show(), $("nav.navbar").addClass("logged"), Cookies.set("user_id", data.user_id, window.appInfo.commonCookieOptions), Cookies.set("user_pid", data.user_pid, window.appInfo.commonCookieOptions), Cookies.set("access_token", data.access_token, window.appInfo.commonCookieOptions), Cookies.set("user_role", data.role, window.appInfo.commonCookieOptions), Cookies.set("dob", data.dob, window.appInfo.commonCookieOptions), policyValidator.setControlValueFromService(data.privacy_policy_validated), $(document).trigger("user-logged-in")
        } else $("#user_not_logged_in, .user_not_logged_in, .user-not-logged-in").show(), $(".user_not_logged_in_comments").show(), Cookies.remove("user_id"), Cookies.remove("dob"), Cookies.remove("access_token");
        return policyValidator.process(), UserIdnetBonusTimer.init()
    }, UserInfo.prototype.setFavoritesCount = function(cnt) {
        Cookies.set("favorites_count", cnt, window.appInfo.commonCookieOptions)
    }, UserInfo.prototype.setHeartsCount = function(cnt) {
        Cookies.set("hearts_count", cnt, window.appInfo.commonCookieOptions)
    }, UserInfo.prototype.getFavoritesCount = function() {
        return Cookies.get("favorites_count") || 0
    }, UserInfo.prototype.getHeartsCount = function() {
        return Cookies.get("hearts_count") || 0
    }, UserInfo.prototype.canHeart = function() {
        return this.getHeartsCount() < this.MAX_HEARTED_ITEMS
    }, UserInfo
}();
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    Library = function() {
        function Library() {
            _classCallCheck(this, Library), this.bindButtons()
        }
        return _createClass(Library, [{
            key: "loadCounters",
            value: function() {
                $(document).on("library-counters-ready", function(event, data) {
                    data && (Library.updateCounterHtml(data.visited_items, "#visited-items-count"), Library.updateCounterHtml(data.liked_items, "#liked-items-count"), Library.updateCounterHtml(data.recommended_items, "#recommended-items-count"))
                })
            }
        }, {
            key: "showSidebarLinks",
            value: function() {
                (new UserInfo).isLoggedIn() && ($("#visited_items_link").show(), $("#liked_items_link").show())
            }
        }, {
            key: "bindButtons",
            value: function() {
                $(".items-list").on("click", ".delete-watched-video", function(e) {
                    e.preventDefault(), Library.remoteRequest("/profile/delete_visit", $(this).data("item-id"))
                }), $(document).on("click", ".delete-upvote", function() {
                    Library.remoteRequest("/profile/delete_upvote", $(this).data("item-id"))
                })
            }
        }], [{
            key: "updateCounterHtml",
            value: function(datum, htmlClass) {
                var number = void 0 !== datum ? datum : 0,
                    kind = $(".animations-active").length ? "videos" : "games",
                    kindTranslated = I18n.t("views.shared._header.sections." + kind);
                $(htmlClass).html(number + " " + kindTranslated)
            }
        }, {
            key: "remoteRequest",
            value: function(url, itemId) {
                $.ajax({
                    url: url,
                    data: {
                        item_id: itemId
                    },
                    type: "POST",
                    success: function() {
                        $("#item_" + itemId).remove()
                    },
                    error: function(data) {
                        console.log(data)
                    }
                })
            }
        }]), Library
    }(),
    LiveSearch = new function() {
        var self = {
            init: function() {
                if (0 != $("#q").size()) {
                    var results = !1,
                        liveSearchTemplate = $("#live-search-template").html();
                    $("#q").on("focus blur", function() {
                        $(document).trigger("checkOverlayMenus")
                    }), $("#q").autocomplete({
                        minLength: 3,
                        select: function(event, ui) {
                            ui.item.name && window.location.assign(self.itemUrl(ui.item))
                        },
                        focus: function(event, ui) {
                            event.preventDefault(), null != ui.item.name ? $("#q").val(ui.item.name) : $("#q").val($("#q").data("initial-input"))
                        },
                        source: function(request, response) {
                            params = {
                                q: request.term,
                                kind: self.kind()
                            }, $.getJSON("/search.json", params, function(data) {
                                $("body").addClass("search-list"), $("ul.live-search-results").html(""), data.items.length > 0 ? (results = !0, response(data.items)) : (results = !1, response(data.featured))
                            })
                        },
                        response: function(event, ui) {
                            !results && ui.content && ui.content.unshift({
                                name: null
                            })
                        }
                    }).data("ui-autocomplete")._renderItem = function(ul, item) {
                        if (!item.name) {
                            var div = $("<div>").addClass("no-results").text("Nothing was found, how about those great full games:"),
                                userInput = $("#q").val();
                            return $("#q").data("initial-input", userInput), $("<li>").data("empty", null).append(div).appendTo(ul)
                        }
                        item.path = self.itemUrl(item);
                        var $li = $(Handlebars.compile(liveSearchTemplate)(item)),
                            resContainer = ul;
                        return $(".live-search-results").length && (resContainer = $(".live-search-results"), resContainer.trigger("liveSearchResultsRendered"), resContainer.show()), $li.appendTo(resContainer)
                    }
                }
            },
            kind: function() {
                return $("#kind").length ? $("#kind").val() : "game"
            },
            kindForUrl: function(kind) {
                return "game" == kind && (kind += "s"), kind
            },
            itemUrl: function(item) {
                return "/" + self.kindForUrl(item.kind) + "/" + item.slug
            }
        };
        return self
    },
    Tracking = {
        init: function() {
            $("link[rel=alternate].xhr").each(function() {
                Tracking.trackVisit($(this).attr("href"))
            })
        },
        trackVisit: function(url) {
            var data = {};
            window.document.referrer && (data.referer = document.referrer), window.adBlockDetected === undefined && (data.ad_blocker = !0), jQuery.get(url, data)
        },
        trackThumbsDisplay: function() {
            var $items = $("[data-thumbnail-id]"),
                thumbnailIds = $.map($items, function(elem) {
                    return $(elem).data("thumbnail-id")
                });
            $items.length > 0 && thumbnailIds.length > 0 && $.post("/ctr/thumbnails_displayed", {
                "thumbnail_ids[]": thumbnailIds
            }, function(hash) {
                $items.each(function() {
                    var thumbnailId = $(this).data("thumbnail-id");
                    $(this).find("a").click(function(event) {
                        event.preventDefault(), window.location.href = "/ctr/click_on_game?" + $.param({
                            location: $(this).attr("href"),
                            thumbnail_id: thumbnailId,
                            hash: hash
                        })
                    })
                })
            }).fail(function(xhr, textStatus) {
                ErrorHandler.sendReportFor(this.url, xhr.status, "CTRTracking", "", textStatus, null)
            })
        },
        trackTog: function() {
            var $trackTog = $("#track-tog");
            if ($trackTog.length) {
                var togUrl = $trackTog.data("post-url");
                togUrl && (window.addEventListener("visbilitychange", function() {
                    "hidden" === document.visbilityState && Tracking.sendTogRequest(togUrl)
                }), window.addEventListener("pagehide", function() {
                    Tracking.sendTogRequest(togUrl)
                }))
            }
        },
        trackingIdPresent: function() {
            return "undefined" != typeof trackingId && !!trackingId
        },
        sendTogRequest: function(url) {
            if (Tracking.trackingIdPresent() && "sendBeacon" in navigator) {
                var data = new FormData;
                data.append("tracking_id", trackingId), "undefined" != typeof togUID && togUID && data.append("uid", togUID), navigator.sendBeacon(url, data)
            }
        }
    },
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }();
! function(global, $) {
    function hidePagination() {
        $(".navigator").hide()
    }

    function hideSpinner() {
        $("#items_container .infinite-scroll-loading").remove()
    }

    function showSpinner() {
        $("#items_container").append('      <div class="item infinite-scroll-loading">        <div class="thumbarea"></div>        <div class="infos">Loading, please wait</div>      </div>    ')
    }

    function getQueryParam(field) {
        var regexp = new RegExp("[?&]" + field + "=([^&#]*)", "i"),
            string = regexp.exec(window.location.href);
        return string ? string[1] : null
    }

    function getInitialPage() {
        return parseInt(getQueryParam("page")) || 1
    }

    function getOrder() {
        return getQueryParam("order") || "popularity"
    }

    function filterCurrentItems() {
        var $items = this.$container.find(".item"),
            seen = this.seen;
        $items.each(function() {
            var item_id = $(this).data("item-id");
            seen[item_id] = !0
        })
    }

    function requestNextPage() {
        this.$container.find(".item:visible").length < 40 && !window.UserAgent.device.type && nextPage.call(this)
    }

    function newPageLoaded(data) {
        var $items = $(data).find(".item.thumb");
        hideSpinner(), $items.length <= 0 ? (this.maxPage = this.currentPage, $("footer").show()) : (this.appendContent($items), this.showSmoothThumbs($items), this.processing = !1, nextPageIfCloseToBottom.call(this))
    }

    function nextPage() {
        var _this = this;
        return !this.processing && (!(this.maxPage <= this.currentPage) && (this.processing = !0, this.currentPage += 1, showSpinner(), void $.ajax({
            url: this.baseUrl,
            timeout: 1e4,
            data: {
                order: this.currentOrder,
                page: this.currentPage
            },
            success: newPageLoaded.bind(this),
            error: function(xhr, textStatus) {
                hideSpinner(), _this.processing = !1, ErrorHandler.sendReportFor(_this.url, xhr.status, "InfiniteScrollingXHR", "", textStatus, "retrying-false")
            }
        })))
    }

    function nextPageIfCloseToBottom() {
        $(window).scrollTop() > $(document).height() - $(window).height() - 250 && nextPage.call(this)
    }
    var InfiniteScrolling = function() {
        function InfiniteScrolling(container) {
            var _this2 = this;
            _classCallCheck(this, InfiniteScrolling), this.$container = $(container), this.baseUrl = this.$container.data("base-url"), this.seen = {}, this.currentPage = getInitialPage(), this.currentOrder = getOrder(), this.maxPage = parseInt(this.$container.data("max-page")), this.processing = !1, isNaN(this.maxPage) && (this.maxPage = 50), hidePagination.call(this), filterCurrentItems.call(this), requestNextPage.call(this), $(window).scroll(function() {
                nextPageIfCloseToBottom.call(_this2)
            }), nextPageIfCloseToBottom.call(this), this.showSmoothThumbs()
        }
        return _createClass(InfiniteScrolling, [{
            key: "filterItems",
            value: function(items) {
                var seen = this.seen,
                    $items = $(items).filter(function() {
                        var elem = $(this),
                            itemId = elem.data("item-id");
                        return !seen[itemId] && (seen[itemId] = !0, !0)
                    });
                return $items.find("img.lazy").lazyload(), $items
            }
        }, {
            key: "showSmoothThumbs",
            value: function(items) {
                (null == items ? $(".items-grid img") : $(items).find("img")).each(function() {
                    $(this).load(function() {
                        $(this).fadeIn("slow")
                    }), this.complete && $(this).trigger("load")
                })
            }
        }, {
            key: "appendContent",
            value: function(items) {
                this.filterItems(items).appendTo(this.$container), $(window).resize(), $(document).trigger("itemsListUpdated")
            }
        }]), InfiniteScrolling
    }();
    global.InfiniteScrolling = InfiniteScrolling
}(window, jQuery), $.fn.infiniteScrolling = function() {
    return this.each(function() {
        new InfiniteScrolling(this)
    }), this
}, $(function() {
    $('[data-infinite-scrolling="true"][data-base-url]').infiniteScrolling()
}), window.WebglDetector = function() {
    function support() {
        return !!window.WebGLRenderingContext && (!!webglSupport() || !!experimentalWebglSupport())
    }

    function webglSupport() {
        try {
            return !!canvas.getContext("webgl")
        } catch (e) {
            return !1
        }
    }

    function experimentalWebglSupport() {
        try {
            return !!canvas.getContext("experimental-webgl")
        } catch (e) {
            return !1
        }
    }
    var canvas = document.createElement("canvas");
    return {
        support: support(),
        webglSupport: webglSupport(),
        experimentalWebglSupport: experimentalWebglSupport()
    }
}();
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    OSDetector = function() {
        function OSDetector() {
            _classCallCheck(this, OSDetector)
        }
        return _createClass(OSDetector, null, [{
            key: "architecture",
            value: function() {
                var footprints = ["x86_64", "x86-64", "Win64", "x64;", "amd64", "AMD64", "WOW64", "x64_64", "OS X 10(.|_)[6-9]", "OS X 10(.|_)[1-9][0-9]"],
                    re = new RegExp(footprints.join("|"), "i");
                return null != this.getUserAgent().match(re) ? "64bit" : "32bit"
            }
        }, {
            key: "os",
            value: function() {
                var osNames = {
                    android: /.*(android).*/i,
                    ios: /.*(iphone|ipod|ipad).*/i,
                    windows: /.*(Win).*/i,
                    osx: /.*(Mac).*/i,
                    linux: /.*(Linux).*/i,
                    unix: /.*(X11).*/i
                };
                for (var osName in osNames)
                    if (osNames[osName].test(this.getAppVersion())) return osName;
                return "other"
            }
        }, {
            key: "getUserAgent",
            value: function() {
                return window.navigator.userAgent
            }
        }, {
            key: "getAppVersion",
            value: function() {
                return window.navigator.appVersion
            }
        }]), OSDetector
    }();
! function() {
    var os = OSDetector.os(),
        architecture = OSDetector.architecture();
    OSDetector.bit32 = "32bit" == architecture, OSDetector.bit64 = "64bit" == architecture, OSDetector.win = "win" == os, OSDetector.linux = "linux" == os, OSDetector.macOs = "osx" == os, OSDetector.unix = "unix" == os, OSDetector.android = "android" == os, OSDetector.ios = "ios" == os
}(), window.BrowserSupport = function() {
    function safeCheck(meth) {
        try {
            return meth()
        } catch (e) {
            return console.log("Error with BrowserSupport check!!"), !0
        }
    }
    var support;
    return support = {
        shockwave: safeCheck(function() {
            return "IE" == window.UserAgent.browser.name
        }),
        unityPlayer: safeCheck(function() {
            return "IE" == window.UserAgent.browser.name || "Safari" == window.UserAgent.browser.name || "Opera" == window.UserAgent.browser.name && window.UserAgent.browser.version > 35
        }),
        unityWebgl32: safeCheck(function() {
            return "mobile" == window.UserAgent.device.type ? WebglDetector.support : WebglDetector.support && OSDetector.bit32
        }),
        unityWebgl64: safeCheck(function() {
            return "mobile" == window.UserAgent.device.type ? WebglDetector.support : WebglDetector.support && OSDetector.bit64
        })
    }, support.unity_player = support.unityPlayer, support.unity_webgl_32_bit = support.unityWebgl32, support.unity_webgl = support.unityWebgl64, support
}();
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function(global, $) {
    "use strict";
    var Filter = function() {
        function Filter(item, labels) {
            _classCallCheck(this, Filter), this.$item = $(item), this.labels = labels
        }
        return _createClass(Filter, [{
            key: "isFilterable",
            value: function() {
                var itemFilter = this.$item.data("filter");
                return !!this.filters.includes(itemFilter)
            }
        }, {
            key: "isCompatible",
            value: function() {
                return 0 == $(this.itemLabels()).filter(this.labels).length
            }
        }, {
            key: "hide",
            value: function() {
                this.$item.hide().data("filter", this.filter).attr("data-filter", this.filter)
            }
        }, {
            key: "show",
            value: function() {
                this.$item.show().removeData("filter").removeAttr("data-filter")
            }
        }, {
            key: "itemLabels",
            value: function() {
                var labels = this.$item.data("label-ids");
                return labels == undefined || "" == labels ? [] : labels.split(",")
            }
        }]), Filter
    }();
    global.Filter = Filter
}(window, jQuery);
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    _get = function(_x, _x2, _x3) {
        for (var _again = !0; _again;) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = !1, null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc !== undefined) {
                if ("value" in desc) return desc.value;
                var getter = desc.get;
                return getter === undefined ? undefined : getter.call(receiver)
            }
            var parent = Object.getPrototypeOf(object);
            if (null === parent) return undefined;
            _x = parent, _x2 = property, _x3 = receiver, _again = !0, desc = parent = undefined
        }
    };
! function(global, $, Filter) {
    "use strict";

    function compatibilityFor(technology) {
        var support = BrowserSupport[technology];
        return support == undefined || support
    }

    function arrFromDataAttr(attrName) {
        return $.makeArray(this.$item.data(attrName))
    }

    function getTechnologies() {
        return arrFromDataAttr.call(this, "technologies")
    }
    var CompatibilityFilter = function(_Filter) {
        function CompatibilityFilter(item, labels) {
            _classCallCheck(this, CompatibilityFilter), _get(Object.getPrototypeOf(CompatibilityFilter.prototype), "constructor", this).call(this, item, labels), this.filter = "compatibility", this.filters = ["compatibility", "parental", "girls-games", undefined], this.technologies = getTechnologies.call(this)
        }
        return _inherits(CompatibilityFilter, _Filter), _createClass(CompatibilityFilter, [{
            key: "isCompatible",
            value: function() {
                if (this.technologies.length < 1) return !0;
                for (var i = 0; i < this.technologies.length; i++)
                    if (compatibilityFor.call(this, this.technologies[i])) return !0;
                return !1
            }
        }], [{
            key: "perform",
            value: function() {
                $(".item").each(function(index, itemElement) {
                    var item = new CompatibilityFilter(itemElement);
                    item.isCompatible() || item.hide()
                })
            }
        }]), CompatibilityFilter
    }(Filter);
    global.CompatibilityFilter = CompatibilityFilter
}(window, jQuery, Filter), $(function() {
    $('body[data-filter-compatibility-games="true"]').each(function() {
        window.location.search.indexOf("noFlash=true") > -1 && (window.BrowserSupport.flash = !1), CompatibilityFilter.perform(), $(document).on("itemsListUpdated", function() {
            CompatibilityFilter.perform()
        })
    })
});
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    _get = function(_x, _x2, _x3) {
        for (var _again = !0; _again;) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = !1, null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc !== undefined) {
                if ("value" in desc) return desc.value;
                var getter = desc.get;
                return getter === undefined ? undefined : getter.call(receiver)
            }
            var parent = Object.getPrototypeOf(object);
            if (null === parent) return undefined;
            _x = parent, _x2 = property, _x3 = receiver, _again = !0, desc = parent = undefined
        }
    };
! function(global, $, Filter) {
    "use strict";
    var ParentalFilter = function(_Filter) {
        function ParentalFilter(item, labels) {
            _classCallCheck(this, ParentalFilter), _get(Object.getPrototypeOf(ParentalFilter.prototype), "constructor", this).call(this, item, labels), this.filter = "parental", this.filters = ["parental", "girls-games", undefined]
        }
        return _inherits(ParentalFilter, _Filter), _createClass(ParentalFilter, null, [{
            key: "perform",
            value: function() {
                var userLabels = ParentalFilter.userLabels();
                $(".item").each(function(index, itemElement) {
                    var item = new ParentalFilter(itemElement, userLabels);
                    item.isFilterable() && (item.isCompatible() ? item.show() : item.hide())
                }), $(document).trigger("girlsGamesFilterUpdated")
            }
        }, {
            key: "userLabels",
            value: function() {
                var labels = $("body").data("parental-labels");
                return labels === undefined || "" == labels ? [] : labels.split(",")
            }
        }]), ParentalFilter
    }(Filter);
    global.ParentalFilter = ParentalFilter
}(window, jQuery, Filter), $(function() {
    $(document).on("itemsListUpdated parentalFilterUpdated", function() {
        ParentalFilter.perform()
    })
});
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    _get = function(_x, _x2, _x3) {
        for (var _again = !0; _again;) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = !1, null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc !== undefined) {
                if ("value" in desc) return desc.value;
                var getter = desc.get;
                return getter === undefined ? undefined : getter.call(receiver)
            }
            var parent = Object.getPrototypeOf(object);
            if (null === parent) return undefined;
            _x = parent, _x2 = property, _x3 = receiver, _again = !0, desc = parent = undefined
        }
    };
! function(global, $, Filter) {
    "use strict";
    var GirlsGamesFilter = function(_Filter) {
        function GirlsGamesFilter(item, labels) {
            _classCallCheck(this, GirlsGamesFilter), _get(Object.getPrototypeOf(GirlsGamesFilter.prototype), "constructor", this).call(this, item, labels), this.filter = "girls-games", this.filters = ["girls-games", undefined]
        }
        return _inherits(GirlsGamesFilter, _Filter), _createClass(GirlsGamesFilter, null, [{
            key: "perform",
            value: function() {
                var labels = GirlsGamesFilter.labels();
                $(".item").each(function(index, itemElement) {
                    var item = new GirlsGamesFilter(itemElement, labels);
                    item.isFilterable() && (item.isCompatible() ? item.show() : item.hide())
                })
            }
        }, {
            key: "labels",
            value: function() {
                var labels = $("body").data("girls-labels");
                return labels === undefined || "" == labels ? [] : labels.split(",")
            }
        }]), GirlsGamesFilter
    }(Filter);
    global.GirlsGamesFilter = GirlsGamesFilter
}(window, jQuery, Filter), $(function() {
    $(document).on("itemsListUpdated girlsGamesFilterUpdated", function() {
        GirlsGamesFilter.perform()
    })
});
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function(global, $) {
    "use strict";
    var defaultState = "on",
        ToggleSwitch = function() {
            function ToggleSwitch(config) {
                _classCallCheck(this, ToggleSwitch), this.cookie = config.cookie, this.$container = $(config.container), this.$container.addClass(this.state()), this.setCookie(this.state())
            }
            return _createClass(ToggleSwitch, [{
                key: "switch",
                value: function() {
                    this.isOff() ? this.on() : this.off()
                }
            }, {
                key: "on",
                value: function() {
                    this.$container.removeClass("off"), this.$container.addClass("on"), this.setCookie("on")
                }
            }, {
                key: "off",
                value: function() {
                    this.$container.removeClass("on"), this.$container.addClass("off"), this.setCookie("off")
                }
            }, {
                key: "setCookie",
                value: function(state) {
                    Cookies.set(this.cookie, state)
                }
            }, {
                key: "state",
                value: function() {
                    return Cookies.get(this.cookie) || defaultState
                }
            }, {
                key: "isOff",
                value: function() {
                    return "off" == this.state()
                }
            }, {
                key: "isOn",
                value: function() {
                    return "on" == this.state()
                }
            }]), ToggleSwitch
        }();
    global.ToggleSwitch = ToggleSwitch
}(window, jQuery);
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    _get = function(_x, _x2, _x3) {
        for (var _again = !0; _again;) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = !1, null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc !== undefined) {
                if ("value" in desc) return desc.value;
                var getter = desc.get;
                return getter === undefined ? undefined : getter.call(receiver)
            }
            var parent = Object.getPrototypeOf(object);
            if (null === parent) return undefined;
            _x = parent, _x2 = property, _x3 = receiver, _again = !0, desc = parent = undefined
        }
    };
! function(global, $, ToggleSwitch) {
    "use strict";

    function triggerGirlsGamesFilter() {
        $(document).trigger("girlsGamesFilterUpdated")
    }
    var girlsGamesLabels = "Girl,Girls",
        GirlsGamesSwitcher = function(_ToggleSwitch) {
            function GirlsGamesSwitcher(container) {
                _classCallCheck(this, GirlsGamesSwitcher), _get(Object.getPrototypeOf(GirlsGamesSwitcher.prototype), "constructor", this).call(this, {
                    container: container,
                    cookie: "girls_games_filter"
                }), this.isOn() ? GirlsGamesSwitcher.setLabels("") : GirlsGamesSwitcher.setLabels(girlsGamesLabels), triggerGirlsGamesFilter.call()
            }
            return _inherits(GirlsGamesSwitcher, _ToggleSwitch), _createClass(GirlsGamesSwitcher, [{
                key: "on",
                value: function() {
                    _get(Object.getPrototypeOf(GirlsGamesSwitcher.prototype), "on", this).call(this), GirlsGamesSwitcher.setLabels("")
                }
            }, {
                key: "off",
                value: function() {
                    _get(Object.getPrototypeOf(GirlsGamesSwitcher.prototype), "off", this).call(this), GirlsGamesSwitcher.setLabels(girlsGamesLabels)
                }
            }, {
                key: "switch",
                value: function() {
                    _get(Object.getPrototypeOf(GirlsGamesSwitcher.prototype), "switch", this).call(this), triggerGirlsGamesFilter.call()
                }
            }], [{
                key: "setLabels",
                value: function(labels) {
                    $("body").attr("data-girls-labels", labels).data("girls-labels", labels)
                }
            }]), GirlsGamesSwitcher
        }(ToggleSwitch);
    global.GirlsGamesSwitcher = GirlsGamesSwitcher
}(window, jQuery, ToggleSwitch), $(function() {
    $(".toggle-switch.girls-games-filter").each(function() {
        var girlsGamesSwitcher = new GirlsGamesSwitcher(this);
        $(this).on("click", function(e) {
            e.preventDefault(), girlsGamesSwitcher["switch"]()
        })
    })
});
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    ParentalControl = function() {
        function ParentalControl() {
            _classCallCheck(this, ParentalControl)
        }
        return _createClass(ParentalControl, [{
            key: "open",
            value: function() {
                $(".parental-control-link-hidden").click()
            }
        }, {
            key: "close",
            value: function() {
                $("#parental-filter-form").fadeOut(200)
            }
        }, {
            key: "initForm",
            value: function() {
                var _this = this;
                $("#parental_filter_label_ids").chosen(), $(".show-update-control").click(function(e) {
                    e.preventDefault(), _this.showControlForm(), $(document).trigger("checkOverlayMenus")
                }), $(".show-update-password").click(function(e) {
                    e.preventDefault(), _this.showPasswordForm(), $(document).trigger("checkOverlayMenus")
                }), this.dealWithOnOffSwitch(), $("form.update-control input, span.onoffswitch-inner").on("change select", function() {
                    $("#parental-filter-flash").fadeOut(200)
                })
            }
        }, {
            key: "setupDataFromCookie",
            value: function() {
                if (Cookies.get("parental_filter") && Cookies.get("parental_labels")) return $("body").data("parental-filter", Cookies.get("parental_filter")), ParentalControl.setLabels(this.labels(), Cookies.get("parental_filter")), void $(document).trigger("parentalFilterUpdated");
                $.ajax({
                    url: "/ajax/parental_filter",
                    error: function(request) {
                        logConnectionError(request, "in showParentalData")
                    },
                    success: function(data) {
                        data && data.parental_filter && ($("body").data("parental-filter", data.parental_filter), ParentalControl.setLabels(data.parental_labels.join(","), data.parental_filter), $(document).trigger("parentalFilterUpdated"))
                    }
                })
            }
        }, {
            key: "showPasswordForm",
            value: function() {
                $(".update-control").hide(), $(".update-password").show()
            }
        }, {
            key: "showControlForm",
            value: function() {
                $(".update-control").show(), $(".update-password").hide()
            }
        }, {
            key: "dealWithOnOffSwitch",
            value: function() {
                $(".onoffswitch-inner").click(function() {
                    $(".parental_filter_labels").toggle()
                })
            }
        }, {
            key: "labels",
            value: function() {
                return Cookies.get("parental_labels").replace(/\+/g, " ")
            }
        }], [{
            key: "setLabels",
            value: function(labels, filter) {
                "false" == filter && (labels = ""), $("body").data("parental-labels", labels)
            }
        }]), ParentalControl
    }();
$(document).ready(function() {
    window.parentalControl = new ParentalControl, parentalControl.setupDataFromCookie(), $(document).on("topMenu.forceClose", window.parentalControl.close)
});
var SortBy = {
        init: function(selector) {
            var $element = $(selector);
            0 != $element.length && (this.$selector = $element, this.$selector.change(this.location.bind(this)))
        },
        location: function() {
            var location = window.location.pathname;
            return this.sort() && (location += this.appendParam(window.location.search, "order", this.sort())), window.location = location
        },
        sort: function() {
            return this.$selector.children("option:selected").val()
        },
        appendParam: function(query, key, value) {
            var hash, i, re, separator;
            return i = query.indexOf("#"), hash = -1 === i ? "" : query.substr(i), query = -1 === i ? query : query.substr(0, i), re = new RegExp("([?&])" + key + "=.*?(&|$)", "i"), separator = -1 !== query.indexOf("?") ? "&" : "?", query.match(re) ? query.replace(re, "$1" + key + "=" + value + "$2") + hash : query + separator + key + "=" + value + hash
        }
    },
    ItemSearch = {
        onSubmit: function() {
            $("#items-search-form").submit(function() {
                return "mobile" == window.UserAgent.device.type && $(this).append('<input type="hidden" name="mobile" value="true" />'), !0
            })
        },
        suggestion: function() {
            "mobile" == window.UserAgent.device.type && $(".mobile-search").css("display", "block")
        }
    },
    UnityVersionLink = {
        init: function() {
            $(".unity-version-link").length && ($(".webplayer-version-link").show(), this.webgl() || this.webglSmartFrame() ? $(".webplayer-version-link").show() : (this.webplayer() || this.webplayerSmartFrame()) && ($(".webgl-version-link").show(), $(".webplayer-version-link").hide()))
        },
        webgl: function() {
            return /\/webgl$/.test(window.location.pathname)
        },
        webglSmartFrame: function() {
            return /\/webgl\/smart_frame$/.test(window.location.pathname)
        },
        webplayer: function() {
            return /\/unity3d$/.test(window.location.pathname)
        },
        webplayerSmartFrame: function() {
            return /\/unity3d\/smart_frame$/.test(window.location.pathname)
        }
    },
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }();
! function(global, $) {
    "use strict";
    var VideoRollover = function() {
        function VideoRollover(item) {
            _classCallCheck(this, VideoRollover), this.item = item, this.$item = $(item)
        }
        return _createClass(VideoRollover, [{
            key: "appendVideo",
            value: function() {
                var $vidContainer = this.videoContainer();
                this.$item.find(".playable").after($vidContainer), $vidContainer.fadeIn(200)
            }
        }, {
            key: "removeVideo",
            value: function() {
                this.$item.find(".vid-container").fadeOut(200, function() {
                    $(this).remove()
                })
            }
        }, {
            key: "video",
            value: function() {
                var mp4Source = this.$item.data("mp4-movie"),
                    vp8Source = this.$item.data("vp8-movie"),
                    ogvSource = this.$item.data("ogv-movie"),
                    imgSource = this.$item.find("img.playable").attr("src"),
                    video = '<video disableRemotePlayback autoplay loop muted poster="' + this.$item.data("poster-url") + '">';
                return mp4Source && (video += '<source src="' + mp4Source + '" type="video/mp4" />'), vp8Source && (video += '<source src="' + vp8Source + '" type="video/webm" />'), ogvSource && (video += '<source src="' + ogvSource + '" type="video/ogv" />'), imgSource && (video += '<img src="' + imgSource + '" />'), video += "</video>", video
            }
        }, {
            key: "videoContainer",
            value: function() {
                var vidContainer = '<div style="display:none;" class="vid-container vid-container-' + this.videoContainerClass() + '">';
                return vidContainer += this.video(), vidContainer += "</div>", $(vidContainer)
            }
        }, {
            key: "videoContainerClass",
            value: function() {
                return "IE" == window.UserAgent.browser.name ? "msie" : "normal"
            }
        }]), VideoRollover
    }();
    global.VideoRollover = VideoRollover
}(window, jQuery);
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    _get = function(_x, _x2, _x3) {
        for (var _again = !0; _again;) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = !1, null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc !== undefined) {
                if ("value" in desc) return desc.value;
                var getter = desc.get;
                return getter === undefined ? undefined : getter.call(receiver)
            }
            var parent = Object.getPrototypeOf(object);
            if (null === parent) return undefined;
            _x = parent, _x2 = property, _x3 = receiver, _again = !0, desc = parent = undefined
        }
    };
! function(global, $, VideoRollover) {
    "use strict";
    var VideoRolloverMobile = function(_VideoRollover) {
        function VideoRolloverMobile(item) {
            _classCallCheck(this, VideoRolloverMobile), _get(Object.getPrototypeOf(VideoRolloverMobile.prototype), "constructor", this).call(this, item)
        }
        return _inherits(VideoRolloverMobile, _VideoRollover), _createClass(VideoRolloverMobile, [{
            key: "video",
            value: function() {
                var mp4Source = this.$item.data("mp4-movie");
                return '<video autoplay loop disableRemotePlayback playsinline webkit-playsinline muted poster="' + this.$item.data("poster-url") + '" src="' + mp4Source + '"></video>'
            }
        }, {
            key: "videoContainerClass",
            value: function() {
                return "IE" == window.UserAgent.browser.name ? "msie" : "normal"
            }
        }]), VideoRolloverMobile
    }(VideoRollover);
    global.VideoRolloverMobile = VideoRolloverMobile
}(window, jQuery, VideoRollover);
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    _get = function(_x, _x2, _x3) {
        for (var _again = !0; _again;) {
            var object = _x,
                property = _x2,
                receiver = _x3;
            _again = !1, null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc !== undefined) {
                if ("value" in desc) return desc.value;
                var getter = desc.get;
                return getter === undefined ? undefined : getter.call(receiver)
            }
            var parent = Object.getPrototypeOf(object);
            if (null === parent) return undefined;
            _x = parent, _x2 = property, _x3 = receiver, _again = !0, desc = parent = undefined
        }
    };
! function(global, $, VideoRollover) {
    "use strict";

    function nextThumbIndex() {
        return this.currentThumbIndex++, this.currentThumbIndex >= this.thumbsCount && (this.currentThumbIndex = 0), this.currentThumbIndex
    }

    function to_a(attrName) {
        return $.makeArray(this.$item.data(attrName))
    }

    function play() {
        var _this = this;
        this.timer = global.setInterval(function() {
            var nextIndex = nextThumbIndex.call(_this),
                thumb = _this.thumbs[nextIndex];
            _this.$item.find(".vid-container").find("img").attr("src", thumb)
        }, ROTATION_INTERVAL)
    }
    var ROTATION_INTERVAL = 1e3,
        ThumbRolloverMobile = function(_VideoRollover) {
            function ThumbRolloverMobile(item) {
                _classCallCheck(this, ThumbRolloverMobile), _get(Object.getPrototypeOf(ThumbRolloverMobile.prototype), "constructor", this).call(this, item), this.thumbs = to_a.call(this, "thumb-movie"), this.thumbsCount = this.thumbs.length, this.currentThumbIndex = 0, this.timer = undefined
            }
            return _inherits(ThumbRolloverMobile, _VideoRollover), _createClass(ThumbRolloverMobile, [{
                key: "appendVideo",
                value: function() {
                    0 != this.thumbsCount && (_get(Object.getPrototypeOf(ThumbRolloverMobile.prototype), "appendVideo", this).call(this), play.call(this))
                }
            }, {
                key: "video",
                value: function() {
                    return '<img src="' + this.thumbs[0] + '" class="thumb">'
                }
            }, {
                key: "removeVideo",
                value: function() {
                    global.clearInterval(this.timer), _get(Object.getPrototypeOf(ThumbRolloverMobile.prototype), "removeVideo", this).call(this)
                }
            }]), ThumbRolloverMobile
        }(VideoRollover);
    global.ThumbRolloverMobile = ThumbRolloverMobile
}(window, jQuery, VideoRollover);
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function(global) {
    "use strict";
    var footprints = {
            opera: 43,
            opera_mini: 30,
            mobile_safari: 10,
            safari: 10,
            iemobile: 11,
            firefox: 28,
            chrome: 58,
            ucbrowser: 11.3
        },
        RolloverFactory = function() {
            function RolloverFactory() {
                _classCallCheck(this, RolloverFactory)
            }
            return _createClass(RolloverFactory, [{
                key: "createRollover",
                value: function(item) {
                    return this.canPlayMp4() ? new VideoRolloverMobile(item) : new ThumbRolloverMobile(item)
                }
            }, {
                key: "canPlayMp4",
                value: function() {
                    var browserName = UserAgent.browser.name.toLowerCase().replace(" ", "_"),
                        browserVersion = UserAgent.browser.major;
                    return browserName in footprints && browserVersion >= footprints[browserName]
                }
            }]), RolloverFactory
        }();
    global.RolloverFactory = RolloverFactory
}(window);
var VideoPreview = function() {
        var redirectToMobileUrl = function(event, item) {
            var itemUrl = $(item).find("a").data("mobile-url");
            return !(itemUrl !== undefined && itemUrl.length > 0) || (event.stopImmediatePropagation(), event.preventDefault(), window.location = itemUrl, !1)
        };
        return {
            init: function() {
                var items = $(".items-grid").length > 0 ? $(".items-grid") : $(document),
                    deviceType = UserAgent.device.type;
                if ("mobile" == deviceType || "tablet" == deviceType) {
                    var rollover = undefined;
                    items.on("touchstart click", "[data-mp4-movie]", function(e) {
                        if ("click" == e.type) return "videotime" == appInfo.currentSkin.shortName || redirectToMobileUrl(e, this);
                        rollover && rollover.item == this || (rollover && rollover.removeVideo(), rollover = (new RolloverFactory).createRollover(this), rollover.appendVideo())
                    })
                } else items.on("mouseenter", "[data-mp4-movie]", function() {
                        new VideoRollover(this).appendVideo()
                    }),
                    items.on("mouseleave", "[data-mp4-movie]", function() {
                        new VideoRollover(this).removeVideo()
                    })
            }
        }
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    UserCountryResolver = function() {
        function UserCountryResolver() {
            _classCallCheck(this, UserCountryResolver), this.endpoint = "/ajax/user_c_info", this.cookieName = "_y8_uci", this.cookieExpiration = 7, this.cookieDomain = "." + window.location.hostname.split(".").slice(-2).join(".")
        }
        return _createClass(UserCountryResolver, [{
            key: "resolve",
            value: function(force) {
                var _this = this,
                    deferred = $.Deferred();
                return this.country && !force ? (deferred.resolve(this.countryInfo(this.country)), deferred.promise()) : (this.fetch().then(function(data) {
                    if (!Array.isArray(data) || !data.length) return deferred.reject("UCR failed: no data from server"), deferred.promise();
                    var value = data.reverse().map(function(c) {
                        return String.fromCharCode(c)
                    }).join("");
                    Cookies.set(_this.cookieName, value, _this.cookieOptions()), deferred.resolve(_this.countryInfo(value))
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    deferred.reject("UCR failed: " + errorThrown)
                }), deferred.promise())
            }
        }, {
            key: "countryInfo",
            value: function(iso_alpha_2) {
                return {
                    code: iso_alpha_2,
                    name: ISO_ALPHA_2_TO_COUNTRY_NAME_MAP[iso_alpha_2]
                }
            }
        }, {
            key: "cookieOptions",
            value: function() {
                return {
                    path: "/",
                    domain: this.cookieDomain,
                    expires: this.cookieExpiration
                }
            }
        }, {
            key: "fetch",
            value: function() {
                return $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: this.endpoint,
                    timeout: 3e3
                })
            }
        }, {
            key: "country",
            get: function() {
                return Cookies.get(this.cookieName)
            }
        }]), UserCountryResolver
    }(),
    ISO_ALPHA_2_TO_COUNTRY_NAME_MAP = {
        AD: "Andorra",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AO: "Angola",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AX: "\xc5land Islands",
        AZ: "Azerbaijan",
        BA: "Bosnia and Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BL: "Saint Barth\xe9lemy",
        BM: "Bermuda",
        BN: "Brunei Darussalam",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius and Saba",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BV: "Bouvet Island",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos (Keeling) Islands",
        CF: "Central African Republic",
        CG: "Congo",
        CH: "Switzerland",
        CI: "C\xf4te D'Ivoire",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CU: "Cuba",
        CV: "Cape Verde",
        CW: "Cura\xe7ao",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Republic",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FK: "Falkland Islands (Malvinas)",
        FM: "Micronesia",
        FO: "Faroe Islands",
        FR: "France",
        GA: "Gabon",
        GB: "United Kingdom",
        GD: "Grenada",
        GE: "Georgia",
        GF: "French Guiana",
        GG: "Guernsey",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GS: "South Georgia and the South Sandwich Islands",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "Hong Kong",
        HM: "Heard and McDonald Islands",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IN: "India",
        IO: "British Indian Ocean Territory",
        IQ: "Iraq",
        IR: "Iran",
        IS: "Iceland",
        IT: "Italy",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        KE: "Kenya",
        KG: "Kyrgyzstan",
        KH: "Cambodia",
        KM: "Comoros",
        KN: "Saint Kitts And Nevis",
        KP: "Korea",
        KR: "Korea",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Lao People's Democratic Republic",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Moldova",
        ME: "Montenegro",
        MF: "Saint Martin",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "Macedonia",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolia",
        MO: "Macao",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NR: "Nauru",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "Saint Pierre And Miquelon",
        PN: "Pitcairn",
        PR: "Puerto Rico",
        PS: "Palestine",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "R\xe9union",
        RO: "Romania",
        RS: "Serbia",
        RU: "Russian Federation",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Sweden",
        SG: "Singapore",
        SH: "Saint Helena",
        SI: "Slovenia",
        SJ: "Svalbard And Jan Mayen",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SR: "Suriname",
        SS: "South Sudan",
        ST: "Sao Tome and Principe",
        SV: "El Salvador",
        SX: "Sint Maarten",
        SY: "Syrian Arab Republic",
        SZ: "Swaziland",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TL: "Timor-Leste",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TR: "Turkey",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TW: "Taiwan",
        TZ: "Tanzania",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "United States Minor Outlying Islands",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VC: "Saint Vincent And The Grenedines",
        VE: "Venezuela",
        VG: "Virgin Islands, British",
        VI: "Virgin Islands, U.S.",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna",
        WS: "Samoa",
        YE: "Yemen",
        YT: "Mayotte",
        ZA: "South Africa",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    },
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    TopTags = function() {
        function TopTags() {
            _classCallCheck(this, TopTags), this.singleLineHeight = 35, this.atEndEnsurer = new ElementAtEndEnsurer(".top-tags__wrapper", ".more-tags", {
                numberOfLines: 1
            })
        }
        return _createClass(TopTags, [{
            key: "init",
            value: function() {
                this.atEndEnsurer.enable()
            }
        }]), TopTags
    }();
$(function() {
    (new TopTags).init()
});
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    SearchTracker = function() {
        function SearchTracker() {
            _classCallCheck(this, SearchTracker), this.endpoint = "/tracking/search_query", this.searchForm = $("#items-search-form"), this.cookieName = "_y8_srch", this.cookieExpiration = 1, this.cookieDomain = "." + window.location.hostname.split(".").slice(-2).join("."), this.cookieOptions = {
                path: "/",
                domain: this.cookieDomain,
                expires: this.cookieExpiration
            }, this.limitQueryLength = 50
        }
        return _createClass(SearchTracker, [{
            key: "track",
            value: function() {
                var _this = this;
                this.syncCache(), this.searchForm.submit(function(event) {
                    var query = $(event.target).find("#q").val(),
                        kind = $(event.target).find("#kind").val();
                    return Cookies.set(_this.cookieName, _this.sanitize(query) + ":" + kind, _this.cookieOptions), !0
                })
            }
        }, {
            key: "syncCache",
            value: function() {
                var _this2 = this,
                    data = Cookies.get(this.cookieName);
                if (data) {
                    data = data.split(":");
                    var query = this.sanitize(data[0]),
                        kind = data[1];
                    $.ajax({
                        url: this.endpoint,
                        type: "POST",
                        data: {
                            q: query,
                            kind: kind
                        }
                    }).done(function() {
                        return _this2.cleanCache()
                    })
                }
            }
        }, {
            key: "cleanCache",
            value: function() {
                Cookies.remove(this.cookieName, this.cookieOptions)
            }
        }, {
            key: "sanitize",
            value: function(query) {
                return query && 0 !== query.length ? query.toLowerCase().replace(/\s+/g, " ").substring(0, this.limitQueryLength).trim() : query
            }
        }]), SearchTracker
    }();
$(function() {
    "requestIdleCallback" in window ? requestIdleCallback(function() {
        return (new SearchTracker).track()
    }) : setTimeout(function() {
        return (new SearchTracker).track()
    }, 1)
});
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    ElementAtEndEnsurer = function() {
        function ElementAtEndEnsurer(containerSelector, lastElementSelector, options) {
            _classCallCheck(this, ElementAtEndEnsurer), this.containerSelector = containerSelector, this.lastElementSelector = lastElementSelector, this.resizeEventName = "resize.eae." + containerSelector + lastElementSelector, this.settings = $.extend({
                numberOfLines: 2,
                marginBetweenElements: 5,
                show: {
                    display: "inline-block"
                },
                hide: {
                    display: "none"
                },
                elementSelector: "li"
            }, options)
        }
        return _createClass(ElementAtEndEnsurer, [{
            key: "enable",
            value: function() {
                var _this = this;
                this.ensureAtEnd(), $(window).on(this.resizeEventName, function() {
                    _this.ensureAtEnd()
                })
            }
        }, {
            key: "ensureAtEnd",
            value: function() {
                var _this2 = this,
                    $container = $(this.containerSelector),
                    $element = $container.find(this.lastElementSelector),
                    $row = $container.find(".row"),
                    $allElements = $container.find(this.settings.elementSelector);
                $row.removeClass("auto-height"), $allElements.css(this.settings.show), $element.css(this.settings.hide), $allElements.first()[0] !== $element[0] && $element.insertBefore($allElements.first());
                var last = this.lastVisibleElement($allElements);
                $element.insertAfter(last).css(this.settings.show), this.contentOverflows($row) ? function() {
                    for (var width = last.width() + _this2.settings.marginBetweenElements, neededWidth = $element.width(); width < neededWidth;) last = last.prev(), width += last.width() + _this2.settings.marginBetweenElements;
                    $element.insertBefore(last).css(_this2.settings.show);
                    var afterElement = !1;
                    $row.find(_this2.settings.elementSelector).each(function(i, e) {
                        afterElement && $(e).css(_this2.settings.hide), $(e).hasClass(_this2.lastElementSelector.split(".")[1]) && (afterElement = !0)
                    })
                }() : $row.addClass("auto-height")
            }
        }, {
            key: "lastVisibleElement",
            value: function($allElements) {
                var _this3 = this,
                    top = this.topOfLastVisibleLine($allElements),
                    $last = $allElements.filter(function(i, e) {
                        return !$(e).hasClass(_this3.lastElementSelector.substring(1)) && $(e).position().top == top
                    }).last();
                return 0 == $last.length && ($last = $allElements.last()), $last
            }
        }, {
            key: "topOfLastVisibleLine",
            value: function($allElements) {
                var _this4 = this,
                    top = -1,
                    line = 0;
                return $allElements.each(function(i, e) {
                    return !!$(e).hasClass(_this4.lastElementSelector.substring(1)) || !($(e).position().top > top && (top = $(e).position().top, ++line == _this4.settings.numberOfLines)) && void 0
                }), top
            }
        }, {
            key: "disable",
            value: function() {
                $(this.containerSelector).find(this.settings.elementSelector).css(this.settings.show), $(window).off(this.resizeEventName)
            }
        }, {
            key: "contentOverflows",
            value: function($row) {
                var el = $row[0];
                return !!el && (el.offsetHeight < el.scrollHeight || el.offsetWidth < el.scrollWidth)
            }
        }]), ElementAtEndEnsurer
    }();
"serviceWorker" in navigator && navigator.serviceWorker.register("/service-worker.js");
var ShowMoreLess = {
        config: {
            calculateHeight: !1
        },
        init: function(calculateHeight) {
            void 0 !== calculateHeight && (this.config.calculateHeight = calculateHeight), this.setupData(), $(".show-button.more").click(this.clickForMore.bind(this)), $(".show-button.less").click(this.clickForLess.bind(this))
        },
        setupData: function() {
            var _this = this;
            $(".show-button.more").each(function() {
                var initialHeight = $(this).prev().height(),
                    contentHeight = _this.contentHeight($(this).prev());
                $(this).data("initial-height", initialHeight), contentHeight > initialHeight && $(this).show()
            })
        },
        contentHeight: function($parent) {
            if (this.config.calculateHeight) {
                return $.map($parent.children().toArray(), function(child) {
                    return $(child).height()
                }).reduce(function(a, b) {
                    return a + b
                })
            }
            return $parent.children().height()
        },
        clickForMore: function(e) {
            e.preventDefault(), $(e.currentTarget).prev().height("auto"), $(e.currentTarget).hide(), $(e.currentTarget).next().show()
        },
        clickForLess: function(e) {
            e.preventDefault(), $(e.currentTarget).prev().prev().height($(e.currentTarget).prev().data("initial-height")), $(e.currentTarget).hide(), $(e.currentTarget).prev().show(), this.scrollToHeading(e.currentTarget)
        },
        scrollToHeading: function(showButtonDiv) {
            var anchorId = $(showButtonDiv).find("a").attr("href"),
                offset = $(anchorId).offset().top - 150;
            $("html, body").animate({
                scrollTop: offset
            }, 200)
        }
    },
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    AccountMenu = function() {
        function AccountMenu() {
            _classCallCheck(this, AccountMenu), this.$element = $("#user_logged_in .links-container")
        }
        return _createClass(AccountMenu, [{
            key: "init",
            value: function() {
                $(document).on("user-info-ready", function(event, data) {
                    if (data && null != data) {
                        var port = 80 != location.port ? ":" + location.port : "",
                            properDomain = location.protocol + "//" + location.hostname + port,
                            profilePath = properDomain + "/users/" + data.user_pid + "/" + data.username;
                        $("#account-menu-link-profile").attr("href", profilePath), $("#account-menu-link-edit-profile").attr("href", data.edit_profile_url), $("#account-menu-link-games").attr("href", profilePath), $(".logout").click(function() {
                            window.location.href = "/logout"
                        }), $("#account-menu-link-visited").click(function(e) {
                            window.location.href = $(e.currentTarget).attr("destination")
                        });
                        "1" === Cookies.get("_resh") ? ($("#account-menu-link-my-revenue").click(function(e) {
                            window.location.href = $(e.currentTarget).attr("destination")
                        }), $("#account-menu-link-my-revenue").show()) : $("#account-menu-link-my-revenue").parent().remove()
                    }
                }), $(document).on("favorites-count", function(event, cnt) {
                    $(".js-favorites-count").text(cnt)
                }), $(document).on("topMenu.forceClose", this.close.bind(this))
            }
        }, {
            key: "open",
            value: function() {
                this.$element.fadeToggle(200)
            }
        }, {
            key: "close",
            value: function() {
                this.$element.is(":visible") && this.$element.fadeOut(200)
            }
        }]), AccountMenu
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    BrowseMenu = function() {
        function BrowseMenu() {
            _classCallCheck(this, BrowseMenu), this.$element = $(".y8-navbar-right .browse-menu")
        }
        return _createClass(BrowseMenu, [{
            key: "init",
            value: function() {
                $(window).resize(this.close), $(document).on("topMenu.forceClose", this.close.bind(this))
            }
        }, {
            key: "open",
            value: function() {
                this.$element.fadeToggle(200)
            }
        }, {
            key: "close",
            value: function() {
                this.$element && this.$element.is(":visible") && this.$element.fadeOut(200)
            }
        }]), BrowseMenu
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    NewGamesMenu = function() {
        function NewGamesMenu() {
            _classCallCheck(this, NewGamesMenu), this.$element = $(".y8-navbar-right .newgames-menu")
        }
        return _createClass(NewGamesMenu, [{
            key: "init",
            value: function() {
                $(window).resize(this.close), $(document).on("topMenu.forceClose", this.close.bind(this))
            }
        }, {
            key: "open",
            value: function() {
                this.$element.fadeToggle(200)
            }
        }, {
            key: "close",
            value: function() {
                this.$element && this.$element.is(":visible") && this.$element.fadeOut(200)
            }
        }]), NewGamesMenu
    }();
jQuery(function($) {
    function outboundFromFlashOrUnity() {
        return "undefined" != typeof document.webkitHidden && document.webkitHidden && !oblTriggered && focusOnGame && !iframeGame
    }

    function outboundFromIframe() {
        return "undefined" != typeof document.webkitHidden && document.webkitHidden && focusOnGame && iframeGame
    }
    if ("Chrome" == window.UserAgent.browser.name && parseInt(window.UserAgent.browser.major, 10) >= 40 && $("body[data-controller=Items][data-action=show]").length) {
        var initTime = Date.now(),
            oblTriggered = !1,
            focusOnGame = !1,
            iframeGame = !!$("#item-container iframe").length;
        $("#item-container iframe, #item-container embed, #item-container object").hover(function() {
            focusOnGame = !0
        }, function() {
            focusOnGame = !1
        }), $("#item-container embed, #item-container object").on("mouseup", function() {
            setTimeout(function() {
                if (outboundFromFlashOrUnity()) {
                    var outTime = Date.now() - initTime;
                    $.post("/tracking/outbound_link", {
                        tog: outTime
                    }), oblTriggered = !0
                }
            }, 1e3)
        }), $(document).on("webkitvisibilitychange", function(event) {
            if (outboundFromIframe()) {
                var outTime = Date.now() - initTime;
                $.post("/tracking/outbound_link", {
                    tog: outTime
                }), $(this).off(event)
            }
        })
    }
});
var PluginManager = function PluginManager() {
    if (_classCallCheck(this, PluginManager), "IE" == window.UserAgent.browser.name) {
        var $object = $(".item-container").find("object"),
            $parentMenu = ($(".content"), $(".parental-filter-form")),
            $localeMenu = $(".locales-container");
        $(document).on("checkOverlayMenus", function() {
            var searchOpen = $("#q").is(":focus"),
                parentOpen = "" != $parentMenu.html(),
                localeOpen = "none" != $localeMenu.css("display"),
                browseOpen = $(".browse-menu").is(":visible");
            searchOpen || parentOpen || localeOpen || ID.isVisible() || browseOpen ? hideGame() : showGame()
        });
        var showGame = function() {
                $object.css("visibility", "visible")
            },
            hideGame = function() {
                $object.css("visibility", "hidden")
            }
    }
};
$(function() {
    new PluginManager
});
var RenderFlashMessages = new function() {
        return {
            init: function() {
                $(document).ready(function() {
                    $.each(["notice", "alert"], function(i, flashType) {
                        var cookieName = "flash-" + flashType,
                            cookie = Cookies.get(cookieName);
                        cookie && ($("#flash-" + flashType).html(cookie.replace(/\+/g, " ")), Cookies.remove(cookieName, {
                            path: "/"
                        }), $(".flash-" + flashType).show())
                    }), $(".flash-messages-box").delay(500).slideDown(), $(".flash-messages-box .close").delay(700).show(), "block" == $(".flash-notice").css("display") && $(".flash-messages-box").delay(4e3).slideUp(), $(".flash-messages-box .close").click(function(e) {
                        e.preventDefault, $(".flash-messages-box").slideUp()
                    })
                })
            }
        }
    },
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    LibraryCookieSetter = function() {
        function LibraryCookieSetter(cookieName, itemId) {
            _classCallCheck(this, LibraryCookieSetter), this.skin = window.appInfo.currentSkin, this.cookieDomain = "." + this.skin.name, this.cookieExpiration = 365, this.maxIds = 100, this.allowedSkins = ["y8", "videotime"], this.cookieName = cookieName, this.removeOldCookie(), this.cookieVal = Cookies.get(cookieName), this.saveGameId(itemId)
        }
        return _createClass(LibraryCookieSetter, [{
            key: "saveGameId",
            value: function(itemId) {
                if (!(this.allowedSkins.indexOf(this.skin.shortName) < 0)) {
                    var arrayOfIds = this.cookieVal ? JSON.parse(this.cookieVal) : [],
                        index = arrayOfIds.indexOf(itemId);
                    index > -1 && arrayOfIds.splice(index, 1), arrayOfIds.push(itemId), arrayOfIds.length > this.maxIds && arrayOfIds.splice(0, 1);
                    var result = JSON.stringify(arrayOfIds);
                    Cookies.set(this.cookieName, result, {
                        path: "/",
                        domain: this.cookieDomain,
                        expires: this.cookieExpiration
                    })
                }
            }
        }, {
            key: "removeOldCookie",
            value: function() {
                this.skin.is("y8") && Cookies.remove(this.cookieName, {
                    path: "/",
                    expires: this.cookieExpiration
                })
            }
        }]), LibraryCookieSetter
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }();
! function(global, $) {
    function currentKind() {
        return global.appInfo.currentKind
    }

    function currentTime() {
        return new Date
    }

    function domElement() {
        return $(".release-countdown")
    }
    var ReleaseTimer = function() {
        function ReleaseTimer() {
            _classCallCheck(this, ReleaseTimer)
        }
        return _createClass(ReleaseTimer, [{
            key: "display",
            value: function() {
                var _this = this,
                    $domElement = domElement();
                setInterval(function() {
                    var nowTime = currentTime(),
                        distance = _this.timeForNextRelease(nowTime) - nowTime;
                    if (distance < 0) $domElement.html("00:00");
                    else {
                        var days = Math.floor(distance / 864e5),
                            hours = Math.floor(distance % 864e5 / 36e5),
                            minutes = Math.floor(distance % 36e5 / 6e4),
                            seconds = Math.floor(distance % 6e4 / 1e3);
                        $domElement.html(_this.generateCountdown(days, hours, minutes, seconds))
                    }
                }, 1e3)
            }
        }, {
            key: "generateCountdown",
            value: function(days, hours, minutes, seconds) {
                var countdown = "";
                return days > 0 && (countdown += "" + ("0" + days).slice(-2)), hours > 0 && (countdown += ("0" + hours).slice(-2) + ":"), countdown += ("0" + minutes).slice(-2) + ":", countdown += "" + ("0" + seconds).slice(-2)
            }
        }, {
            key: "timeForNextRelease",
            value: function(nowTime) {
                var $domElement = domElement(),
                    nextReleaseTime = new Date;
                if ("game" == currentKind()) var frequencyByHour = parseInt($domElement.data("game-frequency")),
                    minutesOnHour = 7;
                else var frequencyByHour = parseInt($domElement.data("animation-frequency")),
                    minutesOnHour = 8;
                nextReleaseTime.setUTCSeconds(0), nextReleaseTime.setUTCMinutes(minutesOnHour);
                var hourGap = nextReleaseTime.getUTCHours() % frequencyByHour;
                return 0 == hourGap && nowTime.getUTCMinutes() > minutesOnHour && (hourGap = frequencyByHour), nextReleaseTime.setUTCHours(nextReleaseTime.getUTCHours() + hourGap), nextReleaseTime
            }
        }]), ReleaseTimer
    }();
    global.ReleaseTimer = ReleaseTimer
}(window, jQuery), $(function() {
    (new ReleaseTimer).display()
});
var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
        }
        return target
    },
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    PolicyValidator = function() {
        function PolicyValidator() {
            _classCallCheck(this, PolicyValidator), this.$informationBar = $(".policy-validation"), this.$button = $(".policy-validation .actions .validate-policy"), this.serviceControl = null
        }
        return _createClass(PolicyValidator, [{
            key: "process",
            value: function() {
                var _this = this;
                return "true" == Cookies.get("privacy_policy_validated") ? void(!this.serviceControl && Cookies.get("user_id") && this.validateWithApi()) : this.serviceControl ? void this.validateWithCookie() : (this.showInformationBar(), void this.$button.click(function(event) {
                    event.preventDefault(), _this.validate()
                }))
            }
        }, {
            key: "validate",
            value: function() {
                Cookies.get("user_id") ? this.validateWithApi() : this.validateWithCookie()
            }
        }, {
            key: "validateWithCookie",
            value: function() {
                Cookies.set("privacy_policy_validated", !0, this.cookieOptions()), this.hideInformationBar()
            }
        }, {
            key: "validateWithApi",
            value: function() {
                var _this2 = this;
                $.ajax({
                    type: "PUT",
                    url: "/profile/validate_privacy_policy",
                    success: function() {
                        _this2.validateWithCookie()
                    },
                    error: function(data) {
                        console.log(data)
                    }
                })
            }
        }, {
            key: "showInformationBar",
            value: function() {
                this.$informationBar.show()
            }
        }, {
            key: "hideInformationBar",
            value: function() {
                this.$informationBar.hide()
            }
        }, {
            key: "setControlValueFromService",
            value: function(serviceControlValue) {
                this.serviceControl = serviceControlValue
            }
        }, {
            key: "cookieOptions",
            value: function() {
                var expires = {
                    expires: 36500,
                    expirationDate: Math.floor(Date.now() / 1e3) + 365e5,
                    name: "policy"
                };
                return Object.assign(_extends({}, expires), window.appInfo.commonCookieOptions)
            }
        }]), PolicyValidator
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    NotificationManager = function() {
        function NotificationManager() {
            _classCallCheck(this, NotificationManager), this.$box = $(".notification-manager"), this.$hideButton = $(".notification-manager .actions .hide-notification"), this.$browseBubble = $(".y8-navbar-right .browse .with-notification"), this.cookieValue = "notification_forum"
        }
        return _createClass(NotificationManager, [{
            key: "process",
            value: function() {
                this.isHidden() || this.show()
            }
        }, {
            key: "show",
            value: function() {
                var _this = this;
                this.$box.show(), this.$hideButton.click(function(event) {
                    event.preventDefault(), _this.hide()
                })
            }
        }, {
            key: "hide",
            value: function() {
                this.$box.hide(), this.$browseBubble.hide(), Cookies.set(this.cookieValue, !0, this.cookieOptions())
            }
        }, {
            key: "isHidden",
            value: function() {
                return "true" == Cookies.get(this.cookieValue)
            }
        }, {
            key: "cookieOptions",
            value: function() {
                return window.appInfo.commonCookieOptions
            }
        }]), NotificationManager
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    Header = function() {
        function Header() {
            _classCallCheck(this, Header), this.$navbar = $(".navbar"), this.$burgerMenu = $(".mobile-burger-menu .burger-btn"), this.$searchInput = $(".navbar .navbar-form .form-control"), this.$searchBtn = $(".mobile-search-user-container .search-btn"), this.$closeSearchBtn = $(".navbar-form .close-search-form"), this.$profileBtn = $(".mobile-search-user-container .profile-btn"), this.$darkOverlay = $(".dark-overlay")
        }
        return _createClass(Header, [{
            key: "init",
            value: function() {
                $(document).scroll(this.scrollHandler.bind(this)), this.$burgerMenu.click(this.burgerHandler.bind(this)), this.$searchBtn.click(this.searchHandler.bind(this)), this.$closeSearchBtn.click(this.closeSearchHandler.bind(this)), this.$profileBtn.click(this.profileHandler.bind(this)), this.$darkOverlay.click(this.closeSearchHandler.bind(this))
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.$burgerMenu.hasClass("open") && $(document).scrollTop() > 0 ? this.$navbar.addClass("fixed-navbar") : this.$navbar.removeClass("fixed-navbar")
            }
        }, {
            key: "burgerHandler",
            value: function() {
                !this.$burgerMenu.hasClass("open") && this.$navbar.hasClass("show-login-btns") && this.$navbar.removeClass("show-login-btns"), this.$darkOverlay.removeClass("show"), this.$navbar.removeClass("show-search-form hide-search-icon show-user-info"), this.$burgerMenu.toggleClass("open"), this.$navbar.toggleClass("hide-user-icon show-login-btns show-mobile-header-block")
            }
        }, {
            key: "searchHandler",
            value: function() {
                this.$burgerMenu.removeClass("open"), this.$navbar.removeClass("show-login-btns hide-user-icon show-user-info show-mobile-header-block"), this.$navbar.toggleClass("show-search-form hide-search-icon"), this.$searchInput.focus(), this.$darkOverlay.addClass("show")
            }
        }, {
            key: "closeSearchHandler",
            value: function() {
                this.$navbar.removeClass("show-search-form hide-search-icon"), this.$darkOverlay.removeClass("show")
            }
        }, {
            key: "profileHandler",
            value: function() {
                this.$navbar.hasClass("logged") ? (this.closeSearchHandler(), this.$navbar.toggleClass("show-user-info")) : (this.$darkOverlay.removeClass("show"), this.$burgerMenu.removeClass("open"), this.$navbar.removeClass("show-search-form hide-search-icon hide-user-icon"), this.$navbar.toggleClass("show-login-btns"))
            }
        }]), Header
    }();
$(document).ready(function() {
    (new Header).init()
});
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    Skin = function() {
        function Skin(name, shortName) {
            _classCallCheck(this, Skin), this.name = name, this.shortName = shortName
        }
        return _createClass(Skin, [{
            key: "is",
            value: function(shortName) {
                return this.shortName == shortName
            }
        }]), Skin
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    AppInfo = function() {
        function AppInfo() {
            _classCallCheck(this, AppInfo), this.recaptchaV3SiteKey = "6LcCYbgUAAAAAC6jOB2wXW8L59EmH3oVZr0r-qxZ", this.cdn = "https://cdn.y8.com", this.currentSkin = new Skin(this.readMetaContent("name", "X-Current-Skin-Name"), this.readMetaContent("name", "X-Current-Skin-Shortname")), this.currentLocale = $("html").attr("lang"), this.currentKind = this.readMetaContent("name", "X-Current-Kind-Name"), this.commonCookieOptions = {
                domain: "." + this.readMetaContent("name", "X-Current-Skin-Domain"),
                path: "/"
            }, this.accountServiceApiUrls = {
                pointsBonusTimerUrl: "https://account.y8.com/points/bonus_timer",
                profilePointsTotalUrl: "https://account.y8.com/api/v1/json/points/total/:uid",
                profileJsonUrl: "https://account.y8.com/profiles/:uid.json",
                profilePictureUrl: "https://account.y8.com/:uid/profile_picture/new?external=1",
                profileAvatarUrl: "https://account.y8.com/profiles/:uid/profile_avatar",
                socialCounterUrl: "https://account.y8.com/api/v1/json/idnet_social_counters?authorization_id=:uid",
                userAutologinUrl: "https://account.y8.com/api/user_data/autologin?callback=&app_id=:app_id",
                userUrl: "https://account.y8.com/user",
                pidsUrl: "https://account.y8.com/profiles/:profileId/list_pids"
            }
        }
        return _createClass(AppInfo, [{
            key: "readMetaContent",
            value: function(key, value) {
                return $("meta[" + key + '="' + value + '"]').attr("content")
            }
        }]), AppInfo
    }();
$(document).ready(function() {
    window.appInfo = new AppInfo, I18n.locale = window.appInfo.currentLocale
});
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    TopMenu = function() {
        function TopMenu() {
            _classCallCheck(this, TopMenu), this.currentlyOpen = null, this.$background = $(".header-menu-modal"), this.$topMenu = $(".js-top-menu"), this.$topCategories = $(".top-categories"),
                this.$contentRow = this.$topCategories.find(".row"), this.$allCategoriesBtn = $(".all-categories-btn"), this.$allLiElements = this.$topCategories.find("li.li-category"), this.singleLineHeight = 50, this.updateLastElement = new ElementAtEndEnsurer(".top-categories", ".all-categories-btn", {
                    numberOfLines: 1
                })
        }
        return _createClass(TopMenu, [{
            key: "init",
            value: function() {
                this.initMenus(), this.$topMenu.on("click", this.onClick.bind(this)), this.$allCategoriesBtn.on("click", this.allCategoriesHandler.bind(this)), this.updateLastElement.enable()
            }
        }, {
            key: "initMenus",
            value: function() {
                this.account = new AccountMenu, this.account.init(), this.browse = new BrowseMenu, this.browse.init(), this.newgames = new NewGamesMenu, this.newgames.init(), this.locale = LocaleSelector, this.locale.init(), this.parental = window.parentalControl
            }
        }, {
            key: "onClick",
            value: function(event) {
                event.preventDefault(), event.stopPropagation();
                var menu = $(event.currentTarget).data("menu");
                if (!this[menu]) return void console.warn("Don't know how to handle such menu", menu);
                this.currentlyOpen != menu ? this.open(menu) : this.close()
            }
        }, {
            key: "open",
            value: function(menu) {
                var _this = this;
                this.close(!0), this.$background.fadeIn(200), this[menu].open(), this.currentlyOpen = menu, $(document).trigger("checkOverlayMenus"), $(".sub-menu").bind("click.subMenu", function(event) {
                    event.stopPropagation()
                }), $(document).bind("click.outsideTopMenu", function(event) {
                    event.preventDefault(), event.stopPropagation(), _this.close()
                })
            }
        }, {
            key: "close",
            value: function(ignoreBackground) {
                $(document).trigger("topMenu.forceClose"), $(".sub-menu").unbind("click.subMenu"), $(document).unbind("click.outsideTopMenu"), this.currentlyOpen = null, 1 != ignoreBackground && this.$background.fadeOut(200), $(document).trigger("checkOverlayMenus")
            }
        }, {
            key: "allCategoriesHandler",
            value: function(e) {
                var _this2 = this;
                e.preventDefault(), e.stopPropagation(), this.updateLastElement.disable(), this.$topCategories.addClass("stop-hover"), e.target.style.display = "none", $(".top-categories li.inactive").mouseleave(function() {
                    _this2.$topCategories.removeClass("stop-hover")
                }), this.$contentRow.removeClass("single-line")
            }
        }]), TopMenu
    }(),
    _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    RecaptchaV3 = function() {
        function RecaptchaV3() {
            _classCallCheck(this, RecaptchaV3), this.reset.bind(this), this.triggerAction.bind(this), this.clientId
        }
        return _createClass(RecaptchaV3, [{
            key: "embedSDK",
            value: function() {
                return regeneratorRuntime.async(function(context$2$0) {
                    for (;;) switch (context$2$0.prev = context$2$0.next) {
                        case 0:
                            return context$2$0.abrupt("return", new Promise(function(resolve) {
                                var script = document.createElement("script");
                                script.onload = function() {
                                    return resolve("resolved")
                                }, script.src = "https://www.google.com/recaptcha/api.js?render=explicit", document.head.appendChild(script)
                            }));
                        case 1:
                        case "end":
                            return context$2$0.stop()
                    }
                }, null, this)
            }
        }, {
            key: "triggerAction",
            value: function(action) {
                var element = arguments.length <= 1 || arguments[1] === undefined ? "inline-badge" : arguments[1];
                return regeneratorRuntime.async(function(context$2$0) {
                    for (var _this2 = this;;) switch (context$2$0.prev = context$2$0.next) {
                        case 0:
                            return context$2$0.abrupt("return", new Promise(function(resolve) {
                                return regeneratorRuntime.async(function(context$3$0) {
                                    for (var _this = this;;) switch (context$3$0.prev = context$3$0.next) {
                                        case 0:
                                            return context$3$0.next = 2, regeneratorRuntime.awrap(this.embedSDK());
                                        case 2:
                                            window.grecaptcha.ready(function() {
                                                try {
                                                    _this.clientId = window.grecaptcha.render(element, {
                                                        sitekey: _this.siteKey(),
                                                        badge: "inline",
                                                        size: "invisible"
                                                    })
                                                } catch (e) {}
                                                var options = {
                                                    action: action
                                                };
                                                window.grecaptcha.execute(_this.clientId, options).then(function(token) {
                                                    var $form = $("form");
                                                    $form.length && ($form.append('<input type="hidden" name="g-recaptcha-response" value="' + token + '">'), $form.append('<input type="hidden" name="g-recaptcha-action" value="' + action + '">')), window.recaptchaV3Token = token, resolve(token)
                                                })
                                            });
                                        case 3:
                                        case "end":
                                            return context$3$0.stop()
                                    }
                                }, null, _this2)
                            }));
                        case 1:
                        case "end":
                            return context$2$0.stop()
                    }
                }, null, this)
            }
        }, {
            key: "reset",
            value: function() {
                window.grecaptcha.reset(), window.recaptchaV3Token = null;
                var $form = $("form");
                $form.length && ($form.remove('input[name ="g-recaptcha-response"]'), $form.remove('input[name ="g-recaptcha-action"]'))
            }
        }, {
            key: "siteKey",
            value: function() {
                return window.appInfo.recaptchaV3SiteKey
            }
        }]), RecaptchaV3
    }();
"undefined" == typeof require && (window.require = function() {}), $(document).ready(function() {
    $("img.lazy").lazyload(), window.RecaptchaV3 = new RecaptchaV3, (new UserInfo).init(), (new TopMenu).init(), (new Library).loadCounters(), LiveSearch.init(), RenderFlashMessages.init(), (new NotificationManager).process(), UnityVersionLink.init(), Tracking.trackTog(), SortBy.init(".sort-by select"), ItemSearch.onSubmit(), ItemSearch.suggestion(), $('[data-infinite-scrolling="true"][data-base-url]').length && $("footer").hide();
    var currentPath = document.location.pathname;
    String(currentPath).match(/\/games\/\w+/) && $(document).off("keydown mouseenter mouseleave"), registerHandlebarsHelpers(), window.Playtomic = new Playtomic
}), $(function() {
    var $container = $(".item-container");
    if ($container.data("focus-object") && $(".item-container object").focus(), $container.data("focus-html5-content")) {
        var $html5Content = $("#html5-content");
        $html5Content.focus(), $(document).on("click mouseenter", ".item-container", function() {
            $html5Content.focus()
        })
    }
});