! function() {
    var e = {
            202: function() {
                ! function() {
                    "use strict";

                    function e(e) {
                        var t = !0,
                            n = !1,
                            o = null,
                            a = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };

                        function i(e) { return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList) }

                        function r(e) { e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", "")) }

                        function s(e) { t = !1 }

                        function d() { document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u) }

                        function u(e) { e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u)) }
                        document.addEventListener("keydown", (function(n) { n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && r(e.activeElement), t = !0) }), !0), document.addEventListener("mousedown", s, !0), document.addEventListener("pointerdown", s, !0), document.addEventListener("touchstart", s, !0), document.addEventListener("visibilitychange", (function(e) { "hidden" === document.visibilityState && (n && (t = !0), d()) }), !0), d(), e.addEventListener("focus", (function(e) {
                            var n, o, s;
                            i(e.target) && (t || (n = e.target, o = n.type, "INPUT" === (s = n.tagName) && a[o] && !n.readOnly || "TEXTAREA" === s && !n.readOnly || n.isContentEditable)) && r(e.target)
                        }), !0), e.addEventListener("blur", (function(e) {
                            var t;
                            i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(o), o = window.setTimeout((function() { n = !1 }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
                        }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
                    }
                    if ("undefined" != typeof window && "undefined" != typeof document) {
                        var t;
                        window.applyFocusVisiblePolyfill = e;
                        try { t = new CustomEvent("focus-visible-polyfill-ready") } catch (e) {
                            (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                        }
                        window.dispatchEvent(t)
                    }
                    "undefined" != typeof document && e(document)
                }()
            }
        },
        t = {};

    function n(o) { var a = t[o]; if (void 0 !== a) return a.exports; var i = t[o] = { exports: {} }; return e[o].call(i.exports, i, i.exports, n), i.exports }! function() {
        "use strict";

        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function t(e) { return function(e) { if (Array.isArray(e)) return o(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || function(e, t) { if (e) { if ("string" == typeof e) return o(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0 } }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }
        n(202);
        var a, i, r, s, d, u = (a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], i = function() {
            function n(e) {
                var o = e.targetModal,
                    a = e.triggers,
                    i = void 0 === a ? [] : a,
                    r = e.onShow,
                    s = void 0 === r ? function() {} : r,
                    d = e.onClose,
                    u = void 0 === d ? function() {} : d,
                    c = e.openTrigger,
                    l = void 0 === c ? "data-micromodal-trigger" : c,
                    m = e.closeTrigger,
                    f = void 0 === m ? "data-micromodal-close" : m,
                    h = e.openClass,
                    v = void 0 === h ? "is-open" : h,
                    g = e.disableScroll,
                    y = void 0 !== g && g,
                    b = e.disableFocus,
                    w = void 0 !== b && b,
                    p = e.awaitCloseAnimation,
                    E = void 0 !== p && p,
                    M = e.awaitOpenAnimation,
                    L = void 0 !== M && M,
                    k = e.debugMode,
                    T = void 0 !== k && k;
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, n), this.modal = document.getElementById(o), this.config = { debugMode: T, disableScroll: y, openTrigger: l, closeTrigger: f, openClass: v, onShow: s, onClose: u, awaitCloseAnimation: E, awaitOpenAnimation: L, disableFocus: w }, i.length > 0 && this.registerTriggers.apply(this, t(i)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
            }
            var o, i;
            return o = n, (i = [{
                key: "registerTriggers",
                value: function() {
                    for (var e = this, t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    n.filter(Boolean).forEach((function(t) { t.addEventListener("click", (function(t) { return e.showModal(t) })) }))
                }
            }, {
                key: "showModal",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                        var n = function t() { e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode() };
                        this.modal.addEventListener("animationend", n, !1)
                    } else this.setFocusToFirstNode();
                    this.config.onShow(this.modal, this.activeElement, t)
                }
            }, {
                key: "closeModal",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = this.modal;
                    if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
                        var n = this.config.openClass;
                        this.modal.addEventListener("animationend", (function e() { t.classList.remove(n), t.removeEventListener("animationend", e, !1) }), !1)
                    } else t.classList.remove(this.config.openClass)
                }
            }, { key: "closeModalById", value: function(e) { this.modal = document.getElementById(e), this.modal && this.closeModal() } }, {
                key: "scrollBehaviour",
                value: function(e) {
                    if (this.config.disableScroll) {
                        var t = document.querySelector("body");
                        switch (e) {
                            case "enable":
                                Object.assign(t.style, { overflow: "" });
                                break;
                            case "disable":
                                Object.assign(t.style, { overflow: "hidden" })
                        }
                    }
                }
            }, { key: "addEventListeners", value: function() { this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown) } }, { key: "removeEventListeners", value: function() { this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown) } }, { key: "onClick", value: function(e) { e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e) } }, { key: "onKeydown", value: function(e) { 27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e) } }, { key: "getFocusableNodes", value: function() { var e = this.modal.querySelectorAll(a); return Array.apply(void 0, t(e)) } }, {
                key: "setFocusToFirstNode",
                value: function() {
                    var e = this;
                    if (!this.config.disableFocus) {
                        var t = this.getFocusableNodes();
                        if (0 !== t.length) {
                            var n = t.filter((function(t) { return !t.hasAttribute(e.config.closeTrigger) }));
                            n.length > 0 && n[0].focus(), 0 === n.length && t[0].focus()
                        }
                    }
                }
            }, {
                key: "retainFocus",
                value: function(e) {
                    var t = this.getFocusableNodes();
                    if (0 !== t.length)
                        if (t = t.filter((function(e) { return null !== e.offsetParent })), this.modal.contains(document.activeElement)) {
                            var n = t.indexOf(document.activeElement);
                            e.shiftKey && 0 === n && (t[t.length - 1].focus(), e.preventDefault()), !e.shiftKey && t.length > 0 && n === t.length - 1 && (t[0].focus(), e.preventDefault())
                        } else t[0].focus()
                }
            }]) && e(o.prototype, i), n
        }(), r = null, s = function(e) { if (!document.getElementById(e)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1 }, d = function(e, t) { if (function(e) { e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>')) }(e), !t) return !0; for (var n in t) s(n); return !0 }, {
            init: function(e) {
                var n = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, e),
                    o = t(document.querySelectorAll("[".concat(n.openTrigger, "]"))),
                    a = function(e, t) {
                        var n = [];
                        return e.forEach((function(e) {
                            var o = e.attributes[t].value;
                            void 0 === n[o] && (n[o] = []), n[o].push(e)
                        })), n
                    }(o, n.openTrigger);
                if (!0 !== n.debugMode || !1 !== d(o, a))
                    for (var s in a) {
                        var u = a[s];
                        n.targetModal = s, n.triggers = t(u), r = new i(n)
                    }
            },
            show: function(e, t) {
                var n = t || {};
                n.targetModal = e, !0 === n.debugMode && !1 === s(e) || (r && r.removeEventListeners(), (r = new i(n)).showModal())
            },
            close: function(e) { e ? r.closeModalById(e) : r.closeModal() }
        });
        window.MicroModal = u;
        var c = u;

        function l(e) { if (null === e || !0 === e || !1 === e) return NaN; var t = Number(e); return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t) }

        function m(e, t) { if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present") }

        function f(e) { m(1, arguments); var t = Object.prototype.toString.call(e); return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN)) }

        function h(e, t) {
            m(2, arguments);
            var n = f(e),
                o = l(t);
            return isNaN(o) ? new Date(NaN) : o ? (n.setDate(n.getDate() + o), n) : n
        }

        function v(e, t) {
            m(2, arguments);
            var n = f(e),
                o = l(t);
            if (isNaN(o)) return new Date(NaN);
            if (!o) return n;
            var a = n.getDate(),
                i = new Date(n.getTime());
            i.setMonth(n.getMonth() + o + 1, 0);
            var r = i.getDate();
            return a >= r ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), a), n)
        }

        function g(e, t) {
            if (m(2, arguments), !t || "object" != typeof t) return new Date(NaN);
            var n = t.years ? l(t.years) : 0,
                o = t.months ? l(t.months) : 0,
                a = t.weeks ? l(t.weeks) : 0,
                i = t.days ? l(t.days) : 0,
                r = t.hours ? l(t.hours) : 0,
                s = t.minutes ? l(t.minutes) : 0,
                d = t.seconds ? l(t.seconds) : 0,
                u = f(e),
                c = o || n ? v(u, o + 12 * n) : u,
                g = i || a ? h(c, i + 7 * a) : c,
                y = s + 60 * r,
                b = d + 60 * y,
                w = 1e3 * b,
                p = new Date(g.getTime() + w);
            return p
        }

        function y(e, t) {
            m(2, arguments);
            var n = f(e),
                o = f(t);
            return n.getTime() - o.getTime()
        }
        var b = { lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" }, xSeconds: { one: "1 second", other: "{{count}} seconds" }, halfAMinute: "half a minute", lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" }, xHours: { one: "1 hour", other: "{{count}} hours" }, xDays: { one: "1 day", other: "{{count}} days" }, aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" }, xWeeks: { one: "1 week", other: "{{count}} weeks" }, aboutXMonths: { one: "about 1 month", other: "about {{count}} months" }, xMonths: { one: "1 month", other: "{{count}} months" }, aboutXYears: { one: "about 1 year", other: "about {{count}} years" }, xYears: { one: "1 year", other: "{{count}} years" }, overXYears: { one: "over 1 year", other: "over {{count}} years" }, almostXYears: { one: "almost 1 year", other: "almost {{count}} years" } };

        function w(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.width ? String(t.width) : e.defaultWidth,
                    o = e.formats[n] || e.formats[e.defaultWidth];
                return o
            }
        }
        var p = { date: w({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }), time: w({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: w({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) },
            E = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" };

        function M(e) {
            return function(t, n) {
                var o, a = n || {};
                if ("formatting" === (a.context ? String(a.context) : "standalone") && e.formattingValues) {
                    var i = e.defaultFormattingWidth || e.defaultWidth,
                        r = a.width ? String(a.width) : i;
                    o = e.formattingValues[r] || e.formattingValues[i]
                } else {
                    var s = e.defaultWidth,
                        d = a.width ? String(a.width) : e.defaultWidth;
                    o = e.values[d] || e.values[s]
                }
                return o[e.argumentCallback ? e.argumentCallback(t) : t]
            }
        }

        function L(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = n.width,
                    a = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth],
                    i = t.match(a);
                if (!i) return null;
                var r, s = i[0],
                    d = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth],
                    u = Array.isArray(d) ? T(d, (function(e) { return e.test(s) })) : k(d, (function(e) { return e.test(s) }));
                r = e.valueCallback ? e.valueCallback(u) : u, r = n.valueCallback ? n.valueCallback(r) : r;
                var c = t.slice(s.length);
                return { value: r, rest: c }
            }
        }

        function k(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && t(e[n])) return n
        }

        function T(e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return n
        }
        var S, A, C, N, P, W, j = {
                code: "en-US",
                formatDistance: function(e, t, n) { var o; return n = n || {}, o = "string" == typeof b[e] ? b[e] : 1 === t ? b[e].one : b[e].other.replace("{{count}}", t), n.addSuffix ? n.comparison > 0 ? "in " + o : o + " ago" : o },
                formatLong: p,
                formatRelative: function(e, t, n, o) { return E[e] },
                localize: {
                    ordinalNumber: function(e, t) {
                        var n = Number(e),
                            o = n % 100;
                        if (o > 20 || o < 10) switch (o % 10) {
                            case 1:
                                return n + "st";
                            case 2:
                                return n + "nd";
                            case 3:
                                return n + "rd"
                        }
                        return n + "th"
                    },
                    era: M({ values: { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] }, defaultWidth: "wide" }),
                    quarter: M({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"] }, defaultWidth: "wide", argumentCallback: function(e) { return Number(e) - 1 } }),
                    month: M({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, defaultWidth: "wide" }),
                    day: M({ values: { narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }, defaultWidth: "wide" }),
                    dayPeriod: M({ values: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" } }, defaultFormattingWidth: "wide" })
                },
                match: {
                    ordinalNumber: (S = { matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function(e) { return parseInt(e, 10) } }, function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.match(S.matchPattern);
                        if (!n) return null;
                        var o = n[0],
                            a = e.match(S.parsePattern);
                        if (!a) return null;
                        var i = S.valueCallback ? S.valueCallback(a[0]) : a[0];
                        i = t.valueCallback ? t.valueCallback(i) : i;
                        var r = e.slice(o.length);
                        return { value: i, rest: r }
                    }),
                    era: L({ matchPatterns: { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^b/i, /^(a|c)/i] }, defaultParseWidth: "any" }),
                    quarter: L({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: function(e) { return e + 1 } }),
                    month: L({ matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] }, defaultParseWidth: "any" }),
                    day: L({ matchPatterns: { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] }, defaultParseWidth: "any" }),
                    dayPeriod: L({ matchPatterns: { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } }, defaultParseWidth: "any" })
                },
                options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
            },
            D = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"],
            q = function() {
                var e = document.querySelector(".game__timer"),
                    t = 86400,
                    n = 3600,
                    o = g(new Date, { minutes: 2, seconds: 34 });
                e && setInterval((function() {
                    var a = function(e, t) {
                        if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
                        var n = (null == t ? void 0 : t.format) || D,
                            o = (null == t ? void 0 : t.locale) || j,
                            a = (null == t ? void 0 : t.zero) || !1,
                            i = (null == t ? void 0 : t.delimiter) || " ";
                        return n.reduce((function(t, n) { var i = "x".concat(n.replace(/(^.)/, (function(e) { return e.toUpperCase() }))); return "number" == typeof e[n] && (a || e[n]) ? t.concat(o.formatDistance(i, e[n])) : t }), []).join(i)
                    }(function() {
                        var e = function(e, t) { m(2, arguments); var n = y(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) }(o, (new Date).getTime());
                        if (e <= 1) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                        var a = Math.floor(e / t),
                            i = Math.floor((e - a * t) / n),
                            r = Math.floor((e - a * t - i * n) / 60);
                        return { days: a, hours: i, minutes: r, seconds: e - a * t - i * n - 60 * r }
                    }(), { format: ["minutes", "seconds"] });
                    a || (o = g(new Date, { minutes: 1 })), e.innerHTML = a
                }), 1e3);
                var a = document.querySelector(".btn--spin"),
                    i = document.querySelector(".game__field"),
                    r = document.querySelector(".game__bonus"),
                    s = 1;
                i.classList.add("step-".concat(s)), setTimeout((function() { window.MicroModal.show("modal-try") }), 7e3), s += 1, a.addEventListener("click", (function() { window.MicroModal.close("modal-try"), i.classList.add("step-".concat(s)), s < 3 && setTimeout((function() { window.MicroModal.show("modal-try") }), 7e3), 4 === (s += 1) && setTimeout((function() { r.classList.add("active"), setTimeout((function() { window.MicroModal.show("modal-win") }), 2e3) }), 7e3) }))
            };
        c.init({ disableScroll: !1, debugMode: !1 }), c.show("modal-welcome"), P = document.querySelectorAll(".comment"), W = (W = new Date).toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" }), P.forEach((function(e) {
            var t = +e.dataset.delay,
                n = e.querySelector(".comment__date");
            t ? (e.classList.add("hidden"), n.insertAdjacentHTML("beforeEnd", "0s"), setTimeout((function() { e.classList.remove("hidden"), setTimeout((function() { e.classList.remove("animate") }), 200) }), 1e3 * t)) : n.insertAdjacentHTML("beforeEnd", W)
        })), A = document.querySelector(".poll"), C = document.querySelectorAll(".poll__question-item"), N = document.querySelector(".poll__question-number"), document.querySelector(".btn--start").addEventListener("click", (function() { window.MicroModal.close("modal-welcome") })), C.forEach((function(e, t) {
            e.querySelectorAll(".poll__button").forEach((function(n) {
                n.addEventListener("click", (function() {
                    e.classList.remove("animate"), t + 1 < C.length ? (C[t + 1].classList.add("active"), setTimeout((function() { e.classList.remove("active"), C[t + 1].classList.add("animate") }), 350), N.innerHTML = t + 2) : (A.classList.add("animate"), setTimeout((function() {
                        var e, t, n, o, a;
                        A.classList.add("hidden"), e = document.querySelector(".infoChecker"), t = document.querySelector(".infoChecker__loader-bar"), n = document.querySelector(".infoChecker__loader-value"), o = document.querySelectorAll(".infoChecker__loading-action"), a = document.querySelectorAll(".infoChecker__list-item"), e.classList.add("active"), setTimeout((function() {
                            e.classList.add("animate");
                            var i = 1,
                                r = setInterval((function() { i >= 100 ? clearInterval(r) : (i += 1, t.style.width = "".concat(i, "%"), n.innerText = "".concat(i, "%")) }), 40);
                            o.forEach((function(e, t) { setTimeout((function() { o.forEach((function(e) { e.classList.remove("active") })), e.classList.add("active") }), 1e3 * (t + 1)) })), a.forEach((function(e, t) { setTimeout((function() { e.classList.add("active") }), 1800 * (t + 1)) })), setTimeout((function() { e.classList.remove("animate"), setTimeout((function() { e.classList.remove("active"), document.querySelector(".game").classList.add("active"), setTimeout((function() { q(), document.querySelector(".game").classList.add("animate") }), 200) }), 400) }), 6e3)
                        }), 200)
                    }), 350))
                }))
            }))
        }))
    }()
}();