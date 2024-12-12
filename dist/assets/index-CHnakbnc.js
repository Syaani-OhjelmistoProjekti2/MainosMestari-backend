function _x(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
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
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function qh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Jh = { exports: {} },
  Js = {},
  em = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ci = Symbol.for("react.element"),
  Vx = Symbol.for("react.portal"),
  Fx = Symbol.for("react.fragment"),
  zx = Symbol.for("react.strict_mode"),
  Bx = Symbol.for("react.profiler"),
  Ux = Symbol.for("react.provider"),
  $x = Symbol.for("react.context"),
  Wx = Symbol.for("react.forward_ref"),
  Hx = Symbol.for("react.suspense"),
  Kx = Symbol.for("react.memo"),
  Gx = Symbol.for("react.lazy"),
  qd = Symbol.iterator;
function Yx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qd && e[qd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nm = Object.assign,
  rm = {};
function Kr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rm),
    (this.updater = n || tm);
}
Kr.prototype.isReactComponent = {};
Kr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function om() {}
om.prototype = Kr.prototype;
function tc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rm),
    (this.updater = n || tm);
}
var nc = (tc.prototype = new om());
nc.constructor = tc;
nm(nc, Kr.prototype);
nc.isPureReactComponent = !0;
var Jd = Array.isArray,
  im = Object.prototype.hasOwnProperty,
  rc = { current: null },
  sm = { key: !0, ref: !0, __self: !0, __source: !0 };
