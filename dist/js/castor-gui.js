var CastorGUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(1);
	
	var _vuestrapBaseComponentsSrcComponentsCard = __webpack_require__(6);
	
	var _vuestrapBaseComponentsSrcComponentsCard2 = _interopRequireDefault(_vuestrapBaseComponentsSrcComponentsCard);
	
	var _vuestrapBaseComponentsSrcComponentsNav = __webpack_require__(9);
	
	var _vuestrapBaseComponentsSrcComponentsNavbar = __webpack_require__(14);
	
	var _vuestrapBaseComponentsSrcComponentsNavbar2 = _interopRequireDefault(_vuestrapBaseComponentsSrcComponentsNavbar);
	
	var _vuestrapBaseComponentsSrcComponentsJumbotron = __webpack_require__(16);
	
	var _vuestrapBaseComponentsSrcComponentsJumbotron2 = _interopRequireDefault(_vuestrapBaseComponentsSrcComponentsJumbotron);
	
	var _vuestrapBaseComponentsSrcComponentsModal = __webpack_require__(18);
	
	var _vuestrapBaseComponentsSrcComponentsModal2 = _interopRequireDefault(_vuestrapBaseComponentsSrcComponentsModal);
	
	var _indexScss = __webpack_require__(20);
	
	var _indexScss2 = _interopRequireDefault(_indexScss);
	
	var _indexHtml = __webpack_require__(22);
	
	var _indexHtml2 = _interopRequireDefault(_indexHtml);
	
	var CastorGUI = {
	  template: _indexHtml2['default'],
	  components: {
	    'vs-modal': _vuestrapBaseComponentsSrcComponentsModal2['default'],
	    'vs-nav': _vuestrapBaseComponentsSrcComponentsNav.nav,
	    'vs-nav-item': _vuestrapBaseComponentsSrcComponentsNav.navItem,
	    'vs-navbar': _vuestrapBaseComponentsSrcComponentsNavbar2['default'],
	    'vs-jumbotron': _vuestrapBaseComponentsSrcComponentsJumbotron2['default'],
	    'vs-card': _vuestrapBaseComponentsSrcComponentsCard2['default']
	  }
	};
	
	exports['default'] = CastorGUI;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _cardHtml = __webpack_require__(7);
	
	var _cardHtml2 = _interopRequireDefault(_cardHtml);
	
	// import polyfill for IE9
	
	__webpack_require__(8);
	
	// export component object
	exports['default'] = {
	  template: _cardHtml2['default'],
	  replace: true,
	  computed: {
	    cardVariant: function cardVariant() {
	      return !this.variant || this.variant === 'default' ? 'card-default' : 'card-' + this.variant;
	    },
	    cardInverse: function cardInverse() {
	      return this.type === 'image-overlay' || this.type === 'inverse' ? 'card-inverse' : '';
	    },
	    cardAlign: function cardAlign() {
	      return 'text-' + this.align;
	    }
	  },
	  props: {
	    align: {
	      type: String,
	      'default': 'left'
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    'type': function type(val) {
	      // get first card-block or div and apply a card-image-overlay class if image-overlay slected
	      var div = this.$el.getElementsByClassName('card-block')[0] || this.$el.getElementsByTagName('div')[0];
	      if (val === 'image-overlay') {
	        div.classList.add('card-img-overlay');
	      } else {
	        div.classList.remove('card-img-overlay');
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card {{cardVariant}} {{cardAlign}} {{cardInverse}}\">\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
	"use strict";
	
	;if ("document" in self && !("classList" in document.createElement("_"))) {
	  (function (j) {
	    "use strict";if (!("Element" in j)) {
	      return;
	    }var a = "classList",
	        f = "prototype",
	        m = j.Element[f],
	        b = Object,
	        k = String[f].trim || function () {
	      return this.replace(/^\s+|\s+$/g, "");
	    },
	        c = Array[f].indexOf || function (q) {
	      var p = 0,
	          o = this.length;for (; p < o; p++) {
	        if (p in this && this[p] === q) {
	          return p;
	        }
	      }return -1;
	    },
	        n = function n(o, p) {
	      this.name = o;this.code = DOMException[o];this.message = p;
	    },
	        g = function g(p, o) {
	      if (o === "") {
	        throw new n("SYNTAX_ERR", "An invalid or illegal string was specified");
	      }if (/\s/.test(o)) {
	        throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character");
	      }return c.call(p, o);
	    },
	        d = function d(s) {
	      var r = k.call(s.getAttribute("class") || ""),
	          q = r ? r.split(/\s+/) : [],
	          p = 0,
	          o = q.length;for (; p < o; p++) {
	        this.push(q[p]);
	      }this._updateClassName = function () {
	        s.setAttribute("class", this.toString());
	      };
	    },
	        e = d[f] = [],
	        i = function i() {
	      return new d(this);
	    };n[f] = Error[f];e.item = function (o) {
	      return this[o] || null;
	    };e.contains = function (o) {
	      o += "";return g(this, o) !== -1;
	    };e.add = function () {
	      var s = arguments,
	          r = 0,
	          p = s.length,
	          q,
	          o = false;do {
	        q = s[r] + "";if (g(this, q) === -1) {
	          this.push(q);o = true;
	        }
	      } while (++r < p);if (o) {
	        this._updateClassName();
	      }
	    };e.remove = function () {
	      var t = arguments,
	          s = 0,
	          p = t.length,
	          r,
	          o = false;do {
	        r = t[s] + "";var q = g(this, r);if (q !== -1) {
	          this.splice(q, 1);o = true;
	        }
	      } while (++s < p);if (o) {
	        this._updateClassName();
	      }
	    };e.toggle = function (p, q) {
	      p += "";var o = this.contains(p),
	          r = o ? q !== true && "remove" : q !== false && "add";if (r) {
	        this[r](p);
	      }return !o;
	    };e.toString = function () {
	      return this.join(" ");
	    };if (b.defineProperty) {
	      var l = { get: i, enumerable: true, configurable: true };try {
	        b.defineProperty(m, a, l);
	      } catch (h) {
	        if (h.number === -2146823252) {
	          l.enumerable = false;b.defineProperty(m, a, l);
	        }
	      }
	    } else {
	      if (b[f].__defineGetter__) {
	        m.__defineGetter__(a, i);
	      }
	    }
	  })(self);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(10);
	
	var _navHtml = __webpack_require__(12);
	
	var _navHtml2 = _interopRequireDefault(_navHtml);
	
	var _utilsHelpersJs = __webpack_require__(13);
	
	// export component object
	var nav = {
	  template: _navHtml2['default'],
	  replace: true,
	  props: {
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    type: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	
	exports.nav = nav;
	// export slide object
	var navItem = {
	  template: '<li class="nav-item"><a href="#" v-on:click.stop.prevent="changeLocation($router, link)" class="nav-link {{active ? \'active\' : \'\'}} {{disabled ? \'disabled\' : \'\'}}"><slot></slot></a></li>',
	  replace: true,
	  props: {
	    link: {
	      type: String,
	      'default': ''
	    },
	    active: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    changeLocation: _utilsHelpersJs.changeLocation
	  }
	};
	exports.navItem = navItem;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	module.exports = "<ul v-bind:class=\"{'nav': true, 'nav-stacked': vertical, 'nav-pills': type == 'pills', 'navbar-nav': type == 'navbar' }\">\r\n  <slot></slot> \r\n</ul>";

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Other utilities for demo pages
	 *
	 */
	
	// pulled from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.makeid = makeid;
	exports.csstransitions = csstransitions;
	
	function makeid() {
	  var text = '';
	  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	  for (var i = 0; i < 5; i++) {
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  }
	  return text;
	}
	
	// check if browser support css3 transitions
	
	function csstransitions() {
	  var style = document.documentElement.style;
	  return style.webkitTransition !== undefined || style.MozTransition !== undefined || style.OTransition !== undefined || style.MsTransition !== undefined || style.transition !== undefined;
	}
	
	/**
	 * change location utility supports v-link like paths or hrefs
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Object} [args]
	 */
	var changeLocation = function changeLocation(router, link) {
	  if (!link) return;
	  if (router) {
	    router.go(link);
	  } else {
	    window.location.href = link;
	  }
	};
	exports.changeLocation = changeLocation;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _navbarHtml = __webpack_require__(15);
	
	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);
	
	// export component object
	exports['default'] = {
	  template: _navbarHtml2['default'],
	  replace: true,
	  computed: {
	    navbarType: function navbarType() {
	      return !this.type || this.type === 'default' || this.type === 'light' ? 'navbar-light' : 'navbar-dark';
	    },
	    navbarVariant: function navbarVariant() {
	      return !this.variant || this.variant === 'default' ? 'bg-faded' : 'bg-' + this.variant;
	    },
	    navbarfixed: function navbarfixed() {
	      return !this.fixed ? '' : 'navbar-fixed-' + this.fixed;
	    }
	  },
	  props: {
	    type: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    fixed: {
	      type: String,
	      'default': ''
	    },
	    full: {
	      type: Boolean,
	      'default': false
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar {{navbarType}} {{navbarVariant}} {{navbarfixed}} {{full ? 'navbar-full' : ''}}\">\r\n\t<slot></slot>\r\n</nav>";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jumbotronHtml = __webpack_require__(17);
	
	var _jumbotronHtml2 = _interopRequireDefault(_jumbotronHtml);
	
	// export component object
	exports['default'] = {
	  template: _jumbotronHtml2['default'],
	  replace: true,
	  props: {
	    fluid: {
	      type: Boolean,
	      'default': false
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\" v-bind:class=\"{ 'jumbotron-fluid': fluid }\">\r\n  <div class=\"container\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsHelpersJs = __webpack_require__(13);
	
	var _modalHtml = __webpack_require__(19);
	
	var _modalHtml2 = _interopRequireDefault(_modalHtml);
	
	// import polyfill for IE9
	
	__webpack_require__(8);
	
	// this is directly linked to the bootstrap animation timing in _modal.scss
	// // for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utilsHelpersJs.csstransitions)() ? 300 : 0;
	
	// export component object
	exports['default'] = {
	  template: _modalHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      animateBackdrop: false,
	      animateModal: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      'default': 'default'
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    fade: {
	      type: Boolean,
	      'default': true
	    },
	    closeOnBackdrop: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    show: function show() {
	      var _this2 = this;
	
	      this.$el.style.display = 'block';
	      this._body = document.querySelector('body');
	      var _this = this;
	      // wait for the display block, and then add class "in" class on the modal
	      this._modalAnimation = setTimeout(function () {
	        _this.animateBackdrop = true;
	        _this2._modalAnimation = setTimeout(function () {
	          _this._body.classList.add('modal-open');
	          _this.animateModal = true;
	          _this.$dispatch('shown::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, 0);
	    },
	    hide: function hide() {
	      var _this3 = this;
	
	      var _this = this;
	      // first animate modal out
	      this.animateModal = false;
	      this._modalAnimation = setTimeout(function () {
	        // wait for animation to complete and then hide the backdrop
	        _this.animateBackdrop = false;
	        _this3._modalAnimation = setTimeout(function () {
	          _this._body.classList.remove('modal-open');
	          // no hide the modal wrapper
	          _this.$el.style.display = 'none';
	          _this.$dispatch('hidden::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, _this.fade ? TRANSITION_DURATION : 0);
	    },
	    onClickOut: function onClickOut(e) {
	      // if backdrop clicked, hide modal
	      if (this.closeOnBackdrop && e.target.id && e.target.id === this.id) {
	        this.hide();
	      }
	    }
	  },
	  events: {
	    // control modal from outside via events
	    'show::modal': function showModal(id) {
	      if (id === this.id) {
	        this.show();
	      }
	    },
	    'hide::modal': function hideModal(id) {
	      if (id === this.id) {
	        this.hide();
	      }
	    }
	  },
	  ready: function ready() {
	    var _this4 = this;
	
	    // support for esc key press
	    document.addEventListener('keydown', function (e) {
	      var key = e.which || e.keyCode;
	      if (key === 27) {
	        // 27 is esc
	        _this4.hide();
	      }
	    });
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._modalAnimation);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div style=\"display: none\">\r\n\t<div id=\"{{id}}\" class=\"modal\" v-bind:class=\"{ fade: fade, in: animateModal || !fade }\" style=\"display: block\" v-on:click=\"onClickOut($event)\">\r\n\t  \t<div class=\"modal-dialog  modal-{{size}}\" role=\"document\" style=\"z-index: 9999\">\r\n\t\t    <div class=\"modal-content\">\r\n\t\t        <div class=\"modal-header\">\r\n\t\t        \t<slot name=\"modal-header\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-body\">\r\n\t\t        \t<slot name=\"modal-body\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-footer\">\r\n\t\t        \t<slot name=\"modal-footer\"></slot>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal-backdrop\" v-bind:class=\"{ fade: fade, in: animateBackdrop || !fade }\"></div>\r\n</div>";

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\" v-cloak>\n\n  <!-- navbar component -->\n  <vs-navbar fixed=\"top\" variant=\"default\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <vs-nav type=\"navbar\" :vertical=\"false\" class=\"pull-left\">\n      <vs-nav-item href=\"#\" active>Home</vs-nav-item>\n      <vs-nav-item href=\"#\">Features</vs-nav-item>\n      <vs-nav-item href=\"#\">Pricing</vs-nav-item>\n      <vs-nav-item href=\"#\">About</vs-nav-item>\n    </vs-nav>\n    <form class=\"form-inline navbar-form pull-xs-right\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\n    </form>\n  </vs-navbar>\n\n  <!-- jumbotron component -->\n  <div class=\"container\">\n    <vs-jumbotron>\n      <h1 class=\"display-3\">Hello, world!</h1>\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n      <hr class=\"m-y-md\">\n      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n      <!-- modal component trigger -->\n      <button class=\"btn btn-primary\" v-on:click=\"$broadcast('show::modal', 'modal1')\">\n        Show Modal\n      </button>\n      <!-- modal component content -->\n      <vs-modal id=\"modal1\" size=\"md\">\n        <div slot=\"modal-header\">\n          <h3>header</h3>\n        </div>\n        <div slot=\"modal-body\">\n          body\n        </div>\n        <div slot=\"modal-footer\">\n          <button class=\"btn btn-primary\" v-on:click=\"$broadcast('hide::modal', 'modal1')\">\n            OK\n          </button>\n        </div>\n      </vs-modal>\n    </vs-jumbotron>\n  </div>\n\n  <!-- content -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-4\" v-for=\"item in [0,1,2]\">\n        <!-- card component -->\n        <vs-card>\n          <img class=\"card-img img-fluid\" src=\"https://placehold.it/350x150\" alt=\"Card image cap\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </vs-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-b-lg\"></div>\n\n  <!-- footer -->\n  <footer>\n    <div class=\"container\">\n      <p>© Company 2016</p>\n    </div>\n  </footer>\n\n</div>\n\n";

/***/ }
/******/ ]);
//# sourceMappingURL=castor-gui.js.map