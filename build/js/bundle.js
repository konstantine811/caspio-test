"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t) {
  (function () {
    var e = document.getElementById("btn-menu"),
        t = document.querySelectorAll(".menu-item"),
        n = document.getElementById("profile-menu"),
        r = document.getElementById("btn-back-dashboard"),
        o = document.getElementById("drop-down"),
        c = function c(e) {
      var t = e.classList;
      t.contains("hidden") ? (t.remove("hidden"), t.add("visible")) : (t.remove("visible"), t.add("hidden"));
    };

    t.forEach(function (e) {
      e.addEventListener("click", function (e) {
        c(n);
      }, !1);
    }), r.addEventListener("click", function (e) {
      e.preventDefault(), c(n);
    }, !1), e.addEventListener("click", function (e) {
      e.preventDefault();
      var t = document.getElementById("menu");
      c(t);
    }, !1), o.addEventListener("click", function (e) {
      e.preventDefault();
      var t = e.target;
      t.classList.contains("open") ? t.classList.remove("open") : t.classList.add("open");
    }, !1);
  })();
}]);
//# sourceMappingURL=bundle.js.map