function am(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      im.call(t, r) && !sm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ci,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: rc.current,
  };
}
function Xx(e, t) {
  return {
    $$typeof: ci,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function oc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ci;
}
function Qx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ef = /\/+/g;
function ja(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qx("" + e.key)
    : t.toString(36);
}
function Zi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ci:
          case Vx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + ja(s, 0) : r),
      Jd(o)
        ? ((n = ""),
          e != null && (n = e.replace(ef, "$&/") + "/"),
          Zi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (oc(o) &&
            (o = Xx(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ef, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Jd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ja(i, a);
      s += Zi(i, t, n, l, o);
    }
  else if (((l = Yx(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + ja(i, a++)), (s += Zi(i, t, n, l, o));
  else if (i === "object")
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
  return s;
}
function Pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Zi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Zx(e) {
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
var Fe = { current: null },
  qi = { transition: null },
  qx = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: qi,
    ReactCurrentOwner: rc,
  };
function lm() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = {
  map: Pi,
  forEach: function (e, t, n) {
    Pi(
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
      Pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
W.Component = Kr;
W.Fragment = Fx;
W.Profiler = Bx;
W.PureComponent = tc;
W.StrictMode = zx;
W.Suspense = Hx;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qx;
W.act = lm;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = nm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = rc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      im.call(t, l) &&
        !sm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ci, type: e.type, key: o, ref: i, props: r, _owner: s };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: $x,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ux, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = am;
W.createFactory = function (e) {
  var t = am.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Wx, render: e };
};
W.isValidElement = oc;
W.lazy = function (e) {
  return { $$typeof: Gx, _payload: { _status: -1, _result: e }, _init: Zx };
};
W.memo = function (e, t) {
  return { $$typeof: Kx, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = qi.transition;
  qi.transition = {};
  try {
    e();
  } finally {
    qi.transition = t;
  }
};
W.unstable_act = lm;
W.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Fe.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
W.useId = function () {
  return Fe.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Fe.current.useRef(e);
};
W.useState = function (e) {
  return Fe.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Fe.current.useTransition();
};
W.version = "18.3.1";
em.exports = W;
var v = em.exports;
const nn = qh(v),
  Jx = _x({ __proto__: null, default: nn }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ew = v,
  tw = Symbol.for("react.element"),
  nw = Symbol.for("react.fragment"),
  rw = Object.prototype.hasOwnProperty,
  ow = ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  iw = { key: !0, ref: !0, __self: !0, __source: !0 };
function um(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) rw.call(t, r) && !iw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: tw,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: ow.current,
  };
}
Js.Fragment = nw;
Js.jsx = um;
Js.jsxs = um;
Jh.exports = Js;
var w = Jh.exports,
  cm = { exports: {} },
  tt = {},
  dm = { exports: {} },
  fm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, N) {
    var j = R.length;
    R.push(N);
    e: for (; 0 < j; ) {
      var B = (j - 1) >>> 1,
        J = R[B];
      if (0 < o(J, N)) (R[B] = N), (R[j] = J), (j = B);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var N = R[0],
      j = R.pop();
    if (j !== N) {
      R[0] = j;
      e: for (var B = 0, J = R.length, rt = J >>> 1; B < rt; ) {
        var Y = 2 * (B + 1) - 1,
          le = R[Y],
          we = Y + 1,
          I = R[we];
        if (0 > o(le, j))
          we < J && 0 > o(I, le)
            ? ((R[B] = I), (R[we] = j), (B = we))
            : ((R[B] = le), (R[Y] = j), (B = Y));
        else if (we < J && 0 > o(I, j)) (R[B] = I), (R[we] = j), (B = we);
        else break e;
      }
    }
    return N;
  }
  function o(R, N) {
    var j = R.sortIndex - N.sortIndex;
    return j !== 0 ? j : R.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    x = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= R)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function C(R) {
    if (((g = !1), y(R), !x))
      if (n(l) !== null) (x = !0), F(T);
      else {
        var N = n(u);
        N !== null && O(C, N.startTime - R);
      }
  }
  function T(R, N) {
    (x = !1), g && ((g = !1), p(E), (E = -1)), (m = !0);
    var j = f;
    try {
      for (
        y(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (R && !_()));

      ) {
        var B = d.callback;
        if (typeof B == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var J = B(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof J == "function" ? (d.callback = J) : d === n(l) && r(l),
            y(N);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var rt = !0;
      else {
        var Y = n(u);
        Y !== null && O(C, Y.startTime - N), (rt = !1);
      }
      return rt;
    } finally {
      (d = null), (f = j), (m = !1);
    }
  }
  var k = !1,
    P = null,
    E = -1,
    M = 5,
    b = -1;
  function _() {
    return !(e.unstable_now() - b < M);
  }
  function L() {
    if (P !== null) {
      var R = e.unstable_now();
      b = R;
      var N = !0;
      try {
        N = P(!0, R);
      } finally {
        N ? $() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var $;
  if (typeof h == "function")
    $ = function () {
      h(L);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      K = z.port2;
    (z.port1.onmessage = L),
      ($ = function () {
        K.postMessage(null);
      });
  } else
    $ = function () {
      S(L, 0);
    };
  function F(R) {
    (P = R), k || ((k = !0), $());
  }
  function O(R, N) {
    E = S(function () {
      R(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || m || ((x = !0), F(T));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var j = f;
      f = N;
      try {
        return R();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, N) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var j = f;
      f = R;
      try {
        return N();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (R, N, j) {
      var B = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? B + j : B))
          : (j = B),
        R)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = j + J),
        (R = {
          id: c++,
          callback: N,
          priorityLevel: R,
          startTime: j,
          expirationTime: J,
          sortIndex: -1,
        }),
        j > B
          ? ((R.sortIndex = j),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (g ? (p(E), (E = -1)) : (g = !0), O(C, j - B)))
          : ((R.sortIndex = J), t(l, R), x || m || ((x = !0), F(T))),
        R
      );
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (R) {
      var N = f;
      return function () {
        var j = f;
        f = N;
        try {
          return R.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(fm);
dm.exports = fm;
var sw = dm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aw = v,
  Je = sw;
function A(e) {
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
var pm = new Set(),
  Fo = {};
function Jn(e, t) {
  jr(e, t), jr(e + "Capture", t);
}
function jr(e, t) {
  for (Fo[e] = t, e = 0; e < t.length; e++) pm.add(t[e]);
}
var Wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Nl = Object.prototype.hasOwnProperty,
  lw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  tf = {},
  nf = {};
function uw(e) {
  return Nl.call(nf, e)
    ? !0
    : Nl.call(tf, e)
      ? !1
      : lw.test(e)
        ? (nf[e] = !0)
        : ((tf[e] = !0), !1);
}
function cw(e, t, n, r) {
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
function dw(e, t, n, r) {
  if (t === null || typeof t > "u" || cw(e, t, n, r)) return !0;
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
function ze(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ic = /[\-:]([a-z])/g;
function sc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ic, sc);
    Ae[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ic, sc);
    Ae[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ic, sc);
  Ae[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ac(e, t, n, r) {
  var o = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (dw(t, n, o, r) && (n = null),
    r || o === null
      ? uw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qt = aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ki = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  lc = Symbol.for("react.strict_mode"),
  Ml = Symbol.for("react.profiler"),
  hm = Symbol.for("react.provider"),
  mm = Symbol.for("react.context"),
  uc = Symbol.for("react.forward_ref"),
  Dl = Symbol.for("react.suspense"),
  jl = Symbol.for("react.suspense_list"),
  cc = Symbol.for("react.memo"),
  sn = Symbol.for("react.lazy"),
  gm = Symbol.for("react.offscreen"),
  rf = Symbol.iterator;
function oo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rf && e[rf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  La;
function go(e) {
  if (La === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      La = (t && t[1]) || "";
    }
  return (
    `
` +
    La +
    e
  );
}
var Oa = !1;
function Ia(e, t) {
  if (!e || Oa) return "";
  Oa = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Oa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? go(e) : "";
}
function fw(e) {
  switch (e.tag) {
    case 5:
      return go(e.type);
    case 16:
      return go("Lazy");
    case 13:
      return go("Suspense");
    case 19:
      return go("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ia(e.type, !1)), e;
    case 11:
      return (e = Ia(e.type.render, !1)), e;
    case 1:
      return (e = Ia(e.type, !0)), e;
    default:
      return "";
  }
}
function Ll(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case sr:
      return "Portal";
    case Ml:
      return "Profiler";
    case lc:
      return "StrictMode";
    case Dl:
      return "Suspense";
    case jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mm:
        return (e.displayName || "Context") + ".Consumer";
      case hm:
        return (e._context.displayName || "Context") + ".Provider";
      case uc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case cc:
        return (
          (t = e.displayName || null), t !== null ? t : Ll(e.type) || "Memo"
        );
      case sn:
        (t = e._payload), (e = e._init);
        try {
          return Ll(e(t));
        } catch {}
    }
  return null;
}
function pw(e) {
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
      return Ll(t);
    case 8:
      return t === lc ? "StrictMode" : "Mode";
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
function Sn(e) {
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
function vm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function hw(e) {
  var t = vm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ei(e) {
  e._valueTracker || (e._valueTracker = hw(e));
}
function ym(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ol(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function of(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xm(e, t) {
  (t = t.checked), t != null && ac(e, "checked", t, !1);
}
function Il(e, t) {
  xm(e, t);
  var n = Sn(t.value),
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
    ? _l(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _l(e, t.type, Sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function sf(e, t, n) {
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
function _l(e, t, n) {
  (t !== "number" || gs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vo = Array.isArray;
function Tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Sn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function af(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (vo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Sn(n) };
}
function wm(e, t) {
  var n = Sn(t.value),
    r = Sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function lf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ri,
  Cm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ri = Ri || document.createElement("div"),
          Ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ri.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Po = {
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
  mw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Po).forEach(function (e) {
  mw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Po[t] = Po[e]);
  });
});
function Tm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Po.hasOwnProperty(e) && Po[e])
      ? ("" + t).trim()
      : t + "px";
}
function Pm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Tm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var gw = fe(
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
function zl(e, t) {
  if (t) {
    if (gw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Bl(e, t) {
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
var Ul = null;
function dc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $l = null,
  Pr = null,
  kr = null;
function uf(e) {
  if ((e = pi(e))) {
    if (typeof $l != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = oa(t)), $l(e.stateNode, e.type, t));
  }
}
function km(e) {
  Pr ? (kr ? kr.push(e) : (kr = [e])) : (Pr = e);
}
function Em() {
  if (Pr) {
    var e = Pr,
      t = kr;
    if (((kr = Pr = null), uf(e), t)) for (e = 0; e < t.length; e++) uf(t[e]);
  }
}
function Rm(e, t) {
  return e(t);
}
function Am() {}
var _a = !1;
function bm(e, t, n) {
  if (_a) return e(t, n);
  _a = !0;
  try {
    return Rm(e, t, n);
  } finally {
    (_a = !1), (Pr !== null || kr !== null) && (Am(), Em());
  }
}
function Bo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = oa(n);
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
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var Wl = !1;
if (Wt)
  try {
    var io = {};
    Object.defineProperty(io, "passive", {
      get: function () {
        Wl = !0;
      },
    }),
      window.addEventListener("test", io, io),
      window.removeEventListener("test", io, io);
  } catch {
    Wl = !1;
  }
function vw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ko = !1,
  vs = null,
  ys = !1,
  Hl = null,
  yw = {
    onError: function (e) {
      (ko = !0), (vs = e);
    },
  };
function xw(e, t, n, r, o, i, s, a, l) {
  (ko = !1), (vs = null), vw.apply(yw, arguments);
}
function ww(e, t, n, r, o, i, s, a, l) {
  if ((xw.apply(this, arguments), ko)) {
    if (ko) {
      var u = vs;
      (ko = !1), (vs = null);
    } else throw Error(A(198));
    ys || ((ys = !0), (Hl = u));
  }
}
function er(e) {
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
function Nm(e) {
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
function cf(e) {
  if (er(e) !== e) throw Error(A(188));
}
function Sw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = er(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return cf(o), e;
        if (i === r) return cf(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Mm(e) {
  return (e = Sw(e)), e !== null ? Dm(e) : null;
}
function Dm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jm = Je.unstable_scheduleCallback,
  df = Je.unstable_cancelCallback,
  Cw = Je.unstable_shouldYield,
  Tw = Je.unstable_requestPaint,
  ge = Je.unstable_now,
  Pw = Je.unstable_getCurrentPriorityLevel,
  fc = Je.unstable_ImmediatePriority,
  Lm = Je.unstable_UserBlockingPriority,
  xs = Je.unstable_NormalPriority,
  kw = Je.unstable_LowPriority,
  Om = Je.unstable_IdlePriority,
  ea = null,
  bt = null;
function Ew(e) {
  if (bt && typeof bt.onCommitFiberRoot == "function")
    try {
      bt.onCommitFiberRoot(ea, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : bw,
  Rw = Math.log,
  Aw = Math.LN2;
function bw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rw(e) / Aw) | 0)) | 0;
}
var Ai = 64,
  bi = 4194304;
function yo(e) {
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
function ws(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = yo(a)) : ((i &= s), i !== 0 && (r = yo(i)));
  } else (s = n & ~o), s !== 0 ? (r = yo(s)) : i !== 0 && (r = yo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Nw(e, t) {
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
function Mw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - yt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = Nw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Kl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Im() {
  var e = Ai;
  return (Ai <<= 1), !(Ai & 4194240) && (Ai = 64), e;
}
function Va(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function di(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function Dw(e, t) {
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
    var o = 31 - yt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function pc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function _m(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vm,
  hc,
  Fm,
  zm,
  Bm,
  Gl = !1,
  Ni = [],
  pn = null,
  hn = null,
  mn = null,
  Uo = new Map(),
  $o = new Map(),
  ln = [],
  jw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ff(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      mn = null;
      break;
    case "pointerover":
    case "pointerout":
      Uo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $o.delete(t.pointerId);
  }
}
function so(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = pi(t)), t !== null && hc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Lw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (pn = so(pn, e, t, n, r, o)), !0;
    case "dragenter":
      return (hn = so(hn, e, t, n, r, o)), !0;
    case "mouseover":
      return (mn = so(mn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Uo.set(i, so(Uo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), $o.set(i, so($o.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Um(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Nm(n)), t !== null)) {
          (e.blockedOn = t),
            Bm(e.priority, function () {
              Fm(n);
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
function Ji(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ul = r), n.target.dispatchEvent(r), (Ul = null);
    } else return (t = pi(n)), t !== null && hc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pf(e, t, n) {
  Ji(e) && n.delete(t);
}
function Ow() {
  (Gl = !1),
    pn !== null && Ji(pn) && (pn = null),
    hn !== null && Ji(hn) && (hn = null),
    mn !== null && Ji(mn) && (mn = null),
    Uo.forEach(pf),
    $o.forEach(pf);
}
function ao(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gl ||
      ((Gl = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Ow)));
}
function Wo(e) {
  function t(o) {
    return ao(o, e);
  }
  if (0 < Ni.length) {
    ao(Ni[0], e);
    for (var n = 1; n < Ni.length; n++) {
      var r = Ni[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pn !== null && ao(pn, e),
      hn !== null && ao(hn, e),
      mn !== null && ao(mn, e),
      Uo.forEach(t),
      $o.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    Um(n), n.blockedOn === null && ln.shift();
}
var Er = qt.ReactCurrentBatchConfig,
  Ss = !0;
function Iw(e, t, n, r) {
  var o = G,
    i = Er.transition;
  Er.transition = null;
  try {
    (G = 1), mc(e, t, n, r);
  } finally {
    (G = o), (Er.transition = i);
  }
}
function _w(e, t, n, r) {
  var o = G,
    i = Er.transition;
  Er.transition = null;
  try {
    (G = 4), mc(e, t, n, r);
  } finally {
    (G = o), (Er.transition = i);
  }
}
function mc(e, t, n, r) {
  if (Ss) {
    var o = Yl(e, t, n, r);
    if (o === null) Ya(e, t, r, Cs, n), ff(e, r);
    else if (Lw(o, e, t, n, r)) r.stopPropagation();
    else if ((ff(e, r), t & 4 && -1 < jw.indexOf(e))) {
      for (; o !== null; ) {
        var i = pi(o);
        if (
          (i !== null && Vm(i),
          (i = Yl(e, t, n, r)),
          i === null && Ya(e, t, r, Cs, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ya(e, t, r, null, n);
  }
}
var Cs = null;
function Yl(e, t, n, r) {
  if (((Cs = null), (e = dc(r)), (e = Fn(e)), e !== null))
    if (((t = er(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Nm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Cs = e), null;
}
function $m(e) {
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
      switch (Pw()) {
        case fc:
          return 1;
        case Lm:
          return 4;
        case xs:
        case kw:
          return 16;
        case Om:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  gc = null,
  es = null;
function Wm() {
  if (es) return es;
  var e,
    t = gc,
    n = t.length,
    r,
    o = "value" in cn ? cn.value : cn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (es = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ts(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mi() {
  return !0;
}
function hf() {
  return !1;
}
function nt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Mi
        : hf),
      (this.isPropagationStopped = hf),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Mi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mi));
      },
      persist: function () {},
      isPersistent: Mi,
    }),
    t
  );
}
var Gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vc = nt(Gr),
  fi = fe({}, Gr, { view: 0, detail: 0 }),
  Vw = nt(fi),
  Fa,
  za,
  lo,
  ta = fe({}, fi, {
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
    getModifierState: yc,
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
        : (e !== lo &&
            (lo && e.type === "mousemove"
              ? ((Fa = e.screenX - lo.screenX), (za = e.screenY - lo.screenY))
              : (za = Fa = 0),
            (lo = e)),
          Fa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : za;
    },
  }),
  mf = nt(ta),
  Fw = fe({}, ta, { dataTransfer: 0 }),
  zw = nt(Fw),
  Bw = fe({}, fi, { relatedTarget: 0 }),
  Ba = nt(Bw),
  Uw = fe({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $w = nt(Uw),
  Ww = fe({}, Gr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hw = nt(Ww),
  Kw = fe({}, Gr, { data: 0 }),
  gf = nt(Kw),
  Gw = {
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
  Yw = {
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
  Xw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Qw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xw[e]) ? !!t[e] : !1;
}
function yc() {
  return Qw;
}
var Zw = fe({}, fi, {
    key: function (e) {
      if (e.key) {
        var t = Gw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ts(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Yw[e.keyCode] || "Unidentified"
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
    getModifierState: yc,
    charCode: function (e) {
      return e.type === "keypress" ? ts(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ts(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  qw = nt(Zw),
  Jw = fe({}, ta, {
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
  vf = nt(Jw),
  e1 = fe({}, fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yc,
  }),
  t1 = nt(e1),
  n1 = fe({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  r1 = nt(n1),
  o1 = fe({}, ta, {
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
  i1 = nt(o1),
  s1 = [9, 13, 27, 32],
  xc = Wt && "CompositionEvent" in window,
  Eo = null;
Wt && "documentMode" in document && (Eo = document.documentMode);
var a1 = Wt && "TextEvent" in window && !Eo,
  Hm = Wt && (!xc || (Eo && 8 < Eo && 11 >= Eo)),
  yf = " ",
  xf = !1;
function Km(e, t) {
  switch (e) {
    case "keyup":
      return s1.indexOf(t.keyCode) !== -1;
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
function Gm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var lr = !1;
function l1(e, t) {
  switch (e) {
    case "compositionend":
      return Gm(t);
    case "keypress":
      return t.which !== 32 ? null : ((xf = !0), yf);
    case "textInput":
      return (e = t.data), e === yf && xf ? null : e;
    default:
      return null;
  }
}
function u1(e, t) {
  if (lr)
    return e === "compositionend" || (!xc && Km(e, t))
      ? ((e = Wm()), (es = gc = cn = null), (lr = !1), e)
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
      return Hm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var c1 = {
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
function wf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!c1[e.type] : t === "textarea";
}
function Ym(e, t, n, r) {
  km(r),
    (t = Ts(t, "onChange")),
    0 < t.length &&
      ((n = new vc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ro = null,
  Ho = null;
function d1(e) {
  ig(e, 0);
}
function na(e) {
  var t = dr(e);
  if (ym(t)) return e;
}
function f1(e, t) {
  if (e === "change") return t;
}
var Xm = !1;
if (Wt) {
  var Ua;
  if (Wt) {
    var $a = "oninput" in document;
    if (!$a) {
      var Sf = document.createElement("div");
      Sf.setAttribute("oninput", "return;"),
        ($a = typeof Sf.oninput == "function");
    }
    Ua = $a;
  } else Ua = !1;
  Xm = Ua && (!document.documentMode || 9 < document.documentMode);
}
function Cf() {
  Ro && (Ro.detachEvent("onpropertychange", Qm), (Ho = Ro = null));
}
function Qm(e) {
  if (e.propertyName === "value" && na(Ho)) {
    var t = [];
    Ym(t, Ho, e, dc(e)), bm(d1, t);
  }
}
function p1(e, t, n) {
  e === "focusin"
    ? (Cf(), (Ro = t), (Ho = n), Ro.attachEvent("onpropertychange", Qm))
    : e === "focusout" && Cf();
}
function h1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return na(Ho);
}
function m1(e, t) {
  if (e === "click") return na(t);
}
function g1(e, t) {
  if (e === "input" || e === "change") return na(t);
}
function v1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : v1;
function Ko(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Nl.call(t, o) || !wt(e[o], t[o])) return !1;
  }
  return !0;
}
function Tf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pf(e, t) {
  var n = Tf(e);
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
    n = Tf(n);
  }
}
function Zm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Zm(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function qm() {
  for (var e = window, t = gs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gs(e.document);
  }
  return t;
}
function wc(e) {
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
function y1(e) {
  var t = qm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wc(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Pf(n, i));
        var s = Pf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var x1 = Wt && "documentMode" in document && 11 >= document.documentMode,
  ur = null,
  Xl = null,
  Ao = null,
  Ql = !1;
function kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ql ||
    ur == null ||
    ur !== gs(r) ||
    ((r = ur),
    "selectionStart" in r && wc(r)
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
    (Ao && Ko(Ao, r)) ||
      ((Ao = r),
      (r = Ts(Xl, "onSelect")),
      0 < r.length &&
        ((t = new vc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ur))));
}
function Di(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cr = {
    animationend: Di("Animation", "AnimationEnd"),
    animationiteration: Di("Animation", "AnimationIteration"),
    animationstart: Di("Animation", "AnimationStart"),
    transitionend: Di("Transition", "TransitionEnd"),
  },
  Wa = {},
  Jm = {};
Wt &&
  ((Jm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function ra(e) {
  if (Wa[e]) return Wa[e];
  if (!cr[e]) return e;
  var t = cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jm) return (Wa[e] = t[n]);
  return e;
}
var eg = ra("animationend"),
  tg = ra("animationiteration"),
  ng = ra("animationstart"),
  rg = ra("transitionend"),
  og = new Map(),
  Ef =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function An(e, t) {
  og.set(e, t), Jn(t, [e]);
}
for (var Ha = 0; Ha < Ef.length; Ha++) {
  var Ka = Ef[Ha],
    w1 = Ka.toLowerCase(),
    S1 = Ka[0].toUpperCase() + Ka.slice(1);
  An(w1, "on" + S1);
}
An(eg, "onAnimationEnd");
An(tg, "onAnimationIteration");
An(ng, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(rg, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var xo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  C1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
function Rf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ww(r, t, void 0, e), (e.currentTarget = null);
}
function ig(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Rf(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Rf(o, a, u), (i = l);
        }
    }
  }
  if (ys) throw ((e = Hl), (ys = !1), (Hl = null), e);
}
function re(e, t) {
  var n = t[tu];
  n === void 0 && (n = t[tu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sg(t, e, 2, !1), n.add(r));
}
function Ga(e, t, n) {
  var r = 0;
  t && (r |= 4), sg(n, e, r, t);
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function Go(e) {
  if (!e[ji]) {
    (e[ji] = !0),
      pm.forEach(function (n) {
        n !== "selectionchange" && (C1.has(n) || Ga(n, !1, e), Ga(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ji] || ((t[ji] = !0), Ga("selectionchange", !1, t));
  }
}
function sg(e, t, n, r) {
  switch ($m(t)) {
    case 1:
      var o = Iw;
      break;
    case 4:
      o = _w;
      break;
    default:
      o = mc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Wl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Ya(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Fn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  bm(function () {
    var u = i,
      c = dc(n),
      d = [];
    e: {
      var f = og.get(e);
      if (f !== void 0) {
        var m = vc,
          x = e;
        switch (e) {
          case "keypress":
            if (ts(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = qw;
            break;
          case "focusin":
            (x = "focus"), (m = Ba);
            break;
          case "focusout":
            (x = "blur"), (m = Ba);
            break;
          case "beforeblur":
          case "afterblur":
            m = Ba;
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
            m = mf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = zw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = t1;
            break;
          case eg:
          case tg:
          case ng:
            m = $w;
            break;
          case rg:
            m = r1;
            break;
          case "scroll":
            m = Vw;
            break;
          case "wheel":
            m = i1;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Hw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = vf;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          p = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var C = y.stateNode;
          if (
            (y.tag === 5 &&
              C !== null &&
              ((y = C),
              p !== null && ((C = Bo(h, p)), C != null && g.push(Yo(h, C, y)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((f = new m(f, x, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ul &&
            (x = n.relatedTarget || n.fromElement) &&
            (Fn(x) || x[Ht]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          m
            ? ((x = n.relatedTarget || n.toElement),
              (m = u),
              (x = x ? Fn(x) : null),
              x !== null &&
                ((S = er(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((m = null), (x = u)),
          m !== x)
        ) {
          if (
            ((g = mf),
            (C = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = vf),
              (C = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (S = m == null ? f : dr(m)),
            (y = x == null ? f : dr(x)),
            (f = new g(C, h + "leave", m, n, c)),
            (f.target = S),
            (f.relatedTarget = y),
            (C = null),
            Fn(c) === u &&
              ((g = new g(p, h + "enter", x, n, c)),
              (g.target = y),
              (g.relatedTarget = S),
              (C = g)),
            (S = C),
            m && x)
          )
            t: {
              for (g = m, p = x, h = 0, y = g; y; y = nr(y)) h++;
              for (y = 0, C = p; C; C = nr(C)) y++;
              for (; 0 < h - y; ) (g = nr(g)), h--;
              for (; 0 < y - h; ) (p = nr(p)), y--;
              for (; h--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = nr(g)), (p = nr(p));
              }
              g = null;
            }
          else g = null;
          m !== null && Af(d, f, m, g, !1),
            x !== null && S !== null && Af(d, S, x, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? dr(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var T = f1;
        else if (wf(f))
          if (Xm) T = g1;
          else {
            T = h1;
            var k = p1;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (T = m1);
        if (T && (T = T(e, u))) {
          Ym(d, T, n, c);
          break e;
        }
        k && k(e, f, u),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            _l(f, "number", f.value);
      }
      switch (((k = u ? dr(u) : window), e)) {
        case "focusin":
          (wf(k) || k.contentEditable === "true") &&
            ((ur = k), (Xl = u), (Ao = null));
          break;
        case "focusout":
          Ao = Xl = ur = null;
          break;
        case "mousedown":
          Ql = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ql = !1), kf(d, n, c);
          break;
        case "selectionchange":
          if (x1) break;
        case "keydown":
        case "keyup":
          kf(d, n, c);
      }
      var P;
      if (xc)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        lr
          ? Km(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Hm &&
          n.locale !== "ko" &&
          (lr || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && lr && (P = Wm())
            : ((cn = c),
              (gc = "value" in cn ? cn.value : cn.textContent),
              (lr = !0))),
        (k = Ts(u, E)),
        0 < k.length &&
          ((E = new gf(E, e, null, n, c)),
          d.push({ event: E, listeners: k }),
          P ? (E.data = P) : ((P = Gm(n)), P !== null && (E.data = P)))),
        (P = a1 ? l1(e, n) : u1(e, n)) &&
          ((u = Ts(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new gf("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    ig(d, t);
  });
}
function Yo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ts(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Bo(e, n)),
      i != null && r.unshift(Yo(e, i, o)),
      (i = Bo(e, t)),
      i != null && r.push(Yo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function nr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Af(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Bo(n, i)), l != null && s.unshift(Yo(n, l, a)))
        : o || ((l = Bo(n, i)), l != null && s.push(Yo(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var T1 = /\r\n?/g,
  P1 = /\u0000|\uFFFD/g;
function bf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      T1,
      `
`,
    )
    .replace(P1, "");
}
function Li(e, t, n) {
  if (((t = bf(t)), bf(e) !== t && n)) throw Error(A(425));
}
function Ps() {}
var Zl = null,
  ql = null;
function Jl(e, t) {
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
var eu = typeof setTimeout == "function" ? setTimeout : void 0,
  k1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nf = typeof Promise == "function" ? Promise : void 0,
  E1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nf < "u"
        ? function (e) {
            return Nf.resolve(null).then(e).catch(R1);
          }
        : eu;
function R1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Wo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Wo(t);
}
function gn(e) {
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
function Mf(e) {
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
var Yr = Math.random().toString(36).slice(2),
  Rt = "__reactFiber$" + Yr,
  Xo = "__reactProps$" + Yr,
  Ht = "__reactContainer$" + Yr,
  tu = "__reactEvents$" + Yr,
  A1 = "__reactListeners$" + Yr,
  b1 = "__reactHandles$" + Yr;
function Fn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mf(e); e !== null; ) {
          if ((n = e[Rt])) return n;
          e = Mf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pi(e) {
  return (
    (e = e[Rt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function oa(e) {
  return e[Xo] || null;
}
var nu = [],
  fr = -1;
function bn(e) {
  return { current: e };
}
function oe(e) {
  0 > fr || ((e.current = nu[fr]), (nu[fr] = null), fr--);
}
function te(e, t) {
  fr++, (nu[fr] = e.current), (e.current = t);
}
var Cn = {},
  Oe = bn(Cn),
  $e = bn(!1),
  Kn = Cn;
function Lr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function We(e) {
  return (e = e.childContextTypes), e != null;
}
function ks() {
  oe($e), oe(Oe);
}
function Df(e, t, n) {
  if (Oe.current !== Cn) throw Error(A(168));
  te(Oe, t), te($e, n);
}
function ag(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, pw(e) || "Unknown", o));
  return fe({}, n, r);
}
function Es(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cn),
    (Kn = Oe.current),
    te(Oe, e),
    te($e, $e.current),
    !0
  );
}
function jf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = ag(e, t, Kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe($e),
      oe(Oe),
      te(Oe, e))
    : oe($e),
    te($e, n);
}
var Vt = null,
  ia = !1,
  Qa = !1;
function lg(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function N1(e) {
  (ia = !0), lg(e);
}
function Nn() {
  if (!Qa && Vt !== null) {
    Qa = !0;
    var e = 0,
      t = G;
    try {
      var n = Vt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Vt = null), (ia = !1);
    } catch (o) {
      throw (Vt !== null && (Vt = Vt.slice(e + 1)), jm(fc, Nn), o);
    } finally {
      (G = t), (Qa = !1);
    }
  }
  return null;
}
var pr = [],
  hr = 0,
  Rs = null,
  As = 0,
  st = [],
  at = 0,
  Gn = null,
  Ft = 1,
  zt = "";
function On(e, t) {
  (pr[hr++] = As), (pr[hr++] = Rs), (Rs = e), (As = t);
}
function ug(e, t, n) {
  (st[at++] = Ft), (st[at++] = zt), (st[at++] = Gn), (Gn = e);
  var r = Ft;
  e = zt;
  var o = 32 - yt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - yt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Ft = (1 << (32 - yt(t) + o)) | (n << o) | r),
      (zt = i + e);
  } else (Ft = (1 << i) | (n << o) | r), (zt = e);
}
function Sc(e) {
  e.return !== null && (On(e, 1), ug(e, 1, 0));
}
function Cc(e) {
  for (; e === Rs; )
    (Rs = pr[--hr]), (pr[hr] = null), (As = pr[--hr]), (pr[hr] = null);
  for (; e === Gn; )
    (Gn = st[--at]),
      (st[at] = null),
      (zt = st[--at]),
      (st[at] = null),
      (Ft = st[--at]),
      (st[at] = null);
}
var Qe = null,
  Xe = null,
  se = !1,
  vt = null;
function cg(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Lf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Qe = e), (Xe = gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Qe = e), (Xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gn !== null ? { id: Ft, overflow: zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Qe = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ou(e) {
  if (se) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Lf(e, t)) {
        if (ru(e)) throw Error(A(418));
        t = gn(n.nextSibling);
        var r = Qe;
        t && Lf(e, t)
          ? cg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Qe = e));
      }
    } else {
      if (ru(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (Qe = e);
    }
  }
}
function Of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Qe = e;
}
function Oi(e) {
  if (e !== Qe) return !1;
  if (!se) return Of(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Jl(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (ru(e)) throw (dg(), Error(A(418)));
    for (; t; ) cg(e, t), (t = gn(t.nextSibling));
  }
  if ((Of(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Qe ? gn(e.stateNode.nextSibling) : null;
  return !0;
}
function dg() {
  for (var e = Xe; e; ) e = gn(e.nextSibling);
}
function Or() {
  (Xe = Qe = null), (se = !1);
}
function Tc(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var M1 = qt.ReactCurrentBatchConfig;
function uo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Ii(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function If(e) {
  var t = e._init;
  return t(e._payload);
}
function fg(e) {
  function t(p, h) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function o(p, h) {
    return (p = wn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, y, C) {
    return h === null || h.tag !== 6
      ? ((h = rl(y, p.mode, C)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h);
  }
  function l(p, h, y, C) {
    var T = y.type;
    return T === ar
      ? c(p, h, y.props.children, C, y.key)
      : h !== null &&
          (h.elementType === T ||
            (typeof T == "object" &&
              T !== null &&
              T.$$typeof === sn &&
              If(T) === h.type))
        ? ((C = o(h, y.props)), (C.ref = uo(p, h, y)), (C.return = p), C)
        : ((C = ls(y.type, y.key, y.props, null, p.mode, C)),
          (C.ref = uo(p, h, y)),
          (C.return = p),
          C);
  }
  function u(p, h, y, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = ol(y, p.mode, C)), (h.return = p), h)
      : ((h = o(h, y.children || [])), (h.return = p), h);
  }
  function c(p, h, y, C, T) {
    return h === null || h.tag !== 7
      ? ((h = Wn(y, p.mode, C, T)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h);
  }
  function d(p, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = rl("" + h, p.mode, y)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ki:
          return (
            (y = ls(h.type, h.key, h.props, null, p.mode, y)),
            (y.ref = uo(p, null, h)),
            (y.return = p),
            y
          );
        case sr:
          return (h = ol(h, p.mode, y)), (h.return = p), h;
        case sn:
          var C = h._init;
          return d(p, C(h._payload), y);
      }
      if (vo(h) || oo(h))
        return (h = Wn(h, p.mode, y, null)), (h.return = p), h;
      Ii(p, h);
    }
    return null;
  }
  function f(p, h, y, C) {
    var T = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return T !== null ? null : a(p, h, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ki:
          return y.key === T ? l(p, h, y, C) : null;
        case sr:
          return y.key === T ? u(p, h, y, C) : null;
        case sn:
          return (T = y._init), f(p, h, T(y._payload), C);
      }
      if (vo(y) || oo(y)) return T !== null ? null : c(p, h, y, C, null);
      Ii(p, y);
    }
    return null;
  }
  function m(p, h, y, C, T) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (p = p.get(y) || null), a(h, p, "" + C, T);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ki:
          return (p = p.get(C.key === null ? y : C.key) || null), l(h, p, C, T);
        case sr:
          return (p = p.get(C.key === null ? y : C.key) || null), u(h, p, C, T);
        case sn:
          var k = C._init;
          return m(p, h, y, k(C._payload), T);
      }
      if (vo(C) || oo(C)) return (p = p.get(y) || null), c(h, p, C, T, null);
      Ii(h, C);
    }
    return null;
  }
  function x(p, h, y, C) {
    for (
      var T = null, k = null, P = h, E = (h = 0), M = null;
      P !== null && E < y.length;
      E++
    ) {
      P.index > E ? ((M = P), (P = null)) : (M = P.sibling);
      var b = f(p, P, y[E], C);
      if (b === null) {
        P === null && (P = M);
        break;
      }
      e && P && b.alternate === null && t(p, P),
        (h = i(b, h, E)),
        k === null ? (T = b) : (k.sibling = b),
        (k = b),
        (P = M);
    }
    if (E === y.length) return n(p, P), se && On(p, E), T;
    if (P === null) {
      for (; E < y.length; E++)
        (P = d(p, y[E], C)),
          P !== null &&
            ((h = i(P, h, E)), k === null ? (T = P) : (k.sibling = P), (k = P));
      return se && On(p, E), T;
    }
    for (P = r(p, P); E < y.length; E++)
      (M = m(P, p, E, y[E], C)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? E : M.key),
          (h = i(M, h, E)),
          k === null ? (T = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        P.forEach(function (_) {
          return t(p, _);
        }),
      se && On(p, E),
      T
    );
  }
  function g(p, h, y, C) {
    var T = oo(y);
    if (typeof T != "function") throw Error(A(150));
    if (((y = T.call(y)), y == null)) throw Error(A(151));
    for (
      var k = (T = null), P = h, E = (h = 0), M = null, b = y.next();
      P !== null && !b.done;
      E++, b = y.next()
    ) {
      P.index > E ? ((M = P), (P = null)) : (M = P.sibling);
      var _ = f(p, P, b.value, C);
      if (_ === null) {
        P === null && (P = M);
        break;
      }
      e && P && _.alternate === null && t(p, P),
        (h = i(_, h, E)),
        k === null ? (T = _) : (k.sibling = _),
        (k = _),
        (P = M);
    }
    if (b.done) return n(p, P), se && On(p, E), T;
    if (P === null) {
      for (; !b.done; E++, b = y.next())
        (b = d(p, b.value, C)),
          b !== null &&
            ((h = i(b, h, E)), k === null ? (T = b) : (k.sibling = b), (k = b));
      return se && On(p, E), T;
    }
    for (P = r(p, P); !b.done; E++, b = y.next())
      (b = m(P, p, E, b.value, C)),
        b !== null &&
          (e && b.alternate !== null && P.delete(b.key === null ? E : b.key),
          (h = i(b, h, E)),
          k === null ? (T = b) : (k.sibling = b),
          (k = b));
    return (
      e &&
        P.forEach(function (L) {
          return t(p, L);
        }),
      se && On(p, E),
      T
    );
  }
  function S(p, h, y, C) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ar &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ki:
          e: {
            for (var T = y.key, k = h; k !== null; ) {
              if (k.key === T) {
                if (((T = y.type), T === ar)) {
                  if (k.tag === 7) {
                    n(p, k.sibling),
                      (h = o(k, y.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  k.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === sn &&
                    If(T) === k.type)
                ) {
                  n(p, k.sibling),
                    (h = o(k, y.props)),
                    (h.ref = uo(p, k, y)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            y.type === ar
              ? ((h = Wn(y.props.children, p.mode, C, y.key)),
                (h.return = p),
                (p = h))
              : ((C = ls(y.type, y.key, y.props, null, p.mode, C)),
                (C.ref = uo(p, h, y)),
                (C.return = p),
                (p = C));
          }
          return s(p);
        case sr:
          e: {
            for (k = y.key; h !== null; ) {
              if (h.key === k)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(p, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = ol(y, p.mode, C)), (h.return = p), (p = h);
          }
          return s(p);
        case sn:
          return (k = y._init), S(p, h, k(y._payload), C);
      }
      if (vo(y)) return x(p, h, y, C);
      if (oo(y)) return g(p, h, y, C);
      Ii(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, y)), (h.return = p), (p = h))
          : (n(p, h), (h = rl(y, p.mode, C)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return S;
}
var Ir = fg(!0),
  pg = fg(!1),
  bs = bn(null),
  Ns = null,
  mr = null,
  Pc = null;
function kc() {
  Pc = mr = Ns = null;
}
function Ec(e) {
  var t = bs.current;
  oe(bs), (e._currentValue = t);
}
function iu(e, t, n) {
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
function Rr(e, t) {
  (Ns = e),
    (Pc = mr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (Pc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mr === null)) {
      if (Ns === null) throw Error(A(308));
      (mr = e), (Ns.dependencies = { lanes: 0, firstContext: e });
    } else mr = mr.next = e;
  return t;
}
var zn = null;
function Rc(e) {
  zn === null ? (zn = [e]) : zn.push(e);
}
function hg(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Rc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
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
var an = !1;
function Ac(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function mg(e, t) {
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
function Bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Rc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function ns(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pc(e, n);
  }
}
function _f(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function Ms(e, t, n, r) {
  var o = e.updateQueue;
  an = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        m = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            g = a;
          switch (((f = t), (m = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                d = x.call(m, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (f = typeof x == "function" ? x.call(m, d, f) : x),
                f == null)
              )
                break e;
              d = fe({}, d, f);
              break e;
            case 2:
              an = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Xn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Vf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(A(191, o));
        o.call(r);
      }
    }
}
var hi = {},
  Nt = bn(hi),
  Qo = bn(hi),
  Zo = bn(hi);
function Bn(e) {
  if (e === hi) throw Error(A(174));
  return e;
}
function bc(e, t) {
  switch ((te(Zo, t), te(Qo, e), te(Nt, hi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fl(t, e));
  }
  oe(Nt), te(Nt, t);
}
function _r() {
  oe(Nt), oe(Qo), oe(Zo);
}
function gg(e) {
  Bn(Zo.current);
  var t = Bn(Nt.current),
    n = Fl(t, e.type);
  t !== n && (te(Qo, e), te(Nt, n));
}
function Nc(e) {
  Qo.current === e && (oe(Nt), oe(Qo));
}
var ue = bn(0);
function Ds(e) {
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
var Za = [];
function Mc() {
  for (var e = 0; e < Za.length; e++)
    Za[e]._workInProgressVersionPrimary = null;
  Za.length = 0;
}
var rs = qt.ReactCurrentDispatcher,
  qa = qt.ReactCurrentBatchConfig,
  Yn = 0,
  de = null,
  Se = null,
  Te = null,
  js = !1,
  bo = !1,
  qo = 0,
  D1 = 0;
function Ne() {
  throw Error(A(321));
}
function Dc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wt(e[n], t[n])) return !1;
  return !0;
}
function jc(e, t, n, r, o, i) {
  if (
    ((Yn = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (rs.current = e === null || e.memoizedState === null ? I1 : _1),
    (e = n(r, o)),
    bo)
  ) {
    i = 0;
    do {
      if (((bo = !1), (qo = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (Te = Se = null),
        (t.updateQueue = null),
        (rs.current = V1),
        (e = n(r, o));
    } while (bo);
  }
  if (
    ((rs.current = Ls),
    (t = Se !== null && Se.next !== null),
    (Yn = 0),
    (Te = Se = de = null),
    (js = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Lc() {
  var e = qo !== 0;
  return (qo = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (de.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function dt() {
  if (Se === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Te === null ? de.memoizedState : Te.next;
  if (t !== null) (Te = t), (Se = e);
  else {
    if (e === null) throw Error(A(310));
    (Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      Te === null ? (de.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function Jo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ja(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Se,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Yn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (de.lanes |= c),
          (Xn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      wt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (de.lanes |= i), (Xn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function el(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    wt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function vg() {}
function yg(e, t) {
  var n = de,
    r = dt(),
    o = t(),
    i = !wt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    Oc(Sg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ei(9, wg.bind(null, n, r, o, t), void 0, null),
      Pe === null)
    )
      throw Error(A(349));
    Yn & 30 || xg(n, t, o);
  }
  return o;
}
function xg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Cg(t) && Tg(e);
}
function Sg(e, t, n) {
  return n(function () {
    Cg(t) && Tg(e);
  });
}
function Cg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Tg(e) {
  var t = Kt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Ff(e) {
  var t = Et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = O1.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function ei(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Pg() {
  return dt().memoizedState;
}
function os(e, t, n, r) {
  var o = Et();
  (de.flags |= e),
    (o.memoizedState = ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function sa(e, t, n, r) {
  var o = dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Se !== null) {
    var s = Se.memoizedState;
    if (((i = s.destroy), r !== null && Dc(r, s.deps))) {
      o.memoizedState = ei(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = ei(1 | t, n, i, r));
}
function zf(e, t) {
  return os(8390656, 8, e, t);
}
function Oc(e, t) {
  return sa(2048, 8, e, t);
}
function kg(e, t) {
  return sa(4, 2, e, t);
}
function Eg(e, t) {
  return sa(4, 4, e, t);
}
function Rg(e, t) {
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
function Ag(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sa(4, 4, Rg.bind(null, t, e), n)
  );
}
function Ic() {}
function bg(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ng(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Mg(e, t, n) {
  return Yn & 21
    ? (wt(n, t) || ((n = Im()), (de.lanes |= n), (Xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function j1(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = qa.transition;
  qa.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (qa.transition = r);
  }
}
function Dg() {
  return dt().memoizedState;
}
function L1(e, t, n) {
  var r = xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    jg(e))
  )
    Lg(t, n);
  else if (((n = hg(e, t, n, r)), n !== null)) {
    var o = _e();
    xt(n, e, r, o), Og(n, t, r);
  }
}
function O1(e, t, n) {
  var r = xn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jg(e)) Lg(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), wt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Rc(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = hg(e, t, o, r)),
      n !== null && ((o = _e()), xt(n, e, r, o), Og(n, t, r));
  }
}
function jg(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function Lg(e, t) {
  bo = js = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Og(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pc(e, n);
  }
}
var Ls = {
    readContext: ct,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  I1 = {
    readContext: ct,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: zf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        os(4194308, 4, Rg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return os(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return os(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Et();
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
        (e = e.dispatch = L1.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ff,
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Ff(!1),
        t = e[0];
      return (e = j1.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        o = Et();
      if (se) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(A(349));
        Yn & 30 || xg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        zf(Sg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ei(9, wg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = Pe.identifierPrefix;
      if (se) {
        var n = zt,
          r = Ft;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = D1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _1 = {
    readContext: ct,
    useCallback: bg,
    useContext: ct,
    useEffect: Oc,
    useImperativeHandle: Ag,
    useInsertionEffect: kg,
    useLayoutEffect: Eg,
    useMemo: Ng,
    useReducer: Ja,
    useRef: Pg,
    useState: function () {
      return Ja(Jo);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      var t = dt();
      return Mg(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Ja(Jo)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: vg,
    useSyncExternalStore: yg,
    useId: Dg,
    unstable_isNewReconciler: !1,
  },
  V1 = {
    readContext: ct,
    useCallback: bg,
    useContext: ct,
    useEffect: Oc,
    useImperativeHandle: Ag,
    useInsertionEffect: kg,
    useLayoutEffect: Eg,
    useMemo: Ng,
    useReducer: el,
    useRef: Pg,
    useState: function () {
      return el(Jo);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      var t = dt();
      return Se === null ? (t.memoizedState = e) : Mg(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = el(Jo)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: vg,
    useSyncExternalStore: yg,
    useId: Dg,
    unstable_isNewReconciler: !1,
  };
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function su(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var aa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? er(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      o = xn(e),
      i = Bt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = vn(e, i, o)),
      t !== null && (xt(t, e, o, r), ns(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      o = xn(e),
      i = Bt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vn(e, i, o)),
      t !== null && (xt(t, e, o, r), ns(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = _e(),
      r = xn(e),
      o = Bt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = vn(e, o, r)),
      t !== null && (xt(t, e, r, n), ns(t, e, r));
  },
};
function Bf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ko(n, r) || !Ko(o, i)
        : !0
  );
}
function Ig(e, t, n) {
  var r = !1,
    o = Cn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ct(i))
      : ((o = We(t) ? Kn : Oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Lr(e, o) : Cn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = aa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Uf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && aa.enqueueReplaceState(t, t.state, null);
}
function au(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ac(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ct(i))
    : ((i = We(t) ? Kn : Oe.current), (o.context = Lr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (su(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && aa.enqueueReplaceState(o, o.state, null),
      Ms(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += fw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var F1 = typeof WeakMap == "function" ? WeakMap : Map;
function _g(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Is || ((Is = !0), (yu = r)), lu(e, t);
    }),
    n
  );
}
function Vg(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        lu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        lu(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function $f(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new F1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = J1.bind(null, e, t, n)), t.then(e, e));
}
function Wf(e) {
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
function Hf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Bt(-1, 1)), (t.tag = 2), vn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var z1 = qt.ReactCurrentOwner,
  Ue = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? pg(t, null, n, r) : Ir(t, e.child, n, r);
}
function Kf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Rr(t, o),
    (r = jc(e, t, n, r, i, o)),
    (n = Lc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (se && n && Sc(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function Gf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Wc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Fg(e, t, i, r, o))
      : ((e = ls(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ko), n(s, r) && e.ref === t.ref)
    )
      return Gt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = wn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ko(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Gt(e, t, o);
  }
  return uu(e, t, n, r, o);
}
function zg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(vr, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(vr, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        te(vr, Ge),
        (Ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(vr, Ge),
      (Ge |= r);
  return Ie(e, t, o, n), t.child;
}
function Bg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function uu(e, t, n, r, o) {
  var i = We(n) ? Kn : Oe.current;
  return (
    (i = Lr(t, i)),
    Rr(t, o),
    (n = jc(e, t, n, r, i, o)),
    (r = Lc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (se && r && Sc(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function Yf(e, t, n, r, o) {
  if (We(n)) {
    var i = !0;
    Es(t);
  } else i = !1;
  if ((Rr(t, o), t.stateNode === null))
    is(e, t), Ig(t, n, r), au(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = We(n) ? Kn : Oe.current), (u = Lr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Uf(t, s, r, u)),
      (an = !1);
    var f = t.memoizedState;
    (s.state = f),
      Ms(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || $e.current || an
        ? (typeof c == "function" && (su(t, n, c, r), (l = t.memoizedState)),
          (a = an || Bf(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      mg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : mt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ct(l))
        : ((l = We(n) ? Kn : Oe.current), (l = Lr(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Uf(t, s, r, l)),
      (an = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ms(t, r, s, o);
    var x = t.memoizedState;
    a !== d || f !== x || $e.current || an
      ? (typeof m == "function" && (su(t, n, m, r), (x = t.memoizedState)),
        (u = an || Bf(t, n, u, r, f, x, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return cu(e, t, n, r, i, o);
}
function cu(e, t, n, r, o, i) {
  Bg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && jf(t, n, !1), Gt(e, t, i);
  (r = t.stateNode), (z1.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ir(t, e.child, null, i)), (t.child = Ir(t, null, a, i)))
      : Ie(e, t, a, i),
    (t.memoizedState = r.state),
    o && jf(t, n, !0),
    t.child
  );
}
function Ug(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Df(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Df(e, t.context, !1),
    bc(e, t.containerInfo);
}
function Xf(e, t, n, r, o) {
  return Or(), Tc(o), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var du = { dehydrated: null, treeContext: null, retryLane: 0 };
function fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $g(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ue, o & 1),
    e === null)
  )
    return (
      ou(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ca(s, r, 0, null)),
              (e = Wn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = fu(n)),
              (t.memoizedState = du),
              e)
            : _c(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return B1(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = wn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = wn(a, i)) : ((i = Wn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? fu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = du),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = wn(i, { mode: "visible", children: r.children })),
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
function _c(e, t) {
  return (
    (t = ca({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _i(e, t, n, r) {
  return (
    r !== null && Tc(r),
    Ir(t, e.child, null, n),
    (e = _c(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function B1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = tl(Error(A(422)))), _i(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ca({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Wn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ir(t, e.child, null, s),
          (t.child.memoizedState = fu(s)),
          (t.memoizedState = du),
          i);
  if (!(t.mode & 1)) return _i(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(A(419))), (r = tl(i, r, void 0)), _i(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ue || a)) {
    if (((r = Pe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Kt(e, o), xt(r, e, o, -1));
    }
    return $c(), (r = tl(Error(A(421)))), _i(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = eS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Xe = gn(o.nextSibling)),
      (Qe = t),
      (se = !0),
      (vt = null),
      e !== null &&
        ((st[at++] = Ft),
        (st[at++] = zt),
        (st[at++] = Gn),
        (Ft = e.id),
        (zt = e.overflow),
        (Gn = t)),
      (t = _c(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), iu(e.return, t, n);
}
function nl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Wg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ie(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qf(e, n, t);
        else if (e.tag === 19) Qf(e, n, t);
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
  if ((te(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ds(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          nl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ds(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        nl(t, !0, n, null, i);
        break;
      case "together":
        nl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function is(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function U1(e, t, n) {
  switch (t.tag) {
    case 3:
      Ug(t), Or();
      break;
    case 5:
      gg(t);
      break;
    case 1:
      We(t.type) && Es(t);
      break;
    case 4:
      bc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      te(bs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? $g(e, t, n)
            : (te(ue, ue.current & 1),
              (e = Gt(e, t, n)),
              e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        te(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zg(e, t, n);
  }
  return Gt(e, t, n);
}
var Hg, pu, Kg, Gg;
Hg = function (e, t) {
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
pu = function () {};
Kg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Bn(Nt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ol(e, o)), (r = Ol(e, r)), (i = []);
        break;
      case "select":
        (o = fe({}, o, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Vl(e, o)), (r = Vl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ps);
    }
    zl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Fo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Fo.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && re("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Gg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function co(e, t) {
  if (!se)
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
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $1(e, t, n) {
  var r = t.pendingProps;
  switch ((Cc(t), t.tag)) {
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
      return Me(t), null;
    case 1:
      return We(t.type) && ks(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _r(),
        oe($e),
        oe(Oe),
        Mc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (Su(vt), (vt = null)))),
        pu(e, t),
        Me(t),
        null
      );
    case 5:
      Nc(t);
      var o = Bn(Zo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Kg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Me(t), null;
        }
        if (((e = Bn(Nt.current)), Oi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Rt] = t), (r[Xo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < xo.length; o++) re(xo[o], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              of(r, i), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              af(r, i), re("invalid", r);
          }
          zl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Li(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Li(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Fo.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              Ei(r), sf(r, i, !0);
              break;
            case "textarea":
              Ei(r), lf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ps);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Rt] = t),
            (e[Xo] = r),
            Hg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Bl(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < xo.length; o++) re(xo[o], e);
                o = r;
                break;
              case "source":
                re("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (o = r);
                break;
              case "details":
                re("toggle", e), (o = r);
                break;
              case "input":
                of(e, r), (o = Ol(e, r)), re("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = fe({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                af(e, r), (o = Vl(e, r)), re("invalid", e);
                break;
              default:
                o = r;
            }
            zl(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Pm(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Cm(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && zo(e, l)
                        : typeof l == "number" && zo(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Fo.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && re("scroll", e)
                          : l != null && ac(e, i, l, s));
              }
            switch (n) {
              case "input":
                Ei(e), sf(e, r, !1);
                break;
              case "textarea":
                Ei(e), lf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Tr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ps);
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
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) Gg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = Bn(Zo.current)), Bn(Nt.current), Oi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Rt] = t),
            (i = r.nodeValue !== n) && ((e = Qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Li(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Rt] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (oe(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Xe !== null && t.mode & 1 && !(t.flags & 128))
          dg(), Or(), (t.flags |= 98560), (i = !1);
        else if (((i = Oi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[Rt] = t;
          } else
            Or(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (i = !1);
        } else vt !== null && (Su(vt), (vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? Ce === 0 && (Ce = 3) : $c())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        _r(), pu(e, t), e === null && Go(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return Ec(t.type._context), Me(t), null;
    case 17:
      return We(t.type) && ks(), Me(t), null;
    case 19:
      if ((oe(ue), (i = t.memoizedState), i === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) co(i, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ds(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    co(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ge() > Fr &&
            ((t.flags |= 128), (r = !0), co(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ds(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              co(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !se)
            )
              return Me(t), null;
          } else
            2 * ge() - i.renderingStartTime > Fr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), co(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (n = ue.current),
          te(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Uc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function W1(e, t) {
  switch ((Cc(t), t.tag)) {
    case 1:
      return (
        We(t.type) && ks(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _r(),
        oe($e),
        oe(Oe),
        Mc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nc(t), null;
    case 13:
      if (
        (oe(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        Or();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(ue), null;
    case 4:
      return _r(), null;
    case 10:
      return Ec(t.type._context), null;
    case 22:
    case 23:
      return Uc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vi = !1,
  je = !1,
  H1 = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function hu(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var Zf = !1;
function K1(e, t) {
  if (((Zl = Ss), (e = qm()), wc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ql = { focusedElem: e, selectionRange: n }, Ss = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    S = x.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : mt(t.type, g),
                      S,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (C) {
          he(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (x = Zf), (Zf = !1), x;
}
function No(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && hu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function la(e, t) {
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
function mu(e) {
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
function Yg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Yg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Rt], delete t[Xo], delete t[tu], delete t[A1], delete t[b1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xg(e.return)) return null;
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
function gu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ps));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gu(e, t, n), e = e.sibling; e !== null; ) gu(e, t, n), (e = e.sibling);
}
function vu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vu(e, t, n), e = e.sibling; e !== null; ) vu(e, t, n), (e = e.sibling);
}
var ke = null,
  gt = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) Qg(e, t, n), (n = n.sibling);
}
function Qg(e, t, n) {
  if (bt && typeof bt.onCommitFiberUnmount == "function")
    try {
      bt.onCommitFiberUnmount(ea, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || gr(n, t);
    case 6:
      var r = ke,
        o = gt;
      (ke = null),
        Jt(e, t, n),
        (ke = r),
        (gt = o),
        ke !== null &&
          (gt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (gt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xa(e.parentNode, n)
              : e.nodeType === 1 && Xa(e, n),
            Wo(e))
          : Xa(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (o = gt),
        (ke = n.stateNode.containerInfo),
        (gt = !0),
        Jt(e, t, n),
        (ke = r),
        (gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && hu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (gr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          he(n, t, a);
        }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), Jt(e, t, n), (je = r))
        : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function Jf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new H1()),
      t.forEach(function (r) {
        var o = tS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (gt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(A(160));
        Qg(i, s, o), (ke = null), (gt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        he(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Zg(t, e), (t = t.sibling);
}
function Zg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), kt(e), r & 4)) {
        try {
          No(3, e, e.return), la(3, e);
        } catch (g) {
          he(e, e.return, g);
        }
        try {
          No(5, e, e.return);
        } catch (g) {
          he(e, e.return, g);
        }
      }
      break;
    case 1:
      ft(t, e), kt(e), r & 512 && n !== null && gr(n, n.return);
      break;
    case 5:
      if (
        (ft(t, e),
        kt(e),
        r & 512 && n !== null && gr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          zo(o, "");
        } catch (g) {
          he(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && xm(o, i),
              Bl(a, s);
            var u = Bl(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Pm(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? Cm(o, d)
                  : c === "children"
                    ? zo(o, d)
                    : ac(o, c, d, u);
            }
            switch (a) {
              case "input":
                Il(o, i);
                break;
              case "textarea":
                wm(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Tr(o, !!i.multiple, m, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Tr(o, !!i.multiple, i.defaultValue, !0)
                      : Tr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Xo] = i;
          } catch (g) {
            he(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ft(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          he(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wo(t.containerInfo);
        } catch (g) {
          he(e, e.return, g);
        }
      break;
    case 4:
      ft(t, e), kt(e);
      break;
    case 13:
      ft(t, e),
        kt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (zc = ge())),
        r & 4 && Jf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), ft(t, e), (je = u)) : ft(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (((f = D), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  No(4, f, f.return);
                  break;
                case 1:
                  gr(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      he(r, n, g);
                    }
                  }
                  break;
                case 5:
                  gr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    tp(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (D = m)) : tp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Tm("display", s)));
              } catch (g) {
                he(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                he(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), kt(e), r & 4 && Jf(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (zo(o, ""), (r.flags &= -33));
          var i = qf(e);
          vu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = qf(e);
          gu(e, a, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      he(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function G1(e, t, n) {
  (D = e), qg(e);
}
function qg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Vi;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || je;
        a = Vi;
        var u = je;
        if (((Vi = s), (je = l) && !u))
          for (D = o; D !== null; )
            (s = D),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? np(o)
                : l !== null
                  ? ((l.return = s), (D = l))
                  : np(o);
        for (; i !== null; ) (D = i), qg(i), (i = i.sibling);
        (D = o), (Vi = a), (je = u);
      }
      ep(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (D = i)) : ep(e);
  }
}
function ep(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || la(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Vf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Vf(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Wo(d);
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
              throw Error(A(163));
          }
        je || (t.flags & 512 && mu(t));
      } catch (f) {
        he(t, t.return, f);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function tp(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function np(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            la(4, t);
          } catch (l) {
            he(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              he(t, o, l);
            }
          }
          var i = t.return;
          try {
            mu(t);
          } catch (l) {
            he(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            mu(t);
          } catch (l) {
            he(t, s, l);
          }
      }
    } catch (l) {
      he(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var Y1 = Math.ceil,
  Os = qt.ReactCurrentDispatcher,
  Vc = qt.ReactCurrentOwner,
  ut = qt.ReactCurrentBatchConfig,
  H = 0,
  Pe = null,
  ye = null,
  Re = 0,
  Ge = 0,
  vr = bn(0),
  Ce = 0,
  ti = null,
  Xn = 0,
  ua = 0,
  Fc = 0,
  Mo = null,
  Be = null,
  zc = 0,
  Fr = 1 / 0,
  _t = null,
  Is = !1,
  yu = null,
  yn = null,
  Fi = !1,
  dn = null,
  _s = 0,
  Do = 0,
  xu = null,
  ss = -1,
  as = 0;
function _e() {
  return H & 6 ? ge() : ss !== -1 ? ss : (ss = ge());
}
function xn(e) {
  return e.mode & 1
    ? H & 2 && Re !== 0
      ? Re & -Re
      : M1.transition !== null
        ? (as === 0 && (as = Im()), as)
        : ((e = G),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $m(e.type))),
          e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < Do) throw ((Do = 0), (xu = null), Error(A(185)));
  di(e, n, r),
    (!(H & 2) || e !== Pe) &&
      (e === Pe && (!(H & 2) && (ua |= n), Ce === 4 && un(e, Re)),
      He(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Fr = ge() + 500), ia && Nn()));
}
function He(e, t) {
  var n = e.callbackNode;
  Mw(e, t);
  var r = ws(e, e === Pe ? Re : 0);
  if (r === 0)
    n !== null && df(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && df(n), t === 1))
      e.tag === 0 ? N1(rp.bind(null, e)) : lg(rp.bind(null, e)),
        E1(function () {
          !(H & 6) && Nn();
        }),
        (n = null);
    else {
      switch (_m(r)) {
        case 1:
          n = fc;
          break;
        case 4:
          n = Lm;
          break;
        case 16:
          n = xs;
          break;
        case 536870912:
          n = Om;
          break;
        default:
          n = xs;
      }
      n = sv(n, Jg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Jg(e, t) {
  if (((ss = -1), (as = 0), H & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (Ar() && e.callbackNode !== n) return null;
  var r = ws(e, e === Pe ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vs(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var i = tv();
    (Pe !== e || Re !== t) && ((_t = null), (Fr = ge() + 500), $n(e, t));
    do
      try {
        Z1();
        break;
      } catch (a) {
        ev(e, a);
      }
    while (!0);
    kc(),
      (Os.current = i),
      (H = o),
      ye !== null ? (t = 0) : ((Pe = null), (Re = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Kl(e)), o !== 0 && ((r = o), (t = wu(e, o)))), t === 1)
    )
      throw ((n = ti), $n(e, 0), un(e, r), He(e, ge()), n);
    if (t === 6) un(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !X1(o) &&
          ((t = Vs(e, r)),
          t === 2 && ((i = Kl(e)), i !== 0 && ((r = i), (t = wu(e, i)))),
          t === 1))
      )
        throw ((n = ti), $n(e, 0), un(e, r), He(e, ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          In(e, Be, _t);
          break;
        case 3:
          if (
            (un(e, r), (r & 130023424) === r && ((t = zc + 500 - ge()), 10 < t))
          ) {
            if (ws(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              _e(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = eu(In.bind(null, e, Be, _t), t);
            break;
          }
          In(e, Be, _t);
          break;
        case 4:
          if ((un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - yt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ge() - r),
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
                          : 1960 * Y1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = eu(In.bind(null, e, Be, _t), r);
            break;
          }
          In(e, Be, _t);
          break;
        case 5:
          In(e, Be, _t);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return He(e, ge()), e.callbackNode === n ? Jg.bind(null, e) : null;
}
function wu(e, t) {
  var n = Mo;
  return (
    e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
    (e = Vs(e, t)),
    e !== 2 && ((t = Be), (Be = n), t !== null && Su(t)),
    e
  );
}
function Su(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function X1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!wt(i(), o)) return !1;
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
function un(e, t) {
  for (
    t &= ~Fc,
      t &= ~ua,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function rp(e) {
  if (H & 6) throw Error(A(327));
  Ar();
  var t = ws(e, 0);
  if (!(t & 1)) return He(e, ge()), null;
  var n = Vs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kl(e);
    r !== 0 && ((t = r), (n = wu(e, r)));
  }
  if (n === 1) throw ((n = ti), $n(e, 0), un(e, t), He(e, ge()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    In(e, Be, _t),
    He(e, ge()),
    null
  );
}
function Bc(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Fr = ge() + 500), ia && Nn());
  }
}
function Qn(e) {
  dn !== null && dn.tag === 0 && !(H & 6) && Ar();
  var t = H;
  H |= 1;
  var n = ut.transition,
    r = G;
  try {
    if (((ut.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (ut.transition = n), (H = t), !(H & 6) && Nn();
  }
}
function Uc() {
  (Ge = vr.current), oe(vr);
}
function $n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), k1(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Cc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ks();
          break;
        case 3:
          _r(), oe($e), oe(Oe), Mc();
          break;
        case 5:
          Nc(r);
          break;
        case 4:
          _r();
          break;
        case 13:
          oe(ue);
          break;
        case 19:
          oe(ue);
          break;
        case 10:
          Ec(r.type._context);
          break;
        case 22:
        case 23:
          Uc();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (ye = e = wn(e.current, null)),
    (Re = Ge = t),
    (Ce = 0),
    (ti = null),
    (Fc = ua = Xn = 0),
    (Be = Mo = null),
    zn !== null)
  ) {
    for (t = 0; t < zn.length; t++)
      if (((n = zn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    zn = null;
  }
  return e;
}
function ev(e, t) {
  do {
    var n = ye;
    try {
      if ((kc(), (rs.current = Ls), js)) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        js = !1;
      }
      if (
        ((Yn = 0),
        (Te = Se = de = null),
        (bo = !1),
        (qo = 0),
        (Vc.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (ti = t), (ye = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Re),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Wf(s);
          if (m !== null) {
            (m.flags &= -257),
              Hf(m, s, a, i, t),
              m.mode & 1 && $f(i, u, t),
              (t = m),
              (l = u);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              $f(i, u, t), $c();
              break e;
            }
            l = Error(A(426));
          }
        } else if (se && a.mode & 1) {
          var S = Wf(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Hf(S, s, a, i, t),
              Tc(Vr(l, a));
            break e;
          }
        }
        (i = l = Vr(l, a)),
          Ce !== 4 && (Ce = 2),
          Mo === null ? (Mo = [i]) : Mo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = _g(i, l, t);
              _f(i, p);
              break e;
            case 1:
              a = l;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (yn === null || !yn.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = Vg(i, a, t);
                _f(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      rv(n);
    } catch (T) {
      (t = T), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function tv() {
  var e = Os.current;
  return (Os.current = Ls), e === null ? Ls : e;
}
function $c() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Pe === null || (!(Xn & 268435455) && !(ua & 268435455)) || un(Pe, Re);
}
function Vs(e, t) {
  var n = H;
  H |= 2;
  var r = tv();
  (Pe !== e || Re !== t) && ((_t = null), $n(e, t));
  do
    try {
      Q1();
      break;
    } catch (o) {
      ev(e, o);
    }
  while (!0);
  if ((kc(), (H = n), (Os.current = r), ye !== null)) throw Error(A(261));
  return (Pe = null), (Re = 0), Ce;
}
function Q1() {
  for (; ye !== null; ) nv(ye);
}
function Z1() {
  for (; ye !== null && !Cw(); ) nv(ye);
}
function nv(e) {
  var t = iv(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? rv(e) : (ye = t),
    (Vc.current = null);
}
function rv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = W1(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (ye = null);
        return;
      }
    } else if (((n = $1(n, t, Ge)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function In(e, t, n) {
  var r = G,
    o = ut.transition;
  try {
    (ut.transition = null), (G = 1), q1(e, t, n, r);
  } finally {
    (ut.transition = o), (G = r);
  }
  return null;
}
function q1(e, t, n, r) {
  do Ar();
  while (dn !== null);
  if (H & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Dw(e, i),
    e === Pe && ((ye = Pe = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fi ||
      ((Fi = !0),
      sv(xs, function () {
        return Ar(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ut.transition), (ut.transition = null);
    var s = G;
    G = 1;
    var a = H;
    (H |= 4),
      (Vc.current = null),
      K1(e, n),
      Zg(n, e),
      y1(ql),
      (Ss = !!Zl),
      (ql = Zl = null),
      (e.current = n),
      G1(n),
      Tw(),
      (H = a),
      (G = s),
      (ut.transition = i);
  } else e.current = n;
  if (
    (Fi && ((Fi = !1), (dn = e), (_s = o)),
    (i = e.pendingLanes),
    i === 0 && (yn = null),
    Ew(n.stateNode),
    He(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Is) throw ((Is = !1), (e = yu), (yu = null), e);
  return (
    _s & 1 && e.tag !== 0 && Ar(),
    (i = e.pendingLanes),
    i & 1 ? (e === xu ? Do++ : ((Do = 0), (xu = e))) : (Do = 0),
    Nn(),
    null
  );
}
function Ar() {
  if (dn !== null) {
    var e = _m(_s),
      t = ut.transition,
      n = G;
    try {
      if (((ut.transition = null), (G = 16 > e ? 16 : e), dn === null))
        var r = !1;
      else {
        if (((e = dn), (dn = null), (_s = 0), H & 6)) throw Error(A(331));
        var o = H;
        for (H |= 4, D = e.current; D !== null; ) {
          var i = D,
            s = i.child;
          if (D.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      No(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (D = d);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling,
                        m = c.return;
                      if ((Yg(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (D = f);
                        break;
                      }
                      D = m;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (D = s);
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    No(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (D = p);
                break e;
              }
              D = i.return;
            }
        }
        var h = e.current;
        for (D = h; D !== null; ) {
          s = D;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (D = y);
          else
            e: for (s = h; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      la(9, a);
                  }
                } catch (T) {
                  he(a, a.return, T);
                }
              if (a === s) {
                D = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (D = C);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((H = o), Nn(), bt && typeof bt.onPostCommitFiberRoot == "function")
        )
          try {
            bt.onPostCommitFiberRoot(ea, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (ut.transition = t);
    }
  }
  return !1;
}
function op(e, t, n) {
  (t = Vr(n, t)),
    (t = _g(e, t, 1)),
    (e = vn(e, t, 1)),
    (t = _e()),
    e !== null && (di(e, 1, t), He(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) op(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        op(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = Vr(n, e)),
            (e = Vg(t, e, 1)),
            (t = vn(t, e, 1)),
            (e = _e()),
            t !== null && (di(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function J1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = _e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Re & n) === n &&
      (Ce === 4 || (Ce === 3 && (Re & 130023424) === Re && 500 > ge() - zc)
        ? $n(e, 0)
        : (Fc |= n)),
    He(e, t);
}
function ov(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bi), (bi <<= 1), !(bi & 130023424) && (bi = 4194304))
      : (t = 1));
  var n = _e();
  (e = Kt(e, t)), e !== null && (di(e, t, n), He(e, n));
}
function eS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ov(e, n);
}
function tS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), ov(e, n);
}
var iv;
iv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), U1(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), se && t.flags & 1048576 && ug(t, As, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      is(e, t), (e = t.pendingProps);
      var o = Lr(t, Oe.current);
      Rr(t, n), (o = jc(null, t, r, e, o, n));
      var i = Lc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(r) ? ((i = !0), Es(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ac(t),
            (o.updater = aa),
            (t.stateNode = o),
            (o._reactInternals = t),
            au(t, r, e, n),
            (t = cu(null, t, r, !0, i, n)))
          : ((t.tag = 0), se && i && Sc(t), Ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (is(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = rS(r)),
          (e = mt(r, e)),
          o)
        ) {
          case 0:
            t = uu(null, t, r, e, n);
            break e;
          case 1:
            t = Yf(null, t, r, e, n);
            break e;
          case 11:
            t = Kf(null, t, r, e, n);
            break e;
          case 14:
            t = Gf(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        uu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Yf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ug(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          mg(e, t),
          Ms(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Vr(Error(A(423)), t)), (t = Xf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Vr(Error(A(424)), t)), (t = Xf(e, t, r, n, o));
            break e;
          } else
            for (
              Xe = gn(t.stateNode.containerInfo.firstChild),
                Qe = t,
                se = !0,
                vt = null,
                n = pg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Or(), r === o)) {
            t = Gt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gg(t),
        e === null && ou(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Jl(r, o) ? (s = null) : i !== null && Jl(r, i) && (t.flags |= 32),
        Bg(e, t),
        Ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ou(t), null;
    case 13:
      return $g(e, t, n);
    case 4:
      return (
        bc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ir(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Kf(e, t, r, o, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          te(bs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (wt(i.value, s)) {
            if (i.children === o.children && !$e.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Bt(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      iu(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(A(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  iu(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ie(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Rr(t, n),
        (o = ct(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = mt(r, t.pendingProps)),
        (o = mt(r.type, o)),
        Gf(e, t, r, o, n)
      );
    case 15:
      return Fg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        is(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), Es(t)) : (e = !1),
        Rr(t, n),
        Ig(t, r, o),
        au(t, r, o, n),
        cu(null, t, r, !0, e, n)
      );
    case 19:
      return Wg(e, t, n);
    case 22:
      return zg(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function sv(e, t) {
  return jm(e, t);
}
function nS(e, t, n, r) {
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
function lt(e, t, n, r) {
  return new nS(e, t, n, r);
}
function Wc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rS(e) {
  if (typeof e == "function") return Wc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === uc)) return 11;
    if (e === cc) return 14;
  }
  return 2;
}
function wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
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
function ls(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Wc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ar:
        return Wn(n.children, o, i, t);
      case lc:
        (s = 8), (o |= 8);
        break;
      case Ml:
        return (
          (e = lt(12, n, t, o | 2)), (e.elementType = Ml), (e.lanes = i), e
        );
      case Dl:
        return (e = lt(13, n, t, o)), (e.elementType = Dl), (e.lanes = i), e;
      case jl:
        return (e = lt(19, n, t, o)), (e.elementType = jl), (e.lanes = i), e;
      case gm:
        return ca(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hm:
              s = 10;
              break e;
            case mm:
              s = 9;
              break e;
            case uc:
              s = 11;
              break e;
            case cc:
              s = 14;
              break e;
            case sn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Wn(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function ca(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = gm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function rl(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function ol(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function oS(e, t, n, r, o) {
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
    (this.eventTimes = Va(0)),
    (this.expirationTimes = Va(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Va(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Hc(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new oS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ac(i),
    e
  );
}
function iS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function av(e) {
  if (!e) return Cn;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return ag(e, n, t);
  }
  return t;
}
function lv(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Hc(n, r, !0, e, o, i, s, a, l)),
    (e.context = av(null)),
    (n = e.current),
    (r = _e()),
    (o = xn(n)),
    (i = Bt(r, o)),
    (i.callback = t ?? null),
    vn(n, i, o),
    (e.current.lanes = o),
    di(e, o, r),
    He(e, r),
    e
  );
}
function da(e, t, n, r) {
  var o = t.current,
    i = _e(),
    s = xn(o);
  return (
    (n = av(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vn(o, t, s)),
    e !== null && (xt(e, o, s, i), ns(e, o, s)),
    s
  );
}
function Fs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ip(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Kc(e, t) {
  ip(e, t), (e = e.alternate) && ip(e, t);
}
function sS() {
  return null;
}
var uv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gc(e) {
  this._internalRoot = e;
}
fa.prototype.render = Gc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  da(e, t, null, null);
};
fa.prototype.unmount = Gc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qn(function () {
      da(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function fa(e) {
  this._internalRoot = e;
}
fa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && Um(e);
  }
};
function Yc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function sp() {}
function aS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Fs(s);
        i.call(u);
      };
    }
    var s = lv(t, r, e, 0, null, !1, !1, "", sp);
    return (
      (e._reactRootContainer = s),
      (e[Ht] = s.current),
      Go(e.nodeType === 8 ? e.parentNode : e),
      Qn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Fs(l);
      a.call(u);
    };
  }
  var l = Hc(e, 0, !1, null, null, !1, !1, "", sp);
  return (
    (e._reactRootContainer = l),
    (e[Ht] = l.current),
    Go(e.nodeType === 8 ? e.parentNode : e),
    Qn(function () {
      da(t, l, n, r);
    }),
    l
  );
}
function ha(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Fs(s);
        a.call(l);
      };
    }
    da(t, s, e, o);
  } else s = aS(n, t, e, o, r);
  return Fs(s);
}
Vm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yo(t.pendingLanes);
        n !== 0 &&
          (pc(t, n | 1), He(t, ge()), !(H & 6) && ((Fr = ge() + 500), Nn()));
      }
      break;
    case 13:
      Qn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var o = _e();
          xt(r, e, 1, o);
        }
      }),
        Kc(e, 1);
  }
};
hc = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = _e();
      xt(t, e, 134217728, n);
    }
    Kc(e, 134217728);
  }
};
Fm = function (e) {
  if (e.tag === 13) {
    var t = xn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = _e();
      xt(n, e, t, r);
    }
    Kc(e, t);
  }
};
zm = function () {
  return G;
};
Bm = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
$l = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Il(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = oa(r);
            if (!o) throw Error(A(90));
            ym(r), Il(r, o);
          }
        }
      }
      break;
    case "textarea":
      wm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Tr(e, !!n.multiple, t, !1);
  }
};
Rm = Bc;
Am = Qn;
var lS = { usingClientEntryPoint: !1, Events: [pi, dr, oa, km, Em, Bc] },
  fo = {
    findFiberByHostInstance: Fn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  uS = {
    bundleType: fo.bundleType,
    version: fo.version,
    rendererPackageName: fo.rendererPackageName,
    rendererConfig: fo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fo.findFiberByHostInstance || sS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zi.isDisabled && zi.supportsFiber)
    try {
      (ea = zi.inject(uS)), (bt = zi);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lS;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yc(t)) throw Error(A(200));
  return iS(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Yc(e)) throw Error(A(299));
  var n = !1,
    r = "",
    o = uv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Hc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ht] = t.current),
    Go(e.nodeType === 8 ? e.parentNode : e),
    new Gc(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Mm(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Qn(e);
};
tt.hydrate = function (e, t, n) {
  if (!pa(t)) throw Error(A(200));
  return ha(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Yc(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = uv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = lv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ht] = t.current),
    Go(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new fa(t);
};
tt.render = function (e, t, n) {
  if (!pa(t)) throw Error(A(200));
  return ha(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!pa(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Qn(function () {
        ha(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Bc;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!pa(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return ha(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function cv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv);
    } catch (e) {
      console.error(e);
    }
}
cv(), (cm.exports = tt);
var Xr = cm.exports;
const cS = qh(Xr);
var dv,
  ap = Xr;
(dv = ap.createRoot), ap.hydrateRoot;
function dS(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
function ma(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Cu = (e) => Array.isArray(e);
function fv(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ni(e) {
  return typeof e == "string" || Array.isArray(e);
}
function lp(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Xc(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = lp(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = lp(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function ga(e, t, n) {
  const r = e.getProps();
  return Xc(r, t, n !== void 0 ? n : r.custom, e);
}
const Qc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Zc = ["initial", ...Qc],
  mi = [
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
  tr = new Set(mi),
  Ut = (e) => e * 1e3,
  $t = (e) => e / 1e3,
  fS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  pS = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  hS = { type: "keyframes", duration: 0.8 },
  mS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  gS = (e, { keyframes: t }) =>
    t.length > 2
      ? hS
      : tr.has(e)
        ? e.startsWith("scale")
          ? pS(t[1])
          : fS
        : mS;
function qc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const vS = { skipAnimations: !1, useManualTiming: !1 },
  yS = (e) => e !== null;
function va(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(yS),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Ze = (e) => e;
let Tu = Ze;
function xS(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    i.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const m = d && r ? t : n;
      return c && i.add(u), m.has(u) || m.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        o && ((o = !1), l.process(u));
    },
  };
  return l;
}
const Bi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  wS = 40;
function pv(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = Bi.reduce((p, h) => ((p[h] = xS(i)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = s,
    m = () => {
      const p = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(p - o.timestamp, wS), 1)),
        (o.timestamp = p),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(m));
    },
    x = () => {
      (n = !0), (r = !0), o.isProcessing || e(m);
    };
  return {
    schedule: Bi.reduce((p, h) => {
      const y = s[h];
      return (p[h] = (C, T = !1, k = !1) => (n || x(), y.schedule(C, T, k))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Bi.length; h++) s[Bi[h]].cancel(p);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: ie,
    cancel: Tn,
    state: Ee,
    steps: il,
  } = pv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ze, !0),
  hv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  SS = 1e-7,
  CS = 12;
function TS(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = hv(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > SS && ++a < CS);
  return s;
}
function gi(e, t, n, r) {
  if (e === t && n === r) return Ze;
  const o = (i) => TS(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : hv(o(i), t, r));
}
const mv = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  gv = (e) => (t) => 1 - e(1 - t),
  vv = gi(0.33, 1.53, 0.69, 0.99),
  Jc = gv(vv),
  yv = mv(Jc),
  xv = (e) =>
    (e *= 2) < 1 ? 0.5 * Jc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ed = (e) => 1 - Math.sin(Math.acos(e)),
  wv = gv(ed),
  Sv = mv(ed),
  Cv = (e) => /^0[^.\s]+$/u.test(e);
function PS(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Cv(e)
      : !0;
}
const Tv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Pv = (e) => (t) => typeof t == "string" && t.startsWith(e),
  kv = Pv("--"),
  kS = Pv("var(--"),
  td = (e) => (kS(e) ? ES.test(e.split("/*")[0].trim()) : !1),
  ES =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  RS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function AS(e) {
  const t = RS.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Ev(e, t, n = 1) {
  const [r, o] = AS(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return Tv(s) ? parseFloat(s) : s;
  }
  return td(o) ? Ev(o, t, n + 1) : o;
}
const Yt = (e, t, n) => (n > t ? t : n < e ? e : n),
  Qr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ri = { ...Qr, transform: (e) => Yt(0, 1, e) },
  Ui = { ...Qr, default: 1 },
  vi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  rn = vi("deg"),
  Mt = vi("%"),
  V = vi("px"),
  bS = vi("vh"),
  NS = vi("vw"),
  up = {
    ...Mt,
    parse: (e) => Mt.parse(e) / 100,
    transform: (e) => Mt.transform(e * 100),
  },
  MS = new Set([
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
  cp = (e) => e === Qr || e === V,
  dp = (e, t) => parseFloat(e.split(", ")[t]),
  fp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return dp(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? dp(i[1], e) : 0;
      }
    },
  DS = new Set(["x", "y", "z"]),
  jS = mi.filter((e) => !DS.has(e));
function LS(e) {
  const t = [];
  return (
    jS.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const zr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: fp(4, 13),
  y: fp(5, 14),
};
zr.translateX = zr.x;
zr.translateY = zr.y;
const Rv = (e) => (t) => t.test(e),
  OS = { test: (e) => e === "auto", parse: (e) => e },
  Av = [Qr, V, Mt, rn, NS, bS, OS],
  pp = (e) => Av.find(Rv(e)),
  Hn = new Set();
let Pu = !1,
  ku = !1;
function bv() {
  if (ku) {
    const e = Array.from(Hn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = LS(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (ku = !1), (Pu = !1), Hn.forEach((e) => e.complete()), Hn.clear();
}
function Nv() {
  Hn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ku = !0);
  });
}
function IS() {
  Nv(), bv();
}
class nd {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Hn.add(this),
          Pu || ((Pu = !0), ie.read(Nv), ie.resolveKeyframes(bv)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Hn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Hn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const jo = (e) => Math.round(e * 1e5) / 1e5,
  rd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function _S(e) {
  return e == null;
}
const VS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  od = (e, t) => (n) =>
    !!(
      (typeof n == "string" && VS.test(n) && n.startsWith(e)) ||
      (t && !_S(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Mv = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(rd);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  FS = (e) => Yt(0, 255, e),
  sl = { ...Qr, transform: (e) => Math.round(FS(e)) },
  Un = {
    test: od("rgb", "red"),
    parse: Mv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      sl.transform(e) +
      ", " +
      sl.transform(t) +
      ", " +
      sl.transform(n) +
      ", " +
      jo(ri.transform(r)) +
      ")",
  };
function zS(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Eu = { test: od("#"), parse: zS, transform: Un.transform },
  yr = {
    test: od("hsl", "hue"),
    parse: Mv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Mt.transform(jo(t)) +
      ", " +
      Mt.transform(jo(n)) +
      ", " +
      jo(ri.transform(r)) +
      ")",
  },
  De = {
    test: (e) => Un.test(e) || Eu.test(e) || yr.test(e),
    parse: (e) =>
      Un.test(e) ? Un.parse(e) : yr.test(e) ? yr.parse(e) : Eu.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Un.transform(e)
          : yr.transform(e),
  },
  BS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function US(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(rd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(BS)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Dv = "number",
  jv = "color",
  $S = "var",
  WS = "var(",
  hp = "${}",
  HS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      HS,
      (l) => (
        De.test(l)
          ? (r.color.push(i), o.push(jv), n.push(De.parse(l)))
          : l.startsWith(WS)
            ? (r.var.push(i), o.push($S), n.push(l))
            : (r.number.push(i), o.push(Dv), n.push(parseFloat(l))),
        ++i,
        hp
      ),
    )
    .split(hp);
  return { values: n, split: a, indexes: r, types: o };
}
function Lv(e) {
  return oi(e).values;
}
function Ov(e) {
  const { split: t, types: n } = oi(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === Dv
          ? (i += jo(o[s]))
          : a === jv
            ? (i += De.transform(o[s]))
            : (i += o[s]);
      }
    return i;
  };
}
const KS = (e) => (typeof e == "number" ? 0 : e);
function GS(e) {
  const t = Lv(e);
  return Ov(e)(t.map(KS));
}
const Pn = {
    test: US,
    parse: Lv,
    createTransformer: Ov,
    getAnimatableNone: GS,
  },
  YS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function XS(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(rd) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = YS.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const QS = /\b([a-z-]*)\(.*?\)/gu,
  Ru = {
    ...Pn,
    getAnimatableNone: (e) => {
      const t = e.match(QS);
      return t ? t.map(XS).join(" ") : e;
    },
  },
  ZS = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
  },
  qS = {
    rotate: rn,
    rotateX: rn,
    rotateY: rn,
    rotateZ: rn,
    scale: Ui,
    scaleX: Ui,
    scaleY: Ui,
    scaleZ: Ui,
    skew: rn,
    skewX: rn,
    skewY: rn,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: ri,
    originX: up,
    originY: up,
    originZ: V,
  },
  mp = { ...Qr, transform: Math.round },
  id = {
    ...ZS,
    ...qS,
    zIndex: mp,
    size: V,
    fillOpacity: ri,
    strokeOpacity: ri,
    numOctaves: mp,
  },
  JS = {
    ...id,
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    filter: Ru,
    WebkitFilter: Ru,
  },
  sd = (e) => JS[e];
function Iv(e, t) {
  let n = sd(e);
  return (
    n !== Ru && (n = Pn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const eC = new Set(["auto", "none", "0"]);
function tC(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !eC.has(i) && oi(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = Iv(n, o);
}
class _v extends nd {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), td(u))) {
        const c = Ev(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !MS.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = pp(o),
      a = pp(i);
    if (s !== a)
      if (cp(s) && cp(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) PS(t[o]) && r.push(o);
    r.length && tC(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = zr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = zr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function ad(e) {
  return typeof e == "function";
}
let us;
function nC() {
  us = void 0;
}
const Dt = {
    now: () => (
      us === void 0 &&
        Dt.set(
          Ee.isProcessing || vS.useManualTiming
            ? Ee.timestamp
            : performance.now(),
        ),
      us
    ),
    set: (e) => {
      (us = e), queueMicrotask(nC);
    },
  },
  gp = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Pn.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function rC(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function oC(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = gp(o, t),
    a = gp(i, t);
  return !s || !a ? !1 : rC(e) || ((n === "spring" || ad(n)) && r);
}
const iC = 40;
class Vv {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Dt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > iC
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && IS(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Dt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !oC(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(va(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Br = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Fv = (e, t, n = 10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < o; i++) r += e(Br(0, o - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function zv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sC = 5;
function Bv(e, t, n) {
  const r = Math.max(t - sC, 0);
  return zv(n - e(r), t - r);
}
const pe = {
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
  al = 0.001;
function aC({
  duration: e = pe.duration,
  bounce: t = pe.bounce,
  velocity: n = pe.velocity,
  mass: r = pe.mass,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Yt(pe.minDamping, pe.maxDamping, s)),
    (e = Yt(pe.minDuration, pe.maxDuration, $t(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            m = Au(u, s),
            x = Math.exp(-d);
          return al - (f / m) * x;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            g = Au(Math.pow(u, 2), s);
          return ((-o(u) + al > 0 ? -1 : 1) * ((f - m) * x)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -al + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = uC(o, i, a);
  if (((e = Ut(e)), isNaN(l)))
    return { stiffness: pe.stiffness, damping: pe.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const lC = 12;
function uC(e, t, n) {
  let r = n;
  for (let o = 1; o < lC; o++) r = r - e(r) / t(r);
  return r;
}
function Au(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const bu = 2e4;
function Uv(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < bu; ) (t += n), (r = e.next(t));
  return t >= bu ? 1 / 0 : t;
}
const cC = ["duration", "bounce"],
  dC = ["stiffness", "damping", "mass"];
function vp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function fC(e) {
  let t = {
    velocity: pe.velocity,
    stiffness: pe.stiffness,
    damping: pe.damping,
    mass: pe.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!vp(e, dC) && vp(e, cC))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        o = r * r,
        i = 2 * Yt(0.05, 1, 1 - e.bounce) * Math.sqrt(o);
      t = { ...t, mass: pe.mass, stiffness: o, damping: i };
    } else {
      const n = aC(e);
      (t = { ...t, ...n, mass: pe.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function $v(e = pe.visualDuration, t = pe.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: m,
    } = fC({ ...n, velocity: -$t(n.velocity || 0) }),
    x = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    S = s - i,
    p = $t(Math.sqrt(l / c)),
    h = Math.abs(S) < 5;
  r || (r = h ? pe.restSpeed.granular : pe.restSpeed.default),
    o || (o = h ? pe.restDelta.granular : pe.restDelta.default);
  let y;
  if (g < 1) {
    const T = Au(p, g);
    y = (k) => {
      const P = Math.exp(-g * p * k);
      return (
        s - P * (((x + g * p * S) / T) * Math.sin(T * k) + S * Math.cos(T * k))
      );
    };
  } else if (g === 1) y = (T) => s - Math.exp(-p * T) * (S + (x + p * S) * T);
  else {
    const T = p * Math.sqrt(g * g - 1);
    y = (k) => {
      const P = Math.exp(-g * p * k),
        E = Math.min(T * k, 300);
      return (
        s - (P * ((x + g * p * S) * Math.sinh(E) + T * S * Math.cosh(E))) / T
      );
    };
  }
  const C = {
    calculatedDuration: (m && d) || null,
    next: (T) => {
      const k = y(T);
      if (m) a.done = T >= d;
      else {
        let P = 0;
        g < 1 && (P = T === 0 ? Ut(x) : Bv(y, T, k));
        const E = Math.abs(P) <= r,
          M = Math.abs(s - k) <= o;
        a.done = E && M;
      }
      return (a.value = a.done ? s : k), a;
    },
    toString: () => {
      const T = Math.min(Uv(C), bu),
        k = Fv((P) => C.next(T * P).value, T, 30);
      return T + "ms " + k;
    },
  };
  return C;
}
function yp({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    x = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
          ? a
          : l;
  let g = n * t;
  const S = d + g,
    p = s === void 0 ? S : s(S);
  p !== S && (g = p - d);
  const h = (E) => -g * Math.exp(-E / r),
    y = (E) => p + h(E),
    C = (E) => {
      const M = h(E),
        b = y(E);
      (f.done = Math.abs(M) <= u), (f.value = f.done ? p : b);
    };
  let T, k;
  const P = (E) => {
    m(f.value) &&
      ((T = E),
      (k = $v({
        keyframes: [f.value, x(f.value)],
        velocity: Bv(y, E, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let M = !1;
        return (
          !k && T === void 0 && ((M = !0), C(E), P(E)),
          T !== void 0 && E >= T ? k.next(E - T) : (!M && C(E), f)
        );
      },
    }
  );
}
const pC = gi(0.42, 0, 1, 1),
  hC = gi(0, 0, 0.58, 1),
  Wv = gi(0.42, 0, 0.58, 1),
  mC = (e) => Array.isArray(e) && typeof e[0] != "number",
  ld = (e) => Array.isArray(e) && typeof e[0] == "number",
  xp = {
    linear: Ze,
    easeIn: pC,
    easeInOut: Wv,
    easeOut: hC,
    circIn: ed,
    circInOut: Sv,
    circOut: wv,
    backIn: Jc,
    backInOut: yv,
    backOut: vv,
    anticipate: xv,
  },
  wp = (e) => {
    if (ld(e)) {
      Tu(e.length === 4);
      const [t, n, r, o] = e;
      return gi(t, n, r, o);
    } else if (typeof e == "string") return Tu(xp[e] !== void 0), xp[e];
    return e;
  },
  gC = (e, t) => (n) => t(e(n)),
  yi = (...e) => e.reduce(gC),
  ce = (e, t, n) => e + (t - e) * n;
function ll(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function vC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = ll(l, a, e + 1 / 3)), (i = ll(l, a, e)), (s = ll(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function zs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ul = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  yC = [Eu, Un, yr],
  xC = (e) => yC.find((t) => t.test(e));
function Sp(e) {
  const t = xC(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === yr && (n = vC(n)), n;
}
const Cp = (e, t) => {
    const n = Sp(e),
      r = Sp(t);
    if (!n || !r) return zs(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = ul(n.red, r.red, i)),
      (o.green = ul(n.green, r.green, i)),
      (o.blue = ul(n.blue, r.blue, i)),
      (o.alpha = ce(n.alpha, r.alpha, i)),
      Un.transform(o)
    );
  },
  Nu = new Set(["none", "hidden"]);
function wC(e, t) {
  return Nu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function SC(e, t) {
  return (n) => ce(e, t, n);
}
function ud(e) {
  return typeof e == "number"
    ? SC
    : typeof e == "string"
      ? td(e)
        ? zs
        : De.test(e)
          ? Cp
          : PC
      : Array.isArray(e)
        ? Hv
        : typeof e == "object"
          ? De.test(e)
            ? Cp
            : CC
          : zs;
}
function Hv(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => ud(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function CC(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = ud(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function TC(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const PC = (e, t) => {
  const n = Pn.createTransformer(t),
    r = oi(e),
    o = oi(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Nu.has(e) && !o.values.length) || (Nu.has(t) && !r.values.length)
      ? wC(e, t)
      : yi(Hv(TC(r, o), o.values), n)
    : zs(e, t);
};
function Kv(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ce(e, t, n)
    : ud(e)(e, t);
}
function kC(e, t, n) {
  const r = [],
    o = n || Kv,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ze : t;
      a = yi(l, a);
    }
    r.push(a);
  }
  return r;
}
function EC(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Tu(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = kC(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Br(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(Yt(e[0], e[i - 1], u)) : l;
}
function RC(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Br(0, t, r);
    e.push(ce(n, 1, o));
  }
}
function AC(e) {
  const t = [0];
  return RC(t, e.length - 1), t;
}
function bC(e, t) {
  return e.map((n) => n * t);
}
function NC(e, t) {
  return e.map(() => t || Wv).splice(0, e.length - 1);
}
function Bs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = mC(r) ? r.map(wp) : wp(r),
    i = { done: !1, value: t[0] },
    s = bC(n && n.length === t.length ? n : AC(t), e),
    a = EC(s, t, { ease: Array.isArray(o) ? o : NC(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const MC = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ie.update(t, !0),
      stop: () => Tn(t),
      now: () => (Ee.isProcessing ? Ee.timestamp : Dt.now()),
    };
  },
  DC = { decay: yp, inertia: yp, tween: Bs, keyframes: Bs, spring: $v },
  jC = (e) => e / 100;
class cd extends Vv {
  constructor(t) {
    super(t),
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
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || nd,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = ad(n) ? n : DC[n] || Bs;
    let l, u;
    a !== Bs &&
      typeof t[0] != "number" &&
      ((l = yi(jC, Kv(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = Uv(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      m = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: m,
      repeatType: x,
      repeatDelay: g,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let y = this.currentTime,
      C = i;
    if (m) {
      const E = Math.min(this.currentTime, c) / d;
      let M = Math.floor(E),
        b = E % 1;
      !b && E >= 1 && (b = 1),
        b === 1 && M--,
        (M = Math.min(M, m + 1)),
        !!(M % 2) &&
          (x === "reverse"
            ? ((b = 1 - b), g && (b -= g / d))
            : x === "mirror" && (C = s)),
        (y = Yt(0, 1, b) * d);
    }
    const T = h ? { done: !1, value: l[0] } : C.next(y);
    a && (T.value = a(T.value));
    let { done: k } = T;
    !h &&
      u !== null &&
      (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && k));
    return (
      P && o !== void 0 && (T.value = va(l, this.options, o)),
      S && S(T.value),
      P && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? $t(t.calculatedDuration) : 0;
  }
  get time() {
    return $t(this.currentTime);
  }
  set time(t) {
    (t = Ut(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = $t(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = MC, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = o)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
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
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const LC = new Set(["opacity", "clipPath", "filter", "transform"]);
function dd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const OC = { linearEasing: void 0 };
function IC(e, t) {
  const n = dd(e);
  return () => {
    var r;
    return (r = OC[t]) !== null && r !== void 0 ? r : n();
  };
}
const Us = IC(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Gv(e) {
  return !!(
    (typeof e == "function" && Us()) ||
    !e ||
    (typeof e == "string" && (e in Mu || Us())) ||
    ld(e) ||
    (Array.isArray(e) && e.every(Gv))
  );
}
const wo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Mu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: wo([0, 0.65, 0.55, 1]),
    circOut: wo([0.55, 0, 1, 0.45]),
    backIn: wo([0.31, 0.01, 0.66, -0.59]),
    backOut: wo([0.33, 1.53, 0.69, 0.99]),
  };
function Yv(e, t) {
  if (e)
    return typeof e == "function" && Us()
      ? Fv(e, t)
      : ld(e)
        ? wo(e)
        : Array.isArray(e)
          ? e.map((n) => Yv(n, t) || Mu.easeOut)
          : Mu[e];
}
function _C(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Yv(a, o);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Tp(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const VC = dd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  $s = 10,
  FC = 2e4;
function zC(e) {
  return ad(e.type) || e.type === "spring" || !Gv(e.ease);
}
function BC(e, t) {
  const n = new cd({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < FC; ) (r = n.sample(i)), o.push(r.value), (i += $s);
  return { times: void 0, keyframes: o, duration: i - $s, ease: "linear" };
}
const Xv = { anticipate: xv, backInOut: yv, circInOut: Sv };
function UC(e) {
  return e in Xv;
}
class Pp extends Vv {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new _v(
      i,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      o,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && Us() && UC(s) && (s = Xv[s]), zC(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: m,
          motionValue: x,
          element: g,
          ...S
        } = this.options,
        p = BC(t, S);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = p.duration),
        (i = p.times),
        (s = p.ease),
        (a = "keyframes");
    }
    const d = _C(l.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Tp(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(va(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return $t(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return $t(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Ut(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ze;
      const { animation: r } = n;
      Tp(r, t);
    }
    return Ze;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...m
        } = this.options,
        x = new cd({
          ...m,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        g = Ut(this.time);
      u.setWithVelocity(x.sample(g - $s).value, x.sample(g).value, $s);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    return (
      VC() &&
      r &&
      LC.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const $C = dd(() => window.ScrollTimeline !== void 0);
class WC {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) =>
      $C() && o.attachTimeline ? o.attachTimeline(t) : n(o),
    );
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
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
function HC({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const fd =
    (e, t, n, r = {}, o, i) =>
    (s) => {
      const a = qc(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Ut(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (f) => {
          t.set(f), a.onUpdate && a.onUpdate(f);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      HC(a) || (c = { ...c, ...gS(e, c) }),
        c.duration && (c.duration = Ut(c.duration)),
        c.repeatDelay && (c.repeatDelay = Ut(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let d = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (d = !0)),
        d && !i && t.get() !== void 0)
      ) {
        const f = va(c.keyframes, a);
        if (f !== void 0)
          return (
            ie.update(() => {
              c.onUpdate(f), c.onComplete();
            }),
            new WC([])
          );
      }
      return !i && Pp.supports(c) ? new Pp(c) : new cd(c);
    },
  KC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  GC = (e) => (Cu(e) ? e[e.length - 1] || 0 : e);
function pd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class md {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return pd(this.subscriptions, t), () => hd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const kp = 30,
  YC = (e) => !isNaN(parseFloat(e));
class XC {
  constructor(t, n = {}) {
    (this.version = "11.14.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Dt.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Dt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = YC(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new md());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ie.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Dt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > kp
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, kp);
    return zv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
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
function ii(e, t) {
  return new XC(e, t);
}
function QC(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ii(n));
}
function ZC(e, t) {
  const n = ga(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = GC(i[s]);
    QC(e, s, a);
  }
}
const gd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  qC = "framerAppearId",
  Qv = "data-" + gd(qC);
function Zv(e) {
  return e.props[Qv];
}
const Le = (e) => !!(e && e.getVelocity);
function JC(e) {
  return !!(Le(e) && e.add);
}
function Du(e, t) {
  const n = e.getValue("willChange");
  if (JC(n)) return n.add(t);
}
function eT({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function qv(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null,
      ),
      m = l[d];
    if (m === void 0 || (c && eT(c, d))) continue;
    const x = { delay: n, ...qc(s || {}, d) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const p = Zv(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, d, ie);
        h !== null && ((x.startTime = h), (g = !0));
      }
    }
    Du(e, d),
      f.start(
        fd(d, f, m, e.shouldReduceMotion && tr.has(d) ? { type: !1 } : x, e, g),
      );
    const S = f.animation;
    S && u.push(S);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        ie.update(() => {
          a && ZC(e, a);
        });
      }),
    u
  );
}
function ju(e, t, n = {}) {
  var r;
  const o = ga(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(qv(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return tT(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function tT(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(nT)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            ju(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function nT(e, t) {
  return e.sortNodePosition(t);
}
function rT(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => ju(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = ju(e, t, n);
  else {
    const o = typeof t == "function" ? ga(e, t, n.custom) : t;
    r = Promise.all(qv(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const oT = Zc.length;
function Jv(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Jv(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < oT; n++) {
    const r = Zc[n],
      o = e.props[r];
    (ni(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const iT = [...Qc].reverse(),
  sT = Qc.length;
function aT(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => rT(e, n, r)));
}
function lT(e) {
  let t = aT(e),
    n = Ep(),
    r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = ga(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0,
    );
    if (f) {
      const { transition: m, transitionEnd: x, ...g } = f;
      u = { ...u, ...g, ...x };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = Jv(e.parent) || {},
      d = [],
      f = new Set();
    let m = {},
      x = 1 / 0;
    for (let S = 0; S < sT; S++) {
      const p = iT[S],
        h = n[p],
        y = u[p] !== void 0 ? u[p] : c[p],
        C = ni(y),
        T = p === l ? h.isActive : null;
      T === !1 && (x = S);
      let k = y === c[p] && y !== u[p] && C;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (h.protectedKeys = { ...m }),
        (!h.isActive && T === null) ||
          (!y && !h.prevProp) ||
          ma(y) ||
          typeof y == "boolean")
      )
        continue;
      const P = uT(h.prevProp, y);
      let E = P || (p === l && h.isActive && !k && C) || (S > x && C),
        M = !1;
      const b = Array.isArray(y) ? y : [y];
      let _ = b.reduce(o(p), {});
      T === !1 && (_ = {});
      const { prevResolvedValues: L = {} } = h,
        $ = { ...L, ..._ },
        z = (O) => {
          (E = !0),
            f.has(O) && ((M = !0), f.delete(O)),
            (h.needsAnimating[O] = !0);
          const R = e.getValue(O);
          R && (R.liveStyle = !1);
        };
      for (const O in $) {
        const R = _[O],
          N = L[O];
        if (m.hasOwnProperty(O)) continue;
        let j = !1;
        Cu(R) && Cu(N) ? (j = !fv(R, N)) : (j = R !== N),
          j
            ? R != null
              ? z(O)
              : f.add(O)
            : R !== void 0 && f.has(O)
              ? z(O)
              : (h.protectedKeys[O] = !0);
      }
      (h.prevProp = y),
        (h.prevResolvedValues = _),
        h.isActive && (m = { ...m, ..._ }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!(k && P) || M) &&
          d.push(...b.map((O) => ({ animation: O, options: { type: p } })));
    }
    if (f.size) {
      const S = {};
      f.forEach((p) => {
        const h = e.getBaseTarget(p),
          y = e.getValue(p);
        y && (y.liveStyle = !0), (S[p] = h ?? null);
      }),
        d.push({ animation: S });
    }
    let g = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var m;
        return (m = f.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = Ep()), (r = !0);
    },
  };
}
function uT(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !fv(t, e) : !1;
}
function Ln(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Ep() {
  return {
    animate: Ln(!0),
    whileInView: Ln(),
    whileHover: Ln(),
    whileTap: Ln(),
    whileDrag: Ln(),
    whileFocus: Ln(),
    exit: Ln(),
  };
}
class Mn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class cT extends Mn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = lT(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ma(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let dT = 0;
class fT extends Mn {
  constructor() {
    super(...arguments), (this.id = dT++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const pT = { animation: { Feature: cT }, exit: { Feature: fT } },
  pt = { x: !1, y: !1 };
function ey() {
  return pt.x || pt.y;
}
function hT(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let o = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function ty(e, t) {
  const n = hT(e),
    r = new AbortController(),
    o = { passive: !0, ...t, signal: r.signal };
  return [n, o, () => r.abort()];
}
function Rp(e) {
  return (t) => {
    t.pointerType === "touch" || ey() || e(t);
  };
}
function mT(e, t, n = {}) {
  const [r, o, i] = ty(e, n),
    s = Rp((a) => {
      const { target: l } = a,
        u = t(a);
      if (!u || !l) return;
      const c = Rp((d) => {
        u(d), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, o);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, o);
    }),
    i
  );
}
const vd = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  So = new WeakSet();
function Ap(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function cl(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const gT = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Ap(() => {
      if (So.has(n)) return;
      cl(n, "down");
      const o = Ap(() => {
          cl(n, "up");
        }),
        i = () => cl(n, "cancel");
      n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
    });
    n.addEventListener("keydown", r, t),
      n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
  },
  vT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function yT(e) {
  return vT.has(e.tagName) || e.tabIndex !== -1;
}
const ny = (e, t) => (t ? (e === t ? !0 : ny(e, t.parentElement)) : !1);
function bp(e) {
  return vd(e) && !ey();
}
function xT(e, t, n = {}) {
  const [r, o, i] = ty(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!bp(a) || So.has(l)) return;
      So.add(l);
      const u = t(a),
        c = (m, x) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!bp(m) || !So.has(l)) &&
              (So.delete(l), u && u(m, { success: x }));
        },
        d = (m) => {
          c(m, n.useGlobalTarget || ny(l, m.target));
        },
        f = (m) => {
          c(m, !1);
        };
      window.addEventListener("pointerup", d, o),
        window.addEventListener("pointercancel", f, o);
    };
  return (
    r.forEach((a) => {
      yT(a) || (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o),
        a.addEventListener("focus", (u) => gT(u, o), o);
    }),
    i
  );
}
function wT(e) {
  return e === "x" || e === "y"
    ? pt[e]
      ? null
      : ((pt[e] = !0),
        () => {
          pt[e] = !1;
        })
    : pt.x || pt.y
      ? null
      : ((pt.x = pt.y = !0),
        () => {
          pt.x = pt.y = !1;
        });
}
function xi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const ST = (e) => (t) => vd(t) && e(t, xi(t));
function si(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Lo(e, t, n, r) {
  return si(e, t, ST(n), r);
}
const Np = (e, t) => Math.abs(e - t);
function CT(e, t) {
  const n = Np(e.x, t.x),
    r = Np(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ry {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = fl(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          m = CT(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !m) return;
        const { point: x } = d,
          { timestamp: g } = Ee;
        this.history.push({ ...x, timestamp: g });
        const { onStart: S, onMove: p } = this.handlers;
        f ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = dl(f, this.transformPagePoint)),
          ie.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: m, onSessionEnd: x, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = fl(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : dl(f, this.transformPagePoint),
          this.history,
        );
        this.startEvent && m && m(d, S), x && x(d, S);
      }),
      !vd(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = xi(t),
      a = dl(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Ee;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, fl(a, this.history)),
      (this.removeListeners = yi(
        Lo(this.contextWindow, "pointermove", this.handlePointerMove),
        Lo(this.contextWindow, "pointerup", this.handlePointerUp),
        Lo(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tn(this.updatePoint);
  }
}
function dl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Mp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fl({ point: e }, t) {
  return {
    point: e,
    delta: Mp(e, oy(t)),
    offset: Mp(e, TT(t)),
    velocity: PT(t, 0.1),
  };
}
function TT(e) {
  return e[0];
}
function oy(e) {
  return e[e.length - 1];
}
function PT(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = oy(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = $t(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function xr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const iy = 1e-4,
  kT = 1 - iy,
  ET = 1 + iy,
  sy = 0.01,
  RT = 0 - sy,
  AT = 0 + sy;
function et(e) {
  return e.max - e.min;
}
function bT(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Dp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ce(t.min, t.max, e.origin)),
    (e.scale = et(n) / et(t)),
    (e.translate = ce(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= kT && e.scale <= ET) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= RT && e.translate <= AT) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Oo(e, t, n, r) {
  Dp(e.x, t.x, n.x, r ? r.originX : void 0),
    Dp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function jp(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + et(t));
}
function NT(e, t, n) {
  jp(e.x, t.x, n.x), jp(e.y, t.y, n.y);
}
function Lp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + et(t));
}
function Io(e, t, n) {
  Lp(e.x, t.x, n.x), Lp(e.y, t.y, n.y);
}
function MT(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ce(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Op(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function DT(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Op(e.x, n, o), y: Op(e.y, t, r) };
}
function Ip(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function jT(e, t) {
  return { x: Ip(e.x, t.x), y: Ip(e.y, t.y) };
}
function LT(e, t) {
  let n = 0.5;
  const r = et(e),
    o = et(t);
  return (
    o > r
      ? (n = Br(t.min, t.max - r, e.min))
      : r > o && (n = Br(e.min, e.max - o, t.min)),
    Yt(0, 1, n)
  );
}
function OT(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Lu = 0.35;
function IT(e = Lu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Lu),
    { x: _p(e, "left", "right"), y: _p(e, "top", "bottom") }
  );
}
function _p(e, t, n) {
  return { min: Vp(e, t), max: Vp(e, n) };
}
function Vp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Fp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  wr = () => ({ x: Fp(), y: Fp() }),
  zp = () => ({ min: 0, max: 0 }),
  me = () => ({ x: zp(), y: zp() });
function it(e) {
  return [e("x"), e("y")];
}
function ay({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function _T({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function VT(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function pl(e) {
  return e === void 0 || e === 1;
}
function Ou({ scale: e, scaleX: t, scaleY: n }) {
  return !pl(e) || !pl(t) || !pl(n);
}
function _n(e) {
  return (
    Ou(e) ||
    ly(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function ly(e) {
  return Bp(e.x) || Bp(e.y);
}
function Bp(e) {
  return e && e !== "0%";
}
function Ws(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Up(e, t, n, r, o) {
  return o !== void 0 && (e = Ws(e, o, r)), Ws(e, n, r) + t;
}
function Iu(e, t = 0, n = 1, r, o) {
  (e.min = Up(e.min, t, n, r, o)), (e.max = Up(e.max, t, n, r, o));
}
function uy(e, { x: t, y: n }) {
  Iu(e.x, t.translate, t.scale, t.originPoint),
    Iu(e.y, n.translate, n.scale, n.originPoint);
}
const $p = 0.999999999999,
  Wp = 1.0000000000001;
function FT(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Cr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), uy(e, s)),
      r && _n(i.latestValues) && Cr(e, i.latestValues));
  }
  t.x < Wp && t.x > $p && (t.x = 1), t.y < Wp && t.y > $p && (t.y = 1);
}
function Sr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Hp(e, t, n, r, o = 0.5) {
  const i = ce(e.min, e.max, o);
  Iu(e, t, n, i, r);
}
function Cr(e, t) {
  Hp(e.x, t.x, t.scaleX, t.scale, t.originX),
    Hp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function cy(e, t) {
  return ay(VT(e.getBoundingClientRect(), t));
}
function zT(e, t, n) {
  const r = cy(e, n),
    { scroll: o } = t;
  return o && (Sr(r.x, o.offset.x), Sr(r.y, o.offset.y)), r;
}
const dy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  BT = new WeakMap();
class UT {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = me()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(xi(c).point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: m, onDragStart: x } = this.getProps();
        if (
          f &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = wT(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          it((S) => {
            let p = this.getAxisMotionValue(S).get() || 0;
            if (Mt.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const y = h.layout.layoutBox[S];
                y && (p = et(y) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[S] = p;
          }),
          x && ie.postRender(() => x(c, d)),
          Du(this.visualElement, "transform");
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: m,
          onDirectionLock: x,
          onDrag: g,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: S } = d;
        if (m && this.currentDirection === null) {
          (this.currentDirection = $T(S)),
            this.currentDirection !== null && x && x(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          g && g(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        it((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ry(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: dy(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ie.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !$i(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = MT(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    n && xr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
        ? (this.constraints = DT(o.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = IT(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        it((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = OT(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !xr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = zT(r, o.root, this.visualElement.getTransformPagePoint());
    let s = jT(o.layout.layoutBox, i);
    if (n) {
      const a = n(_T(s));
      (this.hasMutatedConstraints = !!a), a && (s = ay(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = it((c) => {
        if (!$i(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Du(this.visualElement, t), r.start(fd(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    it((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    it((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    it((n) => {
      const { drag: r } = this.getProps();
      if (!$i(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - ce(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!xr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    it((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = LT({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      it((s) => {
        if (!$i(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ce(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    BT.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Lo(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        xr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      ie.read(r);
    const s = si(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (it((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Lu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function $i(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $T(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class WT extends Mn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ze),
      (this.removeListeners = Ze),
      (this.controls = new UT(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ze);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Kp = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class HT extends Mn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ze);
  }
  onPointerDown(t) {
    this.session = new ry(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: dy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Kp(t),
      onStart: Kp(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && ie.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Lo(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ya = v.createContext(null);
function KT() {
  const e = v.useContext(ya);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = v.useId();
  v.useEffect(() => r(o), []);
  const i = v.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const yd = v.createContext({}),
  fy = v.createContext({}),
  cs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Gp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const po = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = Gp(e, t.target.x),
        r = Gp(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  GT = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Pn.parse(e);
      if (o.length > 5) return r;
      const i = Pn.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = ce(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  },
  Hs = {};
function YT(e) {
  Object.assign(Hs, e);
}
const { schedule: xd, cancel: kb } = pv(queueMicrotask, !1);
class XT extends v.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    YT(QT),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (cs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              ie.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      xd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function py(e) {
  const [t, n] = KT(),
    r = v.useContext(yd);
  return w.jsx(XT, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: v.useContext(fy),
    isPresent: t,
    safeToRemove: n,
  });
}
const QT = {
    borderRadius: {
      ...po,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: po,
    borderTopRightRadius: po,
    borderBottomLeftRadius: po,
    borderBottomRightRadius: po,
    boxShadow: GT,
  },
  hy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ZT = hy.length,
  Yp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xp = (e) => typeof e == "number" || V.test(e);
function qT(e, t, n, r, o, i) {
  o
    ? ((e.opacity = ce(0, n.opacity !== void 0 ? n.opacity : 1, JT(r))),
      (e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, eP(r))))
    : i &&
      (e.opacity = ce(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < ZT; s++) {
    const a = `border${hy[s]}Radius`;
    let l = Qp(t, a),
      u = Qp(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Xp(l) === Xp(u)
        ? ((e[a] = Math.max(ce(Yp(l), Yp(u), r), 0)),
          (Mt.test(u) || Mt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Qp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const JT = my(0, 0.5, wv),
  eP = my(0.5, 0.95, Ze);
function my(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Br(e, t, r)));
}
function Zp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ot(e, t) {
  Zp(e.x, t.x), Zp(e.y, t.y);
}
function qp(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Jp(e, t, n, r, o) {
  return (
    (e -= t), (e = Ws(e, 1 / n, r)), o !== void 0 && (e = Ws(e, 1 / o, r)), e
  );
}
function tP(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Mt.test(t) &&
      ((t = parseFloat(t)), (t = ce(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ce(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Jp(e.min, t, n, a, o)),
    (e.max = Jp(e.max, t, n, a, o));
}
function eh(e, t, [n, r, o], i, s) {
  tP(e, t[n], t[r], t[o], t.scale, i, s);
}
const nP = ["x", "scaleX", "originX"],
  rP = ["y", "scaleY", "originY"];
function th(e, t, n, r) {
  eh(e.x, t, nP, n ? n.x : void 0, r ? r.x : void 0),
    eh(e.y, t, rP, n ? n.y : void 0, r ? r.y : void 0);
}
function nh(e) {
  return e.translate === 0 && e.scale === 1;
}
function gy(e) {
  return nh(e.x) && nh(e.y);
}
function rh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function oP(e, t) {
  return rh(e.x, t.x) && rh(e.y, t.y);
}
function oh(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function vy(e, t) {
  return oh(e.x, t.x) && oh(e.y, t.y);
}
function ih(e) {
  return et(e.x) / et(e.y);
}
function sh(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class iP {
  constructor() {
    this.members = [];
  }
  add(t) {
    pd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (hd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function sP(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: m,
      skewY: x,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      m && (r += `skewX(${m}deg) `),
      x && (r += `skewY(${x}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const aP = (e, t) => e.depth - t.depth;
class lP {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    pd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    hd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(aP),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function ds(e) {
  const t = Le(e) ? e.get() : e;
  return KC(t) ? t.toValue() : t;
}
function uP(e, t) {
  const n = Dt.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Tn(r), e(i - t));
    };
  return ie.read(r, !0), () => Tn(r);
}
function cP(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function dP(e, t, n) {
  const r = Le(e) ? e : ii(e);
  return r.start(fd("", r, t, n)), r.animation;
}
const Vn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Co = typeof window < "u" && window.MotionDebug !== void 0,
  hl = ["", "X", "Y", "Z"],
  fP = { visibility: "hidden" },
  ah = 1e3;
let pP = 0;
function ml(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function yy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Zv(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && yy(r);
}
function xy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = pP++),
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
            Co &&
              (Vn.totalNodes =
                Vn.resolvedTargetDeltas =
                Vn.recalculatedProjection =
                  0),
            this.nodes.forEach(gP),
            this.nodes.forEach(SP),
            this.nodes.forEach(CP),
            this.nodes.forEach(vP),
            Co && window.MotionDebug.record(Vn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new lP());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new md()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = cP(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = uP(f, 250)),
            cs.hasAnimatedSinceResize &&
              ((cs.hasAnimatedSinceResize = !1), this.nodes.forEach(uh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: m,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || RP,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !vy(this.targetLayout, x) || m,
                y = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y);
                const C = { ...qc(g, "layout"), onPlay: S, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || uh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Tn(this.updateProjection);
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
        this.nodes && this.nodes.forEach(TP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          yy(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(lh);
        return;
      }
      this.isUpdating || this.nodes.forEach(xP),
        (this.isUpdating = !1),
        this.nodes.forEach(wP),
        this.nodes.forEach(hP),
        this.nodes.forEach(mP),
        this.clearAllSnapshots();
      const a = Dt.now();
      (Ee.delta = Yt(0, 1e3 / 60, a - Ee.timestamp)),
        (Ee.timestamp = a),
        (Ee.isProcessing = !0),
        il.update.process(Ee),
        il.preRender.process(Ee),
        il.render.process(Ee),
        (Ee.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), xd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(yP), this.sharedNodes.forEach(PP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
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
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = me()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !gy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || _n(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        AP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return me();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(bP)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Sr(l.x, c.offset.x), Sr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = me();
      if (
        (ot(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && ot(l, s), Sr(l.x, d.offset.x), Sr(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = me();
      ot(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Cr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          _n(c.latestValues) && Cr(l, c.latestValues);
      }
      return _n(this.latestValues) && Cr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = me();
      ot(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !_n(u.latestValues)) continue;
        Ou(u.latestValues) && u.updateSnapshot();
        const c = me(),
          d = u.measurePageBox();
        ot(c, d),
          th(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return _n(this.latestValues) && th(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ee.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = me()),
              (this.relativeTargetOrigin = me()),
              Io(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox,
              ),
              ot(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = me()), (this.targetWithTransforms = me())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                NT(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ot(this.target, this.layout.layoutBox),
                  uy(this.target, this.targetDelta))
                : ot(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = me()),
                (this.relativeTargetOrigin = me()),
                Io(this.relativeTargetOrigin, this.target, m.target),
                ot(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Co && Vn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ou(this.parent.latestValues) ||
          ly(this.parent.latestValues)
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
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ee.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      ot(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      FT(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = me()));
      const { target: x } = a;
      if (!x) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (qp(this.prevProjectionDelta.x, this.projectionDelta.x),
          qp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Oo(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== m ||
          !sh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !sh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        Co && Vn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = wr()),
        (this.projectionDelta = wr()),
        (this.projectionDeltaWithTransform = wr());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = wr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = me(),
        m = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        g = m !== x,
        S = this.getStack(),
        p = !S || S.members.length <= 1,
        h = !!(g && !p && this.options.crossfade === !0 && !this.path.some(EP));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (C) => {
        const T = C / 1e3;
        ch(d.x, s.x, T),
          ch(d.y, s.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Io(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            kP(this.relativeTarget, this.relativeTargetOrigin, f, T),
            y && oP(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = me()),
            ot(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), qT(c, u, this.latestValues, T, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Tn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ie.update(() => {
          (cs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = dP(0, ah, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
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
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ah),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          wy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || me();
          const d = et(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = et(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        ot(a, l),
          Cr(a, c),
          Oo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new iP()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && ml("z", s, u, this.animationValues);
      for (let c = 0; c < hl.length; c++)
        ml(`rotate${hl[c]}`, s, u, this.animationValues),
          ml(`skew${hl[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return fP;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = ds(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = ds(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !_n(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = sP(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        c && (u.transform = c(f, u.transform));
      const { x: m, y: x } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${x.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0);
      for (const g in Hs) {
        if (f[g] === void 0) continue;
        const { correct: S, applyTo: p } = Hs[g],
          h = u.transform === "none" ? f[g] : S(f[g], d);
        if (p) {
          const y = p.length;
          for (let C = 0; C < y; C++) u[p[C]] = h;
        } else u[g] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? ds(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(lh),
        this.root.sharedNodes.clear();
    }
  };
}
function hP(e) {
  e.updateLayout();
}
function mP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? it((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            m = et(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : wy(i, n.layoutBox, r) &&
        it((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            m = et(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const a = wr();
    Oo(a, r, n.layoutBox);
    const l = wr();
    s ? Oo(l, e.applyTransform(o, !0), n.measuredBox) : Oo(l, r, n.layoutBox);
    const u = !gy(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const x = me();
          Io(x, n.layoutBox, f.layoutBox);
          const g = me();
          Io(g, r, m.layoutBox),
            vy(x, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function gP(e) {
  Co && Vn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function vP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function yP(e) {
  e.clearSnapshot();
}
function lh(e) {
  e.clearMeasurements();
}
function xP(e) {
  e.isLayoutDirty = !1;
}
function wP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function uh(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function SP(e) {
  e.resolveTargetDelta();
}
function CP(e) {
  e.calcProjection();
}
function TP(e) {
  e.resetSkewAndRotation();
}
function PP(e) {
  e.removeLeadSnapshot();
}
function ch(e, t, n) {
  (e.translate = ce(t.translate, 0, n)),
    (e.scale = ce(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function dh(e, t, n, r) {
  (e.min = ce(t.min, n.min, r)), (e.max = ce(t.max, n.max, r));
}
function kP(e, t, n, r) {
  dh(e.x, t.x, n.x, r), dh(e.y, t.y, n.y, r);
}
function EP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const RP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  fh = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ph = fh("applewebkit/") && !fh("chrome/") ? Math.round : Ze;
function hh(e) {
  (e.min = ph(e.min)), (e.max = ph(e.max));
}
function AP(e) {
  hh(e.x), hh(e.y);
}
function wy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !bT(ih(t), ih(n), 0.2))
  );
}
function bP(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const NP = xy({
    attachResizeListener: (e, t) => si(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  gl = { current: void 0 },
  Sy = xy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!gl.current) {
        const e = new NP({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (gl.current = e);
      }
      return gl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  MP = {
    pan: { Feature: HT },
    drag: { Feature: WT, ProjectionNode: Sy, MeasureLayout: py },
  };
function mh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    i = r[o];
  i && ie.postRender(() => i(t, xi(t)));
}
class DP extends Mn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = mT(
        t,
        (n) => (mh(this.node, n, "Start"), (r) => mh(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class jP extends Mn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
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
    this.unmount = yi(
      si(this.node.current, "focus", () => this.onFocus()),
      si(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function gh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    i = r[o];
  i && ie.postRender(() => i(t, xi(t)));
}
class LP extends Mn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = xT(
        t,
        (n) => (
          gh(this.node, n, "Start"),
          (r, { success: o }) => gh(this.node, r, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const _u = new WeakMap(),
  vl = new WeakMap(),
  OP = (e) => {
    const t = _u.get(e.target);
    t && t(e);
  },
  IP = (e) => {
    e.forEach(OP);
  };
function _P({ root: e, ...t }) {
  const n = e || document;
  vl.has(n) || vl.set(n, {});
  const r = vl.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(IP, { root: e, ...t })), r[o];
}
function VP(e, t, n) {
  const r = _P(t);
  return (
    _u.set(e, n),
    r.observe(e),
    () => {
      _u.delete(e), r.unobserve(e);
    }
  );
}
const FP = { some: 0, all: 1 };
class zP extends Mn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : FP[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return VP(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(BP(t, n)) && this.startObserver();
  }
  unmount() {}
}
function BP({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const UP = {
    inView: { Feature: zP },
    tap: { Feature: LP },
    focus: { Feature: jP },
    hover: { Feature: DP },
  },
  $P = { layout: { ProjectionNode: Sy, MeasureLayout: py } },
  wd = v.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  xa = v.createContext({}),
  Sd = typeof window < "u",
  Cy = Sd ? v.useLayoutEffect : v.useEffect,
  Ty = v.createContext({ strict: !1 });
function WP(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = v.useContext(xa),
    l = v.useContext(Ty),
    u = v.useContext(ya),
    c = v.useContext(wd).reducedMotion,
    d = v.useRef(null);
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const f = d.current,
    m = v.useContext(fy);
  f &&
    !f.projection &&
    o &&
    (f.type === "html" || f.type === "svg") &&
    HP(d.current, n, o, m);
  const x = v.useRef(!1);
  v.useInsertionEffect(() => {
    f && x.current && f.update(n, u);
  });
  const g = n[Qv],
    S = v.useRef(
      !!g &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, g)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, g)),
    );
  return (
    Cy(() => {
      f &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        xd.render(f.render),
        S.current && f.animationState && f.animationState.animateChanges());
    }),
    v.useEffect(() => {
      f &&
        (!S.current && f.animationState && f.animationState.animateChanges(),
        S.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, g);
          }),
          (S.current = !1)));
    }),
    f
  );
}
function HP(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Py(e.parent),
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && xr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Py(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Py(e.parent);
}
function KP(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : xr(n) && (n.current = r));
    },
    [t],
  );
}
function wa(e) {
  return ma(e.animate) || Zc.some((t) => ni(e[t]));
}
function ky(e) {
  return !!(wa(e) || e.variants);
}
function GP(e, t) {
  if (wa(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ni(n) ? n : void 0,
      animate: ni(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function YP(e) {
  const { initial: t, animate: n } = GP(e, v.useContext(xa));
  return v.useMemo(() => ({ initial: t, animate: n }), [vh(t), vh(n)]);
}
function vh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const yh = {
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
  Ur = {};
for (const e in yh) Ur[e] = { isEnabled: (t) => yh[e].some((n) => !!t[n]) };
function XP(e) {
  for (const t in e) Ur[t] = { ...Ur[t], ...e[t] };
}
const QP = Symbol.for("motionComponentSymbol");
function ZP({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && XP(e);
  function i(a, l) {
    let u;
    const c = { ...v.useContext(wd), ...a, layoutId: qP(a) },
      { isStatic: d } = c,
      f = YP(a),
      m = r(a, d);
    if (!d && Sd) {
      JP();
      const x = ek(c);
      (u = x.MeasureLayout),
        (f.visualElement = WP(o, m, c, t, x.ProjectionNode));
    }
    return w.jsxs(xa.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? w.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(o, a, KP(m, f.visualElement, l), m, d, f.visualElement),
      ],
    });
  }
  const s = v.forwardRef(i);
  return (s[QP] = o), s;
}
function qP({ layoutId: e }) {
  const t = v.useContext(yd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function JP(e, t) {
  v.useContext(Ty).strict;
}
function ek(e) {
  const { drag: t, layout: n } = Ur;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const tk = [
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
function Cd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(tk.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Ey(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Ry = new Set([
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
function Ay(e, t, n, r) {
  Ey(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(Ry.has(o) ? o : gd(o), t.attrs[o]);
}
function by(e, { layout: t, layoutId: n }) {
  return (
    tr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Hs[e] || e === "opacity"))
  );
}
function Td(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (Le(o[s]) ||
      (t.style && Le(t.style[s])) ||
      by(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return i;
}
function Ny(e, t, n) {
  const r = Td(e, t, n);
  for (const o in e)
    if (Le(e[o]) || Le(t[o])) {
      const i =
        mi.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function Pd(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function nk(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i,
) {
  const s = { latestValues: rk(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const My = (e) => (t, n) => {
  const r = v.useContext(xa),
    o = v.useContext(ya),
    i = () => nk(e, t, r, o);
  return n ? i() : Pd(i);
};
function rk(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = ds(i[f]);
  let { initial: s, animate: a } = e;
  const l = wa(e),
    u = ky(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !ma(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const x = Xc(e, f[m]);
      if (x) {
        const { transitionEnd: g, transition: S, ...p } = x;
        for (const h in p) {
          let y = p[h];
          if (Array.isArray(y)) {
            const C = c ? y.length - 1 : 0;
            y = y[C];
          }
          y !== null && (o[h] = y);
        }
        for (const h in g) o[h] = g[h];
      }
    }
  }
  return o;
}
const kd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Dy = () => ({ ...kd(), attrs: {} }),
  jy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  ok = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ik = mi.length;
function sk(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < ik; i++) {
    const s = mi[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = jy(a, id[s]);
      if (!l) {
        o = !1;
        const c = ok[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function Ed(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (tr.has(l)) {
      s = !0;
      continue;
    } else if (kv(l)) {
      o[l] = u;
      continue;
    } else {
      const c = jy(u, id[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = sk(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function xh(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function ak(e, t, n) {
  const r = xh(t, e.x, e.width),
    o = xh(n, e.y, e.height);
  return `${r} ${o}`;
}
const lk = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  uk = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ck(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? lk : uk;
  e[i.offset] = V.transform(-r);
  const s = V.transform(t),
    a = V.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Rd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
) {
  if ((Ed(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: m, dimensions: x } = e;
  f.transform && (x && (m.transform = f.transform), delete f.transform),
    x &&
      (o !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = ak(
        x,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && ck(f, s, a, l, !1);
}
const Ad = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  dk = {
    useVisualState: My({
      scrapeMotionValuesFromProps: Ny,
      createRenderState: Dy,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ie.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ie.render(() => {
            Rd(n, r, Ad(t.tagName), e.transformTemplate), Ay(t, n);
          });
      },
    }),
  },
  fk = {
    useVisualState: My({
      scrapeMotionValuesFromProps: Td,
      createRenderState: kd,
    }),
  };
function Ly(e, t, n) {
  for (const r in t) !Le(t[r]) && !by(r, n) && (e[r] = t[r]);
}
function pk({ transformTemplate: e }, t) {
  return v.useMemo(() => {
    const n = kd();
    return Ed(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function hk(e, t) {
  const n = e.style || {},
    r = {};
  return Ly(r, n, e), Object.assign(r, pk(e, t)), r;
}
function mk(e, t) {
  const n = {},
    r = hk(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const gk = new Set([
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
function Ks(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    gk.has(e)
  );
}
let Oy = (e) => !Ks(e);
function vk(e) {
  e && (Oy = (t) => (t.startsWith("on") ? !Ks(t) : e(t)));
}
try {
  vk(require("@emotion/is-prop-valid").default);
} catch {}
function yk(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((Oy(o) ||
        (n === !0 && Ks(o)) ||
        (!t && !Ks(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function xk(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = Dy();
    return (
      Rd(i, t, Ad(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Ly(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function wk(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Cd(n) ? xk : mk)(r, i, s, n),
      u = yk(r, typeof n == "string", e),
      c = n !== v.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = r,
      f = v.useMemo(() => (Le(d) ? d.get() : d), [d]);
    return v.createElement(n, { ...c, children: f });
  };
}
function Sk(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Cd(r) ? dk : fk),
      preloadedFeatures: e,
      useRender: wk(o),
      createVisualElement: t,
      Component: r,
    };
    return ZP(s);
  };
}
const Vu = { current: null },
  Iy = { current: !1 };
function Ck() {
  if (((Iy.current = !0), !!Sd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Vu.current = e.matches);
      e.addListener(t), t();
    } else Vu.current = !1;
}
function Tk(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (Le(o)) e.addValue(r, o);
    else if (Le(i)) e.addValue(r, ii(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, ii(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const wh = new WeakMap(),
  Pk = [...Av, De, Pn],
  kk = (e) => Pk.find(Rv(e)),
  Sh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class Ek {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = nd),
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
        const f = Dt.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), ie.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = wa(n)),
      (this.isVariantNode = ky(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const f in d) {
      const m = d[f];
      l[f] !== void 0 && Le(m) && m.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      wh.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Iy.current || Ck(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Vu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    wh.delete(this.current),
      this.projection && this.projection.unmount(),
      Tn(this.notifyUpdate),
      Tn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = tr.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ie.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ur) {
      const n = Ur[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : me();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Sh.length; r++) {
      const o = Sh[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = Tk(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
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
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ii(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (Tv(o) || Cv(o))
          ? (o = parseFloat(o))
          : !kk(o) && Pn.test(n) && (o = Iv(t, n)),
        this.setBaseTarget(t, Le(o) ? o.get() : o)),
      Le(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Xc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Le(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new md()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class _y extends Ek {
  constructor() {
    super(...arguments), (this.KeyframeResolver = _v);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Le(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Rk(e) {
  return window.getComputedStyle(e);
}
class Ak extends _y {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Ey);
  }
  readValueFromInstance(t, n) {
    if (tr.has(n)) {
      const r = sd(n);
      return (r && r.default) || 0;
    } else {
      const r = Rk(t),
        o = (kv(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return cy(t, n);
  }
  build(t, n, r) {
    Ed(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Td(t, n, r);
  }
}
class bk extends _y {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = me);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (tr.has(n)) {
      const r = sd(n);
      return (r && r.default) || 0;
    }
    return (n = Ry.has(n) ? n : gd(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ny(t, n, r);
  }
  build(t, n, r) {
    Rd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Ay(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Ad(t.tagName)), super.mount(t);
  }
}
const Nk = (e, t) =>
    Cd(e) ? new bk(t) : new Ak(t, { allowProjection: e !== v.Fragment }),
  Mk = Sk({ ...pT, ...UP, ...MP, ...$P }, Nk),
  ai = dS(Mk);
class Dk extends v.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function jk({ children: e, isPresent: t }) {
  const n = v.useId(),
    r = v.useRef(null),
    o = v.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = v.useContext(wd);
  return (
    v.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = o.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    w.jsx(Dk, {
      isPresent: t,
      childRef: r,
      sizeRef: o,
      children: v.cloneElement(e, { ref: r }),
    })
  );
}
const Lk = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = Pd(Ok),
    l = v.useId(),
    u = v.useCallback(
      (d) => {
        a.set(d, !0);
        for (const f of a.values()) if (!f) return;
        r && r();
      },
      [a, r],
    ),
    c = v.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: u,
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      i ? [Math.random(), u] : [n, u],
    );
  return (
    v.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    v.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = w.jsx(jk, { isPresent: n, children: e })),
    w.jsx(ya.Provider, { value: c, children: e })
  );
};
function Ok() {
  return new Map();
}
const Wi = (e) => e.key || "";
function Ch(e) {
  const t = [];
  return (
    v.Children.forEach(e, (n) => {
      v.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Vy = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: o,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
}) => {
  const a = v.useMemo(() => Ch(e), [e]),
    l = a.map(Wi),
    u = v.useRef(!0),
    c = v.useRef(a),
    d = Pd(() => new Map()),
    [f, m] = v.useState(a),
    [x, g] = v.useState(a);
  Cy(() => {
    (u.current = !1), (c.current = a);
    for (let h = 0; h < x.length; h++) {
      const y = Wi(x[h]);
      l.includes(y) ? d.delete(y) : d.get(y) !== !0 && d.set(y, !1);
    }
  }, [x, l.length, l.join("-")]);
  const S = [];
  if (a !== f) {
    let h = [...a];
    for (let y = 0; y < x.length; y++) {
      const C = x[y],
        T = Wi(C);
      l.includes(T) || (h.splice(y, 0, C), S.push(C));
    }
    s === "wait" && S.length && (h = S), g(Ch(h)), m(a);
    return;
  }
  const { forceRender: p } = v.useContext(yd);
  return w.jsx(w.Fragment, {
    children: x.map((h) => {
      const y = Wi(h),
        C = a === x || l.includes(y),
        T = () => {
          if (d.has(y)) d.set(y, !0);
          else return;
          let k = !0;
          d.forEach((P) => {
            P || (k = !1);
          }),
            k && (p == null || p(), g(c.current), o && o());
        };
      return w.jsx(
        Lk,
        {
          isPresent: C,
          initial: !u.current || r ? void 0 : !1,
          custom: C ? void 0 : n,
          presenceAffectsLayout: i,
          mode: s,
          onExitComplete: C ? void 0 : T,
          children: h,
        },
        y,
      );
    }),
  });
};
function Fy(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Fy(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function zy() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Fy(e)) && (r && (r += " "), (r += t));
  return r;
}
const bd = "-",
  Ik = (e) => {
    const t = Vk(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(bd);
        return a[0] === "" && a.length !== 1 && a.shift(), By(a, t) || _k(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  By = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? By(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(bd);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Th = /^\[(.+)\]$/,
  _k = (e) => {
    if (Th.test(e)) {
      const t = Th.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Vk = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      zk(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Fu(s, r, i, t);
      }),
      r
    );
  },
  Fu = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Ph(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Fk(o)) {
          Fu(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Fu(s, Ph(t, i), n, r);
      });
    });
  },
  Ph = (e, t) => {
    let n = e;
    return (
      t.split(bd).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Fk = (e) => e.isThemeGetter,
  zk = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  Bk = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Uy = "!",
  Uk = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let S = 0; S < a.length; S++) {
          let p = a[S];
          if (u === 0) {
            if (p === o && (r || a.slice(S, S + i) === t)) {
              l.push(a.slice(c, S)), (c = S + i);
              continue;
            }
            if (p === "/") {
              d = S;
              continue;
            }
          }
          p === "[" ? u++ : p === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          m = f.startsWith(Uy),
          x = m ? f.substring(1) : f,
          g = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: m,
          baseClassName: x,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  $k = (e) => {
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
  Wk = (e) => ({ cache: Bk(e.cacheSize), parseClassName: Uk(e), ...Ik(e) }),
  Hk = /\s+/,
  Kk = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(Hk);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: m,
        } = n(u);
      let x = !!m,
        g = r(x ? f.substring(0, m) : f);
      if (!g) {
        if (!x) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(f)), !g)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        x = !1;
      }
      const S = $k(c).join(":"),
        p = d ? S + Uy : S,
        h = p + g;
      if (i.includes(h)) continue;
      i.push(h);
      const y = o(g, x);
      for (let C = 0; C < y.length; ++C) {
        const T = y[C];
        i.push(p + T);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Gk() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = $y(t)) && (r && (r += " "), (r += n));
  return r;
}
const $y = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = $y(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Yk(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = Wk(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = Kk(l, n);
    return o(l, c), c;
  }
  return function () {
    return i(Gk.apply(null, arguments));
  };
}
const ne = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Wy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Xk = /^\d+\/\d+$/,
  Qk = new Set(["px", "full", "screen"]),
  Zk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  qk =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Jk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  eE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  tE =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  It = (e) => br(e) || Qk.has(e) || Xk.test(e),
  en = (e) => Zr(e, "length", uE),
  br = (e) => !!e && !Number.isNaN(Number(e)),
  yl = (e) => Zr(e, "number", br),
  ho = (e) => !!e && Number.isInteger(Number(e)),
  nE = (e) => e.endsWith("%") && br(e.slice(0, -1)),
  U = (e) => Wy.test(e),
  tn = (e) => Zk.test(e),
  rE = new Set(["length", "size", "percentage"]),
  oE = (e) => Zr(e, rE, Hy),
  iE = (e) => Zr(e, "position", Hy),
  sE = new Set(["image", "url"]),
  aE = (e) => Zr(e, sE, dE),
  lE = (e) => Zr(e, "", cE),
  mo = () => !0,
  Zr = (e, t, n) => {
    const r = Wy.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  uE = (e) => qk.test(e) && !Jk.test(e),
  Hy = () => !1,
  cE = (e) => eE.test(e),
  dE = (e) => tE.test(e),
  fE = () => {
    const e = ne("colors"),
      t = ne("spacing"),
      n = ne("blur"),
      r = ne("brightness"),
      o = ne("borderColor"),
      i = ne("borderRadius"),
      s = ne("borderSpacing"),
      a = ne("borderWidth"),
      l = ne("contrast"),
      u = ne("grayscale"),
      c = ne("hueRotate"),
      d = ne("invert"),
      f = ne("gap"),
      m = ne("gradientColorStops"),
      x = ne("gradientColorStopPositions"),
      g = ne("inset"),
      S = ne("margin"),
      p = ne("opacity"),
      h = ne("padding"),
      y = ne("saturate"),
      C = ne("scale"),
      T = ne("sepia"),
      k = ne("skew"),
      P = ne("space"),
      E = ne("translate"),
      M = () => ["auto", "contain", "none"],
      b = () => ["auto", "hidden", "clip", "visible", "scroll"],
      _ = () => ["auto", U, t],
      L = () => [U, t],
      $ = () => ["", It, en],
      z = () => ["auto", br, U],
      K = () => [
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
      F = () => ["solid", "dashed", "dotted", "double", "none"],
      O = () => [
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
      R = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      N = () => ["", "0", U],
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      B = () => [br, U];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [mo],
        spacing: [It, en],
        blur: ["none", "", tn, U],
        brightness: B(),
        borderColor: [e],
        borderRadius: ["none", "", "full", tn, U],
        borderSpacing: L(),
        borderWidth: $(),
        contrast: B(),
        grayscale: N(),
        hueRotate: B(),
        invert: N(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [nE, en],
        inset: _(),
        margin: _(),
        opacity: B(),
        padding: L(),
        saturate: B(),
        scale: B(),
        sepia: N(),
        skew: B(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", U] }],
        container: ["container"],
        columns: [{ columns: [tn] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
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
        "object-position": [{ object: [...K(), U] }],
        overflow: [{ overflow: b() }],
        "overflow-x": [{ "overflow-x": b() }],
        "overflow-y": [{ "overflow-y": b() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ho, U] }],
        basis: [{ basis: _() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", U] }],
        grow: [{ grow: N() }],
        shrink: [{ shrink: N() }],
        order: [{ order: ["first", "last", "none", ho, U] }],
        "grid-cols": [{ "grid-cols": [mo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ho, U] }, U] }],
        "col-start": [{ "col-start": z() }],
        "col-end": [{ "col-end": z() }],
        "grid-rows": [{ "grid-rows": [mo] }],
        "row-start-end": [{ row: ["auto", { span: [ho, U] }, U] }],
        "row-start": [{ "row-start": z() }],
        "row-end": [{ "row-end": z() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", U] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", U] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...R()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...R(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...R(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t] }],
        "min-w": [{ "min-w": [U, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              U,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [tn] },
              tn,
            ],
          },
        ],
        h: [{ h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [U, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", tn, en] }],
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
              yl,
            ],
          },
        ],
        "font-family": [{ font: [mo] }],
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
              U,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", br, yl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              It,
              U,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", U] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", U] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...F(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", It, en] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", It, U] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
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
              U,
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
        content: [{ content: ["none", U] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...K(), iE] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", oE] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              aE,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...F(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: F() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...F()] }],
        "outline-offset": [{ "outline-offset": [It, U] }],
        "outline-w": [{ outline: [It, en] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [It, en] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", tn, lE] }],
        "shadow-color": [{ shadow: [mo] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [...O(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": O() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", tn, U] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [T] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [T] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
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
              U,
            ],
          },
        ],
        duration: [{ duration: B() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", U] }],
        delay: [{ delay: B() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", U] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [ho, U] }],
        "translate-x": [{ "translate-x": [E] }],
        "translate-y": [{ "translate-y": [E] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
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
              U,
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
              U,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", U] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [It, en, yl] }],
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
  pE = Yk(fE);
function xe(...e) {
  return pE(zy(e));
}
function hE({
  text: e,
  duration: t = 0.5,
  delayMultiple: n = 0.04,
  framerProps: r = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className: o,
}) {
  return w.jsx("div", {
    className: "flex justify-center space-x-0 md:space-x-1",
    children: w.jsx(Vy, {
      children: e
        .split("")
        .map((i, s) =>
          w.jsx(
            ai.h1,
            {
              initial: "hidden",
              animate: "visible",
              exit: "hidden",
              variants: r,
              transition: { duration: t, delay: s * n },
              className: xe("drop-shadow-sm text-xs md:text-base", o),
              children: i === " " ? w.jsx("span", { children: " " }) : i,
            },
            s,
          ),
        ),
    }),
  });
}
function mE() {
  return w.jsx("div", {
    className:
      "pt-10 md:pt-14 flex align-middle flex-col items-center px-4 md:px-0 ",
    children: w.jsxs("div", {
      className:
        "text-center space-y-4 md:space-y-5 max-w-sm md:max-w-2xl mx-auto shadow-2xl backdrop-blur-sm bg-gradient-to-r from-black/10 via-black/20 to-black/10 p-2 md:p-4 rounded-2xl",
      children: [
        w.jsx(ai.h1, {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          className:
            "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-blue-50 dark:text-white border-black dark:border-white tracking-tight",
          children: "Mainosmestari",
        }),
        w.jsx(hE, {
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
const gE = ({ apiUrl: e }) => {
    const [t, n] = v.useState(""),
      [r, o] = v.useState(!1),
      [i, s] = v.useState(!1);
    return {
      adText: t,
      setAdText: n,
      adTextLoading: r,
      isCopied: i,
      generateAdText: async (u, c) => {
        o(!0);
        try {
          const d = await fetch(`${e}/api/ads/generateFinAdText`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: u, options: c }),
          });
          if (!d.ok) throw new Error(`HTTP error! status: ${d.status}`);
          const f = await d.json();
          n(f.generatedAdText);
        } catch (d) {
          throw (console.error("Virhe mainostekstin generoinnissa:", d), d);
        } finally {
          o(!1);
        }
      },
      handleCopy: () => {
        navigator.clipboard
          .writeText(t)
          .then(() => {
            s(!0), setTimeout(() => s(!1), 2e3);
          })
          .catch((u) => {
            console.error("Kopiointi epäonnistui:", u);
          });
      },
    };
  },
  vE = ({ apiUrl: e }) => {
    const [t, n] = v.useState(!1),
      [r, o] = v.useState(""),
      [i, s] = v.useState(""),
      [a, l] = v.useState("");
    return {
      loading: t,
      imageUrl: r,
      loadingStatus: i,
      setLoadingStatus: s,
      setLoading: n,
      imageDescription: a,
      handleSubmit: async (f, m, x, g) => {
        f.preventDefault(), o(""), n(!0), s("Lähetetään kuvaa...");
        const S = new FormData();
        S.append("img", m),
          S.append("prompt", x),
          S.append("creativity", g.toString());
        try {
          const p = await fetch(`${e}/api/ads/image`, {
            method: "POST",
            body: S,
          });
          if (!p.ok) throw new Error(`HTTP error! status: ${p.status}`);
          const h = await p.json(),
            y = h.imageId,
            C = h.description;
          if ((l(C), !h.imageId))
            throw new Error("No image ID received from server");
          let T = !0;
          for (s("Generoidaan kuvaa..."); T; ) {
            const k = new FormData();
            k.append("imageId", y);
            const P = await fetch(`${e}/api/ads/getimage`, {
              method: "POST",
              body: k,
            });
            if (!P.ok) throw new Error(`HTTP error! status: ${P.status}`);
            const E = await P.json();
            if (!E.image || E.image === 202) {
              await new Promise((M) => setTimeout(M, 5e3));
              continue;
            }
            if (E.image) {
              const M = `data:image/png;base64,${E.image}`;
              return (
                o(M), (T = !1), { success: !0, newDescription: C, imageId: y }
              );
            } else throw new Error("Kuvan hakeminen epäonnistui");
          }
          throw new Error("Kuvan hakeminen epäonnistui");
        } catch (p) {
          throw (console.error("Virhe lähetyksessä:", p), p);
        } finally {
          s(""), n(!1);
        }
      },
      testImageDownload: async (f) => {
        try {
          o(""),
            n(!0),
            s("Lähetetään kuvaa..."),
            await new Promise((p) => setTimeout(p, 1500));
          const m = new FileReader(),
            x = new Promise((p, h) => {
              (m.onload = () => p(m.result)), (m.onerror = h);
            });
          m.readAsDataURL(f);
          const g = await x;
          s("Generoidaan kuvaa..."),
            await new Promise((p) => setTimeout(p, 2e3));
          const S =
            "This image shows a modern piece of furniture. It appears to be a sleek and contemporary design with clean lines and a minimalist aesthetic. The furniture has a smooth surface finish and appears to be well-crafted with attention to detail. The overall style would complement a modern living space or office environment.";
          return o(g), l(S), S;
        } catch (m) {
          throw (console.error("Error in test image:", m), m);
        } finally {
          n(!1), s("");
        }
      },
      downloadImage: async (f, m) => {
        try {
          if (!r || !f || !m) {
            alert("Please select a platform and format before downloading.");
            return;
          }
          if (f === "original") {
            const p = document.createElement("a");
            (p.href = r), (p.download = "original_image.png"), p.click();
            return;
          }
          const x = await fetch(`${e}/api/image/scale`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageData: r, platform: f, format: m }),
          });
          if (!x.ok) throw new Error("Failed to scale image");
          const g = await x.json(),
            S = document.createElement("a");
          (S.href = g.scaledImage), (S.download = `${f}_${m}.png`), S.click();
        } catch (x) {
          throw (console.error("Error downloading image:", x), x);
        }
      },
      setImageUrl: o,
    };
  },
  kh = (e) => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(e.type))
      return "Vain JPEG, PNG ja WEBP kuvat ovat tuettuja.";
    const n = 4 * 1024 * 1024;
    return e.size > n ? "Kuvan maksimikoko on 4MB" : null;
  },
  yE = () => {
    const [e, t] = v.useState([]),
      [n, r] = v.useState(0),
      o = v.useRef(null);
    return {
      images: e,
      inputKey: n,
      setImages: t,
      fileInputRef: o,
      handleFileChange: (u) => {
        var f, m;
        const c = (f = u.target.files) == null ? void 0 : f[0];
        if (!c) return;
        const d = kh(c);
        if (d) {
          alert(d);
          return;
        }
        try {
          (m = e[0]) != null && m.preview && URL.revokeObjectURL(e[0].preview);
          const x = { file: c, preview: URL.createObjectURL(c) };
          t([x]);
        } catch (x) {
          console.error("Virhe kuvan käsittelyssä:", x),
            alert("Kuvan lataaminen epäonnistui");
        }
      },
      handleRemoveImage: () => {
        var u;
        (u = e[0]) != null && u.preview && URL.revokeObjectURL(e[0].preview),
          t([]),
          r((c) => c + 1);
      },
      handleDrop: (u) => {
        var m;
        u.preventDefault();
        const c = u.dataTransfer.files[0],
          d = kh(c);
        if (d) {
          alert(d);
          return;
        }
        (m = e[0]) != null && m.preview && URL.revokeObjectURL(e[0].preview);
        const f = { file: c, preview: URL.createObjectURL(c) };
        t([f]);
      },
      handleDragOver: (u) => {
        u.preventDefault();
      },
    };
  },
  Ky = ({ apiUrl: e }) => {
    const [t, n] = v.useState([]),
      [r, o] = v.useState(!1),
      i = v.useCallback((c) => {
        const f = Date.now(),
          m = c.filter((x) => f - x.timestamp < 864e5);
        return (
          m.length !== c.length &&
            (console.log("Removed expired images"),
            localStorage.setItem("recentImages", JSON.stringify(m))),
          m
        );
      }, []),
      s = v.useCallback(
        async (c) => {
          const d = new FormData();
          d.append("imageId", c);
          const f = await fetch(`${e}/api/ads/getimage`, {
            method: "POST",
            body: d,
          });
          if (!f.ok) throw new Error(`HTTP error! status: ${f.status}`);
          const m = await f.json();
          return m.image && m.image !== 202
            ? `data:image/png;base64,${m.image}`
            : null;
        },
        [e],
      ),
      a = v.useCallback(async () => {
        o(!0);
        try {
          const c = localStorage.getItem("recentImages"),
            d = c ? JSON.parse(c) : [],
            f = i(d),
            x = (
              await Promise.all(
                f.map(async (g) => {
                  try {
                    const S = await s(g.id);
                    return { ...g, imageUrl: S };
                  } catch (S) {
                    return (
                      console.error(`Failed to fetch image ${g.id}:`, S), null
                    );
                  }
                }),
              )
            ).filter((g) => g !== null);
          if ((n(x), x.length !== f.length)) {
            const g = x.map(({ id: S, timestamp: p }) => ({
              id: S,
              timestamp: p,
            }));
            localStorage.setItem("recentImages", JSON.stringify(g));
          }
        } catch (c) {
          console.error("Error loading recent images:", c);
        } finally {
          o(!1);
        }
      }, [s, i]),
      l = v.useCallback(
        (c) => {
          const d = localStorage.getItem("recentImages"),
            f = d ? JSON.parse(d) : [],
            m = i(f),
            x = [{ id: c, timestamp: Date.now() }, ...m.slice(0, 2)];
          localStorage.setItem("recentImages", JSON.stringify(x));
          const g = x.map((S) => ({ ...S, imageUrl: null }));
          n(g);
        },
        [i],
      ),
      u = v.useCallback((c, d = "image.png") => {
        const f = document.createElement("a");
        (f.href = c),
          (f.download = d),
          document.body.appendChild(f),
          f.click(),
          document.body.removeChild(f);
      }, []);
    return (
      v.useEffect(() => {
        const c = localStorage.getItem("recentImages");
        if (c) {
          const d = JSON.parse(c),
            f = i(d);
          n(f.map((m) => ({ ...m, imageUrl: null }))), f.length > 0 && a();
        }
      }, [a, i]),
      {
        recentImages: t,
        loading: r,
        addRecentImage: l,
        loadRecentImages: a,
        downloadImage: u,
      }
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Gy = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wE = {
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
 */ const SE = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    v.createElement(
      "svg",
      {
        ref: l,
        ...wE,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Gy("lucide", o),
        ...a,
      },
      [
        ...s.map(([u, c]) => v.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tt = (e, t) => {
  const n = v.forwardRef(({ className: r, ...o }, i) =>
    v.createElement(SE, {
      ref: i,
      iconNode: t,
      className: Gy(`lucide-${xE(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CE = Tt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TE = Tt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yy = Tt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PE = Tt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kE = Tt("Copy", [
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
 */ const EE = Tt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nr = Tt("Image", [
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
 */ const Xy = Tt("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RE = Tt("Share2", [
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
 */ const AE = Tt("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bE = Tt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  NE = [
    { key: "durability", label: "Kestävyys & laadukkuus" },
    { key: "repairability", label: "Korjattavuus" },
    { key: "maintainability", label: "Huollettavuus" },
    { key: "upgradability", label: "Päivitettävyys" },
    { key: "recyclability", label: "Säilyttää arvon (kierrätettävyys)" },
  ];
function ME(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qy(...e) {
  return (t) => e.forEach((n) => ME(n, t));
}
function ve(...e) {
  return v.useCallback(Qy(...e), e);
}
var $r = v.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = v.Children.toArray(n),
    i = o.find(DE);
  if (i) {
    const s = i.props.children,
      a = o.map((l) =>
        l === i
          ? v.Children.count(s) > 1
            ? v.Children.only(null)
            : v.isValidElement(s)
              ? s.props.children
              : null
          : l,
      );
    return w.jsx(zu, {
      ...r,
      ref: t,
      children: v.isValidElement(s) ? v.cloneElement(s, void 0, a) : null,
    });
  }
  return w.jsx(zu, { ...r, ref: t, children: n });
});
$r.displayName = "Slot";
var zu = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const o = LE(n);
    return v.cloneElement(n, { ...jE(r, n.props), ref: t ? Qy(t, o) : o });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
zu.displayName = "SlotClone";
var Zy = ({ children: e }) => w.jsx(w.Fragment, { children: e });
function DE(e) {
  return v.isValidElement(e) && e.type === Zy;
}
function jE(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function LE(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var OE = [
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
  ae = OE.reduce((e, t) => {
    const n = v.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? $r : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        w.jsx(a, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function IE(e, t) {
  e && Xr.flushSync(() => e.dispatchEvent(t));
}
var _E = "Label",
  qy = v.forwardRef((e, t) =>
    w.jsx(ae.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
qy.displayName = _E;
var Jy = qy;
const Eh = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Rh = zy,
  e0 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Rh(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const f = Eh(c) || Eh(d);
        return o[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...m } = c;
              return Object.entries(m).every((x) => {
                let [g, S] = x;
                return Array.isArray(S)
                  ? S.includes({ ...i, ...a }[g])
                  : { ...i, ...a }[g] === S;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return Rh(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  VE = e0(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Nd = v.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(Jy, { ref: n, className: xe(VE(), e), ...t }),
  );
Nd.displayName = Jy.displayName;
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Md(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = v.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (d) => {
      var p;
      const { scope: f, children: m, ...x } = d,
        g = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a,
        S = v.useMemo(() => x, Object.values(x));
      return w.jsx(g.Provider, { value: S, children: m });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var g;
      const m = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        x = v.useContext(m);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, FE(o, ...t)];
}
function FE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Xt(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function Gs({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = zE({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = Xt(n),
    l = v.useCallback(
      (u) => {
        if (i) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && a(d);
        } else o(u);
      },
      [i, e, o, a],
    );
  return [s, l];
}
function zE({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    o = v.useRef(r),
    i = Xt(t);
  return (
    v.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
function t0(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var Ve =
  globalThis != null && globalThis.document ? v.useLayoutEffect : () => {};
function n0(e) {
  const [t, n] = v.useState(void 0);
  return (
    Ve(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Dd = "Switch",
  [BE, Rb] = Md(Dd),
  [UE, $E] = BE(Dd),
  r0 = v.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        name: r,
        checked: o,
        defaultChecked: i,
        required: s,
        disabled: a,
        value: l = "on",
        onCheckedChange: u,
        form: c,
        ...d
      } = e,
      [f, m] = v.useState(null),
      x = ve(t, (y) => m(y)),
      g = v.useRef(!1),
      S = f ? c || !!f.closest("form") : !0,
      [p = !1, h] = Gs({ prop: o, defaultProp: i, onChange: u });
    return w.jsxs(UE, {
      scope: n,
      checked: p,
      disabled: a,
      children: [
        w.jsx(ae.button, {
          type: "button",
          role: "switch",
          "aria-checked": p,
          "aria-required": s,
          "data-state": s0(p),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...d,
          ref: x,
          onClick: q(e.onClick, (y) => {
            h((C) => !C),
              S &&
                ((g.current = y.isPropagationStopped()),
                g.current || y.stopPropagation());
          }),
        }),
        S &&
          w.jsx(WE, {
            control: f,
            bubbles: !g.current,
            name: r,
            value: l,
            checked: p,
            required: s,
            disabled: a,
            form: c,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
r0.displayName = Dd;
var o0 = "SwitchThumb",
  i0 = v.forwardRef((e, t) => {
    const { __scopeSwitch: n, ...r } = e,
      o = $E(o0, n);
    return w.jsx(ae.span, {
      "data-state": s0(o.checked),
      "data-disabled": o.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
i0.displayName = o0;
var WE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e,
    i = v.useRef(null),
    s = t0(n),
    a = n0(t);
  return (
    v.useEffect(() => {
      const l = i.current,
        u = window.HTMLInputElement.prototype,
        d = Object.getOwnPropertyDescriptor(u, "checked").set;
      if (s !== n && d) {
        const f = new Event("click", { bubbles: r });
        d.call(l, n), l.dispatchEvent(f);
      }
    }, [s, n, r]),
    w.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function s0(e) {
  return e ? "checked" : "unchecked";
}
var a0 = r0,
  HE = i0;
const jd = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(a0, {
    className: xe(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e,
    ),
    ...t,
    ref: n,
    children: w.jsx(HE, {
      className: xe(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
jd.displayName = a0.displayName;
const KE = ({
    isAdText: e,
    onCheckedChange: t,
    selectedOptions: n,
    onOptionChange: r,
  }) =>
    w.jsxs(w.Fragment, {
      children: [
        w.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [
            w.jsx(jd, {
              id: "adprompt",
              className: "switch",
              checked: e,
              onCheckedChange: t,
            }),
            w.jsx(Nd, {
              htmlFor: "adprompt",
              className: "text-sm",
              children: "Generoi mainosteksti",
            }),
          ],
        }),
        e &&
          w.jsxs("div", {
            className: "flex flex-col space-y-2 mt-4",
            children: [
              w.jsx("h2", {
                className: "font-bold",
                children: "Kiertotalousnäkökulma",
              }),
              NE.map(({ key: o, label: i }) =>
                w.jsxs(
                  "label",
                  {
                    className: "flex items-center space-x-2",
                    children: [
                      w.jsx("input", {
                        type: "checkbox",
                        value: o,
                        checked: n.includes(o),
                        onChange: r,
                        className: "rounded border-gray-300",
                      }),
                      w.jsx("span", { children: i }),
                    ],
                  },
                  o,
                ),
              ),
            ],
          }),
      ],
    }),
  xl = ({ children: e, stepKey: t }) =>
    w.jsx(
      ai.div,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
        transition: { duration: 0.3 },
        children: e,
      },
      t,
    );
function GE(e) {
  return w.jsx("svg", {
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
    children: w.jsx("path", { d: "M5 13l4 4L19 7" }),
  });
}
function YE(e) {
  return w.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      w.jsx("title", { children: "Instagram" }),
      w.jsx("path", {
        d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
      }),
    ],
  });
}
function XE(e) {
  return w.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      w.jsx("title", { children: "Facebook" }),
      w.jsx("path", {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
      }),
    ],
  });
}
function QE(e) {
  return w.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      w.jsx("title", { children: "TikTok" }),
      w.jsx("path", {
        d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
      }),
    ],
  });
}
function ZE(e) {
  return w.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      w.jsx("title", { children: "X" }),
      w.jsx("path", {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      }),
    ],
  });
}
const qE = e0(
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
  fn = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? $r : "button";
      return w.jsx(s, {
        className: xe(qE({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    },
  );
fn.displayName = "Button";
const JE = ({ onFileChange: e, onDrop: t, onDragOver: n, inputKey: r }) =>
    w.jsxs("div", {
      className:
        "border-2 border-dashed border-zinc-200 rounded-lg p-4 dark:border-zinc-800",
      onDrop: t,
      onDragOver: n,
      children: [
        w.jsxs("div", {
          className: "flex items-center justify-center space-x-2",
          children: [
            w.jsx(AE, {
              className: "h-6 w-6 text-zinc-500 dark:text-zinc-400",
            }),
            w.jsx("p", {
              className: "text-zinc-500 dark:text-zinc-400",
              children: "Vedä ja pudota kuva tänne",
            }),
          ],
        }),
        w.jsxs("div", {
          className: "text-center mt-2",
          children: [
            w.jsx(
              "input",
              {
                name: "fileInput",
                id: "fileInput",
                type: "file",
                accept: "image/*",
                onChange: e,
                style: { display: "none" },
              },
              r,
            ),
            w.jsx("label", {
              htmlFor: "fileInput",
              children: w.jsx(fn, {
                type: "button",
                variant: "outline",
                onClick: (o) => {
                  var i;
                  o.preventDefault(),
                    (i = document.getElementById("fileInput")) == null ||
                      i.click();
                },
                children: "Tai selaa tiedostoja",
              }),
            }),
          ],
        }),
      ],
    }),
  _o = v.forwardRef(({ className: e, ...t }, n) =>
    w.jsx("div", {
      ref: n,
      className: xe("rounded-xl border bg-card text-card-foreground shadow", e),
      ...t,
    }),
  );
_o.displayName = "Card";
const Ld = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", {
    ref: n,
    className: xe("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
Ld.displayName = "CardHeader";
const Od = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", {
    ref: n,
    className: xe("font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
Od.displayName = "CardTitle";
const e2 = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", {
    ref: n,
    className: xe("text-sm text-muted-foreground", e),
    ...t,
  }),
);
e2.displayName = "CardDescription";
const Vo = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", { ref: n, className: xe("p-6 pt-0", e), ...t }),
);
Vo.displayName = "CardContent";
const t2 = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", {
    ref: n,
    className: xe("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
t2.displayName = "CardFooter";
const n2 = ({ apiUrl: e, refreshTrigger: t }) => {
  const {
    recentImages: n,
    loading: r,
    downloadImage: o,
    loadRecentImages: i,
  } = Ky({ apiUrl: e });
  return (
    v.useEffect(() => {
      i();
    }, [i, t]),
    n.length === 0
      ? null
      : w.jsxs(_o, {
          className: "shadow-lg",
          children: [
            w.jsx(Ld, {
              children: w.jsx(Od, {
                className: "text-lg",
                children: "Viimeisimmät kuvat",
              }),
            }),
            w.jsx(Vo, {
              children: w.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: n.map((s, a) =>
                  w.jsx(
                    "div",
                    {
                      className: "relative group",
                      children:
                        r && !s.imageUrl
                          ? w.jsx("div", {
                              className:
                                "flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-800 rounded-lg",
                              children: w.jsx(Xy, {
                                className: "h-6 w-6 animate-spin",
                              }),
                            })
                          : s.imageUrl
                            ? w.jsxs("div", {
                                className: "relative",
                                children: [
                                  w.jsx("img", {
                                    src: s.imageUrl,
                                    alt: `Recent image ${a + 1}`,
                                    className:
                                      "w-full h-48 object-cover rounded-lg",
                                  }),
                                  w.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                    children: w.jsx(fn, {
                                      variant: "ghost",
                                      size: "icon",
                                      className: "text-white",
                                      onClick: () =>
                                        o(s.imageUrl, `image-${a + 1}.png`),
                                      children: w.jsx(EE, {
                                        className: "h-5 w-5",
                                      }),
                                    }),
                                  }),
                                ],
                              })
                            : w.jsx("div", {
                                className:
                                  "flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-800 rounded-lg",
                                children: w.jsx("p", {
                                  className: "text-sm text-gray-500",
                                  children: "Kuvaa ei löytynyt",
                                }),
                              }),
                    },
                    s.id,
                  ),
                ),
              }),
            }),
          ],
        })
  );
};
function Ah(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function r2(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = v.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(d) {
      const { scope: f, children: m, ...x } = d,
        g = (f == null ? void 0 : f[e][l]) || a,
        S = v.useMemo(() => x, Object.values(x));
      return w.jsx(g.Provider, { value: S, children: m });
    }
    function c(d, f) {
      const m = (f == null ? void 0 : f[e][l]) || a,
        x = v.useContext(m);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, c];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, o2(o, ...t)];
}
function o2(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function i2(e) {
  const t = e + "CollectionProvider",
    [n, r] = r2(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: x, children: g } = m,
        S = nn.useRef(null),
        p = nn.useRef(new Map()).current;
      return w.jsx(o, { scope: x, itemMap: p, collectionRef: S, children: g });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = nn.forwardRef((m, x) => {
      const { scope: g, children: S } = m,
        p = i(a, g),
        h = ve(x, p.collectionRef);
      return w.jsx($r, { ref: h, children: S });
    });
  l.displayName = a;
  const u = e + "CollectionItemSlot",
    c = "data-radix-collection-item",
    d = nn.forwardRef((m, x) => {
      const { scope: g, children: S, ...p } = m,
        h = nn.useRef(null),
        y = ve(x, h),
        C = i(u, g);
      return (
        nn.useEffect(
          () => (
            C.itemMap.set(h, { ref: h, ...p }), () => void C.itemMap.delete(h)
          ),
        ),
        w.jsx($r, { [c]: "", ref: y, children: S })
      );
    });
  d.displayName = u;
  function f(m) {
    const x = i(e + "CollectionConsumer", m);
    return nn.useCallback(() => {
      const S = x.collectionRef.current;
      if (!S) return [];
      const p = Array.from(S.querySelectorAll(`[${c}]`));
      return Array.from(x.itemMap.values()).sort(
        (C, T) => p.indexOf(C.ref.current) - p.indexOf(T.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: d }, f, r];
}
var s2 = v.createContext(void 0);
function a2(e) {
  const t = v.useContext(s2);
  return e || t || "ltr";
}
function l2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var u2 = "DismissableLayer",
  Bu = "dismissableLayer.update",
  c2 = "dismissableLayer.pointerDownOutside",
  d2 = "dismissableLayer.focusOutside",
  bh,
  l0 = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Id = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = v.useContext(l0),
      [c, d] = v.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = v.useState({}),
      x = ve(t, (P) => d(P)),
      g = Array.from(u.layers),
      [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = g.indexOf(S),
      h = c ? g.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = h >= p,
      T = h2((P) => {
        const E = P.target,
          M = [...u.branches].some((b) => b.contains(E));
        !C ||
          M ||
          (o == null || o(P),
          s == null || s(P),
          P.defaultPrevented || a == null || a());
      }, f),
      k = m2((P) => {
        const E = P.target;
        [...u.branches].some((b) => b.contains(E)) ||
          (i == null || i(P),
          s == null || s(P),
          P.defaultPrevented || a == null || a());
      }, f);
    return (
      l2((P) => {
        h === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && a && (P.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((bh = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Nh(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = bh);
            }
          );
      }, [c, f, n, u]),
      v.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Nh());
        },
        [c, u],
      ),
      v.useEffect(() => {
        const P = () => m({});
        return (
          document.addEventListener(Bu, P),
          () => document.removeEventListener(Bu, P)
        );
      }, []),
      w.jsx(ae.div, {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: q(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: q(e.onPointerDownCapture, T.onPointerDownCapture),
      })
    );
  });
Id.displayName = u2;
var f2 = "DismissableLayerBranch",
  p2 = v.forwardRef((e, t) => {
    const n = v.useContext(l0),
      r = v.useRef(null),
      o = ve(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      w.jsx(ae.div, { ...e, ref: o })
    );
  });
p2.displayName = f2;
function h2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xt(e),
    r = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              u0(c2, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function m2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          u0(d2, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Nh() {
  const e = new CustomEvent(Bu);
  document.dispatchEvent(e);
}
function u0(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? IE(o, i) : o.dispatchEvent(i);
}
var wl = 0;
function g2() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Mh()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Mh()),
      wl++,
      () => {
        wl === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          wl--;
      }
    );
  }, []);
}
function Mh() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Sl = "focusScope.autoFocusOnMount",
  Cl = "focusScope.autoFocusOnUnmount",
  Dh = { bubbles: !1, cancelable: !0 },
  v2 = "FocusScope",
  c0 = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = v.useState(null),
      u = Xt(o),
      c = Xt(i),
      d = v.useRef(null),
      f = ve(t, (g) => l(g)),
      m = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.useEffect(() => {
      if (r) {
        let g = function (y) {
            if (m.paused || !a) return;
            const C = y.target;
            a.contains(C) ? (d.current = C) : on(d.current, { select: !0 });
          },
          S = function (y) {
            if (m.paused || !a) return;
            const C = y.relatedTarget;
            C !== null && (a.contains(C) || on(d.current, { select: !0 }));
          },
          p = function (y) {
            if (document.activeElement === document.body)
              for (const T of y) T.removedNodes.length > 0 && on(a);
          };
        document.addEventListener("focusin", g),
          document.addEventListener("focusout", S);
        const h = new MutationObserver(p);
        return (
          a && h.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", S),
              h.disconnect();
          }
        );
      }
    }, [r, a, m.paused]),
      v.useEffect(() => {
        if (a) {
          Lh.add(m);
          const g = document.activeElement;
          if (!a.contains(g)) {
            const p = new CustomEvent(Sl, Dh);
            a.addEventListener(Sl, u),
              a.dispatchEvent(p),
              p.defaultPrevented ||
                (y2(T2(d0(a)), { select: !0 }),
                document.activeElement === g && on(a));
          }
          return () => {
            a.removeEventListener(Sl, u),
              setTimeout(() => {
                const p = new CustomEvent(Cl, Dh);
                a.addEventListener(Cl, c),
                  a.dispatchEvent(p),
                  p.defaultPrevented || on(g ?? document.body, { select: !0 }),
                  a.removeEventListener(Cl, c),
                  Lh.remove(m);
              }, 0);
          };
        }
      }, [a, u, c, m]);
    const x = v.useCallback(
      (g) => {
        if ((!n && !r) || m.paused) return;
        const S = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          p = document.activeElement;
        if (S && p) {
          const h = g.currentTarget,
            [y, C] = x2(h);
          y && C
            ? !g.shiftKey && p === C
              ? (g.preventDefault(), n && on(y, { select: !0 }))
              : g.shiftKey &&
                p === y &&
                (g.preventDefault(), n && on(C, { select: !0 }))
            : p === h && g.preventDefault();
        }
      },
      [n, r, m.paused],
    );
    return w.jsx(ae.div, { tabIndex: -1, ...s, ref: f, onKeyDown: x });
  });
c0.displayName = v2;
function y2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((on(r, { select: t }), document.activeElement !== n)) return;
}
function x2(e) {
  const t = d0(e),
    n = jh(t, e),
    r = jh(t.reverse(), e);
  return [n, r];
}
function d0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function jh(e, t) {
  for (const n of e) if (!w2(n, { upTo: t })) return n;
}
function w2(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function S2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function on(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && S2(e) && t && e.select();
  }
}
var Lh = C2();
function C2() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Oh(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Oh(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Oh(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function T2(e) {
  return e.filter((t) => t.tagName !== "A");
}
var P2 = Jx.useId || (() => {}),
  k2 = 0;
function Sa(e) {
  const [t, n] = v.useState(P2());
  return (
    Ve(() => {
      n((r) => r ?? String(k2++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const E2 = ["top", "right", "bottom", "left"],
  kn = Math.min,
  Ye = Math.max,
  Ys = Math.round,
  Hi = Math.floor,
  jt = (e) => ({ x: e, y: e }),
  R2 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  A2 = { start: "end", end: "start" };
function Uu(e, t, n) {
  return Ye(e, kn(t, n));
}
function Qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zt(e) {
  return e.split("-")[0];
}
function qr(e) {
  return e.split("-")[1];
}
function _d(e) {
  return e === "x" ? "y" : "x";
}
function Vd(e) {
  return e === "y" ? "height" : "width";
}
function En(e) {
  return ["top", "bottom"].includes(Zt(e)) ? "y" : "x";
}
function Fd(e) {
  return _d(En(e));
}
function b2(e, t, n) {
  n === void 0 && (n = !1);
  const r = qr(e),
    o = Fd(e),
    i = Vd(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[i] > t.floating[i] && (s = Xs(s)), [s, Xs(s)];
}
function N2(e) {
  const t = Xs(e);
  return [$u(e), t, $u(t)];
}
function $u(e) {
  return e.replace(/start|end/g, (t) => A2[t]);
}
function M2(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function D2(e, t, n, r) {
  const o = qr(e);
  let i = M2(Zt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map($u)))), i
  );
}
function Xs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => R2[t]);
}
function j2(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function f0(e) {
  return typeof e != "number"
    ? j2(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Qs(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Ih(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = En(t),
    s = Fd(t),
    a = Vd(s),
    l = Zt(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: c, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: d };
      break;
    case "left":
      m = { x: r.x - o.width, y: d };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (qr(t)) {
    case "start":
      m[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const L2 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = Ih(u, r, l),
    f = r,
    m = {},
    x = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: S, fn: p } = a[g],
      {
        x: h,
        y,
        data: C,
        reset: T,
      } = await p({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: m,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = h ?? c),
      (d = y ?? d),
      (m = { ...m, [S]: { ...m[S], ...C } }),
      T &&
        x <= 50 &&
        (x++,
        typeof T == "object" &&
          (T.placement && (f = T.placement),
          T.rects &&
            (u =
              T.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : T.rects),
          ({ x: c, y: d } = Ih(u, f, l))),
        (g = -1));
  }
  return { x: c, y: d, placement: f, strategy: o, middlewareData: m };
};
async function li(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = Qt(t, e),
    x = f0(m),
    S = a[f ? (d === "floating" ? "reference" : "floating") : d],
    p = Qs(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    h =
      d === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    T = Qs(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: h,
            offsetParent: y,
            strategy: l,
          })
        : h,
    );
  return {
    top: (p.top - T.top + x.top) / C.y,
    bottom: (T.bottom - p.bottom + x.bottom) / C.y,
    left: (p.left - T.left + x.left) / C.x,
    right: (T.right - p.right + x.right) / C.x,
  };
}
const O2 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = Qt(e, t) || {};
      if (u == null) return {};
      const d = f0(c),
        f = { x: n, y: r },
        m = Fd(o),
        x = Vd(m),
        g = await s.getDimensions(u),
        S = m === "y",
        p = S ? "top" : "left",
        h = S ? "bottom" : "right",
        y = S ? "clientHeight" : "clientWidth",
        C = i.reference[x] + i.reference[m] - f[m] - i.floating[x],
        T = f[m] - i.reference[m],
        k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let P = k ? k[y] : 0;
      (!P || !(await (s.isElement == null ? void 0 : s.isElement(k)))) &&
        (P = a.floating[y] || i.floating[x]);
      const E = C / 2 - T / 2,
        M = P / 2 - g[x] / 2 - 1,
        b = kn(d[p], M),
        _ = kn(d[h], M),
        L = b,
        $ = P - g[x] - _,
        z = P / 2 - g[x] / 2 + E,
        K = Uu(L, z, $),
        F =
          !l.arrow &&
          qr(o) != null &&
          z !== K &&
          i.reference[x] / 2 - (z < L ? b : _) - g[x] / 2 < 0,
        O = F ? (z < L ? z - L : z - $) : 0;
      return {
        [m]: f[m] + O,
        data: {
          [m]: K,
          centerOffset: z - K - O,
          ...(F && { alignmentOffset: O }),
        },
        reset: F,
      };
    },
  }),
  I2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: g = !0,
              ...S
            } = Qt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const p = Zt(o),
            h = En(a),
            y = Zt(a) === a,
            C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            T = f || (y || !g ? [Xs(a)] : N2(a)),
            k = x !== "none";
          !f && k && T.push(...D2(a, g, x, C));
          const P = [a, ...T],
            E = await li(t, S),
            M = [];
          let b = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && M.push(E[p]), d)) {
            const z = b2(o, s, C);
            M.push(E[z[0]], E[z[1]]);
          }
          if (
            ((b = [...b, { placement: o, overflows: M }]),
            !M.every((z) => z <= 0))
          ) {
            var _, L;
            const z = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1,
              K = P[z];
            if (K)
              return {
                data: { index: z, overflows: b },
                reset: { placement: K },
              };
            let F =
              (L = b
                .filter((O) => O.overflows[0] <= 0)
                .sort((O, R) => O.overflows[1] - R.overflows[1])[0]) == null
                ? void 0
                : L.placement;
            if (!F)
              switch (m) {
                case "bestFit": {
                  var $;
                  const O =
                    ($ = b
                      .filter((R) => {
                        if (k) {
                          const N = En(R.placement);
                          return N === h || N === "y";
                        }
                        return !0;
                      })
                      .map((R) => [
                        R.placement,
                        R.overflows
                          .filter((N) => N > 0)
                          .reduce((N, j) => N + j, 0),
                      ])
                      .sort((R, N) => R[1] - N[1])[0]) == null
                      ? void 0
                      : $[0];
                  O && (F = O);
                  break;
                }
                case "initialPlacement":
                  F = a;
                  break;
              }
            if (o !== F) return { reset: { placement: F } };
          }
          return {};
        },
      }
    );
  };
function _h(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Vh(e) {
  return E2.some((t) => e[t] >= 0);
}
const _2 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Qt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await li(t, { ...o, elementContext: "reference" }),
              s = _h(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Vh(s) },
            };
          }
          case "escaped": {
            const i = await li(t, { ...o, altBoundary: !0 }),
              s = _h(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Vh(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function V2(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Zt(n),
    a = qr(n),
    l = En(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    c = i && l ? -1 : 1,
    d = Qt(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: x,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof x == "number" && (m = a === "end" ? x * -1 : x),
    l ? { x: m * c, y: f * u } : { x: f * u, y: m * c }
  );
}
const F2 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await V2(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  z2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (S) => {
                  let { x: p, y: h } = S;
                  return { x: p, y: h };
                },
              },
              ...l
            } = Qt(e, t),
            u = { x: n, y: r },
            c = await li(t, l),
            d = En(Zt(o)),
            f = _d(d);
          let m = u[f],
            x = u[d];
          if (i) {
            const S = f === "y" ? "top" : "left",
              p = f === "y" ? "bottom" : "right",
              h = m + c[S],
              y = m - c[p];
            m = Uu(h, m, y);
          }
          if (s) {
            const S = d === "y" ? "top" : "left",
              p = d === "y" ? "bottom" : "right",
              h = x + c[S],
              y = x - c[p];
            x = Uu(h, x, y);
          }
          const g = a.fn({ ...t, [f]: m, [d]: x });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [f]: i, [d]: s } },
          };
        },
      }
    );
  },
  B2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = Qt(e, t),
            c = { x: n, y: r },
            d = En(o),
            f = _d(d);
          let m = c[f],
            x = c[d];
          const g = Qt(a, t),
            S =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const y = f === "y" ? "height" : "width",
              C = i.reference[f] - i.floating[y] + S.mainAxis,
              T = i.reference[f] + i.reference[y] - S.mainAxis;
            m < C ? (m = C) : m > T && (m = T);
          }
          if (u) {
            var p, h;
            const y = f === "y" ? "width" : "height",
              C = ["top", "left"].includes(Zt(o)),
              T =
                i.reference[d] -
                i.floating[y] +
                ((C && ((p = s.offset) == null ? void 0 : p[d])) || 0) +
                (C ? 0 : S.crossAxis),
              k =
                i.reference[d] +
                i.reference[y] +
                (C ? 0 : ((h = s.offset) == null ? void 0 : h[d]) || 0) -
                (C ? S.crossAxis : 0);
            x < T ? (x = T) : x > k && (x = k);
          }
          return { [f]: m, [d]: x };
        },
      }
    );
  },
  U2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = Qt(e, t),
            c = await li(t, u),
            d = Zt(o),
            f = qr(o),
            m = En(o) === "y",
            { width: x, height: g } = i.floating;
          let S, p;
          d === "top" || d === "bottom"
            ? ((S = d),
              (p =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = d), (S = f === "end" ? "top" : "bottom"));
          const h = g - c.top - c.bottom,
            y = x - c.left - c.right,
            C = kn(g - c[S], h),
            T = kn(x - c[p], y),
            k = !t.middlewareData.shift;
          let P = C,
            E = T;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (E = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = h),
            k && !f)
          ) {
            const b = Ye(c.left, 0),
              _ = Ye(c.right, 0),
              L = Ye(c.top, 0),
              $ = Ye(c.bottom, 0);
            m
              ? (E = x - 2 * (b !== 0 || _ !== 0 ? b + _ : Ye(c.left, c.right)))
              : (P =
                  g - 2 * (L !== 0 || $ !== 0 ? L + $ : Ye(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: E, availableHeight: P });
          const M = await s.getDimensions(a.floating);
          return x !== M.width || g !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ca() {
  return typeof window < "u";
}
function Jr(e) {
  return p0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qe(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ot(e) {
  var t;
  return (t = (p0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function p0(e) {
  return Ca() ? e instanceof Node || e instanceof qe(e).Node : !1;
}
function St(e) {
  return Ca() ? e instanceof Element || e instanceof qe(e).Element : !1;
}
function Lt(e) {
  return Ca() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1;
}
function Fh(e) {
  return !Ca() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot;
}
function wi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Ct(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function $2(e) {
  return ["table", "td", "th"].includes(Jr(e));
}
function Ta(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function zd(e) {
  const t = Bd(),
    n = St(e) ? Ct(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function W2(e) {
  let t = Rn(e);
  for (; Lt(t) && !Wr(t); ) {
    if (zd(t)) return t;
    if (Ta(t)) return null;
    t = Rn(t);
  }
  return null;
}
function Bd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wr(e) {
  return ["html", "body", "#document"].includes(Jr(e));
}
function Ct(e) {
  return qe(e).getComputedStyle(e);
}
function Pa(e) {
  return St(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Rn(e) {
  if (Jr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Fh(e) && e.host) || Ot(e);
  return Fh(t) ? t.host : t;
}
function h0(e) {
  const t = Rn(e);
  return Wr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Lt(t) && wi(t)
      ? t
      : h0(t);
}
function ui(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = h0(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = qe(o);
  if (i) {
    const a = Wu(s);
    return t.concat(
      s,
      s.visualViewport || [],
      wi(o) ? o : [],
      a && n ? ui(a) : [],
    );
  }
  return t.concat(o, ui(o, [], n));
}
function Wu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function m0(e) {
  const t = Ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Lt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = Ys(n) !== i || Ys(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function Ud(e) {
  return St(e) ? e : e.contextElement;
}
function Mr(e) {
  const t = Ud(e);
  if (!Lt(t)) return jt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = m0(t);
  let s = (i ? Ys(n.width) : n.width) / r,
    a = (i ? Ys(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const H2 = jt(0);
function g0(e) {
  const t = qe(e);
  return !Bd() || !t.visualViewport
    ? H2
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function K2(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== qe(e)) ? !1 : t;
}
function Zn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Ud(e);
  let s = jt(1);
  t && (r ? St(r) && (s = Mr(r)) : (s = Mr(e)));
  const a = K2(i, n, r) ? g0(i) : jt(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    c = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const f = qe(i),
      m = r && St(r) ? qe(r) : r;
    let x = f,
      g = Wu(x);
    for (; g && r && m !== x; ) {
      const S = Mr(g),
        p = g.getBoundingClientRect(),
        h = Ct(g),
        y = p.left + (g.clientLeft + parseFloat(h.paddingLeft)) * S.x,
        C = p.top + (g.clientTop + parseFloat(h.paddingTop)) * S.y;
      (l *= S.x),
        (u *= S.y),
        (c *= S.x),
        (d *= S.y),
        (l += y),
        (u += C),
        (x = qe(g)),
        (g = Wu(x));
    }
  }
  return Qs({ width: c, height: d, x: l, y: u });
}
function $d(e, t) {
  const n = Pa(e).scrollLeft;
  return t ? t.left + n : Zn(Ot(e)).left + n;
}
function v0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : $d(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function G2(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Ot(r),
    a = t ? Ta(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = jt(1);
  const c = jt(0),
    d = Lt(r);
  if (
    (d || (!d && !i)) &&
    ((Jr(r) !== "body" || wi(s)) && (l = Pa(r)), Lt(r))
  ) {
    const m = Zn(r);
    (u = Mr(r)), (c.x = m.x + r.clientLeft), (c.y = m.y + r.clientTop);
  }
  const f = s && !d && !i ? v0(s, l, !0) : jt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function Y2(e) {
  return Array.from(e.getClientRects());
}
function X2(e) {
  const t = Ot(e),
    n = Pa(e),
    r = e.ownerDocument.body,
    o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $d(e);
  const a = -n.scrollTop;
  return (
    Ct(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function Q2(e, t) {
  const n = qe(e),
    r = Ot(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Bd();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function Z2(e, t) {
  const n = Zn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Lt(e) ? Mr(e) : jt(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: l, y: u };
}
function zh(e, t, n) {
  let r;
  if (t === "viewport") r = Q2(e, n);
  else if (t === "document") r = X2(Ot(e));
  else if (St(t)) r = Z2(t, n);
  else {
    const o = g0(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Qs(r);
}
function y0(e, t) {
  const n = Rn(e);
  return n === t || !St(n) || Wr(n)
    ? !1
    : Ct(n).position === "fixed" || y0(n, t);
}
function q2(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ui(e, [], !1).filter((a) => St(a) && Jr(a) !== "body"),
    o = null;
  const i = Ct(e).position === "fixed";
  let s = i ? Rn(e) : e;
  for (; St(s) && !Wr(s); ) {
    const a = Ct(s),
      l = zd(s);
    !l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (wi(s) && !l && y0(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = a),
      (s = Rn(s));
  }
  return t.set(e, r), r;
}
function J2(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Ta(t)
          ? []
          : q2(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce(
      (u, c) => {
        const d = zh(t, c, o);
        return (
          (u.top = Ye(d.top, u.top)),
          (u.right = kn(d.right, u.right)),
          (u.bottom = kn(d.bottom, u.bottom)),
          (u.left = Ye(d.left, u.left)),
          u
        );
      },
      zh(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function eR(e) {
  const { width: t, height: n } = m0(e);
  return { width: t, height: n };
}
function tR(e, t, n) {
  const r = Lt(t),
    o = Ot(t),
    i = n === "fixed",
    s = Zn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = jt(0);
  if (r || (!r && !i))
    if (((Jr(t) !== "body" || wi(o)) && (a = Pa(t)), r)) {
      const f = Zn(t, !0, i, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else o && (l.x = $d(o));
  const u = o && !r && !i ? v0(o, a) : jt(0),
    c = s.left + a.scrollLeft - l.x - u.x,
    d = s.top + a.scrollTop - l.y - u.y;
  return { x: c, y: d, width: s.width, height: s.height };
}
function Tl(e) {
  return Ct(e).position === "static";
}
function Bh(e, t) {
  if (!Lt(e) || Ct(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Ot(e) === n && (n = n.ownerDocument.body), n;
}
function x0(e, t) {
  const n = qe(e);
  if (Ta(e)) return n;
  if (!Lt(e)) {
    let o = Rn(e);
    for (; o && !Wr(o); ) {
      if (St(o) && !Tl(o)) return o;
      o = Rn(o);
    }
    return n;
  }
  let r = Bh(e, t);
  for (; r && $2(r) && Tl(r); ) r = Bh(r, t);
  return r && Wr(r) && Tl(r) && !zd(r) ? n : r || W2(e) || n;
}
const nR = async function (e) {
  const t = this.getOffsetParent || x0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: tR(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function rR(e) {
  return Ct(e).direction === "rtl";
}
const oR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: G2,
  getDocumentElement: Ot,
  getClippingRect: J2,
  getOffsetParent: x0,
  getElementRects: nR,
  getClientRects: Y2,
  getDimensions: eR,
  getScale: Mr,
  isElement: St,
  isRTL: rR,
};
function iR(e, t) {
  let n = null,
    r;
  const o = Ot(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const { left: u, top: c, width: d, height: f } = e.getBoundingClientRect();
    if ((a || t(), !d || !f)) return;
    const m = Hi(c),
      x = Hi(o.clientWidth - (u + d)),
      g = Hi(o.clientHeight - (c + f)),
      S = Hi(u),
      h = {
        rootMargin: -m + "px " + -x + "px " + -g + "px " + -S + "px",
        threshold: Ye(0, kn(1, l)) || 1,
      };
    let y = !0;
    function C(T) {
      const k = T[0].intersectionRatio;
      if (k !== l) {
        if (!y) return s();
        k
          ? s(!1, k)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...h, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, h);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function sR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Ud(e),
    c = o || i ? [...(u ? ui(u) : []), ...ui(t)] : [];
  c.forEach((p) => {
    o && p.addEventListener("scroll", n, { passive: !0 }),
      i && p.addEventListener("resize", n);
  });
  const d = u && a ? iR(u, n) : null;
  let f = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((p) => {
      let [h] = p;
      h &&
        h.target === u &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = m) == null || y.observe(t);
        }))),
        n();
    })),
    u && !l && m.observe(u),
    m.observe(t));
  let x,
    g = l ? Zn(e) : null;
  l && S();
  function S() {
    const p = Zn(e);
    g &&
      (p.x !== g.x ||
        p.y !== g.y ||
        p.width !== g.width ||
        p.height !== g.height) &&
      n(),
      (g = p),
      (x = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var p;
      c.forEach((h) => {
        o && h.removeEventListener("scroll", n),
          i && h.removeEventListener("resize", n);
      }),
        d == null || d(),
        (p = m) == null || p.disconnect(),
        (m = null),
        l && cancelAnimationFrame(x);
    }
  );
}
const aR = F2,
  lR = z2,
  uR = I2,
  cR = U2,
  dR = _2,
  Uh = O2,
  fR = B2,
  pR = (e, t, n) => {
    const r = new Map(),
      o = { platform: oR, ...n },
      i = { ...o.platform, _c: r };
    return L2(e, t, { ...o, platform: i });
  };
var fs = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function Zs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Zs(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Zs(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function w0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $h(e, t) {
  const n = w0(e);
  return Math.round(t * n) / n;
}
function Pl(e) {
  const t = v.useRef(e);
  return (
    fs(() => {
      t.current = e;
    }),
    t
  );
}
function hR(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, m] = v.useState(r);
  Zs(f, r) || m(r);
  const [x, g] = v.useState(null),
    [S, p] = v.useState(null),
    h = v.useCallback((R) => {
      R !== k.current && ((k.current = R), g(R));
    }, []),
    y = v.useCallback((R) => {
      R !== P.current && ((P.current = R), p(R));
    }, []),
    C = i || x,
    T = s || S,
    k = v.useRef(null),
    P = v.useRef(null),
    E = v.useRef(c),
    M = l != null,
    b = Pl(l),
    _ = Pl(o),
    L = Pl(u),
    $ = v.useCallback(() => {
      if (!k.current || !P.current) return;
      const R = { placement: t, strategy: n, middleware: f };
      _.current && (R.platform = _.current),
        pR(k.current, P.current, R).then((N) => {
          const j = { ...N, isPositioned: L.current !== !1 };
          z.current &&
            !Zs(E.current, j) &&
            ((E.current = j),
            Xr.flushSync(() => {
              d(j);
            }));
        });
    }, [f, t, n, _, L]);
  fs(() => {
    u === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), d((R) => ({ ...R, isPositioned: !1 })));
  }, [u]);
  const z = v.useRef(!1);
  fs(
    () => (
      (z.current = !0),
      () => {
        z.current = !1;
      }
    ),
    [],
  ),
    fs(() => {
      if ((C && (k.current = C), T && (P.current = T), C && T)) {
        if (b.current) return b.current(C, T, $);
        $();
      }
    }, [C, T, $, b, M]);
  const K = v.useMemo(
      () => ({ reference: k, floating: P, setReference: h, setFloating: y }),
      [h, y],
    ),
    F = v.useMemo(() => ({ reference: C, floating: T }), [C, T]),
    O = v.useMemo(() => {
      const R = { position: n, left: 0, top: 0 };
      if (!F.floating) return R;
      const N = $h(F.floating, c.x),
        j = $h(F.floating, c.y);
      return a
        ? {
            ...R,
            transform: "translate(" + N + "px, " + j + "px)",
            ...(w0(F.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: j };
    }, [n, a, F.floating, c.x, c.y]);
  return v.useMemo(
    () => ({ ...c, update: $, refs: K, elements: F, floatingStyles: O }),
    [c, $, K, F, O],
  );
}
const mR = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Uh({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Uh({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  gR = (e, t) => ({ ...aR(e), options: [e, t] }),
  vR = (e, t) => ({ ...lR(e), options: [e, t] }),
  yR = (e, t) => ({ ...fR(e), options: [e, t] }),
  xR = (e, t) => ({ ...uR(e), options: [e, t] }),
  wR = (e, t) => ({ ...cR(e), options: [e, t] }),
  SR = (e, t) => ({ ...dR(e), options: [e, t] }),
  CR = (e, t) => ({ ...mR(e), options: [e, t] });
var TR = "Arrow",
  S0 = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return w.jsx(ae.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : w.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
S0.displayName = TR;
var PR = S0;
function kR(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = v.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(d) {
      const { scope: f, children: m, ...x } = d,
        g = (f == null ? void 0 : f[e][l]) || a,
        S = v.useMemo(() => x, Object.values(x));
      return w.jsx(g.Provider, { value: S, children: m });
    }
    function c(d, f) {
      const m = (f == null ? void 0 : f[e][l]) || a,
        x = v.useContext(m);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, c];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, ER(o, ...t)];
}
function ER(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Wd = "Popper",
  [C0, ka] = kR(Wd),
  [RR, T0] = C0(Wd),
  P0 = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = v.useState(null);
    return w.jsx(RR, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
P0.displayName = Wd;
var k0 = "PopperAnchor",
  E0 = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = T0(k0, n),
      s = v.useRef(null),
      a = ve(t, s);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : w.jsx(ae.div, { ...o, ref: a })
    );
  });
E0.displayName = k0;
var Hd = "PopperContent",
  [AR, bR] = C0(Hd),
  R0 = v.forwardRef((e, t) => {
    var I, Z, be, ee, X, Q;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: x,
        ...g
      } = e,
      S = T0(Hd, n),
      [p, h] = v.useState(null),
      y = ve(t, (Ke) => h(Ke)),
      [C, T] = v.useState(null),
      k = n0(C),
      P = (k == null ? void 0 : k.width) ?? 0,
      E = (k == null ? void 0 : k.height) ?? 0,
      M = r + (i !== "center" ? "-" + i : ""),
      b =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      _ = Array.isArray(u) ? u : [u],
      L = _.length > 0,
      $ = { padding: b, boundary: _.filter(MR), altBoundary: L },
      {
        refs: z,
        floatingStyles: K,
        placement: F,
        isPositioned: O,
        middlewareData: R,
      } = hR({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...Ke) =>
          sR(...Ke, { animationFrame: m === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          gR({ mainAxis: o + E, alignmentAxis: s }),
          l &&
            vR({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? yR() : void 0,
              ...$,
            }),
          l && xR({ ...$ }),
          wR({
            ...$,
            apply: ({
              elements: Ke,
              rects: Pt,
              availableWidth: to,
              availableHeight: no,
            }) => {
              const { width: ro, height: Ix } = Pt.reference,
                Ti = Ke.floating.style;
              Ti.setProperty("--radix-popper-available-width", `${to}px`),
                Ti.setProperty("--radix-popper-available-height", `${no}px`),
                Ti.setProperty("--radix-popper-anchor-width", `${ro}px`),
                Ti.setProperty("--radix-popper-anchor-height", `${Ix}px`);
            },
          }),
          C && CR({ element: C, padding: a }),
          DR({ arrowWidth: P, arrowHeight: E }),
          f && SR({ strategy: "referenceHidden", ...$ }),
        ],
      }),
      [N, j] = N0(F),
      B = Xt(x);
    Ve(() => {
      O && (B == null || B());
    }, [O, B]);
    const J = (I = R.arrow) == null ? void 0 : I.x,
      rt = (Z = R.arrow) == null ? void 0 : Z.y,
      Y = ((be = R.arrow) == null ? void 0 : be.centerOffset) !== 0,
      [le, we] = v.useState();
    return (
      Ve(() => {
        p && we(window.getComputedStyle(p).zIndex);
      }, [p]),
      w.jsx("div", {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: O ? K.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            (ee = R.transformOrigin) == null ? void 0 : ee.x,
            (X = R.transformOrigin) == null ? void 0 : X.y,
          ].join(" "),
          ...(((Q = R.hide) == null ? void 0 : Q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: w.jsx(AR, {
          scope: n,
          placedSide: N,
          onArrowChange: T,
          arrowX: J,
          arrowY: rt,
          shouldHideArrow: Y,
          children: w.jsx(ae.div, {
            "data-side": N,
            "data-align": j,
            ...g,
            ref: y,
            style: { ...g.style, animation: O ? void 0 : "none" },
          }),
        }),
      })
    );
  });
R0.displayName = Hd;
var A0 = "PopperArrow",
  NR = { top: "bottom", right: "left", bottom: "top", left: "right" },
  b0 = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = bR(A0, r),
      s = NR[i.placedSide];
    return w.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: w.jsx(PR, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
b0.displayName = A0;
function MR(e) {
  return e !== null;
}
var DR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, p, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = N0(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((p = o.arrow) == null ? void 0 : p.x) ?? 0) + a / 2,
      m = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let x = "",
      g = "";
    return (
      u === "bottom"
        ? ((x = s ? d : `${f}px`), (g = `${-l}px`))
        : u === "top"
          ? ((x = s ? d : `${f}px`), (g = `${r.floating.height + l}px`))
          : u === "right"
            ? ((x = `${-l}px`), (g = s ? d : `${m}px`))
            : u === "left" &&
              ((x = `${r.floating.width + l}px`), (g = s ? d : `${m}px`)),
      { data: { x, y: g } }
    );
  },
});
function N0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var M0 = P0,
  D0 = E0,
  j0 = R0,
  L0 = b0,
  jR = "Portal",
  Kd = v.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = v.useState(!1);
    Ve(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? cS.createPortal(w.jsx(ae.div, { ...r, ref: t }), s) : null;
  });
Kd.displayName = jR;
var LR = "VisuallyHidden",
  Gd = v.forwardRef((e, t) =>
    w.jsx(ae.span, {
      ...e,
      ref: t,
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
        ...e.style,
      },
    }),
  );
Gd.displayName = LR;
var OR = Gd,
  IR = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  rr = new WeakMap(),
  Ki = new WeakMap(),
  Gi = {},
  kl = 0,
  O0 = function (e) {
    return e && (e.host || O0(e.parentNode));
  },
  _R = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = O0(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  VR = function (e, t, n, r) {
    var o = _R(t, Array.isArray(e) ? e : [e]);
    Gi[n] || (Gi[n] = new WeakMap());
    var i = Gi[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) c(f);
          else
            try {
              var m = f.getAttribute(r),
                x = m !== null && m !== "false",
                g = (rr.get(f) || 0) + 1,
                S = (i.get(f) || 0) + 1;
              rr.set(f, g),
                i.set(f, S),
                s.push(f),
                g === 1 && x && Ki.set(f, !0),
                S === 1 && f.setAttribute(n, "true"),
                x || f.setAttribute(r, "true");
            } catch (p) {
              console.error("aria-hidden: cannot operate on ", f, p);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      kl++,
      function () {
        s.forEach(function (d) {
          var f = rr.get(d) - 1,
            m = i.get(d) - 1;
          rr.set(d, f),
            i.set(d, m),
            f || (Ki.has(d) || d.removeAttribute(r), Ki.delete(d)),
            m || d.removeAttribute(n);
        }),
          kl--,
          kl ||
            ((rr = new WeakMap()),
            (rr = new WeakMap()),
            (Ki = new WeakMap()),
            (Gi = {}));
      }
    );
  },
  FR = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = IR(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        VR(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  At = function () {
    return (
      (At =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      At.apply(this, arguments)
    );
  };
function I0(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function zR(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ps = "right-scroll-bar-position",
  hs = "width-before-scroll-bar",
  BR = "with-scroll-bars-hidden",
  UR = "--removed-body-scroll-bar-size";
function El(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $R(e, t) {
  var n = v.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var WR = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Wh = new WeakMap();
function HR(e, t) {
  var n = $R(null, function (r) {
    return e.forEach(function (o) {
      return El(o, r);
    });
  });
  return (
    WR(
      function () {
        var r = Wh.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || El(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || El(a, s);
            });
        }
        Wh.set(n, e);
      },
      [e],
    ),
    n
  );
}
function KR(e) {
  return e;
}
function GR(e, t) {
  t === void 0 && (t = KR);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function YR(e) {
  e === void 0 && (e = {});
  var t = GR(null);
  return (t.options = At({ async: !0, ssr: !1 }, e)), t;
}
var _0 = function (e) {
  var t = e.sideCar,
    n = I0(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, At({}, n));
};
_0.isSideCarExport = !0;
function XR(e, t) {
  return e.useMedium(t), _0;
}
var V0 = YR(),
  Rl = function () {},
  Ea = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: Rl,
        onWheelCapture: Rl,
        onTouchMoveCapture: Rl,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      m = e.noIsolation,
      x = e.inert,
      g = e.allowPinchZoom,
      S = e.as,
      p = S === void 0 ? "div" : S,
      h = e.gapMode,
      y = I0(e, [
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
      C = f,
      T = HR([n, t]),
      k = At(At({}, y), o);
    return v.createElement(
      v.Fragment,
      null,
      c &&
        v.createElement(C, {
          sideCar: V0,
          removeScrollBar: u,
          shards: d,
          noIsolation: m,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: h,
        }),
      s
        ? v.cloneElement(v.Children.only(a), At(At({}, k), { ref: T }))
        : v.createElement(p, At({}, k, { className: l, ref: T }), a),
    );
  });
Ea.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ea.classNames = { fullWidth: hs, zeroRight: ps };
var QR = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ZR() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = QR();
  return t && e.setAttribute("nonce", t), e;
}
function qR(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function JR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var eA = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = ZR()) && (qR(t, n), JR(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  tA = function () {
    var e = eA();
    return function (t, n) {
      v.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  F0 = function () {
    var e = tA(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  nA = { left: 0, top: 0, right: 0, gap: 0 },
  Al = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  rA = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Al(n), Al(r), Al(o)];
  },
  oA = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return nA;
    var t = rA(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  iA = F0(),
  Dr = "data-scroll-locked",
  sA = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          BR,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Dr,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ps,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          hs,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ps, " .")
        .concat(
          ps,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(hs, " .")
        .concat(
          hs,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Dr,
          `] {
    `,
        )
        .concat(UR, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  Hh = function () {
    var e = parseInt(document.body.getAttribute(Dr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  aA = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(Dr, (Hh() + 1).toString()),
        function () {
          var e = Hh() - 1;
          e <= 0
            ? document.body.removeAttribute(Dr)
            : document.body.setAttribute(Dr, e.toString());
        }
      );
    }, []);
  },
  lA = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    aA();
    var i = v.useMemo(
      function () {
        return oA(o);
      },
      [o],
    );
    return v.createElement(iA, { styles: sA(i, !t, o, n ? "" : "!important") });
  },
  Hu = !1;
if (typeof window < "u")
  try {
    var Yi = Object.defineProperty({}, "passive", {
      get: function () {
        return (Hu = !0), !0;
      },
    });
    window.addEventListener("test", Yi, Yi),
      window.removeEventListener("test", Yi, Yi);
  } catch {
    Hu = !1;
  }
var or = Hu ? { passive: !1 } : !1,
  uA = function (e) {
    return e.tagName === "TEXTAREA";
  },
  z0 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !uA(e) && n[t] === "visible")
    );
  },
  cA = function (e) {
    return z0(e, "overflowY");
  },
  dA = function (e) {
    return z0(e, "overflowX");
  },
  Kh = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = B0(e, r);
      if (o) {
        var i = U0(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  fA = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  pA = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  B0 = function (e, t) {
    return e === "v" ? cA(t) : dA(t);
  },
  U0 = function (e, t) {
    return e === "v" ? fA(t) : pA(t);
  },
  hA = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  mA = function (e, t, n, r, o) {
    var i = hA(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      var m = U0(e, a),
        x = m[0],
        g = m[1],
        S = m[2],
        p = g - S - i * x;
      (x || p) && B0(e, a) && ((d += p), (f += x)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  Xi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Gh = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Yh = function (e) {
    return e && "current" in e ? e.current : e;
  },
  gA = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  vA = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  yA = 0,
  ir = [];
function xA(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    o = v.useState(yA++)[0],
    i = v.useState(F0)[0],
    s = v.useRef(e);
  v.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = zR([e.lockRef.current], (e.shards || []).map(Yh), !0).filter(
            Boolean,
          );
          return (
            g.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = v.useCallback(function (g, S) {
      if (
        ("touches" in g && g.touches.length === 2) ||
        (g.type === "wheel" && g.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var p = Xi(g),
        h = n.current,
        y = "deltaX" in g ? g.deltaX : h[0] - p[0],
        C = "deltaY" in g ? g.deltaY : h[1] - p[1],
        T,
        k = g.target,
        P = Math.abs(y) > Math.abs(C) ? "h" : "v";
      if ("touches" in g && P === "h" && k.type === "range") return !1;
      var E = Kh(P, k);
      if (!E) return !0;
      if ((E ? (T = P) : ((T = P === "v" ? "h" : "v"), (E = Kh(P, k))), !E))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (y || C) && (r.current = T), !T)
      )
        return !0;
      var M = r.current || T;
      return mA(M, S, g, M === "h" ? y : C, !0);
    }, []),
    l = v.useCallback(function (g) {
      var S = g;
      if (!(!ir.length || ir[ir.length - 1] !== i)) {
        var p = "deltaY" in S ? Gh(S) : Xi(S),
          h = t.current.filter(function (T) {
            return (
              T.name === S.type &&
              (T.target === S.target || S.target === T.shadowParent) &&
              gA(T.delta, p)
            );
          })[0];
        if (h && h.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!h) {
          var y = (s.current.shards || [])
              .map(Yh)
              .filter(Boolean)
              .filter(function (T) {
                return T.contains(S.target);
              }),
            C = y.length > 0 ? a(S, y[0]) : !s.current.noIsolation;
          C && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = v.useCallback(function (g, S, p, h) {
      var y = { name: g, delta: S, target: p, should: h, shadowParent: wA(p) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== y;
          });
        }, 1);
    }, []),
    c = v.useCallback(function (g) {
      (n.current = Xi(g)), (r.current = void 0);
    }, []),
    d = v.useCallback(function (g) {
      u(g.type, Gh(g), g.target, a(g, e.lockRef.current));
    }, []),
    f = v.useCallback(function (g) {
      u(g.type, Xi(g), g.target, a(g, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      ir.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, or),
      document.addEventListener("touchmove", l, or),
      document.addEventListener("touchstart", c, or),
      function () {
        (ir = ir.filter(function (g) {
          return g !== i;
        })),
          document.removeEventListener("wheel", l, or),
          document.removeEventListener("touchmove", l, or),
          document.removeEventListener("touchstart", c, or);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    x = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    x ? v.createElement(i, { styles: vA(o) }) : null,
    m ? v.createElement(lA, { gapMode: e.gapMode }) : null,
  );
}
function wA(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const SA = XR(V0, xA);
var $0 = v.forwardRef(function (e, t) {
  return v.createElement(Ea, At({}, e, { ref: t, sideCar: SA }));
});
$0.classNames = Ea.classNames;
var CA = [" ", "Enter", "ArrowUp", "ArrowDown"],
  TA = [" ", "Enter"],
  Si = "Select",
  [Ra, Aa, PA] = i2(Si),
  [eo, Ab] = Md(Si, [PA, ka]),
  ba = ka(),
  [kA, Dn] = eo(Si),
  [EA, RA] = eo(Si),
  W0 = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: s,
        defaultValue: a,
        onValueChange: l,
        dir: u,
        name: c,
        autoComplete: d,
        disabled: f,
        required: m,
        form: x,
      } = e,
      g = ba(t),
      [S, p] = v.useState(null),
      [h, y] = v.useState(null),
      [C, T] = v.useState(!1),
      k = a2(u),
      [P = !1, E] = Gs({ prop: r, defaultProp: o, onChange: i }),
      [M, b] = Gs({ prop: s, defaultProp: a, onChange: l }),
      _ = v.useRef(null),
      L = S ? x || !!S.closest("form") : !0,
      [$, z] = v.useState(new Set()),
      K = Array.from($)
        .map((F) => F.props.value)
        .join(";");
    return w.jsx(M0, {
      ...g,
      children: w.jsxs(kA, {
        required: m,
        scope: t,
        trigger: S,
        onTriggerChange: p,
        valueNode: h,
        onValueNodeChange: y,
        valueNodeHasChildren: C,
        onValueNodeHasChildrenChange: T,
        contentId: Sa(),
        value: M,
        onValueChange: b,
        open: P,
        onOpenChange: E,
        dir: k,
        triggerPointerDownPosRef: _,
        disabled: f,
        children: [
          w.jsx(Ra.Provider, {
            scope: t,
            children: w.jsx(EA, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: v.useCallback((F) => {
                z((O) => new Set(O).add(F));
              }, []),
              onNativeOptionRemove: v.useCallback((F) => {
                z((O) => {
                  const R = new Set(O);
                  return R.delete(F), R;
                });
              }, []),
              children: n,
            }),
          }),
          L
            ? w.jsxs(
                hx,
                {
                  "aria-hidden": !0,
                  required: m,
                  tabIndex: -1,
                  name: c,
                  autoComplete: d,
                  value: M,
                  onChange: (F) => b(F.target.value),
                  disabled: f,
                  form: x,
                  children: [
                    M === void 0 ? w.jsx("option", { value: "" }) : null,
                    Array.from($),
                  ],
                },
                K,
              )
            : null,
        ],
      }),
    });
  };
W0.displayName = Si;
var H0 = "SelectTrigger",
  K0 = v.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      i = ba(n),
      s = Dn(H0, n),
      a = s.disabled || r,
      l = ve(t, s.onTriggerChange),
      u = Aa(n),
      c = v.useRef("touch"),
      [d, f, m] = mx((g) => {
        const S = u().filter((y) => !y.disabled),
          p = S.find((y) => y.value === s.value),
          h = gx(S, g, p);
        h !== void 0 && s.onValueChange(h.value);
      }),
      x = (g) => {
        a || (s.onOpenChange(!0), m()),
          g &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(g.pageX),
              y: Math.round(g.pageY),
            });
      };
    return w.jsx(D0, {
      asChild: !0,
      ...i,
      children: w.jsx(ae.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": px(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: q(o.onClick, (g) => {
          g.currentTarget.focus(), c.current !== "mouse" && x(g);
        }),
        onPointerDown: q(o.onPointerDown, (g) => {
          c.current = g.pointerType;
          const S = g.target;
          S.hasPointerCapture(g.pointerId) &&
            S.releasePointerCapture(g.pointerId),
            g.button === 0 &&
              g.ctrlKey === !1 &&
              g.pointerType === "mouse" &&
              (x(g), g.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (g) => {
          const S = d.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) &&
            g.key.length === 1 &&
            f(g.key),
            !(S && g.key === " ") &&
              CA.includes(g.key) &&
              (x(), g.preventDefault());
        }),
      }),
    });
  });
K0.displayName = H0;
var G0 = "SelectValue",
  AA = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: i,
        placeholder: s = "",
        ...a
      } = e,
      l = Dn(G0, n),
      { onValueNodeHasChildrenChange: u } = l,
      c = i !== void 0,
      d = ve(t, l.onValueNodeChange);
    return (
      Ve(() => {
        u(c);
      }, [u, c]),
      w.jsx(ae.span, {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: px(l.value) ? w.jsx(w.Fragment, { children: s }) : i,
      })
    );
  });
AA.displayName = G0;
var bA = "SelectIcon",
  Y0 = v.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return w.jsx(ae.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
Y0.displayName = bA;
var NA = "SelectPortal",
  X0 = (e) => w.jsx(Kd, { asChild: !0, ...e });
X0.displayName = NA;
var qn = "SelectContent",
  Q0 = v.forwardRef((e, t) => {
    const n = Dn(qn, e.__scopeSelect),
      [r, o] = v.useState();
    if (
      (Ve(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const i = r;
      return i
        ? Xr.createPortal(
            w.jsx(Z0, {
              scope: e.__scopeSelect,
              children: w.jsx(Ra.Slot, {
                scope: e.__scopeSelect,
                children: w.jsx("div", { children: e.children }),
              }),
            }),
            i,
          )
        : null;
    }
    return w.jsx(q0, { ...e, ref: t });
  });
Q0.displayName = qn;
var ht = 10,
  [Z0, jn] = eo(qn),
  MA = "SelectContentImpl",
  q0 = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        side: a,
        sideOffset: l,
        align: u,
        alignOffset: c,
        arrowPadding: d,
        collisionBoundary: f,
        collisionPadding: m,
        sticky: x,
        hideWhenDetached: g,
        avoidCollisions: S,
        ...p
      } = e,
      h = Dn(qn, n),
      [y, C] = v.useState(null),
      [T, k] = v.useState(null),
      P = ve(t, (I) => C(I)),
      [E, M] = v.useState(null),
      [b, _] = v.useState(null),
      L = Aa(n),
      [$, z] = v.useState(!1),
      K = v.useRef(!1);
    v.useEffect(() => {
      if (y) return FR(y);
    }, [y]),
      g2();
    const F = v.useCallback(
        (I) => {
          const [Z, ...be] = L().map((Q) => Q.ref.current),
            [ee] = be.slice(-1),
            X = document.activeElement;
          for (const Q of I)
            if (
              Q === X ||
              (Q == null || Q.scrollIntoView({ block: "nearest" }),
              Q === Z && T && (T.scrollTop = 0),
              Q === ee && T && (T.scrollTop = T.scrollHeight),
              Q == null || Q.focus(),
              document.activeElement !== X)
            )
              return;
        },
        [L, T],
      ),
      O = v.useCallback(() => F([E, y]), [F, E, y]);
    v.useEffect(() => {
      $ && O();
    }, [$, O]);
    const { onOpenChange: R, triggerPointerDownPosRef: N } = h;
    v.useEffect(() => {
      if (y) {
        let I = { x: 0, y: 0 };
        const Z = (ee) => {
            var X, Q;
            I = {
              x: Math.abs(
                Math.round(ee.pageX) -
                  (((X = N.current) == null ? void 0 : X.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(ee.pageY) -
                  (((Q = N.current) == null ? void 0 : Q.y) ?? 0),
              ),
            };
          },
          be = (ee) => {
            I.x <= 10 && I.y <= 10
              ? ee.preventDefault()
              : y.contains(ee.target) || R(!1),
              document.removeEventListener("pointermove", Z),
              (N.current = null);
          };
        return (
          N.current !== null &&
            (document.addEventListener("pointermove", Z),
            document.addEventListener("pointerup", be, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", Z),
              document.removeEventListener("pointerup", be, { capture: !0 });
          }
        );
      }
    }, [y, R, N]),
      v.useEffect(() => {
        const I = () => R(!1);
        return (
          window.addEventListener("blur", I),
          window.addEventListener("resize", I),
          () => {
            window.removeEventListener("blur", I),
              window.removeEventListener("resize", I);
          }
        );
      }, [R]);
    const [j, B] = mx((I) => {
        const Z = L().filter((X) => !X.disabled),
          be = Z.find((X) => X.ref.current === document.activeElement),
          ee = gx(Z, I, be);
        ee && setTimeout(() => ee.ref.current.focus());
      }),
      J = v.useCallback(
        (I, Z, be) => {
          const ee = !K.current && !be;
          ((h.value !== void 0 && h.value === Z) || ee) &&
            (M(I), ee && (K.current = !0));
        },
        [h.value],
      ),
      rt = v.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
      Y = v.useCallback(
        (I, Z, be) => {
          const ee = !K.current && !be;
          ((h.value !== void 0 && h.value === Z) || ee) && _(I);
        },
        [h.value],
      ),
      le = r === "popper" ? Ku : J0,
      we =
        le === Ku
          ? {
              side: a,
              sideOffset: l,
              align: u,
              alignOffset: c,
              arrowPadding: d,
              collisionBoundary: f,
              collisionPadding: m,
              sticky: x,
              hideWhenDetached: g,
              avoidCollisions: S,
            }
          : {};
    return w.jsx(Z0, {
      scope: n,
      content: y,
      viewport: T,
      onViewportChange: k,
      itemRefCallback: J,
      selectedItem: E,
      onItemLeave: rt,
      itemTextRefCallback: Y,
      focusSelectedItem: O,
      selectedItemText: b,
      position: r,
      isPositioned: $,
      searchRef: j,
      children: w.jsx($0, {
        as: $r,
        allowPinchZoom: !0,
        children: w.jsx(c0, {
          asChild: !0,
          trapped: h.open,
          onMountAutoFocus: (I) => {
            I.preventDefault();
          },
          onUnmountAutoFocus: q(o, (I) => {
            var Z;
            (Z = h.trigger) == null || Z.focus({ preventScroll: !0 }),
              I.preventDefault();
          }),
          children: w.jsx(Id, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: (I) => I.preventDefault(),
            onDismiss: () => h.onOpenChange(!1),
            children: w.jsx(le, {
              role: "listbox",
              id: h.contentId,
              "data-state": h.open ? "open" : "closed",
              dir: h.dir,
              onContextMenu: (I) => I.preventDefault(),
              ...p,
              ...we,
              onPlaced: () => z(!0),
              ref: P,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...p.style,
              },
              onKeyDown: q(p.onKeyDown, (I) => {
                const Z = I.ctrlKey || I.altKey || I.metaKey;
                if (
                  (I.key === "Tab" && I.preventDefault(),
                  !Z && I.key.length === 1 && B(I.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key))
                ) {
                  let ee = L()
                    .filter((X) => !X.disabled)
                    .map((X) => X.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(I.key) &&
                      (ee = ee.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(I.key))
                  ) {
                    const X = I.target,
                      Q = ee.indexOf(X);
                    ee = ee.slice(Q + 1);
                  }
                  setTimeout(() => F(ee)), I.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
q0.displayName = MA;
var DA = "SelectItemAlignedPosition",
  J0 = v.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      i = Dn(qn, n),
      s = jn(qn, n),
      [a, l] = v.useState(null),
      [u, c] = v.useState(null),
      d = ve(t, (P) => c(P)),
      f = Aa(n),
      m = v.useRef(!1),
      x = v.useRef(!0),
      {
        viewport: g,
        selectedItem: S,
        selectedItemText: p,
        focusSelectedItem: h,
      } = s,
      y = v.useCallback(() => {
        if (i.trigger && i.valueNode && a && u && g && S && p) {
          const P = i.trigger.getBoundingClientRect(),
            E = u.getBoundingClientRect(),
            M = i.valueNode.getBoundingClientRect(),
            b = p.getBoundingClientRect();
          if (i.dir !== "rtl") {
            const X = b.left - E.left,
              Q = M.left - X,
              Ke = P.left - Q,
              Pt = P.width + Ke,
              to = Math.max(Pt, E.width),
              no = window.innerWidth - ht,
              ro = Ah(Q, [ht, Math.max(ht, no - to)]);
            (a.style.minWidth = Pt + "px"), (a.style.left = ro + "px");
          } else {
            const X = E.right - b.right,
              Q = window.innerWidth - M.right - X,
              Ke = window.innerWidth - P.right - Q,
              Pt = P.width + Ke,
              to = Math.max(Pt, E.width),
              no = window.innerWidth - ht,
              ro = Ah(Q, [ht, Math.max(ht, no - to)]);
            (a.style.minWidth = Pt + "px"), (a.style.right = ro + "px");
          }
          const _ = f(),
            L = window.innerHeight - ht * 2,
            $ = g.scrollHeight,
            z = window.getComputedStyle(u),
            K = parseInt(z.borderTopWidth, 10),
            F = parseInt(z.paddingTop, 10),
            O = parseInt(z.borderBottomWidth, 10),
            R = parseInt(z.paddingBottom, 10),
            N = K + F + $ + R + O,
            j = Math.min(S.offsetHeight * 5, N),
            B = window.getComputedStyle(g),
            J = parseInt(B.paddingTop, 10),
            rt = parseInt(B.paddingBottom, 10),
            Y = P.top + P.height / 2 - ht,
            le = L - Y,
            we = S.offsetHeight / 2,
            I = S.offsetTop + we,
            Z = K + F + I,
            be = N - Z;
          if (Z <= Y) {
            const X = _.length > 0 && S === _[_.length - 1].ref.current;
            a.style.bottom = "0px";
            const Q = u.clientHeight - g.offsetTop - g.offsetHeight,
              Ke = Math.max(le, we + (X ? rt : 0) + Q + O),
              Pt = Z + Ke;
            a.style.height = Pt + "px";
          } else {
            const X = _.length > 0 && S === _[0].ref.current;
            a.style.top = "0px";
            const Ke = Math.max(Y, K + g.offsetTop + (X ? J : 0) + we) + be;
            (a.style.height = Ke + "px"), (g.scrollTop = Z - Y + g.offsetTop);
          }
          (a.style.margin = `${ht}px 0`),
            (a.style.minHeight = j + "px"),
            (a.style.maxHeight = L + "px"),
            r == null || r(),
            requestAnimationFrame(() => (m.current = !0));
        }
      }, [f, i.trigger, i.valueNode, a, u, g, S, p, i.dir, r]);
    Ve(() => y(), [y]);
    const [C, T] = v.useState();
    Ve(() => {
      u && T(window.getComputedStyle(u).zIndex);
    }, [u]);
    const k = v.useCallback(
      (P) => {
        P && x.current === !0 && (y(), h == null || h(), (x.current = !1));
      },
      [y, h],
    );
    return w.jsx(LA, {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: k,
      children: w.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: w.jsx(ae.div, {
          ...o,
          ref: d,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
J0.displayName = DA;
var jA = "SelectPopperPosition",
  Ku = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = ht,
        ...i
      } = e,
      s = ba(n);
    return w.jsx(j0, {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...i.style,
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
Ku.displayName = jA;
var [LA, Yd] = eo(qn, {}),
  Gu = "SelectViewport",
  ex = v.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      i = jn(Gu, n),
      s = Yd(Gu, n),
      a = ve(t, i.onViewportChange),
      l = v.useRef(0);
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        w.jsx(Ra.Slot, {
          scope: n,
          children: w.jsx(ae.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: a,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: q(o.onScroll, (u) => {
              const c = u.currentTarget,
                { contentWrapper: d, shouldExpandOnScrollRef: f } = s;
              if (f != null && f.current && d) {
                const m = Math.abs(l.current - c.scrollTop);
                if (m > 0) {
                  const x = window.innerHeight - ht * 2,
                    g = parseFloat(d.style.minHeight),
                    S = parseFloat(d.style.height),
                    p = Math.max(g, S);
                  if (p < x) {
                    const h = p + m,
                      y = Math.min(x, h),
                      C = h - y;
                    (d.style.height = y + "px"),
                      d.style.bottom === "0px" &&
                        ((c.scrollTop = C > 0 ? C : 0),
                        (d.style.justifyContent = "flex-end"));
                  }
                }
              }
              l.current = c.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
ex.displayName = Gu;
var tx = "SelectGroup",
  [OA, IA] = eo(tx),
  _A = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Sa();
    return w.jsx(OA, {
      scope: n,
      id: o,
      children: w.jsx(ae.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
_A.displayName = tx;
var nx = "SelectLabel",
  rx = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = IA(nx, n);
    return w.jsx(ae.div, { id: o.id, ...r, ref: t });
  });
rx.displayName = nx;
var qs = "SelectItem",
  [VA, ox] = eo(qs),
  ix = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: i,
        ...s
      } = e,
      a = Dn(qs, n),
      l = jn(qs, n),
      u = a.value === r,
      [c, d] = v.useState(i ?? ""),
      [f, m] = v.useState(!1),
      x = ve(t, (h) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, h, r, o);
      }),
      g = Sa(),
      S = v.useRef("touch"),
      p = () => {
        o || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return w.jsx(VA, {
      scope: n,
      value: r,
      disabled: o,
      textId: g,
      isSelected: u,
      onItemTextChange: v.useCallback((h) => {
        d((y) => y || ((h == null ? void 0 : h.textContent) ?? "").trim());
      }, []),
      children: w.jsx(Ra.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: c,
        children: w.jsx(ae.div, {
          role: "option",
          "aria-labelledby": g,
          "data-highlighted": f ? "" : void 0,
          "aria-selected": u && f,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...s,
          ref: x,
          onFocus: q(s.onFocus, () => m(!0)),
          onBlur: q(s.onBlur, () => m(!1)),
          onClick: q(s.onClick, () => {
            S.current !== "mouse" && p();
          }),
          onPointerUp: q(s.onPointerUp, () => {
            S.current === "mouse" && p();
          }),
          onPointerDown: q(s.onPointerDown, (h) => {
            S.current = h.pointerType;
          }),
          onPointerMove: q(s.onPointerMove, (h) => {
            var y;
            (S.current = h.pointerType),
              o
                ? (y = l.onItemLeave) == null || y.call(l)
                : S.current === "mouse" &&
                  h.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: q(s.onPointerLeave, (h) => {
            var y;
            h.currentTarget === document.activeElement &&
              ((y = l.onItemLeave) == null || y.call(l));
          }),
          onKeyDown: q(s.onKeyDown, (h) => {
            var C;
            (((C = l.searchRef) == null ? void 0 : C.current) !== "" &&
              h.key === " ") ||
              (TA.includes(h.key) && p(), h.key === " " && h.preventDefault());
          }),
        }),
      }),
    });
  });
ix.displayName = qs;
var To = "SelectItemText",
  sx = v.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e,
      s = Dn(To, n),
      a = jn(To, n),
      l = ox(To, n),
      u = RA(To, n),
      [c, d] = v.useState(null),
      f = ve(
        t,
        (p) => d(p),
        l.onItemTextChange,
        (p) => {
          var h;
          return (h = a.itemTextRefCallback) == null
            ? void 0
            : h.call(a, p, l.value, l.disabled);
        },
      ),
      m = c == null ? void 0 : c.textContent,
      x = v.useMemo(
        () =>
          w.jsx(
            "option",
            { value: l.value, disabled: l.disabled, children: m },
            l.value,
          ),
        [l.disabled, l.value, m],
      ),
      { onNativeOptionAdd: g, onNativeOptionRemove: S } = u;
    return (
      Ve(() => (g(x), () => S(x)), [g, S, x]),
      w.jsxs(w.Fragment, {
        children: [
          w.jsx(ae.span, { id: l.textId, ...i, ref: f }),
          l.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? Xr.createPortal(i.children, s.valueNode)
            : null,
        ],
      })
    );
  });
sx.displayName = To;
var ax = "SelectItemIndicator",
  lx = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ox(ax, n).isSelected
      ? w.jsx(ae.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
lx.displayName = ax;
var Yu = "SelectScrollUpButton",
  ux = v.forwardRef((e, t) => {
    const n = jn(Yu, e.__scopeSelect),
      r = Yd(Yu, e.__scopeSelect),
      [o, i] = v.useState(!1),
      s = ve(t, r.onScrollButtonChange);
    return (
      Ve(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const u = l.scrollTop > 0;
            i(u);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? w.jsx(dx, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: l } = n;
              a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
ux.displayName = Yu;
var Xu = "SelectScrollDownButton",
  cx = v.forwardRef((e, t) => {
    const n = jn(Xu, e.__scopeSelect),
      r = Yd(Xu, e.__scopeSelect),
      [o, i] = v.useState(!1),
      s = ve(t, r.onScrollButtonChange);
    return (
      Ve(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const u = l.scrollHeight - l.clientHeight,
              c = Math.ceil(l.scrollTop) < u;
            i(c);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? w.jsx(dx, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: l } = n;
              a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
cx.displayName = Xu;
var dx = v.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      i = jn("SelectScrollButton", n),
      s = v.useRef(null),
      a = Aa(n),
      l = v.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      v.useEffect(() => () => l(), [l]),
      Ve(() => {
        var c;
        const u = a().find((d) => d.ref.current === document.activeElement);
        (c = u == null ? void 0 : u.ref.current) == null ||
          c.scrollIntoView({ block: "nearest" });
      }, [a]),
      w.jsx(ae.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: q(o.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerMove: q(o.onPointerMove, () => {
          var u;
          (u = i.onItemLeave) == null || u.call(i),
            s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerLeave: q(o.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  FA = "SelectSeparator",
  fx = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return w.jsx(ae.div, { "aria-hidden": !0, ...r, ref: t });
  });
fx.displayName = FA;
var Qu = "SelectArrow",
  zA = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = ba(n),
      i = Dn(Qu, n),
      s = jn(Qu, n);
    return i.open && s.position === "popper"
      ? w.jsx(L0, { ...o, ...r, ref: t })
      : null;
  });
zA.displayName = Qu;
function px(e) {
  return e === "" || e === void 0;
}
var hx = v.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = v.useRef(null),
    i = ve(t, o),
    s = t0(n);
  return (
    v.useEffect(() => {
      const a = o.current,
        l = window.HTMLSelectElement.prototype,
        c = Object.getOwnPropertyDescriptor(l, "value").set;
      if (s !== n && c) {
        const d = new Event("change", { bubbles: !0 });
        c.call(a, n), a.dispatchEvent(d);
      }
    }, [s, n]),
    w.jsx(Gd, {
      asChild: !0,
      children: w.jsx("select", { ...r, ref: i, defaultValue: n }),
    })
  );
});
hx.displayName = "BubbleSelect";
function mx(e) {
  const t = Xt(e),
    n = v.useRef(""),
    r = v.useRef(0),
    o = v.useCallback(
      (s) => {
        const a = n.current + s;
        t(a),
          (function l(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
          })(a);
      },
      [t],
    ),
    i = v.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return v.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function gx(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = BA(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase()),
  );
  return l !== n ? l : void 0;
}
function BA(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var UA = W0,
  vx = K0,
  $A = Y0,
  WA = X0,
  yx = Q0,
  HA = ex,
  xx = rx,
  wx = ix,
  KA = sx,
  GA = lx,
  Sx = ux,
  Cx = cx,
  Tx = fx;
const Xh = UA,
  Zu = v.forwardRef(({ className: e, children: t, ...n }, r) =>
    w.jsxs(vx, {
      ref: r,
      className: xe(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...n,
      children: [
        t,
        w.jsx($A, {
          asChild: !0,
          children: w.jsx(Yy, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
Zu.displayName = vx.displayName;
const Px = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(Sx, {
    ref: n,
    className: xe("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: w.jsx(PE, { className: "h-4 w-4" }),
  }),
);
Px.displayName = Sx.displayName;
const kx = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(Cx, {
    ref: n,
    className: xe("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: w.jsx(Yy, { className: "h-4 w-4" }),
  }),
);
kx.displayName = Cx.displayName;
const qu = v.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    w.jsx(WA, {
      children: w.jsxs(yx, {
        ref: o,
        className: xe(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: n,
        ...r,
        children: [
          w.jsx(Px, {}),
          w.jsx(HA, {
            className: xe(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: t,
          }),
          w.jsx(kx, {}),
        ],
      }),
    }),
);
qu.displayName = yx.displayName;
const YA = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(xx, {
    ref: n,
    className: xe("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  }),
);
YA.displayName = xx.displayName;
const ms = v.forwardRef(({ className: e, children: t, ...n }, r) =>
  w.jsxs(wx, {
    ref: r,
    className: xe(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      w.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: w.jsx(GA, { children: w.jsx(TE, { className: "h-4 w-4" }) }),
      }),
      w.jsx(KA, { children: t }),
    ],
  }),
);
ms.displayName = wx.displayName;
const XA = v.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(Tx, { ref: n, className: xe("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
XA.displayName = Tx.displayName;
const bl = {
    instagram: {
      name: "Instagram",
      formats: ["post", "story", "profile"],
      icon: YE,
      color: "hover:text-[#E4405F]",
    },
    facebook: {
      name: "Facebook",
      formats: ["post", "story", "profile"],
      icon: XE,
      color: "hover:text-[#1877F2]",
    },
    twitter: {
      name: "Twitter",
      formats: ["post", "profile", "cover"],
      icon: ZE,
      color: "hover:text-[#1DA1F2]",
    },
    tiktok: {
      name: "TikTok",
      formats: ["post", "story", "profile"],
      icon: QE,
      color: "hover:text-[#000000] dark:hover:text-white",
    },
  },
  Qh = {
    post: w.jsx(RE, { className: "w-4 h-4" }),
    story: w.jsx(Nr, { className: "w-4 h-4" }),
    profile: w.jsx(Nr, { className: "w-4 h-4" }),
    cover: w.jsx(Nr, { className: "w-4 h-4" }),
  },
  Zh = {
    post: "Julkaisu",
    story: "Tarina",
    profile: "Profiilikuva",
    cover: "Kansikuva",
  },
  QA = ({
    selectedPlatform: e,
    setSelectedPlatform: t,
    selectedFormat: n,
    setSelectedFormat: r,
  }) => {
    const o = (a) => {
        t(a), r(a === "original" ? "original" : "");
      },
      i = (a) => {
        var l;
        return a === "original"
          ? []
          : ((l = bl[a]) == null ? void 0 : l.formats) || [];
      },
      s = ({ platform: a }) => {
        if (!a) return null;
        if (a === "original")
          return w.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              w.jsx(Nr, { className: "w-4 h-4" }),
              w.jsx("span", { children: "Alkuperäinen" }),
            ],
          });
        const { icon: l, name: u } = bl[a];
        return w.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            w.jsx(l, { className: "w-4 h-4" }),
            w.jsx("span", { children: u }),
          ],
        });
      };
    return w.jsxs("div", {
      className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
      children: [
        w.jsxs(Xh, {
          value: e,
          onValueChange: o,
          children: [
            w.jsx(Zu, {
              className: "w-full sm:w-48",
              children: e
                ? w.jsx(s, { platform: e })
                : w.jsx("span", {
                    className: "text-muted-foreground",
                    children: "Valitse alusta",
                  }),
            }),
            w.jsxs(qu, {
              children: [
                w.jsx(ms, {
                  value: "original",
                  children: w.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      w.jsx(Nr, { className: "w-4 h-4" }),
                      w.jsx("span", { children: "Alkuperäinen" }),
                    ],
                  }),
                }),
                Object.entries(bl).map(([a, { name: l, icon: u, color: c }]) =>
                  w.jsx(
                    ms,
                    {
                      value: a,
                      children: w.jsxs("div", {
                        className: `flex items-center gap-2 transition-colors ${c}`,
                        children: [
                          w.jsx(u, { className: "w-4 h-4" }),
                          w.jsx("span", { children: l }),
                        ],
                      }),
                    },
                    a,
                  ),
                ),
              ],
            }),
          ],
        }),
        e &&
          e !== "original" &&
          w.jsxs(Xh, {
            value: n,
            onValueChange: r,
            disabled: !e || e === "original",
            children: [
              w.jsx(Zu, {
                className: "w-full sm:w-48",
                children: n
                  ? w.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [Qh[n], w.jsx("span", { children: Zh[n] })],
                    })
                  : w.jsx("span", {
                      className: "text-muted-foreground",
                      children: "Valitse tyyppi",
                    }),
              }),
              w.jsx(qu, {
                children: i(e).map((a) =>
                  w.jsx(
                    ms,
                    {
                      value: a,
                      children: w.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [Qh[a], w.jsx("span", { children: Zh[a] })],
                      }),
                    },
                    a,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  };
function ZA(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Xd = (e) => {
  const { present: t, children: n } = e,
    r = qA(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = ve(r.ref, JA(o));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(o, { ref: i })
    : null;
};
Xd.displayName = "Presence";
function qA(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    o = v.useRef(e),
    i = v.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = ZA(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = Qi(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    Ve(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const f = i.current,
          m = Qi(u);
        e
          ? l("MOUNT")
          : m === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && f !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    Ve(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (m) => {
            const g = Qi(r.current).includes(m.animationName);
            if (m.target === t && g && (l("ANIMATION_END"), !o.current)) {
              const S = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = S);
                }));
            }
          },
          f = (m) => {
            m.target === t && (i.current = Qi(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: v.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Qi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function JA(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var [Na, bb] = Md("Tooltip", [ka]),
  Ma = ka(),
  Ex = "TooltipProvider",
  eb = 700,
  Ju = "tooltip.open",
  [tb, Qd] = Na(Ex),
  Rx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = eb,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      [s, a] = v.useState(!0),
      l = v.useRef(!1),
      u = v.useRef(0);
    return (
      v.useEffect(() => {
        const c = u.current;
        return () => window.clearTimeout(c);
      }, []),
      w.jsx(tb, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          window.clearTimeout(u.current), a(!1);
        }, []),
        onClose: v.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => a(!0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: v.useCallback((c) => {
          l.current = c;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Rx.displayName = Ex;
var Da = "Tooltip",
  [nb, Ci] = Na(Da),
  Ax = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: o = !1,
        onOpenChange: i,
        disableHoverableContent: s,
        delayDuration: a,
      } = e,
      l = Qd(Da, e.__scopeTooltip),
      u = Ma(t),
      [c, d] = v.useState(null),
      f = Sa(),
      m = v.useRef(0),
      x = s ?? l.disableHoverableContent,
      g = a ?? l.delayDuration,
      S = v.useRef(!1),
      [p = !1, h] = Gs({
        prop: r,
        defaultProp: o,
        onChange: (P) => {
          P
            ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ju)))
            : l.onClose(),
            i == null || i(P);
        },
      }),
      y = v.useMemo(
        () => (p ? (S.current ? "delayed-open" : "instant-open") : "closed"),
        [p],
      ),
      C = v.useCallback(() => {
        window.clearTimeout(m.current),
          (m.current = 0),
          (S.current = !1),
          h(!0);
      }, [h]),
      T = v.useCallback(() => {
        window.clearTimeout(m.current), (m.current = 0), h(!1);
      }, [h]),
      k = v.useCallback(() => {
        window.clearTimeout(m.current),
          (m.current = window.setTimeout(() => {
            (S.current = !0), h(!0), (m.current = 0);
          }, g));
      }, [g, h]);
    return (
      v.useEffect(
        () => () => {
          m.current && (window.clearTimeout(m.current), (m.current = 0));
        },
        [],
      ),
      w.jsx(M0, {
        ...u,
        children: w.jsx(nb, {
          scope: t,
          contentId: f,
          open: p,
          stateAttribute: y,
          trigger: c,
          onTriggerChange: d,
          onTriggerEnter: v.useCallback(() => {
            l.isOpenDelayed ? k() : C();
          }, [l.isOpenDelayed, k, C]),
          onTriggerLeave: v.useCallback(() => {
            x ? T() : (window.clearTimeout(m.current), (m.current = 0));
          }, [T, x]),
          onOpen: C,
          onClose: T,
          disableHoverableContent: x,
          children: n,
        }),
      })
    );
  };
Ax.displayName = Da;
var ec = "TooltipTrigger",
  bx = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ci(ec, n),
      i = Qd(ec, n),
      s = Ma(n),
      a = v.useRef(null),
      l = ve(t, a, o.onTriggerChange),
      u = v.useRef(!1),
      c = v.useRef(!1),
      d = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      w.jsx(D0, {
        asChild: !0,
        ...s,
        children: w.jsx(ae.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: q(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: q(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: q(e.onPointerDown, () => {
            (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: q(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: q(e.onBlur, o.onClose),
          onClick: q(e.onClick, o.onClose),
        }),
      })
    );
  });
bx.displayName = ec;
var Zd = "TooltipPortal",
  [rb, ob] = Na(Zd, { forceMount: void 0 }),
  Nx = (e) => {
    const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
      i = Ci(Zd, t);
    return w.jsx(rb, {
      scope: t,
      forceMount: n,
      children: w.jsx(Xd, {
        present: n || i.open,
        children: w.jsx(Kd, { asChild: !0, container: o, children: r }),
      }),
    });
  };
Nx.displayName = Zd;
var Hr = "TooltipContent",
  Mx = v.forwardRef((e, t) => {
    const n = ob(Hr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Ci(Hr, e.__scopeTooltip);
    return w.jsx(Xd, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? w.jsx(Dx, { side: o, ...i, ref: t })
        : w.jsx(ib, { side: o, ...i, ref: t }),
    });
  }),
  ib = v.forwardRef((e, t) => {
    const n = Ci(Hr, e.__scopeTooltip),
      r = Qd(Hr, e.__scopeTooltip),
      o = v.useRef(null),
      i = ve(t, o),
      [s, a] = v.useState(null),
      { trigger: l, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      f = v.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      m = v.useCallback(
        (x, g) => {
          const S = x.currentTarget,
            p = { x: x.clientX, y: x.clientY },
            h = ub(p, S.getBoundingClientRect()),
            y = cb(p, h),
            C = db(g.getBoundingClientRect()),
            T = pb([...y, ...C]);
          a(T), d(!0);
        },
        [d],
      );
    return (
      v.useEffect(() => () => f(), [f]),
      v.useEffect(() => {
        if (l && c) {
          const x = (S) => m(S, c),
            g = (S) => m(S, l);
          return (
            l.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", g),
            () => {
              l.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [l, c, m, f]),
      v.useEffect(() => {
        if (s) {
          const x = (g) => {
            const S = g.target,
              p = { x: g.clientX, y: g.clientY },
              h =
                (l == null ? void 0 : l.contains(S)) ||
                (c == null ? void 0 : c.contains(S)),
              y = !fb(p, s);
            h ? f() : y && (f(), u());
          };
          return (
            document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
          );
        }
      }, [l, c, s, u, f]),
      w.jsx(Dx, { ...e, ref: i })
    );
  }),
  [sb, ab] = Na(Da, { isInside: !1 }),
  Dx = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = Ci(Hr, n),
      u = Ma(n),
      { onClose: c } = l;
    return (
      v.useEffect(
        () => (
          document.addEventListener(Ju, c),
          () => document.removeEventListener(Ju, c)
        ),
        [c],
      ),
      v.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const m = f.target;
            m != null && m.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      w.jsx(Id, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: w.jsxs(j0, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
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
            w.jsx(Zy, { children: r }),
            w.jsx(sb, {
              scope: n,
              isInside: !0,
              children: w.jsx(OR, {
                id: l.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Mx.displayName = Hr;
var jx = "TooltipArrow",
  lb = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ma(n);
    return ab(jx, n).isInside ? null : w.jsx(L0, { ...o, ...r, ref: t });
  });
lb.displayName = jx;
function ub(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function cb(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function db(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function fb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[s].x,
      c = t[s].y;
    l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
  }
  return o;
}
function pb(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    hb(t)
  );
}
function hb(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var mb = Rx,
  gb = Ax,
  vb = bx,
  yb = Nx,
  Lx = Mx;
const xb = mb,
  wb = gb,
  Sb = vb,
  Ox = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    w.jsx(yb, {
      children: w.jsx(Lx, {
        ref: r,
        sideOffset: t,
        className: xe(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e,
        ),
        ...n,
      }),
    }),
  );
Ox.displayName = Lx.displayName;
const Cb = ({ tooltipMessage: e, children: t, disabled: n, ...r }) =>
  w.jsx(xb, {
    children: w.jsxs(wb, {
      children: [
        w.jsx(Sb, {
          asChild: !0,
          children: w.jsx("div", {
            className: "w-full",
            children: w.jsx(fn, {
              ...r,
              disabled: n,
              className: `w-full ${r.className}`,
              children: t,
            }),
          }),
        }),
        n && e && w.jsx(Ox, { children: w.jsx("p", { children: e }) }),
      ],
    }),
  });
function Tb() {
  const e = "",
    [t, n] = v.useState(!1),
    [r, o] = v.useState("input"),
    [i, s] = v.useState(""),
    [a, l] = v.useState(!1),
    [u, c] = v.useState([]),
    [d, f] = v.useState(""),
    [m, x] = v.useState(""),
    [g, S] = v.useState(0),
    {
      images: p,
      handleFileChange: h,
      handleRemoveImage: y,
      handleDrop: C,
      handleDragOver: T,
      inputKey: k,
    } = yE(),
    {
      imageUrl: P,
      loadingStatus: E,
      setLoadingStatus: M,
      imageDescription: b,
      handleSubmit: _,
      downloadImage: L,
      testImageDownload: $,
    } = vE({ apiUrl: e }),
    {
      adText: z,
      setAdText: K,
      adTextLoading: F,
      isCopied: O,
      generateAdText: R,
      handleCopy: N,
    } = gE({ apiUrl: e }),
    j = () => {
      s(""), l(!1), c([]), f(""), x(""), y(), o("input");
    },
    { addRecentImage: B } = Ky({ apiUrl: e }),
    J = async (Y) => {
      if ((Y.preventDefault(), !p.length || !i)) {
        alert("Täytä molemmat kentät!");
        return;
      }
      try {
        o("loading"), M("Generoidaan mainoskuvaa...");
        const le = await _(Y, p[0].file, i, t);
        "success" in le &&
          le.success &&
          le.imageId &&
          (B(le.imageId),
          S((we) => we + 1),
          o("output"),
          a &&
            le.newDescription &&
            (M("Generoidaan mainostekstiä..."), await R(le.newDescription, u)));
      } catch (le) {
        le instanceof Error &&
          (alert("Tapahtui virhe: " + le.message), o("input"));
      }
    },
    rt = async () => {
      try {
        await L(d, m);
      } catch (Y) {
        Y instanceof Error && alert("Error downloading image: " + Y.message);
      }
    };
  return w.jsx(ai.div, {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
    className: "py-12 px-4 w-full",
    children: w.jsxs("div", {
      className: "max-w-6xl mx-auto space-y-8",
      children: [
        w.jsx(Vy, {
          mode: "wait",
          children:
            r === "input"
              ? w.jsx(
                  xl,
                  {
                    stepKey: "input",
                    children: w.jsx(
                      ai.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: 20 },
                        transition: { duration: 0.3 },
                        children: w.jsxs(_o, {
                          className: "shadow-lg max-w-2xl mx-auto",
                          children: [
                            w.jsx(Ld, {
                              children: w.jsxs(Od, {
                                className: "flex items-center gap-2",
                                children: [
                                  w.jsx(Nr, { className: "w-5 h-5" }),
                                  "Kuvan luonti",
                                ],
                              }),
                            }),
                            w.jsx(Vo, {
                              children: w.jsxs("form", {
                                onSubmit: J,
                                className: "space-y-6",
                                children: [
                                  w.jsxs("div", {
                                    children: [
                                      w.jsx("label", {
                                        htmlFor: "description",
                                        className:
                                          "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children:
                                          "Kuvaile haluamasi mainoskuva",
                                      }),
                                      w.jsx("textarea", {
                                        id: "description",
                                        rows: 4,
                                        value: i,
                                        onChange: (Y) => s(Y.target.value),
                                        placeholder:
                                          "Kuvaile millaisen mainoskuvan haluat tekoälyn luovan...",
                                        className:
                                          "w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow",
                                      }),
                                    ],
                                  }),
                                  w.jsxs("div", {
                                    className:
                                      "border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4",
                                    children: [
                                      w.jsx(JE, {
                                        inputKey: k,
                                        onFileChange: h,
                                        onDrop: C,
                                        onDragOver: T,
                                      }),
                                      p.length > 0 &&
                                        w.jsxs("div", {
                                          className:
                                            "relative mt-4 w-48 h-48 mx-auto",
                                          children: [
                                            w.jsx("img", {
                                              src: p[0].preview,
                                              alt: "Uploaded image",
                                              className:
                                                "rounded-lg shadow-md w-full h-full object-cover",
                                            }),
                                            w.jsx(fn, {
                                              variant: "ghost",
                                              size: "icon",
                                              className:
                                                "absolute top-2 right-2 bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90 rounded-full",
                                              onClick: y,
                                              children: w.jsx(bE, {
                                                className: "h-4 w-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  w.jsx(KE, {
                                    isAdText: a,
                                    onCheckedChange: l,
                                    selectedOptions: u,
                                    onOptionChange: (Y) => {
                                      const { value: le, checked: we } =
                                        Y.target;
                                      c((I) =>
                                        we
                                          ? [...I, le]
                                          : I.filter((Z) => Z !== le),
                                      );
                                    },
                                  }),
                                  w.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                      w.jsx(jd, {
                                        id: "creativity",
                                        checked: t,
                                        onCheckedChange: n,
                                      }),
                                      w.jsx(Nd, {
                                        children:
                                          "Luova moodi (vapaampi tulkinta kuvasta)",
                                      }),
                                    ],
                                  }),
                                  w.jsx(Cb, {
                                    type: "submit",
                                    className:
                                      "bg-blue-600 hover:bg-blue-700 text-white transition-colors",
                                    disabled: !p.length || !i,
                                    tooltipMessage:
                                      !p.length && !i
                                        ? "Lisää kuva ja kuvaus jatkaaksesi"
                                        : p.length
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
              : r === "loading"
                ? w.jsx(
                    xl,
                    {
                      stepKey: "loading",
                      children: w.jsx(_o, {
                        className: "shadow-lg max-w-2xl mx-auto",
                        children: w.jsx(Vo, {
                          className: "p-12",
                          children: w.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center gap-4",
                            children: [
                              w.jsx("div", {
                                className:
                                  "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin",
                              }),
                              w.jsx("p", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white",
                                children: E || "Generoidaan mainoskuvaa...",
                              }),
                            ],
                          }),
                        }),
                      }),
                    },
                    "loading-step",
                  )
                : w.jsx(
                    xl,
                    {
                      stepKey: "output",
                      children: w.jsxs("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                          w.jsx("div", {
                            className: "flex justify-between items-center mb-6",
                            children: w.jsxs(fn, {
                              onClick: j,
                              variant: "outline",
                              className: "flex items-center gap-2",
                              children: [
                                w.jsx(CE, { className: "w-4 h-4" }),
                                "Palaa alkuun",
                              ],
                            }),
                          }),
                          w.jsx(_o, {
                            className: "shadow-lg",
                            children: w.jsxs(Vo, {
                              className: "p-6 space-y-6",
                              children: [
                                w.jsx("div", {
                                  className:
                                    "relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800",
                                  children: w.jsx("img", {
                                    src: P,
                                    alt: "Generoitu kuva",
                                    className:
                                      "w-full h-auto object-contain max-h-96",
                                  }),
                                }),
                                w.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    w.jsx(QA, {
                                      selectedPlatform: d,
                                      setSelectedPlatform: f,
                                      selectedFormat: m,
                                      setSelectedFormat: x,
                                    }),
                                    w.jsx(fn, {
                                      onClick: rt,
                                      className:
                                        "w-full bg-green-600 hover:bg-green-700 text-white transition-colors",
                                      disabled: !d || !m,
                                      children: "Lataa kuva",
                                    }),
                                  ],
                                }),
                                a &&
                                  w.jsx("div", {
                                    className: "relative",
                                    children: F
                                      ? w.jsxs("div", {
                                          className:
                                            "flex flex-col items-center justify-center p-8 space-y-4",
                                          children: [
                                            w.jsx(Xy, {
                                              className:
                                                "h-8 w-8 animate-spin text-blue-500",
                                            }),
                                            w.jsx("p", {
                                              className:
                                                "text-sm text-gray-600 dark:text-gray-400",
                                              children:
                                                "Generoidaan mainostekstiä...",
                                            }),
                                          ],
                                        })
                                      : z
                                        ? w.jsxs("div", {
                                            className: "relative",
                                            children: [
                                              w.jsx("textarea", {
                                                value: z,
                                                onChange: (Y) =>
                                                  K(Y.target.value),
                                                className:
                                                  "w-full h-64 rounded-lg border border-gray-300 dark:border-gray-600 p-4 resize-none",
                                              }),
                                              w.jsx(fn, {
                                                size: "icon",
                                                className:
                                                  "absolute top-2 right-2",
                                                onClick: N,
                                                children: O
                                                  ? w.jsx(GE, {
                                                      className: "h-4 w-4",
                                                    })
                                                  : w.jsx(kE, {
                                                      className: "h-4 w-4",
                                                    }),
                                              }),
                                            ],
                                          })
                                        : null,
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
        w.jsx(v.Suspense, {
          fallback: w.jsx("p", { children: "Viimeisiä kuvia ladataan..." }),
          children: w.jsx("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: w.jsx(n2, { apiUrl: e, refreshTrigger: g }),
          }),
        }),
      ],
    }),
  });
}
function Pb() {
  return w.jsxs("main", {
    className: "h-screen overflow-y-auto",
    children: [w.jsx(mE, {}), w.jsx(Tb, {})],
  });
}
dv(document.getElementById("root")).render(
  w.jsx(v.StrictMode, { children: w.jsx(Pb, {}) }),
);
