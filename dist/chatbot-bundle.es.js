import we, { useState as ee } from "react";
var J = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe) return W;
  Oe = 1;
  var T = we, x = Symbol.for("react.element"), C = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, O = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(b, u, _) {
    var p, R = {}, S = null, N = null;
    _ !== void 0 && (S = "" + _), u.key !== void 0 && (S = "" + u.key), u.ref !== void 0 && (N = u.ref);
    for (p in u) m.call(u, p) && !j.hasOwnProperty(p) && (R[p] = u[p]);
    if (b && b.defaultProps) for (p in u = b.defaultProps, u) R[p] === void 0 && (R[p] = u[p]);
    return { $$typeof: x, type: b, key: S, ref: N, props: R, _owner: O.current };
  }
  return W.Fragment = C, W.jsx = E, W.jsxs = E, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function pr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var T = we, x = Symbol.for("react.element"), C = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), b = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), re = Symbol.iterator, Pe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var k = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, Ae = !1, Ie = !1, $e = !1, We = !1, te;
    te = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === j || We || e === O || e === _ || e === p || $e || e === N || Fe || Ae || Ie || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === E || e.$$typeof === b || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case C:
          return "Portal";
        case j:
          return "Profiler";
        case O:
          return "StrictMode";
        case _:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ne(r) + ".Consumer";
          case E:
            var t = e;
            return ne(t._context) + ".Provider";
          case u:
            return Ne(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case S: {
            var o = e, s = o._payload, i = o._init;
            try {
              return y(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, A = 0, ae, ie, oe, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Me() {
      {
        if (A === 0) {
          ae = console.log, ie = console.info, oe = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Le() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ae
            }),
            info: w({}, e, {
              value: ie
            }),
            warn: w({}, e, {
              value: oe
            }),
            error: w({}, e, {
              value: se
            }),
            group: w({}, e, {
              value: ue
            }),
            groupCollapsed: w({}, e, {
              value: le
            }),
            groupEnd: w({}, e, {
              value: ce
            })
          });
        }
        A < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, B;
    function M(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var K = !1, L;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ue();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), l = a.length - 1, c = d.length - 1; l >= 1 && c >= 0 && a[l] !== d[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== d[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== d[c]) {
                    var h = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, h), h;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = s, Le(), Error.prepareStackTrace = o;
      }
      var F = e ? e.displayName || e.name : "", P = F ? M(F) : "";
      return typeof e == "function" && L.set(e, P), P;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Je(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case _:
          return M("Suspense");
        case p:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ve(e.render);
          case R:
            return U(e.type, r, t);
          case S: {
            var n = e, o = n._payload, s = n._init;
            try {
              return U(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, pe = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, o) {
      {
        var s = Function.call.bind(I);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (V(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, V(o), f("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Be = Array.isArray;
    function G(e) {
      return Be(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ge(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), he(e);
    }
    var $ = k.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ye, z;
    z = {};
    function Xe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = y($.current.type);
        z[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y($.current.type), e.ref), z[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, o) {
      {
        var s, i = {}, a = null, d = null;
        t !== void 0 && (ge(t), a = "" + t), He(r) && (ge(r.key), a = "" + r.key), Xe(r) && (d = r.ref, Ze(r, o));
        for (s in r)
          I.call(r, s) && !ze.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            i[s] === void 0 && (i[s] = l[s]);
        }
        if (a || d) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, c), d && er(i, c);
        }
        return rr(e, a, d, o, n, $.current, i);
      }
    }
    var X = k.ReactCurrentOwner, me = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function Re() {
      {
        if (X.current) {
          var e = y(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ee = {};
    function ar(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + y(e._owner.type) + "."), D(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && _e(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = ke(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              Z(i.value) && _e(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var o = y(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var xe = {};
    function Ce(e, r, t, n, o, s) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = nr();
          d ? a += d : a += Re();
          var l;
          e === null ? l = "null" : G(e) ? l = "array" : e !== void 0 && e.$$typeof === x ? (l = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = tr(e, r, t, o, s);
        if (c == null)
          return c;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (G(h)) {
                for (var F = 0; F < h.length; F++)
                  Te(h[F], e);
                Object.freeze && Object.freeze(h);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(h, e);
        }
        if (I.call(r, "key")) {
          var P = y(e), v = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), Q = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[P + Q]) {
            var fr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, P, fr, P), xe[P + Q] = !0;
          }
        }
        return e === m ? or(c) : ir(c), c;
      }
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = ur, cr = sr;
    Y.Fragment = m, Y.jsx = lr, Y.jsxs = cr;
  }()), Y;
}
var Se;
function hr() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? J.exports = vr() : J.exports = pr()), J.exports;
}
var g = hr();
const br = () => {
  const [T, x] = ee(!1), [C, m] = ee(""), [O, j] = ee(
    []
  ), E = () => {
    x(!T);
  }, b = () => {
    C.trim() && (j([...O, { text: C, sender: "user" }]), m(""), setTimeout(() => {
      j((u) => [
        ...u,
        { text: "This is a bot response.", sender: "bot" }
      ]);
    }, 1e3));
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "chatbot", children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        className: `chatbot-icon ${T ? "hidden" : ""}`,
        onClick: E,
        children: "💬"
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: `chatbox ${T ? "" : "hidden"}`, children: [
      /* @__PURE__ */ g.jsxs("div", { className: "chatbox-header", children: [
        /* @__PURE__ */ g.jsx("span", { children: "Chatbot" }),
        /* @__PURE__ */ g.jsx("button", { onClick: E, children: "✖" })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: "chatbox-messages", children: O.map((u, _) => /* @__PURE__ */ g.jsx("div", { className: `chatbox-message ${u.sender}`, children: u.text }, _)) }),
      /* @__PURE__ */ g.jsxs("div", { className: "chatbox-input", children: [
        /* @__PURE__ */ g.jsx(
          "input",
          {
            type: "text",
            placeholder: "Type a message...",
            value: C,
            onChange: (u) => m(u.target.value),
            onKeyUp: (u) => u.key === "Enter" && b()
          }
        ),
        /* @__PURE__ */ g.jsx("button", { onClick: b, children: "Send" })
      ] })
    ] })
  ] });
};
export {
  br as default
};
