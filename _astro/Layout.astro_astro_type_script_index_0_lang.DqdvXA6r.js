const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["_astro/BeforeEnter.BgnMWG31.js", "_astro/all.xlujcirQ.js", "_astro/CSSPlugin.pkypRvgD.js", "_astro/ScrollTrigger.C4gmGO9R.js", "_astro/index.k_g5gSqN.js", "_astro/SplitText.Cpc1cBKW.js", "_astro/AnimateModel.B38_Ktv8.js", "_astro/index.g-Vsj8Bl.js", "_astro/index.Cck1d1nu.js", "_astro/index.xlujcirQ.js", "_astro/Scroll.Bh_nL5Gi.js", "_astro/tempus.B_tY_6We.js", "_astro/GL.ndJIVeR0.js", "_astro/Nav.Bzo9t6mB.js", "_astro/LinkAnimation.BShULeRV.js", "_astro/GlobalLoader.CpcF5g34.js"]))) => i.map(i => d[i]);
const ye = "modulepreload"
  , Pe = function(i) {
    return "/" + i
}
  , he = {}
  , I = function(n, e, t) {
    let r = Promise.resolve();
    if (e && e.length > 0) {
        let s = function(u) {
            return Promise.all(u.map(g => Promise.resolve(g).then(p => ({
                status: "fulfilled",
                value: p
            }), p => ({
                status: "rejected",
                reason: p
            }))))
        };
        document.getElementsByTagName("link");
        const c = document.querySelector("meta[property=csp-nonce]")
          , a = c?.nonce || c?.getAttribute("nonce");
        r = s(e.map(u => {
            if (u = Pe(u),
            u in he)
                return;
            he[u] = !0;
            const g = u.endsWith(".css")
              , p = g ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${u}"]${p}`))
                return;
            const l = document.createElement("link");
            if (l.rel = g ? "stylesheet" : ye,
            g || (l.as = "script"),
            l.crossOrigin = "",
            l.href = u,
            a && l.setAttribute("nonce", a),
            document.head.appendChild(l),
            g)
                return new Promise( (P, v) => {
                    l.addEventListener("load", P),
                    l.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${u}`)))
                }
                )
        }
        ))
    }
    function o(s) {
        const c = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (c.payload = s,
        window.dispatchEvent(c),
        !c.defaultPrevented)
            throw s
    }
    return r.then(s => {
        for (const c of s || [])
            c.status === "rejected" && o(c.reason);
        return n().catch(o)
    }
    )
};
function Ee(i, n) {
    for (var e = 0; e < n.length; e++) {
        var t = n[e];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(i, typeof (r = function(o, s) {
            if (typeof o != "object" || o === null)
                return o;
            var c = o[Symbol.toPrimitive];
            if (c !== void 0) {
                var a = c.call(o, "string");
                if (typeof a != "object")
                    return a;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(o)
        }(t.key)) == "symbol" ? r : String(r), t)
    }
    var r
}
function ue(i, n, e) {
    return n && Ee(i.prototype, n),
    Object.defineProperty(i, "prototype", {
        writable: !1
    }),
    i
}
function H() {
    return H = Object.assign ? Object.assign.bind() : function(i) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t])
        }
        return i
    }
    ,
    H.apply(this, arguments)
}
function Z(i, n) {
    i.prototype = Object.create(n.prototype),
    i.prototype.constructor = i,
    K(i, n)
}
function oe(i) {
    return oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    ,
    oe(i)
}
function K(i, n) {
    return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t,
        e
    }
    ,
    K(i, n)
}
function xe() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function se(i, n, e) {
    return se = xe() ? Reflect.construct.bind() : function(t, r, o) {
        var s = [null];
        s.push.apply(s, r);
        var c = new (Function.bind.apply(t, s));
        return o && K(c, o.prototype),
        c
    }
    ,
    se.apply(null, arguments)
}
function ae(i) {
    var n = typeof Map == "function" ? new Map : void 0;
    return ae = function(e) {
        if (e === null || Function.toString.call(e).indexOf("[native code]") === -1)
            return e;
        if (typeof e != "function")
            throw new TypeError("Super expression must either be null or a function");
        if (n !== void 0) {
            if (n.has(e))
                return n.get(e);
            n.set(e, t)
        }
        function t() {
            return se(e, arguments, oe(this).constructor)
        }
        return t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        K(t, e)
    }
    ,
    ae(i)
}
function ke(i) {
    if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i
}
var W, Ae = function() {
    this.before = void 0,
    this.beforeLeave = void 0,
    this.leave = void 0,
    this.afterLeave = void 0,
    this.beforeEnter = void 0,
    this.enter = void 0,
    this.afterEnter = void 0,
    this.after = void 0
};
(function(i) {
    i[i.off = 0] = "off",
    i[i.error = 1] = "error",
    i[i.warning = 2] = "warning",
    i[i.info = 3] = "info",
    i[i.debug = 4] = "debug"
}
)(W || (W = {}));
var le = W.off
  , V = function() {
    function i(e) {
        this.t = void 0,
        this.t = e
    }
    i.getLevel = function() {
        return le
    }
    ,
    i.setLevel = function(e) {
        return le = W[e]
    }
    ;
    var n = i.prototype;
    return n.error = function() {
        this.i(console.error, W.error, [].slice.call(arguments))
    }
    ,
    n.warn = function() {
        this.i(console.warn, W.warning, [].slice.call(arguments))
    }
    ,
    n.info = function() {
        this.i(console.info, W.info, [].slice.call(arguments))
    }
    ,
    n.debug = function() {
        this.i(console.log, W.debug, [].slice.call(arguments))
    }
    ,
    n.i = function(e, t, r) {
        t <= i.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(r))
    }
    ,
    i
}();
function X(i) {
    return i.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}
function fe(i) {
    return i && i.sensitive ? "" : "i"
}
var U = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper"
}
  , z = new (function() {
    function i() {
        this.o = U,
        this.u = void 0,
        this.h = {
            after: null,
            before: null,
            parent: null
        }
    }
    var n = i.prototype;
    return n.toString = function(e) {
        return e.outerHTML
    }
    ,
    n.toDocument = function(e) {
        return this.u || (this.u = new DOMParser),
        this.u.parseFromString(e, "text/html")
    }
    ,
    n.toElement = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = e,
        t
    }
    ,
    n.getHtml = function(e) {
        return e === void 0 && (e = document),
        this.toString(e.documentElement)
    }
    ,
    n.getWrapper = function(e) {
        return e === void 0 && (e = document),
        e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
    }
    ,
    n.getContainer = function(e) {
        return e === void 0 && (e = document),
        e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
    }
    ,
    n.removeContainer = function(e) {
        document.body.contains(e) && (this.v(e),
        e.parentNode.removeChild(e))
    }
    ,
    n.addContainer = function(e, t) {
        var r = this.getContainer() || this.h.before;
        r ? this.l(e, r) : this.h.after ? this.h.after.parentNode.insertBefore(e, this.h.after) : this.h.parent ? this.h.parent.appendChild(e) : t.appendChild(e)
    }
    ,
    n.getSibling = function() {
        return this.h
    }
    ,
    n.getNamespace = function(e) {
        e === void 0 && (e = document);
        var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
        return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
    }
    ,
    n.getHref = function(e) {
        if (e.tagName && e.tagName.toLowerCase() === "a") {
            if (typeof e.href == "string")
                return e.href;
            var t = e.getAttribute("href") || e.getAttribute("xlink:href");
            if (t)
                return this.resolveUrl(t.baseVal || t)
        }
        return null
    }
    ,
    n.resolveUrl = function() {
        var e = [].slice.call(arguments).length;
        if (e === 0)
            throw new Error("resolveUrl requires at least one argument; got none.");
        var t = document.createElement("base");
        if (t.href = arguments[0],
        e === 1)
            return t.href;
        var r = document.getElementsByTagName("head")[0];
        r.insertBefore(t, r.firstChild);
        for (var o, s = document.createElement("a"), c = 1; c < e; c++)
            s.href = arguments[c],
            t.href = o = s.href;
        return r.removeChild(t),
        o
    }
    ,
    n.l = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }
    ,
    n.v = function(e) {
        return this.h = {
            after: e.nextElementSibling,
            before: e.previousElementSibling,
            parent: e.parentElement
        },
        this.h
    }
    ,
    i
}())
  , Le = function() {
    function i() {
        this.p = void 0,
        this.m = [],
        this.P = -1
    }
    var n = i.prototype;
    return n.init = function(e, t) {
        this.p = "barba";
        var r = {
            data: {},
            ns: t,
            scroll: {
                x: window.scrollX,
                y: window.scrollY
            },
            url: e
        };
        this.P = 0,
        this.m.push(r);
        var o = {
            from: this.p,
            index: this.P,
            states: [].concat(this.m)
        };
        window.history && window.history.replaceState(o, "", e)
    }
    ,
    n.change = function(e, t, r) {
        if (r && r.state) {
            var o = r.state
              , s = o.index;
            t = this.g(this.P - s),
            this.replace(o.states),
            this.P = s
        } else
            this.add(e, t);
        return t
    }
    ,
    n.add = function(e, t, r, o) {
        var s = r ?? this.R(t)
          , c = {
            data: o ?? {},
            ns: "tmp",
            scroll: {
                x: window.scrollX,
                y: window.scrollY
            },
            url: e
        };
        switch (s) {
        case "push":
            this.P = this.size,
            this.m.push(c);
            break;
        case "replace":
            this.set(this.P, c)
        }
        var a = {
            from: this.p,
            index: this.P,
            states: [].concat(this.m)
        };
        switch (s) {
        case "push":
            window.history && window.history.pushState(a, "", e);
            break;
        case "replace":
            window.history && window.history.replaceState(a, "", e)
        }
    }
    ,
    n.store = function(e, t) {
        var r = t || this.P
          , o = this.get(r);
        o.data = H({}, o.data, e),
        this.set(r, o);
        var s = {
            from: this.p,
            index: this.P,
            states: [].concat(this.m)
        };
        window.history.replaceState(s, "")
    }
    ,
    n.update = function(e, t) {
        var r = t || this.P
          , o = H({}, this.get(r), e);
        this.set(r, o)
    }
    ,
    n.remove = function(e) {
        e ? this.m.splice(e, 1) : this.m.pop(),
        this.P--
    }
    ,
    n.clear = function() {
        this.m = [],
        this.P = -1
    }
    ,
    n.replace = function(e) {
        this.m = e
    }
    ,
    n.get = function(e) {
        return this.m[e]
    }
    ,
    n.set = function(e, t) {
        return this.m[e] = t
    }
    ,
    n.R = function(e) {
        var t = "push"
          , r = e
          , o = U.prefix + "-" + U.history;
        return r.hasAttribute && r.hasAttribute(o) && (t = r.getAttribute(o)),
        t
    }
    ,
    n.g = function(e) {
        return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : e === 0 ? "popstate" : e > 0 ? "back" : "forward"
    }
    ,
    ue(i, [{
        key: "current",
        get: function() {
            return this.m[this.P]
        }
    }, {
        key: "previous",
        get: function() {
            return this.P < 1 ? null : this.m[this.P - 1]
        }
    }, {
        key: "size",
        get: function() {
            return this.m.length
        }
    }]),
    i
}()
  , ve = new Le
  , Y = function(i, n) {
    try {
        var e = function() {
            if (!n.next.html)
                return Promise.resolve(i).then(function(t) {
                    var r = n.next;
                    if (t) {
                        var o = z.toElement(t.html);
                        r.namespace = z.getNamespace(o),
                        r.container = z.getContainer(o),
                        r.url = t.url,
                        r.html = t.html,
                        ve.update({
                            ns: r.namespace
                        });
                        var s = z.toDocument(t.html);
                        document.title = s.title
                    }
                })
        }();
        return Promise.resolve(e && e.then ? e.then(function() {}) : void 0)
    } catch (t) {
        return Promise.reject(t)
    }
}
  , me = function i(n, e, t) {
    return n instanceof RegExp ? function(r, o) {
        if (!o)
            return r;
        for (var s = /\((?:\?<(.*?)>)?(?!\?)/g, c = 0, a = s.exec(r.source); a; )
            o.push({
                name: a[1] || c++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            }),
            a = s.exec(r.source);
        return r
    }(n, e) : Array.isArray(n) ? function(r, o, s) {
        var c = r.map(function(a) {
            return i(a, o, s).source
        });
        return new RegExp("(?:".concat(c.join("|"), ")"),fe(s))
    }(n, e, t) : function(r, o, s) {
        return function(c, a, u) {
            u === void 0 && (u = {});
            for (var g = u.strict, p = g !== void 0 && g, l = u.start, P = l === void 0 || l, v = u.end, h = v === void 0 || v, d = u.encode, f = d === void 0 ? function(R) {
                return R
            }
            : d, L = u.delimiter, y = L === void 0 ? "/#?" : L, x = u.endsWith, q = "[".concat(X(x === void 0 ? "" : x), "]|$"), C = "[".concat(X(y), "]"), O = P ? "^" : "", S = 0, j = c; S < j.length; S++) {
                var b = j[S];
                if (typeof b == "string")
                    O += X(f(b));
                else {
                    var T = X(f(b.prefix))
                      , m = X(f(b.suffix));
                    if (b.pattern)
                        if (a && a.push(b),
                        T || m)
                            if (b.modifier === "+" || b.modifier === "*") {
                                var E = b.modifier === "*" ? "?" : "";
                                O += "(?:".concat(T, "((?:").concat(b.pattern, ")(?:").concat(m).concat(T, "(?:").concat(b.pattern, "))*)").concat(m, ")").concat(E)
                            } else
                                O += "(?:".concat(T, "(").concat(b.pattern, ")").concat(m, ")").concat(b.modifier);
                        else
                            O += b.modifier === "+" || b.modifier === "*" ? "((?:".concat(b.pattern, ")").concat(b.modifier, ")") : "(".concat(b.pattern, ")").concat(b.modifier);
                    else
                        O += "(?:".concat(T).concat(m, ")").concat(b.modifier)
                }
            }
            if (h)
                p || (O += "".concat(C, "?")),
                O += u.endsWith ? "(?=".concat(q, ")") : "$";
            else {
                var w = c[c.length - 1]
                  , k = typeof w == "string" ? C.indexOf(w[w.length - 1]) > -1 : w === void 0;
                p || (O += "(?:".concat(C, "(?=").concat(q, "))?")),
                k || (O += "(?=".concat(C, "|").concat(q, ")"))
            }
            return new RegExp(O,fe(u))
        }(function(c, a) {
            a === void 0 && (a = {});
            for (var u = function(m) {
                for (var E = [], w = 0; w < m.length; ) {
                    var k = m[w];
                    if (k !== "*" && k !== "+" && k !== "?")
                        if (k !== "\\")
                            if (k !== "{")
                                if (k !== "}")
                                    if (k !== ":")
                                        if (k !== "(")
                                            E.push({
                                                type: "CHAR",
                                                index: w,
                                                value: m[w++]
                                            });
                                        else {
                                            var R = 1
                                              , N = "";
                                            if (m[A = w + 1] === "?")
                                                throw new TypeError('Pattern cannot start with "?" at '.concat(A));
                                            for (; A < m.length; )
                                                if (m[A] !== "\\") {
                                                    if (m[A] === ")") {
                                                        if (--R == 0) {
                                                            A++;
                                                            break
                                                        }
                                                    } else if (m[A] === "(" && (R++,
                                                    m[A + 1] !== "?"))
                                                        throw new TypeError("Capturing groups are not allowed at ".concat(A));
                                                    N += m[A++]
                                                } else
                                                    N += m[A++] + m[A++];
                                            if (R)
                                                throw new TypeError("Unbalanced pattern at ".concat(w));
                                            if (!N)
                                                throw new TypeError("Missing pattern at ".concat(w));
                                            E.push({
                                                type: "PATTERN",
                                                index: w,
                                                value: N
                                            }),
                                            w = A
                                        }
                                    else {
                                        for (var F = "", A = w + 1; A < m.length; ) {
                                            var D = m.charCodeAt(A);
                                            if (!(D >= 48 && D <= 57 || D >= 65 && D <= 90 || D >= 97 && D <= 122 || D === 95))
                                                break;
                                            F += m[A++]
                                        }
                                        if (!F)
                                            throw new TypeError("Missing parameter name at ".concat(w));
                                        E.push({
                                            type: "NAME",
                                            index: w,
                                            value: F
                                        }),
                                        w = A
                                    }
                                else
                                    E.push({
                                        type: "CLOSE",
                                        index: w,
                                        value: m[w++]
                                    });
                            else
                                E.push({
                                    type: "OPEN",
                                    index: w,
                                    value: m[w++]
                                });
                        else
                            E.push({
                                type: "ESCAPED_CHAR",
                                index: w++,
                                value: m[w++]
                            });
                    else
                        E.push({
                            type: "MODIFIER",
                            index: w,
                            value: m[w++]
                        })
                }
                return E.push({
                    type: "END",
                    index: w,
                    value: ""
                }),
                E
            }(c), g = a.prefixes, p = g === void 0 ? "./" : g, l = "[^".concat(X(a.delimiter || "/#?"), "]+?"), P = [], v = 0, h = 0, d = "", f = function(m) {
                if (h < u.length && u[h].type === m)
                    return u[h++].value
            }, L = function(m) {
                var E = f(m);
                if (E !== void 0)
                    return E;
                var w = u[h]
                  , k = w.index;
                throw new TypeError("Unexpected ".concat(w.type, " at ").concat(k, ", expected ").concat(m))
            }, y = function() {
                for (var m, E = ""; m = f("CHAR") || f("ESCAPED_CHAR"); )
                    E += m;
                return E
            }; h < u.length; ) {
                var x = f("CHAR")
                  , q = f("NAME")
                  , C = f("PATTERN");
                if (q || C)
                    p.indexOf(S = x || "") === -1 && (d += S,
                    S = ""),
                    d && (P.push(d),
                    d = ""),
                    P.push({
                        name: q || v++,
                        prefix: S,
                        suffix: "",
                        pattern: C || l,
                        modifier: f("MODIFIER") || ""
                    });
                else {
                    var O = x || f("ESCAPED_CHAR");
                    if (O)
                        d += O;
                    else if (d && (P.push(d),
                    d = ""),
                    f("OPEN")) {
                        var S = y()
                          , j = f("NAME") || ""
                          , b = f("PATTERN") || ""
                          , T = y();
                        L("CLOSE"),
                        P.push({
                            name: j || (b ? v++ : ""),
                            pattern: j && !b ? l : b,
                            prefix: S,
                            suffix: T,
                            modifier: f("MODIFIER") || ""
                        })
                    } else
                        L("END")
                }
            }
            return P
        }(r, s), o, s)
    }(n, e, t)
}
  , Te = {
    __proto__: null,
    update: Y,
    nextTick: function() {
        return new Promise(function(i) {
            window.requestAnimationFrame(i)
        }
        )
    },
    pathToRegexp: me
}
  , ge = function() {
    return window.location.origin
}
  , Q = function(i) {
    return i === void 0 && (i = window.location.href),
    B(i).port
}
  , B = function(i) {
    var n, e = i.match(/:\d+/);
    if (e === null)
        /^http/.test(i) && (n = 80),
        /^https/.test(i) && (n = 443);
    else {
        var t = e[0].substring(1);
        n = parseInt(t, 10)
    }
    var r, o = i.replace(ge(), ""), s = {}, c = o.indexOf("#");
    c >= 0 && (r = o.slice(c + 1),
    o = o.slice(0, c));
    var a = o.indexOf("?");
    return a >= 0 && (s = be(o.slice(a + 1)),
    o = o.slice(0, a)),
    {
        hash: r,
        path: o,
        port: n,
        query: s
    }
}
  , be = function(i) {
    return i.split("&").reduce(function(n, e) {
        var t = e.split("=");
        return n[t[0]] = t[1],
        n
    }, {})
}
  , ce = function(i) {
    return i === void 0 && (i = window.location.href),
    i.replace(/(\/#.*|\/|#.*)$/, "")
}
  , _e = {
    __proto__: null,
    getHref: function() {
        return window.location.href
    },
    getAbsoluteHref: function(i, n) {
        return n === void 0 && (n = document.baseURI),
        new URL(i,n).href
    },
    getOrigin: ge,
    getPort: Q,
    getPath: function(i) {
        return i === void 0 && (i = window.location.href),
        B(i).path
    },
    getQuery: function(i, n) {
        return n === void 0 && (n = !1),
        n ? JSON.stringify(B(i).query) : B(i).query
    },
    getHash: function(i) {
        return B(i).hash
    },
    parse: B,
    parseQuery: be,
    clean: ce
};
function Oe(i, n, e, t, r) {
    return n === void 0 && (n = 2e3),
    new Promise(function(o, s) {
        var c = new XMLHttpRequest;
        c.onreadystatechange = function() {
            if (c.readyState === XMLHttpRequest.DONE) {
                if (c.status === 200) {
                    var a = c.responseURL !== "" && c.responseURL !== i ? c.responseURL : i;
                    o({
                        html: c.responseText,
                        url: H({
                            href: a
                        }, B(a))
                    }),
                    t.update(i, {
                        status: "fulfilled",
                        target: a
                    })
                } else if (c.status) {
                    var u = {
                        status: c.status,
                        statusText: c.statusText
                    };
                    e(i, u),
                    s(u),
                    t.update(i, {
                        status: "rejected"
                    })
                }
            }
        }
        ,
        c.ontimeout = function() {
            var a = new Error("Timeout error [" + n + "]");
            e(i, a),
            s(a),
            t.update(i, {
                status: "rejected"
            })
        }
        ,
        c.onerror = function() {
            var a = new Error("Fetch error");
            e(i, a),
            s(a),
            t.update(i, {
                status: "rejected"
            })
        }
        ,
        c.open("GET", i),
        c.timeout = n,
        c.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
        c.setRequestHeader("x-barba", "yes"),
        r.all().forEach(function(a, u) {
            c.setRequestHeader(u, a)
        }),
        c.send()
    }
    )
}
function Re(i) {
    return !!i && (typeof i == "object" || typeof i == "function") && typeof i.then == "function"
}
function G(i, n) {
    return n === void 0 && (n = {}),
    function() {
        var e = arguments
          , t = !1
          , r = new Promise(function(o, s) {
            n.async = function() {
                return t = !0,
                function(a, u) {
                    a ? s(a) : o(u)
                }
            }
            ;
            var c = i.apply(n, [].slice.call(e));
            t || (Re(c) ? c.then(o, s) : o(c))
        }
        );
        return r
    }
}
var $ = new (function(i) {
    function n() {
        var t;
        return (t = i.call(this) || this).logger = new V("@barba/core"),
        t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"],
        t.registered = new Map,
        t.init(),
        t
    }
    Z(n, i);
    var e = n.prototype;
    return e.init = function() {
        var t = this;
        this.registered.clear(),
        this.all.forEach(function(r) {
            t[r] || (t[r] = function(o, s) {
                t.registered.has(r) || t.registered.set(r, new Set),
                t.registered.get(r).add({
                    ctx: s || {},
                    fn: o
                })
            }
            )
        })
    }
    ,
    e.do = function(t) {
        var r = arguments
          , o = this;
        if (this.registered.has(t)) {
            var s = Promise.resolve();
            return this.registered.get(t).forEach(function(c) {
                s = s.then(function() {
                    return G(c.fn, c.ctx).apply(void 0, [].slice.call(r, 1))
                })
            }),
            s.catch(function(c) {
                o.logger.debug("Hook error [" + t + "]"),
                o.logger.error(c)
            })
        }
        return Promise.resolve()
    }
    ,
    e.clear = function() {
        var t = this;
        this.all.forEach(function(r) {
            delete t[r]
        }),
        this.init()
    }
    ,
    e.help = function() {
        this.logger.info("Available hooks: " + this.all.join(","));
        var t = [];
        this.registered.forEach(function(r, o) {
            return t.push(o)
        }),
        this.logger.info("Registered hooks: " + t.join(","))
    }
    ,
    n
}(Ae))
  , we = function() {
    function i(n) {
        if (this.k = void 0,
        this.O = [],
        typeof n == "boolean")
            this.k = n;
        else {
            var e = Array.isArray(n) ? n : [n];
            this.O = e.map(function(t) {
                return me(t)
            })
        }
    }
    return i.prototype.checkHref = function(n) {
        if (typeof this.k == "boolean")
            return this.k;
        var e = B(n).path;
        return this.O.some(function(t) {
            return t.exec(e) !== null
        })
    }
    ,
    i
}()
  , Ce = function(i) {
    function n(t) {
        var r;
        return (r = i.call(this, t) || this).T = new Map,
        r
    }
    Z(n, i);
    var e = n.prototype;
    return e.set = function(t, r, o, s, c) {
        return this.T.set(t, {
            action: o,
            request: r,
            status: s,
            target: c ?? t
        }),
        {
            action: o,
            request: r,
            status: s,
            target: c
        }
    }
    ,
    e.get = function(t) {
        return this.T.get(t)
    }
    ,
    e.getRequest = function(t) {
        return this.T.get(t).request
    }
    ,
    e.getAction = function(t) {
        return this.T.get(t).action
    }
    ,
    e.getStatus = function(t) {
        return this.T.get(t).status
    }
    ,
    e.getTarget = function(t) {
        return this.T.get(t).target
    }
    ,
    e.has = function(t) {
        return !this.checkHref(t) && this.T.has(t)
    }
    ,
    e.delete = function(t) {
        return this.T.delete(t)
    }
    ,
    e.update = function(t, r) {
        var o = H({}, this.T.get(t), r);
        return this.T.set(t, o),
        o
    }
    ,
    n
}(we)
  , Se = function() {
    function i() {
        this.A = new Map
    }
    var n = i.prototype;
    return n.set = function(e, t) {
        return this.A.set(e, t),
        {
            name: t
        }
    }
    ,
    n.get = function(e) {
        return this.A.get(e)
    }
    ,
    n.all = function() {
        return this.A
    }
    ,
    n.has = function(e) {
        return this.A.has(e)
    }
    ,
    n.delete = function(e) {
        return this.A.delete(e)
    }
    ,
    n.clear = function() {
        return this.A.clear()
    }
    ,
    i
}()
  , je = function() {
    return !window.history.pushState
}
  , Ne = function(i) {
    return !i.el || !i.href
}
  , Ie = function(i) {
    var n = i.event;
    return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey
}
  , qe = function(i) {
    var n = i.el;
    return n.hasAttribute("target") && n.target === "_blank"
}
  , De = function(i) {
    var n = i.el;
    return n.protocol !== void 0 && window.location.protocol !== n.protocol || n.hostname !== void 0 && window.location.hostname !== n.hostname
}
  , Me = function(i) {
    var n = i.el;
    return n.port !== void 0 && Q() !== Q(n.href)
}
  , He = function(i) {
    var n = i.el;
    return n.getAttribute && typeof n.getAttribute("download") == "string"
}
  , Ue = function(i) {
    return i.el.hasAttribute(U.prefix + "-" + U.prevent)
}
  , Fe = function(i) {
    return !!i.el.closest("[" + U.prefix + "-" + U.prevent + '="all"]')
}
  , $e = function(i) {
    var n = i.href;
    return ce(n) === ce() && Q(n) === Q()
}
  , We = function(i) {
    function n(t) {
        var r;
        return (r = i.call(this, t) || this).suite = [],
        r.tests = new Map,
        r.init(),
        r
    }
    Z(n, i);
    var e = n.prototype;
    return e.init = function() {
        this.add("pushState", je),
        this.add("exists", Ne),
        this.add("newTab", Ie),
        this.add("blank", qe),
        this.add("corsDomain", De),
        this.add("corsPort", Me),
        this.add("download", He),
        this.add("preventSelf", Ue),
        this.add("preventAll", Fe),
        this.add("sameUrl", $e, !1)
    }
    ,
    e.add = function(t, r, o) {
        o === void 0 && (o = !0),
        this.tests.set(t, r),
        o && this.suite.push(t)
    }
    ,
    e.run = function(t, r, o, s) {
        return this.tests.get(t)({
            el: r,
            event: o,
            href: s
        })
    }
    ,
    e.checkLink = function(t, r, o) {
        var s = this;
        return this.suite.some(function(c) {
            return s.run(c, t, r, o)
        })
    }
    ,
    n
}(we)
  , ee = function(i) {
    function n(e, t) {
        var r;
        return t === void 0 && (t = "Barba error"),
        (r = i.call.apply(i, [this].concat([].slice.call(arguments, 2))) || this).error = void 0,
        r.label = void 0,
        r.error = e,
        r.label = t,
        Error.captureStackTrace && Error.captureStackTrace(ke(r), n),
        r.name = "BarbaError",
        r
    }
    return Z(n, i),
    n
}(ae(Error))
  , Be = function() {
    function i(e) {
        e === void 0 && (e = []),
        this.logger = new V("@barba/core"),
        this.all = [],
        this.page = [],
        this.once = [],
        this.j = [{
            name: "namespace",
            type: "strings"
        }, {
            name: "custom",
            type: "function"
        }],
        e && (this.all = this.all.concat(e)),
        this.update()
    }
    var n = i.prototype;
    return n.add = function(e, t) {
        e === "rule" ? this.j.splice(t.position || 0, 0, t.value) : this.all.push(t),
        this.update()
    }
    ,
    n.resolve = function(e, t) {
        var r = this;
        t === void 0 && (t = {});
        var o = t.once ? this.once : this.page;
        o = o.filter(t.self ? function(l) {
            return l.name && l.name === "self"
        }
        : function(l) {
            return !l.name || l.name !== "self"
        }
        );
        var s = new Map
          , c = o.find(function(l) {
            var P = !0
              , v = {};
            return t.self && l.name === "self" ? (s.set(l, v),
            !0) : (r.j.reverse().forEach(function(h) {
                P && (P = r.M(l, h, e, v),
                l.from && l.to && (P = r.M(l, h, e, v, "from") && r.M(l, h, e, v, "to")),
                l.from && !l.to && (P = r.M(l, h, e, v, "from")),
                !l.from && l.to && (P = r.M(l, h, e, v, "to")))
            }),
            s.set(l, v),
            P)
        })
          , a = s.get(c)
          , u = [];
        if (u.push(t.once ? "once" : "page"),
        t.self && u.push("self"),
        a) {
            var g, p = [c];
            Object.keys(a).length > 0 && p.push(a),
            (g = this.logger).info.apply(g, ["Transition found [" + u.join(",") + "]"].concat(p))
        } else
            this.logger.info("No transition found [" + u.join(",") + "]");
        return c
    }
    ,
    n.update = function() {
        var e = this;
        this.all = this.all.map(function(t) {
            return e.N(t)
        }).sort(function(t, r) {
            return t.priority - r.priority
        }).reverse().map(function(t) {
            return delete t.priority,
            t
        }),
        this.page = this.all.filter(function(t) {
            return t.leave !== void 0 || t.enter !== void 0
        }),
        this.once = this.all.filter(function(t) {
            return t.once !== void 0
        })
    }
    ,
    n.M = function(e, t, r, o, s) {
        var c = !0
          , a = !1
          , u = e
          , g = t.name
          , p = g
          , l = g
          , P = g
          , v = s ? u[s] : u
          , h = s === "to" ? r.next : r.current;
        if (s ? v && v[g] : v[g]) {
            switch (t.type) {
            case "strings":
            default:
                var d = Array.isArray(v[p]) ? v[p] : [v[p]];
                h[p] && d.indexOf(h[p]) !== -1 && (a = !0),
                d.indexOf(h[p]) === -1 && (c = !1);
                break;
            case "object":
                var f = Array.isArray(v[l]) ? v[l] : [v[l]];
                h[l] ? (h[l].name && f.indexOf(h[l].name) !== -1 && (a = !0),
                f.indexOf(h[l].name) === -1 && (c = !1)) : c = !1;
                break;
            case "function":
                v[P](r) ? a = !0 : c = !1
            }
            a && (s ? (o[s] = o[s] || {},
            o[s][g] = u[s][g]) : o[g] = u[g])
        }
        return c
    }
    ,
    n.S = function(e, t, r) {
        var o = 0;
        return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (o += Math.pow(10, r),
        e.from && e.from[t] && (o += 1),
        e.to && e.to[t] && (o += 2)),
        o
    }
    ,
    n.N = function(e) {
        var t = this;
        e.priority = 0;
        var r = 0;
        return this.j.forEach(function(o, s) {
            r += t.S(e, o.name, s + 1)
        }),
        e.priority = r,
        e
    }
    ,
    i
}();
function J(i, n) {
    try {
        var e = i()
    } catch (t) {
        return n(t)
    }
    return e && e.then ? e.then(void 0, n) : e
}
var Ve = function() {
    function i(e) {
        e === void 0 && (e = []),
        this.logger = new V("@barba/core"),
        this.store = void 0,
        this.C = !1,
        this.store = new Be(e)
    }
    var n = i.prototype;
    return n.get = function(e, t) {
        return this.store.resolve(e, t)
    }
    ,
    n.doOnce = function(e) {
        var t = e.data
          , r = e.transition;
        try {
            var o = function() {
                s.C = !1
            }
              , s = this
              , c = r || {};
            s.C = !0;
            var a = J(function() {
                return Promise.resolve(s.L("beforeOnce", t, c)).then(function() {
                    return Promise.resolve(s.once(t, c)).then(function() {
                        return Promise.resolve(s.L("afterOnce", t, c)).then(function() {})
                    })
                })
            }, function(u) {
                s.C = !1,
                s.logger.debug("Transition error [before/after/once]"),
                s.logger.error(u)
            });
            return Promise.resolve(a && a.then ? a.then(o) : o())
        } catch (u) {
            return Promise.reject(u)
        }
    }
    ,
    n.doPage = function(e) {
        var t = e.data
          , r = e.transition
          , o = e.page
          , s = e.wrapper;
        try {
            var c = function(l) {
                a.C = !1
            }
              , a = this
              , u = r || {}
              , g = u.sync === !0 || !1;
            a.C = !0;
            var p = J(function() {
                function l() {
                    return Promise.resolve(a.L("before", t, u)).then(function() {
                        function v(d) {
                            return Promise.resolve(a.remove(t)).then(function() {
                                return Promise.resolve(a.L("after", t, u)).then(function() {})
                            })
                        }
                        var h = function() {
                            if (g)
                                return J(function() {
                                    return Promise.resolve(a.add(t, s)).then(function() {
                                        return Promise.resolve(a.L("beforeLeave", t, u)).then(function() {
                                            return Promise.resolve(a.L("beforeEnter", t, u)).then(function() {
                                                return Promise.resolve(Promise.all([a.leave(t, u), a.enter(t, u)])).then(function() {
                                                    return Promise.resolve(a.L("afterLeave", t, u)).then(function() {
                                                        return Promise.resolve(a.L("afterEnter", t, u)).then(function() {})
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, function(y) {
                                    if (a.H(y))
                                        throw new ee(y,"Transition error [sync]")
                                });
                            var d = function(y) {
                                return J(function() {
                                    var x = function() {
                                        if (f !== !1)
                                            return Promise.resolve(a.add(t, s)).then(function() {
                                                return Promise.resolve(a.L("beforeEnter", t, u)).then(function() {
                                                    return Promise.resolve(a.enter(t, u, f)).then(function() {
                                                        return Promise.resolve(a.L("afterEnter", t, u)).then(function() {})
                                                    })
                                                })
                                            })
                                    }();
                                    if (x && x.then)
                                        return x.then(function() {})
                                }, function(x) {
                                    if (a.H(x))
                                        throw new ee(x,"Transition error [before/after/enter]")
                                })
                            }
                              , f = !1
                              , L = J(function() {
                                return Promise.resolve(a.L("beforeLeave", t, u)).then(function() {
                                    return Promise.resolve(Promise.all([a.leave(t, u), Y(o, t)]).then(function(y) {
                                        return y[0]
                                    })).then(function(y) {
                                        return f = y,
                                        Promise.resolve(a.L("afterLeave", t, u)).then(function() {})
                                    })
                                })
                            }, function(y) {
                                if (a.H(y))
                                    throw new ee(y,"Transition error [before/after/leave]")
                            });
                            return L && L.then ? L.then(d) : d()
                        }();
                        return h && h.then ? h.then(v) : v()
                    })
                }
                var P = function() {
                    if (g)
                        return Promise.resolve(Y(o, t)).then(function() {})
                }();
                return P && P.then ? P.then(l) : l()
            }, function(l) {
                throw a.C = !1,
                l.name && l.name === "BarbaError" ? (a.logger.debug(l.label),
                a.logger.error(l.error),
                l) : (a.logger.debug("Transition error [page]"),
                a.logger.error(l),
                l)
            });
            return Promise.resolve(p && p.then ? p.then(c) : c())
        } catch (l) {
            return Promise.reject(l)
        }
    }
    ,
    n.once = function(e, t) {
        try {
            return Promise.resolve($.do("once", e, t)).then(function() {
                return t.once ? G(t.once, t)(e) : Promise.resolve()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.leave = function(e, t) {
        try {
            return Promise.resolve($.do("leave", e, t)).then(function() {
                return t.leave ? G(t.leave, t)(e) : Promise.resolve()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.enter = function(e, t, r) {
        try {
            return Promise.resolve($.do("enter", e, t)).then(function() {
                return t.enter ? G(t.enter, t)(e, r) : Promise.resolve()
            })
        } catch (o) {
            return Promise.reject(o)
        }
    }
    ,
    n.add = function(e, t) {
        try {
            return z.addContainer(e.next.container, t),
            $.do("nextAdded", e),
            Promise.resolve()
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.remove = function(e) {
        try {
            return z.removeContainer(e.current.container),
            $.do("currentRemoved", e),
            Promise.resolve()
        } catch (t) {
            return Promise.reject(t)
        }
    }
    ,
    n.H = function(e) {
        return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status
    }
    ,
    n.L = function(e, t, r) {
        try {
            return Promise.resolve($.do(e, t, r)).then(function() {
                return r[e] ? G(r[e], r)(t) : Promise.resolve()
            })
        } catch (o) {
            return Promise.reject(o)
        }
    }
    ,
    ue(i, [{
        key: "isRunning",
        get: function() {
            return this.C
        },
        set: function(e) {
            this.C = e
        }
    }, {
        key: "hasOnce",
        get: function() {
            return this.store.once.length > 0
        }
    }, {
        key: "hasSelf",
        get: function() {
            return this.store.all.some(function(e) {
                return e.name === "self"
            })
        }
    }, {
        key: "shouldWait",
        get: function() {
            return this.store.all.some(function(e) {
                return e.to && !e.to.route || e.sync
            })
        }
    }]),
    i
}()
  , ze = function() {
    function i(n) {
        var e = this;
        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"],
        this.byNamespace = new Map,
        n.length !== 0 && (n.forEach(function(t) {
            e.byNamespace.set(t.namespace, t)
        }),
        this.names.forEach(function(t) {
            $[t](e._(t))
        }))
    }
    return i.prototype._ = function(n) {
        var e = this;
        return function(t) {
            var r = n.match(/enter/i) ? t.next : t.current
              , o = e.byNamespace.get(r.namespace);
            return o && o[n] ? G(o[n], o)(t) : Promise.resolve()
        }
    }
    ,
    i
}();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
Element.prototype.closest || (Element.prototype.closest = function(i) {
    var n = this;
    do {
        if (n.matches(i))
            return n;
        n = n.parentElement || n.parentNode
    } while (n !== null && n.nodeType === 1);
    return null
}
);
var Xe = {
    container: null,
    html: "",
    namespace: "",
    url: {
        hash: "",
        href: "",
        path: "",
        port: null,
        query: {}
    }
}
  , te = new (function() {
    function i() {
        this.version = "2.10.3",
        this.schemaPage = Xe,
        this.Logger = V,
        this.logger = new V("@barba/core"),
        this.plugins = [],
        this.timeout = void 0,
        this.cacheIgnore = void 0,
        this.cacheFirstPage = void 0,
        this.prefetchIgnore = void 0,
        this.preventRunning = void 0,
        this.hooks = $,
        this.cache = void 0,
        this.headers = void 0,
        this.prevent = void 0,
        this.transitions = void 0,
        this.views = void 0,
        this.dom = z,
        this.helpers = Te,
        this.history = ve,
        this.request = Oe,
        this.url = _e,
        this.D = void 0,
        this.B = void 0,
        this.q = void 0,
        this.F = void 0
    }
    var n = i.prototype;
    return n.use = function(e, t) {
        var r = this.plugins;
        r.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : typeof e.install == "function" ? (e.install(this, t),
        r.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.')
    }
    ,
    n.init = function(e) {
        var t = e === void 0 ? {} : e
          , r = t.transitions
          , o = r === void 0 ? [] : r
          , s = t.views
          , c = s === void 0 ? [] : s
          , a = t.schema
          , u = a === void 0 ? U : a
          , g = t.requestError
          , p = t.timeout
          , l = p === void 0 ? 2e3 : p
          , P = t.cacheIgnore
          , v = P !== void 0 && P
          , h = t.cacheFirstPage
          , d = h !== void 0 && h
          , f = t.prefetchIgnore
          , L = f !== void 0 && f
          , y = t.preventRunning
          , x = y !== void 0 && y
          , q = t.prevent
          , C = q === void 0 ? null : q
          , O = t.debug
          , S = t.logLevel;
        if (V.setLevel((O !== void 0 && O) === !0 ? "debug" : S === void 0 ? "off" : S),
        this.logger.info(this.version),
        Object.keys(u).forEach(function(T) {
            U[T] && (U[T] = u[T])
        }),
        this.B = g,
        this.timeout = l,
        this.cacheIgnore = v,
        this.cacheFirstPage = d,
        this.prefetchIgnore = L,
        this.preventRunning = x,
        this.q = this.dom.getWrapper(),
        !this.q)
            throw new Error("[@barba/core] No Barba wrapper found");
        this.I();
        var j = this.data.current;
        if (!j.container)
            throw new Error("[@barba/core] No Barba container found");
        if (this.cache = new Ce(v),
        this.headers = new Se,
        this.prevent = new We(L),
        this.transitions = new Ve(o),
        this.views = new ze(c),
        C !== null) {
            if (typeof C != "function")
                throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", C)
        }
        this.history.init(j.url.href, j.namespace),
        d && this.cache.set(j.url.href, Promise.resolve({
            html: j.html,
            url: j.url
        }), "init", "fulfilled"),
        this.U = this.U.bind(this),
        this.$ = this.$.bind(this),
        this.X = this.X.bind(this),
        this.G(),
        this.plugins.forEach(function(T) {
            return T.init()
        });
        var b = this.data;
        b.trigger = "barba",
        b.next = b.current,
        b.current = H({}, this.schemaPage),
        this.hooks.do("ready", b),
        this.once(b),
        this.I()
    }
    ,
    n.destroy = function() {
        this.I(),
        this.J(),
        this.history.clear(),
        this.hooks.clear(),
        this.plugins = []
    }
    ,
    n.force = function(e) {
        window.location.assign(e)
    }
    ,
    n.go = function(e, t, r) {
        var o;
        if (t === void 0 && (t = "barba"),
        this.F = null,
        this.transitions.isRunning)
            this.force(e);
        else if (!(o = t === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(e, !0) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf)
            return t = this.history.change(this.cache.has(e) ? this.cache.get(e).target : e, t, r),
            r && (r.stopPropagation(),
            r.preventDefault()),
            this.page(e, t, r ?? void 0, o)
    }
    ,
    n.once = function(e) {
        try {
            var t = this;
            return Promise.resolve(t.hooks.do("beforeEnter", e)).then(function() {
                function r() {
                    return Promise.resolve(t.hooks.do("afterEnter", e)).then(function() {})
                }
                var o = function() {
                    if (t.transitions.hasOnce) {
                        var s = t.transitions.get(e, {
                            once: !0
                        });
                        return Promise.resolve(t.transitions.doOnce({
                            transition: s,
                            data: e
                        })).then(function() {})
                    }
                }();
                return o && o.then ? o.then(r) : r()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.page = function(e, t, r, o) {
        try {
            var s, c = function() {
                var p = a.data;
                return Promise.resolve(a.hooks.do("page", p)).then(function() {
                    var l = function(P, v) {
                        try {
                            var h = (d = a.transitions.get(p, {
                                once: !1,
                                self: o
                            }),
                            Promise.resolve(a.transitions.doPage({
                                data: p,
                                page: s,
                                transition: d,
                                wrapper: a.q
                            })).then(function() {
                                a.I()
                            }))
                        } catch {
                            return v()
                        }
                        var d;
                        return h && h.then ? h.then(void 0, v) : h
                    }(0, function() {
                        V.getLevel() === 0 && a.force(p.next.url.href)
                    });
                    if (l && l.then)
                        return l.then(function() {})
                })
            }, a = this;
            if (a.data.next.url = H({
                href: e
            }, a.url.parse(e)),
            a.data.trigger = t,
            a.data.event = r,
            a.cache.has(e))
                s = a.cache.update(e, {
                    action: "click"
                }).request;
            else {
                var u = a.request(e, a.timeout, a.onRequestError.bind(a, t), a.cache, a.headers);
                u.then(function(p) {
                    p.url.href !== e && a.history.add(p.url.href, t, "replace")
                }),
                s = a.cache.set(e, u, "click", "pending").request
            }
            var g = function() {
                if (a.transitions.shouldWait)
                    return Promise.resolve(Y(s, a.data)).then(function() {})
            }();
            return Promise.resolve(g && g.then ? g.then(c) : c())
        } catch (p) {
            return Promise.reject(p)
        }
    }
    ,
    n.onRequestError = function(e) {
        this.transitions.isRunning = !1;
        var t = [].slice.call(arguments, 1)
          , r = t[0]
          , o = t[1]
          , s = this.cache.getAction(r);
        return this.cache.delete(r),
        this.B && this.B(e, s, r, o) === !1 || s === "click" && this.force(r),
        !1
    }
    ,
    n.prefetch = function(e) {
        var t = this;
        e = this.url.getAbsoluteHref(e),
        this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch(function(r) {
            t.logger.error(r)
        }), "prefetch", "pending")
    }
    ,
    n.G = function() {
        this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.U),
        document.addEventListener("touchstart", this.U)),
        document.addEventListener("click", this.$),
        window.addEventListener("popstate", this.X)
    }
    ,
    n.J = function() {
        this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.U),
        document.removeEventListener("touchstart", this.U)),
        document.removeEventListener("click", this.$),
        window.removeEventListener("popstate", this.X)
    }
    ,
    n.U = function(e) {
        var t = this
          , r = this.W(e);
        if (r) {
            var o = this.url.getAbsoluteHref(this.dom.getHref(r));
            this.prevent.checkHref(o) || this.cache.has(o) || this.cache.set(o, this.request(o, this.timeout, this.onRequestError.bind(this, r), this.cache, this.headers).catch(function(s) {
                t.logger.error(s)
            }), "enter", "pending")
        }
    }
    ,
    n.$ = function(e) {
        var t = this.W(e);
        if (t) {
            if (this.transitions.isRunning && this.preventRunning)
                return e.preventDefault(),
                void e.stopPropagation();
            this.F = e,
            this.go(this.dom.getHref(t), t, e)
        }
    }
    ,
    n.X = function(e) {
        this.go(this.url.getHref(), "popstate", e)
    }
    ,
    n.W = function(e) {
        for (var t = e.target; t && !this.dom.getHref(t); )
            t = t.parentNode;
        if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t)))
            return t
    }
    ,
    n.I = function() {
        var e = this.url.getHref()
          , t = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: H({
                href: e
            }, this.url.parse(e))
        };
        this.D = {
            current: t,
            event: void 0,
            next: H({}, this.schemaPage),
            trigger: void 0
        },
        this.hooks.do("reset", this.data)
    }
    ,
    ue(i, [{
        key: "data",
        get: function() {
            return this.D
        }
    }, {
        key: "wrapper",
        get: function() {
            return this.q
        }
    }]),
    i
}())
  , Ge = window.requestIdleCallback || function(i) {
    var n = Date.now();
    return setTimeout(function() {
        i({
            didTimeout: !1,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - n))
            }
        })
    }, 1)
}
  , Je = new (function() {
    function i() {
        this.name = "@barba/prefetch",
        this.version = "2.2.0",
        this.barba = void 0,
        this.logger = void 0,
        this.observer = void 0,
        this.root = void 0,
        this.timeout = void 0,
        this.limit = void 0,
        this.toPrefetch = new Set
    }
    var n = i.prototype;
    return n.install = function(e, t) {
        var r = t === void 0 ? {} : t
          , o = r.root
          , s = o === void 0 ? document.body : o
          , c = r.timeout
          , a = c === void 0 ? 2e3 : c
          , u = r.limit
          , g = u === void 0 ? 0 : u;
        this.logger = new e.Logger(this.name),
        this.logger.info(this.version),
        this.barba = e,
        this.root = s,
        this.timeout = a,
        this.limit = g
    }
    ,
    n.init = function() {
        var e = this;
        this.barba.prefetchIgnore ? this.logger.warn("barba.prefetchIgnore is enabled") : this.barba.cacheIgnore ? this.logger.warn("barba.cacheIgnore is enabled") : (this.observer = new IntersectionObserver(function(t) {
            t.forEach(function(r) {
                if (r.isIntersecting) {
                    var o = r.target
                      , s = e.barba.url.getAbsoluteHref(e.barba.dom.getHref(o));
                    e.toPrefetch.has(s) && (e.observer.unobserve(o),
                    e.barba.cache.has(s) ? e.barba.cache.update(s, {
                        action: "prefetch"
                    }) : e.barba.cache.set(s, e.barba.request(s, e.barba.timeout, e.barba.onRequestError.bind(e.barba, "barba"), e.barba.cache, e.barba.headers).catch(function(c) {
                        e.logger.error(c)
                    }), "prefetch", "pending"))
                }
            })
        }
        ),
        this.observe(),
        this.barba.hooks.after(this.observe, this))
    }
    ,
    n.observe = function() {
        var e = this;
        Ge(function() {
            var t = Array.from(e.root.querySelectorAll("a"));
            e.limit > 0 && (t = t.slice(0, e.limit)),
            t.forEach(function(r) {
                var o = r
                  , s = e.barba.dom.getHref(o);
                e.barba.cache.has(s) || e.barba.prevent.checkHref(s) || e.barba.prevent.checkLink(o, {}, s) || (e.observer.observe(r),
                e.toPrefetch.add(s))
            })
        }, {
            timeout: this.timeout
        })
    }
    ,
    i
}());
class Ke {
    constructor() {
        this.callbacks = {},
        this.callbacks.base = {}
    }
    on(n, e) {
        return typeof n > "u" || n === "" ? (console.warn("wrong names"),
        !1) : typeof e > "u" ? (console.warn("wrong callback"),
        !1) : (this.resolveNames(n).forEach(r => {
            const o = this.resolveName(r);
            this.callbacks[o.namespace]instanceof Object || (this.callbacks[o.namespace] = {}),
            this.callbacks[o.namespace][o.value]instanceof Array || (this.callbacks[o.namespace][o.value] = []),
            this.callbacks[o.namespace][o.value].push(e)
        }
        ),
        this)
    }
    off(n) {
        return typeof n > "u" || n === "" ? (console.warn("wrong name"),
        !1) : (this.resolveNames(n).forEach(t => {
            const r = this.resolveName(t);
            if (r.namespace !== "base" && r.value === "")
                delete this.callbacks[r.namespace];
            else if (r.namespace === "base")
                for (const o in this.callbacks)
                    this.callbacks[o]instanceof Object && this.callbacks[o][r.value]instanceof Array && (delete this.callbacks[o][r.value],
                    Object.keys(this.callbacks[o]).length === 0 && delete this.callbacks[o]);
            else
                this.callbacks[r.namespace]instanceof Object && this.callbacks[r.namespace][r.value]instanceof Array && (delete this.callbacks[r.namespace][r.value],
                Object.keys(this.callbacks[r.namespace]).length === 0 && delete this.callbacks[r.namespace])
        }
        ),
        this)
    }
    trigger(n, e) {
        if (typeof n > "u" || n === "")
            return console.warn("wrong name"),
            !1;
        let t = null;
        const r = e instanceof Array ? e : [];
        let o = this.resolveNames(n);
        if (o = this.resolveName(o[0]),
        o.namespace === "base")
            for (const s in this.callbacks)
                this.callbacks[s]instanceof Object && this.callbacks[s][o.value]instanceof Array && this.callbacks[s][o.value].forEach(function(c) {
                    c.apply(this, r)
                });
        else if (this.callbacks[o.namespace]instanceof Object) {
            if (o.value === "")
                return console.warn("wrong name"),
                this;
            this.callbacks[o.namespace][o.value].forEach(function(s) {
                s.apply(this, r)
            })
        }
        return t
    }
    resolveNames(n) {
        let e = n;
        return e = e.replace(/[^a-zA-Z0-9 ,/.]/g, ""),
        e = e.replace(/[,/]+/g, " "),
        e = e.split(" "),
        e
    }
    resolveName(n) {
        const e = {}
          , t = n.split(".");
        return e.original = n,
        e.value = t[0],
        e.namespace = "base",
        t.length > 1 && t[1] !== "" && (e.namespace = t[1]),
        e
    }
}
const de = (i, n, e) => ({
    name: i,
    sync: !0,
    async leave(r) {},
    async beforeEnter(r) {
        const o = this.async()
          , s = await I( () => import("./BeforeEnter.BgnMWG31.js"), __vite__mapDeps([0, 1, 2, 3]));
        new s.default(r,o,e,n)
    }
})
  , ne = async (i, n) => {
    const e = i || document.querySelector("main");
    switch (e.getAttribute("data-transition-page")) {
    case "home":
        {
            const r = await I( () => import("./index.k_g5gSqN.js"), __vite__mapDeps([4, 1, 2, 5, 3, 6]));
            return n.page = new r.default(e,n)
        }
    case "about":
        {
            const r = await I( () => import("./index.g-Vsj8Bl.js"), __vite__mapDeps([7, 1, 2, 3, 5]));
            return n.page = new r.default(e,n)
        }
    case "password":
        {
            const r = await I( () => import("./index.Cck1d1nu.js"), __vite__mapDeps([8, 9, 2]));
            return n.page = new r.default(e,n)
        }
    }
}
;
class Qe {
    static set(n, e, t=7) {
        const r = new Date;
        r.setTime(r.getTime() + t * 24 * 60 * 60 * 1e3);
        const o = `expires=${r.toUTCString()}`;
        document.cookie = `${n}=${e};${o};path=/;SameSite=Strict`
    }
    static get(n) {
        const e = `${n}=`
          , t = document.cookie.split(";");
        for (let r of t)
            if (r = r.trim(),
            r.indexOf(e) === 0)
                return r.substring(e.length);
        return null
    }
    static delete(n) {
        document.cookie = `${n}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
    }
}
function Ye(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var re = {
    exports: {}
}, pe;
function Ze() {
    return pe || (pe = 1,
    function(i) {
        (function() {
            function n(h, d) {
                document.addEventListener ? h.addEventListener("scroll", d, !1) : h.attachEvent("scroll", d)
            }
            function e(h) {
                document.body ? h() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function d() {
                    document.removeEventListener("DOMContentLoaded", d),
                    h()
                }) : document.attachEvent("onreadystatechange", function d() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", d),
                    h())
                })
            }
            function t(h) {
                this.g = document.createElement("div"),
                this.g.setAttribute("aria-hidden", "true"),
                this.g.appendChild(document.createTextNode(h)),
                this.h = document.createElement("span"),
                this.i = document.createElement("span"),
                this.m = document.createElement("span"),
                this.j = document.createElement("span"),
                this.l = -1,
                this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i)
            }
            function r(h, d) {
                h.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + d + ";"
            }
            function o(h) {
                var d = h.g.offsetWidth
                  , f = d + 100;
                return h.j.style.width = f + "px",
                h.i.scrollLeft = f,
                h.h.scrollLeft = h.h.scrollWidth + 100,
                h.l !== d ? (h.l = d,
                !0) : !1
            }
            function s(h, d) {
                function f() {
                    var y = L;
                    o(y) && y.g.parentNode !== null && d(y.l)
                }
                var L = h;
                n(h.h, f),
                n(h.i, f),
                o(h)
            }
            function c(h, d, f) {
                d = d || {},
                f = f || window,
                this.family = h,
                this.style = d.style || "normal",
                this.weight = d.weight || "normal",
                this.stretch = d.stretch || "normal",
                this.context = f
            }
            var a = null
              , u = null
              , g = null
              , p = null;
            function l(h) {
                return u === null && (P(h) && /Apple/.test(window.navigator.vendor) ? (h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                u = !!h && 603 > parseInt(h[1], 10)) : u = !1),
                u
            }
            function P(h) {
                return p === null && (p = !!h.document.fonts),
                p
            }
            function v(h, d) {
                var f = h.style
                  , L = h.weight;
                if (g === null) {
                    var y = document.createElement("div");
                    try {
                        y.style.font = "condensed 100px sans-serif"
                    } catch {}
                    g = y.style.font !== ""
                }
                return [f, L, g ? h.stretch : "", "100px", d].join(" ")
            }
            c.prototype.load = function(h, d) {
                var f = this
                  , L = h || "BESbswy"
                  , y = 0
                  , x = d || 3e3
                  , q = new Date().getTime();
                return new Promise(function(C, O) {
                    if (P(f.context) && !l(f.context)) {
                        var S = new Promise(function(b, T) {
                            function m() {
                                new Date().getTime() - q >= x ? T(Error("" + x + "ms timeout exceeded")) : f.context.document.fonts.load(v(f, '"' + f.family + '"'), L).then(function(E) {
                                    1 <= E.length ? b() : setTimeout(m, 25)
                                }, T)
                            }
                            m()
                        }
                        )
                          , j = new Promise(function(b, T) {
                            y = setTimeout(function() {
                                T(Error("" + x + "ms timeout exceeded"))
                            }, x)
                        }
                        );
                        Promise.race([j, S]).then(function() {
                            clearTimeout(y),
                            C(f)
                        }, O)
                    } else
                        e(function() {
                            function b() {
                                var _;
                                (_ = k != -1 && R != -1 || k != -1 && N != -1 || R != -1 && N != -1) && ((_ = k != R && k != N && R != N) || (a === null && (_ = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                                a = !!_ && (536 > parseInt(_[1], 10) || parseInt(_[1], 10) === 536 && 11 >= parseInt(_[2], 10))),
                                _ = a && (k == F && R == F && N == F || k == A && R == A && N == A || k == D && R == D && N == D)),
                                _ = !_),
                                _ && (M.parentNode !== null && M.parentNode.removeChild(M),
                                clearTimeout(y),
                                C(f))
                            }
                            function T() {
                                if (new Date().getTime() - q >= x)
                                    M.parentNode !== null && M.parentNode.removeChild(M),
                                    O(Error("" + x + "ms timeout exceeded"));
                                else {
                                    var _ = f.context.document.hidden;
                                    (_ === !0 || _ === void 0) && (k = m.g.offsetWidth,
                                    R = E.g.offsetWidth,
                                    N = w.g.offsetWidth,
                                    b()),
                                    y = setTimeout(T, 50)
                                }
                            }
                            var m = new t(L)
                              , E = new t(L)
                              , w = new t(L)
                              , k = -1
                              , R = -1
                              , N = -1
                              , F = -1
                              , A = -1
                              , D = -1
                              , M = document.createElement("div");
                            M.dir = "ltr",
                            r(m, v(f, "sans-serif")),
                            r(E, v(f, "serif")),
                            r(w, v(f, "monospace")),
                            M.appendChild(m.g),
                            M.appendChild(E.g),
                            M.appendChild(w.g),
                            f.context.document.body.appendChild(M),
                            F = m.g.offsetWidth,
                            A = E.g.offsetWidth,
                            D = w.g.offsetWidth,
                            T(),
                            s(m, function(_) {
                                k = _,
                                b()
                            }),
                            r(m, v(f, '"' + f.family + '",sans-serif')),
                            s(E, function(_) {
                                R = _,
                                b()
                            }),
                            r(E, v(f, '"' + f.family + '",serif')),
                            s(w, function(_) {
                                N = _,
                                b()
                            }),
                            r(w, v(f, '"' + f.family + '",monospace'))
                        })
                }
                )
            }
            ,
            i.exports = c
        }
        )()
    }(re)),
    re.exports
}
var et = Ze();
const tt = Ye(et);
let ie = null;
class nt extends Ke {
    constructor() {
        if (ie)
            return ie;
        super(),
        ie = this,
        this.loaded = !1,
        history.scrollRestoration = "manual",
        this.loadFonts().then( () => this.init())
    }
    async loadFonts() {
        const e = getComputedStyle(document.documentElement).getPropertyValue("--font-title").split(",")[0]
          , r = [new tt(e).load(null, 8e3).catch( () => console.warn("Title font failed to load"))];
        return Promise.all(r)
    }
    init() {
        this.barba = te,
        te.use(Je),
        te.init({
            schema: {
                prefix: "data-transition",
                namespace: "page"
            },
            debug: !1,
            timeout: 7e3,
            prevent: ({el: n, event: e}) => {
                if (e.type == "click") {
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    n.classList.contains("go") && (window.location = n.href),
                    n.classList.contains("prevent") || n.href.includes("#"))
                        return !0;
                    if (n.href === window.location.href)
                        return this.scroll.lenis.scrollTo(0, {
                            duration: 1.5
                        }),
                        !0
                }
            }
            ,
            transitions: [{
                name: "once",
                once: ({next: n}) => this.onceLoad(n, this)
            }, de("transition", this, ne), de("self", this, ne)]
        })
    }
    async loadMainComponentsOnce(n, e) {
        n.options = {
            onceLoaded: !1,
            noLoader: window.location.href.includes("no-loader"),
            models: [],
            anchor: null
        };
        const [t,r,o,s,c,a,u,g] = await Promise.all([I( () => import("./Scroll.Bh_nL5Gi.js"), __vite__mapDeps([10, 11, 9, 2, 3])), I( () => import("./Sizes.xuhbLHew.js"), []), I( () => import("./Time.BhqzraXj.js"), []), I( () => import("./ModuleLoader.BDwYRamI.js"), []), I( () => import("./GL.ndJIVeR0.js").then(p => p.ah), __vite__mapDeps([12, 11])), I( () => import("./Nav.Bzo9t6mB.js"), __vite__mapDeps([13, 14, 1, 2, 5])), I( () => import("./Debug.CXh5Fpvc.js"), []), I( () => import("./Observer.BrF3MP3d.js"), [])]);
        n.scroll = new t.default,
        n.sizes = new r.default,
        n.time = new o.default,
        n.moduleLoader = new s.default(this.app),
        n.debug = new u.default,
        n.nav = new a.default(n),
        n.gl = new c.default(document.querySelector("canvas"),n,e),
        n.observer = new g.default(n),
        await ne(e, n),
        await n.moduleLoader.loadModules(e),
        n.sizes.on("resize", () => this.app.trigger("resize")),
        n.time.on("tick", () => this.app.trigger("tick"))
    }
    async onceLoad(n, e) {
        await I( () => import("./GlobalLoader.CpcF5g34.js"), __vite__mapDeps([15, 1, 2, 5, 3])).then(t => new t.default(n,this.loadMainComponentsOnce,e))
    }
    checkAuthentication() {
        const n = window.location.pathname
          , e = this.isPasswordPage(window.location.href)
          , t = this.isAuthenticated();
        !e && !t && (sessionStorage.setItem("intendedPath", n),
        window.location.href = "/password")
    }
    isAuthenticated() {
        return Qe.get("authenticated") === "true"
    }
    isPasswordPage(n) {
        const e = new URL(n,window.location.origin).pathname;
        return e === "/password" || e === "/password/"
    }
}
new nt;
export {Qe as C, Ke as E, I as _};
