function fw(t, r) {
  for (var o = 0; o < r.length; o++) {
    const s = r[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const a in s)
        if (a !== "default" && !(a in t)) {
          const u = Object.getOwnPropertyDescriptor(s, a);
          u &&
            Object.defineProperty(
              t,
              a,
              u.get ? u : { enumerable: !0, get: () => s[a] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = o(a);
    fetch(a.href, u);
  }
})();
function Fg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Du = { exports: {} },
  si = {},
  Iu = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh;
function pw() {
  if (Vh) return ke;
  Vh = 1;
  var t = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function y(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (v && j[v]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    S = {};
  function T(j, F, he) {
    (this.props = j),
      (this.context = F),
      (this.refs = S),
      (this.updater = he || C);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (j, F) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, j, F, "setState");
    }),
    (T.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    });
  function E() {}
  E.prototype = T.prototype;
  function b(j, F, he) {
    (this.props = j),
      (this.context = F),
      (this.refs = S),
      (this.updater = he || C);
  }
  var N = (b.prototype = new E());
  (N.constructor = b), P(N, T.prototype), (N.isPureReactComponent = !0);
  var L = Array.isArray,
    I = Object.prototype.hasOwnProperty,
    B = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(j, F, he) {
    var pe,
      we = {},
      xe = null,
      Q = null;
    if (F != null)
      for (pe in (F.ref !== void 0 && (Q = F.ref),
      F.key !== void 0 && (xe = "" + F.key),
      F))
        I.call(F, pe) && !z.hasOwnProperty(pe) && (we[pe] = F[pe]);
    var se = arguments.length - 2;
    if (se === 1) we.children = he;
    else if (1 < se) {
      for (var ye = Array(se), ae = 0; ae < se; ae++)
        ye[ae] = arguments[ae + 2];
      we.children = ye;
    }
    if (j && j.defaultProps)
      for (pe in ((se = j.defaultProps), se))
        we[pe] === void 0 && (we[pe] = se[pe]);
    return {
      $$typeof: t,
      type: j,
      key: xe,
      ref: Q,
      props: we,
      _owner: B.current,
    };
  }
  function te(j, F) {
    return {
      $$typeof: t,
      type: j.type,
      key: F,
      ref: j.ref,
      props: j.props,
      _owner: j._owner,
    };
  }
  function oe(j) {
    return typeof j == "object" && j !== null && j.$$typeof === t;
  }
  function ge(j) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (he) {
        return F[he];
      })
    );
  }
  var Z = /\/+/g;
  function fe(j, F) {
    return typeof j == "object" && j !== null && j.key != null
      ? ge("" + j.key)
      : F.toString(36);
  }
  function le(j, F, he, pe, we) {
    var xe = typeof j;
    (xe === "undefined" || xe === "boolean") && (j = null);
    var Q = !1;
    if (j === null) Q = !0;
    else
      switch (xe) {
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case t:
            case r:
              Q = !0;
          }
      }
    if (Q)
      return (
        (Q = j),
        (we = we(Q)),
        (j = pe === "" ? "." + fe(Q, 0) : pe),
        L(we)
          ? ((he = ""),
            j != null && (he = j.replace(Z, "$&/") + "/"),
            le(we, F, he, "", function (ae) {
              return ae;
            }))
          : we != null &&
            (oe(we) &&
              (we = te(
                we,
                he +
                  (!we.key || (Q && Q.key === we.key)
                    ? ""
                    : ("" + we.key).replace(Z, "$&/") + "/") +
                  j,
              )),
            F.push(we)),
        1
      );
    if (((Q = 0), (pe = pe === "" ? "." : pe + ":"), L(j)))
      for (var se = 0; se < j.length; se++) {
        xe = j[se];
        var ye = pe + fe(xe, se);
        Q += le(xe, F, he, ye, we);
      }
    else if (((ye = y(j)), typeof ye == "function"))
      for (j = ye.call(j), se = 0; !(xe = j.next()).done; )
        (xe = xe.value), (ye = pe + fe(xe, se++)), (Q += le(xe, F, he, ye, we));
    else if (xe === "object")
      throw (
        ((F = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(j).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return Q;
  }
  function Ce(j, F, he) {
    if (j == null) return j;
    var pe = [],
      we = 0;
    return (
      le(j, pe, "", "", function (xe) {
        return F.call(he, xe, we++);
      }),
      pe
    );
  }
  function ie(j) {
    if (j._status === -1) {
      var F = j._result;
      (F = F()),
        F.then(
          function (he) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 1), (j._result = he));
          },
          function (he) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 2), (j._result = he));
          },
        ),
        j._status === -1 && ((j._status = 0), (j._result = F));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var X = { current: null },
    V = { transition: null },
    Y = {
      ReactCurrentDispatcher: X,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: B,
    };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ke.Children = {
      map: Ce,
      forEach: function (j, F, he) {
        Ce(
          j,
          function () {
            F.apply(this, arguments);
          },
          he,
        );
      },
      count: function (j) {
        var F = 0;
        return (
          Ce(j, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (j) {
        return (
          Ce(j, function (F) {
            return F;
          }) || []
        );
      },
      only: function (j) {
        if (!oe(j))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return j;
      },
    }),
    (ke.Component = T),
    (ke.Fragment = o),
    (ke.Profiler = a),
    (ke.PureComponent = b),
    (ke.StrictMode = s),
    (ke.Suspense = p),
    (ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (ke.act = K),
    (ke.cloneElement = function (j, F, he) {
      if (j == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            j +
            ".",
        );
      var pe = P({}, j.props),
        we = j.key,
        xe = j.ref,
        Q = j._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((xe = F.ref), (Q = B.current)),
          F.key !== void 0 && (we = "" + F.key),
          j.type && j.type.defaultProps)
        )
          var se = j.type.defaultProps;
        for (ye in F)
          I.call(F, ye) &&
            !z.hasOwnProperty(ye) &&
            (pe[ye] = F[ye] === void 0 && se !== void 0 ? se[ye] : F[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) pe.children = he;
      else if (1 < ye) {
        se = Array(ye);
        for (var ae = 0; ae < ye; ae++) se[ae] = arguments[ae + 2];
        pe.children = se;
      }
      return {
        $$typeof: t,
        type: j.type,
        key: we,
        ref: xe,
        props: pe,
        _owner: Q,
      };
    }),
    (ke.createContext = function (j) {
      return (
        (j = {
          $$typeof: c,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (j.Provider = { $$typeof: u, _context: j }),
        (j.Consumer = j)
      );
    }),
    (ke.createElement = W),
    (ke.createFactory = function (j) {
      var F = W.bind(null, j);
      return (F.type = j), F;
    }),
    (ke.createRef = function () {
      return { current: null };
    }),
    (ke.forwardRef = function (j) {
      return { $$typeof: d, render: j };
    }),
    (ke.isValidElement = oe),
    (ke.lazy = function (j) {
      return { $$typeof: g, _payload: { _status: -1, _result: j }, _init: ie };
    }),
    (ke.memo = function (j, F) {
      return { $$typeof: m, type: j, compare: F === void 0 ? null : F };
    }),
    (ke.startTransition = function (j) {
      var F = V.transition;
      V.transition = {};
      try {
        j();
      } finally {
        V.transition = F;
      }
    }),
    (ke.unstable_act = K),
    (ke.useCallback = function (j, F) {
      return X.current.useCallback(j, F);
    }),
    (ke.useContext = function (j) {
      return X.current.useContext(j);
    }),
    (ke.useDebugValue = function () {}),
    (ke.useDeferredValue = function (j) {
      return X.current.useDeferredValue(j);
    }),
    (ke.useEffect = function (j, F) {
      return X.current.useEffect(j, F);
    }),
    (ke.useId = function () {
      return X.current.useId();
    }),
    (ke.useImperativeHandle = function (j, F, he) {
      return X.current.useImperativeHandle(j, F, he);
    }),
    (ke.useInsertionEffect = function (j, F) {
      return X.current.useInsertionEffect(j, F);
    }),
    (ke.useLayoutEffect = function (j, F) {
      return X.current.useLayoutEffect(j, F);
    }),
    (ke.useMemo = function (j, F) {
      return X.current.useMemo(j, F);
    }),
    (ke.useReducer = function (j, F, he) {
      return X.current.useReducer(j, F, he);
    }),
    (ke.useRef = function (j) {
      return X.current.useRef(j);
    }),
    (ke.useState = function (j) {
      return X.current.useState(j);
    }),
    (ke.useSyncExternalStore = function (j, F, he) {
      return X.current.useSyncExternalStore(j, F, he);
    }),
    (ke.useTransition = function () {
      return X.current.useTransition();
    }),
    (ke.version = "18.3.1"),
    ke
  );
}
var Fh;
function $c() {
  return Fh || ((Fh = 1), (Iu.exports = pw())), Iu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zh;
function hw() {
  if (zh) return si;
  zh = 1;
  var t = $c(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, p, m) {
    var g,
      v = {},
      y = null,
      C = null;
    m !== void 0 && (y = "" + m),
      p.key !== void 0 && (y = "" + p.key),
      p.ref !== void 0 && (C = p.ref);
    for (g in p) s.call(p, g) && !u.hasOwnProperty(g) && (v[g] = p[g]);
    if (d && d.defaultProps)
      for (g in ((p = d.defaultProps), p)) v[g] === void 0 && (v[g] = p[g]);
    return {
      $$typeof: r,
      type: d,
      key: y,
      ref: C,
      props: v,
      _owner: a.current,
    };
  }
  return (si.Fragment = o), (si.jsx = c), (si.jsxs = c), si;
}
var Bh;
function mw() {
  return Bh || ((Bh = 1), (Du.exports = hw())), Du.exports;
}
var k = mw(),
  w = $c();
const Hn = Fg(w),
  gw = fw({ __proto__: null, default: Hn }, [w]);
var Ks = {},
  Ou = { exports: {} },
  yt = {},
  _u = { exports: {} },
  Vu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uh;
function vw() {
  return (
    Uh ||
      ((Uh = 1),
      (function (t) {
        function r(V, Y) {
          var K = V.length;
          V.push(Y);
          e: for (; 0 < K; ) {
            var j = (K - 1) >>> 1,
              F = V[j];
            if (0 < a(F, Y)) (V[j] = Y), (V[K] = F), (K = j);
            else break e;
          }
        }
        function o(V) {
          return V.length === 0 ? null : V[0];
        }
        function s(V) {
          if (V.length === 0) return null;
          var Y = V[0],
            K = V.pop();
          if (K !== Y) {
            V[0] = K;
            e: for (var j = 0, F = V.length, he = F >>> 1; j < he; ) {
              var pe = 2 * (j + 1) - 1,
                we = V[pe],
                xe = pe + 1,
                Q = V[xe];
              if (0 > a(we, K))
                xe < F && 0 > a(Q, we)
                  ? ((V[j] = Q), (V[xe] = K), (j = xe))
                  : ((V[j] = we), (V[pe] = K), (j = pe));
              else if (xe < F && 0 > a(Q, K)) (V[j] = Q), (V[xe] = K), (j = xe);
              else break e;
            }
          }
          return Y;
        }
        function a(V, Y) {
          var K = V.sortIndex - Y.sortIndex;
          return K !== 0 ? K : V.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          t.unstable_now = function () {
            return c.now() - d;
          };
        }
        var p = [],
          m = [],
          g = 1,
          v = null,
          y = 3,
          C = !1,
          P = !1,
          S = !1,
          T = typeof setTimeout == "function" ? setTimeout : null,
          E = typeof clearTimeout == "function" ? clearTimeout : null,
          b = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function N(V) {
          for (var Y = o(m); Y !== null; ) {
            if (Y.callback === null) s(m);
            else if (Y.startTime <= V)
              s(m), (Y.sortIndex = Y.expirationTime), r(p, Y);
            else break;
            Y = o(m);
          }
        }
        function L(V) {
          if (((S = !1), N(V), !P))
            if (o(p) !== null) (P = !0), ie(I);
            else {
              var Y = o(m);
              Y !== null && X(L, Y.startTime - V);
            }
        }
        function I(V, Y) {
          (P = !1), S && ((S = !1), E(W), (W = -1)), (C = !0);
          var K = y;
          try {
            for (
              N(Y), v = o(p);
              v !== null && (!(v.expirationTime > Y) || (V && !ge()));

            ) {
              var j = v.callback;
              if (typeof j == "function") {
                (v.callback = null), (y = v.priorityLevel);
                var F = j(v.expirationTime <= Y);
                (Y = t.unstable_now()),
                  typeof F == "function"
                    ? (v.callback = F)
                    : v === o(p) && s(p),
                  N(Y);
              } else s(p);
              v = o(p);
            }
            if (v !== null) var he = !0;
            else {
              var pe = o(m);
              pe !== null && X(L, pe.startTime - Y), (he = !1);
            }
            return he;
          } finally {
            (v = null), (y = K), (C = !1);
          }
        }
        var B = !1,
          z = null,
          W = -1,
          te = 5,
          oe = -1;
        function ge() {
          return !(t.unstable_now() - oe < te);
        }
        function Z() {
          if (z !== null) {
            var V = t.unstable_now();
            oe = V;
            var Y = !0;
            try {
              Y = z(!0, V);
            } finally {
              Y ? fe() : ((B = !1), (z = null));
            }
          } else B = !1;
        }
        var fe;
        if (typeof b == "function")
          fe = function () {
            b(Z);
          };
        else if (typeof MessageChannel < "u") {
          var le = new MessageChannel(),
            Ce = le.port2;
          (le.port1.onmessage = Z),
            (fe = function () {
              Ce.postMessage(null);
            });
        } else
          fe = function () {
            T(Z, 0);
          };
        function ie(V) {
          (z = V), B || ((B = !0), fe());
        }
        function X(V, Y) {
          W = T(function () {
            V(t.unstable_now());
          }, Y);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            P || C || ((P = !0), ie(I));
          }),
          (t.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (te = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return o(p);
          }),
          (t.unstable_next = function (V) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = y;
            }
            var K = y;
            y = Y;
            try {
              return V();
            } finally {
              y = K;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (V, Y) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var K = y;
            y = V;
            try {
              return Y();
            } finally {
              y = K;
            }
          }),
          (t.unstable_scheduleCallback = function (V, Y, K) {
            var j = t.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? j + K : j))
                : (K = j),
              V)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = K + F),
              (V = {
                id: g++,
                callback: Y,
                priorityLevel: V,
                startTime: K,
                expirationTime: F,
                sortIndex: -1,
              }),
              K > j
                ? ((V.sortIndex = K),
                  r(m, V),
                  o(p) === null &&
                    V === o(m) &&
                    (S ? (E(W), (W = -1)) : (S = !0), X(L, K - j)))
                : ((V.sortIndex = F), r(p, V), P || C || ((P = !0), ie(I))),
              V
            );
          }),
          (t.unstable_shouldYield = ge),
          (t.unstable_wrapCallback = function (V) {
            var Y = y;
            return function () {
              var K = y;
              y = Y;
              try {
                return V.apply(this, arguments);
              } finally {
                y = K;
              }
            };
          });
      })(Vu)),
    Vu
  );
}
var $h;
function yw() {
  return $h || (($h = 1), (_u.exports = vw())), _u.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wh;
function xw() {
  if (Wh) return yt;
  Wh = 1;
  var t = $c(),
    r = yw();
  function o(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        i = 1;
      i < arguments.length;
      i++
    )
      n += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    a = {};
  function u(e, n) {
    c(e, n), c(e + "Capture", n);
  }
  function c(e, n) {
    for (a[e] = n, e = 0; e < n.length; e++) s.add(n[e]);
  }
  var d = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
  function y(e) {
    return p.call(v, e)
      ? !0
      : p.call(g, e)
        ? !1
        : m.test(e)
          ? (v[e] = !0)
          : ((g[e] = !0), !1);
  }
  function C(e, n, i, l) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function P(e, n, i, l) {
    if (n === null || typeof n > "u" || C(e, n, i, l)) return !0;
    if (l) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function S(e, n, i, l, f, h, x) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = l),
      (this.attributeNamespace = f),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = h),
      (this.removeEmptyString = x);
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      T[e] = new S(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      T[n] = new S(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        T[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      T[e] = new S(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        T[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      T[e] = new S(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      T[e] = new S(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      T[e] = new S(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      T[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var E = /[\-:]([a-z])/g;
  function b(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(E, b);
      T[n] = new S(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(E, b);
        T[n] = new S(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(E, b);
      T[n] = new S(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      T[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (T.xlinkHref = new S(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      T[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function N(e, n, i, l) {
    var f = T.hasOwnProperty(n) ? T[n] : null;
    (f !== null
      ? f.type !== 0
      : l ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (P(n, i, f, l) && (i = null),
      l || f === null
        ? y(n) &&
          (i === null ? e.removeAttribute(n) : e.setAttribute(n, "" + i))
        : f.mustUseProperty
          ? (e[f.propertyName] = i === null ? (f.type === 3 ? !1 : "") : i)
          : ((n = f.attributeName),
            (l = f.attributeNamespace),
            i === null
              ? e.removeAttribute(n)
              : ((f = f.type),
                (i = f === 3 || (f === 4 && i === !0) ? "" : "" + i),
                l ? e.setAttributeNS(l, n, i) : e.setAttribute(n, i))));
  }
  var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    I = Symbol.for("react.element"),
    B = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    W = Symbol.for("react.strict_mode"),
    te = Symbol.for("react.profiler"),
    oe = Symbol.for("react.provider"),
    ge = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    fe = Symbol.for("react.suspense"),
    le = Symbol.for("react.suspense_list"),
    Ce = Symbol.for("react.memo"),
    ie = Symbol.for("react.lazy"),
    X = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (V && e[V]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var K = Object.assign,
    j;
  function F(e) {
    if (j === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        j = (n && n[1]) || "";
      }
    return (
      `
` +
      j +
      e
    );
  }
  var he = !1;
  function pe(e, n) {
    if (!e || he) return "";
    he = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (_) {
            var l = _;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (_) {
            l = _;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          l = _;
        }
        e();
      }
    } catch (_) {
      if (_ && l && typeof _.stack == "string") {
        for (
          var f = _.stack.split(`
`),
            h = l.stack.split(`
`),
            x = f.length - 1,
            R = h.length - 1;
          1 <= x && 0 <= R && f[x] !== h[R];

        )
          R--;
        for (; 1 <= x && 0 <= R; x--, R--)
          if (f[x] !== h[R]) {
            if (x !== 1 || R !== 1)
              do
                if ((x--, R--, 0 > R || f[x] !== h[R])) {
                  var A =
                    `
` + f[x].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", e.displayName)),
                    A
                  );
                }
              while (1 <= x && 0 <= R);
            break;
          }
      }
    } finally {
      (he = !1), (Error.prepareStackTrace = i);
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function we(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = pe(e.type, !1)), e;
      case 11:
        return (e = pe(e.type.render, !1)), e;
      case 1:
        return (e = pe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case B:
        return "Portal";
      case te:
        return "Profiler";
      case W:
        return "StrictMode";
      case fe:
        return "Suspense";
      case le:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ge:
          return (e.displayName || "Context") + ".Consumer";
        case oe:
          return (e._context.displayName || "Context") + ".Provider";
        case Z:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ce:
          return (
            (n = e.displayName || null), n !== null ? n : xe(e.type) || "Memo"
          );
        case ie:
          (n = e._payload), (e = e._init);
          try {
            return xe(e(n));
          } catch {}
      }
    return null;
  }
  function Q(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return xe(n);
      case 8:
        return n === W ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ye(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function ae(e) {
    var n = ye(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      l = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var f = i.get,
        h = i.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (x) {
            (l = "" + x), h.call(this, x);
          },
        }),
        Object.defineProperty(e, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (x) {
            l = "" + x;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function ve(e) {
    e._valueTracker || (e._valueTracker = ae(e));
  }
  function Te(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      l = "";
    return (
      e && (l = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function Ge(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ft(e, n) {
    var i = n.checked;
    return K({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Sn(e, n) {
    var i = n.defaultValue == null ? "" : n.defaultValue,
      l = n.checked != null ? n.checked : n.defaultChecked;
    (i = se(n.value != null ? n.value : i)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: i,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Cn(e, n) {
    (n = n.checked), n != null && N(e, "checked", n, !1);
  }
  function rn(e, n) {
    Cn(e, n);
    var i = se(n.value),
      l = n.type;
    if (i != null)
      l === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? kn(e, n.type, i)
      : n.hasOwnProperty("defaultValue") && kn(e, n.type, se(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function _i(e, n, i) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var l = n.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        i || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i);
  }
  function kn(e, n, i) {
    (n !== "number" || Ge(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var So = Array.isArray;
  function Tr(e, n, i, l) {
    if (((e = e.options), n)) {
      n = {};
      for (var f = 0; f < i.length; f++) n["$" + i[f]] = !0;
      for (i = 0; i < e.length; i++)
        (f = n.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== f && (e[i].selected = f),
          f && l && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + se(i), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === i) {
          (e[f].selected = !0), l && (e[f].defaultSelected = !0);
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Wa(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return K({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Gd(e, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(o(92));
        if (So(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (i = n);
    }
    e._wrapperState = { initialValue: se(i) };
  }
  function Yd(e, n) {
    var i = se(n.value),
      l = se(n.defaultValue);
    i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      l != null && (e.defaultValue = "" + l);
  }
  function Xd(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Qd(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ha(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Qd(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Vi,
    qd = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, i, l, f) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, i, l, f);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          Vi = Vi || document.createElement("div"),
            Vi.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = Vi.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Co(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var ko = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    g1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ko).forEach(function (e) {
    g1.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (ko[n] = ko[e]);
    });
  });
  function Zd(e, n, i) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : i || typeof n != "number" || n === 0 || (ko.hasOwnProperty(e) && ko[e])
        ? ("" + n).trim()
        : n + "px";
  }
  function Jd(e, n) {
    e = e.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var l = i.indexOf("--") === 0,
          f = Zd(i, n[i], l);
        i === "float" && (i = "cssFloat"), l ? e.setProperty(i, f) : (e[i] = f);
      }
  }
  var v1 = K(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ka(e, n) {
    if (n) {
      if (v1[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(o(62));
    }
  }
  function Ga(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ya = null;
  function Xa(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Qa = null,
    Pr = null,
    Er = null;
  function ef(e) {
    if ((e = Ho(e))) {
      if (typeof Qa != "function") throw Error(o(280));
      var n = e.stateNode;
      n && ((n = as(n)), Qa(e.stateNode, e.type, n));
    }
  }
  function tf(e) {
    Pr ? (Er ? Er.push(e) : (Er = [e])) : (Pr = e);
  }
  function nf() {
    if (Pr) {
      var e = Pr,
        n = Er;
      if (((Er = Pr = null), ef(e), n)) for (e = 0; e < n.length; e++) ef(n[e]);
    }
  }
  function rf(e, n) {
    return e(n);
  }
  function of() {}
  var qa = !1;
  function sf(e, n, i) {
    if (qa) return e(n, i);
    qa = !0;
    try {
      return rf(e, n, i);
    } finally {
      (qa = !1), (Pr !== null || Er !== null) && (of(), nf());
    }
  }
  function To(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var l = as(i);
    if (l === null) return null;
    i = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(o(231, n, typeof i));
    return i;
  }
  var Za = !1;
  if (d)
    try {
      var Po = {};
      Object.defineProperty(Po, "passive", {
        get: function () {
          Za = !0;
        },
      }),
        window.addEventListener("test", Po, Po),
        window.removeEventListener("test", Po, Po);
    } catch {
      Za = !1;
    }
  function y1(e, n, i, l, f, h, x, R, A) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, _);
    } catch ($) {
      this.onError($);
    }
  }
  var Eo = !1,
    Fi = null,
    zi = !1,
    Ja = null,
    x1 = {
      onError: function (e) {
        (Eo = !0), (Fi = e);
      },
    };
  function w1(e, n, i, l, f, h, x, R, A) {
    (Eo = !1), (Fi = null), y1.apply(x1, arguments);
  }
  function S1(e, n, i, l, f, h, x, R, A) {
    if ((w1.apply(this, arguments), Eo)) {
      if (Eo) {
        var _ = Fi;
        (Eo = !1), (Fi = null);
      } else throw Error(o(198));
      zi || ((zi = !0), (Ja = _));
    }
  }
  function rr(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (i = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function af(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function lf(e) {
    if (rr(e) !== e) throw Error(o(188));
  }
  function C1(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = rr(e)), n === null)) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var i = e, l = n; ; ) {
      var f = i.return;
      if (f === null) break;
      var h = f.alternate;
      if (h === null) {
        if (((l = f.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === i) return lf(f), e;
          if (h === l) return lf(f), n;
          h = h.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== l.return) (i = f), (l = h);
      else {
        for (var x = !1, R = f.child; R; ) {
          if (R === i) {
            (x = !0), (i = f), (l = h);
            break;
          }
          if (R === l) {
            (x = !0), (l = f), (i = h);
            break;
          }
          R = R.sibling;
        }
        if (!x) {
          for (R = h.child; R; ) {
            if (R === i) {
              (x = !0), (i = h), (l = f);
              break;
            }
            if (R === l) {
              (x = !0), (l = h), (i = f);
              break;
            }
            R = R.sibling;
          }
          if (!x) throw Error(o(189));
        }
      }
      if (i.alternate !== l) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? e : n;
  }
  function uf(e) {
    return (e = C1(e)), e !== null ? cf(e) : null;
  }
  function cf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = cf(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var df = r.unstable_scheduleCallback,
    ff = r.unstable_cancelCallback,
    k1 = r.unstable_shouldYield,
    T1 = r.unstable_requestPaint,
    We = r.unstable_now,
    P1 = r.unstable_getCurrentPriorityLevel,
    el = r.unstable_ImmediatePriority,
    pf = r.unstable_UserBlockingPriority,
    Bi = r.unstable_NormalPriority,
    E1 = r.unstable_LowPriority,
    hf = r.unstable_IdlePriority,
    Ui = null,
    Kt = null;
  function R1(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function")
      try {
        Kt.onCommitFiberRoot(Ui, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var It = Math.clz32 ? Math.clz32 : N1,
    b1 = Math.log,
    A1 = Math.LN2;
  function N1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((b1(e) / A1) | 0)) | 0;
  }
  var $i = 64,
    Wi = 4194304;
  function Ro(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Hi(e, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var l = 0,
      f = e.suspendedLanes,
      h = e.pingedLanes,
      x = i & 268435455;
    if (x !== 0) {
      var R = x & ~f;
      R !== 0 ? (l = Ro(R)) : ((h &= x), h !== 0 && (l = Ro(h)));
    } else (x = i & ~f), x !== 0 ? (l = Ro(x)) : h !== 0 && (l = Ro(h));
    if (l === 0) return 0;
    if (
      n !== 0 &&
      n !== l &&
      !(n & f) &&
      ((f = l & -l), (h = n & -n), f >= h || (f === 16 && (h & 4194240) !== 0))
    )
      return n;
    if ((l & 4 && (l |= i & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= l; 0 < n; )
        (i = 31 - It(n)), (f = 1 << i), (l |= e[i]), (n &= ~f);
    return l;
  }
  function M1(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function j1(e, n) {
    for (
      var i = e.suspendedLanes,
        l = e.pingedLanes,
        f = e.expirationTimes,
        h = e.pendingLanes;
      0 < h;

    ) {
      var x = 31 - It(h),
        R = 1 << x,
        A = f[x];
      A === -1
        ? (!(R & i) || R & l) && (f[x] = M1(R, n))
        : A <= n && (e.expiredLanes |= R),
        (h &= ~R);
    }
  }
  function tl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function mf() {
    var e = $i;
    return ($i <<= 1), !($i & 4194240) && ($i = 64), e;
  }
  function nl(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function bo(e, n, i) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - It(n)),
      (e[n] = i);
  }
  function L1(e, n) {
    var i = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var f = 31 - It(i),
        h = 1 << f;
      (n[f] = 0), (l[f] = -1), (e[f] = -1), (i &= ~h);
    }
  }
  function rl(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var l = 31 - It(i),
        f = 1 << l;
      (f & n) | (e[l] & n) && (e[l] |= n), (i &= ~f);
    }
  }
  var Re = 0;
  function gf(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var vf,
    ol,
    yf,
    xf,
    wf,
    il = !1,
    Ki = [],
    Tn = null,
    Pn = null,
    En = null,
    Ao = new Map(),
    No = new Map(),
    Rn = [],
    D1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Sf(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Pn = null;
        break;
      case "mouseover":
      case "mouseout":
        En = null;
        break;
      case "pointerover":
      case "pointerout":
        Ao.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        No.delete(n.pointerId);
    }
  }
  function Mo(e, n, i, l, f, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: h,
          targetContainers: [f],
        }),
        n !== null && ((n = Ho(n)), n !== null && ol(n)),
        e)
      : ((e.eventSystemFlags |= l),
        (n = e.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        e);
  }
  function I1(e, n, i, l, f) {
    switch (n) {
      case "focusin":
        return (Tn = Mo(Tn, e, n, i, l, f)), !0;
      case "dragenter":
        return (Pn = Mo(Pn, e, n, i, l, f)), !0;
      case "mouseover":
        return (En = Mo(En, e, n, i, l, f)), !0;
      case "pointerover":
        var h = f.pointerId;
        return Ao.set(h, Mo(Ao.get(h) || null, e, n, i, l, f)), !0;
      case "gotpointercapture":
        return (
          (h = f.pointerId), No.set(h, Mo(No.get(h) || null, e, n, i, l, f)), !0
        );
    }
    return !1;
  }
  function Cf(e) {
    var n = or(e.target);
    if (n !== null) {
      var i = rr(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = af(i)), n !== null)) {
            (e.blockedOn = n),
              wf(e.priority, function () {
                yf(i);
              });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = al(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(i.type, i);
        (Ya = l), i.target.dispatchEvent(l), (Ya = null);
      } else return (n = Ho(i)), n !== null && ol(n), (e.blockedOn = i), !1;
      n.shift();
    }
    return !0;
  }
  function kf(e, n, i) {
    Gi(e) && i.delete(n);
  }
  function O1() {
    (il = !1),
      Tn !== null && Gi(Tn) && (Tn = null),
      Pn !== null && Gi(Pn) && (Pn = null),
      En !== null && Gi(En) && (En = null),
      Ao.forEach(kf),
      No.forEach(kf);
  }
  function jo(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      il ||
        ((il = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, O1)));
  }
  function Lo(e) {
    function n(f) {
      return jo(f, e);
    }
    if (0 < Ki.length) {
      jo(Ki[0], e);
      for (var i = 1; i < Ki.length; i++) {
        var l = Ki[i];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      Tn !== null && jo(Tn, e),
        Pn !== null && jo(Pn, e),
        En !== null && jo(En, e),
        Ao.forEach(n),
        No.forEach(n),
        i = 0;
      i < Rn.length;
      i++
    )
      (l = Rn[i]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Rn.length && ((i = Rn[0]), i.blockedOn === null); )
      Cf(i), i.blockedOn === null && Rn.shift();
  }
  var Rr = L.ReactCurrentBatchConfig,
    Yi = !0;
  function _1(e, n, i, l) {
    var f = Re,
      h = Rr.transition;
    Rr.transition = null;
    try {
      (Re = 1), sl(e, n, i, l);
    } finally {
      (Re = f), (Rr.transition = h);
    }
  }
  function V1(e, n, i, l) {
    var f = Re,
      h = Rr.transition;
    Rr.transition = null;
    try {
      (Re = 4), sl(e, n, i, l);
    } finally {
      (Re = f), (Rr.transition = h);
    }
  }
  function sl(e, n, i, l) {
    if (Yi) {
      var f = al(e, n, i, l);
      if (f === null) Tl(e, n, l, Xi, i), Sf(e, l);
      else if (I1(f, e, n, i, l)) l.stopPropagation();
      else if ((Sf(e, l), n & 4 && -1 < D1.indexOf(e))) {
        for (; f !== null; ) {
          var h = Ho(f);
          if (
            (h !== null && vf(h),
            (h = al(e, n, i, l)),
            h === null && Tl(e, n, l, Xi, i),
            h === f)
          )
            break;
          f = h;
        }
        f !== null && l.stopPropagation();
      } else Tl(e, n, l, null, i);
    }
  }
  var Xi = null;
  function al(e, n, i, l) {
    if (((Xi = null), (e = Xa(l)), (e = or(e)), e !== null))
      if (((n = rr(e)), n === null)) e = null;
      else if (((i = n.tag), i === 13)) {
        if (((e = af(n)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Xi = e), null;
  }
  function Tf(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (P1()) {
          case el:
            return 1;
          case pf:
            return 4;
          case Bi:
          case E1:
            return 16;
          case hf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bn = null,
    ll = null,
    Qi = null;
  function Pf() {
    if (Qi) return Qi;
    var e,
      n = ll,
      i = n.length,
      l,
      f = "value" in bn ? bn.value : bn.textContent,
      h = f.length;
    for (e = 0; e < i && n[e] === f[e]; e++);
    var x = i - e;
    for (l = 1; l <= x && n[i - l] === f[h - l]; l++);
    return (Qi = f.slice(e, 1 < l ? 1 - l : void 0));
  }
  function qi(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zi() {
    return !0;
  }
  function Ef() {
    return !1;
  }
  function xt(e) {
    function n(i, l, f, h, x) {
      (this._reactName = i),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = h),
        (this.target = x),
        (this.currentTarget = null);
      for (var R in e)
        e.hasOwnProperty(R) && ((i = e[R]), (this[R] = i ? i(h) : h[R]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? Zi
          : Ef),
        (this.isPropagationStopped = Ef),
        this
      );
    }
    return (
      K(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Zi));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Zi));
        },
        persist: function () {},
        isPersistent: Zi,
      }),
      n
    );
  }
  var br = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ul = xt(br),
    Do = K({}, br, { view: 0, detail: 0 }),
    F1 = xt(Do),
    cl,
    dl,
    Io,
    Ji = K({}, Do, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Io &&
              (Io && e.type === "mousemove"
                ? ((cl = e.screenX - Io.screenX), (dl = e.screenY - Io.screenY))
                : (dl = cl = 0),
              (Io = e)),
            cl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : dl;
      },
    }),
    Rf = xt(Ji),
    z1 = K({}, Ji, { dataTransfer: 0 }),
    B1 = xt(z1),
    U1 = K({}, Do, { relatedTarget: 0 }),
    fl = xt(U1),
    $1 = K({}, br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    W1 = xt($1),
    H1 = K({}, br, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    K1 = xt(H1),
    G1 = K({}, br, { data: 0 }),
    bf = xt(G1),
    Y1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    X1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Q1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function q1(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = Q1[e])
        ? !!n[e]
        : !1;
  }
  function pl() {
    return q1;
  }
  var Z1 = K({}, Do, {
      key: function (e) {
        if (e.key) {
          var n = Y1[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? X1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pl,
      charCode: function (e) {
        return e.type === "keypress" ? qi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    J1 = xt(Z1),
    ex = K({}, Ji, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Af = xt(ex),
    tx = K({}, Do, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pl,
    }),
    nx = xt(tx),
    rx = K({}, br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ox = xt(rx),
    ix = K({}, Ji, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    sx = xt(ix),
    ax = [9, 13, 27, 32],
    hl = d && "CompositionEvent" in window,
    Oo = null;
  d && "documentMode" in document && (Oo = document.documentMode);
  var lx = d && "TextEvent" in window && !Oo,
    Nf = d && (!hl || (Oo && 8 < Oo && 11 >= Oo)),
    Mf = " ",
    jf = !1;
  function Lf(e, n) {
    switch (e) {
      case "keyup":
        return ax.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Df(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ar = !1;
  function ux(e, n) {
    switch (e) {
      case "compositionend":
        return Df(n);
      case "keypress":
        return n.which !== 32 ? null : ((jf = !0), Mf);
      case "textInput":
        return (e = n.data), e === Mf && jf ? null : e;
      default:
        return null;
    }
  }
  function cx(e, n) {
    if (Ar)
      return e === "compositionend" || (!hl && Lf(e, n))
        ? ((e = Pf()), (Qi = ll = bn = null), (Ar = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Nf && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var dx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function If(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!dx[e.type] : n === "textarea";
  }
  function Of(e, n, i, l) {
    tf(l),
      (n = os(n, "onChange")),
      0 < n.length &&
        ((i = new ul("onChange", "change", null, i, l)),
        e.push({ event: i, listeners: n }));
  }
  var _o = null,
    Vo = null;
  function fx(e) {
    ep(e, 0);
  }
  function es(e) {
    var n = Dr(e);
    if (Te(n)) return e;
  }
  function px(e, n) {
    if (e === "change") return n;
  }
  var _f = !1;
  if (d) {
    var ml;
    if (d) {
      var gl = "oninput" in document;
      if (!gl) {
        var Vf = document.createElement("div");
        Vf.setAttribute("oninput", "return;"),
          (gl = typeof Vf.oninput == "function");
      }
      ml = gl;
    } else ml = !1;
    _f = ml && (!document.documentMode || 9 < document.documentMode);
  }
  function Ff() {
    _o && (_o.detachEvent("onpropertychange", zf), (Vo = _o = null));
  }
  function zf(e) {
    if (e.propertyName === "value" && es(Vo)) {
      var n = [];
      Of(n, Vo, e, Xa(e)), sf(fx, n);
    }
  }
  function hx(e, n, i) {
    e === "focusin"
      ? (Ff(), (_o = n), (Vo = i), _o.attachEvent("onpropertychange", zf))
      : e === "focusout" && Ff();
  }
  function mx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return es(Vo);
  }
  function gx(e, n) {
    if (e === "click") return es(n);
  }
  function vx(e, n) {
    if (e === "input" || e === "change") return es(n);
  }
  function yx(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Ot = typeof Object.is == "function" ? Object.is : yx;
  function Fo(e, n) {
    if (Ot(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var i = Object.keys(e),
      l = Object.keys(n);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var f = i[l];
      if (!p.call(n, f) || !Ot(e[f], n[f])) return !1;
    }
    return !0;
  }
  function Bf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Uf(e, n) {
    var i = Bf(e);
    e = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = e + i.textContent.length), e <= n && l >= n))
          return { node: i, offset: n - e };
        e = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Bf(i);
    }
  }
  function $f(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? $f(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Wf() {
    for (var e = window, n = Ge(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = Ge(e.document);
    }
    return n;
  }
  function vl(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function xx(e) {
    var n = Wf(),
      i = e.focusedElem,
      l = e.selectionRange;
    if (
      n !== i &&
      i &&
      i.ownerDocument &&
      $f(i.ownerDocument.documentElement, i)
    ) {
      if (l !== null && vl(i)) {
        if (
          ((n = l.start),
          (e = l.end),
          e === void 0 && (e = n),
          "selectionStart" in i)
        )
          (i.selectionStart = n),
            (i.selectionEnd = Math.min(e, i.value.length));
        else if (
          ((e = ((n = i.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var f = i.textContent.length,
            h = Math.min(l.start, f);
          (l = l.end === void 0 ? h : Math.min(l.end, f)),
            !e.extend && h > l && ((f = l), (l = h), (h = f)),
            (f = Uf(i, h));
          var x = Uf(i, l);
          f &&
            x &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== f.node ||
              e.anchorOffset !== f.offset ||
              e.focusNode !== x.node ||
              e.focusOffset !== x.offset) &&
            ((n = n.createRange()),
            n.setStart(f.node, f.offset),
            e.removeAllRanges(),
            h > l
              ? (e.addRange(n), e.extend(x.node, x.offset))
              : (n.setEnd(x.node, x.offset), e.addRange(n)));
        }
      }
      for (n = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < n.length; i++)
        (e = n[i]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var wx = d && "documentMode" in document && 11 >= document.documentMode,
    Nr = null,
    yl = null,
    zo = null,
    xl = !1;
  function Hf(e, n, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    xl ||
      Nr == null ||
      Nr !== Ge(l) ||
      ((l = Nr),
      "selectionStart" in l && vl(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (zo && Fo(zo, l)) ||
        ((zo = l),
        (l = os(yl, "onSelect")),
        0 < l.length &&
          ((n = new ul("onSelect", "select", null, n, i)),
          e.push({ event: n, listeners: l }),
          (n.target = Nr))));
  }
  function ts(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i["Webkit" + e] = "webkit" + n),
      (i["Moz" + e] = "moz" + n),
      i
    );
  }
  var Mr = {
      animationend: ts("Animation", "AnimationEnd"),
      animationiteration: ts("Animation", "AnimationIteration"),
      animationstart: ts("Animation", "AnimationStart"),
      transitionend: ts("Transition", "TransitionEnd"),
    },
    wl = {},
    Kf = {};
  d &&
    ((Kf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Mr.animationend.animation,
      delete Mr.animationiteration.animation,
      delete Mr.animationstart.animation),
    "TransitionEvent" in window || delete Mr.transitionend.transition);
  function ns(e) {
    if (wl[e]) return wl[e];
    if (!Mr[e]) return e;
    var n = Mr[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Kf) return (wl[e] = n[i]);
    return e;
  }
  var Gf = ns("animationend"),
    Yf = ns("animationiteration"),
    Xf = ns("animationstart"),
    Qf = ns("transitionend"),
    qf = new Map(),
    Zf =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function An(e, n) {
    qf.set(e, n), u(n, [e]);
  }
  for (var Sl = 0; Sl < Zf.length; Sl++) {
    var Cl = Zf[Sl],
      Sx = Cl.toLowerCase(),
      Cx = Cl[0].toUpperCase() + Cl.slice(1);
    An(Sx, "on" + Cx);
  }
  An(Gf, "onAnimationEnd"),
    An(Yf, "onAnimationIteration"),
    An(Xf, "onAnimationStart"),
    An("dblclick", "onDoubleClick"),
    An("focusin", "onFocus"),
    An("focusout", "onBlur"),
    An(Qf, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Bo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    kx = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Bo),
    );
  function Jf(e, n, i) {
    var l = e.type || "unknown-event";
    (e.currentTarget = i), S1(l, n, void 0, e), (e.currentTarget = null);
  }
  function ep(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var l = e[i],
        f = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (n)
          for (var x = l.length - 1; 0 <= x; x--) {
            var R = l[x],
              A = R.instance,
              _ = R.currentTarget;
            if (((R = R.listener), A !== h && f.isPropagationStopped()))
              break e;
            Jf(f, R, _), (h = A);
          }
        else
          for (x = 0; x < l.length; x++) {
            if (
              ((R = l[x]),
              (A = R.instance),
              (_ = R.currentTarget),
              (R = R.listener),
              A !== h && f.isPropagationStopped())
            )
              break e;
            Jf(f, R, _), (h = A);
          }
      }
    }
    if (zi) throw ((e = Ja), (zi = !1), (Ja = null), e);
  }
  function Me(e, n) {
    var i = n[Nl];
    i === void 0 && (i = n[Nl] = new Set());
    var l = e + "__bubble";
    i.has(l) || (tp(n, e, 2, !1), i.add(l));
  }
  function kl(e, n, i) {
    var l = 0;
    n && (l |= 4), tp(i, e, l, n);
  }
  var rs = "_reactListening" + Math.random().toString(36).slice(2);
  function Uo(e) {
    if (!e[rs]) {
      (e[rs] = !0),
        s.forEach(function (i) {
          i !== "selectionchange" && (kx.has(i) || kl(i, !1, e), kl(i, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[rs] || ((n[rs] = !0), kl("selectionchange", !1, n));
    }
  }
  function tp(e, n, i, l) {
    switch (Tf(n)) {
      case 1:
        var f = _1;
        break;
      case 4:
        f = V1;
        break;
      default:
        f = sl;
    }
    (i = f.bind(null, n, i, e)),
      (f = void 0),
      !Za ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (f = !0),
      l
        ? f !== void 0
          ? e.addEventListener(n, i, { capture: !0, passive: f })
          : e.addEventListener(n, i, !0)
        : f !== void 0
          ? e.addEventListener(n, i, { passive: f })
          : e.addEventListener(n, i, !1);
  }
  function Tl(e, n, i, l, f) {
    var h = l;
    if (!(n & 1) && !(n & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var x = l.tag;
        if (x === 3 || x === 4) {
          var R = l.stateNode.containerInfo;
          if (R === f || (R.nodeType === 8 && R.parentNode === f)) break;
          if (x === 4)
            for (x = l.return; x !== null; ) {
              var A = x.tag;
              if (
                (A === 3 || A === 4) &&
                ((A = x.stateNode.containerInfo),
                A === f || (A.nodeType === 8 && A.parentNode === f))
              )
                return;
              x = x.return;
            }
          for (; R !== null; ) {
            if (((x = or(R)), x === null)) return;
            if (((A = x.tag), A === 5 || A === 6)) {
              l = h = x;
              continue e;
            }
            R = R.parentNode;
          }
        }
        l = l.return;
      }
    sf(function () {
      var _ = h,
        $ = Xa(i),
        H = [];
      e: {
        var U = qf.get(e);
        if (U !== void 0) {
          var q = ul,
            ee = e;
          switch (e) {
            case "keypress":
              if (qi(i) === 0) break e;
            case "keydown":
            case "keyup":
              q = J1;
              break;
            case "focusin":
              (ee = "focus"), (q = fl);
              break;
            case "focusout":
              (ee = "blur"), (q = fl);
              break;
            case "beforeblur":
            case "afterblur":
              q = fl;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = Rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = B1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = nx;
              break;
            case Gf:
            case Yf:
            case Xf:
              q = W1;
              break;
            case Qf:
              q = ox;
              break;
            case "scroll":
              q = F1;
              break;
            case "wheel":
              q = sx;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = K1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Af;
          }
          var ne = (n & 4) !== 0,
            He = !ne && e === "scroll",
            D = ne ? (U !== null ? U + "Capture" : null) : U;
          ne = [];
          for (var M = _, O; M !== null; ) {
            O = M;
            var G = O.stateNode;
            if (
              (O.tag === 5 &&
                G !== null &&
                ((O = G),
                D !== null &&
                  ((G = To(M, D)), G != null && ne.push($o(M, G, O)))),
              He)
            )
              break;
            M = M.return;
          }
          0 < ne.length &&
            ((U = new q(U, ee, null, i, $)),
            H.push({ event: U, listeners: ne }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (q = e === "mouseout" || e === "pointerout"),
            U &&
              i !== Ya &&
              (ee = i.relatedTarget || i.fromElement) &&
              (or(ee) || ee[on]))
          )
            break e;
          if (
            (q || U) &&
            ((U =
              $.window === $
                ? $
                : (U = $.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            q
              ? ((ee = i.relatedTarget || i.toElement),
                (q = _),
                (ee = ee ? or(ee) : null),
                ee !== null &&
                  ((He = rr(ee)),
                  ee !== He || (ee.tag !== 5 && ee.tag !== 6)) &&
                  (ee = null))
              : ((q = null), (ee = _)),
            q !== ee)
          ) {
            if (
              ((ne = Rf),
              (G = "onMouseLeave"),
              (D = "onMouseEnter"),
              (M = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ne = Af),
                (G = "onPointerLeave"),
                (D = "onPointerEnter"),
                (M = "pointer")),
              (He = q == null ? U : Dr(q)),
              (O = ee == null ? U : Dr(ee)),
              (U = new ne(G, M + "leave", q, i, $)),
              (U.target = He),
              (U.relatedTarget = O),
              (G = null),
              or($) === _ &&
                ((ne = new ne(D, M + "enter", ee, i, $)),
                (ne.target = O),
                (ne.relatedTarget = He),
                (G = ne)),
              (He = G),
              q && ee)
            )
              t: {
                for (ne = q, D = ee, M = 0, O = ne; O; O = jr(O)) M++;
                for (O = 0, G = D; G; G = jr(G)) O++;
                for (; 0 < M - O; ) (ne = jr(ne)), M--;
                for (; 0 < O - M; ) (D = jr(D)), O--;
                for (; M--; ) {
                  if (ne === D || (D !== null && ne === D.alternate)) break t;
                  (ne = jr(ne)), (D = jr(D));
                }
                ne = null;
              }
            else ne = null;
            q !== null && np(H, U, q, ne, !1),
              ee !== null && He !== null && np(H, He, ee, ne, !0);
          }
        }
        e: {
          if (
            ((U = _ ? Dr(_) : window),
            (q = U.nodeName && U.nodeName.toLowerCase()),
            q === "select" || (q === "input" && U.type === "file"))
          )
            var re = px;
          else if (If(U))
            if (_f) re = vx;
            else {
              re = mx;
              var ue = hx;
            }
          else
            (q = U.nodeName) &&
              q.toLowerCase() === "input" &&
              (U.type === "checkbox" || U.type === "radio") &&
              (re = gx);
          if (re && (re = re(e, _))) {
            Of(H, re, i, $);
            break e;
          }
          ue && ue(e, U, _),
            e === "focusout" &&
              (ue = U._wrapperState) &&
              ue.controlled &&
              U.type === "number" &&
              kn(U, "number", U.value);
        }
        switch (((ue = _ ? Dr(_) : window), e)) {
          case "focusin":
            (If(ue) || ue.contentEditable === "true") &&
              ((Nr = ue), (yl = _), (zo = null));
            break;
          case "focusout":
            zo = yl = Nr = null;
            break;
          case "mousedown":
            xl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (xl = !1), Hf(H, i, $);
            break;
          case "selectionchange":
            if (wx) break;
          case "keydown":
          case "keyup":
            Hf(H, i, $);
        }
        var ce;
        if (hl)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Ar
            ? Lf(e, i) && (me = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (me = "onCompositionStart");
        me &&
          (Nf &&
            i.locale !== "ko" &&
            (Ar || me !== "onCompositionStart"
              ? me === "onCompositionEnd" && Ar && (ce = Pf())
              : ((bn = $),
                (ll = "value" in bn ? bn.value : bn.textContent),
                (Ar = !0))),
          (ue = os(_, me)),
          0 < ue.length &&
            ((me = new bf(me, e, null, i, $)),
            H.push({ event: me, listeners: ue }),
            ce
              ? (me.data = ce)
              : ((ce = Df(i)), ce !== null && (me.data = ce)))),
          (ce = lx ? ux(e, i) : cx(e, i)) &&
            ((_ = os(_, "onBeforeInput")),
            0 < _.length &&
              (($ = new bf("onBeforeInput", "beforeinput", null, i, $)),
              H.push({ event: $, listeners: _ }),
              ($.data = ce)));
      }
      ep(H, n);
    });
  }
  function $o(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function os(e, n) {
    for (var i = n + "Capture", l = []; e !== null; ) {
      var f = e,
        h = f.stateNode;
      f.tag === 5 &&
        h !== null &&
        ((f = h),
        (h = To(e, i)),
        h != null && l.unshift($o(e, h, f)),
        (h = To(e, n)),
        h != null && l.push($o(e, h, f))),
        (e = e.return);
    }
    return l;
  }
  function jr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function np(e, n, i, l, f) {
    for (var h = n._reactName, x = []; i !== null && i !== l; ) {
      var R = i,
        A = R.alternate,
        _ = R.stateNode;
      if (A !== null && A === l) break;
      R.tag === 5 &&
        _ !== null &&
        ((R = _),
        f
          ? ((A = To(i, h)), A != null && x.unshift($o(i, A, R)))
          : f || ((A = To(i, h)), A != null && x.push($o(i, A, R)))),
        (i = i.return);
    }
    x.length !== 0 && e.push({ event: n, listeners: x });
  }
  var Tx = /\r\n?/g,
    Px = /\u0000|\uFFFD/g;
  function rp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Tx,
        `
`,
      )
      .replace(Px, "");
  }
  function is(e, n, i) {
    if (((n = rp(n)), rp(e) !== n && i)) throw Error(o(425));
  }
  function ss() {}
  var Pl = null,
    El = null;
  function Rl(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var bl = typeof setTimeout == "function" ? setTimeout : void 0,
    Ex = typeof clearTimeout == "function" ? clearTimeout : void 0,
    op = typeof Promise == "function" ? Promise : void 0,
    Rx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof op < "u"
          ? function (e) {
              return op.resolve(null).then(e).catch(bx);
            }
          : bl;
  function bx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Al(e, n) {
    var i = n,
      l = 0;
    do {
      var f = i.nextSibling;
      if ((e.removeChild(i), f && f.nodeType === 8))
        if (((i = f.data), i === "/$")) {
          if (l === 0) {
            e.removeChild(f), Lo(n);
            return;
          }
          l--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || l++;
      i = f;
    } while (i);
    Lo(n);
  }
  function Nn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function ip(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Lr = Math.random().toString(36).slice(2),
    Gt = "__reactFiber$" + Lr,
    Wo = "__reactProps$" + Lr,
    on = "__reactContainer$" + Lr,
    Nl = "__reactEvents$" + Lr,
    Ax = "__reactListeners$" + Lr,
    Nx = "__reactHandles$" + Lr;
  function or(e) {
    var n = e[Gt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[on] || i[Gt])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (e = ip(e); e !== null; ) {
            if ((i = e[Gt])) return i;
            e = ip(e);
          }
        return n;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function Ho(e) {
    return (
      (e = e[Gt] || e[on]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Dr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function as(e) {
    return e[Wo] || null;
  }
  var Ml = [],
    Ir = -1;
  function Mn(e) {
    return { current: e };
  }
  function je(e) {
    0 > Ir || ((e.current = Ml[Ir]), (Ml[Ir] = null), Ir--);
  }
  function Ae(e, n) {
    Ir++, (Ml[Ir] = e.current), (e.current = n);
  }
  var jn = {},
    rt = Mn(jn),
    pt = Mn(!1),
    ir = jn;
  function Or(e, n) {
    var i = e.type.contextTypes;
    if (!i) return jn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
      return l.__reactInternalMemoizedMaskedChildContext;
    var f = {},
      h;
    for (h in i) f[h] = n[h];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      f
    );
  }
  function ht(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ls() {
    je(pt), je(rt);
  }
  function sp(e, n, i) {
    if (rt.current !== jn) throw Error(o(168));
    Ae(rt, n), Ae(pt, i);
  }
  function ap(e, n, i) {
    var l = e.stateNode;
    if (((n = n.childContextTypes), typeof l.getChildContext != "function"))
      return i;
    l = l.getChildContext();
    for (var f in l) if (!(f in n)) throw Error(o(108, Q(e) || "Unknown", f));
    return K({}, i, l);
  }
  function us(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        jn),
      (ir = rt.current),
      Ae(rt, e),
      Ae(pt, pt.current),
      !0
    );
  }
  function lp(e, n, i) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    i
      ? ((e = ap(e, n, ir)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        je(pt),
        je(rt),
        Ae(rt, e))
      : je(pt),
      Ae(pt, i);
  }
  var sn = null,
    cs = !1,
    jl = !1;
  function up(e) {
    sn === null ? (sn = [e]) : sn.push(e);
  }
  function Mx(e) {
    (cs = !0), up(e);
  }
  function Ln() {
    if (!jl && sn !== null) {
      jl = !0;
      var e = 0,
        n = Re;
      try {
        var i = sn;
        for (Re = 1; e < i.length; e++) {
          var l = i[e];
          do l = l(!0);
          while (l !== null);
        }
        (sn = null), (cs = !1);
      } catch (f) {
        throw (sn !== null && (sn = sn.slice(e + 1)), df(el, Ln), f);
      } finally {
        (Re = n), (jl = !1);
      }
    }
    return null;
  }
  var _r = [],
    Vr = 0,
    ds = null,
    fs = 0,
    Rt = [],
    bt = 0,
    sr = null,
    an = 1,
    ln = "";
  function ar(e, n) {
    (_r[Vr++] = fs), (_r[Vr++] = ds), (ds = e), (fs = n);
  }
  function cp(e, n, i) {
    (Rt[bt++] = an), (Rt[bt++] = ln), (Rt[bt++] = sr), (sr = e);
    var l = an;
    e = ln;
    var f = 32 - It(l) - 1;
    (l &= ~(1 << f)), (i += 1);
    var h = 32 - It(n) + f;
    if (30 < h) {
      var x = f - (f % 5);
      (h = (l & ((1 << x) - 1)).toString(32)),
        (l >>= x),
        (f -= x),
        (an = (1 << (32 - It(n) + f)) | (i << f) | l),
        (ln = h + e);
    } else (an = (1 << h) | (i << f) | l), (ln = e);
  }
  function Ll(e) {
    e.return !== null && (ar(e, 1), cp(e, 1, 0));
  }
  function Dl(e) {
    for (; e === ds; )
      (ds = _r[--Vr]), (_r[Vr] = null), (fs = _r[--Vr]), (_r[Vr] = null);
    for (; e === sr; )
      (sr = Rt[--bt]),
        (Rt[bt] = null),
        (ln = Rt[--bt]),
        (Rt[bt] = null),
        (an = Rt[--bt]),
        (Rt[bt] = null);
  }
  var wt = null,
    St = null,
    Ie = !1,
    _t = null;
  function dp(e, n) {
    var i = jt(5, null, null, 0);
    (i.elementType = "DELETED"),
      (i.stateNode = n),
      (i.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [i]), (e.flags |= 16)) : n.push(i);
  }
  function fp(e, n) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (n =
            n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (wt = e), (St = Nn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (wt = e), (St = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = sr !== null ? { id: an, overflow: ln } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = jt(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = e),
              (e.child = i),
              (wt = e),
              (St = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Il(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ol(e) {
    if (Ie) {
      var n = St;
      if (n) {
        var i = n;
        if (!fp(e, n)) {
          if (Il(e)) throw Error(o(418));
          n = Nn(i.nextSibling);
          var l = wt;
          n && fp(e, n)
            ? dp(l, i)
            : ((e.flags = (e.flags & -4097) | 2), (Ie = !1), (wt = e));
        }
      } else {
        if (Il(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Ie = !1), (wt = e);
      }
    }
  }
  function pp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    wt = e;
  }
  function ps(e) {
    if (e !== wt) return !1;
    if (!Ie) return pp(e), (Ie = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !Rl(e.type, e.memoizedProps))),
      n && (n = St))
    ) {
      if (Il(e)) throw (hp(), Error(o(418)));
      for (; n; ) dp(e, n), (n = Nn(n.nextSibling));
    }
    if ((pp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (n === 0) {
                St = Nn(e.nextSibling);
                break e;
              }
              n--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = wt ? Nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function hp() {
    for (var e = St; e; ) e = Nn(e.nextSibling);
  }
  function Fr() {
    (St = wt = null), (Ie = !1);
  }
  function _l(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  var jx = L.ReactCurrentBatchConfig;
  function Ko(e, n, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(o(309));
          var l = i.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var f = l,
          h = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === h
          ? n.ref
          : ((n = function (x) {
              var R = f.refs;
              x === null ? delete R[h] : (R[h] = x);
            }),
            (n._stringRef = h),
            n);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!i._owner) throw Error(o(290, e));
    }
    return e;
  }
  function hs(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function mp(e) {
    var n = e._init;
    return n(e._payload);
  }
  function gp(e) {
    function n(D, M) {
      if (e) {
        var O = D.deletions;
        O === null ? ((D.deletions = [M]), (D.flags |= 16)) : O.push(M);
      }
    }
    function i(D, M) {
      if (!e) return null;
      for (; M !== null; ) n(D, M), (M = M.sibling);
      return null;
    }
    function l(D, M) {
      for (D = new Map(); M !== null; )
        M.key !== null ? D.set(M.key, M) : D.set(M.index, M), (M = M.sibling);
      return D;
    }
    function f(D, M) {
      return (D = Bn(D, M)), (D.index = 0), (D.sibling = null), D;
    }
    function h(D, M, O) {
      return (
        (D.index = O),
        e
          ? ((O = D.alternate),
            O !== null
              ? ((O = O.index), O < M ? ((D.flags |= 2), M) : O)
              : ((D.flags |= 2), M))
          : ((D.flags |= 1048576), M)
      );
    }
    function x(D) {
      return e && D.alternate === null && (D.flags |= 2), D;
    }
    function R(D, M, O, G) {
      return M === null || M.tag !== 6
        ? ((M = bu(O, D.mode, G)), (M.return = D), M)
        : ((M = f(M, O)), (M.return = D), M);
    }
    function A(D, M, O, G) {
      var re = O.type;
      return re === z
        ? $(D, M, O.props.children, G, O.key)
        : M !== null &&
            (M.elementType === re ||
              (typeof re == "object" &&
                re !== null &&
                re.$$typeof === ie &&
                mp(re) === M.type))
          ? ((G = f(M, O.props)), (G.ref = Ko(D, M, O)), (G.return = D), G)
          : ((G = Vs(O.type, O.key, O.props, null, D.mode, G)),
            (G.ref = Ko(D, M, O)),
            (G.return = D),
            G);
    }
    function _(D, M, O, G) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== O.containerInfo ||
        M.stateNode.implementation !== O.implementation
        ? ((M = Au(O, D.mode, G)), (M.return = D), M)
        : ((M = f(M, O.children || [])), (M.return = D), M);
    }
    function $(D, M, O, G, re) {
      return M === null || M.tag !== 7
        ? ((M = mr(O, D.mode, G, re)), (M.return = D), M)
        : ((M = f(M, O)), (M.return = D), M);
    }
    function H(D, M, O) {
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return (M = bu("" + M, D.mode, O)), (M.return = D), M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case I:
            return (
              (O = Vs(M.type, M.key, M.props, null, D.mode, O)),
              (O.ref = Ko(D, null, M)),
              (O.return = D),
              O
            );
          case B:
            return (M = Au(M, D.mode, O)), (M.return = D), M;
          case ie:
            var G = M._init;
            return H(D, G(M._payload), O);
        }
        if (So(M) || Y(M))
          return (M = mr(M, D.mode, O, null)), (M.return = D), M;
        hs(D, M);
      }
      return null;
    }
    function U(D, M, O, G) {
      var re = M !== null ? M.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return re !== null ? null : R(D, M, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case I:
            return O.key === re ? A(D, M, O, G) : null;
          case B:
            return O.key === re ? _(D, M, O, G) : null;
          case ie:
            return (re = O._init), U(D, M, re(O._payload), G);
        }
        if (So(O) || Y(O)) return re !== null ? null : $(D, M, O, G, null);
        hs(D, O);
      }
      return null;
    }
    function q(D, M, O, G, re) {
      if ((typeof G == "string" && G !== "") || typeof G == "number")
        return (D = D.get(O) || null), R(M, D, "" + G, re);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case I:
            return (
              (D = D.get(G.key === null ? O : G.key) || null), A(M, D, G, re)
            );
          case B:
            return (
              (D = D.get(G.key === null ? O : G.key) || null), _(M, D, G, re)
            );
          case ie:
            var ue = G._init;
            return q(D, M, O, ue(G._payload), re);
        }
        if (So(G) || Y(G)) return (D = D.get(O) || null), $(M, D, G, re, null);
        hs(M, G);
      }
      return null;
    }
    function ee(D, M, O, G) {
      for (
        var re = null, ue = null, ce = M, me = (M = 0), Je = null;
        ce !== null && me < O.length;
        me++
      ) {
        ce.index > me ? ((Je = ce), (ce = null)) : (Je = ce.sibling);
        var Ee = U(D, ce, O[me], G);
        if (Ee === null) {
          ce === null && (ce = Je);
          break;
        }
        e && ce && Ee.alternate === null && n(D, ce),
          (M = h(Ee, M, me)),
          ue === null ? (re = Ee) : (ue.sibling = Ee),
          (ue = Ee),
          (ce = Je);
      }
      if (me === O.length) return i(D, ce), Ie && ar(D, me), re;
      if (ce === null) {
        for (; me < O.length; me++)
          (ce = H(D, O[me], G)),
            ce !== null &&
              ((M = h(ce, M, me)),
              ue === null ? (re = ce) : (ue.sibling = ce),
              (ue = ce));
        return Ie && ar(D, me), re;
      }
      for (ce = l(D, ce); me < O.length; me++)
        (Je = q(ce, D, me, O[me], G)),
          Je !== null &&
            (e &&
              Je.alternate !== null &&
              ce.delete(Je.key === null ? me : Je.key),
            (M = h(Je, M, me)),
            ue === null ? (re = Je) : (ue.sibling = Je),
            (ue = Je));
      return (
        e &&
          ce.forEach(function (Un) {
            return n(D, Un);
          }),
        Ie && ar(D, me),
        re
      );
    }
    function ne(D, M, O, G) {
      var re = Y(O);
      if (typeof re != "function") throw Error(o(150));
      if (((O = re.call(O)), O == null)) throw Error(o(151));
      for (
        var ue = (re = null), ce = M, me = (M = 0), Je = null, Ee = O.next();
        ce !== null && !Ee.done;
        me++, Ee = O.next()
      ) {
        ce.index > me ? ((Je = ce), (ce = null)) : (Je = ce.sibling);
        var Un = U(D, ce, Ee.value, G);
        if (Un === null) {
          ce === null && (ce = Je);
          break;
        }
        e && ce && Un.alternate === null && n(D, ce),
          (M = h(Un, M, me)),
          ue === null ? (re = Un) : (ue.sibling = Un),
          (ue = Un),
          (ce = Je);
      }
      if (Ee.done) return i(D, ce), Ie && ar(D, me), re;
      if (ce === null) {
        for (; !Ee.done; me++, Ee = O.next())
          (Ee = H(D, Ee.value, G)),
            Ee !== null &&
              ((M = h(Ee, M, me)),
              ue === null ? (re = Ee) : (ue.sibling = Ee),
              (ue = Ee));
        return Ie && ar(D, me), re;
      }
      for (ce = l(D, ce); !Ee.done; me++, Ee = O.next())
        (Ee = q(ce, D, me, Ee.value, G)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              ce.delete(Ee.key === null ? me : Ee.key),
            (M = h(Ee, M, me)),
            ue === null ? (re = Ee) : (ue.sibling = Ee),
            (ue = Ee));
      return (
        e &&
          ce.forEach(function (dw) {
            return n(D, dw);
          }),
        Ie && ar(D, me),
        re
      );
    }
    function He(D, M, O, G) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === z &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case I:
            e: {
              for (var re = O.key, ue = M; ue !== null; ) {
                if (ue.key === re) {
                  if (((re = O.type), re === z)) {
                    if (ue.tag === 7) {
                      i(D, ue.sibling),
                        (M = f(ue, O.props.children)),
                        (M.return = D),
                        (D = M);
                      break e;
                    }
                  } else if (
                    ue.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === ie &&
                      mp(re) === ue.type)
                  ) {
                    i(D, ue.sibling),
                      (M = f(ue, O.props)),
                      (M.ref = Ko(D, ue, O)),
                      (M.return = D),
                      (D = M);
                    break e;
                  }
                  i(D, ue);
                  break;
                } else n(D, ue);
                ue = ue.sibling;
              }
              O.type === z
                ? ((M = mr(O.props.children, D.mode, G, O.key)),
                  (M.return = D),
                  (D = M))
                : ((G = Vs(O.type, O.key, O.props, null, D.mode, G)),
                  (G.ref = Ko(D, M, O)),
                  (G.return = D),
                  (D = G));
            }
            return x(D);
          case B:
            e: {
              for (ue = O.key; M !== null; ) {
                if (M.key === ue)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === O.containerInfo &&
                    M.stateNode.implementation === O.implementation
                  ) {
                    i(D, M.sibling),
                      (M = f(M, O.children || [])),
                      (M.return = D),
                      (D = M);
                    break e;
                  } else {
                    i(D, M);
                    break;
                  }
                else n(D, M);
                M = M.sibling;
              }
              (M = Au(O, D.mode, G)), (M.return = D), (D = M);
            }
            return x(D);
          case ie:
            return (ue = O._init), He(D, M, ue(O._payload), G);
        }
        if (So(O)) return ee(D, M, O, G);
        if (Y(O)) return ne(D, M, O, G);
        hs(D, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          M !== null && M.tag === 6
            ? (i(D, M.sibling), (M = f(M, O)), (M.return = D), (D = M))
            : (i(D, M), (M = bu(O, D.mode, G)), (M.return = D), (D = M)),
          x(D))
        : i(D, M);
    }
    return He;
  }
  var zr = gp(!0),
    vp = gp(!1),
    ms = Mn(null),
    gs = null,
    Br = null,
    Vl = null;
  function Fl() {
    Vl = Br = gs = null;
  }
  function zl(e) {
    var n = ms.current;
    je(ms), (e._currentValue = n);
  }
  function Bl(e, n, i) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), l !== null && (l.childLanes |= n))
          : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Ur(e, n) {
    (gs = e),
      (Vl = Br = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (mt = !0), (e.firstContext = null));
  }
  function At(e) {
    var n = e._currentValue;
    if (Vl !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Br === null)) {
        if (gs === null) throw Error(o(308));
        (Br = e), (gs.dependencies = { lanes: 0, firstContext: e });
      } else Br = Br.next = e;
    return n;
  }
  var lr = null;
  function Ul(e) {
    lr === null ? (lr = [e]) : lr.push(e);
  }
  function yp(e, n, i, l) {
    var f = n.interleaved;
    return (
      f === null ? ((i.next = i), Ul(n)) : ((i.next = f.next), (f.next = i)),
      (n.interleaved = i),
      un(e, l)
    );
  }
  function un(e, n) {
    e.lanes |= n;
    var i = e.alternate;
    for (i !== null && (i.lanes |= n), i = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (i = e.alternate),
        i !== null && (i.childLanes |= n),
        (i = e),
        (e = e.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var Dn = !1;
  function $l(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function xp(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function cn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function In(e, n, i) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), Pe & 2)) {
      var f = l.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (l.pending = n),
        un(e, i)
      );
    }
    return (
      (f = l.interleaved),
      f === null ? ((n.next = n), Ul(l)) : ((n.next = f.next), (f.next = n)),
      (l.interleaved = n),
      un(e, i)
    );
  }
  function vs(e, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))
    ) {
      var l = n.lanes;
      (l &= e.pendingLanes), (i |= l), (n.lanes = i), rl(e, i);
    }
  }
  function wp(e, n) {
    var i = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var f = null,
        h = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var x = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          h === null ? (f = h = x) : (h = h.next = x), (i = i.next);
        } while (i !== null);
        h === null ? (f = h = n) : (h = h.next = n);
      } else f = h = n;
      (i = {
        baseState: l.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: h,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n);
  }
  function ys(e, n, i, l) {
    var f = e.updateQueue;
    Dn = !1;
    var h = f.firstBaseUpdate,
      x = f.lastBaseUpdate,
      R = f.shared.pending;
    if (R !== null) {
      f.shared.pending = null;
      var A = R,
        _ = A.next;
      (A.next = null), x === null ? (h = _) : (x.next = _), (x = A);
      var $ = e.alternate;
      $ !== null &&
        (($ = $.updateQueue),
        (R = $.lastBaseUpdate),
        R !== x &&
          (R === null ? ($.firstBaseUpdate = _) : (R.next = _),
          ($.lastBaseUpdate = A)));
    }
    if (h !== null) {
      var H = f.baseState;
      (x = 0), ($ = _ = A = null), (R = h);
      do {
        var U = R.lane,
          q = R.eventTime;
        if ((l & U) === U) {
          $ !== null &&
            ($ = $.next =
              {
                eventTime: q,
                lane: 0,
                tag: R.tag,
                payload: R.payload,
                callback: R.callback,
                next: null,
              });
          e: {
            var ee = e,
              ne = R;
            switch (((U = n), (q = i), ne.tag)) {
              case 1:
                if (((ee = ne.payload), typeof ee == "function")) {
                  H = ee.call(q, H, U);
                  break e;
                }
                H = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = ne.payload),
                  (U = typeof ee == "function" ? ee.call(q, H, U) : ee),
                  U == null)
                )
                  break e;
                H = K({}, H, U);
                break e;
              case 2:
                Dn = !0;
            }
          }
          R.callback !== null &&
            R.lane !== 0 &&
            ((e.flags |= 64),
            (U = f.effects),
            U === null ? (f.effects = [R]) : U.push(R));
        } else
          (q = {
            eventTime: q,
            lane: U,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null,
          }),
            $ === null ? ((_ = $ = q), (A = H)) : ($ = $.next = q),
            (x |= U);
        if (((R = R.next), R === null)) {
          if (((R = f.shared.pending), R === null)) break;
          (U = R),
            (R = U.next),
            (U.next = null),
            (f.lastBaseUpdate = U),
            (f.shared.pending = null);
        }
      } while (!0);
      if (
        ($ === null && (A = H),
        (f.baseState = A),
        (f.firstBaseUpdate = _),
        (f.lastBaseUpdate = $),
        (n = f.shared.interleaved),
        n !== null)
      ) {
        f = n;
        do (x |= f.lane), (f = f.next);
        while (f !== n);
      } else h === null && (f.shared.lanes = 0);
      (dr |= x), (e.lanes = x), (e.memoizedState = H);
    }
  }
  function Sp(e, n, i) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var l = e[n],
          f = l.callback;
        if (f !== null) {
          if (((l.callback = null), (l = i), typeof f != "function"))
            throw Error(o(191, f));
          f.call(l);
        }
      }
  }
  var Go = {},
    Yt = Mn(Go),
    Yo = Mn(Go),
    Xo = Mn(Go);
  function ur(e) {
    if (e === Go) throw Error(o(174));
    return e;
  }
  function Wl(e, n) {
    switch ((Ae(Xo, n), Ae(Yo, e), Ae(Yt, Go), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ha(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Ha(n, e));
    }
    je(Yt), Ae(Yt, n);
  }
  function $r() {
    je(Yt), je(Yo), je(Xo);
  }
  function Cp(e) {
    ur(Xo.current);
    var n = ur(Yt.current),
      i = Ha(n, e.type);
    n !== i && (Ae(Yo, e), Ae(Yt, i));
  }
  function Hl(e) {
    Yo.current === e && (je(Yt), je(Yo));
  }
  var Oe = Mn(0);
  function xs(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Kl = [];
  function Gl() {
    for (var e = 0; e < Kl.length; e++)
      Kl[e]._workInProgressVersionPrimary = null;
    Kl.length = 0;
  }
  var ws = L.ReactCurrentDispatcher,
    Yl = L.ReactCurrentBatchConfig,
    cr = 0,
    _e = null,
    Xe = null,
    qe = null,
    Ss = !1,
    Qo = !1,
    qo = 0,
    Lx = 0;
  function ot() {
    throw Error(o(321));
  }
  function Xl(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Ot(e[i], n[i])) return !1;
    return !0;
  }
  function Ql(e, n, i, l, f, h) {
    if (
      ((cr = h),
      (_e = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (ws.current = e === null || e.memoizedState === null ? _x : Vx),
      (e = i(l, f)),
      Qo)
    ) {
      h = 0;
      do {
        if (((Qo = !1), (qo = 0), 25 <= h)) throw Error(o(301));
        (h += 1),
          (qe = Xe = null),
          (n.updateQueue = null),
          (ws.current = Fx),
          (e = i(l, f));
      } while (Qo);
    }
    if (
      ((ws.current = Ts),
      (n = Xe !== null && Xe.next !== null),
      (cr = 0),
      (qe = Xe = _e = null),
      (Ss = !1),
      n)
    )
      throw Error(o(300));
    return e;
  }
  function ql() {
    var e = qo !== 0;
    return (qo = 0), e;
  }
  function Xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? (_e.memoizedState = qe = e) : (qe = qe.next = e), qe;
  }
  function Nt() {
    if (Xe === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xe.next;
    var n = qe === null ? _e.memoizedState : qe.next;
    if (n !== null) (qe = n), (Xe = e);
    else {
      if (e === null) throw Error(o(310));
      (Xe = e),
        (e = {
          memoizedState: Xe.memoizedState,
          baseState: Xe.baseState,
          baseQueue: Xe.baseQueue,
          queue: Xe.queue,
          next: null,
        }),
        qe === null ? (_e.memoizedState = qe = e) : (qe = qe.next = e);
    }
    return qe;
  }
  function Zo(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Zl(e) {
    var n = Nt(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var l = Xe,
      f = l.baseQueue,
      h = i.pending;
    if (h !== null) {
      if (f !== null) {
        var x = f.next;
        (f.next = h.next), (h.next = x);
      }
      (l.baseQueue = f = h), (i.pending = null);
    }
    if (f !== null) {
      (h = f.next), (l = l.baseState);
      var R = (x = null),
        A = null,
        _ = h;
      do {
        var $ = _.lane;
        if ((cr & $) === $)
          A !== null &&
            (A = A.next =
              {
                lane: 0,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
            (l = _.hasEagerState ? _.eagerState : e(l, _.action));
        else {
          var H = {
            lane: $,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          };
          A === null ? ((R = A = H), (x = l)) : (A = A.next = H),
            (_e.lanes |= $),
            (dr |= $);
        }
        _ = _.next;
      } while (_ !== null && _ !== h);
      A === null ? (x = l) : (A.next = R),
        Ot(l, n.memoizedState) || (mt = !0),
        (n.memoizedState = l),
        (n.baseState = x),
        (n.baseQueue = A),
        (i.lastRenderedState = l);
    }
    if (((e = i.interleaved), e !== null)) {
      f = e;
      do (h = f.lane), (_e.lanes |= h), (dr |= h), (f = f.next);
      while (f !== e);
    } else f === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function Jl(e) {
    var n = Nt(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch,
      f = i.pending,
      h = n.memoizedState;
    if (f !== null) {
      i.pending = null;
      var x = (f = f.next);
      do (h = e(h, x.action)), (x = x.next);
      while (x !== f);
      Ot(h, n.memoizedState) || (mt = !0),
        (n.memoizedState = h),
        n.baseQueue === null && (n.baseState = h),
        (i.lastRenderedState = h);
    }
    return [h, l];
  }
  function kp() {}
  function Tp(e, n) {
    var i = _e,
      l = Nt(),
      f = n(),
      h = !Ot(l.memoizedState, f);
    if (
      (h && ((l.memoizedState = f), (mt = !0)),
      (l = l.queue),
      eu(Rp.bind(null, i, l, e), [e]),
      l.getSnapshot !== n || h || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Jo(9, Ep.bind(null, i, l, f, n), void 0, null),
        Ze === null)
      )
        throw Error(o(349));
      cr & 30 || Pp(i, n, f);
    }
    return f;
  }
  function Pp(e, n, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = _e.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (_e.updateQueue = n),
          (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e));
  }
  function Ep(e, n, i, l) {
    (n.value = i), (n.getSnapshot = l), bp(n) && Ap(e);
  }
  function Rp(e, n, i) {
    return i(function () {
      bp(n) && Ap(e);
    });
  }
  function bp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Ot(e, i);
    } catch {
      return !0;
    }
  }
  function Ap(e) {
    var n = un(e, 1);
    n !== null && Bt(n, e, 1, -1);
  }
  function Np(e) {
    var n = Xt();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zo,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = Ox.bind(null, _e, e)),
      [n.memoizedState, e]
    );
  }
  function Jo(e, n, i, l) {
    return (
      (e = { tag: e, create: n, destroy: i, deps: l, next: null }),
      (n = _e.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (_e.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = e.next = e)
            : ((l = i.next), (i.next = e), (e.next = l), (n.lastEffect = e))),
      e
    );
  }
  function Mp() {
    return Nt().memoizedState;
  }
  function Cs(e, n, i, l) {
    var f = Xt();
    (_e.flags |= e),
      (f.memoizedState = Jo(1 | n, i, void 0, l === void 0 ? null : l));
  }
  function ks(e, n, i, l) {
    var f = Nt();
    l = l === void 0 ? null : l;
    var h = void 0;
    if (Xe !== null) {
      var x = Xe.memoizedState;
      if (((h = x.destroy), l !== null && Xl(l, x.deps))) {
        f.memoizedState = Jo(n, i, h, l);
        return;
      }
    }
    (_e.flags |= e), (f.memoizedState = Jo(1 | n, i, h, l));
  }
  function jp(e, n) {
    return Cs(8390656, 8, e, n);
  }
  function eu(e, n) {
    return ks(2048, 8, e, n);
  }
  function Lp(e, n) {
    return ks(4, 2, e, n);
  }
  function Dp(e, n) {
    return ks(4, 4, e, n);
  }
  function Ip(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Op(e, n, i) {
    return (
      (i = i != null ? i.concat([e]) : null), ks(4, 4, Ip.bind(null, n, e), i)
    );
  }
  function tu() {}
  function _p(e, n) {
    var i = Nt();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    return l !== null && n !== null && Xl(n, l[1])
      ? l[0]
      : ((i.memoizedState = [e, n]), e);
  }
  function Vp(e, n) {
    var i = Nt();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    return l !== null && n !== null && Xl(n, l[1])
      ? l[0]
      : ((e = e()), (i.memoizedState = [e, n]), e);
  }
  function Fp(e, n, i) {
    return cr & 21
      ? (Ot(i, n) ||
          ((i = mf()), (_e.lanes |= i), (dr |= i), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (mt = !0)), (e.memoizedState = i));
  }
  function Dx(e, n) {
    var i = Re;
    (Re = i !== 0 && 4 > i ? i : 4), e(!0);
    var l = Yl.transition;
    Yl.transition = {};
    try {
      e(!1), n();
    } finally {
      (Re = i), (Yl.transition = l);
    }
  }
  function zp() {
    return Nt().memoizedState;
  }
  function Ix(e, n, i) {
    var l = Fn(e);
    if (
      ((i = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bp(e))
    )
      Up(n, i);
    else if (((i = yp(e, n, i, l)), i !== null)) {
      var f = ct();
      Bt(i, e, l, f), $p(i, n, l);
    }
  }
  function Ox(e, n, i) {
    var l = Fn(e),
      f = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Bp(e)) Up(n, f);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = n.lastRenderedReducer), h !== null)
      )
        try {
          var x = n.lastRenderedState,
            R = h(x, i);
          if (((f.hasEagerState = !0), (f.eagerState = R), Ot(R, x))) {
            var A = n.interleaved;
            A === null
              ? ((f.next = f), Ul(n))
              : ((f.next = A.next), (A.next = f)),
              (n.interleaved = f);
            return;
          }
        } catch {
        } finally {
        }
      (i = yp(e, n, f, l)),
        i !== null && ((f = ct()), Bt(i, e, l, f), $p(i, n, l));
    }
  }
  function Bp(e) {
    var n = e.alternate;
    return e === _e || (n !== null && n === _e);
  }
  function Up(e, n) {
    Qo = Ss = !0;
    var i = e.pending;
    i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (e.pending = n);
  }
  function $p(e, n, i) {
    if (i & 4194240) {
      var l = n.lanes;
      (l &= e.pendingLanes), (i |= l), (n.lanes = i), rl(e, i);
    }
  }
  var Ts = {
      readContext: At,
      useCallback: ot,
      useContext: ot,
      useEffect: ot,
      useImperativeHandle: ot,
      useInsertionEffect: ot,
      useLayoutEffect: ot,
      useMemo: ot,
      useReducer: ot,
      useRef: ot,
      useState: ot,
      useDebugValue: ot,
      useDeferredValue: ot,
      useTransition: ot,
      useMutableSource: ot,
      useSyncExternalStore: ot,
      useId: ot,
      unstable_isNewReconciler: !1,
    },
    _x = {
      readContext: At,
      useCallback: function (e, n) {
        return (Xt().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: At,
      useEffect: jp,
      useImperativeHandle: function (e, n, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          Cs(4194308, 4, Ip.bind(null, n, e), i)
        );
      },
      useLayoutEffect: function (e, n) {
        return Cs(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return Cs(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = Xt();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (i.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, i) {
        var l = Xt();
        return (
          (n = i !== void 0 ? i(n) : n),
          (l.memoizedState = l.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (l.queue = e),
          (e = e.dispatch = Ix.bind(null, _e, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Xt();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: Np,
      useDebugValue: tu,
      useDeferredValue: function (e) {
        return (Xt().memoizedState = e);
      },
      useTransition: function () {
        var e = Np(!1),
          n = e[0];
        return (e = Dx.bind(null, e[1])), (Xt().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, i) {
        var l = _e,
          f = Xt();
        if (Ie) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = n()), Ze === null)) throw Error(o(349));
          cr & 30 || Pp(l, n, i);
        }
        f.memoizedState = i;
        var h = { value: i, getSnapshot: n };
        return (
          (f.queue = h),
          jp(Rp.bind(null, l, h, e), [e]),
          (l.flags |= 2048),
          Jo(9, Ep.bind(null, l, h, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Xt(),
          n = Ze.identifierPrefix;
        if (Ie) {
          var i = ln,
            l = an;
          (i = (l & ~(1 << (32 - It(l) - 1))).toString(32) + i),
            (n = ":" + n + "R" + i),
            (i = qo++),
            0 < i && (n += "H" + i.toString(32)),
            (n += ":");
        } else (i = Lx++), (n = ":" + n + "r" + i.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    Vx = {
      readContext: At,
      useCallback: _p,
      useContext: At,
      useEffect: eu,
      useImperativeHandle: Op,
      useInsertionEffect: Lp,
      useLayoutEffect: Dp,
      useMemo: Vp,
      useReducer: Zl,
      useRef: Mp,
      useState: function () {
        return Zl(Zo);
      },
      useDebugValue: tu,
      useDeferredValue: function (e) {
        var n = Nt();
        return Fp(n, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = Zl(Zo)[0],
          n = Nt().memoizedState;
        return [e, n];
      },
      useMutableSource: kp,
      useSyncExternalStore: Tp,
      useId: zp,
      unstable_isNewReconciler: !1,
    },
    Fx = {
      readContext: At,
      useCallback: _p,
      useContext: At,
      useEffect: eu,
      useImperativeHandle: Op,
      useInsertionEffect: Lp,
      useLayoutEffect: Dp,
      useMemo: Vp,
      useReducer: Jl,
      useRef: Mp,
      useState: function () {
        return Jl(Zo);
      },
      useDebugValue: tu,
      useDeferredValue: function (e) {
        var n = Nt();
        return Xe === null ? (n.memoizedState = e) : Fp(n, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = Jl(Zo)[0],
          n = Nt().memoizedState;
        return [e, n];
      },
      useMutableSource: kp,
      useSyncExternalStore: Tp,
      useId: zp,
      unstable_isNewReconciler: !1,
    };
  function Vt(e, n) {
    if (e && e.defaultProps) {
      (n = K({}, n)), (e = e.defaultProps);
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function nu(e, n, i, l) {
    (n = e.memoizedState),
      (i = i(l, n)),
      (i = i == null ? n : K({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Ps = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? rr(e) === e : !1;
    },
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var l = ct(),
        f = Fn(e),
        h = cn(l, f);
      (h.payload = n),
        i != null && (h.callback = i),
        (n = In(e, h, f)),
        n !== null && (Bt(n, e, f, l), vs(n, e, f));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var l = ct(),
        f = Fn(e),
        h = cn(l, f);
      (h.tag = 1),
        (h.payload = n),
        i != null && (h.callback = i),
        (n = In(e, h, f)),
        n !== null && (Bt(n, e, f, l), vs(n, e, f));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = ct(),
        l = Fn(e),
        f = cn(i, l);
      (f.tag = 2),
        n != null && (f.callback = n),
        (n = In(e, f, l)),
        n !== null && (Bt(n, e, l, i), vs(n, e, l));
    },
  };
  function Wp(e, n, i, l, f, h, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, h, x)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Fo(i, l) || !Fo(f, h)
          : !0
    );
  }
  function Hp(e, n, i) {
    var l = !1,
      f = jn,
      h = n.contextType;
    return (
      typeof h == "object" && h !== null
        ? (h = At(h))
        : ((f = ht(n) ? ir : rt.current),
          (l = n.contextTypes),
          (h = (l = l != null) ? Or(e, f) : jn)),
      (n = new n(i, h)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Ps),
      (e.stateNode = n),
      (n._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = f),
        (e.__reactInternalMemoizedMaskedChildContext = h)),
      n
    );
  }
  function Kp(e, n, i, l) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(i, l),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(i, l),
      n.state !== e && Ps.enqueueReplaceState(n, n.state, null);
  }
  function ru(e, n, i, l) {
    var f = e.stateNode;
    (f.props = i), (f.state = e.memoizedState), (f.refs = {}), $l(e);
    var h = n.contextType;
    typeof h == "object" && h !== null
      ? (f.context = At(h))
      : ((h = ht(n) ? ir : rt.current), (f.context = Or(e, h))),
      (f.state = e.memoizedState),
      (h = n.getDerivedStateFromProps),
      typeof h == "function" && (nu(e, n, h, i), (f.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function" ||
        (typeof f.UNSAFE_componentWillMount != "function" &&
          typeof f.componentWillMount != "function") ||
        ((n = f.state),
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" &&
          f.UNSAFE_componentWillMount(),
        n !== f.state && Ps.enqueueReplaceState(f, f.state, null),
        ys(e, i, f, l),
        (f.state = e.memoizedState)),
      typeof f.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wr(e, n) {
    try {
      var i = "",
        l = n;
      do (i += we(l)), (l = l.return);
      while (l);
      var f = i;
    } catch (h) {
      f =
        `
Error generating stack: ` +
        h.message +
        `
` +
        h.stack;
    }
    return { value: e, source: n, stack: f, digest: null };
  }
  function ou(e, n, i) {
    return { value: e, source: null, stack: i ?? null, digest: n ?? null };
  }
  function iu(e, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var zx = typeof WeakMap == "function" ? WeakMap : Map;
  function Gp(e, n, i) {
    (i = cn(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var l = n.value;
    return (
      (i.callback = function () {
        js || ((js = !0), (wu = l)), iu(e, n);
      }),
      i
    );
  }
  function Yp(e, n, i) {
    (i = cn(-1, i)), (i.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var f = n.value;
      (i.payload = function () {
        return l(f);
      }),
        (i.callback = function () {
          iu(e, n);
        });
    }
    var h = e.stateNode;
    return (
      h !== null &&
        typeof h.componentDidCatch == "function" &&
        (i.callback = function () {
          iu(e, n),
            typeof l != "function" &&
              (_n === null ? (_n = new Set([this])) : _n.add(this));
          var x = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: x !== null ? x : "",
          });
        }),
      i
    );
  }
  function Xp(e, n, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new zx();
      var f = new Set();
      l.set(n, f);
    } else (f = l.get(n)), f === void 0 && ((f = new Set()), l.set(n, f));
    f.has(i) || (f.add(i), (e = ew.bind(null, e, n, i)), n.then(e, e));
  }
  function Qp(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function qp(e, n, i, l, f) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = f), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((n = cn(-1, 1)), (n.tag = 2), In(i, n, 1))),
            (i.lanes |= 1)),
        e);
  }
  var Bx = L.ReactCurrentOwner,
    mt = !1;
  function ut(e, n, i, l) {
    n.child = e === null ? vp(n, null, i, l) : zr(n, e.child, i, l);
  }
  function Zp(e, n, i, l, f) {
    i = i.render;
    var h = n.ref;
    return (
      Ur(n, f),
      (l = Ql(e, n, i, l, h, f)),
      (i = ql()),
      e !== null && !mt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~f),
          dn(e, n, f))
        : (Ie && i && Ll(n), (n.flags |= 1), ut(e, n, l, f), n.child)
    );
  }
  function Jp(e, n, i, l, f) {
    if (e === null) {
      var h = i.type;
      return typeof h == "function" &&
        !Ru(h) &&
        h.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = h), eh(e, n, h, l, f))
        : ((e = Vs(i.type, null, l, n, n.mode, f)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((h = e.child), !(e.lanes & f))) {
      var x = h.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Fo), i(x, l) && e.ref === n.ref)
      )
        return dn(e, n, f);
    }
    return (
      (n.flags |= 1),
      (e = Bn(h, l)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function eh(e, n, i, l, f) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (Fo(h, l) && e.ref === n.ref)
        if (((mt = !1), (n.pendingProps = l = h), (e.lanes & f) !== 0))
          e.flags & 131072 && (mt = !0);
        else return (n.lanes = e.lanes), dn(e, n, f);
    }
    return su(e, n, i, l, f);
  }
  function th(e, n, i) {
    var l = n.pendingProps,
      f = l.children,
      h = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ae(Kr, Ct),
          (Ct |= i);
      else {
        if (!(i & 1073741824))
          return (
            (e = h !== null ? h.baseLanes | i : i),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Ae(Kr, Ct),
            (Ct |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = h !== null ? h.baseLanes : i),
          Ae(Kr, Ct),
          (Ct |= l);
      }
    else
      h !== null ? ((l = h.baseLanes | i), (n.memoizedState = null)) : (l = i),
        Ae(Kr, Ct),
        (Ct |= l);
    return ut(e, n, f, i), n.child;
  }
  function nh(e, n) {
    var i = n.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function su(e, n, i, l, f) {
    var h = ht(i) ? ir : rt.current;
    return (
      (h = Or(n, h)),
      Ur(n, f),
      (i = Ql(e, n, i, l, h, f)),
      (l = ql()),
      e !== null && !mt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~f),
          dn(e, n, f))
        : (Ie && l && Ll(n), (n.flags |= 1), ut(e, n, i, f), n.child)
    );
  }
  function rh(e, n, i, l, f) {
    if (ht(i)) {
      var h = !0;
      us(n);
    } else h = !1;
    if ((Ur(n, f), n.stateNode === null))
      Rs(e, n), Hp(n, i, l), ru(n, i, l, f), (l = !0);
    else if (e === null) {
      var x = n.stateNode,
        R = n.memoizedProps;
      x.props = R;
      var A = x.context,
        _ = i.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = At(_))
        : ((_ = ht(i) ? ir : rt.current), (_ = Or(n, _)));
      var $ = i.getDerivedStateFromProps,
        H =
          typeof $ == "function" ||
          typeof x.getSnapshotBeforeUpdate == "function";
      H ||
        (typeof x.UNSAFE_componentWillReceiveProps != "function" &&
          typeof x.componentWillReceiveProps != "function") ||
        ((R !== l || A !== _) && Kp(n, x, l, _)),
        (Dn = !1);
      var U = n.memoizedState;
      (x.state = U),
        ys(n, l, x, f),
        (A = n.memoizedState),
        R !== l || U !== A || pt.current || Dn
          ? (typeof $ == "function" && (nu(n, i, $, l), (A = n.memoizedState)),
            (R = Dn || Wp(n, i, R, l, U, A, _))
              ? (H ||
                  (typeof x.UNSAFE_componentWillMount != "function" &&
                    typeof x.componentWillMount != "function") ||
                  (typeof x.componentWillMount == "function" &&
                    x.componentWillMount(),
                  typeof x.UNSAFE_componentWillMount == "function" &&
                    x.UNSAFE_componentWillMount()),
                typeof x.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof x.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = l),
                (n.memoizedState = A)),
            (x.props = l),
            (x.state = A),
            (x.context = _),
            (l = R))
          : (typeof x.componentDidMount == "function" && (n.flags |= 4194308),
            (l = !1));
    } else {
      (x = n.stateNode),
        xp(e, n),
        (R = n.memoizedProps),
        (_ = n.type === n.elementType ? R : Vt(n.type, R)),
        (x.props = _),
        (H = n.pendingProps),
        (U = x.context),
        (A = i.contextType),
        typeof A == "object" && A !== null
          ? (A = At(A))
          : ((A = ht(i) ? ir : rt.current), (A = Or(n, A)));
      var q = i.getDerivedStateFromProps;
      ($ =
        typeof q == "function" ||
        typeof x.getSnapshotBeforeUpdate == "function") ||
        (typeof x.UNSAFE_componentWillReceiveProps != "function" &&
          typeof x.componentWillReceiveProps != "function") ||
        ((R !== H || U !== A) && Kp(n, x, l, A)),
        (Dn = !1),
        (U = n.memoizedState),
        (x.state = U),
        ys(n, l, x, f);
      var ee = n.memoizedState;
      R !== H || U !== ee || pt.current || Dn
        ? (typeof q == "function" && (nu(n, i, q, l), (ee = n.memoizedState)),
          (_ = Dn || Wp(n, i, _, l, U, ee, A) || !1)
            ? ($ ||
                (typeof x.UNSAFE_componentWillUpdate != "function" &&
                  typeof x.componentWillUpdate != "function") ||
                (typeof x.componentWillUpdate == "function" &&
                  x.componentWillUpdate(l, ee, A),
                typeof x.UNSAFE_componentWillUpdate == "function" &&
                  x.UNSAFE_componentWillUpdate(l, ee, A)),
              typeof x.componentDidUpdate == "function" && (n.flags |= 4),
              typeof x.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof x.componentDidUpdate != "function" ||
                (R === e.memoizedProps && U === e.memoizedState) ||
                (n.flags |= 4),
              typeof x.getSnapshotBeforeUpdate != "function" ||
                (R === e.memoizedProps && U === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = l),
              (n.memoizedState = ee)),
          (x.props = l),
          (x.state = ee),
          (x.context = A),
          (l = _))
        : (typeof x.componentDidUpdate != "function" ||
            (R === e.memoizedProps && U === e.memoizedState) ||
            (n.flags |= 4),
          typeof x.getSnapshotBeforeUpdate != "function" ||
            (R === e.memoizedProps && U === e.memoizedState) ||
            (n.flags |= 1024),
          (l = !1));
    }
    return au(e, n, i, l, h, f);
  }
  function au(e, n, i, l, f, h) {
    nh(e, n);
    var x = (n.flags & 128) !== 0;
    if (!l && !x) return f && lp(n, i, !1), dn(e, n, h);
    (l = n.stateNode), (Bx.current = n);
    var R =
      x && typeof i.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (n.flags |= 1),
      e !== null && x
        ? ((n.child = zr(n, e.child, null, h)), (n.child = zr(n, null, R, h)))
        : ut(e, n, R, h),
      (n.memoizedState = l.state),
      f && lp(n, i, !0),
      n.child
    );
  }
  function oh(e) {
    var n = e.stateNode;
    n.pendingContext
      ? sp(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && sp(e, n.context, !1),
      Wl(e, n.containerInfo);
  }
  function ih(e, n, i, l, f) {
    return Fr(), _l(f), (n.flags |= 256), ut(e, n, i, l), n.child;
  }
  var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function uu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function sh(e, n, i) {
    var l = n.pendingProps,
      f = Oe.current,
      h = !1,
      x = (n.flags & 128) !== 0,
      R;
    if (
      ((R = x) ||
        (R = e !== null && e.memoizedState === null ? !1 : (f & 2) !== 0),
      R
        ? ((h = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (f |= 1),
      Ae(Oe, f & 1),
      e === null)
    )
      return (
        Ol(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((x = l.children),
            (e = l.fallback),
            h
              ? ((l = n.mode),
                (h = n.child),
                (x = { mode: "hidden", children: x }),
                !(l & 1) && h !== null
                  ? ((h.childLanes = 0), (h.pendingProps = x))
                  : (h = Fs(x, l, 0, null)),
                (e = mr(e, l, i, null)),
                (h.return = n),
                (e.return = n),
                (h.sibling = e),
                (n.child = h),
                (n.child.memoizedState = uu(i)),
                (n.memoizedState = lu),
                e)
              : cu(n, x))
      );
    if (((f = e.memoizedState), f !== null && ((R = f.dehydrated), R !== null)))
      return Ux(e, n, x, l, R, f, i);
    if (h) {
      (h = l.fallback), (x = n.mode), (f = e.child), (R = f.sibling);
      var A = { mode: "hidden", children: l.children };
      return (
        !(x & 1) && n.child !== f
          ? ((l = n.child),
            (l.childLanes = 0),
            (l.pendingProps = A),
            (n.deletions = null))
          : ((l = Bn(f, A)), (l.subtreeFlags = f.subtreeFlags & 14680064)),
        R !== null ? (h = Bn(R, h)) : ((h = mr(h, x, i, null)), (h.flags |= 2)),
        (h.return = n),
        (l.return = n),
        (l.sibling = h),
        (n.child = l),
        (l = h),
        (h = n.child),
        (x = e.child.memoizedState),
        (x =
          x === null
            ? uu(i)
            : {
                baseLanes: x.baseLanes | i,
                cachePool: null,
                transitions: x.transitions,
              }),
        (h.memoizedState = x),
        (h.childLanes = e.childLanes & ~i),
        (n.memoizedState = lu),
        l
      );
    }
    return (
      (h = e.child),
      (e = h.sibling),
      (l = Bn(h, { mode: "visible", children: l.children })),
      !(n.mode & 1) && (l.lanes = i),
      (l.return = n),
      (l.sibling = null),
      e !== null &&
        ((i = n.deletions),
        i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
      (n.child = l),
      (n.memoizedState = null),
      l
    );
  }
  function cu(e, n) {
    return (
      (n = Fs({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Es(e, n, i, l) {
    return (
      l !== null && _l(l),
      zr(n, e.child, null, i),
      (e = cu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Ux(e, n, i, l, f, h, x) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (l = ou(Error(o(422)))), Es(e, n, x, l))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((h = l.fallback),
            (f = n.mode),
            (l = Fs({ mode: "visible", children: l.children }, f, 0, null)),
            (h = mr(h, f, x, null)),
            (h.flags |= 2),
            (l.return = n),
            (h.return = n),
            (l.sibling = h),
            (n.child = l),
            n.mode & 1 && zr(n, e.child, null, x),
            (n.child.memoizedState = uu(x)),
            (n.memoizedState = lu),
            h);
    if (!(n.mode & 1)) return Es(e, n, x, null);
    if (f.data === "$!") {
      if (((l = f.nextSibling && f.nextSibling.dataset), l)) var R = l.dgst;
      return (
        (l = R), (h = Error(o(419))), (l = ou(h, l, void 0)), Es(e, n, x, l)
      );
    }
    if (((R = (x & e.childLanes) !== 0), mt || R)) {
      if (((l = Ze), l !== null)) {
        switch (x & -x) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        (f = f & (l.suspendedLanes | x) ? 0 : f),
          f !== 0 &&
            f !== h.retryLane &&
            ((h.retryLane = f), un(e, f), Bt(l, e, f, -1));
      }
      return Eu(), (l = ou(Error(o(421)))), Es(e, n, x, l);
    }
    return f.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = tw.bind(null, e)),
        (f._reactRetry = n),
        null)
      : ((e = h.treeContext),
        (St = Nn(f.nextSibling)),
        (wt = n),
        (Ie = !0),
        (_t = null),
        e !== null &&
          ((Rt[bt++] = an),
          (Rt[bt++] = ln),
          (Rt[bt++] = sr),
          (an = e.id),
          (ln = e.overflow),
          (sr = n)),
        (n = cu(n, l.children)),
        (n.flags |= 4096),
        n);
  }
  function ah(e, n, i) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Bl(e.return, n, i);
  }
  function du(e, n, i, l, f) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: i,
          tailMode: f,
        })
      : ((h.isBackwards = n),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = l),
        (h.tail = i),
        (h.tailMode = f));
  }
  function lh(e, n, i) {
    var l = n.pendingProps,
      f = l.revealOrder,
      h = l.tail;
    if ((ut(e, n, l.children, i), (l = Oe.current), l & 2))
      (l = (l & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ah(e, i, n);
          else if (e.tag === 19) ah(e, i, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Ae(Oe, l), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (i = n.child, f = null; i !== null; )
            (e = i.alternate),
              e !== null && xs(e) === null && (f = i),
              (i = i.sibling);
          (i = f),
            i === null
              ? ((f = n.child), (n.child = null))
              : ((f = i.sibling), (i.sibling = null)),
            du(n, !1, f, i, h);
          break;
        case "backwards":
          for (i = null, f = n.child, n.child = null; f !== null; ) {
            if (((e = f.alternate), e !== null && xs(e) === null)) {
              n.child = f;
              break;
            }
            (e = f.sibling), (f.sibling = i), (i = f), (f = e);
          }
          du(n, !0, i, null, h);
          break;
        case "together":
          du(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Rs(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function dn(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (dr |= n.lanes),
      !(i & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        e = n.child, i = Bn(e, e.pendingProps), n.child = i, i.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = Bn(e, e.pendingProps)),
          (i.return = n);
      i.sibling = null;
    }
    return n.child;
  }
  function $x(e, n, i) {
    switch (n.tag) {
      case 3:
        oh(n), Fr();
        break;
      case 5:
        Cp(n);
        break;
      case 1:
        ht(n.type) && us(n);
        break;
      case 4:
        Wl(n, n.stateNode.containerInfo);
        break;
      case 10:
        var l = n.type._context,
          f = n.memoizedProps.value;
        Ae(ms, l._currentValue), (l._currentValue = f);
        break;
      case 13:
        if (((l = n.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ae(Oe, Oe.current & 1), (n.flags |= 128), null)
            : i & n.child.childLanes
              ? sh(e, n, i)
              : (Ae(Oe, Oe.current & 1),
                (e = dn(e, n, i)),
                e !== null ? e.sibling : null);
        Ae(Oe, Oe.current & 1);
        break;
      case 19:
        if (((l = (i & n.childLanes) !== 0), e.flags & 128)) {
          if (l) return lh(e, n, i);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          Ae(Oe, Oe.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), th(e, n, i);
    }
    return dn(e, n, i);
  }
  var uh, fu, ch, dh;
  (uh = function (e, n) {
    for (var i = n.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (fu = function () {}),
    (ch = function (e, n, i, l) {
      var f = e.memoizedProps;
      if (f !== l) {
        (e = n.stateNode), ur(Yt.current);
        var h = null;
        switch (i) {
          case "input":
            (f = ft(e, f)), (l = ft(e, l)), (h = []);
            break;
          case "select":
            (f = K({}, f, { value: void 0 })),
              (l = K({}, l, { value: void 0 })),
              (h = []);
            break;
          case "textarea":
            (f = Wa(e, f)), (l = Wa(e, l)), (h = []);
            break;
          default:
            typeof f.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = ss);
        }
        Ka(i, l);
        var x;
        i = null;
        for (_ in f)
          if (!l.hasOwnProperty(_) && f.hasOwnProperty(_) && f[_] != null)
            if (_ === "style") {
              var R = f[_];
              for (x in R) R.hasOwnProperty(x) && (i || (i = {}), (i[x] = ""));
            } else
              _ !== "dangerouslySetInnerHTML" &&
                _ !== "children" &&
                _ !== "suppressContentEditableWarning" &&
                _ !== "suppressHydrationWarning" &&
                _ !== "autoFocus" &&
                (a.hasOwnProperty(_)
                  ? h || (h = [])
                  : (h = h || []).push(_, null));
        for (_ in l) {
          var A = l[_];
          if (
            ((R = f != null ? f[_] : void 0),
            l.hasOwnProperty(_) && A !== R && (A != null || R != null))
          )
            if (_ === "style")
              if (R) {
                for (x in R)
                  !R.hasOwnProperty(x) ||
                    (A && A.hasOwnProperty(x)) ||
                    (i || (i = {}), (i[x] = ""));
                for (x in A)
                  A.hasOwnProperty(x) &&
                    R[x] !== A[x] &&
                    (i || (i = {}), (i[x] = A[x]));
              } else i || (h || (h = []), h.push(_, i)), (i = A);
            else
              _ === "dangerouslySetInnerHTML"
                ? ((A = A ? A.__html : void 0),
                  (R = R ? R.__html : void 0),
                  A != null && R !== A && (h = h || []).push(_, A))
                : _ === "children"
                  ? (typeof A != "string" && typeof A != "number") ||
                    (h = h || []).push(_, "" + A)
                  : _ !== "suppressContentEditableWarning" &&
                    _ !== "suppressHydrationWarning" &&
                    (a.hasOwnProperty(_)
                      ? (A != null && _ === "onScroll" && Me("scroll", e),
                        h || R === A || (h = []))
                      : (h = h || []).push(_, A));
        }
        i && (h = h || []).push("style", i);
        var _ = h;
        (n.updateQueue = _) && (n.flags |= 4);
      }
    }),
    (dh = function (e, n, i, l) {
      i !== l && (n.flags |= 4);
    });
  function ei(e, n) {
    if (!Ie)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var l = null; i !== null; )
            i.alternate !== null && (l = i), (i = i.sibling);
          l === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function it(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      l = 0;
    if (n)
      for (var f = e.child; f !== null; )
        (i |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags & 14680064),
          (l |= f.flags & 14680064),
          (f.return = e),
          (f = f.sibling);
    else
      for (f = e.child; f !== null; )
        (i |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags),
          (l |= f.flags),
          (f.return = e),
          (f = f.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = i), n;
  }
  function Wx(e, n, i) {
    var l = n.pendingProps;
    switch ((Dl(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(n), null;
      case 1:
        return ht(n.type) && ls(), it(n), null;
      case 3:
        return (
          (l = n.stateNode),
          $r(),
          je(pt),
          je(rt),
          Gl(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ps(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), _t !== null && (ku(_t), (_t = null)))),
          fu(e, n),
          it(n),
          null
        );
      case 5:
        Hl(n);
        var f = ur(Xo.current);
        if (((i = n.type), e !== null && n.stateNode != null))
          ch(e, n, i, l, f),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return it(n), null;
          }
          if (((e = ur(Yt.current)), ps(n))) {
            (l = n.stateNode), (i = n.type);
            var h = n.memoizedProps;
            switch (((l[Gt] = n), (l[Wo] = h), (e = (n.mode & 1) !== 0), i)) {
              case "dialog":
                Me("cancel", l), Me("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Me("load", l);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Bo.length; f++) Me(Bo[f], l);
                break;
              case "source":
                Me("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Me("error", l), Me("load", l);
                break;
              case "details":
                Me("toggle", l);
                break;
              case "input":
                Sn(l, h), Me("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!h.multiple }),
                  Me("invalid", l);
                break;
              case "textarea":
                Gd(l, h), Me("invalid", l);
            }
            Ka(i, h), (f = null);
            for (var x in h)
              if (h.hasOwnProperty(x)) {
                var R = h[x];
                x === "children"
                  ? typeof R == "string"
                    ? l.textContent !== R &&
                      (h.suppressHydrationWarning !== !0 &&
                        is(l.textContent, R, e),
                      (f = ["children", R]))
                    : typeof R == "number" &&
                      l.textContent !== "" + R &&
                      (h.suppressHydrationWarning !== !0 &&
                        is(l.textContent, R, e),
                      (f = ["children", "" + R]))
                  : a.hasOwnProperty(x) &&
                    R != null &&
                    x === "onScroll" &&
                    Me("scroll", l);
              }
            switch (i) {
              case "input":
                ve(l), _i(l, h, !0);
                break;
              case "textarea":
                ve(l), Xd(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (l.onclick = ss);
            }
            (l = f), (n.updateQueue = l), l !== null && (n.flags |= 4);
          } else {
            (x = f.nodeType === 9 ? f : f.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Qd(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = x.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                    ? (e = x.createElement(i, { is: l.is }))
                    : ((e = x.createElement(i)),
                      i === "select" &&
                        ((x = e),
                        l.multiple
                          ? (x.multiple = !0)
                          : l.size && (x.size = l.size)))
                : (e = x.createElementNS(e, i)),
              (e[Gt] = n),
              (e[Wo] = l),
              uh(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((x = Ga(i, l)), i)) {
                case "dialog":
                  Me("cancel", e), Me("close", e), (f = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Me("load", e), (f = l);
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Bo.length; f++) Me(Bo[f], e);
                  f = l;
                  break;
                case "source":
                  Me("error", e), (f = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Me("error", e), Me("load", e), (f = l);
                  break;
                case "details":
                  Me("toggle", e), (f = l);
                  break;
                case "input":
                  Sn(e, l), (f = ft(e, l)), Me("invalid", e);
                  break;
                case "option":
                  f = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (f = K({}, l, { value: void 0 })),
                    Me("invalid", e);
                  break;
                case "textarea":
                  Gd(e, l), (f = Wa(e, l)), Me("invalid", e);
                  break;
                default:
                  f = l;
              }
              Ka(i, f), (R = f);
              for (h in R)
                if (R.hasOwnProperty(h)) {
                  var A = R[h];
                  h === "style"
                    ? Jd(e, A)
                    : h === "dangerouslySetInnerHTML"
                      ? ((A = A ? A.__html : void 0), A != null && qd(e, A))
                      : h === "children"
                        ? typeof A == "string"
                          ? (i !== "textarea" || A !== "") && Co(e, A)
                          : typeof A == "number" && Co(e, "" + A)
                        : h !== "suppressContentEditableWarning" &&
                          h !== "suppressHydrationWarning" &&
                          h !== "autoFocus" &&
                          (a.hasOwnProperty(h)
                            ? A != null && h === "onScroll" && Me("scroll", e)
                            : A != null && N(e, h, A, x));
                }
              switch (i) {
                case "input":
                  ve(e), _i(e, l, !1);
                  break;
                case "textarea":
                  ve(e), Xd(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + se(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (h = l.value),
                    h != null
                      ? Tr(e, !!l.multiple, h, !1)
                      : l.defaultValue != null &&
                        Tr(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof f.onClick == "function" && (e.onclick = ss);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return it(n), null;
      case 6:
        if (e && n.stateNode != null) dh(e, n, e.memoizedProps, l);
        else {
          if (typeof l != "string" && n.stateNode === null) throw Error(o(166));
          if (((i = ur(Xo.current)), ur(Yt.current), ps(n))) {
            if (
              ((l = n.stateNode),
              (i = n.memoizedProps),
              (l[Gt] = n),
              (h = l.nodeValue !== i) && ((e = wt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  is(l.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    is(l.nodeValue, i, (e.mode & 1) !== 0);
              }
            h && (n.flags |= 4);
          } else
            (l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l)),
              (l[Gt] = n),
              (n.stateNode = l);
        }
        return it(n), null;
      case 13:
        if (
          (je(Oe),
          (l = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ie && St !== null && n.mode & 1 && !(n.flags & 128))
            hp(), Fr(), (n.flags |= 98560), (h = !1);
          else if (((h = ps(n)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!h) throw Error(o(318));
              if (
                ((h = n.memoizedState),
                (h = h !== null ? h.dehydrated : null),
                !h)
              )
                throw Error(o(317));
              h[Gt] = n;
            } else
              Fr(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            it(n), (h = !1);
          } else _t !== null && (ku(_t), (_t = null)), (h = !0);
          if (!h) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = i), n)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || Oe.current & 1 ? Qe === 0 && (Qe = 3) : Eu())),
            n.updateQueue !== null && (n.flags |= 4),
            it(n),
            null);
      case 4:
        return (
          $r(),
          fu(e, n),
          e === null && Uo(n.stateNode.containerInfo),
          it(n),
          null
        );
      case 10:
        return zl(n.type._context), it(n), null;
      case 17:
        return ht(n.type) && ls(), it(n), null;
      case 19:
        if ((je(Oe), (h = n.memoizedState), h === null)) return it(n), null;
        if (((l = (n.flags & 128) !== 0), (x = h.rendering), x === null))
          if (l) ei(h, !1);
          else {
            if (Qe !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((x = xs(e)), x !== null)) {
                  for (
                    n.flags |= 128,
                      ei(h, !1),
                      l = x.updateQueue,
                      l !== null && ((n.updateQueue = l), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      l = i,
                      i = n.child;
                    i !== null;

                  )
                    (h = i),
                      (e = l),
                      (h.flags &= 14680066),
                      (x = h.alternate),
                      x === null
                        ? ((h.childLanes = 0),
                          (h.lanes = e),
                          (h.child = null),
                          (h.subtreeFlags = 0),
                          (h.memoizedProps = null),
                          (h.memoizedState = null),
                          (h.updateQueue = null),
                          (h.dependencies = null),
                          (h.stateNode = null))
                        : ((h.childLanes = x.childLanes),
                          (h.lanes = x.lanes),
                          (h.child = x.child),
                          (h.subtreeFlags = 0),
                          (h.deletions = null),
                          (h.memoizedProps = x.memoizedProps),
                          (h.memoizedState = x.memoizedState),
                          (h.updateQueue = x.updateQueue),
                          (h.type = x.type),
                          (e = x.dependencies),
                          (h.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (i = i.sibling);
                  return Ae(Oe, (Oe.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            h.tail !== null &&
              We() > Gr &&
              ((n.flags |= 128), (l = !0), ei(h, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = xs(x)), e !== null)) {
              if (
                ((n.flags |= 128),
                (l = !0),
                (i = e.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                ei(h, !0),
                h.tail === null &&
                  h.tailMode === "hidden" &&
                  !x.alternate &&
                  !Ie)
              )
                return it(n), null;
            } else
              2 * We() - h.renderingStartTime > Gr &&
                i !== 1073741824 &&
                ((n.flags |= 128), (l = !0), ei(h, !1), (n.lanes = 4194304));
          h.isBackwards
            ? ((x.sibling = n.child), (n.child = x))
            : ((i = h.last),
              i !== null ? (i.sibling = x) : (n.child = x),
              (h.last = x));
        }
        return h.tail !== null
          ? ((n = h.tail),
            (h.rendering = n),
            (h.tail = n.sibling),
            (h.renderingStartTime = We()),
            (n.sibling = null),
            (i = Oe.current),
            Ae(Oe, l ? (i & 1) | 2 : i & 1),
            n)
          : (it(n), null);
      case 22:
      case 23:
        return (
          Pu(),
          (l = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (n.flags |= 8192),
          l && n.mode & 1
            ? Ct & 1073741824 &&
              (it(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : it(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function Hx(e, n) {
    switch ((Dl(n), n.tag)) {
      case 1:
        return (
          ht(n.type) && ls(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          $r(),
          je(pt),
          je(rt),
          Gl(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Hl(n), null;
      case 13:
        if (
          (je(Oe), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          Fr();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return je(Oe), null;
      case 4:
        return $r(), null;
      case 10:
        return zl(n.type._context), null;
      case 22:
      case 23:
        return Pu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bs = !1,
    st = !1,
    Kx = typeof WeakSet == "function" ? WeakSet : Set,
    J = null;
  function Hr(e, n) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (l) {
          ze(e, n, l);
        }
      else i.current = null;
  }
  function pu(e, n, i) {
    try {
      i();
    } catch (l) {
      ze(e, n, l);
    }
  }
  var fh = !1;
  function Gx(e, n) {
    if (((Pl = Yi), (e = Wf()), vl(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var f = l.anchorOffset,
              h = l.focusNode;
            l = l.focusOffset;
            try {
              i.nodeType, h.nodeType;
            } catch {
              i = null;
              break e;
            }
            var x = 0,
              R = -1,
              A = -1,
              _ = 0,
              $ = 0,
              H = e,
              U = null;
            t: for (;;) {
              for (
                var q;
                H !== i || (f !== 0 && H.nodeType !== 3) || (R = x + f),
                  H !== h || (l !== 0 && H.nodeType !== 3) || (A = x + l),
                  H.nodeType === 3 && (x += H.nodeValue.length),
                  (q = H.firstChild) !== null;

              )
                (U = H), (H = q);
              for (;;) {
                if (H === e) break t;
                if (
                  (U === i && ++_ === f && (R = x),
                  U === h && ++$ === l && (A = x),
                  (q = H.nextSibling) !== null)
                )
                  break;
                (H = U), (U = H.parentNode);
              }
              H = q;
            }
            i = R === -1 || A === -1 ? null : { start: R, end: A };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      El = { focusedElem: e, selectionRange: i }, Yi = !1, J = n;
      J !== null;

    )
      if (((n = J), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (J = e);
      else
        for (; J !== null; ) {
          n = J;
          try {
            var ee = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var ne = ee.memoizedProps,
                      He = ee.memoizedState,
                      D = n.stateNode,
                      M = D.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? ne : Vt(n.type, ne),
                        He,
                      );
                    D.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var O = n.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (G) {
            ze(n, n.return, G);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (J = e);
            break;
          }
          J = n.return;
        }
    return (ee = fh), (fh = !1), ee;
  }
  function ti(e, n, i) {
    var l = n.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var f = (l = l.next);
      do {
        if ((f.tag & e) === e) {
          var h = f.destroy;
          (f.destroy = void 0), h !== void 0 && pu(n, i, h);
        }
        f = f.next;
      } while (f !== l);
    }
  }
  function As(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var l = i.create;
          i.destroy = l();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function hu(e) {
    var n = e.ref;
    if (n !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function ph(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), ph(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[Gt],
          delete n[Wo],
          delete n[Nl],
          delete n[Ax],
          delete n[Nx])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function hh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function mh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || hh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mu(e, n, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, n)
            : i.insertBefore(e, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(e, i))
              : ((n = i), n.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = ss));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (mu(e, n, i), e = e.sibling; e !== null; )
        mu(e, n, i), (e = e.sibling);
  }
  function gu(e, n, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (gu(e, n, i), e = e.sibling; e !== null; )
        gu(e, n, i), (e = e.sibling);
  }
  var et = null,
    Ft = !1;
  function On(e, n, i) {
    for (i = i.child; i !== null; ) gh(e, n, i), (i = i.sibling);
  }
  function gh(e, n, i) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
      try {
        Kt.onCommitFiberUnmount(Ui, i);
      } catch {}
    switch (i.tag) {
      case 5:
        st || Hr(i, n);
      case 6:
        var l = et,
          f = Ft;
        (et = null),
          On(e, n, i),
          (et = l),
          (Ft = f),
          et !== null &&
            (Ft
              ? ((e = et),
                (i = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(i)
                  : e.removeChild(i))
              : et.removeChild(i.stateNode));
        break;
      case 18:
        et !== null &&
          (Ft
            ? ((e = et),
              (i = i.stateNode),
              e.nodeType === 8
                ? Al(e.parentNode, i)
                : e.nodeType === 1 && Al(e, i),
              Lo(e))
            : Al(et, i.stateNode));
        break;
      case 4:
        (l = et),
          (f = Ft),
          (et = i.stateNode.containerInfo),
          (Ft = !0),
          On(e, n, i),
          (et = l),
          (Ft = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !st &&
          ((l = i.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          f = l = l.next;
          do {
            var h = f,
              x = h.destroy;
            (h = h.tag),
              x !== void 0 && (h & 2 || h & 4) && pu(i, n, x),
              (f = f.next);
          } while (f !== l);
        }
        On(e, n, i);
        break;
      case 1:
        if (
          !st &&
          (Hr(i, n),
          (l = i.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = i.memoizedProps),
              (l.state = i.memoizedState),
              l.componentWillUnmount();
          } catch (R) {
            ze(i, n, R);
          }
        On(e, n, i);
        break;
      case 21:
        On(e, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((st = (l = st) || i.memoizedState !== null), On(e, n, i), (st = l))
          : On(e, n, i);
        break;
      default:
        On(e, n, i);
    }
  }
  function vh(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new Kx()),
        n.forEach(function (l) {
          var f = nw.bind(null, e, l);
          i.has(l) || (i.add(l), l.then(f, f));
        });
    }
  }
  function zt(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var f = i[l];
        try {
          var h = e,
            x = n,
            R = x;
          e: for (; R !== null; ) {
            switch (R.tag) {
              case 5:
                (et = R.stateNode), (Ft = !1);
                break e;
              case 3:
                (et = R.stateNode.containerInfo), (Ft = !0);
                break e;
              case 4:
                (et = R.stateNode.containerInfo), (Ft = !0);
                break e;
            }
            R = R.return;
          }
          if (et === null) throw Error(o(160));
          gh(h, x, f), (et = null), (Ft = !1);
          var A = f.alternate;
          A !== null && (A.return = null), (f.return = null);
        } catch (_) {
          ze(f, n, _);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) yh(n, e), (n = n.sibling);
  }
  function yh(e, n) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((zt(n, e), Qt(e), l & 4)) {
          try {
            ti(3, e, e.return), As(3, e);
          } catch (ne) {
            ze(e, e.return, ne);
          }
          try {
            ti(5, e, e.return);
          } catch (ne) {
            ze(e, e.return, ne);
          }
        }
        break;
      case 1:
        zt(n, e), Qt(e), l & 512 && i !== null && Hr(i, i.return);
        break;
      case 5:
        if (
          (zt(n, e),
          Qt(e),
          l & 512 && i !== null && Hr(i, i.return),
          e.flags & 32)
        ) {
          var f = e.stateNode;
          try {
            Co(f, "");
          } catch (ne) {
            ze(e, e.return, ne);
          }
        }
        if (l & 4 && ((f = e.stateNode), f != null)) {
          var h = e.memoizedProps,
            x = i !== null ? i.memoizedProps : h,
            R = e.type,
            A = e.updateQueue;
          if (((e.updateQueue = null), A !== null))
            try {
              R === "input" && h.type === "radio" && h.name != null && Cn(f, h),
                Ga(R, x);
              var _ = Ga(R, h);
              for (x = 0; x < A.length; x += 2) {
                var $ = A[x],
                  H = A[x + 1];
                $ === "style"
                  ? Jd(f, H)
                  : $ === "dangerouslySetInnerHTML"
                    ? qd(f, H)
                    : $ === "children"
                      ? Co(f, H)
                      : N(f, $, H, _);
              }
              switch (R) {
                case "input":
                  rn(f, h);
                  break;
                case "textarea":
                  Yd(f, h);
                  break;
                case "select":
                  var U = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!h.multiple;
                  var q = h.value;
                  q != null
                    ? Tr(f, !!h.multiple, q, !1)
                    : U !== !!h.multiple &&
                      (h.defaultValue != null
                        ? Tr(f, !!h.multiple, h.defaultValue, !0)
                        : Tr(f, !!h.multiple, h.multiple ? [] : "", !1));
              }
              f[Wo] = h;
            } catch (ne) {
              ze(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((zt(n, e), Qt(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (f = e.stateNode), (h = e.memoizedProps);
          try {
            f.nodeValue = h;
          } catch (ne) {
            ze(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (zt(n, e), Qt(e), l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Lo(n.containerInfo);
          } catch (ne) {
            ze(e, e.return, ne);
          }
        break;
      case 4:
        zt(n, e), Qt(e);
        break;
      case 13:
        zt(n, e),
          Qt(e),
          (f = e.child),
          f.flags & 8192 &&
            ((h = f.memoizedState !== null),
            (f.stateNode.isHidden = h),
            !h ||
              (f.alternate !== null && f.alternate.memoizedState !== null) ||
              (xu = We())),
          l & 4 && vh(e);
        break;
      case 22:
        if (
          (($ = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((st = (_ = st) || $), zt(n, e), (st = _)) : zt(n, e),
          Qt(e),
          l & 8192)
        ) {
          if (
            ((_ = e.memoizedState !== null),
            (e.stateNode.isHidden = _) && !$ && e.mode & 1)
          )
            for (J = e, $ = e.child; $ !== null; ) {
              for (H = J = $; J !== null; ) {
                switch (((U = J), (q = U.child), U.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ti(4, U, U.return);
                    break;
                  case 1:
                    Hr(U, U.return);
                    var ee = U.stateNode;
                    if (typeof ee.componentWillUnmount == "function") {
                      (l = U), (i = U.return);
                      try {
                        (n = l),
                          (ee.props = n.memoizedProps),
                          (ee.state = n.memoizedState),
                          ee.componentWillUnmount();
                      } catch (ne) {
                        ze(l, i, ne);
                      }
                    }
                    break;
                  case 5:
                    Hr(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      Sh(H);
                      continue;
                    }
                }
                q !== null ? ((q.return = U), (J = q)) : Sh(H);
              }
              $ = $.sibling;
            }
          e: for ($ = null, H = e; ; ) {
            if (H.tag === 5) {
              if ($ === null) {
                $ = H;
                try {
                  (f = H.stateNode),
                    _
                      ? ((h = f.style),
                        typeof h.setProperty == "function"
                          ? h.setProperty("display", "none", "important")
                          : (h.display = "none"))
                      : ((R = H.stateNode),
                        (A = H.memoizedProps.style),
                        (x =
                          A != null && A.hasOwnProperty("display")
                            ? A.display
                            : null),
                        (R.style.display = Zd("display", x)));
                } catch (ne) {
                  ze(e, e.return, ne);
                }
              }
            } else if (H.tag === 6) {
              if ($ === null)
                try {
                  H.stateNode.nodeValue = _ ? "" : H.memoizedProps;
                } catch (ne) {
                  ze(e, e.return, ne);
                }
            } else if (
              ((H.tag !== 22 && H.tag !== 23) ||
                H.memoizedState === null ||
                H === e) &&
              H.child !== null
            ) {
              (H.child.return = H), (H = H.child);
              continue;
            }
            if (H === e) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e;
              $ === H && ($ = null), (H = H.return);
            }
            $ === H && ($ = null),
              (H.sibling.return = H.return),
              (H = H.sibling);
          }
        }
        break;
      case 19:
        zt(n, e), Qt(e), l & 4 && vh(e);
        break;
      case 21:
        break;
      default:
        zt(n, e), Qt(e);
    }
  }
  function Qt(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (hh(i)) {
              var l = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Co(f, ""), (l.flags &= -33));
            var h = mh(e);
            gu(e, h, f);
            break;
          case 3:
          case 4:
            var x = l.stateNode.containerInfo,
              R = mh(e);
            mu(e, R, x);
            break;
          default:
            throw Error(o(161));
        }
      } catch (A) {
        ze(e, e.return, A);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Yx(e, n, i) {
    (J = e), xh(e);
  }
  function xh(e, n, i) {
    for (var l = (e.mode & 1) !== 0; J !== null; ) {
      var f = J,
        h = f.child;
      if (f.tag === 22 && l) {
        var x = f.memoizedState !== null || bs;
        if (!x) {
          var R = f.alternate,
            A = (R !== null && R.memoizedState !== null) || st;
          R = bs;
          var _ = st;
          if (((bs = x), (st = A) && !_))
            for (J = f; J !== null; )
              (x = J),
                (A = x.child),
                x.tag === 22 && x.memoizedState !== null
                  ? Ch(f)
                  : A !== null
                    ? ((A.return = x), (J = A))
                    : Ch(f);
          for (; h !== null; ) (J = h), xh(h), (h = h.sibling);
          (J = f), (bs = R), (st = _);
        }
        wh(e);
      } else
        f.subtreeFlags & 8772 && h !== null ? ((h.return = f), (J = h)) : wh(e);
    }
  }
  function wh(e) {
    for (; J !== null; ) {
      var n = J;
      if (n.flags & 8772) {
        var i = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                st || As(5, n);
                break;
              case 1:
                var l = n.stateNode;
                if (n.flags & 4 && !st)
                  if (i === null) l.componentDidMount();
                  else {
                    var f =
                      n.elementType === n.type
                        ? i.memoizedProps
                        : Vt(n.type, i.memoizedProps);
                    l.componentDidUpdate(
                      f,
                      i.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var h = n.updateQueue;
                h !== null && Sp(n, h, l);
                break;
              case 3:
                var x = n.updateQueue;
                if (x !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  Sp(n, x, i);
                }
                break;
              case 5:
                var R = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = R;
                  var A = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      A.autoFocus && i.focus();
                      break;
                    case "img":
                      A.src && (i.src = A.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var _ = n.alternate;
                  if (_ !== null) {
                    var $ = _.memoizedState;
                    if ($ !== null) {
                      var H = $.dehydrated;
                      H !== null && Lo(H);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          st || (n.flags & 512 && hu(n));
        } catch (U) {
          ze(n, n.return, U);
        }
      }
      if (n === e) {
        J = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        (i.return = n.return), (J = i);
        break;
      }
      J = n.return;
    }
  }
  function Sh(e) {
    for (; J !== null; ) {
      var n = J;
      if (n === e) {
        J = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        (i.return = n.return), (J = i);
        break;
      }
      J = n.return;
    }
  }
  function Ch(e) {
    for (; J !== null; ) {
      var n = J;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              As(4, n);
            } catch (A) {
              ze(n, i, A);
            }
            break;
          case 1:
            var l = n.stateNode;
            if (typeof l.componentDidMount == "function") {
              var f = n.return;
              try {
                l.componentDidMount();
              } catch (A) {
                ze(n, f, A);
              }
            }
            var h = n.return;
            try {
              hu(n);
            } catch (A) {
              ze(n, h, A);
            }
            break;
          case 5:
            var x = n.return;
            try {
              hu(n);
            } catch (A) {
              ze(n, x, A);
            }
        }
      } catch (A) {
        ze(n, n.return, A);
      }
      if (n === e) {
        J = null;
        break;
      }
      var R = n.sibling;
      if (R !== null) {
        (R.return = n.return), (J = R);
        break;
      }
      J = n.return;
    }
  }
  var Xx = Math.ceil,
    Ns = L.ReactCurrentDispatcher,
    vu = L.ReactCurrentOwner,
    Mt = L.ReactCurrentBatchConfig,
    Pe = 0,
    Ze = null,
    Ye = null,
    tt = 0,
    Ct = 0,
    Kr = Mn(0),
    Qe = 0,
    ni = null,
    dr = 0,
    Ms = 0,
    yu = 0,
    ri = null,
    gt = null,
    xu = 0,
    Gr = 1 / 0,
    fn = null,
    js = !1,
    wu = null,
    _n = null,
    Ls = !1,
    Vn = null,
    Ds = 0,
    oi = 0,
    Su = null,
    Is = -1,
    Os = 0;
  function ct() {
    return Pe & 6 ? We() : Is !== -1 ? Is : (Is = We());
  }
  function Fn(e) {
    return e.mode & 1
      ? Pe & 2 && tt !== 0
        ? tt & -tt
        : jx.transition !== null
          ? (Os === 0 && (Os = mf()), Os)
          : ((e = Re),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Tf(e.type))),
            e)
      : 1;
  }
  function Bt(e, n, i, l) {
    if (50 < oi) throw ((oi = 0), (Su = null), Error(o(185)));
    bo(e, i, l),
      (!(Pe & 2) || e !== Ze) &&
        (e === Ze && (!(Pe & 2) && (Ms |= i), Qe === 4 && zn(e, tt)),
        vt(e, l),
        i === 1 &&
          Pe === 0 &&
          !(n.mode & 1) &&
          ((Gr = We() + 500), cs && Ln()));
  }
  function vt(e, n) {
    var i = e.callbackNode;
    j1(e, n);
    var l = Hi(e, e === Ze ? tt : 0);
    if (l === 0)
      i !== null && ff(i), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = l & -l), e.callbackPriority !== n)) {
      if ((i != null && ff(i), n === 1))
        e.tag === 0 ? Mx(Th.bind(null, e)) : up(Th.bind(null, e)),
          Rx(function () {
            !(Pe & 6) && Ln();
          }),
          (i = null);
      else {
        switch (gf(l)) {
          case 1:
            i = el;
            break;
          case 4:
            i = pf;
            break;
          case 16:
            i = Bi;
            break;
          case 536870912:
            i = hf;
            break;
          default:
            i = Bi;
        }
        i = jh(i, kh.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = i);
    }
  }
  function kh(e, n) {
    if (((Is = -1), (Os = 0), Pe & 6)) throw Error(o(327));
    var i = e.callbackNode;
    if (Yr() && e.callbackNode !== i) return null;
    var l = Hi(e, e === Ze ? tt : 0);
    if (l === 0) return null;
    if (l & 30 || l & e.expiredLanes || n) n = _s(e, l);
    else {
      n = l;
      var f = Pe;
      Pe |= 2;
      var h = Eh();
      (Ze !== e || tt !== n) && ((fn = null), (Gr = We() + 500), pr(e, n));
      do
        try {
          Zx();
          break;
        } catch (R) {
          Ph(e, R);
        }
      while (!0);
      Fl(),
        (Ns.current = h),
        (Pe = f),
        Ye !== null ? (n = 0) : ((Ze = null), (tt = 0), (n = Qe));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((f = tl(e)), f !== 0 && ((l = f), (n = Cu(e, f)))),
        n === 1)
      )
        throw ((i = ni), pr(e, 0), zn(e, l), vt(e, We()), i);
      if (n === 6) zn(e, l);
      else {
        if (
          ((f = e.current.alternate),
          !(l & 30) &&
            !Qx(f) &&
            ((n = _s(e, l)),
            n === 2 && ((h = tl(e)), h !== 0 && ((l = h), (n = Cu(e, h)))),
            n === 1))
        )
          throw ((i = ni), pr(e, 0), zn(e, l), vt(e, We()), i);
        switch (((e.finishedWork = f), (e.finishedLanes = l), n)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            hr(e, gt, fn);
            break;
          case 3:
            if (
              (zn(e, l),
              (l & 130023424) === l && ((n = xu + 500 - We()), 10 < n))
            ) {
              if (Hi(e, 0) !== 0) break;
              if (((f = e.suspendedLanes), (f & l) !== l)) {
                ct(), (e.pingedLanes |= e.suspendedLanes & f);
                break;
              }
              e.timeoutHandle = bl(hr.bind(null, e, gt, fn), n);
              break;
            }
            hr(e, gt, fn);
            break;
          case 4:
            if ((zn(e, l), (l & 4194240) === l)) break;
            for (n = e.eventTimes, f = -1; 0 < l; ) {
              var x = 31 - It(l);
              (h = 1 << x), (x = n[x]), x > f && (f = x), (l &= ~h);
            }
            if (
              ((l = f),
              (l = We() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * Xx(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = bl(hr.bind(null, e, gt, fn), l);
              break;
            }
            hr(e, gt, fn);
            break;
          case 5:
            hr(e, gt, fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return vt(e, We()), e.callbackNode === i ? kh.bind(null, e) : null;
  }
  function Cu(e, n) {
    var i = ri;
    return (
      e.current.memoizedState.isDehydrated && (pr(e, n).flags |= 256),
      (e = _s(e, n)),
      e !== 2 && ((n = gt), (gt = i), n !== null && ku(n)),
      e
    );
  }
  function ku(e) {
    gt === null ? (gt = e) : gt.push.apply(gt, e);
  }
  function Qx(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var l = 0; l < i.length; l++) {
            var f = i[l],
              h = f.getSnapshot;
            f = f.value;
            try {
              if (!Ot(h(), f)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        (i.return = n), (n = i);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function zn(e, n) {
    for (
      n &= ~yu,
        n &= ~Ms,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var i = 31 - It(n),
        l = 1 << i;
      (e[i] = -1), (n &= ~l);
    }
  }
  function Th(e) {
    if (Pe & 6) throw Error(o(327));
    Yr();
    var n = Hi(e, 0);
    if (!(n & 1)) return vt(e, We()), null;
    var i = _s(e, n);
    if (e.tag !== 0 && i === 2) {
      var l = tl(e);
      l !== 0 && ((n = l), (i = Cu(e, l)));
    }
    if (i === 1) throw ((i = ni), pr(e, 0), zn(e, n), vt(e, We()), i);
    if (i === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      hr(e, gt, fn),
      vt(e, We()),
      null
    );
  }
  function Tu(e, n) {
    var i = Pe;
    Pe |= 1;
    try {
      return e(n);
    } finally {
      (Pe = i), Pe === 0 && ((Gr = We() + 500), cs && Ln());
    }
  }
  function fr(e) {
    Vn !== null && Vn.tag === 0 && !(Pe & 6) && Yr();
    var n = Pe;
    Pe |= 1;
    var i = Mt.transition,
      l = Re;
    try {
      if (((Mt.transition = null), (Re = 1), e)) return e();
    } finally {
      (Re = l), (Mt.transition = i), (Pe = n), !(Pe & 6) && Ln();
    }
  }
  function Pu() {
    (Ct = Kr.current), je(Kr);
  }
  function pr(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), Ex(i)), Ye !== null))
      for (i = Ye.return; i !== null; ) {
        var l = i;
        switch ((Dl(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && ls();
            break;
          case 3:
            $r(), je(pt), je(rt), Gl();
            break;
          case 5:
            Hl(l);
            break;
          case 4:
            $r();
            break;
          case 13:
            je(Oe);
            break;
          case 19:
            je(Oe);
            break;
          case 10:
            zl(l.type._context);
            break;
          case 22:
          case 23:
            Pu();
        }
        i = i.return;
      }
    if (
      ((Ze = e),
      (Ye = e = Bn(e.current, null)),
      (tt = Ct = n),
      (Qe = 0),
      (ni = null),
      (yu = Ms = dr = 0),
      (gt = ri = null),
      lr !== null)
    ) {
      for (n = 0; n < lr.length; n++)
        if (((i = lr[n]), (l = i.interleaved), l !== null)) {
          i.interleaved = null;
          var f = l.next,
            h = i.pending;
          if (h !== null) {
            var x = h.next;
            (h.next = f), (l.next = x);
          }
          i.pending = l;
        }
      lr = null;
    }
    return e;
  }
  function Ph(e, n) {
    do {
      var i = Ye;
      try {
        if ((Fl(), (ws.current = Ts), Ss)) {
          for (var l = _e.memoizedState; l !== null; ) {
            var f = l.queue;
            f !== null && (f.pending = null), (l = l.next);
          }
          Ss = !1;
        }
        if (
          ((cr = 0),
          (qe = Xe = _e = null),
          (Qo = !1),
          (qo = 0),
          (vu.current = null),
          i === null || i.return === null)
        ) {
          (Qe = 1), (ni = n), (Ye = null);
          break;
        }
        e: {
          var h = e,
            x = i.return,
            R = i,
            A = n;
          if (
            ((n = tt),
            (R.flags |= 32768),
            A !== null && typeof A == "object" && typeof A.then == "function")
          ) {
            var _ = A,
              $ = R,
              H = $.tag;
            if (!($.mode & 1) && (H === 0 || H === 11 || H === 15)) {
              var U = $.alternate;
              U
                ? (($.updateQueue = U.updateQueue),
                  ($.memoizedState = U.memoizedState),
                  ($.lanes = U.lanes))
                : (($.updateQueue = null), ($.memoizedState = null));
            }
            var q = Qp(x);
            if (q !== null) {
              (q.flags &= -257),
                qp(q, x, R, h, n),
                q.mode & 1 && Xp(h, _, n),
                (n = q),
                (A = _);
              var ee = n.updateQueue;
              if (ee === null) {
                var ne = new Set();
                ne.add(A), (n.updateQueue = ne);
              } else ee.add(A);
              break e;
            } else {
              if (!(n & 1)) {
                Xp(h, _, n), Eu();
                break e;
              }
              A = Error(o(426));
            }
          } else if (Ie && R.mode & 1) {
            var He = Qp(x);
            if (He !== null) {
              !(He.flags & 65536) && (He.flags |= 256),
                qp(He, x, R, h, n),
                _l(Wr(A, R));
              break e;
            }
          }
          (h = A = Wr(A, R)),
            Qe !== 4 && (Qe = 2),
            ri === null ? (ri = [h]) : ri.push(h),
            (h = x);
          do {
            switch (h.tag) {
              case 3:
                (h.flags |= 65536), (n &= -n), (h.lanes |= n);
                var D = Gp(h, A, n);
                wp(h, D);
                break e;
              case 1:
                R = A;
                var M = h.type,
                  O = h.stateNode;
                if (
                  !(h.flags & 128) &&
                  (typeof M.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (_n === null || !_n.has(O))))
                ) {
                  (h.flags |= 65536), (n &= -n), (h.lanes |= n);
                  var G = Yp(h, R, n);
                  wp(h, G);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        bh(i);
      } catch (re) {
        (n = re), Ye === i && i !== null && (Ye = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Eh() {
    var e = Ns.current;
    return (Ns.current = Ts), e === null ? Ts : e;
  }
  function Eu() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
      Ze === null || (!(dr & 268435455) && !(Ms & 268435455)) || zn(Ze, tt);
  }
  function _s(e, n) {
    var i = Pe;
    Pe |= 2;
    var l = Eh();
    (Ze !== e || tt !== n) && ((fn = null), pr(e, n));
    do
      try {
        qx();
        break;
      } catch (f) {
        Ph(e, f);
      }
    while (!0);
    if ((Fl(), (Pe = i), (Ns.current = l), Ye !== null)) throw Error(o(261));
    return (Ze = null), (tt = 0), Qe;
  }
  function qx() {
    for (; Ye !== null; ) Rh(Ye);
  }
  function Zx() {
    for (; Ye !== null && !k1(); ) Rh(Ye);
  }
  function Rh(e) {
    var n = Mh(e.alternate, e, Ct);
    (e.memoizedProps = e.pendingProps),
      n === null ? bh(e) : (Ye = n),
      (vu.current = null);
  }
  function bh(e) {
    var n = e;
    do {
      var i = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((i = Hx(i, n)), i !== null)) {
          (i.flags &= 32767), (Ye = i);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Qe = 6), (Ye = null);
          return;
        }
      } else if (((i = Wx(i, n, Ct)), i !== null)) {
        Ye = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Ye = n;
        return;
      }
      Ye = n = e;
    } while (n !== null);
    Qe === 0 && (Qe = 5);
  }
  function hr(e, n, i) {
    var l = Re,
      f = Mt.transition;
    try {
      (Mt.transition = null), (Re = 1), Jx(e, n, i, l);
    } finally {
      (Mt.transition = f), (Re = l);
    }
    return null;
  }
  function Jx(e, n, i, l) {
    do Yr();
    while (Vn !== null);
    if (Pe & 6) throw Error(o(327));
    i = e.finishedWork;
    var f = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var h = i.lanes | i.childLanes;
    if (
      (L1(e, h),
      e === Ze && ((Ye = Ze = null), (tt = 0)),
      (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
        Ls ||
        ((Ls = !0),
        jh(Bi, function () {
          return Yr(), null;
        })),
      (h = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || h)
    ) {
      (h = Mt.transition), (Mt.transition = null);
      var x = Re;
      Re = 1;
      var R = Pe;
      (Pe |= 4),
        (vu.current = null),
        Gx(e, i),
        yh(i, e),
        xx(El),
        (Yi = !!Pl),
        (El = Pl = null),
        (e.current = i),
        Yx(i),
        T1(),
        (Pe = R),
        (Re = x),
        (Mt.transition = h);
    } else e.current = i;
    if (
      (Ls && ((Ls = !1), (Vn = e), (Ds = f)),
      (h = e.pendingLanes),
      h === 0 && (_n = null),
      R1(i.stateNode),
      vt(e, We()),
      n !== null)
    )
      for (l = e.onRecoverableError, i = 0; i < n.length; i++)
        (f = n[i]), l(f.value, { componentStack: f.stack, digest: f.digest });
    if (js) throw ((js = !1), (e = wu), (wu = null), e);
    return (
      Ds & 1 && e.tag !== 0 && Yr(),
      (h = e.pendingLanes),
      h & 1 ? (e === Su ? oi++ : ((oi = 0), (Su = e))) : (oi = 0),
      Ln(),
      null
    );
  }
  function Yr() {
    if (Vn !== null) {
      var e = gf(Ds),
        n = Mt.transition,
        i = Re;
      try {
        if (((Mt.transition = null), (Re = 16 > e ? 16 : e), Vn === null))
          var l = !1;
        else {
          if (((e = Vn), (Vn = null), (Ds = 0), Pe & 6)) throw Error(o(331));
          var f = Pe;
          for (Pe |= 4, J = e.current; J !== null; ) {
            var h = J,
              x = h.child;
            if (J.flags & 16) {
              var R = h.deletions;
              if (R !== null) {
                for (var A = 0; A < R.length; A++) {
                  var _ = R[A];
                  for (J = _; J !== null; ) {
                    var $ = J;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, $, h);
                    }
                    var H = $.child;
                    if (H !== null) (H.return = $), (J = H);
                    else
                      for (; J !== null; ) {
                        $ = J;
                        var U = $.sibling,
                          q = $.return;
                        if ((ph($), $ === _)) {
                          J = null;
                          break;
                        }
                        if (U !== null) {
                          (U.return = q), (J = U);
                          break;
                        }
                        J = q;
                      }
                  }
                }
                var ee = h.alternate;
                if (ee !== null) {
                  var ne = ee.child;
                  if (ne !== null) {
                    ee.child = null;
                    do {
                      var He = ne.sibling;
                      (ne.sibling = null), (ne = He);
                    } while (ne !== null);
                  }
                }
                J = h;
              }
            }
            if (h.subtreeFlags & 2064 && x !== null) (x.return = h), (J = x);
            else
              e: for (; J !== null; ) {
                if (((h = J), h.flags & 2048))
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ti(9, h, h.return);
                  }
                var D = h.sibling;
                if (D !== null) {
                  (D.return = h.return), (J = D);
                  break e;
                }
                J = h.return;
              }
          }
          var M = e.current;
          for (J = M; J !== null; ) {
            x = J;
            var O = x.child;
            if (x.subtreeFlags & 2064 && O !== null) (O.return = x), (J = O);
            else
              e: for (x = M; J !== null; ) {
                if (((R = J), R.flags & 2048))
                  try {
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        As(9, R);
                    }
                  } catch (re) {
                    ze(R, R.return, re);
                  }
                if (R === x) {
                  J = null;
                  break e;
                }
                var G = R.sibling;
                if (G !== null) {
                  (G.return = R.return), (J = G);
                  break e;
                }
                J = R.return;
              }
          }
          if (
            ((Pe = f),
            Ln(),
            Kt && typeof Kt.onPostCommitFiberRoot == "function")
          )
            try {
              Kt.onPostCommitFiberRoot(Ui, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Re = i), (Mt.transition = n);
      }
    }
    return !1;
  }
  function Ah(e, n, i) {
    (n = Wr(i, n)),
      (n = Gp(e, n, 1)),
      (e = In(e, n, 1)),
      (n = ct()),
      e !== null && (bo(e, 1, n), vt(e, n));
  }
  function ze(e, n, i) {
    if (e.tag === 3) Ah(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ah(n, e, i);
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (_n === null || !_n.has(l)))
          ) {
            (e = Wr(i, e)),
              (e = Yp(n, e, 1)),
              (n = In(n, e, 1)),
              (e = ct()),
              n !== null && (bo(n, 1, e), vt(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function ew(e, n, i) {
    var l = e.pingCache;
    l !== null && l.delete(n),
      (n = ct()),
      (e.pingedLanes |= e.suspendedLanes & i),
      Ze === e &&
        (tt & i) === i &&
        (Qe === 4 || (Qe === 3 && (tt & 130023424) === tt && 500 > We() - xu)
          ? pr(e, 0)
          : (yu |= i)),
      vt(e, n);
  }
  function Nh(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Wi), (Wi <<= 1), !(Wi & 130023424) && (Wi = 4194304))
        : (n = 1));
    var i = ct();
    (e = un(e, n)), e !== null && (bo(e, n, i), vt(e, i));
  }
  function tw(e) {
    var n = e.memoizedState,
      i = 0;
    n !== null && (i = n.retryLane), Nh(e, i);
  }
  function nw(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          f = e.memoizedState;
        f !== null && (i = f.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(n), Nh(e, i);
  }
  var Mh;
  Mh = function (e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || pt.current) mt = !0;
      else {
        if (!(e.lanes & i) && !(n.flags & 128)) return (mt = !1), $x(e, n, i);
        mt = !!(e.flags & 131072);
      }
    else (mt = !1), Ie && n.flags & 1048576 && cp(n, fs, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var l = n.type;
        Rs(e, n), (e = n.pendingProps);
        var f = Or(n, rt.current);
        Ur(n, i), (f = Ql(null, n, l, e, f, i));
        var h = ql();
        return (
          (n.flags |= 1),
          typeof f == "object" &&
          f !== null &&
          typeof f.render == "function" &&
          f.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              ht(l) ? ((h = !0), us(n)) : (h = !1),
              (n.memoizedState =
                f.state !== null && f.state !== void 0 ? f.state : null),
              $l(n),
              (f.updater = Ps),
              (n.stateNode = f),
              (f._reactInternals = n),
              ru(n, l, e, i),
              (n = au(null, n, l, !0, h, i)))
            : ((n.tag = 0), Ie && h && Ll(n), ut(null, n, f, i), (n = n.child)),
          n
        );
      case 16:
        l = n.elementType;
        e: {
          switch (
            (Rs(e, n),
            (e = n.pendingProps),
            (f = l._init),
            (l = f(l._payload)),
            (n.type = l),
            (f = n.tag = ow(l)),
            (e = Vt(l, e)),
            f)
          ) {
            case 0:
              n = su(null, n, l, e, i);
              break e;
            case 1:
              n = rh(null, n, l, e, i);
              break e;
            case 11:
              n = Zp(null, n, l, e, i);
              break e;
            case 14:
              n = Jp(null, n, l, Vt(l.type, e), i);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return n;
      case 0:
        return (
          (l = n.type),
          (f = n.pendingProps),
          (f = n.elementType === l ? f : Vt(l, f)),
          su(e, n, l, f, i)
        );
      case 1:
        return (
          (l = n.type),
          (f = n.pendingProps),
          (f = n.elementType === l ? f : Vt(l, f)),
          rh(e, n, l, f, i)
        );
      case 3:
        e: {
          if ((oh(n), e === null)) throw Error(o(387));
          (l = n.pendingProps),
            (h = n.memoizedState),
            (f = h.element),
            xp(e, n),
            ys(n, l, null, i);
          var x = n.memoizedState;
          if (((l = x.element), h.isDehydrated))
            if (
              ((h = {
                element: l,
                isDehydrated: !1,
                cache: x.cache,
                pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                transitions: x.transitions,
              }),
              (n.updateQueue.baseState = h),
              (n.memoizedState = h),
              n.flags & 256)
            ) {
              (f = Wr(Error(o(423)), n)), (n = ih(e, n, l, i, f));
              break e;
            } else if (l !== f) {
              (f = Wr(Error(o(424)), n)), (n = ih(e, n, l, i, f));
              break e;
            } else
              for (
                St = Nn(n.stateNode.containerInfo.firstChild),
                  wt = n,
                  Ie = !0,
                  _t = null,
                  i = vp(n, null, l, i),
                  n.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((Fr(), l === f)) {
              n = dn(e, n, i);
              break e;
            }
            ut(e, n, l, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          Cp(n),
          e === null && Ol(n),
          (l = n.type),
          (f = n.pendingProps),
          (h = e !== null ? e.memoizedProps : null),
          (x = f.children),
          Rl(l, f) ? (x = null) : h !== null && Rl(l, h) && (n.flags |= 32),
          nh(e, n),
          ut(e, n, x, i),
          n.child
        );
      case 6:
        return e === null && Ol(n), null;
      case 13:
        return sh(e, n, i);
      case 4:
        return (
          Wl(n, n.stateNode.containerInfo),
          (l = n.pendingProps),
          e === null ? (n.child = zr(n, null, l, i)) : ut(e, n, l, i),
          n.child
        );
      case 11:
        return (
          (l = n.type),
          (f = n.pendingProps),
          (f = n.elementType === l ? f : Vt(l, f)),
          Zp(e, n, l, f, i)
        );
      case 7:
        return ut(e, n, n.pendingProps, i), n.child;
      case 8:
        return ut(e, n, n.pendingProps.children, i), n.child;
      case 12:
        return ut(e, n, n.pendingProps.children, i), n.child;
      case 10:
        e: {
          if (
            ((l = n.type._context),
            (f = n.pendingProps),
            (h = n.memoizedProps),
            (x = f.value),
            Ae(ms, l._currentValue),
            (l._currentValue = x),
            h !== null)
          )
            if (Ot(h.value, x)) {
              if (h.children === f.children && !pt.current) {
                n = dn(e, n, i);
                break e;
              }
            } else
              for (h = n.child, h !== null && (h.return = n); h !== null; ) {
                var R = h.dependencies;
                if (R !== null) {
                  x = h.child;
                  for (var A = R.firstContext; A !== null; ) {
                    if (A.context === l) {
                      if (h.tag === 1) {
                        (A = cn(-1, i & -i)), (A.tag = 2);
                        var _ = h.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var $ = _.pending;
                          $ === null
                            ? (A.next = A)
                            : ((A.next = $.next), ($.next = A)),
                            (_.pending = A);
                        }
                      }
                      (h.lanes |= i),
                        (A = h.alternate),
                        A !== null && (A.lanes |= i),
                        Bl(h.return, i, n),
                        (R.lanes |= i);
                      break;
                    }
                    A = A.next;
                  }
                } else if (h.tag === 10) x = h.type === n.type ? null : h.child;
                else if (h.tag === 18) {
                  if (((x = h.return), x === null)) throw Error(o(341));
                  (x.lanes |= i),
                    (R = x.alternate),
                    R !== null && (R.lanes |= i),
                    Bl(x, i, n),
                    (x = h.sibling);
                } else x = h.child;
                if (x !== null) x.return = h;
                else
                  for (x = h; x !== null; ) {
                    if (x === n) {
                      x = null;
                      break;
                    }
                    if (((h = x.sibling), h !== null)) {
                      (h.return = x.return), (x = h);
                      break;
                    }
                    x = x.return;
                  }
                h = x;
              }
          ut(e, n, f.children, i), (n = n.child);
        }
        return n;
      case 9:
        return (
          (f = n.type),
          (l = n.pendingProps.children),
          Ur(n, i),
          (f = At(f)),
          (l = l(f)),
          (n.flags |= 1),
          ut(e, n, l, i),
          n.child
        );
      case 14:
        return (
          (l = n.type),
          (f = Vt(l, n.pendingProps)),
          (f = Vt(l.type, f)),
          Jp(e, n, l, f, i)
        );
      case 15:
        return eh(e, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (l = n.type),
          (f = n.pendingProps),
          (f = n.elementType === l ? f : Vt(l, f)),
          Rs(e, n),
          (n.tag = 1),
          ht(l) ? ((e = !0), us(n)) : (e = !1),
          Ur(n, i),
          Hp(n, l, f),
          ru(n, l, f, i),
          au(null, n, l, !0, e, i)
        );
      case 19:
        return lh(e, n, i);
      case 22:
        return th(e, n, i);
    }
    throw Error(o(156, n.tag));
  };
  function jh(e, n) {
    return df(e, n);
  }
  function rw(e, n, i, l) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function jt(e, n, i, l) {
    return new rw(e, n, i, l);
  }
  function Ru(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ow(e) {
    if (typeof e == "function") return Ru(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Z)) return 11;
      if (e === Ce) return 14;
    }
    return 2;
  }
  function Bn(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = jt(e.tag, n, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = n),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Vs(e, n, i, l, f, h) {
    var x = 2;
    if (((l = e), typeof e == "function")) Ru(e) && (x = 1);
    else if (typeof e == "string") x = 5;
    else
      e: switch (e) {
        case z:
          return mr(i.children, f, h, n);
        case W:
          (x = 8), (f |= 8);
          break;
        case te:
          return (
            (e = jt(12, i, n, f | 2)), (e.elementType = te), (e.lanes = h), e
          );
        case fe:
          return (e = jt(13, i, n, f)), (e.elementType = fe), (e.lanes = h), e;
        case le:
          return (e = jt(19, i, n, f)), (e.elementType = le), (e.lanes = h), e;
        case X:
          return Fs(i, f, h, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case oe:
                x = 10;
                break e;
              case ge:
                x = 9;
                break e;
              case Z:
                x = 11;
                break e;
              case Ce:
                x = 14;
                break e;
              case ie:
                (x = 16), (l = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = jt(x, i, n, f)), (n.elementType = e), (n.type = l), (n.lanes = h), n
    );
  }
  function mr(e, n, i, l) {
    return (e = jt(7, e, l, n)), (e.lanes = i), e;
  }
  function Fs(e, n, i, l) {
    return (
      (e = jt(22, e, l, n)),
      (e.elementType = X),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function bu(e, n, i) {
    return (e = jt(6, e, null, n)), (e.lanes = i), e;
  }
  function Au(e, n, i) {
    return (
      (n = jt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function iw(e, n, i, l, f) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = nl(0)),
      (this.expirationTimes = nl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = nl(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = f),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Nu(e, n, i, l, f, h, x, R, A) {
    return (
      (e = new iw(e, n, i, R, A)),
      n === 1 ? ((n = 1), h === !0 && (n |= 8)) : (n = 0),
      (h = jt(3, null, null, n)),
      (e.current = h),
      (h.stateNode = e),
      (h.memoizedState = {
        element: l,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      $l(h),
      e
    );
  }
  function sw(e, n, i) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: n,
      implementation: i,
    };
  }
  function Lh(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (rr(e) !== e || e.tag !== 1) throw Error(o(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (ht(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (ht(i)) return ap(e, i, n);
    }
    return n;
  }
  function Dh(e, n, i, l, f, h, x, R, A) {
    return (
      (e = Nu(i, l, !0, e, f, h, x, R, A)),
      (e.context = Lh(null)),
      (i = e.current),
      (l = ct()),
      (f = Fn(i)),
      (h = cn(l, f)),
      (h.callback = n ?? null),
      In(i, h, f),
      (e.current.lanes = f),
      bo(e, f, l),
      vt(e, l),
      e
    );
  }
  function zs(e, n, i, l) {
    var f = n.current,
      h = ct(),
      x = Fn(f);
    return (
      (i = Lh(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = cn(h, x)),
      (n.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (n.callback = l),
      (e = In(f, n, x)),
      e !== null && (Bt(e, f, x, h), vs(e, f, x)),
      x
    );
  }
  function Bs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ih(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Mu(e, n) {
    Ih(e, n), (e = e.alternate) && Ih(e, n);
  }
  function aw() {
    return null;
  }
  var Oh =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ju(e) {
    this._internalRoot = e;
  }
  (Us.prototype.render = ju.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      zs(e, n, null, null);
    }),
    (Us.prototype.unmount = ju.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          fr(function () {
            zs(null, e, null, null);
          }),
            (n[on] = null);
        }
      });
  function Us(e) {
    this._internalRoot = e;
  }
  Us.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = xf();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Rn.length && n !== 0 && n < Rn[i].priority; i++);
      Rn.splice(i, 0, e), i === 0 && Cf(e);
    }
  };
  function Lu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function $s(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function _h() {}
  function lw(e, n, i, l, f) {
    if (f) {
      if (typeof l == "function") {
        var h = l;
        l = function () {
          var _ = Bs(x);
          h.call(_);
        };
      }
      var x = Dh(n, l, e, 0, null, !1, !1, "", _h);
      return (
        (e._reactRootContainer = x),
        (e[on] = x.current),
        Uo(e.nodeType === 8 ? e.parentNode : e),
        fr(),
        x
      );
    }
    for (; (f = e.lastChild); ) e.removeChild(f);
    if (typeof l == "function") {
      var R = l;
      l = function () {
        var _ = Bs(A);
        R.call(_);
      };
    }
    var A = Nu(e, 0, !1, null, null, !1, !1, "", _h);
    return (
      (e._reactRootContainer = A),
      (e[on] = A.current),
      Uo(e.nodeType === 8 ? e.parentNode : e),
      fr(function () {
        zs(n, A, i, l);
      }),
      A
    );
  }
  function Ws(e, n, i, l, f) {
    var h = i._reactRootContainer;
    if (h) {
      var x = h;
      if (typeof f == "function") {
        var R = f;
        f = function () {
          var A = Bs(x);
          R.call(A);
        };
      }
      zs(n, x, e, f);
    } else x = lw(i, n, e, f, l);
    return Bs(x);
  }
  (vf = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = Ro(n.pendingLanes);
          i !== 0 &&
            (rl(n, i | 1), vt(n, We()), !(Pe & 6) && ((Gr = We() + 500), Ln()));
        }
        break;
      case 13:
        fr(function () {
          var l = un(e, 1);
          if (l !== null) {
            var f = ct();
            Bt(l, e, 1, f);
          }
        }),
          Mu(e, 1);
    }
  }),
    (ol = function (e) {
      if (e.tag === 13) {
        var n = un(e, 134217728);
        if (n !== null) {
          var i = ct();
          Bt(n, e, 134217728, i);
        }
        Mu(e, 134217728);
      }
    }),
    (yf = function (e) {
      if (e.tag === 13) {
        var n = Fn(e),
          i = un(e, n);
        if (i !== null) {
          var l = ct();
          Bt(i, e, n, l);
        }
        Mu(e, n);
      }
    }),
    (xf = function () {
      return Re;
    }),
    (wf = function (e, n) {
      var i = Re;
      try {
        return (Re = e), n();
      } finally {
        Re = i;
      }
    }),
    (Qa = function (e, n, i) {
      switch (n) {
        case "input":
          if ((rn(e, i), (n = i.name), i.type === "radio" && n != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var l = i[n];
              if (l !== e && l.form === e.form) {
                var f = as(l);
                if (!f) throw Error(o(90));
                Te(l), rn(l, f);
              }
            }
          }
          break;
        case "textarea":
          Yd(e, i);
          break;
        case "select":
          (n = i.value), n != null && Tr(e, !!i.multiple, n, !1);
      }
    }),
    (rf = Tu),
    (of = fr);
  var uw = { usingClientEntryPoint: !1, Events: [Ho, Dr, as, tf, nf, Tu] },
    ii = {
      findFiberByHostInstance: or,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    cw = {
      bundleType: ii.bundleType,
      version: ii.version,
      rendererPackageName: ii.rendererPackageName,
      rendererConfig: ii.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: L.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = uf(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ii.findFiberByHostInstance || aw,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hs.isDisabled && Hs.supportsFiber)
      try {
        (Ui = Hs.inject(cw)), (Kt = Hs);
      } catch {}
  }
  return (
    (yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uw),
    (yt.createPortal = function (e, n) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Lu(n)) throw Error(o(200));
      return sw(e, n, null, i);
    }),
    (yt.createRoot = function (e, n) {
      if (!Lu(e)) throw Error(o(299));
      var i = !1,
        l = "",
        f = Oh;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        (n = Nu(e, 1, !1, null, null, i, !1, l, f)),
        (e[on] = n.current),
        Uo(e.nodeType === 8 ? e.parentNode : e),
        new ju(n)
      );
    }),
    (yt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = uf(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (yt.flushSync = function (e) {
      return fr(e);
    }),
    (yt.hydrate = function (e, n, i) {
      if (!$s(n)) throw Error(o(200));
      return Ws(null, e, n, !0, i);
    }),
    (yt.hydrateRoot = function (e, n, i) {
      if (!Lu(e)) throw Error(o(405));
      var l = (i != null && i.hydratedSources) || null,
        f = !1,
        h = "",
        x = Oh;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (f = !0),
          i.identifierPrefix !== void 0 && (h = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (x = i.onRecoverableError)),
        (n = Dh(n, null, e, 1, i ?? null, f, !1, h, x)),
        (e[on] = n.current),
        Uo(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (i = l[e]),
            (f = i._getVersion),
            (f = f(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, f])
              : n.mutableSourceEagerHydrationData.push(i, f);
      return new Us(n);
    }),
    (yt.render = function (e, n, i) {
      if (!$s(n)) throw Error(o(200));
      return Ws(null, e, n, !1, i);
    }),
    (yt.unmountComponentAtNode = function (e) {
      if (!$s(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (fr(function () {
            Ws(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[on] = null);
            });
          }),
          !0)
        : !1;
    }),
    (yt.unstable_batchedUpdates = Tu),
    (yt.unstable_renderSubtreeIntoContainer = function (e, n, i, l) {
      if (!$s(i)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Ws(e, n, i, !1, l);
    }),
    (yt.version = "18.3.1-next-f1338f8080-20240426"),
    yt
  );
}
var Hh;
function zg() {
  if (Hh) return Ou.exports;
  Hh = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), (Ou.exports = xw()), Ou.exports;
}
var Kh;
function ww() {
  if (Kh) return Ks;
  Kh = 1;
  var t = zg();
  return (Ks.createRoot = t.createRoot), (Ks.hydrateRoot = t.hydrateRoot), Ks;
}
var Sw = ww();
function Cw(t) {
  if (typeof Proxy > "u") return t;
  const r = new Map(),
    o = (...s) => t(...s);
  return new Proxy(o, {
    get: (s, a) =>
      a === "create" ? t : (r.has(a) || r.set(a, t(a)), r.get(a)),
  });
}
function Pa(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const uc = (t) => Array.isArray(t);
function Bg(t, r) {
  if (!Array.isArray(r)) return !1;
  const o = r.length;
  if (o !== t.length) return !1;
  for (let s = 0; s < o; s++) if (r[s] !== t[s]) return !1;
  return !0;
}
function wi(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Gh(t) {
  const r = [{}, {}];
  return (
    t == null ||
      t.values.forEach((o, s) => {
        (r[0][s] = o.get()), (r[1][s] = o.getVelocity());
      }),
    r
  );
}
function Wc(t, r, o, s) {
  if (typeof r == "function") {
    const [a, u] = Gh(s);
    r = r(o !== void 0 ? o : t.custom, a, u);
  }
  if (
    (typeof r == "string" && (r = t.variants && t.variants[r]),
    typeof r == "function")
  ) {
    const [a, u] = Gh(s);
    r = r(o !== void 0 ? o : t.custom, a, u);
  }
  return r;
}
function Ea(t, r, o) {
  const s = t.getProps();
  return Wc(s, r, o !== void 0 ? o : s.custom, t);
}
const Hc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Kc = ["initial", ...Hc],
  bi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  kr = new Set(bi),
  mn = (t) => t * 1e3,
  gn = (t) => t / 1e3,
  kw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Tw = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Pw = { type: "keyframes", duration: 0.8 },
  Ew = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Rw = (t, { keyframes: r }) =>
    r.length > 2
      ? Pw
      : kr.has(t)
        ? t.startsWith("scale")
          ? Tw(r[1])
          : kw
        : Ew;
function Gc(t, r) {
  return t ? t[r] || t.default || t : void 0;
}
const bw = { skipAnimations: !1, useManualTiming: !1 },
  Aw = (t) => t !== null;
function Ra(t, { repeat: r, repeatType: o = "loop" }, s) {
  const a = t.filter(Aw),
    u = r && o !== "loop" && r % 2 === 1 ? 0 : a.length - 1;
  return !u || s === void 0 ? a[u] : s;
}
const Tt = (t) => t;
let cc = Tt;
function Nw(t) {
  let r = new Set(),
    o = new Set(),
    s = !1,
    a = !1;
  const u = new WeakSet();
  let c = { delta: 0, timestamp: 0, isProcessing: !1 };
  function d(m) {
    u.has(m) && (p.schedule(m), t()), m(c);
  }
  const p = {
    schedule: (m, g = !1, v = !1) => {
      const C = v && s ? r : o;
      return g && u.add(m), C.has(m) || C.add(m), m;
    },
    cancel: (m) => {
      o.delete(m), u.delete(m);
    },
    process: (m) => {
      if (((c = m), s)) {
        a = !0;
        return;
      }
      (s = !0),
        ([r, o] = [o, r]),
        r.forEach(d),
        r.clear(),
        (s = !1),
        a && ((a = !1), p.process(m));
    },
  };
  return p;
}
const Gs = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Mw = 40;
function Ug(t, r) {
  let o = !1,
    s = !0;
  const a = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (o = !0),
    c = Gs.reduce((E, b) => ((E[b] = Nw(u)), E), {}),
    {
      read: d,
      resolveKeyframes: p,
      update: m,
      preRender: g,
      render: v,
      postRender: y,
    } = c,
    C = () => {
      const E = performance.now();
      (o = !1),
        (a.delta = s ? 1e3 / 60 : Math.max(Math.min(E - a.timestamp, Mw), 1)),
        (a.timestamp = E),
        (a.isProcessing = !0),
        d.process(a),
        p.process(a),
        m.process(a),
        g.process(a),
        v.process(a),
        y.process(a),
        (a.isProcessing = !1),
        o && r && ((s = !1), t(C));
    },
    P = () => {
      (o = !0), (s = !0), a.isProcessing || t(C);
    };
  return {
    schedule: Gs.reduce((E, b) => {
      const N = c[b];
      return (E[b] = (L, I = !1, B = !1) => (o || P(), N.schedule(L, I, B))), E;
    }, {}),
    cancel: (E) => {
      for (let b = 0; b < Gs.length; b++) c[Gs[b]].cancel(E);
    },
    state: a,
    steps: c,
  };
}
const {
    schedule: De,
    cancel: Xn,
    state: nt,
    steps: Fu,
  } = Ug(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Tt, !0),
  $g = (t, r, o) =>
    (((1 - 3 * o + 3 * r) * t + (3 * o - 6 * r)) * t + 3 * r) * t,
  jw = 1e-7,
  Lw = 12;
function Dw(t, r, o, s, a) {
  let u,
    c,
    d = 0;
  do (c = r + (o - r) / 2), (u = $g(c, s, a) - t), u > 0 ? (o = c) : (r = c);
  while (Math.abs(u) > jw && ++d < Lw);
  return c;
}
function Ai(t, r, o, s) {
  if (t === r && o === s) return Tt;
  const a = (u) => Dw(u, 0, 1, t, o);
  return (u) => (u === 0 || u === 1 ? u : $g(a(u), r, s));
}
const Wg = (t) => (r) => (r <= 0.5 ? t(2 * r) / 2 : (2 - t(2 * (1 - r))) / 2),
  Hg = (t) => (r) => 1 - t(1 - r),
  Kg = Ai(0.33, 1.53, 0.69, 0.99),
  Yc = Hg(Kg),
  Gg = Wg(Yc),
  Yg = (t) =>
    (t *= 2) < 1 ? 0.5 * Yc(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Xc = (t) => 1 - Math.sin(Math.acos(t)),
  Xg = Hg(Xc),
  Qg = Wg(Xc),
  qg = (t) => /^0[^.\s]+$/u.test(t);
function Iw(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || qg(t)
      : !0;
}
const Zg = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  Jg = (t) => (r) => typeof r == "string" && r.startsWith(t),
  ev = Jg("--"),
  Ow = Jg("var(--"),
  Qc = (t) => (Ow(t) ? _w.test(t.split("/*")[0].trim()) : !1),
  _w =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Vw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Fw(t) {
  const r = Vw.exec(t);
  if (!r) return [,];
  const [, o, s, a] = r;
  return [`--${o ?? s}`, a];
}
function tv(t, r, o = 1) {
  const [s, a] = Fw(t);
  if (!s) return;
  const u = window.getComputedStyle(r).getPropertyValue(s);
  if (u) {
    const c = u.trim();
    return Zg(c) ? parseFloat(c) : c;
  }
  return Qc(a) ? tv(a, r, o + 1) : a;
}
const vn = (t, r, o) => (o > r ? r : o < t ? t : o),
  mo = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Si = { ...mo, transform: (t) => vn(0, 1, t) },
  Ys = { ...mo, default: 1 },
  Ni = (t) => ({
    test: (r) =>
      typeof r == "string" && r.endsWith(t) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: (r) => `${r}${t}`,
  }),
  Kn = Ni("deg"),
  Zt = Ni("%"),
  de = Ni("px"),
  zw = Ni("vh"),
  Bw = Ni("vw"),
  Yh = {
    ...Zt,
    parse: (t) => Zt.parse(t) / 100,
    transform: (t) => Zt.transform(t * 100),
  },
  Uw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Xh = (t) => t === mo || t === de,
  Qh = (t, r) => parseFloat(t.split(", ")[r]),
  qh =
    (t, r) =>
    (o, { transform: s }) => {
      if (s === "none" || !s) return 0;
      const a = s.match(/^matrix3d\((.+)\)$/u);
      if (a) return Qh(a[1], r);
      {
        const u = s.match(/^matrix\((.+)\)$/u);
        return u ? Qh(u[1], t) : 0;
      }
    },
  $w = new Set(["x", "y", "z"]),
  Ww = bi.filter((t) => !$w.has(t));
function Hw(t) {
  const r = [];
  return (
    Ww.forEach((o) => {
      const s = t.getValue(o);
      s !== void 0 &&
        (r.push([o, s.get()]), s.set(o.startsWith("scale") ? 1 : 0));
    }),
    r
  );
}
const lo = {
  width: ({ x: t }, { paddingLeft: r = "0", paddingRight: o = "0" }) =>
    t.max - t.min - parseFloat(r) - parseFloat(o),
  height: ({ y: t }, { paddingTop: r = "0", paddingBottom: o = "0" }) =>
    t.max - t.min - parseFloat(r) - parseFloat(o),
  top: (t, { top: r }) => parseFloat(r),
  left: (t, { left: r }) => parseFloat(r),
  bottom: ({ y: t }, { top: r }) => parseFloat(r) + (t.max - t.min),
  right: ({ x: t }, { left: r }) => parseFloat(r) + (t.max - t.min),
  x: qh(4, 13),
  y: qh(5, 14),
};
lo.translateX = lo.x;
lo.translateY = lo.y;
const nv = (t) => (r) => r.test(t),
  Kw = { test: (t) => t === "auto", parse: (t) => t },
  rv = [mo, de, Zt, Kn, Bw, zw, Kw],
  Zh = (t) => rv.find(nv(t)),
  wr = new Set();
let dc = !1,
  fc = !1;
function ov() {
  if (fc) {
    const t = Array.from(wr).filter((s) => s.needsMeasurement),
      r = new Set(t.map((s) => s.element)),
      o = new Map();
    r.forEach((s) => {
      const a = Hw(s);
      a.length && (o.set(s, a), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      r.forEach((s) => {
        s.render();
        const a = o.get(s);
        a &&
          a.forEach(([u, c]) => {
            var d;
            (d = s.getValue(u)) === null || d === void 0 || d.set(c);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (fc = !1), (dc = !1), wr.forEach((t) => t.complete()), wr.clear();
}
function iv() {
  wr.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (fc = !0);
  });
}
function Gw() {
  iv(), ov();
}
class qc {
  constructor(r, o, s, a, u, c = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...r]),
      (this.onComplete = o),
      (this.name = s),
      (this.motionValue = a),
      (this.element = u),
      (this.isAsync = c);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (wr.add(this),
          dc || ((dc = !0), De.read(iv), De.resolveKeyframes(ov)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: r,
      name: o,
      element: s,
      motionValue: a,
    } = this;
    for (let u = 0; u < r.length; u++)
      if (r[u] === null)
        if (u === 0) {
          const c = a == null ? void 0 : a.get(),
            d = r[r.length - 1];
          if (c !== void 0) r[0] = c;
          else if (s && o) {
            const p = s.readValue(o, d);
            p != null && (r[0] = p);
          }
          r[0] === void 0 && (r[0] = d), a && c === void 0 && a.set(r[0]);
        } else r[u] = r[u - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      wr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), wr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const hi = (t) => Math.round(t * 1e5) / 1e5,
  Zc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Yw(t) {
  return t == null;
}
const Xw =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Jc = (t, r) => (o) =>
    !!(
      (typeof o == "string" && Xw.test(o) && o.startsWith(t)) ||
      (r && !Yw(o) && Object.prototype.hasOwnProperty.call(o, r))
    ),
  sv = (t, r, o) => (s) => {
    if (typeof s != "string") return s;
    const [a, u, c, d] = s.match(Zc);
    return {
      [t]: parseFloat(a),
      [r]: parseFloat(u),
      [o]: parseFloat(c),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  Qw = (t) => vn(0, 255, t),
  zu = { ...mo, transform: (t) => Math.round(Qw(t)) },
  xr = {
    test: Jc("rgb", "red"),
    parse: sv("red", "green", "blue"),
    transform: ({ red: t, green: r, blue: o, alpha: s = 1 }) =>
      "rgba(" +
      zu.transform(t) +
      ", " +
      zu.transform(r) +
      ", " +
      zu.transform(o) +
      ", " +
      hi(Si.transform(s)) +
      ")",
  };
function qw(t) {
  let r = "",
    o = "",
    s = "",
    a = "";
  return (
    t.length > 5
      ? ((r = t.substring(1, 3)),
        (o = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (a = t.substring(7, 9)))
      : ((r = t.substring(1, 2)),
        (o = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (a = t.substring(4, 5)),
        (r += r),
        (o += o),
        (s += s),
        (a += a)),
    {
      red: parseInt(r, 16),
      green: parseInt(o, 16),
      blue: parseInt(s, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1,
    }
  );
}
const pc = { test: Jc("#"), parse: qw, transform: xr.transform },
  Jr = {
    test: Jc("hsl", "hue"),
    parse: sv("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: r, lightness: o, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      Zt.transform(hi(r)) +
      ", " +
      Zt.transform(hi(o)) +
      ", " +
      hi(Si.transform(s)) +
      ")",
  },
  at = {
    test: (t) => xr.test(t) || pc.test(t) || Jr.test(t),
    parse: (t) =>
      xr.test(t) ? xr.parse(t) : Jr.test(t) ? Jr.parse(t) : pc.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? xr.transform(t)
          : Jr.transform(t),
  },
  Zw =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Jw(t) {
  var r, o;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((r = t.match(Zc)) === null || r === void 0 ? void 0 : r.length) || 0) +
      (((o = t.match(Zw)) === null || o === void 0 ? void 0 : o.length) || 0) >
      0
  );
}
const av = "number",
  lv = "color",
  eS = "var",
  tS = "var(",
  Jh = "${}",
  nS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ci(t) {
  const r = t.toString(),
    o = [],
    s = { color: [], number: [], var: [] },
    a = [];
  let u = 0;
  const d = r
    .replace(
      nS,
      (p) => (
        at.test(p)
          ? (s.color.push(u), a.push(lv), o.push(at.parse(p)))
          : p.startsWith(tS)
            ? (s.var.push(u), a.push(eS), o.push(p))
            : (s.number.push(u), a.push(av), o.push(parseFloat(p))),
        ++u,
        Jh
      ),
    )
    .split(Jh);
  return { values: o, split: d, indexes: s, types: a };
}
function uv(t) {
  return Ci(t).values;
}
function cv(t) {
  const { split: r, types: o } = Ci(t),
    s = r.length;
  return (a) => {
    let u = "";
    for (let c = 0; c < s; c++)
      if (((u += r[c]), a[c] !== void 0)) {
        const d = o[c];
        d === av
          ? (u += hi(a[c]))
          : d === lv
            ? (u += at.transform(a[c]))
            : (u += a[c]);
      }
    return u;
  };
}
const rS = (t) => (typeof t == "number" ? 0 : t);
function oS(t) {
  const r = uv(t);
  return cv(t)(r.map(rS));
}
const Qn = {
    test: Jw,
    parse: uv,
    createTransformer: cv,
    getAnimatableNone: oS,
  },
  iS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function sS(t) {
  const [r, o] = t.slice(0, -1).split("(");
  if (r === "drop-shadow") return t;
  const [s] = o.match(Zc) || [];
  if (!s) return t;
  const a = o.replace(s, "");
  let u = iS.has(r) ? 1 : 0;
  return s !== o && (u *= 100), r + "(" + u + a + ")";
}
const aS = /\b([a-z-]*)\(.*?\)/gu,
  hc = {
    ...Qn,
    getAnimatableNone: (t) => {
      const r = t.match(aS);
      return r ? r.map(sS).join(" ") : t;
    },
  },
  lS = {
    borderWidth: de,
    borderTopWidth: de,
    borderRightWidth: de,
    borderBottomWidth: de,
    borderLeftWidth: de,
    borderRadius: de,
    radius: de,
    borderTopLeftRadius: de,
    borderTopRightRadius: de,
    borderBottomRightRadius: de,
    borderBottomLeftRadius: de,
    width: de,
    maxWidth: de,
    height: de,
    maxHeight: de,
    top: de,
    right: de,
    bottom: de,
    left: de,
    padding: de,
    paddingTop: de,
    paddingRight: de,
    paddingBottom: de,
    paddingLeft: de,
    margin: de,
    marginTop: de,
    marginRight: de,
    marginBottom: de,
    marginLeft: de,
    backgroundPositionX: de,
    backgroundPositionY: de,
  },
  uS = {
    rotate: Kn,
    rotateX: Kn,
    rotateY: Kn,
    rotateZ: Kn,
    scale: Ys,
    scaleX: Ys,
    scaleY: Ys,
    scaleZ: Ys,
    skew: Kn,
    skewX: Kn,
    skewY: Kn,
    distance: de,
    translateX: de,
    translateY: de,
    translateZ: de,
    x: de,
    y: de,
    z: de,
    perspective: de,
    transformPerspective: de,
    opacity: Si,
    originX: Yh,
    originY: Yh,
    originZ: de,
  },
  em = { ...mo, transform: Math.round },
  ed = {
    ...lS,
    ...uS,
    zIndex: em,
    size: de,
    fillOpacity: Si,
    strokeOpacity: Si,
    numOctaves: em,
  },
  cS = {
    ...ed,
    color: at,
    backgroundColor: at,
    outlineColor: at,
    fill: at,
    stroke: at,
    borderColor: at,
    borderTopColor: at,
    borderRightColor: at,
    borderBottomColor: at,
    borderLeftColor: at,
    filter: hc,
    WebkitFilter: hc,
  },
  td = (t) => cS[t];
function dv(t, r) {
  let o = td(t);
  return (
    o !== hc && (o = Qn), o.getAnimatableNone ? o.getAnimatableNone(r) : void 0
  );
}
const dS = new Set(["auto", "none", "0"]);
function fS(t, r, o) {
  let s = 0,
    a;
  for (; s < t.length && !a; ) {
    const u = t[s];
    typeof u == "string" && !dS.has(u) && Ci(u).values.length && (a = t[s]),
      s++;
  }
  if (a && o) for (const u of r) t[u] = dv(o, a);
}
class fv extends qc {
  constructor(r, o, s, a, u) {
    super(r, o, s, a, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: o, name: s } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let p = 0; p < r.length; p++) {
      let m = r[p];
      if (typeof m == "string" && ((m = m.trim()), Qc(m))) {
        const g = tv(m, o.current);
        g !== void 0 && (r[p] = g),
          p === r.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !Uw.has(s) || r.length !== 2)) return;
    const [a, u] = r,
      c = Zh(a),
      d = Zh(u);
    if (c !== d)
      if (Xh(c) && Xh(d))
        for (let p = 0; p < r.length; p++) {
          const m = r[p];
          typeof m == "string" && (r[p] = parseFloat(m));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: o } = this,
      s = [];
    for (let a = 0; a < r.length; a++) Iw(r[a]) && s.push(a);
    s.length && fS(r, s, o);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: o, name: s } = this;
    if (!r || !r.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = lo[s](
        r.measureViewportBox(),
        window.getComputedStyle(r.current),
      )),
      (o[0] = this.measuredOrigin);
    const a = o[o.length - 1];
    a !== void 0 && r.getValue(s, a).jump(a, !1);
  }
  measureEndState() {
    var r;
    const { element: o, name: s, unresolvedKeyframes: a } = this;
    if (!o || !o.current) return;
    const u = o.getValue(s);
    u && u.jump(this.measuredOrigin, !1);
    const c = a.length - 1,
      d = a[c];
    (a[c] = lo[s](o.measureViewportBox(), window.getComputedStyle(o.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      !((r = this.removedTransforms) === null || r === void 0) &&
        r.length &&
        this.removedTransforms.forEach(([p, m]) => {
          o.getValue(p).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
function nd(t) {
  return typeof t == "function";
}
let oa;
function pS() {
  oa = void 0;
}
const Jt = {
    now: () => (
      oa === void 0 &&
        Jt.set(
          nt.isProcessing || bw.useManualTiming
            ? nt.timestamp
            : performance.now(),
        ),
      oa
    ),
    set: (t) => {
      (oa = t), queueMicrotask(pS);
    },
  },
  tm = (t, r) =>
    r === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Qn.test(t) || t === "0") &&
            !t.startsWith("url("))
        );
function hS(t) {
  const r = t[0];
  if (t.length === 1) return !0;
  for (let o = 0; o < t.length; o++) if (t[o] !== r) return !0;
}
function mS(t, r, o, s) {
  const a = t[0];
  if (a === null) return !1;
  if (r === "display" || r === "visibility") return !0;
  const u = t[t.length - 1],
    c = tm(a, r),
    d = tm(u, r);
  return !c || !d ? !1 : hS(t) || ((o === "spring" || nd(o)) && s);
}
const gS = 40;
class pv {
  constructor({
    autoplay: r = !0,
    delay: o = 0,
    type: s = "keyframes",
    repeat: a = 0,
    repeatDelay: u = 0,
    repeatType: c = "loop",
    ...d
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Jt.now()),
      (this.options = {
        autoplay: r,
        delay: o,
        type: s,
        repeat: a,
        repeatDelay: u,
        repeatType: c,
        ...d,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > gS
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Gw(), this._resolved;
  }
  onKeyframesResolved(r, o) {
    (this.resolvedAt = Jt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: s,
      type: a,
      velocity: u,
      delay: c,
      onComplete: d,
      onUpdate: p,
      isGenerator: m,
    } = this.options;
    if (!m && !mS(r, s, a, u))
      if (c) this.options.duration = 0;
      else {
        p == null || p(Ra(r, this.options, o)),
          d == null || d(),
          this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(r, o);
    g !== !1 &&
      ((this._resolved = { keyframes: r, finalKeyframe: o, ...g }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(r, o) {
    return this.currentFinishedPromise.then(r, o);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((r) => {
      this.resolveFinishedPromise = r;
    });
  }
}
const uo = (t, r, o) => {
    const s = r - t;
    return s === 0 ? 1 : (o - t) / s;
  },
  hv = (t, r, o = 10) => {
    let s = "";
    const a = Math.max(Math.round(r / o), 2);
    for (let u = 0; u < a; u++) s += t(uo(0, a - 1, u)) + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  };
function mv(t, r) {
  return r ? t * (1e3 / r) : 0;
}
const vS = 5;
function gv(t, r, o) {
  const s = Math.max(r - vS, 0);
  return mv(o - t(s), r - s);
}
const Be = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Bu = 0.001;
function yS({
  duration: t = Be.duration,
  bounce: r = Be.bounce,
  velocity: o = Be.velocity,
  mass: s = Be.mass,
}) {
  let a,
    u,
    c = 1 - r;
  (c = vn(Be.minDamping, Be.maxDamping, c)),
    (t = vn(Be.minDuration, Be.maxDuration, gn(t))),
    c < 1
      ? ((a = (m) => {
          const g = m * c,
            v = g * t,
            y = g - o,
            C = mc(m, c),
            P = Math.exp(-v);
          return Bu - (y / C) * P;
        }),
        (u = (m) => {
          const v = m * c * t,
            y = v * o + o,
            C = Math.pow(c, 2) * Math.pow(m, 2) * t,
            P = Math.exp(-v),
            S = mc(Math.pow(m, 2), c);
          return ((-a(m) + Bu > 0 ? -1 : 1) * ((y - C) * P)) / S;
        }))
      : ((a = (m) => {
          const g = Math.exp(-m * t),
            v = (m - o) * t + 1;
          return -Bu + g * v;
        }),
        (u = (m) => {
          const g = Math.exp(-m * t),
            v = (o - m) * (t * t);
          return g * v;
        }));
  const d = 5 / t,
    p = wS(a, u, d);
  if (((t = mn(t)), isNaN(p)))
    return { stiffness: Be.stiffness, damping: Be.damping, duration: t };
  {
    const m = Math.pow(p, 2) * s;
    return { stiffness: m, damping: c * 2 * Math.sqrt(s * m), duration: t };
  }
}
const xS = 12;
function wS(t, r, o) {
  let s = o;
  for (let a = 1; a < xS; a++) s = s - t(s) / r(s);
  return s;
}
function mc(t, r) {
  return t * Math.sqrt(1 - r * r);
}
const gc = 2e4;
function vv(t) {
  let r = 0;
  const o = 50;
  let s = t.next(r);
  for (; !s.done && r < gc; ) (r += o), (s = t.next(r));
  return r >= gc ? 1 / 0 : r;
}
const SS = ["duration", "bounce"],
  CS = ["stiffness", "damping", "mass"];
function nm(t, r) {
  return r.some((o) => t[o] !== void 0);
}
function kS(t) {
  let r = {
    velocity: Be.velocity,
    stiffness: Be.stiffness,
    damping: Be.damping,
    mass: Be.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!nm(t, CS) && nm(t, SS))
    if (t.visualDuration) {
      const o = t.visualDuration,
        s = (2 * Math.PI) / (o * 1.2),
        a = s * s,
        u = 2 * vn(0.05, 1, 1 - t.bounce) * Math.sqrt(a);
      r = { ...r, mass: Be.mass, stiffness: a, damping: u };
    } else {
      const o = yS(t);
      (r = { ...r, ...o, mass: Be.mass }), (r.isResolvedFromDuration = !0);
    }
  return r;
}
function yv(t = Be.visualDuration, r = Be.bounce) {
  const o =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: r }
      : t;
  let { restSpeed: s, restDelta: a } = o;
  const u = o.keyframes[0],
    c = o.keyframes[o.keyframes.length - 1],
    d = { done: !1, value: u },
    {
      stiffness: p,
      damping: m,
      mass: g,
      duration: v,
      velocity: y,
      isResolvedFromDuration: C,
    } = kS({ ...o, velocity: -gn(o.velocity || 0) }),
    P = y || 0,
    S = m / (2 * Math.sqrt(p * g)),
    T = c - u,
    E = gn(Math.sqrt(p / g)),
    b = Math.abs(T) < 5;
  s || (s = b ? Be.restSpeed.granular : Be.restSpeed.default),
    a || (a = b ? Be.restDelta.granular : Be.restDelta.default);
  let N;
  if (S < 1) {
    const I = mc(E, S);
    N = (B) => {
      const z = Math.exp(-S * E * B);
      return (
        c - z * (((P + S * E * T) / I) * Math.sin(I * B) + T * Math.cos(I * B))
      );
    };
  } else if (S === 1) N = (I) => c - Math.exp(-E * I) * (T + (P + E * T) * I);
  else {
    const I = E * Math.sqrt(S * S - 1);
    N = (B) => {
      const z = Math.exp(-S * E * B),
        W = Math.min(I * B, 300);
      return (
        c - (z * ((P + S * E * T) * Math.sinh(W) + I * T * Math.cosh(W))) / I
      );
    };
  }
  const L = {
    calculatedDuration: (C && v) || null,
    next: (I) => {
      const B = N(I);
      if (C) d.done = I >= v;
      else {
        let z = 0;
        S < 1 && (z = I === 0 ? mn(P) : gv(N, I, B));
        const W = Math.abs(z) <= s,
          te = Math.abs(c - B) <= a;
        d.done = W && te;
      }
      return (d.value = d.done ? c : B), d;
    },
    toString: () => {
      const I = Math.min(vv(L), gc),
        B = hv((z) => L.next(I * z).value, I, 30);
      return I + "ms " + B;
    },
  };
  return L;
}
function rm({
  keyframes: t,
  velocity: r = 0,
  power: o = 0.8,
  timeConstant: s = 325,
  bounceDamping: a = 10,
  bounceStiffness: u = 500,
  modifyTarget: c,
  min: d,
  max: p,
  restDelta: m = 0.5,
  restSpeed: g,
}) {
  const v = t[0],
    y = { done: !1, value: v },
    C = (W) => (d !== void 0 && W < d) || (p !== void 0 && W > p),
    P = (W) =>
      d === void 0
        ? p
        : p === void 0 || Math.abs(d - W) < Math.abs(p - W)
          ? d
          : p;
  let S = o * r;
  const T = v + S,
    E = c === void 0 ? T : c(T);
  E !== T && (S = E - v);
  const b = (W) => -S * Math.exp(-W / s),
    N = (W) => E + b(W),
    L = (W) => {
      const te = b(W),
        oe = N(W);
      (y.done = Math.abs(te) <= m), (y.value = y.done ? E : oe);
    };
  let I, B;
  const z = (W) => {
    C(y.value) &&
      ((I = W),
      (B = yv({
        keyframes: [y.value, P(y.value)],
        velocity: gv(N, W, y.value),
        damping: a,
        stiffness: u,
        restDelta: m,
        restSpeed: g,
      })));
  };
  return (
    z(0),
    {
      calculatedDuration: null,
      next: (W) => {
        let te = !1;
        return (
          !B && I === void 0 && ((te = !0), L(W), z(W)),
          I !== void 0 && W >= I ? B.next(W - I) : (!te && L(W), y)
        );
      },
    }
  );
}
const TS = Ai(0.42, 0, 1, 1),
  PS = Ai(0, 0, 0.58, 1),
  xv = Ai(0.42, 0, 0.58, 1),
  ES = (t) => Array.isArray(t) && typeof t[0] != "number",
  rd = (t) => Array.isArray(t) && typeof t[0] == "number",
  om = {
    linear: Tt,
    easeIn: TS,
    easeInOut: xv,
    easeOut: PS,
    circIn: Xc,
    circInOut: Qg,
    circOut: Xg,
    backIn: Yc,
    backInOut: Gg,
    backOut: Kg,
    anticipate: Yg,
  },
  im = (t) => {
    if (rd(t)) {
      cc(t.length === 4);
      const [r, o, s, a] = t;
      return Ai(r, o, s, a);
    } else if (typeof t == "string") return cc(om[t] !== void 0), om[t];
    return t;
  },
  RS = (t, r) => (o) => r(t(o)),
  Mi = (...t) => t.reduce(RS),
  Ve = (t, r, o) => t + (r - t) * o;
function Uu(t, r, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? t + (r - t) * 6 * o
      : o < 1 / 2
        ? r
        : o < 2 / 3
          ? t + (r - t) * (2 / 3 - o) * 6
          : t
  );
}
function bS({ hue: t, saturation: r, lightness: o, alpha: s }) {
  (t /= 360), (r /= 100), (o /= 100);
  let a = 0,
    u = 0,
    c = 0;
  if (!r) a = u = c = o;
  else {
    const d = o < 0.5 ? o * (1 + r) : o + r - o * r,
      p = 2 * o - d;
    (a = Uu(p, d, t + 1 / 3)), (u = Uu(p, d, t)), (c = Uu(p, d, t - 1 / 3));
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(u * 255),
    blue: Math.round(c * 255),
    alpha: s,
  };
}
function da(t, r) {
  return (o) => (o > 0 ? r : t);
}
const $u = (t, r, o) => {
    const s = t * t,
      a = o * (r * r - s) + s;
    return a < 0 ? 0 : Math.sqrt(a);
  },
  AS = [pc, xr, Jr],
  NS = (t) => AS.find((r) => r.test(t));
function sm(t) {
  const r = NS(t);
  if (!r) return !1;
  let o = r.parse(t);
  return r === Jr && (o = bS(o)), o;
}
const am = (t, r) => {
    const o = sm(t),
      s = sm(r);
    if (!o || !s) return da(t, r);
    const a = { ...o };
    return (u) => (
      (a.red = $u(o.red, s.red, u)),
      (a.green = $u(o.green, s.green, u)),
      (a.blue = $u(o.blue, s.blue, u)),
      (a.alpha = Ve(o.alpha, s.alpha, u)),
      xr.transform(a)
    );
  },
  vc = new Set(["none", "hidden"]);
function MS(t, r) {
  return vc.has(t) ? (o) => (o <= 0 ? t : r) : (o) => (o >= 1 ? r : t);
}
function jS(t, r) {
  return (o) => Ve(t, r, o);
}
function od(t) {
  return typeof t == "number"
    ? jS
    : typeof t == "string"
      ? Qc(t)
        ? da
        : at.test(t)
          ? am
          : IS
      : Array.isArray(t)
        ? wv
        : typeof t == "object"
          ? at.test(t)
            ? am
            : LS
          : da;
}
function wv(t, r) {
  const o = [...t],
    s = o.length,
    a = t.map((u, c) => od(u)(u, r[c]));
  return (u) => {
    for (let c = 0; c < s; c++) o[c] = a[c](u);
    return o;
  };
}
function LS(t, r) {
  const o = { ...t, ...r },
    s = {};
  for (const a in o)
    t[a] !== void 0 && r[a] !== void 0 && (s[a] = od(t[a])(t[a], r[a]));
  return (a) => {
    for (const u in s) o[u] = s[u](a);
    return o;
  };
}
function DS(t, r) {
  var o;
  const s = [],
    a = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < r.values.length; u++) {
    const c = r.types[u],
      d = t.indexes[c][a[c]],
      p = (o = t.values[d]) !== null && o !== void 0 ? o : 0;
    (s[u] = p), a[c]++;
  }
  return s;
}
const IS = (t, r) => {
  const o = Qn.createTransformer(r),
    s = Ci(t),
    a = Ci(r);
  return s.indexes.var.length === a.indexes.var.length &&
    s.indexes.color.length === a.indexes.color.length &&
    s.indexes.number.length >= a.indexes.number.length
    ? (vc.has(t) && !a.values.length) || (vc.has(r) && !s.values.length)
      ? MS(t, r)
      : Mi(wv(DS(s, a), a.values), o)
    : da(t, r);
};
function Sv(t, r, o) {
  return typeof t == "number" && typeof r == "number" && typeof o == "number"
    ? Ve(t, r, o)
    : od(t)(t, r);
}
function OS(t, r, o) {
  const s = [],
    a = o || Sv,
    u = t.length - 1;
  for (let c = 0; c < u; c++) {
    let d = a(t[c], t[c + 1]);
    if (r) {
      const p = Array.isArray(r) ? r[c] || Tt : r;
      d = Mi(p, d);
    }
    s.push(d);
  }
  return s;
}
function _S(t, r, { clamp: o = !0, ease: s, mixer: a } = {}) {
  const u = t.length;
  if ((cc(u === r.length), u === 1)) return () => r[0];
  if (u === 2 && t[0] === t[1]) return () => r[1];
  t[0] > t[u - 1] && ((t = [...t].reverse()), (r = [...r].reverse()));
  const c = OS(r, s, a),
    d = c.length,
    p = (m) => {
      let g = 0;
      if (d > 1) for (; g < t.length - 2 && !(m < t[g + 1]); g++);
      const v = uo(t[g], t[g + 1], m);
      return c[g](v);
    };
  return o ? (m) => p(vn(t[0], t[u - 1], m)) : p;
}
function VS(t, r) {
  const o = t[t.length - 1];
  for (let s = 1; s <= r; s++) {
    const a = uo(0, r, s);
    t.push(Ve(o, 1, a));
  }
}
function FS(t) {
  const r = [0];
  return VS(r, t.length - 1), r;
}
function zS(t, r) {
  return t.map((o) => o * r);
}
function BS(t, r) {
  return t.map(() => r || xv).splice(0, t.length - 1);
}
function fa({
  duration: t = 300,
  keyframes: r,
  times: o,
  ease: s = "easeInOut",
}) {
  const a = ES(s) ? s.map(im) : im(s),
    u = { done: !1, value: r[0] },
    c = zS(o && o.length === r.length ? o : FS(r), t),
    d = _S(c, r, { ease: Array.isArray(a) ? a : BS(r, a) });
  return {
    calculatedDuration: t,
    next: (p) => ((u.value = d(p)), (u.done = p >= t), u),
  };
}
const US = (t) => {
    const r = ({ timestamp: o }) => t(o);
    return {
      start: () => De.update(r, !0),
      stop: () => Xn(r),
      now: () => (nt.isProcessing ? nt.timestamp : Jt.now()),
    };
  },
  $S = { decay: rm, inertia: rm, tween: fa, keyframes: fa, spring: yv },
  WS = (t) => t / 100;
class id extends pv {
  constructor(r) {
    super(r),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: p } = this.options;
        p && p();
      });
    const { name: o, motionValue: s, element: a, keyframes: u } = this.options,
      c = (a == null ? void 0 : a.KeyframeResolver) || qc,
      d = (p, m) => this.onKeyframesResolved(p, m);
    (this.resolver = new c(u, d, o, s, a)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        );
  }
  initPlayback(r) {
    const {
        type: o = "keyframes",
        repeat: s = 0,
        repeatDelay: a = 0,
        repeatType: u,
        velocity: c = 0,
      } = this.options,
      d = nd(o) ? o : $S[o] || fa;
    let p, m;
    d !== fa &&
      typeof r[0] != "number" &&
      ((p = Mi(WS, Sv(r[0], r[1]))), (r = [0, 100]));
    const g = d({ ...this.options, keyframes: r });
    u === "mirror" &&
      (m = d({ ...this.options, keyframes: [...r].reverse(), velocity: -c })),
      g.calculatedDuration === null && (g.calculatedDuration = vv(g));
    const { calculatedDuration: v } = g,
      y = v + a,
      C = y * (s + 1) - a;
    return {
      generator: g,
      mirroredGenerator: m,
      mapPercentToKeyframes: p,
      calculatedDuration: v,
      resolvedDuration: y,
      totalDuration: C,
    };
  }
  onPostResolved() {
    const { autoplay: r = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !r
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(r, o = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: W } = this.options;
      return { done: !0, value: W[W.length - 1] };
    }
    const {
      finalKeyframe: a,
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: d,
      keyframes: p,
      calculatedDuration: m,
      totalDuration: g,
      resolvedDuration: v,
    } = s;
    if (this.startTime === null) return u.next(0);
    const {
      delay: y,
      repeat: C,
      repeatType: P,
      repeatDelay: S,
      onUpdate: T,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, r))
      : this.speed < 0 &&
        (this.startTime = Math.min(r - g / this.speed, this.startTime)),
      o
        ? (this.currentTime = r)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(r - this.startTime) * this.speed);
    const E = this.currentTime - y * (this.speed >= 0 ? 1 : -1),
      b = this.speed >= 0 ? E < 0 : E > g;
    (this.currentTime = Math.max(E, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = g);
    let N = this.currentTime,
      L = u;
    if (C) {
      const W = Math.min(this.currentTime, g) / v;
      let te = Math.floor(W),
        oe = W % 1;
      !oe && W >= 1 && (oe = 1),
        oe === 1 && te--,
        (te = Math.min(te, C + 1)),
        !!(te % 2) &&
          (P === "reverse"
            ? ((oe = 1 - oe), S && (oe -= S / v))
            : P === "mirror" && (L = c)),
        (N = vn(0, 1, oe) * v);
    }
    const I = b ? { done: !1, value: p[0] } : L.next(N);
    d && (I.value = d(I.value));
    let { done: B } = I;
    !b &&
      m !== null &&
      (B = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const z =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && B));
    return (
      z && a !== void 0 && (I.value = Ra(p, this.options, a)),
      T && T(I.value),
      z && this.finish(),
      I
    );
  }
  get duration() {
    const { resolved: r } = this;
    return r ? gn(r.calculatedDuration) : 0;
  }
  get time() {
    return gn(this.currentTime);
  }
  set time(r) {
    (r = mn(r)),
      (this.currentTime = r),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = r)
        : this.driver && (this.startTime = this.driver.now() - r / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    const o = this.playbackSpeed !== r;
    (this.playbackSpeed = r), o && (this.time = gn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: r = US, onPlay: o, startTime: s } = this.options;
    this.driver || (this.driver = r((u) => this.tick(u))), o && o();
    const a = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = a - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = a)
        : (this.startTime = s ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var r;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (r = this.currentTime) !== null && r !== void 0 ? r : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: r } = this.options;
    r && r();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(r) {
    return (this.startTime = 0), this.tick(r, !0);
  }
}
const HS = new Set(["opacity", "clipPath", "filter", "transform"]);
function sd(t) {
  let r;
  return () => (r === void 0 && (r = t()), r);
}
const KS = { linearEasing: void 0 };
function GS(t, r) {
  const o = sd(t);
  return () => {
    var s;
    return (s = KS[r]) !== null && s !== void 0 ? s : o();
  };
}
const pa = GS(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Cv(t) {
  return !!(
    (typeof t == "function" && pa()) ||
    !t ||
    (typeof t == "string" && (t in yc || pa())) ||
    rd(t) ||
    (Array.isArray(t) && t.every(Cv))
  );
}
const ci = ([t, r, o, s]) => `cubic-bezier(${t}, ${r}, ${o}, ${s})`,
  yc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ci([0, 0.65, 0.55, 1]),
    circOut: ci([0.55, 0, 1, 0.45]),
    backIn: ci([0.31, 0.01, 0.66, -0.59]),
    backOut: ci([0.33, 1.53, 0.69, 0.99]),
  };
function kv(t, r) {
  if (t)
    return typeof t == "function" && pa()
      ? hv(t, r)
      : rd(t)
        ? ci(t)
        : Array.isArray(t)
          ? t.map((o) => kv(o, r) || yc.easeOut)
          : yc[t];
}
function YS(
  t,
  r,
  o,
  {
    delay: s = 0,
    duration: a = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: d = "easeInOut",
    times: p,
  } = {},
) {
  const m = { [r]: o };
  p && (m.offset = p);
  const g = kv(d, a);
  return (
    Array.isArray(g) && (m.easing = g),
    t.animate(m, {
      delay: s,
      duration: a,
      easing: Array.isArray(g) ? "linear" : g,
      fill: "both",
      iterations: u + 1,
      direction: c === "reverse" ? "alternate" : "normal",
    })
  );
}
function lm(t, r) {
  (t.timeline = r), (t.onfinish = null);
}
const XS = sd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ha = 10,
  QS = 2e4;
function qS(t) {
  return nd(t.type) || t.type === "spring" || !Cv(t.ease);
}
function ZS(t, r) {
  const o = new id({
    ...r,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let s = { done: !1, value: t[0] };
  const a = [];
  let u = 0;
  for (; !s.done && u < QS; ) (s = o.sample(u)), a.push(s.value), (u += ha);
  return { times: void 0, keyframes: a, duration: u - ha, ease: "linear" };
}
const Tv = { anticipate: Yg, backInOut: Gg, circInOut: Qg };
function JS(t) {
  return t in Tv;
}
class um extends pv {
  constructor(r) {
    super(r);
    const { name: o, motionValue: s, element: a, keyframes: u } = this.options;
    (this.resolver = new fv(
      u,
      (c, d) => this.onKeyframesResolved(c, d),
      o,
      s,
      a,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(r, o) {
    var s;
    let {
      duration: a = 300,
      times: u,
      ease: c,
      type: d,
      motionValue: p,
      name: m,
      startTime: g,
    } = this.options;
    if (!(!((s = p.owner) === null || s === void 0) && s.current)) return !1;
    if (
      (typeof c == "string" && pa() && JS(c) && (c = Tv[c]), qS(this.options))
    ) {
      const {
          onComplete: y,
          onUpdate: C,
          motionValue: P,
          element: S,
          ...T
        } = this.options,
        E = ZS(r, T);
      (r = E.keyframes),
        r.length === 1 && (r[1] = r[0]),
        (a = E.duration),
        (u = E.times),
        (c = E.ease),
        (d = "keyframes");
    }
    const v = YS(p.owner.current, m, r, {
      ...this.options,
      duration: a,
      times: u,
      ease: c,
    });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (lm(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: y } = this.options;
            p.set(Ra(r, this.options, o)),
              y && y(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: a, times: u, type: d, ease: c, keyframes: r }
    );
  }
  get duration() {
    const { resolved: r } = this;
    if (!r) return 0;
    const { duration: o } = r;
    return gn(o);
  }
  get time() {
    const { resolved: r } = this;
    if (!r) return 0;
    const { animation: o } = r;
    return gn(o.currentTime || 0);
  }
  set time(r) {
    const { resolved: o } = this;
    if (!o) return;
    const { animation: s } = o;
    s.currentTime = mn(r);
  }
  get speed() {
    const { resolved: r } = this;
    if (!r) return 1;
    const { animation: o } = r;
    return o.playbackRate;
  }
  set speed(r) {
    const { resolved: o } = this;
    if (!o) return;
    const { animation: s } = o;
    s.playbackRate = r;
  }
  get state() {
    const { resolved: r } = this;
    if (!r) return "idle";
    const { animation: o } = r;
    return o.playState;
  }
  get startTime() {
    const { resolved: r } = this;
    if (!r) return null;
    const { animation: o } = r;
    return o.startTime;
  }
  attachTimeline(r) {
    if (!this._resolved) this.pendingTimeline = r;
    else {
      const { resolved: o } = this;
      if (!o) return Tt;
      const { animation: s } = o;
      lm(s, r);
    }
    return Tt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: r } = this;
    if (!r) return;
    const { animation: o } = r;
    o.playState === "finished" && this.updateFinishedPromise(), o.play();
  }
  pause() {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: o } = r;
    o.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: r } = this;
    if (!r) return;
    const {
      animation: o,
      keyframes: s,
      duration: a,
      type: u,
      ease: c,
      times: d,
    } = r;
    if (o.playState === "idle" || o.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: m,
          onUpdate: g,
          onComplete: v,
          element: y,
          ...C
        } = this.options,
        P = new id({
          ...C,
          keyframes: s,
          duration: a,
          type: u,
          ease: c,
          times: d,
          isGenerator: !0,
        }),
        S = mn(this.time);
      m.setWithVelocity(P.sample(S - ha).value, P.sample(S).value, ha);
    }
    const { onStop: p } = this.options;
    p && p(), this.cancel();
  }
  complete() {
    const { resolved: r } = this;
    r && r.animation.finish();
  }
  cancel() {
    const { resolved: r } = this;
    r && r.animation.cancel();
  }
  static supports(r) {
    const {
      motionValue: o,
      name: s,
      repeatDelay: a,
      repeatType: u,
      damping: c,
      type: d,
    } = r;
    return (
      XS() &&
      s &&
      HS.has(s) &&
      o &&
      o.owner &&
      o.owner.current instanceof HTMLElement &&
      !o.owner.getProps().onUpdate &&
      !a &&
      u !== "mirror" &&
      c !== 0 &&
      d !== "inertia"
    );
  }
}
const eC = sd(() => window.ScrollTimeline !== void 0);
class tC {
  constructor(r) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = r.filter(Boolean));
  }
  then(r, o) {
    return Promise.all(this.animations).then(r).catch(o);
  }
  getAll(r) {
    return this.animations[0][r];
  }
  setAll(r, o) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][r] = o;
  }
  attachTimeline(r, o) {
    const s = this.animations.map((a) =>
      eC() && a.attachTimeline ? a.attachTimeline(r) : o(a),
    );
    return () => {
      s.forEach((a, u) => {
        a && a(), this.animations[u].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(r) {
    this.setAll("time", r);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(r) {
    this.setAll("speed", r);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let r = 0;
    for (let o = 0; o < this.animations.length; o++)
      r = Math.max(r, this.animations[o].duration);
    return r;
  }
  runAll(r) {
    this.animations.forEach((o) => o[r]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function nC({
  when: t,
  delay: r,
  delayChildren: o,
  staggerChildren: s,
  staggerDirection: a,
  repeat: u,
  repeatType: c,
  repeatDelay: d,
  from: p,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length;
}
const ad =
    (t, r, o, s = {}, a, u) =>
    (c) => {
      const d = Gc(s, t) || {},
        p = d.delay || s.delay || 0;
      let { elapsed: m = 0 } = s;
      m = m - mn(p);
      let g = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...d,
        delay: -m,
        onUpdate: (y) => {
          r.set(y), d.onUpdate && d.onUpdate(y);
        },
        onComplete: () => {
          c(), d.onComplete && d.onComplete();
        },
        name: t,
        motionValue: r,
        element: u ? void 0 : a,
      };
      nC(d) || (g = { ...g, ...Rw(t, g) }),
        g.duration && (g.duration = mn(g.duration)),
        g.repeatDelay && (g.repeatDelay = mn(g.repeatDelay)),
        g.from !== void 0 && (g.keyframes[0] = g.from);
      let v = !1;
      if (
        ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
          ((g.duration = 0), g.delay === 0 && (v = !0)),
        v && !u && r.get() !== void 0)
      ) {
        const y = Ra(g.keyframes, d);
        if (y !== void 0)
          return (
            De.update(() => {
              g.onUpdate(y), g.onComplete();
            }),
            new tC([])
          );
      }
      return !u && um.supports(g) ? new um(g) : new id(g);
    },
  rC = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  oC = (t) => (uc(t) ? t[t.length - 1] || 0 : t);
function ld(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
function ud(t, r) {
  const o = t.indexOf(r);
  o > -1 && t.splice(o, 1);
}
class cd {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return ld(this.subscriptions, r), () => ud(this.subscriptions, r);
  }
  notify(r, o, s) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1) this.subscriptions[0](r, o, s);
      else
        for (let u = 0; u < a; u++) {
          const c = this.subscriptions[u];
          c && c(r, o, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const cm = 30,
  iC = (t) => !isNaN(parseFloat(t));
class sC {
  constructor(r, o = {}) {
    (this.version = "11.15.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s, a = !0) => {
        const u = Jt.now();
        this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          a &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(r),
      (this.owner = o.owner);
  }
  setCurrent(r) {
    (this.current = r),
      (this.updatedAt = Jt.now()),
      this.canTrackVelocity === null &&
        r !== void 0 &&
        (this.canTrackVelocity = iC(this.current));
  }
  setPrevFrameValue(r = this.current) {
    (this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(r) {
    return this.on("change", r);
  }
  on(r, o) {
    this.events[r] || (this.events[r] = new cd());
    const s = this.events[r].add(o);
    return r === "change"
      ? () => {
          s(),
            De.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const r in this.events) this.events[r].clear();
  }
  attach(r, o) {
    (this.passiveEffect = r), (this.stopPassiveEffect = o);
  }
  set(r, o = !0) {
    !o || !this.passiveEffect
      ? this.updateAndNotify(r, o)
      : this.passiveEffect(r, this.updateAndNotify);
  }
  setWithVelocity(r, o, s) {
    this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = r),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(r, o = !0) {
    this.updateAndNotify(r),
      (this.prev = r),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const r = Jt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      r - this.updatedAt > cm
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, cm);
    return mv(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(r) {
    return (
      this.stop(),
      new Promise((o) => {
        (this.hasAnimated = !0),
          (this.animation = r(o)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ki(t, r) {
  return new sC(t, r);
}
function aC(t, r, o) {
  t.hasValue(r) ? t.getValue(r).set(o) : t.addValue(r, ki(o));
}
function lC(t, r) {
  const o = Ea(t, r);
  let { transitionEnd: s = {}, transition: a = {}, ...u } = o || {};
  u = { ...u, ...s };
  for (const c in u) {
    const d = oC(u[c]);
    aC(t, c, d);
  }
}
const dd = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  uC = "framerAppearId",
  Pv = "data-" + dd(uC);
function Ev(t) {
  return t.props[Pv];
}
const lt = (t) => !!(t && t.getVelocity);
function cC(t) {
  return !!(lt(t) && t.add);
}
function xc(t, r) {
  const o = t.getValue("willChange");
  if (cC(o)) return o.add(r);
}
function dC({ protectedKeys: t, needsAnimating: r }, o) {
  const s = t.hasOwnProperty(o) && r[o] !== !0;
  return (r[o] = !1), s;
}
function Rv(t, r, { delay: o = 0, transitionOverride: s, type: a } = {}) {
  var u;
  let { transition: c = t.getDefaultTransition(), transitionEnd: d, ...p } = r;
  s && (c = s);
  const m = [],
    g = a && t.animationState && t.animationState.getState()[a];
  for (const v in p) {
    const y = t.getValue(
        v,
        (u = t.latestValues[v]) !== null && u !== void 0 ? u : null,
      ),
      C = p[v];
    if (C === void 0 || (g && dC(g, v))) continue;
    const P = { delay: o, ...Gc(c || {}, v) };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const E = Ev(t);
      if (E) {
        const b = window.MotionHandoffAnimation(E, v, De);
        b !== null && ((P.startTime = b), (S = !0));
      }
    }
    xc(t, v),
      y.start(
        ad(v, y, C, t.shouldReduceMotion && kr.has(v) ? { type: !1 } : P, t, S),
      );
    const T = y.animation;
    T && m.push(T);
  }
  return (
    d &&
      Promise.all(m).then(() => {
        De.update(() => {
          d && lC(t, d);
        });
      }),
    m
  );
}
function wc(t, r, o = {}) {
  var s;
  const a = Ea(
    t,
    r,
    o.type === "exit"
      ? (s = t.presenceContext) === null || s === void 0
        ? void 0
        : s.custom
      : void 0,
  );
  let { transition: u = t.getDefaultTransition() || {} } = a || {};
  o.transitionOverride && (u = o.transitionOverride);
  const c = a ? () => Promise.all(Rv(t, a, o)) : () => Promise.resolve(),
    d =
      t.variantChildren && t.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: v,
              staggerDirection: y,
            } = u;
            return fC(t, r, g + m, v, y, o);
          }
        : () => Promise.resolve(),
    { when: p } = u;
  if (p) {
    const [m, g] = p === "beforeChildren" ? [c, d] : [d, c];
    return m().then(() => g());
  } else return Promise.all([c(), d(o.delay)]);
}
function fC(t, r, o = 0, s = 0, a = 1, u) {
  const c = [],
    d = (t.variantChildren.size - 1) * s,
    p = a === 1 ? (m = 0) => m * s : (m = 0) => d - m * s;
  return (
    Array.from(t.variantChildren)
      .sort(pC)
      .forEach((m, g) => {
        m.notify("AnimationStart", r),
          c.push(
            wc(m, r, { ...u, delay: o + p(g) }).then(() =>
              m.notify("AnimationComplete", r),
            ),
          );
      }),
    Promise.all(c)
  );
}
function pC(t, r) {
  return t.sortNodePosition(r);
}
function hC(t, r, o = {}) {
  t.notify("AnimationStart", r);
  let s;
  if (Array.isArray(r)) {
    const a = r.map((u) => wc(t, u, o));
    s = Promise.all(a);
  } else if (typeof r == "string") s = wc(t, r, o);
  else {
    const a = typeof r == "function" ? Ea(t, r, o.custom) : r;
    s = Promise.all(Rv(t, a, o));
  }
  return s.then(() => {
    t.notify("AnimationComplete", r);
  });
}
const mC = Kc.length;
function bv(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const o = t.parent ? bv(t.parent) || {} : {};
    return t.props.initial !== void 0 && (o.initial = t.props.initial), o;
  }
  const r = {};
  for (let o = 0; o < mC; o++) {
    const s = Kc[o],
      a = t.props[s];
    (wi(a) || a === !1) && (r[s] = a);
  }
  return r;
}
const gC = [...Hc].reverse(),
  vC = Hc.length;
function yC(t) {
  return (r) =>
    Promise.all(r.map(({ animation: o, options: s }) => hC(t, o, s)));
}
function xC(t) {
  let r = yC(t),
    o = dm(),
    s = !0;
  const a = (p) => (m, g) => {
    var v;
    const y = Ea(
      t,
      g,
      p === "exit"
        ? (v = t.presenceContext) === null || v === void 0
          ? void 0
          : v.custom
        : void 0,
    );
    if (y) {
      const { transition: C, transitionEnd: P, ...S } = y;
      m = { ...m, ...S, ...P };
    }
    return m;
  };
  function u(p) {
    r = p(t);
  }
  function c(p) {
    const { props: m } = t,
      g = bv(t.parent) || {},
      v = [],
      y = new Set();
    let C = {},
      P = 1 / 0;
    for (let T = 0; T < vC; T++) {
      const E = gC[T],
        b = o[E],
        N = m[E] !== void 0 ? m[E] : g[E],
        L = wi(N),
        I = E === p ? b.isActive : null;
      I === !1 && (P = T);
      let B = N === g[E] && N !== m[E] && L;
      if (
        (B && s && t.manuallyAnimateOnMount && (B = !1),
        (b.protectedKeys = { ...C }),
        (!b.isActive && I === null) ||
          (!N && !b.prevProp) ||
          Pa(N) ||
          typeof N == "boolean")
      )
        continue;
      const z = wC(b.prevProp, N);
      let W = z || (E === p && b.isActive && !B && L) || (T > P && L),
        te = !1;
      const oe = Array.isArray(N) ? N : [N];
      let ge = oe.reduce(a(E), {});
      I === !1 && (ge = {});
      const { prevResolvedValues: Z = {} } = b,
        fe = { ...Z, ...ge },
        le = (X) => {
          (W = !0),
            y.has(X) && ((te = !0), y.delete(X)),
            (b.needsAnimating[X] = !0);
          const V = t.getValue(X);
          V && (V.liveStyle = !1);
        };
      for (const X in fe) {
        const V = ge[X],
          Y = Z[X];
        if (C.hasOwnProperty(X)) continue;
        let K = !1;
        uc(V) && uc(Y) ? (K = !Bg(V, Y)) : (K = V !== Y),
          K
            ? V != null
              ? le(X)
              : y.add(X)
            : V !== void 0 && y.has(X)
              ? le(X)
              : (b.protectedKeys[X] = !0);
      }
      (b.prevProp = N),
        (b.prevResolvedValues = ge),
        b.isActive && (C = { ...C, ...ge }),
        s && t.blockInitialAnimation && (W = !1),
        W &&
          (!(B && z) || te) &&
          v.push(...oe.map((X) => ({ animation: X, options: { type: E } })));
    }
    if (y.size) {
      const T = {};
      y.forEach((E) => {
        const b = t.getBaseTarget(E),
          N = t.getValue(E);
        N && (N.liveStyle = !0), (T[E] = b ?? null);
      }),
        v.push({ animation: T });
    }
    let S = !!v.length;
    return (
      s &&
        (m.initial === !1 || m.initial === m.animate) &&
        !t.manuallyAnimateOnMount &&
        (S = !1),
      (s = !1),
      S ? r(v) : Promise.resolve()
    );
  }
  function d(p, m) {
    var g;
    if (o[p].isActive === m) return Promise.resolve();
    (g = t.variantChildren) === null ||
      g === void 0 ||
      g.forEach((y) => {
        var C;
        return (C = y.animationState) === null || C === void 0
          ? void 0
          : C.setActive(p, m);
      }),
      (o[p].isActive = m);
    const v = c(p);
    for (const y in o) o[y].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: c,
    setActive: d,
    setAnimateFunction: u,
    getState: () => o,
    reset: () => {
      (o = dm()), (s = !0);
    },
  };
}
function wC(t, r) {
  return typeof r == "string" ? r !== t : Array.isArray(r) ? !Bg(r, t) : !1;
}
function gr(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function dm() {
  return {
    animate: gr(!0),
    whileInView: gr(),
    whileHover: gr(),
    whileTap: gr(),
    whileDrag: gr(),
    whileFocus: gr(),
    exit: gr(),
  };
}
class er {
  constructor(r) {
    (this.isMounted = !1), (this.node = r);
  }
  update() {}
}
class SC extends er {
  constructor(r) {
    super(r), r.animationState || (r.animationState = xC(r));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    Pa(r) && (this.unmountControls = r.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: r } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    r !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var r;
    this.node.animationState.reset(),
      (r = this.unmountControls) === null || r === void 0 || r.call(this);
  }
}
let CC = 0;
class kC extends er {
  constructor() {
    super(...arguments), (this.id = CC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: r, onExitComplete: o } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === s) return;
    const a = this.node.animationState.setActive("exit", !r);
    o && !r && a.then(() => o(this.id));
  }
  mount() {
    const { register: r } = this.node.presenceContext || {};
    r && (this.unmount = r(this.id));
  }
  unmount() {}
}
const TC = { animation: { Feature: SC }, exit: { Feature: kC } },
  Ut = { x: !1, y: !1 };
function Av() {
  return Ut.x || Ut.y;
}
function PC(t, r, o) {
  var s;
  if (t instanceof Element) return [t];
  if (typeof t == "string") {
    let a = document;
    const u = (s = void 0) !== null && s !== void 0 ? s : a.querySelectorAll(t);
    return u ? Array.from(u) : [];
  }
  return Array.from(t);
}
function Nv(t, r) {
  const o = PC(t),
    s = new AbortController(),
    a = { passive: !0, ...r, signal: s.signal };
  return [o, a, () => s.abort()];
}
function fm(t) {
  return (r) => {
    r.pointerType === "touch" || Av() || t(r);
  };
}
function EC(t, r, o = {}) {
  const [s, a, u] = Nv(t, o),
    c = fm((d) => {
      const { target: p } = d,
        m = r(d);
      if (!m || !p) return;
      const g = fm((v) => {
        m(v), p.removeEventListener("pointerleave", g);
      });
      p.addEventListener("pointerleave", g, a);
    });
  return (
    s.forEach((d) => {
      d.addEventListener("pointerenter", c, a);
    }),
    u
  );
}
const fd = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  di = new WeakSet();
function pm(t) {
  return (r) => {
    r.key === "Enter" && t(r);
  };
}
function Wu(t, r) {
  t.dispatchEvent(
    new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }),
  );
}
const RC = (t, r) => {
    const o = t.currentTarget;
    if (!o) return;
    const s = pm(() => {
      if (di.has(o)) return;
      Wu(o, "down");
      const a = pm(() => {
          Wu(o, "up");
        }),
        u = () => Wu(o, "cancel");
      o.addEventListener("keyup", a, r), o.addEventListener("blur", u, r);
    });
    o.addEventListener("keydown", s, r),
      o.addEventListener("blur", () => o.removeEventListener("keydown", s), r);
  },
  bC = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function AC(t) {
  return bC.has(t.tagName) || t.tabIndex !== -1;
}
const Mv = (t, r) => (r ? (t === r ? !0 : Mv(t, r.parentElement)) : !1);
function hm(t) {
  return fd(t) && !Av();
}
function NC(t, r, o = {}) {
  const [s, a, u] = Nv(t, o),
    c = (d) => {
      const p = d.currentTarget;
      if (!hm(d) || di.has(p)) return;
      di.add(p);
      const m = r(d),
        g = (C, P) => {
          window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", y),
            !(!hm(C) || !di.has(p)) &&
              (di.delete(p), m && m(C, { success: P }));
        },
        v = (C) => {
          g(C, o.useGlobalTarget || Mv(p, C.target));
        },
        y = (C) => {
          g(C, !1);
        };
      window.addEventListener("pointerup", v, a),
        window.addEventListener("pointercancel", y, a);
    };
  return (
    s.forEach((d) => {
      AC(d) || (d.tabIndex = 0),
        (o.useGlobalTarget ? window : d).addEventListener("pointerdown", c, a),
        d.addEventListener("focus", (m) => RC(m, a), a);
    }),
    u
  );
}
function MC(t) {
  return t === "x" || t === "y"
    ? Ut[t]
      ? null
      : ((Ut[t] = !0),
        () => {
          Ut[t] = !1;
        })
    : Ut.x || Ut.y
      ? null
      : ((Ut.x = Ut.y = !0),
        () => {
          Ut.x = Ut.y = !1;
        });
}
function ji(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const jC = (t) => (r) => fd(r) && t(r, ji(r));
function Ti(t, r, o, s = { passive: !0 }) {
  return t.addEventListener(r, o, s), () => t.removeEventListener(r, o);
}
function mi(t, r, o, s) {
  return Ti(t, r, jC(o), s);
}
const mm = (t, r) => Math.abs(t - r);
function LC(t, r) {
  const o = mm(t.x, r.x),
    s = mm(t.y, r.y);
  return Math.sqrt(o ** 2 + s ** 2);
}
class jv {
  constructor(
    r,
    o,
    { transformPagePoint: s, contextWindow: a, dragSnapToOrigin: u = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const v = Ku(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          C = LC(v.offset, { x: 0, y: 0 }) >= 3;
        if (!y && !C) return;
        const { point: P } = v,
          { timestamp: S } = nt;
        this.history.push({ ...P, timestamp: S });
        const { onStart: T, onMove: E } = this.handlers;
        y ||
          (T && T(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          E && E(this.lastMoveEvent, v);
      }),
      (this.handlePointerMove = (v, y) => {
        (this.lastMoveEvent = v),
          (this.lastMoveEventInfo = Hu(y, this.transformPagePoint)),
          De.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (v, y) => {
        this.end();
        const { onEnd: C, onSessionEnd: P, resumeAnimation: S } = this.handlers;
        if (
          (this.dragSnapToOrigin && S && S(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = Ku(
          v.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Hu(y, this.transformPagePoint),
          this.history,
        );
        this.startEvent && C && C(v, T), P && P(v, T);
      }),
      !fd(r))
    )
      return;
    (this.dragSnapToOrigin = u),
      (this.handlers = o),
      (this.transformPagePoint = s),
      (this.contextWindow = a || window);
    const c = ji(r),
      d = Hu(c, this.transformPagePoint),
      { point: p } = d,
      { timestamp: m } = nt;
    this.history = [{ ...p, timestamp: m }];
    const { onSessionStart: g } = o;
    g && g(r, Ku(d, this.history)),
      (this.removeListeners = Mi(
        mi(this.contextWindow, "pointermove", this.handlePointerMove),
        mi(this.contextWindow, "pointerup", this.handlePointerUp),
        mi(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    this.removeListeners && this.removeListeners(), Xn(this.updatePoint);
  }
}
function Hu(t, r) {
  return r ? { point: r(t.point) } : t;
}
function gm(t, r) {
  return { x: t.x - r.x, y: t.y - r.y };
}
function Ku({ point: t }, r) {
  return {
    point: t,
    delta: gm(t, Lv(r)),
    offset: gm(t, DC(r)),
    velocity: IC(r, 0.1),
  };
}
function DC(t) {
  return t[0];
}
function Lv(t) {
  return t[t.length - 1];
}
function IC(t, r) {
  if (t.length < 2) return { x: 0, y: 0 };
  let o = t.length - 1,
    s = null;
  const a = Lv(t);
  for (; o >= 0 && ((s = t[o]), !(a.timestamp - s.timestamp > mn(r))); ) o--;
  if (!s) return { x: 0, y: 0 };
  const u = gn(a.timestamp - s.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const c = { x: (a.x - s.x) / u, y: (a.y - s.y) / u };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
function eo(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
const Dv = 1e-4,
  OC = 1 - Dv,
  _C = 1 + Dv,
  Iv = 0.01,
  VC = 0 - Iv,
  FC = 0 + Iv;
function Et(t) {
  return t.max - t.min;
}
function zC(t, r, o) {
  return Math.abs(t - r) <= o;
}
function vm(t, r, o, s = 0.5) {
  (t.origin = s),
    (t.originPoint = Ve(r.min, r.max, t.origin)),
    (t.scale = Et(o) / Et(r)),
    (t.translate = Ve(o.min, o.max, t.origin) - t.originPoint),
    ((t.scale >= OC && t.scale <= _C) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= VC && t.translate <= FC) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function gi(t, r, o, s) {
  vm(t.x, r.x, o.x, s ? s.originX : void 0),
    vm(t.y, r.y, o.y, s ? s.originY : void 0);
}
function ym(t, r, o) {
  (t.min = o.min + r.min), (t.max = t.min + Et(r));
}
function BC(t, r, o) {
  ym(t.x, r.x, o.x), ym(t.y, r.y, o.y);
}
function xm(t, r, o) {
  (t.min = r.min - o.min), (t.max = t.min + Et(r));
}
function vi(t, r, o) {
  xm(t.x, r.x, o.x), xm(t.y, r.y, o.y);
}
function UC(t, { min: r, max: o }, s) {
  return (
    r !== void 0 && t < r
      ? (t = s ? Ve(r, t, s.min) : Math.max(t, r))
      : o !== void 0 && t > o && (t = s ? Ve(o, t, s.max) : Math.min(t, o)),
    t
  );
}
function wm(t, r, o) {
  return {
    min: r !== void 0 ? t.min + r : void 0,
    max: o !== void 0 ? t.max + o - (t.max - t.min) : void 0,
  };
}
function $C(t, { top: r, left: o, bottom: s, right: a }) {
  return { x: wm(t.x, o, a), y: wm(t.y, r, s) };
}
function Sm(t, r) {
  let o = r.min - t.min,
    s = r.max - t.max;
  return r.max - r.min < t.max - t.min && ([o, s] = [s, o]), { min: o, max: s };
}
function WC(t, r) {
  return { x: Sm(t.x, r.x), y: Sm(t.y, r.y) };
}
function HC(t, r) {
  let o = 0.5;
  const s = Et(t),
    a = Et(r);
  return (
    a > s
      ? (o = uo(r.min, r.max - s, t.min))
      : s > a && (o = uo(t.min, t.max - a, r.min)),
    vn(0, 1, o)
  );
}
function KC(t, r) {
  const o = {};
  return (
    r.min !== void 0 && (o.min = r.min - t.min),
    r.max !== void 0 && (o.max = r.max - t.min),
    o
  );
}
const Sc = 0.35;
function GC(t = Sc) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Sc),
    { x: Cm(t, "left", "right"), y: Cm(t, "top", "bottom") }
  );
}
function Cm(t, r, o) {
  return { min: km(t, r), max: km(t, o) };
}
function km(t, r) {
  return typeof t == "number" ? t : t[r] || 0;
}
const Tm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  to = () => ({ x: Tm(), y: Tm() }),
  Pm = () => ({ min: 0, max: 0 }),
  Ke = () => ({ x: Pm(), y: Pm() });
function Dt(t) {
  return [t("x"), t("y")];
}
function Ov({ top: t, left: r, right: o, bottom: s }) {
  return { x: { min: r, max: o }, y: { min: t, max: s } };
}
function YC({ x: t, y: r }) {
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function XC(t, r) {
  if (!r) return t;
  const o = r({ x: t.left, y: t.top }),
    s = r({ x: t.right, y: t.bottom });
  return { top: o.y, left: o.x, bottom: s.y, right: s.x };
}
function Gu(t) {
  return t === void 0 || t === 1;
}
function Cc({ scale: t, scaleX: r, scaleY: o }) {
  return !Gu(t) || !Gu(r) || !Gu(o);
}
function vr(t) {
  return (
    Cc(t) ||
    _v(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function _v(t) {
  return Em(t.x) || Em(t.y);
}
function Em(t) {
  return t && t !== "0%";
}
function ma(t, r, o) {
  const s = t - o,
    a = r * s;
  return o + a;
}
function Rm(t, r, o, s, a) {
  return a !== void 0 && (t = ma(t, a, s)), ma(t, o, s) + r;
}
function kc(t, r = 0, o = 1, s, a) {
  (t.min = Rm(t.min, r, o, s, a)), (t.max = Rm(t.max, r, o, s, a));
}
function Vv(t, { x: r, y: o }) {
  kc(t.x, r.translate, r.scale, r.originPoint),
    kc(t.y, o.translate, o.scale, o.originPoint);
}
const bm = 0.999999999999,
  Am = 1.0000000000001;
function QC(t, r, o, s = !1) {
  const a = o.length;
  if (!a) return;
  r.x = r.y = 1;
  let u, c;
  for (let d = 0; d < a; d++) {
    (u = o[d]), (c = u.projectionDelta);
    const { visualElement: p } = u.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (s &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        ro(t, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      c && ((r.x *= c.x.scale), (r.y *= c.y.scale), Vv(t, c)),
      s && vr(u.latestValues) && ro(t, u.latestValues));
  }
  r.x < Am && r.x > bm && (r.x = 1), r.y < Am && r.y > bm && (r.y = 1);
}
function no(t, r) {
  (t.min = t.min + r), (t.max = t.max + r);
}
function Nm(t, r, o, s, a = 0.5) {
  const u = Ve(t.min, t.max, a);
  kc(t, r, o, u, s);
}
function ro(t, r) {
  Nm(t.x, r.x, r.scaleX, r.scale, r.originX),
    Nm(t.y, r.y, r.scaleY, r.scale, r.originY);
}
function Fv(t, r) {
  return Ov(XC(t.getBoundingClientRect(), r));
}
function qC(t, r, o) {
  const s = Fv(t, o),
    { scroll: a } = r;
  return a && (no(s.x, a.offset.x), no(s.y, a.offset.y)), s;
}
const zv = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  ZC = new WeakMap();
class JC {
  constructor(r) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ke()),
      (this.visualElement = r);
  }
  start(r, { snapToCursor: o = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const a = (g) => {
        const { dragSnapToOrigin: v } = this.getProps();
        v ? this.pauseAnimation() : this.stopAnimation(),
          o && this.snapToCursor(ji(g).point);
      },
      u = (g, v) => {
        const { drag: y, dragPropagation: C, onDragStart: P } = this.getProps();
        if (
          y &&
          !C &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = MC(y)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Dt((T) => {
            let E = this.getAxisMotionValue(T).get() || 0;
            if (Zt.test(E)) {
              const { projection: b } = this.visualElement;
              if (b && b.layout) {
                const N = b.layout.layoutBox[T];
                N && (E = Et(N) * (parseFloat(E) / 100));
              }
            }
            this.originPoint[T] = E;
          }),
          P && De.postRender(() => P(g, v)),
          xc(this.visualElement, "transform");
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      c = (g, v) => {
        const {
          dragPropagation: y,
          dragDirectionLock: C,
          onDirectionLock: P,
          onDrag: S,
        } = this.getProps();
        if (!y && !this.openDragLock) return;
        const { offset: T } = v;
        if (C && this.currentDirection === null) {
          (this.currentDirection = ek(T)),
            this.currentDirection !== null && P && P(this.currentDirection);
          return;
        }
        this.updateAxis("x", v.point, T),
          this.updateAxis("y", v.point, T),
          this.visualElement.render(),
          S && S(g, v);
      },
      d = (g, v) => this.stop(g, v),
      p = () =>
        Dt((g) => {
          var v;
          return (
            this.getAnimationState(g) === "paused" &&
            ((v = this.getAxisMotionValue(g).animation) === null || v === void 0
              ? void 0
              : v.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new jv(
      r,
      {
        onSessionStart: a,
        onStart: u,
        onMove: c,
        onSessionEnd: d,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
        contextWindow: zv(this.visualElement),
      },
    );
  }
  stop(r, o) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: a } = o;
    this.startAnimation(a);
    const { onDragEnd: u } = this.getProps();
    u && De.postRender(() => u(r, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: o } = this.visualElement;
    r && (r.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1);
  }
  updateAxis(r, o, s) {
    const { drag: a } = this.getProps();
    if (!s || !Xs(r, a, this.currentDirection)) return;
    const u = this.getAxisMotionValue(r);
    let c = this.originPoint[r] + s[r];
    this.constraints &&
      this.constraints[r] &&
      (c = UC(c, this.constraints[r], this.elastic[r])),
      u.set(c);
  }
  resolveConstraints() {
    var r;
    const { dragConstraints: o, dragElastic: s } = this.getProps(),
      a =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (r = this.visualElement.projection) === null || r === void 0
            ? void 0
            : r.layout,
      u = this.constraints;
    o && eo(o)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : o && a
        ? (this.constraints = $C(a.layoutBox, o))
        : (this.constraints = !1),
      (this.elastic = GC(s)),
      u !== this.constraints &&
        a &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Dt((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = KC(a.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: o } = this.getProps();
    if (!r || !eo(r)) return !1;
    const s = r.current,
      { projection: a } = this.visualElement;
    if (!a || !a.layout) return !1;
    const u = qC(s, a.root, this.visualElement.getTransformPagePoint());
    let c = WC(a.layout.layoutBox, u);
    if (o) {
      const d = o(YC(c));
      (this.hasMutatedConstraints = !!d), d && (c = Ov(d));
    }
    return c;
  }
  startAnimation(r) {
    const {
        drag: o,
        dragMomentum: s,
        dragElastic: a,
        dragTransition: u,
        dragSnapToOrigin: c,
        onDragTransitionEnd: d,
      } = this.getProps(),
      p = this.constraints || {},
      m = Dt((g) => {
        if (!Xs(g, o, this.currentDirection)) return;
        let v = (p && p[g]) || {};
        c && (v = { min: 0, max: 0 });
        const y = a ? 200 : 1e6,
          C = a ? 40 : 1e7,
          P = {
            type: "inertia",
            velocity: s ? r[g] : 0,
            bounceStiffness: y,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...v,
          };
        return this.startAxisValueAnimation(g, P);
      });
    return Promise.all(m).then(d);
  }
  startAxisValueAnimation(r, o) {
    const s = this.getAxisMotionValue(r);
    return (
      xc(this.visualElement, r), s.start(ad(r, s, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Dt((r) => this.getAxisMotionValue(r).stop());
  }
  pauseAnimation() {
    Dt((r) => {
      var o;
      return (o = this.getAxisMotionValue(r).animation) === null || o === void 0
        ? void 0
        : o.pause();
    });
  }
  getAnimationState(r) {
    var o;
    return (o = this.getAxisMotionValue(r).animation) === null || o === void 0
      ? void 0
      : o.state;
  }
  getAxisMotionValue(r) {
    const o = `_drag${r.toUpperCase()}`,
      s = this.visualElement.getProps(),
      a = s[o];
    return (
      a ||
      this.visualElement.getValue(r, (s.initial ? s.initial[r] : void 0) || 0)
    );
  }
  snapToCursor(r) {
    Dt((o) => {
      const { drag: s } = this.getProps();
      if (!Xs(o, s, this.currentDirection)) return;
      const { projection: a } = this.visualElement,
        u = this.getAxisMotionValue(o);
      if (a && a.layout) {
        const { min: c, max: d } = a.layout.layoutBox[o];
        u.set(r[o] - Ve(c, d, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: r, dragConstraints: o } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!eo(o) || !s || !this.constraints) return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    Dt((c) => {
      const d = this.getAxisMotionValue(c);
      if (d && this.constraints !== !1) {
        const p = d.get();
        a[c] = HC({ min: p, max: p }, this.constraints[c]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Dt((c) => {
        if (!Xs(c, r, null)) return;
        const d = this.getAxisMotionValue(c),
          { min: p, max: m } = this.constraints[c];
        d.set(Ve(p, m, a[c]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ZC.set(this.visualElement, this);
    const r = this.visualElement.current,
      o = mi(r, "pointerdown", (p) => {
        const { drag: m, dragListener: g = !0 } = this.getProps();
        m && g && this.start(p);
      }),
      s = () => {
        const { dragConstraints: p } = this.getProps();
        eo(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: a } = this.visualElement,
      u = a.addEventListener("measure", s);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()),
      De.read(s);
    const c = Ti(window, "resize", () => this.scalePositionWithinConstraints()),
      d = a.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (Dt((g) => {
              const v = this.getAxisMotionValue(g);
              v &&
                ((this.originPoint[g] += p[g].translate),
                v.set(v.get() + p[g].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      c(), o(), u(), d && d();
    };
  }
  getProps() {
    const r = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: s = !1,
        dragPropagation: a = !1,
        dragConstraints: u = !1,
        dragElastic: c = Sc,
        dragMomentum: d = !0,
      } = r;
    return {
      ...r,
      drag: o,
      dragDirectionLock: s,
      dragPropagation: a,
      dragConstraints: u,
      dragElastic: c,
      dragMomentum: d,
    };
  }
}
function Xs(t, r, o) {
  return (r === !0 || r === t) && (o === null || o === t);
}
function ek(t, r = 10) {
  let o = null;
  return Math.abs(t.y) > r ? (o = "y") : Math.abs(t.x) > r && (o = "x"), o;
}
class tk extends er {
  constructor(r) {
    super(r),
      (this.removeGroupControls = Tt),
      (this.removeListeners = Tt),
      (this.controls = new JC(r));
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    r && (this.removeGroupControls = r.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Tt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mm = (t) => (r, o) => {
  t && De.postRender(() => t(r, o));
};
class nk extends er {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Tt);
  }
  onPointerDown(r) {
    this.session = new jv(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: zv(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: r,
      onPanStart: o,
      onPan: s,
      onPanEnd: a,
    } = this.node.getProps();
    return {
      onSessionStart: Mm(r),
      onStart: Mm(o),
      onMove: s,
      onEnd: (u, c) => {
        delete this.session, a && De.postRender(() => a(u, c));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mi(this.node.current, "pointerdown", (r) =>
      this.onPointerDown(r),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ba = w.createContext(null);
function rk() {
  const t = w.useContext(ba);
  if (t === null) return [!0, null];
  const { isPresent: r, onExitComplete: o, register: s } = t,
    a = w.useId();
  w.useEffect(() => s(a), []);
  const u = w.useCallback(() => o && o(a), [a, o]);
  return !r && o ? [!1, u] : [!0];
}
const pd = w.createContext({}),
  Bv = w.createContext({}),
  ia = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function jm(t, r) {
  return r.max === r.min ? 0 : (t / (r.max - r.min)) * 100;
}
const ai = {
    correct: (t, r) => {
      if (!r.target) return t;
      if (typeof t == "string")
        if (de.test(t)) t = parseFloat(t);
        else return t;
      const o = jm(t, r.target.x),
        s = jm(t, r.target.y);
      return `${o}% ${s}%`;
    },
  },
  ok = {
    correct: (t, { treeScale: r, projectionDelta: o }) => {
      const s = t,
        a = Qn.parse(t);
      if (a.length > 5) return s;
      const u = Qn.createTransformer(t),
        c = typeof a[0] != "number" ? 1 : 0,
        d = o.x.scale * r.x,
        p = o.y.scale * r.y;
      (a[0 + c] /= d), (a[1 + c] /= p);
      const m = Ve(d, p, 0.5);
      return (
        typeof a[2 + c] == "number" && (a[2 + c] /= m),
        typeof a[3 + c] == "number" && (a[3 + c] /= m),
        u(a)
      );
    },
  },
  ga = {};
function ik(t) {
  Object.assign(ga, t);
}
const { schedule: hd, cancel: Qb } = Ug(queueMicrotask, !1);
class sk extends w.Component {
  componentDidMount() {
    const {
        visualElement: r,
        layoutGroup: o,
        switchLayoutGroup: s,
        layoutId: a,
      } = this.props,
      { projection: u } = r;
    ik(ak),
      u &&
        (o.group && o.group.add(u),
        s && s.register && a && s.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ia.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(r) {
    const {
        layoutDependency: o,
        visualElement: s,
        drag: a,
        isPresent: u,
      } = this.props,
      c = s.projection;
    return (
      c &&
        ((c.isPresent = u),
        a || r.layoutDependency !== o || o === void 0
          ? c.willUpdate()
          : this.safeToRemove(),
        r.isPresent !== u &&
          (u
            ? c.promote()
            : c.relegate() ||
              De.postRender(() => {
                const d = c.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: r } = this.props.visualElement;
    r &&
      (r.root.didUpdate(),
      hd.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: r,
        layoutGroup: o,
        switchLayoutGroup: s,
      } = this.props,
      { projection: a } = r;
    a &&
      (a.scheduleCheckAfterUnmount(),
      o && o.group && o.group.remove(a),
      s && s.deregister && s.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function Uv(t) {
  const [r, o] = rk(),
    s = w.useContext(pd);
  return k.jsx(sk, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: w.useContext(Bv),
    isPresent: r,
    safeToRemove: o,
  });
}
const ak = {
    borderRadius: {
      ...ai,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ai,
    borderTopRightRadius: ai,
    borderBottomLeftRadius: ai,
    borderBottomRightRadius: ai,
    boxShadow: ok,
  },
  $v = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  lk = $v.length,
  Lm = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Dm = (t) => typeof t == "number" || de.test(t);
function uk(t, r, o, s, a, u) {
  a
    ? ((t.opacity = Ve(0, o.opacity !== void 0 ? o.opacity : 1, ck(s))),
      (t.opacityExit = Ve(r.opacity !== void 0 ? r.opacity : 1, 0, dk(s))))
    : u &&
      (t.opacity = Ve(
        r.opacity !== void 0 ? r.opacity : 1,
        o.opacity !== void 0 ? o.opacity : 1,
        s,
      ));
  for (let c = 0; c < lk; c++) {
    const d = `border${$v[c]}Radius`;
    let p = Im(r, d),
      m = Im(o, d);
    if (p === void 0 && m === void 0) continue;
    p || (p = 0),
      m || (m = 0),
      p === 0 || m === 0 || Dm(p) === Dm(m)
        ? ((t[d] = Math.max(Ve(Lm(p), Lm(m), s), 0)),
          (Zt.test(m) || Zt.test(p)) && (t[d] += "%"))
        : (t[d] = m);
  }
  (r.rotate || o.rotate) && (t.rotate = Ve(r.rotate || 0, o.rotate || 0, s));
}
function Im(t, r) {
  return t[r] !== void 0 ? t[r] : t.borderRadius;
}
const ck = Wv(0, 0.5, Xg),
  dk = Wv(0.5, 0.95, Tt);
function Wv(t, r, o) {
  return (s) => (s < t ? 0 : s > r ? 1 : o(uo(t, r, s)));
}
function Om(t, r) {
  (t.min = r.min), (t.max = r.max);
}
function Lt(t, r) {
  Om(t.x, r.x), Om(t.y, r.y);
}
function _m(t, r) {
  (t.translate = r.translate),
    (t.scale = r.scale),
    (t.originPoint = r.originPoint),
    (t.origin = r.origin);
}
function Vm(t, r, o, s, a) {
  return (
    (t -= r), (t = ma(t, 1 / o, s)), a !== void 0 && (t = ma(t, 1 / a, s)), t
  );
}
function fk(t, r = 0, o = 1, s = 0.5, a, u = t, c = t) {
  if (
    (Zt.test(r) &&
      ((r = parseFloat(r)), (r = Ve(c.min, c.max, r / 100) - c.min)),
    typeof r != "number")
  )
    return;
  let d = Ve(u.min, u.max, s);
  t === u && (d -= r),
    (t.min = Vm(t.min, r, o, d, a)),
    (t.max = Vm(t.max, r, o, d, a));
}
function Fm(t, r, [o, s, a], u, c) {
  fk(t, r[o], r[s], r[a], r.scale, u, c);
}
const pk = ["x", "scaleX", "originX"],
  hk = ["y", "scaleY", "originY"];
function zm(t, r, o, s) {
  Fm(t.x, r, pk, o ? o.x : void 0, s ? s.x : void 0),
    Fm(t.y, r, hk, o ? o.y : void 0, s ? s.y : void 0);
}
function Bm(t) {
  return t.translate === 0 && t.scale === 1;
}
function Hv(t) {
  return Bm(t.x) && Bm(t.y);
}
function Um(t, r) {
  return t.min === r.min && t.max === r.max;
}
function mk(t, r) {
  return Um(t.x, r.x) && Um(t.y, r.y);
}
function $m(t, r) {
  return (
    Math.round(t.min) === Math.round(r.min) &&
    Math.round(t.max) === Math.round(r.max)
  );
}
function Kv(t, r) {
  return $m(t.x, r.x) && $m(t.y, r.y);
}
function Wm(t) {
  return Et(t.x) / Et(t.y);
}
function Hm(t, r) {
  return (
    t.translate === r.translate &&
    t.scale === r.scale &&
    t.originPoint === r.originPoint
  );
}
class gk {
  constructor() {
    this.members = [];
  }
  add(r) {
    ld(this.members, r), r.scheduleRender();
  }
  remove(r) {
    if (
      (ud(this.members, r),
      r === this.prevLead && (this.prevLead = void 0),
      r === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(r) {
    const o = this.members.findIndex((a) => r === a);
    if (o === 0) return !1;
    let s;
    for (let a = o; a >= 0; a--) {
      const u = this.members[a];
      if (u.isPresent !== !1) {
        s = u;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(r, o) {
    const s = this.lead;
    if (r !== s && ((this.prevLead = s), (this.lead = r), r.show(), s)) {
      s.instance && s.scheduleRender(),
        r.scheduleRender(),
        (r.resumeFrom = s),
        o && (r.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((r.snapshot = s.snapshot),
          (r.snapshot.latestValues = s.animationValues || s.latestValues)),
        r.root && r.root.isUpdating && (r.isLayoutDirty = !0);
      const { crossfade: a } = r.options;
      a === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      const { options: o, resumingFrom: s } = r;
      o.onExitComplete && o.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((r) => {
      r.instance && r.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vk(t, r, o) {
  let s = "";
  const a = t.x.translate / r.x,
    u = t.y.translate / r.y,
    c = (o == null ? void 0 : o.z) || 0;
  if (
    ((a || u || c) && (s = `translate3d(${a}px, ${u}px, ${c}px) `),
    (r.x !== 1 || r.y !== 1) && (s += `scale(${1 / r.x}, ${1 / r.y}) `),
    o)
  ) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: v,
      rotateY: y,
      skewX: C,
      skewY: P,
    } = o;
    m && (s = `perspective(${m}px) ${s}`),
      g && (s += `rotate(${g}deg) `),
      v && (s += `rotateX(${v}deg) `),
      y && (s += `rotateY(${y}deg) `),
      C && (s += `skewX(${C}deg) `),
      P && (s += `skewY(${P}deg) `);
  }
  const d = t.x.scale * r.x,
    p = t.y.scale * r.y;
  return (d !== 1 || p !== 1) && (s += `scale(${d}, ${p})`), s || "none";
}
const yk = (t, r) => t.depth - r.depth;
class xk {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(r) {
    ld(this.children, r), (this.isDirty = !0);
  }
  remove(r) {
    ud(this.children, r), (this.isDirty = !0);
  }
  forEach(r) {
    this.isDirty && this.children.sort(yk),
      (this.isDirty = !1),
      this.children.forEach(r);
  }
}
function sa(t) {
  const r = lt(t) ? t.get() : t;
  return rC(r) ? r.toValue() : r;
}
function wk(t, r) {
  const o = Jt.now(),
    s = ({ timestamp: a }) => {
      const u = a - o;
      u >= r && (Xn(s), t(u - r));
    };
  return De.read(s, !0), () => Xn(s);
}
function Sk(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function Ck(t, r, o) {
  const s = lt(t) ? t : ki(t);
  return s.start(ad("", s, r, o)), s.animation;
}
const yr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  fi = typeof window < "u" && window.MotionDebug !== void 0,
  Yu = ["", "X", "Y", "Z"],
  kk = { visibility: "hidden" },
  Km = 1e3;
let Tk = 0;
function Xu(t, r, o, s) {
  const { latestValues: a } = r;
  a[t] && ((o[t] = a[t]), r.setStaticValue(t, 0), s && (s[t] = 0));
}
function Gv(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: r } = t.options;
  if (!r) return;
  const o = Ev(r);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: a, layoutId: u } = t.options;
    window.MotionCancelOptimisedAnimation(o, "transform", De, !(a || u));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Gv(s);
}
function Yv({
  attachResizeListener: t,
  defaultParent: r,
  measureScroll: o,
  checkIsScrollRoot: s,
  resetTransform: a,
}) {
  return class {
    constructor(c = {}, d = r == null ? void 0 : r()) {
      (this.id = Tk++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            fi &&
              (yr.totalNodes =
                yr.resolvedTargetDeltas =
                yr.recalculatedProjection =
                  0),
            this.nodes.forEach(Rk),
            this.nodes.forEach(jk),
            this.nodes.forEach(Lk),
            this.nodes.forEach(bk),
            fi && window.MotionDebug.record(yr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = c),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0);
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xk());
    }
    addEventListener(c, d) {
      return (
        this.eventHandlers.has(c) || this.eventHandlers.set(c, new cd()),
        this.eventHandlers.get(c).add(d)
      );
    }
    notifyListeners(c, ...d) {
      const p = this.eventHandlers.get(c);
      p && p.notify(...d);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    mount(c, d = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Sk(c)), (this.instance = c);
      const { layoutId: p, layout: m, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(c),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        d && (m || p) && (this.isLayoutDirty = !0),
        t)
      ) {
        let v;
        const y = () => (this.root.updateBlockedByResize = !1);
        t(c, () => {
          (this.root.updateBlockedByResize = !0),
            v && v(),
            (v = wk(y, 250)),
            ia.hasAnimatedSinceResize &&
              ((ia.hasAnimatedSinceResize = !1), this.nodes.forEach(Ym));
        });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          g &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: y,
              hasRelativeTargetChanged: C,
              layout: P,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const S =
                  this.options.transition || g.getDefaultTransition() || Vk,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: E } =
                  g.getProps(),
                b = !this.targetLayout || !Kv(this.targetLayout, P) || C,
                N = !y && C;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                N ||
                (y && (b || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(v, N);
                const L = { ...Gc(S, "layout"), onPlay: T, onComplete: E };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((L.delay = 0), (L.type = !1)),
                  this.startAnimation(L);
              } else
                y || Ym(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = P;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Xn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Dk),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Gv(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        (v.shouldResetTransform = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: d, layout: p } = this.options;
      if (d === void 0 && !p) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        c && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Gm);
        return;
      }
      this.isUpdating || this.nodes.forEach(Nk),
        (this.isUpdating = !1),
        this.nodes.forEach(Mk),
        this.nodes.forEach(Pk),
        this.nodes.forEach(Ek),
        this.clearAllSnapshots();
      const d = Jt.now();
      (nt.delta = vn(0, 1e3 / 60, d - nt.timestamp)),
        (nt.timestamp = d),
        (nt.isProcessing = !0),
        Fu.update.process(nt),
        Fu.preRender.process(nt),
        Fu.render.process(nt),
        (nt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), hd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ak), this.sharedNodes.forEach(Ik);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        De.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      De.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const c = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ke()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          c ? c.layoutBox : void 0,
        );
    }
    updateScroll(c = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === c &&
          (d = !1),
        d)
      ) {
        const p = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: p,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!a) return;
      const c =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !Hv(this.projectionDelta),
        p = this.getTransformTemplate(),
        m = p ? p(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      c &&
        (d || vr(this.latestValues) || g) &&
        (a(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(c = !0) {
      const d = this.measurePageBox();
      let p = this.removeElementScroll(d);
      return (
        c && (p = this.removeTransform(p)),
        Fk(p),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: d } = this.options;
      if (!d) return Ke();
      const p = d.measureViewportBox();
      if (
        !(
          ((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) ||
          this.path.some(zk)
        )
      ) {
        const { scroll: g } = this.root;
        g && (no(p.x, g.offset.x), no(p.y, g.offset.y));
      }
      return p;
    }
    removeElementScroll(c) {
      var d;
      const p = Ke();
      if (
        (Lt(p, c), !((d = this.scroll) === null || d === void 0) && d.wasRoot)
      )
        return p;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m],
          { scroll: v, options: y } = g;
        g !== this.root &&
          v &&
          y.layoutScroll &&
          (v.wasRoot && Lt(p, c), no(p.x, v.offset.x), no(p.y, v.offset.y));
      }
      return p;
    }
    applyTransform(c, d = !1) {
      const p = Ke();
      Lt(p, c);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        !d &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          ro(p, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          vr(g.latestValues) && ro(p, g.latestValues);
      }
      return vr(this.latestValues) && ro(p, this.latestValues), p;
    }
    removeTransform(c) {
      const d = Ke();
      Lt(d, c);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !vr(m.latestValues)) continue;
        Cc(m.latestValues) && m.updateSnapshot();
        const g = Ke(),
          v = m.measurePageBox();
        Lt(g, v),
          zm(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g);
      }
      return vr(this.latestValues) && zm(d, this.latestValues), d;
    }
    setTargetDelta(c) {
      (this.targetDelta = c),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== nt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      var d;
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== p;
      if (
        !(
          c ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((d = this.parent) === null || d === void 0) &&
            d.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: y } = this.options;
      if (!(!this.layout || !(v || y))) {
        if (
          ((this.resolvedRelativeTargetAt = nt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const C = this.getClosestProjectingParent();
          C && C.layout && this.animationProgress !== 1
            ? ((this.relativeParent = C),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ke()),
              (this.relativeTargetOrigin = Ke()),
              vi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                C.layout.layoutBox,
              ),
              Lt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ke()), (this.targetWithTransforms = Ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                BC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Lt(this.target, this.layout.layoutBox),
                  Vv(this.target, this.targetDelta))
                : Lt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const C = this.getClosestProjectingParent();
            C &&
            !!C.resumingFrom == !!this.resumingFrom &&
            !C.options.layoutScroll &&
            C.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = C),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ke()),
                (this.relativeTargetOrigin = Ke()),
                vi(this.relativeTargetOrigin, this.target, C.target),
                Lt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          fi && yr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Cc(this.parent.latestValues) ||
          _v(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var c;
      const d = this.getLead(),
        p = !!this.resumingFrom || this !== d;
      let m = !0;
      if (
        ((this.isProjectionDirty ||
          (!((c = this.parent) === null || c === void 0) &&
            c.isProjectionDirty)) &&
          (m = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === nt.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || v))
      )
        return;
      Lt(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x,
        C = this.treeScale.y;
      QC(this.layoutCorrected, this.treeScale, this.path, p),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = Ke()));
      const { target: P } = d;
      if (!P) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (_m(this.prevProjectionDelta.x, this.projectionDelta.x),
          _m(this.prevProjectionDelta.y, this.projectionDelta.y)),
        gi(this.projectionDelta, this.layoutCorrected, P, this.latestValues),
        (this.treeScale.x !== y ||
          this.treeScale.y !== C ||
          !Hm(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Hm(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", P)),
        fi && yr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      var d;
      if (
        ((d = this.options.visualElement) === null ||
          d === void 0 ||
          d.scheduleRender(),
        c)
      ) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = to()),
        (this.projectionDelta = to()),
        (this.projectionDeltaWithTransform = to());
    }
    setAnimationOrigin(c, d = !1) {
      const p = this.snapshot,
        m = p ? p.latestValues : {},
        g = { ...this.latestValues },
        v = to();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d);
      const y = Ke(),
        C = p ? p.source : void 0,
        P = this.layout ? this.layout.source : void 0,
        S = C !== P,
        T = this.getStack(),
        E = !T || T.members.length <= 1,
        b = !!(S && !E && this.options.crossfade === !0 && !this.path.some(_k));
      this.animationProgress = 0;
      let N;
      (this.mixTargetDelta = (L) => {
        const I = L / 1e3;
        Xm(v.x, c.x, I),
          Xm(v.y, c.y, I),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (vi(y, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ok(this.relativeTarget, this.relativeTargetOrigin, y, I),
            N && mk(this.relativeTarget, N) && (this.isProjectionDirty = !1),
            N || (N = Ke()),
            Lt(N, this.relativeTarget)),
          S &&
            ((this.animationValues = g), uk(g, m, this.latestValues, I, b, E)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = I);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Xn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = De.update(() => {
          (ia.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Ck(0, Km, {
              ...c,
              onUpdate: (d) => {
                this.mixTargetDelta(d), c.onUpdate && c.onUpdate(d);
              },
              onComplete: () => {
                c.onComplete && c.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const c = this.getStack();
      c && c.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Km),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: d,
        target: p,
        layout: m,
        latestValues: g,
      } = c;
      if (!(!d || !p || !m)) {
        if (
          this !== c &&
          this.layout &&
          m &&
          Xv(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          p = this.target || Ke();
          const v = Et(this.layout.layoutBox.x);
          (p.x.min = c.target.x.min), (p.x.max = p.x.min + v);
          const y = Et(this.layout.layoutBox.y);
          (p.y.min = c.target.y.min), (p.y.max = p.y.min + y);
        }
        Lt(d, p),
          ro(d, g),
          gi(this.projectionDeltaWithTransform, this.layoutCorrected, d, g);
      }
    }
    registerSharedNode(c, d) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new gk()),
        this.sharedNodes.get(c).add(d);
      const m = d.options.initialPromotionConfig;
      d.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      var c;
      const { layoutId: d } = this.options;
      return d
        ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var c;
      const { layoutId: d } = this.options;
      return d
        ? (c = this.getStack()) === null || c === void 0
          ? void 0
          : c.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c) return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: d, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      m && m.promote(this, p),
        c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c) return;
      let d = !1;
      const { latestValues: p } = c;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const m = {};
      p.z && Xu("z", c, m, this.animationValues);
      for (let g = 0; g < Yu.length; g++)
        Xu(`rotate${Yu[g]}`, c, m, this.animationValues),
          Xu(`skew${Yu[g]}`, c, m, this.animationValues);
      c.render();
      for (const g in m)
        c.setStaticValue(g, m[g]),
          this.animationValues && (this.animationValues[g] = m[g]);
      c.scheduleRender();
    }
    getProjectionStyles(c) {
      var d, p;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return kk;
      const m = { visibility: "" },
        g = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = sa(c == null ? void 0 : c.pointerEvents) || ""),
          (m.transform = g ? g(this.latestValues, "") : "none"),
          m
        );
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const S = {};
        return (
          this.options.layoutId &&
            ((S.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (S.pointerEvents = sa(c == null ? void 0 : c.pointerEvents) || "")),
          this.hasProjected &&
            !vr(this.latestValues) &&
            ((S.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)),
          S
        );
      }
      const y = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = vk(
          this.projectionDeltaWithTransform,
          this.treeScale,
          y,
        )),
        g && (m.transform = g(y, m.transform));
      const { x: C, y: P } = this.projectionDelta;
      (m.transformOrigin = `${C.origin * 100}% ${P.origin * 100}% 0`),
        v.animationValues
          ? (m.opacity =
              v === this
                ? (p =
                    (d = y.opacity) !== null && d !== void 0
                      ? d
                      : this.latestValues.opacity) !== null && p !== void 0
                  ? p
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : y.opacityExit)
          : (m.opacity =
              v === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                  ? y.opacityExit
                  : 0);
      for (const S in ga) {
        if (y[S] === void 0) continue;
        const { correct: T, applyTo: E } = ga[S],
          b = m.transform === "none" ? y[S] : T(y[S], v);
        if (E) {
          const N = E.length;
          for (let L = 0; L < N; L++) m[E[L]] = b;
        } else m[S] = b;
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            v === this
              ? sa(c == null ? void 0 : c.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((c) => {
        var d;
        return (d = c.currentAnimation) === null || d === void 0
          ? void 0
          : d.stop();
      }),
        this.root.nodes.forEach(Gm),
        this.root.sharedNodes.clear();
    }
  };
}
function Pk(t) {
  t.updateLayout();
}
function Ek(t) {
  var r;
  const o =
    ((r = t.resumeFrom) === null || r === void 0 ? void 0 : r.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: a } = t.layout,
      { animationType: u } = t.options,
      c = o.source !== t.layout.source;
    u === "size"
      ? Dt((v) => {
          const y = c ? o.measuredBox[v] : o.layoutBox[v],
            C = Et(y);
          (y.min = s[v].min), (y.max = y.min + C);
        })
      : Xv(u, o.layoutBox, s) &&
        Dt((v) => {
          const y = c ? o.measuredBox[v] : o.layoutBox[v],
            C = Et(s[v]);
          (y.max = y.min + C),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[v].max = t.relativeTarget[v].min + C));
        });
    const d = to();
    gi(d, s, o.layoutBox);
    const p = to();
    c ? gi(p, t.applyTransform(a, !0), o.measuredBox) : gi(p, s, o.layoutBox);
    const m = !Hv(d);
    let g = !1;
    if (!t.resumeFrom) {
      const v = t.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: y, layout: C } = v;
        if (y && C) {
          const P = Ke();
          vi(P, o.layoutBox, y.layoutBox);
          const S = Ke();
          vi(S, s, C.layoutBox),
            Kv(P, S) || (g = !0),
            v.options.layoutRoot &&
              ((t.relativeTarget = S),
              (t.relativeTargetOrigin = P),
              (t.relativeParent = v));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: p,
      layoutDelta: d,
      hasLayoutChanged: m,
      hasRelativeTargetChanged: g,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Rk(t) {
  fi && yr.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function bk(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Ak(t) {
  t.clearSnapshot();
}
function Gm(t) {
  t.clearMeasurements();
}
function Nk(t) {
  t.isLayoutDirty = !1;
}
function Mk(t) {
  const { visualElement: r } = t.options;
  r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function Ym(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function jk(t) {
  t.resolveTargetDelta();
}
function Lk(t) {
  t.calcProjection();
}
function Dk(t) {
  t.resetSkewAndRotation();
}
function Ik(t) {
  t.removeLeadSnapshot();
}
function Xm(t, r, o) {
  (t.translate = Ve(r.translate, 0, o)),
    (t.scale = Ve(r.scale, 1, o)),
    (t.origin = r.origin),
    (t.originPoint = r.originPoint);
}
function Qm(t, r, o, s) {
  (t.min = Ve(r.min, o.min, s)), (t.max = Ve(r.max, o.max, s));
}
function Ok(t, r, o, s) {
  Qm(t.x, r.x, o.x, s), Qm(t.y, r.y, o.y, s);
}
function _k(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Vk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  qm = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Zm = qm("applewebkit/") && !qm("chrome/") ? Math.round : Tt;
function Jm(t) {
  (t.min = Zm(t.min)), (t.max = Zm(t.max));
}
function Fk(t) {
  Jm(t.x), Jm(t.y);
}
function Xv(t, r, o) {
  return (
    t === "position" || (t === "preserve-aspect" && !zC(Wm(r), Wm(o), 0.2))
  );
}
function zk(t) {
  var r;
  return (
    t !== t.root &&
    ((r = t.scroll) === null || r === void 0 ? void 0 : r.wasRoot)
  );
}
const Bk = Yv({
    attachResizeListener: (t, r) => Ti(t, "resize", r),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Qu = { current: void 0 },
  Qv = Yv({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Qu.current) {
        const t = new Bk({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Qu.current = t);
      }
      return Qu.current;
    },
    resetTransform: (t, r) => {
      t.style.transform = r !== void 0 ? r : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Uk = {
    pan: { Feature: nk },
    drag: { Feature: tk, ProjectionNode: Qv, MeasureLayout: Uv },
  };
function eg(t, r, o) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", o === "Start");
  const a = "onHover" + o,
    u = s[a];
  u && De.postRender(() => u(r, ji(r)));
}
class $k extends er {
  mount() {
    const { current: r } = this.node;
    r &&
      (this.unmount = EC(
        r,
        (o) => (eg(this.node, o, "Start"), (s) => eg(this.node, s, "End")),
      ));
  }
  unmount() {}
}
class Wk extends er {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let r = !1;
    try {
      r = this.node.current.matches(":focus-visible");
    } catch {
      r = !0;
    }
    !r ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Mi(
      Ti(this.node.current, "focus", () => this.onFocus()),
      Ti(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function tg(t, r, o) {
  const { props: s } = t;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive("whileTap", o === "Start");
  const a = "onTap" + (o === "End" ? "" : o),
    u = s[a];
  u && De.postRender(() => u(r, ji(r)));
}
class Hk extends er {
  mount() {
    const { current: r } = this.node;
    r &&
      (this.unmount = NC(
        r,
        (o) => (
          tg(this.node, o, "Start"),
          (s, { success: a }) => tg(this.node, s, a ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Tc = new WeakMap(),
  qu = new WeakMap(),
  Kk = (t) => {
    const r = Tc.get(t.target);
    r && r(t);
  },
  Gk = (t) => {
    t.forEach(Kk);
  };
function Yk({ root: t, ...r }) {
  const o = t || document;
  qu.has(o) || qu.set(o, {});
  const s = qu.get(o),
    a = JSON.stringify(r);
  return s[a] || (s[a] = new IntersectionObserver(Gk, { root: t, ...r })), s[a];
}
function Xk(t, r, o) {
  const s = Yk(r);
  return (
    Tc.set(t, o),
    s.observe(t),
    () => {
      Tc.delete(t), s.unobserve(t);
    }
  );
}
const Qk = { some: 0, all: 1 };
class qk extends er {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: r = {} } = this.node.getProps(),
      { root: o, margin: s, amount: a = "some", once: u } = r,
      c = {
        root: o ? o.current : void 0,
        rootMargin: s,
        threshold: typeof a == "number" ? a : Qk[a],
      },
      d = (p) => {
        const { isIntersecting: m } = p;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(),
          y = m ? g : v;
        y && y(p);
      };
    return Xk(this.node.current, c, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: r, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(Zk(r, o)) && this.startObserver();
  }
  unmount() {}
}
function Zk({ viewport: t = {} }, { viewport: r = {} } = {}) {
  return (o) => t[o] !== r[o];
}
const Jk = {
    inView: { Feature: qk },
    tap: { Feature: Hk },
    focus: { Feature: Wk },
    hover: { Feature: $k },
  },
  eT = { layout: { ProjectionNode: Qv, MeasureLayout: Uv } },
  md = w.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Aa = w.createContext({}),
  gd = typeof window < "u",
  qv = gd ? w.useLayoutEffect : w.useEffect,
  Zv = w.createContext({ strict: !1 });
function tT(t, r, o, s, a) {
  var u, c;
  const { visualElement: d } = w.useContext(Aa),
    p = w.useContext(Zv),
    m = w.useContext(ba),
    g = w.useContext(md).reducedMotion,
    v = w.useRef(null);
  (s = s || p.renderer),
    !v.current &&
      s &&
      (v.current = s(t, {
        visualState: r,
        parent: d,
        props: o,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const y = v.current,
    C = w.useContext(Bv);
  y &&
    !y.projection &&
    a &&
    (y.type === "html" || y.type === "svg") &&
    nT(v.current, o, a, C);
  const P = w.useRef(!1);
  w.useInsertionEffect(() => {
    y && P.current && y.update(o, m);
  });
  const S = o[Pv],
    T = w.useRef(
      !!S &&
        !(
          !((u = window.MotionHandoffIsComplete) === null || u === void 0) &&
          u.call(window, S)
        ) &&
        ((c = window.MotionHasOptimisedAnimation) === null || c === void 0
          ? void 0
          : c.call(window, S)),
    );
  return (
    qv(() => {
      y &&
        ((P.current = !0),
        (window.MotionIsMounted = !0),
        y.updateFeatures(),
        hd.render(y.render),
        T.current && y.animationState && y.animationState.animateChanges());
    }),
    w.useEffect(() => {
      y &&
        (!T.current && y.animationState && y.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) === null ||
              E === void 0 ||
              E.call(window, S);
          }),
          (T.current = !1)));
    }),
    y
  );
}
function nT(t, r, o, s) {
  const {
    layoutId: a,
    layout: u,
    drag: c,
    dragConstraints: d,
    layoutScroll: p,
    layoutRoot: m,
  } = r;
  (t.projection = new o(
    t.latestValues,
    r["data-framer-portal-id"] ? void 0 : Jv(t.parent),
  )),
    t.projection.setOptions({
      layoutId: a,
      layout: u,
      alwaysMeasureLayout: !!c || (d && eo(d)),
      visualElement: t,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: s,
      layoutScroll: p,
      layoutRoot: m,
    });
}
function Jv(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Jv(t.parent);
}
function rT(t, r, o) {
  return w.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        r && (s ? r.mount(s) : r.unmount()),
        o && (typeof o == "function" ? o(s) : eo(o) && (o.current = s));
    },
    [r],
  );
}
function Na(t) {
  return Pa(t.animate) || Kc.some((r) => wi(t[r]));
}
function ey(t) {
  return !!(Na(t) || t.variants);
}
function oT(t, r) {
  if (Na(t)) {
    const { initial: o, animate: s } = t;
    return {
      initial: o === !1 || wi(o) ? o : void 0,
      animate: wi(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? r : {};
}
function iT(t) {
  const { initial: r, animate: o } = oT(t, w.useContext(Aa));
  return w.useMemo(() => ({ initial: r, animate: o }), [ng(r), ng(o)]);
}
function ng(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const rg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  co = {};
for (const t in rg) co[t] = { isEnabled: (r) => rg[t].some((o) => !!r[o]) };
function sT(t) {
  for (const r in t) co[r] = { ...co[r], ...t[r] };
}
const aT = Symbol.for("motionComponentSymbol");
function lT({
  preloadedFeatures: t,
  createVisualElement: r,
  useRender: o,
  useVisualState: s,
  Component: a,
}) {
  t && sT(t);
  function u(d, p) {
    let m;
    const g = { ...w.useContext(md), ...d, layoutId: uT(d) },
      { isStatic: v } = g,
      y = iT(d),
      C = s(d, v);
    if (!v && gd) {
      cT();
      const P = dT(g);
      (m = P.MeasureLayout),
        (y.visualElement = tT(a, C, g, r, P.ProjectionNode));
    }
    return k.jsxs(Aa.Provider, {
      value: y,
      children: [
        m && y.visualElement
          ? k.jsx(m, { visualElement: y.visualElement, ...g })
          : null,
        o(a, d, rT(C, y.visualElement, p), C, v, y.visualElement),
      ],
    });
  }
  const c = w.forwardRef(u);
  return (c[aT] = a), c;
}
function uT({ layoutId: t }) {
  const r = w.useContext(pd).id;
  return r && t !== void 0 ? r + "-" + t : t;
}
function cT(t, r) {
  w.useContext(Zv).strict;
}
function dT(t) {
  const { drag: r, layout: o } = co;
  if (!r && !o) return {};
  const s = { ...r, ...o };
  return {
    MeasureLayout:
      (r != null && r.isEnabled(t)) || (o != null && o.isEnabled(t))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
const fT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function vd(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(fT.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function ty(t, { style: r, vars: o }, s, a) {
  Object.assign(t.style, r, a && a.getProjectionStyles(s));
  for (const u in o) t.style.setProperty(u, o[u]);
}
const ny = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ry(t, r, o, s) {
  ty(t, r, void 0, s);
  for (const a in r.attrs) t.setAttribute(ny.has(a) ? a : dd(a), r.attrs[a]);
}
function oy(t, { layout: r, layoutId: o }) {
  return (
    kr.has(t) ||
    t.startsWith("origin") ||
    ((r || o !== void 0) && (!!ga[t] || t === "opacity"))
  );
}
function yd(t, r, o) {
  var s;
  const { style: a } = t,
    u = {};
  for (const c in a)
    (lt(a[c]) ||
      (r.style && lt(r.style[c])) ||
      oy(c, t) ||
      ((s = o == null ? void 0 : o.getValue(c)) === null || s === void 0
        ? void 0
        : s.liveStyle) !== void 0) &&
      (u[c] = a[c]);
  return u;
}
function iy(t, r, o) {
  const s = yd(t, r, o);
  for (const a in t)
    if (lt(t[a]) || lt(r[a])) {
      const u =
        bi.indexOf(a) !== -1
          ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
          : a;
      s[u] = t[a];
    }
  return s;
}
function xd(t) {
  const r = w.useRef(null);
  return r.current === null && (r.current = t()), r.current;
}
function pT(
  { scrapeMotionValuesFromProps: t, createRenderState: r, onMount: o },
  s,
  a,
  u,
) {
  const c = { latestValues: hT(s, a, u, t), renderState: r() };
  return o && (c.mount = (d) => o(s, d, c)), c;
}
const sy = (t) => (r, o) => {
  const s = w.useContext(Aa),
    a = w.useContext(ba),
    u = () => pT(t, r, s, a);
  return o ? u() : xd(u);
};
function hT(t, r, o, s) {
  const a = {},
    u = s(t, {});
  for (const y in u) a[y] = sa(u[y]);
  let { initial: c, animate: d } = t;
  const p = Na(t),
    m = ey(t);
  r &&
    m &&
    !p &&
    t.inherit !== !1 &&
    (c === void 0 && (c = r.initial), d === void 0 && (d = r.animate));
  let g = o ? o.initial === !1 : !1;
  g = g || c === !1;
  const v = g ? d : c;
  if (v && typeof v != "boolean" && !Pa(v)) {
    const y = Array.isArray(v) ? v : [v];
    for (let C = 0; C < y.length; C++) {
      const P = Wc(t, y[C]);
      if (P) {
        const { transitionEnd: S, transition: T, ...E } = P;
        for (const b in E) {
          let N = E[b];
          if (Array.isArray(N)) {
            const L = g ? N.length - 1 : 0;
            N = N[L];
          }
          N !== null && (a[b] = N);
        }
        for (const b in S) a[b] = S[b];
      }
    }
  }
  return a;
}
const wd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ay = () => ({ ...wd(), attrs: {} }),
  ly = (t, r) => (r && typeof t == "number" ? r.transform(t) : t),
  mT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  gT = bi.length;
function vT(t, r, o) {
  let s = "",
    a = !0;
  for (let u = 0; u < gT; u++) {
    const c = bi[u],
      d = t[c];
    if (d === void 0) continue;
    let p = !0;
    if (
      (typeof d == "number"
        ? (p = d === (c.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(d) === 0),
      !p || o)
    ) {
      const m = ly(d, ed[c]);
      if (!p) {
        a = !1;
        const g = mT[c] || c;
        s += `${g}(${m}) `;
      }
      o && (r[c] = m);
    }
  }
  return (s = s.trim()), o ? (s = o(r, a ? "" : s)) : a && (s = "none"), s;
}
function Sd(t, r, o) {
  const { style: s, vars: a, transformOrigin: u } = t;
  let c = !1,
    d = !1;
  for (const p in r) {
    const m = r[p];
    if (kr.has(p)) {
      c = !0;
      continue;
    } else if (ev(p)) {
      a[p] = m;
      continue;
    } else {
      const g = ly(m, ed[p]);
      p.startsWith("origin") ? ((d = !0), (u[p] = g)) : (s[p] = g);
    }
  }
  if (
    (r.transform ||
      (c || o
        ? (s.transform = vT(r, t.transform, o))
        : s.transform && (s.transform = "none")),
    d)
  ) {
    const { originX: p = "50%", originY: m = "50%", originZ: g = 0 } = u;
    s.transformOrigin = `${p} ${m} ${g}`;
  }
}
function og(t, r, o) {
  return typeof t == "string" ? t : de.transform(r + o * t);
}
function yT(t, r, o) {
  const s = og(r, t.x, t.width),
    a = og(o, t.y, t.height);
  return `${s} ${a}`;
}
const xT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  wT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ST(t, r, o = 1, s = 0, a = !0) {
  t.pathLength = 1;
  const u = a ? xT : wT;
  t[u.offset] = de.transform(-s);
  const c = de.transform(r),
    d = de.transform(o);
  t[u.array] = `${c} ${d}`;
}
function Cd(
  t,
  {
    attrX: r,
    attrY: o,
    attrScale: s,
    originX: a,
    originY: u,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: p = 0,
    ...m
  },
  g,
  v,
) {
  if ((Sd(t, m, v), g)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: y, style: C, dimensions: P } = t;
  y.transform && (P && (C.transform = y.transform), delete y.transform),
    P &&
      (a !== void 0 || u !== void 0 || C.transform) &&
      (C.transformOrigin = yT(
        P,
        a !== void 0 ? a : 0.5,
        u !== void 0 ? u : 0.5,
      )),
    r !== void 0 && (y.x = r),
    o !== void 0 && (y.y = o),
    s !== void 0 && (y.scale = s),
    c !== void 0 && ST(y, c, d, p, !1);
}
const kd = (t) => typeof t == "string" && t.toLowerCase() === "svg",
  CT = {
    useVisualState: sy({
      scrapeMotionValuesFromProps: iy,
      createRenderState: ay,
      onMount: (t, r, { renderState: o, latestValues: s }) => {
        De.read(() => {
          try {
            o.dimensions =
              typeof r.getBBox == "function"
                ? r.getBBox()
                : r.getBoundingClientRect();
          } catch {
            o.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          De.render(() => {
            Cd(o, s, kd(r.tagName), t.transformTemplate), ry(r, o);
          });
      },
    }),
  },
  kT = {
    useVisualState: sy({
      scrapeMotionValuesFromProps: yd,
      createRenderState: wd,
    }),
  };
function uy(t, r, o) {
  for (const s in r) !lt(r[s]) && !oy(s, o) && (t[s] = r[s]);
}
function TT({ transformTemplate: t }, r) {
  return w.useMemo(() => {
    const o = wd();
    return Sd(o, r, t), Object.assign({}, o.vars, o.style);
  }, [r]);
}
function PT(t, r) {
  const o = t.style || {},
    s = {};
  return uy(s, o, t), Object.assign(s, TT(t, r)), s;
}
function ET(t, r) {
  const o = {},
    s = PT(t, r);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((o.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (o.tabIndex = 0),
    (o.style = s),
    o
  );
}
const RT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function va(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    RT.has(t)
  );
}
let cy = (t) => !va(t);
function bT(t) {
  t && (cy = (r) => (r.startsWith("on") ? !va(r) : t(r)));
}
try {
  bT(require("@emotion/is-prop-valid").default);
} catch {}
function AT(t, r, o) {
  const s = {};
  for (const a in t)
    (a === "values" && typeof t.values == "object") ||
      ((cy(a) ||
        (o === !0 && va(a)) ||
        (!r && !va(a)) ||
        (t.draggable && a.startsWith("onDrag"))) &&
        (s[a] = t[a]));
  return s;
}
function NT(t, r, o, s) {
  const a = w.useMemo(() => {
    const u = ay();
    return (
      Cd(u, r, kd(s), t.transformTemplate),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [r]);
  if (t.style) {
    const u = {};
    uy(u, t.style, t), (a.style = { ...u, ...a.style });
  }
  return a;
}
function MT(t = !1) {
  return (o, s, a, { latestValues: u }, c) => {
    const p = (vd(o) ? NT : ET)(s, u, c, o),
      m = AT(s, typeof o == "string", t),
      g = o !== w.Fragment ? { ...m, ...p, ref: a } : {},
      { children: v } = s,
      y = w.useMemo(() => (lt(v) ? v.get() : v), [v]);
    return w.createElement(o, { ...g, children: y });
  };
}
function jT(t, r) {
  return function (s, { forwardMotionProps: a } = { forwardMotionProps: !1 }) {
    const c = {
      ...(vd(s) ? CT : kT),
      preloadedFeatures: t,
      useRender: MT(a),
      createVisualElement: r,
      Component: s,
    };
    return lT(c);
  };
}
const Pc = { current: null },
  dy = { current: !1 };
function LT() {
  if (((dy.current = !0), !!gd))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        r = () => (Pc.current = t.matches);
      t.addListener(r), r();
    } else Pc.current = !1;
}
function DT(t, r, o) {
  for (const s in r) {
    const a = r[s],
      u = o[s];
    if (lt(a)) t.addValue(s, a);
    else if (lt(u)) t.addValue(s, ki(a, { owner: t }));
    else if (u !== a)
      if (t.hasValue(s)) {
        const c = t.getValue(s);
        c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a);
      } else {
        const c = t.getStaticValue(s);
        t.addValue(s, ki(c !== void 0 ? c : a, { owner: t }));
      }
  }
  for (const s in o) r[s] === void 0 && t.removeValue(s);
  return r;
}
const ig = new WeakMap(),
  IT = [...rv, at, Qn],
  OT = (t) => IT.find(nv(t)),
  sg = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class _T {
  scrapeMotionValuesFromProps(r, o, s) {
    return {};
  }
  constructor(
    {
      parent: r,
      props: o,
      presenceContext: s,
      reducedMotionConfig: a,
      blockInitialAnimation: u,
      visualState: c,
    },
    d = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = qc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = Jt.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), De.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: m } = c;
    (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = o.initial ? { ...p } : {}),
      (this.renderState = m),
      (this.parent = r),
      (this.props = o),
      (this.presenceContext = s),
      (this.depth = r ? r.depth + 1 : 0),
      (this.reducedMotionConfig = a),
      (this.options = d),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = Na(o)),
      (this.isVariantNode = ey(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(r && r.current));
    const { willChange: g, ...v } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this,
    );
    for (const y in v) {
      const C = v[y];
      p[y] !== void 0 && lt(C) && C.set(p[y], !1);
    }
  }
  mount(r) {
    (this.current = r),
      ig.set(r, this),
      this.projection && !this.projection.instance && this.projection.mount(r),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, s) => this.bindToMotionValue(s, o)),
      dy.current || LT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Pc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    ig.delete(this.current),
      this.projection && this.projection.unmount(),
      Xn(this.notifyUpdate),
      Xn(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const o = this.features[r];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(r, o) {
    this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
    const s = kr.has(r),
      a = o.on("change", (d) => {
        (this.latestValues[r] = d),
          this.props.onUpdate && De.preRender(this.notifyUpdate),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      u = o.on("renderRequest", this.scheduleRender);
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, r, o)),
      this.valueSubscriptions.set(r, () => {
        a(), u(), c && c(), o.owner && o.stop();
      });
  }
  sortNodePosition(r) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== r.type
      ? 0
      : this.sortInstanceNodePosition(this.current, r.current);
  }
  updateFeatures() {
    let r = "animation";
    for (r in co) {
      const o = co[r];
      if (!o) continue;
      const { isEnabled: s, Feature: a } = o;
      if (
        (!this.features[r] &&
          a &&
          s(this.props) &&
          (this.features[r] = new a(this)),
        this.features[r])
      ) {
        const u = this.features[r];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ke();
  }
  getStaticValue(r) {
    return this.latestValues[r];
  }
  setStaticValue(r, o) {
    this.latestValues[r] = o;
  }
  update(r, o) {
    (r.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = r),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o);
    for (let s = 0; s < sg.length; s++) {
      const a = sg[s];
      this.propEventSubscriptions[a] &&
        (this.propEventSubscriptions[a](),
        delete this.propEventSubscriptions[a]);
      const u = "on" + a,
        c = r[u];
      c && (this.propEventSubscriptions[a] = this.on(a, c));
    }
    (this.prevMotionValues = DT(
      this,
      this.scrapeMotionValuesFromProps(r, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(r) {
    return this.props.variants ? this.props.variants[r] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(r) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(r),
        () => o.variantChildren.delete(r)
      );
  }
  addValue(r, o) {
    const s = this.values.get(r);
    o !== s &&
      (s && this.removeValue(r),
      this.bindToMotionValue(r, o),
      this.values.set(r, o),
      (this.latestValues[r] = o.get()));
  }
  removeValue(r) {
    this.values.delete(r);
    const o = this.valueSubscriptions.get(r);
    o && (o(), this.valueSubscriptions.delete(r)),
      delete this.latestValues[r],
      this.removeValueFromRenderState(r, this.renderState);
  }
  hasValue(r) {
    return this.values.has(r);
  }
  getValue(r, o) {
    if (this.props.values && this.props.values[r]) return this.props.values[r];
    let s = this.values.get(r);
    return (
      s === void 0 &&
        o !== void 0 &&
        ((s = ki(o === null ? void 0 : o, { owner: this })),
        this.addValue(r, s)),
      s
    );
  }
  readValue(r, o) {
    var s;
    let a =
      this.latestValues[r] !== void 0 || !this.current
        ? this.latestValues[r]
        : (s = this.getBaseTargetFromProps(this.props, r)) !== null &&
            s !== void 0
          ? s
          : this.readValueFromInstance(this.current, r, this.options);
    return (
      a != null &&
        (typeof a == "string" && (Zg(a) || qg(a))
          ? (a = parseFloat(a))
          : !OT(a) && Qn.test(o) && (a = dv(r, o)),
        this.setBaseTarget(r, lt(a) ? a.get() : a)),
      lt(a) ? a.get() : a
    );
  }
  setBaseTarget(r, o) {
    this.baseTarget[r] = o;
  }
  getBaseTarget(r) {
    var o;
    const { initial: s } = this.props;
    let a;
    if (typeof s == "string" || typeof s == "object") {
      const c = Wc(
        this.props,
        s,
        (o = this.presenceContext) === null || o === void 0 ? void 0 : o.custom,
      );
      c && (a = c[r]);
    }
    if (s && a !== void 0) return a;
    const u = this.getBaseTargetFromProps(this.props, r);
    return u !== void 0 && !lt(u)
      ? u
      : this.initialValues[r] !== void 0 && a === void 0
        ? void 0
        : this.baseTarget[r];
  }
  on(r, o) {
    return this.events[r] || (this.events[r] = new cd()), this.events[r].add(o);
  }
  notify(r, ...o) {
    this.events[r] && this.events[r].notify(...o);
  }
}
class fy extends _T {
  constructor() {
    super(...arguments), (this.KeyframeResolver = fv);
  }
  sortInstanceNodePosition(r, o) {
    return r.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, o) {
    return r.style ? r.style[o] : void 0;
  }
  removeValueFromRenderState(r, { vars: o, style: s }) {
    delete o[r], delete s[r];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    lt(r) &&
      (this.childSubscription = r.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
function VT(t) {
  return window.getComputedStyle(t);
}
class FT extends fy {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = ty);
  }
  readValueFromInstance(r, o) {
    if (kr.has(o)) {
      const s = td(o);
      return (s && s.default) || 0;
    } else {
      const s = VT(r),
        a = (ev(o) ? s.getPropertyValue(o) : s[o]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: o }) {
    return Fv(r, o);
  }
  build(r, o, s) {
    Sd(r, o, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, o, s) {
    return yd(r, o, s);
  }
}
class zT extends fy {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ke);
  }
  getBaseTargetFromProps(r, o) {
    return r[o];
  }
  readValueFromInstance(r, o) {
    if (kr.has(o)) {
      const s = td(o);
      return (s && s.default) || 0;
    }
    return (o = ny.has(o) ? o : dd(o)), r.getAttribute(o);
  }
  scrapeMotionValuesFromProps(r, o, s) {
    return iy(r, o, s);
  }
  build(r, o, s) {
    Cd(r, o, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(r, o, s, a) {
    ry(r, o, s, a);
  }
  mount(r) {
    (this.isSVGTag = kd(r.tagName)), super.mount(r);
  }
}
const BT = (t, r) =>
    vd(t) ? new zT(r) : new FT(r, { allowProjection: t !== w.Fragment }),
  UT = jT({ ...TC, ...Jk, ...Uk, ...eT }, BT),
  oo = Cw(UT);
class $T extends w.Component {
  getSnapshotBeforeUpdate(r) {
    const o = this.props.childRef.current;
    if (o && r.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      (s.height = o.offsetHeight || 0),
        (s.width = o.offsetWidth || 0),
        (s.top = o.offsetTop),
        (s.left = o.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function WT({ children: t, isPresent: r }) {
  const o = w.useId(),
    s = w.useRef(null),
    a = w.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: u } = w.useContext(md);
  return (
    w.useInsertionEffect(() => {
      const { width: c, height: d, top: p, left: m } = a.current;
      if (r || !s.current || !c || !d) return;
      s.current.dataset.motionPopId = o;
      const g = document.createElement("style");
      return (
        u && (g.nonce = u),
        document.head.appendChild(g),
        g.sheet &&
          g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${p}px !important;
            left: ${m}px !important;
          }
        `),
        () => {
          document.head.removeChild(g);
        }
      );
    }, [r]),
    k.jsx($T, {
      isPresent: r,
      childRef: s,
      sizeRef: a,
      children: w.cloneElement(t, { ref: s }),
    })
  );
}
const HT = ({
  children: t,
  initial: r,
  isPresent: o,
  onExitComplete: s,
  custom: a,
  presenceAffectsLayout: u,
  mode: c,
}) => {
  const d = xd(KT),
    p = w.useId(),
    m = w.useCallback(
      (v) => {
        d.set(v, !0);
        for (const y of d.values()) if (!y) return;
        s && s();
      },
      [d, s],
    ),
    g = w.useMemo(
      () => ({
        id: p,
        initial: r,
        isPresent: o,
        custom: a,
        onExitComplete: m,
        register: (v) => (d.set(v, !1), () => d.delete(v)),
      }),
      u ? [Math.random(), m] : [o, m],
    );
  return (
    w.useMemo(() => {
      d.forEach((v, y) => d.set(y, !1));
    }, [o]),
    w.useEffect(() => {
      !o && !d.size && s && s();
    }, [o]),
    c === "popLayout" && (t = k.jsx(WT, { isPresent: o, children: t })),
    k.jsx(ba.Provider, { value: g, children: t })
  );
};
function KT() {
  return new Map();
}
const Qs = (t) => t.key || "";
function ag(t) {
  const r = [];
  return (
    w.Children.forEach(t, (o) => {
      w.isValidElement(o) && r.push(o);
    }),
    r
  );
}
const py = ({
  children: t,
  exitBeforeEnter: r,
  custom: o,
  initial: s = !0,
  onExitComplete: a,
  presenceAffectsLayout: u = !0,
  mode: c = "sync",
}) => {
  const d = w.useMemo(() => ag(t), [t]),
    p = d.map(Qs),
    m = w.useRef(!0),
    g = w.useRef(d),
    v = xd(() => new Map()),
    [y, C] = w.useState(d),
    [P, S] = w.useState(d);
  qv(() => {
    (m.current = !1), (g.current = d);
    for (let b = 0; b < P.length; b++) {
      const N = Qs(P[b]);
      p.includes(N) ? v.delete(N) : v.get(N) !== !0 && v.set(N, !1);
    }
  }, [P, p.length, p.join("-")]);
  const T = [];
  if (d !== y) {
    let b = [...d];
    for (let N = 0; N < P.length; N++) {
      const L = P[N],
        I = Qs(L);
      p.includes(I) || (b.splice(N, 0, L), T.push(L));
    }
    c === "wait" && T.length && (b = T), S(ag(b)), C(d);
    return;
  }
  const { forceRender: E } = w.useContext(pd);
  return k.jsx(k.Fragment, {
    children: P.map((b) => {
      const N = Qs(b),
        L = d === P || p.includes(N),
        I = () => {
          if (v.has(N)) v.set(N, !0);
          else return;
          let B = !0;
          v.forEach((z) => {
            z || (B = !1);
          }),
            B && (E == null || E(), S(g.current), a && a());
        };
      return k.jsx(
        HT,
        {
          isPresent: L,
          initial: !m.current || s ? void 0 : !1,
          custom: L ? void 0 : o,
          presenceAffectsLayout: u,
          mode: c,
          onExitComplete: L ? void 0 : I,
          children: b,
        },
        N,
      );
    }),
  });
};
function hy(t) {
  var r,
    o,
    s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var a = t.length;
      for (r = 0; r < a; r++)
        t[r] && (o = hy(t[r])) && (s && (s += " "), (s += o));
    } else for (o in t) t[o] && (s && (s += " "), (s += o));
  return s;
}
function my() {
  for (var t, r, o = 0, s = "", a = arguments.length; o < a; o++)
    (t = arguments[o]) && (r = hy(t)) && (s && (s += " "), (s += r));
  return s;
}
const Td = "-",
  GT = (t) => {
    const r = XT(t),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: s } = t;
    return {
      getClassGroupId: (c) => {
        const d = c.split(Td);
        return d[0] === "" && d.length !== 1 && d.shift(), gy(d, r) || YT(c);
      },
      getConflictingClassGroupIds: (c, d) => {
        const p = o[c] || [];
        return d && s[c] ? [...p, ...s[c]] : p;
      },
    };
  },
  gy = (t, r) => {
    var c;
    if (t.length === 0) return r.classGroupId;
    const o = t[0],
      s = r.nextPart.get(o),
      a = s ? gy(t.slice(1), s) : void 0;
    if (a) return a;
    if (r.validators.length === 0) return;
    const u = t.join(Td);
    return (c = r.validators.find(({ validator: d }) => d(u))) == null
      ? void 0
      : c.classGroupId;
  },
  lg = /^\[(.+)\]$/,
  YT = (t) => {
    if (lg.test(t)) {
      const r = lg.exec(t)[1],
        o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  XT = (t) => {
    const { theme: r, prefix: o } = t,
      s = { nextPart: new Map(), validators: [] };
    return (
      qT(Object.entries(t.classGroups), o).forEach(([u, c]) => {
        Ec(c, s, u, r);
      }),
      s
    );
  },
  Ec = (t, r, o, s) => {
    t.forEach((a) => {
      if (typeof a == "string") {
        const u = a === "" ? r : ug(r, a);
        u.classGroupId = o;
        return;
      }
      if (typeof a == "function") {
        if (QT(a)) {
          Ec(a(s), r, o, s);
          return;
        }
        r.validators.push({ validator: a, classGroupId: o });
        return;
      }
      Object.entries(a).forEach(([u, c]) => {
        Ec(c, ug(r, u), o, s);
      });
    });
  },
  ug = (t, r) => {
    let o = t;
    return (
      r.split(Td).forEach((s) => {
        o.nextPart.has(s) ||
          o.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(s));
      }),
      o
    );
  },
  QT = (t) => t.isThemeGetter,
  qT = (t, r) =>
    r
      ? t.map(([o, s]) => {
          const a = s.map((u) =>
            typeof u == "string"
              ? r + u
              : typeof u == "object"
                ? Object.fromEntries(
                    Object.entries(u).map(([c, d]) => [r + c, d]),
                  )
                : u,
          );
          return [o, a];
        })
      : t,
  ZT = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      o = new Map(),
      s = new Map();
    const a = (u, c) => {
      o.set(u, c), r++, r > t && ((r = 0), (s = o), (o = new Map()));
    };
    return {
      get(u) {
        let c = o.get(u);
        if (c !== void 0) return c;
        if ((c = s.get(u)) !== void 0) return a(u, c), c;
      },
      set(u, c) {
        o.has(u) ? o.set(u, c) : a(u, c);
      },
    };
  },
  vy = "!",
  JT = (t) => {
    const { separator: r, experimentalParseClassName: o } = t,
      s = r.length === 1,
      a = r[0],
      u = r.length,
      c = (d) => {
        const p = [];
        let m = 0,
          g = 0,
          v;
        for (let T = 0; T < d.length; T++) {
          let E = d[T];
          if (m === 0) {
            if (E === a && (s || d.slice(T, T + u) === r)) {
              p.push(d.slice(g, T)), (g = T + u);
              continue;
            }
            if (E === "/") {
              v = T;
              continue;
            }
          }
          E === "[" ? m++ : E === "]" && m--;
        }
        const y = p.length === 0 ? d : d.substring(g),
          C = y.startsWith(vy),
          P = C ? y.substring(1) : y,
          S = v && v > g ? v - g : void 0;
        return {
          modifiers: p,
          hasImportantModifier: C,
          baseClassName: P,
          maybePostfixModifierPosition: S,
        };
      };
    return o ? (d) => o({ className: d, parseClassName: c }) : c;
  },
  eP = (t) => {
    if (t.length <= 1) return t;
    const r = [];
    let o = [];
    return (
      t.forEach((s) => {
        s[0] === "[" ? (r.push(...o.sort(), s), (o = [])) : o.push(s);
      }),
      r.push(...o.sort()),
      r
    );
  },
  tP = (t) => ({ cache: ZT(t.cacheSize), parseClassName: JT(t), ...GT(t) }),
  nP = /\s+/,
  rP = (t, r) => {
    const {
        parseClassName: o,
        getClassGroupId: s,
        getConflictingClassGroupIds: a,
      } = r,
      u = [],
      c = t.trim().split(nP);
    let d = "";
    for (let p = c.length - 1; p >= 0; p -= 1) {
      const m = c[p],
        {
          modifiers: g,
          hasImportantModifier: v,
          baseClassName: y,
          maybePostfixModifierPosition: C,
        } = o(m);
      let P = !!C,
        S = s(P ? y.substring(0, C) : y);
      if (!S) {
        if (!P) {
          d = m + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((S = s(y)), !S)) {
          d = m + (d.length > 0 ? " " + d : d);
          continue;
        }
        P = !1;
      }
      const T = eP(g).join(":"),
        E = v ? T + vy : T,
        b = E + S;
      if (u.includes(b)) continue;
      u.push(b);
      const N = a(S, P);
      for (let L = 0; L < N.length; ++L) {
        const I = N[L];
        u.push(E + I);
      }
      d = m + (d.length > 0 ? " " + d : d);
    }
    return d;
  };
function oP() {
  let t = 0,
    r,
    o,
    s = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (o = yy(r)) && (s && (s += " "), (s += o));
  return s;
}
const yy = (t) => {
  if (typeof t == "string") return t;
  let r,
    o = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (r = yy(t[s])) && (o && (o += " "), (o += r));
  return o;
};
function iP(t, ...r) {
  let o,
    s,
    a,
    u = c;
  function c(p) {
    const m = r.reduce((g, v) => v(g), t());
    return (o = tP(m)), (s = o.cache.get), (a = o.cache.set), (u = d), d(p);
  }
  function d(p) {
    const m = s(p);
    if (m) return m;
    const g = rP(p, o);
    return a(p, g), g;
  }
  return function () {
    return u(oP.apply(null, arguments));
  };
}
const Le = (t) => {
    const r = (o) => o[t] || [];
    return (r.isThemeGetter = !0), r;
  },
  xy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  sP = /^\d+\/\d+$/,
  aP = new Set(["px", "full", "screen"]),
  lP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  uP =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  cP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  dP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  fP =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  pn = (t) => io(t) || aP.has(t) || sP.test(t),
  $n = (t) => go(t, "length", wP),
  io = (t) => !!t && !Number.isNaN(Number(t)),
  Zu = (t) => go(t, "number", io),
  li = (t) => !!t && Number.isInteger(Number(t)),
  pP = (t) => t.endsWith("%") && io(t.slice(0, -1)),
  Se = (t) => xy.test(t),
  Wn = (t) => lP.test(t),
  hP = new Set(["length", "size", "percentage"]),
  mP = (t) => go(t, hP, wy),
  gP = (t) => go(t, "position", wy),
  vP = new Set(["image", "url"]),
  yP = (t) => go(t, vP, CP),
  xP = (t) => go(t, "", SP),
  ui = () => !0,
  go = (t, r, o) => {
    const s = xy.exec(t);
    return s
      ? s[1]
        ? typeof r == "string"
          ? s[1] === r
          : r.has(s[1])
        : o(s[2])
      : !1;
  },
  wP = (t) => uP.test(t) && !cP.test(t),
  wy = () => !1,
  SP = (t) => dP.test(t),
  CP = (t) => fP.test(t),
  kP = () => {
    const t = Le("colors"),
      r = Le("spacing"),
      o = Le("blur"),
      s = Le("brightness"),
      a = Le("borderColor"),
      u = Le("borderRadius"),
      c = Le("borderSpacing"),
      d = Le("borderWidth"),
      p = Le("contrast"),
      m = Le("grayscale"),
      g = Le("hueRotate"),
      v = Le("invert"),
      y = Le("gap"),
      C = Le("gradientColorStops"),
      P = Le("gradientColorStopPositions"),
      S = Le("inset"),
      T = Le("margin"),
      E = Le("opacity"),
      b = Le("padding"),
      N = Le("saturate"),
      L = Le("scale"),
      I = Le("sepia"),
      B = Le("skew"),
      z = Le("space"),
      W = Le("translate"),
      te = () => ["auto", "contain", "none"],
      oe = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ge = () => ["auto", Se, r],
      Z = () => [Se, r],
      fe = () => ["", pn, $n],
      le = () => ["auto", io, Se],
      Ce = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ie = () => ["solid", "dashed", "dotted", "double", "none"],
      X = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      V = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      Y = () => ["", "0", Se],
      K = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      j = () => [io, Se];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ui],
        spacing: [pn, $n],
        blur: ["none", "", Wn, Se],
        brightness: j(),
        borderColor: [t],
        borderRadius: ["none", "", "full", Wn, Se],
        borderSpacing: Z(),
        borderWidth: fe(),
        contrast: j(),
        grayscale: Y(),
        hueRotate: j(),
        invert: Y(),
        gap: Z(),
        gradientColorStops: [t],
        gradientColorStopPositions: [pP, $n],
        inset: ge(),
        margin: ge(),
        opacity: j(),
        padding: Z(),
        saturate: j(),
        scale: j(),
        sepia: Y(),
        skew: j(),
        space: Z(),
        translate: Z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Se] }],
        container: ["container"],
        columns: [{ columns: [Wn] }],
        "break-after": [{ "break-after": K() }],
        "break-before": [{ "break-before": K() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Ce(), Se] }],
        overflow: [{ overflow: oe() }],
        "overflow-x": [{ "overflow-x": oe() }],
        "overflow-y": [{ "overflow-y": oe() }],
        overscroll: [{ overscroll: te() }],
        "overscroll-x": [{ "overscroll-x": te() }],
        "overscroll-y": [{ "overscroll-y": te() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [S] }],
        "inset-x": [{ "inset-x": [S] }],
        "inset-y": [{ "inset-y": [S] }],
        start: [{ start: [S] }],
        end: [{ end: [S] }],
        top: [{ top: [S] }],
        right: [{ right: [S] }],
        bottom: [{ bottom: [S] }],
        left: [{ left: [S] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", li, Se] }],
        basis: [{ basis: ge() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Se] }],
        grow: [{ grow: Y() }],
        shrink: [{ shrink: Y() }],
        order: [{ order: ["first", "last", "none", li, Se] }],
        "grid-cols": [{ "grid-cols": [ui] }],
        "col-start-end": [{ col: ["auto", { span: ["full", li, Se] }, Se] }],
        "col-start": [{ "col-start": le() }],
        "col-end": [{ "col-end": le() }],
        "grid-rows": [{ "grid-rows": [ui] }],
        "row-start-end": [{ row: ["auto", { span: [li, Se] }, Se] }],
        "row-start": [{ "row-start": le() }],
        "row-end": [{ "row-end": le() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Se] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Se] }],
        gap: [{ gap: [y] }],
        "gap-x": [{ "gap-x": [y] }],
        "gap-y": [{ "gap-y": [y] }],
        "justify-content": [{ justify: ["normal", ...V()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...V(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...V(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [T] }],
        mx: [{ mx: [T] }],
        my: [{ my: [T] }],
        ms: [{ ms: [T] }],
        me: [{ me: [T] }],
        mt: [{ mt: [T] }],
        mr: [{ mr: [T] }],
        mb: [{ mb: [T] }],
        ml: [{ ml: [T] }],
        "space-x": [{ "space-x": [z] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [z] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Se, r] }],
        "min-w": [{ "min-w": [Se, r, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Se,
              r,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Wn] },
              Wn,
            ],
          },
        ],
        h: [{ h: [Se, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Se, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Se, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Se, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Wn, $n] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Zu,
            ],
          },
        ],
        "font-family": [{ font: [ui] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Se,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", io, Zu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              pn,
              Se,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Se] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [E] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [E] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", pn, $n] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", pn, Se] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [E] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Ce(), gP] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", mP] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              yP,
            ],
          },
        ],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [P] }],
        "gradient-via-pos": [{ via: [P] }],
        "gradient-to-pos": [{ to: [P] }],
        "gradient-from": [{ from: [C] }],
        "gradient-via": [{ via: [C] }],
        "gradient-to": [{ to: [C] }],
        rounded: [{ rounded: [u] }],
        "rounded-s": [{ "rounded-s": [u] }],
        "rounded-e": [{ "rounded-e": [u] }],
        "rounded-t": [{ "rounded-t": [u] }],
        "rounded-r": [{ "rounded-r": [u] }],
        "rounded-b": [{ "rounded-b": [u] }],
        "rounded-l": [{ "rounded-l": [u] }],
        "rounded-ss": [{ "rounded-ss": [u] }],
        "rounded-se": [{ "rounded-se": [u] }],
        "rounded-ee": [{ "rounded-ee": [u] }],
        "rounded-es": [{ "rounded-es": [u] }],
        "rounded-tl": [{ "rounded-tl": [u] }],
        "rounded-tr": [{ "rounded-tr": [u] }],
        "rounded-br": [{ "rounded-br": [u] }],
        "rounded-bl": [{ "rounded-bl": [u] }],
        "border-w": [{ border: [d] }],
        "border-w-x": [{ "border-x": [d] }],
        "border-w-y": [{ "border-y": [d] }],
        "border-w-s": [{ "border-s": [d] }],
        "border-w-e": [{ "border-e": [d] }],
        "border-w-t": [{ "border-t": [d] }],
        "border-w-r": [{ "border-r": [d] }],
        "border-w-b": [{ "border-b": [d] }],
        "border-w-l": [{ "border-l": [d] }],
        "border-opacity": [{ "border-opacity": [E] }],
        "border-style": [{ border: [...ie(), "hidden"] }],
        "divide-x": [{ "divide-x": [d] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [d] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [E] }],
        "divide-style": [{ divide: ie() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-s": [{ "border-s": [a] }],
        "border-color-e": [{ "border-e": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...ie()] }],
        "outline-offset": [{ "outline-offset": [pn, Se] }],
        "outline-w": [{ outline: [pn, $n] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: fe() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [E] }],
        "ring-offset-w": [{ "ring-offset": [pn, $n] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", Wn, xP] }],
        "shadow-color": [{ shadow: [ui] }],
        opacity: [{ opacity: [E] }],
        "mix-blend": [{ "mix-blend": [...X(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": X() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [o] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [p] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Wn, Se] }],
        grayscale: [{ grayscale: [m] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [v] }],
        saturate: [{ saturate: [N] }],
        sepia: [{ sepia: [I] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [o] }],
        "backdrop-brightness": [{ "backdrop-brightness": [s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [p] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [m] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [v] }],
        "backdrop-opacity": [{ "backdrop-opacity": [E] }],
        "backdrop-saturate": [{ "backdrop-saturate": [N] }],
        "backdrop-sepia": [{ "backdrop-sepia": [I] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [c] }],
        "border-spacing-x": [{ "border-spacing-x": [c] }],
        "border-spacing-y": [{ "border-spacing-y": [c] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Se,
            ],
          },
        ],
        duration: [{ duration: j() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Se] }],
        delay: [{ delay: j() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Se] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [L] }],
        "scale-x": [{ "scale-x": [L] }],
        "scale-y": [{ "scale-y": [L] }],
        rotate: [{ rotate: [li, Se] }],
        "translate-x": [{ "translate-x": [W] }],
        "translate-y": [{ "translate-y": [W] }],
        "skew-x": [{ "skew-x": [B] }],
        "skew-y": [{ "skew-y": [B] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Se,
            ],
          },
        ],
        accent: [{ accent: ["auto", t] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Se,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Z() }],
        "scroll-mx": [{ "scroll-mx": Z() }],
        "scroll-my": [{ "scroll-my": Z() }],
        "scroll-ms": [{ "scroll-ms": Z() }],
        "scroll-me": [{ "scroll-me": Z() }],
        "scroll-mt": [{ "scroll-mt": Z() }],
        "scroll-mr": [{ "scroll-mr": Z() }],
        "scroll-mb": [{ "scroll-mb": Z() }],
        "scroll-ml": [{ "scroll-ml": Z() }],
        "scroll-p": [{ "scroll-p": Z() }],
        "scroll-px": [{ "scroll-px": Z() }],
        "scroll-py": [{ "scroll-py": Z() }],
        "scroll-ps": [{ "scroll-ps": Z() }],
        "scroll-pe": [{ "scroll-pe": Z() }],
        "scroll-pt": [{ "scroll-pt": Z() }],
        "scroll-pr": [{ "scroll-pr": Z() }],
        "scroll-pb": [{ "scroll-pb": Z() }],
        "scroll-pl": [{ "scroll-pl": Z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Se] },
        ],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [pn, $n, Zu] }],
        stroke: [{ stroke: [t, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  TP = iP(kP);
function Ue(...t) {
  return TP(my(t));
}
function PP({
  text: t,
  duration: r = 0.5,
  delayMultiple: o = 0.04,
  framerProps: s = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className: a,
}) {
  return k.jsx("div", {
    className: "flex justify-center space-x-0 md:space-x-1",
    children: k.jsx(py, {
      children: t
        .split("")
        .map((u, c) =>
          k.jsx(
            oo.h1,
            {
              initial: "hidden",
              animate: "visible",
              exit: "hidden",
              variants: s,
              transition: { duration: r, delay: c * o },
              className: Ue("drop-shadow-sm text-xs md:text-base", a),
              children: u === " " ? k.jsx("span", { children: " " }) : u,
            },
            c,
          ),
        ),
    }),
  });
}
function EP() {
  return k.jsx("div", {
    className:
      "pt-10 md:pt-14 flex align-middle flex-col items-center px-4 md:px-0 ",
    children: k.jsxs("div", {
      className:
        "text-center space-y-4 md:space-y-5 max-w-sm md:max-w-2xl mx-auto shadow-2xl backdrop-blur-sm bg-gradient-to-r from-black/10 via-black/20 to-black/10 p-2 md:p-4 rounded-2xl",
      children: [
        k.jsx(oo.h1, {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          className:
            "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-blue-50 dark:text-white border-black dark:border-white tracking-tight",
          children: "MainosMestari",
        }),
        k.jsx(PP, {
          duration: 0.3,
          delayMultiple: 0.02,
          className:
            "font-display text-sm md:text-lg font-normal text-blue-50 dark:text-gray-300 -tracking-wider md:-tracking-widest",
          text: "Luo vaikuttavia mainoskuvia ja tekstejä hetkessä",
        }),
      ],
    }),
  });
}
const RP = ({ apiUrl: t }) => {
    const [r, o] = w.useState(""),
      [s, a] = w.useState(!1),
      [u, c] = w.useState(!1);
    return {
      adText: r,
      setAdText: o,
      adTextLoading: s,
      isCopied: u,
      generateAdText: async (m, g) => {
        a(!0);
        try {
          const v = await fetch(`${t}/api/ads/generateFinAdText`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: m, options: g }),
          });
          if (!v.ok) throw new Error(`HTTP error! status: ${v.status}`);
          const y = await v.json();
          o(y.generatedAdText);
        } catch (v) {
          throw (console.error("Virhe mainostekstin generoinnissa:", v), v);
        } finally {
          a(!1);
        }
      },
      handleCopy: () => {
        navigator.clipboard
          .writeText(r)
          .then(() => {
            c(!0), setTimeout(() => c(!1), 2e3);
          })
          .catch((m) => {
            console.error("Kopiointi epäonnistui:", m);
          });
      },
    };
  },
  Rc = {
    UPLOAD: "Lähetetään kuvaa...",
    GENERATION: "Generoidaan kuvaa...",
    AD_TEXT: "Generoidaan mainostekstiä...",
  },
  bP = ({ apiUrl: t }) => {
    const [r, o] = w.useState(!1),
      [s, a] = w.useState(""),
      [u, c] = w.useState(""),
      [d, p] = w.useState("");
    return {
      loading: r,
      imageUrl: s,
      loadingStatus: u,
      setLoadingStatus: c,
      setLoading: o,
      imageDescription: d,
      handleSubmit: async (y, C, P, S) => {
        y.preventDefault(), a(""), o(!0), c(Rc.UPLOAD);
        const T = new FormData();
        T.append("img", C),
          T.append("prompt", P),
          T.append("creativity", S.toString());
        try {
          const E = await fetch(`${t}/api/ads/image`, {
            method: "POST",
            body: T,
          });
          if (!E.ok) {
            const B = await E.json();
            throw new Error(B.details || B.error || "Unknown error occurred");
          }
          const b = await E.json(),
            N = b.imageId,
            L = b.description;
          if ((p(L), !b.imageId))
            throw new Error("No image ID received from server");
          let I = !0;
          for (c(Rc.GENERATION); I; ) {
            const B = new FormData();
            B.append("imageId", N);
            const z = await fetch(`${t}/api/ads/getimage`, {
              method: "POST",
              body: B,
            });
            if (!z.ok) throw new Error(`HTTP error! status: ${z.status}`);
            const W = await z.json();
            if (!W.image || W.image === 202) {
              await new Promise((te) => setTimeout(te, 5e3));
              continue;
            }
            if (W.image) {
              const te = `data:image/png;base64,${W.image}`;
              return (
                a(te), (I = !1), { success: !0, newDescription: L, imageId: N }
              );
            } else throw new Error("Kuvan hakeminen epäonnistui");
          }
          throw new Error("Kuvan hakeminen epäonnistui");
        } catch (E) {
          throw (console.error("Virhe lähetyksessä:", E), E);
        } finally {
          c(""), o(!1);
        }
      },
      testImageDownload: async (y) => {
        try {
          a(""),
            o(!0),
            c("Lähetetään kuvaa..."),
            await new Promise((E) => setTimeout(E, 1500));
          const C = new FileReader(),
            P = new Promise((E, b) => {
              (C.onload = () => E(C.result)), (C.onerror = b);
            });
          C.readAsDataURL(y);
          const S = await P;
          c("Generoidaan kuvaa..."),
            await new Promise((E) => setTimeout(E, 2e3));
          const T =
            "This image shows a modern piece of furniture. It appears to be a sleek and contemporary design with clean lines and a minimalist aesthetic. The furniture has a smooth surface finish and appears to be well-crafted with attention to detail. The overall style would complement a modern living space or office environment.";
          return a(S), p(T), T;
        } catch (C) {
          throw (console.error("Error in test image:", C), C);
        } finally {
          o(!1), c("");
        }
      },
      downloadImage: async (y, C) => {
        try {
          if (!s) {
            alert("No image to download");
            return;
          }
          if (y === "original") {
            const E = document.createElement("a");
            (E.href = s), (E.download = "original_image.png"), E.click();
            return;
          }
          if (!C) {
            alert("Valitse kuva formaatti enne latausta.");
            return;
          }
          const P = await fetch(`${t}/api/image/scale`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageData: s, platform: y, format: C }),
          });
          if (!P.ok) throw new Error("Failed to scale image");
          const S = await P.json(),
            T = document.createElement("a");
          (T.href = S.scaledImage), (T.download = `${y}_${C}.png`), T.click();
        } catch (P) {
          throw (console.error("Error downloading image:", P), P);
        }
      },
      setImageUrl: a,
    };
  },
  cg = (t) => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(t.type))
      return "Vain JPEG, PNG ja WEBP kuvat ovat tuettuja.";
    const o = 4 * 1024 * 1024;
    return t.size > o ? "Kuvan maksimikoko on 4MB" : null;
  },
  AP = () => {
    const [t, r] = w.useState([]),
      [o, s] = w.useState(0),
      a = w.useRef(null);
    return {
      images: t,
      inputKey: o,
      setImages: r,
      fileInputRef: a,
      handleFileChange: (m) => {
        var y, C;
        const g = (y = m.target.files) == null ? void 0 : y[0];
        if (!g) return;
        const v = cg(g);
        if (v) {
          alert(v);
          return;
        }
        try {
          (C = t[0]) != null && C.preview && URL.revokeObjectURL(t[0].preview);
          const P = { file: g, preview: URL.createObjectURL(g) };
          r([P]);
        } catch (P) {
          console.error("Virhe kuvan käsittelyssä:", P),
            alert("Kuvan lataaminen epäonnistui");
        }
      },
      handleRemoveImage: () => {
        var m;
        (m = t[0]) != null && m.preview && URL.revokeObjectURL(t[0].preview),
          r([]),
          s((g) => g + 1);
      },
      handleDrop: (m) => {
        var C;
        m.preventDefault();
        const g = m.dataTransfer.files[0],
          v = cg(g);
        if (v) {
          alert(v);
          return;
        }
        (C = t[0]) != null && C.preview && URL.revokeObjectURL(t[0].preview);
        const y = { file: g, preview: URL.createObjectURL(g) };
        r([y]);
      },
      handleDragOver: (m) => {
        m.preventDefault();
      },
    };
  },
  Sy = ({ apiUrl: t }) => {
    const [r, o] = w.useState([]),
      [s, a] = w.useState(!1),
      u = w.useCallback((g) => {
        const y = Date.now(),
          C = g.filter((P) => y - P.timestamp < 864e5);
        return (
          C.length !== g.length &&
            (console.log("Removed expired images"),
            localStorage.setItem("recentImages", JSON.stringify(C))),
          C
        );
      }, []),
      c = w.useCallback(
        async (g) => {
          const v = new FormData();
          v.append("imageId", g);
          const y = await fetch(`${t}/api/ads/getimage`, {
            method: "POST",
            body: v,
          });
          if (!y.ok) throw new Error(`HTTP error! status: ${y.status}`);
          const C = await y.json();
          return C.image && C.image !== 202
            ? `data:image/png;base64,${C.image}`
            : null;
        },
        [t],
      ),
      d = w.useCallback(async () => {
        a(!0);
        try {
          const g = localStorage.getItem("recentImages"),
            v = g ? JSON.parse(g) : [],
            y = u(v),
            P = (
              await Promise.all(
                y.map(async (S) => {
                  try {
                    const T = await c(S.id);
                    return { ...S, imageUrl: T };
                  } catch (T) {
                    return (
                      console.error(`Failed to fetch image ${S.id}:`, T), null
                    );
                  }
                }),
              )
            ).filter((S) => S !== null);
          if ((o(P), P.length !== y.length)) {
            const S = P.map(({ id: T, timestamp: E }) => ({
              id: T,
              timestamp: E,
            }));
            localStorage.setItem("recentImages", JSON.stringify(S));
          }
        } catch (g) {
          console.error("Error loading recent images:", g);
        } finally {
          a(!1);
        }
      }, [c, u]),
      p = w.useCallback(
        (g) => {
          const v = localStorage.getItem("recentImages"),
            y = v ? JSON.parse(v) : [],
            C = u(y),
            P = [{ id: g, timestamp: Date.now() }, ...C.slice(0, 2)];
          localStorage.setItem("recentImages", JSON.stringify(P));
          const S = P.map((T) => ({ ...T, imageUrl: null }));
          o(S);
        },
        [u],
      ),
      m = w.useCallback((g, v = "image.png") => {
        const y = document.createElement("a");
        (y.href = g),
          (y.download = v),
          document.body.appendChild(y),
          y.click(),
          document.body.removeChild(y);
      }, []);
    return (
      w.useEffect(() => {
        const g = localStorage.getItem("recentImages");
        if (g) {
          const v = JSON.parse(g),
            y = u(v);
          o(y.map((C) => ({ ...C, imageUrl: null }))), y.length > 0 && d();
        }
      }, [d, u]),
      {
        recentImages: r,
        loading: s,
        addRecentImage: p,
        loadRecentImages: d,
        downloadImage: m,
      }
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NP = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Cy = (...t) => t.filter((r, o, s) => !!r && s.indexOf(r) === o).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var MP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jP = w.forwardRef(
  (
    {
      color: t = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: u,
      iconNode: c,
      ...d
    },
    p,
  ) =>
    w.createElement(
      "svg",
      {
        ref: p,
        ...MP,
        width: r,
        height: r,
        stroke: t,
        strokeWidth: s ? (Number(o) * 24) / Number(r) : o,
        className: Cy("lucide", a),
        ...d,
      },
      [
        ...c.map(([m, g]) => w.createElement(m, g)),
        ...(Array.isArray(u) ? u : [u]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fe = (t, r) => {
  const o = w.forwardRef(({ className: s, ...a }, u) =>
    w.createElement(jP, {
      ref: u,
      iconNode: r,
      className: Cy(`lucide-${NP(t)}`, s),
      ...a,
    }),
  );
  return (o.displayName = `${t}`), o;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LP = Fe("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ky = Fe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ty = Fe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DP = Fe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IP = Fe("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OP = Fe("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _P = Fe("Hammer", [
  ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" }],
  ["path", { d: "m18 15 4-4", key: "16gjal" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
      key: "b7pghm",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VP = Fe("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ya = Fe("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Py = Fe("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FP = Fe("PanelsTopLeft", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zP = Fe("RectangleHorizontal", [
  [
    "rect",
    { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BP = Fe("RectangleVertical", [
  [
    "rect",
    { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UP = Fe("Recycle", [
  [
    "path",
    {
      d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
      key: "x6z5xu",
    },
  ],
  [
    "path",
    {
      d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
      key: "1x4zh5",
    },
  ],
  ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
  ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
  [
    "path",
    {
      d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
      key: "9tzpgr",
    },
  ],
  ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $P = Fe("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WP = Fe("Repeat", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HP = Fe("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KP = Fe("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GP = Fe("SquarePlay", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YP = Fe("Square", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XP = Fe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QP = Fe("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qP = Fe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function dg(t, r) {
  if (typeof t == "function") return t(r);
  t != null && (t.current = r);
}
function Ey(...t) {
  return (r) => {
    let o = !1;
    const s = t.map((a) => {
      const u = dg(a, r);
      return !o && typeof u == "function" && (o = !0), u;
    });
    if (o)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const u = s[a];
          typeof u == "function" ? u() : dg(t[a], null);
        }
      };
  };
}
function $e(...t) {
  return w.useCallback(Ey(...t), t);
}
function vo(t, r = []) {
  let o = [];
  function s(u, c) {
    const d = w.createContext(c),
      p = o.length;
    o = [...o, c];
    const m = (v) => {
      var E;
      const { scope: y, children: C, ...P } = v,
        S = ((E = y == null ? void 0 : y[t]) == null ? void 0 : E[p]) || d,
        T = w.useMemo(() => P, Object.values(P));
      return k.jsx(S.Provider, { value: T, children: C });
    };
    m.displayName = u + "Provider";
    function g(v, y) {
      var S;
      const C = ((S = y == null ? void 0 : y[t]) == null ? void 0 : S[p]) || d,
        P = w.useContext(C);
      if (P) return P;
      if (c !== void 0) return c;
      throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return [m, g];
  }
  const a = () => {
    const u = o.map((c) => w.createContext(c));
    return function (d) {
      const p = (d == null ? void 0 : d[t]) || u;
      return w.useMemo(() => ({ [`__scope${t}`]: { ...d, [t]: p } }), [d, p]);
    };
  };
  return (a.scopeName = t), [s, ZP(a, ...r)];
}
function ZP(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const o = () => {
    const s = t.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (u) {
      const c = s.reduce((d, { useScope: p, scopeName: m }) => {
        const v = p(u)[`__scope${m}`];
        return { ...d, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${r.scopeName}`]: c }), [c]);
    };
  };
  return (o.scopeName = r.scopeName), o;
}
function be(t, r, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (a) {
    if ((t == null || t(a), o === !1 || !a.defaultPrevented))
      return r == null ? void 0 : r(a);
  };
}
function yn(t) {
  const r = w.useRef(t);
  return (
    w.useEffect(() => {
      r.current = t;
    }),
    w.useMemo(
      () =>
        (...o) => {
          var s;
          return (s = r.current) == null ? void 0 : s.call(r, ...o);
        },
      [],
    )
  );
}
function Pi({ prop: t, defaultProp: r, onChange: o = () => {} }) {
  const [s, a] = JP({ defaultProp: r, onChange: o }),
    u = t !== void 0,
    c = u ? t : s,
    d = yn(o),
    p = w.useCallback(
      (m) => {
        if (u) {
          const v = typeof m == "function" ? m(t) : m;
          v !== t && d(v);
        } else a(m);
      },
      [u, t, a, d],
    );
  return [c, p];
}
function JP({ defaultProp: t, onChange: r }) {
  const o = w.useState(t),
    [s] = o,
    a = w.useRef(s),
    u = yn(r);
  return (
    w.useEffect(() => {
      a.current !== s && (u(s), (a.current = s));
    }, [s, a, u]),
    o
  );
}
function Pd(t) {
  const r = w.useRef({ value: t, previous: t });
  return w.useMemo(
    () => (
      r.current.value !== t &&
        ((r.current.previous = r.current.value), (r.current.value = t)),
      r.current.previous
    ),
    [t],
  );
}
var dt =
  globalThis != null && globalThis.document ? w.useLayoutEffect : () => {};
function Ed(t) {
  const [r, o] = w.useState(void 0);
  return (
    dt(() => {
      if (t) {
        o({ width: t.offsetWidth, height: t.offsetHeight });
        const s = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const u = a[0];
          let c, d;
          if ("borderBoxSize" in u) {
            const p = u.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            (c = m.inlineSize), (d = m.blockSize);
          } else (c = t.offsetWidth), (d = t.offsetHeight);
          o({ width: c, height: d });
        });
        return s.observe(t, { box: "border-box" }), () => s.unobserve(t);
      } else o(void 0);
    }, [t]),
    r
  );
}
function eE(t, r) {
  return w.useReducer((o, s) => r[o][s] ?? o, t);
}
var Ma = (t) => {
  const { present: r, children: o } = t,
    s = tE(r),
    a =
      typeof o == "function" ? o({ present: s.isPresent }) : w.Children.only(o),
    u = $e(s.ref, nE(a));
  return typeof o == "function" || s.isPresent
    ? w.cloneElement(a, { ref: u })
    : null;
};
Ma.displayName = "Presence";
function tE(t) {
  const [r, o] = w.useState(),
    s = w.useRef({}),
    a = w.useRef(t),
    u = w.useRef("none"),
    c = t ? "mounted" : "unmounted",
    [d, p] = eE(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const m = qs(s.current);
      u.current = d === "mounted" ? m : "none";
    }, [d]),
    dt(() => {
      const m = s.current,
        g = a.current;
      if (g !== t) {
        const y = u.current,
          C = qs(m);
        t
          ? p("MOUNT")
          : C === "none" || (m == null ? void 0 : m.display) === "none"
            ? p("UNMOUNT")
            : p(g && y !== C ? "ANIMATION_OUT" : "UNMOUNT"),
          (a.current = t);
      }
    }, [t, p]),
    dt(() => {
      if (r) {
        let m;
        const g = r.ownerDocument.defaultView ?? window,
          v = (C) => {
            const S = qs(s.current).includes(C.animationName);
            if (C.target === r && S && (p("ANIMATION_END"), !a.current)) {
              const T = r.style.animationFillMode;
              (r.style.animationFillMode = "forwards"),
                (m = g.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = T);
                }));
            }
          },
          y = (C) => {
            C.target === r && (u.current = qs(s.current));
          };
        return (
          r.addEventListener("animationstart", y),
          r.addEventListener("animationcancel", v),
          r.addEventListener("animationend", v),
          () => {
            g.clearTimeout(m),
              r.removeEventListener("animationstart", y),
              r.removeEventListener("animationcancel", v),
              r.removeEventListener("animationend", v);
          }
        );
      } else p("ANIMATION_END");
    }, [r, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: w.useCallback((m) => {
        m && (s.current = getComputedStyle(m)), o(m);
      }, []),
    }
  );
}
function qs(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function nE(t) {
  var s, a;
  let r =
      (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : s.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? t.ref
    : ((r =
        (a = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : a.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? t.props.ref : t.props.ref || t.ref);
}
var Li = zg();
const rE = Fg(Li);
var fo = w.forwardRef((t, r) => {
  const { children: o, ...s } = t,
    a = w.Children.toArray(o),
    u = a.find(oE);
  if (u) {
    const c = u.props.children,
      d = a.map((p) =>
        p === u
          ? w.Children.count(c) > 1
            ? w.Children.only(null)
            : w.isValidElement(c)
              ? c.props.children
              : null
          : p,
      );
    return k.jsx(bc, {
      ...s,
      ref: r,
      children: w.isValidElement(c) ? w.cloneElement(c, void 0, d) : null,
    });
  }
  return k.jsx(bc, { ...s, ref: r, children: o });
});
fo.displayName = "Slot";
var bc = w.forwardRef((t, r) => {
  const { children: o, ...s } = t;
  if (w.isValidElement(o)) {
    const a = sE(o);
    return w.cloneElement(o, { ...iE(s, o.props), ref: r ? Ey(r, a) : a });
  }
  return w.Children.count(o) > 1 ? w.Children.only(null) : null;
});
bc.displayName = "SlotClone";
var Ry = ({ children: t }) => k.jsx(k.Fragment, { children: t });
function oE(t) {
  return w.isValidElement(t) && t.type === Ry;
}
function iE(t, r) {
  const o = { ...r };
  for (const s in r) {
    const a = t[s],
      u = r[s];
    /^on[A-Z]/.test(s)
      ? a && u
        ? (o[s] = (...d) => {
            u(...d), a(...d);
          })
        : a && (o[s] = a)
      : s === "style"
        ? (o[s] = { ...a, ...u })
        : s === "className" && (o[s] = [a, u].filter(Boolean).join(" "));
  }
  return { ...t, ...o };
}
function sE(t) {
  var s, a;
  let r =
      (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : s.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? t.ref
    : ((r =
        (a = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : a.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? t.props.ref : t.props.ref || t.ref);
}
var aE = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ne = aE.reduce((t, r) => {
    const o = w.forwardRef((s, a) => {
      const { asChild: u, ...c } = s,
        d = u ? fo : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        k.jsx(d, { ...c, ref: a })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {});
function lE(t, r) {
  t && Li.flushSync(() => t.dispatchEvent(r));
}
var Rd = "Checkbox",
  [uE, Zb] = vo(Rd),
  [cE, dE] = uE(Rd),
  by = w.forwardRef((t, r) => {
    const {
        __scopeCheckbox: o,
        name: s,
        checked: a,
        defaultChecked: u,
        required: c,
        disabled: d,
        value: p = "on",
        onCheckedChange: m,
        form: g,
        ...v
      } = t,
      [y, C] = w.useState(null),
      P = $e(r, (L) => C(L)),
      S = w.useRef(!1),
      T = y ? g || !!y.closest("form") : !0,
      [E = !1, b] = Pi({ prop: a, defaultProp: u, onChange: m }),
      N = w.useRef(E);
    return (
      w.useEffect(() => {
        const L = y == null ? void 0 : y.form;
        if (L) {
          const I = () => b(N.current);
          return (
            L.addEventListener("reset", I),
            () => L.removeEventListener("reset", I)
          );
        }
      }, [y, b]),
      k.jsxs(cE, {
        scope: o,
        state: E,
        disabled: d,
        children: [
          k.jsx(Ne.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": Yn(E) ? "mixed" : E,
            "aria-required": c,
            "data-state": My(E),
            "data-disabled": d ? "" : void 0,
            disabled: d,
            value: p,
            ...v,
            ref: P,
            onKeyDown: be(t.onKeyDown, (L) => {
              L.key === "Enter" && L.preventDefault();
            }),
            onClick: be(t.onClick, (L) => {
              b((I) => (Yn(I) ? !0 : !I)),
                T &&
                  ((S.current = L.isPropagationStopped()),
                  S.current || L.stopPropagation());
            }),
          }),
          T &&
            k.jsx(fE, {
              control: y,
              bubbles: !S.current,
              name: s,
              value: p,
              checked: E,
              required: c,
              disabled: d,
              form: g,
              style: { transform: "translateX(-100%)" },
              defaultChecked: Yn(u) ? !1 : u,
            }),
        ],
      })
    );
  });
by.displayName = Rd;
var Ay = "CheckboxIndicator",
  Ny = w.forwardRef((t, r) => {
    const { __scopeCheckbox: o, forceMount: s, ...a } = t,
      u = dE(Ay, o);
    return k.jsx(Ma, {
      present: s || Yn(u.state) || u.state === !0,
      children: k.jsx(Ne.span, {
        "data-state": My(u.state),
        "data-disabled": u.disabled ? "" : void 0,
        ...a,
        ref: r,
        style: { pointerEvents: "none", ...t.style },
      }),
    });
  });
Ny.displayName = Ay;
var fE = (t) => {
  const {
      control: r,
      checked: o,
      bubbles: s = !0,
      defaultChecked: a,
      ...u
    } = t,
    c = w.useRef(null),
    d = Pd(o),
    p = Ed(r);
  w.useEffect(() => {
    const g = c.current,
      v = window.HTMLInputElement.prototype,
      C = Object.getOwnPropertyDescriptor(v, "checked").set;
    if (d !== o && C) {
      const P = new Event("click", { bubbles: s });
      (g.indeterminate = Yn(o)), C.call(g, Yn(o) ? !1 : o), g.dispatchEvent(P);
    }
  }, [d, o, s]);
  const m = w.useRef(Yn(o) ? !1 : o);
  return k.jsx("input", {
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: a ?? m.current,
    ...u,
    tabIndex: -1,
    ref: c,
    style: {
      ...t.style,
      ...p,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0,
    },
  });
};
function Yn(t) {
  return t === "indeterminate";
}
function My(t) {
  return Yn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
var jy = by,
  pE = Ny;
const Ly = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx(jy, {
    ref: o,
    className: Ue(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t,
    ),
    ...r,
    children: k.jsx(pE, {
      className: Ue("flex items-center justify-center text-current"),
      children: k.jsx(ky, { className: "h-4 w-4" }),
    }),
  }),
);
Ly.displayName = jy.displayName;
var hE = "Label",
  Dy = w.forwardRef((t, r) =>
    k.jsx(Ne.label, {
      ...t,
      ref: r,
      onMouseDown: (o) => {
        var a;
        o.target.closest("button, input, select, textarea") ||
          ((a = t.onMouseDown) == null || a.call(t, o),
          !o.defaultPrevented && o.detail > 1 && o.preventDefault());
      },
    }),
  );
Dy.displayName = hE;
var Iy = Dy;
const fg = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  pg = my,
  Oy = (t, r) => (o) => {
    var s;
    if ((r == null ? void 0 : r.variants) == null)
      return pg(
        t,
        o == null ? void 0 : o.class,
        o == null ? void 0 : o.className,
      );
    const { variants: a, defaultVariants: u } = r,
      c = Object.keys(a).map((m) => {
        const g = o == null ? void 0 : o[m],
          v = u == null ? void 0 : u[m];
        if (g === null) return null;
        const y = fg(g) || fg(v);
        return a[m][y];
      }),
      d =
        o &&
        Object.entries(o).reduce((m, g) => {
          let [v, y] = g;
          return y === void 0 || (m[v] = y), m;
        }, {}),
      p =
        r == null || (s = r.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((m, g) => {
              let { class: v, className: y, ...C } = g;
              return Object.entries(C).every((P) => {
                let [S, T] = P;
                return Array.isArray(T)
                  ? T.includes({ ...u, ...d }[S])
                  : { ...u, ...d }[S] === T;
              })
                ? [...m, v, y]
                : m;
            }, []);
    return pg(
      t,
      c,
      p,
      o == null ? void 0 : o.class,
      o == null ? void 0 : o.className,
    );
  },
  mE = Oy(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  xa = w.forwardRef(({ className: t, ...r }, o) =>
    k.jsx(Iy, { ref: o, className: Ue(mE(), t), ...r }),
  );
xa.displayName = Iy.displayName;
var bd = "Switch",
  [gE, Jb] = vo(bd),
  [vE, yE] = gE(bd),
  _y = w.forwardRef((t, r) => {
    const {
        __scopeSwitch: o,
        name: s,
        checked: a,
        defaultChecked: u,
        required: c,
        disabled: d,
        value: p = "on",
        onCheckedChange: m,
        form: g,
        ...v
      } = t,
      [y, C] = w.useState(null),
      P = $e(r, (N) => C(N)),
      S = w.useRef(!1),
      T = y ? g || !!y.closest("form") : !0,
      [E = !1, b] = Pi({ prop: a, defaultProp: u, onChange: m });
    return k.jsxs(vE, {
      scope: o,
      checked: E,
      disabled: d,
      children: [
        k.jsx(Ne.button, {
          type: "button",
          role: "switch",
          "aria-checked": E,
          "aria-required": c,
          "data-state": zy(E),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: p,
          ...v,
          ref: P,
          onClick: be(t.onClick, (N) => {
            b((L) => !L),
              T &&
                ((S.current = N.isPropagationStopped()),
                S.current || N.stopPropagation());
          }),
        }),
        T &&
          k.jsx(xE, {
            control: y,
            bubbles: !S.current,
            name: s,
            value: p,
            checked: E,
            required: c,
            disabled: d,
            form: g,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
_y.displayName = bd;
var Vy = "SwitchThumb",
  Fy = w.forwardRef((t, r) => {
    const { __scopeSwitch: o, ...s } = t,
      a = yE(Vy, o);
    return k.jsx(Ne.span, {
      "data-state": zy(a.checked),
      "data-disabled": a.disabled ? "" : void 0,
      ...s,
      ref: r,
    });
  });
Fy.displayName = Vy;
var xE = (t) => {
  const { control: r, checked: o, bubbles: s = !0, ...a } = t,
    u = w.useRef(null),
    c = Pd(o),
    d = Ed(r);
  return (
    w.useEffect(() => {
      const p = u.current,
        m = window.HTMLInputElement.prototype,
        v = Object.getOwnPropertyDescriptor(m, "checked").set;
      if (c !== o && v) {
        const y = new Event("click", { bubbles: s });
        v.call(p, o), p.dispatchEvent(y);
      }
    }, [c, o, s]),
    k.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o,
      ...a,
      tabIndex: -1,
      ref: u,
      style: {
        ...t.style,
        ...d,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function zy(t) {
  return t ? "checked" : "unchecked";
}
var By = _y,
  wE = Fy;
const Ad = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx(By, {
    className: Ue(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      t,
    ),
    ...r,
    ref: o,
    children: k.jsx(wE, {
      className: Ue(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
Ad.displayName = By.displayName;
var Zr = ((t) => (
  (t.DURABILITY = "durability"),
  (t.REPAIRABILITY = "repairability"),
  (t.MAINTAINABILITY = "maintainability"),
  (t.UPGRADABILITY = "upgradability"),
  (t.RECYCLABILITY = "recyclability"),
  t
))(Zr || {});
const SE = [
    { key: "durability", label: "Kestävyys & laadukkuus" },
    { key: "repairability", label: "Korjattavuus" },
    { key: "maintainability", label: "Huollettavuus" },
    { key: "upgradability", label: "Päivitettävyys" },
    { key: "recyclability", label: "Säilyttää arvon (kierrätettävyys)" },
  ],
  CE = (t) => {
    switch (t) {
      case Zr.DURABILITY:
        return k.jsx(VP, { className: "h-4 w-4 text-black" });
      case Zr.REPAIRABILITY:
        return k.jsx(_P, { className: "h-4 w-4 text-black" });
      case Zr.MAINTAINABILITY:
        return k.jsx(WP, { className: "h-4 w-4 text-black" });
      case Zr.UPGRADABILITY:
        return k.jsx($P, { className: "h-4 w-4 text-black" });
      case Zr.RECYCLABILITY:
        return k.jsx(UP, { className: "h-4 w-4 text-black" });
    }
  },
  kE = ({
    isAdText: t,
    onCheckedChange: r,
    selectedOptions: o,
    onOptionChange: s,
  }) => {
    const a = (u, c) => {
      s(u, c);
    };
    return k.jsxs("div", {
      className: "space-y-6",
      children: [
        k.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [
            k.jsx(Ad, { id: "adprompt", checked: t, onCheckedChange: r }),
            k.jsx(xa, {
              htmlFor: "adprompt",
              className: "text-sm font-medium",
              children: "Generoi mainosteksti",
            }),
          ],
        }),
        t &&
          k.jsxs("div", {
            className: "space-y-4",
            children: [
              k.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Kiertotalousnäkökulma",
              }),
              k.jsx("div", {
                className: "grid gap-4",
                children: SE.map(({ key: u, label: c }) =>
                  k.jsxs(
                    "div",
                    {
                      className: "flex items-center space-x-3  ",
                      children: [
                        k.jsx(Ly, {
                          id: `checkbox-${u}`,
                          checked: o.includes(u),
                          onCheckedChange: (d) => a(u, d),
                        }),
                        k.jsx("div", {
                          className: "grid gap-1",
                          children: k.jsxs("div", {
                            className: "flex items-center space-x-2 ",
                            children: [
                              CE(u),
                              k.jsx(xa, {
                                htmlFor: `checkbox-${u}`,
                                className:
                                  "text-sm font-medium border-b border-blue-500/50 w-fit",
                                children: c,
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    u,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  },
  Ju = ({ children: t, stepKey: r }) =>
    k.jsx(
      oo.div,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
        transition: { duration: 0.3 },
        children: t,
      },
      r,
    );
function TE(t) {
  return k.jsx("svg", {
    ...t,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: k.jsx("path", { d: "M5 13l4 4L19 7" }),
  });
}
function PE(t) {
  return k.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [
      k.jsx("title", { children: "Instagram" }),
      k.jsx("path", {
        d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
      }),
    ],
  });
}
function EE(t) {
  return k.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [
      k.jsx("title", { children: "Facebook" }),
      k.jsx("path", {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
      }),
    ],
  });
}
function RE(t) {
  return k.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [
      k.jsx("title", { children: "TikTok" }),
      k.jsx("path", {
        d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
      }),
    ],
  });
}
function bE(t) {
  return k.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [
      k.jsx("title", { children: "X" }),
      k.jsx("path", {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      }),
    ],
  });
}
function AE(t) {
  return k.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [
      k.jsx("title", { children: "YouTube" }),
      k.jsx("path", {
        d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
      }),
    ],
  });
}
const NE = Oy(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  hn = w.forwardRef(
    ({ className: t, variant: r, size: o, asChild: s = !1, ...a }, u) => {
      const c = s ? fo : "button";
      return k.jsx(c, {
        className: Ue(NE({ variant: r, size: o, className: t })),
        ref: u,
        ...a,
      });
    },
  );
hn.displayName = "Button";
const ME = ({ onFileChange: t, onDrop: r, onDragOver: o, inputKey: s }) =>
    k.jsxs("div", {
      className:
        "border-2 border-dashed border-zinc-200 rounded-lg p-4 dark:border-zinc-800",
      onDrop: r,
      onDragOver: o,
      children: [
        k.jsxs("div", {
          className: "flex items-center justify-center space-x-2",
          children: [
            k.jsx(XP, {
              className: "h-6 w-6 text-zinc-500 dark:text-zinc-400",
            }),
            k.jsx("p", {
              className: "text-zinc-500 dark:text-zinc-400",
              children: "Vedä ja pudota kuva tänne",
            }),
          ],
        }),
        k.jsxs("div", {
          className: "text-center mt-2",
          children: [
            k.jsx(
              "input",
              {
                name: "fileInput",
                id: "fileInput",
                type: "file",
                accept: "image/*",
                onChange: t,
                style: { display: "none" },
              },
              s,
            ),
            k.jsx("label", {
              htmlFor: "fileInput",
              children: k.jsx(hn, {
                type: "button",
                variant: "outline",
                onClick: (a) => {
                  var u;
                  a.preventDefault(),
                    (u = document.getElementById("fileInput")) == null ||
                      u.click();
                },
                children: "Tai selaa tiedostoja",
              }),
            }),
          ],
        }),
      ],
    }),
  yi = w.forwardRef(({ className: t, ...r }, o) =>
    k.jsx("div", {
      ref: o,
      className: Ue("rounded-xl border bg-card text-card-foreground shadow", t),
      ...r,
    }),
  );
yi.displayName = "Card";
const Nd = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx("div", {
    ref: o,
    className: Ue("flex flex-col space-y-1.5 p-6", t),
    ...r,
  }),
);
Nd.displayName = "CardHeader";
const Md = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx("div", {
    ref: o,
    className: Ue("font-semibold leading-none tracking-tight", t),
    ...r,
  }),
);
Md.displayName = "CardTitle";
const jE = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx("div", {
    ref: o,
    className: Ue("text-sm text-muted-foreground", t),
    ...r,
  }),
);
jE.displayName = "CardDescription";
const xi = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx("div", { ref: o, className: Ue("p-6 pt-0", t), ...r }),
);
xi.displayName = "CardContent";
const LE = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx("div", {
    ref: o,
    className: Ue("flex items-center p-6 pt-0", t),
    ...r,
  }),
);
LE.displayName = "CardFooter";
const DE = ({ apiUrl: t, refreshTrigger: r }) => {
  const {
    recentImages: o,
    loading: s,
    downloadImage: a,
    loadRecentImages: u,
  } = Sy({ apiUrl: t });
  return (
    w.useEffect(() => {
      u();
    }, [u, r]),
    o.length === 0
      ? null
      : k.jsxs(yi, {
          className: "shadow-lg",
          children: [
            k.jsx(Nd, {
              children: k.jsx(Md, {
                className: "text-lg",
                children: "Viimeisimmät kuvat",
              }),
            }),
            k.jsx(xi, {
              children: k.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: o.map((c, d) =>
                  k.jsx(
                    "div",
                    {
                      className: "relative group",
                      children:
                        s && !c.imageUrl
                          ? k.jsx("div", {
                              className:
                                "flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-800 rounded-lg",
                              children: k.jsx(Py, {
                                className: "h-6 w-6 animate-spin",
                              }),
                            })
                          : c.imageUrl
                            ? k.jsxs("div", {
                                className: "relative",
                                children: [
                                  k.jsx("img", {
                                    src: c.imageUrl,
                                    alt: `Recent image ${d + 1}`,
                                    className:
                                      "w-full h-48 object-cover rounded-lg",
                                  }),
                                  k.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                    children: k.jsx(hn, {
                                      variant: "ghost",
                                      size: "icon",
                                      className: "text-white",
                                      onClick: () =>
                                        a(c.imageUrl, `image-${d + 1}.png`),
                                      children: k.jsx(OP, {
                                        className: "h-5 w-5",
                                      }),
                                    }),
                                  }),
                                ],
                              })
                            : k.jsx("div", {
                                className:
                                  "flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-800 rounded-lg",
                                children: k.jsx("p", {
                                  className: "text-sm text-gray-500",
                                  children: "Kuvaa ei löytynyt",
                                }),
                              }),
                    },
                    c.id,
                  ),
                ),
              }),
            }),
          ],
        })
  );
};
function hg(t, [r, o]) {
  return Math.min(o, Math.max(r, t));
}
function IE(t) {
  const r = t + "CollectionProvider",
    [o, s] = vo(r),
    [a, u] = o(r, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (C) => {
      const { scope: P, children: S } = C,
        T = Hn.useRef(null),
        E = Hn.useRef(new Map()).current;
      return k.jsx(a, { scope: P, itemMap: E, collectionRef: T, children: S });
    };
  c.displayName = r;
  const d = t + "CollectionSlot",
    p = Hn.forwardRef((C, P) => {
      const { scope: S, children: T } = C,
        E = u(d, S),
        b = $e(P, E.collectionRef);
      return k.jsx(fo, { ref: b, children: T });
    });
  p.displayName = d;
  const m = t + "CollectionItemSlot",
    g = "data-radix-collection-item",
    v = Hn.forwardRef((C, P) => {
      const { scope: S, children: T, ...E } = C,
        b = Hn.useRef(null),
        N = $e(P, b),
        L = u(m, S);
      return (
        Hn.useEffect(
          () => (
            L.itemMap.set(b, { ref: b, ...E }), () => void L.itemMap.delete(b)
          ),
        ),
        k.jsx(fo, { [g]: "", ref: N, children: T })
      );
    });
  v.displayName = m;
  function y(C) {
    const P = u(t + "CollectionConsumer", C);
    return Hn.useCallback(() => {
      const T = P.collectionRef.current;
      if (!T) return [];
      const E = Array.from(T.querySelectorAll(`[${g}]`));
      return Array.from(P.itemMap.values()).sort(
        (L, I) => E.indexOf(L.ref.current) - E.indexOf(I.ref.current),
      );
    }, [P.collectionRef, P.itemMap]);
  }
  return [{ Provider: c, Slot: p, ItemSlot: v }, y, s];
}
var OE = w.createContext(void 0);
function _E(t) {
  const r = w.useContext(OE);
  return t || r || "ltr";
}
function VE(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = yn(t);
  w.useEffect(() => {
    const s = (a) => {
      a.key === "Escape" && o(a);
    };
    return (
      r.addEventListener("keydown", s, { capture: !0 }),
      () => r.removeEventListener("keydown", s, { capture: !0 })
    );
  }, [o, r]);
}
var FE = "DismissableLayer",
  Ac = "dismissableLayer.update",
  zE = "dismissableLayer.pointerDownOutside",
  BE = "dismissableLayer.focusOutside",
  mg,
  Uy = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  jd = w.forwardRef((t, r) => {
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: u,
        onInteractOutside: c,
        onDismiss: d,
        ...p
      } = t,
      m = w.useContext(Uy),
      [g, v] = w.useState(null),
      y =
        (g == null ? void 0 : g.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, C] = w.useState({}),
      P = $e(r, (z) => v(z)),
      S = Array.from(m.layers),
      [T] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      E = S.indexOf(T),
      b = g ? S.indexOf(g) : -1,
      N = m.layersWithOutsidePointerEventsDisabled.size > 0,
      L = b >= E,
      I = WE((z) => {
        const W = z.target,
          te = [...m.branches].some((oe) => oe.contains(W));
        !L ||
          te ||
          (a == null || a(z),
          c == null || c(z),
          z.defaultPrevented || d == null || d());
      }, y),
      B = HE((z) => {
        const W = z.target;
        [...m.branches].some((oe) => oe.contains(W)) ||
          (u == null || u(z),
          c == null || c(z),
          z.defaultPrevented || d == null || d());
      }, y);
    return (
      VE((z) => {
        b === m.layers.size - 1 &&
          (s == null || s(z),
          !z.defaultPrevented && d && (z.preventDefault(), d()));
      }, y),
      w.useEffect(() => {
        if (g)
          return (
            o &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((mg = y.body.style.pointerEvents),
                (y.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            gg(),
            () => {
              o &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (y.body.style.pointerEvents = mg);
            }
          );
      }, [g, y, o, m]),
      w.useEffect(
        () => () => {
          g &&
            (m.layers.delete(g),
            m.layersWithOutsidePointerEventsDisabled.delete(g),
            gg());
        },
        [g, m],
      ),
      w.useEffect(() => {
        const z = () => C({});
        return (
          document.addEventListener(Ac, z),
          () => document.removeEventListener(Ac, z)
        );
      }, []),
      k.jsx(Ne.div, {
        ...p,
        ref: P,
        style: {
          pointerEvents: N ? (L ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: be(t.onFocusCapture, B.onFocusCapture),
        onBlurCapture: be(t.onBlurCapture, B.onBlurCapture),
        onPointerDownCapture: be(
          t.onPointerDownCapture,
          I.onPointerDownCapture,
        ),
      })
    );
  });
jd.displayName = FE;
var UE = "DismissableLayerBranch",
  $E = w.forwardRef((t, r) => {
    const o = w.useContext(Uy),
      s = w.useRef(null),
      a = $e(r, s);
    return (
      w.useEffect(() => {
        const u = s.current;
        if (u)
          return (
            o.branches.add(u),
            () => {
              o.branches.delete(u);
            }
          );
      }, [o.branches]),
      k.jsx(Ne.div, { ...t, ref: a })
    );
  });
$E.displayName = UE;
function WE(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = yn(t),
    s = w.useRef(!1),
    a = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const u = (d) => {
          if (d.target && !s.current) {
            let p = function () {
              $y(zE, o, m, { discrete: !0 });
            };
            const m = { originalEvent: d };
            d.pointerType === "touch"
              ? (r.removeEventListener("click", a.current),
                (a.current = p),
                r.addEventListener("click", a.current, { once: !0 }))
              : p();
          } else r.removeEventListener("click", a.current);
          s.current = !1;
        },
        c = window.setTimeout(() => {
          r.addEventListener("pointerdown", u);
        }, 0);
      return () => {
        window.clearTimeout(c),
          r.removeEventListener("pointerdown", u),
          r.removeEventListener("click", a.current);
      };
    }, [r, o]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function HE(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = yn(t),
    s = w.useRef(!1);
  return (
    w.useEffect(() => {
      const a = (u) => {
        u.target &&
          !s.current &&
          $y(BE, o, { originalEvent: u }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", a),
        () => r.removeEventListener("focusin", a)
      );
    }, [r, o]),
    {
      onFocusCapture: () => (s.current = !0),
      onBlurCapture: () => (s.current = !1),
    }
  );
}
function gg() {
  const t = new CustomEvent(Ac);
  document.dispatchEvent(t);
}
function $y(t, r, o, { discrete: s }) {
  const a = o.originalEvent.target,
    u = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: o });
  r && a.addEventListener(t, r, { once: !0 }),
    s ? lE(a, u) : a.dispatchEvent(u);
}
var ec = 0;
function KE() {
  w.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", t[0] ?? vg()),
      document.body.insertAdjacentElement("beforeend", t[1] ?? vg()),
      ec++,
      () => {
        ec === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          ec--;
      }
    );
  }, []);
}
function vg() {
  const t = document.createElement("span");
  return (
    t.setAttribute("data-radix-focus-guard", ""),
    (t.tabIndex = 0),
    (t.style.outline = "none"),
    (t.style.opacity = "0"),
    (t.style.position = "fixed"),
    (t.style.pointerEvents = "none"),
    t
  );
}
var tc = "focusScope.autoFocusOnMount",
  nc = "focusScope.autoFocusOnUnmount",
  yg = { bubbles: !1, cancelable: !0 },
  GE = "FocusScope",
  Wy = w.forwardRef((t, r) => {
    const {
        loop: o = !1,
        trapped: s = !1,
        onMountAutoFocus: a,
        onUnmountAutoFocus: u,
        ...c
      } = t,
      [d, p] = w.useState(null),
      m = yn(a),
      g = yn(u),
      v = w.useRef(null),
      y = $e(r, (S) => p(S)),
      C = w.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    w.useEffect(() => {
      if (s) {
        let S = function (N) {
            if (C.paused || !d) return;
            const L = N.target;
            d.contains(L) ? (v.current = L) : Gn(v.current, { select: !0 });
          },
          T = function (N) {
            if (C.paused || !d) return;
            const L = N.relatedTarget;
            L !== null && (d.contains(L) || Gn(v.current, { select: !0 }));
          },
          E = function (N) {
            if (document.activeElement === document.body)
              for (const I of N) I.removedNodes.length > 0 && Gn(d);
          };
        document.addEventListener("focusin", S),
          document.addEventListener("focusout", T);
        const b = new MutationObserver(E);
        return (
          d && b.observe(d, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", S),
              document.removeEventListener("focusout", T),
              b.disconnect();
          }
        );
      }
    }, [s, d, C.paused]),
      w.useEffect(() => {
        if (d) {
          wg.add(C);
          const S = document.activeElement;
          if (!d.contains(S)) {
            const E = new CustomEvent(tc, yg);
            d.addEventListener(tc, m),
              d.dispatchEvent(E),
              E.defaultPrevented ||
                (YE(JE(Hy(d)), { select: !0 }),
                document.activeElement === S && Gn(d));
          }
          return () => {
            d.removeEventListener(tc, m),
              setTimeout(() => {
                const E = new CustomEvent(nc, yg);
                d.addEventListener(nc, g),
                  d.dispatchEvent(E),
                  E.defaultPrevented || Gn(S ?? document.body, { select: !0 }),
                  d.removeEventListener(nc, g),
                  wg.remove(C);
              }, 0);
          };
        }
      }, [d, m, g, C]);
    const P = w.useCallback(
      (S) => {
        if ((!o && !s) || C.paused) return;
        const T = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey,
          E = document.activeElement;
        if (T && E) {
          const b = S.currentTarget,
            [N, L] = XE(b);
          N && L
            ? !S.shiftKey && E === L
              ? (S.preventDefault(), o && Gn(N, { select: !0 }))
              : S.shiftKey &&
                E === N &&
                (S.preventDefault(), o && Gn(L, { select: !0 }))
            : E === b && S.preventDefault();
        }
      },
      [o, s, C.paused],
    );
    return k.jsx(Ne.div, { tabIndex: -1, ...c, ref: y, onKeyDown: P });
  });
Wy.displayName = GE;
function YE(t, { select: r = !1 } = {}) {
  const o = document.activeElement;
  for (const s of t)
    if ((Gn(s, { select: r }), document.activeElement !== o)) return;
}
function XE(t) {
  const r = Hy(t),
    o = xg(r, t),
    s = xg(r.reverse(), t);
  return [o, s];
}
function Hy(t) {
  const r = [],
    o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (s) => {
        const a = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || a
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; o.nextNode(); ) r.push(o.currentNode);
  return r;
}
function xg(t, r) {
  for (const o of t) if (!QE(o, { upTo: r })) return o;
}
function QE(t, { upTo: r }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (r !== void 0 && t === r) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function qE(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Gn(t, { select: r = !1 } = {}) {
  if (t && t.focus) {
    const o = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== o && qE(t) && r && t.select();
  }
}
var wg = ZE();
function ZE() {
  let t = [];
  return {
    add(r) {
      const o = t[0];
      r !== o && (o == null || o.pause()), (t = Sg(t, r)), t.unshift(r);
    },
    remove(r) {
      var o;
      (t = Sg(t, r)), (o = t[0]) == null || o.resume();
    },
  };
}
function Sg(t, r) {
  const o = [...t],
    s = o.indexOf(r);
  return s !== -1 && o.splice(s, 1), o;
}
function JE(t) {
  return t.filter((r) => r.tagName !== "A");
}
var e2 = gw.useId || (() => {}),
  t2 = 0;
function ja(t) {
  const [r, o] = w.useState(e2());
  return (
    dt(() => {
      o((s) => s ?? String(t2++));
    }, [t]),
    r ? `radix-${r}` : ""
  );
}
const n2 = ["top", "right", "bottom", "left"],
  qn = Math.min,
  kt = Math.max,
  wa = Math.round,
  Zs = Math.floor,
  en = (t) => ({ x: t, y: t }),
  r2 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  o2 = { start: "end", end: "start" };
function Nc(t, r, o) {
  return kt(t, qn(r, o));
}
function xn(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function wn(t) {
  return t.split("-")[0];
}
function yo(t) {
  return t.split("-")[1];
}
function Ld(t) {
  return t === "x" ? "y" : "x";
}
function Dd(t) {
  return t === "y" ? "height" : "width";
}
function Zn(t) {
  return ["top", "bottom"].includes(wn(t)) ? "y" : "x";
}
function Id(t) {
  return Ld(Zn(t));
}
function i2(t, r, o) {
  o === void 0 && (o = !1);
  const s = yo(t),
    a = Id(t),
    u = Dd(a);
  let c =
    a === "x"
      ? s === (o ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
        ? "bottom"
        : "top";
  return r.reference[u] > r.floating[u] && (c = Sa(c)), [c, Sa(c)];
}
function s2(t) {
  const r = Sa(t);
  return [Mc(t), r, Mc(r)];
}
function Mc(t) {
  return t.replace(/start|end/g, (r) => o2[r]);
}
function a2(t, r, o) {
  const s = ["left", "right"],
    a = ["right", "left"],
    u = ["top", "bottom"],
    c = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? (r ? a : s) : r ? s : a;
    case "left":
    case "right":
      return r ? u : c;
    default:
      return [];
  }
}
function l2(t, r, o, s) {
  const a = yo(t);
  let u = a2(wn(t), o === "start", s);
  return (
    a && ((u = u.map((c) => c + "-" + a)), r && (u = u.concat(u.map(Mc)))), u
  );
}
function Sa(t) {
  return t.replace(/left|right|bottom|top/g, (r) => r2[r]);
}
function u2(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Ky(t) {
  return typeof t != "number"
    ? u2(t)
    : { top: t, right: t, bottom: t, left: t };
}
function Ca(t) {
  const { x: r, y: o, width: s, height: a } = t;
  return {
    width: s,
    height: a,
    top: o,
    left: r,
    right: r + s,
    bottom: o + a,
    x: r,
    y: o,
  };
}
function Cg(t, r, o) {
  let { reference: s, floating: a } = t;
  const u = Zn(r),
    c = Id(r),
    d = Dd(c),
    p = wn(r),
    m = u === "y",
    g = s.x + s.width / 2 - a.width / 2,
    v = s.y + s.height / 2 - a.height / 2,
    y = s[d] / 2 - a[d] / 2;
  let C;
  switch (p) {
    case "top":
      C = { x: g, y: s.y - a.height };
      break;
    case "bottom":
      C = { x: g, y: s.y + s.height };
      break;
    case "right":
      C = { x: s.x + s.width, y: v };
      break;
    case "left":
      C = { x: s.x - a.width, y: v };
      break;
    default:
      C = { x: s.x, y: s.y };
  }
  switch (yo(r)) {
    case "start":
      C[c] -= y * (o && m ? -1 : 1);
      break;
    case "end":
      C[c] += y * (o && m ? -1 : 1);
      break;
  }
  return C;
}
const c2 = async (t, r, o) => {
  const {
      placement: s = "bottom",
      strategy: a = "absolute",
      middleware: u = [],
      platform: c,
    } = o,
    d = u.filter(Boolean),
    p = await (c.isRTL == null ? void 0 : c.isRTL(r));
  let m = await c.getElementRects({ reference: t, floating: r, strategy: a }),
    { x: g, y: v } = Cg(m, s, p),
    y = s,
    C = {},
    P = 0;
  for (let S = 0; S < d.length; S++) {
    const { name: T, fn: E } = d[S],
      {
        x: b,
        y: N,
        data: L,
        reset: I,
      } = await E({
        x: g,
        y: v,
        initialPlacement: s,
        placement: y,
        strategy: a,
        middlewareData: C,
        rects: m,
        platform: c,
        elements: { reference: t, floating: r },
      });
    (g = b ?? g),
      (v = N ?? v),
      (C = { ...C, [T]: { ...C[T], ...L } }),
      I &&
        P <= 50 &&
        (P++,
        typeof I == "object" &&
          (I.placement && (y = I.placement),
          I.rects &&
            (m =
              I.rects === !0
                ? await c.getElementRects({
                    reference: t,
                    floating: r,
                    strategy: a,
                  })
                : I.rects),
          ({ x: g, y: v } = Cg(m, y, p))),
        (S = -1));
  }
  return { x: g, y: v, placement: y, strategy: a, middlewareData: C };
};
async function Ei(t, r) {
  var o;
  r === void 0 && (r = {});
  const { x: s, y: a, platform: u, rects: c, elements: d, strategy: p } = t,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: v = "floating",
      altBoundary: y = !1,
      padding: C = 0,
    } = xn(r, t),
    P = Ky(C),
    T = d[y ? (v === "floating" ? "reference" : "floating") : v],
    E = Ca(
      await u.getClippingRect({
        element:
          (o = await (u.isElement == null ? void 0 : u.isElement(T))) == null ||
          o
            ? T
            : T.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(d.floating))),
        boundary: m,
        rootBoundary: g,
        strategy: p,
      }),
    ),
    b =
      v === "floating"
        ? { x: s, y: a, width: c.floating.width, height: c.floating.height }
        : c.reference,
    N = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(d.floating)),
    L = (await (u.isElement == null ? void 0 : u.isElement(N)))
      ? (await (u.getScale == null ? void 0 : u.getScale(N))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    I = Ca(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: b,
            offsetParent: N,
            strategy: p,
          })
        : b,
    );
  return {
    top: (E.top - I.top + P.top) / L.y,
    bottom: (I.bottom - E.bottom + P.bottom) / L.y,
    left: (E.left - I.left + P.left) / L.x,
    right: (I.right - E.right + P.right) / L.x,
  };
}
const d2 = (t) => ({
    name: "arrow",
    options: t,
    async fn(r) {
      const {
          x: o,
          y: s,
          placement: a,
          rects: u,
          platform: c,
          elements: d,
          middlewareData: p,
        } = r,
        { element: m, padding: g = 0 } = xn(t, r) || {};
      if (m == null) return {};
      const v = Ky(g),
        y = { x: o, y: s },
        C = Id(a),
        P = Dd(C),
        S = await c.getDimensions(m),
        T = C === "y",
        E = T ? "top" : "left",
        b = T ? "bottom" : "right",
        N = T ? "clientHeight" : "clientWidth",
        L = u.reference[P] + u.reference[C] - y[C] - u.floating[P],
        I = y[C] - u.reference[C],
        B = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(m));
      let z = B ? B[N] : 0;
      (!z || !(await (c.isElement == null ? void 0 : c.isElement(B)))) &&
        (z = d.floating[N] || u.floating[P]);
      const W = L / 2 - I / 2,
        te = z / 2 - S[P] / 2 - 1,
        oe = qn(v[E], te),
        ge = qn(v[b], te),
        Z = oe,
        fe = z - S[P] - ge,
        le = z / 2 - S[P] / 2 + W,
        Ce = Nc(Z, le, fe),
        ie =
          !p.arrow &&
          yo(a) != null &&
          le !== Ce &&
          u.reference[P] / 2 - (le < Z ? oe : ge) - S[P] / 2 < 0,
        X = ie ? (le < Z ? le - Z : le - fe) : 0;
      return {
        [C]: y[C] + X,
        data: {
          [C]: Ce,
          centerOffset: le - Ce - X,
          ...(ie && { alignmentOffset: X }),
        },
        reset: ie,
      };
    },
  }),
  f2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(r) {
          var o, s;
          const {
              placement: a,
              middlewareData: u,
              rects: c,
              initialPlacement: d,
              platform: p,
              elements: m,
            } = r,
            {
              mainAxis: g = !0,
              crossAxis: v = !0,
              fallbackPlacements: y,
              fallbackStrategy: C = "bestFit",
              fallbackAxisSideDirection: P = "none",
              flipAlignment: S = !0,
              ...T
            } = xn(t, r);
          if ((o = u.arrow) != null && o.alignmentOffset) return {};
          const E = wn(a),
            b = Zn(d),
            N = wn(d) === d,
            L = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            I = y || (N || !S ? [Sa(d)] : s2(d)),
            B = P !== "none";
          !y && B && I.push(...l2(d, S, P, L));
          const z = [d, ...I],
            W = await Ei(r, T),
            te = [];
          let oe = ((s = u.flip) == null ? void 0 : s.overflows) || [];
          if ((g && te.push(W[E]), v)) {
            const le = i2(a, c, L);
            te.push(W[le[0]], W[le[1]]);
          }
          if (
            ((oe = [...oe, { placement: a, overflows: te }]),
            !te.every((le) => le <= 0))
          ) {
            var ge, Z;
            const le = (((ge = u.flip) == null ? void 0 : ge.index) || 0) + 1,
              Ce = z[le];
            if (Ce)
              return {
                data: { index: le, overflows: oe },
                reset: { placement: Ce },
              };
            let ie =
              (Z = oe
                .filter((X) => X.overflows[0] <= 0)
                .sort((X, V) => X.overflows[1] - V.overflows[1])[0]) == null
                ? void 0
                : Z.placement;
            if (!ie)
              switch (C) {
                case "bestFit": {
                  var fe;
                  const X =
                    (fe = oe
                      .filter((V) => {
                        if (B) {
                          const Y = Zn(V.placement);
                          return Y === b || Y === "y";
                        }
                        return !0;
                      })
                      .map((V) => [
                        V.placement,
                        V.overflows
                          .filter((Y) => Y > 0)
                          .reduce((Y, K) => Y + K, 0),
                      ])
                      .sort((V, Y) => V[1] - Y[1])[0]) == null
                      ? void 0
                      : fe[0];
                  X && (ie = X);
                  break;
                }
                case "initialPlacement":
                  ie = d;
                  break;
              }
            if (a !== ie) return { reset: { placement: ie } };
          }
          return {};
        },
      }
    );
  };
function kg(t, r) {
  return {
    top: t.top - r.height,
    right: t.right - r.width,
    bottom: t.bottom - r.height,
    left: t.left - r.width,
  };
}
function Tg(t) {
  return n2.some((r) => t[r] >= 0);
}
const p2 = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "hide",
      options: t,
      async fn(r) {
        const { rects: o } = r,
          { strategy: s = "referenceHidden", ...a } = xn(t, r);
        switch (s) {
          case "referenceHidden": {
            const u = await Ei(r, { ...a, elementContext: "reference" }),
              c = kg(u, o.reference);
            return {
              data: { referenceHiddenOffsets: c, referenceHidden: Tg(c) },
            };
          }
          case "escaped": {
            const u = await Ei(r, { ...a, altBoundary: !0 }),
              c = kg(u, o.floating);
            return { data: { escapedOffsets: c, escaped: Tg(c) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function h2(t, r) {
  const { placement: o, platform: s, elements: a } = t,
    u = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)),
    c = wn(o),
    d = yo(o),
    p = Zn(o) === "y",
    m = ["left", "top"].includes(c) ? -1 : 1,
    g = u && p ? -1 : 1,
    v = xn(r, t);
  let {
    mainAxis: y,
    crossAxis: C,
    alignmentAxis: P,
  } = typeof v == "number"
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    d && typeof P == "number" && (C = d === "end" ? P * -1 : P),
    p ? { x: C * g, y: y * m } : { x: y * m, y: C * g }
  );
}
const m2 = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(r) {
          var o, s;
          const { x: a, y: u, placement: c, middlewareData: d } = r,
            p = await h2(r, t);
          return c === ((o = d.offset) == null ? void 0 : o.placement) &&
            (s = d.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: a + p.x, y: u + p.y, data: { ...p, placement: c } };
        },
      }
    );
  },
  g2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(r) {
          const { x: o, y: s, placement: a } = r,
            {
              mainAxis: u = !0,
              crossAxis: c = !1,
              limiter: d = {
                fn: (T) => {
                  let { x: E, y: b } = T;
                  return { x: E, y: b };
                },
              },
              ...p
            } = xn(t, r),
            m = { x: o, y: s },
            g = await Ei(r, p),
            v = Zn(wn(a)),
            y = Ld(v);
          let C = m[y],
            P = m[v];
          if (u) {
            const T = y === "y" ? "top" : "left",
              E = y === "y" ? "bottom" : "right",
              b = C + g[T],
              N = C - g[E];
            C = Nc(b, C, N);
          }
          if (c) {
            const T = v === "y" ? "top" : "left",
              E = v === "y" ? "bottom" : "right",
              b = P + g[T],
              N = P - g[E];
            P = Nc(b, P, N);
          }
          const S = d.fn({ ...r, [y]: C, [v]: P });
          return {
            ...S,
            data: { x: S.x - o, y: S.y - s, enabled: { [y]: u, [v]: c } },
          };
        },
      }
    );
  },
  v2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(r) {
          const { x: o, y: s, placement: a, rects: u, middlewareData: c } = r,
            { offset: d = 0, mainAxis: p = !0, crossAxis: m = !0 } = xn(t, r),
            g = { x: o, y: s },
            v = Zn(a),
            y = Ld(v);
          let C = g[y],
            P = g[v];
          const S = xn(d, r),
            T =
              typeof S == "number"
                ? { mainAxis: S, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...S };
          if (p) {
            const N = y === "y" ? "height" : "width",
              L = u.reference[y] - u.floating[N] + T.mainAxis,
              I = u.reference[y] + u.reference[N] - T.mainAxis;
            C < L ? (C = L) : C > I && (C = I);
          }
          if (m) {
            var E, b;
            const N = y === "y" ? "width" : "height",
              L = ["top", "left"].includes(wn(a)),
              I =
                u.reference[v] -
                u.floating[N] +
                ((L && ((E = c.offset) == null ? void 0 : E[v])) || 0) +
                (L ? 0 : T.crossAxis),
              B =
                u.reference[v] +
                u.reference[N] +
                (L ? 0 : ((b = c.offset) == null ? void 0 : b[v]) || 0) -
                (L ? T.crossAxis : 0);
            P < I ? (P = I) : P > B && (P = B);
          }
          return { [y]: C, [v]: P };
        },
      }
    );
  },
  y2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(r) {
          var o, s;
          const { placement: a, rects: u, platform: c, elements: d } = r,
            { apply: p = () => {}, ...m } = xn(t, r),
            g = await Ei(r, m),
            v = wn(a),
            y = yo(a),
            C = Zn(a) === "y",
            { width: P, height: S } = u.floating;
          let T, E;
          v === "top" || v === "bottom"
            ? ((T = v),
              (E =
                y ===
                ((await (c.isRTL == null ? void 0 : c.isRTL(d.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((E = v), (T = y === "end" ? "top" : "bottom"));
          const b = S - g.top - g.bottom,
            N = P - g.left - g.right,
            L = qn(S - g[T], b),
            I = qn(P - g[E], N),
            B = !r.middlewareData.shift;
          let z = L,
            W = I;
          if (
            ((o = r.middlewareData.shift) != null && o.enabled.x && (W = N),
            (s = r.middlewareData.shift) != null && s.enabled.y && (z = b),
            B && !y)
          ) {
            const oe = kt(g.left, 0),
              ge = kt(g.right, 0),
              Z = kt(g.top, 0),
              fe = kt(g.bottom, 0);
            C
              ? (W =
                  P -
                  2 * (oe !== 0 || ge !== 0 ? oe + ge : kt(g.left, g.right)))
              : (z =
                  S - 2 * (Z !== 0 || fe !== 0 ? Z + fe : kt(g.top, g.bottom)));
          }
          await p({ ...r, availableWidth: W, availableHeight: z });
          const te = await c.getDimensions(d.floating);
          return P !== te.width || S !== te.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function La() {
  return typeof window < "u";
}
function xo(t) {
  return Gy(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Pt(t) {
  var r;
  return (
    (t == null || (r = t.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function nn(t) {
  var r;
  return (r = (Gy(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function Gy(t) {
  return La() ? t instanceof Node || t instanceof Pt(t).Node : !1;
}
function Wt(t) {
  return La() ? t instanceof Element || t instanceof Pt(t).Element : !1;
}
function tn(t) {
  return La() ? t instanceof HTMLElement || t instanceof Pt(t).HTMLElement : !1;
}
function Pg(t) {
  return !La() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof Pt(t).ShadowRoot;
}
function Di(t) {
  const { overflow: r, overflowX: o, overflowY: s, display: a } = Ht(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + s + o) &&
    !["inline", "contents"].includes(a)
  );
}
function x2(t) {
  return ["table", "td", "th"].includes(xo(t));
}
function Da(t) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return t.matches(r);
    } catch {
      return !1;
    }
  });
}
function Od(t) {
  const r = _d(),
    o = Wt(t) ? Ht(t) : t;
  return (
    o.transform !== "none" ||
    o.perspective !== "none" ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!r && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!r && (o.filter ? o.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((s) =>
      (o.willChange || "").includes(s),
    ) ||
    ["paint", "layout", "strict", "content"].some((s) =>
      (o.contain || "").includes(s),
    )
  );
}
function w2(t) {
  let r = Jn(t);
  for (; tn(r) && !po(r); ) {
    if (Od(r)) return r;
    if (Da(r)) return null;
    r = Jn(r);
  }
  return null;
}
function _d() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function po(t) {
  return ["html", "body", "#document"].includes(xo(t));
}
function Ht(t) {
  return Pt(t).getComputedStyle(t);
}
function Ia(t) {
  return Wt(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function Jn(t) {
  if (xo(t) === "html") return t;
  const r = t.assignedSlot || t.parentNode || (Pg(t) && t.host) || nn(t);
  return Pg(r) ? r.host : r;
}
function Yy(t) {
  const r = Jn(t);
  return po(r)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : tn(r) && Di(r)
      ? r
      : Yy(r);
}
function Ri(t, r, o) {
  var s;
  r === void 0 && (r = []), o === void 0 && (o = !0);
  const a = Yy(t),
    u = a === ((s = t.ownerDocument) == null ? void 0 : s.body),
    c = Pt(a);
  if (u) {
    const d = jc(c);
    return r.concat(
      c,
      c.visualViewport || [],
      Di(a) ? a : [],
      d && o ? Ri(d) : [],
    );
  }
  return r.concat(a, Ri(a, [], o));
}
function jc(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Xy(t) {
  const r = Ht(t);
  let o = parseFloat(r.width) || 0,
    s = parseFloat(r.height) || 0;
  const a = tn(t),
    u = a ? t.offsetWidth : o,
    c = a ? t.offsetHeight : s,
    d = wa(o) !== u || wa(s) !== c;
  return d && ((o = u), (s = c)), { width: o, height: s, $: d };
}
function Vd(t) {
  return Wt(t) ? t : t.contextElement;
}
function so(t) {
  const r = Vd(t);
  if (!tn(r)) return en(1);
  const o = r.getBoundingClientRect(),
    { width: s, height: a, $: u } = Xy(r);
  let c = (u ? wa(o.width) : o.width) / s,
    d = (u ? wa(o.height) : o.height) / a;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    { x: c, y: d }
  );
}
const S2 = en(0);
function Qy(t) {
  const r = Pt(t);
  return !_d() || !r.visualViewport
    ? S2
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function C2(t, r, o) {
  return r === void 0 && (r = !1), !o || (r && o !== Pt(t)) ? !1 : r;
}
function Sr(t, r, o, s) {
  r === void 0 && (r = !1), o === void 0 && (o = !1);
  const a = t.getBoundingClientRect(),
    u = Vd(t);
  let c = en(1);
  r && (s ? Wt(s) && (c = so(s)) : (c = so(t)));
  const d = C2(u, o, s) ? Qy(u) : en(0);
  let p = (a.left + d.x) / c.x,
    m = (a.top + d.y) / c.y,
    g = a.width / c.x,
    v = a.height / c.y;
  if (u) {
    const y = Pt(u),
      C = s && Wt(s) ? Pt(s) : s;
    let P = y,
      S = jc(P);
    for (; S && s && C !== P; ) {
      const T = so(S),
        E = S.getBoundingClientRect(),
        b = Ht(S),
        N = E.left + (S.clientLeft + parseFloat(b.paddingLeft)) * T.x,
        L = E.top + (S.clientTop + parseFloat(b.paddingTop)) * T.y;
      (p *= T.x),
        (m *= T.y),
        (g *= T.x),
        (v *= T.y),
        (p += N),
        (m += L),
        (P = Pt(S)),
        (S = jc(P));
    }
  }
  return Ca({ width: g, height: v, x: p, y: m });
}
function Fd(t, r) {
  const o = Ia(t).scrollLeft;
  return r ? r.left + o : Sr(nn(t)).left + o;
}
function qy(t, r, o) {
  o === void 0 && (o = !1);
  const s = t.getBoundingClientRect(),
    a = s.left + r.scrollLeft - (o ? 0 : Fd(t, s)),
    u = s.top + r.scrollTop;
  return { x: a, y: u };
}
function k2(t) {
  let { elements: r, rect: o, offsetParent: s, strategy: a } = t;
  const u = a === "fixed",
    c = nn(s),
    d = r ? Da(r.floating) : !1;
  if (s === c || (d && u)) return o;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = en(1);
  const g = en(0),
    v = tn(s);
  if (
    (v || (!v && !u)) &&
    ((xo(s) !== "body" || Di(c)) && (p = Ia(s)), tn(s))
  ) {
    const C = Sr(s);
    (m = so(s)), (g.x = C.x + s.clientLeft), (g.y = C.y + s.clientTop);
  }
  const y = c && !v && !u ? qy(c, p, !0) : en(0);
  return {
    width: o.width * m.x,
    height: o.height * m.y,
    x: o.x * m.x - p.scrollLeft * m.x + g.x + y.x,
    y: o.y * m.y - p.scrollTop * m.y + g.y + y.y,
  };
}
function T2(t) {
  return Array.from(t.getClientRects());
}
function P2(t) {
  const r = nn(t),
    o = Ia(t),
    s = t.ownerDocument.body,
    a = kt(r.scrollWidth, r.clientWidth, s.scrollWidth, s.clientWidth),
    u = kt(r.scrollHeight, r.clientHeight, s.scrollHeight, s.clientHeight);
  let c = -o.scrollLeft + Fd(t);
  const d = -o.scrollTop;
  return (
    Ht(s).direction === "rtl" && (c += kt(r.clientWidth, s.clientWidth) - a),
    { width: a, height: u, x: c, y: d }
  );
}
function E2(t, r) {
  const o = Pt(t),
    s = nn(t),
    a = o.visualViewport;
  let u = s.clientWidth,
    c = s.clientHeight,
    d = 0,
    p = 0;
  if (a) {
    (u = a.width), (c = a.height);
    const m = _d();
    (!m || (m && r === "fixed")) && ((d = a.offsetLeft), (p = a.offsetTop));
  }
  return { width: u, height: c, x: d, y: p };
}
function R2(t, r) {
  const o = Sr(t, !0, r === "fixed"),
    s = o.top + t.clientTop,
    a = o.left + t.clientLeft,
    u = tn(t) ? so(t) : en(1),
    c = t.clientWidth * u.x,
    d = t.clientHeight * u.y,
    p = a * u.x,
    m = s * u.y;
  return { width: c, height: d, x: p, y: m };
}
function Eg(t, r, o) {
  let s;
  if (r === "viewport") s = E2(t, o);
  else if (r === "document") s = P2(nn(t));
  else if (Wt(r)) s = R2(r, o);
  else {
    const a = Qy(t);
    s = { x: r.x - a.x, y: r.y - a.y, width: r.width, height: r.height };
  }
  return Ca(s);
}
function Zy(t, r) {
  const o = Jn(t);
  return o === r || !Wt(o) || po(o)
    ? !1
    : Ht(o).position === "fixed" || Zy(o, r);
}
function b2(t, r) {
  const o = r.get(t);
  if (o) return o;
  let s = Ri(t, [], !1).filter((d) => Wt(d) && xo(d) !== "body"),
    a = null;
  const u = Ht(t).position === "fixed";
  let c = u ? Jn(t) : t;
  for (; Wt(c) && !po(c); ) {
    const d = Ht(c),
      p = Od(c);
    !p && d.position === "fixed" && (a = null),
      (
        u
          ? !p && !a
          : (!p &&
              d.position === "static" &&
              !!a &&
              ["absolute", "fixed"].includes(a.position)) ||
            (Di(c) && !p && Zy(t, c))
      )
        ? (s = s.filter((g) => g !== c))
        : (a = d),
      (c = Jn(c));
  }
  return r.set(t, s), s;
}
function A2(t) {
  let { element: r, boundary: o, rootBoundary: s, strategy: a } = t;
  const c = [
      ...(o === "clippingAncestors"
        ? Da(r)
          ? []
          : b2(r, this._c)
        : [].concat(o)),
      s,
    ],
    d = c[0],
    p = c.reduce(
      (m, g) => {
        const v = Eg(r, g, a);
        return (
          (m.top = kt(v.top, m.top)),
          (m.right = qn(v.right, m.right)),
          (m.bottom = qn(v.bottom, m.bottom)),
          (m.left = kt(v.left, m.left)),
          m
        );
      },
      Eg(r, d, a),
    );
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top,
  };
}
function N2(t) {
  const { width: r, height: o } = Xy(t);
  return { width: r, height: o };
}
function M2(t, r, o) {
  const s = tn(r),
    a = nn(r),
    u = o === "fixed",
    c = Sr(t, !0, u, r);
  let d = { scrollLeft: 0, scrollTop: 0 };
  const p = en(0);
  if (s || (!s && !u))
    if (((xo(r) !== "body" || Di(a)) && (d = Ia(r)), s)) {
      const y = Sr(r, !0, u, r);
      (p.x = y.x + r.clientLeft), (p.y = y.y + r.clientTop);
    } else a && (p.x = Fd(a));
  const m = a && !s && !u ? qy(a, d) : en(0),
    g = c.left + d.scrollLeft - p.x - m.x,
    v = c.top + d.scrollTop - p.y - m.y;
  return { x: g, y: v, width: c.width, height: c.height };
}
function rc(t) {
  return Ht(t).position === "static";
}
function Rg(t, r) {
  if (!tn(t) || Ht(t).position === "fixed") return null;
  if (r) return r(t);
  let o = t.offsetParent;
  return nn(t) === o && (o = o.ownerDocument.body), o;
}
function Jy(t, r) {
  const o = Pt(t);
  if (Da(t)) return o;
  if (!tn(t)) {
    let a = Jn(t);
    for (; a && !po(a); ) {
      if (Wt(a) && !rc(a)) return a;
      a = Jn(a);
    }
    return o;
  }
  let s = Rg(t, r);
  for (; s && x2(s) && rc(s); ) s = Rg(s, r);
  return s && po(s) && rc(s) && !Od(s) ? o : s || w2(t) || o;
}
const j2 = async function (t) {
  const r = this.getOffsetParent || Jy,
    o = this.getDimensions,
    s = await o(t.floating);
  return {
    reference: M2(t.reference, await r(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function L2(t) {
  return Ht(t).direction === "rtl";
}
const D2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: k2,
  getDocumentElement: nn,
  getClippingRect: A2,
  getOffsetParent: Jy,
  getElementRects: j2,
  getClientRects: T2,
  getDimensions: N2,
  getScale: so,
  isElement: Wt,
  isRTL: L2,
};
function I2(t, r) {
  let o = null,
    s;
  const a = nn(t);
  function u() {
    var d;
    clearTimeout(s), (d = o) == null || d.disconnect(), (o = null);
  }
  function c(d, p) {
    d === void 0 && (d = !1), p === void 0 && (p = 1), u();
    const { left: m, top: g, width: v, height: y } = t.getBoundingClientRect();
    if ((d || r(), !v || !y)) return;
    const C = Zs(g),
      P = Zs(a.clientWidth - (m + v)),
      S = Zs(a.clientHeight - (g + y)),
      T = Zs(m),
      b = {
        rootMargin: -C + "px " + -P + "px " + -S + "px " + -T + "px",
        threshold: kt(0, qn(1, p)) || 1,
      };
    let N = !0;
    function L(I) {
      const B = I[0].intersectionRatio;
      if (B !== p) {
        if (!N) return c();
        B
          ? c(!1, B)
          : (s = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      N = !1;
    }
    try {
      o = new IntersectionObserver(L, { ...b, root: a.ownerDocument });
    } catch {
      o = new IntersectionObserver(L, b);
    }
    o.observe(t);
  }
  return c(!0), u;
}
function O2(t, r, o, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: u = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: d = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = s,
    m = Vd(t),
    g = a || u ? [...(m ? Ri(m) : []), ...Ri(r)] : [];
  g.forEach((E) => {
    a && E.addEventListener("scroll", o, { passive: !0 }),
      u && E.addEventListener("resize", o);
  });
  const v = m && d ? I2(m, o) : null;
  let y = -1,
    C = null;
  c &&
    ((C = new ResizeObserver((E) => {
      let [b] = E;
      b &&
        b.target === m &&
        C &&
        (C.unobserve(r),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          var N;
          (N = C) == null || N.observe(r);
        }))),
        o();
    })),
    m && !p && C.observe(m),
    C.observe(r));
  let P,
    S = p ? Sr(t) : null;
  p && T();
  function T() {
    const E = Sr(t);
    S &&
      (E.x !== S.x ||
        E.y !== S.y ||
        E.width !== S.width ||
        E.height !== S.height) &&
      o(),
      (S = E),
      (P = requestAnimationFrame(T));
  }
  return (
    o(),
    () => {
      var E;
      g.forEach((b) => {
        a && b.removeEventListener("scroll", o),
          u && b.removeEventListener("resize", o);
      }),
        v == null || v(),
        (E = C) == null || E.disconnect(),
        (C = null),
        p && cancelAnimationFrame(P);
    }
  );
}
const _2 = m2,
  V2 = g2,
  F2 = f2,
  z2 = y2,
  B2 = p2,
  bg = d2,
  U2 = v2,
  $2 = (t, r, o) => {
    const s = new Map(),
      a = { platform: D2, ...o },
      u = { ...a.platform, _c: s };
    return c2(t, r, { ...a, platform: u });
  };
var aa = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function ka(t, r) {
  if (t === r) return !0;
  if (typeof t != typeof r) return !1;
  if (typeof t == "function" && t.toString() === r.toString()) return !0;
  let o, s, a;
  if (t && r && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((o = t.length), o !== r.length)) return !1;
      for (s = o; s-- !== 0; ) if (!ka(t[s], r[s])) return !1;
      return !0;
    }
    if (((a = Object.keys(t)), (o = a.length), o !== Object.keys(r).length))
      return !1;
    for (s = o; s-- !== 0; ) if (!{}.hasOwnProperty.call(r, a[s])) return !1;
    for (s = o; s-- !== 0; ) {
      const u = a[s];
      if (!(u === "_owner" && t.$$typeof) && !ka(t[u], r[u])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
}
function e0(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ag(t, r) {
  const o = e0(t);
  return Math.round(r * o) / o;
}
function oc(t) {
  const r = w.useRef(t);
  return (
    aa(() => {
      r.current = t;
    }),
    r
  );
}
function W2(t) {
  t === void 0 && (t = {});
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: a,
      elements: { reference: u, floating: c } = {},
      transform: d = !0,
      whileElementsMounted: p,
      open: m,
    } = t,
    [g, v] = w.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [y, C] = w.useState(s);
  ka(y, s) || C(s);
  const [P, S] = w.useState(null),
    [T, E] = w.useState(null),
    b = w.useCallback((V) => {
      V !== B.current && ((B.current = V), S(V));
    }, []),
    N = w.useCallback((V) => {
      V !== z.current && ((z.current = V), E(V));
    }, []),
    L = u || P,
    I = c || T,
    B = w.useRef(null),
    z = w.useRef(null),
    W = w.useRef(g),
    te = p != null,
    oe = oc(p),
    ge = oc(a),
    Z = oc(m),
    fe = w.useCallback(() => {
      if (!B.current || !z.current) return;
      const V = { placement: r, strategy: o, middleware: y };
      ge.current && (V.platform = ge.current),
        $2(B.current, z.current, V).then((Y) => {
          const K = { ...Y, isPositioned: Z.current !== !1 };
          le.current &&
            !ka(W.current, K) &&
            ((W.current = K),
            Li.flushSync(() => {
              v(K);
            }));
        });
    }, [y, r, o, ge, Z]);
  aa(() => {
    m === !1 &&
      W.current.isPositioned &&
      ((W.current.isPositioned = !1), v((V) => ({ ...V, isPositioned: !1 })));
  }, [m]);
  const le = w.useRef(!1);
  aa(
    () => (
      (le.current = !0),
      () => {
        le.current = !1;
      }
    ),
    [],
  ),
    aa(() => {
      if ((L && (B.current = L), I && (z.current = I), L && I)) {
        if (oe.current) return oe.current(L, I, fe);
        fe();
      }
    }, [L, I, fe, oe, te]);
  const Ce = w.useMemo(
      () => ({ reference: B, floating: z, setReference: b, setFloating: N }),
      [b, N],
    ),
    ie = w.useMemo(() => ({ reference: L, floating: I }), [L, I]),
    X = w.useMemo(() => {
      const V = { position: o, left: 0, top: 0 };
      if (!ie.floating) return V;
      const Y = Ag(ie.floating, g.x),
        K = Ag(ie.floating, g.y);
      return d
        ? {
            ...V,
            transform: "translate(" + Y + "px, " + K + "px)",
            ...(e0(ie.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: Y, top: K };
    }, [o, d, ie.floating, g.x, g.y]);
  return w.useMemo(
    () => ({ ...g, update: fe, refs: Ce, elements: ie, floatingStyles: X }),
    [g, fe, Ce, ie, X],
  );
}
const H2 = (t) => {
    function r(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(o) {
        const { element: s, padding: a } = typeof t == "function" ? t(o) : t;
        return s && r(s)
          ? s.current != null
            ? bg({ element: s.current, padding: a }).fn(o)
            : {}
          : s
            ? bg({ element: s, padding: a }).fn(o)
            : {};
      },
    };
  },
  K2 = (t, r) => ({ ..._2(t), options: [t, r] }),
  G2 = (t, r) => ({ ...V2(t), options: [t, r] }),
  Y2 = (t, r) => ({ ...U2(t), options: [t, r] }),
  X2 = (t, r) => ({ ...F2(t), options: [t, r] }),
  Q2 = (t, r) => ({ ...z2(t), options: [t, r] }),
  q2 = (t, r) => ({ ...B2(t), options: [t, r] }),
  Z2 = (t, r) => ({ ...H2(t), options: [t, r] });
var J2 = "Arrow",
  t0 = w.forwardRef((t, r) => {
    const { children: o, width: s = 10, height: a = 5, ...u } = t;
    return k.jsx(Ne.svg, {
      ...u,
      ref: r,
      width: s,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? o : k.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
t0.displayName = J2;
var eR = t0,
  zd = "Popper",
  [n0, Oa] = vo(zd),
  [tR, r0] = n0(zd),
  o0 = (t) => {
    const { __scopePopper: r, children: o } = t,
      [s, a] = w.useState(null);
    return k.jsx(tR, { scope: r, anchor: s, onAnchorChange: a, children: o });
  };
o0.displayName = zd;
var i0 = "PopperAnchor",
  s0 = w.forwardRef((t, r) => {
    const { __scopePopper: o, virtualRef: s, ...a } = t,
      u = r0(i0, o),
      c = w.useRef(null),
      d = $e(r, c);
    return (
      w.useEffect(() => {
        u.onAnchorChange((s == null ? void 0 : s.current) || c.current);
      }),
      s ? null : k.jsx(Ne.div, { ...a, ref: d })
    );
  });
s0.displayName = i0;
var Bd = "PopperContent",
  [nR, rR] = n0(Bd),
  a0 = w.forwardRef((t, r) => {
    var Q, se, ye, ae, ve, Te;
    const {
        __scopePopper: o,
        side: s = "bottom",
        sideOffset: a = 0,
        align: u = "center",
        alignOffset: c = 0,
        arrowPadding: d = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: g = 0,
        sticky: v = "partial",
        hideWhenDetached: y = !1,
        updatePositionStrategy: C = "optimized",
        onPlaced: P,
        ...S
      } = t,
      T = r0(Bd, o),
      [E, b] = w.useState(null),
      N = $e(r, (Ge) => b(Ge)),
      [L, I] = w.useState(null),
      B = Ed(L),
      z = (B == null ? void 0 : B.width) ?? 0,
      W = (B == null ? void 0 : B.height) ?? 0,
      te = s + (u !== "center" ? "-" + u : ""),
      oe =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      ge = Array.isArray(m) ? m : [m],
      Z = ge.length > 0,
      fe = { padding: oe, boundary: ge.filter(iR), altBoundary: Z },
      {
        refs: le,
        floatingStyles: Ce,
        placement: ie,
        isPositioned: X,
        middlewareData: V,
      } = W2({
        strategy: "fixed",
        placement: te,
        whileElementsMounted: (...Ge) =>
          O2(...Ge, { animationFrame: C === "always" }),
        elements: { reference: T.anchor },
        middleware: [
          K2({ mainAxis: a + W, alignmentAxis: c }),
          p &&
            G2({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? Y2() : void 0,
              ...fe,
            }),
          p && X2({ ...fe }),
          Q2({
            ...fe,
            apply: ({
              elements: Ge,
              rects: ft,
              availableWidth: Sn,
              availableHeight: Cn,
            }) => {
              const { width: rn, height: _i } = ft.reference,
                kn = Ge.floating.style;
              kn.setProperty("--radix-popper-available-width", `${Sn}px`),
                kn.setProperty("--radix-popper-available-height", `${Cn}px`),
                kn.setProperty("--radix-popper-anchor-width", `${rn}px`),
                kn.setProperty("--radix-popper-anchor-height", `${_i}px`);
            },
          }),
          L && Z2({ element: L, padding: d }),
          sR({ arrowWidth: z, arrowHeight: W }),
          y && q2({ strategy: "referenceHidden", ...fe }),
        ],
      }),
      [Y, K] = c0(ie),
      j = yn(P);
    dt(() => {
      X && (j == null || j());
    }, [X, j]);
    const F = (Q = V.arrow) == null ? void 0 : Q.x,
      he = (se = V.arrow) == null ? void 0 : se.y,
      pe = ((ye = V.arrow) == null ? void 0 : ye.centerOffset) !== 0,
      [we, xe] = w.useState();
    return (
      dt(() => {
        E && xe(window.getComputedStyle(E).zIndex);
      }, [E]),
      k.jsx("div", {
        ref: le.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Ce,
          transform: X ? Ce.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: we,
          "--radix-popper-transform-origin": [
            (ae = V.transformOrigin) == null ? void 0 : ae.x,
            (ve = V.transformOrigin) == null ? void 0 : ve.y,
          ].join(" "),
          ...(((Te = V.hide) == null ? void 0 : Te.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: k.jsx(nR, {
          scope: o,
          placedSide: Y,
          onArrowChange: I,
          arrowX: F,
          arrowY: he,
          shouldHideArrow: pe,
          children: k.jsx(Ne.div, {
            "data-side": Y,
            "data-align": K,
            ...S,
            ref: N,
            style: { ...S.style, animation: X ? void 0 : "none" },
          }),
        }),
      })
    );
  });
a0.displayName = Bd;
var l0 = "PopperArrow",
  oR = { top: "bottom", right: "left", bottom: "top", left: "right" },
  u0 = w.forwardRef(function (r, o) {
    const { __scopePopper: s, ...a } = r,
      u = rR(l0, s),
      c = oR[u.placedSide];
    return k.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: k.jsx(eR, {
        ...a,
        ref: o,
        style: { ...a.style, display: "block" },
      }),
    });
  });
u0.displayName = l0;
function iR(t) {
  return t !== null;
}
var sR = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(r) {
    var T, E, b;
    const { placement: o, rects: s, middlewareData: a } = r,
      c = ((T = a.arrow) == null ? void 0 : T.centerOffset) !== 0,
      d = c ? 0 : t.arrowWidth,
      p = c ? 0 : t.arrowHeight,
      [m, g] = c0(o),
      v = { start: "0%", center: "50%", end: "100%" }[g],
      y = (((E = a.arrow) == null ? void 0 : E.x) ?? 0) + d / 2,
      C = (((b = a.arrow) == null ? void 0 : b.y) ?? 0) + p / 2;
    let P = "",
      S = "";
    return (
      m === "bottom"
        ? ((P = c ? v : `${y}px`), (S = `${-p}px`))
        : m === "top"
          ? ((P = c ? v : `${y}px`), (S = `${s.floating.height + p}px`))
          : m === "right"
            ? ((P = `${-p}px`), (S = c ? v : `${C}px`))
            : m === "left" &&
              ((P = `${s.floating.width + p}px`), (S = c ? v : `${C}px`)),
      { data: { x: P, y: S } }
    );
  },
});
function c0(t) {
  const [r, o = "center"] = t.split("-");
  return [r, o];
}
var d0 = o0,
  f0 = s0,
  p0 = a0,
  h0 = u0,
  aR = "Portal",
  Ud = w.forwardRef((t, r) => {
    var d;
    const { container: o, ...s } = t,
      [a, u] = w.useState(!1);
    dt(() => u(!0), []);
    const c =
      o ||
      (a &&
        ((d = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : d.body));
    return c ? rE.createPortal(k.jsx(Ne.div, { ...s, ref: r }), c) : null;
  });
Ud.displayName = aR;
var lR = "VisuallyHidden",
  $d = w.forwardRef((t, r) =>
    k.jsx(Ne.span, {
      ...t,
      ref: r,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...t.style,
      },
    }),
  );
$d.displayName = lR;
var uR = $d,
  cR = function (t) {
    if (typeof document > "u") return null;
    var r = Array.isArray(t) ? t[0] : t;
    return r.ownerDocument.body;
  },
  Xr = new WeakMap(),
  Js = new WeakMap(),
  ea = {},
  ic = 0,
  m0 = function (t) {
    return t && (t.host || m0(t.parentNode));
  },
  dR = function (t, r) {
    return r
      .map(function (o) {
        if (t.contains(o)) return o;
        var s = m0(o);
        return s && t.contains(s)
          ? s
          : (console.error(
              "aria-hidden",
              o,
              "in not contained inside",
              t,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (o) {
        return !!o;
      });
  },
  fR = function (t, r, o, s) {
    var a = dR(r, Array.isArray(t) ? t : [t]);
    ea[o] || (ea[o] = new WeakMap());
    var u = ea[o],
      c = [],
      d = new Set(),
      p = new Set(a),
      m = function (v) {
        !v || d.has(v) || (d.add(v), m(v.parentNode));
      };
    a.forEach(m);
    var g = function (v) {
      !v ||
        p.has(v) ||
        Array.prototype.forEach.call(v.children, function (y) {
          if (d.has(y)) g(y);
          else
            try {
              var C = y.getAttribute(s),
                P = C !== null && C !== "false",
                S = (Xr.get(y) || 0) + 1,
                T = (u.get(y) || 0) + 1;
              Xr.set(y, S),
                u.set(y, T),
                c.push(y),
                S === 1 && P && Js.set(y, !0),
                T === 1 && y.setAttribute(o, "true"),
                P || y.setAttribute(s, "true");
            } catch (E) {
              console.error("aria-hidden: cannot operate on ", y, E);
            }
        });
    };
    return (
      g(r),
      d.clear(),
      ic++,
      function () {
        c.forEach(function (v) {
          var y = Xr.get(v) - 1,
            C = u.get(v) - 1;
          Xr.set(v, y),
            u.set(v, C),
            y || (Js.has(v) || v.removeAttribute(s), Js.delete(v)),
            C || v.removeAttribute(o);
        }),
          ic--,
          ic ||
            ((Xr = new WeakMap()),
            (Xr = new WeakMap()),
            (Js = new WeakMap()),
            (ea = {}));
      }
    );
  },
  pR = function (t, r, o) {
    o === void 0 && (o = "data-aria-hidden");
    var s = Array.from(Array.isArray(t) ? t : [t]),
      a = cR(t);
    return a
      ? (s.push.apply(s, Array.from(a.querySelectorAll("[aria-live]"))),
        fR(s, a, o, "aria-hidden"))
      : function () {
          return null;
        };
  },
  qt = function () {
    return (
      (qt =
        Object.assign ||
        function (r) {
          for (var o, s = 1, a = arguments.length; s < a; s++) {
            o = arguments[s];
            for (var u in o)
              Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
          }
          return r;
        }),
      qt.apply(this, arguments)
    );
  };
function g0(t, r) {
  var o = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) &&
      r.indexOf(s) < 0 &&
      (o[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(t); a < s.length; a++)
      r.indexOf(s[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, s[a]) &&
        (o[s[a]] = t[s[a]]);
  return o;
}
function hR(t, r, o) {
  if (o || arguments.length === 2)
    for (var s = 0, a = r.length, u; s < a; s++)
      (u || !(s in r)) &&
        (u || (u = Array.prototype.slice.call(r, 0, s)), (u[s] = r[s]));
  return t.concat(u || Array.prototype.slice.call(r));
}
var la = "right-scroll-bar-position",
  ua = "width-before-scroll-bar",
  mR = "with-scroll-bars-hidden",
  gR = "--removed-body-scroll-bar-size";
function sc(t, r) {
  return typeof t == "function" ? t(r) : t && (t.current = r), t;
}
function vR(t, r) {
  var o = w.useState(function () {
    return {
      value: t,
      callback: r,
      facade: {
        get current() {
          return o.value;
        },
        set current(s) {
          var a = o.value;
          a !== s && ((o.value = s), o.callback(s, a));
        },
      },
    };
  })[0];
  return (o.callback = r), o.facade;
}
var yR = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Ng = new WeakMap();
function xR(t, r) {
  var o = vR(null, function (s) {
    return t.forEach(function (a) {
      return sc(a, s);
    });
  });
  return (
    yR(
      function () {
        var s = Ng.get(o);
        if (s) {
          var a = new Set(s),
            u = new Set(t),
            c = o.current;
          a.forEach(function (d) {
            u.has(d) || sc(d, null);
          }),
            u.forEach(function (d) {
              a.has(d) || sc(d, c);
            });
        }
        Ng.set(o, t);
      },
      [t],
    ),
    o
  );
}
function wR(t) {
  return t;
}
function SR(t, r) {
  r === void 0 && (r = wR);
  var o = [],
    s = !1,
    a = {
      read: function () {
        if (s)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return o.length ? o[o.length - 1] : t;
      },
      useMedium: function (u) {
        var c = r(u, s);
        return (
          o.push(c),
          function () {
            o = o.filter(function (d) {
              return d !== c;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (s = !0; o.length; ) {
          var c = o;
          (o = []), c.forEach(u);
        }
        o = {
          push: function (d) {
            return u(d);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (u) {
        s = !0;
        var c = [];
        if (o.length) {
          var d = o;
          (o = []), d.forEach(u), (c = o);
        }
        var p = function () {
            var g = c;
            (c = []), g.forEach(u);
          },
          m = function () {
            return Promise.resolve().then(p);
          };
        m(),
          (o = {
            push: function (g) {
              c.push(g), m();
            },
            filter: function (g) {
              return (c = c.filter(g)), o;
            },
          });
      },
    };
  return a;
}
function CR(t) {
  t === void 0 && (t = {});
  var r = SR(null);
  return (r.options = qt({ async: !0, ssr: !1 }, t)), r;
}
var v0 = function (t) {
  var r = t.sideCar,
    o = g0(t, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var s = r.read();
  if (!s) throw new Error("Sidecar medium not found");
  return w.createElement(s, qt({}, o));
};
v0.isSideCarExport = !0;
function kR(t, r) {
  return t.useMedium(r), v0;
}
var y0 = CR(),
  ac = function () {},
  _a = w.forwardRef(function (t, r) {
    var o = w.useRef(null),
      s = w.useState({
        onScrollCapture: ac,
        onWheelCapture: ac,
        onTouchMoveCapture: ac,
      }),
      a = s[0],
      u = s[1],
      c = t.forwardProps,
      d = t.children,
      p = t.className,
      m = t.removeScrollBar,
      g = t.enabled,
      v = t.shards,
      y = t.sideCar,
      C = t.noIsolation,
      P = t.inert,
      S = t.allowPinchZoom,
      T = t.as,
      E = T === void 0 ? "div" : T,
      b = t.gapMode,
      N = g0(t, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      L = y,
      I = xR([o, r]),
      B = qt(qt({}, N), a);
    return w.createElement(
      w.Fragment,
      null,
      g &&
        w.createElement(L, {
          sideCar: y0,
          removeScrollBar: m,
          shards: v,
          noIsolation: C,
          inert: P,
          setCallbacks: u,
          allowPinchZoom: !!S,
          lockRef: o,
          gapMode: b,
        }),
      c
        ? w.cloneElement(w.Children.only(d), qt(qt({}, B), { ref: I }))
        : w.createElement(E, qt({}, B, { className: p, ref: I }), d),
    );
  });
_a.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
_a.classNames = { fullWidth: ua, zeroRight: la };
var TR = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function PR() {
  if (!document) return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var r = TR();
  return r && t.setAttribute("nonce", r), t;
}
function ER(t, r) {
  t.styleSheet
    ? (t.styleSheet.cssText = r)
    : t.appendChild(document.createTextNode(r));
}
function RR(t) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(t);
}
var bR = function () {
    var t = 0,
      r = null;
    return {
      add: function (o) {
        t == 0 && (r = PR()) && (ER(r, o), RR(r)), t++;
      },
      remove: function () {
        t--,
          !t && r && (r.parentNode && r.parentNode.removeChild(r), (r = null));
      },
    };
  },
  AR = function () {
    var t = bR();
    return function (r, o) {
      w.useEffect(
        function () {
          return (
            t.add(r),
            function () {
              t.remove();
            }
          );
        },
        [r && o],
      );
    };
  },
  x0 = function () {
    var t = AR(),
      r = function (o) {
        var s = o.styles,
          a = o.dynamic;
        return t(s, a), null;
      };
    return r;
  },
  NR = { left: 0, top: 0, right: 0, gap: 0 },
  lc = function (t) {
    return parseInt(t || "", 10) || 0;
  },
  MR = function (t) {
    var r = window.getComputedStyle(document.body),
      o = r[t === "padding" ? "paddingLeft" : "marginLeft"],
      s = r[t === "padding" ? "paddingTop" : "marginTop"],
      a = r[t === "padding" ? "paddingRight" : "marginRight"];
    return [lc(o), lc(s), lc(a)];
  },
  jR = function (t) {
    if ((t === void 0 && (t = "margin"), typeof window > "u")) return NR;
    var r = MR(t),
      o = document.documentElement.clientWidth,
      s = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, s - o + r[2] - r[0]),
    };
  },
  LR = x0(),
  ao = "data-scroll-locked",
  DR = function (t, r, o, s) {
    var a = t.left,
      u = t.top,
      c = t.right,
      d = t.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          mR,
          ` {
   overflow: hidden `,
        )
        .concat(
          s,
          `;
   padding-right: `,
        )
        .concat(d, "px ")
        .concat(
          s,
          `;
  }
  body[`,
        )
        .concat(
          ao,
          `] {
    overflow: hidden `,
        )
        .concat(
          s,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(s, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  a,
                  `px;
    padding-top: `,
                )
                .concat(
                  u,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(d, "px ")
                .concat(
                  s,
                  `;
    `,
                ),
            o === "padding" &&
              "padding-right: ".concat(d, "px ").concat(s, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          la,
          ` {
    right: `,
        )
        .concat(d, "px ")
        .concat(
          s,
          `;
  }
  
  .`,
        )
        .concat(
          ua,
          ` {
    margin-right: `,
        )
        .concat(d, "px ")
        .concat(
          s,
          `;
  }
  
  .`,
        )
        .concat(la, " .")
        .concat(
          la,
          ` {
    right: 0 `,
        )
        .concat(
          s,
          `;
  }
  
  .`,
        )
        .concat(ua, " .")
        .concat(
          ua,
          ` {
    margin-right: 0 `,
        )
        .concat(
          s,
          `;
  }
  
  body[`,
        )
        .concat(
          ao,
          `] {
    `,
        )
        .concat(gR, ": ")
        .concat(
          d,
          `px;
  }
`,
        )
    );
  },
  Mg = function () {
    var t = parseInt(document.body.getAttribute(ao) || "0", 10);
    return isFinite(t) ? t : 0;
  },
  IR = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(ao, (Mg() + 1).toString()),
        function () {
          var t = Mg() - 1;
          t <= 0
            ? document.body.removeAttribute(ao)
            : document.body.setAttribute(ao, t.toString());
        }
      );
    }, []);
  },
  OR = function (t) {
    var r = t.noRelative,
      o = t.noImportant,
      s = t.gapMode,
      a = s === void 0 ? "margin" : s;
    IR();
    var u = w.useMemo(
      function () {
        return jR(a);
      },
      [a],
    );
    return w.createElement(LR, { styles: DR(u, !r, a, o ? "" : "!important") });
  },
  Lc = !1;
if (typeof window < "u")
  try {
    var ta = Object.defineProperty({}, "passive", {
      get: function () {
        return (Lc = !0), !0;
      },
    });
    window.addEventListener("test", ta, ta),
      window.removeEventListener("test", ta, ta);
  } catch {
    Lc = !1;
  }
var Qr = Lc ? { passive: !1 } : !1,
  _R = function (t) {
    return t.tagName === "TEXTAREA";
  },
  w0 = function (t, r) {
    if (!(t instanceof Element)) return !1;
    var o = window.getComputedStyle(t);
    return (
      o[r] !== "hidden" &&
      !(o.overflowY === o.overflowX && !_R(t) && o[r] === "visible")
    );
  },
  VR = function (t) {
    return w0(t, "overflowY");
  },
  FR = function (t) {
    return w0(t, "overflowX");
  },
  jg = function (t, r) {
    var o = r.ownerDocument,
      s = r;
    do {
      typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
      var a = S0(t, s);
      if (a) {
        var u = C0(t, s),
          c = u[1],
          d = u[2];
        if (c > d) return !0;
      }
      s = s.parentNode;
    } while (s && s !== o.body);
    return !1;
  },
  zR = function (t) {
    var r = t.scrollTop,
      o = t.scrollHeight,
      s = t.clientHeight;
    return [r, o, s];
  },
  BR = function (t) {
    var r = t.scrollLeft,
      o = t.scrollWidth,
      s = t.clientWidth;
    return [r, o, s];
  },
  S0 = function (t, r) {
    return t === "v" ? VR(r) : FR(r);
  },
  C0 = function (t, r) {
    return t === "v" ? zR(r) : BR(r);
  },
  UR = function (t, r) {
    return t === "h" && r === "rtl" ? -1 : 1;
  },
  $R = function (t, r, o, s, a) {
    var u = UR(t, window.getComputedStyle(r).direction),
      c = u * s,
      d = o.target,
      p = r.contains(d),
      m = !1,
      g = c > 0,
      v = 0,
      y = 0;
    do {
      var C = C0(t, d),
        P = C[0],
        S = C[1],
        T = C[2],
        E = S - T - u * P;
      (P || E) && S0(t, d) && ((v += E), (y += P)),
        d instanceof ShadowRoot ? (d = d.host) : (d = d.parentNode);
    } while ((!p && d !== document.body) || (p && (r.contains(d) || r === d)));
    return (
      ((g && (Math.abs(v) < 1 || !a)) || (!g && (Math.abs(y) < 1 || !a))) &&
        (m = !0),
      m
    );
  },
  na = function (t) {
    return "changedTouches" in t
      ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
      : [0, 0];
  },
  Lg = function (t) {
    return [t.deltaX, t.deltaY];
  },
  Dg = function (t) {
    return t && "current" in t ? t.current : t;
  },
  WR = function (t, r) {
    return t[0] === r[0] && t[1] === r[1];
  },
  HR = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        t,
        ` {pointer-events: all;}
`,
      );
  },
  KR = 0,
  qr = [];
function GR(t) {
  var r = w.useRef([]),
    o = w.useRef([0, 0]),
    s = w.useRef(),
    a = w.useState(KR++)[0],
    u = w.useState(x0)[0],
    c = w.useRef(t);
  w.useEffect(
    function () {
      c.current = t;
    },
    [t],
  ),
    w.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add("block-interactivity-".concat(a));
          var S = hR([t.lockRef.current], (t.shards || []).map(Dg), !0).filter(
            Boolean,
          );
          return (
            S.forEach(function (T) {
              return T.classList.add("allow-interactivity-".concat(a));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(a)),
                S.forEach(function (T) {
                  return T.classList.remove("allow-interactivity-".concat(a));
                });
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards],
    );
  var d = w.useCallback(function (S, T) {
      if (
        ("touches" in S && S.touches.length === 2) ||
        (S.type === "wheel" && S.ctrlKey)
      )
        return !c.current.allowPinchZoom;
      var E = na(S),
        b = o.current,
        N = "deltaX" in S ? S.deltaX : b[0] - E[0],
        L = "deltaY" in S ? S.deltaY : b[1] - E[1],
        I,
        B = S.target,
        z = Math.abs(N) > Math.abs(L) ? "h" : "v";
      if ("touches" in S && z === "h" && B.type === "range") return !1;
      var W = jg(z, B);
      if (!W) return !0;
      if ((W ? (I = z) : ((I = z === "v" ? "h" : "v"), (W = jg(z, B))), !W))
        return !1;
      if (
        (!s.current && "changedTouches" in S && (N || L) && (s.current = I), !I)
      )
        return !0;
      var te = s.current || I;
      return $R(te, T, S, te === "h" ? N : L, !0);
    }, []),
    p = w.useCallback(function (S) {
      var T = S;
      if (!(!qr.length || qr[qr.length - 1] !== u)) {
        var E = "deltaY" in T ? Lg(T) : na(T),
          b = r.current.filter(function (I) {
            return (
              I.name === T.type &&
              (I.target === T.target || T.target === I.shadowParent) &&
              WR(I.delta, E)
            );
          })[0];
        if (b && b.should) {
          T.cancelable && T.preventDefault();
          return;
        }
        if (!b) {
          var N = (c.current.shards || [])
              .map(Dg)
              .filter(Boolean)
              .filter(function (I) {
                return I.contains(T.target);
              }),
            L = N.length > 0 ? d(T, N[0]) : !c.current.noIsolation;
          L && T.cancelable && T.preventDefault();
        }
      }
    }, []),
    m = w.useCallback(function (S, T, E, b) {
      var N = { name: S, delta: T, target: E, should: b, shadowParent: YR(E) };
      r.current.push(N),
        setTimeout(function () {
          r.current = r.current.filter(function (L) {
            return L !== N;
          });
        }, 1);
    }, []),
    g = w.useCallback(function (S) {
      (o.current = na(S)), (s.current = void 0);
    }, []),
    v = w.useCallback(function (S) {
      m(S.type, Lg(S), S.target, d(S, t.lockRef.current));
    }, []),
    y = w.useCallback(function (S) {
      m(S.type, na(S), S.target, d(S, t.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      qr.push(u),
      t.setCallbacks({
        onScrollCapture: v,
        onWheelCapture: v,
        onTouchMoveCapture: y,
      }),
      document.addEventListener("wheel", p, Qr),
      document.addEventListener("touchmove", p, Qr),
      document.addEventListener("touchstart", g, Qr),
      function () {
        (qr = qr.filter(function (S) {
          return S !== u;
        })),
          document.removeEventListener("wheel", p, Qr),
          document.removeEventListener("touchmove", p, Qr),
          document.removeEventListener("touchstart", g, Qr);
      }
    );
  }, []);
  var C = t.removeScrollBar,
    P = t.inert;
  return w.createElement(
    w.Fragment,
    null,
    P ? w.createElement(u, { styles: HR(a) }) : null,
    C ? w.createElement(OR, { gapMode: t.gapMode }) : null,
  );
}
function YR(t) {
  for (var r = null; t !== null; )
    t instanceof ShadowRoot && ((r = t.host), (t = t.host)), (t = t.parentNode);
  return r;
}
const XR = kR(y0, GR);
var k0 = w.forwardRef(function (t, r) {
  return w.createElement(_a, qt({}, t, { ref: r, sideCar: XR }));
});
k0.classNames = _a.classNames;
var QR = [" ", "Enter", "ArrowUp", "ArrowDown"],
  qR = [" ", "Enter"],
  Ii = "Select",
  [Va, Fa, ZR] = IE(Ii),
  [wo, eA] = vo(Ii, [ZR, Oa]),
  za = Oa(),
  [JR, tr] = wo(Ii),
  [eb, tb] = wo(Ii),
  T0 = (t) => {
    const {
        __scopeSelect: r,
        children: o,
        open: s,
        defaultOpen: a,
        onOpenChange: u,
        value: c,
        defaultValue: d,
        onValueChange: p,
        dir: m,
        name: g,
        autoComplete: v,
        disabled: y,
        required: C,
        form: P,
      } = t,
      S = za(r),
      [T, E] = w.useState(null),
      [b, N] = w.useState(null),
      [L, I] = w.useState(!1),
      B = _E(m),
      [z = !1, W] = Pi({ prop: s, defaultProp: a, onChange: u }),
      [te, oe] = Pi({ prop: c, defaultProp: d, onChange: p }),
      ge = w.useRef(null),
      Z = T ? P || !!T.closest("form") : !0,
      [fe, le] = w.useState(new Set()),
      Ce = Array.from(fe)
        .map((ie) => ie.props.value)
        .join(";");
    return k.jsx(d0, {
      ...S,
      children: k.jsxs(JR, {
        required: C,
        scope: r,
        trigger: T,
        onTriggerChange: E,
        valueNode: b,
        onValueNodeChange: N,
        valueNodeHasChildren: L,
        onValueNodeHasChildrenChange: I,
        contentId: ja(),
        value: te,
        onValueChange: oe,
        open: z,
        onOpenChange: W,
        dir: B,
        triggerPointerDownPosRef: ge,
        disabled: y,
        children: [
          k.jsx(Va.Provider, {
            scope: r,
            children: k.jsx(eb, {
              scope: t.__scopeSelect,
              onNativeOptionAdd: w.useCallback((ie) => {
                le((X) => new Set(X).add(ie));
              }, []),
              onNativeOptionRemove: w.useCallback((ie) => {
                le((X) => {
                  const V = new Set(X);
                  return V.delete(ie), V;
                });
              }, []),
              children: o,
            }),
          }),
          Z
            ? k.jsxs(
                Y0,
                {
                  "aria-hidden": !0,
                  required: C,
                  tabIndex: -1,
                  name: g,
                  autoComplete: v,
                  value: te,
                  onChange: (ie) => oe(ie.target.value),
                  disabled: y,
                  form: P,
                  children: [
                    te === void 0 ? k.jsx("option", { value: "" }) : null,
                    Array.from(fe),
                  ],
                },
                Ce,
              )
            : null,
        ],
      }),
    });
  };
T0.displayName = Ii;
var P0 = "SelectTrigger",
  E0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, disabled: s = !1, ...a } = t,
      u = za(o),
      c = tr(P0, o),
      d = c.disabled || s,
      p = $e(r, c.onTriggerChange),
      m = Fa(o),
      g = w.useRef("touch"),
      [v, y, C] = X0((S) => {
        const T = m().filter((N) => !N.disabled),
          E = T.find((N) => N.value === c.value),
          b = Q0(T, S, E);
        b !== void 0 && c.onValueChange(b.value);
      }),
      P = (S) => {
        d || (c.onOpenChange(!0), C()),
          S &&
            (c.triggerPointerDownPosRef.current = {
              x: Math.round(S.pageX),
              y: Math.round(S.pageY),
            });
      };
    return k.jsx(f0, {
      asChild: !0,
      ...u,
      children: k.jsx(Ne.button, {
        type: "button",
        role: "combobox",
        "aria-controls": c.contentId,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: d,
        "data-disabled": d ? "" : void 0,
        "data-placeholder": G0(c.value) ? "" : void 0,
        ...a,
        ref: p,
        onClick: be(a.onClick, (S) => {
          S.currentTarget.focus(), g.current !== "mouse" && P(S);
        }),
        onPointerDown: be(a.onPointerDown, (S) => {
          g.current = S.pointerType;
          const T = S.target;
          T.hasPointerCapture(S.pointerId) &&
            T.releasePointerCapture(S.pointerId),
            S.button === 0 &&
              S.ctrlKey === !1 &&
              S.pointerType === "mouse" &&
              (P(S), S.preventDefault());
        }),
        onKeyDown: be(a.onKeyDown, (S) => {
          const T = v.current !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) &&
            S.key.length === 1 &&
            y(S.key),
            !(T && S.key === " ") &&
              QR.includes(S.key) &&
              (P(), S.preventDefault());
        }),
      }),
    });
  });
E0.displayName = P0;
var R0 = "SelectValue",
  nb = w.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        className: s,
        style: a,
        children: u,
        placeholder: c = "",
        ...d
      } = t,
      p = tr(R0, o),
      { onValueNodeHasChildrenChange: m } = p,
      g = u !== void 0,
      v = $e(r, p.onValueNodeChange);
    return (
      dt(() => {
        m(g);
      }, [m, g]),
      k.jsx(Ne.span, {
        ...d,
        ref: v,
        style: { pointerEvents: "none" },
        children: G0(p.value) ? k.jsx(k.Fragment, { children: c }) : u,
      })
    );
  });
nb.displayName = R0;
var rb = "SelectIcon",
  b0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, children: s, ...a } = t;
    return k.jsx(Ne.span, {
      "aria-hidden": !0,
      ...a,
      ref: r,
      children: s || "▼",
    });
  });
b0.displayName = rb;
var ob = "SelectPortal",
  A0 = (t) => k.jsx(Ud, { asChild: !0, ...t });
A0.displayName = ob;
var Cr = "SelectContent",
  N0 = w.forwardRef((t, r) => {
    const o = tr(Cr, t.__scopeSelect),
      [s, a] = w.useState();
    if (
      (dt(() => {
        a(new DocumentFragment());
      }, []),
      !o.open)
    ) {
      const u = s;
      return u
        ? Li.createPortal(
            k.jsx(M0, {
              scope: t.__scopeSelect,
              children: k.jsx(Va.Slot, {
                scope: t.__scopeSelect,
                children: k.jsx("div", { children: t.children }),
              }),
            }),
            u,
          )
        : null;
    }
    return k.jsx(j0, { ...t, ref: r });
  });
N0.displayName = Cr;
var $t = 10,
  [M0, nr] = wo(Cr),
  ib = "SelectContentImpl",
  j0 = w.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        position: s = "item-aligned",
        onCloseAutoFocus: a,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        side: d,
        sideOffset: p,
        align: m,
        alignOffset: g,
        arrowPadding: v,
        collisionBoundary: y,
        collisionPadding: C,
        sticky: P,
        hideWhenDetached: S,
        avoidCollisions: T,
        ...E
      } = t,
      b = tr(Cr, o),
      [N, L] = w.useState(null),
      [I, B] = w.useState(null),
      z = $e(r, (Q) => L(Q)),
      [W, te] = w.useState(null),
      [oe, ge] = w.useState(null),
      Z = Fa(o),
      [fe, le] = w.useState(!1),
      Ce = w.useRef(!1);
    w.useEffect(() => {
      if (N) return pR(N);
    }, [N]),
      KE();
    const ie = w.useCallback(
        (Q) => {
          const [se, ...ye] = Z().map((Te) => Te.ref.current),
            [ae] = ye.slice(-1),
            ve = document.activeElement;
          for (const Te of Q)
            if (
              Te === ve ||
              (Te == null || Te.scrollIntoView({ block: "nearest" }),
              Te === se && I && (I.scrollTop = 0),
              Te === ae && I && (I.scrollTop = I.scrollHeight),
              Te == null || Te.focus(),
              document.activeElement !== ve)
            )
              return;
        },
        [Z, I],
      ),
      X = w.useCallback(() => ie([W, N]), [ie, W, N]);
    w.useEffect(() => {
      fe && X();
    }, [fe, X]);
    const { onOpenChange: V, triggerPointerDownPosRef: Y } = b;
    w.useEffect(() => {
      if (N) {
        let Q = { x: 0, y: 0 };
        const se = (ae) => {
            var ve, Te;
            Q = {
              x: Math.abs(
                Math.round(ae.pageX) -
                  (((ve = Y.current) == null ? void 0 : ve.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(ae.pageY) -
                  (((Te = Y.current) == null ? void 0 : Te.y) ?? 0),
              ),
            };
          },
          ye = (ae) => {
            Q.x <= 10 && Q.y <= 10
              ? ae.preventDefault()
              : N.contains(ae.target) || V(!1),
              document.removeEventListener("pointermove", se),
              (Y.current = null);
          };
        return (
          Y.current !== null &&
            (document.addEventListener("pointermove", se),
            document.addEventListener("pointerup", ye, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", se),
              document.removeEventListener("pointerup", ye, { capture: !0 });
          }
        );
      }
    }, [N, V, Y]),
      w.useEffect(() => {
        const Q = () => V(!1);
        return (
          window.addEventListener("blur", Q),
          window.addEventListener("resize", Q),
          () => {
            window.removeEventListener("blur", Q),
              window.removeEventListener("resize", Q);
          }
        );
      }, [V]);
    const [K, j] = X0((Q) => {
        const se = Z().filter((ve) => !ve.disabled),
          ye = se.find((ve) => ve.ref.current === document.activeElement),
          ae = Q0(se, Q, ye);
        ae && setTimeout(() => ae.ref.current.focus());
      }),
      F = w.useCallback(
        (Q, se, ye) => {
          const ae = !Ce.current && !ye;
          ((b.value !== void 0 && b.value === se) || ae) &&
            (te(Q), ae && (Ce.current = !0));
        },
        [b.value],
      ),
      he = w.useCallback(() => (N == null ? void 0 : N.focus()), [N]),
      pe = w.useCallback(
        (Q, se, ye) => {
          const ae = !Ce.current && !ye;
          ((b.value !== void 0 && b.value === se) || ae) && ge(Q);
        },
        [b.value],
      ),
      we = s === "popper" ? Dc : L0,
      xe =
        we === Dc
          ? {
              side: d,
              sideOffset: p,
              align: m,
              alignOffset: g,
              arrowPadding: v,
              collisionBoundary: y,
              collisionPadding: C,
              sticky: P,
              hideWhenDetached: S,
              avoidCollisions: T,
            }
          : {};
    return k.jsx(M0, {
      scope: o,
      content: N,
      viewport: I,
      onViewportChange: B,
      itemRefCallback: F,
      selectedItem: W,
      onItemLeave: he,
      itemTextRefCallback: pe,
      focusSelectedItem: X,
      selectedItemText: oe,
      position: s,
      isPositioned: fe,
      searchRef: K,
      children: k.jsx(k0, {
        as: fo,
        allowPinchZoom: !0,
        children: k.jsx(Wy, {
          asChild: !0,
          trapped: b.open,
          onMountAutoFocus: (Q) => {
            Q.preventDefault();
          },
          onUnmountAutoFocus: be(a, (Q) => {
            var se;
            (se = b.trigger) == null || se.focus({ preventScroll: !0 }),
              Q.preventDefault();
          }),
          children: k.jsx(jd, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            onFocusOutside: (Q) => Q.preventDefault(),
            onDismiss: () => b.onOpenChange(!1),
            children: k.jsx(we, {
              role: "listbox",
              id: b.contentId,
              "data-state": b.open ? "open" : "closed",
              dir: b.dir,
              onContextMenu: (Q) => Q.preventDefault(),
              ...E,
              ...xe,
              onPlaced: () => le(!0),
              ref: z,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...E.style,
              },
              onKeyDown: be(E.onKeyDown, (Q) => {
                const se = Q.ctrlKey || Q.altKey || Q.metaKey;
                if (
                  (Q.key === "Tab" && Q.preventDefault(),
                  !se && Q.key.length === 1 && j(Q.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(Q.key))
                ) {
                  let ae = Z()
                    .filter((ve) => !ve.disabled)
                    .map((ve) => ve.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(Q.key) &&
                      (ae = ae.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(Q.key))
                  ) {
                    const ve = Q.target,
                      Te = ae.indexOf(ve);
                    ae = ae.slice(Te + 1);
                  }
                  setTimeout(() => ie(ae)), Q.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
j0.displayName = ib;
var sb = "SelectItemAlignedPosition",
  L0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, onPlaced: s, ...a } = t,
      u = tr(Cr, o),
      c = nr(Cr, o),
      [d, p] = w.useState(null),
      [m, g] = w.useState(null),
      v = $e(r, (z) => g(z)),
      y = Fa(o),
      C = w.useRef(!1),
      P = w.useRef(!0),
      {
        viewport: S,
        selectedItem: T,
        selectedItemText: E,
        focusSelectedItem: b,
      } = c,
      N = w.useCallback(() => {
        if (u.trigger && u.valueNode && d && m && S && T && E) {
          const z = u.trigger.getBoundingClientRect(),
            W = m.getBoundingClientRect(),
            te = u.valueNode.getBoundingClientRect(),
            oe = E.getBoundingClientRect();
          if (u.dir !== "rtl") {
            const ve = oe.left - W.left,
              Te = te.left - ve,
              Ge = z.left - Te,
              ft = z.width + Ge,
              Sn = Math.max(ft, W.width),
              Cn = window.innerWidth - $t,
              rn = hg(Te, [$t, Math.max($t, Cn - Sn)]);
            (d.style.minWidth = ft + "px"), (d.style.left = rn + "px");
          } else {
            const ve = W.right - oe.right,
              Te = window.innerWidth - te.right - ve,
              Ge = window.innerWidth - z.right - Te,
              ft = z.width + Ge,
              Sn = Math.max(ft, W.width),
              Cn = window.innerWidth - $t,
              rn = hg(Te, [$t, Math.max($t, Cn - Sn)]);
            (d.style.minWidth = ft + "px"), (d.style.right = rn + "px");
          }
          const ge = y(),
            Z = window.innerHeight - $t * 2,
            fe = S.scrollHeight,
            le = window.getComputedStyle(m),
            Ce = parseInt(le.borderTopWidth, 10),
            ie = parseInt(le.paddingTop, 10),
            X = parseInt(le.borderBottomWidth, 10),
            V = parseInt(le.paddingBottom, 10),
            Y = Ce + ie + fe + V + X,
            K = Math.min(T.offsetHeight * 5, Y),
            j = window.getComputedStyle(S),
            F = parseInt(j.paddingTop, 10),
            he = parseInt(j.paddingBottom, 10),
            pe = z.top + z.height / 2 - $t,
            we = Z - pe,
            xe = T.offsetHeight / 2,
            Q = T.offsetTop + xe,
            se = Ce + ie + Q,
            ye = Y - se;
          if (se <= pe) {
            const ve = ge.length > 0 && T === ge[ge.length - 1].ref.current;
            d.style.bottom = "0px";
            const Te = m.clientHeight - S.offsetTop - S.offsetHeight,
              Ge = Math.max(we, xe + (ve ? he : 0) + Te + X),
              ft = se + Ge;
            d.style.height = ft + "px";
          } else {
            const ve = ge.length > 0 && T === ge[0].ref.current;
            d.style.top = "0px";
            const Ge = Math.max(pe, Ce + S.offsetTop + (ve ? F : 0) + xe) + ye;
            (d.style.height = Ge + "px"), (S.scrollTop = se - pe + S.offsetTop);
          }
          (d.style.margin = `${$t}px 0`),
            (d.style.minHeight = K + "px"),
            (d.style.maxHeight = Z + "px"),
            s == null || s(),
            requestAnimationFrame(() => (C.current = !0));
        }
      }, [y, u.trigger, u.valueNode, d, m, S, T, E, u.dir, s]);
    dt(() => N(), [N]);
    const [L, I] = w.useState();
    dt(() => {
      m && I(window.getComputedStyle(m).zIndex);
    }, [m]);
    const B = w.useCallback(
      (z) => {
        z && P.current === !0 && (N(), b == null || b(), (P.current = !1));
      },
      [N, b],
    );
    return k.jsx(lb, {
      scope: o,
      contentWrapper: d,
      shouldExpandOnScrollRef: C,
      onScrollButtonChange: B,
      children: k.jsx("div", {
        ref: p,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: L,
        },
        children: k.jsx(Ne.div, {
          ...a,
          ref: v,
          style: { boxSizing: "border-box", maxHeight: "100%", ...a.style },
        }),
      }),
    });
  });
L0.displayName = sb;
var ab = "SelectPopperPosition",
  Dc = w.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        align: s = "start",
        collisionPadding: a = $t,
        ...u
      } = t,
      c = za(o);
    return k.jsx(p0, {
      ...c,
      ...u,
      ref: r,
      align: s,
      collisionPadding: a,
      style: {
        boxSizing: "border-box",
        ...u.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Dc.displayName = ab;
var [lb, Wd] = wo(Cr, {}),
  Ic = "SelectViewport",
  D0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, nonce: s, ...a } = t,
      u = nr(Ic, o),
      c = Wd(Ic, o),
      d = $e(r, u.onViewportChange),
      p = w.useRef(0);
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: s,
        }),
        k.jsx(Va.Slot, {
          scope: o,
          children: k.jsx(Ne.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...a,
            ref: d,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...a.style,
            },
            onScroll: be(a.onScroll, (m) => {
              const g = m.currentTarget,
                { contentWrapper: v, shouldExpandOnScrollRef: y } = c;
              if (y != null && y.current && v) {
                const C = Math.abs(p.current - g.scrollTop);
                if (C > 0) {
                  const P = window.innerHeight - $t * 2,
                    S = parseFloat(v.style.minHeight),
                    T = parseFloat(v.style.height),
                    E = Math.max(S, T);
                  if (E < P) {
                    const b = E + C,
                      N = Math.min(P, b),
                      L = b - N;
                    (v.style.height = N + "px"),
                      v.style.bottom === "0px" &&
                        ((g.scrollTop = L > 0 ? L : 0),
                        (v.style.justifyContent = "flex-end"));
                  }
                }
              }
              p.current = g.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
D0.displayName = Ic;
var I0 = "SelectGroup",
  [ub, cb] = wo(I0),
  db = w.forwardRef((t, r) => {
    const { __scopeSelect: o, ...s } = t,
      a = ja();
    return k.jsx(ub, {
      scope: o,
      id: a,
      children: k.jsx(Ne.div, {
        role: "group",
        "aria-labelledby": a,
        ...s,
        ref: r,
      }),
    });
  });
db.displayName = I0;
var O0 = "SelectLabel",
  _0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, ...s } = t,
      a = cb(O0, o);
    return k.jsx(Ne.div, { id: a.id, ...s, ref: r });
  });
_0.displayName = O0;
var Ta = "SelectItem",
  [fb, V0] = wo(Ta),
  F0 = w.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        value: s,
        disabled: a = !1,
        textValue: u,
        ...c
      } = t,
      d = tr(Ta, o),
      p = nr(Ta, o),
      m = d.value === s,
      [g, v] = w.useState(u ?? ""),
      [y, C] = w.useState(!1),
      P = $e(r, (b) => {
        var N;
        return (N = p.itemRefCallback) == null ? void 0 : N.call(p, b, s, a);
      }),
      S = ja(),
      T = w.useRef("touch"),
      E = () => {
        a || (d.onValueChange(s), d.onOpenChange(!1));
      };
    if (s === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return k.jsx(fb, {
      scope: o,
      value: s,
      disabled: a,
      textId: S,
      isSelected: m,
      onItemTextChange: w.useCallback((b) => {
        v((N) => N || ((b == null ? void 0 : b.textContent) ?? "").trim());
      }, []),
      children: k.jsx(Va.ItemSlot, {
        scope: o,
        value: s,
        disabled: a,
        textValue: g,
        children: k.jsx(Ne.div, {
          role: "option",
          "aria-labelledby": S,
          "data-highlighted": y ? "" : void 0,
          "aria-selected": m && y,
          "data-state": m ? "checked" : "unchecked",
          "aria-disabled": a || void 0,
          "data-disabled": a ? "" : void 0,
          tabIndex: a ? void 0 : -1,
          ...c,
          ref: P,
          onFocus: be(c.onFocus, () => C(!0)),
          onBlur: be(c.onBlur, () => C(!1)),
          onClick: be(c.onClick, () => {
            T.current !== "mouse" && E();
          }),
          onPointerUp: be(c.onPointerUp, () => {
            T.current === "mouse" && E();
          }),
          onPointerDown: be(c.onPointerDown, (b) => {
            T.current = b.pointerType;
          }),
          onPointerMove: be(c.onPointerMove, (b) => {
            var N;
            (T.current = b.pointerType),
              a
                ? (N = p.onItemLeave) == null || N.call(p)
                : T.current === "mouse" &&
                  b.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: be(c.onPointerLeave, (b) => {
            var N;
            b.currentTarget === document.activeElement &&
              ((N = p.onItemLeave) == null || N.call(p));
          }),
          onKeyDown: be(c.onKeyDown, (b) => {
            var L;
            (((L = p.searchRef) == null ? void 0 : L.current) !== "" &&
              b.key === " ") ||
              (qR.includes(b.key) && E(), b.key === " " && b.preventDefault());
          }),
        }),
      }),
    });
  });
F0.displayName = Ta;
var pi = "SelectItemText",
  z0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, className: s, style: a, ...u } = t,
      c = tr(pi, o),
      d = nr(pi, o),
      p = V0(pi, o),
      m = tb(pi, o),
      [g, v] = w.useState(null),
      y = $e(
        r,
        (E) => v(E),
        p.onItemTextChange,
        (E) => {
          var b;
          return (b = d.itemTextRefCallback) == null
            ? void 0
            : b.call(d, E, p.value, p.disabled);
        },
      ),
      C = g == null ? void 0 : g.textContent,
      P = w.useMemo(
        () =>
          k.jsx(
            "option",
            { value: p.value, disabled: p.disabled, children: C },
            p.value,
          ),
        [p.disabled, p.value, C],
      ),
      { onNativeOptionAdd: S, onNativeOptionRemove: T } = m;
    return (
      dt(() => (S(P), () => T(P)), [S, T, P]),
      k.jsxs(k.Fragment, {
        children: [
          k.jsx(Ne.span, { id: p.textId, ...u, ref: y }),
          p.isSelected && c.valueNode && !c.valueNodeHasChildren
            ? Li.createPortal(u.children, c.valueNode)
            : null,
        ],
      })
    );
  });
z0.displayName = pi;
var B0 = "SelectItemIndicator",
  U0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, ...s } = t;
    return V0(B0, o).isSelected
      ? k.jsx(Ne.span, { "aria-hidden": !0, ...s, ref: r })
      : null;
  });
U0.displayName = B0;
var Oc = "SelectScrollUpButton",
  $0 = w.forwardRef((t, r) => {
    const o = nr(Oc, t.__scopeSelect),
      s = Wd(Oc, t.__scopeSelect),
      [a, u] = w.useState(!1),
      c = $e(r, s.onScrollButtonChange);
    return (
      dt(() => {
        if (o.viewport && o.isPositioned) {
          let d = function () {
            const m = p.scrollTop > 0;
            u(m);
          };
          const p = o.viewport;
          return (
            d(),
            p.addEventListener("scroll", d),
            () => p.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, o.isPositioned]),
      a
        ? k.jsx(H0, {
            ...t,
            ref: c,
            onAutoScroll: () => {
              const { viewport: d, selectedItem: p } = o;
              d && p && (d.scrollTop = d.scrollTop - p.offsetHeight);
            },
          })
        : null
    );
  });
$0.displayName = Oc;
var _c = "SelectScrollDownButton",
  W0 = w.forwardRef((t, r) => {
    const o = nr(_c, t.__scopeSelect),
      s = Wd(_c, t.__scopeSelect),
      [a, u] = w.useState(!1),
      c = $e(r, s.onScrollButtonChange);
    return (
      dt(() => {
        if (o.viewport && o.isPositioned) {
          let d = function () {
            const m = p.scrollHeight - p.clientHeight,
              g = Math.ceil(p.scrollTop) < m;
            u(g);
          };
          const p = o.viewport;
          return (
            d(),
            p.addEventListener("scroll", d),
            () => p.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, o.isPositioned]),
      a
        ? k.jsx(H0, {
            ...t,
            ref: c,
            onAutoScroll: () => {
              const { viewport: d, selectedItem: p } = o;
              d && p && (d.scrollTop = d.scrollTop + p.offsetHeight);
            },
          })
        : null
    );
  });
W0.displayName = _c;
var H0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, onAutoScroll: s, ...a } = t,
      u = nr("SelectScrollButton", o),
      c = w.useRef(null),
      d = Fa(o),
      p = w.useCallback(() => {
        c.current !== null &&
          (window.clearInterval(c.current), (c.current = null));
      }, []);
    return (
      w.useEffect(() => () => p(), [p]),
      dt(() => {
        var g;
        const m = d().find((v) => v.ref.current === document.activeElement);
        (g = m == null ? void 0 : m.ref.current) == null ||
          g.scrollIntoView({ block: "nearest" });
      }, [d]),
      k.jsx(Ne.div, {
        "aria-hidden": !0,
        ...a,
        ref: r,
        style: { flexShrink: 0, ...a.style },
        onPointerDown: be(a.onPointerDown, () => {
          c.current === null && (c.current = window.setInterval(s, 50));
        }),
        onPointerMove: be(a.onPointerMove, () => {
          var m;
          (m = u.onItemLeave) == null || m.call(u),
            c.current === null && (c.current = window.setInterval(s, 50));
        }),
        onPointerLeave: be(a.onPointerLeave, () => {
          p();
        }),
      })
    );
  }),
  pb = "SelectSeparator",
  K0 = w.forwardRef((t, r) => {
    const { __scopeSelect: o, ...s } = t;
    return k.jsx(Ne.div, { "aria-hidden": !0, ...s, ref: r });
  });
K0.displayName = pb;
var Vc = "SelectArrow",
  hb = w.forwardRef((t, r) => {
    const { __scopeSelect: o, ...s } = t,
      a = za(o),
      u = tr(Vc, o),
      c = nr(Vc, o);
    return u.open && c.position === "popper"
      ? k.jsx(h0, { ...a, ...s, ref: r })
      : null;
  });
hb.displayName = Vc;
function G0(t) {
  return t === "" || t === void 0;
}
var Y0 = w.forwardRef((t, r) => {
  const { value: o, ...s } = t,
    a = w.useRef(null),
    u = $e(r, a),
    c = Pd(o);
  return (
    w.useEffect(() => {
      const d = a.current,
        p = window.HTMLSelectElement.prototype,
        g = Object.getOwnPropertyDescriptor(p, "value").set;
      if (c !== o && g) {
        const v = new Event("change", { bubbles: !0 });
        g.call(d, o), d.dispatchEvent(v);
      }
    }, [c, o]),
    k.jsx($d, {
      asChild: !0,
      children: k.jsx("select", { ...s, ref: u, defaultValue: o }),
    })
  );
});
Y0.displayName = "BubbleSelect";
function X0(t) {
  const r = yn(t),
    o = w.useRef(""),
    s = w.useRef(0),
    a = w.useCallback(
      (c) => {
        const d = o.current + c;
        r(d),
          (function p(m) {
            (o.current = m),
              window.clearTimeout(s.current),
              m !== "" && (s.current = window.setTimeout(() => p(""), 1e3));
          })(d);
      },
      [r],
    ),
    u = w.useCallback(() => {
      (o.current = ""), window.clearTimeout(s.current);
    }, []);
  return w.useEffect(() => () => window.clearTimeout(s.current), []), [o, a, u];
}
function Q0(t, r, o) {
  const a = r.length > 1 && Array.from(r).every((m) => m === r[0]) ? r[0] : r,
    u = o ? t.indexOf(o) : -1;
  let c = mb(t, Math.max(u, 0));
  a.length === 1 && (c = c.filter((m) => m !== o));
  const p = c.find((m) =>
    m.textValue.toLowerCase().startsWith(a.toLowerCase()),
  );
  return p !== o ? p : void 0;
}
function mb(t, r) {
  return t.map((o, s) => t[(r + s) % t.length]);
}
var gb = T0,
  q0 = E0,
  vb = b0,
  yb = A0,
  Z0 = N0,
  xb = D0,
  J0 = _0,
  e1 = F0,
  wb = z0,
  Sb = U0,
  t1 = $0,
  n1 = W0,
  r1 = K0;
const Ig = gb,
  Fc = w.forwardRef(({ className: t, children: r, ...o }, s) =>
    k.jsxs(q0, {
      ref: s,
      className: Ue(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        t,
      ),
      ...o,
      children: [
        r,
        k.jsx(vb, {
          asChild: !0,
          children: k.jsx(Ty, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
Fc.displayName = q0.displayName;
const o1 = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx(t1, {
    ref: o,
    className: Ue("flex cursor-default items-center justify-center py-1", t),
    ...r,
    children: k.jsx(DP, { className: "h-4 w-4" }),
  }),
);
o1.displayName = t1.displayName;
const i1 = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx(n1, {
    ref: o,
    className: Ue("flex cursor-default items-center justify-center py-1", t),
    ...r,
    children: k.jsx(Ty, { className: "h-4 w-4" }),
  }),
);
i1.displayName = n1.displayName;
const zc = w.forwardRef(
  ({ className: t, children: r, position: o = "popper", ...s }, a) =>
    k.jsx(yb, {
      children: k.jsxs(Z0, {
        ref: a,
        className: Ue(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          o === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          t,
        ),
        position: o,
        ...s,
        children: [
          k.jsx(o1, {}),
          k.jsx(xb, {
            className: Ue(
              "p-1",
              o === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: r,
          }),
          k.jsx(i1, {}),
        ],
      }),
    }),
);
zc.displayName = Z0.displayName;
const Cb = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx(J0, {
    ref: o,
    className: Ue("px-2 py-1.5 text-sm font-semibold", t),
    ...r,
  }),
);
Cb.displayName = J0.displayName;
const ca = w.forwardRef(({ className: t, children: r, ...o }, s) =>
  k.jsxs(e1, {
    ref: s,
    className: Ue(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t,
    ),
    ...o,
    children: [
      k.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: k.jsx(Sb, { children: k.jsx(ky, { className: "h-4 w-4" }) }),
      }),
      k.jsx(wb, { children: r }),
    ],
  }),
);
ca.displayName = e1.displayName;
const kb = w.forwardRef(({ className: t, ...r }, o) =>
  k.jsx(r1, { ref: o, className: Ue("-mx-1 my-1 h-px bg-muted", t), ...r }),
);
kb.displayName = r1.displayName;
const ra = {
    instagram: {
      name: "Instagram",
      formats: ["post", "story", "profile", "square", "portrait"],
      icon: PE,
      color: "hover:text-[#E4405F]",
      aspectRatios: {
        post: "1:1",
        story: "9:16",
        profile: "1:1",
        square: "1:1",
        portrait: "4:5",
      },
    },
    facebook: {
      name: "Facebook",
      formats: ["post", "story", "profile", "cover", "landscape", "portrait"],
      icon: EE,
      color: "hover:text-[#1877F2]",
      aspectRatios: {
        post: "1.91:1",
        story: "9:16",
        profile: "1:1",
        cover: "2.7:1",
        landscape: "1.91:1",
        portrait: "1:1.91",
      },
    },
    twitter: {
      name: "Twitter",
      formats: ["post", "profile", "cover", "landscape", "portrait"],
      icon: bE,
      color: "hover:text-[#1DA1F2]",
      aspectRatios: {
        post: "16:9",
        profile: "1:1",
        cover: "3:1",
        landscape: "16:9",
        portrait: "4:5",
      },
    },
    tiktok: {
      name: "TikTok",
      formats: ["post", "story", "profile"],
      icon: RE,
      color: "hover:text-[#000000] dark:hover:text-white",
      aspectRatios: { post: "9:16", story: "9:16", profile: "1:1" },
    },
    youtube: {
      name: "YouTube",
      formats: ["profile", "cover", "thumbnail", "mobile_cover"],
      icon: AE,
      color: "hover:text-[#FF0000]",
      aspectRatios: {
        profile: "1:1",
        cover: "16:9",
        thumbnail: "16:9",
        mobile_cover: "3.7:1",
      },
    },
  },
  Og = {
    post: k.jsx(HP, { className: "w-4 h-4" }),
    story: k.jsx(ya, { className: "w-4 h-4" }),
    profile: k.jsx(QP, { className: "w-4 h-4" }),
    cover: k.jsx(FP, { className: "w-4 h-4" }),
    square: k.jsx(YP, { className: "w-4 h-4" }),
    landscape: k.jsx(zP, { className: "w-4 h-4" }),
    portrait: k.jsx(BP, { className: "w-4 h-4" }),
    thumbnail: k.jsx(GP, { className: "w-4 h-4" }),
    mobile_cover: k.jsx(KP, { className: "w-4 h-4" }),
  },
  _g = {
    post: "Julkaisu",
    story: "Tarina",
    profile: "Profiilikuva",
    cover: "Kansikuva",
    square: "Neliö",
    landscape: "Vaakakuva",
    portrait: "Pystykuva",
    thumbnail: "Videon thumbnail",
    mobile_cover: "Mobiilikansikuva",
  },
  Vg = ({
    selectedPlatform: t,
    setSelectedPlatform: r,
    selectedFormat: o,
    setSelectedFormat: s,
  }) => {
    const a = (d) => {
        r(d), s(d === "original" ? "original" : "");
      },
      u = (d) => {
        var p;
        return d === "original"
          ? []
          : ((p = ra[d]) == null ? void 0 : p.formats) || [];
      },
      c = ({ platform: d }) => {
        if (!d) return null;
        if (d === "original")
          return k.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              k.jsx(ya, { className: "w-4 h-4" }),
              k.jsx("span", { children: "Alkuperäinen" }),
            ],
          });
        const { icon: p, name: m } = ra[d];
        return k.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            k.jsx(p, { className: "w-4 h-4" }),
            k.jsx("span", { children: m }),
          ],
        });
      };
    return k.jsxs("div", {
      className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
      children: [
        k.jsxs(Ig, {
          value: t,
          onValueChange: a,
          children: [
            k.jsx(Fc, {
              className: "w-full sm:w-48",
              children: t
                ? k.jsx(c, { platform: t })
                : k.jsx("span", {
                    className: "text-muted-foreground",
                    children: "Valitse alusta",
                  }),
            }),
            k.jsxs(zc, {
              children: [
                k.jsx(ca, {
                  value: "original",
                  children: k.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      k.jsx(ya, { className: "w-4 h-4" }),
                      k.jsx("span", { children: "Alkuperäinen" }),
                    ],
                  }),
                }),
                Object.entries(ra).map(([d, { name: p, icon: m, color: g }]) =>
                  k.jsx(
                    ca,
                    {
                      value: d,
                      children: k.jsxs("div", {
                        className: `flex items-center gap-2 transition-colors ${g}`,
                        children: [
                          k.jsx(m, { className: "w-4 h-4" }),
                          k.jsx("span", { children: p }),
                        ],
                      }),
                    },
                    d,
                  ),
                ),
              ],
            }),
          ],
        }),
        t &&
          t !== "original" &&
          k.jsxs(Ig, {
            value: o,
            onValueChange: s,
            disabled: !t || t === "original",
            children: [
              k.jsx(Fc, {
                className: "w-full sm:w-48",
                children: o
                  ? k.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [Og[o], k.jsx("span", { children: _g[o] })],
                    })
                  : k.jsx("span", {
                      className: "text-muted-foreground",
                      children: "Valitse tyyppi",
                    }),
              }),
              k.jsx(zc, {
                children: u(t).map((d) =>
                  k.jsx(
                    ca,
                    {
                      value: d,
                      children: k.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          Og[d],
                          k.jsx("span", { children: _g[d] }),
                          k.jsx("span", {
                            className: "text-xs text-muted-foreground ml-auto",
                            children: ra[t].aspectRatios[d],
                          }),
                        ],
                      }),
                    },
                    d,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  };
var [Ba, tA] = vo("Tooltip", [Oa]),
  Ua = Oa(),
  s1 = "TooltipProvider",
  Tb = 700,
  Bc = "tooltip.open",
  [Pb, Hd] = Ba(s1),
  a1 = (t) => {
    const {
        __scopeTooltip: r,
        delayDuration: o = Tb,
        skipDelayDuration: s = 300,
        disableHoverableContent: a = !1,
        children: u,
      } = t,
      [c, d] = w.useState(!0),
      p = w.useRef(!1),
      m = w.useRef(0);
    return (
      w.useEffect(() => {
        const g = m.current;
        return () => window.clearTimeout(g);
      }, []),
      k.jsx(Pb, {
        scope: r,
        isOpenDelayed: c,
        delayDuration: o,
        onOpen: w.useCallback(() => {
          window.clearTimeout(m.current), d(!1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => d(!0), s));
        }, [s]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: w.useCallback((g) => {
          p.current = g;
        }, []),
        disableHoverableContent: a,
        children: u,
      })
    );
  };
a1.displayName = s1;
var $a = "Tooltip",
  [Eb, Oi] = Ba($a),
  l1 = (t) => {
    const {
        __scopeTooltip: r,
        children: o,
        open: s,
        defaultOpen: a = !1,
        onOpenChange: u,
        disableHoverableContent: c,
        delayDuration: d,
      } = t,
      p = Hd($a, t.__scopeTooltip),
      m = Ua(r),
      [g, v] = w.useState(null),
      y = ja(),
      C = w.useRef(0),
      P = c ?? p.disableHoverableContent,
      S = d ?? p.delayDuration,
      T = w.useRef(!1),
      [E = !1, b] = Pi({
        prop: s,
        defaultProp: a,
        onChange: (z) => {
          z
            ? (p.onOpen(), document.dispatchEvent(new CustomEvent(Bc)))
            : p.onClose(),
            u == null || u(z);
        },
      }),
      N = w.useMemo(
        () => (E ? (T.current ? "delayed-open" : "instant-open") : "closed"),
        [E],
      ),
      L = w.useCallback(() => {
        window.clearTimeout(C.current),
          (C.current = 0),
          (T.current = !1),
          b(!0);
      }, [b]),
      I = w.useCallback(() => {
        window.clearTimeout(C.current), (C.current = 0), b(!1);
      }, [b]),
      B = w.useCallback(() => {
        window.clearTimeout(C.current),
          (C.current = window.setTimeout(() => {
            (T.current = !0), b(!0), (C.current = 0);
          }, S));
      }, [S, b]);
    return (
      w.useEffect(
        () => () => {
          C.current && (window.clearTimeout(C.current), (C.current = 0));
        },
        [],
      ),
      k.jsx(d0, {
        ...m,
        children: k.jsx(Eb, {
          scope: r,
          contentId: y,
          open: E,
          stateAttribute: N,
          trigger: g,
          onTriggerChange: v,
          onTriggerEnter: w.useCallback(() => {
            p.isOpenDelayed ? B() : L();
          }, [p.isOpenDelayed, B, L]),
          onTriggerLeave: w.useCallback(() => {
            P ? I() : (window.clearTimeout(C.current), (C.current = 0));
          }, [I, P]),
          onOpen: L,
          onClose: I,
          disableHoverableContent: P,
          children: o,
        }),
      })
    );
  };
l1.displayName = $a;
var Uc = "TooltipTrigger",
  u1 = w.forwardRef((t, r) => {
    const { __scopeTooltip: o, ...s } = t,
      a = Oi(Uc, o),
      u = Hd(Uc, o),
      c = Ua(o),
      d = w.useRef(null),
      p = $e(r, d, a.onTriggerChange),
      m = w.useRef(!1),
      g = w.useRef(!1),
      v = w.useCallback(() => (m.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", v),
        [v],
      ),
      k.jsx(f0, {
        asChild: !0,
        ...c,
        children: k.jsx(Ne.button, {
          "aria-describedby": a.open ? a.contentId : void 0,
          "data-state": a.stateAttribute,
          ...s,
          ref: p,
          onPointerMove: be(t.onPointerMove, (y) => {
            y.pointerType !== "touch" &&
              !g.current &&
              !u.isPointerInTransitRef.current &&
              (a.onTriggerEnter(), (g.current = !0));
          }),
          onPointerLeave: be(t.onPointerLeave, () => {
            a.onTriggerLeave(), (g.current = !1);
          }),
          onPointerDown: be(t.onPointerDown, () => {
            (m.current = !0),
              document.addEventListener("pointerup", v, { once: !0 });
          }),
          onFocus: be(t.onFocus, () => {
            m.current || a.onOpen();
          }),
          onBlur: be(t.onBlur, a.onClose),
          onClick: be(t.onClick, a.onClose),
        }),
      })
    );
  });
u1.displayName = Uc;
var Kd = "TooltipPortal",
  [Rb, bb] = Ba(Kd, { forceMount: void 0 }),
  c1 = (t) => {
    const { __scopeTooltip: r, forceMount: o, children: s, container: a } = t,
      u = Oi(Kd, r);
    return k.jsx(Rb, {
      scope: r,
      forceMount: o,
      children: k.jsx(Ma, {
        present: o || u.open,
        children: k.jsx(Ud, { asChild: !0, container: a, children: s }),
      }),
    });
  };
c1.displayName = Kd;
var ho = "TooltipContent",
  d1 = w.forwardRef((t, r) => {
    const o = bb(ho, t.__scopeTooltip),
      { forceMount: s = o.forceMount, side: a = "top", ...u } = t,
      c = Oi(ho, t.__scopeTooltip);
    return k.jsx(Ma, {
      present: s || c.open,
      children: c.disableHoverableContent
        ? k.jsx(f1, { side: a, ...u, ref: r })
        : k.jsx(Ab, { side: a, ...u, ref: r }),
    });
  }),
  Ab = w.forwardRef((t, r) => {
    const o = Oi(ho, t.__scopeTooltip),
      s = Hd(ho, t.__scopeTooltip),
      a = w.useRef(null),
      u = $e(r, a),
      [c, d] = w.useState(null),
      { trigger: p, onClose: m } = o,
      g = a.current,
      { onPointerInTransitChange: v } = s,
      y = w.useCallback(() => {
        d(null), v(!1);
      }, [v]),
      C = w.useCallback(
        (P, S) => {
          const T = P.currentTarget,
            E = { x: P.clientX, y: P.clientY },
            b = Lb(E, T.getBoundingClientRect()),
            N = Db(E, b),
            L = Ib(S.getBoundingClientRect()),
            I = _b([...N, ...L]);
          d(I), v(!0);
        },
        [v],
      );
    return (
      w.useEffect(() => () => y(), [y]),
      w.useEffect(() => {
        if (p && g) {
          const P = (T) => C(T, g),
            S = (T) => C(T, p);
          return (
            p.addEventListener("pointerleave", P),
            g.addEventListener("pointerleave", S),
            () => {
              p.removeEventListener("pointerleave", P),
                g.removeEventListener("pointerleave", S);
            }
          );
        }
      }, [p, g, C, y]),
      w.useEffect(() => {
        if (c) {
          const P = (S) => {
            const T = S.target,
              E = { x: S.clientX, y: S.clientY },
              b =
                (p == null ? void 0 : p.contains(T)) ||
                (g == null ? void 0 : g.contains(T)),
              N = !Ob(E, c);
            b ? y() : N && (y(), m());
          };
          return (
            document.addEventListener("pointermove", P),
            () => document.removeEventListener("pointermove", P)
          );
        }
      }, [p, g, c, m, y]),
      k.jsx(f1, { ...t, ref: u })
    );
  }),
  [Nb, Mb] = Ba($a, { isInside: !1 }),
  f1 = w.forwardRef((t, r) => {
    const {
        __scopeTooltip: o,
        children: s,
        "aria-label": a,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        ...d
      } = t,
      p = Oi(ho, o),
      m = Ua(o),
      { onClose: g } = p;
    return (
      w.useEffect(
        () => (
          document.addEventListener(Bc, g),
          () => document.removeEventListener(Bc, g)
        ),
        [g],
      ),
      w.useEffect(() => {
        if (p.trigger) {
          const v = (y) => {
            const C = y.target;
            C != null && C.contains(p.trigger) && g();
          };
          return (
            window.addEventListener("scroll", v, { capture: !0 }),
            () => window.removeEventListener("scroll", v, { capture: !0 })
          );
        }
      }, [p.trigger, g]),
      k.jsx(jd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: g,
        children: k.jsxs(p0, {
          "data-state": p.stateAttribute,
          ...m,
          ...d,
          ref: r,
          style: {
            ...d.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            k.jsx(Ry, { children: s }),
            k.jsx(Nb, {
              scope: o,
              isInside: !0,
              children: k.jsx(uR, {
                id: p.contentId,
                role: "tooltip",
                children: a || s,
              }),
            }),
          ],
        }),
      })
    );
  });
d1.displayName = ho;
var p1 = "TooltipArrow",
  jb = w.forwardRef((t, r) => {
    const { __scopeTooltip: o, ...s } = t,
      a = Ua(o);
    return Mb(p1, o).isInside ? null : k.jsx(h0, { ...a, ...s, ref: r });
  });
jb.displayName = p1;
function Lb(t, r) {
  const o = Math.abs(r.top - t.y),
    s = Math.abs(r.bottom - t.y),
    a = Math.abs(r.right - t.x),
    u = Math.abs(r.left - t.x);
  switch (Math.min(o, s, a, u)) {
    case u:
      return "left";
    case a:
      return "right";
    case o:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Db(t, r, o = 5) {
  const s = [];
  switch (r) {
    case "top":
      s.push({ x: t.x - o, y: t.y + o }, { x: t.x + o, y: t.y + o });
      break;
    case "bottom":
      s.push({ x: t.x - o, y: t.y - o }, { x: t.x + o, y: t.y - o });
      break;
    case "left":
      s.push({ x: t.x + o, y: t.y - o }, { x: t.x + o, y: t.y + o });
      break;
    case "right":
      s.push({ x: t.x - o, y: t.y - o }, { x: t.x - o, y: t.y + o });
      break;
  }
  return s;
}
function Ib(t) {
  const { top: r, right: o, bottom: s, left: a } = t;
  return [
    { x: a, y: r },
    { x: o, y: r },
    { x: o, y: s },
    { x: a, y: s },
  ];
}
function Ob(t, r) {
  const { x: o, y: s } = t;
  let a = !1;
  for (let u = 0, c = r.length - 1; u < r.length; c = u++) {
    const d = r[u].x,
      p = r[u].y,
      m = r[c].x,
      g = r[c].y;
    p > s != g > s && o < ((m - d) * (s - p)) / (g - p) + d && (a = !a);
  }
  return a;
}
function _b(t) {
  const r = t.slice();
  return (
    r.sort((o, s) =>
      o.x < s.x ? -1 : o.x > s.x ? 1 : o.y < s.y ? -1 : o.y > s.y ? 1 : 0,
    ),
    Vb(r)
  );
}
function Vb(t) {
  if (t.length <= 1) return t.slice();
  const r = [];
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    for (; r.length >= 2; ) {
      const u = r[r.length - 1],
        c = r[r.length - 2];
      if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) r.pop();
      else break;
    }
    r.push(a);
  }
  r.pop();
  const o = [];
  for (let s = t.length - 1; s >= 0; s--) {
    const a = t[s];
    for (; o.length >= 2; ) {
      const u = o[o.length - 1],
        c = o[o.length - 2];
      if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) o.pop();
      else break;
    }
    o.push(a);
  }
  return (
    o.pop(),
    r.length === 1 && o.length === 1 && r[0].x === o[0].x && r[0].y === o[0].y
      ? r
      : r.concat(o)
  );
}
var Fb = a1,
  zb = l1,
  Bb = u1,
  Ub = c1,
  h1 = d1;
const $b = Fb,
  Wb = zb,
  Hb = Bb,
  m1 = w.forwardRef(({ className: t, sideOffset: r = 4, ...o }, s) =>
    k.jsx(Ub, {
      children: k.jsx(h1, {
        ref: s,
        sideOffset: r,
        className: Ue(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          t,
        ),
        ...o,
      }),
    }),
  );
m1.displayName = h1.displayName;
const Kb = ({ tooltipMessage: t, children: r, disabled: o, ...s }) =>
  k.jsx($b, {
    children: k.jsxs(Wb, {
      children: [
        k.jsx(Hb, {
          asChild: !0,
          children: k.jsx("div", {
            className: "w-full",
            children: k.jsx(hn, {
              ...s,
              disabled: o,
              className: `w-full ${s.className}`,
              children: r,
            }),
          }),
        }),
        o && t && k.jsx(m1, { children: k.jsx("p", { children: t }) }),
      ],
    }),
  });
function Gb() {
  const t = "",
    [r, o] = w.useState(!1),
    [s, a] = w.useState("input"),
    [u, c] = w.useState(""),
    [d, p] = w.useState(!1),
    [m, g] = w.useState([]),
    [v, y] = w.useState(""),
    [C, P] = w.useState(""),
    [S, T] = w.useState(0),
    [E, b] = w.useState(!0),
    [N, L] = w.useState(!1),
    {
      images: I,
      handleFileChange: B,
      handleRemoveImage: z,
      handleDrop: W,
      handleDragOver: te,
      inputKey: oe,
    } = AP(),
    {
      imageUrl: ge,
      loading: Z,
      loadingStatus: fe,
      setLoading: le,
      setLoadingStatus: Ce,
      handleSubmit: ie,
      downloadImage: X,
      testImageDownload: V,
    } = bP({ apiUrl: t }),
    {
      adText: Y,
      setAdText: K,
      adTextLoading: j,
      isCopied: F,
      generateAdText: he,
      handleCopy: pe,
    } = RP({ apiUrl: t }),
    we = () => {
      c(""), p(!1), g([]), y(""), P(""), z(), a("input");
    },
    { addRecentImage: xe, loadRecentImages: Q } = Sy({ apiUrl: t }),
    se = async (ae) => {
      if ((ae.preventDefault(), b(!1), !I.length || !u)) {
        alert("Täytä molemmat kentät!");
        return;
      }
      try {
        a("loading");
        const ve = await ie(ae, I[0].file, u, r);
        "success" in ve &&
          ve.success &&
          ve.imageId &&
          (await xe(ve.imageId),
          await Q(),
          T((Te) => Te + 1),
          a("output"),
          d &&
            ve.newDescription &&
            (Ce(Rc.AD_TEXT), await he(ve.newDescription, m)),
          b(!0));
      } catch (ve) {
        ve instanceof Error
          ? (alert(ve.message), console.error("Detailed error:", ve))
          : alert("Tuntematon virhe tapahtui"),
          a("input"),
          b(!0);
      }
    },
    ye = async () => {
      L(!0);
      try {
        await X(v, C);
      } catch (ae) {
        ae instanceof Error && alert("Error downloading image: " + ae.message);
      } finally {
        L(!1);
      }
    };
  return k.jsx(oo.div, {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
    className: "py-12 px-4 w-full ",
    children: k.jsxs("div", {
      className: "max-w-6xl mx-auto space-y-8",
      children: [
        k.jsx(py, {
          mode: "wait",
          children:
            s === "input"
              ? k.jsx(
                  Ju,
                  {
                    stepKey: "input",
                    children: k.jsx(
                      oo.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: 20 },
                        transition: { duration: 0.3 },
                        children: k.jsxs(yi, {
                          className: "shadow-lg max-w-2xl mx-auto",
                          children: [
                            k.jsx(Nd, {
                              children: k.jsxs(Md, {
                                className: "flex items-center gap-2",
                                children: [
                                  k.jsx(ya, { className: "w-5 h-5" }),
                                  "Kuvan luonti",
                                ],
                              }),
                            }),
                            k.jsx(xi, {
                              children: k.jsxs("form", {
                                onSubmit: se,
                                className: "space-y-6",
                                children: [
                                  k.jsxs("div", {
                                    children: [
                                      k.jsx("label", {
                                        htmlFor: "description",
                                        className:
                                          "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children:
                                          "Kuvaile haluamasi mainoskuva",
                                      }),
                                      k.jsx("textarea", {
                                        id: "description",
                                        rows: 4,
                                        value: u,
                                        onChange: (ae) => c(ae.target.value),
                                        placeholder:
                                          "Kuvaile millaisen mainoskuvan haluat tekoälyn luovan...",
                                        className:
                                          "w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow",
                                      }),
                                    ],
                                  }),
                                  k.jsxs("div", {
                                    className:
                                      "border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4",
                                    children: [
                                      k.jsx(ME, {
                                        inputKey: oe,
                                        onFileChange: B,
                                        onDrop: W,
                                        onDragOver: te,
                                      }),
                                      I.length > 0 &&
                                        k.jsxs("div", {
                                          className:
                                            "relative mt-4 w-48 h-48 mx-auto",
                                          children: [
                                            k.jsx("img", {
                                              src: I[0].preview,
                                              alt: "Uploaded image",
                                              className:
                                                "rounded-lg shadow-md w-full h-full object-cover",
                                            }),
                                            k.jsx(hn, {
                                              variant: "ghost",
                                              size: "icon",
                                              className:
                                                "absolute top-2 right-2 bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90 rounded-full",
                                              onClick: z,
                                              children: k.jsx(qP, {
                                                className: "h-4 w-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  k.jsx(kE, {
                                    isAdText: d,
                                    onCheckedChange: p,
                                    selectedOptions: m,
                                    onOptionChange: (ae, ve) => {
                                      g(
                                        ve
                                          ? (Te) => [...Te, ae]
                                          : (Te) =>
                                              Te.filter((Ge) => Ge !== ae),
                                      );
                                    },
                                  }),
                                  k.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                      k.jsx(Ad, {
                                        id: "creativity",
                                        checked: r,
                                        onCheckedChange: o,
                                      }),
                                      k.jsx(xa, {
                                        children:
                                          "Luova moodi (vapaampi tulkinta kuvasta)",
                                      }),
                                    ],
                                  }),
                                  k.jsx(Kb, {
                                    type: "submit",
                                    className:
                                      "bg-blue-600 hover:bg-blue-700 text-white transition-colors",
                                    disabled: !I.length || !u,
                                    tooltipMessage:
                                      !I.length && !u
                                        ? "Lisää kuva ja kuvaus jatkaaksesi"
                                        : I.length
                                          ? "Lisää kuvaus jatkaaksesi"
                                          : "Lisää kuva jatkaaksesi",
                                    children: "Luo mainoskuva",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      },
                      "input",
                    ),
                  },
                  "input-step",
                )
              : s === "loading"
                ? k.jsx(
                    Ju,
                    {
                      stepKey: "loading",
                      children: k.jsx(yi, {
                        className: "shadow-lg max-w-2xl mx-auto",
                        children: k.jsx(xi, {
                          className: "p-12",
                          children: k.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center gap-4",
                            children: [
                              k.jsx("div", {
                                className:
                                  "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin",
                              }),
                              k.jsx("p", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white",
                                children: fe || "Viimeistellään...",
                              }),
                            ],
                          }),
                        }),
                      }),
                    },
                    "loading-step",
                  )
                : k.jsx(
                    Ju,
                    {
                      stepKey: "output",
                      children: k.jsxs("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                          k.jsx("div", {
                            className: "flex justify-between items-center mb-6",
                            children: k.jsxs(hn, {
                              onClick: we,
                              variant: "outline",
                              className: "flex items-center gap-2",
                              children: [
                                k.jsx(LP, { className: "w-4 h-4" }),
                                "Palaa alkuun",
                              ],
                            }),
                          }),
                          k.jsx(yi, {
                            className: "shadow-lg",
                            children: k.jsxs(xi, {
                              className: "p-6 space-y-6",
                              children: [
                                k.jsx("div", {
                                  className:
                                    "relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800",
                                  children: k.jsx("img", {
                                    src: ge,
                                    alt: "Generoitu kuva",
                                    className:
                                      "w-full h-auto object-contain max-h-96",
                                  }),
                                }),
                                d
                                  ? k.jsx("div", {
                                      className: "relative",
                                      children: j
                                        ? k.jsxs("div", {
                                            className:
                                              "flex flex-col items-center justify-center p-8 space-y-4",
                                            children: [
                                              k.jsx(Py, {
                                                className:
                                                  "h-8 w-8 animate-spin text-blue-500",
                                              }),
                                              k.jsx("p", {
                                                className:
                                                  "text-sm text-gray-600 dark:text-gray-400",
                                                children:
                                                  "Generoidaan mainostekstiä...",
                                              }),
                                            ],
                                          })
                                        : Y
                                          ? k.jsxs(k.Fragment, {
                                              children: [
                                                k.jsxs("div", {
                                                  className: "relative",
                                                  children: [
                                                    k.jsx("textarea", {
                                                      value: Y,
                                                      onChange: (ae) =>
                                                        K(ae.target.value),
                                                      className:
                                                        "w-full h-64 rounded-lg border border-gray-300 dark:border-gray-600 p-4 resize-none",
                                                    }),
                                                    k.jsx(hn, {
                                                      size: "icon",
                                                      className:
                                                        "absolute top-2 right-2",
                                                      onClick: pe,
                                                      children: F
                                                        ? k.jsx(TE, {
                                                            className:
                                                              "h-4 w-4",
                                                          })
                                                        : k.jsx(IP, {
                                                            className:
                                                              "h-4 w-4",
                                                          }),
                                                    }),
                                                  ],
                                                }),
                                                k.jsxs(oo.div, {
                                                  initial: {
                                                    opacity: 0,
                                                    y: 20,
                                                  },
                                                  animate: { opacity: 1, y: 0 },
                                                  transition: { duration: 0.5 },
                                                  className: "space-y-4 mt-6",
                                                  children: [
                                                    k.jsx(Vg, {
                                                      selectedPlatform: v,
                                                      setSelectedPlatform: y,
                                                      selectedFormat: C,
                                                      setSelectedFormat: P,
                                                    }),
                                                    k.jsx(hn, {
                                                      onClick: ye,
                                                      className:
                                                        "w-full bg-green-600 hover:bg-green-700 text-white transition-colors",
                                                      disabled:
                                                        N ||
                                                        (v !== "original" &&
                                                          (!v || !C)),
                                                      children: N
                                                        ? "Ladataan..."
                                                        : "Lataa kuva",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            })
                                          : null,
                                    })
                                  : k.jsxs("div", {
                                      className: "space-y-4",
                                      children: [
                                        k.jsx(Vg, {
                                          selectedPlatform: v,
                                          setSelectedPlatform: y,
                                          selectedFormat: C,
                                          setSelectedFormat: P,
                                        }),
                                        k.jsx(hn, {
                                          onClick: ye,
                                          className:
                                            "w-full bg-green-600 hover:bg-green-700 text-white transition-colors",
                                          disabled:
                                            N ||
                                            (v !== "original" && (!v || !C)),
                                          children: N
                                            ? "Ladataan..."
                                            : "Lataa kuva",
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    },
                    "output-step",
                  ),
        }),
        k.jsx(w.Suspense, {
          fallback: k.jsx("p", { children: "Viimeisiä kuvia ladataan..." }),
          children:
            !Z &&
            !j &&
            E &&
            k.jsx("div", {
              className: "max-w-4xl mx-auto space-y-8",
              children: k.jsx(DE, { apiUrl: t, refreshTrigger: S }),
            }),
        }),
      ],
    }),
  });
}
function Yb() {
  return k.jsxs("div", {
    className: "flex flex-col items-center justify-center h-[calc(100vh-4rem)]",
    children: [
      k.jsx("div", {
        className:
          "w-16 h-16 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mb-4",
      }),
      k.jsx("p", {
        className: "text-white dark:text-gray-400",
        children: "Ladataan sovellusta...",
      }),
    ],
  });
}
function Xb() {
  return k.jsxs("div", {
    className: "min-h-screen w-full overflow-x-hidden relative",
    children: [
      k.jsx("div", {
        className:
          "fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10 bg-fixed",
      }),
      k.jsxs("div", {
        className: "absolute inset-0 w-full min-h-screen overflow-auto",
        children: [
          k.jsx(EP, {}),
          k.jsx(w.Suspense, {
            fallback: k.jsx(Yb, {}),
            children: k.jsx("main", {
              className: "relative z-10",
              children: k.jsx(Gb, {}),
            }),
          }),
        ],
      }),
    ],
  });
}
Sw.createRoot(document.getElementById("root")).render(
  k.jsx(w.StrictMode, { children: k.jsx(Xb, {}) }),
);
