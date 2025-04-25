(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._plot_1gy07_5>._xaxis_1gy07_5,._plot_1gy07_5>._yaxis_1gy07_5{font-size:12px}._spike_1gy07_9{stroke-width:3px}._plot_1gy07_5>._xlabel_1gy07_12{text-anchor:middle}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Da = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1005, height: 1005 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-1",
  controls_class: "tw:p-1",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-8 tw:sm:p-0"
};
function yn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function qa(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ci(t) {
  let n, e, r;
  t.length !== 2 ? (n = yn, e = (s, l) => yn(t(s), l), r = (s, l) => t(s) - l) : (n = t === yn || t === qa ? t : Ha, e = t, r = t);
  function i(s, l, u = 0, p = s.length) {
    if (u < p) {
      if (n(l, l) !== 0) return p;
      do {
        const h = u + p >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : p = h;
      } while (u < p);
    }
    return u;
  }
  function a(s, l, u = 0, p = s.length) {
    if (u < p) {
      if (n(l, l) !== 0) return p;
      do {
        const h = u + p >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : p = h;
      } while (u < p);
    }
    return u;
  }
  function o(s, l, u = 0, p = s.length) {
    const h = i(s, l, u, p - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Ha() {
  return 0;
}
function Na(t) {
  return t === null ? NaN : +t;
}
const Ba = ci(yn), Xa = Ba.right;
ci(Na).center;
class cr extends Map {
  constructor(n, e = Ya) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(fr(this, n));
  }
  has(n) {
    return super.has(fr(this, n));
  }
  set(n, e) {
    return super.set(Ua(this, n), e);
  }
  delete(n) {
    return super.delete(Ga(this, n));
  }
}
function fr({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function Ua({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function Ga({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function Ya(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Va = Math.sqrt(50), Ka = Math.sqrt(10), Za = Math.sqrt(2);
function An(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Va ? 10 : a >= Ka ? 5 : a >= Za ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? An(t, n, e * 2) : [s, l, u];
}
function Wa(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? An(n, t, e) : An(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function de(t, n, e) {
  return n = +n, t = +t, e = +e, An(t, n, e)[2];
}
function Ja(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? de(n, t, e) : de(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function un(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Qa(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
function ja(t) {
  return t;
}
var re = 1, ie = 2, ge = 3, Ht = 4, hr = 1e-6;
function to(t) {
  return "translate(" + t + ",0)";
}
function no(t) {
  return "translate(0," + t + ")";
}
function eo(t) {
  return (n) => +t(n);
}
function ro(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function io() {
  return !this.__axis;
}
function fi(t, n) {
  var e = [], r = null, i = null, a = 6, o = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === re || t === Ht ? -1 : 1, p = t === Ht || t === ie ? "x" : "y", h = t === re || t === ge ? to : no;
  function f(c) {
    var d = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), _ = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : ja), g = Math.max(a, 0) + s, y = n.range(), x = +y[0] + l, M = +y[y.length - 1] + l, m = (n.bandwidth ? ro : eo)(n.copy(), l), v = c.selection ? c.selection() : c, T = v.selectAll(".domain").data([null]), A = v.selectAll(".tick").data(d, n).order(), P = A.exit(), L = A.enter().append("g").attr("class", "tick"), D = A.select("line"), b = A.select("text");
    T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(L), D = D.merge(L.append("line").attr("stroke", "currentColor").attr(p + "2", u * a)), b = b.merge(L.append("text").attr("fill", "currentColor").attr(p, u * g).attr("dy", t === re ? "0em" : t === ge ? "0.71em" : "0.32em")), c !== v && (T = T.transition(c), A = A.transition(c), D = D.transition(c), b = b.transition(c), P = P.transition(c).attr("opacity", hr).attr("transform", function(E) {
      return isFinite(E = m(E)) ? h(E + l) : this.getAttribute("transform");
    }), L.attr("opacity", hr).attr("transform", function(E) {
      var k = this.parentNode.__axis;
      return h((k && isFinite(k = k(E)) ? k : m(E)) + l);
    })), P.remove(), T.attr("d", t === Ht || t === ie ? o ? "M" + u * o + "," + x + "H" + l + "V" + M + "H" + u * o : "M" + l + "," + x + "V" + M : o ? "M" + x + "," + u * o + "V" + l + "H" + M + "V" + u * o : "M" + x + "," + l + "H" + M), A.attr("opacity", 1).attr("transform", function(E) {
      return h(m(E) + l);
    }), D.attr(p + "2", u * a), b.attr(p, u * g).text(_), v.filter(io).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ie ? "start" : t === Ht ? "end" : "middle"), v.each(function() {
      this.__axis = m;
    });
  }
  return f.scale = function(c) {
    return arguments.length ? (n = c, f) : n;
  }, f.ticks = function() {
    return e = Array.from(arguments), f;
  }, f.tickArguments = function(c) {
    return arguments.length ? (e = c == null ? [] : Array.from(c), f) : e.slice();
  }, f.tickValues = function(c) {
    return arguments.length ? (r = c == null ? null : Array.from(c), f) : r && r.slice();
  }, f.tickFormat = function(c) {
    return arguments.length ? (i = c, f) : i;
  }, f.tickSize = function(c) {
    return arguments.length ? (a = o = +c, f) : a;
  }, f.tickSizeInner = function(c) {
    return arguments.length ? (a = +c, f) : a;
  }, f.tickSizeOuter = function(c) {
    return arguments.length ? (o = +c, f) : o;
  }, f.tickPadding = function(c) {
    return arguments.length ? (s = +c, f) : s;
  }, f.offset = function(c) {
    return arguments.length ? (l = +c, f) : l;
  }, f;
}
function hi(t) {
  return fi(ge, t);
}
function pi(t) {
  return fi(Ht, t);
}
var ao = { value: () => {
} };
function Ne() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new _n(e);
}
function _n(t) {
  this._ = t;
}
function oo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
_n.prototype = Ne.prototype = {
  constructor: _n,
  on: function(t, n) {
    var e = this._, r = oo(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = so(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = pr(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = pr(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new _n(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function so(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function pr(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = ao, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var me = "http://www.w3.org/1999/xhtml";
const dr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: me,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Hn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), dr.hasOwnProperty(n) ? { space: dr[n], local: t } : t;
}
function uo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === me && n.documentElement.namespaceURI === me ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function lo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function di(t) {
  var n = Hn(t);
  return (n.local ? lo : uo)(n);
}
function co() {
}
function Be(t) {
  return t == null ? co : function() {
    return this.querySelector(t);
  };
}
function fo(t) {
  typeof t != "function" && (t = Be(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, p = 0; p < o; ++p)
      (l = a[p]) && (u = t.call(l, l.__data__, p, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[p] = u);
  return new X(r, this._parents);
}
function ho(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function po() {
  return [];
}
function gi(t) {
  return t == null ? po : function() {
    return this.querySelectorAll(t);
  };
}
function go(t) {
  return function() {
    return ho(t.apply(this, arguments));
  };
}
function mo(t) {
  typeof t == "function" ? t = go(t) : t = gi(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new X(r, i);
}
function mi(t) {
  return function() {
    return this.matches(t);
  };
}
function yi(t) {
  return function(n) {
    return n.matches(t);
  };
}
var yo = Array.prototype.find;
function _o(t) {
  return function() {
    return yo.call(this.children, t);
  };
}
function vo() {
  return this.firstElementChild;
}
function bo(t) {
  return this.select(t == null ? vo : _o(typeof t == "function" ? t : yi(t)));
}
var wo = Array.prototype.filter;
function xo() {
  return Array.from(this.children);
}
function Mo(t) {
  return function() {
    return wo.call(this.children, t);
  };
}
function $o(t) {
  return this.selectAll(t == null ? xo : Mo(typeof t == "function" ? t : yi(t)));
}
function Ao(t) {
  typeof t != "function" && (t = mi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new X(r, this._parents);
}
function _i(t) {
  return new Array(t.length);
}
function To() {
  return new X(this._enter || this._groups.map(_i), this._parents);
}
function Tn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Tn.prototype = {
  constructor: Tn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function So(t) {
  return function() {
    return t;
  };
}
function ko(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new Tn(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function Po(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), p = n.length, h = a.length, f = new Array(p), c;
  for (s = 0; s < p; ++s)
    (l = n[s]) && (f[s] = c = o.call(l, l.__data__, s, n) + "", u.has(c) ? i[s] = l : u.set(c, l));
  for (s = 0; s < h; ++s)
    c = o.call(t, a[s], s, a) + "", (l = u.get(c)) ? (r[s] = l, l.__data__ = a[s], u.delete(c)) : e[s] = new Tn(t, a[s]);
  for (s = 0; s < p; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Eo(t) {
  return t.__data__;
}
function Oo(t, n) {
  if (!arguments.length) return Array.from(this, Eo);
  var e = n ? Po : ko, r = this._parents, i = this._groups;
  typeof t != "function" && (t = So(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var p = r[u], h = i[u], f = h.length, c = zo(t.call(p, p && p.__data__, u, r)), d = c.length, _ = s[u] = new Array(d), g = o[u] = new Array(d), y = l[u] = new Array(f);
    e(p, h, _, g, y, c, n);
    for (var x = 0, M = 0, m, v; x < d; ++x)
      if (m = _[x]) {
        for (x >= M && (M = x + 1); !(v = g[M]) && ++M < d; ) ;
        m._next = v || null;
      }
  }
  return o = new X(o, r), o._enter = s, o._exit = l, o;
}
function zo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Io() {
  return new X(this._exit || this._groups.map(_i), this._parents);
}
function Co(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Ro(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], p = r[l], h = u.length, f = s[l] = new Array(h), c, d = 0; d < h; ++d)
      (c = u[d] || p[d]) && (f[d] = c);
  for (; l < i; ++l)
    s[l] = e[l];
  return new X(s, this._parents);
}
function Fo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Lo(t) {
  t || (t = Do);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, p = 0; p < s; ++p)
      (u = o[p]) && (l[p] = u);
    l.sort(n);
  }
  return new X(i, this._parents).order();
}
function Do(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function qo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ho() {
  return Array.from(this);
}
function No() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Bo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Xo() {
  return !this.node();
}
function Uo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Go(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Yo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Vo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ko(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Zo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Wo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Jo(t, n) {
  var e = Hn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Yo : Go : typeof n == "function" ? e.local ? Wo : Zo : e.local ? Ko : Vo)(e, n));
}
function vi(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Qo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function jo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ts(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ns(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Qo : typeof n == "function" ? ts : jo)(t, n, e ?? "")) : Et(this.node(), t);
}
function Et(t, n) {
  return t.style.getPropertyValue(n) || vi(t).getComputedStyle(t, null).getPropertyValue(n);
}
function es(t) {
  return function() {
    delete this[t];
  };
}
function rs(t, n) {
  return function() {
    this[t] = n;
  };
}
function is(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function as(t, n) {
  return arguments.length > 1 ? this.each((n == null ? es : typeof n == "function" ? is : rs)(t, n)) : this.node()[t];
}
function bi(t) {
  return t.trim().split(/^|\s+/);
}
function Xe(t) {
  return t.classList || new wi(t);
}
function wi(t) {
  this._node = t, this._names = bi(t.getAttribute("class") || "");
}
wi.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function xi(t, n) {
  for (var e = Xe(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Mi(t, n) {
  for (var e = Xe(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function os(t) {
  return function() {
    xi(this, t);
  };
}
function ss(t) {
  return function() {
    Mi(this, t);
  };
}
function us(t, n) {
  return function() {
    (n.apply(this, arguments) ? xi : Mi)(this, t);
  };
}
function ls(t, n) {
  var e = bi(t + "");
  if (arguments.length < 2) {
    for (var r = Xe(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? us : n ? os : ss)(e, n));
}
function cs() {
  this.textContent = "";
}
function fs(t) {
  return function() {
    this.textContent = t;
  };
}
function hs(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ps(t) {
  return arguments.length ? this.each(t == null ? cs : (typeof t == "function" ? hs : fs)(t)) : this.node().textContent;
}
function ds() {
  this.innerHTML = "";
}
function gs(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ms(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ys(t) {
  return arguments.length ? this.each(t == null ? ds : (typeof t == "function" ? ms : gs)(t)) : this.node().innerHTML;
}
function _s() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function vs() {
  return this.each(_s);
}
function bs() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ws() {
  return this.each(bs);
}
function xs(t) {
  var n = typeof t == "function" ? t : di(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Ms() {
  return null;
}
function $s(t, n) {
  var e = typeof t == "function" ? t : di(t), r = n == null ? Ms : typeof n == "function" ? n : Be(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function As() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ts() {
  return this.each(As);
}
function Ss() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ks() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ps(t) {
  return this.select(t ? ks : Ss);
}
function Es(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Os(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function zs(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Is(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Cs(t, n, e) {
  return function() {
    var r = this.__on, i, a = Os(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Rs(t, n, e) {
  var r = zs(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, p; l < u; ++l)
        for (i = 0, p = s[l]; i < a; ++i)
          if ((o = r[i]).type === p.type && o.name === p.name)
            return p.value;
    }
    return;
  }
  for (s = n ? Cs : Is, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function $i(t, n, e) {
  var r = vi(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Fs(t, n) {
  return function() {
    return $i(this, t, n);
  };
}
function Ls(t, n) {
  return function() {
    return $i(this, t, n.apply(this, arguments));
  };
}
function Ds(t, n) {
  return this.each((typeof n == "function" ? Ls : Fs)(t, n));
}
function* qs() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Ai = [null];
function X(t, n) {
  this._groups = t, this._parents = n;
}
function rn() {
  return new X([[document.documentElement]], Ai);
}
function Hs() {
  return this;
}
X.prototype = rn.prototype = {
  constructor: X,
  select: fo,
  selectAll: mo,
  selectChild: bo,
  selectChildren: $o,
  filter: Ao,
  data: Oo,
  enter: To,
  exit: Io,
  join: Co,
  merge: Ro,
  selection: Hs,
  order: Fo,
  sort: Lo,
  call: qo,
  nodes: Ho,
  node: No,
  size: Bo,
  empty: Xo,
  each: Uo,
  attr: Jo,
  style: ns,
  property: as,
  classed: ls,
  text: ps,
  html: ys,
  raise: vs,
  lower: ws,
  append: xs,
  insert: $s,
  remove: Ts,
  clone: Ps,
  datum: Es,
  on: Rs,
  dispatch: Ds,
  [Symbol.iterator]: qs
};
function I(t) {
  return typeof t == "string" ? new X([[document.querySelector(t)]], [document.documentElement]) : new X([[t]], Ai);
}
function Ns(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ye(t, n) {
  if (t = Ns(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Bs = { passive: !1 }, Kt = { capture: !0, passive: !1 };
function ae(t) {
  t.stopImmediatePropagation();
}
function kt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Xs(t) {
  var n = t.document.documentElement, e = I(t).on("dragstart.drag", kt, Kt);
  "onselectstart" in n ? e.on("selectstart.drag", kt, Kt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Us(t, n) {
  var e = t.document.documentElement, r = I(t).on("dragstart.drag", null);
  n && (r.on("click.drag", kt, Kt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const ln = (t) => () => t;
function _e(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: l,
  dy: u,
  dispatch: p
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: p }
  });
}
_e.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Gs(t) {
  return !t.ctrlKey && !t.button;
}
function Ys() {
  return this.parentNode;
}
function Vs(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Ks() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zs() {
  var t = Gs, n = Ys, e = Vs, r = Ks, i = {}, a = Ne("start", "drag", "end"), o = 0, s, l, u, p, h = 0;
  function f(m) {
    m.on("mousedown.drag", c).filter(r).on("touchstart.drag", g).on("touchmove.drag", y, Bs).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function c(m, v) {
    if (!(p || !t.call(this, m, v))) {
      var T = M(this, n.call(this, m, v), m, v, "mouse");
      T && (I(m.view).on("mousemove.drag", d, Kt).on("mouseup.drag", _, Kt), Xs(m.view), ae(m), u = !1, s = m.clientX, l = m.clientY, T("start", m));
    }
  }
  function d(m) {
    if (kt(m), !u) {
      var v = m.clientX - s, T = m.clientY - l;
      u = v * v + T * T > h;
    }
    i.mouse("drag", m);
  }
  function _(m) {
    I(m.view).on("mousemove.drag mouseup.drag", null), Us(m.view, u), kt(m), i.mouse("end", m);
  }
  function g(m, v) {
    if (t.call(this, m, v)) {
      var T = m.changedTouches, A = n.call(this, m, v), P = T.length, L, D;
      for (L = 0; L < P; ++L)
        (D = M(this, A, m, v, T[L].identifier, T[L])) && (ae(m), D("start", m, T[L]));
    }
  }
  function y(m) {
    var v = m.changedTouches, T = v.length, A, P;
    for (A = 0; A < T; ++A)
      (P = i[v[A].identifier]) && (kt(m), P("drag", m, v[A]));
  }
  function x(m) {
    var v = m.changedTouches, T = v.length, A, P;
    for (p && clearTimeout(p), p = setTimeout(function() {
      p = null;
    }, 500), A = 0; A < T; ++A)
      (P = i[v[A].identifier]) && (ae(m), P("end", m, v[A]));
  }
  function M(m, v, T, A, P, L) {
    var D = a.copy(), b = ye(L || T, v), E, k, Y;
    if ((Y = e.call(m, new _e("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: P,
      active: o,
      x: b[0],
      y: b[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), A)) != null)
      return E = Y.x - b[0] || 0, k = Y.y - b[1] || 0, function sn(ht, dt, St) {
        var G = b, ee;
        switch (ht) {
          case "start":
            i[P] = sn, ee = o++;
            break;
          case "end":
            delete i[P], --o;
          // falls through
          case "drag":
            b = ye(St || dt, v), ee = o;
            break;
        }
        D.call(
          ht,
          m,
          new _e(ht, {
            sourceEvent: dt,
            subject: Y,
            target: f,
            identifier: P,
            active: ee,
            x: b[0] + E,
            y: b[1] + k,
            dx: b[0] - G[0],
            dy: b[1] - G[1],
            dispatch: D
          }),
          A
        );
      };
  }
  return f.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : ln(!!m), f) : t;
  }, f.container = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : ln(m), f) : n;
  }, f.subject = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : ln(m), f) : e;
  }, f.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : ln(!!m), f) : r;
  }, f.on = function() {
    var m = a.on.apply(a, arguments);
    return m === a ? f : m;
  }, f.clickDistance = function(m) {
    return arguments.length ? (h = (m = +m) * m, f) : Math.sqrt(h);
  }, f;
}
function Ue(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Ti(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function an() {
}
var Zt = 0.7, Sn = 1 / Zt, Pt = "\\s*([+-]?\\d+)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Q = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ws = /^#([0-9a-f]{3,8})$/, Js = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), Qs = new RegExp(`^rgb\\(${Q},${Q},${Q}\\)$`), js = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Wt}\\)$`), tu = new RegExp(`^rgba\\(${Q},${Q},${Q},${Wt}\\)$`), nu = new RegExp(`^hsl\\(${Wt},${Q},${Q}\\)$`), eu = new RegExp(`^hsla\\(${Wt},${Q},${Q},${Wt}\\)$`), gr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ue(an, _t, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mr,
  // Deprecated! Use color.formatHex.
  formatHex: mr,
  formatHex8: ru,
  formatHsl: iu,
  formatRgb: yr,
  toString: yr
});
function mr() {
  return this.rgb().formatHex();
}
function ru() {
  return this.rgb().formatHex8();
}
function iu() {
  return Si(this).formatHsl();
}
function yr() {
  return this.rgb().formatRgb();
}
function _t(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ws.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? _r(n) : e === 3 ? new N(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? cn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? cn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Js.exec(t)) ? new N(n[1], n[2], n[3], 1) : (n = Qs.exec(t)) ? new N(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = js.exec(t)) ? cn(n[1], n[2], n[3], n[4]) : (n = tu.exec(t)) ? cn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = nu.exec(t)) ? wr(n[1], n[2] / 100, n[3] / 100, 1) : (n = eu.exec(t)) ? wr(n[1], n[2] / 100, n[3] / 100, n[4]) : gr.hasOwnProperty(t) ? _r(gr[t]) : t === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
}
function _r(t) {
  return new N(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function cn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new N(t, n, e, r);
}
function au(t) {
  return t instanceof an || (t = _t(t)), t ? (t = t.rgb(), new N(t.r, t.g, t.b, t.opacity)) : new N();
}
function ve(t, n, e, r) {
  return arguments.length === 1 ? au(t) : new N(t, n, e, r ?? 1);
}
function N(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Ue(N, ve, Ti(an, {
  brighter(t) {
    return t = t == null ? Sn : Math.pow(Sn, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zt : Math.pow(Zt, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new N(yt(this.r), yt(this.g), yt(this.b), kn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vr,
  // Deprecated! Use color.formatHex.
  formatHex: vr,
  formatHex8: ou,
  formatRgb: br,
  toString: br
}));
function vr() {
  return `#${mt(this.r)}${mt(this.g)}${mt(this.b)}`;
}
function ou() {
  return `#${mt(this.r)}${mt(this.g)}${mt(this.b)}${mt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function br() {
  const t = kn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${yt(this.r)}, ${yt(this.g)}, ${yt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function kn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function yt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function mt(t) {
  return t = yt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function wr(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new K(t, n, e, r);
}
function Si(t) {
  if (t instanceof K) return new K(t.h, t.s, t.l, t.opacity);
  if (t instanceof an || (t = _t(t)), !t) return new K();
  if (t instanceof K) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new K(o, s, l, t.opacity);
}
function su(t, n, e, r) {
  return arguments.length === 1 ? Si(t) : new K(t, n, e, r ?? 1);
}
function K(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Ue(K, su, Ti(an, {
  brighter(t) {
    return t = t == null ? Sn : Math.pow(Sn, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zt : Math.pow(Zt, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new N(
      oe(t >= 240 ? t - 240 : t + 120, i, r),
      oe(t, i, r),
      oe(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new K(xr(this.h), fn(this.s), fn(this.l), kn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = kn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${xr(this.h)}, ${fn(this.s) * 100}%, ${fn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function xr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function fn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function oe(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Ge = (t) => () => t;
function uu(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function lu(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function cu(t) {
  return (t = +t) == 1 ? ki : function(n, e) {
    return e - n ? lu(n, e, t) : Ge(isNaN(n) ? e : n);
  };
}
function ki(t, n) {
  var e = n - t;
  return e ? uu(t, e) : Ge(isNaN(t) ? n : t);
}
const Pn = function t(n) {
  var e = cu(n);
  function r(i, a) {
    var o = e((i = ve(i)).r, (a = ve(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = ki(i.opacity, a.opacity);
    return function(p) {
      return i.r = o(p), i.g = s(p), i.b = l(p), i.opacity = u(p), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function fu(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function hu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function pu(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = Ye(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function du(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function V(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function gu(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ye(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var be = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, se = new RegExp(be.source, "g");
function mu(t) {
  return function() {
    return t;
  };
}
function yu(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Pi(t, n) {
  var e = be.lastIndex = se.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = be.exec(t)) && (i = se.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: V(r, i) })), e = se.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? yu(l[0].x) : mu(n) : (n = l.length, function(u) {
    for (var p = 0, h; p < n; ++p) s[(h = l[p]).i] = h.x(u);
    return s.join("");
  });
}
function Ye(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Ge(n) : (e === "number" ? V : e === "string" ? (r = _t(n)) ? (n = r, Pn) : Pi : n instanceof _t ? Pn : n instanceof Date ? du : hu(n) ? fu : Array.isArray(n) ? pu : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? gu : V)(t, n);
}
function _u(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Mr = 180 / Math.PI, we = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ei(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Mr,
    skewX: Math.atan(l) * Mr,
    scaleX: o,
    scaleY: s
  };
}
var hn;
function vu(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? we : Ei(n.a, n.b, n.c, n.d, n.e, n.f);
}
function bu(t) {
  return t == null || (hn || (hn = document.createElementNS("http://www.w3.org/2000/svg", "g")), hn.setAttribute("transform", t), !(t = hn.transform.baseVal.consolidate())) ? we : (t = t.matrix, Ei(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Oi(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, p, h, f, c, d) {
    if (u !== h || p !== f) {
      var _ = c.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: V(u, h) }, { i: _ - 2, x: V(p, f) });
    } else (h || f) && c.push("translate(" + h + n + f + e);
  }
  function o(u, p, h, f) {
    u !== p ? (u - p > 180 ? p += 360 : p - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(u, p) })) : p && h.push(i(h) + "rotate(" + p + r);
  }
  function s(u, p, h, f) {
    u !== p ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(u, p) }) : p && h.push(i(h) + "skewX(" + p + r);
  }
  function l(u, p, h, f, c, d) {
    if (u !== h || p !== f) {
      var _ = c.push(i(c) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: V(u, h) }, { i: _ - 2, x: V(p, f) });
    } else (h !== 1 || f !== 1) && c.push(i(c) + "scale(" + h + "," + f + ")");
  }
  return function(u, p) {
    var h = [], f = [];
    return u = t(u), p = t(p), a(u.translateX, u.translateY, p.translateX, p.translateY, h, f), o(u.rotate, p.rotate, h, f), s(u.skewX, p.skewX, h, f), l(u.scaleX, u.scaleY, p.scaleX, p.scaleY, h, f), u = p = null, function(c) {
      for (var d = -1, _ = f.length, g; ++d < _; ) h[(g = f[d]).i] = g.x(c);
      return h.join("");
    };
  };
}
var wu = Oi(vu, "px, ", "px)", "deg)"), xu = Oi(bu, ", ", ")", ")"), Ot = 0, Nt = 0, Dt = 0, zi = 1e3, En, Bt, On = 0, vt = 0, Nn = 0, Jt = typeof performance == "object" && performance.now ? performance : Date, Ii = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Bn() {
  return vt || (Ii(Mu), vt = Jt.now() + Nn);
}
function Mu() {
  vt = 0;
}
function Qt() {
  this._call = this._time = this._next = null;
}
Qt.prototype = Ci.prototype = {
  constructor: Qt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Bn() : +e) + (n == null ? 0 : +n), !this._next && Bt !== this && (Bt ? Bt._next = this : En = this, Bt = this), this._call = t, this._time = e, xe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xe());
  }
};
function Ci(t, n, e) {
  var r = new Qt();
  return r.restart(t, n, e), r;
}
function $u() {
  Bn(), ++Ot;
  for (var t = En, n; t; )
    (n = vt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ot;
}
function $r() {
  vt = (On = Jt.now()) + Nn, Ot = Nt = 0;
  try {
    $u();
  } finally {
    Ot = 0, Tu(), vt = 0;
  }
}
function Au() {
  var t = Jt.now(), n = t - On;
  n > zi && (Nn -= n, On = t);
}
function Tu() {
  for (var t, n = En, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : En = e);
  Bt = t, xe(r);
}
function xe(t) {
  if (!Ot) {
    Nt && (Nt = clearTimeout(Nt));
    var n = t - vt;
    n > 24 ? (t < 1 / 0 && (Nt = setTimeout($r, t - Jt.now() - Nn)), Dt && (Dt = clearInterval(Dt))) : (Dt || (On = Jt.now(), Dt = setInterval(Au, zi)), Ot = 1, Ii($r));
  }
}
function Ar(t, n, e) {
  var r = new Qt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Su(t, n, e) {
  var r = new Qt(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Bn() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var ku = Ne("start", "end", "cancel", "interrupt"), Pu = [], Ri = 0, Tr = 1, Me = 2, vn = 3, Sr = 4, $e = 5, bn = 6;
function Xn(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  Eu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ku,
    tween: Pu,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ri
  });
}
function Ve(t, n) {
  var e = Z(t, n);
  if (e.state > Ri) throw new Error("too late; already scheduled");
  return e;
}
function nt(t, n) {
  var e = Z(t, n);
  if (e.state > vn) throw new Error("too late; already running");
  return e;
}
function Z(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Eu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ci(a, 0, e.time);
  function a(u) {
    e.state = Tr, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var p, h, f, c;
    if (e.state !== Tr) return l();
    for (p in r)
      if (c = r[p], c.name === e.name) {
        if (c.state === vn) return Ar(o);
        c.state === Sr ? (c.state = bn, c.timer.stop(), c.on.call("interrupt", t, t.__data__, c.index, c.group), delete r[p]) : +p < n && (c.state = bn, c.timer.stop(), c.on.call("cancel", t, t.__data__, c.index, c.group), delete r[p]);
      }
    if (Ar(function() {
      e.state === vn && (e.state = Sr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Me, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Me) {
      for (e.state = vn, i = new Array(f = e.tween.length), p = 0, h = -1; p < f; ++p)
        (c = e.tween[p].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = c);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var p = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = $e, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, p);
    e.state === $e && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = bn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Ou(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Me && r.state < $e, r.state = bn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function zu(t) {
  return this.each(function() {
    Ou(this, t);
  });
}
function Iu(t, n) {
  var e, r;
  return function() {
    var i = nt(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Cu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = nt(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function Ru(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Z(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Iu : Cu)(e, t, n));
}
function Ke(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = nt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Z(i, r).value[n];
  };
}
function Fi(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof _t ? Pn : (e = _t(n)) ? (n = e, Pn) : Pi)(t, n);
}
function Fu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Lu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Du(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function qu(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Hu(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Nu(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Bu(t, n) {
  var e = Hn(t), r = e === "transform" ? xu : Fi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Nu : Hu)(e, r, Ke(this, "attr." + t, n)) : n == null ? (e.local ? Lu : Fu)(e) : (e.local ? qu : Du)(e, r, n));
}
function Xu(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Uu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Gu(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Uu(t, a)), e;
  }
  return i._value = n, i;
}
function Yu(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Xu(t, a)), e;
  }
  return i._value = n, i;
}
function Vu(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Hn(t);
  return this.tween(e, (r.local ? Gu : Yu)(r, n));
}
function Ku(t, n) {
  return function() {
    Ve(this, t).delay = +n.apply(this, arguments);
  };
}
function Zu(t, n) {
  return n = +n, function() {
    Ve(this, t).delay = n;
  };
}
function Wu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ku : Zu)(n, t)) : Z(this.node(), n).delay;
}
function Ju(t, n) {
  return function() {
    nt(this, t).duration = +n.apply(this, arguments);
  };
}
function Qu(t, n) {
  return n = +n, function() {
    nt(this, t).duration = n;
  };
}
function ju(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ju : Qu)(n, t)) : Z(this.node(), n).duration;
}
function tl(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    nt(this, t).ease = n;
  };
}
function nl(t) {
  var n = this._id;
  return arguments.length ? this.each(tl(n, t)) : Z(this.node(), n).ease;
}
function el(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    nt(this, t).ease = e;
  };
}
function rl(t) {
  if (typeof t != "function") throw new Error();
  return this.each(el(this._id, t));
}
function il(t) {
  typeof t != "function" && (t = mi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new st(r, this._parents, this._name, this._id);
}
function al(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], p = l.length, h = o[s] = new Array(p), f, c = 0; c < p; ++c)
      (f = l[c] || u[c]) && (h[c] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new st(o, this._parents, this._name, this._id);
}
function ol(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function sl(t, n, e) {
  var r, i, a = ol(n) ? Ve : nt;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function ul(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Z(this.node(), e).on.on(t) : this.each(sl(e, t, n));
}
function ll(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function cl() {
  return this.on("end.remove", ll(this._id));
}
function fl(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Be(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), p, h, f = 0; f < l; ++f)
      (p = s[f]) && (h = t.call(p, p.__data__, f, s)) && ("__data__" in p && (h.__data__ = p.__data__), u[f] = h, Xn(u[f], n, e, f, u, Z(p, e)));
  return new st(a, this._parents, n, e);
}
function hl(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = gi(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, p, h = 0; h < u; ++h)
      if (p = l[h]) {
        for (var f = t.call(p, p.__data__, h, l), c, d = Z(p, e), _ = 0, g = f.length; _ < g; ++_)
          (c = f[_]) && Xn(c, n, e, _, f, d);
        a.push(f), o.push(p);
      }
  return new st(a, o, n, e);
}
var pl = rn.prototype.constructor;
function dl() {
  return new pl(this._groups, this._parents);
}
function gl(t, n) {
  var e, r, i;
  return function() {
    var a = Et(this, t), o = (this.style.removeProperty(t), Et(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Li(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ml(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Et(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function yl(t, n, e) {
  var r, i, a;
  return function() {
    var o = Et(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Et(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function _l(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = nt(this, t), u = l.on, p = l.value[a] == null ? s || (s = Li(n)) : void 0;
    (u !== e || i !== p) && (r = (e = u).copy()).on(o, i = p), l.on = r;
  };
}
function vl(t, n, e) {
  var r = (t += "") == "transform" ? wu : Fi;
  return n == null ? this.styleTween(t, gl(t, r)).on("end.style." + t, Li(t)) : typeof n == "function" ? this.styleTween(t, yl(t, r, Ke(this, "style." + t, n))).each(_l(this._id, t)) : this.styleTween(t, ml(t, r, n), e).on("end.style." + t, null);
}
function bl(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function wl(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && bl(t, o, e)), r;
  }
  return a._value = n, a;
}
function xl(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, wl(t, n, e ?? ""));
}
function Ml(t) {
  return function() {
    this.textContent = t;
  };
}
function $l(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Al(t) {
  return this.tween("text", typeof t == "function" ? $l(Ke(this, "text", t)) : Ml(t == null ? "" : t + ""));
}
function Tl(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Sl(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Tl(i)), n;
  }
  return r._value = t, r;
}
function kl(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Sl(t));
}
function Pl() {
  for (var t = this._name, n = this._id, e = Di(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var p = Z(l, n);
        Xn(l, t, e, u, o, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new st(r, this._parents, t, e);
}
function El() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = nt(this, r), p = u.on;
      p !== t && (n = (t = p).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var Ol = 0;
function st(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Di() {
  return ++Ol;
}
var et = rn.prototype;
st.prototype = {
  constructor: st,
  select: fl,
  selectAll: hl,
  selectChild: et.selectChild,
  selectChildren: et.selectChildren,
  filter: il,
  merge: al,
  selection: dl,
  transition: Pl,
  call: et.call,
  nodes: et.nodes,
  node: et.node,
  size: et.size,
  empty: et.empty,
  each: et.each,
  on: ul,
  attr: Bu,
  attrTween: Vu,
  style: vl,
  styleTween: xl,
  text: Al,
  textTween: kl,
  remove: cl,
  tween: Ru,
  delay: Wu,
  duration: ju,
  ease: nl,
  easeVarying: rl,
  end: El,
  [Symbol.iterator]: et[Symbol.iterator]
};
function zl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Il = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: zl
};
function Cl(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Rl(t) {
  var n, e;
  t instanceof st ? (n = t._id, t = t._name) : (n = Di(), (e = Il).time = Bn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Xn(l, t, n, u, o, e || Cl(l, n));
  return new st(r, this._parents, t, n);
}
rn.prototype.interrupt = zu;
rn.prototype.transition = Rl;
const Ae = Math.PI, Te = 2 * Ae, gt = 1e-6, Fl = Te - gt;
function qi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Ll(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return qi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ze {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? qi : Ll(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, p = o - n, h = s - e, f = p * p + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > gt) if (!(Math.abs(h * l - u * p) > gt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let c = r - o, d = i - s, _ = l * l + u * u, g = c * c + d * d, y = Math.sqrt(_), x = Math.sqrt(f), M = a * Math.tan((Ae - Math.acos((_ + f - g) / (2 * y * x))) / 2), m = M / x, v = M / y;
      Math.abs(m - 1) > gt && this._append`L${n + m * p},${e + m * h}`, this._append`A${a},${a},0,0,${+(h * c > p * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, p = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${p}` : (Math.abs(this._x1 - u) > gt || Math.abs(this._y1 - p) > gt) && this._append`L${u},${p}`, r && (f < 0 && (f = f % Te + Te), f > Fl ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = p}` : f > gt && this._append`A${r},${r},0,${+(f >= Ae)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function W() {
  return new Ze();
}
W.prototype = Ze.prototype;
function Dl(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function zn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function zt(t) {
  return t = zn(Math.abs(t)), t ? t[1] : NaN;
}
function ql(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Hl(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Nl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function In(t) {
  if (!(n = Nl.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new We({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
In.prototype = We.prototype;
function We(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
We.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Bl(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Hi;
function Xl(t, n) {
  var e = zn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Hi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + zn(t, Math.max(0, n + a - 1))[0];
}
function kr(t, n) {
  var e = zn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Pr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Dl,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => kr(t * 100, n),
  r: kr,
  s: Xl,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Er(t) {
  return t;
}
var Or = Array.prototype.map, zr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ul(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Er : ql(Or.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Er : Hl(Or.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = In(h);
    var f = h.fill, c = h.align, d = h.sign, _ = h.symbol, g = h.zero, y = h.width, x = h.comma, M = h.precision, m = h.trim, v = h.type;
    v === "n" ? (x = !0, v = "g") : Pr[v] || (M === void 0 && (M = 12), m = !0, v = "g"), (g || f === "0" && c === "=") && (g = !0, f = "0", c = "=");
    var T = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", A = _ === "$" ? r : /[%p]/.test(v) ? o : "", P = Pr[v], L = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function D(b) {
      var E = T, k = A, Y, sn, ht;
      if (v === "c")
        k = P(b) + k, b = "";
      else {
        b = +b;
        var dt = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? l : P(Math.abs(b), M), m && (b = Bl(b)), dt && +b == 0 && d !== "+" && (dt = !1), E = (dt ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + E, k = (v === "s" ? zr[8 + Hi / 3] : "") + k + (dt && d === "(" ? ")" : ""), L) {
          for (Y = -1, sn = b.length; ++Y < sn; )
            if (ht = b.charCodeAt(Y), 48 > ht || ht > 57) {
              k = (ht === 46 ? i + b.slice(Y + 1) : b.slice(Y)) + k, b = b.slice(0, Y);
              break;
            }
        }
      }
      x && !g && (b = n(b, 1 / 0));
      var St = E.length + b.length + k.length, G = St < y ? new Array(y - St + 1).join(f) : "";
      switch (x && g && (b = n(G + b, G.length ? y - k.length : 1 / 0), G = ""), c) {
        case "<":
          b = E + b + k + G;
          break;
        case "=":
          b = E + G + b + k;
          break;
        case "^":
          b = G.slice(0, St = G.length >> 1) + E + b + k + G.slice(St);
          break;
        default:
          b = G + E + b + k;
          break;
      }
      return a(b);
    }
    return D.toString = function() {
      return h + "";
    }, D;
  }
  function p(h, f) {
    var c = u((h = In(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(zt(f) / 3))) * 3, _ = Math.pow(10, -d), g = zr[8 + d / 3];
    return function(y) {
      return c(_ * y) + g;
    };
  }
  return {
    format: u,
    formatPrefix: p
  };
}
var pn, Un, Ni;
Gl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Gl(t) {
  return pn = Ul(t), Un = pn.format, Ni = pn.formatPrefix, pn;
}
function Yl(t) {
  return Math.max(0, -zt(Math.abs(t)));
}
function Vl(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zt(n) / 3))) * 3 - zt(Math.abs(t)));
}
function Kl(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, zt(n) - zt(t)) + 1;
}
const Zl = Math.random, Wl = function t(n) {
  function e(r, i) {
    var a, o;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var s;
      if (a != null) s = a, a = null;
      else do
        a = n() * 2 - 1, s = n() * 2 - 1, o = a * a + s * s;
      while (!o || o > 1);
      return r + i * s * Math.sqrt(-2 * Math.log(o) / o);
    };
  }
  return e.source = t, e;
}(Zl);
function Je(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const Ir = Symbol("implicit");
function Gn() {
  var t = new cr(), n = [], e = [], r = Ir;
  function i(a) {
    let o = t.get(a);
    if (o === void 0) {
      if (r !== Ir) return r;
      t.set(a, o = n.push(a) - 1);
    }
    return e[o % e.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return n.slice();
    n = [], t = new cr();
    for (const o of a)
      t.has(o) || t.set(o, n.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (e = Array.from(a), i) : e.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Gn(n, e).unknown(r);
  }, Je.apply(i, arguments), i;
}
function Jl(t) {
  return function() {
    return t;
  };
}
function Ql(t) {
  return +t;
}
var Cr = [0, 1];
function J(t) {
  return t;
}
function Se(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Jl(isNaN(n) ? NaN : 0.5);
}
function jl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function tc(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Se(i, r), a = e(o, a)) : (r = Se(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function nc(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Se(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = Xa(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Bi(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Xi() {
  var t = Cr, n = Cr, e = Ye, r, i, a, o = J, s, l, u;
  function p() {
    var f = Math.min(t.length, n.length);
    return o !== J && (o = jl(t[0], t[f - 1])), s = f > 2 ? nc : tc, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Ql), p()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), p()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = _u, p();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : J, p()) : o !== J;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, p()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, c) {
    return r = f, i = c, p();
  };
}
function ec() {
  return Xi()(J, J);
}
function rc(t, n, e, r) {
  var i = Ja(t, n, e), a;
  switch (r = In(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Vl(i, o)) && (r.precision = a), Ni(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Kl(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Yl(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Un(r);
}
function Ui(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Wa(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return rc(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, p = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); p-- > 0; ) {
      if (u = de(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function U() {
  var t = ec();
  return t.copy = function() {
    return Bi(t, U());
  }, Je.apply(t, arguments), Ui(t);
}
function Rr(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function ic(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function ac(t) {
  return t < 0 ? -t * t : t * t;
}
function oc(t) {
  var n = t(J, J), e = 1;
  function r() {
    return e === 1 ? t(J, J) : e === 0.5 ? t(ic, ac) : t(Rr(e), Rr(1 / e));
  }
  return n.exponent = function(i) {
    return arguments.length ? (e = +i, r()) : e;
  }, Ui(n);
}
function Gi() {
  var t = oc(Xi());
  return t.copy = function() {
    return Bi(t, Gi()).exponent(t.exponent());
  }, Je.apply(t, arguments), t;
}
function sc() {
  return Gi.apply(null, arguments).exponent(0.5);
}
function z(t) {
  return function() {
    return t;
  };
}
function Yi(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Ze(n);
}
function Vi(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ki(t) {
  this._context = t;
}
Ki.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Zi(t) {
  return new Ki(t);
}
function Wi(t) {
  return t[0];
}
function Ji(t) {
  return t[1];
}
function Qi(t, n) {
  var e = z(!0), r = null, i = Zi, a = null, o = Yi(s);
  t = typeof t == "function" ? t : t === void 0 ? Wi : z(t), n = typeof n == "function" ? n : n === void 0 ? Ji : z(n);
  function s(l) {
    var u, p = (l = Vi(l)).length, h, f = !1, c;
    for (r == null && (a = i(c = o())), u = 0; u <= p; ++u)
      !(u < p && e(h = l[u], u, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, l), +n(h, u, l));
    if (c) return a = null, c + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : z(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : z(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : z(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), s) : r;
  }, s;
}
function uc(t, n, e) {
  var r = null, i = z(!0), a = null, o = Zi, s = null, l = Yi(u);
  t = typeof t == "function" ? t : t === void 0 ? Wi : z(+t), n = typeof n == "function" ? n : z(n === void 0 ? 0 : +n), e = typeof e == "function" ? e : e === void 0 ? Ji : z(+e);
  function u(h) {
    var f, c, d, _ = (h = Vi(h)).length, g, y = !1, x, M = new Array(_), m = new Array(_);
    for (a == null && (s = o(x = l())), f = 0; f <= _; ++f) {
      if (!(f < _ && i(g = h[f], f, h)) === y)
        if (y = !y)
          c = f, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), d = f - 1; d >= c; --d)
            s.point(M[d], m[d]);
          s.lineEnd(), s.areaEnd();
        }
      y && (M[f] = +t(g, f, h), m[f] = +n(g, f, h), s.point(r ? +r(g, f, h) : M[f], e ? +e(g, f, h) : m[f]));
    }
    if (x) return s = null, x + "" || null;
  }
  function p() {
    return Qi().defined(i).curve(o).context(a);
  }
  return u.x = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : z(+h), r = null, u) : t;
  }, u.x0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : z(+h), u) : t;
  }, u.x1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : z(+h), u) : r;
  }, u.y = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : z(+h), e = null, u) : n;
  }, u.y0 = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : z(+h), u) : n;
  }, u.y1 = function(h) {
    return arguments.length ? (e = h == null ? null : typeof h == "function" ? h : z(+h), u) : e;
  }, u.lineX0 = u.lineY0 = function() {
    return p().x(t).y(n);
  }, u.lineY1 = function() {
    return p().x(t).y(e);
  }, u.lineX1 = function() {
    return p().x(r).y(n);
  }, u.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : z(!!h), u) : i;
  }, u.curve = function(h) {
    return arguments.length ? (o = h, a != null && (s = o(a)), u) : o;
  }, u.context = function(h) {
    return arguments.length ? (h == null ? a = s = null : s = o(a = h), u) : a;
  }, u;
}
function Xt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Xt.prototype = {
  constructor: Xt,
  scale: function(t) {
    return t === 1 ? this : new Xt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Xt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Xt.prototype;
var ji = typeof global == "object" && global && global.Object === Object && global, lc = typeof self == "object" && self && self.Object === Object && self, lt = ji || lc || Function("return this")(), tt = lt.Symbol, ta = Object.prototype, cc = ta.hasOwnProperty, fc = ta.toString, qt = tt ? tt.toStringTag : void 0;
function hc(t) {
  var n = cc.call(t, qt), e = t[qt];
  try {
    t[qt] = void 0;
    var r = !0;
  } catch {
  }
  var i = fc.call(t);
  return r && (n ? t[qt] = e : delete t[qt]), i;
}
var pc = Object.prototype, dc = pc.toString;
function gc(t) {
  return dc.call(t);
}
var mc = "[object Null]", yc = "[object Undefined]", Fr = tt ? tt.toStringTag : void 0;
function Rt(t) {
  return t == null ? t === void 0 ? yc : mc : Fr && Fr in Object(t) ? hc(t) : gc(t);
}
function bt(t) {
  return t != null && typeof t == "object";
}
var _c = "[object Symbol]";
function Yn(t) {
  return typeof t == "symbol" || bt(t) && Rt(t) == _c;
}
function Ft(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var q = Array.isArray, Lr = tt ? tt.prototype : void 0, Dr = Lr ? Lr.toString : void 0;
function na(t) {
  if (typeof t == "string")
    return t;
  if (q(t))
    return Ft(t, na) + "";
  if (Yn(t))
    return Dr ? Dr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var vc = /\s/;
function bc(t) {
  for (var n = t.length; n-- && vc.test(t.charAt(n)); )
    ;
  return n;
}
var wc = /^\s+/;
function xc(t) {
  return t && t.slice(0, bc(t) + 1).replace(wc, "");
}
function ut(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var qr = NaN, Mc = /^[-+]0x[0-9a-f]+$/i, $c = /^0b[01]+$/i, Ac = /^0o[0-7]+$/i, Tc = parseInt;
function Sc(t) {
  if (typeof t == "number")
    return t;
  if (Yn(t))
    return qr;
  if (ut(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ut(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = xc(t);
  var e = $c.test(t);
  return e || Ac.test(t) ? Tc(t.slice(2), e ? 2 : 8) : Mc.test(t) ? qr : +t;
}
var kc = 1 / 0, Pc = 17976931348623157e292;
function wn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Sc(t), t === kc || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Pc;
  }
  return t === t ? t : 0;
}
function Ec(t) {
  var n = wn(t), e = n % 1;
  return n === n ? e ? n - e : n : 0;
}
function Vn(t) {
  return t;
}
var Oc = "[object AsyncFunction]", zc = "[object Function]", Ic = "[object GeneratorFunction]", Cc = "[object Proxy]";
function ea(t) {
  if (!ut(t))
    return !1;
  var n = Rt(t);
  return n == zc || n == Ic || n == Oc || n == Cc;
}
var ue = lt["__core-js_shared__"], Hr = function() {
  var t = /[^.]+$/.exec(ue && ue.keys && ue.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Rc(t) {
  return !!Hr && Hr in t;
}
var Fc = Function.prototype, Lc = Fc.toString;
function Mt(t) {
  if (t != null) {
    try {
      return Lc.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Dc = /[\\^$.*+?()[\]{}|]/g, qc = /^\[object .+?Constructor\]$/, Hc = Function.prototype, Nc = Object.prototype, Bc = Hc.toString, Xc = Nc.hasOwnProperty, Uc = RegExp(
  "^" + Bc.call(Xc).replace(Dc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gc(t) {
  if (!ut(t) || Rc(t))
    return !1;
  var n = ea(t) ? Uc : qc;
  return n.test(Mt(t));
}
function Yc(t, n) {
  return t == null ? void 0 : t[n];
}
function $t(t, n) {
  var e = Yc(t, n);
  return Gc(e) ? e : void 0;
}
var ke = $t(lt, "WeakMap");
function Vc(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
function Kc(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var Zc = 800, Wc = 16, Jc = Date.now;
function Qc(t) {
  var n = 0, e = 0;
  return function() {
    var r = Jc(), i = Wc - (r - e);
    if (e = r, i > 0) {
      if (++n >= Zc)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function jc(t) {
  return function() {
    return t;
  };
}
var Cn = function() {
  try {
    var t = $t(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), tf = Cn ? function(t, n) {
  return Cn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: jc(n),
    writable: !0
  });
} : Vn, nf = Qc(tf);
function ef(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
function rf(t, n, e, r) {
  for (var i = t.length, a = e + -1; ++a < i; )
    if (n(t[a], a, t))
      return a;
  return -1;
}
var af = 9007199254740991, of = /^(?:0|[1-9]\d*)$/;
function Kn(t, n) {
  var e = typeof t;
  return n = n ?? af, !!n && (e == "number" || e != "symbol" && of.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function sf(t, n, e) {
  n == "__proto__" && Cn ? Cn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Zn(t, n) {
  return t === n || t !== t && n !== n;
}
var uf = Object.prototype, lf = uf.hasOwnProperty;
function cf(t, n, e) {
  var r = t[n];
  (!(lf.call(t, n) && Zn(r, e)) || e === void 0 && !(n in t)) && sf(t, n, e);
}
var Nr = Math.max;
function ff(t, n, e) {
  return n = Nr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, a = Nr(r.length - n, 0), o = Array(a); ++i < a; )
      o[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(o), Vc(t, this, s);
  };
}
function hf(t, n) {
  return nf(ff(t, n, Vn), t + "");
}
var pf = 9007199254740991;
function Qe(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pf;
}
function At(t) {
  return t != null && Qe(t.length) && !ea(t);
}
function df(t, n, e) {
  if (!ut(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? At(e) && Kn(n, e.length) : r == "string" && n in e) ? Zn(e[n], t) : !1;
}
var gf = Object.prototype;
function ra(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || gf;
  return t === e;
}
function ia(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var mf = "[object Arguments]";
function Br(t) {
  return bt(t) && Rt(t) == mf;
}
var aa = Object.prototype, yf = aa.hasOwnProperty, _f = aa.propertyIsEnumerable, je = Br(/* @__PURE__ */ function() {
  return arguments;
}()) ? Br : function(t) {
  return bt(t) && yf.call(t, "callee") && !_f.call(t, "callee");
};
function vf() {
  return !1;
}
var oa = typeof exports == "object" && exports && !exports.nodeType && exports, Xr = oa && typeof module == "object" && module && !module.nodeType && module, bf = Xr && Xr.exports === oa, Ur = bf ? lt.Buffer : void 0, wf = Ur ? Ur.isBuffer : void 0, Pe = wf || vf, xf = "[object Arguments]", Mf = "[object Array]", $f = "[object Boolean]", Af = "[object Date]", Tf = "[object Error]", Sf = "[object Function]", kf = "[object Map]", Pf = "[object Number]", Ef = "[object Object]", Of = "[object RegExp]", zf = "[object Set]", If = "[object String]", Cf = "[object WeakMap]", Rf = "[object ArrayBuffer]", Ff = "[object DataView]", Lf = "[object Float32Array]", Df = "[object Float64Array]", qf = "[object Int8Array]", Hf = "[object Int16Array]", Nf = "[object Int32Array]", Bf = "[object Uint8Array]", Xf = "[object Uint8ClampedArray]", Uf = "[object Uint16Array]", Gf = "[object Uint32Array]", S = {};
S[Lf] = S[Df] = S[qf] = S[Hf] = S[Nf] = S[Bf] = S[Xf] = S[Uf] = S[Gf] = !0;
S[xf] = S[Mf] = S[Rf] = S[$f] = S[Ff] = S[Af] = S[Tf] = S[Sf] = S[kf] = S[Pf] = S[Ef] = S[Of] = S[zf] = S[If] = S[Cf] = !1;
function Yf(t) {
  return bt(t) && Qe(t.length) && !!S[Rt(t)];
}
function Vf(t) {
  return function(n) {
    return t(n);
  };
}
var sa = typeof exports == "object" && exports && !exports.nodeType && exports, Ut = sa && typeof module == "object" && module && !module.nodeType && module, Kf = Ut && Ut.exports === sa, le = Kf && ji.process, Gr = function() {
  try {
    var t = Ut && Ut.require && Ut.require("util").types;
    return t || le && le.binding && le.binding("util");
  } catch {
  }
}(), Yr = Gr && Gr.isTypedArray, ua = Yr ? Vf(Yr) : Yf, Zf = Object.prototype, Wf = Zf.hasOwnProperty;
function la(t, n) {
  var e = q(t), r = !e && je(t), i = !e && !r && Pe(t), a = !e && !r && !i && ua(t), o = e || r || i || a, s = o ? ia(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Wf.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Kn(u, l))) && s.push(u);
  return s;
}
function ca(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Jf = ca(Object.keys, Object), Qf = Object.prototype, jf = Qf.hasOwnProperty;
function th(t) {
  if (!ra(t))
    return Jf(t);
  var n = [];
  for (var e in Object(t))
    jf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Tt(t) {
  return At(t) ? la(t) : th(t);
}
function nh(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var eh = Object.prototype, rh = eh.hasOwnProperty;
function ih(t) {
  if (!ut(t))
    return nh(t);
  var n = ra(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !rh.call(t, r)) || e.push(r);
  return e;
}
function ah(t) {
  return At(t) ? la(t, !0) : ih(t);
}
var oh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sh = /^\w*$/;
function tr(t, n) {
  if (q(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Yn(t) ? !0 : sh.test(t) || !oh.test(t) || n != null && t in Object(n);
}
var jt = $t(Object, "create");
function uh() {
  this.__data__ = jt ? jt(null) : {}, this.size = 0;
}
function lh(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var ch = "__lodash_hash_undefined__", fh = Object.prototype, hh = fh.hasOwnProperty;
function ph(t) {
  var n = this.__data__;
  if (jt) {
    var e = n[t];
    return e === ch ? void 0 : e;
  }
  return hh.call(n, t) ? n[t] : void 0;
}
var dh = Object.prototype, gh = dh.hasOwnProperty;
function mh(t) {
  var n = this.__data__;
  return jt ? n[t] !== void 0 : gh.call(n, t);
}
var yh = "__lodash_hash_undefined__";
function _h(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = jt && n === void 0 ? yh : n, this;
}
function wt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = uh;
wt.prototype.delete = lh;
wt.prototype.get = ph;
wt.prototype.has = mh;
wt.prototype.set = _h;
function vh() {
  this.__data__ = [], this.size = 0;
}
function Wn(t, n) {
  for (var e = t.length; e--; )
    if (Zn(t[e][0], n))
      return e;
  return -1;
}
var bh = Array.prototype, wh = bh.splice;
function xh(t) {
  var n = this.__data__, e = Wn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : wh.call(n, e, 1), --this.size, !0;
}
function Mh(t) {
  var n = this.__data__, e = Wn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function $h(t) {
  return Wn(this.__data__, t) > -1;
}
function Ah(t, n) {
  var e = this.__data__, r = Wn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function ct(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = vh;
ct.prototype.delete = xh;
ct.prototype.get = Mh;
ct.prototype.has = $h;
ct.prototype.set = Ah;
var tn = $t(lt, "Map");
function Th() {
  this.size = 0, this.__data__ = {
    hash: new wt(),
    map: new (tn || ct)(),
    string: new wt()
  };
}
function Sh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Jn(t, n) {
  var e = t.__data__;
  return Sh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function kh(t) {
  var n = Jn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Ph(t) {
  return Jn(this, t).get(t);
}
function Eh(t) {
  return Jn(this, t).has(t);
}
function Oh(t, n) {
  var e = Jn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function ft(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ft.prototype.clear = Th;
ft.prototype.delete = kh;
ft.prototype.get = Ph;
ft.prototype.has = Eh;
ft.prototype.set = Oh;
var zh = "Expected a function";
function nr(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(zh);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (nr.Cache || ft)(), e;
}
nr.Cache = ft;
var Ih = 500;
function Ch(t) {
  var n = nr(t, function(r) {
    return e.size === Ih && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Rh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fh = /\\(\\)?/g, Lh = Ch(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Rh, function(e, r, i, a) {
    n.push(i ? a.replace(Fh, "$1") : r || e);
  }), n;
});
function Qn(t) {
  return t == null ? "" : na(t);
}
function jn(t, n) {
  return q(t) ? t : tr(t, n) ? [t] : Lh(Qn(t));
}
function on(t) {
  if (typeof t == "string" || Yn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function er(t, n) {
  n = jn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[on(n[e++])];
  return e && e == r ? t : void 0;
}
function Dh(t, n, e) {
  var r = t == null ? void 0 : er(t, n);
  return r === void 0 ? e : r;
}
function rr(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Vr = tt ? tt.isConcatSpreadable : void 0;
function qh(t) {
  return q(t) || je(t) || !!(Vr && t && t[Vr]);
}
function Hh(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = qh), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? rr(i, s) : i[i.length] = s;
  }
  return i;
}
function Nh(t) {
  var n = t == null ? 0 : t.length;
  return n ? Hh(t) : [];
}
var Bh = ca(Object.getPrototypeOf, Object);
function Xh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Uh(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Xh(t, n, e);
}
var Gh = "\\ud800-\\udfff", Yh = "\\u0300-\\u036f", Vh = "\\ufe20-\\ufe2f", Kh = "\\u20d0-\\u20ff", Zh = Yh + Vh + Kh, Wh = "\\ufe0e\\ufe0f", Jh = "\\u200d", Qh = RegExp("[" + Jh + Gh + Zh + Wh + "]");
function fa(t) {
  return Qh.test(t);
}
function jh(t) {
  return t.split("");
}
var ha = "\\ud800-\\udfff", tp = "\\u0300-\\u036f", np = "\\ufe20-\\ufe2f", ep = "\\u20d0-\\u20ff", rp = tp + np + ep, ip = "\\ufe0e\\ufe0f", ap = "[" + ha + "]", Ee = "[" + rp + "]", Oe = "\\ud83c[\\udffb-\\udfff]", op = "(?:" + Ee + "|" + Oe + ")", pa = "[^" + ha + "]", da = "(?:\\ud83c[\\udde6-\\uddff]){2}", ga = "[\\ud800-\\udbff][\\udc00-\\udfff]", sp = "\\u200d", ma = op + "?", ya = "[" + ip + "]?", up = "(?:" + sp + "(?:" + [pa, da, ga].join("|") + ")" + ya + ma + ")*", lp = ya + ma + up, cp = "(?:" + [pa + Ee + "?", Ee, da, ga, ap].join("|") + ")", fp = RegExp(Oe + "(?=" + Oe + ")|" + cp + lp, "g");
function hp(t) {
  return t.match(fp) || [];
}
function pp(t) {
  return fa(t) ? hp(t) : jh(t);
}
function dp(t) {
  return function(n) {
    n = Qn(n);
    var e = fa(n) ? pp(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Uh(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var gp = dp("toUpperCase");
function mp(t) {
  return gp(Qn(t).toLowerCase());
}
function yp() {
  this.__data__ = new ct(), this.size = 0;
}
function _p(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function vp(t) {
  return this.__data__.get(t);
}
function bp(t) {
  return this.__data__.has(t);
}
var wp = 200;
function xp(t, n) {
  var e = this.__data__;
  if (e instanceof ct) {
    var r = e.__data__;
    if (!tn || r.length < wp - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new ft(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function at(t) {
  var n = this.__data__ = new ct(t);
  this.size = n.size;
}
at.prototype.clear = yp;
at.prototype.delete = _p;
at.prototype.get = vp;
at.prototype.has = bp;
at.prototype.set = xp;
function ir(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function _a() {
  return [];
}
var Mp = Object.prototype, $p = Mp.propertyIsEnumerable, Kr = Object.getOwnPropertySymbols, va = Kr ? function(t) {
  return t == null ? [] : (t = Object(t), ir(Kr(t), function(n) {
    return $p.call(t, n);
  }));
} : _a, Ap = Object.getOwnPropertySymbols, Tp = Ap ? function(t) {
  for (var n = []; t; )
    rr(n, va(t)), t = Bh(t);
  return n;
} : _a;
function ba(t, n, e) {
  var r = n(t);
  return q(t) ? r : rr(r, e(t));
}
function Zr(t) {
  return ba(t, Tt, va);
}
function Sp(t) {
  return ba(t, ah, Tp);
}
var ze = $t(lt, "DataView"), Ie = $t(lt, "Promise"), Ce = $t(lt, "Set"), Wr = "[object Map]", kp = "[object Object]", Jr = "[object Promise]", Qr = "[object Set]", jr = "[object WeakMap]", ti = "[object DataView]", Pp = Mt(ze), Ep = Mt(tn), Op = Mt(Ie), zp = Mt(Ce), Ip = Mt(ke), rt = Rt;
(ze && rt(new ze(new ArrayBuffer(1))) != ti || tn && rt(new tn()) != Wr || Ie && rt(Ie.resolve()) != Jr || Ce && rt(new Ce()) != Qr || ke && rt(new ke()) != jr) && (rt = function(t) {
  var n = Rt(t), e = n == kp ? t.constructor : void 0, r = e ? Mt(e) : "";
  if (r)
    switch (r) {
      case Pp:
        return ti;
      case Ep:
        return Wr;
      case Op:
        return Jr;
      case zp:
        return Qr;
      case Ip:
        return jr;
    }
  return n;
});
var ni = lt.Uint8Array, Cp = "__lodash_hash_undefined__";
function Rp(t) {
  return this.__data__.set(t, Cp), this;
}
function Fp(t) {
  return this.__data__.has(t);
}
function Rn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new ft(); ++n < e; )
    this.add(t[n]);
}
Rn.prototype.add = Rn.prototype.push = Rp;
Rn.prototype.has = Fp;
function Lp(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Dp(t, n) {
  return t.has(n);
}
var qp = 1, Hp = 2;
function wa(t, n, e, r, i, a) {
  var o = e & qp, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), p = a.get(n);
  if (u && p)
    return u == n && p == t;
  var h = -1, f = !0, c = e & Hp ? new Rn() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var g = o ? r(_, d, h, n, t, a) : r(d, _, h, t, n, a);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (c) {
      if (!Lp(n, function(y, x) {
        if (!Dp(c, x) && (d === y || i(d, y, e, r, a)))
          return c.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function xa(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Np(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Bp = 1, Xp = 2, Up = "[object Boolean]", Gp = "[object Date]", Yp = "[object Error]", Vp = "[object Map]", Kp = "[object Number]", Zp = "[object RegExp]", Wp = "[object Set]", Jp = "[object String]", Qp = "[object Symbol]", jp = "[object ArrayBuffer]", td = "[object DataView]", ei = tt ? tt.prototype : void 0, ce = ei ? ei.valueOf : void 0;
function nd(t, n, e, r, i, a, o) {
  switch (e) {
    case td:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case jp:
      return !(t.byteLength != n.byteLength || !a(new ni(t), new ni(n)));
    case Up:
    case Gp:
    case Kp:
      return Zn(+t, +n);
    case Yp:
      return t.name == n.name && t.message == n.message;
    case Zp:
    case Jp:
      return t == n + "";
    case Vp:
      var s = xa;
    case Wp:
      var l = r & Bp;
      if (s || (s = Np), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Xp, o.set(t, n);
      var p = wa(s(t), s(n), r, i, a, o);
      return o.delete(t), p;
    case Qp:
      if (ce)
        return ce.call(t) == ce.call(n);
  }
  return !1;
}
var ed = 1, rd = Object.prototype, id = rd.hasOwnProperty;
function ad(t, n, e, r, i, a) {
  var o = e & ed, s = Zr(t), l = s.length, u = Zr(n), p = u.length;
  if (l != p && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : id.call(n, f)))
      return !1;
  }
  var c = a.get(t), d = a.get(n);
  if (c && d)
    return c == n && d == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var g = o; ++h < l; ) {
    f = s[h];
    var y = t[f], x = n[f];
    if (r)
      var M = o ? r(x, y, f, n, t, a) : r(y, x, f, t, n, a);
    if (!(M === void 0 ? y === x || i(y, x, e, r, a) : M)) {
      _ = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (_ && !g) {
    var m = t.constructor, v = n.constructor;
    m != v && "constructor" in t && "constructor" in n && !(typeof m == "function" && m instanceof m && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var od = 1, ri = "[object Arguments]", ii = "[object Array]", dn = "[object Object]", sd = Object.prototype, ai = sd.hasOwnProperty;
function ud(t, n, e, r, i, a) {
  var o = q(t), s = q(n), l = o ? ii : rt(t), u = s ? ii : rt(n);
  l = l == ri ? dn : l, u = u == ri ? dn : u;
  var p = l == dn, h = u == dn, f = l == u;
  if (f && Pe(t)) {
    if (!Pe(n))
      return !1;
    o = !0, p = !1;
  }
  if (f && !p)
    return a || (a = new at()), o || ua(t) ? wa(t, n, e, r, i, a) : nd(t, n, l, e, r, i, a);
  if (!(e & od)) {
    var c = p && ai.call(t, "__wrapped__"), d = h && ai.call(n, "__wrapped__");
    if (c || d) {
      var _ = c ? t.value() : t, g = d ? n.value() : n;
      return a || (a = new at()), i(_, g, e, r, a);
    }
  }
  return f ? (a || (a = new at()), ad(t, n, e, r, i, a)) : !1;
}
function ar(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !bt(t) && !bt(n) ? t !== t && n !== n : ud(t, n, e, r, ar, i);
}
var ld = 1, cd = 2;
function fd(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var p = new at(), h;
      if (!(h === void 0 ? ar(u, l, ld | cd, r, p) : h))
        return !1;
    }
  }
  return !0;
}
function Ma(t) {
  return t === t && !ut(t);
}
function hd(t) {
  for (var n = Tt(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ma(i)];
  }
  return n;
}
function $a(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function pd(t) {
  var n = hd(t);
  return n.length == 1 && n[0][2] ? $a(n[0][0], n[0][1]) : function(e) {
    return e === t || fd(e, t, n);
  };
}
function dd(t, n) {
  return t != null && n in Object(t);
}
function Aa(t, n, e) {
  n = jn(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = on(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Qe(i) && Kn(o, i) && (q(t) || je(t)));
}
function gd(t, n) {
  return t != null && Aa(t, n, dd);
}
var md = 1, yd = 2;
function _d(t, n) {
  return tr(t) && Ma(n) ? $a(on(t), n) : function(e) {
    var r = Dh(e, t);
    return r === void 0 && r === n ? gd(e, t) : ar(n, r, md | yd);
  };
}
function Ta(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function vd(t) {
  return function(n) {
    return er(n, t);
  };
}
function bd(t) {
  return tr(t) ? Ta(on(t)) : vd(t);
}
function Lt(t) {
  return typeof t == "function" ? t : t == null ? Vn : typeof t == "object" ? q(t) ? _d(t[0], t[1]) : pd(t) : bd(t);
}
function wd(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var xd = wd();
function Md(t, n) {
  return t && xd(t, n, Tt);
}
function $d(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!At(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var or = $d(Md);
function Ad(t) {
  return bt(t) && At(t);
}
function Td(t) {
  return typeof t == "function" ? t : Vn;
}
function j(t, n) {
  var e = q(t) ? ef : or;
  return e(t, Td(n));
}
function Sd(t, n) {
  return Ft(n, function(e) {
    return [e, t[e]];
  });
}
function kd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Pd = "[object Map]", Ed = "[object Set]";
function Od(t) {
  return function(n) {
    var e = rt(n);
    return e == Pd ? xa(n) : e == Ed ? kd(n) : Sd(n, t(n));
  };
}
var Sa = Od(Tt);
function zd(t, n) {
  var e = [];
  return or(t, function(r, i, a) {
    n(r, i, a) && e.push(r);
  }), e;
}
function Re(t, n) {
  var e = q(t) ? ir : zd;
  return e(t, Lt(n));
}
function Id(t) {
  return function(n, e, r) {
    var i = Object(n);
    if (!At(n)) {
      var a = Lt(e);
      n = Tt(n), e = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = t(n, e, r);
    return o > -1 ? i[a ? n[o] : o] : void 0;
  };
}
var Cd = Math.max;
function Rd(t, n, e) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var i = e == null ? 0 : Ec(e);
  return i < 0 && (i = Cd(r + i, 0)), rf(t, Lt(n), i);
}
var fe = Id(Rd);
function Fd(t, n) {
  var e = -1, r = At(t) ? Array(t.length) : [];
  return or(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function nn(t, n) {
  var e = q(t) ? Ft : Fd;
  return e(t, Lt(n));
}
var Ld = Object.prototype, Dd = Ld.hasOwnProperty;
function qd(t, n) {
  return t != null && Dd.call(t, n);
}
function Hd(t, n) {
  return t != null && Aa(t, n, qd);
}
function Nd(t, n) {
  return Ft(n, function(e) {
    return t[e];
  });
}
function ka(t) {
  return t == null ? [] : Nd(t, Tt(t));
}
function Bd(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
function Xd(t, n, e, r) {
  if (!ut(t))
    return t;
  n = jn(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = on(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var p = s[l];
      u = void 0, u === void 0 && (u = ut(p) ? p : Kn(n[i + 1]) ? [] : {});
    }
    cf(s, l, u), s = s[l];
  }
  return t;
}
function Ud(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = er(t, o);
    e(s, o) && Xd(a, jn(o, t), s);
  }
  return a;
}
function Gd(t, n) {
  if (t == null)
    return {};
  var e = Ft(Sp(t), function(r) {
    return [r];
  });
  return n = Lt(n), Ud(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Yd = Math.floor, Vd = Math.random;
function Pa(t, n) {
  return t + Yd(Vd() * (n - t + 1));
}
var Kd = Math.ceil, Zd = Math.max;
function Wd(t, n, e, r) {
  for (var i = -1, a = Zd(Kd((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function Jd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && df(n, e, r) && (e = r = void 0), n = wn(n), e === void 0 ? (e = n, n = 0) : e = wn(e), r = r === void 0 ? n < e ? 1 : -1 : wn(r), Wd(n, e, r);
  };
}
var Gt = Jd();
function Qd() {
  var t = arguments, n = Qn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Ea(t) {
  var n = t.length;
  return n ? t[Pa(0, n - 1)] : void 0;
}
function jd(t) {
  return Ea(ka(t));
}
function oi(t) {
  var n = q(t) ? Ea : jd;
  return n(t);
}
function Oa(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var a = Pa(e, i), o = t[a];
    t[a] = t[e], t[e] = o;
  }
  return t.length = n, t;
}
function t0(t) {
  return Oa(Kc(t));
}
function n0(t) {
  return Oa(ka(t));
}
function e0(t) {
  var n = q(t) ? t0 : n0;
  return n(t);
}
function Fn(t, n) {
  return t && t.length ? Bd(t, Lt(n)) : 0;
}
var r0 = Math.max;
function i0(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = ir(t, function(e) {
    if (Ad(e))
      return n = r0(e.length, n), !0;
  }), ia(n, function(e) {
    return Ft(t, Ta(e));
  });
}
var Ln = hf(i0);
const a0 = (t, n, e = 12, r = 12) => {
  const i = U().domain([0, e]).range([0, t]), a = U().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Gt((e + 1) * (r + 1)).map(function(l) {
        return { m: l % (e + 1), n: Math.floor(l / (e + 1)), x: i(l % (e + 1)), y: a(Math.floor(l / (e + 1))) };
      });
    },
    position: function(l, u) {
      typeof l == "number" && (l = [l]), typeof u == "number" && (u = [u]);
      const p = Nh(nn(u, function(h) {
        return nn(
          l,
          function(f) {
            return { x: i(f), y: a(h) };
          }
        );
      }));
      return p.length == 1 ? p[0] : p;
    }
  };
}, o0 = "_widget_18g36_1", s0 = "_label_18g36_19", u0 = "_lit_18g36_24", l0 = "_button_18g36_29", c0 = "_symbol_18g36_29", f0 = "_radio_18g36_29", h0 = "_radiobutton_18g36_29", p0 = "_selected_18g36_35", d0 = "_toggle_18g36_35", g0 = "_slider_18g36_44", m0 = "_track_18g36_44", y0 = "_track_overlay_18g36_48", _0 = "_handle_18g36_55", w = {
  widget: o0,
  label: s0,
  lit: u0,
  button: l0,
  symbol: c0,
  radio: f0,
  radiobutton: h0,
  selected: p0,
  toggle: d0,
  slider: g0,
  track: m0,
  track_overlay: y0,
  handle: _0
}, za = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, sr = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, v0 = (t = 1) => {
  const n = W();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, b0 = (t = 1) => {
  const n = W(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, w0 = (t = 1) => {
  const n = W();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, x0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = W();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, M0 = (t = 1) => {
  const n = W(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, $0 = (t = 1) => {
  const n = W(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, A0 = (t = 1) => {
  const n = W(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, T0 = (t = 1) => {
  var n = W(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, S0 = (t = 1) => {
  const n = W(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Fe = (t) => {
  switch (t) {
    case "play":
      return v0;
    case "forward":
      return b0;
    case "back":
      return w0;
    case "pause":
      return x0;
    case "reload":
      return M0;
    case "capture":
      return $0;
    case "rewind":
      return A0;
    case "stop":
      return T0;
    case "push":
      return S0;
  }
}, ur = () => {
  const t = "button";
  var n = za(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(d) {
  }, p = ["play"], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? p : (p = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function() {
      h = (h + 1) % p.length, u(), I(this.parentNode).select("." + w.symbol).attr("d", Fe(p[h])(r * e));
    },
    press: function(d) {
      h = (h + 1) % p.length, u(), d.select("#button_" + n).select("." + w.symbol).attr("d", Fe(p[h])(r * e));
    }
  };
}, k0 = () => {
  const t = "slider", n = Un(".3f");
  var e = za(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, p = function(y) {
  }, h = function(y) {
  }, f = [0, 1], c = 0, d = null, _ = U().domain(f).range([0, r]).clamp(!0);
  const g = function(y, x, M = f) {
    const m = y.select("#slider_" + e);
    _.domain(M), c = x, m.selectAll("." + w.handle).transition().attr("cx", _(x)), o && m.select("." + w.label).text(d + " = " + n(c)), p(), h();
  };
  return {
    type: t,
    scale: _,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return p = y, this;
      p(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return h = y, this;
      h(y);
    },
    range: function(y) {
      return typeof y > "u" ? f : (f = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? c : (c = y, this);
    },
    reset: g,
    click: g
  };
}, P0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = I(a).attr("class", w.widget + " " + w.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", w.background).on("click", t.click).on("mouseover", function() {
    I(this).classed(w.lit, !0), I(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(w.lit, !1), I(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), o.append("path").attr("d", Fe(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", w.symbol), r) {
    const l = sr(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", w.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, Ia = (t, n) => {
  const e = W();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, E0 = (t, n) => {
  const e = Un(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = I(l).attr("class", w.widget + " " + w.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Ia(t.size(), t.girth())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", w.track_overlay).on("click", function(d) {
    const _ = ye(d, this)[0];
    t.value(o.invert(_)), t.update(), t.update_end(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Zs().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var p, h, f, c = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? un([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -un([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? un([t.girth() / 2, t.knob()]) + 7 : -un([t.girth() / 2, t.knob()]) - 7, p = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", c = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", w.label).style("text-anchor", f).style("alignment-baseline", c).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + p + "," + h + ")"), l;
}, O0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = I(o).attr("class", w.widget + " " + w.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(w.selected, t.value() == 1);
  if (s.append("path").attr("d", Ia(2 * t.size(), 2 * t.size())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", w.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = sr(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", w.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, z0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = Qa(o), l = U().domain([0, o - 1]).range([0, t.size()]), u = U().domain([0, o - 1]).range([0, t.size()]), p = document.createElementNS("http://www.w3.org/2000/svg", "g"), f = I(p).attr("class", w.widget + " " + w.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + w.radiobutton).data(s).enter().append("g").attr("class", w.radiobutton).attr("id", (g) => "b" + g).attr("transform", (g) => t.orientation() == "vertical" ? "translate(0," + u(g) + ")" : "translate(" + l(g) + ",0)");
  var c, d;
  t.shape() == "rect" ? (c = f.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = f.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (c = f.append("circle").attr("r", i / 2), d = f.append("circle").attr("r", a / 2)), c.attr("class", w.background).on("mouseover", function() {
    I(this).classed(w.lit, !0), I(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(w.lit, !1), I(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), d.attr("class", w.symbol), d.filter((g) => g == t.value()).classed(w.selected, !0), f.on("click", t.click);
  const _ = sr(t.buttonsize(), t.buttonsize(), r);
  return f.append("text").attr("class", w.label).text(function(g, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), p;
}, si = (t, n) => {
  switch (t.type) {
    case "button":
      return P0(t);
    case "slider":
      return E0(t);
    case "radio":
      return z0(t);
    case "toggle":
      return O0(t);
  }
}, I0 = (t, n) => {
  const e = a0(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = I("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
}, $ = {
  widgets: {
    slider_size: 220,
    slider_gap: 1.75,
    slider_girth: 10,
    slider_knob: 14,
    slider_anchor: { x: 5.5, y: 1.25 },
    playbutton_size: 120,
    playbutton_anchor: { x: 2, y: 2 },
    backbutton_anchor: { x: 3, y: 4.5 },
    resetbutton_anchor: { x: 1, y: 4.5 }
  },
  plot: {
    spike_plot_width: 400,
    spike_plot_domain: [-10, 10],
    spike_plot_anchor: { x: 1, y: 8 },
    spike_plot_xlabel: "fitness",
    stack_plot_anchor: { x: 1, y: 11 },
    stack_plot_domain: [0, 500],
    stack_plot_xlabel: "time"
  },
  simulation: {
    delay: 10
  }
}, C = {
  N: 50,
  boundary: "dirichlet",
  initial_fitness: 0,
  delta_fitness: 1,
  mutation_rate: {
    range: [0, 1e-4],
    default: 5e-5
  },
  selectivity: {
    range: [0, 2],
    default: 1
  },
  long_range_dispersal: {
    range: [0, 0.01],
    default: 0
  }
}, C0 = (t) => nn(Sa(t), (n) => {
  n[1].id = n[0], n[1].label = Qd(mp(n[0]), /_/g, " ");
}), R0 = (t) => nn(Sa(t), (n) => n[1]), F0 = (t, n) => j(t, (e, r) => e.widget = n[r]), L0 = (t) => Gd(t, (n) => Hd(n, "range"));
U().domain([0, 360]).range([0, 2 * Math.PI]);
U().range([0, 360]).domain([0, 2 * Math.PI]);
const lr = L0(C);
C0(lr);
const Ca = R0(lr), xn = nn(
  Ca,
  (t) => k0().id(t.id).label(t.label).range(t.range).value(t.default).size($.widgets.slider_size).girth($.widgets.slider_girth).knob($.widgets.slider_knob)
);
F0(Ca, xn);
const pt = ur().actions(["play", "pause"]), te = ur().actions(["back"]), ne = ur().actions(["rewind"]), D0 = [pt, te, ne], q0 = (t, n) => {
  const e = n.position($.widgets.slider_anchor.x, Gt(xn.length).map((r) => $.widgets.slider_anchor.y + $.widgets.slider_gap * r));
  xn.forEach((r, i) => r.position(e[i])), pt.position(n.position($.widgets.playbutton_anchor.x, $.widgets.playbutton_anchor.y)).size($.widgets.playbutton_size), ne.position(n.position($.widgets.backbutton_anchor.x, $.widgets.backbutton_anchor.y)), te.position(n.position($.widgets.resetbutton_anchor.x, $.widgets.resetbutton_anchor.y)), t.selectAll(null).data(xn).enter().append(si), t.selectAll(null).data(D0).enter().append(si);
}, H0 = (t) => {
  j(lr, (n) => n.widget.reset(t, n.default));
};
Ln([-1, 1, 0, 0], [0, 0, -1, 1]), Ln([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const gn = [1, 0], mn = [0.5, Math.sqrt(3) / 2], H = [
  { l: 1, m: 0, n: -1 },
  { l: 1, m: -1, n: 0 },
  { l: 0, m: -1, n: 1 },
  { l: 0, m: 1, n: -1 },
  { l: -1, m: 0, n: 1 },
  { l: -1, m: 1, n: 0 }
], ui = [
  [H[0], H[1]],
  [H[1], H[2]],
  [H[2], H[4]],
  [H[4], H[5]],
  [H[5], H[3]],
  [H[3], H[0]]
];
function O(t) {
  return "id_l" + t.l + "m" + t.m + "n" + t.n;
}
const N0 = function(t) {
  var n = "periodic", e = 1, r = e / (2 * t + 1);
  const i = [], a = {};
  Gt(-t, t + 1).forEach(function(f) {
    Gt(-t, t + 1).forEach(function(c) {
      Gt(-t, t + 1).forEach(function(d) {
        f + c + d == 0 && i.push({
          l: f,
          m: c,
          n: d,
          x: r * f * gn[0] + r * c * mn[0],
          y: r * f * gn[1] + r * c * mn[1]
        });
      });
    });
  }), i.forEach(function(f) {
    a[O(f)] = f, f.cell = () => {
      const c = 1 / Math.sqrt(3);
      return [
        { x: f.x + r / 2, y: f.y + c * r / 2 },
        { x: f.x, y: f.y + c * r },
        { x: f.x - r / 2, y: f.y + c * r / 2 },
        { x: f.x - r / 2, y: f.y - c * r / 2 },
        { x: f.x, y: f.y - c * r },
        { x: f.x + r / 2, y: f.y - c * r / 2 },
        { x: f.x + r / 2, y: f.y + c * r / 2 }
      ];
    }, f.random_interior_point = () => {
      const c = 1 / Math.sqrt(3), d = Math.random(), _ = Math.random(), g = Math.floor(Math.random() * 6) * 2 * Math.PI / 6, y = r / 2 * Math.sqrt(d), x = r / 2 * Math.sqrt(d) * c * (1 - 2 * _), M = Math.cos(g) * y - Math.sin(g) * x, m = Math.sin(g) * y + Math.cos(g) * x;
      return {
        x: f.x + M,
        y: f.y + m
      };
    };
  }), h(i);
  const o = function(f) {
    return typeof f < "u" ? (e = f, r = e / (2 * t + 1), i.forEach((c) => {
      c.x = r * c.l * gn[0] + r * c.m * mn[0], c.y = r * c.l * gn[1] + r * c.m * mn[1];
    }), this.L = e, this) : e;
  }, s = function(f) {
    var c = 1 / Math.sqrt(3);
    return [
      { x: f.x + Scale / t / 2, y: f.y + c / 2 * Scale / t },
      { x: f.x, y: f.y + c * Scale / t },
      { x: f.x - Scale / t / 2, y: f.y + c / 2 * Scale / t },
      { x: f.x - Scale / t / 2, y: f.y - c / 2 * Scale / t },
      { x: f.x, y: f.y - c * Scale / t },
      { x: f.x + Scale / t / 2, y: f.y - c / 2 * Scale / t },
      { x: f.x + Scale / t / 2, y: f.y + c / 2 * Scale / t }
    ];
  }, l = function(f) {
    return typeof f < "u" ? (f == "dirichlet" ? (n = "dirichlet", p(i)) : (n = "periodic", h(i)), i.forEach((c) => {
      c.is_boundary = n == "dirichlet" && (c.n == -t || c.n == t || c.l == -t || c.l == t || c.m == -t || c.m == t);
    }), this) : n;
  }, u = function() {
    return n === "periodic" ? null : Re(i, (f) => f.n == -t || f.n == t || f.l == -t || f.l == t || f.m == -t || f.m == t);
  };
  return {
    type: "hexagonal",
    L: e,
    N: t,
    size: 1 + 3 * t * (t + 1),
    nodes: i,
    scale: o,
    boundary: l,
    boundary_cells: u,
    cell: s
  };
  function p(f) {
    f.forEach(function(c) {
      c.neighbors = [], H.forEach(function(d) {
        const _ = O({ l: c.l + d.l, m: c.m + d.m, n: c.n + d.n }), g = a[_];
        typeof g < "u" && c.neighbors.push(g);
      });
    }), f.forEach(function(c) {
      c.triangles = [], ui.forEach(function(d) {
        const _ = O({ l: c.l + d[0].l, m: c.m + d[0].m, n: c.n + d[0].n }), g = O({ l: c.l + d[1].l, m: c.m + d[1].m, n: c.n + d[1].n });
        typeof a[_] < "u" && typeof a[g] < "u" && c.triangles.push([a[_], a[g]]);
      });
    });
  }
  function h(f) {
    f.forEach(function(c) {
      c.neighbors = [], H.forEach(function(d) {
        var _ = O({ l: c.l + d.l, m: c.m + d.m, n: c.n + d.n });
        typeof a[_] > "u" && (c.l + d.l == t + 1 && Math.abs(c.m + d.m) <= t + 1 && Math.abs(c.n + d.n) <= t && (_ = O({ l: c.l + d.l - (2 * t + 1), m: c.m + d.m + (t + 1), n: c.n + d.n + t })), c.l + d.l == -(t + 1) && Math.abs(c.m + d.m) <= t + 1 && Math.abs(c.n + d.n) <= t && (_ = O({ l: c.l + d.l + (2 * t + 1), m: c.m + d.m - (t + 1), n: c.n + d.n - t })), c.m + d.m == t + 1 && Math.abs(c.l + d.l) <= t && Math.abs(c.n + d.n) <= t + 1 && (_ = O({ m: c.m + d.m - (2 * t + 1), n: c.n + d.n + (t + 1), l: c.l + d.l + t })), c.m + d.m == -(t + 1) && Math.abs(c.l + d.l) <= t && Math.abs(c.n + d.n) <= t + 1 && (_ = O({ m: c.m + d.m + (2 * t + 1), n: c.n + d.n - (t + 1), l: c.l + d.l - t })), c.n + d.n == t + 1 && Math.abs(c.l + d.l) <= t + 1 && Math.abs(c.m + d.m) <= t && (_ = O({ n: c.n + d.n - (2 * t + 1), l: c.l + d.l + (t + 1), m: c.m + d.m + t })), c.n + d.n == -(t + 1) && Math.abs(c.l + d.l) <= t + 1 && Math.abs(c.m + d.m) <= t && (_ = O({ n: c.n + d.n + (2 * t + 1), l: c.l + d.l - (t + 1), m: c.m + d.m - t }))), c.neighbors.push(a[_]);
      });
    }), f.forEach(function(c) {
      c.triangles = [], ui.forEach(function(d) {
        var _ = [];
        d.forEach(function(g, y) {
          var x = O({ l: c.l + g.l, m: c.m + g.m, n: c.n + g.n });
          typeof a[x] > "u" && (c.l + g.l == t + 1 && Math.abs(c.m + g.m) <= t + 1 && Math.abs(c.n + g.n) <= t && O({ l: c.l + g.l - (2 * t + 1), m: c.m + g.m + (t + 1), n: c.n + g.n + t }), c.l + g.l == -(t + 1) && Math.abs(c.m + g.m) <= t + 1 && Math.abs(c.n + g.n) <= t && O({ l: c.l + g.l + (2 * t + 1), m: c.m + g.m - (t + 1), n: c.n + g.n - t }), c.m + g.m == t + 1 && Math.abs(c.l + g.l) <= t && Math.abs(c.n + g.n) <= t + 1 && O({ m: c.m + g.m - (2 * t + 1), n: c.n + g.n + (t + 1), l: c.l + g.l + t }), c.m + g.m == -(t + 1) && Math.abs(c.l + g.l) <= t && Math.abs(c.n + g.n) <= t + 1 && O({ m: c.m + g.m + (2 * t + 1), n: c.n + g.n - (t + 1), l: c.l + g.l - t }), c.n + g.n == t + 1 && Math.abs(c.l + g.l) <= t + 1 && Math.abs(c.m + g.m) <= t && O({ n: c.n + g.n - (2 * t + 1), l: c.l + g.l + (t + 1), m: c.m + g.m + t }), c.n + g.n == -(t + 1) && Math.abs(c.l + g.l) <= t + 1 && Math.abs(c.m + g.m) <= t && O({ n: c.n + g.n + (2 * t + 1), l: c.l + g.l - (t + 1), m: c.m + g.m - t })), _[y] = x;
        }), c.triangles.push([a[_[0]], a[_[1]]]);
      });
    });
  }
};
Ln([-1, 1, 0, 0], [0, 0, -1, 1]), Ln([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var B = [], Dn = [], Yt, R = [], ot = {};
const B0 = C.delta_fitness, X0 = Wl(0, B0), U0 = () => {
  Dn = [], R = [], ot = {}, C.timer = {}, C.tick = 0, B = N0(C.N).boundary(C.boundary).nodes, Yt = 1, j(B, (n) => {
    n.fitness = C.initial_fitness, n.index = 0;
  }), R.push({ index: Yt - 1, f: 0, n: B.length }), ot[Yt - 1] = [{ t: C.tick, n0: 0, n1: B.length }];
}, G0 = () => {
  C.tick++, Dn = [];
  const t = C.mutation_rate.widget.value();
  B = e0(B), j(B, (n) => {
    if (Math.random() < t) {
      let e = fe(R, (r) => r.index == n.index);
      e.n--, Yt++, n.index = Yt - 1, n.fitness += X0(), R.push({ index: n.index, f: n.fitness, n: 1 }), Dn.push({ index: n.index, f: n.fitness });
    }
  }), j(B, (n) => {
    let e = oi(n.neighbors);
    Math.random() < C.long_range_dispersal.widget.value() && (e = oi(B));
    const r = n.fitness, i = e.fitness, a = 1 / (1 + Math.exp(-C.selectivity.widget.value() * (r - i))), o = fe(R, (l) => l.index == n.index), s = fe(R, (l) => l.index == e.index);
    Math.random() < a ? (o.n++, s.n--, e.index = n.index, e.fitness = n.fitness) : (o.n--, s.n++, n.index = e.index, n.fitness = e.fitness);
  }), R = Re(R, (n) => n.n > 0), j(R, (n) => {
    const e = Re(R, (i) => i.index < n.index);
    let r = 0;
    e.length > 0 && (r = Fn(e, (i) => i.n)), typeof ot[n.index] > "u" ? ot[n.index] = [{ t: C.tick, n0: r, n1: r + n.n }] : ot[n.index].push({ t: C.tick, n0: r, n1: r + n.n });
  });
}, It = { batlowS: ["#011959", "#faccfb", "#828231", "#216061", "#f19d6b", "#4d734c", "#114360", "#fdb4b4", "#c09036", "#165262", "#fcc0d6", "#fba890", "#356a59", "#0c305d", "#a18a2b", "#667a3e", "#dc954d", "#08255b", "#fdaea3", "#fbc6e8", "#b08d2e", "#ce9340", "#91862c", "#2a655e", "#747e37", "#134b61", "#f8a27e", "#0f3a5f", "#406f53", "#1b5962", "#fcbac5", "#597745", "#e8995c", "#607942", "#467150", "#faa587", "#fcab9a", "#144e62", "#7b8034", "#6d7c3b", "#c7913b", "#e29754", "#f59f74", "#185662", "#b88f32", "#a88c2c", "#0d365e", "#103f60", "#537549", "#fac9f1", "#26635f", "#99882b", "#124761", "#fdb7bc", "#1e5c61", "#89842e", "#fdb1ab", "#fbc3df", "#fcbdcd", "#2f685c", "#051f5a", "#0a2b5c", "#3a6d56", "#d59446", "#ec9a62", "#437051", "#175462", "#246160", "#bc8f34", "#777f36", "#4a724e", "#fdb0a7", "#ac8c2d", "#9d892b", "#fcbed2", "#28645f", "#f6a179", "#f39e70", "#50744b", "#95872c", "#0b2e5d", "#09285c", "#8d852d", "#fcaa95", "#fbc4e3", "#104160", "#a58b2b", "#6a7b3c", "#031c5a", "#386b58", "#144c62", "#fcad9e", "#32695a", "#b48e30", "#124961", "#d29343", "#205e61", "#e59858", "#ef9c67", "#fba78c"] };
var it, he, pe;
const Le = U().domain([-0.5, 0.5]), De = U().domain([-0.5, 0.5]), Y0 = Gn([0, It.batlowS.length - 1]).range(It.batlowS), qe = (t) => {
  t.forEach((n) => {
    const e = n.cell(), r = e.length, i = Y0(n.index);
    it.fillStyle = i, it.beginPath(), it.moveTo(Le(e[0].x), De(e[0].y)), j(e, (a, o) => it.lineTo(Le(e[(o + 1) % r].x), De(e[(o + 1) % r].y))), it.fill(), it.closePath();
  });
}, V0 = (t, n) => {
  he = n.display_size.width, pe = n.display_size.height, Le.range([0, he]), De.range([0, pe]), it = t.node().getContext("2d"), it.translate(0.5, 0.5), it.clearRect(0, 0, he, pe), qe(B), qe(B);
}, K0 = (t, n) => {
  qe(B);
}, Z0 = "_node_1gy07_1", W0 = "_plot_1gy07_5", J0 = "_xaxis_1gy07_5", Q0 = "_yaxis_1gy07_5", j0 = "_spike_1gy07_9", tg = "_xlabel_1gy07_12", F = {
  node: Z0,
  plot: W0,
  xaxis: J0,
  yaxis: Q0,
  spike: j0,
  xlabel: tg
}, Mn = Gn([0, It.batlowS.length - 1]).range(It.batlowS), xt = U().range([0, $.plot.spike_plot_width]), qn = sc().range([0, -75]), $n = (t) => "M" + xt(t.f) + "," + qn(0) + "L" + xt(t.f) + "," + qn(t.n), Ra = hi(xt).tickFormat(""), ng = pi(qn).tickFormat(""), eg = (t, n) => {
  qn.domain([0, Fn(R, (i) => i.n)]), xt.domain($.plot.spike_plot_domain);
  const e = n.position($.plot.spike_plot_anchor.x, $.plot.spike_plot_anchor.y);
  t.select("#spikechart").remove();
  const r = t.append("g").attr("class", F.plot).attr("transform", "translate(" + e.x + "," + e.y + ")").attr("id", "spikechart");
  r.append("text").text($.plot.spike_plot_xlabel).attr("transform", "translate(" + xt(0) + ",25)").attr("class", F.xlabel), r.append("g").call(Ra).attr("class", F.xaxis), r.append("g").call(ng).attr("class", F.yaxis), r.selectAll("." + F.spike).data(R).enter().append("path").attr("d", $n).attr("class", F.spike).style("stroke", function(i, a) {
    return Mn(a);
  });
}, rg = (t) => {
  const n = Fn(R, (i) => i.n), e = Fn(R, (i) => i.n * i.f) / n;
  xt.domain([$.plot.spike_plot_domain[0] + e, $.plot.spike_plot_domain[1] + e]), t.select("#spikechart").select("." + F.xaxis).call(Ra), j(Dn, (i) => {
    t.select("#spikechart").append("circle").attr("class", F).attr("transform", "translate(" + xt(i.f) + ",0)").attr("r", 1).style("fill", Mn(i.index)).style("opacity", 0.7).transition().duration(500).attr("r", 20).style("opacity", 0).remove();
  });
  const r = t.select("#spikechart").selectAll("." + F.spike).data(R).attr("class", F.spike).attr("d", $n).style("stroke", function(i, a) {
    return Mn(a);
  });
  r.attr("d", $n), r.enter().append("path").attr("d", $n).style("stroke", function(i, a) {
    return Mn(a);
  }).attr("class", F.spike);
}, Vt = Gn([0, It.batlowS.length - 1]).range(It.batlowS), Ct = U().range([0, $.plot.spike_plot_width]).clamp(!0), en = U().range([-75, 0]).clamp(!0);
Qi().x(function(t) {
  return Ct(t.t);
}).y(function(t) {
  return en(t.n);
});
const He = uc().x((t) => Ct(t.t)).y0((t) => en(t.n0)).y1((t) => en(t.n1)), Fa = hi(Ct).tickFormat(""), ig = pi(en).tickFormat(""), ag = (t, n) => {
  Ct.domain($.plot.stack_plot_domain), en.domain([0, B.length]);
  const e = n.position($.plot.stack_plot_anchor.x, $.plot.stack_plot_anchor.y);
  t.select("#stackchart").remove();
  const r = t.append("g").attr("class", F.plot).attr("transform", "translate(" + e.x + "," + e.y + ")").attr("id", "stackchart");
  r.append("text").text($.plot.stack_plot_xlabel).attr("transform", "translate(" + Ct($.plot.stack_plot_domain[1] / 2) + ",25)").attr("class", F.xlabel), r.append("g").call(Fa).attr("class", F.xaxis), r.append("g").call(ig).attr("class", F.yaxis), j(R, (i) => {
    r.append("path").datum(ot[i.index]).attr("d", He).style("stroke", Vt(i.index)).attr("id", "s" + i.index).style("fill", Vt(i.index)).style("stroke", Vt(i.index));
  });
}, og = (t) => {
  C.tick > $.plot.stack_plot_domain[1] && Ct.domain([C.tick - $.plot.stack_plot_domain[1], C.tick]), j(Tt(ot), (n) => {
    t.select("#stackchart").select("#s" + n).empty() && t.select("#stackchart").append("path").datum(ot[n]).attr("d", He).style("fill", Vt(n)).style("stroke", Vt(n)).attr("id", "s" + n), t.select("#stackchart").select("#s" + n).datum(ot[n]).attr("d", He);
  }), t.select("#stackchart").select("." + F.xaxis).call(Fa);
};
function sg(t, n, e) {
  G0(), K0(), rg(n), og(n);
}
function La(t, n, e, r) {
  U0(), V0(t, r), eg(n, e), ag(n, e);
}
var li = {};
const ug = (t, n, e) => {
  pt.value() == 1 ? li = Su(() => sg(t, n), $.simulation.delay) : li.stop();
}, lg = (t, n, e, r) => {
  ne.update(() => H0(n)), pt.update(() => ug(t, n)), te.update(() => La(t, n, e, r));
}, cg = {
  name: "@explorables/a_patchwork_darwinge",
  title: "A Patchwork Darwinge",
  subtitle: "Evolution: Selection and Variation",
  description: "This explorable illustrates the basic mechanism in evolutionary processes and how a population's fitness increases by random mutation and selection of most fit variants.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function fg(t, n = Da) {
  const e = I0(t, n), r = e.display, i = e.controls, a = e.grid;
  return q0(i, a), lg(r, i, a, n), La(r, i, a, n), {
    halt() {
      pt.value() === 1 && pt.press(i);
    },
    reset() {
      pt.value() === 1 && pt.press(i), ne.press(i), te.press(i);
    },
    config: n,
    meta: cg
  };
}
export {
  Da as config,
  fg as default,
  fg as load,
  cg as meta
};
