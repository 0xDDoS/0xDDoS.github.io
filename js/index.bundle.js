! function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var r = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) n.d(i, r, function (e) {
        return t[e]
      }.bind(null, r));
    return i
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "/", n(n.s = 11)
}([function (t, e, n) {
  "use strict";
  n.d(e, "b", (function () {
    return r
  })), n.d(e, "a", (function () {
    return o
  })), n.d(e, "c", (function () {
    return s
  }));
  var i = function (t, e) {
    return (i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (t, e) {
        t.__proto__ = e
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      })(t, e)
  };

  function r(t, e) {
    function n() {
      this.constructor = t
    }
    i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  }
  var o = function () {
    return (o = Object.assign || function (t) {
      for (var e, n = 1, i = arguments.length; n < i; n++)
        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t
    }).apply(this, arguments)
  };

  function a(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var i, r, o = n.call(t),
      a = [];
    try {
      for (;
        (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
    } catch (t) {
      r = {
        error: t
      }
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o)
      } finally {
        if (r) throw r.error
      }
    }
    return a
  }

  function s() {
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
    return t
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return i
  }));
  var i = function () {
    function t(t) {
      void 0 === t && (t = {}), this.adapter_ = t
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function () {
        return {}
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function () {
        return {}
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function () {
        return {}
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function () {
        return {}
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.init = function () {}, t.prototype.destroy = function () {}, t
  }()
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return o
  }));
  var i = n(0),
    r = n(1),
    o = function () {
      function t(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        this.root_ = t, this.initialize.apply(this, i.c(n)), this.foundation_ = void 0 === e ? this.getDefaultFoundation() : e, this.foundation_.init(), this.initialSyncWithDOM()
      }
      return t.attachTo = function (e) {
        return new t(e, new r.a({}))
      }, t.prototype.initialize = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      }, t.prototype.getDefaultFoundation = function () {
        throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
      }, t.prototype.initialSyncWithDOM = function () {}, t.prototype.destroy = function () {
        this.foundation_.destroy()
      }, t.prototype.listen = function (t, e, n) {
        this.root_.addEventListener(t, e, n)
      }, t.prototype.unlisten = function (t, e, n) {
        this.root_.removeEventListener(t, e, n)
      }, t.prototype.emit = function (t, e, n) {
        var i;
        void 0 === n && (n = !1), "function" == typeof CustomEvent ? i = new CustomEvent(t, {
          bubbles: n,
          detail: e
        }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, n, !1, e), this.root_.dispatchEvent(i)
      }, t
    }()
}, function (t, e, n) {
  "use strict";
  var i;

  function r(t, e) {
    if (void 0 === t && (t = window), void 0 === e && (e = !1), void 0 === i || e) {
      var n = !1;
      try {
        t.document.addEventListener("test", (function () {}), {
          get passive() {
            return n = !0
          }
        })
      } catch (t) {}
      i = n
    }
    return !!i && {
      passive: !0
    }
  }
  n.d(e, "a", (function () {
    return r
  }))
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return l
  }));
  var i = n(0),
    r = n(1),
    o = n(7),
    a = n(8),
    s = ["touchstart", "pointerdown", "mousedown", "keydown"],
    u = ["touchend", "pointerup", "mouseup", "contextmenu"],
    c = [],
    l = function (t) {
      function e(n) {
        var r = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
        return r.activationAnimationHasEnded_ = !1, r.activationTimer_ = 0, r.fgDeactivationRemovalTimer_ = 0, r.fgScale_ = "0", r.frame_ = {
          width: 0,
          height: 0
        }, r.initialSize_ = 0, r.layoutFrame_ = 0, r.maxRadius_ = 0, r.unboundedCoords_ = {
          left: 0,
          top: 0
        }, r.activationState_ = r.defaultActivationState_(), r.activationTimerCallback_ = function () {
          r.activationAnimationHasEnded_ = !0, r.runDeactivationUXLogicIfReady_()
        }, r.activateHandler_ = function (t) {
          return r.activate_(t)
        }, r.deactivateHandler_ = function () {
          return r.deactivate_()
        }, r.focusHandler_ = function () {
          return r.handleFocus()
        }, r.blurHandler_ = function () {
          return r.handleBlur()
        }, r.resizeHandler_ = function () {
          return r.layout()
        }, r
      }
      return i.b(e, t), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return o.a
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "strings", {
        get: function () {
          return o.c
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "numbers", {
        get: function () {
          return o.b
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            browserSupportsCssVars: function () {
              return !0
            },
            computeBoundingRect: function () {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
              }
            },
            containsEventTarget: function () {
              return !0
            },
            deregisterDocumentInteractionHandler: function () {},
            deregisterInteractionHandler: function () {},
            deregisterResizeHandler: function () {},
            getWindowPageOffset: function () {
              return {
                x: 0,
                y: 0
              }
            },
            isSurfaceActive: function () {
              return !0
            },
            isSurfaceDisabled: function () {
              return !0
            },
            isUnbounded: function () {
              return !0
            },
            registerDocumentInteractionHandler: function () {},
            registerInteractionHandler: function () {},
            registerResizeHandler: function () {},
            removeClass: function () {},
            updateCssVariable: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.init = function () {
        var t = this,
          n = this.supportsPressRipple_();
        if (this.registerRootHandlers_(n), n) {
          var i = e.cssClasses,
            r = i.ROOT,
            o = i.UNBOUNDED;
          requestAnimationFrame((function () {
            t.adapter_.addClass(r), t.adapter_.isUnbounded() && (t.adapter_.addClass(o), t.layoutInternal_())
          }))
        }
      }, e.prototype.destroy = function () {
        var t = this;
        if (this.supportsPressRipple_()) {
          this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));
          var n = e.cssClasses,
            i = n.ROOT,
            r = n.UNBOUNDED;
          requestAnimationFrame((function () {
            t.adapter_.removeClass(i), t.adapter_.removeClass(r), t.removeCssVars_()
          }))
        }
        this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_()
      }, e.prototype.activate = function (t) {
        this.activate_(t)
      }, e.prototype.deactivate = function () {
        this.deactivate_()
      }, e.prototype.layout = function () {
        var t = this;
        this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame((function () {
          t.layoutInternal_(), t.layoutFrame_ = 0
        }))
      }, e.prototype.setUnbounded = function (t) {
        var n = e.cssClasses.UNBOUNDED;
        t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
      }, e.prototype.handleFocus = function () {
        var t = this;
        requestAnimationFrame((function () {
          return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)
        }))
      }, e.prototype.handleBlur = function () {
        var t = this;
        requestAnimationFrame((function () {
          return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)
        }))
      }, e.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars()
      }, e.prototype.defaultActivationState_ = function () {
        return {
          activationEvent: void 0,
          hasDeactivationUXRun: !1,
          isActivated: !1,
          isProgrammatic: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1
        }
      }, e.prototype.registerRootHandlers_ = function (t) {
        var e = this;
        t && (s.forEach((function (t) {
          e.adapter_.registerInteractionHandler(t, e.activateHandler_)
        })), this.adapter_.isUnbounded() && this.adapter_.registerResizeHandler(this.resizeHandler_)), this.adapter_.registerInteractionHandler("focus", this.focusHandler_), this.adapter_.registerInteractionHandler("blur", this.blurHandler_)
      }, e.prototype.registerDeactivationHandlers_ = function (t) {
        var e = this;
        "keydown" === t.type ? this.adapter_.registerInteractionHandler("keyup", this.deactivateHandler_) : u.forEach((function (t) {
          e.adapter_.registerDocumentInteractionHandler(t, e.deactivateHandler_)
        }))
      }, e.prototype.deregisterRootHandlers_ = function () {
        var t = this;
        s.forEach((function (e) {
          t.adapter_.deregisterInteractionHandler(e, t.activateHandler_)
        })), this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter_.isUnbounded() && this.adapter_.deregisterResizeHandler(this.resizeHandler_)
      }, e.prototype.deregisterDeactivationHandlers_ = function () {
        var t = this;
        this.adapter_.deregisterInteractionHandler("keyup", this.deactivateHandler_), u.forEach((function (e) {
          t.adapter_.deregisterDocumentInteractionHandler(e, t.deactivateHandler_)
        }))
      }, e.prototype.removeCssVars_ = function () {
        var t = this,
          n = e.strings;
        Object.keys(n).forEach((function (e) {
          0 === e.indexOf("VAR_") && t.adapter_.updateCssVariable(n[e], null)
        }))
      }, e.prototype.activate_ = function (t) {
        var e = this;
        if (!this.adapter_.isSurfaceDisabled()) {
          var n = this.activationState_;
          if (!n.isActivated) {
            var i = this.previousActivationEvent_;
            if (!(i && void 0 !== t && i.type !== t.type)) n.isActivated = !0, n.isProgrammatic = void 0 === t, n.activationEvent = t, n.wasActivatedByPointer = !n.isProgrammatic && (void 0 !== t && ("mousedown" === t.type || "touchstart" === t.type || "pointerdown" === t.type)), void 0 !== t && c.length > 0 && c.some((function (t) {
              return e.adapter_.containsEventTarget(t)
            })) ? this.resetActivationState_() : (void 0 !== t && (c.push(t.target), this.registerDeactivationHandlers_(t)), n.wasElementMadeActive = this.checkElementMadeActive_(t), n.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame((function () {
              c = [], n.wasElementMadeActive || void 0 === t || " " !== t.key && 32 !== t.keyCode || (n.wasElementMadeActive = e.checkElementMadeActive_(t), n.wasElementMadeActive && e.animateActivation_()), n.wasElementMadeActive || (e.activationState_ = e.defaultActivationState_())
            })))
          }
        }
      }, e.prototype.checkElementMadeActive_ = function (t) {
        return void 0 === t || "keydown" !== t.type || this.adapter_.isSurfaceActive()
      }, e.prototype.animateActivation_ = function () {
        var t = this,
          n = e.strings,
          i = n.VAR_FG_TRANSLATE_START,
          r = n.VAR_FG_TRANSLATE_END,
          o = e.cssClasses,
          a = o.FG_DEACTIVATION,
          s = o.FG_ACTIVATION,
          u = e.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var c = "",
          l = "";
        if (!this.adapter_.isUnbounded()) {
          var d = this.getFgTranslationCoordinates_(),
            p = d.startPoint,
            f = d.endPoint;
          c = p.x + "px, " + p.y + "px", l = f.x + "px, " + f.y + "px"
        }
        this.adapter_.updateCssVariable(i, c), this.adapter_.updateCssVariable(r, l), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter_.removeClass(a), this.adapter_.computeBoundingRect(), this.adapter_.addClass(s), this.activationTimer_ = setTimeout((function () {
          return t.activationTimerCallback_()
        }), u)
      }, e.prototype.getFgTranslationCoordinates_ = function () {
        var t, e = this.activationState_,
          n = e.activationEvent;
        return {
          startPoint: t = {
            x: (t = e.wasActivatedByPointer ? Object(a.getNormalizedEventCoords)(n, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : {
              x: this.frame_.width / 2,
              y: this.frame_.height / 2
            }).x - this.initialSize_ / 2,
            y: t.y - this.initialSize_ / 2
          },
          endPoint: {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
          }
        }
      }, e.prototype.runDeactivationUXLogicIfReady_ = function () {
        var t = this,
          n = e.cssClasses.FG_DEACTIVATION,
          i = this.activationState_,
          r = i.hasDeactivationUXRun,
          a = i.isActivated;
        (r || !a) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter_.addClass(n), this.fgDeactivationRemovalTimer_ = setTimeout((function () {
          t.adapter_.removeClass(n)
        }), o.b.FG_DEACTIVATION_MS))
      }, e.prototype.rmBoundedActivationClasses_ = function () {
        var t = e.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(t), this.activationAnimationHasEnded_ = !1, this.adapter_.computeBoundingRect()
      }, e.prototype.resetActivationState_ = function () {
        var t = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout((function () {
          return t.previousActivationEvent_ = void 0
        }), e.numbers.TAP_DELAY_MS)
      }, e.prototype.deactivate_ = function () {
        var t = this,
          e = this.activationState_;
        if (e.isActivated) {
          var n = i.a({}, e);
          e.isProgrammatic ? (requestAnimationFrame((function () {
            return t.animateDeactivation_(n)
          })), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame((function () {
            t.activationState_.hasDeactivationUXRun = !0, t.animateDeactivation_(n), t.resetActivationState_()
          })))
        }
      }, e.prototype.animateDeactivation_ = function (t) {
        var e = t.wasActivatedByPointer,
          n = t.wasElementMadeActive;
        (e || n) && this.runDeactivationUXLogicIfReady_()
      }, e.prototype.layoutInternal_ = function () {
        var t = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var n = Math.max(this.frame_.height, this.frame_.width);
        this.maxRadius_ = this.adapter_.isUnbounded() ? n : Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)) + e.numbers.PADDING, this.initialSize_ = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE), this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_()
      }, e.prototype.updateLayoutCssVars_ = function () {
        var t = e.strings,
          n = t.VAR_FG_SIZE,
          i = t.VAR_LEFT,
          r = t.VAR_TOP,
          o = t.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(n, this.initialSize_ + "px"), this.adapter_.updateCssVariable(o, this.fgScale_), this.adapter_.isUnbounded() && (this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        }, this.adapter_.updateCssVariable(i, this.unboundedCoords_.left + "px"), this.adapter_.updateCssVariable(r, this.unboundedCoords_.top + "px"))
      }, e
    }(r.a)
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return c
  }));
  var i = n(0),
    r = n(2),
    o = n(3),
    a = n(6),
    s = n(4),
    u = n(8),
    c = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.disabled = !1, e
      }
      return i.b(e, t), e.attachTo = function (t, n) {
        void 0 === n && (n = {
          isUnbounded: void 0
        });
        var i = new e(t);
        return void 0 !== n.isUnbounded && (i.unbounded = n.isUnbounded), i
      }, e.createAdapter = function (t) {
        return {
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          browserSupportsCssVars: function () {
            return u.supportsCssVariables(window)
          },
          computeBoundingRect: function () {
            return t.root_.getBoundingClientRect()
          },
          containsEventTarget: function (e) {
            return t.root_.contains(e)
          },
          deregisterDocumentInteractionHandler: function (t, e) {
            return document.documentElement.removeEventListener(t, e, Object(o.a)())
          },
          deregisterInteractionHandler: function (e, n) {
            return t.root_.removeEventListener(e, n, Object(o.a)())
          },
          deregisterResizeHandler: function (t) {
            return window.removeEventListener("resize", t)
          },
          getWindowPageOffset: function () {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            }
          },
          isSurfaceActive: function () {
            return Object(a.b)(t.root_, ":active")
          },
          isSurfaceDisabled: function () {
            return Boolean(t.disabled)
          },
          isUnbounded: function () {
            return Boolean(t.unbounded)
          },
          registerDocumentInteractionHandler: function (t, e) {
            return document.documentElement.addEventListener(t, e, Object(o.a)())
          },
          registerInteractionHandler: function (e, n) {
            return t.root_.addEventListener(e, n, Object(o.a)())
          },
          registerResizeHandler: function (t) {
            return window.addEventListener("resize", t)
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          },
          updateCssVariable: function (e, n) {
            return t.root_.style.setProperty(e, n)
          }
        }
      }, Object.defineProperty(e.prototype, "unbounded", {
        get: function () {
          return Boolean(this.unbounded_)
        },
        set: function (t) {
          this.unbounded_ = Boolean(t), this.setUnbounded_()
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.activate = function () {
        this.foundation_.activate()
      }, e.prototype.deactivate = function () {
        this.foundation_.deactivate()
      }, e.prototype.layout = function () {
        this.foundation_.layout()
      }, e.prototype.getDefaultFoundation = function () {
        return new s.a(e.createAdapter(this))
      }, e.prototype.initialSyncWithDOM = function () {
        var t = this.root_;
        this.unbounded = "mdcRippleIsUnbounded" in t.dataset
      }, e.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_))
      }, e
    }(r.a)
}, function (t, e, n) {
  "use strict";

  function i(t, e) {
    if (t.closest) return t.closest(e);
    for (var n = t; n;) {
      if (r(n, e)) return n;
      n = n.parentElement
    }
    return null
  }

  function r(t, e) {
    return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
  }
  n.d(e, "a", (function () {
    return i
  })), n.d(e, "b", (function () {
    return r
  }))
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return i
  })), n.d(e, "c", (function () {
    return r
  })), n.d(e, "b", (function () {
    return o
  }));
  var i = {
      BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
      FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
      FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
      ROOT: "mdc-ripple-upgraded",
      UNBOUNDED: "mdc-ripple-upgraded--unbounded"
    },
    r = {
      VAR_FG_SCALE: "--mdc-ripple-fg-scale",
      VAR_FG_SIZE: "--mdc-ripple-fg-size",
      VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
      VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
      VAR_LEFT: "--mdc-ripple-left",
      VAR_TOP: "--mdc-ripple-top"
    },
    o = {
      DEACTIVATION_TIMEOUT_MS: 225,
      FG_DEACTIVATION_MS: 150,
      INITIAL_ORIGIN_SCALE: .6,
      PADDING: 10,
      TAP_DELAY_MS: 300
    }
}, function (t, e, n) {
  "use strict";
  var i;

  function r(t, e) {
    void 0 === e && (e = !1);
    var n = t.CSS,
      r = i;
    if ("boolean" == typeof i && !e) return i;
    if (!(n && "function" == typeof n.supports)) return !1;
    var o = n.supports("--css-vars", "yes"),
      a = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
    return r = !(!o && !a) && ! function (t) {
      var e = t.document,
        n = e.createElement("div");
      n.className = "mdc-ripple-surface--test-edge-var-bug", e.head.appendChild(n);
      var i = t.getComputedStyle(n),
        r = null !== i && "solid" === i.borderTopStyle;
      return n.parentNode && n.parentNode.removeChild(n), r
    }(t), e || (i = r), r
  }

  function o(t, e, n) {
    if (!t) return {
      x: 0,
      y: 0
    };
    var i, r, o = e.x,
      a = e.y,
      s = o + n.left,
      u = a + n.top;
    if ("touchstart" === t.type) {
      var c = t;
      i = c.changedTouches[0].pageX - s, r = c.changedTouches[0].pageY - u
    } else {
      var l = t;
      i = l.pageX - s, r = l.pageY - u
    }
    return {
      x: i,
      y: r
    }
  }
  n.r(e), n.d(e, "supportsCssVariables", (function () {
    return r
  })), n.d(e, "getNormalizedEventCoords", (function () {
    return o
  }))
}, function (t, e) {
  t.exports = {
    stringToArrayBuffer: function (t) {
      const e = unescape(encodeURIComponent(t)).split(""),
        n = [];
      for (let t = 0; t < e.length; t += 1) n.push(e[t].charCodeAt(0));
      return new Uint8Array(n)
    },
    arrayBufferToHex: function (t) {
      const e = new Uint8Array(t);
      let n = "";
      for (let t = 0; t < e.byteLength; t += 1) n += e[t].toString(16).padStart(2, "0");
      return n
    },
    getAlgorithm: function (t) {
      return {
        sha1: "SHA-1",
        "sha-1": "SHA-1",
        sha256: "SHA-256",
        "sha-256": "SHA-256",
        sha512: "SHA-512",
        "sha-512": "SHA-512"
      } [t.toLowerCase()]
    }
  }
}, function (t, e) {
  t.exports = {
    consumeEntropy: function t(e, n, i, r) {
      let o = e;
      if (o.length >= r) return {
        value: o,
        entropy: n
      };
      const a = n.divmod(i.length);
      return o += i[a.remainder], t(o, a.quotient, i, r)
    }
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  const i = n(28),
    r = n(12),
    o = n(29),
    a = n(27),
    s = n(13),
    u = n(15),
    c = n(19);
  n(22), n(23), n(24), n(25), n(26), "serviceWorker" in navigator && window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(t => {
      console.info("Service Worker registered: ", t)
    }).catch(t => {
      console.warn("Service Worker registration failed: ", t)
    })
  });
  const l = [
      ["#fff1e9", "#ffd5d5", "#fc7fb2", "#45454d"],
      ["#293462", "#00818a", "#ec9b3b", "#f7be16"],
      ["#dfddc7", "#f58b54", "#a34a28", "#211717"],
      ["#003f5c", "#58508d", "#bc5090", "#ff6361"],
      ["#364f6b", "#3fc1c9", "#f5f5f5", "#fc5185"],
      ["#11cbd7", "#c6f1e7", "#f0fff3", "#fa4659"],
      ["#eb586f", "#d8e9f0", "#4aa0d5", "#454553"],
      ["#f0134d", "#ff6f5e", "#f5f0e3", "#40bfc1"],
      ["#011627", "#fafafa", "#2ec4b6", "#e71d36", "#ff9f1c"],
      ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"],
      ["#1a535c", "#4ecdc4", "#f7fff7", "#ff6b6b", "#ffe66d"],
      ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
      ["#114b5f", "#028090", "#e4fde1", "#456990", "#f45b69"],
      ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
      ["#114b5f", "#1a936f", "#88d498", "#c6dabf", "#f3e9d2"],
      ["#dcdcdd", "#c5c3c6", "#46494c", "#4c5c68", "#1985a1"],
      ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"],
      ["#0b132b", "#1c2541", "#3a506b", "#5bc0be", "#6fffe9"]
    ],
    d = document.getElementById("website"),
    p = document.getElementById("username"),
    f = document.getElementById("password"),
    h = document.getElementById("charsets"),
    _ = document.getElementById("length"),
    g = document.getElementById("counter"),
    v = document.getElementById("algorithm"),
    y = document.getElementById("iterations"),
    m = document.getElementById("part-1"),
    b = document.getElementById("part-2"),
    E = document.getElementById("part-3"),
    C = document.getElementById("letter-1"),
    I = document.getElementById("letter-2"),
    A = document.getElementById("letter-3"),
    T = document.getElementById("letter-4"),
    O = document.getElementById("generated-password"),
    L = [C, I, A, T],
    S = new i.MDCChipSet(h),
    N = new i.MDCChipSet(v);
  var w;

  function R() {
    localStorage.setItem("opts", JSON.stringify(P))
  }! function (t) {
    t[t.None = 0] = "None", t[t.Upper = 1] = "Upper", t[t.Lower = 2] = "Lower", t[t.Numeric = 4] = "Numeric", t[t.Symbols = 8] = "Symbols", t[t.Letters = 3] = "Letters", t[t.Alphanum = 7] = "Alphanum", t[t.All = 15] = "All"
  }(w || (w = {}));
  const D = localStorage.getItem("opts"),
    P = null === D ? {
      charsets: w.All,
      length: 16,
      counter: 1,
      aes: 256,
      iterations: 1e5
    } : JSON.parse(D);
  P.charsets & w.Lower && (S.chips[0].selected = !0), P.charsets & w.Upper && (S.chips[1].selected = !0), P.charsets & w.Numeric && (S.chips[2].selected = !0), P.charsets & w.Symbols && (S.chips[3].selected = !0), 256 === P.aes ? N.chips[0].selected = !0 : N.chips[1].selected = !0, _.valueAsNumber = P.length, g.valueAsNumber = P.counter, y.valueAsNumber = P.iterations;
  for (const t of [d, p, f, _, g, y]) a.MDCTextField.attachTo(t.parentElement);
  let M = 0,
    x = "";

  function H() {
    if (0 === d.value.length || 0 === p.value.length || 0 === f.value.length) return O.textContent = "";
    const t = ++M;
    s.calcEntropy({
      site: d.value,
      login: p.value,
      options: {
        counter: P.counter
      },
      crypto: {
        iterations: +y.value,
        keylen: 32,
        digest: "sha" + P.aes
      }
    }, f.value).then(e => {
      if (t !== M) return;
      const n = u.renderPassword(e, {
        length: P.length,
        lowercase: 0 != (P.charsets & w.Lower),
        uppercase: 0 != (P.charsets & w.Upper),
        digits: 0 != (P.charsets & w.Numeric),
        symbols: 0 != (P.charsets & w.Symbols)
      });
      x = n, O.textContent = n, m.parentElement.style.setProperty("--box-width", O.clientWidth + 16 + "px")
    })
  }
  d.addEventListener("input", (function () {
    if (H(), 0 === this.value.length) return m.classList.add("out");
    m.classList.remove("out")
  })), p.addEventListener("input", (function () {
    if (H(), 0 === this.value.length) return E.classList.add("out");
    E.classList.remove("out")
  }));
  let F = 0;

  function V(t) {
    return t[Math.floor(Math.random() * t.length)]
  }

  function k(t) {
    let e = "",
      n = "";
    for (t & w.Lower && (n += "abcdefghijklmnopqrstuvwxyz", e += V("abcdefghijklmnopqrstuvwxyz")), t & w.Upper && (n += "ABCDEFGHIJKLMNOPQRSTUVWXYZ", e += V("ABCDEFGHIJKLMNOPQRSTUVWXYZ")), t & w.Numeric && (n += "0123456789", e += V("0123456789")), t & w.Symbols && (n += "$&?@#", e += V("$&?@#")); e.length < 4;) e += V(n);
    for (const t of L) t.classList.add("out");
    setTimeout(() => {
      let t = 0;
      for (const n of L) n.textContent = e[t++], n.classList.remove("out")
    }, 300)
  }

  function B(t, e) {
    t.addEventListener("blur", (function () {
      0 === this.value.length && (this.valueAsNumber = e, this.dispatchEvent(new CustomEvent("input")))
    }))
  }
  f.addEventListener("input", (function () {
    if (H(), 0 === this.value.length) return m.style.setProperty("--color", ""), b.style.setProperty("--color", ""), E.style.setProperty("--color", ""), C.style.setProperty("--color", ""), I.style.setProperty("--color", ""), A.style.setProperty("--color", ""), T.style.setProperty("--color", ""), b.classList.add("out");
    b.classList.remove("out");
    const t = ++F;
    c.createHmac("sha" + P.aes, this.value).then(e => {
      if (t !== F) return;
      const n = e.substr(0, 6),
        i = parseInt(n, 16),
        r = l[i % l.length];

      function o(t) {
        const n = e.substr(8 * t, 6),
          i = parseInt(n, 16);
        return r[i % r.length]
      }
      m.style.setProperty("--color", o(1)), b.style.setProperty("--color", o(2)), E.style.setProperty("--color", o(3)), C.style.setProperty("--color", o(4)), I.style.setProperty("--color", o(5)), A.style.setProperty("--color", o(6)), T.style.setProperty("--color", o(7))
    })
  })), B(_, 16), _.addEventListener("input", (function () {
    this.validity.valid && (P.length = this.valueAsNumber, R(), H())
  })), B(g, 1), g.addEventListener("input", (function () {
    var t;
    this.validity.valid && (t = P.counter = this.valueAsNumber, m.parentElement.style.setProperty("--box-radius", 6 + t / 6 + "px"), R(), H())
  })), B(y, 1e5), y.addEventListener("input", (function () {
    this.validity.valid && (P.iterations = this.valueAsNumber, R(), H())
  })), S.listen("MDCChip:selection", (function () {
    let t = 0;
    S.chips[0].selected && (t |= w.Lower), S.chips[1].selected && (t |= w.Upper), S.chips[2].selected && (t |= w.Numeric), S.chips[3].selected && (t |= w.Symbols), P.charsets !== t && (1 === S.selectedChipIds.length ? S.chips.find(t => t.selected).root_.classList.add("locked") : S.chips.forEach(t => t.root_.classList.remove("locked")), k(P.charsets = t), R(), H())
  })), N.listen("MDCChip:selection", (function () {
    P.aes = N.chips[0].selected ? 256 : 512, R(), H()
  })), k(P.charsets);
  for (const t of document.getElementsByClassName("drag-number")) t.addEventListener("mousedown", (function (e) {
    const n = t.nextElementSibling,
      i = n.valueAsNumber,
      r = e.screenY;

    function o(t) {
      let e = (+n.max - +n.min) / 500,
        o = i + (r - t.screenY) * e;
      o < +n.min ? o = +n.min : o > +n.max && (o = +n.max), n.valueAsNumber = Math.floor(o), n.dispatchEvent(new CustomEvent("input"))
    }
    document.addEventListener("mousemove", o), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", o)
    }, {
      once: !0
    })
  })), t.addEventListener("touchstart", (function (t) {
    const e = this.nextElementSibling,
      n = e.valueAsNumber,
      i = t.targetTouches[0].screenY;

    function r(t) {
      let r = (+e.max - +e.min) / 500,
        o = n + (i - t.targetTouches[0].screenY) * r;
      o < +e.min ? o = +e.min : o > +e.max && (o = +e.max), e.valueAsNumber = Math.floor(o), e.dispatchEvent(new CustomEvent("input"))
    }
    document.addEventListener("touchmove", r), document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", r)
    }, {
      once: !0
    })
  }), {
    passive: !0
  });
  for (const t of document.getElementsByClassName("toggle-password")) r.MDCRipple.attachTo(t).unbounded = !0, t.addEventListener("click", (function () {
    const t = this.nextElementSibling;
    "password" === t.type ? (t.type = "text", this.classList.add("is-clear")) : (t.type = "password", this.classList.remove("is-clear"))
  }));
  for (const t of document.getElementsByClassName("opener")) r.MDCRipple.attachTo(t), t.addEventListener("click", (function () {
    this.parentElement.classList.toggle("active")
  }));
  const j = new o.MDCSnackbar(document.getElementById("copy-snackbar"));

  function U(t, e) {
    t.addEventListener("focus", () => e.classList.add("focused")), t.addEventListener("blur", () => e.classList.remove("focused"))
  }

  function q(t, ...e) {
    for (const n of e) n.addEventListener("focus", () => t.classList.add("active"))
  }
  j.closeOnEscape = !0, O.addEventListener("click", (function () {
    navigator.clipboard.writeText(x).then(() => j.open())
  })), U(d, m), U(p, E), U(f, b), q(document.querySelector("#options .paper"), _, g, ...S.chips.map(t => t.root_)), q(document.querySelector("#adv-options .paper"), y, ...N.chips.map(t => t.root_))
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var i = n(8);
  n.d(e, "util", (function () {
    return i
  }));
  var r = n(5);
  n.d(e, "MDCRipple", (function () {
    return r.a
  }));
  var o = n(7);
  n.d(e, "cssClasses", (function () {
    return o.a
  })), n.d(e, "strings", (function () {
    return o.c
  })), n.d(e, "numbers", (function () {
    return o.b
  }));
  var a = n(4);
  n.d(e, "MDCRippleFoundation", (function () {
    return a.a
  }))
}, function (t, e, n) {
  const i = n(14);

  function r(t, e) {
    const {
      site: n,
      login: r,
      options: o,
      crypto: a
    } = t, {
      counter: s
    } = o || {
      counter: 1
    }, u = n + r + s.toString(16), {
      iterations: c,
      keylen: l,
      digest: d
    } = a || {
      iterations: 1e5,
      keylen: 32,
      digest: "sha256"
    };
    return i(e, u, c, l, d)
  }
  t.exports = {
    calcEntropy: r
  }
}, function (t, e, n) {
  const {
    stringToArrayBuffer: i,
    arrayBufferToHex: r,
    getAlgorithm: o
  } = n(9);
  t.exports = function (t, e, n, a, s) {
    return window.crypto.subtle.importKey("raw", i(t), "PBKDF2", !1, ["deriveKey"]).then(t => {
      const r = {
        name: "PBKDF2",
        salt: i(e),
        iterations: n,
        hash: o(s)
      };
      return window.crypto.subtle.deriveKey(r, t, {
        name: "AES-CTR",
        length: 8 * a
      }, !0, ["encrypt", "decrypt"])
    }).then(t => window.crypto.subtle.exportKey("raw", t).then(t => r(t)))
  }
}, function (t, e, n) {
  const i = n(16),
    r = n(18),
    {
      consumeEntropy: o
    } = n(10);
  t.exports = {
    renderPassword: function (t, e) {
      const n = r.getRules(e),
        a = r.getSetOfCharacters(n),
        s = o("", i(t, 16), a, e.length - n.length),
        u = r.getOneCharPerRule(s.entropy, n);
      return r.insertStringPseudoRandomly(s.value, u.entropy, u.value)
    }
  }
}, function (t, e, n) {
  (function (t) {
    var n, i = function (t) {
      "use strict";
      var e = 1e7,
        n = 9007199254740992,
        r = l(n),
        o = Math.log(n);

      function a(t, e) {
        return void 0 === t ? a[0] : void 0 !== e ? 10 == +e ? q(t) : V(t, e) : q(t)
      }

      function s(t, e) {
        this.value = t, this.sign = e, this.isSmall = !1
      }

      function u(t) {
        this.value = t, this.sign = t < 0, this.isSmall = !0
      }

      function c(t) {
        return -n < t && t < n
      }

      function l(t) {
        return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
      }

      function d(t) {
        p(t);
        var n = t.length;
        if (n < 4 && L(t, r) < 0) switch (n) {
          case 0:
            return 0;
          case 1:
            return t[0];
          case 2:
            return t[0] + t[1] * e;
          default:
            return t[0] + (t[1] + t[2] * e) * e
        }
        return t
      }

      function p(t) {
        for (var e = t.length; 0 === t[--e];);
        t.length = e + 1
      }

      function f(t) {
        for (var e = new Array(t), n = -1; ++n < t;) e[n] = 0;
        return e
      }

      function h(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t)
      }

      function _(t, n) {
        var i, r, o = t.length,
          a = n.length,
          s = new Array(o),
          u = 0,
          c = e;
        for (r = 0; r < a; r++) u = (i = t[r] + n[r] + u) >= c ? 1 : 0, s[r] = i - u * c;
        for (; r < o;) u = (i = t[r] + u) === c ? 1 : 0, s[r++] = i - u * c;
        return u > 0 && s.push(u), s
      }

      function g(t, e) {
        return t.length >= e.length ? _(t, e) : _(e, t)
      }

      function v(t, n) {
        var i, r, o = t.length,
          a = new Array(o),
          s = e;
        for (r = 0; r < o; r++) i = t[r] - s + n, n = Math.floor(i / s), a[r] = i - n * s, n += 1;
        for (; n > 0;) a[r++] = n % s, n = Math.floor(n / s);
        return a
      }

      function y(t, e) {
        var n, i, r = t.length,
          o = e.length,
          a = new Array(r),
          s = 0;
        for (n = 0; n < o; n++)(i = t[n] - s - e[n]) < 0 ? (i += 1e7, s = 1) : s = 0, a[n] = i;
        for (n = o; n < r; n++) {
          if (!((i = t[n] - s) < 0)) {
            a[n++] = i;
            break
          }
          i += 1e7, a[n] = i
        }
        for (; n < r; n++) a[n] = t[n];
        return p(a), a
      }

      function m(t, e, n) {
        var i, r, o = t.length,
          a = new Array(o),
          c = -e;
        for (i = 0; i < o; i++) r = t[i] + c, c = Math.floor(r / 1e7), r %= 1e7, a[i] = r < 0 ? r + 1e7 : r;
        return "number" == typeof (a = d(a)) ? (n && (a = -a), new u(a)) : new s(a, n)
      }

      function b(t, e) {
        var n, i, r, o, a = t.length,
          s = e.length,
          u = f(a + s);
        for (r = 0; r < a; ++r) {
          o = t[r];
          for (var c = 0; c < s; ++c) n = o * e[c] + u[r + c], i = Math.floor(n / 1e7), u[r + c] = n - 1e7 * i, u[r + c + 1] += i
        }
        return p(u), u
      }

      function E(t, n) {
        var i, r, o = t.length,
          a = new Array(o),
          s = e,
          u = 0;
        for (r = 0; r < o; r++) i = t[r] * n + u, u = Math.floor(i / s), a[r] = i - u * s;
        for (; u > 0;) a[r++] = u % s, u = Math.floor(u / s);
        return a
      }

      function C(t, e) {
        for (var n = []; e-- > 0;) n.push(0);
        return n.concat(t)
      }

      function I(t, n, i) {
        return new s(t < e ? E(n, t) : b(n, l(t)), i)
      }

      function A(t) {
        var e, n, i, r, o = t.length,
          a = f(o + o);
        for (i = 0; i < o; i++) {
          r = t[i];
          for (var s = 0; s < o; s++) e = r * t[s] + a[i + s], n = Math.floor(e / 1e7), a[i + s] = e - 1e7 * n, a[i + s + 1] += n
        }
        return p(a), a
      }

      function T(t, e) {
        var n, i, r, o, a = t.length,
          s = f(a);
        for (r = 0, n = a - 1; n >= 0; --n) r = (o = 1e7 * r + t[n]) - (i = h(o / e)) * e, s[n] = 0 | i;
        return [s, 0 | r]
      }

      function O(t, n) {
        var i, r, o = q(n),
          c = t.value,
          _ = o.value;
        if (0 === _) throw new Error("Cannot divide by zero");
        if (t.isSmall) return o.isSmall ? [new u(h(c / _)), new u(c % _)] : [a[0], t];
        if (o.isSmall) {
          if (1 === _) return [t, a[0]];
          if (-1 == _) return [t.negate(), a[0]];
          var g = Math.abs(_);
          if (g < e) {
            r = d((i = T(c, g))[0]);
            var v = i[1];
            return t.sign && (v = -v), "number" == typeof r ? (t.sign !== o.sign && (r = -r), [new u(r), new u(v)]) : [new s(r, t.sign !== o.sign), new u(v)]
          }
          _ = l(g)
        }
        var m = L(c, _);
        if (-1 === m) return [a[0], t];
        if (0 === m) return [a[t.sign === o.sign ? 1 : -1], a[0]];
        r = (i = c.length + _.length <= 200 ? function (t, n) {
          var i, r, o, a, s, u, c, l = t.length,
            p = n.length,
            h = e,
            _ = f(n.length),
            g = n[p - 1],
            v = Math.ceil(h / (2 * g)),
            y = E(t, v),
            m = E(n, v);
          for (y.length <= l && y.push(0), m.push(0), g = m[p - 1], r = l - p; r >= 0; r--) {
            for (i = h - 1, y[r + p] !== g && (i = Math.floor((y[r + p] * h + y[r + p - 1]) / g)), o = 0, a = 0, u = m.length, s = 0; s < u; s++) o += i * m[s], c = Math.floor(o / h), a += y[r + s] - (o - c * h), o = c, a < 0 ? (y[r + s] = a + h, a = -1) : (y[r + s] = a, a = 0);
            for (; 0 !== a;) {
              for (i -= 1, o = 0, s = 0; s < u; s++)(o += y[r + s] - h + m[s]) < 0 ? (y[r + s] = o + h, o = 0) : (y[r + s] = o, o = 1);
              a += o
            }
            _[r] = i
          }
          return y = T(y, v)[0], [d(_), d(y)]
        }(c, _) : function (t, e) {
          for (var n, i, r, o, a, s = t.length, u = e.length, c = [], l = []; s;)
            if (l.unshift(t[--s]), p(l), L(l, e) < 0) c.push(0);
            else {
              r = 1e7 * l[(i = l.length) - 1] + l[i - 2], o = 1e7 * e[u - 1] + e[u - 2], i > u && (r = 1e7 * (r + 1)), n = Math.ceil(r / o);
              do {
                if (L(a = E(e, n), l) <= 0) break;
                n--
              } while (n);
              c.push(n), l = y(l, a)
            } return c.reverse(), [d(c), d(l)]
        }(c, _))[0];
        var b = t.sign !== o.sign,
          C = i[1],
          I = t.sign;
        return "number" == typeof r ? (b && (r = -r), r = new u(r)) : r = new s(r, b), "number" == typeof C ? (I && (C = -C), C = new u(C)) : C = new s(C, I), [r, C]
      }

      function L(t, e) {
        if (t.length !== e.length) return t.length > e.length ? 1 : -1;
        for (var n = t.length - 1; n >= 0; n--)
          if (t[n] !== e[n]) return t[n] > e[n] ? 1 : -1;
        return 0
      }

      function S(t) {
        var e = t.abs();
        return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(25) || void 0))
      }
      s.prototype = Object.create(a.prototype), u.prototype = Object.create(a.prototype), s.prototype.add = function (t) {
        var e = q(t);
        if (this.sign !== e.sign) return this.subtract(e.negate());
        var n = this.value,
          i = e.value;
        return e.isSmall ? new s(v(n, Math.abs(i)), this.sign) : new s(g(n, i), this.sign)
      }, s.prototype.plus = s.prototype.add, u.prototype.add = function (t) {
        var e = q(t),
          n = this.value;
        if (n < 0 !== e.sign) return this.subtract(e.negate());
        var i = e.value;
        if (e.isSmall) {
          if (c(n + i)) return new u(n + i);
          i = l(Math.abs(i))
        }
        return new s(v(i, Math.abs(n)), n < 0)
      }, u.prototype.plus = u.prototype.add, s.prototype.subtract = function (t) {
        var e = q(t);
        if (this.sign !== e.sign) return this.add(e.negate());
        var n = this.value,
          i = e.value;
        return e.isSmall ? m(n, Math.abs(i), this.sign) : function (t, e, n) {
          var i;
          return L(t, e) >= 0 ? i = y(t, e) : (i = y(e, t), n = !n), "number" == typeof (i = d(i)) ? (n && (i = -i), new u(i)) : new s(i, n)
        }(n, i, this.sign)
      }, s.prototype.minus = s.prototype.subtract, u.prototype.subtract = function (t) {
        var e = q(t),
          n = this.value;
        if (n < 0 !== e.sign) return this.add(e.negate());
        var i = e.value;
        return e.isSmall ? new u(n - i) : m(i, Math.abs(n), n >= 0)
      }, u.prototype.minus = u.prototype.subtract, s.prototype.negate = function () {
        return new s(this.value, !this.sign)
      }, u.prototype.negate = function () {
        var t = this.sign,
          e = new u(-this.value);
        return e.sign = !t, e
      }, s.prototype.abs = function () {
        return new s(this.value, !1)
      }, u.prototype.abs = function () {
        return new u(Math.abs(this.value))
      }, s.prototype.multiply = function (t) {
        var n, i, r, o = q(t),
          u = this.value,
          c = o.value,
          d = this.sign !== o.sign;
        if (o.isSmall) {
          if (0 === c) return a[0];
          if (1 === c) return this;
          if (-1 === c) return this.negate();
          if ((n = Math.abs(c)) < e) return new s(E(u, n), d);
          c = l(n)
        }
        return i = u.length, r = c.length, new s(-.012 * i - .012 * r + 15e-6 * i * r > 0 ? function t(e, n) {
          var i = Math.max(e.length, n.length);
          if (i <= 30) return b(e, n);
          i = Math.ceil(i / 2);
          var r = e.slice(i),
            o = e.slice(0, i),
            a = n.slice(i),
            s = n.slice(0, i),
            u = t(o, s),
            c = t(r, a),
            l = t(g(o, r), g(s, a)),
            d = g(g(u, C(y(y(l, u), c), i)), C(c, 2 * i));
          return p(d), d
        }(u, c) : b(u, c), d)
      }, s.prototype.times = s.prototype.multiply, u.prototype._multiplyBySmall = function (t) {
        return c(t.value * this.value) ? new u(t.value * this.value) : I(Math.abs(t.value), l(Math.abs(this.value)), this.sign !== t.sign)
      }, s.prototype._multiplyBySmall = function (t) {
        return 0 === t.value ? a[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : I(Math.abs(t.value), this.value, this.sign !== t.sign)
      }, u.prototype.multiply = function (t) {
        return q(t)._multiplyBySmall(this)
      }, u.prototype.times = u.prototype.multiply, s.prototype.square = function () {
        return new s(A(this.value), !1)
      }, u.prototype.square = function () {
        var t = this.value * this.value;
        return c(t) ? new u(t) : new s(A(l(Math.abs(this.value))), !1)
      }, s.prototype.divmod = function (t) {
        var e = O(this, t);
        return {
          quotient: e[0],
          remainder: e[1]
        }
      }, u.prototype.divmod = s.prototype.divmod, s.prototype.divide = function (t) {
        return O(this, t)[0]
      }, u.prototype.over = u.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function (t) {
        return O(this, t)[1]
      }, u.prototype.remainder = u.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function (t) {
        var e, n, i, r = q(t),
          o = this.value,
          s = r.value;
        if (0 === s) return a[1];
        if (0 === o) return a[0];
        if (1 === o) return a[1];
        if (-1 === o) return r.isEven() ? a[1] : a[-1];
        if (r.sign) return a[0];
        if (!r.isSmall) throw new Error("The exponent " + r.toString() + " is too large.");
        if (this.isSmall && c(e = Math.pow(o, s))) return new u(h(e));
        for (n = this, i = a[1]; !0 & s && (i = i.times(n), --s), 0 !== s;) s /= 2, n = n.square();
        return i
      }, u.prototype.pow = s.prototype.pow, s.prototype.modPow = function (t, e) {
        if (t = q(t), (e = q(e)).isZero()) throw new Error("Cannot take modPow with modulus 0");
        for (var n = a[1], i = this.mod(e); t.isPositive();) {
          if (i.isZero()) return a[0];
          t.isOdd() && (n = n.multiply(i).mod(e)), t = t.divide(2), i = i.square().mod(e)
        }
        return n
      }, u.prototype.modPow = s.prototype.modPow, s.prototype.compareAbs = function (t) {
        var e = q(t),
          n = this.value,
          i = e.value;
        return e.isSmall ? 1 : L(n, i)
      }, u.prototype.compareAbs = function (t) {
        var e = q(t),
          n = Math.abs(this.value),
          i = e.value;
        return e.isSmall ? n === (i = Math.abs(i)) ? 0 : n > i ? 1 : -1 : -1
      }, s.prototype.compare = function (t) {
        if (t === 1 / 0) return -1;
        if (t === -1 / 0) return 1;
        var e = q(t),
          n = this.value,
          i = e.value;
        return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : L(n, i) * (this.sign ? -1 : 1)
      }, s.prototype.compareTo = s.prototype.compare, u.prototype.compare = function (t) {
        if (t === 1 / 0) return -1;
        if (t === -1 / 0) return 1;
        var e = q(t),
          n = this.value,
          i = e.value;
        return e.isSmall ? n == i ? 0 : n > i ? 1 : -1 : n < 0 !== e.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
      }, u.prototype.compareTo = u.prototype.compare, s.prototype.equals = function (t) {
        return 0 === this.compare(t)
      }, u.prototype.eq = u.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function (t) {
        return 0 !== this.compare(t)
      }, u.prototype.neq = u.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function (t) {
        return this.compare(t) > 0
      }, u.prototype.gt = u.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function (t) {
        return this.compare(t) < 0
      }, u.prototype.lt = u.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function (t) {
        return this.compare(t) >= 0
      }, u.prototype.geq = u.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function (t) {
        return this.compare(t) <= 0
      }, u.prototype.leq = u.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals, s.prototype.isEven = function () {
        return 0 == (1 & this.value[0])
      }, u.prototype.isEven = function () {
        return 0 == (1 & this.value)
      }, s.prototype.isOdd = function () {
        return 1 == (1 & this.value[0])
      }, u.prototype.isOdd = function () {
        return 1 == (1 & this.value)
      }, s.prototype.isPositive = function () {
        return !this.sign
      }, u.prototype.isPositive = function () {
        return this.value > 0
      }, s.prototype.isNegative = function () {
        return this.sign
      }, u.prototype.isNegative = function () {
        return this.value < 0
      }, s.prototype.isUnit = function () {
        return !1
      }, u.prototype.isUnit = function () {
        return 1 === Math.abs(this.value)
      }, s.prototype.isZero = function () {
        return !1
      }, u.prototype.isZero = function () {
        return 0 === this.value
      }, s.prototype.isDivisibleBy = function (t) {
        var e = q(t),
          n = e.value;
        return 0 !== n && (1 === n || (2 === n ? this.isEven() : this.mod(e).equals(a[0])))
      }, u.prototype.isDivisibleBy = s.prototype.isDivisibleBy, s.prototype.isPrime = function () {
        var t = S(this);
        if (void 0 !== t) return t;
        for (var e, n, r, o, s = this.abs(), u = s.prev(), c = [2, 3, 5, 7, 11, 13, 17, 19], l = u; l.isEven();) l = l.divide(2);
        for (r = 0; r < c.length; r++)
          if (!(o = i(c[r]).modPow(l, s)).equals(a[1]) && !o.equals(u)) {
            for (n = !0, e = l; n && e.lesser(u); e = e.multiply(2))(o = o.square().mod(s)).equals(u) && (n = !1);
            if (n) return !1
          } return !0
      }, u.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function (t) {
        var e = S(this);
        if (void 0 !== e) return e;
        for (var n = this.abs(), r = void 0 === t ? 5 : t, o = 0; o < r; o++) {
          if (!i.randBetween(2, n.minus(2)).modPow(n.prev(), n).isUnit()) return !1
        }
        return !0
      }, u.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function (t) {
        for (var e, n, r, o = i.zero, a = i.one, s = q(t), u = this.abs(); !u.equals(i.zero);) e = s.divide(u), n = o, r = s, o = a, s = u, a = n.subtract(e.multiply(a)), u = r.subtract(e.multiply(u));
        if (!s.equals(1)) throw new Error(this.toString() + " and " + t.toString() + " are not co-prime");
        return -1 === o.compare(0) && (o = o.add(t)), this.isNegative() ? o.negate() : o
      }, u.prototype.modInv = s.prototype.modInv, s.prototype.next = function () {
        var t = this.value;
        return this.sign ? m(t, 1, this.sign) : new s(v(t, 1), this.sign)
      }, u.prototype.next = function () {
        var t = this.value;
        return t + 1 < n ? new u(t + 1) : new s(r, !1)
      }, s.prototype.prev = function () {
        var t = this.value;
        return this.sign ? new s(v(t, 1), !0) : m(t, 1, this.sign)
      }, u.prototype.prev = function () {
        var t = this.value;
        return t - 1 > -n ? new u(t - 1) : new s(r, !0)
      };
      for (var N = [1]; N[N.length - 1] <= e;) N.push(2 * N[N.length - 1]);
      var w = N.length,
        R = N[w - 1];

      function D(t) {
        return ("number" == typeof t || "string" == typeof t) && +Math.abs(t) <= e || t instanceof s && t.value.length <= 1
      }

      function P(t, e, n) {
        e = q(e);
        for (var r = t.isNegative(), o = e.isNegative(), a = r ? t.not() : t, s = o ? e.not() : e, u = [], c = [], l = !1, d = !1; !l || !d;) a.isZero() ? (l = !0, u.push(r ? 1 : 0)) : r ? u.push(a.isEven() ? 1 : 0) : u.push(a.isEven() ? 0 : 1), s.isZero() ? (d = !0, c.push(o ? 1 : 0)) : o ? c.push(s.isEven() ? 1 : 0) : c.push(s.isEven() ? 0 : 1), a = a.over(2), s = s.over(2);
        for (var p = [], f = 0; f < u.length; f++) p.push(n(u[f], c[f]));
        for (var h = i(p.pop()).negate().times(i(2).pow(p.length)); p.length;) h = h.add(i(p.pop()).times(i(2).pow(p.length)));
        return h
      }
      s.prototype.shiftLeft = function (t) {
        if (!D(t)) throw new Error(String(t) + " is too large for shifting.");
        if ((t = +t) < 0) return this.shiftRight(-t);
        for (var e = this; t >= w;) e = e.multiply(R), t -= w - 1;
        return e.multiply(N[t])
      }, u.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function (t) {
        var e;
        if (!D(t)) throw new Error(String(t) + " is too large for shifting.");
        if ((t = +t) < 0) return this.shiftLeft(-t);
        for (var n = this; t >= w;) {
          if (n.isZero()) return n;
          n = (e = O(n, R))[1].isNegative() ? e[0].prev() : e[0], t -= w - 1
        }
        return (e = O(n, N[t]))[1].isNegative() ? e[0].prev() : e[0]
      }, u.prototype.shiftRight = s.prototype.shiftRight, s.prototype.not = function () {
        return this.negate().prev()
      }, u.prototype.not = s.prototype.not, s.prototype.and = function (t) {
        return P(this, t, (function (t, e) {
          return t & e
        }))
      }, u.prototype.and = s.prototype.and, s.prototype.or = function (t) {
        return P(this, t, (function (t, e) {
          return t | e
        }))
      }, u.prototype.or = s.prototype.or, s.prototype.xor = function (t) {
        return P(this, t, (function (t, e) {
          return t ^ e
        }))
      }, u.prototype.xor = s.prototype.xor;

      function M(t) {
        var n = t.value,
          i = "number" == typeof n ? n | 1 << 30 : n[0] + n[1] * e | 1073758208;
        return i & -i
      }

      function x(t, e) {
        return t = q(t), e = q(e), t.greater(e) ? t : e
      }

      function H(t, e) {
        return t = q(t), e = q(e), t.lesser(e) ? t : e
      }

      function F(t, e) {
        if (t = q(t).abs(), e = q(e).abs(), t.equals(e)) return t;
        if (t.isZero()) return e;
        if (e.isZero()) return t;
        for (var n, i, r = a[1]; t.isEven() && e.isEven();) n = Math.min(M(t), M(e)), t = t.divide(n), e = e.divide(n), r = r.multiply(n);
        for (; t.isEven();) t = t.divide(M(t));
        do {
          for (; e.isEven();) e = e.divide(M(e));
          t.greater(e) && (i = e, e = t, t = i), e = e.subtract(t)
        } while (!e.isZero());
        return r.isUnit() ? t : t.multiply(r)
      }
      var V = function (t, e) {
        var n = t.length;
        if (2 <= e && e <= 36 && n <= o / Math.log(e)) return new u(parseInt(t, e));
        e = q(e);
        var i, r = [],
          a = "-" === t[0];
        for (i = a ? 1 : 0; i < t.length; i++) {
          var s = t[i].toLowerCase(),
            c = s.charCodeAt(0);
          if (48 <= c && c <= 57) r.push(q(s));
          else if (97 <= c && c <= 122) r.push(q(s.charCodeAt(0) - 87));
          else {
            if ("<" !== s) throw new Error(s + " is not a valid character");
            var l = i;
            do {
              i++
            } while (">" !== t[i]);
            r.push(q(t.slice(l + 1, i)))
          }
        }
        return k(r, e, a)
      };

      function k(t, e, n) {
        var i, r = a[0],
          o = a[1];
        for (i = t.length - 1; i >= 0; i--) r = r.add(t[i].times(o)), o = o.times(e);
        return n ? r.negate() : r
      }

      function B(t) {
        var e = t.value;
        return "number" == typeof e && (e = [e]), 1 === e.length && e[0] <= 35 ? "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e[0]) : "<" + e + ">"
      }

      function j(t, e) {
        if ((e = i(e)).isZero()) {
          if (t.isZero()) return "0";
          throw new Error("Cannot convert nonzero numbers to base 0.")
        }
        if (e.equals(-1)) return t.isZero() ? "0" : t.isNegative() ? new Array(1 - t).join("10") : "1" + new Array(+t).join("01");
        var n = "";
        if (t.isNegative() && e.isPositive() && (n = "-", t = t.abs()), e.equals(1)) return t.isZero() ? "0" : n + new Array(+t + 1).join(1);
        for (var r, o = [], a = t; a.isNegative() || a.compareAbs(e) >= 0;) {
          r = a.divmod(e), a = r.quotient;
          var s = r.remainder;
          s.isNegative() && (s = e.minus(s).abs(), a = a.next()), o.push(B(s))
        }
        return o.push(B(a)), n + o.reverse().join("")
      }

      function U(t) {
        if (c(+t)) {
          var e = +t;
          if (e === h(e)) return new u(e);
          throw "Invalid integer: " + t
        }
        var n = "-" === t[0];
        n && (t = t.slice(1));
        var i = t.split(/e/i);
        if (i.length > 2) throw new Error("Invalid integer: " + i.join("e"));
        if (2 === i.length) {
          var r = i[1];
          if ("+" === r[0] && (r = r.slice(1)), (r = +r) !== h(r) || !c(r)) throw new Error("Invalid integer: " + r + " is not a valid exponent.");
          var o = i[0],
            a = o.indexOf(".");
          if (a >= 0 && (r -= o.length - a - 1, o = o.slice(0, a) + o.slice(a + 1)), r < 0) throw new Error("Cannot include negative exponent part for integers");
          t = o += new Array(r + 1).join("0")
        }
        if (!/^([0-9][0-9]*)$/.test(t)) throw new Error("Invalid integer: " + t);
        for (var l = [], d = t.length, f = d - 7; d > 0;) l.push(+t.slice(f, d)), (f -= 7) < 0 && (f = 0), d -= 7;
        return p(l), new s(l, n)
      }

      function q(t) {
        return "number" == typeof t ? function (t) {
          if (c(t)) {
            if (t !== h(t)) throw new Error(t + " is not an integer.");
            return new u(t)
          }
          return U(t.toString())
        }(t) : "string" == typeof t ? U(t) : t
      }
      s.prototype.toString = function (t) {
        if (void 0 === t && (t = 10), 10 !== t) return j(this, t);
        for (var e, n = this.value, i = n.length, r = String(n[--i]); --i >= 0;) e = String(n[i]), r += "0000000".slice(e.length) + e;
        return (this.sign ? "-" : "") + r
      }, u.prototype.toString = function (t) {
        return void 0 === t && (t = 10), 10 != t ? j(this, t) : String(this.value)
      }, s.prototype.valueOf = function () {
        return +this.toString()
      }, s.prototype.toJSNumber = s.prototype.valueOf, u.prototype.valueOf = function () {
        return this.value
      }, u.prototype.toJSNumber = u.prototype.valueOf;
      for (var G = 0; G < 1e3; G++) a[G] = new u(G), G > 0 && (a[-G] = new u(-G));
      return a.one = a[1], a.zero = a[0], a.minusOne = a[-1], a.max = x, a.min = H, a.gcd = F, a.lcm = function (t, e) {
        return t = q(t).abs(), e = q(e).abs(), t.divide(F(t, e)).multiply(e)
      }, a.isInstance = function (t) {
        return t instanceof s || t instanceof u
      }, a.randBetween = function (t, n) {
        var i = H(t = q(t), n = q(n)),
          r = x(t, n).subtract(i);
        if (r.isSmall) return i.add(Math.round(Math.random() * r));
        for (var o = [], a = !0, c = r.value.length - 1; c >= 0; c--) {
          var l = a ? r.value[c] : e,
            p = h(Math.random() * l);
          o.unshift(p), p < l && (a = !1)
        }
        return o = d(o), i.add("number" == typeof o ? new u(o) : new s(o, !1))
      }, a.fromArray = function (t, e, n) {
        return k(t.map(q), q(e || 10), n)
      }, a
    }();
    t.hasOwnProperty("exports") && (t.exports = i), void 0 === (n = function () {
      return i
    }.apply(e, [])) || (t.exports = n)
  }).call(this, n(17)(t))
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function (t, e, n) {
  const {
    consumeEntropy: i
  } = n(10), r = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    digits: "0123456789",
    symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  };
  t.exports = {
    getSetOfCharacters: function (t) {
      if (void 0 === t) return r.lowercase + r.uppercase + r.digits + r.symbols;
      let e = "";
      return t.forEach(t => {
        e += r[t]
      }), e
    },
    getOneCharPerRule: function (t, e) {
      let n = "",
        o = t;
      return e.forEach(t => {
        const e = i("", o, r[t], 1);
        n += e.value, o = e.entropy
      }), {
        value: n,
        entropy: o
      }
    },
    insertStringPseudoRandomly: function (t, e, n) {
      let i = e,
        r = t;
      for (let t = 0; t < n.length; t += 1) {
        const e = i.divmod(r.length);
        r = r.slice(0, e.remainder) + n[t] + r.slice(e.remainder), i = e.quotient
      }
      return r
    },
    getRules: function (t) {
      return ["lowercase", "uppercase", "digits", "symbols"].filter(e => t[e])
    },
    characterSubsets: r
  }
}, function (t, e, n) {
  const i = n(20),
    r = n(21);
  t.exports = {
    createFingerprint: i,
    createHmac: r
  }
}, function (t, e) {
  function n(t) {
    const e = ["#000000", "#074750", "#009191", "#FF6CB6", "#FFB5DA", "#490092", "#006CDB", "#B66DFF", "#6DB5FE", "#B5DAFE", "#920000", "#924900", "#DB6D00", "#24FE23"];
    return e[parseInt(t, 16) % e.length]
  }

  function i(t) {
    const e = ["fa-hashtag", "fa-heart", "fa-hotel", "fa-university", "fa-plug", "fa-ambulance", "fa-bus", "fa-car", "fa-plane", "fa-rocket", "fa-ship", "fa-subway", "fa-truck", "fa-jpy", "fa-eur", "fa-btc", "fa-usd", "fa-gbp", "fa-archive", "fa-area-chart", "fa-bed", "fa-beer", "fa-bell", "fa-binoculars", "fa-birthday-cake", "fa-bomb", "fa-briefcase", "fa-bug", "fa-camera", "fa-cart-plus", "fa-certificate", "fa-coffee", "fa-cloud", "fa-coffee", "fa-comment", "fa-cube", "fa-cutlery", "fa-database", "fa-diamond", "fa-exclamation-circle", "fa-eye", "fa-flag", "fa-flask", "fa-futbol-o", "fa-gamepad", "fa-graduation-cap"];
    return e[parseInt(t, 16) % e.length]
  }
  t.exports = function (t) {
    const e = [],
      r = t.substring(0, 6);
    e.push({
      color: n(r),
      icon: i(r)
    });
    const o = t.substring(6, 12);
    e.push({
      color: n(o),
      icon: i(o)
    });
    const a = t.substring(12, 18);
    return e.push({
      color: n(a),
      icon: i(a)
    }), e
  }
}, function (t, e, n) {
  const {
    stringToArrayBuffer: i,
    arrayBufferToHex: r,
    getAlgorithm: o
  } = n(9);
  t.exports = function (t, e, n) {
    return window.crypto.subtle.importKey("raw", i(e), {
      name: "HMAC",
      hash: {
        name: o(t)
      }
    }, !0, ["sign", "verify"]).then(t => window.crypto.subtle.sign({
      name: "HMAC"
    }, t, i(n || "")).then(t => r(t)))
  }
}, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "MDCTextField", (function () {
    return U
  })), n.d(e, "cssClasses", (function () {
    return O
  })), n.d(e, "strings", (function () {
    return T
  })), n.d(e, "numbers", (function () {
    return L
  })), n.d(e, "VALIDATION_ATTR_WHITELIST", (function () {
    return S
  })), n.d(e, "ALWAYS_FLOAT_TYPES", (function () {
    return N
  })), n.d(e, "MDCTextFieldFoundation", (function () {
    return D
  })), n.d(e, "MDCTextFieldCharacterCounter", (function () {
    return A
  })), n.d(e, "MDCTextFieldCharacterCounterFoundation", (function () {
    return I
  })), n.d(e, "characterCountCssClasses", (function () {
    return E
  })), n.d(e, "characterCountStrings", (function () {
    return C
  })), n.d(e, "MDCTextFieldHelperText", (function () {
    return H
  })), n.d(e, "MDCTextFieldHelperTextFoundation", (function () {
    return x
  })), n.d(e, "helperTextCssClasses", (function () {
    return P
  })), n.d(e, "helperTextStrings", (function () {
    return M
  })), n.d(e, "MDCTextFieldIcon", (function () {
    return j
  })), n.d(e, "MDCTextFieldIconFoundation", (function () {
    return B
  })), n.d(e, "iconCssClasses", (function () {
    return V
  })), n.d(e, "iconStrings", (function () {
    return F
  }));
  var i = n(0),
    r = n(2),
    o = n(3),
    a = n(6),
    s = n(1),
    u = {
      LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
      LABEL_SHAKE: "mdc-floating-label--shake",
      ROOT: "mdc-floating-label"
    },
    c = function (t) {
      function e(n) {
        var r = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
        return r.shakeAnimationEndHandler_ = function () {
          return r.handleShakeAnimationEnd_()
        }, r
      }
      return i.b(e, t), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return u
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            getWidth: function () {
              return 0
            },
            registerInteractionHandler: function () {},
            deregisterInteractionHandler: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.init = function () {
        this.adapter_.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_)
      }, e.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_)
      }, e.prototype.getWidth = function () {
        return this.adapter_.getWidth()
      }, e.prototype.shake = function (t) {
        var n = e.cssClasses.LABEL_SHAKE;
        t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
      }, e.prototype.float = function (t) {
        var n = e.cssClasses,
          i = n.LABEL_FLOAT_ABOVE,
          r = n.LABEL_SHAKE;
        t ? this.adapter_.addClass(i) : (this.adapter_.removeClass(i), this.adapter_.removeClass(r))
      }, e.prototype.handleShakeAnimationEnd_ = function () {
        var t = e.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(t)
      }, e
    }(s.a),
    l = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, e.prototype.shake = function (t) {
        this.foundation_.shake(t)
      }, e.prototype.float = function (t) {
        this.foundation_.float(t)
      }, e.prototype.getWidth = function () {
        return this.foundation_.getWidth()
      }, e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new c({
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          },
          getWidth: function () {
            return t.root_.scrollWidth
          },
          registerInteractionHandler: function (e, n) {
            return t.listen(e, n)
          },
          deregisterInteractionHandler: function (e, n) {
            return t.unlisten(e, n)
          }
        })
      }, e
    }(r.a),
    d = {
      LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
      LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
    },
    p = function (t) {
      function e(n) {
        var r = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
        return r.transitionEndHandler_ = function (t) {
          return r.handleTransitionEnd(t)
        }, r
      }
      return i.b(e, t), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return d
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1
            },
            setStyle: function () {},
            registerEventHandler: function () {},
            deregisterEventHandler: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.init = function () {
        this.adapter_.registerEventHandler("transitionend", this.transitionEndHandler_)
      }, e.prototype.destroy = function () {
        this.adapter_.deregisterEventHandler("transitionend", this.transitionEndHandler_)
      }, e.prototype.activate = function () {
        this.adapter_.removeClass(d.LINE_RIPPLE_DEACTIVATING), this.adapter_.addClass(d.LINE_RIPPLE_ACTIVE)
      }, e.prototype.setRippleCenter = function (t) {
        this.adapter_.setStyle("transform-origin", t + "px center")
      }, e.prototype.deactivate = function () {
        this.adapter_.addClass(d.LINE_RIPPLE_DEACTIVATING)
      }, e.prototype.handleTransitionEnd = function (t) {
        var e = this.adapter_.hasClass(d.LINE_RIPPLE_DEACTIVATING);
        "opacity" === t.propertyName && e && (this.adapter_.removeClass(d.LINE_RIPPLE_ACTIVE), this.adapter_.removeClass(d.LINE_RIPPLE_DEACTIVATING))
      }, e
    }(s.a),
    f = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, e.prototype.activate = function () {
        this.foundation_.activate()
      }, e.prototype.deactivate = function () {
        this.foundation_.deactivate()
      }, e.prototype.setRippleCenter = function (t) {
        this.foundation_.setRippleCenter(t)
      }, e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new p({
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          },
          hasClass: function (e) {
            return t.root_.classList.contains(e)
          },
          setStyle: function (e, n) {
            return t.root_.style.setProperty(e, n)
          },
          registerEventHandler: function (e, n) {
            return t.listen(e, n)
          },
          deregisterEventHandler: function (e, n) {
            return t.unlisten(e, n)
          }
        })
      }, e
    }(r.a),
    h = {
      NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
    },
    _ = {
      NOTCH_ELEMENT_PADDING: 8
    },
    g = {
      NO_LABEL: "mdc-notched-outline--no-label",
      OUTLINE_NOTCHED: "mdc-notched-outline--notched",
      OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
    },
    v = function (t) {
      function e(n) {
        return t.call(this, i.a({}, e.defaultAdapter, n)) || this
      }
      return i.b(e, t), Object.defineProperty(e, "strings", {
        get: function () {
          return h
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return g
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "numbers", {
        get: function () {
          return _
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            setNotchWidthProperty: function () {},
            removeNotchWidthProperty: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.notch = function (t) {
        var n = e.cssClasses.OUTLINE_NOTCHED;
        t > 0 && (t += _.NOTCH_ELEMENT_PADDING), this.adapter_.setNotchWidthProperty(t), this.adapter_.addClass(n)
      }, e.prototype.closeNotch = function () {
        var t = e.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(t), this.adapter_.removeNotchWidthProperty()
      }, e
    }(s.a),
    y = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, e.prototype.initialSyncWithDOM = function () {
        this.notchElement_ = this.root_.querySelector(h.NOTCH_ELEMENT_SELECTOR);
        var t = this.root_.querySelector("." + c.cssClasses.ROOT);
        t ? (t.style.transitionDuration = "0s", this.root_.classList.add(g.OUTLINE_UPGRADED), requestAnimationFrame((function () {
          t.style.transitionDuration = ""
        }))) : this.root_.classList.add(g.NO_LABEL)
      }, e.prototype.notch = function (t) {
        this.foundation_.notch(t)
      }, e.prototype.closeNotch = function () {
        this.foundation_.closeNotch()
      }, e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new v({
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          },
          setNotchWidthProperty: function (e) {
            return t.notchElement_.style.setProperty("width", e + "px")
          },
          removeNotchWidthProperty: function () {
            return t.notchElement_.style.removeProperty("width")
          }
        })
      }, e
    }(r.a),
    m = n(5),
    b = n(4),
    E = {
      ROOT: "mdc-text-field-character-counter"
    },
    C = {
      ROOT_SELECTOR: "." + E.ROOT
    },
    I = function (t) {
      function e(n) {
        return t.call(this, i.a({}, e.defaultAdapter, n)) || this
      }
      return i.b(e, t), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return E
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "strings", {
        get: function () {
          return C
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            setContent: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.setCounterValue = function (t, e) {
        t = Math.min(t, e), this.adapter_.setContent(t + " / " + e)
      }, e
    }(s.a),
    A = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, Object.defineProperty(e.prototype, "foundation", {
        get: function () {
          return this.foundation_
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new I({
          setContent: function (e) {
            t.root_.textContent = e
          }
        })
      }, e
    }(r.a),
    T = {
      ARIA_CONTROLS: "aria-controls",
      ICON_SELECTOR: ".mdc-text-field__icon",
      INPUT_SELECTOR: ".mdc-text-field__input",
      LABEL_SELECTOR: ".mdc-floating-label",
      LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
      OUTLINE_SELECTOR: ".mdc-notched-outline"
    },
    O = {
      DENSE: "mdc-text-field--dense",
      DISABLED: "mdc-text-field--disabled",
      FOCUSED: "mdc-text-field--focused",
      FULLWIDTH: "mdc-text-field--fullwidth",
      HELPER_LINE: "mdc-text-field-helper-line",
      INVALID: "mdc-text-field--invalid",
      NO_LABEL: "mdc-text-field--no-label",
      OUTLINED: "mdc-text-field--outlined",
      ROOT: "mdc-text-field",
      TEXTAREA: "mdc-text-field--textarea",
      WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
      WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"
    },
    L = {
      DENSE_LABEL_SCALE: .923,
      LABEL_SCALE: .75
    },
    S = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
    N = ["color", "date", "datetime-local", "month", "range", "time", "week"],
    w = ["mousedown", "touchstart"],
    R = ["click", "keydown"],
    D = function (t) {
      function e(n, r) {
        void 0 === r && (r = {});
        var o = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
        return o.isFocused_ = !1, o.receivedUserInput_ = !1, o.isValid_ = !0, o.useNativeValidation_ = !0, o.helperText_ = r.helperText, o.characterCounter_ = r.characterCounter, o.leadingIcon_ = r.leadingIcon, o.trailingIcon_ = r.trailingIcon, o.inputFocusHandler_ = function () {
          return o.activateFocus()
        }, o.inputBlurHandler_ = function () {
          return o.deactivateFocus()
        }, o.inputInputHandler_ = function () {
          return o.handleInput()
        }, o.setPointerXOffset_ = function (t) {
          return o.setTransformOrigin(t)
        }, o.textFieldInteractionHandler_ = function () {
          return o.handleTextFieldInteraction()
        }, o.validationAttributeChangeHandler_ = function (t) {
          return o.handleValidationAttributeChange(t)
        }, o
      }
      return i.b(e, t), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return O
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "strings", {
        get: function () {
          return T
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "numbers", {
        get: function () {
          return L
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "shouldAlwaysFloat_", {
        get: function () {
          var t = this.getNativeInput_().type;
          return N.indexOf(t) >= 0
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "shouldFloat", {
        get: function () {
          return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_()
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "shouldShake", {
        get: function () {
          return !this.isFocused_ && !this.isValid() && Boolean(this.getValue())
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !0
            },
            registerTextFieldInteractionHandler: function () {},
            deregisterTextFieldInteractionHandler: function () {},
            registerInputInteractionHandler: function () {},
            deregisterInputInteractionHandler: function () {},
            registerValidationAttributeChangeHandler: function () {
              return new MutationObserver((function () {}))
            },
            deregisterValidationAttributeChangeHandler: function () {},
            getNativeInput: function () {
              return null
            },
            isFocused: function () {
              return !1
            },
            activateLineRipple: function () {},
            deactivateLineRipple: function () {},
            setLineRippleTransformOrigin: function () {},
            shakeLabel: function () {},
            floatLabel: function () {},
            hasLabel: function () {
              return !1
            },
            getLabelWidth: function () {
              return 0
            },
            hasOutline: function () {
              return !1
            },
            notchOutline: function () {},
            closeOutline: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.init = function () {
        var t = this;
        this.adapter_.isFocused() ? this.inputFocusHandler_() : this.adapter_.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter_.floatLabel(!0)), this.adapter_.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter_.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter_.registerInputInteractionHandler("input", this.inputInputHandler_), w.forEach((function (e) {
          t.adapter_.registerInputInteractionHandler(e, t.setPointerXOffset_)
        })), R.forEach((function (e) {
          t.adapter_.registerTextFieldInteractionHandler(e, t.textFieldInteractionHandler_)
        })), this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length)
      }, e.prototype.destroy = function () {
        var t = this;
        this.adapter_.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter_.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter_.deregisterInputInteractionHandler("input", this.inputInputHandler_), w.forEach((function (e) {
          t.adapter_.deregisterInputInteractionHandler(e, t.setPointerXOffset_)
        })), R.forEach((function (e) {
          t.adapter_.deregisterTextFieldInteractionHandler(e, t.textFieldInteractionHandler_)
        })), this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)
      }, e.prototype.handleTextFieldInteraction = function () {
        var t = this.adapter_.getNativeInput();
        t && t.disabled || (this.receivedUserInput_ = !0)
      }, e.prototype.handleValidationAttributeChange = function (t) {
        var e = this;
        t.some((function (t) {
          return S.indexOf(t) > -1 && (e.styleValidity_(!0), !0)
        })), t.indexOf("maxlength") > -1 && this.setCharacterCounter_(this.getValue().length)
      }, e.prototype.notchOutline = function (t) {
        if (this.adapter_.hasOutline())
          if (t) {
            var e = this.adapter_.hasClass(O.DENSE) ? L.DENSE_LABEL_SCALE : L.LABEL_SCALE,
              n = this.adapter_.getLabelWidth() * e;
            this.adapter_.notchOutline(n)
          } else this.adapter_.closeOutline()
      }, e.prototype.activateFocus = function () {
        this.isFocused_ = !0, this.styleFocused_(this.isFocused_), this.adapter_.activateLineRipple(), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake)), this.helperText_ && this.helperText_.showToScreenReader()
      }, e.prototype.setTransformOrigin = function (t) {
        var e = t.touches,
          n = e ? e[0] : t,
          i = n.target.getBoundingClientRect(),
          r = n.clientX - i.left;
        this.adapter_.setLineRippleTransformOrigin(r)
      }, e.prototype.handleInput = function () {
        this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length)
      }, e.prototype.autoCompleteFocus = function () {
        this.receivedUserInput_ || this.activateFocus()
      }, e.prototype.deactivateFocus = function () {
        this.isFocused_ = !1, this.adapter_.deactivateLineRipple();
        var t = this.isValid();
        this.styleValidity_(t), this.styleFocused_(this.isFocused_), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = !1)
      }, e.prototype.getValue = function () {
        return this.getNativeInput_().value
      }, e.prototype.setValue = function (t) {
        this.getValue() !== t && (this.getNativeInput_().value = t), this.setCharacterCounter_(t.length);
        var e = this.isValid();
        this.styleValidity_(e), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake))
      }, e.prototype.isValid = function () {
        return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_
      }, e.prototype.setValid = function (t) {
        this.isValid_ = t, this.styleValidity_(t);
        var e = !t && !this.isFocused_;
        this.adapter_.hasLabel() && this.adapter_.shakeLabel(e)
      }, e.prototype.setUseNativeValidation = function (t) {
        this.useNativeValidation_ = t
      }, e.prototype.isDisabled = function () {
        return this.getNativeInput_().disabled
      }, e.prototype.setDisabled = function (t) {
        this.getNativeInput_().disabled = t, this.styleDisabled_(t)
      }, e.prototype.setHelperTextContent = function (t) {
        this.helperText_ && this.helperText_.setContent(t)
      }, e.prototype.setLeadingIconAriaLabel = function (t) {
        this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t)
      }, e.prototype.setLeadingIconContent = function (t) {
        this.leadingIcon_ && this.leadingIcon_.setContent(t)
      }, e.prototype.setTrailingIconAriaLabel = function (t) {
        this.trailingIcon_ && this.trailingIcon_.setAriaLabel(t)
      }, e.prototype.setTrailingIconContent = function (t) {
        this.trailingIcon_ && this.trailingIcon_.setContent(t)
      }, e.prototype.setCharacterCounter_ = function (t) {
        if (this.characterCounter_) {
          var e = this.getNativeInput_().maxLength;
          if (-1 === e) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
          this.characterCounter_.setCounterValue(t, e)
        }
      }, e.prototype.isBadInput_ = function () {
        return this.getNativeInput_().validity.badInput || !1
      }, e.prototype.isNativeInputValid_ = function () {
        return this.getNativeInput_().validity.valid
      }, e.prototype.styleValidity_ = function (t) {
        var n = e.cssClasses.INVALID;
        t ? this.adapter_.removeClass(n) : this.adapter_.addClass(n), this.helperText_ && this.helperText_.setValidity(t)
      }, e.prototype.styleFocused_ = function (t) {
        var n = e.cssClasses.FOCUSED;
        t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
      }, e.prototype.styleDisabled_ = function (t) {
        var n = e.cssClasses,
          i = n.DISABLED,
          r = n.INVALID;
        t ? (this.adapter_.addClass(i), this.adapter_.removeClass(r)) : this.adapter_.removeClass(i), this.leadingIcon_ && this.leadingIcon_.setDisabled(t), this.trailingIcon_ && this.trailingIcon_.setDisabled(t)
      }, e.prototype.getNativeInput_ = function () {
        return (this.adapter_ ? this.adapter_.getNativeInput() : null) || {
          disabled: !1,
          maxLength: -1,
          type: "input",
          validity: {
            badInput: !1,
            valid: !0
          },
          value: ""
        }
      }, e
    }(s.a),
    P = {
      HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
      HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg",
      ROOT: "mdc-text-field-helper-text"
    },
    M = {
      ARIA_HIDDEN: "aria-hidden",
      ROLE: "role",
      ROOT_SELECTOR: "." + P.ROOT
    },
    x = function (t) {
      function e(n) {
        return t.call(this, i.a({}, e.defaultAdapter, n)) || this
      }
      return i.b(e, t), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return P
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "strings", {
        get: function () {
          return M
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1
            },
            setAttr: function () {},
            removeAttr: function () {},
            setContent: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.setContent = function (t) {
        this.adapter_.setContent(t)
      }, e.prototype.setPersistent = function (t) {
        t ? this.adapter_.addClass(P.HELPER_TEXT_PERSISTENT) : this.adapter_.removeClass(P.HELPER_TEXT_PERSISTENT)
      }, e.prototype.setValidation = function (t) {
        t ? this.adapter_.addClass(P.HELPER_TEXT_VALIDATION_MSG) : this.adapter_.removeClass(P.HELPER_TEXT_VALIDATION_MSG)
      }, e.prototype.showToScreenReader = function () {
        this.adapter_.removeAttr(M.ARIA_HIDDEN)
      }, e.prototype.setValidity = function (t) {
        var e = this.adapter_.hasClass(P.HELPER_TEXT_PERSISTENT),
          n = this.adapter_.hasClass(P.HELPER_TEXT_VALIDATION_MSG) && !t;
        n ? this.adapter_.setAttr(M.ROLE, "alert") : this.adapter_.removeAttr(M.ROLE), e || n || this.hide_()
      }, e.prototype.hide_ = function () {
        this.adapter_.setAttr(M.ARIA_HIDDEN, "true")
      }, e
    }(s.a),
    H = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, Object.defineProperty(e.prototype, "foundation", {
        get: function () {
          return this.foundation_
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new x({
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          },
          hasClass: function (e) {
            return t.root_.classList.contains(e)
          },
          setAttr: function (e, n) {
            return t.root_.setAttribute(e, n)
          },
          removeAttr: function (e) {
            return t.root_.removeAttribute(e)
          },
          setContent: function (e) {
            t.root_.textContent = e
          }
        })
      }, e
    }(r.a),
    F = {
      ICON_EVENT: "MDCTextField:icon",
      ICON_ROLE: "button"
    },
    V = {
      ROOT: "mdc-text-field__icon"
    },
    k = ["click", "keydown"],
    B = function (t) {
      function e(n) {
        var r = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
        return r.savedTabIndex_ = null, r.interactionHandler_ = function (t) {
          return r.handleInteraction(t)
        }, r
      }
      return i.b(e, t), Object.defineProperty(e, "strings", {
        get: function () {
          return F
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return V
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            getAttr: function () {
              return null
            },
            setAttr: function () {},
            removeAttr: function () {},
            setContent: function () {},
            registerInteractionHandler: function () {},
            deregisterInteractionHandler: function () {},
            notifyIconAction: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.init = function () {
        var t = this;
        this.savedTabIndex_ = this.adapter_.getAttr("tabindex"), k.forEach((function (e) {
          t.adapter_.registerInteractionHandler(e, t.interactionHandler_)
        }))
      }, e.prototype.destroy = function () {
        var t = this;
        k.forEach((function (e) {
          t.adapter_.deregisterInteractionHandler(e, t.interactionHandler_)
        }))
      }, e.prototype.setDisabled = function (t) {
        this.savedTabIndex_ && (t ? (this.adapter_.setAttr("tabindex", "-1"), this.adapter_.removeAttr("role")) : (this.adapter_.setAttr("tabindex", this.savedTabIndex_), this.adapter_.setAttr("role", F.ICON_ROLE)))
      }, e.prototype.setAriaLabel = function (t) {
        this.adapter_.setAttr("aria-label", t)
      }, e.prototype.setContent = function (t) {
        this.adapter_.setContent(t)
      }, e.prototype.handleInteraction = function (t) {
        var e = "Enter" === t.key || 13 === t.keyCode;
        ("click" === t.type || e) && this.adapter_.notifyIconAction()
      }, e
    }(s.a),
    j = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, Object.defineProperty(e.prototype, "foundation", {
        get: function () {
          return this.foundation_
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new B({
          getAttr: function (e) {
            return t.root_.getAttribute(e)
          },
          setAttr: function (e, n) {
            return t.root_.setAttribute(e, n)
          },
          removeAttr: function (e) {
            return t.root_.removeAttribute(e)
          },
          setContent: function (e) {
            t.root_.textContent = e
          },
          registerInteractionHandler: function (e, n) {
            return t.listen(e, n)
          },
          deregisterInteractionHandler: function (e, n) {
            return t.unlisten(e, n)
          },
          notifyIconAction: function () {
            return t.emit(B.strings.ICON_EVENT, {}, !0)
          }
        })
      }, e
    }(r.a),
    U = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, e.prototype.initialize = function (t, e, n, i, r, o, a) {
        void 0 === t && (t = function (t, e) {
          return new m.a(t, e)
        }), void 0 === e && (e = function (t) {
          return new f(t)
        }), void 0 === n && (n = function (t) {
          return new H(t)
        }), void 0 === i && (i = function (t) {
          return new A(t)
        }), void 0 === r && (r = function (t) {
          return new j(t)
        }), void 0 === o && (o = function (t) {
          return new l(t)
        }), void 0 === a && (a = function (t) {
          return new y(t)
        }), this.input_ = this.root_.querySelector(T.INPUT_SELECTOR);
        var s = this.root_.querySelector(T.LABEL_SELECTOR);
        this.label_ = s ? o(s) : null;
        var u = this.root_.querySelector(T.LINE_RIPPLE_SELECTOR);
        this.lineRipple_ = u ? e(u) : null;
        var c = this.root_.querySelector(T.OUTLINE_SELECTOR);
        this.outline_ = c ? a(c) : null;
        var d = x.strings,
          p = this.root_.nextElementSibling,
          h = p && p.classList.contains(O.HELPER_LINE),
          _ = h && p && p.querySelector(d.ROOT_SELECTOR);
        this.helperText_ = _ ? n(_) : null;
        var g = I.strings,
          v = this.root_.querySelector(g.ROOT_SELECTOR);
        !v && h && p && (v = p.querySelector(g.ROOT_SELECTOR)), this.characterCounter_ = v ? i(v) : null, this.leadingIcon_ = null, this.trailingIcon_ = null;
        var b = this.root_.querySelectorAll(T.ICON_SELECTOR);
        b.length > 0 && (b.length > 1 ? (this.leadingIcon_ = r(b[0]), this.trailingIcon_ = r(b[1])) : this.root_.classList.contains(O.WITH_LEADING_ICON) ? this.leadingIcon_ = r(b[0]) : this.trailingIcon_ = r(b[0])), this.ripple = this.createRipple_(t)
      }, e.prototype.destroy = function () {
        this.ripple && this.ripple.destroy(), this.lineRipple_ && this.lineRipple_.destroy(), this.helperText_ && this.helperText_.destroy(), this.characterCounter_ && this.characterCounter_.destroy(), this.leadingIcon_ && this.leadingIcon_.destroy(), this.trailingIcon_ && this.trailingIcon_.destroy(), this.label_ && this.label_.destroy(), this.outline_ && this.outline_.destroy(), t.prototype.destroy.call(this)
      }, e.prototype.initialSyncWithDOM = function () {
        this.disabled = this.input_.disabled
      }, Object.defineProperty(e.prototype, "value", {
        get: function () {
          return this.foundation_.getValue()
        },
        set: function (t) {
          this.foundation_.setValue(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "disabled", {
        get: function () {
          return this.foundation_.isDisabled()
        },
        set: function (t) {
          this.foundation_.setDisabled(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "valid", {
        get: function () {
          return this.foundation_.isValid()
        },
        set: function (t) {
          this.foundation_.setValid(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "required", {
        get: function () {
          return this.input_.required
        },
        set: function (t) {
          this.input_.required = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "pattern", {
        get: function () {
          return this.input_.pattern
        },
        set: function (t) {
          this.input_.pattern = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "minLength", {
        get: function () {
          return this.input_.minLength
        },
        set: function (t) {
          this.input_.minLength = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "maxLength", {
        get: function () {
          return this.input_.maxLength
        },
        set: function (t) {
          t < 0 ? this.input_.removeAttribute("maxLength") : this.input_.maxLength = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "min", {
        get: function () {
          return this.input_.min
        },
        set: function (t) {
          this.input_.min = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "max", {
        get: function () {
          return this.input_.max
        },
        set: function (t) {
          this.input_.max = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "step", {
        get: function () {
          return this.input_.step
        },
        set: function (t) {
          this.input_.step = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "helperTextContent", {
        set: function (t) {
          this.foundation_.setHelperTextContent(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "leadingIconAriaLabel", {
        set: function (t) {
          this.foundation_.setLeadingIconAriaLabel(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "leadingIconContent", {
        set: function (t) {
          this.foundation_.setLeadingIconContent(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "trailingIconAriaLabel", {
        set: function (t) {
          this.foundation_.setTrailingIconAriaLabel(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "trailingIconContent", {
        set: function (t) {
          this.foundation_.setTrailingIconContent(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "useNativeValidation", {
        set: function (t) {
          this.foundation_.setUseNativeValidation(t)
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.focus = function () {
        this.input_.focus()
      }, e.prototype.layout = function () {
        var t = this.foundation_.shouldFloat;
        this.foundation_.notchOutline(t)
      }, e.prototype.getDefaultFoundation = function () {
        var t = i.a({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
        return new D(t, this.getFoundationMap_())
      }, e.prototype.getRootAdapterMethods_ = function () {
        var t = this;
        return {
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          },
          hasClass: function (e) {
            return t.root_.classList.contains(e)
          },
          registerTextFieldInteractionHandler: function (e, n) {
            return t.listen(e, n)
          },
          deregisterTextFieldInteractionHandler: function (e, n) {
            return t.unlisten(e, n)
          },
          registerValidationAttributeChangeHandler: function (e) {
            var n = new MutationObserver((function (t) {
              return e(function (t) {
                return t.map((function (t) {
                  return t.attributeName
                })).filter((function (t) {
                  return t
                }))
              }(t))
            }));
            return n.observe(t.input_, {
              attributes: !0
            }), n
          },
          deregisterValidationAttributeChangeHandler: function (t) {
            return t.disconnect()
          }
        }
      }, e.prototype.getInputAdapterMethods_ = function () {
        var t = this;
        return {
          getNativeInput: function () {
            return t.input_
          },
          isFocused: function () {
            return document.activeElement === t.input_
          },
          registerInputInteractionHandler: function (e, n) {
            return t.input_.addEventListener(e, n, Object(o.a)())
          },
          deregisterInputInteractionHandler: function (e, n) {
            return t.input_.removeEventListener(e, n, Object(o.a)())
          }
        }
      }, e.prototype.getLabelAdapterMethods_ = function () {
        var t = this;
        return {
          floatLabel: function (e) {
            return t.label_ && t.label_.float(e)
          },
          getLabelWidth: function () {
            return t.label_ ? t.label_.getWidth() : 0
          },
          hasLabel: function () {
            return Boolean(t.label_)
          },
          shakeLabel: function (e) {
            return t.label_ && t.label_.shake(e)
          }
        }
      }, e.prototype.getLineRippleAdapterMethods_ = function () {
        var t = this;
        return {
          activateLineRipple: function () {
            t.lineRipple_ && t.lineRipple_.activate()
          },
          deactivateLineRipple: function () {
            t.lineRipple_ && t.lineRipple_.deactivate()
          },
          setLineRippleTransformOrigin: function (e) {
            t.lineRipple_ && t.lineRipple_.setRippleCenter(e)
          }
        }
      }, e.prototype.getOutlineAdapterMethods_ = function () {
        var t = this;
        return {
          closeOutline: function () {
            return t.outline_ && t.outline_.closeNotch()
          },
          hasOutline: function () {
            return Boolean(t.outline_)
          },
          notchOutline: function (e) {
            return t.outline_ && t.outline_.notch(e)
          }
        }
      }, e.prototype.getFoundationMap_ = function () {
        return {
          characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : void 0,
          helperText: this.helperText_ ? this.helperText_.foundation : void 0,
          leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : void 0,
          trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : void 0
        }
      }, e.prototype.createRipple_ = function (t) {
        var e = this,
          n = this.root_.classList.contains(O.TEXTAREA),
          r = this.root_.classList.contains(O.OUTLINED);
        if (n || r) return null;
        var s = i.a({}, m.a.createAdapter(this), {
          isSurfaceActive: function () {
            return a.b(e.input_, ":active")
          },
          registerInteractionHandler: function (t, n) {
            return e.input_.addEventListener(t, n, Object(o.a)())
          },
          deregisterInteractionHandler: function (t, n) {
            return e.input_.removeEventListener(t, n, Object(o.a)())
          }
        });
        return t(this.root_, new b.a(s))
      }, e
    }(r.a)
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "MDCChip", (function () {
    return f
  })), n.d(e, "MDCChipFoundation", (function () {
    return d
  })), n.d(e, "chipCssClasses", (function () {
    return u
  })), n.d(e, "chipStrings", (function () {
    return s
  })), n.d(e, "MDCChipSet", (function () {
    return I
  })), n.d(e, "MDCChipSetFoundation", (function () {
    return g
  })), n.d(e, "chipSetCssClasses", (function () {
    return _
  })), n.d(e, "chipSetStrings", (function () {
    return h
  }));
  var i = n(0),
    r = n(2),
    o = n(5),
    a = n(4),
    s = {
      ARIA_CHECKED: "aria-checked",
      CHECKMARK_SELECTOR: ".mdc-chip__checkmark",
      ENTRY_ANIMATION_NAME: "mdc-chip-entry",
      INTERACTION_EVENT: "MDCChip:interaction",
      LEADING_ICON_SELECTOR: ".mdc-chip__icon--leading",
      REMOVAL_EVENT: "MDCChip:removal",
      SELECTION_EVENT: "MDCChip:selection",
      TRAILING_ICON_INTERACTION_EVENT: "MDCChip:trailingIconInteraction",
      TRAILING_ICON_SELECTOR: ".mdc-chip__icon--trailing"
    },
    u = {
      CHECKMARK: "mdc-chip__checkmark",
      CHIP_EXIT: "mdc-chip--exit",
      HIDDEN_LEADING_ICON: "mdc-chip__icon--leading-hidden",
      LEADING_ICON: "mdc-chip__icon--leading",
      SELECTED: "mdc-chip--selected",
      TRAILING_ICON: "mdc-chip__icon--trailing"
    },
    c = n(1),
    l = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    },
    d = function (t) {
      function e(n) {
        var r = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
        return r.shouldRemoveOnTrailingIconClick_ = !0, r
      }
      return i.b(e, t), Object.defineProperty(e, "strings", {
        get: function () {
          return s
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return u
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            addClassToLeadingIcon: function () {},
            eventTargetHasClass: function () {
              return !1
            },
            getCheckmarkBoundingClientRect: function () {
              return l
            },
            getComputedStyleValue: function () {
              return ""
            },
            getRootBoundingClientRect: function () {
              return l
            },
            hasClass: function () {
              return !1
            },
            hasLeadingIcon: function () {
              return !1
            },
            notifyInteraction: function () {},
            notifyRemoval: function () {},
            notifySelection: function () {},
            notifyTrailingIconInteraction: function () {},
            removeClass: function () {},
            removeClassFromLeadingIcon: function () {},
            setAttr: function () {},
            setStyleProperty: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.isSelected = function () {
        return this.adapter_.hasClass(u.SELECTED)
      }, e.prototype.setSelected = function (t) {
        t ? (this.adapter_.addClass(u.SELECTED), this.adapter_.setAttr(s.ARIA_CHECKED, "true")) : (this.adapter_.removeClass(u.SELECTED), this.adapter_.setAttr(s.ARIA_CHECKED, "false")), this.adapter_.notifySelection(t)
      }, e.prototype.getShouldRemoveOnTrailingIconClick = function () {
        return this.shouldRemoveOnTrailingIconClick_
      }, e.prototype.setShouldRemoveOnTrailingIconClick = function (t) {
        this.shouldRemoveOnTrailingIconClick_ = t
      }, e.prototype.getDimensions = function () {
        var t = this,
          e = function () {
            return t.adapter_.getRootBoundingClientRect()
          };
        if (!this.adapter_.hasLeadingIcon()) {
          var n = t.adapter_.getCheckmarkBoundingClientRect();
          if (n) {
            var i = e();
            return {
              bottom: i.bottom,
              height: i.height,
              left: i.left,
              right: i.right,
              top: i.top,
              width: i.width + n.height
            }
          }
        }
        return e()
      }, e.prototype.beginExit = function () {
        this.adapter_.addClass(u.CHIP_EXIT)
      }, e.prototype.handleInteraction = function (t) {
        var e = "Enter" === t.key || 13 === t.keyCode;
        ("click" === t.type || e) && this.adapter_.notifyInteraction()
      }, e.prototype.handleTransitionEnd = function (t) {
        var e = this;
        if (this.adapter_.eventTargetHasClass(t.target, u.CHIP_EXIT)) {
          if ("width" === t.propertyName) this.adapter_.notifyRemoval();
          else if ("opacity" === t.propertyName) {
            var n = this.adapter_.getComputedStyleValue("width");
            requestAnimationFrame((function () {
              e.adapter_.setStyleProperty("width", n), e.adapter_.setStyleProperty("padding", "0"), e.adapter_.setStyleProperty("margin", "0"), requestAnimationFrame((function () {
                e.adapter_.setStyleProperty("width", "0")
              }))
            }))
          }
        } else "opacity" === t.propertyName && (this.adapter_.eventTargetHasClass(t.target, u.LEADING_ICON) && this.adapter_.hasClass(u.SELECTED) ? this.adapter_.addClassToLeadingIcon(u.HIDDEN_LEADING_ICON) : this.adapter_.eventTargetHasClass(t.target, u.CHECKMARK) && !this.adapter_.hasClass(u.SELECTED) && this.adapter_.removeClassFromLeadingIcon(u.HIDDEN_LEADING_ICON))
      }, e.prototype.handleTrailingIconInteraction = function (t) {
        var e = "Enter" === t.key || 13 === t.keyCode;
        t.stopPropagation(), ("click" === t.type || e) && (this.adapter_.notifyTrailingIconInteraction(), this.shouldRemoveOnTrailingIconClick_ && this.beginExit())
      }, e
    }(c.a),
    p = ["click", "keydown"],
    f = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), Object.defineProperty(e.prototype, "selected", {
        get: function () {
          return this.foundation_.isSelected()
        },
        set: function (t) {
          this.foundation_.setSelected(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "shouldRemoveOnTrailingIconClick", {
        get: function () {
          return this.foundation_.getShouldRemoveOnTrailingIconClick()
        },
        set: function (t) {
          this.foundation_.setShouldRemoveOnTrailingIconClick(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "ripple", {
        get: function () {
          return this.ripple_
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "id", {
        get: function () {
          return this.root_.id
        },
        enumerable: !0,
        configurable: !0
      }), e.attachTo = function (t) {
        return new e(t)
      }, e.prototype.initialize = function (t) {
        var e = this;
        void 0 === t && (t = function (t, e) {
          return new o.a(t, e)
        }), this.leadingIcon_ = this.root_.querySelector(s.LEADING_ICON_SELECTOR), this.trailingIcon_ = this.root_.querySelector(s.TRAILING_ICON_SELECTOR), this.checkmark_ = this.root_.querySelector(s.CHECKMARK_SELECTOR);
        var n = i.a({}, o.a.createAdapter(this), {
          computeBoundingRect: function () {
            return e.foundation_.getDimensions()
          }
        });
        this.ripple_ = t(this.root_, new a.a(n))
      }, e.prototype.initialSyncWithDOM = function () {
        var t = this;
        this.handleInteraction_ = function (e) {
          return t.foundation_.handleInteraction(e)
        }, this.handleTransitionEnd_ = function (e) {
          return t.foundation_.handleTransitionEnd(e)
        }, this.handleTrailingIconInteraction_ = function (e) {
          return t.foundation_.handleTrailingIconInteraction(e)
        }, p.forEach((function (e) {
          t.listen(e, t.handleInteraction_)
        })), this.listen("transitionend", this.handleTransitionEnd_), this.trailingIcon_ && p.forEach((function (e) {
          t.trailingIcon_.addEventListener(e, t.handleTrailingIconInteraction_)
        }))
      }, e.prototype.destroy = function () {
        var e = this;
        this.ripple_.destroy(), p.forEach((function (t) {
          e.unlisten(t, e.handleInteraction_)
        })), this.unlisten("transitionend", this.handleTransitionEnd_), this.trailingIcon_ && p.forEach((function (t) {
          e.trailingIcon_.removeEventListener(t, e.handleTrailingIconInteraction_)
        })), t.prototype.destroy.call(this)
      }, e.prototype.beginExit = function () {
        this.foundation_.beginExit()
      }, e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new d({
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          addClassToLeadingIcon: function (e) {
            t.leadingIcon_ && t.leadingIcon_.classList.add(e)
          },
          eventTargetHasClass: function (t, e) {
            return !!t && t.classList.contains(e)
          },
          getCheckmarkBoundingClientRect: function () {
            return t.checkmark_ ? t.checkmark_.getBoundingClientRect() : null
          },
          getComputedStyleValue: function (e) {
            return window.getComputedStyle(t.root_).getPropertyValue(e)
          },
          getRootBoundingClientRect: function () {
            return t.root_.getBoundingClientRect()
          },
          hasClass: function (e) {
            return t.root_.classList.contains(e)
          },
          hasLeadingIcon: function () {
            return !!t.leadingIcon_
          },
          notifyInteraction: function () {
            return t.emit(s.INTERACTION_EVENT, {
              chipId: t.id
            }, !0)
          },
          notifyRemoval: function () {
            return t.emit(s.REMOVAL_EVENT, {
              chipId: t.id,
              root: t.root_
            }, !0)
          },
          notifySelection: function (e) {
            return t.emit(s.SELECTION_EVENT, {
              chipId: t.id,
              selected: e
            }, !0)
          },
          notifyTrailingIconInteraction: function () {
            return t.emit(s.TRAILING_ICON_INTERACTION_EVENT, {
              chipId: t.id
            }, !0)
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          },
          removeClassFromLeadingIcon: function (e) {
            t.leadingIcon_ && t.leadingIcon_.classList.remove(e)
          },
          setAttr: function (e, n) {
            return t.root_.setAttribute(e, n)
          },
          setStyleProperty: function (e, n) {
            return t.root_.style.setProperty(e, n)
          }
        })
      }, e
    }(r.a),
    h = {
      CHIP_SELECTOR: ".mdc-chip"
    },
    _ = {
      CHOICE: "mdc-chip-set--choice",
      FILTER: "mdc-chip-set--filter"
    },
    g = function (t) {
      function e(n) {
        var r = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
        return r.selectedChipIds_ = [], r
      }
      return i.b(e, t), Object.defineProperty(e, "strings", {
        get: function () {
          return h
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return _
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            hasClass: function () {
              return !1
            },
            removeChip: function () {},
            setSelected: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds_.slice()
      }, e.prototype.select = function (t) {
        if (!(this.selectedChipIds_.indexOf(t) >= 0)) {
          if (this.adapter_.hasClass(_.CHOICE) && this.selectedChipIds_.length > 0) {
            var e = this.selectedChipIds_[0];
            this.selectedChipIds_.length = 0, this.adapter_.setSelected(e, !1)
          }
          this.selectedChipIds_.push(t), this.adapter_.setSelected(t, !0)
        }
      }, e.prototype.handleChipInteraction = function (t) {
        (this.adapter_.hasClass(_.CHOICE) || this.adapter_.hasClass(_.FILTER)) && this.toggleSelect_(t)
      }, e.prototype.handleChipSelection = function (t, e) {
        var n = this.selectedChipIds_.indexOf(t) >= 0;
        e && !n ? this.select(t) : !e && n && this.deselect_(t)
      }, e.prototype.handleChipRemoval = function (t) {
        this.deselect_(t), this.adapter_.removeChip(t)
      }, e.prototype.deselect_ = function (t) {
        var e = this.selectedChipIds_.indexOf(t);
        e >= 0 && (this.selectedChipIds_.splice(e, 1), this.adapter_.setSelected(t, !1))
      }, e.prototype.toggleSelect_ = function (t) {
        this.selectedChipIds_.indexOf(t) >= 0 ? this.deselect_(t) : this.select(t)
      }, e
    }(c.a),
    v = d.strings,
    y = v.INTERACTION_EVENT,
    m = v.SELECTION_EVENT,
    b = v.REMOVAL_EVENT,
    E = g.strings.CHIP_SELECTOR,
    C = 0,
    I = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return i.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, Object.defineProperty(e.prototype, "chips", {
        get: function () {
          return this.chips_.slice()
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "selectedChipIds", {
        get: function () {
          return this.foundation_.getSelectedChipIds()
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.initialize = function (t) {
        void 0 === t && (t = function (t) {
          return new f(t)
        }), this.chipFactory_ = t, this.chips_ = this.instantiateChips_(this.chipFactory_)
      }, e.prototype.initialSyncWithDOM = function () {
        var t = this;
        this.chips_.forEach((function (e) {
          e.id && e.selected && t.foundation_.select(e.id)
        })), this.handleChipInteraction_ = function (e) {
          return t.foundation_.handleChipInteraction(e.detail.chipId)
        }, this.handleChipSelection_ = function (e) {
          return t.foundation_.handleChipSelection(e.detail.chipId, e.detail.selected)
        }, this.handleChipRemoval_ = function (e) {
          return t.foundation_.handleChipRemoval(e.detail.chipId)
        }, this.listen(y, this.handleChipInteraction_), this.listen(m, this.handleChipSelection_), this.listen(b, this.handleChipRemoval_)
      }, e.prototype.destroy = function () {
        this.chips_.forEach((function (t) {
          t.destroy()
        })), this.unlisten(y, this.handleChipInteraction_), this.unlisten(m, this.handleChipSelection_), this.unlisten(b, this.handleChipRemoval_), t.prototype.destroy.call(this)
      }, e.prototype.addChip = function (t) {
        t.id = t.id || "mdc-chip-" + ++C, this.chips_.push(this.chipFactory_(t))
      }, e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new g({
          hasClass: function (e) {
            return t.root_.classList.contains(e)
          },
          removeChip: function (e) {
            var n = t.findChipIndex_(e);
            n >= 0 && (t.chips_[n].destroy(), t.chips_.splice(n, 1))
          },
          setSelected: function (e, n) {
            var i = t.findChipIndex_(e);
            i >= 0 && (t.chips_[i].selected = n)
          }
        })
      }, e.prototype.instantiateChips_ = function (t) {
        return [].slice.call(this.root_.querySelectorAll(E)).map((function (e) {
          return e.id = e.id || "mdc-chip-" + ++C, t(e)
        }))
      }, e.prototype.findChipIndex_ = function (t) {
        for (var e = 0; e < this.chips_.length; e++)
          if (this.chips_[e].id === t) return e;
        return -1
      }, e
    }(r.a)
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "util", (function () {
    return i
  })), n.d(e, "MDCSnackbar", (function () {
    return S
  })), n.d(e, "cssClasses", (function () {
    return r
  })), n.d(e, "strings", (function () {
    return o
  })), n.d(e, "numbers", (function () {
    return a
  })), n.d(e, "MDCSnackbarFoundation", (function () {
    return m
  }));
  var i = {};
  n.r(i), n.d(i, "announce", (function () {
    return c
  }));
  var r = {
      CLOSING: "mdc-snackbar--closing",
      OPEN: "mdc-snackbar--open",
      OPENING: "mdc-snackbar--opening"
    },
    o = {
      ACTION_SELECTOR: ".mdc-snackbar__action",
      ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
      CLOSED_EVENT: "MDCSnackbar:closed",
      CLOSING_EVENT: "MDCSnackbar:closing",
      DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
      LABEL_SELECTOR: ".mdc-snackbar__label",
      OPENED_EVENT: "MDCSnackbar:opened",
      OPENING_EVENT: "MDCSnackbar:opening",
      REASON_ACTION: "action",
      REASON_DISMISS: "dismiss",
      SURFACE_SELECTOR: ".mdc-snackbar__surface"
    },
    a = {
      DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
      MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
      MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
      SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
      SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
      ARIA_LIVE_DELAY_MS: 1e3
    },
    s = a.ARIA_LIVE_DELAY_MS,
    u = o.ARIA_LIVE_LABEL_TEXT_ATTR;

  function c(t, e) {
    void 0 === e && (e = t);
    var n = t.getAttribute("aria-live"),
      i = e.textContent.trim();
    i && n && (t.setAttribute("aria-live", "off"), e.textContent = "", e.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>', e.setAttribute(u, i), setTimeout((function () {
      t.setAttribute("aria-live", n), e.removeAttribute(u), e.textContent = i
    }), s))
  }
  var l = n(0),
    d = n(2),
    p = n(6),
    f = n(1),
    h = r.OPENING,
    _ = r.OPEN,
    g = r.CLOSING,
    v = o.REASON_ACTION,
    y = o.REASON_DISMISS,
    m = function (t) {
      function e(n) {
        var i = t.call(this, l.a({}, e.defaultAdapter, n)) || this;
        return i.isOpen_ = !1, i.animationFrame_ = 0, i.animationTimer_ = 0, i.autoDismissTimer_ = 0, i.autoDismissTimeoutMs_ = a.DEFAULT_AUTO_DISMISS_TIMEOUT_MS, i.closeOnEscape_ = !0, i
      }
      return l.b(e, t), Object.defineProperty(e, "cssClasses", {
        get: function () {
          return r
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "strings", {
        get: function () {
          return o
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "numbers", {
        get: function () {
          return a
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            announce: function () {},
            notifyClosed: function () {},
            notifyClosing: function () {},
            notifyOpened: function () {},
            notifyOpening: function () {},
            removeClass: function () {}
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.destroy = function () {
        this.clearAutoDismissTimer_(), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = 0, this.adapter_.removeClass(h), this.adapter_.removeClass(_), this.adapter_.removeClass(g)
      }, e.prototype.open = function () {
        var t = this;
        this.clearAutoDismissTimer_(), this.isOpen_ = !0, this.adapter_.notifyOpening(), this.adapter_.removeClass(g), this.adapter_.addClass(h), this.adapter_.announce(), this.runNextAnimationFrame_((function () {
          t.adapter_.addClass(_), t.animationTimer_ = setTimeout((function () {
            t.handleAnimationTimerEnd_(), t.adapter_.notifyOpened(), t.autoDismissTimer_ = setTimeout((function () {
              t.close(y)
            }), t.getTimeoutMs())
          }), a.SNACKBAR_ANIMATION_OPEN_TIME_MS)
        }))
      }, e.prototype.close = function (t) {
        var e = this;
        void 0 === t && (t = ""), this.isOpen_ && (cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, this.clearAutoDismissTimer_(), this.isOpen_ = !1, this.adapter_.notifyClosing(t), this.adapter_.addClass(r.CLOSING), this.adapter_.removeClass(r.OPEN), this.adapter_.removeClass(r.OPENING), clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout((function () {
          e.handleAnimationTimerEnd_(), e.adapter_.notifyClosed(t)
        }), a.SNACKBAR_ANIMATION_CLOSE_TIME_MS))
      }, e.prototype.isOpen = function () {
        return this.isOpen_
      }, e.prototype.getTimeoutMs = function () {
        return this.autoDismissTimeoutMs_
      }, e.prototype.setTimeoutMs = function (t) {
        var e = a.MIN_AUTO_DISMISS_TIMEOUT_MS,
          n = a.MAX_AUTO_DISMISS_TIMEOUT_MS;
        if (!(t <= n && t >= e)) throw new Error("timeoutMs must be an integer in the range " + e + "–" + n + ", but got '" + t + "'");
        this.autoDismissTimeoutMs_ = t
      }, e.prototype.getCloseOnEscape = function () {
        return this.closeOnEscape_
      }, e.prototype.setCloseOnEscape = function (t) {
        this.closeOnEscape_ = t
      }, e.prototype.handleKeyDown = function (t) {
        ("Escape" === t.key || 27 === t.keyCode) && this.getCloseOnEscape() && this.close(y)
      }, e.prototype.handleActionButtonClick = function (t) {
        this.close(v)
      }, e.prototype.handleActionIconClick = function (t) {
        this.close(y)
      }, e.prototype.clearAutoDismissTimer_ = function () {
        clearTimeout(this.autoDismissTimer_), this.autoDismissTimer_ = 0
      }, e.prototype.handleAnimationTimerEnd_ = function () {
        this.animationTimer_ = 0, this.adapter_.removeClass(r.OPENING), this.adapter_.removeClass(r.CLOSING)
      }, e.prototype.runNextAnimationFrame_ = function (t) {
        var e = this;
        cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame((function () {
          e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0)
        }))
      }, e
    }(f.a),
    b = o.SURFACE_SELECTOR,
    E = o.LABEL_SELECTOR,
    C = o.ACTION_SELECTOR,
    I = o.DISMISS_SELECTOR,
    A = o.OPENING_EVENT,
    T = o.OPENED_EVENT,
    O = o.CLOSING_EVENT,
    L = o.CLOSED_EVENT,
    S = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return l.b(e, t), e.attachTo = function (t) {
        return new e(t)
      }, e.prototype.initialize = function (t) {
        void 0 === t && (t = function () {
          return c
        }), this.announce_ = t()
      }, e.prototype.initialSyncWithDOM = function () {
        var t = this;
        this.surfaceEl_ = this.root_.querySelector(b), this.labelEl_ = this.root_.querySelector(E), this.actionEl_ = this.root_.querySelector(C), this.handleKeyDown_ = function (e) {
          return t.foundation_.handleKeyDown(e)
        }, this.handleSurfaceClick_ = function (e) {
          var n = e.target;
          t.isActionButton_(n) ? t.foundation_.handleActionButtonClick(e) : t.isActionIcon_(n) && t.foundation_.handleActionIconClick(e)
        }, this.registerKeyDownHandler_(this.handleKeyDown_), this.registerSurfaceClickHandler_(this.handleSurfaceClick_)
      }, e.prototype.destroy = function () {
        t.prototype.destroy.call(this), this.deregisterKeyDownHandler_(this.handleKeyDown_), this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)
      }, e.prototype.open = function () {
        this.foundation_.open()
      }, e.prototype.close = function (t) {
        void 0 === t && (t = ""), this.foundation_.close(t)
      }, e.prototype.getDefaultFoundation = function () {
        var t = this;
        return new m({
          addClass: function (e) {
            return t.root_.classList.add(e)
          },
          announce: function () {
            return t.announce_(t.labelEl_)
          },
          notifyClosed: function (e) {
            return t.emit(L, e ? {
              reason: e
            } : {})
          },
          notifyClosing: function (e) {
            return t.emit(O, e ? {
              reason: e
            } : {})
          },
          notifyOpened: function () {
            return t.emit(T, {})
          },
          notifyOpening: function () {
            return t.emit(A, {})
          },
          removeClass: function (e) {
            return t.root_.classList.remove(e)
          }
        })
      }, Object.defineProperty(e.prototype, "timeoutMs", {
        get: function () {
          return this.foundation_.getTimeoutMs()
        },
        set: function (t) {
          this.foundation_.setTimeoutMs(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "closeOnEscape", {
        get: function () {
          return this.foundation_.getCloseOnEscape()
        },
        set: function (t) {
          this.foundation_.setCloseOnEscape(t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isOpen", {
        get: function () {
          return this.foundation_.isOpen()
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "labelText", {
        get: function () {
          return this.labelEl_.textContent
        },
        set: function (t) {
          this.labelEl_.textContent = t
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "actionButtonText", {
        get: function () {
          return this.actionEl_.textContent
        },
        set: function (t) {
          this.actionEl_.textContent = t
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.registerKeyDownHandler_ = function (t) {
        this.listen("keydown", t)
      }, e.prototype.deregisterKeyDownHandler_ = function (t) {
        this.unlisten("keydown", t)
      }, e.prototype.registerSurfaceClickHandler_ = function (t) {
        this.surfaceEl_.addEventListener("click", t)
      }, e.prototype.deregisterSurfaceClickHandler_ = function (t) {
        this.surfaceEl_.removeEventListener("click", t)
      }, e.prototype.isActionButton_ = function (t) {
        return Boolean(Object(p.a)(t, C))
      }, e.prototype.isActionIcon_ = function (t) {
        return Boolean(Object(p.a)(t, I))
      }, e
    }(d.a)
}]);