/*! For license information please see index.97792eb9898f56d54855.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          e(
            (n = {
              path: t,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw new Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(null == t && n.path);
              },
            }),
            n.exports
          ),
          n.exports
        );
      }
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var i = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      function s(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      var c = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, t) {
              for (var n, r, c = s(e), u = 1; u < arguments.length; u++) {
                for (var l in (n = Object(arguments[u])))
                  a.call(n, l) && (c[l] = n[l]);
                if (i) {
                  r = i(n);
                  for (var h = 0; h < r.length; h++)
                    o.call(n, r[h]) && (c[r[h]] = n[r[h]]);
                }
              }
              return c;
            },
        u = r(function (e, t) {
          var n = 60103,
            r = 60106;
          (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
          var i = 60109,
            a = 60110,
            o = 60112;
          t.Suspense = 60113;
          var s = 60115,
            u = 60116;
          if ("function" == typeof Symbol && Symbol.for) {
            var l = Symbol.for;
            (n = l("react.element")),
              (r = l("react.portal")),
              (t.Fragment = l("react.fragment")),
              (t.StrictMode = l("react.strict_mode")),
              (t.Profiler = l("react.profiler")),
              (i = l("react.provider")),
              (a = l("react.context")),
              (o = l("react.forward_ref")),
              (t.Suspense = l("react.suspense")),
              (s = l("react.memo")),
              (u = l("react.lazy"));
          }
          var h = "function" == typeof Symbol && Symbol.iterator;
          function d(e) {
            for (
              var t =
                  "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                n = 1;
              n < arguments.length;
              n++
            )
              t += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
              "Minified React error #" +
              e +
              "; visit " +
              t +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
          }
          var p = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            f = {};
          function m(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = f),
              (this.updater = n || p);
          }
          function g() {}
          function v(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = f),
              (this.updater = n || p);
          }
          (m.prototype.isReactComponent = {}),
            (m.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(d(85));
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (m.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (g.prototype = m.prototype);
          var b = (v.prototype = new g());
          (b.constructor = v), c(b, m.prototype), (b.isPureReactComponent = !0);
          var y = { current: null },
            w = Object.prototype.hasOwnProperty,
            E = { key: !0, ref: !0, __self: !0, __source: !0 };
          function _(e, t, r) {
            var i,
              a = {},
              o = null,
              s = null;
            if (null != t)
              for (i in (void 0 !== t.ref && (s = t.ref),
              void 0 !== t.key && (o = "" + t.key),
              t))
                w.call(t, i) && !E.hasOwnProperty(i) && (a[i] = t[i]);
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              for (var u = Array(c), l = 0; l < c; l++) u[l] = arguments[l + 2];
              a.children = u;
            }
            if (e && e.defaultProps)
              for (i in (c = e.defaultProps)) void 0 === a[i] && (a[i] = c[i]);
            return {
              $$typeof: n,
              type: e,
              key: o,
              ref: s,
              props: a,
              _owner: y.current,
            };
          }
          function x(e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
          }
          var k = /\/+/g;
          function S(e, t) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var t = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    e.replace(/[=:]/g, function (e) {
                      return t[e];
                    })
                  );
                })("" + e.key)
              : t.toString(36);
          }
          function O(e, t, i, a, o) {
            var s = typeof e;
            ("undefined" !== s && "boolean" !== s) || (e = null);
            var c = !1;
            if (null === e) c = !0;
            else
              switch (s) {
                case "string":
                case "number":
                  c = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case n:
                    case r:
                      c = !0;
                  }
              }
            if (c)
              return (
                (o = o((c = e))),
                (e = "" === a ? "." + S(c, 0) : a),
                Array.isArray(o)
                  ? ((i = ""),
                    null != e && (i = e.replace(k, "$&/") + "/"),
                    O(o, t, i, "", function (e) {
                      return e;
                    }))
                  : null != o &&
                    (x(o) &&
                      (o = (function (e, t) {
                        return {
                          $$typeof: n,
                          type: e.type,
                          key: t,
                          ref: e.ref,
                          props: e.props,
                          _owner: e._owner,
                        };
                      })(
                        o,
                        i +
                          (!o.key || (c && c.key === o.key)
                            ? ""
                            : ("" + o.key).replace(k, "$&/") + "/") +
                          e
                      )),
                    t.push(o)),
                1
              );
            if (((c = 0), (a = "" === a ? "." : a + ":"), Array.isArray(e)))
              for (var u = 0; u < e.length; u++) {
                var l = a + S((s = e[u]), u);
                c += O(s, t, i, l, o);
              }
            else if (
              "function" ==
              typeof (l = (function (e) {
                return null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                  ? e
                  : null;
              })(e))
            )
              for (e = l.call(e), u = 0; !(s = e.next()).done; )
                c += O((s = s.value), t, i, (l = a + S(s, u++)), o);
            else if ("object" === s)
              throw (
                ((t = "" + e),
                Error(
                  d(
                    31,
                    "[object Object]" === t
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : t
                  )
                ))
              );
            return c;
          }
          function j(e, t, n) {
            if (null == e) return e;
            var r = [],
              i = 0;
            return (
              O(e, r, "", "", function (e) {
                return t.call(n, e, i++);
              }),
              r
            );
          }
          function P(e) {
            if (-1 === e._status) {
              var t = e._result;
              (t = t()),
                (e._status = 0),
                (e._result = t),
                t.then(
                  function (t) {
                    0 === e._status &&
                      ((t = t.default), (e._status = 1), (e._result = t));
                  },
                  function (t) {
                    0 === e._status && ((e._status = 2), (e._result = t));
                  }
                );
            }
            if (1 === e._status) return e._result;
            throw e._result;
          }
          var $ = { current: null };
          function C() {
            var e = $.current;
            if (null === e) throw Error(d(321));
            return e;
          }
          var q = {
            ReactCurrentDispatcher: $,
            ReactCurrentBatchConfig: { transition: 0 },
            ReactCurrentOwner: y,
            IsSomeRendererActing: { current: !1 },
            assign: c,
          };
          (t.Children = {
            map: j,
            forEach: function (e, t, n) {
              j(
                e,
                function () {
                  t.apply(this, arguments);
                },
                n
              );
            },
            count: function (e) {
              var t = 0;
              return (
                j(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                j(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!x(e)) throw Error(d(143));
              return e;
            },
          }),
            (t.Component = m),
            (t.PureComponent = v),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
            (t.cloneElement = function (e, t, r) {
              if (null == e) throw Error(d(267, e));
              var i = c({}, e.props),
                a = e.key,
                o = e.ref,
                s = e._owner;
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((o = t.ref), (s = y.current)),
                  void 0 !== t.key && (a = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var u = e.type.defaultProps;
                for (l in t)
                  w.call(t, l) &&
                    !E.hasOwnProperty(l) &&
                    (i[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
              }
              var l = arguments.length - 2;
              if (1 === l) i.children = r;
              else if (1 < l) {
                u = Array(l);
                for (var h = 0; h < l; h++) u[h] = arguments[h + 2];
                i.children = u;
              }
              return {
                $$typeof: n,
                type: e.type,
                key: a,
                ref: o,
                props: i,
                _owner: s,
              };
            }),
            (t.createContext = function (e, t) {
              return (
                void 0 === t && (t = null),
                ((e = {
                  $$typeof: a,
                  _calculateChangedBits: t,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }).Provider = { $$typeof: i, _context: e }),
                (e.Consumer = e)
              );
            }),
            (t.createElement = _),
            (t.createFactory = function (e) {
              var t = _.bind(null, e);
              return (t.type = e), t;
            }),
            (t.createRef = function () {
              return { current: null };
            }),
            (t.forwardRef = function (e) {
              return { $$typeof: o, render: e };
            }),
            (t.isValidElement = x),
            (t.lazy = function (e) {
              return {
                $$typeof: u,
                _payload: { _status: -1, _result: e },
                _init: P,
              };
            }),
            (t.memo = function (e, t) {
              return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
            }),
            (t.useCallback = function (e, t) {
              return C().useCallback(e, t);
            }),
            (t.useContext = function (e, t) {
              return C().useContext(e, t);
            }),
            (t.useDebugValue = function () {}),
            (t.useEffect = function (e, t) {
              return C().useEffect(e, t);
            }),
            (t.useImperativeHandle = function (e, t, n) {
              return C().useImperativeHandle(e, t, n);
            }),
            (t.useLayoutEffect = function (e, t) {
              return C().useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
              return C().useMemo(e, t);
            }),
            (t.useReducer = function (e, t, n) {
              return C().useReducer(e, t, n);
            }),
            (t.useRef = function (e) {
              return C().useRef(e);
            }),
            (t.useState = function (e) {
              return C().useState(e);
            }),
            (t.version = "17.0.2");
        }),
        l = r(function (e) {
          e.exports = u;
        });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "d", function () {
          return H;
        }),
        n.d(t, "e", function () {
          return V;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return A;
        });
      var r = n(0);
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function a(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          i(e, t);
      }
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s() {}
      function c() {}
      c.resetWarningCache = s;
      var u = Object(r.a)(function (e) {
        e.exports = (function () {
          function e(e, t, n, r, i, a) {
            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
              var o = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((o.name = "Invariant Violation"), o);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: c,
            resetWarningCache: s,
          };
          return (n.PropTypes = n), n;
        })();
      });
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var h = "function" == typeof Symbol && Symbol.for,
        d = h ? Symbol.for("react.element") : 60103,
        p = h ? Symbol.for("react.portal") : 60106,
        f = h ? Symbol.for("react.fragment") : 60107,
        m = h ? Symbol.for("react.strict_mode") : 60108,
        g = h ? Symbol.for("react.profiler") : 60114,
        v = h ? Symbol.for("react.provider") : 60109,
        b = h ? Symbol.for("react.context") : 60110,
        y = h ? Symbol.for("react.async_mode") : 60111,
        w = h ? Symbol.for("react.concurrent_mode") : 60111,
        E = h ? Symbol.for("react.forward_ref") : 60112,
        _ = h ? Symbol.for("react.suspense") : 60113,
        x = h ? Symbol.for("react.suspense_list") : 60120,
        k = h ? Symbol.for("react.memo") : 60115,
        S = h ? Symbol.for("react.lazy") : 60116,
        O = h ? Symbol.for("react.block") : 60121,
        j = h ? Symbol.for("react.fundamental") : 60117,
        P = h ? Symbol.for("react.responder") : 60118,
        $ = h ? Symbol.for("react.scope") : 60119;
      function C(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case d:
              switch ((e = e.type)) {
                case y:
                case w:
                case f:
                case g:
                case m:
                case _:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case b:
                    case E:
                    case S:
                    case k:
                    case v:
                      return e;
                    default:
                      return t;
                  }
              }
            case p:
              return t;
          }
        }
      }
      function q(e) {
        return C(e) === w;
      }
      var N = {
          AsyncMode: y,
          ConcurrentMode: w,
          ContextConsumer: b,
          ContextProvider: v,
          Element: d,
          ForwardRef: E,
          Fragment: f,
          Lazy: S,
          Memo: k,
          Portal: p,
          Profiler: g,
          StrictMode: m,
          Suspense: _,
          isAsyncMode: function (e) {
            return q(e) || C(e) === y;
          },
          isConcurrentMode: q,
          isContextConsumer: function (e) {
            return C(e) === b;
          },
          isContextProvider: function (e) {
            return C(e) === v;
          },
          isElement: function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === d;
          },
          isForwardRef: function (e) {
            return C(e) === E;
          },
          isFragment: function (e) {
            return C(e) === f;
          },
          isLazy: function (e) {
            return C(e) === S;
          },
          isMemo: function (e) {
            return C(e) === k;
          },
          isPortal: function (e) {
            return C(e) === p;
          },
          isProfiler: function (e) {
            return C(e) === g;
          },
          isStrictMode: function (e) {
            return C(e) === m;
          },
          isSuspense: function (e) {
            return C(e) === _;
          },
          isValidElementType: function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === f ||
              e === w ||
              e === g ||
              e === m ||
              e === _ ||
              e === x ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === S ||
                  e.$$typeof === k ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === E ||
                  e.$$typeof === j ||
                  e.$$typeof === P ||
                  e.$$typeof === $ ||
                  e.$$typeof === O))
            );
          },
          typeOf: C,
        },
        A = Object(r.a)(function (e) {
          e.exports = N;
        }),
        T = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        R = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        I = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        D = {};
      function F(e) {
        return A.isMemo(e) ? I : D[e.$$typeof] || T;
      }
      (D[A.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (D[A.Memo] = I);
      var M = Object.defineProperty,
        L = Object.getOwnPropertyNames,
        B = Object.getOwnPropertySymbols,
        z = Object.getOwnPropertyDescriptor,
        W = Object.getPrototypeOf,
        U = Object.prototype;
      var H = function e(t, n, r) {
        if ("string" != typeof n) {
          if (U) {
            var i = W(n);
            i && i !== U && e(t, i, r);
          }
          var a = L(n);
          B && (a = a.concat(B(n)));
          for (var o = F(t), s = F(n), c = 0; c < a.length; ++c) {
            var u = a[c];
            if (!(R[u] || (r && r[u]) || (s && s[u]) || (o && o[u]))) {
              var l = z(n, u);
              try {
                M(t, u, l);
              } catch (e) {}
            }
          }
        }
        return t;
      };
      function V(e, t) {
        if (!e) throw new Error("Invariant failed");
      }
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return Q;
        }),
          n.d(t, "b", function () {
            return ce;
          }),
          n.d(t, "c", function () {
            return P;
          }),
          n.d(t, "d", function () {
            return X;
          }),
          n.d(t, "e", function () {
            return _;
          }),
          n.d(t, "f", function () {
            return f;
          }),
          n.d(t, "g", function () {
            return p;
          }),
          n.d(t, "h", function () {
            return le;
          }),
          n.d(t, "i", function () {
            return re;
          }),
          n.d(t, "j", function () {
            return se;
          }),
          n.d(t, "k", function () {
            return oe;
          }),
          n.d(t, "l", function () {
            return he;
          });
        var r = n(1),
          i = n(0);
        function a(e) {
          return "/" === e.charAt(0);
        }
        function o(e, t) {
          for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
            e[n] = e[r];
          e.pop();
        }
        function s(e) {
          return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
        }
        function c(e, t) {
          if (e === t) return !0;
          if (null == e || null == t) return !1;
          if (Array.isArray(e))
            return (
              Array.isArray(t) &&
              e.length === t.length &&
              e.every(function (e, n) {
                return c(e, t[n]);
              })
            );
          if ("object" == typeof e || "object" == typeof t) {
            var n = s(e),
              r = s(t);
            return n !== e || r !== t
              ? c(n, r)
              : Object.keys(Object.assign({}, e, t)).every(function (n) {
                  return c(e[n], t[n]);
                });
          }
          return !1;
        }
        function u(e) {
          return "/" === e.charAt(0) ? e : "/" + e;
        }
        function l(e) {
          return "/" === e.charAt(0) ? e.substr(1) : e;
        }
        function h(e, t) {
          return (function (e, t) {
            return (
              0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
              -1 !== "/?#".indexOf(e.charAt(t.length))
            );
          })(e, t)
            ? e.substr(t.length)
            : e;
        }
        function d(e) {
          return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
        }
        function p(e) {
          var t = e.pathname,
            n = e.search,
            r = e.hash,
            i = t || "/";
          return (
            n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
            r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
            i
          );
        }
        function f(e, t, n, i) {
          var s;
          "string" == typeof e
            ? ((s = (function (e) {
                var t = e || "/",
                  n = "",
                  r = "",
                  i = t.indexOf("#");
                -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
                var a = t.indexOf("?");
                return (
                  -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
                  {
                    pathname: t,
                    search: "?" === n ? "" : n,
                    hash: "#" === r ? "" : r,
                  }
                );
              })(e)).state = t)
            : (void 0 === (s = Object(r.a)({}, e)).pathname &&
                (s.pathname = ""),
              s.search
                ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search)
                : (s.search = ""),
              s.hash
                ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash)
                : (s.hash = ""),
              void 0 !== t && void 0 === s.state && (s.state = t));
          try {
            s.pathname = decodeURI(s.pathname);
          } catch (e) {
            throw e instanceof URIError
              ? new URIError(
                  'Pathname "' +
                    s.pathname +
                    '" could not be decoded. This is likely caused by an invalid percent-encoding.'
                )
              : e;
          }
          return (
            n && (s.key = n),
            i
              ? s.pathname
                ? "/" !== s.pathname.charAt(0) &&
                  (s.pathname = (function (e, t) {
                    void 0 === t && (t = "");
                    var n,
                      r = (e && e.split("/")) || [],
                      i = (t && t.split("/")) || [],
                      s = e && a(e),
                      c = t && a(t),
                      u = s || c;
                    if (
                      (e && a(e)
                        ? (i = r)
                        : r.length && (i.pop(), (i = i.concat(r))),
                      !i.length)
                    )
                      return "/";
                    if (i.length) {
                      var l = i[i.length - 1];
                      n = "." === l || ".." === l || "" === l;
                    } else n = !1;
                    for (var h = 0, d = i.length; d >= 0; d--) {
                      var p = i[d];
                      "." === p
                        ? o(i, d)
                        : ".." === p
                        ? (o(i, d), h++)
                        : h && (o(i, d), h--);
                    }
                    if (!u) for (; h--; h) i.unshift("..");
                    !u || "" === i[0] || (i[0] && a(i[0])) || i.unshift("");
                    var f = i.join("/");
                    return n && "/" !== f.substr(-1) && (f += "/"), f;
                  })(s.pathname, i.pathname))
                : (s.pathname = i.pathname)
              : s.pathname || (s.pathname = "/"),
            s
          );
        }
        function m(e, t) {
          return (
            e.pathname === t.pathname &&
            e.search === t.search &&
            e.hash === t.hash &&
            e.key === t.key &&
            c(e.state, t.state)
          );
        }
        function g() {
          var e = null;
          var t = [];
          return {
            setPrompt: function (t) {
              return (
                (e = t),
                function () {
                  e === t && (e = null);
                }
              );
            },
            confirmTransitionTo: function (t, n, r, i) {
              if (null != e) {
                var a = "function" == typeof e ? e(t, n) : e;
                "string" == typeof a
                  ? "function" == typeof r
                    ? r(a, i)
                    : i(!0)
                  : i(!1 !== a);
              } else i(!0);
            },
            appendListener: function (e) {
              var n = !0;
              function r() {
                n && e.apply(void 0, arguments);
              }
              return (
                t.push(r),
                function () {
                  (n = !1),
                    (t = t.filter(function (e) {
                      return e !== r;
                    }));
                }
              );
            },
            notifyListeners: function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              t.forEach(function (e) {
                return e.apply(void 0, n);
              });
            },
          };
        }
        var v = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        function b(e, t) {
          t(window.confirm(e));
        }
        var y = "popstate",
          w = "hashchange";
        function E() {
          try {
            return window.history.state || {};
          } catch (e) {
            return {};
          }
        }
        function _(e) {
          void 0 === e && (e = {}), v || Object(r.e)(!1);
          var t,
            n = window.history,
            i =
              ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
                -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
              window.history &&
              "pushState" in window.history,
            a = !(-1 === window.navigator.userAgent.indexOf("Trident")),
            o = e,
            s = o.forceRefresh,
            c = void 0 !== s && s,
            l = o.getUserConfirmation,
            m = void 0 === l ? b : l,
            _ = o.keyLength,
            x = void 0 === _ ? 6 : _,
            k = e.basename ? d(u(e.basename)) : "";
          function S(e) {
            var t = e || {},
              n = t.key,
              r = t.state,
              i = window.location,
              a = i.pathname + i.search + i.hash;
            return k && (a = h(a, k)), f(a, r, n);
          }
          function O() {
            return Math.random().toString(36).substr(2, x);
          }
          var j = g();
          function P(e) {
            Object(r.a)(L, e),
              (L.length = n.length),
              j.notifyListeners(L.location, L.action);
          }
          function $(e) {
            (function (e) {
              return (
                void 0 === e.state &&
                -1 === navigator.userAgent.indexOf("CriOS")
              );
            })(e) || N(S(e.state));
          }
          function C() {
            N(S(E()));
          }
          var q = !1;
          function N(e) {
            if (q) (q = !1), P();
            else {
              j.confirmTransitionTo(e, "POP", m, function (t) {
                t
                  ? P({ action: "POP", location: e })
                  : (function (e) {
                      var t = L.location,
                        n = T.indexOf(t.key);
                      -1 === n && (n = 0);
                      var r = T.indexOf(e.key);
                      -1 === r && (r = 0);
                      var i = n - r;
                      i && ((q = !0), I(i));
                    })(e);
              });
            }
          }
          var A = S(E()),
            T = [A.key];
          function R(e) {
            return k + p(e);
          }
          function I(e) {
            n.go(e);
          }
          var D = 0;
          function F(e) {
            1 === (D += e) && 1 === e
              ? (window.addEventListener(y, $),
                a && window.addEventListener(w, C))
              : 0 === D &&
                (window.removeEventListener(y, $),
                a && window.removeEventListener(w, C));
          }
          var M = !1;
          var L = {
            length: n.length,
            action: "POP",
            location: A,
            createHref: R,
            push: function (e, t) {
              var r = "PUSH",
                a = f(e, t, O(), L.location);
              j.confirmTransitionTo(a, r, m, function (e) {
                if (e) {
                  var t = R(a),
                    o = a.key,
                    s = a.state;
                  if (i)
                    if ((n.pushState({ key: o, state: s }, null, t), c))
                      window.location.href = t;
                    else {
                      var u = T.indexOf(L.location.key),
                        l = T.slice(0, u + 1);
                      l.push(a.key), (T = l), P({ action: r, location: a });
                    }
                  else window.location.href = t;
                }
              });
            },
            replace: function (e, t) {
              var r = "REPLACE",
                a = f(e, t, O(), L.location);
              j.confirmTransitionTo(a, r, m, function (e) {
                if (e) {
                  var t = R(a),
                    o = a.key,
                    s = a.state;
                  if (i)
                    if ((n.replaceState({ key: o, state: s }, null, t), c))
                      window.location.replace(t);
                    else {
                      var u = T.indexOf(L.location.key);
                      -1 !== u && (T[u] = a.key), P({ action: r, location: a });
                    }
                  else window.location.replace(t);
                }
              });
            },
            go: I,
            goBack: function () {
              I(-1);
            },
            goForward: function () {
              I(1);
            },
            block: function (e) {
              void 0 === e && (e = !1);
              var t = j.setPrompt(e);
              return (
                M || (F(1), (M = !0)),
                function () {
                  return M && ((M = !1), F(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = j.appendListener(e);
              return (
                F(1),
                function () {
                  F(-1), t();
                }
              );
            },
          };
          return L;
        }
        var x = "hashchange",
          k = {
            hashbang: {
              encodePath: function (e) {
                return "!" === e.charAt(0) ? e : "!/" + l(e);
              },
              decodePath: function (e) {
                return "!" === e.charAt(0) ? e.substr(1) : e;
              },
            },
            noslash: { encodePath: l, decodePath: u },
            slash: { encodePath: u, decodePath: u },
          };
        function S(e) {
          var t = e.indexOf("#");
          return -1 === t ? e : e.slice(0, t);
        }
        function O() {
          var e = window.location.href,
            t = e.indexOf("#");
          return -1 === t ? "" : e.substring(t + 1);
        }
        function j(e) {
          window.location.replace(S(window.location.href) + "#" + e);
        }
        function P(e) {
          void 0 === e && (e = {}), v || Object(r.e)(!1);
          var t = window.history;
          window.navigator.userAgent.indexOf("Firefox");
          var n = e,
            i = n.getUserConfirmation,
            a = void 0 === i ? b : i,
            o = n.hashType,
            s = void 0 === o ? "slash" : o,
            c = e.basename ? d(u(e.basename)) : "",
            l = k[s],
            m = l.encodePath,
            y = l.decodePath;
          function w() {
            var e = y(O());
            return c && (e = h(e, c)), f(e);
          }
          var E = g();
          function _(e) {
            Object(r.a)(M, e),
              (M.length = t.length),
              E.notifyListeners(M.location, M.action);
          }
          var P = !1,
            $ = null;
          function C() {
            var e,
              t,
              n = O(),
              r = m(n);
            if (n !== r) j(r);
            else {
              var i = w(),
                o = M.location;
              if (
                !P &&
                ((t = i),
                (e = o).pathname === t.pathname &&
                  e.search === t.search &&
                  e.hash === t.hash)
              )
                return;
              if ($ === p(i)) return;
              ($ = null),
                (function (e) {
                  if (P) (P = !1), _();
                  else {
                    var t = "POP";
                    E.confirmTransitionTo(e, t, a, function (n) {
                      n
                        ? _({ action: t, location: e })
                        : (function (e) {
                            var t = M.location,
                              n = T.lastIndexOf(p(t));
                            -1 === n && (n = 0);
                            var r = T.lastIndexOf(p(e));
                            -1 === r && (r = 0);
                            var i = n - r;
                            i && ((P = !0), R(i));
                          })(e);
                    });
                  }
                })(i);
            }
          }
          var q = O(),
            N = m(q);
          q !== N && j(N);
          var A = w(),
            T = [p(A)];
          function R(e) {
            t.go(e);
          }
          var I = 0;
          function D(e) {
            1 === (I += e) && 1 === e
              ? window.addEventListener(x, C)
              : 0 === I && window.removeEventListener(x, C);
          }
          var F = !1;
          var M = {
            length: t.length,
            action: "POP",
            location: A,
            createHref: function (e) {
              var t = document.querySelector("base"),
                n = "";
              return (
                t && t.getAttribute("href") && (n = S(window.location.href)),
                n + "#" + m(c + p(e))
              );
            },
            push: function (e, t) {
              var n = "PUSH",
                r = f(e, void 0, void 0, M.location);
              E.confirmTransitionTo(r, n, a, function (e) {
                if (e) {
                  var t = p(r),
                    i = m(c + t);
                  if (O() !== i) {
                    ($ = t),
                      (function (e) {
                        window.location.hash = e;
                      })(i);
                    var a = T.lastIndexOf(p(M.location)),
                      o = T.slice(0, a + 1);
                    o.push(t), (T = o), _({ action: n, location: r });
                  } else _();
                }
              });
            },
            replace: function (e, t) {
              var n = "REPLACE",
                r = f(e, void 0, void 0, M.location);
              E.confirmTransitionTo(r, n, a, function (e) {
                if (e) {
                  var t = p(r),
                    i = m(c + t);
                  O() !== i && (($ = t), j(i));
                  var a = T.indexOf(p(M.location));
                  -1 !== a && (T[a] = t), _({ action: n, location: r });
                }
              });
            },
            go: R,
            goBack: function () {
              R(-1);
            },
            goForward: function () {
              R(1);
            },
            block: function (e) {
              void 0 === e && (e = !1);
              var t = E.setPrompt(e);
              return (
                F || (D(1), (F = !0)),
                function () {
                  return F && ((F = !1), D(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = E.appendListener(e);
              return (
                D(1),
                function () {
                  D(-1), t();
                }
              );
            },
          };
          return M;
        }
        var $ = 1073741823,
          C =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : {};
        function q(e) {
          var t = [];
          return {
            on: function (e) {
              t.push(e);
            },
            off: function (e) {
              t = t.filter(function (t) {
                return t !== e;
              });
            },
            get: function () {
              return e;
            },
            set: function (n, r) {
              (e = n),
                t.forEach(function (t) {
                  return t(e, r);
                });
            },
          };
        }
        var N =
            i.c.createContext ||
            function (e, t) {
              var n,
                a,
                o,
                s =
                  "__create-react-context-" +
                  ((C[(o = "__global_unique_id__")] = (C[o] || 0) + 1) + "__"),
                c = (function (e) {
                  function n() {
                    var t;
                    return (
                      ((t = e.apply(this, arguments) || this).emitter = q(
                        t.props.value
                      )),
                      t
                    );
                  }
                  Object(r.c)(n, e);
                  var i = n.prototype;
                  return (
                    (i.getChildContext = function () {
                      var e;
                      return ((e = {})[s] = this.emitter), e;
                    }),
                    (i.componentWillReceiveProps = function (e) {
                      if (this.props.value !== e.value) {
                        var n,
                          r = this.props.value,
                          i = e.value;
                        (
                          (a = r) === (o = i)
                            ? 0 !== a || 1 / a == 1 / o
                            : a != a && o != o
                        )
                          ? (n = 0)
                          : ((n = "function" == typeof t ? t(r, i) : $),
                            0 !== (n |= 0) && this.emitter.set(e.value, n));
                      }
                      var a, o;
                    }),
                    (i.render = function () {
                      return this.props.children;
                    }),
                    n
                  );
                })(i.c.Component);
              c.childContextTypes = (((n = {})[s] = r.f.object.isRequired), n);
              var u = (function (t) {
                function n() {
                  var e;
                  return (
                    ((e = t.apply(this, arguments) || this).state = {
                      value: e.getValue(),
                    }),
                    (e.onUpdate = function (t, n) {
                      0 != ((0 | e.observedBits) & n) &&
                        e.setState({ value: e.getValue() });
                    }),
                    e
                  );
                }
                Object(r.c)(n, t);
                var i = n.prototype;
                return (
                  (i.componentWillReceiveProps = function (e) {
                    var t = e.observedBits;
                    this.observedBits = null == t ? $ : t;
                  }),
                  (i.componentDidMount = function () {
                    this.context[s] && this.context[s].on(this.onUpdate);
                    var e = this.props.observedBits;
                    this.observedBits = null == e ? $ : e;
                  }),
                  (i.componentWillUnmount = function () {
                    this.context[s] && this.context[s].off(this.onUpdate);
                  }),
                  (i.getValue = function () {
                    return this.context[s] ? this.context[s].get() : e;
                  }),
                  (i.render = function () {
                    return ((e = this.props.children),
                    Array.isArray(e) ? e[0] : e)(this.state.value);
                    var e;
                  }),
                  n
                );
              })(i.c.Component);
              return (
                (u.contextTypes = (((a = {})[s] = r.f.object), a)),
                { Provider: c, Consumer: u }
              );
            },
          A =
            Array.isArray ||
            function (e) {
              return "[object Array]" == Object.prototype.toString.call(e);
            },
          T = K,
          R = L,
          I = function (e, t) {
            return z(L(e, t), t);
          },
          D = z,
          F = Z,
          M = new RegExp(
            [
              "(\\\\.)",
              "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
            ].join("|"),
            "g"
          );
        function L(e, t) {
          for (
            var n, r = [], i = 0, a = 0, o = "", s = (t && t.delimiter) || "/";
            null != (n = M.exec(e));

          ) {
            var c = n[0],
              u = n[1],
              l = n.index;
            if (((o += e.slice(a, l)), (a = l + c.length), u)) o += u[1];
            else {
              var h = e[a],
                d = n[2],
                p = n[3],
                f = n[4],
                m = n[5],
                g = n[6],
                v = n[7];
              o && (r.push(o), (o = ""));
              var b = null != d && null != h && h !== d,
                y = "+" === g || "*" === g,
                w = "?" === g || "*" === g,
                E = n[2] || s,
                _ = f || m;
              r.push({
                name: p || i++,
                prefix: d || "",
                delimiter: E,
                optional: w,
                repeat: y,
                partial: b,
                asterisk: !!v,
                pattern: _ ? U(_) : v ? ".*" : "[^" + W(E) + "]+?",
              });
            }
          }
          return a < e.length && (o += e.substr(a)), o && r.push(o), r;
        }
        function B(e) {
          return encodeURI(e).replace(/[\/?#]/g, function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        function z(e, t) {
          for (var n = new Array(e.length), r = 0; r < e.length; r++)
            "object" == typeof e[r] &&
              (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", V(t)));
          return function (t, r) {
            for (
              var i = "",
                a = t || {},
                o = (r || {}).pretty ? B : encodeURIComponent,
                s = 0;
              s < e.length;
              s++
            ) {
              var c = e[s];
              if ("string" != typeof c) {
                var u,
                  l = a[c.name];
                if (null == l) {
                  if (c.optional) {
                    c.partial && (i += c.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + c.name + '" to be defined'
                  );
                }
                if (A(l)) {
                  if (!c.repeat)
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(l) +
                        "`"
                    );
                  if (0 === l.length) {
                    if (c.optional) continue;
                    throw new TypeError(
                      'Expected "' + c.name + '" to not be empty'
                    );
                  }
                  for (var h = 0; h < l.length; h++) {
                    if (((u = o(l[h])), !n[s].test(u)))
                      throw new TypeError(
                        'Expected all "' +
                          c.name +
                          '" to match "' +
                          c.pattern +
                          '", but received `' +
                          JSON.stringify(u) +
                          "`"
                      );
                    i += (0 === h ? c.prefix : c.delimiter) + u;
                  }
                } else {
                  if (
                    ((u = c.asterisk
                      ? encodeURI(l).replace(/[?#]/g, function (e) {
                          return (
                            "%" + e.charCodeAt(0).toString(16).toUpperCase()
                          );
                        })
                      : o(l)),
                    !n[s].test(u))
                  )
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received "' +
                        u +
                        '"'
                    );
                  i += c.prefix + u;
                }
              } else i += c;
            }
            return i;
          };
        }
        function W(e) {
          return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
        }
        function U(e) {
          return e.replace(/([=!:$\/()])/g, "\\$1");
        }
        function H(e, t) {
          return (e.keys = t), e;
        }
        function V(e) {
          return e && e.sensitive ? "" : "i";
        }
        function Z(e, t, n) {
          A(t) || ((n = t || n), (t = []));
          for (
            var r = (n = n || {}).strict, i = !1 !== n.end, a = "", o = 0;
            o < e.length;
            o++
          ) {
            var s = e[o];
            if ("string" == typeof s) a += W(s);
            else {
              var c = W(s.prefix),
                u = "(?:" + s.pattern + ")";
              t.push(s),
                s.repeat && (u += "(?:" + c + u + ")*"),
                (a += u =
                  s.optional
                    ? s.partial
                      ? c + "(" + u + ")?"
                      : "(?:" + c + "(" + u + "))?"
                    : c + "(" + u + ")");
            }
          }
          var l = W(n.delimiter || "/"),
            h = a.slice(-l.length) === l;
          return (
            r || (a = (h ? a.slice(0, -l.length) : a) + "(?:" + l + "(?=$))?"),
            (a += i ? "$" : r && h ? "" : "(?=" + l + "|$)"),
            H(new RegExp("^" + a, V(n)), t)
          );
        }
        function K(e, t, n) {
          return (
            A(t) || ((n = t || n), (t = [])),
            (n = n || {}),
            e instanceof RegExp
              ? (function (e, t) {
                  var n = e.source.match(/\((?!\?)/g);
                  if (n)
                    for (var r = 0; r < n.length; r++)
                      t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null,
                      });
                  return H(e, t);
                })(e, t)
              : A(e)
              ? (function (e, t, n) {
                  for (var r = [], i = 0; i < e.length; i++)
                    r.push(K(e[i], t, n).source);
                  return H(new RegExp("(?:" + r.join("|") + ")", V(n)), t);
                })(e, t, n)
              : (function (e, t, n) {
                  return Z(L(e, n), t, n);
                })(e, t, n)
          );
        }
        (T.parse = R),
          (T.compile = I),
          (T.tokensToFunction = D),
          (T.tokensToRegExp = F);
        var G = function (e) {
            var t = N();
            return (t.displayName = e), t;
          },
          J = G("Router-History"),
          X = G("Router"),
          Q = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  location: t.history.location,
                }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                t.staticContext ||
                  (n.unlisten = t.history.listen(function (e) {
                    n._isMounted
                      ? n.setState({ location: e })
                      : (n._pendingLocation = e);
                  })),
                n
              );
            }
            Object(r.c)(t, e),
              (t.computeRootMatch = function (e) {
                return { path: "/", url: "/", params: {}, isExact: "/" === e };
              });
            var n = t.prototype;
            return (
              (n.componentDidMount = function () {
                (this._isMounted = !0),
                  this._pendingLocation &&
                    this.setState({ location: this._pendingLocation });
              }),
              (n.componentWillUnmount = function () {
                this.unlisten &&
                  (this.unlisten(),
                  (this._isMounted = !1),
                  (this._pendingLocation = null));
              }),
              (n.render = function () {
                return i.c.createElement(
                  X.Provider,
                  {
                    value: {
                      history: this.props.history,
                      location: this.state.location,
                      match: t.computeRootMatch(this.state.location.pathname),
                      staticContext: this.props.staticContext,
                    },
                  },
                  i.c.createElement(J.Provider, {
                    children: this.props.children || null,
                    value: this.props.history,
                  })
                );
              }),
              t
            );
          })(i.c.Component);
        i.c.Component;
        var Y = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            Object(r.c)(t, e);
            var n = t.prototype;
            return (
              (n.componentDidMount = function () {
                this.props.onMount && this.props.onMount.call(this, this);
              }),
              (n.componentDidUpdate = function (e) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, e);
              }),
              (n.componentWillUnmount = function () {
                this.props.onUnmount && this.props.onUnmount.call(this, this);
              }),
              (n.render = function () {
                return null;
              }),
              t
            );
          })(i.c.Component),
          ee = {},
          te = 0;
        function ne(e, t) {
          return (
            void 0 === e && (e = "/"),
            void 0 === t && (t = {}),
            "/" === e
              ? e
              : (function (e) {
                  if (ee[e]) return ee[e];
                  var t = T.compile(e);
                  return te < 1e4 && ((ee[e] = t), te++), t;
                })(e)(t, { pretty: !0 })
          );
        }
        function re(e) {
          var t = e.computedMatch,
            n = e.to,
            a = e.push,
            o = void 0 !== a && a;
          return i.c.createElement(X.Consumer, null, function (e) {
            e || Object(r.e)(!1);
            var a = e.history,
              s = e.staticContext,
              c = o ? a.push : a.replace,
              u = f(
                t
                  ? "string" == typeof n
                    ? ne(n, t.params)
                    : Object(r.a)({}, n, { pathname: ne(n.pathname, t.params) })
                  : n
              );
            return s
              ? (c(u), null)
              : i.c.createElement(Y, {
                  onMount: function () {
                    c(u);
                  },
                  onUpdate: function (e, t) {
                    var n = f(t.to);
                    m(n, Object(r.a)({}, u, { key: n.key })) || c(u);
                  },
                  to: n,
                });
          });
        }
        var ie = {},
          ae = 0;
        function oe(e, t) {
          void 0 === t && (t = {}),
            ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
          var n = t,
            r = n.path,
            i = n.exact,
            a = void 0 !== i && i,
            o = n.strict,
            s = void 0 !== o && o,
            c = n.sensitive,
            u = void 0 !== c && c;
          return [].concat(r).reduce(function (t, n) {
            if (!n && "" !== n) return null;
            if (t) return t;
            var r = (function (e, t) {
                var n = "" + t.end + t.strict + t.sensitive,
                  r = ie[n] || (ie[n] = {});
                if (r[e]) return r[e];
                var i = [],
                  a = { regexp: T(e, i, t), keys: i };
                return ae < 1e4 && ((r[e] = a), ae++), a;
              })(n, { end: a, strict: s, sensitive: u }),
              i = r.regexp,
              o = r.keys,
              c = i.exec(e);
            if (!c) return null;
            var l = c[0],
              h = c.slice(1),
              d = e === l;
            return a && !d
              ? null
              : {
                  path: n,
                  url: "/" === n && "" === l ? "/" : l,
                  isExact: d,
                  params: o.reduce(function (e, t, n) {
                    return (e[t.name] = h[n]), e;
                  }, {}),
                };
          }, null);
        }
        var se = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return i.c.createElement(X.Consumer, null, function (t) {
                t || Object(r.e)(!1);
                var n = e.props.location || t.location,
                  a = e.props.computedMatch
                    ? e.props.computedMatch
                    : e.props.path
                    ? oe(n.pathname, e.props)
                    : t.match,
                  o = Object(r.a)({}, t, { location: n, match: a }),
                  s = e.props,
                  c = s.children,
                  u = s.component,
                  l = s.render;
                return (
                  Array.isArray(c) &&
                    (function (e) {
                      return 0 === i.c.Children.count(e);
                    })(c) &&
                    (c = null),
                  i.c.createElement(
                    X.Provider,
                    { value: o },
                    o.match
                      ? c
                        ? "function" == typeof c
                          ? c(o)
                          : c
                        : u
                        ? i.c.createElement(u, o)
                        : l
                        ? l(o)
                        : null
                      : "function" == typeof c
                      ? c(o)
                      : null
                  )
                );
              });
            }),
            t
          );
        })(i.c.Component);
        i.c.Component;
        var ce = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Object(r.c)(t, e),
              (t.prototype.render = function () {
                var e = this;
                return i.c.createElement(X.Consumer, null, function (t) {
                  t || Object(r.e)(!1);
                  var n,
                    a,
                    o = e.props.location || t.location;
                  return (
                    i.c.Children.forEach(e.props.children, function (e) {
                      if (null == a && i.c.isValidElement(e)) {
                        n = e;
                        var s = e.props.path || e.props.from;
                        a = s
                          ? oe(
                              o.pathname,
                              Object(r.a)({}, e.props, { path: s })
                            )
                          : t.match;
                      }
                    }),
                    a
                      ? i.c.cloneElement(n, { location: o, computedMatch: a })
                      : null
                  );
                });
              }),
              t
            );
          })(i.c.Component),
          ue = i.c.useContext;
        function le() {
          return ue(J);
        }
        function he() {
          var e = ue(X).match;
          return e ? e.params : {};
        }
      }.call(this, n(5)));
    },
    ,
    ,
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, "exports", { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = {};
      n.r(r),
        n.d(r, "SNOWPACK_PUBLIC_SHOWCASE_MODE", function () {
          return ee;
        }),
        n.d(r, "MODE", function () {
          return te;
        }),
        n.d(r, "NODE_ENV", function () {
          return ne;
        }),
        n.d(r, "SSR", function () {
          return re;
        });
      var i = n(0),
        a = i.c.Component,
        o = i.c.useEffect,
        s = i.c.useRef,
        c = i.c.useState,
        u = n(3),
        l = g,
        h = g,
        d = g;
      const p =
          /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        f = /CrOS/,
        m = /android|ipad|playbook|silk/i;
      function g(e) {
        e || (e = {});
        let t = e.ua;
        if (
          (t || "undefined" == typeof navigator || (t = navigator.userAgent),
          t &&
            t.headers &&
            "string" == typeof t.headers["user-agent"] &&
            (t = t.headers["user-agent"]),
          "string" != typeof t)
        )
          return !1;
        let n = (p.test(t) && !f.test(t)) || (!!e.tablet && m.test(t));
        return (
          !n &&
            e.tablet &&
            e.featureDetect &&
            navigator &&
            navigator.maxTouchPoints > 1 &&
            -1 !== t.indexOf("Macintosh") &&
            -1 !== t.indexOf("Safari") &&
            (n = !0),
          n
        );
      }
      (l.isMobile = h), (l.default = d);
      var v = n(2),
        b = n(1),
        y = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
                v.e
              )(t.props)),
              t
            );
          }
          return (
            Object(b.c)(t, e),
            (t.prototype.render = function () {
              return i.c.createElement(v.a, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(i.c.Component);
      i.c.Component;
      var w = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        E = function (e, t) {
          return "string" == typeof e ? Object(v.f)(e, null, null, t) : e;
        },
        _ = function (e) {
          return e;
        },
        x = i.c.forwardRef;
      void 0 === x && (x = _);
      var k = x(function (e, t) {
          var n = e.innerRef,
            r = e.navigate,
            a = e.onClick,
            o = Object(b.b)(e, ["innerRef", "navigate", "onClick"]),
            s = o.target,
            c = Object(b.a)({}, o, {
              onClick: function (e) {
                try {
                  a && a(e);
                } catch (t) {
                  throw (e.preventDefault(), t);
                }
                e.defaultPrevented ||
                  0 !== e.button ||
                  (s && "_self" !== s) ||
                  (function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(e) ||
                  (e.preventDefault(), r());
              },
            });
          return (c.ref = (_ !== x && t) || n), i.c.createElement("a", c);
        }),
        S = x(function (e, t) {
          var n = e.component,
            r = void 0 === n ? k : n,
            a = e.replace,
            o = e.to,
            s = e.innerRef,
            c = Object(b.b)(e, ["component", "replace", "to", "innerRef"]);
          return i.c.createElement(v.d.Consumer, null, function (e) {
            e || Object(b.e)(!1);
            var n = e.history,
              u = E(w(o, e.location), e.location),
              l = u ? n.createHref(u) : "",
              h = Object(b.a)({}, c, {
                href: l,
                navigate: function () {
                  var t = w(o, e.location),
                    r = Object(v.g)(e.location) === Object(v.g)(E(t));
                  (a || r ? n.replace : n.push)(t);
                },
              });
            return (
              _ !== x ? (h.ref = t || s) : (h.innerRef = s),
              i.c.createElement(r, h)
            );
          });
        }),
        O = function (e) {
          return e;
        },
        j = i.c.forwardRef;
      void 0 === j && (j = O),
        j(function (e, t) {
          var n = e["aria-current"],
            r = void 0 === n ? "page" : n,
            a = e.activeClassName,
            o = void 0 === a ? "active" : a,
            s = e.activeStyle,
            c = e.className,
            u = e.exact,
            l = e.isActive,
            h = e.location,
            d = e.sensitive,
            p = e.strict,
            f = e.style,
            m = e.to,
            g = e.innerRef,
            y = Object(b.b)(e, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return i.c.createElement(v.d.Consumer, null, function (e) {
            e || Object(b.e)(!1);
            var n = h || e.location,
              a = E(w(m, n), n),
              _ = a.pathname,
              x = _ && _.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              k = x
                ? Object(v.k)(n.pathname, {
                    path: x,
                    exact: u,
                    sensitive: d,
                    strict: p,
                  })
                : null,
              P = !!(l ? l(k, n) : k),
              $ = "function" == typeof c ? c(P) : c,
              C = "function" == typeof f ? f(P) : f;
            P &&
              (($ = (function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return t
                  .filter(function (e) {
                    return e;
                  })
                  .join(" ");
              })($, o)),
              (C = Object(b.a)({}, C, s)));
            var q = Object(b.a)(
              {
                "aria-current": (P && r) || null,
                className: $,
                style: C,
                to: a,
              },
              y
            );
            return (
              O !== j ? (q.ref = t || g) : (q.innerRef = g),
              i.c.createElement(S, q)
            );
          });
        });
      const P = (e, t, n) => (e < t ? t : e > n ? n : e),
        $ = (e, t, n) => {
          let r = 0;
          e.forEach((e, n) => {
            let i = "number" == typeof t ? t * n : t[P(n, 0, t.length - 1)] + r;
            (r = i), setTimeout(() => e(), i);
          }),
            n && setTimeout(n, r);
        },
        C = (e) => {
          for (let t in e)
            try {
              localStorage.setItem(t, e[t]);
            } catch (n) {
              console.error("error saving item to local storage", t, e[t], n);
            }
        },
        q = (e) => localStorage.getItem(e),
        N = (e) => {
          if (e && e.parentElement) {
            let t = 0.8 * window.innerWidth - 30,
              n = parseFloat(
                getComputedStyle(e.parentElement).getPropertyValue("max-height")
              ),
              r = 40;
            for (; e.clientHeight > n || e.scrollWidth - 1 > t; )
              (r -= 1),
                (e.style.fontSize = `${r}px`),
                (e.style.lineHeight = `${r}px`);
          }
        };
      var A = "_1-CRTrpjGCBPW179NnwcY_",
        T = "p8wwepMmn9zr79NFckmLm",
        R = "_3nW1bOYxZ3UUcEQTu8jkzo",
        I = "_1eC_CA0mJQWm42OH1uR87P",
        D = "_3K1utOidiOTXv3NndeCqhO",
        F = "_1qC4SWcofNxV4SHFM_mvqk";
      let M = !1,
        L = !1;
      var B = (e) => {
          const t = 100 / 3,
            n = s(null),
            [r, a] = c(0),
            [u, l] = c(!1),
            [h, d] = c(!1),
            [p, f] = c(!1),
            [m, g] = c(!1);
          o(() => {
            N(n.current), w(), v();
          }, []);
          const v = () => {
              $(
                [() => l(!0), () => d(!0), () => f(!0), () => g(!0)],
                [250, 250],
                () => setTimeout(() => y(), 500)
              );
            },
            b = () => {
              $([() => l(!1), () => d(!1), () => f(!1), () => g(!1)], 100, () =>
                setTimeout(() => e.onLoad(), 500)
              );
            },
            y = () => {
              let n = e.loadingTime,
                r = setInterval(() => {
                  (n -= t),
                    a(P(Math.floor(100 * (1 - n / e.loadingTime)), 0, 100)),
                    n <= 0 && (clearInterval(r), (M = !0), L && b());
                }, t);
            },
            w = () => {
              Promise.all(
                [
                  "/ernaehrungs-app/img/BMEL_Logo.svg",
                  "/ernaehrungs-app/img/intro.png",
                  "/ernaehrungs-app/img/menu.png",
                  "/ernaehrungs-app/img/mixer.webp",
                  "/ernaehrungs-app/img/mouth_static.png",
                  "/ernaehrungs-app/img/placeholder.svg",
                  "/ernaehrungs-app/img/splash_screen/center.svg",
                  "/ernaehrungs-app/img/splash_screen/outer_01.svg",
                  "/ernaehrungs-app/img/splash_screen/outer_02.svg",
                  "/ernaehrungs-app/img/splash_screen/outer_03.svg",
                  "/ernaehrungs-app/img/splash_screen/outer_04.svg",
                  "/ernaehrungs-app/img/splash_screen/outer_05.svg",
                  "/ernaehrungs-app/img/splash_screen/outer_06.svg",
                  "/ernaehrungs-app/img/splash_screen/outer_07.svg",
                  "/ernaehrungs-app/img/questions/3/0.jpg",
                  "/ernaehrungs-app/img/questions/3/1.jpg",
                  "/ernaehrungs-app/img/questions/3/2.jpg",
                  "/ernaehrungs-app/img/questions/3/3.jpg",
                  "/ernaehrungs-app/img/questions/3/4.jpg",
                  "/ernaehrungs-app/img/questions/3/5.jpg",
                  "/ernaehrungs-app/img/questions/6/0.jpg",
                  "/ernaehrungs-app/img/questions/6/1.jpg",
                  "/ernaehrungs-app/img/questions/6/2.jpg",
                  "/ernaehrungs-app/img/questions/6/3.jpg",
                  "/ernaehrungs-app/img/questions/6/4.jpg",
                  "/ernaehrungs-app/img/questions/6/5.jpg",
                  "/ernaehrungs-app/img/questions/8/0.jpg",
                  "/ernaehrungs-app/img/questions/8/1.jpg",
                  "/ernaehrungs-app/img/questions/8/2.jpg",
                ].map(
                  (e) =>
                    new Promise((t, n) => {
                      let r = new Image();
                      (r.src = e), (r.onload = () => t());
                    })
                )
              ).then(() => {
                (L = !0), M && b();
              });
            };
          return i.c.createElement(
            "div",
            { className: `${A}` },
            i.c.createElement("img", {
              src: "/ernaehrungs-app/img/BMEL_Logo.svg",
              className: `${T} ${u ? "" : R}`,
            }),
            i.c.createElement(
              "div",
              { className: `${I} ${h ? "" : R}` },
              i.c.createElement(
                "div",
                { style: { top: r + "%", transition: `top ${t}ms ease` } },
                r,
                "%"
              )
            ),
            i.c.createElement("img", {
              src: "/ernaehrungs-app/img/mouth_static.png",
              className: `${D} ${p ? "" : R}`,
            }),
            i.c.createElement(
              "div",
              { className: `${F} ${m ? "" : R} dottedBackground` },
              i.c.createElement(
                "div",
                { className: `textbox boxshadow ${m ? "" : R}` },
                i.c.createElement("h2", { ref: n }, "Wird geladen...")
              )
            )
          );
        },
        z = "_3-aeBibWFfVJseksslA7-C",
        W = "_1Z3Zht1nbOqTnolr_ZMJp3",
        U = "_21XoUMh5irt-gImRd_PCW0",
        H = "_2m9LvdP-eq0ZPGeLoFJJyv",
        V = "_3-PxPi7yJ-zlzRqz_j0-le",
        Z = "_10EIvIN12s3WfIEr1gUXym";
      class K extends a {
        constructor(e) {
          super(e),
            (this.state = { at1: !1, at2: !1 }),
            (this.textElement = i.c.createRef());
        }
        componentDidMount() {
          N(this.textElement.current), this.enterSequence();
        }
        enterSequence() {
          $(
            [
              () => this.setState({ at1: !0 }),
              () => this.setState({ at2: !0 }),
            ],
            100,
            () => setTimeout(() => {}, 500)
          );
        }
        exitSequence() {
          $(
            [
              () => this.setState({ at1: !1 }),
              () => this.setState({ at2: !1 }),
            ],
            100,
            () => setTimeout(this.props.onButtonClick.bind(this), 500)
          );
        }
        render() {
          return i.c.createElement(
            "div",
            { className: z },
            i.c.createElement(
              "div",
              { className: `${W} ${this.state.at1 ? "" : U}` },
              i.c.createElement("img", {
                className: H,
                src: "/ernaehrungs-app/img/splash_screen/center.svg",
              }),
              i.c.createElement("img", {
                className: V,
                src: "/ernaehrungs-app/img/splash_screen/outer_01.svg",
              }),
              i.c.createElement("img", {
                className: V,
                src: "/ernaehrungs-app/img/splash_screen/outer_02.svg",
              }),
              i.c.createElement("img", {
                className: V,
                src: "/ernaehrungs-app/img/splash_screen/outer_03.svg",
              }),
              i.c.createElement("img", {
                className: V,
                src: "/ernaehrungs-app/img/splash_screen/outer_04.svg",
              }),
              i.c.createElement("img", {
                className: V,
                src: "/ernaehrungs-app/img/splash_screen/outer_05.svg",
              }),
              i.c.createElement("img", {
                className: V,
                src: "/ernaehrungs-app/img/splash_screen/outer_06.svg",
              }),
              i.c.createElement("img", {
                className: V,
                src: "/ernaehrungs-app/img/splash_screen/outer_07.svg",
              })
            ),
            i.c.createElement(
              "div",
              { className: `${Z} dottedBackground ${this.state.at2 ? "" : U}` },
              i.c.createElement(
                "div",
                { className: "textbox boxshadow" },
                i.c.createElement(
                  "h2",
                  { ref: this.textElement },
                  " Welcher Ernährungstyp bist du? "
                )
              ),
              i.c.createElement(
                "button",
                {
                  className: "ctaButton boxshadow",
                  onClick: this.exitSequence.bind(this),
                },
                "Start"
              )
            )
          );
        }
      }
      var G = "_1tvHAjwjzrJLLeswX-fnbI",
        J = "_2IX1ShQPJnPFcwaPdlP3G4",
        X = "_39o0SKZJ2IN3H2edZRqYJU",
        Q = "_268xmfBfoX6ZKfPzVbndYl";
      class Y extends a {
        constructor(e) {
          super(e), (this.state = { at1: !1, at2: !1, at3: !1 });
        }
        componentDidMount() {
          this.enterSequence();
        }
        enterSequence() {
          $(
            [
              () => this.setState({ at1: !0 }),
              () => this.setState({ at2: !0 }),
              () => this.setState({ at3: !0 }),
            ],
            100
          );
        }
        exitSequence() {
          $(
            [
              () => this.setState({ at1: !1 }),
              () => this.setState({ at2: !1 }),
              () => this.setState({ at3: !1 }),
            ],
            100,
            () => setTimeout(this.props.onButtonClick, 500)
          );
        }
        render() {
          return i.c.createElement(
            "div",
            { className: G },
            i.c.createElement(
              "div",
              {
                className: `${J} textbox boxshadow ${this.state.at1 ? "" : X}`,
              },
              i.c.createElement("h2", null, " Hallo! "),
              i.c.createElement(
                "p",
                null,
                "Finde heraus, welcher Ernährungstyp du bist: pragmatisch, genussvoll oder engagiert? Beantworte dazu die folgenden zwölf Fragen der Reihe nach. Deine Auswahl kannst du nachträglich nicht mehr ändern. Nachdem du alle Fragen beantwortet hast, erhältst du dein ganz persönliches Ergebnis. Viel Spaß!"
              )
            ),
            i.c.createElement("div", {
              className: `${Q} dottedBackground ${this.state.at2 ? "" : X}`,
            }),
            i.c.createElement(
              "button",
              {
                className: `ctaButton boxshadow ${this.state.at3 ? "" : X}`,
                onClick: this.exitSequence.bind(this),
              },
              "Einverstanden"
            )
          );
        }
      }
      const ee = "true",
        te = "development",
        ne = "development",
        re = !1;
      ({
        url: (function (e) {
          const t = n.p;
          let r = "";
          return (
            (!t || t.indexOf("://") < 0) &&
              (r += window.location.protocol + "//" + window.location.host),
            (r += t || "/"),
            r + e
          );
        })("data/questions.js"),
        env: r,
      }.env = r);
      let ie = {
        1: {
          type: "sort",
          codeSequence: [1, 2, 3, 5],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_07_2.svg",
          data: [
            {
              question: "Was ist dir beim Essen am wichtigsten?",
              info: "Verschiebe die Antworten und erstelle deine persönliche Rangfolge.",
              answers: {
                0: "Ich möchte satt werden. Die Zubereitung sollte nicht zu lange dauern.",
                1: "Essen ist Genuss - Hauptsache es schmeckt!",
                2: "Gesundheit und Nachhaltigkeit habe ich beim Thema Essen immer auf dem Schirm.",
              },
            },
          ],
        },
        2: {
          type: "single_choice",
          codeSequence: [1, 2, 3, 5],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_07_2.svg",
          data: [
            {
              question:
                "Kämst du mit 300 Gramm Fleisch pro Woche aus? Das entspricht etwa einem Steak und fünf Scheiben Wurst oder Schinken.",
              info: "Wähle eine der Antworten aus.",
              answers: {
                0: "Nie im Leben, Fleisch ist mein Gemüse!",
                1: "Das kann ich gut schaffen, denn Genuss geht auch mit wenig oder ganz ohne Fleisch.",
                2: "Kein Problem, das schaffe ich locker - der Gesundheit und Umwelt zuliebe.",
              },
            },
          ],
        },
        3: {
          type: "image_picker",
          codeSequence: [9, 5, 1, 2],
          imagePath: "/ernaehrungs-app/img/splash_screen/center_2.svg",
          data: [
            {
              question:
                "Du hast keine Lust zu kochen. Welches Lieblingsgericht bestellst du?",
              info: "Sieh dir die Fotos an und wähle dein Wunschgericht. Zum Vergrößern auseinanderziehen. Zum Auswählen anklicken.",
              answers: {
                0: "Pizza",
                0.1: "Döner",
                1: "Steak mit Beilage",
                1.1: "Sushi",
                2: "Salat",
                2.2: "Suppe",
              },
            },
          ],
        },
        4: {
          type: "single_choice",
          codeSequence: [9, 5, 1, 2],
          imagePath: "/ernaehrungs-app/img/splash_screen/center_2.svg",
          data: [
            {
              question:
                "Du beißt in einen knackigen rot-gelben Apfel und denkst ...",
              info: "Wähle eine der Antworten aus.",
              answers: {
                0: "Der schmeckt mir und hilft gegen den kleinen Hunger.",
                1: "Köstlich, eine tolle Sorte! Säuerlich-würzig wie ein Elstar, knackig-süß wie ein Braeburn und im Abgang fruchtig wie ein Kanzi.",
                2: "Mmh - lecker. Ob es die Sorte auch aus regionalem Anbau gibt? Dann kaufe ich die häufiger.",
              },
            },
          ],
        },
        5: {
          type: "sort",
          codeSequence: [9, 5, 1, 2],
          imagePath: "/ernaehrungs-app/img/splash_screen/center_2.svg",
          data: [
            {
              question: "Wie sieht dein persönlicher Genuss-Moment aus?",
              info: "Verschiebe die Antworten und erstelle deine persönliche Rangfolge.",
              answers: {
                0: "Gemütlich auf der Couch entspannen, zum Beispiel mit einer Tüte Chips oder einer Tafel Schokolade.",
                1: "Ein geselliger Abend mit Freunden oder der Familie und dazu gibt es ein besonderes Essen, das nicht alle Tage auf dem Tisch steht.",
                2: "Frisch und möglichst bunt - dann ist Essen für mich Genuss pur.",
              },
            },
          ],
        },
        6: {
          type: "image_picker",
          codeSequence: [9, 5, 1, 2],
          imagePath: "/ernaehrungs-app/img/splash_screen/center_2.svg",
          data: [
            {
              question: "Shopping macht hungrig. In der Stadt ...",
              info: "Sieh dir die Fotos an und wähle dein Wunschgericht. Zum Vergrößern auseinanderziehen. Zum Auswählen anklicken.",
              answers: {
                0: "... esse ich eine Wurst von der Bude oder eine Pizza zum Mitnehmen.",
                0.1: "... hole ich mir einen schnellen Snack vom Bäcker.",
                1: "... suche ich mir ein nettes Lokal und verbringe eine entspannte Pause.",
                1.1: "... teste ich ein angesagtes Restaurant oder Café.",
                2: "... wähle ich ein frisches und gesundes Essen, zum Beispiel in einer Salat- oder Suppenbar.",
                2.2: "... packe ich meine Lunchbox aus. Da weiß ich, was ich habe.",
              },
            },
          ],
        },
        7: {
          type: "slider",
          codeSequence: [4, 2, 3, 6],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_03_2.svg",
          data: [
            {
              question:
                "Zutatenliste, Nährwertangaben & Co.: Wie genau schaust du beim Einkaufen hin?",
              info: "Schiebe den Regler an die Stelle, die am ehesten deiner Vorliebe entspricht.",
              answers: [
                [
                  "Das Kleingedruckte interessiert mich nicht.",
                  "Hingucken lohnt sich. Ich will wissen, was in meinem Einkaufskorb landet: Was steckt drin und wo kommt es her?",
                ],
              ],
            },
          ],
        },
        8: {
          type: "image_picker",
          codeSequence: [4, 2, 3, 6],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_03_2.svg",
          data: [
            {
              question:
                "Samstagvormittag im Supermarkt - wo findet man dich auf jeden Fall?",
              info: "Sieh dir die Fotos an und wähle dein Wunschgericht. Zum Vergrößern auseinanderziehen. Zum Auswählen anklicken.",
              answers: {
                0: "In der Fix & Fertig-Abteilung",
                1: "An der Feinkosttheke",
                2: "Vor dem Gemüse- und Obstregal",
              },
            },
          ],
        },
        9: {
          type: "slider",
          codeSequence: [4, 2, 3, 6],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_03_2.svg",
          data: [
            {
              question: "Welche Alternativen wählst du?",
              info: "Schiebe den Regler an die Stelle, die am ehesten deiner Vorliebe entspricht.",
              answers: [["Tiefkühlbeeren", "Frische Erdbeeren aus der Region"]],
            },
            {
              question: "Welche Alternativen wählst du?",
              info: "Schiebe den Regler an die Stelle, die am ehesten deiner Vorliebe entspricht.",
              answers: [["Aufbackbrötchen", "frisch vom Bio-Bäcker"]],
            },
          ],
        },
        10: {
          type: "single_choice",
          codeSequence: [4, 2, 3, 6],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_03_2.svg",
          data: [
            {
              question:
                "Zum Dessert gibt’s einen Fruchtjoghurt bzw. eine pflanzliche Alternative. Achtest du auf den Zuckergehalt?",
              info: "Wähle eine der Antworten aus.",
              answers: {
                0: "Nein, ist mir egal.",
                1: "Ist mir nicht so wichtig. Der Geschmack steht für mich im Vordergrund.",
                2: "Ich esse lieber das Naturprodukt mit frischen Früchten.",
              },
            },
          ],
        },
        11: {
          type: "sort",
          codeSequence: [7, 4, 5, 6],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_02_2.svg",
          data: [
            {
              question: "Bei mir landen Lebensmittel in der Tonne, ...",
              info: "Verschiebe die Antworten und erstelle deine persönliche Rangfolge.",
              answers: {
                0: "... wenn ich sie im Kühlschrank vergessen habe.",
                1: "... weil ich gerne eine Auswahl zu Hause habe - wer weiß wonach mir heute Abend ist.",
                2: "... wenn es gar nicht anders geht, zum Beispiel weil sie verdorben sind. Das kommt aber nur selten vor.",
              },
            },
          ],
        },
        12: {
          type: "single_choice",
          codeSequence: [7, 4, 5, 6],
          imagePath: "/ernaehrungs-app/img/splash_screen/outer_02_2.svg",
          data: [
            {
              question:
                "Das große Krabbeln auf dem Teller? - Insekten würde ich essen, ...",
              info: "Wähle eine der Antworten aus.",
              answers: {
                0: "... wenn man sie mir unterjubelt.",
                1: "... wenn sie außergewöhnlich zubereitet sind. Vielleicht knusprig frittiert oder als Gourmet-Burger? ",
                2: "... weil sie neben reichlich Proteinen für mich auch noch einen Mehrwert fürs Klima liefern. Win-Win für alle!",
              },
            },
          ],
        },
      };
      ee && (ie = { 1: ie[1], 2: ie[2], 3: ie[3], 4: ie[9] });
      var ae = ie,
        oe = "wReiwcBPf4wcj7oSGVqBd",
        se = "_30kSf6rzkLh6y0WiYZ7hHt",
        ce = "NIAP2BbSpR2EjZA34vNtm",
        ue = "_1YKvesnDhFLYVp7Kjs1pgJ",
        le = "hcKnXXpX-R1NktWEMRqgQ",
        he = "_Mf-dIt_Nn8DoqEDnw1fj",
        de = "_2tAr2MbJbiRttk836F2jbQ",
        pe = "wisNdRCXe2t9KJ8FAChPl",
        fe = "_2TDk2k40ZR_su9lAQKL_Dk";
      ({
        url: (function (e) {
          const t = n.p;
          let r = "";
          return (
            (!t || t.indexOf("://") < 0) &&
              (r += window.location.protocol + "//" + window.location.host),
            (r += t || "/"),
            r + e
          );
        })("components/QuestionNavigation/index.js"),
        env: r,
      }.env = r);
      class me extends a {
        constructor(e) {
          super(e),
            (this.textElement = i.c.createRef()),
            (this.questionContainer = i.c.createRef());
          this.state = {
            progressPercent: 0,
            questions: Object.keys(ae).map((e, t) => ({
              id: e,
              answered: !!q(e),
              result: q(e),
              imagePath: ae[e].imagePath,
            })),
            everythingAnswered: !1,
            backgroundColor: ["#a3d4d2", "#c0d8a3", "#fee061"][
              Object.keys(ae).filter((e, t) => q(e)).length % 3
            ],
            at1: !1,
            at2: !1,
            at3: !1,
            atL1: Object.keys(ae).map(() => !1),
          };
          document.documentElement.style.setProperty(
            "--current-background-color",
            this.state.backgroundColor
          );
        }
        enterSequence(e) {
          let t = [...this.state.atL1];
          $(
            [
              () => this.setState({ at1: !0 }),
              () =>
                $(
                  t.map((e, n) => () => {
                    (t[n] = !0), this.setState({ atL1: t });
                  }),
                  [0, 500 / t.length]
                ),
              () => this.setState({ at2: !0 }),
              () => this.animateProgressBar(),
              () => this.setState({ at3: !0 }),
            ],
            [250, 250],
            () => (e ? e() : "")
          );
        }
        exitSequence(e) {
          let t = [...this.state.atL1];
          $(
            [
              () => this.setState({ at1: !1 }),
              () =>
                $(
                  t.map((e, n) => () => {
                    (t[n] = !1), this.setState({ atL1: t });
                  }),
                  [0, 400 / t.length]
                ),
              () => this.setState({ at2: !1 }),
              () => this.setState({ at3: !1 }),
            ],
            150,
            () =>
              setTimeout(() => {
                e && e();
              }, 500)
          );
        }
        componentDidMount() {
          N(this.textElement.current);
          const e = this.state.questions.findIndex((e) => !e.answered);
          this.enterSequence(() => {
            if (e > -1) {
              const t =
                  this.questionContainer.current.children[
                    e
                  ].getBoundingClientRect(),
                n = t.top + t.height / 2 - window.innerHeight / 2,
                r = document.body.clientHeight - window.outerHeight;
              ge(Math.min(n, r), 1e3);
            } else ge(document.body.clientHeight - window.outerHeight, 1e3);
          });
        }
        componentWillUnmount() {}
        checkAnswerAmount() {
          this.setState({
            everythingAnswered:
              this.state.questions.filter((e) => e.answered).length ==
              this.state.questions.length,
          });
        }
        animateProgressBar() {
          let e =
              this.state.questions.filter((e) => e.answered).length /
              this.state.questions.length,
            t = 100 / 3,
            n = 2e3,
            r = setInterval(() => {
              (n -= t),
                this.setState({
                  progressPercent: P((1 - n / 2e3) * e * 100, 0, 100 * e),
                }),
                n <= 0 && (clearInterval(r), this.checkAnswerAmount());
            }, t);
        }
        render() {
          let e = this.state.questions.map((e, t) => {
            const n = this.state.questions[t - 1];
            return i.c.createElement(
              "li",
              { key: t, className: `${this.state.atL1[t] ? "" : ce}` },
              i.c.createElement(
                S,
                {
                  to: `question/${e.id}`,
                  className: `boxshadow ${e.answered ? de : ""}`,
                  onClick: (t) => {
                    t.preventDefault(),
                      e.answered
                        ? alert("Du hast diese Frage schon beantwortet.")
                        : void 0 === n || (void 0 !== n && n.answered)
                        ? this.exitSequence(() => {
                            this.setState({ redirect: `question/${e.id}` });
                          })
                        : alert("Beantworte die Fragen der Reihe nach.");
                  },
                },
                i.c.createElement("img", { src: e.imagePath })
              )
            );
          });
          return this.state.redirect
            ? i.c.createElement(v.i, { to: this.state.redirect })
            : i.c.createElement(
                "div",
                {
                  className: oe,
                  style: { backgroundColor: this.state.backgroundColor },
                },
                i.c.createElement(
                  "div",
                  {
                    className: `${se} dottedBackground ${
                      this.state.at1 ? "" : ce
                    }`,
                  },
                  this.state.questions.every((e) => e.answered)
                    ? i.c.createElement(
                        "div",
                        { className: `${ue} textbox boxshadow` },
                        i.c.createElement(
                          "h2",
                          { ref: this.textElement },
                          "Wenn du alle Fragen beantwortet hast, erhältst du dein persönliches Ergebnis."
                        )
                      )
                    : i.c.createElement(
                        i.c.Fragment,
                        null,
                        i.c.createElement(
                          "div",
                          { className: `${ue} textbox boxshadow` },
                          i.c.createElement(
                            "h2",
                            { ref: this.textElement },
                            "Klicke der Reihe nach auf die Symbole und beantworte die zwölf Fragen."
                          )
                        ),
                        this.state.progressPercent > 0
                          ? i.c.createElement(
                              "p",
                              { className: `hint ${le}` },
                              "Wenn du alle Fragen beantwortet hast, erhältst du dein persönliches Ergebnis."
                            )
                          : ""
                      )
                ),
                i.c.createElement(
                  "ul",
                  { ref: this.questionContainer, className: he },
                  e
                ),
                i.c.createElement(
                  "div",
                  { className: `${pe} ${this.state.at2 ? "" : ce}` },
                  i.c.createElement(
                    "div",
                    { style: { top: this.state.progressPercent + "%" } },
                    this.state.progressPercent.toFixed(0),
                    "%"
                  )
                ),
                i.c.createElement(
                  S,
                  {
                    to: "/result",
                    className: `${fe} ${(this.state.everythingAnswered, "")} ${
                      this.state.at3 ? "" : ce
                    }`,
                    onClick: (e) => {
                      e.preventDefault(),
                        !0 !== this.state.everythingAnswered &&
                          alert(
                            "Du musst zuerst alle Fragen beantworten, um dein Ergebnis zu sehen!"
                          );
                    },
                  },
                  i.c.createElement(
                    "button",
                    {
                      className:
                        "ctaButton boxshadow " +
                        (this.state.everythingAnswered ? "" : "disabled"),
                      onClick: (e) => {
                        e.preventDefault(),
                          this.exitSequence(() => {
                            this.setState({ redirect: "/result" });
                          });
                      },
                    },
                    "Mein Ergebnis"
                  )
                ),
                ee
                  ? i.c.createElement(
                      "button",
                      {
                        className: `${fe} ctaButton boxshadow ${
                          this.state.at3 ? "" : ce
                        }`,
                        onClick: () => {
                          localStorage.clear(),
                            (document.location.href = document.location.href +=
                              "ernaehrungs-app");
                        },
                      },
                      "Restart"
                    )
                  : i.c.createElement(i.c.Fragment, null)
              );
        }
      }
      const ge = (e, t) => {
        let n,
          r = window.pageYOffset,
          i = e - r;
        i &&
          window.requestAnimationFrame(function e(a) {
            n || (n = a);
            let o = a - n,
              s =
                (c = Math.min(o / t, 1)) < 0.5
                  ? 4 * c * c * c
                  : (c - 1) * (2 * c - 2) * (2 * c - 2) + 1;
            var c;
            window.scrollTo(0, r + i * s),
              o < t && window.requestAnimationFrame(e);
          });
      };
      var ve = (e) => {
          const [t, n] = c(!e.userHasVisited),
            [r, a] = c(!e.userHasVisited),
            [o, s] = c(!e.userHasVisited);
          return t
            ? i.c.createElement(B, {
                loadingTime: 5e3,
                onLoad: () => {
                  n(!1);
                },
              })
            : r
            ? i.c.createElement(K, {
                onButtonClick: () => {
                  a(!1);
                },
              })
            : o
            ? i.c.createElement(Y, {
                onButtonClick: () => {
                  e.onIntroductionComplete(), s(!1);
                },
              })
            : i.c.createElement(me, null);
        },
        be = {
          questionContainer: "_1d31pwxH75CgGSaaIXcSI8",
          hidden: "_3RmF3XSI1typ4aeUQA_XSl",
          image_picker: "_2hOWjUrJMZduzw0fKKKeOt",
          dottedBackground: "_3HZQlgWjy0hRjTRZMg7MPw",
          container: "_2vRPyvs-gMPa8lJZ4MJ0Nu",
          hint: "Q-hO1_mutEkc9YuRlYpT1",
          appearing: "_2-aXbVm0U2onT8txiA80ZP",
        };
      class ye extends a {
        constructor(e) {
          super(e),
            (this.textElement = i.c.createRef()),
            (this.state = {
              currentPageId: 0,
              answers: new Array(this.props.questionData.length).fill(""),
              at1: !1,
              at2: !1,
              shouldExit: !1,
            });
        }
        enterSequence(e) {
          $(
            [
              () => this.setState({ at1: !0 }),
              () => this.setState({ at2: !0 }),
            ],
            [0, 400],
            () => (e ? e() : "")
          );
        }
        exitSequence(e) {
          $(
            [
              () => this.setState({ at1: !1 }),
              () => this.setState({ at2: !1 }),
            ],
            150,
            () =>
              setTimeout(() => {
                e && e();
              }, 500)
          );
        }
        incrementPageId() {
          "" !== this.state.answers[this.state.currentPageId] &&
            (window.scrollTo(0, 0),
            this.setState((e) => ({ currentPageId: e.currentPageId + 1 })));
        }
        submit() {
          "" !== this.state.answers[this.state.currentPageId] &&
            this.props.onSubmit(this.state.answers);
        }
        updateAnswers(e) {
          let t = [...this.state.answers];
          (t[this.state.currentPageId] = Math.round(parseFloat(e)).toFixed(0)),
            this.setState({ answers: t });
        }
        componentDidMount() {
          N(this.textElement.current),
            window.scrollTo(0, 0),
            this.enterSequence();
        }
        render() {
          let e = this.props.questionData[this.state.currentPageId],
            t = this.props.answerComponent;
          const n =
            this.props.questionData.length > 1
              ? `Frage ${this.state.currentPageId + 1} von ${
                  this.props.questionData.length
                }: `
              : "";
          return i.c.createElement(
            "div",
            {
              className:
                "" + (be.questionContainer + " " + be[this.props.questionType]),
            },
            i.c.createElement(
              "div",
              {
                className: `${be.dottedBackground} dottedBackground ${
                  this.state.at1 ? "" : be.hidden
                }`,
              },
              i.c.createElement(
                "div",
                {
                  className: `${be.container} ${
                    this.state.at1 ? "" : be.hidden
                  }`,
                },
                i.c.createElement(
                  "div",
                  { className: "textbox boxshadow" },
                  i.c.createElement("h2", { ref: this.textElement }, e.question)
                ),
                i.c.createElement(
                  "p",
                  { className: `hint ${be.hint}` },
                  n,
                  e.info
                )
              )
            ),
            i.c.createElement(t, {
              questionIndex: this.props.questionIndex,
              questionData: e,
              currentPageId: this.state.currentPageId,
              callback: this.updateAnswers.bind(this),
              shouldExit: this.state.shouldExit,
              exitCallback: () => {},
            }),
            i.c.createElement(
              "div",
              {
                className: `question_buttonContainer ${be.appearing} ${
                  this.state.at2 ? "" : be.hidden
                }`,
              },
              i.c.createElement(
                "button",
                {
                  className: "ctaButton boxshadow",
                  onClick: () => {
                    this.setState({ shouldExit: !0 }),
                      this.exitSequence(() => this.props.onCancel());
                  },
                },
                "<"
              ),
              this.state.currentPageId < this.props.questionData.length - 1
                ? i.c.createElement(
                    "button",
                    {
                      className:
                        "ctaButton boxshadow " +
                        ("" !== this.state.answers[this.state.currentPageId]
                          ? ""
                          : "disabled"),
                      onClick: this.incrementPageId.bind(this),
                    },
                    "Weiter"
                  )
                : i.c.createElement(
                    "button",
                    {
                      className:
                        "ctaButton boxshadow " +
                        ("" !== this.state.answers[this.state.currentPageId]
                          ? ""
                          : "disabled"),
                      onClick: () => {
                        this.setState({ shouldExit: !0 }),
                          this.exitSequence(this.submit.bind(this));
                      },
                    },
                    "Einloggen"
                  )
            )
          );
        }
      }
      var we = {
        answers: "_2X6QPeTdSHlLv9Wn0Hk_tQ",
        hidden: "_3zGN91zwOuoFug_nKy1jWh",
        customRadio: "_2ZWA5GjTT2fM2Yw5-OyOuP",
      };
      var Ee = (e) => {
          const [t, n] = c(
              new Array(Object.keys(e.questionData.answers).length).fill(!1)
            ),
            [r, a] = c(Object.keys(e.questionData.answers).map(() => !1));
          o(() => {
            s();
          }, []),
            o(() => {
              e.shouldExit && u();
            }, [e.shouldExit]);
          const s = () => {
              $(
                [
                  () =>
                    $(
                      r.map((e, t) => () => {
                        (r[t] = !0), a([...r]);
                      }),
                      [0, 500 / r.length]
                    ),
                ],
                100
              );
            },
            u = () => {
              $(
                [
                  () =>
                    $(
                      r.map((e, t) => () => {
                        (r[t] = !1), a([...r]);
                      }),
                      [0, 400 / r.length]
                    ),
                ],
                100,
                () => setTimeout(e.exitCallback, 500)
              );
            };
          let l = Object.entries(e.questionData.answers).map((a, o) =>
            i.c.createElement(
              "li",
              { key: o, className: `${r[o] ? "" : we.hidden}` },
              i.c.createElement(
                "label",
                { className: `boxshadow ${t[o] ? we.active : ""}` },
                i.c.createElement("input", {
                  type: "radio",
                  name: "single_choice",
                  onChange: (r) => {
                    let i = [...t].map(() => !1);
                    (i[o] = !0), n(i), e.callback(a[0]);
                  },
                }),
                i.c.createElement("div", { className: we.customRadio }),
                a[1]
              )
            )
          );
          return i.c.createElement("ul", { className: `${we.answers}` }, l);
        },
        _e = "_2dHAINpzLvCnTPL5u_t9E9",
        xe = "_2dKPS3Jcc7Feg9JEXnPXWm";
      var ke = (e) => {
          const t = s(null),
            [n, r] = c(e.currentPageId),
            [a, u] = c(!1);
          o(() => {
            l(), e.callback("1");
          }, []),
            o(() => {
              e.shouldExit && h();
            }, [e.shouldExit]),
            o(() => {
              n !== e.currentPageId &&
                (r(e.currentPageId), (t.current.value = "1"), e.callback("1"));
            }, [e.currentPageId]);
          const l = () => {
              $([() => u(!0)], 100);
            },
            h = () => {
              $([() => u(!1)], 100, () => setTimeout(e.exitCallback, 500));
            };
          let d = e.questionData.answers,
            p = i.c.createElement(
              "div",
              { className: `${_e} ${a ? "" : xe}` },
              i.c.createElement("span", null, d[0][0]),
              i.c.createElement("span", null, d[0][1]),
              i.c.createElement("input", {
                ref: t,
                type: "range",
                name: "slider",
                min: "0",
                max: "2",
                step: ".01",
                defaultValue: "1",
                onChange: (t) => {
                  e.callback(t.target.value);
                },
              })
            );
          return i.c.createElement("div", null, " ", p, " ");
        },
        Se = "SFoXv4fkYH2p7VDe1G4Iq",
        Oe = "_3jREL9JihB-2v4FmQntA26",
        je = "_3uQFkGjilBrf0edPK14JOD",
        Pe = "NZu4NijKzYSKq9vl3GQAF",
        $e = "_2MXFvGoCuEwprDFz1Bcij9";
      var Ce = (e) => {
          const [t, n] = c(
              new Array(Object.keys(e.questionData.answers).length).fill(!1)
            ),
            [r, a] = c(""),
            [s, u] = c(Object.keys(e.questionData.answers).map(() => !1));
          o(() => {
            l();
          }, []),
            o(() => {
              e.shouldExit && h();
            }, [e.shouldExit]);
          const l = () => {
              $(
                [
                  () =>
                    $(
                      s.map((e, t) => () => {
                        (s[t] = !0), u([...s]);
                      }),
                      [0, 500 / s.length]
                    ),
                ],
                100
              );
            },
            h = () => {
              $(
                [
                  () =>
                    $(
                      s.map((e, t) => () => {
                        (s[t] = !1), u([...s]);
                      }),
                      [0, 400 / s.length]
                    ),
                ],
                100,
                () => setTimeout(e.exitCallback, 500)
              );
            };
          let d = Object.entries(e.questionData.answers)
            .sort()
            .map((o, c) =>
              i.c.createElement(
                "div",
                {
                  key: c,
                  className: `${t[c] ? Pe : ""} ${s[c] ? "" : je}`,
                  onClick: (r) => {
                    let i = [...t].map(() => !1);
                    (i[c] = !0), n(i), a(o[1]);
                    r.target;
                    e.callback(o[0]);
                  },
                },
                i.c.createElement("img", {
                  src: `/ernaehrungs-app/img/questions/${e.questionIndex}/${c}.jpg`,
                }),
                t[c] ? i.c.createElement("p", { className: $e }, r) : ""
              )
            );
          return i.c.createElement(
            i.c.Fragment,
            null,
            i.c.createElement(
              "div",
              { className: `${Se} ${d.length < 4 ? Oe : ""}` },
              d
            )
          );
        },
        qe = n(4),
        Ne = "OE7D3X69t1f-s_Zf3O9f7",
        Ae = "_29Y6Fq7psDhZnmNUMZnpsQ",
        Te = "_1bSvj3YrI54_VEtzGSoZqL";
      const Re = {
        single_choice: Ee,
        slider: ke,
        image_picker: Ce,
        sort: (e) => {
          const [t, n] = c(Object.entries(e.questionData.answers)),
            [r, a] = c(t.map(() => !1));
          o(() => {
            s(), e.callback(t[0][0]);
          }, []),
            o(() => {
              e.shouldExit && u();
            }, [e.shouldExit]);
          const s = () => {
              $(
                [
                  () =>
                    $(
                      r.map((e, t) => () => {
                        (r[t] = !0), a([...r]);
                      }),
                      [0, 500 / r.length]
                    ),
                ],
                100
              );
            },
            u = () => {
              $(
                [
                  () =>
                    $(
                      r.map((e, t) => () => {
                        (r[t] = !1), a([...r]);
                      }),
                      [0, 400 / r.length]
                    ),
                ],
                100,
                () => setTimeout(e.exitCallback, 500)
              );
            },
            l = t.map((e, t) =>
              i.c.createElement(
                qe.b,
                {
                  key: `item-${t + 1}`,
                  draggableId: `item-${t + 1}`,
                  index: t,
                },
                (n, a) =>
                  i.c.createElement(
                    "div",
                    {
                      ref: n.innerRef,
                      ...n.draggableProps,
                      ...n.dragHandleProps,
                      style: {
                        ...n.draggableProps.style,
                        boxShadow: a.isDragging
                          ? "0px 0px 5px #d10339"
                          : "none",
                      },
                      className: `${r[t] ? "" : Te} ${Ae} boxshadow`,
                    },
                    i.c.createElement("span", null, e[1]),
                    i.c.createElement("img", {
                      src: "/ernaehrungs-app/img/menu.png",
                    })
                  )
              )
            );
          return i.c.createElement(
            qe.a,
            {
              onDragEnd: (r, i) => {
                ((r, i) => {
                  if (!r.destination) return;
                  let a = [...t];
                  const [o] = a.splice(r.source.index, 1);
                  a.splice(r.destination.index, 0, o),
                    n(a),
                    e.callback(a[0][0]);
                })(r);
              },
            },
            i.c.createElement(qe.c, { droppableId: "droppable" }, (e, t) =>
              i.c.createElement(
                "div",
                { ref: e.innerRef, ...e.droppableProps, className: Ne },
                l,
                e.placeholder
              )
            )
          );
        },
      };
      var Ie = () => {
          const e = Object(v.h)(),
            [t, n] = c(!1);
          let { id: r } = Object(v.l)();
          if (!Object.keys(ae).includes(r))
            return i.c.createElement(v.i, { to: "/" });
          return i.c.createElement(ye, {
            questionData: ae[r].data,
            questionIndex: r,
            questionType: ae[r].type,
            onSubmit: (t) => {
              let n = {};
              (n[r] = t.join(",")), C(n), e.push("/");
            },
            onCancel: () => {
              e.push("/");
            },
            answerComponent: Re[ae[r].type],
          });
        },
        De = "_3LfS7ejtsf4FAbnFci9BQP",
        Fe = "_2ZsEFiZPgwH3Ywz8BTo2dB",
        Me = "_2u5_0KEi8P6O76fqFOyk51",
        Le = "vE63KlWSkcqdS82qSvUQk",
        Be = "_1hDynrgYU1NzuZZcTLRlGg",
        ze = "iTTUpS3PJk0I9vHEwCJnz";
      class We extends a {
        constructor(e) {
          super(e),
            (this.interval = 60),
            (this.cooldown = 1e3),
            (this.textElement = i.c.createRef()),
            (this.state = { progressPercent: 0, at1: !1, at2: !1, at3: !1 });
        }
        componentDidMount() {
          N(this.textElement.current), this.enterSequence();
        }
        enterSequence() {
          $(
            [
              () => this.setState({ at1: !0 }),
              () => this.setState({ at2: !0 }),
              () => this.setState({ at3: !0 }),
            ],
            [250, 250],
            () => setTimeout(this.startLoading.bind(this), 500)
          );
        }
        exitSequence() {
          $(
            [
              () => this.setState({ at1: !1 }),
              () => this.setState({ at2: !1 }),
              () => this.setState({ at3: !1 }),
            ],
            100,
            () => setTimeout(this.props.onLoad.bind(this), 500)
          );
        }
        startLoading() {
          let e = this.props.loadingTime,
            t = setInterval(() => {
              (e -= this.interval),
                this.setState({
                  progressPercent: P(
                    Math.floor(100 * (1 - e / this.props.loadingTime)),
                    0,
                    100
                  ),
                }),
                e <= 0 && (clearInterval(t), this.exitSequence());
            }, this.interval);
        }
        render() {
          return i.c.createElement(
            "div",
            { className: `${De}` },
            i.c.createElement("img", {
              src: "/ernaehrungs-app/img/BMEL_Logo.svg",
              className: `${Fe} ${Me}`,
            }),
            i.c.createElement(
              "div",
              { className: `${Le} ${this.state.at1 ? "" : Me}` },
              i.c.createElement(
                "div",
                {
                  style: {
                    top: this.state.progressPercent + "%",
                    transition: `top ${this.interval}ms ease`,
                  },
                },
                this.state.progressPercent,
                "%"
              )
            ),
            i.c.createElement("img", {
              src: "/ernaehrungs-app/img/mixer.webp",
              className: `${Be} ${this.state.at2 ? "" : Me}`,
            }),
            i.c.createElement(
              "div",
              {
                className: `${ze} ${this.state.at3 ? "" : Me} dottedBackground`,
              },
              i.c.createElement(
                "div",
                { className: `textbox boxshadow ${this.state.at3 ? "" : Me}` },
                i.c.createElement(
                  "h2",
                  { ref: this.textElement },
                  "Wird berechnet ... "
                )
              )
            )
          );
        }
      }
      var Ue = {
          0: {
            title: "der pragmatische Typ!",
            text: "Dir ist wichtig, dass Essen schmeckt und satt macht. Beim Einkauf bist du unbekümmert und greifst zu Zutaten, die schnell und unkompliziert zubereitet sind. Lust auf Abwechslung? Dann koch dir was: Rezepte und Inspiration gibt’s auf [[www.in-form.de]].",
          },
          1: {
            title: "der genussvolle Typ!",
            text: "Essen ist für dich vor allem eins: Genuss. Der Geschmack steht bei dir an oberster Stelle. Du gönnst dir gerne ein ausgefallenes Menü und legst Wert auf die Qualität. Tipps und gesunde Rezepte findest du auf [[www.inform-rezepte.de]].",
          },
          2: {
            title: "der engagierte Typ!",
            text: "Du legst Wert darauf, dass Essen gut für dich und die Umwelt ist. Du kaufst gerne, was in der Nähe wächst – am liebsten frisch vom Markt, im Hof- oder Bioladen. Mehr Infos zu gesunder und nachhaltiger Ernährung bekommst du auf [[www.bzfe.de]].",
          },
        },
        He = "_2ZX2DFm2mptCN4oXSbmL9O",
        Ve = "_22gGzkSEZL14HjK0HmX8Ed",
        Ze = "_3-XT7jZ7E72_pE8voJg8Rw",
        Ke = "_2fhUtUj77QFg07_3tMsiRy",
        Ge = "wUdzK63yCbAVtiK0OeY66",
        Je = "_69shO_laiBFqKsVA6sgix",
        Xe = "_12p5jditnyr1UVxDGBNn0g",
        Qe = "_3SEKFqDEh4hgs4NciMqqrd",
        Ye = (e) => {
          const t = Object(v.h)(),
            n = s(null),
            [r, a] = c(),
            [u, l] = c(!1),
            [h, d] = c(!1),
            [p, f] = c(!1),
            [m, g] = c(!1);
          o(() => {
            N(n.current), window.scrollTo(0, 0), a(et()), b();
          }, []);
          const b = () => {
            $(
              [() => l(!0), () => d(!0), () => f(!0), () => g(!0)],
              [250, 250],
              () => setTimeout(() => {}, 500)
            );
          };
          return i.c.createElement(
            "div",
            { className: He },
            i.c.createElement(
              "div",
              { className: `${Ve} dottedBackground ${u ? "" : Ke}` },
              i.c.createElement(
                "div",
                { className: `${Ze} textbox boxshadow` },
                i.c.createElement("h2", { ref: n }, "Du bist ...")
              )
            ),
            void 0 !== r
              ? i.c.createElement(
                  i.c.Fragment,
                  null,
                  i.c.createElement(
                    "div",
                    { className: `${Ge} boxshadow ${h ? "" : Ke}` },
                    Ue[r].title
                  ),
                  i.c.createElement(
                    "div",
                    { className: `${Je} ${p ? "" : Ke}` },
                    i.c.createElement("p", {
                      dangerouslySetInnerHTML: {
                        __html: Ue[r].text.replace(
                          /\[\[(.*)\]\]/gm,
                          '<a href="https://$1" target="_blank">$1</a>'
                        ),
                      },
                    })
                  )
                )
              : "",
            i.c.createElement(
              "div",
              { className: `${Xe} question_buttonContainer ${m ? "" : Ke}` },
              i.c.createElement(
                S,
                { to: "/", className: Qe },
                i.c.createElement(
                  "button",
                  {
                    className: "ctaButton boxshadow",
                    onClick: (e) => {
                      var n;
                      e.preventDefault(),
                        (n = () => {
                          t.push("/");
                        }),
                        $(
                          [() => l(!1), () => d(!1), () => f(!1), () => g(!1)],
                          100,
                          () =>
                            setTimeout(() => {
                              n();
                            }, 500)
                        );
                    },
                  },
                  "<"
                )
              ),
              i.c.createElement(
                "button",
                {
                  className: "ctaButton boxshadow",
                  onClick: () => {
                    navigator.share
                      ? navigator
                          .share({
                            title: "Mein Ergebnis",
                            text: `Mein Ergebnis:\n"Du bist ${
                              Ue[r].title
                            }\n${Ue[r].text.replace(/\[\[(.*)\]\]/gm, "$1")}"`,
                          })
                          .catch((e) => {
                            console.error(e);
                          })
                      : alert("sharing is not available");
                  },
                },
                "Teilen"
              )
            )
          );
        };
      const et = () => {
        let e = [];
        Object.keys(ae)
          .map((e, t) => ({ id: e, result: q(e) }))
          .forEach((t) => {
            t.result.split(",").forEach((t) => {
              e.push(Math.round(parseFloat(t)).toString());
            });
          });
        return parseInt(
          ((e) => {
            let t = {},
              n = e[0],
              r = 1;
            for (let i = 0; i < e.length; i++) {
              let a = e[i];
              null == t[a] ? (t[a] = 1) : t[a]++,
                t[a] > r && ((n = a), (r = t[a]));
            }
            return n;
          })(e)
        );
      };
      var tt = (e) => {
          const t = Object(v.h)(),
            [n, r] = c(!0);
          return (
            Object.keys(ae).every((e) => !!q(e)) || t.push("/"),
            n
              ? i.c.createElement(We, {
                  loadingTime: 5e3,
                  onLoad: () => {
                    r(!1);
                  },
                })
              : i.c.createElement(Ye, null)
          );
        },
        nt = (e) => {
          const [t, n] = c("true" === q("userHasVisited"));
          return i.c.createElement(
            y,
            null,
            i.c.createElement(
              v.b,
              null,
              i.c.createElement(
                v.j,
                { path: "/question/:id" },
                i.c.createElement(Ie, null)
              ),
              i.c.createElement(
                v.j,
                { path: "/result" },
                i.c.createElement(tt, null)
              ),
              i.c.createElement(
                v.j,
                { path: "/reset" },
                i.c.createElement(rt, null)
              ),
              i.c.createElement(
                v.j,
                { path: "/:nomatch" },
                i.c.createElement(v.i, { to: "/" })
              ),
              i.c.createElement(
                v.j,
                { path: "/" },
                i.c.createElement(ve, {
                  userHasVisited: t,
                  onIntroductionComplete: () => {
                    C({ userHasVisited: "true" }), n(!0);
                  },
                })
              )
            )
          );
        };
      const rt = () => {
        const e = Object(v.h)();
        return (
          o(() => {
            localStorage.clear(), e.push("/"), e.go(0);
          }, []),
          i.c.createElement(i.c.Fragment, null)
        );
      };
      ({
        url: (function (e) {
          const t = n.p;
          let r = "";
          return (
            (!t || t.indexOf("://") < 0) &&
              (r += window.location.protocol + "//" + window.location.host),
            (r += t || "/"),
            r + e
          );
        })("components/DesktopView/index.js"),
        env: r,
      }.env = r);
      var it = () => (
        console.log(r),
        i.c.createElement(
          "div",
          { style: { textAlign: "center" } },
          i.c.createElement(
            "div",
            { style: { padding: "25%" } },
            i.c.createElement(
              "p",
              { style: { padding: "20px" } },
              "Please view this website on your mobile device",
              " ",
              ee ? "or switch devices in your browsers developer console" : ""
            ),
            i.c.createElement(
              "button",
              {
                style: {
                  padding: "20px 50px",
                  borderWidth: 0,
                  borderRadius: "10px",
                  backgroundColor: "#bbb",
                },
                onClick: () => window.location.reload(),
              },
              "Reload"
            )
          )
        )
      );
      document.fonts.load("bold italic 0px BundesSerif").then(() => {
        h()
          ? (document.documentElement.style.setProperty(
              "--app-height",
              `${window.innerHeight}px`
            ),
            u.a.render(
              i.c.createElement(nt, null),
              document.getElementById("root")
            ))
          : u.a.render(
              i.c.createElement(it, null),
              document.getElementById("root")
            );
      });
    },
  ],
  [[7, 4, 3, 1, 2]],
]);
