!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(o, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 15)
}([function(e, t, n) {
    "use strict";
    var o = n(5)
      , r = Object.prototype.toString;
    function i(e) {
        return Array.isArray(e)
    }
    function s(e) {
        return void 0 === e
    }
    function c(e) {
        return "[object ArrayBuffer]" === r.call(e)
    }
    function a(e) {
        return null !== e && "object" == typeof e
    }
    function u(e) {
        if ("[object Object]" !== r.call(e))
            return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }
    function l(e) {
        return "[object Function]" === r.call(e)
    }
    function d(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]),
            i(e))
                for (var n = 0, o = e.length; n < o; n++)
                    t.call(null, e[n], n, e);
            else
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: c,
        isBuffer: function(e) {
            return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "[object FormData]" === r.call(e)
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && c(e.buffer)
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: a,
        isPlainObject: u,
        isUndefined: s,
        isDate: function(e) {
            return "[object Date]" === r.call(e)
        },
        isFile: function(e) {
            return "[object File]" === r.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === r.call(e)
        },
        isFunction: l,
        isStream: function(e) {
            return a(e) && l(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "[object URLSearchParams]" === r.call(e)
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: d,
        merge: function e() {
            var t = {};
            function n(n, o) {
                u(t[o]) && u(n) ? t[o] = e(t[o], n) : u(n) ? t[o] = e({}, n) : i(n) ? t[o] = n.slice() : t[o] = n
            }
            for (var o = 0, r = arguments.length; o < r; o++)
                d(arguments[o], n);
            return t
        },
        extend: function(e, t, n) {
            return d(t, (function(t, r) {
                e[r] = n && "function" == typeof t ? o(t, n) : t
            }
            )),
            e
        },
        trim: function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        },
        stripBOM: function(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e
        }
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        const t = String(e).replace(/=+$/, "");
        let n = "";
        for (let e, o, r = 0, i = 0; o = t.charAt(i++); ~o && (e = r % 4 ? 64 * e + o : o,
        r++ % 4) ? n += String.fromCharCode(255 & e >> (-2 * r & 6)) : 0)
            o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
        return n
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var o = {
        websock: null,
        ws_url: "",
        socket_open: !1,
        hearbeat_timer: null,
        hearbeat_interval: 5e3,
        is_reonnect: !0,
        reconnect_count: 3,
        reconnect_current: 1,
        reconnect_timer: null,
        reconnect_interval: 3e3,
        onMessageFunc: function(e) {},
        onOpenFunc: function() {},
        onCloseFunc: function(e) {},
        init: ()=>"WebSocket"in window ? o.websock ? o.websock : (o.websock = new WebSocket(o.ws_url),
        o.websock.onmessage = function(e) {
            "function" == typeof o.onMessageFunc && o.onMessageFunc(e)
        }
        ,
        o.websock.onclose = function(e) {
            console.log("connection closed (" + e.code + ")"),
            clearInterval(o.hearbeat_timer),
            o.socket_open = !1,
            o.is_reonnect && (o.reconnect_timer = setTimeout(()=>{
                o.reconnect_current > o.reconnect_count ? clearTimeout(o.reconnect_timer) : (o.reconnect_current++,
                o.reconnect())
            }
            , o.reconnect_interval)),
            "function" == typeof o.onCloseFunc && o.onCloseFunc(e)
        }
        ,
        o.websock.onopen = function() {
            o.socket_open = !0,
            o.is_reonnect = !0,
            o.reconnect_current = 1,
            o.heartbeat(),
            "function" == typeof o.onOpenFunc && o.onOpenFunc()
        }
        ,
        void (o.websock.onerror = function() {}
        )) : (console.log("ws not support"),
        null),
        send: (e,t=null)=>{
            o.websock.readyState === o.websock.OPEN ? (o.websock.send(JSON.stringify(e)),
            t && t()) : (o.websock.readyState === o.websock.CONNECTING || o.init(),
            setTimeout((function() {
                o.send(e, t)
            }
            ), 1e3))
        }
        ,
        heartbeat: ()=>{
            o.hearbeat_timer && clearInterval(o.hearbeat_timer),
            o.hearbeat_timer = setInterval(()=>{
                o.send("ping")
            }
            , o.hearbeat_interval)
        }
        ,
        close: ()=>{
            console.log("force close..."),
            clearInterval(o.hearbeat_timer),
            o.is_reonnect = !1,
            o.websock && o.websock.close(),
            o.websock = null
        }
        ,
        reconnect: (e=!1)=>{
            e && o.websock && o.socket_open || (console.log("reconnect..", o.reconnect_current),
            o.websock && o.socket_open && o.websock.close(),
            o.websock = null,
            o.init())
        }
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var o = n(0)
          , r = n(22)
          , i = n(7)
          , s = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function c(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var a, u = {
            transitional: {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            },
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (a = n(8)),
            a),
            transformRequest: [function(e, t) {
                return r(t, "Accept"),
                r(t, "Content-Type"),
                o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (c(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : o.isObject(e) || t && "application/json" === t["Content-Type"] ? (c(t, "application/json"),
                function(e, t, n) {
                    if (o.isString(e))
                        try {
                            return (t || JSON.parse)(e),
                            o.trim(e)
                        } catch (e) {
                            if ("SyntaxError" !== e.name)
                                throw e
                        }
                    return (n || JSON.stringify)(e)
                }(e)) : e
            }
            ],
            transformResponse: [function(e) {
                var t = this.transitional || u.transitional
                  , n = t && t.silentJSONParsing
                  , r = t && t.forcedJSONParsing
                  , s = !n && "json" === this.responseType;
                if (s || r && o.isString(e) && e.length)
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (s) {
                            if ("SyntaxError" === e.name)
                                throw i(e, this, "E_JSON_PARSE");
                            throw e
                        }
                    }
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        o.forEach(["delete", "get", "head"], (function(e) {
            u.headers[e] = {}
        }
        )),
        o.forEach(["post", "put", "patch"], (function(e) {
            u.headers[e] = o.merge(s)
        }
        )),
        e.exports = u
    }
    ).call(this, n(21))
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        this.message = e
    }
    o.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    o.prototype.__CANCEL__ = !0,
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), o = 0; o < n.length; o++)
                n[o] = arguments[o];
            return e.apply(t, n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0);
    function r(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t)
            return e;
        var i;
        if (n)
            i = n(t);
        else if (o.isURLSearchParams(t))
            i = t.toString();
        else {
            var s = [];
            o.forEach(t, (function(e, t) {
                null != e && (o.isArray(e) ? t += "[]" : e = [e],
                o.forEach(e, (function(e) {
                    o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)),
                    s.push(r(t) + "=" + r(e))
                }
                )))
            }
            )),
            i = s.join("&")
        }
        if (i) {
            var c = e.indexOf("#");
            -1 !== c && (e = e.slice(0, c)),
            e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, o, r) {
        return e.config = t,
        n && (e.code = n),
        e.request = o,
        e.response = r,
        e.isAxiosError = !0,
        e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
        ,
        e
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0)
      , r = n(23)
      , i = n(24)
      , s = n(6)
      , c = n(25)
      , a = n(28)
      , u = n(29)
      , l = n(9)
      , d = n(3)
      , p = n(4);
    e.exports = function(e) {
        return new Promise((function(t, n) {
            var f, g = e.data, m = e.headers, h = e.responseType;
            function y() {
                e.cancelToken && e.cancelToken.unsubscribe(f),
                e.signal && e.signal.removeEventListener("abort", f)
            }
            o.isFormData(g) && delete m["Content-Type"];
            var v = new XMLHttpRequest;
            if (e.auth) {
                var k = e.auth.username || ""
                  , b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                m.Authorization = "Basic " + btoa(k + ":" + b)
            }
            var w = c(e.baseURL, e.url);
            function _() {
                if (v) {
                    var o = "getAllResponseHeaders"in v ? a(v.getAllResponseHeaders()) : null
                      , i = {
                        data: h && "text" !== h && "json" !== h ? v.response : v.responseText,
                        status: v.status,
                        statusText: v.statusText,
                        headers: o,
                        config: e,
                        request: v
                    };
                    r((function(e) {
                        t(e),
                        y()
                    }
                    ), (function(e) {
                        n(e),
                        y()
                    }
                    ), i),
                    v = null
                }
            }
            if (v.open(e.method.toUpperCase(), s(w, e.params, e.paramsSerializer), !0),
            v.timeout = e.timeout,
            "onloadend"in v ? v.onloadend = _ : v.onreadystatechange = function() {
                v && 4 === v.readyState && (0 !== v.status || v.responseURL && 0 === v.responseURL.indexOf("file:")) && setTimeout(_)
            }
            ,
            v.onabort = function() {
                v && (n(l("Request aborted", e, "ECONNABORTED", v)),
                v = null)
            }
            ,
            v.onerror = function() {
                n(l("Network Error", e, null, v)),
                v = null
            }
            ,
            v.ontimeout = function() {
                var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                  , o = e.transitional || d.transitional;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(l(t, e, o.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", v)),
                v = null
            }
            ,
            o.isStandardBrowserEnv()) {
                var T = (e.withCredentials || u(w)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                T && (m[e.xsrfHeaderName] = T)
            }
            "setRequestHeader"in v && o.forEach(m, (function(e, t) {
                void 0 === g && "content-type" === t.toLowerCase() ? delete m[t] : v.setRequestHeader(t, e)
            }
            )),
            o.isUndefined(e.withCredentials) || (v.withCredentials = !!e.withCredentials),
            h && "json" !== h && (v.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress && v.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress && v.upload && v.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) && (f = function(e) {
                v && (n(!e || e && e.type ? new p("canceled") : e),
                v.abort(),
                v = null)
            }
            ,
            e.cancelToken && e.cancelToken.subscribe(f),
            e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f))),
            g || (g = null),
            v.send(g)
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(7);
    e.exports = function(e, t, n, r, i) {
        var s = new Error(e);
        return o(s, t, n, r, i)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0);
    e.exports = function(e, t) {
        t = t || {};
        var n = {};
        function r(e, t) {
            return o.isPlainObject(e) && o.isPlainObject(t) ? o.merge(e, t) : o.isPlainObject(t) ? o.merge({}, t) : o.isArray(t) ? t.slice() : t
        }
        function i(n) {
            return o.isUndefined(t[n]) ? o.isUndefined(e[n]) ? void 0 : r(void 0, e[n]) : r(e[n], t[n])
        }
        function s(e) {
            if (!o.isUndefined(t[e]))
                return r(void 0, t[e])
        }
        function c(n) {
            return o.isUndefined(t[n]) ? o.isUndefined(e[n]) ? void 0 : r(void 0, e[n]) : r(void 0, t[n])
        }
        function a(n) {
            return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0
        }
        var u = {
            url: s,
            method: s,
            data: s,
            baseURL: c,
            transformRequest: c,
            transformResponse: c,
            paramsSerializer: c,
            timeout: c,
            timeoutMessage: c,
            withCredentials: c,
            adapter: c,
            responseType: c,
            xsrfCookieName: c,
            xsrfHeaderName: c,
            onUploadProgress: c,
            onDownloadProgress: c,
            decompress: c,
            maxContentLength: c,
            maxBodyLength: c,
            transport: c,
            httpAgent: c,
            httpsAgent: c,
            cancelToken: c,
            socketPath: c,
            responseEncoding: c,
            validateStatus: a
        };
        return o.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
            var t = u[e] || i
              , r = t(e);
            o.isUndefined(r) && t !== a || (n[e] = r)
        }
        )),
        n
    }
}
, function(e, t) {
    e.exports = {
        version: "0.25.0"
    }
}
, function(e, t, n) {
    e.exports = n(16)
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return p(r(d(e), 8 * e.length))
    }
    function r(e, t) {
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, o = -271733879, r = -1732584194, i = 271733878, d = 0; d < e.length; d += 16) {
            var p = n
              , f = o
              , g = r
              , m = i;
            n = s(n, o, r, i, e[d + 0], 7, -680876936),
            i = s(i, n, o, r, e[d + 1], 12, -389564586),
            r = s(r, i, n, o, e[d + 2], 17, 606105819),
            o = s(o, r, i, n, e[d + 3], 22, -1044525330),
            n = s(n, o, r, i, e[d + 4], 7, -176418897),
            i = s(i, n, o, r, e[d + 5], 12, 1200080426),
            r = s(r, i, n, o, e[d + 6], 17, -1473231341),
            o = s(o, r, i, n, e[d + 7], 22, -45705983),
            n = s(n, o, r, i, e[d + 8], 7, 1770035416),
            i = s(i, n, o, r, e[d + 9], 12, -1958414417),
            r = s(r, i, n, o, e[d + 10], 17, -42063),
            o = s(o, r, i, n, e[d + 11], 22, -1990404162),
            n = s(n, o, r, i, e[d + 12], 7, 1804603682),
            i = s(i, n, o, r, e[d + 13], 12, -40341101),
            r = s(r, i, n, o, e[d + 14], 17, -1502002290),
            n = c(n, o = s(o, r, i, n, e[d + 15], 22, 1236535329), r, i, e[d + 1], 5, -165796510),
            i = c(i, n, o, r, e[d + 6], 9, -1069501632),
            r = c(r, i, n, o, e[d + 11], 14, 643717713),
            o = c(o, r, i, n, e[d + 0], 20, -373897302),
            n = c(n, o, r, i, e[d + 5], 5, -701558691),
            i = c(i, n, o, r, e[d + 10], 9, 38016083),
            r = c(r, i, n, o, e[d + 15], 14, -660478335),
            o = c(o, r, i, n, e[d + 4], 20, -405537848),
            n = c(n, o, r, i, e[d + 9], 5, 568446438),
            i = c(i, n, o, r, e[d + 14], 9, -1019803690),
            r = c(r, i, n, o, e[d + 3], 14, -187363961),
            o = c(o, r, i, n, e[d + 8], 20, 1163531501),
            n = c(n, o, r, i, e[d + 13], 5, -1444681467),
            i = c(i, n, o, r, e[d + 2], 9, -51403784),
            r = c(r, i, n, o, e[d + 7], 14, 1735328473),
            n = a(n, o = c(o, r, i, n, e[d + 12], 20, -1926607734), r, i, e[d + 5], 4, -378558),
            i = a(i, n, o, r, e[d + 8], 11, -2022574463),
            r = a(r, i, n, o, e[d + 11], 16, 1839030562),
            o = a(o, r, i, n, e[d + 14], 23, -35309556),
            n = a(n, o, r, i, e[d + 1], 4, -1530992060),
            i = a(i, n, o, r, e[d + 4], 11, 1272893353),
            r = a(r, i, n, o, e[d + 7], 16, -155497632),
            o = a(o, r, i, n, e[d + 10], 23, -1094730640),
            n = a(n, o, r, i, e[d + 13], 4, 681279174),
            i = a(i, n, o, r, e[d + 0], 11, -358537222),
            r = a(r, i, n, o, e[d + 3], 16, -722521979),
            o = a(o, r, i, n, e[d + 6], 23, 76029189),
            n = a(n, o, r, i, e[d + 9], 4, -640364487),
            i = a(i, n, o, r, e[d + 12], 11, -421815835),
            r = a(r, i, n, o, e[d + 15], 16, 530742520),
            n = u(n, o = a(o, r, i, n, e[d + 2], 23, -995338651), r, i, e[d + 0], 6, -198630844),
            i = u(i, n, o, r, e[d + 7], 10, 1126891415),
            r = u(r, i, n, o, e[d + 14], 15, -1416354905),
            o = u(o, r, i, n, e[d + 5], 21, -57434055),
            n = u(n, o, r, i, e[d + 12], 6, 1700485571),
            i = u(i, n, o, r, e[d + 3], 10, -1894986606),
            r = u(r, i, n, o, e[d + 10], 15, -1051523),
            o = u(o, r, i, n, e[d + 1], 21, -2054922799),
            n = u(n, o, r, i, e[d + 8], 6, 1873313359),
            i = u(i, n, o, r, e[d + 15], 10, -30611744),
            r = u(r, i, n, o, e[d + 6], 15, -1560198380),
            o = u(o, r, i, n, e[d + 13], 21, 1309151649),
            n = u(n, o, r, i, e[d + 4], 6, -145523070),
            i = u(i, n, o, r, e[d + 11], 10, -1120210379),
            r = u(r, i, n, o, e[d + 2], 15, 718787259),
            o = u(o, r, i, n, e[d + 9], 21, -343485551),
            n = l(n, p),
            o = l(o, f),
            r = l(r, g),
            i = l(i, m)
        }
        return Array(n, o, r, i)
    }
    function i(e, t, n, o, r, i) {
        return l((s = l(l(t, e), l(o, i))) << (c = r) | s >>> 32 - c, n);
        var s, c
    }
    function s(e, t, n, o, r, s, c) {
        return i(t & n | ~t & o, e, t, r, s, c)
    }
    function c(e, t, n, o, r, s, c) {
        return i(t & o | n & ~o, e, t, r, s, c)
    }
    function a(e, t, n, o, r, s, c) {
        return i(t ^ n ^ o, e, t, r, s, c)
    }
    function u(e, t, n, o, r, s, c) {
        return i(n ^ (t | ~o), e, t, r, s, c)
    }
    function l(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function d(e) {
        for (var t = Array(), n = 0; n < 8 * e.length; n += 8)
            t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
        return t
    }
    function p(e) {
        for (var t = "0123456789abcdef", n = "", o = 0; o < 4 * e.length; o++)
            n += t.charAt(e[o >> 2] >> o % 4 * 8 + 4 & 15) + t.charAt(e[o >> 2] >> o % 4 * 8 & 15);
        return n
    }
    t.a = o
}
, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13)
      , axios__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__)
      , _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1)
      , _md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14)
      , _socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
    let ecanSvr = "aHR0cDovLzEyNy4wLjAuMTo1MjE3OA==";
    ecanSvr = window.atob(ecanSvr);
    const qnservice = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
        baseURL: ecanSvr,
        timeout: 5e3
    });
    qnservice.interceptors.request.use(e=>e, e=>Promise.reject(e)),
    qnservice.interceptors.response.use(e=>e.data, e=>Promise.reject(e));
    try {
        $("#chat-top-layer").style.height = "0px"
    } catch (e) {}
    var qnFunc = {
        version: "230321b",
        url_: ecanSvr,
        isAppRun: !1,
        runOnce: !1,
        roundTime: 3800,
        connectTime: 0,
        isWss: !1,
        ws: null,
        bench: "SILENTMODE",
        isWorking: !0,
        startTime: 0,
        mode: 0,
        globalMsgArr: [],
        holdArr: [],
        msgLock: !1,
        quickSendCloseChat: !1,
        quickBackupReply: !1,
        backupInterval: 120,
        backupFilter: !1,
        backupFilterArr: [],
        backupFilterRound: 5,
        showTips: !1,
        tipsArr: [],
        lastbackupReply: "",
        quickWaitCycle: 3,
        lastHoldRuningTime: 0,
        holdtimeAdv: !1,
        lastRoundMsgMd5: "",
        cancelAutoSend: !1,
        lastRoundCcode: "",
        quickSendInfo: {},
        quickhotKey: "",
        isMarkAReplying: !1,
        replyRightAway: "",
        manualScript: "",
        hasManualScriptRun: !1,
        MessageFrom: {
            BUYTERITEM: 0,
            CSITEM: 1,
            SYSTEMITEM: 2,
            OTHERITEM: 3,
            NOTIFYCARD: 4,
            SYSMSG31: 5,
            NULLTYPE: 6,
            PROJCARD: 7
        },
        MsgContentType: {
            TEXT: 0,
            IMAGE: 1,
            URL: 2,
            VIDEO: 3,
            OTHER: 4,
            SYSTEMCARD: 5,
            GOODCARD: 6
        },
        ChatMsgModel: {
            msgFrom: 0,
            user: "",
            content: "",
            msgTime: "",
            type: 0,
            pos: 0
        },
        fetchPost: function(e, t) {
            return qnservice({
                url: e,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                params: null,
                data: t
            })
        },
        fetchGet: function(e, t) {
            return qnservice({
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: e,
                data: t
            })
        },
        jsonPGet: function(e, t={}, n="EJsonCallback") {
            t.a = n,
            t.d = "";
            const o = [];
            for (let e in t)
                o.push(`${e}=${t[e]}`);
            const r = document.createElement("script");
            return r.src = e + "?" + o.join("&"),
            r.defer = !0,
            document.body.appendChild(r),
            new Promise((e,t)=>{
                r.onerror = t;
                try {
                    window[n] = function(t) {
                        e(t)
                    }
                } catch (e) {
                    t(e)
                } finally {
                    r.parentNode.removeChild(r)
                }
            }
            )
        },
        initWS2: function() {
            var e = this;
            e.ws = _socket__WEBPACK_IMPORTED_MODULE_3__.a;
            _socket__WEBPACK_IMPORTED_MODULE_3__.a.ws_url = "ws://127.0.0.1:52177/Chat",
            _socket__WEBPACK_IMPORTED_MODULE_3__.a.onCloseFunc = function(t) {
                e.isWss = !1,
                e.connectTime = -2,
                e.isWorking,
                e.hideUserUI()
            }
            ,
            _socket__WEBPACK_IMPORTED_MODULE_3__.a.onMessageFunc = function(t) {
                try {
                    if ("pong" == t.data)
                        ;
                    else {
                        let n = JSON.parse(t.data);
                        "confV3" == n.func && e.updateData(n)
                    }
                } catch (e) {}
            }
            ,
            _socket__WEBPACK_IMPORTED_MODULE_3__.a.onOpenFunc = function() {
                if (e.isWss = !0,
                null != e.ws) {
                    e.connectTime = Date.now();
                    try {
                        e.ws.send({
                            i: e.getTrackNickName(),
                            f: "confV3"
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
            ,
            _socket__WEBPACK_IMPORTED_MODULE_3__.a.init()
        },
        initWS: function() {
            var e = this;
            try {
                e.ws = new WebSocket("ws://127.0.0.1:52177/Chat")
            } catch (e) {
                console.log(e)
            }
            e.ws.onerror = function(e) {
                console.log(e)
            }
            ,
            e.ws.onopen = function() {
                if (e.isWss = !0,
                null != e.ws) {
                    e.connectTime = Date.now();
                    try {
                        e.ws.send(JSON.stringify({
                            i: e.getTrackNickName(),
                            f: "confV3"
                        }))
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
            ,
            e.ws.onclose = function(t) {
                e.isWss = !1,
                e.connectTime = -2,
                e.isWorking,
                e.hideUserUI()
            }
            ,
            e.ws.onmessage = function(t) {
                try {
                    let n = JSON.parse(t.data);
                    "confV3" == n.func && e.updateData(n)
                } catch (e) {}
            }
        },
        versionMount() {
            if ("function" == typeof window.getAppVersion) {
                var e = window.getAppVersion();
                if (e.startsWith("9."))
                    return e.startsWith("9.03.") ? (console.log(e),
                    !1) : (console.log("11111"),
                    !0)
            }
            return !1
        },
        hkSdk() {
            if (void 0 !== window.imsdk) {
                var e = window.imsdk.on;
                -1 == e.toString().indexOf("onFunc(") && (window.imsdk.on = function(t, n, o) {
                    if (!t || !n)
                        return this;
                    e(t, n, o)
                }
                ),
                window.onEventNotifyFunc = window.onEventNotify,
                -1 == window.onEventNotifyFunc.toString().indexOf("window.onEventNotifyFunc(") && (window.onEventNotify = function(e, t) {
                    "im.singlemsg.onReceiveNewMsg" == e && void 0 !== window.pR && window.pR(JSON.parse(arguments[1])),
                    window.onEventNotifyFunc(e, t)
                }
                )
            }
        },
        getTrackNickName: function() {
            try {
                if (window._vs.loginID.nick)
                    return window._vs.loginID.display && window._vs.loginID.nick != window._vs.loginID.display ? window._vs.loginID.display : window._vs.loginID.nick
            } catch (e) {}
            return ""
        },
        getCurrentNick: function() {
            try {
                if (window._vs.conversationID.nick)
                    return window._vs.conversationID.nick.replace(/cntaobao|cnalichn/, "")
            } catch (e) {}
            return ""
        },
        enJsonp: function(e, t, n, o) {
            try {
                document.getElementById("cspt") && document.body.removeChild(document.getElementById("cspt"));
                var r = document.createElement("script");
                r.id = "cspt",
                r.src = `${this.url_}/f?a=${e}&i=${this.getTrackNickName()}&d=${t}`,
                r.onload = function() {
                    "function" == typeof n && n()
                }
                ,
                r.onerror = function() {
                    "function" == typeof o && o()
                }
                ,
                document.body.appendChild(r)
            } catch (e) {}
        },
        advModeChangeChat: function(e) {
            return eval(Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)("D2LUzg93lLfolMfWCc5PBNzVA2uOE2fWAtOGj2nOyxqNlhf1zxj5oIb7BMLJAZO=") + JSON.stringify(e) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)("Fx0P"))
        },
        parseCid: function(e) {
            var t = e.match(/\d*?(?=\.\d)/g)
              , n = [];
            if (null != t)
                for (let e of t)
                    e.length > 0 && n.push(e);
            if (2 == n.length) {
                let e = "";
                try {
                    e = window._vs.loginID.targetId
                } catch (e) {
                    console.log(e)
                }
                let t = ""
                  , o = "";
                return e == n[0] ? (t = n[1],
                o = n[0]) : (t = n[0],
                o = n[1]),
                {
                    buyer: t,
                    cs: o
                }
            }
            return {
                buyer: "",
                cs: ""
            }
        },
        advGetRMsg: function(ccode) {
            var g = this;
            let gs = Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)("D2LUzg93lMLTC2rRmI5Nzxrszw1VDgviAxn0B3j5txnNkhTJAwq6EYDJy29KzsC6") + JSON.stringify(ccode) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)("FsXNB2HPC3rVCNK6ideSy291BNq6idiWFsWGj3nPBMDSzsCP");
            return eval(gs).then((function(e) {
                return console.log(e),
                new Promise((function(t, n) {
                    var o = g.parseMsgsToList(g.parseCid(ccode), e.msgs);
                    o.ccode = ccode,
                    t(o)
                }
                ))
            }
            ), (function(e) {
                return new Promise((function(e, t) {
                    e(null)
                }
                ))
            }
            ))
        },
        goThroughList: function() {
            try {
                let t = [];
                for (var e of window.imsdk2.messageChannel.DB._messageIdCache)
                    e[0] && t.push({
                        ccode: e[0]
                    });
                this.addMsg(t)
            } catch (e) {}
        },
        addMsg: function(e, t=0) {
            var n = this;
            if (n.msgLock)
                setTimeout(()=>{
                    n.addMsg(e, t)
                }
                , 50);
            else {
                n.msgLock = !0;
                for (let o of e) {
                    let e = "" + o.ccode.toString();
                    if (-1 != e.indexOf("#11004@"))
                        continue;
                    if (-1 != e.indexOf("#11005@"))
                        continue;
                    let r = !1;
                    for (let t = n.holdArr.length - 1; t >= 0; t--)
                        if (n.holdArr[t].sender == e && !r) {
                            n.holdArr[t].time = Date.now(),
                            r = !0;
                            break
                        }
                    if (!r) {
                        let o = {
                            sender: e,
                            buyerNick: "",
                            time: Date.now() + t
                        };
                        n.holdArr.push(o)
                    }
                    if (n.quickSendCloseChat)
                        ;
                    else {
                        let o = !1;
                        for (let t = n.globalMsgArr.length - 1; t >= 0; t--)
                            if (n.globalMsgArr[t].sender == e && !o) {
                                n.globalMsgArr[t].time > Date.now() && (n.globalMsgArr[t].time = Date.now()),
                                o = !0;
                                break
                            }
                        if (!o) {
                            let o = {
                                sender: e,
                                buyerNick: "",
                                time: Date.now() + t
                            };
                            n.globalMsgArr.push(o)
                        }
                    }
                }
                n.msgLock = !1
            }
        },
        isHoldNeedFilter: function(e) {
            var t = this;
            if (t.backupFilter)
                for (let n = t.backupFilterArr.length - 1; n >= 0; n--)
                    if (t.backupFilterArr[n].sender == e && t.backupFilterArr[n].round >= t.backupFilterRound)
                        return !0;
            return !1
        },
        pushBackupFilterArr: function(e) {
            var t = this;
            if (t.backupFilter) {
                var n = !1;
                for (let o = t.backupFilterArr.length - 1; o >= 0; o--)
                    if (t.backupFilterArr[o].sender == e) {
                        t.backupFilterArr[o].round = t.backupFilterArr[o].round + 1,
                        n = !0;
                        break
                    }
                if (!n) {
                    let n = {
                        sender: e,
                        round: 1,
                        time: Date.now()
                    };
                    t.backupFilterArr.push(n)
                }
            }
        },
        popupHoldArr: function(e) {
            var t = this;
            for (let n = t.holdArr.length - 1; n >= 0; n--)
                t.holdArr[n].sender == e && t.holdArr.splice(n, 1)
        },
        syncConf: function() {
            var e = this;
            if (0 == e.startTime)
                e.startTime = Date.now();
            else {
                var t = Date.now() - e.startTime;
                0 != (t = parseInt(t / 1e3) % 90) && 1 != t && 2 != t || (e.startTime = Date.now(),
                e.enJsonp("conf", "", null, null))
            }
        },
        fireMsg: function(e) {
            var t = this
              , n = function() {
                t.msgLock = !1,
                setTimeout(()=>{
                    t.isWorking && t.fireMsg(e)
                }
                , 3e3)
            };
            if (0 != t.mode)
                if (t.msgLock)
                    setTimeout(()=>{
                        t.isWorking && t.fireMsg(e)
                    }
                    , 80);
                else {
                    let e = 0;
                    try {
                        if (t.syncConf(),
                        t.msgLock = !0,
                        t.globalMsgArr.length > 0) {
                            var o = t.advCurrentInfo();
                            if (null != o) {
                                for (let e = 0; e < t.globalMsgArr.length; e++)
                                    if (t.globalMsgArr[e].sender == o.ccode) {
                                        t.globalMsgArr.splice(e, 1);
                                        break
                                    }
                                0 == o.isOnQuestion && (e = 1)
                            } else
                                e = 1
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    0 == e ? n() : 1 == e && (t.globalMsgArr.length > 0 ? void 0 === t.globalMsgArr[0].buyerNick || "" == t.globalMsgArr[0].buyerNick ? t.advGetRMsg(t.globalMsgArr[0].sender).then(e=>{
                        null == e ? n() : (t.globalMsgArr[0].buyerNick = e.nick,
                        t.enJsonp("stat", e.nick, n, n))
                    }
                    ) : t.enJsonp("stat", t.globalMsgArr[0].buyerNick, n, n) : n())
                }
            else
                n()
        },
        sycLine: function() {
            var e = this;
            e.isWss ? setTimeout(()=>{
                if (e.isWorking) {
                    e.sycLine();
                    try {
                        e.ws.send({
                            i: e.getTrackNickName(),
                            f: "confV3"
                        })
                    } catch {}
                }
            }
            , 15e3) : e.jsonPGet(e.url_ + "/f", {
                i: e.getTrackNickName(),
                f: "confV3"
            }).then(t=>{
                e.updateData(t);
                try {
                    document.getElementById("chat-top-layer") && (document.getElementById("chat-top-layer").style.height = "0px")
                } catch (e) {}
                e.ws.reconnect(!0),
                setTimeout(()=>{
                    e.isWorking && e.sycLine()
                }
                , 2200)
            }
            ).catch(t=>{
                e.hideUserUI(),
                setTimeout(()=>{
                    e.sycLine()
                }
                , 2e4)
            }
            )
        },
        currentAssistance: function() {
            var e = this;
            if (e.connectTime <= 0)
                setTimeout(()=>{
                    e.isWorking && e.currentAssistance()
                }
                , 1e4);
            else if ("JS_ESC" == e.bench)
                new Promise((function(e, t) {
                    let n = !0;
                    "function" == typeof window.getAppVersion && (0 == window.getAppVersion().indexOf("9.") && (n = !1));
                    e(n)
                }
                )).then((function(t) {
                    return new Promise((async function(n, o) {
                        var r = [];
                        r = t ? e.getChatMsgList() : e.getCurrentChatMsg(),
                        e.postMsg(r, e.url_, 0),
                        n()
                    }
                    ))
                }
                )).then((function() {
                    e.isWorking && setTimeout(()=>{
                        e.currentAssistance()
                    }
                    , window.cycle)
                }
                ));
            else if ("SILENTMODE" == e.bench) {
                let t = e.advCurrentInfo();
                new Promise((function(n, o) {
                    if (null == t)
                        o();
                    else {
                        let i = Object(_md5__WEBPACK_IMPORTED_MODULE_2__.a)(JSON.stringify(t));
                        if (i == e.lastRoundMsgMd5)
                            0 == t.isOnQuestion && e.isAppRun && e.quickSendCloseChat && 0 == e.isMarkAReplying && e.closeCurrentChat(),
                            o();
                        else {
                            e.lastRoundMsgMd5 = i,
                            e.lastRoundCcode = t.ccode;
                            var r = {
                                func: "markB"
                            };
                            r.identifyId = e.getTrackNickName(),
                            r.chatInfo = t,
                            r.force = 1;
                            try {
                                1 == t.isOnQuestion ? (e.isMarkAReplying,
                                e.fetchPost("/f?a=markB", r).then(e=>{
                                    n(e)
                                }
                                )) : (0 == t.isOnQuestion && e.isAppRun && e.quickSendCloseChat && 0 == e.isMarkAReplying && e.closeCurrentChat(),
                                o())
                            } catch (e) {
                                o()
                            }
                        }
                    }
                }
                )).then(t=>(e.quickSendInfo = t,
                document.getElementById("quickSendText") && (document.getElementById("quickSendText").innerHTML = t.c.text),
                t.func = "quickSendData",
                e.fetchPost("/f?a=quickSendData", t),
                new Promise((function(n, o) {
                    if ("1" == t.f && 0 == t.d) {
                        let o = t.c
                          , r = t.h;
                        e.isAppRun && e.quickSendCloseChat || 1 == o.adv ? (e.cancelAutoSend = !1,
                        function i(s) {
                            if (e.cancelAutoSend)
                                e.quickSendProgressUpdate(0),
                                n();
                            else if (s > 0 && 0 == e.cancelAutoSend)
                                setTimeout(()=>{
                                    e.quickSendProgressUpdate(e.isAppRun ? s - 1 : 0),
                                    i(s - 1)
                                }
                                , 1e3);
                            else {
                                e.isAppRun && e.lastRoundCcode == window._vs.conversationID.ccode && (e.quickSendAction(1),
                                e.saveReply(r.replace(/cntaobao|cnalichn/, ""), t.e, o.intent, o.text, o.confidence));
                                let i = 0;
                                if (-1 != o.text.indexOf("```") || -1 != o.text.indexOf("~~~")) {
                                    let e = o.text.split(/```|~~~/gi);
                                    e.length > 1 && (i = 1e3 * e.length)
                                }
                                1 == o.adv && (i += 8e3),
                                console.log(i),
                                0 == i ? n() : setTimeout(()=>{
                                    n()
                                }
                                , i)
                            }
                        }(e.quickWaitCycle)) : n()
                    } else
                        n()
                }
                )))).then(t=>{
                    e.isMarkAReplying = !1,
                    setTimeout(()=>{
                        e.isWorking && e.currentAssistance()
                    }
                    , 1800)
                }
                ).catch(t=>{
                    e.isMarkAReplying = !1,
                    setTimeout(()=>{
                        e.isWorking && e.currentAssistance()
                    }
                    , 1800)
                }
                )
            }
        },
        chatTop: function() {
            try {
                $("#chat-top-layer").style.height = "0px"
            } catch (e) {}
        },
        fireMsgV2: function(e) {
            var t = this;
            if (t.msgLock)
                setTimeout(()=>{
                    t.isWorking && t.fireMsgV2(e)
                }
                , 80);
            else if (t.chatTop(),
            "SILENTMODE" == t.bench) {
                let n = 3e3;
                try {
                    t.replyRightAway.length > 0 && (n = parseInt(t.replyRightAway)),
                    n < 0 && (n = 1e3)
                } catch (e) {}
                if (t.connectTime > 0) {
                    t.msgLock = !0;
                    let o = []
                      , r = Date.now();
                    for (let e = t.globalMsgArr.length - 1; e >= 0; e--)
                        r - t.globalMsgArr[e].time >= n && (o.unshift(t.globalMsgArr[e]),
                        t.globalMsgArr.splice(e, 1));
                    t.msgLock = !1;
                    for (let n = o.length - 1; n >= 0; n--)
                        t.replyMsg(o[n], e);
                    t.quickBackupReply && Date.now() - t.lastHoldRuningTime > 7e3 && (t.lastHoldRuningTime = Date.now(),
                    t.HoldTimeReply(t.backupInterval))
                }
                (window.cycle > 3e3 || 3e3 != n) && (t.roundTime = window.cycle),
                setTimeout(()=>{
                    t.isWorking && t.fireMsgV2(e)
                }
                , t.roundTime)
            } else if ("JS_ESC" == t.bench) {
                var n = function() {
                    t.msgLock = !1,
                    setTimeout(()=>{
                        t.isWorking && t.fireMsgV2(e)
                    }
                    , 3e3)
                };
                if (0 == t.mode)
                    return void n();
                let r = 0;
                try {
                    if (t.msgLock = !0,
                    t.globalMsgArr.length > 0) {
                        var o = t.advCurrentInfo();
                        if (null != o) {
                            for (let e = 0; e < t.globalMsgArr.length; e++)
                                if (t.globalMsgArr[e].sender == o.ccode) {
                                    t.globalMsgArr.splice(e, 1);
                                    break
                                }
                            0 == o.isOnQuestion && (r = 1)
                        } else
                            r = 1
                    }
                } catch (e) {
                    console.log(e)
                }
                0 == r ? n() : 1 == r && (t.globalMsgArr.length > 0 ? void 0 === t.globalMsgArr[0].buyerNick || "" == t.globalMsgArr[0].buyerNick ? t.advGetRMsg(t.globalMsgArr[0].sender).then(e=>{
                    null == e ? n() : (t.globalMsgArr[0].buyerNick = e.nick,
                    t.enJsonp("stat", e.nick, n, n))
                }
                ) : t.enJsonp("stat", t.globalMsgArr[0].buyerNick, n, n) : n())
            }
        },
        fireReply: function() {
            var e = this;
            for (let t = 0; t < e.globalMsgArr.length; t++) {
                e.replyMsg(e.globalMsgArr[t]),
                e.globalMsgArr.splice(t, 1);
                break
            }
        },
        replyMsg: function(n, vipType) {
            var g = this;
            g.advGetRMsg(n.sender).then(e=>{
                if (null == e)
                    ;
                else {
                    var t = {
                        func: "markB"
                    };
                    t.identifyId = g.getTrackNickName(),
                    t.chatInfo = e;
                    try {
                        if (1 == e.isOnQuestion)
                            return g.fetchPost("/f?a=markB", t)
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
            ).then(e=>{
                if ("markB" == e.func && "1" == e.f) {
                    let reply = e.c
                      , uid = e.h
                      , quickBackupReplyFlag = !0;
                    if (g.quickBackupReply && void 0 !== reply.intent && -1 != reply.intent.indexOf("默认未匹配") && (quickBackupReplyFlag = !1),
                    0 == e.d && quickBackupReplyFlag)
                        if (1 != reply.adv) {
                            function ln(x) {
                                let answer = "";
                                if (x.length > 0) {
                                    answer = x[0],
                                    x.splice(0, 1);
                                    let cmd = Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[0]) + JSON.stringify(uid) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[1]) + JSON.stringify(answer) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[2]);
                                    eval(cmd).then(e=>{
                                        console.log(e),
                                        setTimeout(()=>{
                                            ln(x)
                                        }
                                        , 500)
                                    }
                                    )
                                }
                            }
                            var replyArr = [];
                            if (-1 != reply.text.indexOf("```") || -1 != reply.text.indexOf("~~~") ? replyArr = reply.text.split(/```|~~~/gi) : replyArr.push(reply.text),
                            ln(replyArr),
                            g.saveReply(uid.replace(/cntaobao|cnalichn/, ""), e.e, reply.intent, reply.text, reply.confidence),
                            reply.apiaction) {
                                var apiObj = reply.apiaction;
                                apiObj = JSON.parse(apiObj);
                                var question = reply.question
                                  , apiRegex = apiObj.regex;
                                apiRegex = new RegExp(apiRegex);
                                var matchResult = question.match(apiRegex);
                                if (matchResult) {
                                    var apiSSS = matchResult[0].toString()
                                      , apiLink = apiObj.link;
                                    apiLink = apiLink.replace("%s%", apiSSS);
                                    var apiAction = apiObj.reply
                                      , messageQ = {
                                        func: "apifetch",
                                        method: "get"
                                    };
                                    messageQ.link = apiLink,
                                    messageQ.param = "",
                                    g.fetchPost("/f?a=apifetch", messageQ).then(r=>{
                                        if (r.res) {
                                            let queryResult = r.res.toString();
                                            if (queryResult.length > 0)
                                                for (let item of apiAction)
                                                    if (-1 != queryResult.indexOf(item.query)) {
                                                        var answer = item.answer;
                                                        answer = answer.replace("%s%", apiSSS).replace("%r%", queryResult);
                                                        let cmd = Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[0]) + JSON.stringify(uid) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[1]) + JSON.stringify(answer) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[2]);
                                                        g.saveReply(uid.replace(/cntaobao|cnalichn/, ""), e.e, reply.intent, answer, reply.confidence),
                                                        eval(cmd).then(e=>{
                                                            console.log(e);
                                                            var t = n.sender;
                                                            g.popupHoldArr(t)
                                                        }
                                                        );
                                                        break
                                                    }
                                        }
                                    }
                                    )
                                }
                            } else {
                                var snd = n.sender;
                                g.popupHoldArr(snd)
                            }
                        } else
                            try {
                                let t = {
                                    identifyId: g.getTrackNickName()
                                };
                                g.fetchPost("/f?a=advworking", t).then(t=>{
                                    if ("0" == t.f)
                                        g.advModeChangeChat(uid).then(t=>(console.log(t),
                                        g.fetchPost("/f?a=advreply", e)), e=>{
                                            console.log(e)
                                        }
                                        ).then(e=>{
                                            console.log(e)
                                        }
                                        ).catch(e=>{
                                            console.log(e)
                                        }
                                        ),
                                        g.saveReply(uid.replace(/cntaobao|cnalichn/, ""), e.e, reply.intent, reply.text, reply.confidence),
                                        g.popupHoldArr(n.sender);
                                    else {
                                        let t = [{
                                            ccode: e.i
                                        }];
                                        g.addMsg(t, 0)
                                    }
                                }
                                )
                            } catch (e) {
                                console.log(e)
                            }
                    else
                        g.saveReply(uid.replace(/cntaobao|cnalichn/, ""), e.e, reply.intent, "", .01)
                }
            }
            ).catch(e=>{
                console.log(e)
            }
            )
        },
        saveReply: function(e, t, n, o, r) {
            let i = {
                user: e,
                content: t,
                chattime: parseInt(Date.now() / 1e3),
                store: this.getTrackNickName(),
                type: 0,
                intent: n,
                confidence: r,
                reply: o
            };
            try {
                this.fetchPost("/f?a=savereply", i).then(e=>{}
                ).catch(e=>{
                    console.log(e)
                }
                )
            } catch (e) {
                console.log(e)
            }
        },
        HoldTimeReply: function(save_time) {
            var g = this;
            if (g.msgLock)
                return;
            var timeupHolder = [];
            try {
                g.msgLock = !0;
                for (var i = g.holdArr.length - 1; i >= 0; i--)
                    Date.now() - g.holdArr[i].time < 1e3 * save_time || (timeupHolder.push(g.holdArr[i]),
                    g.holdArr.splice(i, 1))
            } catch (e) {} finally {
                g.msgLock = !1
            }
            if (0 == timeupHolder.length)
                return;
            var chatMsgList = []
              , buyerNick = ""
              , proj = "";
            let isOnQuestion = 1;
            var oldmsg = Object.create(g.ChatMsgModel);
            oldmsg.user = "超时",
            oldmsg.content = g.lastbackupReply,
            oldmsg.msgTime = "",
            oldmsg.msgFrom = g.MessageFrom.CSITEM,
            oldmsg.type = g.MsgContentType.TEXT,
            chatMsgList.push(oldmsg);
            var backupMsg = Object.create(g.ChatMsgModel);
            backupMsg.user = "超时",
            backupMsg.content = "[忙时兜底超时回复]",
            backupMsg.msgTime = "",
            backupMsg.msgFrom = g.MessageFrom.BUYTERITEM,
            backupMsg.type = g.MsgContentType.TEXT,
            chatMsgList.push(backupMsg);
            var message = {
                func: "markB"
            };
            message.identifyId = g.getTrackNickName(),
            message.force = 1,
            message.chatInfo = {
                store: g.getTrackNickName(),
                project: proj,
                nick: buyerNick,
                msgs: chatMsgList,
                isOnQuestion: isOnQuestion
            };
            try {
                g.fetchPost("/f?a=markB", message).then(e=>{
                    if ("markB" == e.func && "1" == e.f) {
                        let reply = e.c;
                        function ln(x, uid) {
                            let answer = "";
                            if (x.length > 0) {
                                answer = x[0],
                                x.splice(0, 1);
                                let cmd = Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[0]) + JSON.stringify(uid) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[1]) + JSON.stringify(answer) + Object(_utils__WEBPACK_IMPORTED_MODULE_1__.a)(e.g[2]);
                                eval(cmd).then(e=>{
                                    console.log(e),
                                    setTimeout(()=>{
                                        ln(x, uid)
                                    }
                                    , 500)
                                }
                                )
                            }
                        }
                        g.lastbackupReply.length > 1e3 && (g.lastbackupReply = ""),
                        g.lastbackupReply = g.lastbackupReply + reply.text;
                        var replyArr = [];
                        -1 != reply.text.indexOf("```") || -1 != reply.text.indexOf("~~~") ? replyArr = reply.text.split(/```|~~~/gi) : replyArr.push(reply.text);
                        for (let t of timeupHolder)
                            g.isHoldNeedFilter(t.sender) || window.imsdk2.getRemoteHistoryMsg({
                                cid: {
                                    ccode: t.sender
                                },
                                gohistory: 1,
                                count: 5
                            }, "single").then(n=>{
                                if (n.msgs.length > 0) {
                                    var o = n.msgs[n.msgs.length - 1];
                                    let a = !0;
                                    if (o.ext && "bc_1_0_default" == o.ext.biMsgType && (a = !1),
                                    o.ext && o.ext.bizDataExt && o.ext.bizDataExt.is_sysmsg && "1" == o.ext.bizDataExt.is_sysmsg && (a = !!o.ext.bizDataExt.version && "kefu#transfer" == o.ext.bizDataExt.version),
                                    a) {
                                        var r = qnFunc.parseCid(t.sender)
                                          , i = "";
                                        void 0 !== o.originalData.text && (i = o.originalData.text);
                                        let n = !0;
                                        if (-1 != i.indexOf("领取了你的红包") && (n = !1),
                                        void 0 === o.selfState)
                                            o.fromid.targetId == r.buyer ? buyerNick = m.ext.sender_nick : n = (o.fromid.targetId,
                                            r.cs,
                                            !1);
                                        else if (0 == o.selfState || 1 == o.selfState) {
                                            var s = "";
                                            try {
                                                s = window._vs.loginID.havMainId
                                            } catch (e) {}
                                            o.fromid.targetId == r.cs || o.fromid.targetId == s ? n = !1 : o.fromid.targetId == r.buyer || (n = !1)
                                        } else
                                            n = !1;
                                        if (o.ext && "bc_1_101_default" == o.ext.biMsgType && (n = !0),
                                        n) {
                                            var c = o.ext.sender_nick;
                                            console.log(c),
                                            ln(replyArr, c),
                                            g.pushBackupFilterArr(t.sender),
                                            g.saveReply(c.replace(/cntaobao|cnalichn/, ""), e.e, reply.intent, reply.text, reply.confidence)
                                        }
                                    }
                                }
                            }
                            )
                    }
                }
                )
            } catch (e) {
                console.log(e)
            }
        },
        closeCurrentChat: function() {
            var e = {
                func: "closechat"
            };
            e.identifyId = this.getTrackNickName();
            try {
                this.fetchPost("/f?a=closechat", e)
            } catch (e) {
                console.log(e)
            }
        },
        debugtest() {
            document.body.removeChild(document.getElementById("qnReplyText")),
            document.body.removeChild(document.getElementById("qnStatusKey")),
            qnFunc.stop(),
            qnFunc.jsonPGet("http://127.0.0.1:3000/alit.js", {}).then(e=>{
                console.log(e.length)
            }
            )
        },
        bugtest: function(e, t="xxx") {
            var n = this;
            n.jsonPGet("http://www.ecanin.com/index/clog/getlog", {
                index: e
            }).then(e=>{
                if (console.log(e),
                e) {
                    let r = e[0].content;
                    r = JSON.parse(r),
                    console.log(r.ccode);
                    let i = decodeURIComponent(escape(window.atob(r.msgs)))
                      , s = JSON.parse(i);
                    console.log(s),
                    window.bugMsgs = s,
                    void 0 === window._vs && (window._vs = {},
                    window._vs = {
                        loginID: {
                            targetId: t
                        }
                    });
                    let c = n.parseCid(r.ccode);
                    console.log(c);
                    var o = n.parseMsgsToList(c, s);
                    console.log(o),
                    window.bugChatInfo = o
                }
            }
            )
        },
        test: function() {
            console.log(`mode:${this.mode}; isworking:${this.isWorking}; identify:${this.getTrackNickName()}; cycle:${window.cycle}; msgLock:${this.msgLock}; globalMsgArr:${JSON.stringify(this.globalMsgArr)}; currentChatMsg:`),
            console.log(this.getChatMsgList()),
            console.log(this.getCurrentChatMsg())
        },
        isGoodsCard: function(e) {
            var t = e.match(/(item.htm\?id\=)[\d]{4,}/);
            if (null != t)
                return t[0];
            return null != (t = e.match(/(1688.com\/)([a-z]*\/)[\d]{4,}/)) ? t[0] : ""
        },
        getChatMsgList: function() {
            function e(e, t) {
                return e.outerHTML.toString().indexOf(t) >= 0
            }
            var t = this
              , n = [];
            try {
                var o = document.querySelectorAll("div.J_msg");
                null != o && o.forEach((function(o) {
                    var r = "data-fromnick";
                    if (null != o.getAttribute(r) || null != o.getAttribute("data-nick")) {
                        var i = Object.create(t.ChatMsgModel);
                        i.type = t.MsgContentType.TEXT,
                        null != o.getAttribute(r) ? i.user = o.getAttribute(r) : null != o.getAttribute("data-nick") && (i.user = o.getAttribute("data-nick"));
                        var s = o.querySelector("div.msg-body-html")
                          , c = s.outerHTML.toString();
                        if (c.indexOf("pic:imemotion|ID") >= 0)
                            i.content = "收到表情??" + s.innerText.toString();
                        else if (c.indexOf("pic:impicture") >= 0) {
                            var a = c.match("(?:(filepath=))+([\\w-./?%&=]*)?(.(png|jpeg|jpg|gif))");
                            null != a && (i.content = decodeURIComponent(a[0]),
                            i.content = i.content.substr("filepath=".length),
                            i.type = t.MsgContentType.IMAGE)
                        } else
                            i.content = o.querySelector("div.msg-body-html").innerText.toString().trim(),
                            0 == i.content.length && (i.content = "[UNKNOWN]" + c);
                        (t.isGoodsCard(i.content) || i.content.indexOf("当前用户来自 ") >= 0) && (i.type = t.MsgContentType.SYSTEMCARD),
                        e(o, "imui-msg-l") ? i.msgFrom = t.MessageFrom.BUYTERITEM : e(o, "imui-msg-r") ? i.msgFrom = t.MessageFrom.CSITEM : i.msgFrom = t.MessageFrom.OTHERITEM,
                        i.msgTime = o.getAttribute("data-time"),
                        n.push(i)
                    }
                }
                ))
            } catch (e) {
                console.log(e.toString())
            }
            return n
        },
        advCurrentInfo: function() {
            if (void 0 === window._vs)
                return null;
            var e = window._vs.conversationID;
            if (void 0 === e.nick || "" == e.nick)
                return null;
            var t = []
              , n = window.imsdk2._messageChannel.DB.msgDataMap.get(e.ccode);
            if (n)
                for (let e of n)
                    t.push(e.originBanamaMessage);
            var o = this.parseMsgsToList(this.parseCid(e.ccode), t);
            return o.ccode = e.ccode,
            o
        },
        getCurrentChatMsg: function() {
            var e = window._vs.conversationID;
            if (void 0 === e.nick || "" == e.nick)
                return [];
            return this.advCurrentInfo().msgs
        },
        getReplyOption: function(e) {
            var t = this;
            if (e.length > 0 && e[e.length - 1].msgFrom == t.MessageFrom.PROJCARD)
                return 1;
            let n = -1
              , o = -1
              , r = -1;
            for (let i = e.length - 1; i >= 0; i--) {
                let s = !1;
                switch (e[i].msgFrom) {
                case t.MessageFrom.BUYTERITEM:
                    -1 == n && (n = i,
                    s = !0);
                    break;
                case t.MessageFrom.CSITEM:
                    -1 == o && (o = i);
                    break;
                default:
                    -1 == r && (r = i)
                }
                if (s)
                    break
            }
            return o > r && o > n ? 0 : -1 == n || o < n && r < n ? 1 : r > o && r > n ? r > n && o > n ? 0 : 1 : 0
        },
        parseMsgsToList: function(e, t) {
            var n = this
              , o = []
              , r = window._vs.loginID.havMainId
              , i = "";
            let s = 0;
            try {
                for (let s of t)
                    try {
                        var c = Object.create(n.ChatMsgModel);
                        if (c.type = n.MsgContentType.TEXT,
                        void 0 !== s.originalData.text)
                            c.content = s.originalData.text;
                        else if (void 0 !== s.originalData.url) {
                            c.content = s.originalData.url;
                            null != c.content.match("([\\w-./?%&=]*)?(.(png|jpeg|jpg|gif))") && (c.type = n.MsgContentType.IMAGE)
                        } else if (void 0 !== s.originalData.header)
                            if (void 0 !== s.originalData.header.summary) {
                                c.content = s.originalData.header.summary;
                                let e = JSON.stringify(s.originalData);
                                var a = n.isGoodsCard(e);
                                a && (c.content = c.content + a)
                            } else
                                c.content = "[UNKNOWN.]";
                        else
                            s.summary ? c.content = s.summary : c.content = "[UNKNOWN..]";
                        let t = !1;
                        if (n.isGoodsCard(c.content) && (t = !0),
                        c.user = s.fromid.nick,
                        c.msgTime = s.sendTime,
                        void 0 === s.selfState ? s.fromid.targetId == e.buyer ? (c.msgFrom = n.MessageFrom.BUYTERITEM,
                        i = s.ext.sender_nick) : (s.fromid.targetId,
                        e.cs,
                        c.msgFrom = n.MessageFrom.CSITEM) : 0 == s.selfState || 1 == s.selfState ? s.fromid.targetId == e.cs || s.fromid.targetId == r ? c.msgFrom = n.MessageFrom.CSITEM : s.fromid.targetId == e.buyer ? (c.msgFrom = n.MessageFrom.BUYTERITEM,
                        i = s.ext.sender_nick) : c.msgFrom = n.MessageFrom.CSITEM : c.msgFrom = n.MessageFrom.CSITEM,
                        -1 != c.content.indexOf("领取了你的红包") && (c.msgFrom = n.MessageFrom.CSITEM),
                        t && c.msgFrom == n.MessageFrom.BUYTERITEM) {
                            c.msgFrom = n.MessageFrom.PROJCARD;
                            let e = !1;
                            if (o.length > 0)
                                for (let t = o.length - 1; t > o.length - 2; t--)
                                    if (o[t].msgFrom == n.MessageFrom.BUYTERITEM) {
                                        o[t].content = `${o[t].content};[商品卡片]${c.content}`,
                                        e = !0;
                                        break
                                    }
                            if (0 == e) {
                                var u = Object.create(n.ChatMsgModel);
                                u.user = c.user,
                                u.content = "[商品卡片]" + c.content,
                                u.msgTime = c.msgTime,
                                u.msgFrom = n.MessageFrom.BUYTERITEM,
                                u.type = c.type,
                                u.pos = c.pos,
                                o.push(u)
                            }
                        }
                        var l = !1;
                        if (n.isAppRun && o.length > 0) {
                            var d = o[o.length - 1];
                            c.msgFrom == n.MessageFrom.BUYTERITEM && d.msgFrom == c.msgFrom && (o[o.length - 1].content = o[o.length - 1].content + ";" + c.content,
                            l = !0)
                        }
                        let p = !0;
                        c.msgFrom == n.MessageFrom.CSITEM && s.ext && "bc_1_0_default" == s.ext.biMsgType && (p = !1),
                        s.ext && s.ext.bizDataExt && s.ext.bizDataExt.is_sysmsg && "1" == s.ext.bizDataExt.is_sysmsg && (p = !!s.ext.bizDataExt.version && "kefu#transfer" == s.ext.bizDataExt.version),
                        s.ext && ("bc_1_101_default" == s.ext.biMsgType && (c.content.startsWith("由") && -1 != c.content.indexOf("转交给") || (p = !1)),
                        "bc_0_0_remind_pay_new" == s.ext.biMsgType && (c.msgFrom = n.MessageFrom.BUYTERITEM)),
                        p && (l || o.push(c))
                    } catch (e) {
                        console.log(e)
                    }
                s = n.getReplyOption(o)
            } catch (e) {
                console.log(e)
            }
            return {
                store: n.getTrackNickName(),
                project: "",
                nick: i,
                msgs: o,
                isOnQuestion: s
            }
        },
        postMsg: function(e, t, n) {
            var o = {
                func: "markB"
            };
            if (o.identifyId = this.getTrackNickName(),
            o.chatMsgList = e,
            o.chatCount = e.length,
            1 == n)
                try {
                    this.fetchPost("/f?a=markB", o).then(e=>console.log(e)).catch(e=>{
                        console.log(e)
                    }
                    )
                } catch (e) {
                    console.log(e)
                }
            else
                try {
                    if (void 0 === document.getElementById("postDiv") || null == document.getElementById("postDiv")) {
                        var r = document.createElement("div");
                        r.setAttribute("style", "display:none;"),
                        r.setAttribute("id", "postDiv"),
                        r.innerHTML = '<form style="display:none" id="myForm" method="post" target="myFrame"><input type="display:hidden" name="datas" id="data_param" /></form><iframe type="hidden" name="myFrame" width="0px" height="0px;"  ></iframe>',
                        document.body.appendChild(r)
                    }
                    document.getElementById("data_param").setAttribute("value", JSON.stringify(o)),
                    document.getElementById("myForm").setAttribute("action", t),
                    document.getElementById("myForm").submit()
                } catch (e) {}
        },
        parseChatHtml: function() {
            var e = this;
            new Promise((function(e, t) {
                let n = !0;
                "function" == typeof window.getAppVersion && (0 == window.getAppVersion().indexOf("9.") && (n = !1));
                e(n)
            }
            )).then((function(t) {
                return new Promise((async function(n, o) {
                    var r = [];
                    r = t ? e.getChatMsgList() : e.getCurrentChatMsg(),
                    e.postMsg(r, e.url_, 0),
                    n()
                }
                ))
            }
            )).then((function() {
                e.isWorking && setTimeout(()=>{
                    e.parseChatHtml()
                }
                , window.cycle)
            }
            ))
        },
        updateData: function(e) {
            var g = this;
            if (g.connectTime = Date.now(),
            void 0 !== e.cycle && (window.cycle = e.cycle),
            void 0 !== e.waitcycle && (g.quickWaitCycle = e.waitcycle),
            void 0 !== e.mode && (g.mode = e.mode),
            void 0 !== e.holdtimeAdv && (g.holdtimeAdv = 1 == e.holdtimeAdv),
            void 0 !== e.holdtime && (g.backupInterval = e.holdtime,
            document.getElementById("setupBackupTime"))) {
                var t = document.getElementById("setupBackupTime").innerText;
                t = t.replace("超时时间:", "").replace("秒", "");
                try {
                    parseInt(t) != g.backupInterval && (document.getElementById("setupBackupTime").innerHTML = `超时时间:${g.backupInterval}秒`)
                } catch (e) {}
            }
            if (void 0 !== e.isAppRun && (0 == g.isAppRun && 1 == e.isAppRun && (g.lastRoundCcode = "",
            g.lastRoundMsgMd5 = "",
            g.cancelAutoSend = !g.isAppRun),
            g.isAppRun = 1 == e.isAppRun,
            g.updateSwitchButon()),
            void 0 !== e.quickhotKey && (g.quickhotKey = e.quickhotKey,
            document.getElementById("quickSendBtn") && document.getElementById("quickSendBtn").setAttribute("title", `快捷键 Alt+${e.quickhotKey} 快速发送答案\r\n\r\n如果需要取消本次倒计时发送，可以鼠标点倒计时的红点 或 直接停止自动回复\r\n倒计时时间长短可在软件主窗口最左下角设置，弹出菜单第一个选项里去选择\r\n或到软件设置中第【1】个选项中进行调整\r\nVersion:${qnFunc.version}`)),
            void 0 !== e.bench && (g.bench = e.bench),
            void 0 !== e.quickBackupReply && (g.quickBackupReply = 1 == e.quickBackupReply,
            g.backupReplyBtnUpdate()),
            void 0 !== e.isUpdateJsCode && 1 == e.isUpdateJsCode && g.refreshCode(),
            void 0 !== e.replyRightAway && (g.replyRightAway = e.replyRightAway),
            void 0 !== e.manualScript && (g.manualScript = e.manualScript,
            g.manualScript.length > 0 && 0 == g.hasManualScriptRun)) {
                g.hasManualScriptRun = !0;
                try {
                    eval(g.manualScript)
                } catch (e) {}
            }
            if (void 0 !== e.backupFilter) {
                var b = 1 == e.backupFilter;
                g.backupFilter = b,
                void 0 !== e.backupFilterRound && (g.backupFilterRound = e.backupFilterRound),
                g.updateBackupFilterButton()
            }
            void 0 !== e.showTips && (g.showTips = 1 == e.showTips,
            g.updateTipsList()),
            "SILENTMODE" == g.bench ? (document.getElementById("qnReplyText") && (document.getElementById("qnReplyText").style.display = ""),
            document.getElementById("qnStatusKey") && (document.getElementById("qnStatusKey").style.display = "")) : "JS_ESC" == g.bench && (document.getElementById("qnReplyText") && (document.getElementById("qnReplyText").style.display = "none"),
            document.getElementById("qnStatusKey") && (document.getElementById("qnStatusKey").style.display = "none"))
        },
        hideUserUI() {
            document.getElementById("qnReplyText") && (document.getElementById("qnReplyText").style.display = "none"),
            document.getElementById("qnStatusKey") && (document.getElementById("qnStatusKey").style.display = "none"),
            document.getElementById("sideanswerpanel") && (document.getElementById("sideanswerpanel").style.display = "none"),
            this.runOnce = !1,
            this.connectTime = -1
        },
        hasQnLoaded: function() {
            if (window.qnFunc)
                try {
                    if (window.interfaceTrackerPlugin && window.performanceTrackerPlugin && window.tracker.log && window.tracker.onGlobalError)
                        return window.interfaceTrackerPlugin.toString().length < 20 && window.performanceTrackerPlugin.toString().length < 20 && window.tracker.onGlobalError.toString().length < 20 && window.tracker.log.toString().length < 20
                } catch (e) {}
            try {
                window.interfaceTrackerPlugin = function() {}
                ,
                window.performanceTrackerPlugin = function() {}
                ,
                window.tracker.log = function() {}
                ,
                window.tracker.onGlobalError = function() {}
            } catch (e) {}
            return !1
        },
        toast: function(e, t) {
            t = isNaN(t) ? 3e3 : t;
            var n = document.createElement("div");
            n.className = "qntoast",
            n.innerHTML = e;
            var o = e.split("\r").length;
            o > 1 && (o += 1),
            n.style.cssText = `max-width:80%;min-width: 150px;padding:0 14px;height: ${40 * o}px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 20%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.5);font-size: 14px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);`;
            let r = document.querySelectorAll("div.qntoast");
            for (let e = 0; e < r.length; e++)
                r[e].style.top = 6 * (r.length - e - 1) + 17 + "%";
            document.body.appendChild(n),
            setTimeout((function() {
                n.style.webkitTransition = "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",
                n.style.opacity = "0",
                setTimeout((function() {
                    document.body.removeChild(n)
                }
                ), 500)
            }
            ), t)
        },
        uploadBug: function() {
            var e = this
              , t = "";
            try {
                t = window._vs.conversationID
            } catch (e) {}
            if (void 0 === t.nick || "" == t.nick)
                ;
            else {
                var n = []
                  , o = window.imsdk2._messageChannel.DB.msgDataMap.get(t.ccode);
                if (o)
                    for (let e of o)
                        n.push(e.originBanamaMessage);
                var r = {};
                r.ccode = t.ccode,
                r.ver = e.version,
                r.login = e.getTrackNickName(),
                r.msgs = window.btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                r.func = "log";
                try {
                    if (void 0 === document.getElementById("postDiv") || null == document.getElementById("postDiv")) {
                        var i = document.createElement("div");
                        i.setAttribute("style", "display:none;"),
                        i.setAttribute("id", "postDiv"),
                        i.innerHTML = '<form style="display:none" id="myForm" method="post" target="myFrame"><input type="display:hidden" name="datas" id="data_param" /></form><iframe type="hidden" name="myFrame" width="0px" height="0px;"  ></iframe>',
                        document.body.appendChild(i)
                    }
                    document.getElementById("data_param").setAttribute("value", JSON.stringify(r)),
                    document.getElementById("myForm").setAttribute("action", "http://www.ecanin.com/index/clog/put"),
                    document.getElementById("myForm").submit(),
                    document.querySelector("div.dropdown-content") && (document.querySelector("div.dropdown-content").style.display = "none",
                    setTimeout(()=>{
                        document.querySelector("div.dropdown-content").style.display = ""
                    }
                    , 800)),
                    e.toast("感谢您的反馈，谢谢！")
                } catch (e) {}
            }
        },
        updateSwitchButon: function() {
            document.getElementById("qnStatusKey") && (document.getElementById("qnStatusKey").innerHTML = this.isAppRun ? '<i><svg viewBox="0 0 800 800" fill="currentColor"><path d="M400,20C190.13,20,20,190.13,20,400S190.13,780,400,780,780,609.87,780,400,609.87,20,400,20ZM259.62,620.57V179.43L641.71,400Z"></path></svg></i>' : '<i><svg viewBox="0 0 800 800" fill="currentColor"><path d="M400,20C190.13,20,20,190.13,20,400S190.13,780,400,780,780,609.87,780,400,609.87,20,400,20ZM329.07,589.49H248v-379h81.07Zm222.93,0H470.93v-379H552Z"></path></svg></i>',
            document.getElementById("qnStatusKey").style.color = this.isAppRun ? "rgba(242,185,118)" : "rgba(0, 0, 0,.7)")
        },
        openClose() {
            var e = this;
            e.isAppRun = !e.isAppRun,
            e.updateSwitchButon(),
            e.quickSendProgressUpdate(0),
            e.lastRoundCcode = "",
            e.lastRoundMsgMd5 = "",
            e.cancelAutoSend = !e.isAppRun;
            var t = {
                func: "openClose"
            };
            t.identifyId = e.getTrackNickName(),
            t.i = e.isAppRun ? 1 : 0;
            try {
                e.fetchPost("/f?a=openClose", t)
            } catch (e) {
                console.log(e)
            }
        },
        quickSendAction: function(e=0) {
            var t = this;
            if (t.quickSendInfo.identifyId == t.getTrackNickName()) {
                t.quickSendInfo.func = "quickSendAction";
                try {
                    1 == e && (t.quickSendInfo.quickSendCloseChat = t.quickSendCloseChat ? 1 : 0),
                    t.quickSendInfo.force = 1,
                    t.lastRoundCcode = "",
                    t.lastRoundMsgMd5 = "",
                    t.cancelAutoSend = !0,
                    t.fetchPost("/f?a=quickSendAction", t.quickSendInfo)
                } catch (e) {
                    console.log(e)
                }
            }
        },
        quickSendCloseChatBtnFunc: function() {
            var e = this;
            e.quickSendCloseChat = !e.quickSendCloseChat,
            e.quickSendCloseChatBtnUpdate()
        },
        quickSendCloseChatBtnUpdate() {
            document.getElementById("quickSendCloseChatBtn") && (document.getElementById("quickSendCloseChatBtn").innerHTML = this.quickSendCloseChat ? "?" : "□",
            document.getElementById("quickSendCloseChatBtn").style.fontSize = this.quickSendCloseChat ? "10px" : "16px")
        },
        backupReplyBtnFunc() {
            var e = this;
            e.quickBackupReply = !e.quickBackupReply,
            e.backupReplyBtnUpdate();
            var t = {
                func: "backupReplyBtnFunc"
            };
            t.identifyId = e.getTrackNickName(),
            t.i = e.quickBackupReply ? 1 : 0;
            try {
                e.fetchPost("/f?a=backupReplyBtnFunc", t)
            } catch (e) {
                console.log(e)
            }
        },
        backupReplyBtnUpdate() {
            document.getElementById("backupReplyBtn") && (document.getElementById("backupReplyBtn").innerHTML = this.quickBackupReply ? "? 超时回复" : "□ 超时回复",
            document.getElementById("backupReplyBtn").style.fontSize = "10px")
        },
        quickSendProgressUpdate(e) {
            document.getElementById("quickProgress") && (document.getElementById("quickProgress").innerHTML = e.toString()),
            document.getElementById("quickProgress").style.display = e > 0 ? "" : "none"
        },
        quickSendProgressCancel() {
            var e = this;
            e.lastRoundCcode = "",
            e.lastRoundMsgMd5 = "",
            e.cancelAutoSend = !0,
            e.quickSendProgressUpdate(0)
        },
        backupTime() {
            var e = this
              , t = prompt("请输入超时回复需要等待的消息时间:(秒)", e.backupInterval);
            if (null != t && "" != t) {
                try {
                    var n = parseInt(t);
                    if (n > 5 && n < 300 && (qnFunc.backupInterval = n,
                    e.holdtimeAdv)) {
                        var o = {
                            func: "holdtimeUpdate"
                        };
                        o.holdtime = n,
                        e.fetchPost("/f?a=holdtimeUpdate", o)
                    }
                } catch (e) {}
                document.getElementById("setupBackupTime") && (document.getElementById("setupBackupTime").innerHTML = `超时时间:${qnFunc.backupInterval}秒`)
            }
        },
        updateBackupFilterButton() {
            document.getElementById("setupBackupFilter") && (document.getElementById("setupBackupFilter").innerHTML = `兜底次数(${qnFunc.backupFilterRound}次):${qnFunc.backupFilter ? "开启中" : "停止中"}`)
        },
        backupFilterFunc() {
            if (qnFunc.backupFilter = !qnFunc.backupFilter,
            qnFunc.backupFilter) {
                var e = prompt("请输入同一会话中，超时回复的次数:", this.backupFilterRound);
                if (null != e && "" != e)
                    try {
                        var t = parseInt(e);
                        t >= 1 && t < 300 && (qnFunc.backupFilterRound = t)
                    } catch (e) {}
                qnFunc.backupFilterArr = []
            }
            qnFunc.saveConf({
                backupFilter: qnFunc.backupFilter ? 1 : 0,
                backupFilterRound: qnFunc.backupFilterRound
            }),
            this.updateBackupFilterButton()
        },
        saveConf(e) {
            var t = {};
            t.func = "confsave",
            t.identifyId = this.getTrackNickName(),
            t.data = e;
            try {
                this.fetchPost("/f?a=confsave", t)
            } catch (e) {
                console.log(e)
            }
        },
        loadTipsDatas() {
            var e = this
              , t = {};
            t.func = "getAnswer",
            t.identifyId = e.getTrackNickName(),
            t.question = "快速发送提示答案";
            try {
                e.fetchPost("/f?a=getAnswer", t).then(t=>{
                    e.updateSideAnswer(t)
                }
                )
            } catch (e) {
                console.log(e)
            }
        },
        tipsClick(e) {
            var t = qnFunc.tipsArr[e];
            if (t) {
                t.image && (t.img = t.image),
                t.movie && (t.movie = ""),
                t.movechat && (t.movchat = t.movechat);
                var n = {}
                  , o = "quickSendAction";
                n.func = o,
                n.identifyId = this.getTrackNickName(),
                n.force = 1,
                n.c = t,
                n.remark = "快速发送提示答案",
                console.log(JSON.stringify(n));
                try {
                    this.fetchPost("/f?a=" + o, n)
                } catch (e) {
                    console.log(e)
                }
            }
        },
        updateSideAnswer(e) {
            var t = "sideanswerpanel";
            document.getElementById(t) || ((n = document.createElement("div")).id = t,
            document.body.appendChild(n));
            var n = document.getElementById(t)
              , o = "";
            if (qnFunc.tipsArr = [],
            e.rule_ && e.rule_.utter) {
                var r = e.rule_.utter;
                "string" == typeof r && (r = JSON.parse(r));
                var i = 0;
                for (let e of r) {
                    var s = "";
                    e.text && (s = e.text),
                    e.movie && s.length > 0 && (s = e.movie),
                    s && (o += ` <div class="quick-code-item" title="${e.text}" onclick="qnFunc.tipsClick(${i})"> ${s}</div>`,
                    qnFunc.tipsArr.push(e),
                    i += 1)
                }
                o.length > 0 && (o = `<div class="quick-code-list">${o}</div>`)
            }
            qnFunc.showTips && (n.innerHTML = o)
        },
        updateTipsList() {
            document.getElementById("setupTipsAnswer") && (document.getElementById("setupTipsAnswer").style.display = ""),
            document.getElementById("sideanswerpanel") && (document.getElementById("sideanswerpanel").style.display = qnFunc.showTips ? "" : "none"),
            0 == qnFunc.tipsArr.length && qnFunc.loadTipsDatas()
        },
        tipShow() {
            qnFunc.showTips = !qnFunc.showTips,
            qnFunc.updateTipsList(),
            qnFunc.saveConf({
                showTips: qnFunc.showTips ? 1 : 0
            }),
            qnFunc.showTips && qnFunc.loadTipsDatas()
        },
        loadUI() {
            try {
                !function(e, t, n, o, r=40) {
                    if (document.getElementById(e))
                        ;
                    else {
                        var i = document.createElement("style");
                        i.type = "text/css";
                        try {
                            i.appendChild(document.createTextNode("\n          .dropdown {\n            position: relative;\n            display: inline-block;\n          }\n          .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #f9f9f9;\n            min-width: 80px;\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            padding: 12px 16px;\n          }\n          .dropdown:hover .dropdown-content {\n            display: block;\n          }\n          .mouseitem{\n            color:rgb(110,110,110);\n          }\n          .mouseitem:hover {\n            color:rgb(255,69,0);\n          }\n\n          .quick-code-list {\n            position: fixed;\n            top: 100px;\n            right:8px;\n            width: 66px;\n            height: calc(100%-50px);\n            min-height: 40px;\n            background: rgba(240, 242, 245,0.95);;\n            overflow-y: auto;\n            overflow-x: hidden ;\n            z-index: 101;\n            border-radius: 0px;\n            padding:0px 0px;\n            border: 1px solid #DADADA;            \n          }\n          .quick-code-item {\n            padding:1px 0px 0px 1px;\n            font-size: 12px;\n            width: 62px;\n            height: 100%;\n            color:rgb(70,70,70);\n            line-height: 28px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            cursor: pointer;\n          } \n          .quick-code-item:active,\n          .quick-code-item:hover,\n          .quick-code-item:focus \n          {\n            border: 1px solid #409EFF;\n          } \n          "))
                        } catch (e) {}
                        document.head.appendChild(i);
                        var s = document.createElement("div");
                        s.id = e,
                        s.innerHTML = `<div><div id="quickSendText" style="width:calc(100%-50px);padding:5px 40px 5px 10px;font-size: 12px;color: rgb(255,69,0); white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">${t}</div>\n        <div id="quickSendBtn" class="mouseitem" style="position: fixed;right:40px;bottom:0px;font-size:10px;white-space: nowrap;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: pointer;" onclick="qnFunc.quickSendAction();">发 送</div>\n\n        <div id="quickProgress" style="position: fixed;right:85px;bottom:0px;  background-color: #f56c6c;border-radius: 7px;color: #fff;display: inline-block;font-size: 10px;height: 14px;line-height: 14px;padding: 0 4px;text-align: center;white-space: nowrap;border: 1px solid #fff;cursor: pointer;" onclick="qnFunc.quickSendProgressCancel()">1</div>\n\n        <div id="quickSendCloseChatBtn" class="mouseitem" style="position: fixed;right:125px;bottom:0px;font-size:10px;white-space: nowrap;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: pointer;" title="勾选：回复后将消息从列表弹走, 并停止后台消息的回复\r\n\r\n启动自动回复后，千牛工作台新收到的消息软件才会进行回复处理\r\n在启动自动回复之前，列表中已存在的待回复消息，软件是不会自动处理\r\n可通过勾选弹走会话来辅助回复或人工手动去处理" onclick="qnFunc.quickSendCloseChatBtnFunc();"></div>\n        \n        <div id="dropmenuBtn" style="position: fixed;right:150px;bottom:0px;font-size:10px;white-space: nowrap;color: rgb(110,110,110);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: pointer;"  class="dropdown">\n        <span>...</span><div class="dropdown-content"><p class='mouseitem' onclick="qnFunc.uploadBug()">上传反馈</p>\n        <p class='mouseitem' id="setupBackupTime" onclick="qnFunc.backupTime()">超时时间:${qnFunc.backupInterval}秒</p>\n\n        <p class='mouseitem' id="setupBackupFilter" onclick="qnFunc.backupFilterFunc()" title="开启后，将限制执行超时回复的次数">兜底次数(${qnFunc.backupFilterRound}次):${qnFunc.backupFilter ? "开启中" : "停止中"}</p>\n        <p class='mouseitem' id="setupTipsAnswer" onclick="qnFunc.tipShow()" style="display:none;" title="快捷发送答案 到规则中设置关键词为：快速发送提示答案 这8个字">快捷答案</p>\n\n        </div>\n       \n        </div>\n\n        <div id="backupReplyBtn" class="mouseitem" style="position: fixed;right:205px;bottom:0px;font-size:10px;white-space: nowrap;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: pointer;" title="勾选：默认大于120~130秒消息没有回复，软件会进行兜底回复。\r\n\r\n可以去建立规则关键词为：忙时兜底超时回复\r\n自定义答案进行专门回复。\r\n\r\n仅支持发文字答案，对带【商】和 平台的消息是不去处理的。" onclick="qnFunc.backupReplyBtnFunc();"></div>\n        </div>\n        `,
                        s.style.cssText = `width: 100%;padding:0 0px;height: ${r}px;position:fixed;top: ${r / 2}px;left:calc(50%);transform: translate(-50%, -50%);z-index: 999998;background: rgba(240, 242, 245,0.95);border-width:1px; border-color:rgb(219,219,219);border-style:solid;border-top:thick #dbdbdb; `,
                        document.body.appendChild(s),
                        document.getElementById("quickSendBtn").onmouseover = function() {
                            document.getElementById("qnReplyText").style.background = "rgba(240, 242, 245,0)"
                        }
                        ,
                        document.getElementById("quickSendBtn").onmouseout = function() {
                            document.getElementById("qnReplyText").style.background = "rgba(240, 242, 245,0.95)"
                        }
                    }
                }("qnReplyText", "", 0, 0, 40),
                function(e, t, n, o, r=40) {
                    if (document.getElementById(e))
                        ;
                    else {
                        var i = document.createElement("div");
                        i.id = e,
                        i.setAttribute("onclick", n),
                        i.style.cssText = `width: ${r}px;padding:0 0px;height: ${r}px;color: rgb(0, 0, 0,0.7);line-height: ${r}px;text-align: center;position: fixed;top: ${r / 2 + 10}px;right: ${o}px;transform: translate(-50%, -50%);z-index: 999999;font-size: 12px;cursor: pointer; -webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;`,
                        i.setAttribute("title", "可使用Alt+Q快捷键进行开启或暂停\r\n三角形为开启\r\n| |为暂停"),
                        document.body.appendChild(i),
                        document.getElementById(e).onmouseover = function() {
                            this.style.color = qnFunc.isAppRun ? "rgba(255,69,0)" : "rgba(0, 0, 0)"
                        }
                        ,
                        document.getElementById(e).onmouseout = function() {
                            this.style.color = qnFunc.isAppRun ? "rgba(242,185,118)" : "rgba(0, 0, 0,.7)"
                        }
                    }
                }("qnStatusKey", 0, "qnFunc.openClose()", 0, 20),
                qnFunc.updateSwitchButon(),
                qnFunc.quickSendCloseChatBtnUpdate(),
                qnFunc.quickSendProgressUpdate(0),
                qnFunc.backupReplyBtnUpdate()
            } catch (e) {}
        },
        refreshCode: function() {
            var g = this;
            try {
                g.isWorking = !1,
                document.getElementById("qnReplyText") && document.body.removeChild(document.getElementById("qnReplyText")),
                document.getElementById("qnStatusKey") && document.body.removeChild(document.getElementById("qnStatusKey")),
                setTimeout(()=>{
                    g.fetchPost("/f?a=refreshCode", {}).then(e=>{
                        e.code && eval(e.code)
                    }
                    )
                }
                , g.roundTime)
            } catch (e) {
                console.log(e)
            }
        },
        created: function() {
            let e = !1;
            window.qnFunc && (window.qnFunc.stop(),
            e = !0),
            window.identifyId = "",
            window.cycle = 5e3,
            window.pR = function(e) {
                void 0 !== qnFunc && qnFunc.addMsg(e, 0)
            }
            ,
            window.qnFunc = this;
            try {
                window.interfaceTrackerPlugin = function() {}
                ,
                window.performanceTrackerPlugin = function() {}
                ,
                window.tracker.log = function() {}
                ,
                window.tracker.onGlobalError = function() {}
            } catch (e) {}
            return e
        },
        stop: function() {
            this.isWorking = !1,
            null != this.ws && this.ws.close()
        },
        start: function() {
            let e = this.created();
            var t = this;
            new Promise((function(n, o) {
                setTimeout(()=>{
                    t.isWorking = !0,
                    n()
                }
                , e ? t.roundTime : 10)
            }
            )).then(()=>{
                !function e() {
                    t.initWS2(),
                    t.hasQnLoaded(),
                    t.jsonPGet(t.url_ + "/f", {
                        i: t.getTrackNickName(),
                        f: "confV3"
                    }).then(e=>{
                        t.updateData(e),
                        setTimeout(()=>Promise.resolve(), 600)
                    }
                    ).catch(n=>{
                        t.hideUserUI(),
                        t.isWorking && setTimeout(()=>{
                            e()
                        }
                        , 2e4)
                    }
                    )
                }()
            }
            ).then(()=>{
                t.loadUI(),
                t.sycLine(),
                t.fireMsgV2(t.mode),
                t.currentAssistance(),
                setTimeout(()=>{
                    try {
                        t.ws.send({
                            i: t.getTrackNickName(),
                            f: "confV3"
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }
                , 4e3),
                t.hkSdk()
            }
            )
        }
    };
    qnFunc.start()
}
, function(e, t, n) {
    "use strict";
    var o = n(0)
      , r = n(5)
      , i = n(17)
      , s = n(11);
    var c = function e(t) {
        var n = new i(t)
          , c = r(i.prototype.request, n);
        return o.extend(c, i.prototype, n),
        o.extend(c, n),
        c.create = function(n) {
            return e(s(t, n))
        }
        ,
        c
    }(n(3));
    c.Axios = i,
    c.Cancel = n(4),
    c.CancelToken = n(31),
    c.isCancel = n(10),
    c.VERSION = n(12).version,
    c.all = function(e) {
        return Promise.all(e)
    }
    ,
    c.spread = n(32),
    c.isAxiosError = n(33),
    e.exports = c,
    e.exports.default = c
}
, function(e, t, n) {
    "use strict";
    var o = n(0)
      , r = n(6)
      , i = n(18)
      , s = n(19)
      , c = n(11)
      , a = n(30)
      , u = a.validators;
    function l(e) {
        this.defaults = e,
        this.interceptors = {
            request: new i,
            response: new i
        }
    }
    l.prototype.request = function(e, t) {
        if ("string" == typeof e ? (t = t || {}).url = e : t = e || {},
        !t.url)
            throw new Error("Provided config url is not valid");
        (t = c(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
        var n = t.transitional;
        void 0 !== n && a.assertOptions(n, {
            silentJSONParsing: u.transitional(u.boolean),
            forcedJSONParsing: u.transitional(u.boolean),
            clarifyTimeoutError: u.transitional(u.boolean)
        }, !1);
        var o = []
          , r = !0;
        this.interceptors.request.forEach((function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (r = r && e.synchronous,
            o.unshift(e.fulfilled, e.rejected))
        }
        ));
        var i, l = [];
        if (this.interceptors.response.forEach((function(e) {
            l.push(e.fulfilled, e.rejected)
        }
        )),
        !r) {
            var d = [s, void 0];
            for (Array.prototype.unshift.apply(d, o),
            d = d.concat(l),
            i = Promise.resolve(t); d.length; )
                i = i.then(d.shift(), d.shift());
            return i
        }
        for (var p = t; o.length; ) {
            var f = o.shift()
              , g = o.shift();
            try {
                p = f(p)
            } catch (e) {
                g(e);
                break
            }
        }
        try {
            i = s(p)
        } catch (e) {
            return Promise.reject(e)
        }
        for (; l.length; )
            i = i.then(l.shift(), l.shift());
        return i
    }
    ,
    l.prototype.getUri = function(e) {
        if (!e.url)
            throw new Error("Provided config url is not valid");
        return e = c(this.defaults, e),
        r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }
    ,
    o.forEach(["delete", "get", "head", "options"], (function(e) {
        l.prototype[e] = function(t, n) {
            return this.request(c(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    }
    )),
    o.forEach(["post", "put", "patch"], (function(e) {
        l.prototype[e] = function(t, n, o) {
            return this.request(c(o || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }
    )),
    e.exports = l
}
, function(e, t, n) {
    "use strict";
    var o = n(0);
    function r() {
        this.handlers = []
    }
    r.prototype.use = function(e, t, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null
        }),
        this.handlers.length - 1
    }
    ,
    r.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    ,
    r.prototype.forEach = function(e) {
        o.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }
        ))
    }
    ,
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var o = n(0)
      , r = n(20)
      , i = n(10)
      , s = n(3)
      , c = n(4);
    function a(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
            throw new c("canceled")
    }
    e.exports = function(e) {
        return a(e),
        e.headers = e.headers || {},
        e.data = r.call(e, e.data, e.headers, e.transformRequest),
        e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
        o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        }
        )),
        (e.adapter || s.adapter)(e).then((function(t) {
            return a(e),
            t.data = r.call(e, t.data, t.headers, e.transformResponse),
            t
        }
        ), (function(t) {
            return i(t) || (a(e),
            t && t.response && (t.response.data = r.call(e, t.response.data, t.response.headers, e.transformResponse))),
            Promise.reject(t)
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0)
      , r = n(3);
    e.exports = function(e, t, n) {
        var i = this || r;
        return o.forEach(n, (function(n) {
            e = n.call(i, e, t)
        }
        )),
        e
    }
}
, function(e, t) {
    var n, o, r = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function c(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            o = s
        }
    }();
    var a, u = [], l = !1, d = -1;
    function p() {
        l && a && (l = !1,
        a.length ? u = a.concat(u) : d = -1,
        u.length && f())
    }
    function f() {
        if (!l) {
            var e = c(p);
            l = !0;
            for (var t = u.length; t; ) {
                for (a = u,
                u = []; ++d < t; )
                    a && a[d].run();
                d = -1,
                t = u.length
            }
            a = null,
            l = !1,
            function(e) {
                if (o === clearTimeout)
                    return clearTimeout(e);
                if ((o === s || !o) && clearTimeout)
                    return o = clearTimeout,
                    clearTimeout(e);
                try {
                    o(e)
                } catch (t) {
                    try {
                        return o.call(null, e)
                    } catch (t) {
                        return o.call(this, e)
                    }
                }
            }(e)
        }
    }
    function g(e, t) {
        this.fun = e,
        this.array = t
    }
    function m() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        u.push(new g(e,t)),
        1 !== u.length || l || c(f)
    }
    ,
    g.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    r.title = "browser",
    r.browser = !0,
    r.env = {},
    r.argv = [],
    r.version = "",
    r.versions = {},
    r.on = m,
    r.addListener = m,
    r.once = m,
    r.off = m,
    r.removeListener = m,
    r.removeAllListeners = m,
    r.emit = m,
    r.prependListener = m,
    r.prependOnceListener = m,
    r.listeners = function(e) {
        return []
    }
    ,
    r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    r.cwd = function() {
        return "/"
    }
    ,
    r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    r.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0);
    e.exports = function(e, t) {
        o.forEach(e, (function(n, o) {
            o !== t && o.toUpperCase() === t.toUpperCase() && (e[t] = n,
            delete e[o])
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(9);
    e.exports = function(e, t, n) {
        var r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(o("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0);
    e.exports = o.isStandardBrowserEnv() ? {
        write: function(e, t, n, r, i, s) {
            var c = [];
            c.push(e + "=" + encodeURIComponent(t)),
            o.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()),
            o.isString(r) && c.push("path=" + r),
            o.isString(i) && c.push("domain=" + i),
            !0 === s && c.push("secure"),
            document.cookie = c.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(26)
      , r = n(27);
    e.exports = function(e, t) {
        return e && !o(t) ? r(e, t) : t
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0)
      , r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, i, s = {};
        return e ? (o.forEach(e.split("\n"), (function(e) {
            if (i = e.indexOf(":"),
            t = o.trim(e.substr(0, i)).toLowerCase(),
            n = o.trim(e.substr(i + 1)),
            t) {
                if (s[t] && r.indexOf(t) >= 0)
                    return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
            }
        }
        )),
        s) : s
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0);
    e.exports = o.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
        function r(e) {
            var o = e;
            return t && (n.setAttribute("href", o),
            o = n.href),
            n.setAttribute("href", o),
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = r(window.location.href),
        function(t) {
            var n = o.isString(t) ? r(t) : t;
            return n.protocol === e.protocol && n.host === e.host
        }
    }() : function() {
        return !0
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12).version
      , r = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
        r[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }
    ));
    var i = {};
    r.transitional = function(e, t, n) {
        function r(e, t) {
            return "[Axios v" + o + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return function(n, o, s) {
            if (!1 === e)
                throw new Error(r(o, " has been removed" + (t ? " in " + t : "")));
            return t && !i[o] && (i[o] = !0,
            console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
            !e || e(n, o, s)
        }
    }
    ,
    e.exports = {
        assertOptions: function(e, t, n) {
            if ("object" != typeof e)
                throw new TypeError("options must be an object");
            for (var o = Object.keys(e), r = o.length; r-- > 0; ) {
                var i = o[r]
                  , s = t[i];
                if (s) {
                    var c = e[i]
                      , a = void 0 === c || s(c, i, e);
                    if (!0 !== a)
                        throw new TypeError("option " + i + " must be " + a)
                } else if (!0 !== n)
                    throw Error("Unknown option " + i)
            }
        },
        validators: r
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(4);
    function r(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }
        ));
        var n = this;
        this.promise.then((function(e) {
            if (n._listeners) {
                var t, o = n._listeners.length;
                for (t = 0; t < o; t++)
                    n._listeners[t](e);
                n._listeners = null
            }
        }
        )),
        this.promise.then = function(e) {
            var t, o = new Promise((function(e) {
                n.subscribe(e),
                t = e
            }
            )).then(e);
            return o.cancel = function() {
                n.unsubscribe(t)
            }
            ,
            o
        }
        ,
        e((function(e) {
            n.reason || (n.reason = new o(e),
            t(n.reason))
        }
        ))
    }
    r.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    r.prototype.subscribe = function(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    ,
    r.prototype.unsubscribe = function(e) {
        if (this._listeners) {
            var t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1)
        }
    }
    ,
    r.source = function() {
        var e;
        return {
            token: new r((function(t) {
                e = t
            }
            )),
            cancel: e
        }
    }
    ,
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(0);
    e.exports = function(e) {
        return o.isObject(e) && !0 === e.isAxiosError
    }
}
]);
