function Md(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Dd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gu = { exports: {} },
  Ll = {},
  Xu = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cr = Symbol.for("react.element"),
  Fd = Symbol.for("react.portal"),
  Ud = Symbol.for("react.fragment"),
  $d = Symbol.for("react.strict_mode"),
  Ad = Symbol.for("react.profiler"),
  Bd = Symbol.for("react.provider"),
  Vd = Symbol.for("react.context"),
  Wd = Symbol.for("react.forward_ref"),
  Hd = Symbol.for("react.suspense"),
  Qd = Symbol.for("react.memo"),
  bd = Symbol.for("react.lazy"),
  js = Symbol.iterator;
function Kd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (js && e[js]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zu = Object.assign,
  Ju = {};
function Pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Yu);
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {}
qu.prototype = Pn.prototype;
function ki(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Yu);
}
var Si = (ki.prototype = new qu());
Si.constructor = ki;
Zu(Si, Pn.prototype);
Si.isPureReactComponent = !0;
var Ns = Array.isArray,
  ea = Object.prototype.hasOwnProperty,
  Ci = { current: null },
  ta = { key: !0, ref: !0, __self: !0, __source: !0 };
function na(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ea.call(t, r) && !ta.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Cr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ci.current,
  };
}
function Gd(e, t) {
  return {
    $$typeof: Cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ei(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function Xd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ps = /\/+/g;
function Xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xd("" + e.key)
    : t.toString(36);
}
function br(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Cr:
          case Fd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Xl(i, 0) : r),
      Ns(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ps, "$&/") + "/"),
          br(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Ei(l) &&
            (l = Gd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ps, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ns(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Xl(o, s);
      i += br(o, t, n, u, l);
    }
  else if (((u = Kd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Xl(o, s++)), (i += br(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    br(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Yd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  Kr = { transition: null },
  Zd = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Kr,
    ReactCurrentOwner: Ci,
  };
function ra() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Rr,
  forEach: function (e, t, n) {
    Rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ei(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = Pn;
F.Fragment = Ud;
F.Profiler = Ad;
F.PureComponent = ki;
F.StrictMode = $d;
F.Suspense = Hd;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zd;
F.act = ra;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Zu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ci.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      ea.call(t, u) &&
        !ta.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Cr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bd, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = na;
F.createFactory = function (e) {
  var t = na.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Wd, render: e };
};
F.isValidElement = Ei;
F.lazy = function (e) {
  return { $$typeof: bd, _payload: { _status: -1, _result: e }, _init: Yd };
};
F.memo = function (e, t) {
  return { $$typeof: Qd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Kr.transition;
  Kr.transition = {};
  try {
    e();
  } finally {
    Kr.transition = t;
  }
};
F.unstable_act = ra;
F.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ye.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
F.useId = function () {
  return ye.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ye.current.useRef(e);
};
F.useState = function (e) {
  return ye.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ye.current.useTransition();
};
F.version = "18.3.1";
Xu.exports = F;
var g = Xu.exports;
const Jd = Dd(g),
  qd = Md({ __proto__: null, default: Jd }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ef = g,
  tf = Symbol.for("react.element"),
  nf = Symbol.for("react.fragment"),
  rf = Object.prototype.hasOwnProperty,
  lf = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  of = { key: !0, ref: !0, __self: !0, __source: !0 };
function la(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) rf.call(t, r) && !of.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: tf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: lf.current,
  };
}
Ll.Fragment = nf;
Ll.jsx = la;
Ll.jsxs = la;
Gu.exports = Ll;
var v = Gu.exports,
  oa = { exports: {} },
  Re = {},
  ia = { exports: {} },
  sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, L) {
    var T = E.length;
    E.push(L);
    e: for (; 0 < T; ) {
      var D = (T - 1) >>> 1,
        q = E[D];
      if (0 < l(q, L)) (E[D] = L), (E[T] = q), (T = D);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0],
      T = E.pop();
    if (T !== L) {
      E[0] = T;
      e: for (var D = 0, q = E.length, be = q >>> 1; D < be; ) {
        var le = 2 * (D + 1) - 1,
          qe = E[le],
          et = le + 1,
          Jt = E[et];
        if (0 > l(qe, T))
          et < q && 0 > l(Jt, qe)
            ? ((E[D] = Jt), (E[et] = T), (D = et))
            : ((E[D] = qe), (E[le] = T), (D = le));
        else if (et < q && 0 > l(Jt, T)) (E[D] = Jt), (E[et] = T), (D = et);
        else break e;
      }
    }
    return L;
  }
  function l(E, L) {
    var T = E.sortIndex - L.sortIndex;
    return T !== 0 ? T : E.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    h = 1,
    f = null,
    m = 3,
    k = !1,
    w = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= E)
        r(a), (L.sortIndex = L.expirationTime), t(u, L);
      else break;
      L = n(a);
    }
  }
  function x(E) {
    if (((y = !1), p(E), !w))
      if (n(u) !== null) (w = !0), M(j);
      else {
        var L = n(a);
        L !== null && B(x, L.startTime - E);
      }
  }
  function j(E, L) {
    (w = !1), y && ((y = !1), d(z), (z = -1)), (k = !0);
    var T = m;
    try {
      for (
        p(L), f = n(u);
        f !== null && (!(f.expirationTime > L) || (E && !re()));

      ) {
        var D = f.callback;
        if (typeof D == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var q = D(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof q == "function" ? (f.callback = q) : f === n(u) && r(u),
            p(L);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var be = !0;
      else {
        var le = n(a);
        le !== null && B(x, le.startTime - L), (be = !1);
      }
      return be;
    } finally {
      (f = null), (m = T), (k = !1);
    }
  }
  var N = !1,
    _ = null,
    z = -1,
    $ = 5,
    O = -1;
  function re() {
    return !(e.unstable_now() - O < $);
  }
  function R() {
    if (_ !== null) {
      var E = e.unstable_now();
      O = E;
      var L = !0;
      try {
        L = _(!0, E);
      } finally {
        L ? V() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var V;
  if (typeof c == "function")
    V = function () {
      c(R);
    };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(),
      Qe = J.port2;
    (J.port1.onmessage = R),
      (V = function () {
        Qe.postMessage(null);
      });
  } else
    V = function () {
      S(R, 0);
    };
  function M(E) {
    (_ = E), N || ((N = !0), V());
  }
  function B(E, L) {
    z = S(function () {
      E(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || k || ((w = !0), M(j));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var T = m;
      m = L;
      try {
        return E();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var T = m;
      m = E;
      try {
        return L();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, T) {
      var D = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? D + T : D))
          : (T = D),
        E)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = T + q),
        (E = {
          id: h++,
          callback: L,
          priorityLevel: E,
          startTime: T,
          expirationTime: q,
          sortIndex: -1,
        }),
        T > D
          ? ((E.sortIndex = T),
            t(a, E),
            n(u) === null &&
              E === n(a) &&
              (y ? (d(z), (z = -1)) : (y = !0), B(x, T - D)))
          : ((E.sortIndex = q), t(u, E), w || k || ((w = !0), M(j))),
        E
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (E) {
      var L = m;
      return function () {
        var T = m;
        m = L;
        try {
          return E.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(sa);
ia.exports = sa;
var sf = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uf = g,
  _e = sf;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var ua = new Set(),
  nr = {};
function Gt(e, t) {
  xn(e, t), xn(e + "Capture", t);
}
function xn(e, t) {
  for (nr[e] = t, e = 0; e < t.length; e++) ua.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Eo = Object.prototype.hasOwnProperty,
  af =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _s = {},
  Rs = {};
function cf(e) {
  return Eo.call(Rs, e)
    ? !0
    : Eo.call(_s, e)
      ? !1
      : af.test(e)
        ? (Rs[e] = !0)
        : ((_s[e] = !0), !1);
}
function df(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ff(e, t, n, r) {
  if (t === null || typeof t > "u" || df(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ji = /[\-:]([a-z])/g;
function Ni(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ji, Ni);
    de[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ji, Ni);
    de[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ji, Ni);
  de[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pi(e, t, n, r) {
  var l = de.hasOwnProperty(t) ? de[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ff(t, n, l, r) && (n = null),
    r || l === null
      ? cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zr = Symbol.for("react.element"),
  en = Symbol.for("react.portal"),
  tn = Symbol.for("react.fragment"),
  _i = Symbol.for("react.strict_mode"),
  jo = Symbol.for("react.profiler"),
  aa = Symbol.for("react.provider"),
  ca = Symbol.for("react.context"),
  Ri = Symbol.for("react.forward_ref"),
  No = Symbol.for("react.suspense"),
  Po = Symbol.for("react.suspense_list"),
  zi = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  da = Symbol.for("react.offscreen"),
  zs = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (zs && e[zs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Yl;
function Vn(e) {
  if (Yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yl = (t && t[1]) || "";
    }
  return (
    `
` +
    Yl +
    e
  );
}
var Zl = !1;
function Jl(e, t) {
  if (!e || Zl) return "";
  Zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vn(e) : "";
}
function pf(e) {
  switch (e.tag) {
    case 5:
      return Vn(e.type);
    case 16:
      return Vn("Lazy");
    case 13:
      return Vn("Suspense");
    case 19:
      return Vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jl(e.type, !1)), e;
    case 11:
      return (e = Jl(e.type.render, !1)), e;
    case 1:
      return (e = Jl(e.type, !0)), e;
    default:
      return "";
  }
}
function _o(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case jo:
      return "Profiler";
    case _i:
      return "StrictMode";
    case No:
      return "Suspense";
    case Po:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ca:
        return (e.displayName || "Context") + ".Consumer";
      case aa:
        return (e._context.displayName || "Context") + ".Provider";
      case Ri:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zi:
        return (
          (t = e.displayName || null), t !== null ? t : _o(e.type) || "Memo"
        );
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return _o(e(t));
        } catch {}
    }
  return null;
}
function hf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _o(t);
    case 8:
      return t === _i ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Lt(e) {
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
function fa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function mf(e) {
  var t = fa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Lr(e) {
  e._valueTracker || (e._valueTracker = mf(e));
}
function pa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ro(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ls(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ha(e, t) {
  (t = t.checked), t != null && Pi(e, "checked", t, !1);
}
function zo(e, t) {
  ha(e, t);
  var n = Lt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Lo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Lo(e, t.type, Lt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ts(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Lo(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wn = Array.isArray;
function pn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function To(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Os(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Wn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function ma(e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Is(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function va(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? va(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Tr,
  ga = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bn = {
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
  vf = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function (e) {
  vf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bn[t] = bn[e]);
  });
});
function ya(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (bn.hasOwnProperty(e) && bn[e])
      ? ("" + t).trim()
      : t + "px";
}
function wa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ya(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var gf = Y(
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
function Io(e, t) {
  if (t) {
    if (gf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Mo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Do = null;
function Li(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fo = null,
  hn = null,
  mn = null;
function Ms(e) {
  if ((e = Nr(e))) {
    if (typeof Fo != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), Fo(e.stateNode, e.type, t));
  }
}
function xa(e) {
  hn ? (mn ? mn.push(e) : (mn = [e])) : (hn = e);
}
function ka() {
  if (hn) {
    var e = hn,
      t = mn;
    if (((mn = hn = null), Ms(e), t)) for (e = 0; e < t.length; e++) Ms(t[e]);
  }
}
function Sa(e, t) {
  return e(t);
}
function Ca() {}
var ql = !1;
function Ea(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return Sa(e, t, n);
  } finally {
    (ql = !1), (hn !== null || mn !== null) && (Ca(), ka());
  }
}
function lr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Uo = !1;
if (st)
  try {
    var On = {};
    Object.defineProperty(On, "passive", {
      get: function () {
        Uo = !0;
      },
    }),
      window.addEventListener("test", On, On),
      window.removeEventListener("test", On, On);
  } catch {
    Uo = !1;
  }
function yf(e, t, n, r, l, o, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Kn = !1,
  il = null,
  sl = !1,
  $o = null,
  wf = {
    onError: function (e) {
      (Kn = !0), (il = e);
    },
  };
function xf(e, t, n, r, l, o, i, s, u) {
  (Kn = !1), (il = null), yf.apply(wf, arguments);
}
function kf(e, t, n, r, l, o, i, s, u) {
  if ((xf.apply(this, arguments), Kn)) {
    if (Kn) {
      var a = il;
      (Kn = !1), (il = null);
    } else throw Error(C(198));
    sl || ((sl = !0), ($o = a));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ja(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ds(e) {
  if (Xt(e) !== e) throw Error(C(188));
}
function Sf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ds(l), e;
        if (o === r) return Ds(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Na(e) {
  return (e = Sf(e)), e !== null ? Pa(e) : null;
}
function Pa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _a = _e.unstable_scheduleCallback,
  Fs = _e.unstable_cancelCallback,
  Cf = _e.unstable_shouldYield,
  Ef = _e.unstable_requestPaint,
  ee = _e.unstable_now,
  jf = _e.unstable_getCurrentPriorityLevel,
  Ti = _e.unstable_ImmediatePriority,
  Ra = _e.unstable_UserBlockingPriority,
  ul = _e.unstable_NormalPriority,
  Nf = _e.unstable_LowPriority,
  za = _e.unstable_IdlePriority,
  Tl = null,
  Ye = null;
function Pf(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : zf,
  _f = Math.log,
  Rf = Math.LN2;
function zf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_f(e) / Rf) | 0)) | 0;
}
var Or = 64,
  Ir = 4194304;
function Hn(e) {
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
function al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Hn(s)) : ((o &= i), o !== 0 && (r = Hn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Hn(i)) : o !== 0 && (r = Hn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Lf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Tf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ve(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = Lf(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Ao(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function La() {
  var e = Or;
  return (Or <<= 1), !(Or & 4194240) && (Or = 64), e;
}
function eo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Er(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function Of(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ve(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Oi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var A = 0;
function Ta(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Oa,
  Ii,
  Ia,
  Ma,
  Da,
  Bo = !1,
  Mr = [],
  St = null,
  Ct = null,
  Et = null,
  or = new Map(),
  ir = new Map(),
  gt = [],
  If =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Us(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      St = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ir.delete(t.pointerId);
  }
}
function In(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Nr(t)), t !== null && Ii(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Mf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (St = In(St, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ct = In(Ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (Et = In(Et, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return or.set(o, In(or.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), ir.set(o, In(ir.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Fa(e) {
  var t = Ut(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ja(n)), t !== null)) {
          (e.blockedOn = t),
            Da(e.priority, function () {
              Ia(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Do = r), n.target.dispatchEvent(r), (Do = null);
    } else return (t = Nr(n)), t !== null && Ii(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $s(e, t, n) {
  Gr(e) && n.delete(t);
}
function Df() {
  (Bo = !1),
    St !== null && Gr(St) && (St = null),
    Ct !== null && Gr(Ct) && (Ct = null),
    Et !== null && Gr(Et) && (Et = null),
    or.forEach($s),
    ir.forEach($s);
}
function Mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bo ||
      ((Bo = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Df)));
}
function sr(e) {
  function t(l) {
    return Mn(l, e);
  }
  if (0 < Mr.length) {
    Mn(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    St !== null && Mn(St, e),
      Ct !== null && Mn(Ct, e),
      Et !== null && Mn(Et, e),
      or.forEach(t),
      ir.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    Fa(n), n.blockedOn === null && gt.shift();
}
var vn = dt.ReactCurrentBatchConfig,
  cl = !0;
function Ff(e, t, n, r) {
  var l = A,
    o = vn.transition;
  vn.transition = null;
  try {
    (A = 1), Mi(e, t, n, r);
  } finally {
    (A = l), (vn.transition = o);
  }
}
function Uf(e, t, n, r) {
  var l = A,
    o = vn.transition;
  vn.transition = null;
  try {
    (A = 4), Mi(e, t, n, r);
  } finally {
    (A = l), (vn.transition = o);
  }
}
function Mi(e, t, n, r) {
  if (cl) {
    var l = Vo(e, t, n, r);
    if (l === null) co(e, t, r, dl, n), Us(e, r);
    else if (Mf(l, e, t, n, r)) r.stopPropagation();
    else if ((Us(e, r), t & 4 && -1 < If.indexOf(e))) {
      for (; l !== null; ) {
        var o = Nr(l);
        if (
          (o !== null && Oa(o),
          (o = Vo(e, t, n, r)),
          o === null && co(e, t, r, dl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else co(e, t, r, null, n);
  }
}
var dl = null;
function Vo(e, t, n, r) {
  if (((dl = null), (e = Li(r)), (e = Ut(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ja(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (dl = e), null;
}
function Ua(e) {
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
      switch (jf()) {
        case Ti:
          return 1;
        case Ra:
          return 4;
        case ul:
        case Nf:
          return 16;
        case za:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  Di = null,
  Xr = null;
function $a() {
  if (Xr) return Xr;
  var e,
    t = Di,
    n = t.length,
    r,
    l = "value" in wt ? wt.value : wt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Yr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Dr() {
  return !0;
}
function As() {
  return !1;
}
function ze(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Dr
        : As),
      (this.isPropagationStopped = As),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Dr));
      },
      persist: function () {},
      isPersistent: Dr,
    }),
    t
  );
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fi = ze(_n),
  jr = Y({}, _n, { view: 0, detail: 0 }),
  $f = ze(jr),
  to,
  no,
  Dn,
  Ol = Y({}, jr, {
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
    getModifierState: Ui,
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
        : (e !== Dn &&
            (Dn && e.type === "mousemove"
              ? ((to = e.screenX - Dn.screenX), (no = e.screenY - Dn.screenY))
              : (no = to = 0),
            (Dn = e)),
          to);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : no;
    },
  }),
  Bs = ze(Ol),
  Af = Y({}, Ol, { dataTransfer: 0 }),
  Bf = ze(Af),
  Vf = Y({}, jr, { relatedTarget: 0 }),
  ro = ze(Vf),
  Wf = Y({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hf = ze(Wf),
  Qf = Y({}, _n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bf = ze(Qf),
  Kf = Y({}, _n, { data: 0 }),
  Vs = ze(Kf),
  Gf = {
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
  Xf = {
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
  Yf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yf[e]) ? !!t[e] : !1;
}
function Ui() {
  return Zf;
}
var Jf = Y({}, jr, {
    key: function (e) {
      if (e.key) {
        var t = Gf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Xf[e.keyCode] || "Unidentified"
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
    getModifierState: Ui,
    charCode: function (e) {
      return e.type === "keypress" ? Yr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  qf = ze(Jf),
  ep = Y({}, Ol, {
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
  Ws = ze(ep),
  tp = Y({}, jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ui,
  }),
  np = ze(tp),
  rp = Y({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lp = ze(rp),
  op = Y({}, Ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  ip = ze(op),
  sp = [9, 13, 27, 32],
  $i = st && "CompositionEvent" in window,
  Gn = null;
st && "documentMode" in document && (Gn = document.documentMode);
var up = st && "TextEvent" in window && !Gn,
  Aa = st && (!$i || (Gn && 8 < Gn && 11 >= Gn)),
  Hs = " ",
  Qs = !1;
function Ba(e, t) {
  switch (e) {
    case "keyup":
      return sp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Va(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function ap(e, t) {
  switch (e) {
    case "compositionend":
      return Va(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qs = !0), Hs);
    case "textInput":
      return (e = t.data), e === Hs && Qs ? null : e;
    default:
      return null;
  }
}
function cp(e, t) {
  if (nn)
    return e === "compositionend" || (!$i && Ba(e, t))
      ? ((e = $a()), (Xr = Di = wt = null), (nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Aa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dp = {
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
function bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dp[e.type] : t === "textarea";
}
function Wa(e, t, n, r) {
  xa(r),
    (t = fl(t, "onChange")),
    0 < t.length &&
      ((n = new Fi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Xn = null,
  ur = null;
function fp(e) {
  ec(e, 0);
}
function Il(e) {
  var t = on(e);
  if (pa(t)) return e;
}
function pp(e, t) {
  if (e === "change") return t;
}
var Ha = !1;
if (st) {
  var lo;
  if (st) {
    var oo = "oninput" in document;
    if (!oo) {
      var Ks = document.createElement("div");
      Ks.setAttribute("oninput", "return;"),
        (oo = typeof Ks.oninput == "function");
    }
    lo = oo;
  } else lo = !1;
  Ha = lo && (!document.documentMode || 9 < document.documentMode);
}
function Gs() {
  Xn && (Xn.detachEvent("onpropertychange", Qa), (ur = Xn = null));
}
function Qa(e) {
  if (e.propertyName === "value" && Il(ur)) {
    var t = [];
    Wa(t, ur, e, Li(e)), Ea(fp, t);
  }
}
function hp(e, t, n) {
  e === "focusin"
    ? (Gs(), (Xn = t), (ur = n), Xn.attachEvent("onpropertychange", Qa))
    : e === "focusout" && Gs();
}
function mp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Il(ur);
}
function vp(e, t) {
  if (e === "click") return Il(t);
}
function gp(e, t) {
  if (e === "input" || e === "change") return Il(t);
}
function yp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : yp;
function ar(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Eo.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function Xs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ys(e, t) {
  var n = Xs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xs(n);
  }
}
function ba(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ba(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ka() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function Ai(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function wp(e) {
  var t = Ka(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ba(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ai(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ys(n, o));
        var i = Ys(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var xp = st && "documentMode" in document && 11 >= document.documentMode,
  rn = null,
  Wo = null,
  Yn = null,
  Ho = !1;
function Zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ho ||
    rn == null ||
    rn !== ol(r) ||
    ((r = rn),
    "selectionStart" in r && Ai(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yn && ar(Yn, r)) ||
      ((Yn = r),
      (r = fl(Wo, "onSelect")),
      0 < r.length &&
        ((t = new Fi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rn))));
}
function Fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ln = {
    animationend: Fr("Animation", "AnimationEnd"),
    animationiteration: Fr("Animation", "AnimationIteration"),
    animationstart: Fr("Animation", "AnimationStart"),
    transitionend: Fr("Transition", "TransitionEnd"),
  },
  io = {},
  Ga = {};
st &&
  ((Ga = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  "TransitionEvent" in window || delete ln.transitionend.transition);
function Ml(e) {
  if (io[e]) return io[e];
  if (!ln[e]) return e;
  var t = ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ga) return (io[e] = t[n]);
  return e;
}
var Xa = Ml("animationend"),
  Ya = Ml("animationiteration"),
  Za = Ml("animationstart"),
  Ja = Ml("transitionend"),
  qa = new Map(),
  Js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ot(e, t) {
  qa.set(e, t), Gt(t, [e]);
}
for (var so = 0; so < Js.length; so++) {
  var uo = Js[so],
    kp = uo.toLowerCase(),
    Sp = uo[0].toUpperCase() + uo.slice(1);
  Ot(kp, "on" + Sp);
}
Ot(Xa, "onAnimationEnd");
Ot(Ya, "onAnimationIteration");
Ot(Za, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Ja, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
Gt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Gt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Gt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Gt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Cp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
function qs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kf(r, t, void 0, e), (e.currentTarget = null);
}
function ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          qs(l, s, a), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          qs(l, s, a), (o = u);
        }
    }
  }
  if (sl) throw ((e = $o), (sl = !1), ($o = null), e);
}
function Q(e, t) {
  var n = t[Xo];
  n === void 0 && (n = t[Xo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tc(t, e, 2, !1), n.add(r));
}
function ao(e, t, n) {
  var r = 0;
  t && (r |= 4), tc(n, e, r, t);
}
var Ur = "_reactListening" + Math.random().toString(36).slice(2);
function cr(e) {
  if (!e[Ur]) {
    (e[Ur] = !0),
      ua.forEach(function (n) {
        n !== "selectionchange" && (Cp.has(n) || ao(n, !1, e), ao(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ur] || ((t[Ur] = !0), ao("selectionchange", !1, t));
  }
}
function tc(e, t, n, r) {
  switch (Ua(t)) {
    case 1:
      var l = Ff;
      break;
    case 4:
      l = Uf;
      break;
    default:
      l = Mi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Uo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function co(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Ut(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ea(function () {
    var a = o,
      h = Li(n),
      f = [];
    e: {
      var m = qa.get(e);
      if (m !== void 0) {
        var k = Fi,
          w = e;
        switch (e) {
          case "keypress":
            if (Yr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = qf;
            break;
          case "focusin":
            (w = "focus"), (k = ro);
            break;
          case "focusout":
            (w = "blur"), (k = ro);
            break;
          case "beforeblur":
          case "afterblur":
            k = ro;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Bs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Bf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = np;
            break;
          case Xa:
          case Ya:
          case Za:
            k = Hf;
            break;
          case Ja:
            k = lp;
            break;
          case "scroll":
            k = $f;
            break;
          case "wheel":
            k = ip;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Ws;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          d = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              d !== null && ((x = lr(c, d)), x != null && y.push(dr(c, x, p)))),
            S)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((m = new k(m, w, null, n, h)), f.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Do &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ut(w) || w[ut]))
        )
          break e;
        if (
          (k || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          k
            ? ((w = n.relatedTarget || n.toElement),
              (k = a),
              (w = w ? Ut(w) : null),
              w !== null &&
                ((S = Xt(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((k = null), (w = a)),
          k !== w)
        ) {
          if (
            ((y = Bs),
            (x = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ws),
              (x = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (S = k == null ? m : on(k)),
            (p = w == null ? m : on(w)),
            (m = new y(x, c + "leave", k, n, h)),
            (m.target = S),
            (m.relatedTarget = p),
            (x = null),
            Ut(h) === a &&
              ((y = new y(d, c + "enter", w, n, h)),
              (y.target = p),
              (y.relatedTarget = S),
              (x = y)),
            (S = x),
            k && w)
          )
            t: {
              for (y = k, d = w, c = 0, p = y; p; p = qt(p)) c++;
              for (p = 0, x = d; x; x = qt(x)) p++;
              for (; 0 < c - p; ) (y = qt(y)), c--;
              for (; 0 < p - c; ) (d = qt(d)), p--;
              for (; c--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = qt(y)), (d = qt(d));
              }
              y = null;
            }
          else y = null;
          k !== null && eu(f, m, k, y, !1),
            w !== null && S !== null && eu(f, S, w, y, !0);
        }
      }
      e: {
        if (
          ((m = a ? on(a) : window),
          (k = m.nodeName && m.nodeName.toLowerCase()),
          k === "select" || (k === "input" && m.type === "file"))
        )
          var j = pp;
        else if (bs(m))
          if (Ha) j = gp;
          else {
            j = mp;
            var N = hp;
          }
        else
          (k = m.nodeName) &&
            k.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (j = vp);
        if (j && (j = j(e, a))) {
          Wa(f, j, n, h);
          break e;
        }
        N && N(e, m, a),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            Lo(m, "number", m.value);
      }
      switch (((N = a ? on(a) : window), e)) {
        case "focusin":
          (bs(N) || N.contentEditable === "true") &&
            ((rn = N), (Wo = a), (Yn = null));
          break;
        case "focusout":
          Yn = Wo = rn = null;
          break;
        case "mousedown":
          Ho = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ho = !1), Zs(f, n, h);
          break;
        case "selectionchange":
          if (xp) break;
        case "keydown":
        case "keyup":
          Zs(f, n, h);
      }
      var _;
      if ($i)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        nn
          ? Ba(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (Aa &&
          n.locale !== "ko" &&
          (nn || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && nn && (_ = $a())
            : ((wt = h),
              (Di = "value" in wt ? wt.value : wt.textContent),
              (nn = !0))),
        (N = fl(a, z)),
        0 < N.length &&
          ((z = new Vs(z, e, null, n, h)),
          f.push({ event: z, listeners: N }),
          _ ? (z.data = _) : ((_ = Va(n)), _ !== null && (z.data = _)))),
        (_ = up ? ap(e, n) : cp(e, n)) &&
          ((a = fl(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Vs("onBeforeInput", "beforeinput", null, n, h)),
            f.push({ event: h, listeners: a }),
            (h.data = _)));
    }
    ec(f, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = lr(e, n)),
      o != null && r.unshift(dr(e, o, l)),
      (o = lr(e, t)),
      o != null && r.push(dr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = lr(n, o)), u != null && i.unshift(dr(n, u, s)))
        : l || ((u = lr(n, o)), u != null && i.push(dr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ep = /\r\n?/g,
  jp = /\u0000|\uFFFD/g;
function tu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ep,
      `
`,
    )
    .replace(jp, "");
}
function $r(e, t, n) {
  if (((t = tu(t)), tu(e) !== t && n)) throw Error(C(425));
}
function pl() {}
var Qo = null,
  bo = null;
function Ko(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Go = typeof setTimeout == "function" ? setTimeout : void 0,
  Np = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nu = typeof Promise == "function" ? Promise : void 0,
  Pp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nu < "u"
        ? function (e) {
            return nu.resolve(null).then(e).catch(_p);
          }
        : Go;
function _p(e) {
  setTimeout(function () {
    throw e;
  });
}
function fo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), sr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  sr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Rn = Math.random().toString(36).slice(2),
  Xe = "__reactFiber$" + Rn,
  fr = "__reactProps$" + Rn,
  ut = "__reactContainer$" + Rn,
  Xo = "__reactEvents$" + Rn,
  Rp = "__reactListeners$" + Rn,
  zp = "__reactHandles$" + Rn;
function Ut(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ut] || n[Xe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ru(e); e !== null; ) {
          if ((n = e[Xe])) return n;
          e = ru(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Nr(e) {
  return (
    (e = e[Xe] || e[ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function on(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Dl(e) {
  return e[fr] || null;
}
var Yo = [],
  sn = -1;
function It(e) {
  return { current: e };
}
function b(e) {
  0 > sn || ((e.current = Yo[sn]), (Yo[sn] = null), sn--);
}
function W(e, t) {
  sn++, (Yo[sn] = e.current), (e.current = t);
}
var Tt = {},
  me = It(Tt),
  Se = It(!1),
  Wt = Tt;
function kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function hl() {
  b(Se), b(me);
}
function lu(e, t, n) {
  if (me.current !== Tt) throw Error(C(168));
  W(me, t), W(Se, n);
}
function nc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, hf(e) || "Unknown", l));
  return Y({}, n, r);
}
function ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
    (Wt = me.current),
    W(me, e),
    W(Se, Se.current),
    !0
  );
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = nc(e, t, Wt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(Se),
      b(me),
      W(me, e))
    : b(Se),
    W(Se, n);
}
var rt = null,
  Fl = !1,
  po = !1;
function rc(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Lp(e) {
  (Fl = !0), rc(e);
}
function Mt() {
  if (!po && rt !== null) {
    po = !0;
    var e = 0,
      t = A;
    try {
      var n = rt;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (Fl = !1);
    } catch (l) {
      throw (rt !== null && (rt = rt.slice(e + 1)), _a(Ti, Mt), l);
    } finally {
      (A = t), (po = !1);
    }
  }
  return null;
}
var un = [],
  an = 0,
  vl = null,
  gl = 0,
  Le = [],
  Te = 0,
  Ht = null,
  lt = 1,
  ot = "";
function Dt(e, t) {
  (un[an++] = gl), (un[an++] = vl), (vl = e), (gl = t);
}
function lc(e, t, n) {
  (Le[Te++] = lt), (Le[Te++] = ot), (Le[Te++] = Ht), (Ht = e);
  var r = lt;
  e = ot;
  var l = 32 - Ve(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ve(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (lt = (1 << (32 - Ve(t) + l)) | (n << l) | r),
      (ot = o + e);
  } else (lt = (1 << o) | (n << l) | r), (ot = e);
}
function Bi(e) {
  e.return !== null && (Dt(e, 1), lc(e, 1, 0));
}
function Vi(e) {
  for (; e === vl; )
    (vl = un[--an]), (un[an] = null), (gl = un[--an]), (un[an] = null);
  for (; e === Ht; )
    (Ht = Le[--Te]),
      (Le[Te] = null),
      (ot = Le[--Te]),
      (Le[Te] = null),
      (lt = Le[--Te]),
      (Le[Te] = null);
}
var Pe = null,
  Ne = null,
  K = !1,
  Ae = null;
function oc(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (Ne = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ht !== null ? { id: lt, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pe = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jo(e) {
  if (K) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!iu(e, t)) {
        if (Zo(e)) throw Error(C(418));
        t = jt(n.nextSibling);
        var r = Pe;
        t && iu(e, t)
          ? oc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Pe = e));
      }
    } else {
      if (Zo(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Pe = e);
    }
  }
}
function su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function Ar(e) {
  if (e !== Pe) return !1;
  if (!K) return su(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (Zo(e)) throw (ic(), Error(C(418)));
    for (; t; ) oc(e, t), (t = jt(t.nextSibling));
  }
  if ((su(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Pe ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function ic() {
  for (var e = Ne; e; ) e = jt(e.nextSibling);
}
function Sn() {
  (Ne = Pe = null), (K = !1);
}
function Wi(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
var Tp = dt.ReactCurrentBatchConfig;
function Fn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function uu(e) {
  var t = e._init;
  return t(e._payload);
}
function sc(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = Rt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, p, x) {
    return c === null || c.tag !== 6
      ? ((c = xo(p, d.mode, x)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function u(d, c, p, x) {
    var j = p.type;
    return j === tn
      ? h(d, c, p.props.children, x, p.key)
      : c !== null &&
          (c.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === mt &&
              uu(j) === c.type))
        ? ((x = l(c, p.props)), (x.ref = Fn(d, c, p)), (x.return = d), x)
        : ((x = rl(p.type, p.key, p.props, null, d.mode, x)),
          (x.ref = Fn(d, c, p)),
          (x.return = d),
          x);
  }
  function a(d, c, p, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ko(p, d.mode, x)), (c.return = d), c)
      : ((c = l(c, p.children || [])), (c.return = d), c);
  }
  function h(d, c, p, x, j) {
    return c === null || c.tag !== 7
      ? ((c = Vt(p, d.mode, x, j)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function f(d, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = xo("" + c, d.mode, p)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case zr:
          return (
            (p = rl(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Fn(d, null, c)),
            (p.return = d),
            p
          );
        case en:
          return (c = ko(c, d.mode, p)), (c.return = d), c;
        case mt:
          var x = c._init;
          return f(d, x(c._payload), p);
      }
      if (Wn(c) || Tn(c))
        return (c = Vt(c, d.mode, p, null)), (c.return = d), c;
      Br(d, c);
    }
    return null;
  }
  function m(d, c, p, x) {
    var j = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return j !== null ? null : s(d, c, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          return p.key === j ? u(d, c, p, x) : null;
        case en:
          return p.key === j ? a(d, c, p, x) : null;
        case mt:
          return (j = p._init), m(d, c, j(p._payload), x);
      }
      if (Wn(p) || Tn(p)) return j !== null ? null : h(d, c, p, x, null);
      Br(d, p);
    }
    return null;
  }
  function k(d, c, p, x, j) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (d = d.get(p) || null), s(c, d, "" + x, j);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case zr:
          return (d = d.get(x.key === null ? p : x.key) || null), u(c, d, x, j);
        case en:
          return (d = d.get(x.key === null ? p : x.key) || null), a(c, d, x, j);
        case mt:
          var N = x._init;
          return k(d, c, p, N(x._payload), j);
      }
      if (Wn(x) || Tn(x)) return (d = d.get(p) || null), h(c, d, x, j, null);
      Br(c, x);
    }
    return null;
  }
  function w(d, c, p, x) {
    for (
      var j = null, N = null, _ = c, z = (c = 0), $ = null;
      _ !== null && z < p.length;
      z++
    ) {
      _.index > z ? (($ = _), (_ = null)) : ($ = _.sibling);
      var O = m(d, _, p[z], x);
      if (O === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && O.alternate === null && t(d, _),
        (c = o(O, c, z)),
        N === null ? (j = O) : (N.sibling = O),
        (N = O),
        (_ = $);
    }
    if (z === p.length) return n(d, _), K && Dt(d, z), j;
    if (_ === null) {
      for (; z < p.length; z++)
        (_ = f(d, p[z], x)),
          _ !== null &&
            ((c = o(_, c, z)), N === null ? (j = _) : (N.sibling = _), (N = _));
      return K && Dt(d, z), j;
    }
    for (_ = r(d, _); z < p.length; z++)
      ($ = k(_, d, z, p[z], x)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? z : $.key),
          (c = o($, c, z)),
          N === null ? (j = $) : (N.sibling = $),
          (N = $));
    return (
      e &&
        _.forEach(function (re) {
          return t(d, re);
        }),
      K && Dt(d, z),
      j
    );
  }
  function y(d, c, p, x) {
    var j = Tn(p);
    if (typeof j != "function") throw Error(C(150));
    if (((p = j.call(p)), p == null)) throw Error(C(151));
    for (
      var N = (j = null), _ = c, z = (c = 0), $ = null, O = p.next();
      _ !== null && !O.done;
      z++, O = p.next()
    ) {
      _.index > z ? (($ = _), (_ = null)) : ($ = _.sibling);
      var re = m(d, _, O.value, x);
      if (re === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && re.alternate === null && t(d, _),
        (c = o(re, c, z)),
        N === null ? (j = re) : (N.sibling = re),
        (N = re),
        (_ = $);
    }
    if (O.done) return n(d, _), K && Dt(d, z), j;
    if (_ === null) {
      for (; !O.done; z++, O = p.next())
        (O = f(d, O.value, x)),
          O !== null &&
            ((c = o(O, c, z)), N === null ? (j = O) : (N.sibling = O), (N = O));
      return K && Dt(d, z), j;
    }
    for (_ = r(d, _); !O.done; z++, O = p.next())
      (O = k(_, d, z, O.value, x)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? z : O.key),
          (c = o(O, c, z)),
          N === null ? (j = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        _.forEach(function (R) {
          return t(d, R);
        }),
      K && Dt(d, z),
      j
    );
  }
  function S(d, c, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === tn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case zr:
          e: {
            for (var j = p.key, N = c; N !== null; ) {
              if (N.key === j) {
                if (((j = p.type), j === tn)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (c = l(N, p.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  N.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === mt &&
                    uu(j) === N.type)
                ) {
                  n(d, N.sibling),
                    (c = l(N, p.props)),
                    (c.ref = Fn(d, N, p)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            p.type === tn
              ? ((c = Vt(p.props.children, d.mode, x, p.key)),
                (c.return = d),
                (d = c))
              : ((x = rl(p.type, p.key, p.props, null, d.mode, x)),
                (x.ref = Fn(d, c, p)),
                (x.return = d),
                (d = x));
          }
          return i(d);
        case en:
          e: {
            for (N = p.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ko(p, d.mode, x)), (c.return = d), (d = c);
          }
          return i(d);
        case mt:
          return (N = p._init), S(d, c, N(p._payload), x);
      }
      if (Wn(p)) return w(d, c, p, x);
      if (Tn(p)) return y(d, c, p, x);
      Br(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = xo(p, d.mode, x)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return S;
}
var Cn = sc(!0),
  uc = sc(!1),
  yl = It(null),
  wl = null,
  cn = null,
  Hi = null;
function Qi() {
  Hi = cn = wl = null;
}
function bi(e) {
  var t = yl.current;
  b(yl), (e._currentValue = t);
}
function qo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function gn(e, t) {
  (wl = e),
    (Hi = cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (Hi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
      if (wl === null) throw Error(C(308));
      (cn = e), (wl.dependencies = { lanes: 0, firstContext: e });
    } else cn = cn.next = e;
  return t;
}
var $t = null;
function Ki(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function ac(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ki(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    at(e, r)
  );
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Gi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      at(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ki(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    at(e, n)
  );
}
function Zr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oi(e, n);
  }
}
function au(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xl(e, t, n, r) {
  var l = e.updateQueue;
  vt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (o = a) : (i.next = a), (i = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== i &&
        (s === null ? (h.firstBaseUpdate = a) : (s.next = a),
        (h.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = l.baseState;
    (i = 0), (h = a = u = null), (s = o);
    do {
      var m = s.lane,
        k = s.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: k,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            y = s;
          switch (((m = t), (k = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                f = w.call(k, f, m);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (m = typeof w == "function" ? w.call(k, f, m) : w),
                m == null)
              )
                break e;
              f = Y({}, f, m);
              break e;
            case 2:
              vt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (k = {
          eventTime: k,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((a = h = k), (u = f)) : (h = h.next = k),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = f),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (bt |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function cu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var Pr = {},
  Ze = It(Pr),
  pr = It(Pr),
  hr = It(Pr);
function At(e) {
  if (e === Pr) throw Error(C(174));
  return e;
}
function Xi(e, t) {
  switch ((W(hr, t), W(pr, e), W(Ze, Pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Oo(t, e));
  }
  b(Ze), W(Ze, t);
}
function En() {
  b(Ze), b(pr), b(hr);
}
function dc(e) {
  At(hr.current);
  var t = At(Ze.current),
    n = Oo(t, e.type);
  t !== n && (W(pr, e), W(Ze, n));
}
function Yi(e) {
  pr.current === e && (b(Ze), b(pr));
}
var G = It(0);
function kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ho = [];
function Zi() {
  for (var e = 0; e < ho.length; e++)
    ho[e]._workInProgressVersionPrimary = null;
  ho.length = 0;
}
var Jr = dt.ReactCurrentDispatcher,
  mo = dt.ReactCurrentBatchConfig,
  Qt = 0,
  X = null,
  oe = null,
  se = null,
  Sl = !1,
  Zn = !1,
  mr = 0,
  Op = 0;
function fe() {
  throw Error(C(321));
}
function Ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function qi(e, t, n, r, l, o) {
  if (
    ((Qt = o),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Jr.current = e === null || e.memoizedState === null ? Fp : Up),
    (e = n(r, l)),
    Zn)
  ) {
    o = 0;
    do {
      if (((Zn = !1), (mr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (se = oe = null),
        (t.updateQueue = null),
        (Jr.current = $p),
        (e = n(r, l));
    } while (Zn);
  }
  if (
    ((Jr.current = Cl),
    (t = oe !== null && oe.next !== null),
    (Qt = 0),
    (se = oe = X = null),
    (Sl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function es() {
  var e = mr !== 0;
  return (mr = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (X.memoizedState = se = e) : (se = se.next = e), se;
}
function De() {
  if (oe === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = se === null ? X.memoizedState : se.next;
  if (t !== null) (se = t), (oe = e);
  else {
    if (e === null) throw Error(C(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      se === null ? (X.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function vr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vo(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = oe,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = o;
    do {
      var h = a.lane;
      if ((Qt & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (i = r)) : (u = u.next = f),
          (X.lanes |= h),
          (bt |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (i = r) : (u.next = s),
      He(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (X.lanes |= o), (bt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function go(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    He(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function fc() {}
function pc(e, t) {
  var n = X,
    r = De(),
    l = t(),
    o = !He(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ke = !0)),
    (r = r.queue),
    ts(vc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gr(9, mc.bind(null, n, r, l, t), void 0, null),
      ue === null)
    )
      throw Error(C(349));
    Qt & 30 || hc(n, t, l);
  }
  return l;
}
function hc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gc(t) && yc(e);
}
function vc(e, t, n) {
  return n(function () {
    gc(t) && yc(e);
  });
}
function gc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function yc(e) {
  var t = at(e, 1);
  t !== null && We(t, e, 1, -1);
}
function du(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Dp.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wc() {
  return De().memoizedState;
}
function qr(e, t, n, r) {
  var l = Ge();
  (X.flags |= e),
    (l.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ul(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (oe !== null) {
    var i = oe.memoizedState;
    if (((o = i.destroy), r !== null && Ji(r, i.deps))) {
      l.memoizedState = gr(t, n, o, r);
      return;
    }
  }
  (X.flags |= e), (l.memoizedState = gr(1 | t, n, o, r));
}
function fu(e, t) {
  return qr(8390656, 8, e, t);
}
function ts(e, t) {
  return Ul(2048, 8, e, t);
}
function xc(e, t) {
  return Ul(4, 2, e, t);
}
function kc(e, t) {
  return Ul(4, 4, e, t);
}
function Sc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Cc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ul(4, 4, Sc.bind(null, t, e), n)
  );
}
function ns() {}
function Ec(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function jc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nc(e, t, n) {
  return Qt & 21
    ? (He(n, t) || ((n = La()), (X.lanes |= n), (bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Ip(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = mo.transition;
  mo.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (mo.transition = r);
  }
}
function Pc() {
  return De().memoizedState;
}
function Mp(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _c(e))
  )
    Rc(t, n);
  else if (((n = ac(e, t, n, r)), n !== null)) {
    var l = ge();
    We(n, e, r, l), zc(n, t, r);
  }
}
function Dp(e, t, n) {
  var r = _t(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_c(e)) Rc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), He(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ki(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ac(e, t, l, r)),
      n !== null && ((l = ge()), We(n, e, r, l), zc(n, t, r));
  }
}
function _c(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Rc(e, t) {
  Zn = Sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oi(e, n);
  }
}
var Cl = {
    readContext: Me,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  Fp = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: fu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qr(4194308, 4, Sc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Mp.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: du,
    useDebugValue: ns,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = du(!1),
        t = e[0];
      return (e = Ip.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        l = Ge();
      if (K) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(C(349));
        Qt & 30 || hc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        fu(vc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        gr(9, mc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = ue.identifierPrefix;
      if (K) {
        var n = ot,
          r = lt;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = mr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Op++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Up = {
    readContext: Me,
    useCallback: Ec,
    useContext: Me,
    useEffect: ts,
    useImperativeHandle: Cc,
    useInsertionEffect: xc,
    useLayoutEffect: kc,
    useMemo: jc,
    useReducer: vo,
    useRef: wc,
    useState: function () {
      return vo(vr);
    },
    useDebugValue: ns,
    useDeferredValue: function (e) {
      var t = De();
      return Nc(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = vo(vr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: pc,
    useId: Pc,
    unstable_isNewReconciler: !1,
  },
  $p = {
    readContext: Me,
    useCallback: Ec,
    useContext: Me,
    useEffect: ts,
    useImperativeHandle: Cc,
    useInsertionEffect: xc,
    useLayoutEffect: kc,
    useMemo: jc,
    useReducer: go,
    useRef: wc,
    useState: function () {
      return go(vr);
    },
    useDebugValue: ns,
    useDeferredValue: function (e) {
      var t = De();
      return oe === null ? (t.memoizedState = e) : Nc(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = go(vr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: pc,
    useId: Pc,
    unstable_isNewReconciler: !1,
  };
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ei(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      l = _t(e),
      o = it(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, l)),
      t !== null && (We(t, e, l, r), Zr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      l = _t(e),
      o = it(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, l)),
      t !== null && (We(t, e, l, r), Zr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ge(),
      r = _t(e),
      l = it(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Nt(e, l, r)),
      t !== null && (We(t, e, r, n), Zr(t, e, r));
  },
};
function pu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ar(n, r) || !ar(l, o)
        : !0
  );
}
function Lc(e, t, n) {
  var r = !1,
    l = Tt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Me(o))
      : ((l = Ce(t) ? Wt : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? kn(e, l) : Tt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function hu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $l.enqueueReplaceState(t, t.state, null);
}
function ti(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Gi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Me(o))
    : ((o = Ce(t) ? Wt : me.current), (l.context = kn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ei(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && $l.enqueueReplaceState(l, l.state, null),
      xl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += pf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function yo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ni(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ap = typeof WeakMap == "function" ? WeakMap : Map;
function Tc(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      jl || ((jl = !0), (fi = r)), ni(e, t);
    }),
    n
  );
}
function Oc(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ni(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ni(e, t),
          typeof r != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ap();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = eh.bind(null, e, t, n)), t.then(e, e));
}
function vu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Bp = dt.ReactCurrentOwner,
  ke = !1;
function ve(e, t, n, r) {
  t.child = e === null ? uc(t, null, n, r) : Cn(t, e.child, n, r);
}
function yu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    gn(t, l),
    (r = qi(e, t, n, r, o, l)),
    (n = es()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (K && n && Bi(t), (t.flags |= 1), ve(e, t, r, l), t.child)
  );
}
function wu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !cs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ic(e, t, o, r, l))
      : ((e = rl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ar), n(i, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Rt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ic(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ar(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return ri(e, t, n, r, l);
}
function Mc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(fn, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(fn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(fn, je),
        (je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(fn, je),
      (je |= r);
  return ve(e, t, l, n), t.child;
}
function Dc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ri(e, t, n, r, l) {
  var o = Ce(n) ? Wt : me.current;
  return (
    (o = kn(t, o)),
    gn(t, l),
    (n = qi(e, t, n, r, o, l)),
    (r = es()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (K && r && Bi(t), (t.flags |= 1), ve(e, t, n, l), t.child)
  );
}
function xu(e, t, n, r, l) {
  if (Ce(n)) {
    var o = !0;
    ml(t);
  } else o = !1;
  if ((gn(t, l), t.stateNode === null))
    el(e, t), Lc(t, n, r), ti(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Me(a))
      : ((a = Ce(n) ? Wt : me.current), (a = kn(t, a)));
    var h = n.getDerivedStateFromProps,
      f =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && hu(t, i, r, a)),
      (vt = !1);
    var m = t.memoizedState;
    (i.state = m),
      xl(t, r, i, l),
      (u = t.memoizedState),
      s !== r || m !== u || Se.current || vt
        ? (typeof h == "function" && (ei(t, n, h, r), (u = t.memoizedState)),
          (s = vt || pu(t, n, s, r, m, u, a))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      cc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Ue(t.type, s)),
      (i.props = a),
      (f = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Me(u))
        : ((u = Ce(n) ? Wt : me.current), (u = kn(t, u)));
    var k = n.getDerivedStateFromProps;
    (h =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== f || m !== u) && hu(t, i, r, u)),
      (vt = !1),
      (m = t.memoizedState),
      (i.state = m),
      xl(t, r, i, l);
    var w = t.memoizedState;
    s !== f || m !== w || Se.current || vt
      ? (typeof k == "function" && (ei(t, n, k, r), (w = t.memoizedState)),
        (a = vt || pu(t, n, a, r, m, w, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return li(e, t, n, r, o, l);
}
function li(e, t, n, r, l, o) {
  Dc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ou(t, n, !1), ct(e, t, o);
  (r = t.stateNode), (Bp.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Cn(t, e.child, null, o)), (t.child = Cn(t, null, s, o)))
      : ve(e, t, s, o),
    (t.memoizedState = r.state),
    l && ou(t, n, !0),
    t.child
  );
}
function Fc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && lu(e, t.context, !1),
    Xi(e, t.containerInfo);
}
function ku(e, t, n, r, l) {
  return Sn(), Wi(l), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function ii(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uc(e, t, n) {
  var r = t.pendingProps,
    l = G.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    W(G, l & 1),
    e === null)
  )
    return (
      Jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Vl(i, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ii(n)),
              (t.memoizedState = oi),
              e)
            : rs(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Vp(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Rt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Rt(s, o)) : ((o = Vt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ii(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = oi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Rt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function rs(e, t) {
  return (
    (t = Vl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vr(e, t, n, r) {
  return (
    r !== null && Wi(r),
    Cn(t, e.child, null, n),
    (e = rs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = yo(Error(C(422)))), Vr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Vl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Vt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Cn(t, e.child, null, i),
          (t.child.memoizedState = ii(i)),
          (t.memoizedState = oi),
          o);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(C(419))), (r = yo(o, r, void 0)), Vr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ke || s)) {
    if (((r = ue), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), at(e, l), We(r, e, l, -1));
    }
    return as(), (r = yo(Error(C(421)))), Vr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = th.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ne = jt(l.nextSibling)),
      (Pe = t),
      (K = !0),
      (Ae = null),
      e !== null &&
        ((Le[Te++] = lt),
        (Le[Te++] = ot),
        (Le[Te++] = Ht),
        (lt = e.id),
        (ot = e.overflow),
        (Ht = t)),
      (t = rs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Su(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qo(e.return, t, n);
}
function wo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function $c(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ve(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
        else if (e.tag === 19) Su(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && kl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          wo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && kl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        wo(t, !0, n, null, o);
        break;
      case "together":
        wo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function el(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wp(e, t, n) {
  switch (t.tag) {
    case 3:
      Fc(t), Sn();
      break;
    case 5:
      dc(t);
      break;
    case 1:
      Ce(t.type) && ml(t);
      break;
    case 4:
      Xi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      W(yl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Uc(e, t, n)
            : (W(G, G.current & 1),
              (e = ct(e, t, n)),
              e !== null ? e.sibling : null);
      W(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $c(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        W(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mc(e, t, n);
  }
  return ct(e, t, n);
}
var Ac, si, Bc, Vc;
Ac = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
si = function () {};
Bc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), At(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ro(e, l)), (r = Ro(e, r)), (o = []);
        break;
      case "select":
        (l = Y({}, l, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = To(e, l)), (r = To(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pl);
    }
    Io(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (nr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(a, "" + u)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (nr.hasOwnProperty(a)
                  ? (u != null && a === "onScroll" && Q("scroll", e),
                    o || s === u || (o = []))
                  : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Un(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hp(e, t, n) {
  var r = t.pendingProps;
  switch ((Vi(t), t.tag)) {
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
      return pe(t), null;
    case 1:
      return Ce(t.type) && hl(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        En(),
        b(Se),
        b(me),
        Zi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ar(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ae !== null && (mi(Ae), (Ae = null)))),
        si(e, t),
        pe(t),
        null
      );
    case 5:
      Yi(t);
      var l = At(hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Bc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return pe(t), null;
        }
        if (((e = At(Ze.current)), Ar(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Xe] = t), (r[fr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Qn.length; l++) Q(Qn[l], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              Ls(r, o), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              Os(r, o), Q("invalid", r);
          }
          Io(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : nr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              Lr(r), Ts(r, o, !0);
              break;
            case "textarea":
              Lr(r), Is(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = pl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = va(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Xe] = t),
            (e[fr] = r),
            Ac(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Mo(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Qn.length; l++) Q(Qn[l], e);
                l = r;
                break;
              case "source":
                Q("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (l = r);
                break;
              case "details":
                Q("toggle", e), (l = r);
                break;
              case "input":
                Ls(e, r), (l = Ro(e, r)), Q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Y({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                Os(e, r), (l = To(e, r)), Q("invalid", e);
                break;
              default:
                l = r;
            }
            Io(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? wa(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && ga(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && rr(e, u)
                        : typeof u == "number" && rr(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (nr.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && Q("scroll", e)
                          : u != null && Pi(e, o, u, i));
              }
            switch (n) {
              case "input":
                Lr(e), Ts(e, r, !1);
                break;
              case "textarea":
                Lr(e), Is(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? pn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      pn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = pl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = At(hr.current)), At(Ze.current), Ar(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xe] = t),
            (o = r.nodeValue !== n) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xe] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (b(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Ne !== null && t.mode & 1 && !(t.flags & 128))
          ic(), Sn(), (t.flags |= 98560), (o = !1);
        else if (((o = Ar(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[Xe] = t;
          } else
            Sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else Ae !== null && (mi(Ae), (Ae = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? ie === 0 && (ie = 3) : as())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        En(), si(e, t), e === null && cr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return bi(t.type._context), pe(t), null;
    case 17:
      return Ce(t.type) && hl(), pe(t), null;
    case 19:
      if ((b(G), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Un(o, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = kl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Un(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Nn &&
            ((t.flags |= 128), (r = !0), Un(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = kl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Un(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !K)
            )
              return pe(t), null;
          } else
            2 * ee() - o.renderingStartTime > Nn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Un(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = G.current),
          W(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        us(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Qp(e, t) {
  switch ((Vi(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        En(),
        b(Se),
        b(me),
        Zi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Yi(t), null;
    case 13:
      if ((b(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Sn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return b(G), null;
    case 4:
      return En(), null;
    case 10:
      return bi(t.type._context), null;
    case 22:
    case 23:
      return us(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wr = !1,
  he = !1,
  bp = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function ui(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Cu = !1;
function Kp(e, t) {
  if (((Qo = cl), (e = Ka()), Ai(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            h = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var k;
              f !== n || (l !== 0 && f.nodeType !== 3) || (s = i + l),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (k = f.firstChild) !== null;

            )
              (m = f), (f = k);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++a === l && (s = i),
                m === o && ++h === r && (u = i),
                (k = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = k;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bo = { focusedElem: e, selectionRange: n }, cl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    S = w.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ue(t.type, y),
                      S,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          Z(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (w = Cu), (Cu = !1), w;
}
function Jn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ui(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ai(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Wc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xe], delete t[fr], delete t[Xo], delete t[Rp], delete t[zp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Eu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hc(e.return)) return null;
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
function ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), (e = e.sibling);
}
function di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (di(e, t, n), e = e.sibling; e !== null; ) di(e, t, n), (e = e.sibling);
}
var ae = null,
  $e = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), (n = n.sibling);
}
function Qc(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Tl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || dn(n, t);
    case 6:
      var r = ae,
        l = $e;
      (ae = null),
        ft(e, t, n),
        (ae = r),
        ($e = l),
        ae !== null &&
          ($e
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        ($e
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? fo(e.parentNode, n)
              : e.nodeType === 1 && fo(e, n),
            sr(e))
          : fo(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (l = $e),
        (ae = n.stateNode.containerInfo),
        ($e = !0),
        ft(e, t, n),
        (ae = r),
        ($e = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ui(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (
        !he &&
        (dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), ft(e, t, n), (he = r))
        : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bp()),
      t.forEach(function (r) {
        var l = nh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ae = s.stateNode), ($e = !1);
              break e;
            case 3:
              (ae = s.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (ae = s.stateNode.containerInfo), ($e = !0);
              break e;
          }
          s = s.return;
        }
        if (ae === null) throw Error(C(160));
        Qc(o, i, l), (ae = null), ($e = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (a) {
        Z(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bc(t, e), (t = t.sibling);
}
function bc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), Ke(e), r & 4)) {
        try {
          Jn(3, e, e.return), Al(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          Jn(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 1:
      Fe(t, e), Ke(e), r & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        Ke(e),
        r & 512 && n !== null && dn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          rr(l, "");
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && ha(l, o),
              Mo(s, i);
            var a = Mo(s, o);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                f = u[i + 1];
              h === "style"
                ? wa(l, f)
                : h === "dangerouslySetInnerHTML"
                  ? ga(l, f)
                  : h === "children"
                    ? rr(l, f)
                    : Pi(l, h, f, a);
            }
            switch (s) {
              case "input":
                zo(l, o);
                break;
              case "textarea":
                ma(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? pn(l, !!o.multiple, k, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? pn(l, !!o.multiple, o.defaultValue, !0)
                      : pn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[fr] = o;
          } catch (y) {
            Z(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), Ke(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          sr(t.containerInfo);
        } catch (y) {
          Z(e, e.return, y);
        }
      break;
    case 4:
      Fe(t, e), Ke(e);
      break;
    case 13:
      Fe(t, e),
        Ke(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (is = ee())),
        r & 4 && ju(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (a = he) || h), Fe(t, e), (he = a)) : Fe(t, e),
        Ke(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (P = e, h = e.child; h !== null; ) {
            for (f = P = h; P !== null; ) {
              switch (((m = P), (k = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jn(4, m, m.return);
                  break;
                case 1:
                  dn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      Z(r, n, y);
                    }
                  }
                  break;
                case 5:
                  dn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Pu(f);
                    continue;
                  }
              }
              k !== null ? ((k.return = m), (P = k)) : Pu(f);
            }
            h = h.sibling;
          }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                (l = f.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = ya("display", i)));
              } catch (y) {
                Z(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (y) {
                Z(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            h === f && (h = null), (f = f.return);
          }
          h === f && (h = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), Ke(e), r & 4 && ju(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (rr(l, ""), (r.flags &= -33));
          var o = Eu(e);
          di(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Eu(e);
          ci(e, s, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      Z(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gp(e, t, n) {
  (P = e), Kc(e);
}
function Kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Wr;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || he;
        s = Wr;
        var a = he;
        if (((Wr = i), (he = u) && !a))
          for (P = l; P !== null; )
            (i = P),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? _u(l)
                : u !== null
                  ? ((u.return = i), (P = u))
                  : _u(l);
        for (; o !== null; ) (P = o), Kc(o), (o = o.sibling);
        (P = l), (Wr = s), (he = a);
      }
      Nu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : Nu(e);
  }
}
function Nu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ue(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && cu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && sr(f);
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
              throw Error(C(163));
          }
        he || (t.flags & 512 && ai(t));
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Pu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function _u(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Al(4, t);
          } catch (u) {
            Z(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Z(t, l, u);
            }
          }
          var o = t.return;
          try {
            ai(t);
          } catch (u) {
            Z(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ai(t);
          } catch (u) {
            Z(t, i, u);
          }
      }
    } catch (u) {
      Z(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (P = s);
      break;
    }
    P = t.return;
  }
}
var Xp = Math.ceil,
  El = dt.ReactCurrentDispatcher,
  ls = dt.ReactCurrentOwner,
  Ie = dt.ReactCurrentBatchConfig,
  U = 0,
  ue = null,
  te = null,
  ce = 0,
  je = 0,
  fn = It(0),
  ie = 0,
  yr = null,
  bt = 0,
  Bl = 0,
  os = 0,
  qn = null,
  xe = null,
  is = 0,
  Nn = 1 / 0,
  nt = null,
  jl = !1,
  fi = null,
  Pt = null,
  Hr = !1,
  xt = null,
  Nl = 0,
  er = 0,
  pi = null,
  tl = -1,
  nl = 0;
function ge() {
  return U & 6 ? ee() : tl !== -1 ? tl : (tl = ee());
}
function _t(e) {
  return e.mode & 1
    ? U & 2 && ce !== 0
      ? ce & -ce
      : Tp.transition !== null
        ? (nl === 0 && (nl = La()), nl)
        : ((e = A),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ua(e.type))),
          e)
    : 1;
}
function We(e, t, n, r) {
  if (50 < er) throw ((er = 0), (pi = null), Error(C(185)));
  Er(e, n, r),
    (!(U & 2) || e !== ue) &&
      (e === ue && (!(U & 2) && (Bl |= n), ie === 4 && yt(e, ce)),
      Ee(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Nn = ee() + 500), Fl && Mt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Tf(e, t);
  var r = al(e, e === ue ? ce : 0);
  if (r === 0)
    n !== null && Fs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fs(n), t === 1))
      e.tag === 0 ? Lp(Ru.bind(null, e)) : rc(Ru.bind(null, e)),
        Pp(function () {
          !(U & 6) && Mt();
        }),
        (n = null);
    else {
      switch (Ta(r)) {
        case 1:
          n = Ti;
          break;
        case 4:
          n = Ra;
          break;
        case 16:
          n = ul;
          break;
        case 536870912:
          n = za;
          break;
        default:
          n = ul;
      }
      n = td(n, Gc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gc(e, t) {
  if (((tl = -1), (nl = 0), U & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (yn() && e.callbackNode !== n) return null;
  var r = al(e, e === ue ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = Yc();
    (ue !== e || ce !== t) && ((nt = null), (Nn = ee() + 500), Bt(e, t));
    do
      try {
        Jp();
        break;
      } catch (s) {
        Xc(e, s);
      }
    while (!0);
    Qi(),
      (El.current = o),
      (U = l),
      te !== null ? (t = 0) : ((ue = null), (ce = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ao(e)), l !== 0 && ((r = l), (t = hi(e, l)))), t === 1)
    )
      throw ((n = yr), Bt(e, 0), yt(e, r), Ee(e, ee()), n);
    if (t === 6) yt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Yp(l) &&
          ((t = Pl(e, r)),
          t === 2 && ((o = Ao(e)), o !== 0 && ((r = o), (t = hi(e, o)))),
          t === 1))
      )
        throw ((n = yr), Bt(e, 0), yt(e, r), Ee(e, ee()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Ft(e, xe, nt);
          break;
        case 3:
          if (
            (yt(e, r), (r & 130023424) === r && ((t = is + 500 - ee()), 10 < t))
          ) {
            if (al(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ge(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Go(Ft.bind(null, e, xe, nt), t);
            break;
          }
          Ft(e, xe, nt);
          break;
        case 4:
          if ((yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ve(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Xp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Go(Ft.bind(null, e, xe, nt), r);
            break;
          }
          Ft(e, xe, nt);
          break;
        case 5:
          Ft(e, xe, nt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ee(e, ee()), e.callbackNode === n ? Gc.bind(null, e) : null;
}
function hi(e, t) {
  var n = qn;
  return (
    e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256),
    (e = Pl(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && mi(t)),
    e
  );
}
function mi(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function Yp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!He(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function yt(e, t) {
  for (
    t &= ~os,
      t &= ~Bl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ru(e) {
  if (U & 6) throw Error(C(327));
  yn();
  var t = al(e, 0);
  if (!(t & 1)) return Ee(e, ee()), null;
  var n = Pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ao(e);
    r !== 0 && ((t = r), (n = hi(e, r)));
  }
  if (n === 1) throw ((n = yr), Bt(e, 0), yt(e, t), Ee(e, ee()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ft(e, xe, nt),
    Ee(e, ee()),
    null
  );
}
function ss(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((Nn = ee() + 500), Fl && Mt());
  }
}
function Kt(e) {
  xt !== null && xt.tag === 0 && !(U & 6) && yn();
  var t = U;
  U |= 1;
  var n = Ie.transition,
    r = A;
  try {
    if (((Ie.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Ie.transition = n), (U = t), !(U & 6) && Mt();
  }
}
function us() {
  (je = fn.current), b(fn);
}
function Bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Np(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Vi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hl();
          break;
        case 3:
          En(), b(Se), b(me), Zi();
          break;
        case 5:
          Yi(r);
          break;
        case 4:
          En();
          break;
        case 13:
          b(G);
          break;
        case 19:
          b(G);
          break;
        case 10:
          bi(r.type._context);
          break;
        case 22:
        case 23:
          us();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (te = e = Rt(e.current, null)),
    (ce = je = t),
    (ie = 0),
    (yr = null),
    (os = Bl = bt = 0),
    (xe = qn = null),
    $t !== null)
  ) {
    for (t = 0; t < $t.length; t++)
      if (((n = $t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    $t = null;
  }
  return e;
}
function Xc(e, t) {
  do {
    var n = te;
    try {
      if ((Qi(), (Jr.current = Cl), Sl)) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Sl = !1;
      }
      if (
        ((Qt = 0),
        (se = oe = X = null),
        (Zn = !1),
        (mr = 0),
        (ls.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (yr = t), (te = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ce),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            h = s,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var k = vu(i);
          if (k !== null) {
            (k.flags &= -257),
              gu(k, i, s, o, t),
              k.mode & 1 && mu(o, a, t),
              (t = k),
              (u = a);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              mu(o, a, t), as();
              break e;
            }
            u = Error(C(426));
          }
        } else if (K && s.mode & 1) {
          var S = vu(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              gu(S, i, s, o, t),
              Wi(jn(u, s));
            break e;
          }
        }
        (o = u = jn(u, s)),
          ie !== 4 && (ie = 2),
          qn === null ? (qn = [o]) : qn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Tc(o, u, t);
              au(o, d);
              break e;
            case 1:
              s = u;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Pt === null || !Pt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Oc(o, s, t);
                au(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Jc(n);
    } catch (j) {
      (t = j), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yc() {
  var e = El.current;
  return (El.current = Cl), e === null ? Cl : e;
}
function as() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ue === null || (!(bt & 268435455) && !(Bl & 268435455)) || yt(ue, ce);
}
function Pl(e, t) {
  var n = U;
  U |= 2;
  var r = Yc();
  (ue !== e || ce !== t) && ((nt = null), Bt(e, t));
  do
    try {
      Zp();
      break;
    } catch (l) {
      Xc(e, l);
    }
  while (!0);
  if ((Qi(), (U = n), (El.current = r), te !== null)) throw Error(C(261));
  return (ue = null), (ce = 0), ie;
}
function Zp() {
  for (; te !== null; ) Zc(te);
}
function Jp() {
  for (; te !== null && !Cf(); ) Zc(te);
}
function Zc(e) {
  var t = ed(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jc(e) : (te = t),
    (ls.current = null);
}
function Jc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qp(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (te = null);
        return;
      }
    } else if (((n = Hp(n, t, je)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Ft(e, t, n) {
  var r = A,
    l = Ie.transition;
  try {
    (Ie.transition = null), (A = 1), qp(e, t, n, r);
  } finally {
    (Ie.transition = l), (A = r);
  }
  return null;
}
function qp(e, t, n, r) {
  do yn();
  while (xt !== null);
  if (U & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Of(e, o),
    e === ue && ((te = ue = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hr ||
      ((Hr = !0),
      td(ul, function () {
        return yn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ie.transition), (Ie.transition = null);
    var i = A;
    A = 1;
    var s = U;
    (U |= 4),
      (ls.current = null),
      Kp(e, n),
      bc(n, e),
      wp(bo),
      (cl = !!Qo),
      (bo = Qo = null),
      (e.current = n),
      Gp(n),
      Ef(),
      (U = s),
      (A = i),
      (Ie.transition = o);
  } else e.current = n;
  if (
    (Hr && ((Hr = !1), (xt = e), (Nl = l)),
    (o = e.pendingLanes),
    o === 0 && (Pt = null),
    Pf(n.stateNode),
    Ee(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (jl) throw ((jl = !1), (e = fi), (fi = null), e);
  return (
    Nl & 1 && e.tag !== 0 && yn(),
    (o = e.pendingLanes),
    o & 1 ? (e === pi ? er++ : ((er = 0), (pi = e))) : (er = 0),
    Mt(),
    null
  );
}
function yn() {
  if (xt !== null) {
    var e = Ta(Nl),
      t = Ie.transition,
      n = A;
    try {
      if (((Ie.transition = null), (A = 16 > e ? 16 : e), xt === null))
        var r = !1;
      else {
        if (((e = xt), (xt = null), (Nl = 0), U & 6)) throw Error(C(331));
        var l = U;
        for (U |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (P = a; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jn(8, h, o);
                  }
                  var f = h.child;
                  if (f !== null) (f.return = h), (P = f);
                  else
                    for (; P !== null; ) {
                      h = P;
                      var m = h.sibling,
                        k = h.return;
                      if ((Wc(h), h === a)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = k), (P = m);
                        break;
                      }
                      P = k;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (P = i);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (P = d);
                break e;
              }
              P = o.return;
            }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          i = P;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (P = p);
          else
            e: for (i = c; P !== null; ) {
              if (((s = P), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(9, s);
                  }
                } catch (j) {
                  Z(s, s.return, j);
                }
              if (s === i) {
                P = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (P = x);
                break e;
              }
              P = s.return;
            }
        }
        if (
          ((U = l), Mt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Tl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (Ie.transition = t);
    }
  }
  return !1;
}
function zu(e, t, n) {
  (t = jn(n, t)),
    (t = Tc(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = ge()),
    e !== null && (Er(e, 1, t), Ee(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pt === null || !Pt.has(r)))
        ) {
          (e = jn(n, e)),
            (e = Oc(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = ge()),
            t !== null && (Er(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function eh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (ce & n) === n &&
      (ie === 4 || (ie === 3 && (ce & 130023424) === ce && 500 > ee() - is)
        ? Bt(e, 0)
        : (os |= n)),
    Ee(e, t);
}
function qc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ir), (Ir <<= 1), !(Ir & 130023424) && (Ir = 4194304))
      : (t = 1));
  var n = ge();
  (e = at(e, t)), e !== null && (Er(e, t, n), Ee(e, n));
}
function th(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qc(e, n);
}
function nh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), qc(e, n);
}
var ed;
ed = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Wp(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), K && t.flags & 1048576 && lc(t, gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      el(e, t), (e = t.pendingProps);
      var l = kn(t, me.current);
      gn(t, n), (l = qi(null, t, r, e, l, n));
      var o = es();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(r) ? ((o = !0), ml(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Gi(t),
            (l.updater = $l),
            (t.stateNode = l),
            (l._reactInternals = t),
            ti(t, r, e, n),
            (t = li(null, t, r, !0, o, n)))
          : ((t.tag = 0), K && o && Bi(t), ve(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (el(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = lh(r)),
          (e = Ue(r, e)),
          l)
        ) {
          case 0:
            t = ri(null, t, r, e, n);
            break e;
          case 1:
            t = xu(null, t, r, e, n);
            break e;
          case 11:
            t = yu(null, t, r, e, n);
            break e;
          case 14:
            t = wu(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        ri(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        xu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Fc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          cc(e, t),
          xl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = jn(Error(C(423)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = jn(Error(C(424)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else
            for (
              Ne = jt(t.stateNode.containerInfo.firstChild),
                Pe = t,
                K = !0,
                Ae = null,
                n = uc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dc(t),
        e === null && Jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ko(r, l) ? (i = null) : o !== null && Ko(r, o) && (t.flags |= 32),
        Dc(e, t),
        ve(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Jo(t), null;
    case 13:
      return Uc(e, t, n);
    case 4:
      return (
        Xi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        yu(e, t, r, l, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          W(yl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (He(o.value, i)) {
            if (o.children === l.children && !Se.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = it(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      qo(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  qo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ve(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        gn(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ue(r, t.pendingProps)),
        (l = Ue(r.type, l)),
        wu(e, t, r, l, n)
      );
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        el(e, t),
        (t.tag = 1),
        Ce(r) ? ((e = !0), ml(t)) : (e = !1),
        gn(t, n),
        Lc(t, r, l),
        ti(t, r, l, n),
        li(null, t, r, !0, e, n)
      );
    case 19:
      return $c(e, t, n);
    case 22:
      return Mc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function td(e, t) {
  return _a(e, t);
}
function rh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oe(e, t, n, r) {
  return new rh(e, t, n, r);
}
function cs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function lh(e) {
  if (typeof e == "function") return cs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ri)) return 11;
    if (e === zi) return 14;
  }
  return 2;
}
function Rt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function rl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) cs(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case tn:
        return Vt(n.children, l, o, t);
      case _i:
        (i = 8), (l |= 8);
        break;
      case jo:
        return (
          (e = Oe(12, n, t, l | 2)), (e.elementType = jo), (e.lanes = o), e
        );
      case No:
        return (e = Oe(13, n, t, l)), (e.elementType = No), (e.lanes = o), e;
      case Po:
        return (e = Oe(19, n, t, l)), (e.elementType = Po), (e.lanes = o), e;
      case da:
        return Vl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case aa:
              i = 10;
              break e;
            case ca:
              i = 9;
              break e;
            case Ri:
              i = 11;
              break e;
            case zi:
              i = 14;
              break e;
            case mt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vt(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Vl(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = da),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xo(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function ko(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function oh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = eo(0)),
    (this.expirationTimes = eo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = eo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ds(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new oh(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Oe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gi(o),
    e
  );
}
function ih(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: en,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nd(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ce(n)) return nc(e, n, t);
  }
  return t;
}
function rd(e, t, n, r, l, o, i, s, u) {
  return (
    (e = ds(n, r, !0, e, l, o, i, s, u)),
    (e.context = nd(null)),
    (n = e.current),
    (r = ge()),
    (l = _t(n)),
    (o = it(r, l)),
    (o.callback = t ?? null),
    Nt(n, o, l),
    (e.current.lanes = l),
    Er(e, l, r),
    Ee(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var l = t.current,
    o = ge(),
    i = _t(l);
  return (
    (n = nd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(l, t, i)),
    e !== null && (We(e, l, i, o), Zr(e, l, i)),
    i
  );
}
function _l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fs(e, t) {
  Lu(e, t), (e = e.alternate) && Lu(e, t);
}
function sh() {
  return null;
}
var ld =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ps(e) {
  this._internalRoot = e;
}
Hl.prototype.render = ps.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Wl(e, t, null, null);
};
Hl.prototype.unmount = ps.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kt(function () {
      Wl(null, e, null, null);
    }),
      (t[ut] = null);
  }
};
function Hl(e) {
  this._internalRoot = e;
}
Hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ma();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && Fa(e);
  }
};
function hs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ql(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tu() {}
function uh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = _l(i);
        o.call(a);
      };
    }
    var i = rd(t, r, e, 0, null, !1, !1, "", Tu);
    return (
      (e._reactRootContainer = i),
      (e[ut] = i.current),
      cr(e.nodeType === 8 ? e.parentNode : e),
      Kt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = _l(u);
      s.call(a);
    };
  }
  var u = ds(e, 0, !1, null, null, !1, !1, "", Tu);
  return (
    (e._reactRootContainer = u),
    (e[ut] = u.current),
    cr(e.nodeType === 8 ? e.parentNode : e),
    Kt(function () {
      Wl(t, u, n, r);
    }),
    u
  );
}
function bl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = _l(i);
        s.call(u);
      };
    }
    Wl(t, i, e, l);
  } else i = uh(n, t, e, l, r);
  return _l(i);
}
Oa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hn(t.pendingLanes);
        n !== 0 &&
          (Oi(t, n | 1), Ee(t, ee()), !(U & 6) && ((Nn = ee() + 500), Mt()));
      }
      break;
    case 13:
      Kt(function () {
        var r = at(e, 1);
        if (r !== null) {
          var l = ge();
          We(r, e, 1, l);
        }
      }),
        fs(e, 1);
  }
};
Ii = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = ge();
      We(t, e, 134217728, n);
    }
    fs(e, 134217728);
  }
};
Ia = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = at(e, t);
    if (n !== null) {
      var r = ge();
      We(n, e, t, r);
    }
    fs(e, t);
  }
};
Ma = function () {
  return A;
};
Da = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
Fo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Dl(r);
            if (!l) throw Error(C(90));
            pa(r), zo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ma(e, n);
      break;
    case "select":
      (t = n.value), t != null && pn(e, !!n.multiple, t, !1);
  }
};
Sa = ss;
Ca = Kt;
var ah = { usingClientEntryPoint: !1, Events: [Nr, on, Dl, xa, ka, ss] },
  $n = {
    findFiberByHostInstance: Ut,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ch = {
    bundleType: $n.bundleType,
    version: $n.version,
    rendererPackageName: $n.rendererPackageName,
    rendererConfig: $n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Na(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $n.findFiberByHostInstance || sh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qr.isDisabled && Qr.supportsFiber)
    try {
      (Tl = Qr.inject(ch)), (Ye = Qr);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ah;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hs(t)) throw Error(C(200));
  return ih(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!hs(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = ld;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ds(e, 1, !1, null, null, n, !1, r, l)),
    (e[ut] = t.current),
    cr(e.nodeType === 8 ? e.parentNode : e),
    new ps(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Na(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return Kt(e);
};
Re.hydrate = function (e, t, n) {
  if (!Ql(t)) throw Error(C(200));
  return bl(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!hs(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ld;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[ut] = t.current),
    cr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Hl(t);
};
Re.render = function (e, t, n) {
  if (!Ql(t)) throw Error(C(200));
  return bl(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!Ql(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Kt(function () {
        bl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ut] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = ss;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ql(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return bl(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function od() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od);
    } catch (e) {
      console.error(e);
    }
}
od(), (oa.exports = Re);
var dh = oa.exports,
  id,
  Ou = dh;
(id = Ou.createRoot), Ou.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wr() {
  return (
    (wr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wr.apply(this, arguments)
  );
}
var kt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(kt || (kt = {}));
const Iu = "popstate";
function fh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: s } = r.location;
    return vi(
      "",
      { pathname: o, search: i, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Rl(l);
  }
  return hh(t, n, null, e);
}
function ne(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sd(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ph() {
  return Math.random().toString(36).substr(2, 8);
}
function Mu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    wr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? zn(t) : t,
      { state: n, key: (t && t.key) || r || ph() },
    )
  );
}
function Rl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function zn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function hh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    s = kt.Pop,
    u = null,
    a = h();
  a == null && ((a = 0), i.replaceState(wr({}, i.state, { idx: a }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    s = kt.Pop;
    let S = h(),
      d = S == null ? null : S - a;
    (a = S), u && u({ action: s, location: y.location, delta: d });
  }
  function m(S, d) {
    s = kt.Push;
    let c = vi(y.location, S, d);
    a = h() + 1;
    let p = Mu(c, a),
      x = y.createHref(c);
    try {
      i.pushState(p, "", x);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      l.location.assign(x);
    }
    o && u && u({ action: s, location: y.location, delta: 1 });
  }
  function k(S, d) {
    s = kt.Replace;
    let c = vi(y.location, S, d);
    a = h();
    let p = Mu(c, a),
      x = y.createHref(c);
    i.replaceState(p, "", x),
      o && u && u({ action: s, location: y.location, delta: 0 });
  }
  function w(S) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof S == "string" ? S : Rl(S);
    return (
      (c = c.replace(/ $/, "%20")),
      ne(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          c,
      ),
      new URL(c, d)
    );
  }
  let y = {
    get action() {
      return s;
    },
    get location() {
      return e(l, i);
    },
    listen(S) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Iu, f),
        (u = S),
        () => {
          l.removeEventListener(Iu, f), (u = null);
        }
      );
    },
    createHref(S) {
      return t(l, S);
    },
    createURL: w,
    encodeLocation(S) {
      let d = w(S);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: k,
    go(S) {
      return i.go(S);
    },
  };
  return y;
}
var Du;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Du || (Du = {}));
function mh(e, t, n) {
  return n === void 0 && (n = "/"), vh(e, t, n, !1);
}
function vh(e, t, n, r) {
  let l = typeof t == "string" ? zn(t) : t,
    o = ms(l.pathname || "/", n);
  if (o == null) return null;
  let i = ud(e);
  gh(i);
  let s = null;
  for (let u = 0; s == null && u < i.length; ++u) {
    let a = _h(o);
    s = Nh(i[u], a, r);
  }
  return s;
}
function ud(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (ne(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = zt([r, u.relativePath]),
      h = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (ne(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".'),
      ),
      ud(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Eh(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) l(o, i);
      else for (let u of ad(o.path)) l(o, i, u);
    }),
    t
  );
}
function ad(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = ad(r.join("/")),
    s = [];
  return (
    s.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && s.push(...i),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function gh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : jh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const yh = /^:[\w-]+$/,
  wh = 3,
  xh = 2,
  kh = 1,
  Sh = 10,
  Ch = -2,
  Fu = (e) => e === "*";
function Eh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Fu) && (r += Ch),
    t && (r += xh),
    n
      .filter((l) => !Fu(l))
      .reduce((l, o) => l + (yh.test(o) ? wh : o === "" ? kh : Sh), r)
  );
}
function jh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Nh(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      a = s === r.length - 1,
      h = o === "/" ? t : t.slice(o.length) || "/",
      f = Uu(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        h,
      ),
      m = u.route;
    if (
      (!f &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Uu(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          h,
        )),
      !f)
    )
      return null;
    Object.assign(l, f.params),
      i.push({
        params: l,
        pathname: zt([o, f.pathname]),
        pathnameBase: Th(zt([o, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (o = zt([o, f.pathnameBase]));
  }
  return i;
}
function Uu(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ph(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((a, h, f) => {
      let { paramName: m, isOptional: k } = h;
      if (m === "*") {
        let y = s[f] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const w = s[f];
      return (
        k && !w ? (a[m] = void 0) : (a[m] = (w || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Ph(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sd(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function _h(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      sd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function ms(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Rh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? zn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : zh(n, t)) : t,
    search: Oh(r),
    hash: Ih(l),
  };
}
function zh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function So(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Lh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function cd(e, t) {
  let n = Lh(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function dd(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = zn(e))
    : ((l = wr({}, e)),
      ne(
        !l.pathname || !l.pathname.includes("?"),
        So("?", "pathname", "search", l),
      ),
      ne(
        !l.pathname || !l.pathname.includes("#"),
        So("#", "pathname", "hash", l),
      ),
      ne(!l.search || !l.search.includes("#"), So("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    s;
  if (i == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      l.pathname = m.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let u = Rh(l, s),
    a = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || h) && (u.pathname += "/"), u;
}
const zt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Th = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Oh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Ih = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Mh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const fd = ["post", "put", "patch", "delete"];
new Set(fd);
const Dh = ["get", ...fd];
new Set(Dh);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xr() {
  return (
    (xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xr.apply(this, arguments)
  );
}
const vs = g.createContext(null),
  Fh = g.createContext(null),
  Yt = g.createContext(null),
  Kl = g.createContext(null),
  Zt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  pd = g.createContext(null);
function Uh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  _r() || ne(!1);
  let { basename: r, navigator: l } = g.useContext(Yt),
    { hash: o, pathname: i, search: s } = md(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : zt([r, i])),
    l.createHref({ pathname: u, search: s, hash: o })
  );
}
function _r() {
  return g.useContext(Kl) != null;
}
function Gl() {
  return _r() || ne(!1), g.useContext(Kl).location;
}
function hd(e) {
  g.useContext(Yt).static || g.useLayoutEffect(e);
}
function $h() {
  let { isDataRoute: e } = g.useContext(Zt);
  return e ? Jh() : Ah();
}
function Ah() {
  _r() || ne(!1);
  let e = g.useContext(vs),
    { basename: t, future: n, navigator: r } = g.useContext(Yt),
    { matches: l } = g.useContext(Zt),
    { pathname: o } = Gl(),
    i = JSON.stringify(cd(l, n.v7_relativeSplatPath)),
    s = g.useRef(!1);
  return (
    hd(() => {
      s.current = !0;
    }),
    g.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !s.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let f = dd(a, JSON.parse(i), o, h.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : zt([t, f.pathname])),
          (h.replace ? r.replace : r.push)(f, h.state, h);
      },
      [t, r, i, o, e],
    )
  );
}
function md(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(Yt),
    { matches: l } = g.useContext(Zt),
    { pathname: o } = Gl(),
    i = JSON.stringify(cd(l, r.v7_relativeSplatPath));
  return g.useMemo(() => dd(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Bh(e, t) {
  return Vh(e, t);
}
function Vh(e, t, n, r) {
  _r() || ne(!1);
  let { navigator: l } = g.useContext(Yt),
    { matches: o } = g.useContext(Zt),
    i = o[o.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let a = Gl(),
    h;
  if (t) {
    var f;
    let S = typeof t == "string" ? zn(t) : t;
    u === "/" || ((f = S.pathname) != null && f.startsWith(u)) || ne(!1),
      (h = S);
  } else h = a;
  let m = h.pathname || "/",
    k = m;
  if (u !== "/") {
    let S = u.replace(/^\//, "").split("/");
    k = "/" + m.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let w = mh(e, { pathname: k }),
    y = Kh(
      w &&
        w.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, s, S.params),
            pathname: zt([
              u,
              l.encodeLocation
                ? l.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? u
                : zt([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && y
    ? g.createElement(
        Kl.Provider,
        {
          value: {
            location: xr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h,
            ),
            navigationType: kt.Pop,
          },
        },
        y,
      )
    : y;
}
function Wh() {
  let e = Zh(),
    t = Mh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? g.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const Hh = g.createElement(Wh, null);
class Qh extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          Zt.Provider,
          { value: this.props.routeContext },
          g.createElement(pd.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function bh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = g.useContext(vs);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(Zt.Provider, { value: t }, r)
  );
}
function Kh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let h = i.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0,
    );
    h >= 0 || ne(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < i.length; h++) {
      let f = i[h];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = h),
        f.route.id)
      ) {
        let { loaderData: m, errors: k } = n,
          w =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!k || k[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (u = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((h, f, m) => {
    let k,
      w = !1,
      y = null,
      S = null;
    n &&
      ((k = s && f.route.id ? s[f.route.id] : void 0),
      (y = f.route.errorElement || Hh),
      u &&
        (a < 0 && m === 0
          ? ((w = !0), (S = null))
          : a === m &&
            ((w = !0), (S = f.route.hydrateFallbackElement || null))));
    let d = t.concat(i.slice(0, m + 1)),
      c = () => {
        let p;
        return (
          k
            ? (p = y)
            : w
              ? (p = S)
              : f.route.Component
                ? (p = g.createElement(f.route.Component, null))
                : f.route.element
                  ? (p = f.route.element)
                  : (p = h),
          g.createElement(bh, {
            match: f,
            routeContext: { outlet: h, matches: d, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? g.createElement(Qh, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: k,
          children: c(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var vd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(vd || {}),
  zl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(zl || {});
function Gh(e) {
  let t = g.useContext(vs);
  return t || ne(!1), t;
}
function Xh(e) {
  let t = g.useContext(Fh);
  return t || ne(!1), t;
}
function Yh(e) {
  let t = g.useContext(Zt);
  return t || ne(!1), t;
}
function gd(e) {
  let t = Yh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ne(!1), n.route.id;
}
function Zh() {
  var e;
  let t = g.useContext(pd),
    n = Xh(zl.UseRouteError),
    r = gd(zl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Jh() {
  let { router: e } = Gh(vd.UseNavigateStable),
    t = gd(zl.UseNavigateStable),
    n = g.useRef(!1);
  return (
    hd(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, xr({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
const $u = {};
function qh(e, t) {
  $u[t] || (($u[t] = !0), console.warn(t));
}
const Au = (e, t, n) =>
  qh(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + "."),
  );
function em(e, t) {
  (e != null && e.v7_startTransition) ||
    Au(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition",
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      Au(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath",
      );
}
function ll(e) {
  ne(!1);
}
function tm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = kt.Pop,
    navigator: o,
    static: i = !1,
    future: s,
  } = e;
  _r() && ne(!1);
  let u = t.replace(/^\/*/, "/"),
    a = g.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: xr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, o, i],
    );
  typeof r == "string" && (r = zn(r));
  let {
      pathname: h = "/",
      search: f = "",
      hash: m = "",
      state: k = null,
      key: w = "default",
    } = r,
    y = g.useMemo(() => {
      let S = ms(h, u);
      return S == null
        ? null
        : {
            location: { pathname: S, search: f, hash: m, state: k, key: w },
            navigationType: l,
          };
    }, [u, h, f, m, k, w, l]);
  return y == null
    ? null
    : g.createElement(
        Yt.Provider,
        { value: a },
        g.createElement(Kl.Provider, { children: n, value: y }),
      );
}
function nm(e) {
  let { children: t, location: n } = e;
  return Bh(gi(t), n);
}
new Promise(() => {});
function gi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    g.Children.forEach(e, (r, l) => {
      if (!g.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === g.Fragment) {
        n.push.apply(n, gi(r.props.children, o));
        return;
      }
      r.type !== ll && ne(!1), !r.props.index || !r.props.children || ne(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = gi(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yi() {
  return (
    (yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yi.apply(this, arguments)
  );
}
function rm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function lm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function om(e, t) {
  return e.button === 0 && (!t || t === "_self") && !lm(e);
}
const im = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  sm = "6";
try {
  window.__reactRouterVersion = sm;
} catch {}
const um = "startTransition",
  Bu = qd[um];
function am(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = g.useRef();
  o.current == null && (o.current = fh({ window: l, v5Compat: !0 }));
  let i = o.current,
    [s, u] = g.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    h = g.useCallback(
      (f) => {
        a && Bu ? Bu(() => u(f)) : u(f);
      },
      [u, a],
    );
  return (
    g.useLayoutEffect(() => i.listen(h), [i, h]),
    g.useEffect(() => em(r), [r]),
    g.createElement(tm, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
      future: r,
    })
  );
}
const cm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  dm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  tr = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: s,
        target: u,
        to: a,
        preventScrollReset: h,
        viewTransition: f,
      } = t,
      m = rm(t, im),
      { basename: k } = g.useContext(Yt),
      w,
      y = !1;
    if (typeof a == "string" && dm.test(a) && ((w = a), cm))
      try {
        let p = new URL(window.location.href),
          x = a.startsWith("//") ? new URL(p.protocol + a) : new URL(a),
          j = ms(x.pathname, k);
        x.origin === p.origin && j != null
          ? (a = j + x.search + x.hash)
          : (y = !0);
      } catch {}
    let S = Uh(a, { relative: l }),
      d = fm(a, {
        replace: i,
        state: s,
        target: u,
        preventScrollReset: h,
        relative: l,
        viewTransition: f,
      });
    function c(p) {
      r && r(p), p.defaultPrevented || d(p);
    }
    return g.createElement(
      "a",
      yi({}, m, { href: w || S, onClick: y || o ? r : c, ref: n, target: u }),
    );
  });
var Vu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Vu || (Vu = {}));
var Wu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wu || (Wu = {}));
function fm(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    u = $h(),
    a = Gl(),
    h = md(e, { relative: i });
  return g.useCallback(
    (f) => {
      if (om(f, n)) {
        f.preventDefault();
        let m = r !== void 0 ? r : Rl(a) === Rl(h);
        u(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          viewTransition: s,
        });
      }
    },
    [a, u, h, r, l, n, e, o, i, s],
  );
}
function yd(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = yd(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function wd() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = yd(e)) && (r && (r += " "), (r += t));
  return r;
}
const gs = "-",
  pm = (e) => {
    const t = mm(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(gs);
        return s[0] === "" && s.length !== 1 && s.shift(), xd(s, t) || hm(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const u = n[i] || [];
        return s && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  xd = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      l = r ? xd(e.slice(1), r) : void 0;
    if (l) return l;
    if (t.validators.length === 0) return;
    const o = e.join(gs);
    return (i = t.validators.find(({ validator: s }) => s(o))) == null
      ? void 0
      : i.classGroupId;
  },
  Hu = /^\[(.+)\]$/,
  hm = (e) => {
    if (Hu.test(e)) {
      const t = Hu.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  mm = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      gm(Object.entries(e.classGroups), n).forEach(([o, i]) => {
        wi(i, r, o, t);
      }),
      r
    );
  },
  wi = (e, t, n, r) => {
    e.forEach((l) => {
      if (typeof l == "string") {
        const o = l === "" ? t : Qu(t, l);
        o.classGroupId = n;
        return;
      }
      if (typeof l == "function") {
        if (vm(l)) {
          wi(l(r), t, n, r);
          return;
        }
        t.validators.push({ validator: l, classGroupId: n });
        return;
      }
      Object.entries(l).forEach(([o, i]) => {
        wi(i, Qu(t, o), n, r);
      });
    });
  },
  Qu = (e, t) => {
    let n = e;
    return (
      t.split(gs).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  vm = (e) => e.isThemeGetter,
  gm = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const l = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([i, s]) => [t + i, s]),
                  )
                : o,
          );
          return [n, l];
        })
      : e,
  ym = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const l = (o, i) => {
      n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let i = n.get(o);
        if (i !== void 0) return i;
        if ((i = r.get(o)) !== void 0) return l(o, i), i;
      },
      set(o, i) {
        n.has(o) ? n.set(o, i) : l(o, i);
      },
    };
  },
  kd = "!",
  wm = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      l = t[0],
      o = t.length,
      i = (s) => {
        const u = [];
        let a = 0,
          h = 0,
          f;
        for (let S = 0; S < s.length; S++) {
          let d = s[S];
          if (a === 0) {
            if (d === l && (r || s.slice(S, S + o) === t)) {
              u.push(s.slice(h, S)), (h = S + o);
              continue;
            }
            if (d === "/") {
              f = S;
              continue;
            }
          }
          d === "[" ? a++ : d === "]" && a--;
        }
        const m = u.length === 0 ? s : s.substring(h),
          k = m.startsWith(kd),
          w = k ? m.substring(1) : m,
          y = f && f > h ? f - h : void 0;
        return {
          modifiers: u,
          hasImportantModifier: k,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  xm = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  km = (e) => ({ cache: ym(e.cacheSize), parseClassName: wm(e), ...pm(e) }),
  Sm = /\s+/,
  Cm = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: l,
      } = t,
      o = [],
      i = e.trim().split(Sm);
    let s = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
      const a = i[u],
        {
          modifiers: h,
          hasImportantModifier: f,
          baseClassName: m,
          maybePostfixModifierPosition: k,
        } = n(a);
      let w = !!k,
        y = r(w ? m.substring(0, k) : m);
      if (!y) {
        if (!w) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((y = r(m)), !y)) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        w = !1;
      }
      const S = xm(h).join(":"),
        d = f ? S + kd : S,
        c = d + y;
      if (o.includes(c)) continue;
      o.push(c);
      const p = l(y, w);
      for (let x = 0; x < p.length; ++x) {
        const j = p[x];
        o.push(d + j);
      }
      s = a + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function Em() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Sd(t)) && (r && (r += " "), (r += n));
  return r;
}
const Sd = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Sd(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function jm(e, ...t) {
  let n,
    r,
    l,
    o = i;
  function i(u) {
    const a = t.reduce((h, f) => f(h), e());
    return (n = km(a)), (r = n.cache.get), (l = n.cache.set), (o = s), s(u);
  }
  function s(u) {
    const a = r(u);
    if (a) return a;
    const h = Cm(u, n);
    return l(u, h), h;
  }
  return function () {
    return o(Em.apply(null, arguments));
  };
}
const H = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Cd = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Nm = /^\d+\/\d+$/,
  Pm = new Set(["px", "full", "screen"]),
  _m = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Rm =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  zm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Lm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Tm =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  tt = (e) => wn(e) || Pm.has(e) || Nm.test(e),
  pt = (e) => Ln(e, "length", Am),
  wn = (e) => !!e && !Number.isNaN(Number(e)),
  Co = (e) => Ln(e, "number", wn),
  An = (e) => !!e && Number.isInteger(Number(e)),
  Om = (e) => e.endsWith("%") && wn(e.slice(0, -1)),
  I = (e) => Cd.test(e),
  ht = (e) => _m.test(e),
  Im = new Set(["length", "size", "percentage"]),
  Mm = (e) => Ln(e, Im, Ed),
  Dm = (e) => Ln(e, "position", Ed),
  Fm = new Set(["image", "url"]),
  Um = (e) => Ln(e, Fm, Vm),
  $m = (e) => Ln(e, "", Bm),
  Bn = () => !0,
  Ln = (e, t, n) => {
    const r = Cd.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Am = (e) => Rm.test(e) && !zm.test(e),
  Ed = () => !1,
  Bm = (e) => Lm.test(e),
  Vm = (e) => Tm.test(e),
  Wm = () => {
    const e = H("colors"),
      t = H("spacing"),
      n = H("blur"),
      r = H("brightness"),
      l = H("borderColor"),
      o = H("borderRadius"),
      i = H("borderSpacing"),
      s = H("borderWidth"),
      u = H("contrast"),
      a = H("grayscale"),
      h = H("hueRotate"),
      f = H("invert"),
      m = H("gap"),
      k = H("gradientColorStops"),
      w = H("gradientColorStopPositions"),
      y = H("inset"),
      S = H("margin"),
      d = H("opacity"),
      c = H("padding"),
      p = H("saturate"),
      x = H("scale"),
      j = H("sepia"),
      N = H("skew"),
      _ = H("space"),
      z = H("translate"),
      $ = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      re = () => ["auto", I, t],
      R = () => [I, t],
      V = () => ["", tt, pt],
      J = () => ["auto", wn, I],
      Qe = () => [
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
      M = () => ["solid", "dashed", "dotted", "double", "none"],
      B = () => [
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
      E = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      L = () => ["", "0", I],
      T = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      D = () => [wn, I];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Bn],
        spacing: [tt, pt],
        blur: ["none", "", ht, I],
        brightness: D(),
        borderColor: [e],
        borderRadius: ["none", "", "full", ht, I],
        borderSpacing: R(),
        borderWidth: V(),
        contrast: D(),
        grayscale: L(),
        hueRotate: D(),
        invert: L(),
        gap: R(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Om, pt],
        inset: re(),
        margin: re(),
        opacity: D(),
        padding: R(),
        saturate: D(),
        scale: D(),
        sepia: L(),
        skew: D(),
        space: R(),
        translate: R(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", I] }],
        container: ["container"],
        columns: [{ columns: [ht] }],
        "break-after": [{ "break-after": T() }],
        "break-before": [{ "break-before": T() }],
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
        "object-position": [{ object: [...Qe(), I] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: $() }],
        "overscroll-x": [{ "overscroll-x": $() }],
        "overscroll-y": [{ "overscroll-y": $() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", An, I] }],
        basis: [{ basis: re() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", I] }],
        grow: [{ grow: L() }],
        shrink: [{ shrink: L() }],
        order: [{ order: ["first", "last", "none", An, I] }],
        "grid-cols": [{ "grid-cols": [Bn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", An, I] }, I] }],
        "col-start": [{ "col-start": J() }],
        "col-end": [{ "col-end": J() }],
        "grid-rows": [{ "grid-rows": [Bn] }],
        "row-start-end": [{ row: ["auto", { span: [An, I] }, I] }],
        "row-start": [{ "row-start": J() }],
        "row-end": [{ "row-end": J() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...E()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...E(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...E(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [c] }],
        px: [{ px: [c] }],
        py: [{ py: [c] }],
        ps: [{ ps: [c] }],
        pe: [{ pe: [c] }],
        pt: [{ pt: [c] }],
        pr: [{ pr: [c] }],
        pb: [{ pb: [c] }],
        pl: [{ pl: [c] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        "space-x": [{ "space-x": [_] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [_] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t] }],
        "min-w": [{ "min-w": [I, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              I,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [ht] },
              ht,
            ],
          },
        ],
        h: [{ h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [I, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", ht, pt] }],
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
              Co,
            ],
          },
        ],
        "font-family": [{ font: [Bn] }],
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
              I,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", wn, Co] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              tt,
              I,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", I] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [d] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [d] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...M(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", tt, pt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", tt, I] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: R() }],
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
              I,
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
        content: [{ content: ["none", I] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [d] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Qe(), Dm] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Mm] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Um,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [k] }],
        "gradient-via": [{ via: [k] }],
        "gradient-to": [{ to: [k] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [d] }],
        "border-style": [{ border: [...M(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [d] }],
        "divide-style": [{ divide: M() }],
        "border-color": [{ border: [l] }],
        "border-color-x": [{ "border-x": [l] }],
        "border-color-y": [{ "border-y": [l] }],
        "border-color-s": [{ "border-s": [l] }],
        "border-color-e": [{ "border-e": [l] }],
        "border-color-t": [{ "border-t": [l] }],
        "border-color-r": [{ "border-r": [l] }],
        "border-color-b": [{ "border-b": [l] }],
        "border-color-l": [{ "border-l": [l] }],
        "divide-color": [{ divide: [l] }],
        "outline-style": [{ outline: ["", ...M()] }],
        "outline-offset": [{ "outline-offset": [tt, I] }],
        "outline-w": [{ outline: [tt, pt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [d] }],
        "ring-offset-w": [{ "ring-offset": [tt, pt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", ht, $m] }],
        "shadow-color": [{ shadow: [Bn] }],
        opacity: [{ opacity: [d] }],
        "mix-blend": [{ "mix-blend": [...B(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": B() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ht, I] }],
        grayscale: [{ grayscale: [a] }],
        "hue-rotate": [{ "hue-rotate": [h] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [p] }],
        sepia: [{ sepia: [j] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [a] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [d] }],
        "backdrop-saturate": [{ "backdrop-saturate": [p] }],
        "backdrop-sepia": [{ "backdrop-sepia": [j] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
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
              I,
            ],
          },
        ],
        duration: [{ duration: D() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
        delay: [{ delay: D() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", I] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [x] }],
        "scale-x": [{ "scale-x": [x] }],
        "scale-y": [{ "scale-y": [x] }],
        rotate: [{ rotate: [An, I] }],
        "translate-x": [{ "translate-x": [z] }],
        "translate-y": [{ "translate-y": [z] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
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
              I,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
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
              I,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": R() }],
        "scroll-mx": [{ "scroll-mx": R() }],
        "scroll-my": [{ "scroll-my": R() }],
        "scroll-ms": [{ "scroll-ms": R() }],
        "scroll-me": [{ "scroll-me": R() }],
        "scroll-mt": [{ "scroll-mt": R() }],
        "scroll-mr": [{ "scroll-mr": R() }],
        "scroll-mb": [{ "scroll-mb": R() }],
        "scroll-ml": [{ "scroll-ml": R() }],
        "scroll-p": [{ "scroll-p": R() }],
        "scroll-px": [{ "scroll-px": R() }],
        "scroll-py": [{ "scroll-py": R() }],
        "scroll-ps": [{ "scroll-ps": R() }],
        "scroll-pe": [{ "scroll-pe": R() }],
        "scroll-pt": [{ "scroll-pt": R() }],
        "scroll-pr": [{ "scroll-pr": R() }],
        "scroll-pb": [{ "scroll-pb": R() }],
        "scroll-pl": [{ "scroll-pl": R() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", I] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [tt, pt, Co] }],
        stroke: [{ stroke: [e, "none"] }],
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
  Hm = jm(Wm);
function Je(...e) {
  return Hm(wd(e));
}
const kr = g.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    ref: n,
    className: Je(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e,
    ),
    ...t,
  }),
);
kr.displayName = "Card";
const ys = g.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    ref: n,
    className: Je("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
ys.displayName = "CardHeader";
const ws = g.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("h3", {
    ref: n,
    className: Je("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
ws.displayName = "CardTitle";
const Qm = g.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("p", {
    ref: n,
    className: Je("text-sm text-muted-foreground", e),
    ...t,
  }),
);
Qm.displayName = "CardDescription";
const Sr = g.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", { ref: n, className: Je("p-6 pt-0", e), ...t }),
);
Sr.displayName = "CardContent";
const bm = g.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    ref: n,
    className: Je("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
bm.displayName = "CardFooter";
function Km(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function jd(...e) {
  return (t) => e.forEach((n) => Km(n, t));
}
function Gm(...e) {
  return g.useCallback(jd(...e), e);
}
var xs = g.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    l = g.Children.toArray(n),
    o = l.find(Ym);
  if (o) {
    const i = o.props.children,
      s = l.map((u) =>
        u === o
          ? g.Children.count(i) > 1
            ? g.Children.only(null)
            : g.isValidElement(i)
              ? i.props.children
              : null
          : u,
      );
    return v.jsx(xi, {
      ...r,
      ref: t,
      children: g.isValidElement(i) ? g.cloneElement(i, void 0, s) : null,
    });
  }
  return v.jsx(xi, { ...r, ref: t, children: n });
});
xs.displayName = "Slot";
var xi = g.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (g.isValidElement(n)) {
    const l = Jm(n);
    return g.cloneElement(n, { ...Zm(r, n.props), ref: t ? jd(t, l) : l });
  }
  return g.Children.count(n) > 1 ? g.Children.only(null) : null;
});
xi.displayName = "SlotClone";
var Xm = ({ children: e }) => v.jsx(v.Fragment, { children: e });
function Ym(e) {
  return g.isValidElement(e) && e.type === Xm;
}
function Zm(e, t) {
  const n = { ...t };
  for (const r in t) {
    const l = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? l && o
        ? (n[r] = (...s) => {
            o(...s), l(...s);
          })
        : l && (n[r] = l)
      : r === "style"
        ? (n[r] = { ...l, ...o })
        : r === "className" && (n[r] = [l, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Jm(e) {
  var r, l;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
const bu = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Ku = wd,
  Nd = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Ku(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: l, defaultVariants: o } = t,
      i = Object.keys(l).map((a) => {
        const h = n == null ? void 0 : n[a],
          f = o == null ? void 0 : o[a];
        if (h === null) return null;
        const m = bu(h) || bu(f);
        return l[a][m];
      }),
      s =
        n &&
        Object.entries(n).reduce((a, h) => {
          let [f, m] = h;
          return m === void 0 || (a[f] = m), a;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((a, h) => {
              let { class: f, className: m, ...k } = h;
              return Object.entries(k).every((w) => {
                let [y, S] = w;
                return Array.isArray(S)
                  ? S.includes({ ...o, ...s }[y])
                  : { ...o, ...s }[y] === S;
              })
                ? [...a, f, m]
                : a;
            }, []);
    return Ku(
      e,
      i,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  qm = Nd(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Be = g.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...l }, o) => {
      const i = r ? xs : "button";
      return v.jsx(i, {
        className: Je(qm({ variant: t, size: n, className: e })),
        ref: o,
        ...l,
      });
    },
  );
Be.displayName = "Button";
function ev(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (l) {
    if ((e == null || e(l), n === !1 || !l.defaultPrevented))
      return t == null ? void 0 : t(l);
  };
}
function tv(e, t = []) {
  let n = [];
  function r(o, i) {
    const s = g.createContext(i),
      u = n.length;
    n = [...n, i];
    const a = (f) => {
      var d;
      const { scope: m, children: k, ...w } = f,
        y = ((d = m == null ? void 0 : m[e]) == null ? void 0 : d[u]) || s,
        S = g.useMemo(() => w, Object.values(w));
      return v.jsx(y.Provider, { value: S, children: k });
    };
    a.displayName = o + "Provider";
    function h(f, m) {
      var y;
      const k = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[u]) || s,
        w = g.useContext(k);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [a, h];
  }
  const l = () => {
    const o = n.map((i) => g.createContext(i));
    return function (s) {
      const u = (s == null ? void 0 : s[e]) || o;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: u } }), [s, u]);
    };
  };
  return (l.scopeName = e), [r, nv(l, ...t)];
}
function nv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (o) {
      const i = r.reduce((s, { useScope: u, scopeName: a }) => {
        const f = u(o)[`__scope${a}`];
        return { ...s, ...f };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Pd(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function rv({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, l] = lv({ defaultProp: t, onChange: n }),
    o = e !== void 0,
    i = o ? e : r,
    s = Pd(n),
    u = g.useCallback(
      (a) => {
        if (o) {
          const f = typeof a == "function" ? a(e) : a;
          f !== e && s(f);
        } else l(a);
      },
      [o, e, l, s],
    );
  return [i, u];
}
function lv({ defaultProp: e, onChange: t }) {
  const n = g.useState(e),
    [r] = n,
    l = g.useRef(r),
    o = Pd(t);
  return (
    g.useEffect(() => {
      l.current !== r && (o(r), (l.current = r));
    }, [r, l, o]),
    n
  );
}
function ov(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var iv =
  globalThis != null && globalThis.document ? g.useLayoutEffect : () => {};
function sv(e) {
  const [t, n] = g.useState(void 0);
  return (
    iv(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const o = l[0];
          let i, s;
          if ("borderBoxSize" in o) {
            const u = o.borderBoxSize,
              a = Array.isArray(u) ? u[0] : u;
            (i = a.inlineSize), (s = a.blockSize);
          } else (i = e.offsetWidth), (s = e.offsetHeight);
          n({ width: i, height: s });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var uv = [
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
  ks = uv.reduce((e, t) => {
    const n = g.forwardRef((r, l) => {
      const { asChild: o, ...i } = r,
        s = o ? xs : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(s, { ...i, ref: l })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {}),
  Ss = "Switch",
  [av, _v] = tv(Ss),
  [cv, dv] = av(Ss),
  _d = g.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        name: r,
        checked: l,
        defaultChecked: o,
        required: i,
        disabled: s,
        value: u = "on",
        onCheckedChange: a,
        form: h,
        ...f
      } = e,
      [m, k] = g.useState(null),
      w = Gm(t, (p) => k(p)),
      y = g.useRef(!1),
      S = m ? h || !!m.closest("form") : !0,
      [d = !1, c] = rv({ prop: l, defaultProp: o, onChange: a });
    return v.jsxs(cv, {
      scope: n,
      checked: d,
      disabled: s,
      children: [
        v.jsx(ks.button, {
          type: "button",
          role: "switch",
          "aria-checked": d,
          "aria-required": i,
          "data-state": Ld(d),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: u,
          ...f,
          ref: w,
          onClick: ev(e.onClick, (p) => {
            c((x) => !x),
              S &&
                ((y.current = p.isPropagationStopped()),
                y.current || p.stopPropagation());
          }),
        }),
        S &&
          v.jsx(fv, {
            control: m,
            bubbles: !y.current,
            name: r,
            value: u,
            checked: d,
            required: i,
            disabled: s,
            form: h,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
_d.displayName = Ss;
var Rd = "SwitchThumb",
  zd = g.forwardRef((e, t) => {
    const { __scopeSwitch: n, ...r } = e,
      l = dv(Rd, n);
    return v.jsx(ks.span, {
      "data-state": Ld(l.checked),
      "data-disabled": l.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
zd.displayName = Rd;
var fv = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...l } = e,
    o = g.useRef(null),
    i = ov(n),
    s = sv(t);
  return (
    g.useEffect(() => {
      const u = o.current,
        a = window.HTMLInputElement.prototype,
        f = Object.getOwnPropertyDescriptor(a, "checked").set;
      if (i !== n && f) {
        const m = new Event("click", { bubbles: r });
        f.call(u, n), u.dispatchEvent(m);
      }
    }, [i, n, r]),
    v.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...l,
      tabIndex: -1,
      ref: o,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function Ld(e) {
  return e ? "checked" : "unchecked";
}
var Td = _d,
  pv = zd;
const Cs = g.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Td, {
    className: Je(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e,
    ),
    ...t,
    ref: n,
    children: v.jsx(pv, {
      className: Je(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
Cs.displayName = Td.displayName;
var hv = "Label",
  Od = g.forwardRef((e, t) =>
    v.jsx(ks.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var l;
        n.target.closest("button, input, select, textarea") ||
          ((l = e.onMouseDown) == null || l.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
Od.displayName = hv;
var Id = Od;
const mv = Nd(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Es = g.forwardRef(({ className: e, ...t }, n) =>
    v.jsx(Id, { ref: n, className: Je(mv(), e), ...t }),
  );
Es.displayName = Id.displayName;
function vv() {
  const e = "",
    [t, n] = g.useState([]),
    [r, l] = g.useState(""),
    [o, i] = g.useState(!1),
    [s, u] = g.useState(""),
    a = g.useRef(null),
    [h, f] = g.useState(!1),
    [m, k] = g.useState([]),
    [w, y] = g.useState(""),
    [S, d] = g.useState(!1),
    c = (R) => {
      const { value: V, checked: J } = R.target;
      k((Qe) => (J ? [...Qe, V] : Qe.filter((M) => M !== V)));
    },
    p = (R) => {
      const V = R.target.files[0],
        J = { file: V, preview: URL.createObjectURL(V) };
      n([J]);
    },
    x = () => {
      n([]), a.current && (a.current.value = null);
    },
    j = (R) => {
      R.preventDefault();
      const V = R.dataTransfer.files[0],
        J = { file: V, preview: URL.createObjectURL(V) };
      n([J]);
    },
    N = (R) => {
      R.preventDefault();
    },
    _ = async (R) => {
      if ((R.preventDefault(), u(""), y(""), !t.length || !r)) {
        alert("Täytä molemmat kentät!");
        return;
      }
      i(!0);
      const V = new FormData();
      V.append("img", t[0].file), V.append("prompt", r);
      try {
        const J = await fetch(`${e}/api/ads/stabilityimg`, {
          method: "POST",
          body: V,
        });
        if (!J.ok) throw new Error(`HTTP error! status: ${J.status}`);
        const B = `data:image/png;base64,${(await J.json()).data}`;
        if (h) {
          const E = new FormData();
          E.append("img", t[0].file),
            m.forEach((D) => {
              E.append("viewPoints", D);
            });
          const L = await fetch(`${e}/api/ads/getadtext`, {
            method: "POST",
            body: E,
          });
          if (!L.ok) throw new Error(`HTTP error! status: ${L.status}`);
          const T = await L.json();
          y(T.adText);
        }
        u(B);
      } catch (J) {
        console.error("Virhe lähetyksessä:", J), alert("Tapahtui virhe.");
      } finally {
        i(!1);
      }
    },
    z = () => {
      i(!1);
    },
    $ = () => {
      const R = document.createElement("a");
      (R.href = s), (R.download = "stability.png"), R.click();
    },
    O = (R) => {
      f(R), console.log(R);
    },
    re = () => {
      navigator.clipboard
        .writeText(w)
        .then(() => {
          d(!0), setTimeout(() => d(!1), 2e3);
        })
        .catch((R) => {
          console.error("Kopiointi epäonnistui:", R);
        });
    };
  return v.jsxs("div", {
    className: "w-full h-full flex justify-center items-center p-4",
    children: [
      v.jsxs(kr, {
        className: "w-full max-w-4xl flex flex-col space-y-4 p-6",
        style: { paddingLeft: 100, paddingRight: 100 },
        children: [
          v.jsx(ys, {
            children: v.jsx(ws, { children: "Stability AI 1 Form" }),
          }),
          v.jsxs(Sr, {
            children: [
              v.jsxs("form", {
                className: "flex flex-col space-y-4",
                onSubmit: _,
                children: [
                  v.jsx("textarea", {
                    id: "description",
                    rows: 4,
                    value: r,
                    onChange: (R) => l(R.target.value),
                    placeholder:
                      "Kuvaile millaisen mainoskuvan haluat tekoälyn luovan",
                    style: {
                      resize: "none",
                      width: "100%",
                      height: "100px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "8px",
                    },
                  }),
                  v.jsxs("div", {
                    className:
                      "border-2 border-dashed border-zinc-200 rounded-lg p-4 dark:border-zinc-800",
                    onDrop: j,
                    onDragOver: N,
                    children: [
                      v.jsxs("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [
                          v.jsx(gv, {
                            className:
                              "h-6 w-6 text-zinc-500 dark:text-zinc-400",
                          }),
                          v.jsx("p", {
                            className: "text-zinc-500 dark:text-zinc-400",
                            children: "Vedä ja pudota kuva tänne ",
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: "text-center mt-2",
                        children: [
                          v.jsx("input", {
                            name: "fileInput",
                            id: "fileInput",
                            type: "file",
                            accept: "image/*",
                            multiple: !0,
                            onChange: p,
                            ref: a,
                            style: { display: "none" },
                          }),
                          v.jsx("label", {
                            htmlFor: "fileInput",
                            children: v.jsx(Be, {
                              as: "span",
                              variant: "outline",
                              onClick: (R) => {
                                R.stopPropagation(),
                                  R.preventDefault(),
                                  a.current.click();
                              },
                              children: "Tai selaa tiedostoja ",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "flex justify-center",
                    children: t.map((R, V) =>
                      v.jsxs(
                        "div",
                        {
                          className: "relative",
                          children: [
                            v.jsx("img", {
                              src: R.preview,
                              alt: `Uploaded image ${V + 1}`,
                              className:
                                "aspect-square object-contain border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800",
                              style: { maxWidth: "300px", maxHeight: "300px" },
                            }),
                            v.jsxs(Be, {
                              variant: "ghost",
                              className:
                                "absolute top-1 right-1 h-6 w-6 p-1 custom-button",
                              onClick: x,
                              children: [
                                v.jsx(yv, { className: "h-4 w-4" }),
                                v.jsx("span", {
                                  className: "sr-only",
                                  children: "Remove image",
                                }),
                              ],
                            }),
                          ],
                        },
                        V,
                      ),
                    ),
                  }),
                  v.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      v.jsx(Cs, {
                        id: "adprompt",
                        className: "switch",
                        checked: h,
                        onCheckedChange: O,
                      }),
                      v.jsx(Es, {
                        htmlFor: "adprompt",
                        className: "text-sm",
                        children: "Generoi mainosteksti",
                      }),
                    ],
                  }),
                  h &&
                    v.jsxs("div", {
                      className: "flex flex-col space-y-2 mt-4",
                      children: [
                        v.jsx("h2", {
                          className: "font-bold",
                          children: "Kiertotalousnäkökulma",
                        }),
                        v.jsxs("label", {
                          children: [
                            v.jsx("input", {
                              type: "checkbox",
                              value: "durability",
                              onChange: c,
                            }),
                            " ",
                            "Kestävyys & laadukkuus",
                          ],
                        }),
                        v.jsxs("label", {
                          children: [
                            v.jsx("input", {
                              type: "checkbox",
                              value: "repairability",
                              onChange: c,
                            }),
                            " ",
                            "Korjattavuus",
                          ],
                        }),
                        v.jsxs("label", {
                          children: [
                            v.jsx("input", {
                              type: "checkbox",
                              value: "maintainability",
                              onChange: c,
                            }),
                            " ",
                            "Huollettavuus",
                          ],
                        }),
                        v.jsxs("label", {
                          children: [
                            v.jsx("input", {
                              type: "checkbox",
                              value: "upgradability",
                              onChange: c,
                            }),
                            " ",
                            "Päivitettävyys",
                          ],
                        }),
                        v.jsxs("label", {
                          children: [
                            v.jsx("input", {
                              type: "checkbox",
                              value: "recyclability",
                              onChange: c,
                            }),
                            " ",
                            "Säilyttää arvon (kierrätettävyys)",
                          ],
                        }),
                      ],
                    }),
                  v.jsx(Be, {
                    type: "submit",
                    className: "buttoni",
                    children: "Generoi mainos ",
                  }),
                ],
              }),
              o && v.jsx("p", { children: "Ladataan kuvaa..." }),
            ],
          }),
        ],
      }),
      s &&
        v.jsx(kr, {
          className: "w-full max-w-4xl",
          style: { marginLeft: 10 },
          children: v.jsx(Sr, {
            className: "p-6",
            children: v.jsxs("div", {
              className: "space-y-4",
              children: [
                v.jsx("img", {
                  src: s,
                  alt: "Vastaanotettu kuva",
                  className: "max-w-full h-auto rounded-lg mx-auto",
                  onLoad: z,
                }),
                w &&
                  v.jsxs("form", {
                    className: "relative",
                    children: [
                      v.jsx("textarea", {
                        value: w,
                        onChange: (R) => y(R.target.value),
                        style: {
                          resize: "none",
                          width: "100%",
                          height: "500px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          padding: "8px",
                          paddingTop: "40px",
                        },
                      }),
                      v.jsx("button", {
                        type: "button",
                        className:
                          "absolute top-2 right-2 bg-black text-gb-700 p-2 hover:bg-gray-500 transition-all border border-gray-300 rounded-md shadow-md hover:shadow-lg",
                        onClick: re,
                        style: {
                          width: "20px",
                          height: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "4px",
                        },
                        children: S
                          ? v.jsx(v.Fragment, {
                              children: v.jsx(xv, {
                                className: "w-6 h-6 mx-auto text-white",
                              }),
                            })
                          : v.jsx(wv, {
                              className: "w-6 h-6 mx-auto text-white",
                            }),
                      }),
                    ],
                  }),
                v.jsx(Be, {
                  onClick: $,
                  className: "buttoni",
                  children: "Lataa kuva",
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function gv(e) {
  return v.jsxs("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      v.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      v.jsx("polyline", { points: "17 8 12 3 7 8" }),
      v.jsx("line", { x1: "12", x2: "12", y1: "3", y2: "15" }),
    ],
  });
}
function yv(e) {
  return v.jsxs("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      v.jsx("path", { d: "M18 6 6 18" }),
      v.jsx("path", { d: "m6 6 12 12" }),
    ],
  });
}
function wv(e) {
  return v.jsx("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: v.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z",
    }),
  });
}
function xv(e) {
  return v.jsx("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: v.jsx("path", { d: "M5 13l4 4L19 7" }),
  });
}
function kv() {
  const e = "",
    [t, n] = g.useState([]),
    [r, l] = g.useState(""),
    [o, i] = g.useState(!1),
    [s, u] = g.useState(""),
    a = g.useRef(null),
    [h, f] = g.useState(!1),
    [m, k] = g.useState([]),
    [w, y] = g.useState(""),
    [S, d] = g.useState(!1),
    [c, p] = g.useState(""),
    [x, j] = g.useState(!1),
    N = (M) => {
      const { value: B, checked: E } = M.target;
      k((L) => (E ? [...L, B] : L.filter((T) => T !== B)));
    },
    _ = (M) => {
      const B = M.target.files[0];
      if (!B) return;
      if (!["image/jpeg", "image/png", "image/webp"].includes(B.type)) {
        alert("Vain JPEG, PNG ja WEBP kuvat ovat tuettuja.");
        return;
      }
      const L = 4 * 1024 * 1024;
      if (B.size > L) {
        alert("Kuvan maksimikoko on 4MB");
        return;
      }
      try {
        const T = { file: B, preview: URL.createObjectURL(B) };
        n([T]);
      } catch (T) {
        console.error("Virhe kuvan käsittelyssä:", T),
          alert("Kuvan lataaminen epäonnistui");
      }
    },
    z = () => {
      n([]), a.current && (a.current.value = null);
    },
    $ = (M) => {
      M.preventDefault();
      const B = M.dataTransfer.files[0],
        E = { file: B, preview: URL.createObjectURL(B) };
      n([E]);
    },
    O = (M) => {
      M.preventDefault();
    },
    re = async (M) => {
      if ((M.preventDefault(), u(""), y(""), !t.length || !r)) {
        alert("Täytä molemmat kentät!");
        return;
      }
      i(!0), p("Lähetetään kuvaa...");
      const B = new FormData();
      B.append("img", t[0].file), B.append("prompt", r);
      try {
        const E = await fetch(`${e}/api/ads/image`, {
          method: "POST",
          body: B,
        });
        if (!E.ok) throw new Error(`HTTP error! status: ${E.status}`);
        const L = await E.json();
        let T = !0,
          D;
        const q = new FormData();
        for (q.append("imageId", L.imageId), p("Generoidaan kuvaa..."); T; ) {
          const be = await fetch(`${e}/api/ads/getimage`, {
            method: "POST",
            body: q,
          });
          if (!be.ok) throw new Error(`HTTP error! status: ${be.status}`);
          const le = await be.json();
          if (!le.image || le.image === 202) {
            await new Promise((qe) => setTimeout(qe, 5e3));
            continue;
          }
          if (le.image) (D = le.image), (T = !1);
          else throw new Error("Kuvan hakeminen epäonnistui");
        }
        if (D) {
          const be = `data:image/png;base64,${D}`;
          if ((u(be), h)) {
            j(!0), p("Generoidaan mainostekstiä...");
            try {
              const le = new FormData();
              le.append("img", t[0].file),
                m.forEach((Jt) => {
                  le.append("viewPoints", Jt);
                });
              const qe = await fetch(`${e}/api/ads/getadtext`, {
                method: "POST",
                body: le,
              });
              if (!qe.ok) throw new Error(`HTTP error! status: ${qe.status}`);
              const et = await qe.json();
              y(et.adText);
            } catch (le) {
              console.error("Virhe mainostekstin generoinnissa:", le),
                alert("Mainostekstin generointi epäonnistui: " + le.message);
            } finally {
              j(!1);
            }
          }
        }
      } catch (E) {
        console.error("Virhe lähetyksessä:", E),
          alert("Tapahtui virhe: " + E.message);
      } finally {
        p(""), i(!1);
      }
    },
    R = () => {
      i(!1);
    },
    V = () => {
      const M = document.createElement("a");
      (M.href = s), (M.download = "stability.png"), M.click();
    },
    J = (M) => {
      f(M), console.log(M);
    },
    Qe = () => {
      navigator.clipboard
        .writeText(w)
        .then(() => {
          d(!0), setTimeout(() => d(!1), 2e3);
        })
        .catch((M) => {
          console.error("Kopiointi epäonnistui:", M);
        });
    };
  return v.jsxs("div", {
    className: "w-full h-full flex justify-center items-center p-4",
    children: [
      v.jsxs(kr, {
        className: "w-full max-w-4xl flex flex-col space-y-4 p-6",
        style: { paddingLeft: 100, paddingRight: 100 },
        children: [
          v.jsx(ys, {
            children: v.jsx(ws, { children: "Stability AI 2 Form" }),
          }),
          v.jsx(Sr, {
            children: v.jsxs("form", {
              className: "flex flex-col space-y-4",
              onSubmit: re,
              children: [
                v.jsx("textarea", {
                  id: "description",
                  rows: 4,
                  value: r,
                  onChange: (M) => l(M.target.value),
                  placeholder:
                    "Kuvaile millaisen mainoskuvan haluat tekoälyn luovan",
                  style: {
                    resize: "none",
                    width: "100%",
                    height: "100px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                  },
                }),
                v.jsxs("div", {
                  className:
                    "border-2 border-dashed border-zinc-200 rounded-lg p-4 dark:border-zinc-800",
                  onDrop: $,
                  onDragOver: O,
                  children: [
                    v.jsxs("div", {
                      className: "flex items-center justify-center space-x-2",
                      children: [
                        v.jsx(Sv, {
                          className: "h-6 w-6 text-zinc-500 dark:text-zinc-400",
                        }),
                        v.jsx("p", {
                          className: "text-zinc-500 dark:text-zinc-400",
                          children: "Vedä ja pudota kuva tänne ",
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "text-center mt-2",
                      children: [
                        v.jsx("input", {
                          name: "fileInput",
                          id: "fileInput",
                          type: "file",
                          accept: "image/*",
                          multiple: !0,
                          onChange: _,
                          ref: a,
                          style: { display: "none" },
                        }),
                        v.jsx("label", {
                          htmlFor: "fileInput",
                          children: v.jsx(Be, {
                            as: "span",
                            variant: "outline",
                            onClick: (M) => {
                              M.stopPropagation(),
                                M.preventDefault(),
                                a.current.click();
                            },
                            children: "Tai selaa tiedostoja ",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx("div", {
                  className: "flex justify-center",
                  children: t.map((M, B) =>
                    v.jsxs(
                      "div",
                      {
                        className: "relative",
                        children: [
                          v.jsx("img", {
                            src: M.preview,
                            alt: `Uploaded image ${B + 1}`,
                            className:
                              "aspect-square object-contain border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800",
                            style: { maxWidth: "300px", maxHeight: "300px" },
                          }),
                          v.jsxs(Be, {
                            variant: "ghost",
                            className:
                              "absolute top-1 right-1 h-6 w-6 p-1 custom-button",
                            onClick: z,
                            children: [
                              v.jsx(Cv, { className: "h-4 w-4" }),
                              v.jsx("span", {
                                className: "sr-only",
                                children: "Remove image",
                              }),
                            ],
                          }),
                        ],
                      },
                      B,
                    ),
                  ),
                }),
                v.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    v.jsx(Cs, {
                      id: "adprompt",
                      className: "switch",
                      checked: h,
                      onCheckedChange: J,
                    }),
                    v.jsx(Es, {
                      htmlFor: "adprompt",
                      className: "text-sm",
                      children: "Generoi mainosteksti",
                    }),
                  ],
                }),
                h &&
                  v.jsxs("div", {
                    className: "flex flex-col space-y-2 mt-4",
                    children: [
                      v.jsx("h2", {
                        className: "font-bold",
                        children: "Kiertotalousnäkökulma",
                      }),
                      v.jsxs("label", {
                        children: [
                          v.jsx("input", {
                            type: "checkbox",
                            value: "durability",
                            onChange: N,
                          }),
                          " ",
                          "Kestävyys & laadukkuus",
                        ],
                      }),
                      v.jsxs("label", {
                        children: [
                          v.jsx("input", {
                            type: "checkbox",
                            value: "repairability",
                            onChange: N,
                          }),
                          " ",
                          "Korjattavuus",
                        ],
                      }),
                      v.jsxs("label", {
                        children: [
                          v.jsx("input", {
                            type: "checkbox",
                            value: "maintainability",
                            onChange: N,
                          }),
                          " ",
                          "Huollettavuus",
                        ],
                      }),
                      v.jsxs("label", {
                        children: [
                          v.jsx("input", {
                            type: "checkbox",
                            value: "upgradability",
                            onChange: N,
                          }),
                          " ",
                          "Päivitettävyys",
                        ],
                      }),
                      v.jsxs("label", {
                        children: [
                          v.jsx("input", {
                            type: "checkbox",
                            value: "recyclability",
                            onChange: N,
                          }),
                          " ",
                          "Säilyttää arvon (kierrätettävyys)",
                        ],
                      }),
                    ],
                  }),
                v.jsx(Be, {
                  type: "submit",
                  className: "buttoni",
                  children: "Generoi mainos ",
                }),
              ],
            }),
          }),
        ],
      }),
      o &&
        v.jsx("div", {
          className:
            "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
          children: v.jsx("div", {
            className: "bg-white p-6 rounded-lg shadow-xl",
            children: v.jsxs("div", {
              className: "flex flex-col items-center gap-4",
              children: [
                v.jsx("div", {
                  className:
                    "animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent",
                }),
                v.jsx("p", { className: "text-lg font-medium", children: c }),
              ],
            }),
          }),
        }),
      s &&
        v.jsx(kr, {
          className: "w-full max-w-4xl",
          style: { marginLeft: 10 },
          children: v.jsx(Sr, {
            className: "p-6",
            children: v.jsxs("div", {
              className: "space-y-4",
              children: [
                v.jsx("img", {
                  src: s,
                  alt: "Vastaanotettu kuva",
                  className: "max-w-full h-auto rounded-lg mx-auto",
                  onLoad: R,
                }),
                x
                  ? v.jsx("div", {
                      className:
                        "space-y-4 p-6 flex items-center justify-center",
                      children: v.jsxs("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                          v.jsx("div", {
                            className:
                              "animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent",
                          }),
                          v.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Generoidaan mainostekstiä...",
                          }),
                        ],
                      }),
                    })
                  : w
                    ? v.jsxs("form", {
                        className: "relative",
                        children: [
                          v.jsx("textarea", {
                            value: w,
                            onChange: (M) => y(M.target.value),
                            style: {
                              resize: "none",
                              width: "100%",
                              height: "500px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              padding: "8px",
                              paddingTop: "40px",
                            },
                          }),
                          v.jsx("button", {
                            type: "button",
                            className:
                              "absolute top-2 right-2 bg-black text-gb-700 p-2 hover:bg-gray-500 transition-all border border-gray-300 rounded-md shadow-md hover:shadow-lg",
                            onClick: Qe,
                            style: {
                              width: "20px",
                              height: "10px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: "4px",
                            },
                            children: S
                              ? v.jsx(jv, {
                                  className: "w-6 h-6 mx-auto text-white",
                                })
                              : v.jsx(Ev, {
                                  className: "w-6 h-6 mx-auto text-white",
                                }),
                          }),
                        ],
                      })
                    : null,
                v.jsx(Be, {
                  onClick: V,
                  className: "buttoni",
                  children: "Lataa kuva",
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function Sv(e) {
  return v.jsxs("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      v.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      v.jsx("polyline", { points: "17 8 12 3 7 8" }),
      v.jsx("line", { x1: "12", x2: "12", y1: "3", y2: "15" }),
    ],
  });
}
function Cv(e) {
  return v.jsxs("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      v.jsx("path", { d: "M18 6 6 18" }),
      v.jsx("path", { d: "m6 6 12 12" }),
    ],
  });
}
function Ev(e) {
  return v.jsx("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: v.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z",
    }),
  });
}
function jv(e) {
  return v.jsx("svg", {
    ...e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: v.jsx("path", { d: "M5 13l4 4L19 7" }),
  });
}
function Nv() {
  return v.jsxs("div", {
    children: [
      v.jsx("h1", { children: "Luo upeita mainoskuvia hetkessä" }),
      v.jsx("p", {
        children:
          "Tervetuloa sovellukseemme, joka käyttää tekoälyä luodakseen ammattilaismaisia mainoskuvia huonekalujesi esittelyyn. Helppokäyttöisellä alustallamme voit ladata oman kuvasi ja määritellä mainoksen tyylin ja tunnelman. Tekoäly hoitaa loput, luoden korkealaatuisia kuvia haluamassasi ympäristössä ja visuaalisessa tyylissä.",
      }),
      v.jsx(tr, {
        to: "/stability",
        children: v.jsx(Be, { children: "Luo mainoskuvasi stability1" }),
      }),
      v.jsx(tr, {
        to: "/stability2",
        children: v.jsx(Be, { children: "Luo mainoskuvasi stability2" }),
      }),
    ],
  });
}
function Pv() {
  return v.jsx("div", {
    children: v.jsx(am, {
      children: v.jsxs("div", {
        children: [
          v.jsx("nav", {
            children: v.jsxs("ul", {
              children: [
                v.jsx("li", {
                  children: v.jsx(tr, { to: "/", children: "MainosMestari" }),
                }),
                v.jsx("li", {
                  children: v.jsx(tr, {
                    to: "/stability",
                    children: "Stability",
                  }),
                }),
                v.jsx("li", {
                  children: v.jsx(tr, {
                    to: "/stability2",
                    children: "Stability2",
                  }),
                }),
              ],
            }),
          }),
          v.jsxs(nm, {
            children: [
              v.jsx(ll, { path: "/", element: v.jsx(Nv, {}) }),
              v.jsx(ll, { path: "/stability", element: v.jsx(vv, {}) }),
              v.jsx(ll, { path: "/stability2", element: v.jsx(kv, {}) }),
            ],
          }),
        ],
      }),
    }),
  });
}
id(document.getElementById("root")).render(
  v.jsx(g.StrictMode, { children: v.jsx(Pv, {}) }),
);
