/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ module_Splide
});

// NAMESPACE OBJECT: ./src/js/constants/states.js
var states_namespaceObject = {};
__webpack_require__.r(states_namespaceObject);
__webpack_require__.d(states_namespaceObject, {
  "CREATED": () => CREATED,
  "DESTROYED": () => DESTROYED,
  "IDLE": () => IDLE,
  "MOUNTED": () => MOUNTED,
  "MOVING": () => MOVING
});

;// CONCATENATED MODULE: ./src/js/core/event.js
/**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function for providing an Event object simply managing events.
 */
/* harmony default export */ const core_event = (function () {
  /**
   * Store all event data.
   *
   * @type {Array}
   */
  var data = [];
  var Event = {
    /**
     * Subscribe the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     */
    on: function on(events, handler, elm, options) {
      if (elm === void 0) {
        elm = null;
      }

      if (options === void 0) {
        options = {};
      }

      events.split(' ').forEach(function (event) {
        if (elm) {
          elm.addEventListener(event, handler, options);
        }

        data.push({
          event: event,
          handler: handler,
          elm: elm,
          options: options
        });
      });
    },

    /**
     * Unsubscribe the given event(s).
     *
     * @param {string}  events - A event name or names split by space.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     */
    off: function off(events, elm) {
      if (elm === void 0) {
        elm = null;
      }

      events.split(' ').forEach(function (event) {
        data = data.filter(function (item) {
          if (item && item.event === event && item.elm === elm) {
            unsubscribe(item);
            return false;
          }

          return true;
        });
      });
    },

    /**
     * Emit an event.
     * This method is only for custom events.
     *
     * @param {string}  event - An event name.
     * @param {*}       args  - Any number of arguments passed to handlers.
     */
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      data.forEach(function (item) {
        if (!item.elm && item.event.split('.')[0] === event) {
          item.handler.apply(item, args);
        }
      });
    },

    /**
     * Clear event data.
     */
    destroy: function destroy() {
      data.forEach(unsubscribe);
      data = [];
    }
  };
  /**
   * Remove the registered event listener.
   *
   * @param {Object} item - An object containing event data.
   */

  function unsubscribe(item) {
    if (item.elm) {
      item.elm.removeEventListener(item.event, item.handler, item.options);
    }
  }

  return Event;
});
;// CONCATENATED MODULE: ./src/js/core/state.js
/**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */
/* harmony default export */ const state = (function (initialState) {
  /**
   * Store the current state.
   *
   * @type {string|number}
   */
  var curr = initialState;
  return {
    /**
     * Change state.
     *
     * @param {string|number} state - A new state.
     */
    set: function set(state) {
      curr = state;
    },

    /**
     * Verify if the current state is given one or not.
     *
     * @param {string|number} state - A state name to be verified.
     *
     * @return {boolean} - True if the current state is the given one.
     */
    is: function is(state) {
      return state === curr;
    }
  };
});
;// CONCATENATED MODULE: ./src/js/utils/object.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Some utility functions related with Object, supporting IE.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */
var keys = Object.keys;
/**
 * Iterate an object like Array.forEach.
 * IE doesn't support forEach of HTMLCollection.
 *
 * @param {Object}    obj       - An object.
 * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
 */

function each(obj, callback) {
  keys(obj).some(function (key, index) {
    return callback(obj[key], key, index);
  });
}
/**
 * Return values of the given object as an array.
 * IE doesn't support Object.values.
 *
 * @param {Object} obj - An object.
 *
 * @return {Array} - An array containing all values of the given object.
 */

function values(obj) {
  return keys(obj).map(function (key) {
    return obj[key];
  });
}
/**
 * Check if the given subject is object or not.
 *
 * @param {*} subject - A subject to be verified.
 *
 * @return {boolean} - True if object, false otherwise.
 */

function isObject(subject) {
  return typeof subject === 'object';
}
/**
 * Merge two objects deeply.
 *
 * @param {Object} to   - An object where "from" is merged.
 * @param {Object} from - An object merged to "to".
 *
 * @return {Object} - A merged object.
 */

function merge(_ref, from) {
  var to = _extends({}, _ref);

  each(from, function (value, key) {
    if (isObject(value)) {
      if (!isObject(to[key])) {
        to[key] = {};
      }

      to[key] = merge(to[key], value);
    } else {
      to[key] = value;
    }
  });
  return to;
}
/**
 * Assign all properties "from" to "to" object.
 *
 * @param {Object} to   - An object where properties are assigned.
 * @param {Object} from - An object whose properties are assigned to "to".
 *
 * @return {Object} - An assigned object.
 */

function object_assign(to, from) {
  keys(from).forEach(function (key) {
    if (!to[key]) {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
    }
  });
  return to;
}
;// CONCATENATED MODULE: ./src/js/utils/utils.js
/**
 * A package of some miscellaneous utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Convert the given value to array.
 *
 * @param {*} value - Any value.
 *
 * @return {*[]} - Array containing the given value.
 */

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * Check if the given value is between min and max.
 * Min will be returned when the value is less than min or max will do when greater than max.
 *
 * @param {number} value - A number to be checked.
 * @param {number} m1    - Minimum or maximum number.
 * @param {number} m2    - Maximum or minimum number.
 *
 * @return {number} - A value itself, min or max.
 */

function between(value, m1, m2) {
  return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
}
/**
 * The sprintf method with minimum functionality.
 *
 * @param {string}       format       - The string format.
 * @param {string|Array} replacements - Replacements accepting multiple arguments.
 *
 * @returns {string} - Converted string.
 */

function sprintf(format, replacements) {
  var i = 0;
  return format.replace(/%s/g, function () {
    return toArray(replacements)[i++];
  });
}
/**
 * Append px unit to the given subject if necessary.
 *
 * @param {number|string} value - A value that may not include an unit.
 *
 * @return {string} - If the value is string, return itself.
 *                    If number, do value + "px". An empty string, otherwise.
 */

function unit(value) {
  var type = typeof value;

  if (type === 'number' && value > 0) {
    return parseFloat(value) + 'px';
  }

  return type === 'string' ? value : '';
}
/**
 * Pad start with 0.
 *
 * @param {number} number - A number to be filled with 0.
 *
 * @return {string|number} - Padded number.
 */

function pad(number) {
  return number < 10 ? '0' + number : number;
}
/**
 * Convert the given value to pixel.
 *
 * @param {Element}       root  - Root element where a dummy div is appended.
 * @param {string|number} value - CSS value to be converted, such as 10rem.
 *
 * @return {number} - Pixel.
 */

function toPixel(root, value) {
  if (typeof value === 'string') {
    var div = create('div', {});
    applyStyle(div, {
      position: 'absolute',
      width: value
    });
    append(root, div);
    value = div.clientWidth;
    dom_remove(div);
  }

  return +value || 0;
}
;// CONCATENATED MODULE: ./src/js/utils/dom.js
/**
 * Some utility functions related with DOM.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Find the first element matching the given selector.
 * Be aware that all selectors after a space are ignored.
 *
 * @param {Element|Node}  elm       - An ancestor element.
 * @param {string}        selector  - DOMString.
 *
 * @return {Element|null} - A found element or null.
 */

function find(elm, selector) {
  return elm ? elm.querySelector(selector.split(' ')[0]) : null;
}
/**
 * Find a first child having the given tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element|undefined} - A found element on success or undefined on failure.
 */

function child(parent, tagOrClassName) {
  return children(parent, tagOrClassName)[0];
}
/**
 * Return chile elements that matches the provided tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element[]} - Found elements.
 */

function children(parent, tagOrClassName) {
  if (parent) {
    return values(parent.children).filter(function (child) {
      return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
    });
  }

  return [];
}
/**
 * Create an element with some optional attributes.
 *
 * @param {string} tag   - A tag name.
 * @param {Object} attrs - An object any attribute pairs of name and value.
 *
 * @return {Element} - A created element.
 */

function create(tag, attrs) {
  var elm = document.createElement(tag);
  each(attrs, function (value, key) {
    return setAttribute(elm, key, value);
  });
  return elm;
}
/**
 * Convert HTML string to DOM node.
 *
 * @param {string} html - HTML string.
 *
 * @return {Node} - A created node.
 */

function domify(html) {
  var div = create('div', {});
  div.innerHTML = html;
  return div.firstChild;
}
/**
 * Remove a given element from a DOM tree.
 *
 * @param {Element|Element[]} elms - Element(s) to be removed.
 */

function dom_remove(elms) {
  toArray(elms).forEach(function (elm) {
    if (elm) {
      var parent = elm.parentElement;
      parent && parent.removeChild(elm);
    }
  });
}
/**
 * Append a child to a given element.
 *
 * @param {Element} parent - A parent element.
 * @param {Element} child  - An element to be appended.
 */

function append(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
/**
 * Insert an element before the reference element.
 *
 * @param {Element|Node} ref - A reference element.
 * @param {Element}      elm - An element to be inserted.
 */

function before(elm, ref) {
  if (elm && ref) {
    var parent = ref.parentElement;
    parent && parent.insertBefore(elm, ref);
  }
}
/**
 * Apply styles to the given element.
 *
 * @param {Element} elm     - An element where styles are applied.
 * @param {Object}  styles  - Object containing styles.
 */

function applyStyle(elm, styles) {
  if (elm) {
    each(styles, function (value, prop) {
      if (value !== null) {
        elm.style[prop] = value;
      }
    });
  }
}
/**
 * Add or remove classes to/from the element.
 * This function is for internal usage.
 *
 * @param {Element}         elm     - An element where classes are added.
 * @param {string|string[]} classes - Class names being added.
 * @param {boolean}         remove  - Whether to remove or add classes.
 */

function addOrRemoveClasses(elm, classes, remove) {
  if (elm) {
    toArray(classes).forEach(function (name) {
      if (name) {
        elm.classList[remove ? 'remove' : 'add'](name);
      }
    });
  }
}
/**
 * Add classes to the element.
 *
 * @param {Element}          elm     - An element where classes are added.
 * @param {string|string[]}  classes - Class names being added.
 */


function addClass(elm, classes) {
  addOrRemoveClasses(elm, classes, false);
}
/**
 * Remove a class from the element.
 *
 * @param {Element}         elm     - An element where classes are removed.
 * @param {string|string[]} classes - A class name being removed.
 */

function removeClass(elm, classes) {
  addOrRemoveClasses(elm, classes, true);
}
/**
 * Verify if the provided element has the class or not.
 *
 * @param {Element} elm       - An element.
 * @param {string}  className - A class name.
 *
 * @return {boolean} - True if the element has the class or false if not.
 */

function hasClass(elm, className) {
  return !!elm && elm.classList.contains(className);
}
/**
 * Set attribute to the given element.
 *
 * @param {Element}                 elm   - An element where an attribute is assigned.
 * @param {string}                  name  - Attribute name.
 * @param {string|number|boolean}   value - Attribute value.
 */

function setAttribute(elm, name, value) {
  if (elm) {
    elm.setAttribute(name, value);
  }
}
/**
 * Get attribute from the given element.
 *
 * @param {Element} elm  - An element where an attribute is assigned.
 * @param {string}  name - Attribute name.
 *
 * @return {string} - The value of the given attribute if available. An empty string if not.
 */

function getAttribute(elm, name) {
  return elm ? elm.getAttribute(name) : '';
}
/**
 * Remove attribute from the given element.
 *
 * @param {Element|Element[]} elms  - An element where an attribute is removed.
 * @param {string|string[]}      names - Attribute name.
 */

function removeAttribute(elms, names) {
  toArray(names).forEach(function (name) {
    toArray(elms).forEach(function (elm) {
      return elm && elm.removeAttribute(name);
    });
  });
}
/**
 * Return the Rect object of the provided object.
 *
 * @param {Element} elm - An element.
 *
 * @return {ClientRect|DOMRect} - A rect object.
 */

function getRect(elm) {
  return elm.getBoundingClientRect();
}
/**
 * Trigger the given callback after all images contained by the element are loaded.
 *
 * @param {Element}  elm      - Element that may contain images.
 * @param {Function} callback - Callback function fired right after all images are loaded.
 */

function loaded(elm, callback) {
  var images = elm.querySelectorAll('img');
  var length = images.length;

  if (length) {
    var count = 0;
    each(images, function (img) {
      img.onload = img.onerror = function () {
        if (++count === length) {
          callback();
        }
      };
    });
  } else {
    // Trigger the callback immediately if there is no image.
    callback();
  }
}
;// CONCATENATED MODULE: ./src/js/constants/types.js
/**
 * Export slider types.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Normal slider.
 *
 * @type {string}
 */
var SLIDE = 'slide';
/**
 * Loop after the last slide and before the first one.
 *
 * @type {string}
 */

var LOOP = 'loop';
/**
 * The track doesn't move.
 *
 * @type {string}
 */

var FADE = 'fade';
;// CONCATENATED MODULE: ./src/js/transitions/slide/index.js
/**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const slide = (function (Splide, Components) {
  /**
   * Hold the list element.
   *
   * @type {Element}
   */
  var list;
  /**
   * Hold the onEnd callback function.
   *
   * @type {function}
   */

  var endCallback;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      list = Components.Elements.list;
      Splide.on('transitionend', function (e) {
        if (e.target === list && endCallback) {
          endCallback();
        }
      }, list);
    },

    /**
     * Start transition.
     *
     * @param {number}   destIndex - Destination slide index that might be clone's.
     * @param {number}   newIndex  - New index.
     * @param {number}   prevIndex - Previous index.
     * @param {Object}   coord     - Destination coordinates.
     * @param {function} done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var options = Splide.options;
      var edgeIndex = Components.Controller.edgeIndex;
      var speed = options.speed;
      endCallback = done;

      if (Splide.is(SLIDE)) {
        if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
          speed = options.rewindSpeed || speed;
        }
      }

      applyStyle(list, {
        transition: "transform " + speed + "ms " + options.easing,
        transform: "translate(" + coord.x + "px," + coord.y + "px)"
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/transitions/fade/index.js
/**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const fade = (function (Splide, Components) {
  var Fade = {
    /**
     * Called when the component is mounted.
     * Apply transition style to the first slide.
     */
    mount: function mount() {
      apply(Splide.index);
    },

    /**
     * Start transition.
     *
     * @param {number}    destIndex - Destination slide index that might be clone's.
     * @param {number}    newIndex  - New index.
     * @param {number}    prevIndex - Previous index.
     * @param {Object}    coord     - Destination coordinates.
     * @param {function}  done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var track = Components.Elements.track;
      applyStyle(track, {
        height: unit(track.clientHeight)
      });
      apply(newIndex);
      setTimeout(function () {
        done();
        applyStyle(track, {
          height: ''
        });
      });
    }
  };
  /**
   * Apply transition style to the slide specified by the given index.
   *
   * @param {number} index - A slide index.
   */

  function apply(index) {
    var options = Splide.options;
    applyStyle(Components.Elements.slides[index], {
      transition: "opacity " + options.speed + "ms " + options.easing
    });
  }

  return Fade;
});
;// CONCATENATED MODULE: ./src/js/transitions/index.js
/**
 * Export transition components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


;// CONCATENATED MODULE: ./src/js/core/composer.js
/**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * Compose components.
 *
 * @param {Splide}   Splide     - Splide instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */

function compose(Splide, Components, Transition) {
  var components = {};
  each(Components, function (Component, name) {
    components[name] = Component(Splide, components, name.toLowerCase());
  });

  if (!Transition) {
    Transition = Splide.is(FADE) ? fade : slide;
  }

  components.Transition = Transition(Splide, components);
  return components;
}
;// CONCATENATED MODULE: ./src/js/utils/error.js
/**
 * Utility functions for outputting logs.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Prefix of an error massage.
 *
 * @type {string}
 */
var MESSAGE_PREFIX = '[SPLIDE]';
/**
 * Display an error message on the browser console.
 *
 * @param {string} message - An error message.
 */

function error(message) {
  console.error(MESSAGE_PREFIX + " " + message);
}
/**
 * Check existence of the given object and throw an error if it doesn't.
 *
 * @throws {Error}
 *
 * @param {*}      subject - A subject to be confirmed.
 * @param {string} message - An error message.
 */

function exist(subject, message) {
  if (!subject) {
    throw new Error(message);
  }
}
;// CONCATENATED MODULE: ./src/js/constants/classes.js
/**
 * Export class names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * A root class name.
 *
 * @type {string}
 */
var ROOT = 'splide';
/**
 * The definition table of all classes for elements.
 * They might be modified by options.
 *
 * @type {Object}
 */

var ELEMENT_CLASSES = {
  root: ROOT,
  slider: ROOT + "__slider",
  track: ROOT + "__track",
  list: ROOT + "__list",
  slide: ROOT + "__slide",
  container: ROOT + "__slide__container",
  arrows: ROOT + "__arrows",
  arrow: ROOT + "__arrow",
  prev: ROOT + "__arrow--prev",
  next: ROOT + "__arrow--next",
  pagination: ROOT + "__pagination",
  page: ROOT + "__pagination__page",
  clone: ROOT + "__slide--clone",
  progress: ROOT + "__progress",
  bar: ROOT + "__progress__bar",
  autoplay: ROOT + "__autoplay",
  play: ROOT + "__play",
  pause: ROOT + "__pause",
  spinner: ROOT + "__spinner",
  sr: ROOT + "__sr"
};
/**
 * Definitions of status classes.
 *
 * @type {Object}
 */

var STATUS_CLASSES = {
  active: 'is-active',
  visible: 'is-visible',
  loading: 'is-loading'
};
;// CONCATENATED MODULE: ./src/js/constants/i18n.js
/**
 * Export i18n texts as object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Texts for i18n.
 *
 * @type {Object}
 */
var I18N = {
  prev: 'Previous slide',
  next: 'Next slide',
  first: 'Go to first slide',
  last: 'Go to last slide',
  slideX: 'Go to slide %s',
  pageX: 'Go to page %s',
  play: 'Start autoplay',
  pause: 'Pause autoplay'
};
;// CONCATENATED MODULE: ./src/js/constants/defaults.js
/**
 * Export default options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


var DEFAULTS = {
  /**
   * Determine a slider type.
   * - 'slide': Regular slider.
   * - 'loop' : Carousel slider.
   * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
   *
   * @type {string}
   */
  type: 'slide',

  /**
   * Whether to rewind a slider before the first slide or after the last one.
   * In "loop" mode, this option is ignored.
   *
   * @type {boolean}
   */
  rewind: false,

  /**
   * Transition speed in milliseconds.
   *
   * @type {number}
   */
  speed: 400,

  /**
   * Transition speed on rewind in milliseconds.
   *
   * @type {number}
   */
  rewindSpeed: 0,

  /**
   * Whether to prevent any actions while a slider is transitioning.
   * If false, navigation, drag and swipe work while the slider is running.
   * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Define slider max width.
   *
   * @type {number}
   */
  width: 0,

  /**
   * Define slider height.
   *
   * @type {number}
   */
  height: 0,

  /**
   * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
   * perPage number will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedWidth: 0,

  /**
   * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
   * heightRatio option will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedHeight: 0,

  /**
   * Determine height of slides by ratio to a slider width.
   * This will be ignored when the fixedHeight is provided.
   *
   * @type {number}
   */
  heightRatio: 0,

  /**
   * If true, slide width will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoWidth: false,

  /**
   * If true, slide height will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoHeight: false,

  /**
   * Determine how many slides should be displayed per page.
   *
   * @type {number}
   */
  perPage: 1,

  /**
   * Determine how many slides should be moved when a slider goes to next or perv.
   *
   * @type {number}
   */
  perMove: 0,

  /**
   * Determine manually how many clones should be generated on the left and right side.
   * The total number of clones will be twice of this number.
   *
   * @type {number}
   */
  clones: 0,

  /**
   * Start index.
   *
   * @type {number}
   */
  start: 0,

  /**
   * Determine which slide should be focused if there are multiple slides in a page.
   * A string "center" is acceptable for centering slides.
   *
   * @type {boolean|number|string}
   */
  focus: false,

  /**
   * Gap between slides. CSS format is allowed such as 1em.
   *
   * @type {number|string}
   */
  gap: 0,

  /**
   * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
   * Give a single value to set a same size for both sides or
   * do an object for different sizes.
   * Also, CSS format is allowed such as 1em.
   *
   * @example
   * - 10: Number
   * - '1em': CSS format.
   * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
   * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
   *
   * @type {number|string|Object}
   */
  padding: 0,

  /**
   * Whether to append arrows.
   *
   * @type {boolean}
   */
  arrows: true,

  /**
   * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
   *
   * @type {string}
   */
  arrowPath: '',

  /**
   * Whether to append pagination(indicator dots) or not.
   *
   * @type {boolean}
   */
  pagination: true,

  /**
   * Activate autoplay.
   *
   * @type {boolean}
   */
  autoplay: false,

  /**
   * Autoplay interval in milliseconds.
   *
   * @type {number}
   */
  interval: 5000,

  /**
   * Whether to stop autoplay when a slider is hovered.
   *
   * @type {boolean}
   */
  pauseOnHover: true,

  /**
   * Whether to stop autoplay when a slider elements are focused.
   * True is recommended for accessibility.
   *
   * @type {boolean}
   */
  pauseOnFocus: true,

  /**
   * Whether to reset progress of the autoplay timer when resumed.
   *
   * @type {boolean}
   */
  resetProgress: true,

  /**
   * Loading images lazily.
   * Image src must be provided by a data-splide-lazy attribute.
   *
   * - false: Do nothing.
   * - 'nearby': Only images around an active slide will be loaded.
   * - 'sequential': All images will be sequentially loaded.
   *
   * @type {boolean|string}
   */
  lazyLoad: false,

  /**
   * This option works only when a lazyLoad option is "nearby".
   * Determine how many pages(not slides) around an active slide should be loaded beforehand.
   *
   * @type {number}
   */
  preloadPages: 1,

  /**
   * Easing for CSS transition. For example, linear, ease or cubic-bezier().
   *
   * @type {string}
   */
  easing: 'cubic-bezier(.42,.65,.27,.99)',

  /**
   * Whether to enable keyboard shortcuts
   * - true or 'global': Listen to keydown event of the document.
   * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
   * - false: Disable keyboard shortcuts.
   *
   * @type {boolean|string}
   */
  keyboard: 'global',

  /**
   * Whether to allow mouse drag and touch swipe.
   *
   * @type {boolean}
   */
  drag: true,

  /**
   * The angle threshold for drag.
   * The slider starts moving only when the drag angle is less than this threshold.
   *
   * @type {number}
   */
  dragAngleThreshold: 30,

  /**
   * Distance threshold for determining if the action is "flick" or "swipe".
   * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
   *
   * @type {number}
   */
  swipeDistanceThreshold: 150,

  /**
   * Velocity threshold for determining if the action is "flick" or "swipe".
   * Around 0.5 is recommended.
   *
   * @type {number}
   */
  flickVelocityThreshold: .6,

  /**
   * Determine power of flick. The larger number this is, the farther a slider runs by flick.
   * Around 500 is recommended.
   *
   * @type {number}
   */
  flickPower: 600,

  /**
   * Limit a number of pages to move by flick.
   *
   * @type {number}
   */
  flickMaxPages: 1,

  /**
   * Slider direction.
   * - 'ltr': Left to right.
   * - 'rtl': Right to left.
   * - 'ttb': Top to bottom.
   *
   * @type {string}
   */
  direction: 'ltr',

  /**
   * Set img src to background-image of its parent element.
   * Images with various sizes can be displayed as same dimension without cropping work.
   * fixedHeight or heightRatio is required.
   *
   * @type {boolean}
   */
  cover: false,

  /**
   * Whether to enable accessibility(aria and screen reader texts) or not.
   *
   * @type {boolean}
   */
  accessibility: true,

  /**
   * Whether to add tabindex="0" to visible slides or not.
   *
   * @type {boolean}
   */
  slideFocus: true,

  /**
   * Determine if a slider is navigation for another.
   * Use "sync" API to synchronize two sliders.
   *
   * @type {boolean}
   */
  isNavigation: false,

  /**
   * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
   *
   * @type {boolean}
   */
  trimSpace: true,

  /**
   * The "is-active" class is added after transition as default.
   * If true, it will be added before move.
   *
   * @type {boolean}
   */
  updateOnMove: false,

  /**
   * Throttle duration in milliseconds for the resize event.
   *
   * @type {number}
   */
  throttle: 100,

  /**
   * Whether to destroy a slider or not.
   *
   * @type {boolean}
   */
  destroy: false,

  /**
   * Options for specific breakpoints.
   *
   * @example
   * {
   *   1000: {
   *     perPage: 3,
   *     gap: 20
   *   },
   *   600: {
   *     perPage: 1,
   *     gap: 5,
   *   }
   * }
   *
   * @type {boolean|Object}
   */
  breakpoints: false,

  /**
   * Collection of class names.
   *
   * @see ./classes.js
   *
   * @type {Object}
   */
  classes: ELEMENT_CLASSES,

  /**
   * Collection of i18n texts.
   *
   * @see ./i18n.js
   *
   * @type {Object}
   */
  i18n: I18N
};
;// CONCATENATED MODULE: ./src/js/constants/states.js
/**
 * Export state constants.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Splide has been just created.
 *
 * @type {number}
 */
var CREATED = 1;
/**
 * All components have been mounted and initialized.
 *
 * @type {number}
 */

var MOUNTED = 2;
/**
 * Splide is ready for transition.
 *
 * @type {number}
 */

var IDLE = 3;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var MOVING = 4;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var DESTROYED = 5;
;// CONCATENATED MODULE: ./src/js/splide.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The main class for applying Splide to an element.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */








/**
 * The main class for applying Splide to an element,
 * providing some APIs to control the behavior.
 */

var Splide = /*#__PURE__*/function () {
  /**
   * Splide constructor.
   *
   * @throws {Error} When the given root element or selector is invalid.
   *
   * @param {Element|string}  root       - A selector for a root element or an element itself.
   * @param {Object}          options    - Optional. Options to change default behaviour.
   * @param {Object}          Components - Optional. Components.
   */
  function Splide(root, options, Components) {
    if (options === void 0) {
      options = {};
    }

    if (Components === void 0) {
      Components = {};
    }

    this.root = root instanceof Element ? root : document.querySelector(root);
    exist(this.root, 'An invalid element/selector was given.');
    this.Components = null;
    this.Event = core_event();
    this.State = state(CREATED);
    this.STATES = states_namespaceObject;
    this._o = merge(DEFAULTS, options);
    this._i = 0;
    this._c = Components;
    this._e = {}; // Extensions

    this._t = null; // Transition
  }
  /**
   * Compose and mount components.
   *
   * @param {Object}   Extensions - Optional. Additional components.
   * @param {function} Transition - Optional. Set a custom transition component.
   *
   * @return {Splide|undefined} - This instance or undefined if an exception occurred.
   */


  var _proto = Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    if (Extensions === void 0) {
      Extensions = this._e;
    }

    if (Transition === void 0) {
      Transition = this._t;
    }

    // Reset the state.
    this.State.set(CREATED);
    this._e = Extensions;
    this._t = Transition;
    this.Components = compose(this, merge(this._c, Extensions), Transition);

    try {
      each(this.Components, function (component, key) {
        var required = component.required;

        if (required === undefined || required) {
          component.mount && component.mount();
        } else {
          delete _this.Components[key];
        }
      });
    } catch (e) {
      error(e.message);
      return;
    }

    var State = this.State;
    State.set(MOUNTED);
    each(this.Components, function (component) {
      component.mounted && component.mounted();
    });
    this.emit('mounted');
    State.set(IDLE);
    this.emit('ready');
    applyStyle(this.root, {
      visibility: 'visible'
    });
    this.on('move drag', function () {
      return State.set(MOVING);
    }).on('moved dragged', function () {
      return State.set(IDLE);
    });
    return this;
  }
  /**
   * Set sync target.
   *
   * @param {Splide} splide - A Splide instance.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.sync = function sync(splide) {
    this.sibling = splide;
    return this;
  }
  /**
   * Register callback fired on the given event(s).
   *
   * @param {string}   events  - An event name. Use space to separate multiple events.
   *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
   * @param {function} handler - A callback function.
   * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
   * @param {Object}   options - Optional. Options for addEventListener.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.on = function on(events, handler, elm, options) {
    if (elm === void 0) {
      elm = null;
    }

    if (options === void 0) {
      options = {};
    }

    this.Event.on(events, handler, elm, options);
    return this;
  }
  /**
   * Unsubscribe the given event.
   *
   * @param {string}  events - A event name.
   * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.off = function off(events, elm) {
    if (elm === void 0) {
      elm = null;
    }

    this.Event.off(events, elm);
    return this;
  }
  /**
   * Emit an event.
   *
   * @param {string} event - An event name.
   * @param {*}      args  - Any number of arguments passed to handlers.
   */
  ;

  _proto.emit = function emit(event) {
    var _this$Event;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

    return this;
  }
  /**
   * Go to the slide specified by the given control.
   *
   * @param {string|number} control - A control pattern.
   * @param {boolean}       wait    - Optional. Whether to wait for transition.
   */
  ;

  _proto.go = function go(control, wait) {
    if (wait === void 0) {
      wait = this.options.waitForTransition;
    }

    if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
      this.Components.Controller.go(control, false);
    }

    return this;
  }
  /**
   * Verify whether the slider type is the given one or not.
   *
   * @param {string} type - A slider type.
   *
   * @return {boolean} - True if the slider type is the provided type or false if not.
   */
  ;

  _proto.is = function is(type) {
    return type === this._o.type;
  }
  /**
   * Insert a slide.
   *
   * @param {Element|string} slide - A slide element to be added.
   * @param {number}         index - A slide will be added at the position.
   */
  ;

  _proto.add = function add(slide, index) {
    if (index === void 0) {
      index = -1;
    }

    this.Components.Elements.add(slide, index, this.refresh.bind(this));
    return this;
  }
  /**
   * Remove the slide designated by the index.
   *
   * @param {number} index - A slide index.
   */
  ;

  _proto.remove = function remove(index) {
    this.Components.Elements.remove(index);
    this.refresh();
    return this;
  }
  /**
   * Destroy all Slide objects and clones and recreate them again.
   */
  ;

  _proto.refresh = function refresh() {
    this.emit('refresh:before').emit('refresh').emit('resize');
    return this;
  }
  /**
   * Destroy the Splide.
   * "Completely" boolean is mainly for breakpoints.
   *
   * @param {boolean} completely - Destroy completely.
   */
  ;

  _proto.destroy = function destroy(completely) {
    var _this2 = this;

    if (completely === void 0) {
      completely = true;
    }

    // Postpone destroy because it should be done after mount.
    if (this.State.is(CREATED)) {
      this.on('ready', function () {
        return _this2.destroy(completely);
      });
      return;
    }

    values(this.Components).reverse().forEach(function (component) {
      component.destroy && component.destroy(completely);
    });
    this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

    this.Event.destroy();
    this.State.set(DESTROYED);
    return this;
  }
  /**
   * Return the current slide index.
   *
   * @return {number} - The current slide index.
   // */
  ;

  _createClass(Splide, [{
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Set the current slide index.
     *
     * @param {number|string} index - A new index.
     */
    ,
    set: function set(index) {
      this._i = parseInt(index);
    }
    /**
     * Return length of slides.
     * This is an alias of Elements.length.
     *
     * @return {number} - A number of slides.
     */

  }, {
    key: "length",
    get: function get() {
      return this.Components.Elements.length;
    }
    /**
     * Return options.
     *
     * @return {Object} - Options object.
     */

  }, {
    key: "options",
    get: function get() {
      return this._o;
    }
    /**
     * Set options with merging the given object to the current one.
     *
     * @param {Object} options - New options.
     */
    ,
    set: function set(options) {
      var created = this.State.is(CREATED);

      if (!created) {
        this.emit('update');
      }

      this._o = merge(this._o, options);

      if (!created) {
        this.emit('updated', this._o);
      }
    }
    /**
     * Return the class list.
     * This is an alias of Splide.options.classList.
     *
     * @return {Object} - An object containing all class list.
     */

  }, {
    key: "classes",
    get: function get() {
      return this._o.classes;
    }
    /**
     * Return the i18n strings.
     * This is an alias of Splide.options.i18n.
     *
     * @return {Object} - An object containing all i18n strings.
     */

  }, {
    key: "i18n",
    get: function get() {
      return this._o.i18n;
    }
  }]);

  return Splide;
}();


;// CONCATENATED MODULE: ./src/js/components/options/index.js
/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const options = (function (Splide) {
  /**
   * Retrieve options from the data attribute.
   * Note that IE10 doesn't support dataset property.
   *
   * @type {string}
   */
  var options = getAttribute(Splide.root, 'data-splide');

  if (options) {
    try {
      Splide.options = JSON.parse(options);
    } catch (e) {
      error(e.message);
    }
  }

  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      if (Splide.State.is(CREATED)) {
        Splide.index = Splide.options.start;
      }
    }
  };
});
;// CONCATENATED MODULE: ./src/js/constants/directions.js
/**
 * Export layout modes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Enumerate slides from left to right.
 *
 * @type {string}
 */
var LTR = 'ltr';
/**
 * Enumerate slides from right to left.
 *
 * @type {string}
 */

var RTL = 'rtl';
/**
 * Enumerate slides in a col.
 *
 * @type {string}
 */

var TTB = 'ttb';
;// CONCATENATED MODULE: ./src/js/components/elements/slide.js
/**
 * The sub component for handling each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */






/**
 * Events for restoring original styles.
 *
 * @type {string}
 */

var STYLE_RESTORE_EVENTS = 'update.slide';
/**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */

/* harmony default export */ const elements_slide = (function (Splide, index, realIndex, slide) {
  /**
   * Whether to update "is-active" class before or after transition.
   *
   * @type {boolean}
   */
  var updateOnMove = Splide.options.updateOnMove;
  /**
   * Events when the slide status is updated.
   * Append a namespace to remove listeners later.
   *
   * @type {string}
   */

  var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
  /**
   * Slide sub component object.
   *
   * @type {Object}
   */

  var Slide = {
    /**
     * Slide element.
     *
     * @type {Element}
     */
    slide: slide,

    /**
     * Slide index.
     *
     * @type {number}
     */
    index: index,

    /**
     * Real index for clones.
     *
     * @type {number}
     */
    realIndex: realIndex,

    /**
     * Container element if available.
     *
     * @type {Element|undefined}
     */
    container: child(slide, Splide.classes.container),

    /**
     * Whether this is a cloned slide or not.
     *
     * @type {boolean}
     */
    isClone: realIndex > -1,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (!this.isClone) {
        slide.id = Splide.root.id + "-slide" + pad(index + 1);
      }

      Splide.on(STATUS_UPDATE_EVENTS, function () {
        return _this.update();
      }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
        return Splide.emit('click', _this);
      }, slide);
      /*
       * Add "is-active" class to a clone element temporarily
       * and it will be removed on "moved" event.
       */

      if (updateOnMove) {
        Splide.on('move.slide', function (newIndex) {
          if (newIndex === realIndex) {
            _update(true, false);
          }
        });
      } // Make sure the slide is shown.


      applyStyle(slide, {
        display: ''
      }); // Hold the original styles.

      this.styles = getAttribute(slide, 'style') || '';
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
      removeClass(slide, values(STATUS_CLASSES));
      restoreStyles();
      removeAttribute(this.container, 'style');
    },

    /**
     * Update active and visible status.
     */
    update: function update() {
      _update(this.isActive(), false);

      _update(this.isVisible(), true);
    },

    /**
     * Check whether this slide is active or not.
     *
     * @return {boolean} - True if the slide is active or false if not.
     */
    isActive: function isActive() {
      return Splide.index === index;
    },

    /**
     * Check whether this slide is visible in the viewport or not.
     *
     * @return {boolean} - True if the slide is visible or false if not.
     */
    isVisible: function isVisible() {
      var active = this.isActive();

      if (Splide.is(FADE) || active) {
        return active;
      }

      var ceil = Math.ceil;
      var trackRect = getRect(Splide.Components.Elements.track);
      var slideRect = getRect(slide);

      if (Splide.options.direction === TTB) {
        return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
      }

      return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
    },

    /**
     * Calculate how far this slide is from another slide and
     * return true if the distance is within the given number.
     *
     * @param {number} from   - Index of a target slide.
     * @param {number} within - True if the slide is within this number.
     *
     * @return {boolean} - True if the slide is within the number or false otherwise.
     */
    isWithin: function isWithin(from, within) {
      var diff = Math.abs(from - index);

      if (!Splide.is(SLIDE) && !this.isClone) {
        diff = Math.min(diff, Splide.length - diff);
      }

      return diff < within;
    }
  };
  /**
   * Update classes for activity or visibility.
   *
   * @param {boolean} active        - Is active/visible or not.
   * @param {boolean} forVisibility - Toggle classes for activity or visibility.
   */

  function _update(active, forVisibility) {
    var type = forVisibility ? 'visible' : 'active';
    var className = STATUS_CLASSES[type];

    if (active) {
      addClass(slide, className);
      Splide.emit("" + type, Slide);
    } else {
      if (hasClass(slide, className)) {
        removeClass(slide, className);
        Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
      }
    }
  }
  /**
   * Restore the original styles.
   */


  function restoreStyles() {
    setAttribute(slide, 'style', Slide.styles);
  }

  return Slide;
});
;// CONCATENATED MODULE: ./src/js/components/elements/index.js
/**
 * The component for main elements.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





/**
 * The property name for UID stored in a window object.
 *
 * @type {string}
 */

var UID_NAME = 'uid';
/**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const components_elements = (function (Splide, Components) {
  /**
   * Hold the root element.
   *
   * @type {Element}
   */
  var root = Splide.root;
  /**
   * Hold the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Store Slide objects.
   *
   * @type {Array}
   */

  var Slides = [];
  /*
   * Assign unique ID to the root element if it doesn't have the one.
   * Note that IE doesn't support padStart() to fill the uid by 0.
   */

  if (!root.id) {
    window.splide = window.splide || {};
    var uid = window.splide[UID_NAME] || 0;
    window.splide[UID_NAME] = ++uid;
    root.id = "splide" + pad(uid);
  }
  /**
   * Elements component object.
   *
   * @type {Object}
   */


  var Elements = {
    /**
     * Called when the component is mounted.
     * Collect main elements and store them as member properties.
     */
    mount: function mount() {
      var _this = this;

      this.init();
      Splide.on('refresh', function () {
        _this.destroy();

        _this.init();
      }).on('updated', function () {
        removeClass(root, getClasses());
        addClass(root, getClasses());
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Slides.forEach(function (Slide) {
        Slide.destroy();
      });
      Slides = [];
      removeClass(root, getClasses());
    },

    /**
     * Initialization.
     */
    init: function init() {
      var _this2 = this;

      collect();
      addClass(root, getClasses());
      this.slides.forEach(function (slide, index) {
        _this2.register(slide, index, -1);
      });
    },

    /**
     * Register a slide to create a Slide object and handle its behavior.
     *
     * @param {Element} slide     - A slide element.
     * @param {number}  index     - A unique index. This can be negative.
     * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
     */
    register: function register(slide, index, realIndex) {
      var SlideObject = elements_slide(Splide, index, realIndex, slide);
      SlideObject.mount();
      Slides.push(SlideObject);
    },

    /**
     * Return the Slide object designated by the index.
     * Note that "find" is not supported by IE.
     *
     * @return {Object|undefined} - A Slide object if available. Undefined if not.
     */
    getSlide: function getSlide(index) {
      return Slides.filter(function (Slide) {
        return Slide.index === index;
      })[0];
    },

    /**
     * Return all Slide objects.
     *
     * @param {boolean} includeClones - Whether to include cloned slides or not.
     *
     * @return {Object[]} - Slide objects.
     */
    getSlides: function getSlides(includeClones) {
      return includeClones ? Slides : Slides.filter(function (Slide) {
        return !Slide.isClone;
      });
    },

    /**
     * Return Slide objects belonging to the given page.
     *
     * @param {number} page - A page number.
     *
     * @return {Object[]} - An array containing Slide objects.
     */
    getSlidesByPage: function getSlidesByPage(page) {
      var idx = Components.Controller.toIndex(page);
      var options = Splide.options;
      var max = options.focus !== false ? 1 : options.perPage;
      return Slides.filter(function (_ref) {
        var index = _ref.index;
        return idx <= index && index < idx + max;
      });
    },

    /**
     * Insert a slide to a slider.
     * Need to refresh Splide after adding a slide.
     *
     * @param {Node|string} slide    - A slide element to be added.
     * @param {number}      index    - A slide will be added at the position.
     * @param {Function}    callback - Called right after the slide is added to the DOM tree.
     */
    add: function add(slide, index, callback) {
      if (typeof slide === 'string') {
        slide = domify(slide);
      }

      if (slide instanceof Element) {
        var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

        applyStyle(slide, {
          display: 'none'
        });

        if (ref) {
          before(slide, ref);
          this.slides.splice(index, 0, slide);
        } else {
          append(this.list, slide);
          this.slides.push(slide);
        }

        loaded(slide, function () {
          callback && callback(slide);
        });
      }
    },

    /**
     * Remove a slide from a slider.
     * Need to refresh Splide after removing a slide.
     *
     * @param index - Slide index.
     */
    remove: function remove(index) {
      dom_remove(this.slides.splice(index, 1)[0]);
    },

    /**
     * Trigger the provided callback for each Slide object.
     *
     * @param {Function} callback - A callback function. The first argument will be the Slide object.
     */
    each: function each(callback) {
      Slides.forEach(callback);
    },

    /**
     * Return slides length without clones.
     *
     * @return {number} - Slide length.
     */
    get length() {
      return this.slides.length;
    },

    /**
     * Return "SlideObjects" length including clones.
     *
     * @return {number} - Slide length including clones.
     */
    get total() {
      return Slides.length;
    }

  };
  /**
   * Collect elements.
   */

  function collect() {
    Elements.slider = child(root, classes.slider);
    Elements.track = find(root, "." + classes.track);
    Elements.list = child(Elements.track, classes.list);
    exist(Elements.track && Elements.list, 'Track or list was not found.');
    Elements.slides = children(Elements.list, classes.slide);
    var arrows = findParts(classes.arrows);
    Elements.arrows = {
      prev: find(arrows, "." + classes.prev),
      next: find(arrows, "." + classes.next)
    };
    var autoplay = findParts(classes.autoplay);
    Elements.bar = find(findParts(classes.progress), "." + classes.bar);
    Elements.play = find(autoplay, "." + classes.play);
    Elements.pause = find(autoplay, "." + classes.pause);
    Elements.track.id = Elements.track.id || root.id + "-track";
    Elements.list.id = Elements.list.id || root.id + "-list";
  }
  /**
   * Return class names for the root element.
   */


  function getClasses() {
    var rootClass = classes.root;
    var options = Splide.options;
    return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
  }
  /**
   * Find parts only from children of the root or track.
   *
   * @return {Element} - A found element or undefined.
   */


  function findParts(className) {
    return child(root, className) || child(Elements.slider, className);
  }

  return Elements;
});
;// CONCATENATED MODULE: ./src/js/components/controller/index.js
/**
 * The component for controlling the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



var floor = Math.floor;
/**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const controller = (function (Splide, Components) {
  /**
   * Store current options.
   *
   * @type {Object}
   */
  var options;
  /**
   * True if the slide is LOOP mode.
   *
   * @type {boolean}
   */

  var isLoop;
  /**
   * Controller component object.
   *
   * @type {Object}
   */

  var Controller = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      options = Splide.options;
      isLoop = Splide.is(LOOP);
      bind();
    },

    /**
     * Make track run by the given control.
     * - "+{i}" : Increment the slide index by i.
     * - "-{i}" : Decrement the slide index by i.
     * - "{i}"  : Go to the slide whose index is i.
     * - ">"    : Go to next page.
     * - "<"    : Go to prev page.
     * - ">{i}" : Go to page i.
     *
     * @param {string|number} control  - A control pattern.
     * @param {boolean}       silently - Go to the destination without event emission.
     */
    go: function go(control, silently) {
      var destIndex = this.trim(this.parse(control));
      Components.Track.go(destIndex, this.rewind(destIndex), silently);
    },

    /**
     * Parse the given control and return the destination index for the track.
     *
     * @param {string} control - A control target pattern.
     *
     * @return {number} - A parsed target.
     */
    parse: function parse(control) {
      var index = Splide.index;
      var matches = String(control).match(/([+\-<>]+)(\d+)?/);
      var indicator = matches ? matches[1] : '';
      var number = matches ? parseInt(matches[2]) : 0;

      switch (indicator) {
        case '+':
          index += number || 1;
          break;

        case '-':
          index -= number || 1;
          break;

        case '>':
        case '<':
          index = parsePage(number, index, indicator === '<');
          break;

        default:
          index = parseInt(control);
      }

      return index;
    },

    /**
     * Compute index from the given page number.
     *
     * @param {number} page - Page number.
     *
     * @return {number} - A computed page number.
     */
    toIndex: function toIndex(page) {
      if (hasFocus()) {
        return page;
      }

      var length = Splide.length;
      var perPage = options.perPage;
      var index = page * perPage;
      index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

      if (length - perPage <= index && index < length) {
        index = length - perPage;
      }

      return index;
    },

    /**
     * Compute page number from the given slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - A computed page number.
     */
    toPage: function toPage(index) {
      if (hasFocus()) {
        return index;
      }

      var length = Splide.length;
      var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

      if (length - perPage <= index && index < length) {
        return floor((length - 1) / perPage);
      }

      return floor(index / perPage);
    },

    /**
     * Trim the given index according to the current mode.
     * Index being returned could be less than 0 or greater than the length in Loop mode.
     *
     * @param {number} index - An index being trimmed.
     *
     * @return {number} - A trimmed index.
     */
    trim: function trim(index) {
      if (!isLoop) {
        index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
      }

      return index;
    },

    /**
     * Rewind the given index if it's out of range.
     *
     * @param {number} index - An index.
     *
     * @return {number} - A rewound index.
     */
    rewind: function rewind(index) {
      var edge = this.edgeIndex;

      if (isLoop) {
        while (index > edge) {
          index -= edge + 1;
        }

        while (index < 0) {
          index += edge + 1;
        }
      } else {
        if (index > edge) {
          index = 0;
        } else if (index < 0) {
          index = edge;
        }
      }

      return index;
    },

    /**
     * Check if the direction is "rtl" or not.
     *
     * @return {boolean} - True if "rtl" or false if not.
     */
    isRtl: function isRtl() {
      return options.direction === RTL;
    },

    /**
     * Return the page length.
     *
     * @return {number} - Max page number.
     */
    get pageLength() {
      var length = Splide.length;
      return hasFocus() ? length : Math.ceil(length / options.perPage);
    },

    /**
     * Return the edge index.
     *
     * @return {number} - Edge index.
     */
    get edgeIndex() {
      var length = Splide.length;

      if (!length) {
        return 0;
      }

      if (hasFocus() || options.isNavigation || isLoop) {
        return length - 1;
      }

      return length - options.perPage;
    },

    /**
     * Return the index of the previous slide.
     *
     * @return {number} - The index of the previous slide if available. -1 otherwise.
     */
    get prevIndex() {
      var prev = Splide.index - 1;

      if (isLoop || options.rewind) {
        prev = this.rewind(prev);
      }

      return prev > -1 ? prev : -1;
    },

    /**
     * Return the index of the next slide.
     *
     * @return {number} - The index of the next slide if available. -1 otherwise.
     */
    get nextIndex() {
      var next = Splide.index + 1;

      if (isLoop || options.rewind) {
        next = this.rewind(next);
      }

      return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
    }

  };
  /**
   * Listen to some events.
   */

  function bind() {
    Splide.on('move', function (newIndex) {
      Splide.index = newIndex;
    }).on('updated refresh', function (newOptions) {
      options = newOptions || options;
      Splide.index = between(Splide.index, 0, Controller.edgeIndex);
    });
  }
  /**
   * Verify if the focus option is available or not.
   *
   * @return {boolean} - True if a slider has the focus option.
   */


  function hasFocus() {
    return options.focus !== false;
  }
  /**
   * Return the next or previous page index computed by the page number and current index.
   *
   * @param {number}  number - Specify the page number.
   * @param {number}  index  - Current index.
   * @param {boolean} prev   - Prev or next.
   *
   * @return {number} - Slide index.
   */


  function parsePage(number, index, prev) {
    if (number > -1) {
      return Controller.toIndex(number);
    }

    var perMove = options.perMove;
    var sign = prev ? -1 : 1;

    if (perMove) {
      return index + perMove * sign;
    }

    return Controller.toIndex(Controller.toPage(index) + sign);
  }

  return Controller;
});
;// CONCATENATED MODULE: ./src/js/components/track/index.js
/**
 * The component for moving list in the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var abs = Math.abs;
/**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const track = (function (Splide, Components) {
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */
  var Layout;
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */

  var Elements;
  /**
   * Store the list element.
   *
   * @type {Element}
   */

  var list;
  /**
   * Whether the current direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Whether the slider type is FADE or not.
   *
   * @type {boolean}
   */

  var isFade = Splide.is(FADE);
  /**
   * Whether the slider direction is RTL or not.
   *
   * @type {boolean}
   */

  var isRTL = Splide.options.direction === RTL;
  /**
   * This will be true while transitioning from the last index to the first one.
   *
   * @type {boolean}
   */

  var isLoopPending = false;
  /**
   * Sign for the direction. Only RTL mode uses the positive sign.
   *
   * @type {number}
   */

  var sign = isRTL ? 1 : -1;
  /**
   * Track component object.
   *
   * @type {Object}
   */

  var Track = {
    /**
     * Make public the sign defined locally.
     *
     * @type {number}
     */
    sign: sign,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Elements = Components.Elements;
      Layout = Components.Layout;
      list = Elements.list;
    },

    /**
     * Called after the component is mounted.
     * The resize event must be registered after the Layout's one is done.
     */
    mounted: function mounted() {
      var _this = this;

      if (!isFade) {
        this.jump(0);
        Splide.on('mounted resize updated', function () {
          _this.jump(Splide.index);
        });
      }
    },

    /**
     * Go to the given destination index.
     * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
     *
     * @param {number}  destIndex - A destination index.
     *                              This can be negative or greater than slides length for reaching clones.
     * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
     * @param {boolean} silently  - If true, suppress emitting events.
     */
    go: function go(destIndex, newIndex, silently) {
      var newPosition = getTrimmedPosition(destIndex);
      var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

      if (Splide.State.is(MOVING) && isLoopPending) {
        return;
      }

      isLoopPending = destIndex !== newIndex;

      if (!silently) {
        Splide.emit('move', newIndex, prevIndex, destIndex);
      }

      if (Math.abs(newPosition - this.position) >= 1 || isFade) {
        Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        });
      } else {
        if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
          Components.Controller.go(destIndex + destIndex - prevIndex, silently);
        } else {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        }
      }
    },

    /**
     * Move the track to the specified index.
     *
     * @param {number} index - A destination index where the track jumps.
     */
    jump: function jump(index) {
      this.translate(getTrimmedPosition(index));
    },

    /**
     * Set the list position by CSS translate property.
     *
     * @param {number} position - A new position value.
     */
    translate: function translate(position) {
      applyStyle(list, {
        transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
      });
    },

    /**
     * Cancel the transition and set the list position.
     * Also, loop the slider if necessary.
     */
    cancel: function cancel() {
      if (Splide.is(LOOP)) {
        this.shift();
      } else {
        // Ensure the current position.
        this.translate(this.position);
      }

      applyStyle(list, {
        transition: ''
      });
    },

    /**
     * Shift the slider if it exceeds borders on the edge.
     */
    shift: function shift() {
      var position = abs(this.position);
      var left = abs(this.toPosition(0));
      var right = abs(this.toPosition(Splide.length));
      var innerSize = right - left;

      if (position < left) {
        position += innerSize;
      } else if (position > right) {
        position -= innerSize;
      }

      this.translate(sign * position);
    },

    /**
     * Trim redundant spaces on the left or right edge if necessary.
     *
     * @param {number} position - Position value to be trimmed.
     *
     * @return {number} - Trimmed position.
     */
    trim: function trim(position) {
      if (!Splide.options.trimSpace || Splide.is(LOOP)) {
        return position;
      }

      var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
      return between(position, edge, 0);
    },

    /**
     * Calculate the closest slide index from the given position.
     *
     * @param {number} position - A position converted to an slide index.
     *
     * @return {number} - The closest slide index.
     */
    toIndex: function toIndex(position) {
      var _this2 = this;

      var index = 0;
      var minDistance = Infinity;
      Elements.getSlides(true).forEach(function (Slide) {
        var slideIndex = Slide.index;
        var distance = abs(_this2.toPosition(slideIndex) - position);

        if (distance < minDistance) {
          minDistance = distance;
          index = slideIndex;
        }
      });
      return index;
    },

    /**
     * Return coordinates object by the given position.
     *
     * @param {number} position - A position value.
     *
     * @return {Object} - A coordinates object.
     */
    toCoord: function toCoord(position) {
      return {
        x: isVertical ? 0 : position,
        y: isVertical ? position : 0
      };
    },

    /**
     * Calculate the track position by a slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {Object} - Calculated position.
     */
    toPosition: function toPosition(index) {
      var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
      return sign * (position + this.offset(index));
    },

    /**
     * Return the current offset value, considering direction.
     *
     * @return {number} - Offset amount.
     */
    offset: function offset(index) {
      var focus = Splide.options.focus;
      var slideSize = Layout.slideSize(index);

      if (focus === 'center') {
        return -(Layout.size - slideSize) / 2;
      }

      return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
    },

    /**
     * Return the current position.
     * This returns the correct position even while transitioning by CSS.
     *
     * @return {number} - Current position.
     */
    get position() {
      var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
      return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
    }

  };
  /**
   * Called whenever slides arrive at a destination.
   *
   * @param {number}  destIndex - A destination index.
   * @param {number}  newIndex  - A new index.
   * @param {number}  prevIndex - A previous index.
   * @param {boolean} silently  - If true, suppress emitting events.
   */

  function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
    applyStyle(list, {
      transition: ''
    });
    isLoopPending = false;

    if (!isFade) {
      Track.jump(newIndex);
    }

    if (!silently) {
      Splide.emit('moved', newIndex, prevIndex, destIndex);
    }
  }
  /**
   * Convert index to the trimmed position.
   *
   * @return {number} - Trimmed position.
   */


  function getTrimmedPosition(index) {
    return Track.trim(Track.toPosition(index));
  }

  return Track;
});
;// CONCATENATED MODULE: ./src/js/components/clones/index.js
/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */




/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const clones = (function (Splide, Components) {
  /**
   * Store information of all clones.
   *
   * @type {Array}
   */
  var clones = [];
  /**
   * Store the current clone count on one side.
   *
   * @type {number}
   */

  var cloneCount = 0;
  /**
   * Keep Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Clones component object.
   *
   * @type {Object}
   */

  var Clones = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (Splide.is(LOOP)) {
        init();
        Splide.on('refresh:before', function () {
          _this.destroy();
        }).on('refresh', init).on('resize', function () {
          if (cloneCount !== getCloneCount()) {
            // Destroy before refresh not to collect clones by the Elements component.
            _this.destroy();

            Splide.refresh();
          }
        });
      }
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      dom_remove(clones);
      clones = [];
    },

    /**
     * Return all clones.
     *
     * @return {Element[]} - Cloned elements.
     */
    get clones() {
      return clones;
    },

    /**
     * Return clone length.
     *
     * @return {number} - A length of clones.
     */
    get length() {
      return clones.length;
    }

  };
  /**
   * Initialization.
   */

  function init() {
    Clones.destroy();
    cloneCount = getCloneCount();
    generateClones(cloneCount);
  }
  /**
   * Generate and append/prepend clones.
   *
   * @param {number} count - The half number of clones.
   */


  function generateClones(count) {
    var length = Elements.length,
        register = Elements.register;

    if (length) {
      var slides = Elements.slides;

      while (slides.length < count) {
        slides = slides.concat(slides);
      } // Clones after the last element.


      slides.slice(0, count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        append(Elements.list, clone);
        clones.push(clone);
        register(clone, index + length, index % length);
      }); // Clones before the first element.

      slides.slice(-count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        before(clone, slides[0]);
        clones.push(clone);
        register(clone, index - count, (length + index - count % length) % length);
      });
    }
  }
  /**
   * Return half count of clones to be generated.
   * Clone count is determined by:
   * - "clones" value in the options.
   * - Number of slides that can be placed in a view in "fixed" mode.
   * - Max pages a flick action can move.
   * - Whether the slide length is enough for perPage.
   *
   * @return {number} - Count for clones.
   */


  function getCloneCount() {
    var options = Splide.options;

    if (options.clones) {
      return options.clones;
    } // Use the slide length in autoWidth mode because the number cannot be calculated.


    var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
    var dimension = options.direction === TTB ? 'Height' : 'Width';
    var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

    if (fixedSize) {
      // Roughly calculate the count. This needs not to be strict.
      baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
    }

    return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
  }
  /**
   * Clone deeply the given element.
   *
   * @param {Element} elm - An element being duplicated.
   *
   * @return {Node} - A cloned node(element).
   */


  function cloneDeeply(elm) {
    var clone = elm.cloneNode(true);
    addClass(clone, Splide.classes.clone); // ID should not be duplicated.

    removeAttribute(clone, 'id');
    return clone;
  }

  return Clones;
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/horizontal.js
/**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const horizontal = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options = Splide.options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

    /**
     * Always 0 because the height will be determined by inner contents.
     *
     * @type {number}
     */
    height: 0,

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var left = toPixel(root, padding.left || padding);
      var right = toPixel(root, padding.right || padding);
      this.padding = {
        left: left,
        right: right
      };
      applyStyle(track, {
        paddingLeft: unit(left),
        paddingRight: unit(right)
      });
    },

    /**
     * Return total width from the left of the list to the right of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
     *
     * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
     */
    totalWidth: function totalWidth(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);
      var width = 0;

      if (Slide) {
        var slideRect = getRect(Slide.slide);
        var listRect = getRect(Elements.list);

        if (options.direction === RTL) {
          width = listRect.right - slideRect.left;
        } else {
          width = slideRect.right - listRect.left;
        }

        width += this.gap;
      }

      return width;
    },

    /**
     * Return the slide width in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth(index) {
      if (options.autoWidth) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetWidth : 0;
      }

      var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
      return toPixel(root, width);
    },

    /**
     * Return the slide height in px.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight() {
      var height = options.height || options.fixedHeight || this.width * options.heightRatio;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth - this.padding.left - this.padding.right;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/vertical.js
/**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const vertical = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'marginBottom',

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var top = toPixel(root, padding.top || padding);
      var bottom = toPixel(root, padding.bottom || padding);
      this.padding = {
        top: top,
        bottom: bottom
      };
      applyStyle(track, {
        paddingTop: unit(top),
        paddingBottom: unit(bottom)
      });
    },

    /**
     * Return total height from the top of the list to the bottom of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
     *
     * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
     */
    totalHeight: function totalHeight(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);

      if (Slide) {
        return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
      }

      return 0;
    },

    /**
     * Return the slide width in px.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth() {
      return toPixel(root, options.fixedWidth || this.width);
    },

    /**
     * Return the slide height in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight(index) {
      if (options.autoHeight) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetHeight : 0;
      }

      var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth;
    },

    /**
     * Return slide height without padding.
     *
     * @return {number} - Slider height.
     */
    get height() {
      var height = options.height || this.width * options.heightRatio;
      exist(height, '"height" or "heightRatio" is missing.');
      return toPixel(root, height) - this.padding.top - this.padding.bottom;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/utils/time.js
/**
 * A package of utility functions related with time.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Simple throttle function that controls how often the given function is executed.
 *
 * @param {function} func - A function to be throttled.
 * @param {number}   wait - Time in millisecond for interval of execution.
 *
 * @return {Function} - A debounced function.
 */
function throttle(func, wait) {
  var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func();
        timeout = null;
      }, wait);
    }
  };
}
/**
 * Custom setInterval function that provides progress rate as callback.
 *
 * @param {function} callback - A callback function fired every time the interval time passes.
 * @param {number}   interval - Interval duration in milliseconds.
 * @param {function} progress - A callback function fired whenever the progress goes.
 *
 * @return {Object} - An object containing play() and pause() functions.
 */

function createInterval(callback, interval, progress) {
  var _window = window,
      requestAnimationFrame = _window.requestAnimationFrame;
  var start,
      elapse,
      rate,
      _pause = true;

  var step = function step(timestamp) {
    if (!_pause) {
      if (!start) {
        start = timestamp;

        if (rate && rate < 1) {
          start -= rate * interval;
        }
      }

      elapse = timestamp - start;
      rate = elapse / interval;

      if (elapse >= interval) {
        start = 0;
        rate = 1;
        callback();
      }

      if (progress) {
        progress(rate);
      }

      requestAnimationFrame(step);
    }
  };

  return {
    pause: function pause() {
      _pause = true;
      start = 0;
    },
    play: function play(reset) {
      start = 0;

      if (reset) {
        rate = 0;
      }

      if (_pause) {
        _pause = false;
        requestAnimationFrame(step);
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/js/components/layout/index.js
/**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */







/**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const layout = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Whether the slider is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Layout = object_assign({
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      bind();
      init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

      this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
      this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
    },

    /**
     * Destroy the component.
     */
    destroy: function destroy() {
      removeAttribute([Elements.list, Elements.track], 'style');
    },

    /**
     * Return the slider height on the vertical mode or width on the horizontal mode.
     *
     * @return {number}
     */
    get size() {
      return isVertical ? this.height : this.width;
    }

  }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
  /**
   * Init slider styles according to options.
   */

  function init() {
    Layout.init();
    applyStyle(Splide.root, {
      maxWidth: unit(Splide.options.width)
    });
    Elements.each(function (Slide) {
      Slide.slide.style[Layout.margin] = unit(Layout.gap);
    });
    resize();
  }
  /**
   * Listen the resize native event with throttle.
   * Initialize when the component is mounted or options are updated.
   */


  function bind() {
    Splide.on('resize load', throttle(function () {
      Splide.emit('resize');
    }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
  }
  /**
   * Resize the track and slide elements.
   */


  function resize() {
    var options = Splide.options;
    Layout.resize();
    applyStyle(Elements.track, {
      height: unit(Layout.height)
    });
    var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
    Elements.each(function (Slide) {
      applyStyle(Slide.container, {
        height: slideHeight
      });
      applyStyle(Slide.slide, {
        width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
        height: Slide.container ? null : slideHeight
      });
    });
    Splide.emit('resized');
  }

  return Layout;
});
;// CONCATENATED MODULE: ./src/js/components/drag/index.js
/**
 * The component for supporting mouse drag and swipe.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var drag_abs = Math.abs;
/**
 * If the absolute velocity is greater thant this value,
 * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
 */

var MIN_VELOCITY = 0.1;
/**
 * Adjust how much the track can be pulled on the first or last page.
 * The larger number this is, the farther the track moves.
 * This should be around 5 - 9.
 *
 * @type {number}
 */

var FRICTION_REDUCER = 7;
/**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const drag = (function (Splide, Components) {
  /**
   * Store the Move component.
   *
   * @type {Object}
   */
  var Track = Components.Track;
  /**
   * Store the Controller component.
   *
   * @type {Object}
   */

  var Controller = Components.Controller;
  /**
   * Coordinate of the track on starting drag.
   *
   * @type {Object}
   */

  var startCoord;
  /**
   * Analyzed info on starting drag.
   *
   * @type {Object|null}
   */

  var startInfo;
  /**
   * Analyzed info being updated while dragging/swiping.
   *
   * @type {Object}
   */

  var currentInfo;
  /**
   * Determine whether slides are being dragged or not.
   *
   * @type {boolean}
   */

  var isDragging;
  /**
   * Whether the slider direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Axis for the direction.
   *
   * @type {string}
   */

  var axis = isVertical ? 'y' : 'x';
  /**
   * Drag component object.
   *
   * @type {Object}
   */

  var Drag = {
    /**
     * Whether dragging is disabled or not.
     *
     * @type {boolean}
     */
    disabled: false,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      var Elements = Components.Elements;
      var track = Elements.track;
      Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
        passive: false
      }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
        // Prevent dragging an image or anchor itself.
        each(Elements.list.querySelectorAll('img, a'), function (elm) {
          Splide.off('dragstart', elm).on('dragstart', function (e) {
            e.preventDefault();
          }, elm, {
            passive: false
          });
        });
      }).on('mounted updated', function () {
        _this.disabled = !Splide.options.drag;
      });
    }
  };
  /**
   * Called when the track starts to be dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */

  function start(e) {
    if (!Drag.disabled && !isDragging) {
      // These prams are used to evaluate whether the slider should start moving.
      init(e);
    }
  }
  /**
   * Initialize parameters.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function init(e) {
    startCoord = Track.toCoord(Track.position);
    startInfo = analyze(e, {});
    currentInfo = startInfo;
  }
  /**
   * Called while the track being dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function move(e) {
    if (startInfo) {
      currentInfo = analyze(e, startInfo);

      if (isDragging) {
        if (e.cancelable) {
          e.preventDefault();
        }

        if (!Splide.is(FADE)) {
          var position = startCoord[axis] + currentInfo.offset[axis];
          Track.translate(resist(position));
        }
      } else {
        if (shouldMove(currentInfo)) {
          Splide.emit('drag', startInfo);
          isDragging = true;
          Track.cancel(); // These params are actual drag data.

          init(e);
        }
      }
    }
  }
  /**
   * Determine whether to start moving the track or not by drag angle.
   *
   * @param {Object} info - An information object.
   *
   * @return {boolean} - True if the track should be moved or false if not.
   */


  function shouldMove(_ref) {
    var offset = _ref.offset;

    if (Splide.State.is(MOVING) && Splide.options.waitForTransition) {
      return false;
    }

    var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

    if (isVertical) {
      angle = 90 - angle;
    }

    return angle < Splide.options.dragAngleThreshold;
  }
  /**
   * Resist dragging the track on the first/last page because there is no more.
   *
   * @param {number} position - A position being applied to the track.
   *
   * @return {Object} - Adjusted position.
   */


  function resist(position) {
    if (Splide.is(SLIDE)) {
      var sign = Track.sign;

      var _start = sign * Track.trim(Track.toPosition(0));

      var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

      position *= sign;

      if (position < _start) {
        position = _start - FRICTION_REDUCER * Math.log(_start - position);
      } else if (position > _end) {
        position = _end + FRICTION_REDUCER * Math.log(position - _end);
      }

      position *= sign;
    }

    return position;
  }
  /**
   * Called when dragging ends.
   */


  function end() {
    startInfo = null;

    if (isDragging) {
      Splide.emit('dragged', currentInfo);
      go(currentInfo);
      isDragging = false;
    }
  }
  /**
   * Go to the slide determined by the analyzed data.
   *
   * @param {Object} info - An info object.
   */


  function go(info) {
    var velocity = info.velocity[axis];
    var absV = drag_abs(velocity);

    if (absV > 0) {
      var options = Splide.options;
      var index = Splide.index;
      var sign = velocity < 0 ? -1 : 1;
      var destIndex = index;

      if (!Splide.is(FADE)) {
        var destination = Track.position;

        if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
          destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
        }

        destIndex = Track.toIndex(destination);
      }
      /*
       * Do not allow the track to go to a previous position if there is enough velocity.
       * Always use the adjacent index for the fade mode.
       */


      if (destIndex === index && absV > MIN_VELOCITY) {
        destIndex = index + sign * Track.sign;
      }

      if (Splide.is(SLIDE)) {
        destIndex = between(destIndex, 0, Controller.edgeIndex);
      }

      Controller.go(destIndex, options.isNavigation);
    }
  }
  /**
   * Analyze the given event object and return important information for handling swipe behavior.
   *
   * @param {Event}   e          - Touch or Mouse event object.
   * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
   *
   * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
   */


  function analyze(e, startInfo) {
    var timeStamp = e.timeStamp,
        touches = e.touches;

    var _ref2 = touches ? touches[0] : e,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;

    var _ref3 = startInfo.to || {},
        _ref3$x = _ref3.x,
        fromX = _ref3$x === void 0 ? clientX : _ref3$x,
        _ref3$y = _ref3.y,
        fromY = _ref3$y === void 0 ? clientY : _ref3$y;

    var startTime = startInfo.time || 0;
    var offset = {
      x: clientX - fromX,
      y: clientY - fromY
    };
    var duration = timeStamp - startTime;
    var velocity = {
      x: offset.x / duration,
      y: offset.y / duration
    };
    return {
      to: {
        x: clientX,
        y: clientY
      },
      offset: offset,
      time: timeStamp,
      velocity: velocity
    };
  }

  return Drag;
});
;// CONCATENATED MODULE: ./src/js/components/click/index.js
/**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */
/* harmony default export */ const click = (function (Splide, Components) {
  /**
   * Whether click is disabled or not.
   *
   * @type {boolean}
   */
  var disabled = false;
  /**
   * Click component object.
   *
   * @type {Object}
   */

  var Click = {
    /**
     * Mount only when the drag is activated and the slide type is not "fade".
     *
     * @type {boolean}
     */
    required: Splide.options.drag,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('click', onClick, Components.Elements.track, {
        capture: true
      }).on('drag', function () {
        disabled = true;
      }).on('dragged', function () {
        // Make sure the flag is released after the click event is fired.
        setTimeout(function () {
          disabled = false;
        });
      });
    }
  };
  /**
   * Called when a track element is clicked.
   *
   * @param {Event} e - A click event.
   */

  function onClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  return Click;
});
;// CONCATENATED MODULE: ./src/js/components/autoplay/index.js
/**
 * The component for playing slides automatically.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Set of pause flags.
 */

var PAUSE_FLAGS = {
  HOVER: 1,
  FOCUS: 2,
  MANUAL: 3
};
/**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const autoplay = (function (Splide, Components, name) {
  /**
   * Store pause flags.
   *
   * @type {Array}
   */
  var flags = [];
  /**
   * Store an interval object.
   *
   * @type {Object};
   */

  var interval;
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */

  var Elements = Components.Elements;
  /**
   * Autoplay component object.
   *
   * @type {Object}
   */

  var Autoplay = {
    /**
     * Required only when the autoplay option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.autoplay,

    /**
     * Called when the component is mounted.
     * Note that autoplay starts only if there are slides over perPage number.
     */
    mount: function mount() {
      var options = Splide.options;

      if (Elements.slides.length > options.perPage) {
        interval = createInterval(function () {
          Splide.go('>');
        }, options.interval, function (rate) {
          Splide.emit(name + ":playing", rate);

          if (Elements.bar) {
            applyStyle(Elements.bar, {
              width: rate * 100 + "%"
            });
          }
        });
        bind();
        this.play();
      }
    },

    /**
     * Start autoplay.
     *
     * @param {number} flag - A pause flag to be removed.
     */
    play: function play(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      flags = flags.filter(function (f) {
        return f !== flag;
      });

      if (!flags.length) {
        Splide.emit(name + ":play");
        interval.play(Splide.options.resetProgress);
      }
    },

    /**
     * Pause autoplay.
     * Note that Array.includes is not supported by IE.
     *
     * @param {number} flag - A pause flag to be added.
     */
    pause: function pause(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      interval.pause();

      if (flags.indexOf(flag) === -1) {
        flags.push(flag);
      }

      if (flags.length === 1) {
        Splide.emit(name + ":pause");
      }
    }
  };
  /**
   * Listen some events.
   */

  function bind() {
    var options = Splide.options;
    var sibling = Splide.sibling;
    var elms = [Splide.root, sibling ? sibling.root : null];

    if (options.pauseOnHover) {
      switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
      switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
    }

    if (options.pauseOnFocus) {
      switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
      switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
    }

    if (Elements.play) {
      Splide.on('click', function () {
        // Need to be removed a focus flag at first.
        Autoplay.play(PAUSE_FLAGS.FOCUS);
        Autoplay.play(PAUSE_FLAGS.MANUAL);
      }, Elements.play);
    }

    if (Elements.pause) {
      switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
    }

    Splide.on('move refresh', function () {
      Autoplay.play();
    }) // Rewind the timer.
    .on('destroy', function () {
      Autoplay.pause();
    });
  }
  /**
   * Play or pause on the given event.
   *
   * @param {Element[]} elms  - Elements.
   * @param {string}    event - An event name or names.
   * @param {number}    flag  - A pause flag defined on the top.
   * @param {boolean}   play  - Determine whether to play or pause.
   */


  function switchOn(elms, event, flag, play) {
    elms.forEach(function (elm) {
      Splide.on(event, function () {
        Autoplay[play ? 'play' : 'pause'](flag);
      }, elm);
    });
  }

  return Autoplay;
});
;// CONCATENATED MODULE: ./src/js/components/cover/index.js
/**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const cover = (function (Splide, Components) {
  /**
   * Hold options.
   *
   * @type {Object}
   */
  var options = Splide.options;
  /**
   * Cover component object.
   *
   * @type {Object}
   */

  var Cover = {
    /**
     * Required only when "cover" option is true.
     *
     * @type {boolean}
     */
    required: options.cover,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('lazyload:loaded', function (img) {
        cover(img, false);
      });
      Splide.on('mounted updated refresh', function () {
        return apply(false);
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      apply(true);
    }
  };
  /**
   * Apply "cover" to all slides.
   *
   * @param {boolean} uncover - If true, "cover" will be clear.
   */

  function apply(uncover) {
    Components.Elements.each(function (Slide) {
      var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

      if (img && img.src) {
        cover(img, uncover);
      }
    });
  }
  /**
   * Set background image of the parent element, using source of the given image element.
   *
   * @param {Element} img     - An image element.
   * @param {boolean} uncover - Reset "cover".
   */


  function cover(img, uncover) {
    applyStyle(img.parentElement, {
      background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
    });
    applyStyle(img, {
      display: uncover ? '' : 'none'
    });
  }

  return Cover;
});
;// CONCATENATED MODULE: ./src/js/components/arrows/path.js
/**
 * Export vector path for an arrow.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Namespace definition for SVG element.
 *
 * @type {string}
 */
var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
/**
 * The arrow vector path.
 *
 * @type {number}
 */

var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
/**
 * SVG width and height.
 *
 * @type {number}
 */

var SIZE = 40;
;// CONCATENATED MODULE: ./src/js/components/arrows/index.js
/**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const arrows = (function (Splide, Components, name) {
  /**
   * Previous arrow element.
   *
   * @type {Element|undefined}
   */
  var prev;
  /**
   * Next arrow element.
   *
   * @type {Element|undefined}
   */

  var next;
  /**
   * Store the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Hold the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Whether arrows are created programmatically or not.
   *
   * @type {boolean}
   */

  var created;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Arrows component object.
   *
   * @type {Object}
   */

  var Arrows = {
    /**
     * Required when the arrows option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.arrows,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      // Attempt to get arrows from HTML source.
      prev = Elements.arrows.prev;
      next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

      if ((!prev || !next) && Splide.options.arrows) {
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        appendArrows();
      }

      if (prev && next) {
        bind();
      }

      this.arrows = {
        prev: prev,
        next: next
      };
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      Splide.emit(name + ":mounted", prev, next);
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      removeAttribute([prev, next], 'disabled');

      if (created) {
        dom_remove(prev.parentElement);
      }
    }
  };
  /**
   * Listen to native and custom events.
   */

  function bind() {
    Splide.on('click', function () {
      Splide.go('<');
    }, prev).on('click', function () {
      Splide.go('>');
    }, next).on('mounted move updated refresh', updateDisabled);
  }
  /**
   * Update a disabled attribute.
   */


  function updateDisabled() {
    var _Components$Controlle = Components.Controller,
        prevIndex = _Components$Controlle.prevIndex,
        nextIndex = _Components$Controlle.nextIndex;
    var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
    prev.disabled = prevIndex < 0 || !isEnough;
    next.disabled = nextIndex < 0 || !isEnough;
    Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
  }
  /**
   * Create a wrapper element and append arrows.
   */


  function appendArrows() {
    var wrapper = create('div', {
      "class": classes.arrows
    });
    append(wrapper, prev);
    append(wrapper, next);
    var slider = Elements.slider;
    var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
    before(wrapper, parent.firstElementChild);
  }
  /**
   * Create an arrow element.
   *
   * @param {boolean} prev - Determine to create a prev arrow or next arrow.
   *
   * @return {Element} - A created arrow element.
   */


  function createArrow(prev) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
    return domify(arrow);
  }

  return Arrows;
});
;// CONCATENATED MODULE: ./src/js/components/pagination/index.js
/**
 * The component for handling pagination
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for updating some attributes of pagination nodes.
 *
 * @type {string}
 */

var ATTRIBUTES_UPDATE_EVENT = 'move.page';
/**
 * The event name for recreating pagination.
 *
 * @type {string}
 */

var UPDATE_EVENT = 'updated.page refresh.page';
/**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const pagination = (function (Splide, Components, name) {
  /**
   * Store all data for pagination.
   * - list: A list element.
   * - items: An array that contains objects(li, button, index, page).
   *
   * @type {Object}
   */
  var data = {};
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Pagination component object.
   *
   * @type {Object}
   */

  var Pagination = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var pagination = Splide.options.pagination;

      if (pagination) {
        data = createPagination();
        var slider = Elements.slider;
        var parent = pagination === 'slider' && slider ? slider : Splide.root;
        append(parent, data.list);
        Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
      }

      Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
        Pagination.destroy();

        if (Splide.options.pagination) {
          Pagination.mount();
          Pagination.mounted();
        }
      });
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (Splide.options.pagination) {
        var index = Splide.index;
        Splide.emit(name + ":mounted", data, this.getItem(index));
        updateAttributes(index, -1);
      }
    },

    /**
     * Destroy the pagination.
     * Be aware that node.remove() is not supported by IE.
     */
    destroy: function destroy() {
      dom_remove(data.list);

      if (data.items) {
        data.items.forEach(function (item) {
          Splide.off('click', item.button);
        });
      } // Do not remove UPDATE_EVENT to recreate pagination if needed.


      Splide.off(ATTRIBUTES_UPDATE_EVENT);
      data = {};
    },

    /**
     * Return an item by index.
     *
     * @param {number} index - A slide index.
     *
     * @return {Object|undefined} - An item object on success or undefined on failure.
     */
    getItem: function getItem(index) {
      return data.items[Components.Controller.toPage(index)];
    },

    /**
     * Return object containing pagination data.
     *
     * @return {Object} - Pagination data including list and items.
     */
    get data() {
      return data;
    }

  };
  /**
   * Update attributes.
   *
   * @param {number} index     - Active index.
   * @param {number} prevIndex - Prev index.
   */

  function updateAttributes(index, prevIndex) {
    var prev = Pagination.getItem(prevIndex);
    var curr = Pagination.getItem(index);
    var active = STATUS_CLASSES.active;

    if (prev) {
      removeClass(prev.button, active);
    }

    if (curr) {
      addClass(curr.button, active);
    }

    Splide.emit(name + ":updated", data, prev, curr);
  }
  /**
   * Create a wrapper and button elements.
   *
   * @return {Object} - An object contains all data.
   */


  function createPagination() {
    var options = Splide.options;
    var classes = Splide.classes;
    var list = create('ul', {
      "class": classes.pagination
    });
    var items = Elements.getSlides(false).filter(function (Slide) {
      return options.focus !== false || Slide.index % options.perPage === 0;
    }).map(function (Slide, page) {
      var li = create('li', {});
      var button = create('button', {
        "class": classes.page,
        type: 'button'
      });
      append(li, button);
      append(list, li);
      Splide.on('click', function () {
        Splide.go(">" + page);
      }, button);
      return {
        li: li,
        button: button,
        page: page,
        Slides: Elements.getSlidesByPage(page)
      };
    });
    return {
      list: list,
      items: items
    };
  }

  return Pagination;
});
;// CONCATENATED MODULE: ./src/js/components/lazyload/index.js
/**
 * The component for loading slider images lazily.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The name for a data attribute of src.
 *
 * @type {string}
 */

var SRC_DATA_NAME = 'data-splide-lazy';
/**
 * The name for a data attribute of srcset.
 *
 * @type {string}
 */

var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
/**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const lazyload = (function (Splide, Components, name) {
  /**
   * Next index for sequential loading.
   *
   * @type {number}
   */
  var nextIndex;
  /**
   * Store objects containing an img element and a Slide object.
   *
   * @type {Object[]}
   */

  var images;
  /**
   * Store the options.
   *
   * @type {Object}
   */

  var options = Splide.options;
  /**
   * Whether to load images sequentially or not.
   *
   * @type {boolean}
   */

  var isSequential = options.lazyLoad === 'sequential';
  /**
   * Lazyload component object.
   *
   * @type {Object}
   */

  var Lazyload = {
    /**
     * Mount only when the lazyload option is provided.
     *
     * @type {boolean}
     */
    required: options.lazyLoad,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted refresh', function () {
        init();
        Components.Elements.each(function (Slide) {
          each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
            if (!img.src && !img.srcset) {
              images.push({
                img: img,
                Slide: Slide
              });
              applyStyle(img, {
                display: 'none'
              });
            }
          });
        });

        if (isSequential) {
          loadNext();
        }
      });

      if (!isSequential) {
        Splide.on("mounted refresh moved." + name, check);
      }
    },

    /**
     * Destroy.
     */
    destroy: init
  };
  /**
   * Initialize parameters.
   */

  function init() {
    images = [];
    nextIndex = 0;
  }
  /**
   * Check how close each image is from the active slide and
   * determine whether to start loading or not, according to the distance.
   *
   * @param {number} index - Current index.
   */


  function check(index) {
    index = isNaN(index) ? Splide.index : index;
    images = images.filter(function (image) {
      if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
        load(image.img, image.Slide);
        return false;
      }

      return true;
    }); // Unbind if all images are loaded.

    if (!images[0]) {
      Splide.off("moved." + name);
    }
  }
  /**
   * Start loading an image.
   * Creating a clone of the image element since setting src attribute directly to it
   * often occurs 'hitch', blocking some other processes of a browser.
   *
   * @param {Element} img   - An image element.
   * @param {Object}  Slide - A Slide object.
   */


  function load(img, Slide) {
    addClass(Slide.slide, STATUS_CLASSES.loading);
    var spinner = create('span', {
      "class": Splide.classes.spinner
    });
    append(img.parentElement, spinner);

    img.onload = function () {
      loaded(img, spinner, Slide, false);
    };

    img.onerror = function () {
      loaded(img, spinner, Slide, true);
    };

    setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
    setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
  }
  /**
   * Start loading a next image in images array.
   */


  function loadNext() {
    if (nextIndex < images.length) {
      var image = images[nextIndex];
      load(image.img, image.Slide);
    }

    nextIndex++;
  }
  /**
   * Called just after the image was loaded or loading was aborted by some error.
   *
   * @param {Element} img     - An image element.
   * @param {Element} spinner - A spinner element.
   * @param {Object}  Slide   - A Slide object.
   * @param {boolean} error   - True if the image was loaded successfully or false on error.
   */


  function loaded(img, spinner, Slide, error) {
    removeClass(Slide.slide, STATUS_CLASSES.loading);

    if (!error) {
      dom_remove(spinner);
      applyStyle(img, {
        display: ''
      });
      Splide.emit(name + ":loaded", img).emit('resize');
    }

    if (isSequential) {
      loadNext();
    }
  }

  return Lazyload;
});
;// CONCATENATED MODULE: ./src/js/constants/a11y.js
/**
 * Export aria attribute names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Attribute name for aria-current.
 *
 * @type {string}
 */
var ARIA_CURRENRT = 'aria-current';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_CONTROLS = 'aria-controls';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_LABEL = 'aria-label';
/**
 * Attribute name for aria-labelledby.
 *
 * @type {string}
 */

var ARIA_LABELLEDBY = 'aria-labelledby';
/**
 * Attribute name for aria-hidden.
 *
 * @type {string}
 */

var ARIA_HIDDEN = 'aria-hidden';
/**
 * Attribute name for tab-index.
 *
 * @type {string}
 */

var TAB_INDEX = 'tabindex';
;// CONCATENATED MODULE: ./src/js/components/keyboard/index.js
/**
 * The component for controlling slides via keyboard.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Map a key to a slide control.
 *
 * @type {Object}
 */

var KEY_MAP = {
  ltr: {
    ArrowLeft: '<',
    ArrowRight: '>',
    // For IE.
    Left: '<',
    Right: '>'
  },
  rtl: {
    ArrowLeft: '>',
    ArrowRight: '<',
    // For IE.
    Left: '>',
    Right: '<'
  },
  ttb: {
    ArrowUp: '<',
    ArrowDown: '>',
    // For IE.
    Up: '<',
    Down: '>'
  }
};
/**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const keyboard = (function (Splide) {
  /**
   * Hold the target element.
   *
   * @type {Element|Document|undefined}
   */
  var target;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted updated', function () {
        var options = Splide.options;
        var root = Splide.root;
        var map = KEY_MAP[options.direction];
        var keyboard = options.keyboard;

        if (target) {
          Splide.off('keydown', target);
          removeAttribute(root, TAB_INDEX);
        }

        if (keyboard) {
          if (keyboard === 'focused') {
            target = root;
            setAttribute(root, TAB_INDEX, 0);
          } else {
            target = document;
          }

          Splide.on('keydown', function (e) {
            if (map[e.key]) {
              Splide.go(map[e.key]);
            }
          }, target);
        }
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/components/a11y/index.js
/**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const a11y = (function (Splide, Components) {
  /**
   * Hold a i18n object.
   *
   * @type {Object}
   */
  var i18n = Splide.i18n;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * All attributes related with A11y.
   *
   * @type {string[]}
   */

  var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
  /**
   * A11y component object.
   *
   * @type {Object}
   */

  var A11y = {
    /**
     * Required only when the accessibility option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.accessibility,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('visible', function (Slide) {
        updateSlide(Slide.slide, true);
      }).on('hidden', function (Slide) {
        updateSlide(Slide.slide, false);
      }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
        removeAttribute(Components.Clones.clones, allAttributes);
      });

      if (Splide.options.isNavigation) {
        Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
          updateNavigation(Slide, true);
        }).on('inactive', function (Slide) {
          updateNavigation(Slide, false);
        });
      }

      initAutoplay();
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      var Arrows = Components.Arrows;
      var arrows = Arrows ? Arrows.arrows : {};
      removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
    }
  };
  /**
   * Update slide attributes when it gets visible or hidden.
   *
   * @param {Element} slide   - A slide element.
   * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
   */

  function updateSlide(slide, visible) {
    setAttribute(slide, ARIA_HIDDEN, !visible);

    if (Splide.options.slideFocus) {
      setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
    }
  }
  /**
   * Initialize arrows if they are available.
   * Append screen reader elements and add aria-controls attribute.
   *
   * @param {Element} prev - Previous arrow element.
   * @param {Element} next - Next arrow element.
   */


  function initArrows(prev, next) {
    var controls = Elements.track.id;
    setAttribute(prev, ARIA_CONTROLS, controls);
    setAttribute(next, ARIA_CONTROLS, controls);
  }
  /**
   * Update arrow attributes.
   *
   * @param {Element} prev      - Previous arrow element.
   * @param {Element} next      - Next arrow element.
   * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
   * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
   */


  function updateArrows(prev, next, prevIndex, nextIndex) {
    var index = Splide.index;
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
  }
  /**
   * Initialize pagination if it's available.
   * Append a screen reader element and add aria-controls/label attribute to each item.
   *
   * @param {Object} data       - Data object containing all items.
   * @param {Object} activeItem - An initial active item.
   */


  function initPagination(data, activeItem) {
    if (activeItem) {
      setAttribute(activeItem.button, ARIA_CURRENRT, true);
    }

    data.items.forEach(function (item) {
      var options = Splide.options;
      var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
      var label = sprintf(text, item.page + 1);
      var button = item.button;
      var controls = item.Slides.map(function (Slide) {
        return Slide.slide.id;
      });
      setAttribute(button, ARIA_CONTROLS, controls.join(' '));
      setAttribute(button, ARIA_LABEL, label);
    });
  }
  /**
   * Update pagination attributes.
   *
   * @param {Object}  data - Data object containing all items.
   * @param {Element} prev - A previous active element.
   * @param {Element} curr - A current active element.
   */


  function updatePagination(data, prev, curr) {
    if (prev) {
      removeAttribute(prev.button, ARIA_CURRENRT);
    }

    if (curr) {
      setAttribute(curr.button, ARIA_CURRENRT, true);
    }
  }
  /**
   * Initialize autoplay buttons.
   */


  function initAutoplay() {
    ['play', 'pause'].forEach(function (name) {
      var elm = Elements[name];

      if (elm) {
        if (!isButton(elm)) {
          setAttribute(elm, 'role', 'button');
        }

        setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
        setAttribute(elm, ARIA_LABEL, i18n[name]);
      }
    });
  }
  /**
   * Initialize navigation slider.
   * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
   *
   * @param {Splide} main - A main Splide instance.
   */


  function initNavigation(main) {
    Elements.each(function (Slide) {
      var slide = Slide.slide;
      var realIndex = Slide.realIndex;

      if (!isButton(slide)) {
        setAttribute(slide, 'role', 'button');
      }

      var slideIndex = realIndex > -1 ? realIndex : Slide.index;
      var label = sprintf(i18n.slideX, slideIndex + 1);
      var mainSlide = main.Components.Elements.getSlide(slideIndex);
      setAttribute(slide, ARIA_LABEL, label);

      if (mainSlide) {
        setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
      }
    });
  }
  /**
   * Update navigation attributes.
   *
   * @param {Object}  Slide  - A target Slide object.
   * @param {boolean} active - True if the slide is active or false if inactive.
   */


  function updateNavigation(_ref, active) {
    var slide = _ref.slide;

    if (active) {
      setAttribute(slide, ARIA_CURRENRT, true);
    } else {
      removeAttribute(slide, ARIA_CURRENRT);
    }
  }
  /**
   * Check if the given element is button or not.
   *
   * @param {Element} elm - An element to be checked.
   *
   * @return {boolean} - True if the given element is button.
   */


  function isButton(elm) {
    return elm.tagName === 'BUTTON';
  }

  return A11y;
});
;// CONCATENATED MODULE: ./src/js/components/sync/index.js
/**
 * The component for synchronizing a slider with another.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for sync.
 *
 * @type {string}
 */

var SYNC_EVENT = 'move.sync';
/**
 * The event names for click navigation.
 * @type {string}
 */

var CLICK_EVENTS = 'mouseup touchend';
/**
 * The keys for triggering the navigation button.
 *
 * @type {String[]}
 */

var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
/**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const sync = (function (Splide) {
  /**
   * Keep the sibling Splide instance.
   *
   * @type {Splide}
   */
  var sibling = Splide.sibling;
  /**
   * Whether the sibling slider is navigation or not.
   *
   * @type {Splide|boolean}
   */

  var isNavigation = sibling && sibling.options.isNavigation;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Sync = {
    /**
     * Required only when the sub slider is available.
     *
     * @type {boolean}
     */
    required: !!sibling,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      syncMain();
      syncSibling();

      if (isNavigation) {
        bind();
        Splide.on('refresh', function () {
          setTimeout(function () {
            bind();
            sibling.emit('navigation:updated', Splide);
          });
        });
      }
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (isNavigation) {
        sibling.emit('navigation:mounted', Splide);
      }
    }
  };
  /**
   * Listen the primary slider event to move secondary one.
   * Must unbind a handler at first to avoid infinite loop.
   */

  function syncMain() {
    Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
      syncSibling();
    });
  }
  /**
   * Listen the secondary slider event to move primary one.
   * Must unbind a handler at first to avoid infinite loop.
   */


  function syncSibling() {
    sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
      syncMain();
    });
  }
  /**
   * Listen some events on each slide.
   */


  function bind() {
    sibling.Components.Elements.each(function (_ref) {
      var slide = _ref.slide,
          index = _ref.index;

      /*
       * Listen mouseup and touchend events to handle click.
       */
      Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
        // Ignore a middle or right click.
        if (!e.button || e.button === 0) {
          moveSibling(index);
        }
      }, slide);
      /*
       * Subscribe keyup to handle Enter and Space key.
       * Note that Array.includes is not supported by IE.
       */

      Splide.off('keyup', slide).on('keyup', function (e) {
        if (TRIGGER_KEYS.indexOf(e.key) > -1) {
          e.preventDefault();
          moveSibling(index);
        }
      }, slide, {
        passive: false
      });
    });
  }
  /**
   * Move the sibling to the given index.
   * Need to check "IDLE" status because slides can be moving by Drag component.
   *
   * @param {number} index - Target index.
   */


  function moveSibling(index) {
    if (Splide.State.is(IDLE)) {
      sibling.go(index);
    }
  }

  return Sync;
});
;// CONCATENATED MODULE: ./src/js/components/breakpoints/index.js
/**
 * The component for updating options according to a current window width.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Interval time for throttle.
 *
 * @type {number}
 */

var THROTTLE = 50;
/**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const breakpoints = (function (Splide) {
  /**
   * Store breakpoints.
   *
   * @type {Object|boolean}
   */
  var breakpoints = Splide.options.breakpoints;
  /**
   * The check function whose frequency of call is reduced.
   *
   * @type {Function}
   */

  var throttledCheck = throttle(check, THROTTLE);
  /**
   * Keep initial options.
   *
   * @type {Object}
   */

  var initialOptions;
  /**
   * An array containing objects of point and MediaQueryList.
   *
   * @type {Object[]}
   */

  var map = [];
  /**
   * Hold the previous breakpoint.
   *
   * @type {number|undefined}
   */

  var prevPoint;
  /**
   * Breakpoints component object.
   *
   * @type {Object}
   */

  var Breakpoints = {
    /**
     * Required only when the breakpoints definition is provided and browser supports matchMedia.
     *
     * @type {boolean}
     */
    required: breakpoints && matchMedia,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      map = Object.keys(breakpoints).sort(function (n, m) {
        return +n - +m;
      }).map(function (point) {
        return {
          point: point,
          mql: matchMedia("(max-width:" + point + "px)")
        };
      });
      /*
       * To keep monitoring resize event after destruction without "completely",
       * use native addEventListener instead of Splide.on.
       */

      this.destroy(true);
      addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

      initialOptions = Splide.options;
      check();
    },

    /**
     * Destroy.
     *
     * @param {boolean} completely - Whether to destroy Splide completely.
     */
    destroy: function destroy(completely) {
      if (completely) {
        removeEventListener('resize', throttledCheck);
      }
    }
  };
  /**
   * Check the breakpoint.
   */

  function check() {
    var point = getPoint();

    if (point !== prevPoint) {
      prevPoint = point;
      var State = Splide.State;
      var options = breakpoints[point] || initialOptions;
      var destroy = options.destroy;

      if (destroy) {
        Splide.options = initialOptions;
        Splide.destroy(destroy === 'completely');
      } else {
        if (State.is(DESTROYED)) {
          Splide.mount();
        }

        Splide.options = options;
      }
    }
  }
  /**
   * Return the breakpoint matching current window width.
   * Note that Array.prototype.find is not supported by IE.
   *
   * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
   */


  function getPoint() {
    var item = map.filter(function (item) {
      return item.mql.matches;
    })[0];
    return item ? item.point : -1;
  }

  return Breakpoints;
});
;// CONCATENATED MODULE: ./src/js/components/index.js
/**
 * Export components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

















var COMPLETE = {
  Options: options,
  Breakpoints: breakpoints,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Autoplay: autoplay,
  Cover: cover,
  Arrows: arrows,
  Pagination: pagination,
  LazyLoad: lazyload,
  Keyboard: keyboard,
  Sync: sync,
  A11y: a11y
};
var LIGHT = {
  Options: options,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Arrows: arrows,
  Pagination: pagination,
  A11y: a11y
};
;// CONCATENATED MODULE: ./build/module/module.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Export Splide class for import.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Export Splide class for import from other projects.
 */

var module_Splide = /*#__PURE__*/function (_Core) {
  _inheritsLoose(Splide, _Core);

  function Splide(root, options) {
    return _Core.call(this, root, options, COMPLETE) || this;
  }

  return Splide;
}(Splide);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(311);
/******/ })()
;
});

/***/ }),

/***/ "./src/js/colors.json":
/*!****************************!*\
  !*** ./src/js/colors.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"TVT K321\",\"hex\":\"#d97c7c\"},{\"name\":\"TVT V422\",\"hex\":\"#b69393\"},{\"name\":\"TVT V321\",\"hex\":\"#d49696\"},{\"name\":\"TVT J420\",\"hex\":\"#d0abab\"},{\"name\":\"TVT Y419\",\"hex\":\"#e7cccc\"},{\"name\":\"TVT G325\",\"hex\":\"#f0cfcf\"},{\"name\":\"TVT Y325\",\"hex\":\"#e4cfcf\"},{\"name\":\"TVT Y333\",\"hex\":\"#ebdada\"},{\"name\":\"TVT F418\",\"hex\":\"#eedede\"},{\"name\":\"TVT Y336\",\"hex\":\"#eddcdc\"},{\"name\":\"TVT F423\",\"hex\":\"#f4e4e4\"},{\"name\":\"TVT V341\",\"hex\":\"#ac91af\"},{\"name\":\"TVT H341\",\"hex\":\"#bda0c3\"},{\"name\":\"TVT X341\",\"hex\":\"#cbb6cf\"},{\"name\":\"TVT G341\",\"hex\":\"#d2bdd7\"},{\"name\":\"TVT Y341\",\"hex\":\"#ddcfe1\"},{\"name\":\"TVT F341\",\"hex\":\"#ddcee3\"},{\"name\":\"TVT J342\",\"hex\":\"#c4a8d6\"},{\"name\":\"TVT Y345\",\"hex\":\"#e3dee9\"},{\"name\":\"TVT J343\",\"hex\":\"#bfb0d8\"},{\"name\":\"TVT H343\",\"hex\":\"#cdc0e0\"},{\"name\":\"TVT G343\",\"hex\":\"#e1dbea\"},{\"name\":\"TVT K343\",\"hex\":\"#a797c8\"},{\"name\":\"TVT G345\",\"hex\":\"#d8d1e4\"},{\"name\":\"TVT X345\",\"hex\":\"#d8d3e2\"},{\"name\":\"TVT G344\",\"hex\":\"#ddd8e7\"},{\"name\":\"TVT F343\",\"hex\":\"#eae8ee\"},{\"name\":\"TVT Y343\",\"hex\":\"#ddd9e7\"},{\"name\":\"TVT H345\",\"hex\":\"#c7bfe2\"},{\"name\":\"TVT F346\",\"hex\":\"#e4e1ed\"},{\"name\":\"TVT V345\",\"hex\":\"#b7b0d5\"},{\"name\":\"TVT X343\",\"hex\":\"#c9c3e0\"},{\"name\":\"TVT X344\",\"hex\":\"#ccc8db\"},{\"name\":\"TVT J345\",\"hex\":\"#b7afde\"},{\"name\":\"TVT J344\",\"hex\":\"#bcb7d8\"},{\"name\":\"TVT V344\",\"hex\":\"#bdb9d6\"},{\"name\":\"TVT H346\",\"hex\":\"#c3bee5\"},{\"name\":\"TVT J346\",\"hex\":\"#9d98d2\"},{\"name\":\"TVT H344\",\"hex\":\"#cccae2\"},{\"name\":\"TVT G346\",\"hex\":\"#d0cde9\"},{\"name\":\"TVT Y344\",\"hex\":\"#dfdee9\"},{\"name\":\"TVT Y346\",\"hex\":\"#d9d9e7\"},{\"name\":\"TVT X346\",\"hex\":\"#c2c3dd\"},{\"name\":\"TVT J347\",\"hex\":\"#a0a7d8\"},{\"name\":\"TVT V346\",\"hex\":\"#a6a9cd\"},{\"name\":\"TVT H347\",\"hex\":\"#babfe3\"},{\"name\":\"TVT G347\",\"hex\":\"#d0d3ea\"},{\"name\":\"TVT X347\",\"hex\":\"#c6cae0\"},{\"name\":\"TVT F347\",\"hex\":\"#e7e8ee\"},{\"name\":\"TVT V347\",\"hex\":\"#aab1d1\"},{\"name\":\"TVT F349\",\"hex\":\"#dbdeea\"},{\"name\":\"TVT Y347\",\"hex\":\"#dbdee9\"},{\"name\":\"TVT X350\",\"hex\":\"#aeb6cc\"},{\"name\":\"TVT H348\",\"hex\":\"#b2bee0\"},{\"name\":\"TVT J349\",\"hex\":\"#90a3cd\"},{\"name\":\"TVT J348\",\"hex\":\"#9badda\"},{\"name\":\"TVT J350\",\"hex\":\"#a4b3d7\"},{\"name\":\"TVT H349\",\"hex\":\"#a4b4d8\"},{\"name\":\"TVT H350\",\"hex\":\"#c0cae3\"},{\"name\":\"TVT G348\",\"hex\":\"#c7cfe3\"},{\"name\":\"TVT Y350\",\"hex\":\"#d3d8e3\"},{\"name\":\"TVT G350\",\"hex\":\"#d8dde9\"},{\"name\":\"TVT F430\",\"hex\":\"#e4e7ee\"},{\"name\":\"TVT F434\",\"hex\":\"#e4e7ee\"},{\"name\":\"TVT F350\",\"hex\":\"#e2e5ec\"},{\"name\":\"TVT S349\",\"hex\":\"#8497bc\"},{\"name\":\"TVT V349\",\"hex\":\"#a1b0cd\"},{\"name\":\"TVT X349\",\"hex\":\"#bec9dd\"},{\"name\":\"TVT G349\",\"hex\":\"#c1cde4\"},{\"name\":\"TVT S353\",\"hex\":\"#6f8fbc\"},{\"name\":\"TVT S351\",\"hex\":\"#738fbd\"},{\"name\":\"TVT K433\",\"hex\":\"#879dbb\"},{\"name\":\"TVT J351\",\"hex\":\"#8aa6d4\"},{\"name\":\"TVT J433\",\"hex\":\"#a2b3cd\"},{\"name\":\"TVT K430\",\"hex\":\"#a3b4d0\"},{\"name\":\"TVT V430\",\"hex\":\"#b4bdca\"},{\"name\":\"TVT H433\",\"hex\":\"#b5c3d8\"},{\"name\":\"TVT J434\",\"hex\":\"#bfccdf\"},{\"name\":\"TVT J430\",\"hex\":\"#c1cde1\"},{\"name\":\"TVT G353\",\"hex\":\"#c4d2e5\"},{\"name\":\"TVT H434\",\"hex\":\"#cbd6e5\"},{\"name\":\"TVT G433\",\"hex\":\"#cdd6e4\"},{\"name\":\"TVT H430\",\"hex\":\"#cfd8e7\"},{\"name\":\"TVT Y349\",\"hex\":\"#d3dbe6\"},{\"name\":\"TVT G352\",\"hex\":\"#d3dce9\"},{\"name\":\"TVT Y352\",\"hex\":\"#d4dce7\"},{\"name\":\"TVT Y430\",\"hex\":\"#d6deea\"},{\"name\":\"TVT G430\",\"hex\":\"#d7e0ed\"},{\"name\":\"TVT G434\",\"hex\":\"#d7e0ed\"},{\"name\":\"TVT Y434\",\"hex\":\"#d7e0ed\"},{\"name\":\"TVT F433\",\"hex\":\"#d8e0ed\"},{\"name\":\"TVT F352\",\"hex\":\"#e2e6ec\"},{\"name\":\"TVT K354\",\"hex\":\"#6494cd\"},{\"name\":\"TVT V434\",\"hex\":\"#7693b4\"},{\"name\":\"TVT L434\",\"hex\":\"#7993b4\"},{\"name\":\"TVT J353\",\"hex\":\"#a0b7d6\"},{\"name\":\"TVT J432\",\"hex\":\"#a1b5cd\"},{\"name\":\"TVT K434\",\"hex\":\"#a4b6cd\"},{\"name\":\"TVT V352\",\"hex\":\"#a4bad7\"},{\"name\":\"TVT X434\",\"hex\":\"#aebed3\"},{\"name\":\"TVT X352\",\"hex\":\"#b3c6de\"},{\"name\":\"TVT J352\",\"hex\":\"#b4cae3\"},{\"name\":\"TVT H432\",\"hex\":\"#b9c8da\"},{\"name\":\"TVT H352\",\"hex\":\"#c7d5e5\"},{\"name\":\"TVT X430\",\"hex\":\"#cdd4dd\"},{\"name\":\"TVT F432\",\"hex\":\"#dfe6ee\"},{\"name\":\"TVT Y432\",\"hex\":\"#dfe4ea\"},{\"name\":\"TVT J431\",\"hex\":\"#7496b5\"},{\"name\":\"TVT K432\",\"hex\":\"#7694b5\"},{\"name\":\"TVT K435\",\"hex\":\"#7897b5\"},{\"name\":\"TVT L490\",\"hex\":\"#93a2b0\"},{\"name\":\"TVT J356\",\"hex\":\"#86b0db\"},{\"name\":\"TVT K490\",\"hex\":\"#9caab7\"},{\"name\":\"TVT J429\",\"hex\":\"#a5b3c0\"},{\"name\":\"TVT H356\",\"hex\":\"#a6c7e6\"},{\"name\":\"TVT X429\",\"hex\":\"#afb9c4\"},{\"name\":\"TVT X353\",\"hex\":\"#c2d0df\"},{\"name\":\"TVT F356\",\"hex\":\"#d1deec\"},{\"name\":\"TVT G432\",\"hex\":\"#cfdbe7\"},{\"name\":\"TVT Y353\",\"hex\":\"#dbe2e9\"},{\"name\":\"TVT Y433\",\"hex\":\"#dee6ee\"},{\"name\":\"TVT S432\",\"hex\":\"#758a9c\"},{\"name\":\"TVT S435\",\"hex\":\"#758a9c\"},{\"name\":\"TVT S356\",\"hex\":\"#7ca3c2\"},{\"name\":\"TVT J355\",\"hex\":\"#78a8d3\"},{\"name\":\"TVT J435\",\"hex\":\"#9cb7cc\"},{\"name\":\"TVT V433\",\"hex\":\"#a7bbcd\"},{\"name\":\"TVT V356\",\"hex\":\"#a4c1d9\"},{\"name\":\"TVT H354\",\"hex\":\"#b5cfe4\"},{\"name\":\"TVT H490\",\"hex\":\"#c0cbd4\"},{\"name\":\"TVT G356\",\"hex\":\"#bfd6e9\"},{\"name\":\"TVT X356\",\"hex\":\"#c9d9e5\"},{\"name\":\"TVT G490\",\"hex\":\"#cfd7dd\"},{\"name\":\"TVT F490\",\"hex\":\"#d8dee3\"},{\"name\":\"TVT Y356\",\"hex\":\"#dae3ea\"},{\"name\":\"TVT F353\",\"hex\":\"#dde5ec\"},{\"name\":\"TVT J357\",\"hex\":\"#93bdd9\"},{\"name\":\"TVT J437\",\"hex\":\"#96b9ce\"},{\"name\":\"TVT V432\",\"hex\":\"#9eb3c1\"},{\"name\":\"TVT X432\",\"hex\":\"#aec1cd\"},{\"name\":\"TVT X354\",\"hex\":\"#b8cede\"},{\"name\":\"TVT X433\",\"hex\":\"#d1dce3\"},{\"name\":\"TVT G354\",\"hex\":\"#d0e0ea\"},{\"name\":\"TVT F354\",\"hex\":\"#d9e6ee\"},{\"name\":\"TVT K362\",\"hex\":\"#5a9abb\"},{\"name\":\"TVT S358\",\"hex\":\"#61a4c9\"},{\"name\":\"TVT V361\",\"hex\":\"#64a2c6\"},{\"name\":\"TVT J359\",\"hex\":\"#74aed0\"},{\"name\":\"TVT J361\",\"hex\":\"#78b5d6\"},{\"name\":\"TVT J362\",\"hex\":\"#82b7d3\"},{\"name\":\"TVT V362\",\"hex\":\"#87b3c9\"},{\"name\":\"TVT X361\",\"hex\":\"#8fc3df\"},{\"name\":\"TVT X362\",\"hex\":\"#aacada\"},{\"name\":\"TVT H357\",\"hex\":\"#a8cee4\"},{\"name\":\"TVT H359\",\"hex\":\"#afd3e5\"},{\"name\":\"TVT H437\",\"hex\":\"#b6d5e5\"},{\"name\":\"TVT G437\",\"hex\":\"#d1e3ec\"},{\"name\":\"TVT J360\",\"hex\":\"#69c1e5\"},{\"name\":\"TVT V360\",\"hex\":\"#72bad6\"},{\"name\":\"TVT V359\",\"hex\":\"#78aec7\"},{\"name\":\"TVT V358\",\"hex\":\"#8fc7e0\"},{\"name\":\"TVT V437\",\"hex\":\"#9bb9c7\"},{\"name\":\"TVT J438\",\"hex\":\"#a4b9c1\"},{\"name\":\"TVT H362\",\"hex\":\"#a3c7d8\"},{\"name\":\"TVT H361\",\"hex\":\"#a0cfe2\"},{\"name\":\"TVT X357\",\"hex\":\"#a8cada\"},{\"name\":\"TVT H358\",\"hex\":\"#bed9e5\"},{\"name\":\"TVT G362\",\"hex\":\"#bfd9e5\"},{\"name\":\"TVT X358\",\"hex\":\"#c3d9e3\"},{\"name\":\"TVT Y361\",\"hex\":\"#c4e0ec\"},{\"name\":\"TVT G357\",\"hex\":\"#c7dae3\"},{\"name\":\"TVT V363\",\"hex\":\"#66a5bb\"},{\"name\":\"TVT J363\",\"hex\":\"#74b5cb\"},{\"name\":\"TVT V365\",\"hex\":\"#80adbc\"},{\"name\":\"TVT V364\",\"hex\":\"#9ac3d2\"},{\"name\":\"TVT H360\",\"hex\":\"#97d6ec\"},{\"name\":\"TVT X363\",\"hex\":\"#9accdd\"},{\"name\":\"TVT H365\",\"hex\":\"#a6d8e8\"},{\"name\":\"TVT X365\",\"hex\":\"#afcbd5\"},{\"name\":\"TVT H364\",\"hex\":\"#b3d7e2\"},{\"name\":\"TVT H438\",\"hex\":\"#bdcdd2\"},{\"name\":\"TVT X437\",\"hex\":\"#ccd9dd\"},{\"name\":\"TVT J365\",\"hex\":\"#61bad0\"},{\"name\":\"TVT V366\",\"hex\":\"#6fb1c1\"},{\"name\":\"TVT J364\",\"hex\":\"#76c2d5\"},{\"name\":\"TVT G363\",\"hex\":\"#b9dfe9\"},{\"name\":\"TVT G360\",\"hex\":\"#bfe5ee\"},{\"name\":\"TVT X359\",\"hex\":\"#c1d8de\"},{\"name\":\"TVT X360\",\"hex\":\"#c1e0e8\"},{\"name\":\"TVT G361\",\"hex\":\"#bfdfe7\"},{\"name\":\"TVT G365\",\"hex\":\"#c2e2e9\"},{\"name\":\"TVT X364\",\"hex\":\"#c7dee3\"},{\"name\":\"TVT G359\",\"hex\":\"#ccdee3\"},{\"name\":\"TVT Y437\",\"hex\":\"#d3dee1\"},{\"name\":\"TVT J491\",\"hex\":\"#b7c7ca\"},{\"name\":\"TVT G358\",\"hex\":\"#cee2e6\"},{\"name\":\"TVT Y365\",\"hex\":\"#d3dfe1\"},{\"name\":\"TVT Y363\",\"hex\":\"#d3e5e8\"},{\"name\":\"TVT Y360\",\"hex\":\"#d4e5e8\"},{\"name\":\"TVT Y364\",\"hex\":\"#d9e6e8\"},{\"name\":\"TVT Y362\",\"hex\":\"#d8e5e7\"},{\"name\":\"TVT J366\",\"hex\":\"#5eb9c5\"},{\"name\":\"TVT X366\",\"hex\":\"#bfdce0\"},{\"name\":\"TVT G364\",\"hex\":\"#c1dde0\"},{\"name\":\"TVT Y357\",\"hex\":\"#d2e3e5\"},{\"name\":\"TVT F363\",\"hex\":\"#d3e9ec\"},{\"name\":\"TVT F361\",\"hex\":\"#d7e9eb\"},{\"name\":\"TVT S367\",\"hex\":\"#8aa9aa\"},{\"name\":\"TVT H367\",\"hex\":\"#9dc3c6\"},{\"name\":\"TVT V367\",\"hex\":\"#b6c9ca\"},{\"name\":\"TVT G367\",\"hex\":\"#b9d7d9\"},{\"name\":\"TVT F367\",\"hex\":\"#d7e9ea\"},{\"name\":\"TVT F362\",\"hex\":\"#dae7e8\"},{\"name\":\"TVT F364\",\"hex\":\"#dbeaeb\"},{\"name\":\"TVT F360\",\"hex\":\"#dceaea\"},{\"name\":\"TVT Y358\",\"hex\":\"#dfebeb\"},{\"name\":\"TVT J368\",\"hex\":\"#94bdbb\"},{\"name\":\"TVT H368\",\"hex\":\"#c2dedb\"},{\"name\":\"TVT Y359\",\"hex\":\"#e0ebea\"},{\"name\":\"TVT K370\",\"hex\":\"#87bdb4\"},{\"name\":\"TVT V370\",\"hex\":\"#8ab8ae\"},{\"name\":\"TVT V369\",\"hex\":\"#a7c5bf\"},{\"name\":\"TVT H369\",\"hex\":\"#a8c9c3\"},{\"name\":\"TVT G369\",\"hex\":\"#c3dbd6\"},{\"name\":\"TVT Y368\",\"hex\":\"#e3ecea\"},{\"name\":\"TVT F437\",\"hex\":\"#e3ecea\"},{\"name\":\"TVT F359\",\"hex\":\"#e3ecea\"},{\"name\":\"TVT F371\",\"hex\":\"#e5eeec\"},{\"name\":\"TVT V371\",\"hex\":\"#6ec3ae\"},{\"name\":\"TVT J369\",\"hex\":\"#81a79e\"},{\"name\":\"TVT J371\",\"hex\":\"#71ceb5\"},{\"name\":\"TVT V443\",\"hex\":\"#97b6ae\"},{\"name\":\"TVT H371\",\"hex\":\"#a6e4d3\"},{\"name\":\"TVT X371\",\"hex\":\"#ace2d4\"},{\"name\":\"TVT X368\",\"hex\":\"#d7e3e0\"},{\"name\":\"TVT J370\",\"hex\":\"#abd7ca\"},{\"name\":\"TVT V368\",\"hex\":\"#b9d1ca\"},{\"name\":\"TVT X443\",\"hex\":\"#b6cfc6\"},{\"name\":\"TVT X369\",\"hex\":\"#cfe0da\"},{\"name\":\"TVT J372\",\"hex\":\"#99dbbe\"},{\"name\":\"TVT Y371\",\"hex\":\"#d8ebe2\"},{\"name\":\"TVT G371\",\"hex\":\"#d9ede4\"},{\"name\":\"TVT Y442\",\"hex\":\"#e8efec\"},{\"name\":\"TVT V372\",\"hex\":\"#94cfb2\"},{\"name\":\"TVT V374\",\"hex\":\"#afc7bb\"},{\"name\":\"TVT X372\",\"hex\":\"#c3e4d4\"},{\"name\":\"TVT H372\",\"hex\":\"#c4e7d5\"},{\"name\":\"TVT Y443\",\"hex\":\"#d0e0d8\"},{\"name\":\"TVT F369\",\"hex\":\"#e4eee9\"},{\"name\":\"TVT J373\",\"hex\":\"#8cd0ab\"},{\"name\":\"TVT V373\",\"hex\":\"#9cc4af\"},{\"name\":\"TVT Y372\",\"hex\":\"#d9e8e0\"},{\"name\":\"TVT H373\",\"hex\":\"#b5e2c8\"},{\"name\":\"TVT H442\",\"hex\":\"#c7d8ce\"},{\"name\":\"TVT Y369\",\"hex\":\"#e0eae4\"},{\"name\":\"TVT J443\",\"hex\":\"#94b59f\"},{\"name\":\"TVT J374\",\"hex\":\"#9ac8aa\"},{\"name\":\"TVT H374\",\"hex\":\"#baddc6\"},{\"name\":\"TVT X373\",\"hex\":\"#c6ddce\"},{\"name\":\"TVT G368\",\"hex\":\"#dae4dd\"},{\"name\":\"TVT G372\",\"hex\":\"#ddefe2\"},{\"name\":\"TVT H443\",\"hex\":\"#c0d7c6\"},{\"name\":\"TVT G373\",\"hex\":\"#d4eada\"},{\"name\":\"TVT Y373\",\"hex\":\"#dae8dd\"},{\"name\":\"TVT G374\",\"hex\":\"#ddede0\"},{\"name\":\"TVT X374\",\"hex\":\"#cfe1d2\"},{\"name\":\"TVT Y376\",\"hex\":\"#d5e0d5\"},{\"name\":\"TVT Y374\",\"hex\":\"#dde8dd\"},{\"name\":\"TVT G443\",\"hex\":\"#e4efe4\"},{\"name\":\"TVT F372\",\"hex\":\"#e7f1e7\"},{\"name\":\"TVT G442\",\"hex\":\"#dfe9dd\"},{\"name\":\"TVT V375\",\"hex\":\"#a9c1a2\"},{\"name\":\"TVT V379\",\"hex\":\"#abc0a4\"},{\"name\":\"TVT J377\",\"hex\":\"#b4c7ae\"},{\"name\":\"TVT H376\",\"hex\":\"#bdd0b6\"},{\"name\":\"TVT H377\",\"hex\":\"#c5d5c0\"},{\"name\":\"TVT F373\",\"hex\":\"#eaf2e7\"},{\"name\":\"TVT J378\",\"hex\":\"#aac99e\"},{\"name\":\"TVT H378\",\"hex\":\"#c5dbbb\"},{\"name\":\"TVT Y378\",\"hex\":\"#cdd9c8\"},{\"name\":\"TVT H380\",\"hex\":\"#9dcf81\"},{\"name\":\"TVT X379\",\"hex\":\"#d8e2d3\"},{\"name\":\"TVT F443\",\"hex\":\"#eff3ed\"},{\"name\":\"TVT X380\",\"hex\":\"#a2ce86\"},{\"name\":\"TVT G376\",\"hex\":\"#cfddc3\"},{\"name\":\"TVT X375\",\"hex\":\"#d0dac8\"},{\"name\":\"TVT X377\",\"hex\":\"#dfe6d9\"},{\"name\":\"TVT J381\",\"hex\":\"#abdc7e\"},{\"name\":\"TVT H379\",\"hex\":\"#bdde9c\"},{\"name\":\"TVT G380\",\"hex\":\"#bcde9d\"},{\"name\":\"TVT X378\",\"hex\":\"#b9c4ae\"},{\"name\":\"TVT Y380\",\"hex\":\"#cde2b8\"},{\"name\":\"TVT G381\",\"hex\":\"#d5e9bf\"},{\"name\":\"TVT F380\",\"hex\":\"#d8ecc2\"},{\"name\":\"TVT F442\",\"hex\":\"#e4e9df\"},{\"name\":\"TVT V383\",\"hex\":\"#9db085\"},{\"name\":\"TVT J384\",\"hex\":\"#bdccaa\"},{\"name\":\"TVT H381\",\"hex\":\"#cde8ad\"},{\"name\":\"TVT G379\",\"hex\":\"#d9e4cb\"},{\"name\":\"TVT G377\",\"hex\":\"#dce3d3\"},{\"name\":\"TVT Y375\",\"hex\":\"#e4e9de\"},{\"name\":\"TVT G378\",\"hex\":\"#e4f0d2\"},{\"name\":\"TVT F379\",\"hex\":\"#e2e7db\"},{\"name\":\"TVT Y379\",\"hex\":\"#e6ebdf\"},{\"name\":\"TVT F377\",\"hex\":\"#e8ece2\"},{\"name\":\"TVT S381\",\"hex\":\"#a2b57f\"},{\"name\":\"TVT S382\",\"hex\":\"#abc57c\"},{\"name\":\"TVT X383\",\"hex\":\"#becba7\"},{\"name\":\"TVT V381\",\"hex\":\"#c3d3a6\"},{\"name\":\"TVT G445\",\"hex\":\"#d9ddd1\"},{\"name\":\"TVT F381\",\"hex\":\"#eaf1de\"},{\"name\":\"TVT F378\",\"hex\":\"#ecefe5\"},{\"name\":\"TVT V385\",\"hex\":\"#bac1a3\"},{\"name\":\"TVT H383\",\"hex\":\"#d6e0b8\"},{\"name\":\"TVT H447\",\"hex\":\"#d6dacb\"},{\"name\":\"TVT G447\",\"hex\":\"#e0e3d8\"},{\"name\":\"TVT F376\",\"hex\":\"#e7eade\"},{\"name\":\"TVT J447\",\"hex\":\"#bbc0a9\"},{\"name\":\"TVT Y381\",\"hex\":\"#e4e9ce\"},{\"name\":\"TVT G383\",\"hex\":\"#e9efd4\"},{\"name\":\"TVT G446\",\"hex\":\"#e7e9de\"},{\"name\":\"TVT F374\",\"hex\":\"#eaece3\"},{\"name\":\"TVT Y377\",\"hex\":\"#eceee5\"},{\"name\":\"TVT F387\",\"hex\":\"#ebf1cc\"},{\"name\":\"TVT F382\",\"hex\":\"#eff3da\"},{\"name\":\"TVT J385\",\"hex\":\"#d7dea2\"},{\"name\":\"TVT H385\",\"hex\":\"#e4e8c5\"},{\"name\":\"TVT X446\",\"hex\":\"#d7d9c7\"},{\"name\":\"TVT H449\",\"hex\":\"#e6e9c9\"},{\"name\":\"TVT F450\",\"hex\":\"#e9eade\"},{\"name\":\"TVT Y386\",\"hex\":\"#eaebe3\"},{\"name\":\"TVT J387\",\"hex\":\"#d5d88d\"},{\"name\":\"TVT V386\",\"hex\":\"#c1c2a0\"},{\"name\":\"TVT J449\",\"hex\":\"#bdbfa3\"},{\"name\":\"TVT G387\",\"hex\":\"#e7e9b9\"},{\"name\":\"TVT G385\",\"hex\":\"#ecedd2\"},{\"name\":\"TVT Y385\",\"hex\":\"#e2e3d4\"},{\"name\":\"TVT S388\",\"hex\":\"#cfcf81\"},{\"name\":\"TVT J386\",\"hex\":\"#cbca89\"},{\"name\":\"TVT V387\",\"hex\":\"#cece8e\"},{\"name\":\"TVT H387\",\"hex\":\"#e2e3a5\"},{\"name\":\"TVT H386\",\"hex\":\"#e0dfb6\"},{\"name\":\"TVT G386\",\"hex\":\"#e6e6d0\"},{\"name\":\"TVT F385\",\"hex\":\"#f0f0dc\"},{\"name\":\"TVT Y446\",\"hex\":\"#e7e7d9\"},{\"name\":\"TVT F451\",\"hex\":\"#e9e9dc\"},{\"name\":\"TVT F386\",\"hex\":\"#f0f0e4\"},{\"name\":\"TVT F447\",\"hex\":\"#edede4\"},{\"name\":\"TVT K451\",\"hex\":\"#b2ae7a\"},{\"name\":\"TVT J388\",\"hex\":\"#e0dd7a\"},{\"name\":\"TVT J389\",\"hex\":\"#e6e095\"},{\"name\":\"TVT J451\",\"hex\":\"#c5c4a1\"},{\"name\":\"TVT V450\",\"hex\":\"#c1bfa3\"},{\"name\":\"TVT H451\",\"hex\":\"#d5d3b1\"},{\"name\":\"TVT G451\",\"hex\":\"#e7e6cc\"},{\"name\":\"TVT G450\",\"hex\":\"#e1e0cd\"},{\"name\":\"TVT N389\",\"hex\":\"#cbbf67\"},{\"name\":\"TVT K389\",\"hex\":\"#d7cc6c\"},{\"name\":\"TVT J450\",\"hex\":\"#b7b28d\"},{\"name\":\"TVT X387\",\"hex\":\"#e1dba3\"},{\"name\":\"TVT H389\",\"hex\":\"#eae5a9\"},{\"name\":\"TVT X389\",\"hex\":\"#eae5ba\"},{\"name\":\"TVT G389\",\"hex\":\"#f1ecbc\"},{\"name\":\"TVT Y387\",\"hex\":\"#ede9c6\"},{\"name\":\"TVT F391\",\"hex\":\"#f1edcb\"},{\"name\":\"TVT Y449\",\"hex\":\"#f2eecf\"},{\"name\":\"TVT G449\",\"hex\":\"#f7f4d4\"},{\"name\":\"TVT F301\",\"hex\":\"#f6f4e1\"},{\"name\":\"TVT F449\",\"hex\":\"#f6f4e6\"},{\"name\":\"TVT F486\",\"hex\":\"#ebeae3\"},{\"name\":\"TVT J452\",\"hex\":\"#b3a975\"},{\"name\":\"TVT S389\",\"hex\":\"#d8cb7c\"},{\"name\":\"TVT J391\",\"hex\":\"#e0cf7b\"},{\"name\":\"TVT V391\",\"hex\":\"#e3d581\"},{\"name\":\"TVT X300\",\"hex\":\"#f2e18c\"},{\"name\":\"TVT H391\",\"hex\":\"#e9da91\"},{\"name\":\"TVT J455\",\"hex\":\"#c1bc9e\"},{\"name\":\"TVT X449\",\"hex\":\"#c8c3a2\"},{\"name\":\"TVT X301\",\"hex\":\"#f8eaa6\"},{\"name\":\"TVT X391\",\"hex\":\"#eee4a8\"},{\"name\":\"TVT G391\",\"hex\":\"#eee5ac\"},{\"name\":\"TVT X452\",\"hex\":\"#d9d4b2\"},{\"name\":\"TVT Y391\",\"hex\":\"#f2ebbe\"},{\"name\":\"TVT X451\",\"hex\":\"#e1ddc5\"},{\"name\":\"TVT Y389\",\"hex\":\"#f1eccf\"},{\"name\":\"TVT Y451\",\"hex\":\"#ebe7d3\"},{\"name\":\"TVT F389\",\"hex\":\"#f1ecd3\"},{\"name\":\"TVT Y390\",\"hex\":\"#f6f1d8\"},{\"name\":\"TVT F453\",\"hex\":\"#e9e6d6\"},{\"name\":\"TVT G455\",\"hex\":\"#ebe8d9\"},{\"name\":\"TVT F455\",\"hex\":\"#edebde\"},{\"name\":\"TVT F446\",\"hex\":\"#f1f0eb\"},{\"name\":\"TVT V300\",\"hex\":\"#eccd5a\"},{\"name\":\"TVT N390\",\"hex\":\"#d9c262\"},{\"name\":\"TVT K455\",\"hex\":\"#b0a57a\"},{\"name\":\"TVT K391\",\"hex\":\"#dbc76d\"},{\"name\":\"TVT S301\",\"hex\":\"#eed270\"},{\"name\":\"TVT V301\",\"hex\":\"#f4e083\"},{\"name\":\"TVT X453\",\"hex\":\"#cabf99\"},{\"name\":\"TVT J390\",\"hex\":\"#f8e592\"},{\"name\":\"TVT J300\",\"hex\":\"#f7e295\"},{\"name\":\"TVT V452\",\"hex\":\"#d0c79f\"},{\"name\":\"TVT J301\",\"hex\":\"#f9e49b\"},{\"name\":\"TVT V390\",\"hex\":\"#eede9a\"},{\"name\":\"TVT X302\",\"hex\":\"#f3e1a1\"},{\"name\":\"TVT H301\",\"hex\":\"#f9eaad\"},{\"name\":\"TVT H300\",\"hex\":\"#f7e7ae\"},{\"name\":\"TVT Y301\",\"hex\":\"#f7ecc1\"},{\"name\":\"TVT G453\",\"hex\":\"#e2dabe\"},{\"name\":\"TVT X390\",\"hex\":\"#f7eecc\"},{\"name\":\"TVT Y300\",\"hex\":\"#f2eacb\"},{\"name\":\"TVT F304\",\"hex\":\"#f7f0d5\"},{\"name\":\"TVT G301\",\"hex\":\"#f7f1d5\"},{\"name\":\"TVT F394\",\"hex\":\"#efead7\"},{\"name\":\"TVT F397\",\"hex\":\"#f1ecda\"},{\"name\":\"TVT V302\",\"hex\":\"#edce6d\"},{\"name\":\"TVT K301\",\"hex\":\"#feda6e\"},{\"name\":\"TVT K300\",\"hex\":\"#fcd771\"},{\"name\":\"TVT H453\",\"hex\":\"#c4b68c\"},{\"name\":\"TVT X457\",\"hex\":\"#c2b79a\"},{\"name\":\"TVT H304\",\"hex\":\"#fbe19a\"},{\"name\":\"TVT X455\",\"hex\":\"#c7bda2\"},{\"name\":\"TVT H454\",\"hex\":\"#daca9f\"},{\"name\":\"TVT V458\",\"hex\":\"#c1bba7\"},{\"name\":\"TVT Y304\",\"hex\":\"#f3e2b4\"},{\"name\":\"TVT Y392\",\"hex\":\"#ebdeb7\"},{\"name\":\"TVT G454\",\"hex\":\"#e8dcbb\"},{\"name\":\"TVT G304\",\"hex\":\"#f8ebc1\"},{\"name\":\"TVT G397\",\"hex\":\"#f2e7c3\"},{\"name\":\"TVT Y455\",\"hex\":\"#e2dbc7\"},{\"name\":\"TVT G300\",\"hex\":\"#f7efd6\"},{\"name\":\"TVT F305\",\"hex\":\"#f3ebd4\"},{\"name\":\"TVT F454\",\"hex\":\"#f1ead6\"},{\"name\":\"TVT Y394\",\"hex\":\"#efe9d9\"},{\"name\":\"TVT F396\",\"hex\":\"#f2ecda\"},{\"name\":\"TVT F395\",\"hex\":\"#f7f1e0\"},{\"name\":\"TVT V392\",\"hex\":\"#d9bf7b\"},{\"name\":\"TVT K397\",\"hex\":\"#f3cb77\"},{\"name\":\"TVT J304\",\"hex\":\"#fcd87c\"},{\"name\":\"TVT J303\",\"hex\":\"#fcd581\"},{\"name\":\"TVT J393\",\"hex\":\"#edce8a\"},{\"name\":\"TVT J397\",\"hex\":\"#f6d995\"},{\"name\":\"TVT Y397\",\"hex\":\"#f0d697\"},{\"name\":\"TVT X303\",\"hex\":\"#f1d89e\"},{\"name\":\"TVT H458\",\"hex\":\"#cec3ac\"},{\"name\":\"TVT H397\",\"hex\":\"#f8e2aa\"},{\"name\":\"TVT Y457\",\"hex\":\"#d4cbb4\"},{\"name\":\"TVT Y303\",\"hex\":\"#f6e3b6\"},{\"name\":\"TVT X305\",\"hex\":\"#f3e4c0\"},{\"name\":\"TVT G305\",\"hex\":\"#f3e6c4\"},{\"name\":\"TVT G306\",\"hex\":\"#f7e9cb\"},{\"name\":\"TVT G394\",\"hex\":\"#f0e5cb\"},{\"name\":\"TVT Y460\",\"hex\":\"#e6e0d3\"},{\"name\":\"TVT Y305\",\"hex\":\"#f2ead6\"},{\"name\":\"TVT Y454\",\"hex\":\"#ede6d5\"},{\"name\":\"TVT F459\",\"hex\":\"#ece5d4\"},{\"name\":\"TVT F460\",\"hex\":\"#efebe2\"},{\"name\":\"TVT V308\",\"hex\":\"#f2bb5e\"},{\"name\":\"TVT X304\",\"hex\":\"#fec55f\"},{\"name\":\"TVT V303\",\"hex\":\"#fac662\"},{\"name\":\"TVT K394\",\"hex\":\"#d1af70\"},{\"name\":\"TVT K304\",\"hex\":\"#fecb69\"},{\"name\":\"TVT V456\",\"hex\":\"#c9ad7d\"},{\"name\":\"TVT J305\",\"hex\":\"#f7cd84\"},{\"name\":\"TVT J394\",\"hex\":\"#e4c487\"},{\"name\":\"TVT H460\",\"hex\":\"#cdb890\"},{\"name\":\"TVT J458\",\"hex\":\"#c4b499\"},{\"name\":\"TVT J307\",\"hex\":\"#fcd38e\"},{\"name\":\"TVT V305\",\"hex\":\"#f9d89a\"},{\"name\":\"TVT J456\",\"hex\":\"#ddc69d\"},{\"name\":\"TVT H310\",\"hex\":\"#f9d79d\"},{\"name\":\"TVT H305\",\"hex\":\"#f6dcac\"},{\"name\":\"TVT X456\",\"hex\":\"#e2d1b1\"},{\"name\":\"TVT Y398\",\"hex\":\"#ebd6b0\"},{\"name\":\"TVT H394\",\"hex\":\"#ebd6b1\"},{\"name\":\"TVT H306\",\"hex\":\"#f9e2bb\"},{\"name\":\"TVT G310\",\"hex\":\"#f8e1ba\"},{\"name\":\"TVT G460\",\"hex\":\"#e6d6b8\"},{\"name\":\"TVT G458\",\"hex\":\"#dbd1be\"},{\"name\":\"TVT Y393\",\"hex\":\"#f0e2c8\"},{\"name\":\"TVT G396\",\"hex\":\"#f3e5ca\"},{\"name\":\"TVT Y306\",\"hex\":\"#f3e8d2\"},{\"name\":\"TVT F310\",\"hex\":\"#f3ebdd\"},{\"name\":\"TVT F399\",\"hex\":\"#f7f0e3\"},{\"name\":\"TVT S456\",\"hex\":\"#b09770\"},{\"name\":\"TVT K305\",\"hex\":\"#fbbb5d\"},{\"name\":\"TVT K308\",\"hex\":\"#ffbe5c\"},{\"name\":\"TVT K307\",\"hex\":\"#ffc776\"},{\"name\":\"TVT J308\",\"hex\":\"#fdc97a\"},{\"name\":\"TVT K306\",\"hex\":\"#f7c884\"},{\"name\":\"TVT X398\",\"hex\":\"#e4bf87\"},{\"name\":\"TVT J311\",\"hex\":\"#f8cb88\"},{\"name\":\"TVT Y309\",\"hex\":\"#fbcc89\"},{\"name\":\"TVT X393\",\"hex\":\"#e2c494\"},{\"name\":\"TVT J306\",\"hex\":\"#f9d49a\"},{\"name\":\"TVT H308\",\"hex\":\"#f9d7a0\"},{\"name\":\"TVT Y395\",\"hex\":\"#deceb6\"},{\"name\":\"TVT Y400\",\"hex\":\"#e8d2b4\"},{\"name\":\"TVT G308\",\"hex\":\"#f4dcb6\"},{\"name\":\"TVT F308\",\"hex\":\"#f7e7cf\"},{\"name\":\"TVT K395\",\"hex\":\"#cca36d\"},{\"name\":\"TVT V399\",\"hex\":\"#d0a36f\"},{\"name\":\"TVT K310\",\"hex\":\"#f4b767\"},{\"name\":\"TVT J400\",\"hex\":\"#d9a973\"},{\"name\":\"TVT V395\",\"hex\":\"#c2a47f\"},{\"name\":\"TVT J395\",\"hex\":\"#e0b174\"},{\"name\":\"TVT V400\",\"hex\":\"#ceab84\"},{\"name\":\"TVT X400\",\"hex\":\"#d9b993\"},{\"name\":\"TVT J396\",\"hex\":\"#efca9b\"},{\"name\":\"TVT J309\",\"hex\":\"#fad6aa\"},{\"name\":\"TVT J484\",\"hex\":\"#cbbeaf\"},{\"name\":\"TVT X399\",\"hex\":\"#e8cca9\"},{\"name\":\"TVT X461\",\"hex\":\"#ddc8ae\"},{\"name\":\"TVT H396\",\"hex\":\"#f3d6af\"},{\"name\":\"TVT G400\",\"hex\":\"#f0d3b0\"},{\"name\":\"TVT G466\",\"hex\":\"#e0cbb2\"},{\"name\":\"TVT Y402\",\"hex\":\"#f0d4b4\"},{\"name\":\"TVT H399\",\"hex\":\"#f3dbbe\"},{\"name\":\"TVT Y403\",\"hex\":\"#f0dbc0\"},{\"name\":\"TVT G461\",\"hex\":\"#e8d7c2\"},{\"name\":\"TVT F403\",\"hex\":\"#f8e2c9\"},{\"name\":\"TVT F402\",\"hex\":\"#f7e2c9\"},{\"name\":\"TVT F404\",\"hex\":\"#f3e3ce\"},{\"name\":\"TVT G462\",\"hex\":\"#ebddcc\"},{\"name\":\"TVT Y471\",\"hex\":\"#e6dacc\"},{\"name\":\"TVT G463\",\"hex\":\"#e9dccc\"},{\"name\":\"TVT G399\",\"hex\":\"#f8e9d5\"},{\"name\":\"TVT F315\",\"hex\":\"#f7e7d4\"},{\"name\":\"TVT Y483\",\"hex\":\"#dfd7ce\"},{\"name\":\"TVT Y461\",\"hex\":\"#f0e3d3\"},{\"name\":\"TVT Y312\",\"hex\":\"#f3e5d4\"},{\"name\":\"TVT Y485\",\"hex\":\"#e2dad0\"},{\"name\":\"TVT G482\",\"hex\":\"#e3ded8\"},{\"name\":\"TVT F464\",\"hex\":\"#efe6db\"},{\"name\":\"TVT J401\",\"hex\":\"#d19f6a\"},{\"name\":\"TVT K463\",\"hex\":\"#be9b7b\"},{\"name\":\"TVT X309\",\"hex\":\"#f7b46e\"},{\"name\":\"TVT J462\",\"hex\":\"#c4a689\"},{\"name\":\"TVT K309\",\"hex\":\"#fdbc75\"},{\"name\":\"TVT J466\",\"hex\":\"#c1a58b\"},{\"name\":\"TVT K399\",\"hex\":\"#e8ba88\"},{\"name\":\"TVT J461\",\"hex\":\"#d0b08e\"},{\"name\":\"TVT V482\",\"hex\":\"#b5a79a\"},{\"name\":\"TVT V461\",\"hex\":\"#cdb195\"},{\"name\":\"TVT J403\",\"hex\":\"#e8ba8f\"},{\"name\":\"TVT H400\",\"hex\":\"#e6bf95\"},{\"name\":\"TVT X402\",\"hex\":\"#ebbd91\"},{\"name\":\"TVT X310\",\"hex\":\"#efc394\"},{\"name\":\"TVT J485\",\"hex\":\"#bfb3a7\"},{\"name\":\"TVT H467\",\"hex\":\"#cdb7a3\"},{\"name\":\"TVT X463\",\"hex\":\"#cab7a4\"},{\"name\":\"TVT H403\",\"hex\":\"#ecc6a3\"},{\"name\":\"TVT H402\",\"hex\":\"#f5cfaa\"},{\"name\":\"TVT H465\",\"hex\":\"#d8c1ab\"},{\"name\":\"TVT X482\",\"hex\":\"#cabdaf\"},{\"name\":\"TVT X483\",\"hex\":\"#c8bcb1\"},{\"name\":\"TVT H462\",\"hex\":\"#ddc6af\"},{\"name\":\"TVT G404\",\"hex\":\"#f0d1b4\"},{\"name\":\"TVT G403\",\"hex\":\"#f1d3b6\"},{\"name\":\"TVT G402\",\"hex\":\"#f7d9b9\"},{\"name\":\"TVT H461\",\"hex\":\"#e3ceb9\"},{\"name\":\"TVT G465\",\"hex\":\"#e2cfbc\"},{\"name\":\"TVT X312\",\"hex\":\"#f3d8bc\"},{\"name\":\"TVT H470\",\"hex\":\"#e6d1bb\"},{\"name\":\"TVT X466\",\"hex\":\"#dccdbe\"},{\"name\":\"TVT Y463\",\"hex\":\"#ddcebf\"},{\"name\":\"TVT Y315\",\"hex\":\"#f3dbc4\"},{\"name\":\"TVT Y404\",\"hex\":\"#f4e0cd\"},{\"name\":\"TVT Y313\",\"hex\":\"#f0dfcd\"},{\"name\":\"TVT Y466\",\"hex\":\"#e5d9cd\"},{\"name\":\"TVT G470\",\"hex\":\"#eedfcf\"},{\"name\":\"TVT G468\",\"hex\":\"#e3d8ce\"},{\"name\":\"TVT Y482\",\"hex\":\"#ded7d0\"},{\"name\":\"TVT F465\",\"hex\":\"#ebdfd2\"},{\"name\":\"TVT F312\",\"hex\":\"#f8e8d8\"},{\"name\":\"TVT G464\",\"hex\":\"#e9ded2\"},{\"name\":\"TVT F463\",\"hex\":\"#f0e5db\"},{\"name\":\"TVT F467\",\"hex\":\"#f0e6db\"},{\"name\":\"TVT F501\",\"hex\":\"#ece8e4\"},{\"name\":\"TVT J467\",\"hex\":\"#b1957f\"},{\"name\":\"TVT K312\",\"hex\":\"#f7ae75\"},{\"name\":\"TVT X468\",\"hex\":\"#b59f8e\"},{\"name\":\"TVT J404\",\"hex\":\"#dea87e\"},{\"name\":\"TVT J483\",\"hex\":\"#b5a291\"},{\"name\":\"TVT J468\",\"hex\":\"#baa391\"},{\"name\":\"TVT J482\",\"hex\":\"#baaa9c\"},{\"name\":\"TVT X467\",\"hex\":\"#baaca0\"},{\"name\":\"TVT J470\",\"hex\":\"#d4b399\"},{\"name\":\"TVT J312\",\"hex\":\"#fac298\"},{\"name\":\"TVT X464\",\"hex\":\"#cbb4a3\"},{\"name\":\"TVT J464\",\"hex\":\"#d1b8a4\"},{\"name\":\"TVT H404\",\"hex\":\"#ecc3a1\"},{\"name\":\"TVT J313\",\"hex\":\"#f7c9a5\"},{\"name\":\"TVT H483\",\"hex\":\"#c9bdb3\"},{\"name\":\"TVT H312\",\"hex\":\"#f6ceb0\"},{\"name\":\"TVT X404\",\"hex\":\"#f0ccb0\"},{\"name\":\"TVT H464\",\"hex\":\"#ddc9b7\"},{\"name\":\"TVT G312\",\"hex\":\"#f5d9c1\"},{\"name\":\"TVT H313\",\"hex\":\"#f7dac3\"},{\"name\":\"TVT H463\",\"hex\":\"#e6d3c2\"},{\"name\":\"TVT H468\",\"hex\":\"#daccc1\"},{\"name\":\"TVT G315\",\"hex\":\"#f4ddca\"},{\"name\":\"TVT Y464\",\"hex\":\"#e1d2c5\"},{\"name\":\"TVT Y469\",\"hex\":\"#e4d4c8\"},{\"name\":\"TVT F409\",\"hex\":\"#f1ddcc\"},{\"name\":\"TVT G471\",\"hex\":\"#e8dacf\"},{\"name\":\"TVT X480\",\"hex\":\"#e3d9d1\"},{\"name\":\"TVT Y470\",\"hex\":\"#eaddd3\"},{\"name\":\"TVT F469\",\"hex\":\"#efe3da\"},{\"name\":\"TVT F319\",\"hex\":\"#f7ebe1\"},{\"name\":\"TVT F471\",\"hex\":\"#f0e7e0\"},{\"name\":\"TVT Y480\",\"hex\":\"#eae4df\"},{\"name\":\"TVT V464\",\"hex\":\"#aa9080\"},{\"name\":\"TVT K405\",\"hex\":\"#d29872\"},{\"name\":\"TVT K480\",\"hex\":\"#b39e8f\"},{\"name\":\"TVT V312\",\"hex\":\"#eca97a\"},{\"name\":\"TVT V313\",\"hex\":\"#f1a87a\"},{\"name\":\"TVT V465\",\"hex\":\"#b8a190\"},{\"name\":\"TVT J469\",\"hex\":\"#c9a690\"},{\"name\":\"TVT J465\",\"hex\":\"#c7a995\"},{\"name\":\"TVT V404\",\"hex\":\"#e2b18e\"},{\"name\":\"TVT X315\",\"hex\":\"#e9b38f\"},{\"name\":\"TVT V469\",\"hex\":\"#cbad98\"},{\"name\":\"TVT X407\",\"hex\":\"#d5b39d\"},{\"name\":\"TVT J405\",\"hex\":\"#e8bea3\"},{\"name\":\"TVT H409\",\"hex\":\"#edbfa3\"},{\"name\":\"TVT X471\",\"hex\":\"#d1b8a6\"},{\"name\":\"TVT X469\",\"hex\":\"#d6bba8\"},{\"name\":\"TVT V480\",\"hex\":\"#cbbcb2\"},{\"name\":\"TVT J480\",\"hex\":\"#cfbfb4\"},{\"name\":\"TVT X313\",\"hex\":\"#f7d0b5\"},{\"name\":\"TVT H471\",\"hex\":\"#dec4b4\"},{\"name\":\"TVT X465\",\"hex\":\"#d2c2b7\"},{\"name\":\"TVT H469\",\"hex\":\"#e0c8b9\"},{\"name\":\"TVT G406\",\"hex\":\"#f3d1ba\"},{\"name\":\"TVT Y407\",\"hex\":\"#e6cdbc\"},{\"name\":\"TVT G407\",\"hex\":\"#efd1bd\"},{\"name\":\"TVT G408\",\"hex\":\"#e6cebe\"},{\"name\":\"TVT X470\",\"hex\":\"#dfccbf\"},{\"name\":\"TVT G409\",\"hex\":\"#f4d7c3\"},{\"name\":\"TVT Y468\",\"hex\":\"#dccdc2\"},{\"name\":\"TVT G317\",\"hex\":\"#f5d9c8\"},{\"name\":\"TVT G469\",\"hex\":\"#e7d5c8\"},{\"name\":\"TVT F406\",\"hex\":\"#f9e1d2\"},{\"name\":\"TVT F407\",\"hex\":\"#f2ded1\"},{\"name\":\"TVT Y409\",\"hex\":\"#f1dfd2\"},{\"name\":\"TVT Y465\",\"hex\":\"#e6dbd3\"},{\"name\":\"TVT Y405\",\"hex\":\"#f1e0d5\"},{\"name\":\"TVT F483\",\"hex\":\"#e2dad5\"},{\"name\":\"TVT F408\",\"hex\":\"#eee0d7\"},{\"name\":\"TVT F474\",\"hex\":\"#e9ded7\"},{\"name\":\"TVT K470\",\"hex\":\"#b38870\"},{\"name\":\"TVT V405\",\"hex\":\"#cd9173\"},{\"name\":\"TVT J314\",\"hex\":\"#f5a87c\"},{\"name\":\"TVT J471\",\"hex\":\"#c69e89\"},{\"name\":\"TVT J408\",\"hex\":\"#d1a28b\"},{\"name\":\"TVT J406\",\"hex\":\"#e5a989\"},{\"name\":\"TVT J315\",\"hex\":\"#f7b994\"},{\"name\":\"TVT X409\",\"hex\":\"#eab89c\"},{\"name\":\"TVT X405\",\"hex\":\"#e3b59b\"},{\"name\":\"TVT V470\",\"hex\":\"#cfb6a8\"},{\"name\":\"TVT H406\",\"hex\":\"#f0c1a8\"},{\"name\":\"TVT H407\",\"hex\":\"#e6bfa8\"},{\"name\":\"TVT H315\",\"hex\":\"#f9c5a7\"},{\"name\":\"TVT H408\",\"hex\":\"#e1c1ae\"},{\"name\":\"TVT H317\",\"hex\":\"#f7cab4\"},{\"name\":\"TVT Y413\",\"hex\":\"#e7d1c6\"},{\"name\":\"TVT Y472\",\"hex\":\"#e1cec4\"},{\"name\":\"TVT G316\",\"hex\":\"#f9e0d2\"},{\"name\":\"TVT F473\",\"hex\":\"#e7d6cc\"},{\"name\":\"TVT G410\",\"hex\":\"#f2dbcf\"},{\"name\":\"TVT Y474\",\"hex\":\"#e1d4cd\"},{\"name\":\"TVT F414\",\"hex\":\"#eedfd7\"},{\"name\":\"TVT J474\",\"hex\":\"#b08e7f\"},{\"name\":\"TVT V471\",\"hex\":\"#b49385\"},{\"name\":\"TVT V409\",\"hex\":\"#dd9575\"},{\"name\":\"TVT J316\",\"hex\":\"#ed9a78\"},{\"name\":\"TVT H473\",\"hex\":\"#c6a497\"},{\"name\":\"TVT J317\",\"hex\":\"#f0aa8f\"},{\"name\":\"TVT J472\",\"hex\":\"#c7a99c\"},{\"name\":\"TVT V473\",\"hex\":\"#bfaaa2\"},{\"name\":\"TVT H316\",\"hex\":\"#f7b698\"},{\"name\":\"TVT V408\",\"hex\":\"#d2b0a3\"},{\"name\":\"TVT X472\",\"hex\":\"#d1b8ac\"},{\"name\":\"TVT G473\",\"hex\":\"#dbc2b6\"},{\"name\":\"TVT H410\",\"hex\":\"#eccbbd\"},{\"name\":\"TVT X319\",\"hex\":\"#f3d2c3\"},{\"name\":\"TVT Y408\",\"hex\":\"#e5d1c9\"},{\"name\":\"TVT Y410\",\"hex\":\"#eed7cd\"},{\"name\":\"TVT G474\",\"hex\":\"#e0d3cd\"},{\"name\":\"TVT F318\",\"hex\":\"#f4e5de\"},{\"name\":\"TVT F422\",\"hex\":\"#f2e3dd\"},{\"name\":\"TVT Y477\",\"hex\":\"#e7deda\"},{\"name\":\"TVT Y320\",\"hex\":\"#eee1db\"},{\"name\":\"TVT F420\",\"hex\":\"#ece7e5\"},{\"name\":\"TVT F481\",\"hex\":\"#ece7e5\"},{\"name\":\"TVT S473\",\"hex\":\"#ab9087\"},{\"name\":\"TVT S408\",\"hex\":\"#bf9181\"},{\"name\":\"TVT V410\",\"hex\":\"#c59484\"},{\"name\":\"TVT J410\",\"hex\":\"#d39a88\"},{\"name\":\"TVT V474\",\"hex\":\"#b79e96\"},{\"name\":\"TVT V475\",\"hex\":\"#bca39b\"},{\"name\":\"TVT X416\",\"hex\":\"#c9a79d\"},{\"name\":\"TVT X317\",\"hex\":\"#e7ad9c\"},{\"name\":\"TVT X410\",\"hex\":\"#deb9ac\"},{\"name\":\"TVT X318\",\"hex\":\"#ecbcad\"},{\"name\":\"TVT Y416\",\"hex\":\"#d8bbb2\"},{\"name\":\"TVT X475\",\"hex\":\"#d3bfb8\"},{\"name\":\"TVT X413\",\"hex\":\"#dec1b6\"},{\"name\":\"TVT X474\",\"hex\":\"#d0beb8\"},{\"name\":\"TVT X408\",\"hex\":\"#dec3b9\"},{\"name\":\"TVT Y316\",\"hex\":\"#f3cec1\"},{\"name\":\"TVT H414\",\"hex\":\"#eac9bf\"},{\"name\":\"TVT H319\",\"hex\":\"#f5d4ca\"},{\"name\":\"TVT X473\",\"hex\":\"#daccc7\"},{\"name\":\"TVT Y475\",\"hex\":\"#decdc7\"},{\"name\":\"TVT Y318\",\"hex\":\"#f3d8ce\"},{\"name\":\"TVT F412\",\"hex\":\"#ebd3cc\"},{\"name\":\"TVT G414\",\"hex\":\"#efd5cc\"},{\"name\":\"TVT G318\",\"hex\":\"#f2d6cd\"},{\"name\":\"TVT G319\",\"hex\":\"#f9e1d9\"},{\"name\":\"TVT Y317\",\"hex\":\"#f3dcd5\"},{\"name\":\"TVT G475\",\"hex\":\"#e7d7d2\"},{\"name\":\"TVT G422\",\"hex\":\"#eedad4\"},{\"name\":\"TVT F410\",\"hex\":\"#f4e4de\"},{\"name\":\"TVT Y420\",\"hex\":\"#e4dcd9\"},{\"name\":\"TVT Y473\",\"hex\":\"#e4dcd9\"},{\"name\":\"TVT F413\",\"hex\":\"#f2e2dc\"},{\"name\":\"TVT F416\",\"hex\":\"#f2e2dc\"},{\"name\":\"TVT F316\",\"hex\":\"#f7edea\"},{\"name\":\"TVT F477\",\"hex\":\"#f3ebe8\"},{\"name\":\"TVT K411\",\"hex\":\"#cf806c\"},{\"name\":\"TVT K317\",\"hex\":\"#e08a72\"},{\"name\":\"TVT V416\",\"hex\":\"#b99389\"},{\"name\":\"TVT J475\",\"hex\":\"#bd9f98\"},{\"name\":\"TVT J411\",\"hex\":\"#df9f90\"},{\"name\":\"TVT X316\",\"hex\":\"#eaa493\"},{\"name\":\"TVT H474\",\"hex\":\"#c8b3ad\"},{\"name\":\"TVT H477\",\"hex\":\"#d0b4ad\"},{\"name\":\"TVT H318\",\"hex\":\"#ecbeb3\"},{\"name\":\"TVT X477\",\"hex\":\"#cebcb7\"},{\"name\":\"TVT G412\",\"hex\":\"#eacbc3\"},{\"name\":\"TVT G416\",\"hex\":\"#e7cdc6\"},{\"name\":\"TVT H475\",\"hex\":\"#e1ccc6\"},{\"name\":\"TVT X320\",\"hex\":\"#f5d5cd\"},{\"name\":\"TVT Y322\",\"hex\":\"#f6d7d0\"},{\"name\":\"TVT Y321\",\"hex\":\"#eed9d3\"},{\"name\":\"TVT G413\",\"hex\":\"#f2dfda\"},{\"name\":\"TVT F321\",\"hex\":\"#f4e2dd\"},{\"name\":\"TVT F415\",\"hex\":\"#ecddd9\"},{\"name\":\"TVT F333\",\"hex\":\"#f1e4e1\"},{\"name\":\"TVT F325\",\"hex\":\"#f1e4e1\"},{\"name\":\"TVT K415\",\"hex\":\"#c18a82\"},{\"name\":\"TVT J413\",\"hex\":\"#ca9288\"},{\"name\":\"TVT J318\",\"hex\":\"#e39b8d\"},{\"name\":\"TVT X418\",\"hex\":\"#d29e96\"},{\"name\":\"TVT J414\",\"hex\":\"#d9a198\"},{\"name\":\"TVT V319\",\"hex\":\"#efa393\"},{\"name\":\"TVT X415\",\"hex\":\"#cca8a1\"},{\"name\":\"TVT J415\",\"hex\":\"#dab3ad\"},{\"name\":\"TVT H412\",\"hex\":\"#e3b9b2\"},{\"name\":\"TVT H413\",\"hex\":\"#e3bab3\"},{\"name\":\"TVT H479\",\"hex\":\"#d3c0bc\"},{\"name\":\"TVT Y422\",\"hex\":\"#e0ccc8\"},{\"name\":\"TVT Y412\",\"hex\":\"#e9cfcb\"},{\"name\":\"TVT G415\",\"hex\":\"#e5d2ce\"},{\"name\":\"TVT G479\",\"hex\":\"#e2d5d3\"},{\"name\":\"TVT F475\",\"hex\":\"#e9dedc\"},{\"name\":\"TVT G420\",\"hex\":\"#e9dedc\"},{\"name\":\"TVT Y323\",\"hex\":\"#f2e4e2\"},{\"name\":\"TVT Y423\",\"hex\":\"#eee2e0\"},{\"name\":\"TVT V413\",\"hex\":\"#c0877f\"},{\"name\":\"TVT V417\",\"hex\":\"#b39692\"},{\"name\":\"TVT V412\",\"hex\":\"#c6948d\"},{\"name\":\"TVT J476\",\"hex\":\"#bb948f\"},{\"name\":\"TVT J320\",\"hex\":\"#e5978d\"},{\"name\":\"TVT J412\",\"hex\":\"#dea59f\"},{\"name\":\"TVT J479\",\"hex\":\"#c5b0ae\"},{\"name\":\"TVT X412\",\"hex\":\"#d8b0ab\"},{\"name\":\"TVT J321\",\"hex\":\"#eab2ab\"},{\"name\":\"TVT X417\",\"hex\":\"#d4b6b3\"},{\"name\":\"TVT H416\",\"hex\":\"#dfbcb8\"},{\"name\":\"TVT X422\",\"hex\":\"#d6c0be\"},{\"name\":\"TVT X322\",\"hex\":\"#f2c4c0\"},{\"name\":\"TVT H415\",\"hex\":\"#e3c4c1\"},{\"name\":\"TVT H422\",\"hex\":\"#efc5c0\"},{\"name\":\"TVT H321\",\"hex\":\"#f0ccc7\"},{\"name\":\"TVT G418\",\"hex\":\"#eac8c5\"},{\"name\":\"TVT G335\",\"hex\":\"#efdbd9\"},{\"name\":\"TVT F326\",\"hex\":\"#f4ddda\"},{\"name\":\"TVT F329\",\"hex\":\"#f9e8e6\"},{\"name\":\"TVT F417\",\"hex\":\"#f1e3e1\"},{\"name\":\"TVT F334\",\"hex\":\"#f1e3e1\"},{\"name\":\"TVT K320\",\"hex\":\"#dc807b\"},{\"name\":\"TVT K319\",\"hex\":\"#e3847d\"},{\"name\":\"TVT J416\",\"hex\":\"#be8f8d\"},{\"name\":\"TVT X414\",\"hex\":\"#cb8e8a\"},{\"name\":\"TVT J319\",\"hex\":\"#ed9f99\"},{\"name\":\"TVT J422\",\"hex\":\"#d9a5a3\"},{\"name\":\"TVT Y414\",\"hex\":\"#dcc2c0\"},{\"name\":\"TVT H420\",\"hex\":\"#dcc2c0\"},{\"name\":\"TVT X321\",\"hex\":\"#eac8c7\"},{\"name\":\"TVT Y331\",\"hex\":\"#f0d3d2\"},{\"name\":\"TVT X323\",\"hex\":\"#f0d3d2\"},{\"name\":\"TVT Y417\",\"hex\":\"#eedbda\"},{\"name\":\"TVT F335\",\"hex\":\"#f4e6e5\"},{\"name\":\"TVT F337\",\"hex\":\"#f4e6e5\"},{\"name\":\"TVT V414\",\"hex\":\"#ad7675\"},{\"name\":\"TVT H418\",\"hex\":\"#e1aead\"},{\"name\":\"TVT H322\",\"hex\":\"#f3bfc0\"},{\"name\":\"TVT K419\",\"hex\":\"#ad7376\"},{\"name\":\"TVT K323\",\"hex\":\"#d77a7f\"},{\"name\":\"TVT J419\",\"hex\":\"#c49396\"},{\"name\":\"TVT J325\",\"hex\":\"#e29297\"},{\"name\":\"TVT G417\",\"hex\":\"#e2c2c4\"},{\"name\":\"TVT X333\",\"hex\":\"#e2c7c8\"},{\"name\":\"TVT Y418\",\"hex\":\"#e5c8c9\"},{\"name\":\"TVT Y332\",\"hex\":\"#e3c8c9\"},{\"name\":\"TVT F322\",\"hex\":\"#f4d9da\"},{\"name\":\"TVT V421\",\"hex\":\"#bc777e\"},{\"name\":\"TVT K420\",\"hex\":\"#ba7b80\"},{\"name\":\"TVT V419\",\"hex\":\"#b6868b\"},{\"name\":\"TVT K325\",\"hex\":\"#da7d86\"},{\"name\":\"TVT J326\",\"hex\":\"#d0878f\"},{\"name\":\"TVT V323\",\"hex\":\"#e29299\"},{\"name\":\"TVT H326\",\"hex\":\"#d9969d\"},{\"name\":\"TVT J323\",\"hex\":\"#e69da3\"},{\"name\":\"TVT H324\",\"hex\":\"#eca2ab\"},{\"name\":\"TVT X324\",\"hex\":\"#edafb6\"},{\"name\":\"TVT X325\",\"hex\":\"#ddb5ba\"},{\"name\":\"TVT H325\",\"hex\":\"#eeb7bc\"},{\"name\":\"TVT G326\",\"hex\":\"#e9bec3\"},{\"name\":\"TVT Y324\",\"hex\":\"#f1bfc5\"},{\"name\":\"TVT G322\",\"hex\":\"#f1ced1\"},{\"name\":\"TVT G334\",\"hex\":\"#eed1d4\"},{\"name\":\"TVT V330\",\"hex\":\"#b8737f\"},{\"name\":\"TVT K322\",\"hex\":\"#d46d7a\"},{\"name\":\"TVT V326\",\"hex\":\"#c58891\"},{\"name\":\"TVT J324\",\"hex\":\"#dc7e8e\"},{\"name\":\"TVT V325\",\"hex\":\"#ce979f\"},{\"name\":\"TVT J322\",\"hex\":\"#f0a3ad\"},{\"name\":\"TVT J421\",\"hex\":\"#e2b2ba\"},{\"name\":\"TVT V333\",\"hex\":\"#dab4ba\"},{\"name\":\"TVT X419\",\"hex\":\"#dabcc0\"},{\"name\":\"TVT G324\",\"hex\":\"#f6c6cd\"},{\"name\":\"TVT H335\",\"hex\":\"#eccacf\"},{\"name\":\"TVT G423\",\"hex\":\"#eecfd3\"},{\"name\":\"TVT F324\",\"hex\":\"#f4d1d7\"},{\"name\":\"TVT Y327\",\"hex\":\"#f2d4d9\"},{\"name\":\"TVT Y326\",\"hex\":\"#eed5d9\"},{\"name\":\"TVT G333\",\"hex\":\"#ecd7da\"},{\"name\":\"TVT L328\",\"hex\":\"#cd5e73\"},{\"name\":\"TVT S333\",\"hex\":\"#b6717e\"},{\"name\":\"TVT K332\",\"hex\":\"#c87081\"},{\"name\":\"TVT J327\",\"hex\":\"#dd7c91\"},{\"name\":\"TVT K421\",\"hex\":\"#c48792\"},{\"name\":\"TVT V327\",\"hex\":\"#d58d9b\"},{\"name\":\"TVT V324\",\"hex\":\"#dc8998\"},{\"name\":\"TVT X330\",\"hex\":\"#d29ca8\"},{\"name\":\"TVT H332\",\"hex\":\"#e2acb8\"},{\"name\":\"TVT X331\",\"hex\":\"#e0aeb9\"},{\"name\":\"TVT X327\",\"hex\":\"#e8b4bf\"},{\"name\":\"TVT X335\",\"hex\":\"#e0bac1\"},{\"name\":\"TVT X421\",\"hex\":\"#dfb7be\"},{\"name\":\"TVT G332\",\"hex\":\"#e9bec7\"},{\"name\":\"TVT H421\",\"hex\":\"#e8c5cc\"},{\"name\":\"TVT X423\",\"hex\":\"#e3c6cc\"},{\"name\":\"TVT F332\",\"hex\":\"#f2dadf\"},{\"name\":\"TVT F331\",\"hex\":\"#f6dee3\"},{\"name\":\"TVT G421\",\"hex\":\"#f0dbdf\"},{\"name\":\"TVT K329\",\"hex\":\"#cd6680\"},{\"name\":\"TVT V331\",\"hex\":\"#bd7688\"},{\"name\":\"TVT V332\",\"hex\":\"#bd7789\"},{\"name\":\"TVT K331\",\"hex\":\"#cf748a\"},{\"name\":\"TVT K328\",\"hex\":\"#d5738a\"},{\"name\":\"TVT J328\",\"hex\":\"#dd8a9f\"},{\"name\":\"TVT J331\",\"hex\":\"#e497ab\"},{\"name\":\"TVT J332\",\"hex\":\"#d999a8\"},{\"name\":\"TVT J335\",\"hex\":\"#d99eac\"},{\"name\":\"TVT J333\",\"hex\":\"#d7a3af\"},{\"name\":\"TVT J334\",\"hex\":\"#d9a8b4\"},{\"name\":\"TVT X334\",\"hex\":\"#e8b0be\"},{\"name\":\"TVT X332\",\"hex\":\"#d9b6be\"},{\"name\":\"TVT X326\",\"hex\":\"#e7bcc6\"},{\"name\":\"TVT H334\",\"hex\":\"#e4bec7\"},{\"name\":\"TVT H333\",\"hex\":\"#e2c0c9\"},{\"name\":\"TVT H423\",\"hex\":\"#e7c2cb\"},{\"name\":\"TVT F330\",\"hex\":\"#f0d0d8\"},{\"name\":\"TVT G331\",\"hex\":\"#f0cfd7\"},{\"name\":\"TVT Y334\",\"hex\":\"#f0d1d9\"},{\"name\":\"TVT Y330\",\"hex\":\"#ecd0d7\"},{\"name\":\"TVT V329\",\"hex\":\"#d07993\"},{\"name\":\"TVT J329\",\"hex\":\"#d98ca5\"},{\"name\":\"TVT H328\",\"hex\":\"#e8b0c0\"},{\"name\":\"TVT H331\",\"hex\":\"#eabbc9\"},{\"name\":\"TVT Y329\",\"hex\":\"#ebc3ce\"},{\"name\":\"TVT G328\",\"hex\":\"#eec4d0\"},{\"name\":\"TVT F328\",\"hex\":\"#efd1da\"},{\"name\":\"TVT V335\",\"hex\":\"#c37994\"},{\"name\":\"TVT V334\",\"hex\":\"#c5899f\"},{\"name\":\"TVT J336\",\"hex\":\"#da88a5\"},{\"name\":\"TVT J330\",\"hex\":\"#da89a4\"},{\"name\":\"TVT V328\",\"hex\":\"#d591a9\"},{\"name\":\"TVT X329\",\"hex\":\"#e2a7bb\"},{\"name\":\"TVT H329\",\"hex\":\"#edb2c6\"},{\"name\":\"TVT X328\",\"hex\":\"#e7baca\"},{\"name\":\"TVT Y337\",\"hex\":\"#e6d3da\"},{\"name\":\"TVT G329\",\"hex\":\"#f3d7e1\"},{\"name\":\"TVT Y328\",\"hex\":\"#ebd5dd\"},{\"name\":\"TVT H330\",\"hex\":\"#e29eb8\"},{\"name\":\"TVT G330\",\"hex\":\"#e7b5c8\"},{\"name\":\"TVT K339\",\"hex\":\"#ba889f\"},{\"name\":\"TVT H337\",\"hex\":\"#eccedc\"},{\"name\":\"TVT G337\",\"hex\":\"#edd8e1\"},{\"name\":\"TVT F425\",\"hex\":\"#f3e8ed\"},{\"name\":\"TVT J339\",\"hex\":\"#cea8bb\"},{\"name\":\"TVT X336\",\"hex\":\"#dcbecd\"},{\"name\":\"TVT H339\",\"hex\":\"#dfc4d2\"},{\"name\":\"TVT F421\",\"hex\":\"#f2e8ed\"},{\"name\":\"TVT F340\",\"hex\":\"#f2e8ed\"},{\"name\":\"TVT J337\",\"hex\":\"#d6a2c0\"},{\"name\":\"TVT V337\",\"hex\":\"#d2aac2\"},{\"name\":\"TVT G339\",\"hex\":\"#e7d4df\"},{\"name\":\"TVT J340\",\"hex\":\"#bd91ae\"},{\"name\":\"TVT V339\",\"hex\":\"#ae81a0\"},{\"name\":\"TVT X424\",\"hex\":\"#b89db0\"},{\"name\":\"TVT Y424\",\"hex\":\"#d0bac9\"},{\"name\":\"TVT H340\",\"hex\":\"#dcc0d3\"},{\"name\":\"TVT Y338\",\"hex\":\"#e8cadf\"},{\"name\":\"TVT K338\",\"hex\":\"#c37cb0\"},{\"name\":\"TVT J425\",\"hex\":\"#af92a8\"},{\"name\":\"TVT X338\",\"hex\":\"#dbb5d1\"},{\"name\":\"TVT X339\",\"hex\":\"#dabed3\"},{\"name\":\"TVT G425\",\"hex\":\"#dfcfdb\"},{\"name\":\"TVT Y340\",\"hex\":\"#e0cfdc\"},{\"name\":\"TVT G340\",\"hex\":\"#e5d2e0\"},{\"name\":\"TVT H425\",\"hex\":\"#cdb7c9\"},{\"name\":\"TVT X340\",\"hex\":\"#c9aec5\"},{\"name\":\"TVT V340\",\"hex\":\"#b292af\"},{\"name\":\"TVT X478\",\"hex\":\"#cbbbbb\"},{\"name\":\"TVT J501\",\"hex\":\"#cec4c4\"},{\"name\":\"TVT G501\",\"hex\":\"#e5dede\"},{\"name\":\"TVT J426\",\"hex\":\"#b9afbb\"},{\"name\":\"TVT K427\",\"hex\":\"#9d93a3\"},{\"name\":\"TVT M502\",\"hex\":\"#a8a2ab\"},{\"name\":\"TVT J488\",\"hex\":\"#b5b3b6\"},{\"name\":\"TVT H427\",\"hex\":\"#c5bfca\"},{\"name\":\"TVT K488\",\"hex\":\"#a3a1a5\"},{\"name\":\"TVT G427\",\"hex\":\"#d4d0d8\"},{\"name\":\"TVT J427\",\"hex\":\"#b4afba\"},{\"name\":\"TVT K502\",\"hex\":\"#c9c5ce\"},{\"name\":\"TVT L502\",\"hex\":\"#bab6c0\"},{\"name\":\"TVT J502\",\"hex\":\"#d6d3db\"},{\"name\":\"TVT F427\",\"hex\":\"#dedce1\"},{\"name\":\"TVT H502\",\"hex\":\"#dfdde2\"},{\"name\":\"TVT V427\",\"hex\":\"#c0bdc6\"},{\"name\":\"TVT G488\",\"hex\":\"#d0cfd2\"},{\"name\":\"TVT H488\",\"hex\":\"#c2c1c5\"},{\"name\":\"TVT F502\",\"hex\":\"#e8e7eb\"},{\"name\":\"TVT X427\",\"hex\":\"#d6d5dd\"},{\"name\":\"TVT Y427\",\"hex\":\"#e2e2e7\"},{\"name\":\"TVT G502\",\"hex\":\"#e4e4e8\"},{\"name\":\"TVT H428\",\"hex\":\"#babcc7\"},{\"name\":\"TVT G428\",\"hex\":\"#cbccd2\"},{\"name\":\"TVT J489\",\"hex\":\"#b8bdc8\"},{\"name\":\"TVT F348\",\"hex\":\"#e3e5ea\"},{\"name\":\"TVT K489\",\"hex\":\"#acb1bb\"},{\"name\":\"TVT H489\",\"hex\":\"#bfc4ce\"},{\"name\":\"TVT G489\",\"hex\":\"#c7ccd4\"},{\"name\":\"TVT V429\",\"hex\":\"#9fa7b0\"},{\"name\":\"TVT F489\",\"hex\":\"#d4d8dd\"},{\"name\":\"TVT M500\",\"hex\":\"#98a0a6\"},{\"name\":\"TVT K500\",\"hex\":\"#b4bcc2\"},{\"name\":\"TVT X431\",\"hex\":\"#b5bfc8\"},{\"name\":\"TVT Y431\",\"hex\":\"#cad1d7\"},{\"name\":\"TVT Y429\",\"hex\":\"#cdd4da\"},{\"name\":\"TVT L500\",\"hex\":\"#a7aeb3\"},{\"name\":\"TVT H429\",\"hex\":\"#b9c4cb\"},{\"name\":\"TVT J498\",\"hex\":\"#c3c9cd\"},{\"name\":\"TVT L498\",\"hex\":\"#abb0b3\"},{\"name\":\"TVT J500\",\"hex\":\"#c3cace\"},{\"name\":\"TVT H498\",\"hex\":\"#d0d6d9\"},{\"name\":\"TVT V438\",\"hex\":\"#98a7ac\"},{\"name\":\"TVT L492\",\"hex\":\"#9eaaae\"},{\"name\":\"TVT K492\",\"hex\":\"#b2bcbf\"},{\"name\":\"TVT J492\",\"hex\":\"#bdc5c8\"},{\"name\":\"TVT F438\",\"hex\":\"#d6dee0\"},{\"name\":\"TVT H492\",\"hex\":\"#ccd1d2\"},{\"name\":\"TVT Y438\",\"hex\":\"#cbd5d7\"},{\"name\":\"TVT X441\",\"hex\":\"#a8bdbd\"},{\"name\":\"TVT G429\",\"hex\":\"#cfd6d6\"},{\"name\":\"TVT F357\",\"hex\":\"#dce5e5\"},{\"name\":\"TVT G498\",\"hex\":\"#dde1e1\"},{\"name\":\"TVT G492\",\"hex\":\"#dee2e2\"},{\"name\":\"TVT G491\",\"hex\":\"#e0e5e5\"},{\"name\":\"TVT F365\",\"hex\":\"#e3eaea\"},{\"name\":\"TVT G496\",\"hex\":\"#e1e3e3\"},{\"name\":\"TVT S369\",\"hex\":\"#86a39f\"},{\"name\":\"TVT V440\",\"hex\":\"#b7c4c2\"},{\"name\":\"TVT H439\",\"hex\":\"#c1cdcb\"},{\"name\":\"TVT G440\",\"hex\":\"#ccd9d7\"},{\"name\":\"TVT X367\",\"hex\":\"#cdd9d7\"},{\"name\":\"TVT F429\",\"hex\":\"#e1e7e6\"},{\"name\":\"TVT Y366\",\"hex\":\"#e3e9e8\"},{\"name\":\"TVT K440\",\"hex\":\"#85a19b\"},{\"name\":\"TVT K441\",\"hex\":\"#89a49f\"},{\"name\":\"TVT J440\",\"hex\":\"#98b2ad\"},{\"name\":\"TVT J441\",\"hex\":\"#9db6b1\"},{\"name\":\"TVT Y367\",\"hex\":\"#d9e2e0\"},{\"name\":\"TVT G493\",\"hex\":\"#e3e8e7\"},{\"name\":\"TVT L496\",\"hex\":\"#a6aaa9\"},{\"name\":\"TVT H496\",\"hex\":\"#d3d7d6\"},{\"name\":\"TVT J493\",\"hex\":\"#b6c0bd\"},{\"name\":\"TVT H493\",\"hex\":\"#ced5d3\"},{\"name\":\"TVT K496\",\"hex\":\"#b9bcbb\"},{\"name\":\"TVT V439\",\"hex\":\"#bac3c0\"},{\"name\":\"TVT X444\",\"hex\":\"#b6c0bc\"},{\"name\":\"TVT K493\",\"hex\":\"#a6afab\"},{\"name\":\"TVT Y444\",\"hex\":\"#d8dfdc\"},{\"name\":\"TVT S374\",\"hex\":\"#8ba899\"},{\"name\":\"TVT X439\",\"hex\":\"#cfd7d3\"},{\"name\":\"TVT F495\",\"hex\":\"#e4e6e5\"},{\"name\":\"TVT V442\",\"hex\":\"#b7c9bf\"},{\"name\":\"TVT X376\",\"hex\":\"#9cb2a5\"},{\"name\":\"TVT G439\",\"hex\":\"#d7ded9\"},{\"name\":\"TVT F491\",\"hex\":\"#e7ebe8\"},{\"name\":\"TVT Y440\",\"hex\":\"#dee1de\"},{\"name\":\"TVT F440\",\"hex\":\"#e0e5e0\"},{\"name\":\"TVT F439\",\"hex\":\"#e3e9e3\"},{\"name\":\"TVT F492\",\"hex\":\"#e6e7e6\"},{\"name\":\"TVT F493\",\"hex\":\"#eaedea\"},{\"name\":\"TVT F494\",\"hex\":\"#eaedea\"},{\"name\":\"TVT Y445\",\"hex\":\"#dae1d8\"},{\"name\":\"TVT V377\",\"hex\":\"#adbea8\"},{\"name\":\"TVT F498\",\"hex\":\"#e9ece8\"},{\"name\":\"TVT V445\",\"hex\":\"#9fab9a\"},{\"name\":\"TVT H444\",\"hex\":\"#a7b1a3\"},{\"name\":\"TVT L494\",\"hex\":\"#abb5a6\"},{\"name\":\"TVT K494\",\"hex\":\"#bcc5b7\"},{\"name\":\"TVT F368\",\"hex\":\"#e2e7df\"},{\"name\":\"TVT Y447\",\"hex\":\"#e3e7e1\"},{\"name\":\"TVT G494\",\"hex\":\"#e2e6e0\"},{\"name\":\"TVT Y439\",\"hex\":\"#e3e7e1\"},{\"name\":\"TVT F499\",\"hex\":\"#e8eae7\"},{\"name\":\"TVT J494\",\"hex\":\"#cbd2c6\"},{\"name\":\"TVT F445\",\"hex\":\"#e4e8e1\"},{\"name\":\"TVT H494\",\"hex\":\"#d7dcd2\"},{\"name\":\"TVT J445\",\"hex\":\"#abb49f\"},{\"name\":\"TVT J495\",\"hex\":\"#c1c4bd\"},{\"name\":\"TVT H445\",\"hex\":\"#c4cbba\"},{\"name\":\"TVT X447\",\"hex\":\"#ccd0c6\"},{\"name\":\"TVT G495\",\"hex\":\"#dbddd7\"},{\"name\":\"TVT J448\",\"hex\":\"#b3b9a1\"},{\"name\":\"TVT J446\",\"hex\":\"#bdc2af\"},{\"name\":\"TVT K446\",\"hex\":\"#a5a895\"},{\"name\":\"TVT L495\",\"hex\":\"#aaaba1\"},{\"name\":\"TVT K495\",\"hex\":\"#b2b3aa\"},{\"name\":\"TVT K497\",\"hex\":\"#c3c3ba\"},{\"name\":\"TVT Y486\",\"hex\":\"#e2e2dd\"},{\"name\":\"TVT L497\",\"hex\":\"#b9b8b0\"},{\"name\":\"TVT J497\",\"hex\":\"#d0cfc5\"},{\"name\":\"TVT S458\",\"hex\":\"#a7a189\"},{\"name\":\"TVT G487\",\"hex\":\"#d9d6ce\"},{\"name\":\"TVT G486\",\"hex\":\"#d9d5cd\"},{\"name\":\"TVT V486\",\"hex\":\"#b6aea3\"},{\"name\":\"TVT H487\",\"hex\":\"#c9c4bd\"},{\"name\":\"TVT H486\",\"hex\":\"#cdc7be\"},{\"name\":\"TVT K486\",\"hex\":\"#a1988c\"},{\"name\":\"TVT V483\",\"hex\":\"#b5aa9c\"},{\"name\":\"TVT G483\",\"hex\":\"#d2cbc3\"},{\"name\":\"TVT X485\",\"hex\":\"#d7d1ca\"},{\"name\":\"TVT J486\",\"hex\":\"#b6aca1\"},{\"name\":\"TVT F468\",\"hex\":\"#ece9e6\"},{\"name\":\"TVT X481\",\"hex\":\"#cfc8c2\"},{\"name\":\"TVT G481\",\"hex\":\"#d3cbc6\"},{\"name\":\"TVT K481\",\"hex\":\"#9d9089\"},{\"name\":\"TVT J481\",\"hex\":\"#b0a39c\"},{\"name\":\"TVT K479\",\"hex\":\"#a68c87\"},{\"name\":\"TVT F426\",\"hex\":\"#ebe6e5\"},{\"name\":\"TVT X479\",\"hex\":\"#b9aba9\"},{\"name\":\"TVT Y478\",\"hex\":\"#dacecd\"},{\"name\":\"TVT H501\",\"hex\":\"#dbd2d1\"},{\"name\":\"TVT V478\",\"hex\":\"#b19b9a\"},{\"name\":\"TVT J478\",\"hex\":\"#b49c9b\"},{\"name\":\"TVT X476\",\"hex\":\"#c0aeaf\"},{\"name\":\"TVT K501\",\"hex\":\"#b6adae\"},{\"name\":\"TVT G426\",\"hex\":\"#e1d9da\"},{\"name\":\"TVT Y476\",\"hex\":\"#daced0\"},{\"name\":\"TVT Y479\",\"hex\":\"#cbc5c7\"},{\"name\":\"TVT F488\",\"hex\":\"#e2e0e1\"},{\"name\":\"TVT Y425\",\"hex\":\"#cabac6\"},{\"name\":\"TVT F344\",\"hex\":\"#e5e0e5\"},{\"name\":\"TVT F345\",\"hex\":\"#e5e0e5\"},{\"name\":\"TVT X447\",\"hex\":\"#ccd0c6\"},{\"name\":\"TVT G495\",\"hex\":\"#dbddd7\"},{\"name\":\"TVT J448\",\"hex\":\"#b3b9a1\"},{\"name\":\"TVT J446\",\"hex\":\"#bdc2af\"},{\"name\":\"TVT K446\",\"hex\":\"#a5a895\"},{\"name\":\"TVT L495\",\"hex\":\"#aaaba1\"},{\"name\":\"TVT K495\",\"hex\":\"#b2b3aa\"},{\"name\":\"TVT K497\",\"hex\":\"#c3c3ba\"},{\"name\":\"TVT Y486\",\"hex\":\"#e2e2dd\"},{\"name\":\"TVT L497\",\"hex\":\"#b9b8b0\"},{\"name\":\"TVT J497\",\"hex\":\"#d0cfc5\"},{\"name\":\"TVT S458\",\"hex\":\"#a7a189\"}]");

/***/ }),

/***/ "./src/js/components/Palette.js":
/*!**************************************!*\
  !*** ./src/js/components/Palette.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.json */ "./src/js/colors.json");
var _colors_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../colors.json */ "./src/js/colors.json", 1);


class Palette {

  constructor({ container, pubsub }) {
    this.container = container;
    this.pubsub = pubsub;

    this.clickHandler = this.clickHandler.bind( this );
    this.container.addEventListener('click', this.clickHandler );
    this.init();
  }

  init() {
    const fragment = document.createDocumentFragment();

    for( let i = 0; i < _colors_json__WEBPACK_IMPORTED_MODULE_0__.length; i++ ) {

      const li = document.createElement('li');
      li.classList.add('color-column');

      for( let j = 0; j < 6; j++ ) {

        const { name, hex } = _colors_json__WEBPACK_IMPORTED_MODULE_0__[ i++ ];
        const div = document.createElement('div');
        div.classList.add('color-item');
        div.setAttribute('data-name', name );
        div.setAttribute('data-hex', hex );
        div.setAttribute('title', name );
        div.style.background = hex;

        li.appendChild( div );
      }

      fragment.appendChild( li );
    }

    this.container.appendChild( fragment );
  }

  clickHandler({ target }) {
    if( !target.classList.contains('color-item') ) return;

    const hex = target.getAttribute('data-hex');
    const name = target.getAttribute('data-name');
    this.pubsub.publish('change-color', { hex, name });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Palette);

/***/ }),

/***/ "./src/js/components/Slider.js":
/*!*************************************!*\
  !*** ./src/js/components/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_0__);


class Slider {

  constructor({ container, sliderClassName, pubsub }) {
    this.pubsub = pubsub;
    this.container = container;

    this.setColor = this.setColor.bind( this );
    this.pubsub.subscribe('change-color', this.setColor );
    this.init( sliderClassName );
  }

  init( className ) {
    new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default.a( className, {
      type   : 'loop',
    } ).mount();
  }

  setColor({ hex }) {
    this.container.style.background = hex;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Slider */ "./src/js/components/Slider.js");
/* harmony import */ var _components_Palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Palette */ "./src/js/components/Palette.js");
/* harmony import */ var _utils_PubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/PubSub */ "./src/js/utils/PubSub.js");




const pubsub = new _utils_PubSub__WEBPACK_IMPORTED_MODULE_2__["default"];
const selectedColor = document.querySelector('.selected-color');

new _components_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]({
  container: document.querySelector('.slider'),
  sliderClassName: '.splide',
  pubsub: pubsub
});

new _components_Palette__WEBPACK_IMPORTED_MODULE_1__["default"]({
  container: document.querySelector('.colors'),
  pubsub: pubsub
});

pubsub.subscribe('change-color', ({ name, hex }) => {
  selectedColor.innerHTML = `color: ${name}`;
});

/***/ }),

/***/ "./src/js/utils/PubSub.js":
/*!********************************!*\
  !*** ./src/js/utils/PubSub.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let instance;

class PubSub {

  constructor() {
    if ( instance ) return instance;
    this.storage = {};
    instance = this;
  }

  subscribe ( eventName, func ) {
    if ( !this.storage.hasOwnProperty( eventName ) ) {
        this.storage[eventName] = [];
    }

    this.storage[eventName].push( func );
  }

  publish ( eventName, data ) {
    ( this.storage[eventName] || [] ).forEach( ( func ) => { func( data ); });
  }

  unSubscribe ( eventName, func ) {
    const index = this.storage[eventName].indexOf( func );
    if ( index > -1 ) {
        this.storage[eventName].splice( index, 1  );
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PubSub);

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3BsaWRlanMvc3BsaWRlL2Rpc3QvanMvc3BsaWRlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9QYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL1B1YlN1Yi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiFcbiAqIFNwbGlkZS5qc1xuICogVmVyc2lvbiAgOiAyLjQuMjBcbiAqIExpY2Vuc2UgIDogTUlUXG4gKiBDb3B5cmlnaHQ6IDIwMjAgTmFvdG9zaGkgRnVqaXRhXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNwbGlkZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTcGxpZGVcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDMxMTpcbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuLy8gRVNNIENPTVBBVCBGTEFHXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIEVYUE9SVFNcbl9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4gIFwiZGVmYXVsdFwiOiAoKSA9PiAvKiBiaW5kaW5nICovIG1vZHVsZV9TcGxpZGVcbn0pO1xuXG4vLyBOQU1FU1BBQ0UgT0JKRUNUOiAuL3NyYy9qcy9jb25zdGFudHMvc3RhdGVzLmpzXG52YXIgc3RhdGVzX25hbWVzcGFjZU9iamVjdCA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKHN0YXRlc19uYW1lc3BhY2VPYmplY3QpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kKHN0YXRlc19uYW1lc3BhY2VPYmplY3QsIHtcbiAgXCJDUkVBVEVEXCI6ICgpID0+IENSRUFURUQsXG4gIFwiREVTVFJPWUVEXCI6ICgpID0+IERFU1RST1lFRCxcbiAgXCJJRExFXCI6ICgpID0+IElETEUsXG4gIFwiTU9VTlRFRFwiOiAoKSA9PiBNT1VOVEVELFxuICBcIk1PVklOR1wiOiAoKSA9PiBNT1ZJTkdcbn0pO1xuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29yZS9ldmVudC5qc1xuLyoqXHJcbiAqIFRoZSBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGFuIEV2ZW50IG9iamVjdCBzaW1wbHkgbWFuYWdpbmcgZXZlbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhbiBFdmVudCBvYmplY3Qgc2ltcGx5IG1hbmFnaW5nIGV2ZW50cy5cclxuICovXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvcmVfZXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBTdG9yZSBhbGwgZXZlbnQgZGF0YS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cbiAgdmFyIGRhdGEgPSBbXTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlIHRoZSBnaXZlbiBldmVudChzKS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBldmVudHMgIC0gQW4gZXZlbnQgbmFtZS4gVXNlIHNwYWNlIHRvIHNlcGFyYXRlIG11bHRpcGxlIGV2ZW50cy5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbHNvLCBuYW1lc3BhY2UgaXMgYWNjZXB0ZWQgYnkgZG90LCBzdWNoIGFzICdyZXNpemUue25hbWVzcGFjZX0nLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIEEgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9ICBlbG0gICAgIC0gT3B0aW9uYWwuIE5hdGl2ZSBldmVudCB3aWxsIGJlIGxpc3RlbmVkIHRvIHdoZW4gdGhpcyBhcmcgaXMgcHJvdmlkZWQuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBvcHRpb25zIC0gT3B0aW9uYWwuIE9wdGlvbnMgZm9yIGFkZEV2ZW50TGlzdGVuZXIuXHJcbiAgICAgKi9cbiAgICBvbjogZnVuY3Rpb24gb24oZXZlbnRzLCBoYW5kbGVyLCBlbG0sIG9wdGlvbnMpIHtcbiAgICAgIGlmIChlbG0gPT09IHZvaWQgMCkge1xuICAgICAgICBlbG0gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGVsbSkge1xuICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgZWxtOiBlbG0sXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlIHRoZSBnaXZlbiBldmVudChzKS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGV2ZW50cyAtIEEgZXZlbnQgbmFtZSBvciBuYW1lcyBzcGxpdCBieSBzcGFjZS5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgIC0gT3B0aW9uYWwuIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbiBvZmYoZXZlbnRzLCBlbG0pIHtcbiAgICAgIGlmIChlbG0gPT09IHZvaWQgMCkge1xuICAgICAgICBlbG0gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmV2ZW50ID09PSBldmVudCAmJiBpdGVtLmVsbSA9PT0gZWxtKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZShpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0IGFuIGV2ZW50LlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgb25seSBmb3IgY3VzdG9tIGV2ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGV2ZW50IC0gQW4gZXZlbnQgbmFtZS5cclxuICAgICAqIEBwYXJhbSB7Kn0gICAgICAgYXJncyAgLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyBwYXNzZWQgdG8gaGFuZGxlcnMuXHJcbiAgICAgKi9cbiAgICBlbWl0OiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtLmVsbSAmJiBpdGVtLmV2ZW50LnNwbGl0KCcuJylbMF0gPT09IGV2ZW50KSB7XG4gICAgICAgICAgaXRlbS5oYW5kbGVyLmFwcGx5KGl0ZW0sIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBldmVudCBkYXRhLlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRhdGEuZm9yRWFjaCh1bnN1YnNjcmliZSk7XG4gICAgICBkYXRhID0gW107XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIEFuIG9iamVjdCBjb250YWluaW5nIGV2ZW50IGRhdGEuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoaXRlbSkge1xuICAgIGlmIChpdGVtLmVsbSkge1xuICAgICAgaXRlbS5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihpdGVtLmV2ZW50LCBpdGVtLmhhbmRsZXIsIGl0ZW0ub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEV2ZW50O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29yZS9zdGF0ZS5qc1xuLyoqXHJcbiAqIFRoZSBmdW5jdGlvbiBwcm92aWRpbmcgYSBzdXBlciBzaW1wbGUgc3RhdGUgc3lzdGVtLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gcHJvdmlkaW5nIGEgc3VwZXIgc2ltcGxlIHN0YXRlIHN5c3RlbS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpbml0aWFsU3RhdGUgLSBQcm92aWRlIHRoZSBpbml0aWFsIHN0YXRlIHZhbHVlLlxyXG4gKi9cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qgc3RhdGUgPSAoZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgY3VycmVudCBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxyXG4gICAqL1xuICB2YXIgY3VyciA9IGluaXRpYWxTdGF0ZTtcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIENoYW5nZSBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHN0YXRlIC0gQSBuZXcgc3RhdGUuXHJcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgY3VyciA9IHN0YXRlO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFZlcmlmeSBpZiB0aGUgY3VycmVudCBzdGF0ZSBpcyBnaXZlbiBvbmUgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gc3RhdGUgLSBBIHN0YXRlIG5hbWUgdG8gYmUgdmVyaWZpZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHRoZSBnaXZlbiBvbmUuXHJcbiAgICAgKi9cbiAgICBpczogZnVuY3Rpb24gaXMoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gY3VycjtcbiAgICB9XG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy9vYmplY3QuanNcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8qKlxyXG4gKiBTb21lIHV0aWxpdHkgZnVuY3Rpb25zIHJlbGF0ZWQgd2l0aCBPYmplY3QsIHN1cHBvcnRpbmcgSUUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG4vKipcclxuICogSXRlcmF0ZSBhbiBvYmplY3QgbGlrZSBBcnJheS5mb3JFYWNoLlxyXG4gKiBJRSBkb2Vzbid0IHN1cHBvcnQgZm9yRWFjaCBvZiBIVE1MQ29sbGVjdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9ICAgIG9iaiAgICAgICAtIEFuIG9iamVjdC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gIGNhbGxiYWNrICAtIEEgZnVuY3Rpb24gaGFuZGxpbmcgZWFjaCB2YWx1ZS4gQXJndW1lbnRzIGFyZSB2YWx1ZSwgcHJvcGVydHkgYW5kIGluZGV4LlxyXG4gKi9cblxuZnVuY3Rpb24gZWFjaChvYmosIGNhbGxiYWNrKSB7XG4gIGtleXMob2JqKS5zb21lKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG9ialtrZXldLCBrZXksIGluZGV4KTtcbiAgfSk7XG59XG4vKipcclxuICogUmV0dXJuIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gb2JqZWN0IGFzIGFuIGFycmF5LlxyXG4gKiBJRSBkb2Vzbid0IHN1cHBvcnQgT2JqZWN0LnZhbHVlcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIEFuIG9iamVjdC5cclxuICpcclxuICogQHJldHVybiB7QXJyYXl9IC0gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdmFsdWVzIG9mIHRoZSBnaXZlbiBvYmplY3QuXHJcbiAqL1xuXG5mdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH0pO1xufVxuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBzdWJqZWN0IGlzIG9iamVjdCBvciBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gc3ViamVjdCAtIEEgc3ViamVjdCB0byBiZSB2ZXJpZmllZC5cclxuICpcclxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIG9iamVjdCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qoc3ViamVjdCkge1xuICByZXR1cm4gdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnO1xufVxuLyoqXHJcbiAqIE1lcmdlIHR3byBvYmplY3RzIGRlZXBseS5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRvICAgLSBBbiBvYmplY3Qgd2hlcmUgXCJmcm9tXCIgaXMgbWVyZ2VkLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbSAtIEFuIG9iamVjdCBtZXJnZWQgdG8gXCJ0b1wiLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gQSBtZXJnZWQgb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2UoX3JlZiwgZnJvbSkge1xuICB2YXIgdG8gPSBfZXh0ZW5kcyh7fSwgX3JlZik7XG5cbiAgZWFjaChmcm9tLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGlmICghaXNPYmplY3QodG9ba2V5XSkpIHtcbiAgICAgICAgdG9ba2V5XSA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0b1trZXldID0gbWVyZ2UodG9ba2V5XSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b1trZXldID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvO1xufVxuLyoqXHJcbiAqIEFzc2lnbiBhbGwgcHJvcGVydGllcyBcImZyb21cIiB0byBcInRvXCIgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdG8gICAtIEFuIG9iamVjdCB3aGVyZSBwcm9wZXJ0aWVzIGFyZSBhc3NpZ25lZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBBbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgYXNzaWduZWQgdG8gXCJ0b1wiLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gYXNzaWduZWQgb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gb2JqZWN0X2Fzc2lnbih0bywgZnJvbSkge1xuICBrZXlzKGZyb20pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghdG9ba2V5XSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnJvbSwga2V5KSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzXG4vKipcclxuICogQSBwYWNrYWdlIG9mIHNvbWUgbWlzY2VsbGFuZW91cyB1dGlsaXR5IGZ1bmN0aW9ucy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogQ29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYXJyYXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBBbnkgdmFsdWUuXHJcbiAqXHJcbiAqIEByZXR1cm4geypbXX0gLSBBcnJheSBjb250YWluaW5nIHRoZSBnaXZlbiB2YWx1ZS5cclxuICovXG5cbmZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxyXG4gKiBNaW4gd2lsbCBiZSByZXR1cm5lZCB3aGVuIHRoZSB2YWx1ZSBpcyBsZXNzIHRoYW4gbWluIG9yIG1heCB3aWxsIGRvIHdoZW4gZ3JlYXRlciB0aGFuIG1heC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gQSBudW1iZXIgdG8gYmUgY2hlY2tlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IG0xICAgIC0gTWluaW11bSBvciBtYXhpbXVtIG51bWJlci5cclxuICogQHBhcmFtIHtudW1iZXJ9IG0yICAgIC0gTWF4aW11bSBvciBtaW5pbXVtIG51bWJlci5cclxuICpcclxuICogQHJldHVybiB7bnVtYmVyfSAtIEEgdmFsdWUgaXRzZWxmLCBtaW4gb3IgbWF4LlxyXG4gKi9cblxuZnVuY3Rpb24gYmV0d2Vlbih2YWx1ZSwgbTEsIG0yKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbTEgPiBtMiA/IG0yIDogbTEpLCBtMSA+IG0yID8gbTEgOiBtMik7XG59XG4vKipcclxuICogVGhlIHNwcmludGYgbWV0aG9kIHdpdGggbWluaW11bSBmdW5jdGlvbmFsaXR5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgZm9ybWF0ICAgICAgIC0gVGhlIHN0cmluZyBmb3JtYXQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSByZXBsYWNlbWVudHMgLSBSZXBsYWNlbWVudHMgYWNjZXB0aW5nIG11bHRpcGxlIGFyZ3VtZW50cy5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gLSBDb252ZXJ0ZWQgc3RyaW5nLlxyXG4gKi9cblxuZnVuY3Rpb24gc3ByaW50Zihmb3JtYXQsIHJlcGxhY2VtZW50cykge1xuICB2YXIgaSA9IDA7XG4gIHJldHVybiBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0b0FycmF5KHJlcGxhY2VtZW50cylbaSsrXTtcbiAgfSk7XG59XG4vKipcclxuICogQXBwZW5kIHB4IHVuaXQgdG8gdGhlIGdpdmVuIHN1YmplY3QgaWYgbmVjZXNzYXJ5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlIC0gQSB2YWx1ZSB0aGF0IG1heSBub3QgaW5jbHVkZSBhbiB1bml0LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gSWYgdGhlIHZhbHVlIGlzIHN0cmluZywgcmV0dXJuIGl0c2VsZi5cclxuICogICAgICAgICAgICAgICAgICAgIElmIG51bWJlciwgZG8gdmFsdWUgKyBcInB4XCIuIEFuIGVtcHR5IHN0cmluZywgb3RoZXJ3aXNlLlxyXG4gKi9cblxuZnVuY3Rpb24gdW5pdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuICBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpICsgJ3B4JztcbiAgfVxuXG4gIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogJyc7XG59XG4vKipcclxuICogUGFkIHN0YXJ0IHdpdGggMC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIEEgbnVtYmVyIHRvIGJlIGZpbGxlZCB3aXRoIDAuXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9IC0gUGFkZGVkIG51bWJlci5cclxuICovXG5cbmZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgcmV0dXJuIG51bWJlciA8IDEwID8gJzAnICsgbnVtYmVyIDogbnVtYmVyO1xufVxuLyoqXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIHBpeGVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgIHJvb3QgIC0gUm9vdCBlbGVtZW50IHdoZXJlIGEgZHVtbXkgZGl2IGlzIGFwcGVuZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHZhbHVlIC0gQ1NTIHZhbHVlIHRvIGJlIGNvbnZlcnRlZCwgc3VjaCBhcyAxMHJlbS5cclxuICpcclxuICogQHJldHVybiB7bnVtYmVyfSAtIFBpeGVsLlxyXG4gKi9cblxuZnVuY3Rpb24gdG9QaXhlbChyb290LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBkaXYgPSBjcmVhdGUoJ2RpdicsIHt9KTtcbiAgICBhcHBseVN0eWxlKGRpdiwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogdmFsdWVcbiAgICB9KTtcbiAgICBhcHBlbmQocm9vdCwgZGl2KTtcbiAgICB2YWx1ZSA9IGRpdi5jbGllbnRXaWR0aDtcbiAgICBkb21fcmVtb3ZlKGRpdik7XG4gIH1cblxuICByZXR1cm4gK3ZhbHVlIHx8IDA7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvZG9tLmpzXG4vKipcclxuICogU29tZSB1dGlsaXR5IGZ1bmN0aW9ucyByZWxhdGVkIHdpdGggRE9NLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIEZpbmQgdGhlIGZpcnN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLlxyXG4gKiBCZSBhd2FyZSB0aGF0IGFsbCBzZWxlY3RvcnMgYWZ0ZXIgYSBzcGFjZSBhcmUgaWdub3JlZC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fE5vZGV9ICBlbG0gICAgICAgLSBBbiBhbmNlc3RvciBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgIHNlbGVjdG9yICAtIERPTVN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7RWxlbWVudHxudWxsfSAtIEEgZm91bmQgZWxlbWVudCBvciBudWxsLlxyXG4gKi9cblxuZnVuY3Rpb24gZmluZChlbG0sIHNlbGVjdG9yKSB7XG4gIHJldHVybiBlbG0gPyBlbG0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvci5zcGxpdCgnICcpWzBdKSA6IG51bGw7XG59XG4vKipcclxuICogRmluZCBhIGZpcnN0IGNoaWxkIGhhdmluZyB0aGUgZ2l2ZW4gdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50ICAgICAgICAgLSBBIHBhcmVudCBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIHRhZ09yQ2xhc3NOYW1lIC0gQSB0YWcgb3IgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7RWxlbWVudHx1bmRlZmluZWR9IC0gQSBmb3VuZCBlbGVtZW50IG9uIHN1Y2Nlc3Mgb3IgdW5kZWZpbmVkIG9uIGZhaWx1cmUuXHJcbiAqL1xuXG5mdW5jdGlvbiBjaGlsZChwYXJlbnQsIHRhZ09yQ2xhc3NOYW1lKSB7XG4gIHJldHVybiBjaGlsZHJlbihwYXJlbnQsIHRhZ09yQ2xhc3NOYW1lKVswXTtcbn1cbi8qKlxyXG4gKiBSZXR1cm4gY2hpbGUgZWxlbWVudHMgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCB0YWcgb3IgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgICAgICAgICAtIEEgcGFyZW50IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgdGFnT3JDbGFzc05hbWUgLSBBIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50W119IC0gRm91bmQgZWxlbWVudHMuXHJcbiAqL1xuXG5mdW5jdGlvbiBjaGlsZHJlbihwYXJlbnQsIHRhZ09yQ2xhc3NOYW1lKSB7XG4gIGlmIChwYXJlbnQpIHtcbiAgICByZXR1cm4gdmFsdWVzKHBhcmVudC5jaGlsZHJlbikuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGhhc0NsYXNzKGNoaWxkLCB0YWdPckNsYXNzTmFtZS5zcGxpdCgnICcpWzBdKSB8fCBjaGlsZC50YWdOYW1lID09PSB0YWdPckNsYXNzTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cbi8qKlxyXG4gKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIHNvbWUgb3B0aW9uYWwgYXR0cmlidXRlcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyAgIC0gQSB0YWcgbmFtZS5cclxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzIC0gQW4gb2JqZWN0IGFueSBhdHRyaWJ1dGUgcGFpcnMgb2YgbmFtZSBhbmQgdmFsdWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR9IC0gQSBjcmVhdGVkIGVsZW1lbnQuXHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGUodGFnLCBhdHRycykge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlYWNoKGF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHJldHVybiBzZXRBdHRyaWJ1dGUoZWxtLCBrZXksIHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBlbG07XG59XG4vKipcclxuICogQ29udmVydCBIVE1MIHN0cmluZyB0byBET00gbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgLSBIVE1MIHN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7Tm9kZX0gLSBBIGNyZWF0ZWQgbm9kZS5cclxuICovXG5cbmZ1bmN0aW9uIGRvbWlmeShodG1sKSB7XG4gIHZhciBkaXYgPSBjcmVhdGUoJ2RpdicsIHt9KTtcbiAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcbn1cbi8qKlxyXG4gKiBSZW1vdmUgYSBnaXZlbiBlbGVtZW50IGZyb20gYSBET00gdHJlZS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fEVsZW1lbnRbXX0gZWxtcyAtIEVsZW1lbnQocykgdG8gYmUgcmVtb3ZlZC5cclxuICovXG5cbmZ1bmN0aW9uIGRvbV9yZW1vdmUoZWxtcykge1xuICB0b0FycmF5KGVsbXMpLmZvckVhY2goZnVuY3Rpb24gKGVsbSkge1xuICAgIGlmIChlbG0pIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbG0ucGFyZW50RWxlbWVudDtcbiAgICAgIHBhcmVudCAmJiBwYXJlbnQucmVtb3ZlQ2hpbGQoZWxtKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXHJcbiAqIEFwcGVuZCBhIGNoaWxkIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgLSBBIHBhcmVudCBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNoaWxkICAtIEFuIGVsZW1lbnQgdG8gYmUgYXBwZW5kZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBhcHBlbmQocGFyZW50LCBjaGlsZCkge1xuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxufVxuLyoqXHJcbiAqIEluc2VydCBhbiBlbGVtZW50IGJlZm9yZSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxOb2RlfSByZWYgLSBBIHJlZmVyZW5jZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgZWxtIC0gQW4gZWxlbWVudCB0byBiZSBpbnNlcnRlZC5cclxuICovXG5cbmZ1bmN0aW9uIGJlZm9yZShlbG0sIHJlZikge1xuICBpZiAoZWxtICYmIHJlZikge1xuICAgIHZhciBwYXJlbnQgPSByZWYucGFyZW50RWxlbWVudDtcbiAgICBwYXJlbnQgJiYgcGFyZW50Lmluc2VydEJlZm9yZShlbG0sIHJlZik7XG4gIH1cbn1cbi8qKlxyXG4gKiBBcHBseSBzdHlsZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgc3R5bGVzIGFyZSBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gIHN0eWxlcyAgLSBPYmplY3QgY29udGFpbmluZyBzdHlsZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlKGVsbSwgc3R5bGVzKSB7XG4gIGlmIChlbG0pIHtcbiAgICBlYWNoKHN0eWxlcywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBBZGQgb3IgcmVtb3ZlIGNsYXNzZXMgdG8vZnJvbSB0aGUgZWxlbWVudC5cclxuICogVGhpcyBmdW5jdGlvbiBpcyBmb3IgaW50ZXJuYWwgdXNhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICAgICBlbG0gICAgIC0gQW4gZWxlbWVudCB3aGVyZSBjbGFzc2VzIGFyZSBhZGRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGNsYXNzZXMgLSBDbGFzcyBuYW1lcyBiZWluZyBhZGRlZC5cclxuICogQHBhcmFtIHtib29sZWFufSAgICAgICAgIHJlbW92ZSAgLSBXaGV0aGVyIHRvIHJlbW92ZSBvciBhZGQgY2xhc3Nlcy5cclxuICovXG5cbmZ1bmN0aW9uIGFkZE9yUmVtb3ZlQ2xhc3NlcyhlbG0sIGNsYXNzZXMsIHJlbW92ZSkge1xuICBpZiAoZWxtKSB7XG4gICAgdG9BcnJheShjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBlbG0uY2xhc3NMaXN0W3JlbW92ZSA/ICdyZW1vdmUnIDogJ2FkZCddKG5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4vKipcclxuICogQWRkIGNsYXNzZXMgdG8gdGhlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICAgICAgZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgY2xhc3NlcyBhcmUgYWRkZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSAgY2xhc3NlcyAtIENsYXNzIG5hbWVzIGJlaW5nIGFkZGVkLlxyXG4gKi9cblxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbG0sIGNsYXNzZXMpIHtcbiAgYWRkT3JSZW1vdmVDbGFzc2VzKGVsbSwgY2xhc3NlcywgZmFsc2UpO1xufVxuLyoqXHJcbiAqIFJlbW92ZSBhIGNsYXNzIGZyb20gdGhlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICAgICBlbG0gICAgIC0gQW4gZWxlbWVudCB3aGVyZSBjbGFzc2VzIGFyZSByZW1vdmVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gY2xhc3NlcyAtIEEgY2xhc3MgbmFtZSBiZWluZyByZW1vdmVkLlxyXG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3NlcyhlbG0sIGNsYXNzZXMsIHRydWUpO1xufVxuLyoqXHJcbiAqIFZlcmlmeSBpZiB0aGUgcHJvdmlkZWQgZWxlbWVudCBoYXMgdGhlIGNsYXNzIG9yIG5vdC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbG0gICAgICAgLSBBbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIGNsYXNzTmFtZSAtIEEgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3Mgb3IgZmFsc2UgaWYgbm90LlxyXG4gKi9cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxtLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuICEhZWxtICYmIGVsbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbn1cbi8qKlxyXG4gKiBTZXQgYXR0cmlidXRlIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgICAgICAgICBlbG0gICAtIEFuIGVsZW1lbnQgd2hlcmUgYW4gYXR0cmlidXRlIGlzIGFzc2lnbmVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICBuYW1lICAtIEF0dHJpYnV0ZSBuYW1lLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8Ym9vbGVhbn0gICB2YWx1ZSAtIEF0dHJpYnV0ZSB2YWx1ZS5cclxuICovXG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShlbG0sIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbG0pIHtcbiAgICBlbG0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuLyoqXHJcbiAqIEdldCBhdHRyaWJ1dGUgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbG0gIC0gQW4gZWxlbWVudCB3aGVyZSBhbiBhdHRyaWJ1dGUgaXMgYXNzaWduZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgbmFtZSAtIEF0dHJpYnV0ZSBuYW1lLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBhdHRyaWJ1dGUgaWYgYXZhaWxhYmxlLiBBbiBlbXB0eSBzdHJpbmcgaWYgbm90LlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsbSwgbmFtZSkge1xuICByZXR1cm4gZWxtID8gZWxtLmdldEF0dHJpYnV0ZShuYW1lKSA6ICcnO1xufVxuLyoqXHJcbiAqIFJlbW92ZSBhdHRyaWJ1dGUgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fEVsZW1lbnRbXX0gZWxtcyAgLSBBbiBlbGVtZW50IHdoZXJlIGFuIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gICAgICBuYW1lcyAtIEF0dHJpYnV0ZSBuYW1lLlxyXG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGVsbXMsIG5hbWVzKSB7XG4gIHRvQXJyYXkobmFtZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0b0FycmF5KGVsbXMpLmZvckVhY2goZnVuY3Rpb24gKGVsbSkge1xuICAgICAgcmV0dXJuIGVsbSAmJiBlbG0ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBSZXR1cm4gdGhlIFJlY3Qgb2JqZWN0IG9mIHRoZSBwcm92aWRlZCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtIC0gQW4gZWxlbWVudC5cclxuICpcclxuICogQHJldHVybiB7Q2xpZW50UmVjdHxET01SZWN0fSAtIEEgcmVjdCBvYmplY3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRSZWN0KGVsbSkge1xuICByZXR1cm4gZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xufVxuLyoqXHJcbiAqIFRyaWdnZXIgdGhlIGdpdmVuIGNhbGxiYWNrIGFmdGVyIGFsbCBpbWFnZXMgY29udGFpbmVkIGJ5IHRoZSBlbGVtZW50IGFyZSBsb2FkZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gIGVsbSAgICAgIC0gRWxlbWVudCB0aGF0IG1heSBjb250YWluIGltYWdlcy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCByaWdodCBhZnRlciBhbGwgaW1hZ2VzIGFyZSBsb2FkZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBsb2FkZWQoZWxtLCBjYWxsYmFjaykge1xuICB2YXIgaW1hZ2VzID0gZWxtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICB2YXIgbGVuZ3RoID0gaW1hZ2VzLmxlbmd0aDtcblxuICBpZiAobGVuZ3RoKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBlYWNoKGltYWdlcywgZnVuY3Rpb24gKGltZykge1xuICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoKytjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUcmlnZ2VyIHRoZSBjYWxsYmFjayBpbW1lZGlhdGVseSBpZiB0aGVyZSBpcyBubyBpbWFnZS5cbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL3R5cGVzLmpzXG4vKipcclxuICogRXhwb3J0IHNsaWRlciB0eXBlcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogTm9ybWFsIHNsaWRlci5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgU0xJREUgPSAnc2xpZGUnO1xuLyoqXHJcbiAqIExvb3AgYWZ0ZXIgdGhlIGxhc3Qgc2xpZGUgYW5kIGJlZm9yZSB0aGUgZmlyc3Qgb25lLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIExPT1AgPSAnbG9vcCc7XG4vKipcclxuICogVGhlIHRyYWNrIGRvZXNuJ3QgbW92ZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBGQURFID0gJ2ZhZGUnO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3RyYW5zaXRpb25zL3NsaWRlL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZ2VuZXJhbCBzbGlkZSBlZmZlY3QgdHJhbnNpdGlvbi5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBnZW5lcmFsIHNsaWRlIGVmZmVjdCB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qgc2xpZGUgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBsaXN0IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cbiAgdmFyIGxpc3Q7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIG9uRW5kIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gICAqL1xuXG4gIHZhciBlbmRDYWxsYmFjaztcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIGxpc3QgPSBDb21wb25lbnRzLkVsZW1lbnRzLmxpc3Q7XG4gICAgICBTcGxpZGUub24oJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGxpc3QgJiYgZW5kQ2FsbGJhY2spIHtcbiAgICAgICAgICBlbmRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9LCBsaXN0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0cmFuc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgIGRlc3RJbmRleCAtIERlc3RpbmF0aW9uIHNsaWRlIGluZGV4IHRoYXQgbWlnaHQgYmUgY2xvbmUncy5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgIG5ld0luZGV4ICAtIE5ldyBpbmRleC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgIHByZXZJbmRleCAtIFByZXZpb3VzIGluZGV4LlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY29vcmQgICAgIC0gRGVzdGluYXRpb24gY29vcmRpbmF0ZXMuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lICAgICAgLSBDYWxsYmFjayBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgd2hlbiB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZC5cclxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIGNvb3JkLCBkb25lKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIGVkZ2VJbmRleCA9IENvbXBvbmVudHMuQ29udHJvbGxlci5lZGdlSW5kZXg7XG4gICAgICB2YXIgc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICAgICAgZW5kQ2FsbGJhY2sgPSBkb25lO1xuXG4gICAgICBpZiAoU3BsaWRlLmlzKFNMSURFKSkge1xuICAgICAgICBpZiAocHJldkluZGV4ID09PSAwICYmIG5ld0luZGV4ID49IGVkZ2VJbmRleCB8fCBwcmV2SW5kZXggPj0gZWRnZUluZGV4ICYmIG5ld0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgc3BlZWQgPSBvcHRpb25zLnJld2luZFNwZWVkIHx8IHNwZWVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSBcIiArIHNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgY29vcmQueCArIFwicHgsXCIgKyBjb29yZC55ICsgXCJweClcIlxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdHJhbnNpdGlvbnMvZmFkZS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGZhZGUgdHJhbnNpdGlvbi5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBmYWRlIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBmYWRlID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgdmFyIEZhZGUgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBBcHBseSB0cmFuc2l0aW9uIHN0eWxlIHRvIHRoZSBmaXJzdCBzbGlkZS5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIGFwcGx5KFNwbGlkZS5pbmRleCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdHJhbnNpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgZGVzdEluZGV4IC0gRGVzdGluYXRpb24gc2xpZGUgaW5kZXggdGhhdCBtaWdodCBiZSBjbG9uZSdzLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgIG5ld0luZGV4ICAtIE5ldyBpbmRleC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICBwcmV2SW5kZXggLSBQcmV2aW91cyBpbmRleC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICBjb29yZCAgICAgLSBEZXN0aW5hdGlvbiBjb29yZGluYXRlcy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259ICBkb25lICAgICAgLSBDYWxsYmFjayBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgd2hlbiB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZC5cclxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIGNvb3JkLCBkb25lKSB7XG4gICAgICB2YXIgdHJhY2sgPSBDb21wb25lbnRzLkVsZW1lbnRzLnRyYWNrO1xuICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICBoZWlnaHQ6IHVuaXQodHJhY2suY2xpZW50SGVpZ2h0KVxuICAgICAgfSk7XG4gICAgICBhcHBseShuZXdJbmRleCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgICBhcHBseVN0eWxlKHRyYWNrLCB7XG4gICAgICAgICAgaGVpZ2h0OiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQXBwbHkgdHJhbnNpdGlvbiBzdHlsZSB0byB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBpbmRleC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEEgc2xpZGUgaW5kZXguXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gYXBwbHkoaW5kZXgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIGFwcGx5U3R5bGUoQ29tcG9uZW50cy5FbGVtZW50cy5zbGlkZXNbaW5kZXhdLCB7XG4gICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgXCIgKyBvcHRpb25zLnNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gRmFkZTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3RyYW5zaXRpb25zL2luZGV4LmpzXG4vKipcclxuICogRXhwb3J0IHRyYW5zaXRpb24gY29tcG9uZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb3JlL2NvbXBvc2VyLmpzXG4vKipcclxuICogUHJvdmlkZSBhIGZ1bmN0aW9uIGZvciBjb21wb3NpbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIENvbXBvc2UgY29tcG9uZW50cy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9ICAgU3BsaWRlICAgICAtIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9ICAgQ29tcG9uZW50cyAtIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gVHJhbnNpdGlvbiAtIENoYW5nZSBjb21wb25lbnQgZm9yIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgY29tcG9uZW50cy5cclxuICovXG5cbmZ1bmN0aW9uIGNvbXBvc2UoU3BsaWRlLCBDb21wb25lbnRzLCBUcmFuc2l0aW9uKSB7XG4gIHZhciBjb21wb25lbnRzID0ge307XG4gIGVhY2goQ29tcG9uZW50cywgZnVuY3Rpb24gKENvbXBvbmVudCwgbmFtZSkge1xuICAgIGNvbXBvbmVudHNbbmFtZV0gPSBDb21wb25lbnQoU3BsaWRlLCBjb21wb25lbnRzLCBuYW1lLnRvTG93ZXJDYXNlKCkpO1xuICB9KTtcblxuICBpZiAoIVRyYW5zaXRpb24pIHtcbiAgICBUcmFuc2l0aW9uID0gU3BsaWRlLmlzKEZBREUpID8gZmFkZSA6IHNsaWRlO1xuICB9XG5cbiAgY29tcG9uZW50cy5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbihTcGxpZGUsIGNvbXBvbmVudHMpO1xuICByZXR1cm4gY29tcG9uZW50cztcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy9lcnJvci5qc1xuLyoqXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBvdXRwdXR0aW5nIGxvZ3MuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFByZWZpeCBvZiBhbiBlcnJvciBtYXNzYWdlLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBNRVNTQUdFX1BSRUZJWCA9ICdbU1BMSURFXSc7XG4vKipcclxuICogRGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIG9uIHRoZSBicm93c2VyIGNvbnNvbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQW4gZXJyb3IgbWVzc2FnZS5cclxuICovXG5cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihNRVNTQUdFX1BSRUZJWCArIFwiIFwiICsgbWVzc2FnZSk7XG59XG4vKipcclxuICogQ2hlY2sgZXhpc3RlbmNlIG9mIHRoZSBnaXZlbiBvYmplY3QgYW5kIHRocm93IGFuIGVycm9yIGlmIGl0IGRvZXNuJ3QuXHJcbiAqXHJcbiAqIEB0aHJvd3Mge0Vycm9yfVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9ICAgICAgc3ViamVjdCAtIEEgc3ViamVjdCB0byBiZSBjb25maXJtZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQW4gZXJyb3IgbWVzc2FnZS5cclxuICovXG5cbmZ1bmN0aW9uIGV4aXN0KHN1YmplY3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCFzdWJqZWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2NsYXNzZXMuanNcbi8qKlxyXG4gKiBFeHBvcnQgY2xhc3MgbmFtZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIEEgcm9vdCBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBST09UID0gJ3NwbGlkZSc7XG4vKipcclxuICogVGhlIGRlZmluaXRpb24gdGFibGUgb2YgYWxsIGNsYXNzZXMgZm9yIGVsZW1lbnRzLlxyXG4gKiBUaGV5IG1pZ2h0IGJlIG1vZGlmaWVkIGJ5IG9wdGlvbnMuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xuXG52YXIgRUxFTUVOVF9DTEFTU0VTID0ge1xuICByb290OiBST09ULFxuICBzbGlkZXI6IFJPT1QgKyBcIl9fc2xpZGVyXCIsXG4gIHRyYWNrOiBST09UICsgXCJfX3RyYWNrXCIsXG4gIGxpc3Q6IFJPT1QgKyBcIl9fbGlzdFwiLFxuICBzbGlkZTogUk9PVCArIFwiX19zbGlkZVwiLFxuICBjb250YWluZXI6IFJPT1QgKyBcIl9fc2xpZGVfX2NvbnRhaW5lclwiLFxuICBhcnJvd3M6IFJPT1QgKyBcIl9fYXJyb3dzXCIsXG4gIGFycm93OiBST09UICsgXCJfX2Fycm93XCIsXG4gIHByZXY6IFJPT1QgKyBcIl9fYXJyb3ctLXByZXZcIixcbiAgbmV4dDogUk9PVCArIFwiX19hcnJvdy0tbmV4dFwiLFxuICBwYWdpbmF0aW9uOiBST09UICsgXCJfX3BhZ2luYXRpb25cIixcbiAgcGFnZTogUk9PVCArIFwiX19wYWdpbmF0aW9uX19wYWdlXCIsXG4gIGNsb25lOiBST09UICsgXCJfX3NsaWRlLS1jbG9uZVwiLFxuICBwcm9ncmVzczogUk9PVCArIFwiX19wcm9ncmVzc1wiLFxuICBiYXI6IFJPT1QgKyBcIl9fcHJvZ3Jlc3NfX2JhclwiLFxuICBhdXRvcGxheTogUk9PVCArIFwiX19hdXRvcGxheVwiLFxuICBwbGF5OiBST09UICsgXCJfX3BsYXlcIixcbiAgcGF1c2U6IFJPT1QgKyBcIl9fcGF1c2VcIixcbiAgc3Bpbm5lcjogUk9PVCArIFwiX19zcGlubmVyXCIsXG4gIHNyOiBST09UICsgXCJfX3NyXCJcbn07XG4vKipcclxuICogRGVmaW5pdGlvbnMgb2Ygc3RhdHVzIGNsYXNzZXMuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xuXG52YXIgU1RBVFVTX0NMQVNTRVMgPSB7XG4gIGFjdGl2ZTogJ2lzLWFjdGl2ZScsXG4gIHZpc2libGU6ICdpcy12aXNpYmxlJyxcbiAgbG9hZGluZzogJ2lzLWxvYWRpbmcnXG59O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9pMThuLmpzXG4vKipcclxuICogRXhwb3J0IGkxOG4gdGV4dHMgYXMgb2JqZWN0LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUZXh0cyBmb3IgaTE4bi5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG52YXIgSTE4TiA9IHtcbiAgcHJldjogJ1ByZXZpb3VzIHNsaWRlJyxcbiAgbmV4dDogJ05leHQgc2xpZGUnLFxuICBmaXJzdDogJ0dvIHRvIGZpcnN0IHNsaWRlJyxcbiAgbGFzdDogJ0dvIHRvIGxhc3Qgc2xpZGUnLFxuICBzbGlkZVg6ICdHbyB0byBzbGlkZSAlcycsXG4gIHBhZ2VYOiAnR28gdG8gcGFnZSAlcycsXG4gIHBsYXk6ICdTdGFydCBhdXRvcGxheScsXG4gIHBhdXNlOiAnUGF1c2UgYXV0b3BsYXknXG59O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9kZWZhdWx0cy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBkZWZhdWx0IG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG52YXIgREVGQVVMVFMgPSB7XG4gIC8qKlxyXG4gICAqIERldGVybWluZSBhIHNsaWRlciB0eXBlLlxyXG4gICAqIC0gJ3NsaWRlJzogUmVndWxhciBzbGlkZXIuXHJcbiAgICogLSAnbG9vcCcgOiBDYXJvdXNlbCBzbGlkZXIuXHJcbiAgICogLSAnZmFkZScgOiBDaGFuZ2Ugc2xpZGVzIHdpdGggZmFkZSB0cmFuc2l0aW9uLiBwZXJQYWdlLCBkcmFnIG9wdGlvbnMgYXJlIGlnbm9yZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICB0eXBlOiAnc2xpZGUnLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcmV3aW5kIGEgc2xpZGVyIGJlZm9yZSB0aGUgZmlyc3Qgc2xpZGUgb3IgYWZ0ZXIgdGhlIGxhc3Qgb25lLlxyXG4gICAqIEluIFwibG9vcFwiIG1vZGUsIHRoaXMgb3B0aW9uIGlzIGlnbm9yZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcmV3aW5kOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBUcmFuc2l0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHNwZWVkOiA0MDAsXG5cbiAgLyoqXHJcbiAgICogVHJhbnNpdGlvbiBzcGVlZCBvbiByZXdpbmQgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgcmV3aW5kU3BlZWQ6IDAsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBwcmV2ZW50IGFueSBhY3Rpb25zIHdoaWxlIGEgc2xpZGVyIGlzIHRyYW5zaXRpb25pbmcuXHJcbiAgICogSWYgZmFsc2UsIG5hdmlnYXRpb24sIGRyYWcgYW5kIHN3aXBlIHdvcmsgd2hpbGUgdGhlIHNsaWRlciBpcyBydW5uaW5nLlxyXG4gICAqIEV2ZW4gc28sIGl0IHdpbGwgYmUgZm9yY2VkIHRvIHdhaXQgZm9yIHRyYW5zaXRpb24gaW4gc29tZSBjYXNlcyBpbiB0aGUgbG9vcCBtb2RlIHRvIHNoaWZ0IGEgc2xpZGVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHdhaXRGb3JUcmFuc2l0aW9uOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIERlZmluZSBzbGlkZXIgbWF4IHdpZHRoLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgd2lkdGg6IDAsXG5cbiAgLyoqXHJcbiAgICogRGVmaW5lIHNsaWRlciBoZWlnaHQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBoZWlnaHQ6IDAsXG5cbiAgLyoqXHJcbiAgICogRml4IHdpZHRoIG9mIHNsaWRlcy4gQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMTBlbSwgODAlIG9yIDgwdncuXHJcbiAgICogcGVyUGFnZSBudW1iZXIgd2lsbCBiZSBpZ25vcmVkIHdoZW4gdGhpcyBvcHRpb24gaXMgZmFsc3kuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHN0cmluZ31cclxuICAgKi9cbiAgZml4ZWRXaWR0aDogMCxcblxuICAvKipcclxuICAgKiBGaXggaGVpZ2h0IG9mIHNsaWRlcy4gQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMTBlbSwgODB2aCBidXQgJSB1bml0IGlzIG5vdCBhY2NlcHRlZC5cclxuICAgKiBoZWlnaHRSYXRpbyBvcHRpb24gd2lsbCBiZSBpZ25vcmVkIHdoZW4gdGhpcyBvcHRpb24gaXMgZmFsc3kuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHN0cmluZ31cclxuICAgKi9cbiAgZml4ZWRIZWlnaHQ6IDAsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGhlaWdodCBvZiBzbGlkZXMgYnkgcmF0aW8gdG8gYSBzbGlkZXIgd2lkdGguXHJcbiAgICogVGhpcyB3aWxsIGJlIGlnbm9yZWQgd2hlbiB0aGUgZml4ZWRIZWlnaHQgaXMgcHJvdmlkZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBoZWlnaHRSYXRpbzogMCxcblxuICAvKipcclxuICAgKiBJZiB0cnVlLCBzbGlkZSB3aWR0aCB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIGVsZW1lbnQgd2lkdGggaXRzZWxmLlxyXG4gICAqIC0gcGVyUGFnZS9wZXJNb3ZlIHNob3VsZCBiZSAxLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGF1dG9XaWR0aDogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSwgc2xpZGUgaGVpZ2h0IHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUgZWxlbWVudCB3aWR0aCBpdHNlbGYuXHJcbiAgICogLSBwZXJQYWdlL3Blck1vdmUgc2hvdWxkIGJlIDEuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYXV0b0hlaWdodDogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGhvdyBtYW55IHNsaWRlcyBzaG91bGQgYmUgZGlzcGxheWVkIHBlciBwYWdlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgcGVyUGFnZTogMSxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaG93IG1hbnkgc2xpZGVzIHNob3VsZCBiZSBtb3ZlZCB3aGVuIGEgc2xpZGVyIGdvZXMgdG8gbmV4dCBvciBwZXJ2LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgcGVyTW92ZTogMCxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgbWFudWFsbHkgaG93IG1hbnkgY2xvbmVzIHNob3VsZCBiZSBnZW5lcmF0ZWQgb24gdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUuXHJcbiAgICogVGhlIHRvdGFsIG51bWJlciBvZiBjbG9uZXMgd2lsbCBiZSB0d2ljZSBvZiB0aGlzIG51bWJlci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGNsb25lczogMCxcblxuICAvKipcclxuICAgKiBTdGFydCBpbmRleC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHN0YXJ0OiAwLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGljaCBzbGlkZSBzaG91bGQgYmUgZm9jdXNlZCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgc2xpZGVzIGluIGEgcGFnZS5cclxuICAgKiBBIHN0cmluZyBcImNlbnRlclwiIGlzIGFjY2VwdGFibGUgZm9yIGNlbnRlcmluZyBzbGlkZXMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfVxyXG4gICAqL1xuICBmb2N1czogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogR2FwIGJldHdlZW4gc2xpZGVzLiBDU1MgZm9ybWF0IGlzIGFsbG93ZWQgc3VjaCBhcyAxZW0uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHN0cmluZ31cclxuICAgKi9cbiAgZ2FwOiAwLFxuXG4gIC8qKlxyXG4gICAqIFNldCBwYWRkaW5nLWxlZnQvcmlnaHQgaW4gaG9yaXpvbnRhbCBtb2RlIG9yIHBhZGRpbmctdG9wL2JvdHRvbSBpbiB2ZXJ0aWNhbCBvbmUuXHJcbiAgICogR2l2ZSBhIHNpbmdsZSB2YWx1ZSB0byBzZXQgYSBzYW1lIHNpemUgZm9yIGJvdGggc2lkZXMgb3JcclxuICAgKiBkbyBhbiBvYmplY3QgZm9yIGRpZmZlcmVudCBzaXplcy5cclxuICAgKiBBbHNvLCBDU1MgZm9ybWF0IGlzIGFsbG93ZWQgc3VjaCBhcyAxZW0uXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC0gMTA6IE51bWJlclxyXG4gICAqIC0gJzFlbSc6IENTUyBmb3JtYXQuXHJcbiAgICogLSB7IGxlZnQ6IDAsIHJpZ2h0OiAyMCB9OiBPYmplY3QgZm9yIGRpZmZlcmVudCBzaXplcyBpbiBob3Jpem9udGFsIG1vZGUuXHJcbiAgICogLSB7IHRvcDogMCwgYm90dG9tOiAyMCB9OiBPYmplY3QgZm9yIGRpZmZlcmVudCBzaXplcyBpbiB2ZXJ0aWNhbCBtb2RlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd8T2JqZWN0fVxyXG4gICAqL1xuICBwYWRkaW5nOiAwLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIGFycm93cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhcnJvd3M6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogQ2hhbmdlIHRoZSBhcnJvdyBTVkcgcGF0aCBsaWtlICdtNy42MSAwLjgwNy0yLjEyLi4uJy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIGFycm93UGF0aDogJycsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBhcHBlbmQgcGFnaW5hdGlvbihpbmRpY2F0b3IgZG90cykgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHBhZ2luYXRpb246IHRydWUsXG5cbiAgLyoqXHJcbiAgICogQWN0aXZhdGUgYXV0b3BsYXkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYXV0b3BsYXk6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIEF1dG9wbGF5IGludGVydmFsIGluIG1pbGxpc2Vjb25kcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGludGVydmFsOiA1MDAwLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc3RvcCBhdXRvcGxheSB3aGVuIGEgc2xpZGVyIGlzIGhvdmVyZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc3RvcCBhdXRvcGxheSB3aGVuIGEgc2xpZGVyIGVsZW1lbnRzIGFyZSBmb2N1c2VkLlxyXG4gICAqIFRydWUgaXMgcmVjb21tZW5kZWQgZm9yIGFjY2Vzc2liaWxpdHkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcmVzZXQgcHJvZ3Jlc3Mgb2YgdGhlIGF1dG9wbGF5IHRpbWVyIHdoZW4gcmVzdW1lZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICByZXNldFByb2dyZXNzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIExvYWRpbmcgaW1hZ2VzIGxhemlseS5cclxuICAgKiBJbWFnZSBzcmMgbXVzdCBiZSBwcm92aWRlZCBieSBhIGRhdGEtc3BsaWRlLWxhenkgYXR0cmlidXRlLlxyXG4gICAqXHJcbiAgICogLSBmYWxzZTogRG8gbm90aGluZy5cclxuICAgKiAtICduZWFyYnknOiBPbmx5IGltYWdlcyBhcm91bmQgYW4gYWN0aXZlIHNsaWRlIHdpbGwgYmUgbG9hZGVkLlxyXG4gICAqIC0gJ3NlcXVlbnRpYWwnOiBBbGwgaW1hZ2VzIHdpbGwgYmUgc2VxdWVudGlhbGx5IGxvYWRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cclxuICAgKi9cbiAgbGF6eUxvYWQ6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIFRoaXMgb3B0aW9uIHdvcmtzIG9ubHkgd2hlbiBhIGxhenlMb2FkIG9wdGlvbiBpcyBcIm5lYXJieVwiLlxyXG4gICAqIERldGVybWluZSBob3cgbWFueSBwYWdlcyhub3Qgc2xpZGVzKSBhcm91bmQgYW4gYWN0aXZlIHNsaWRlIHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlaGFuZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHByZWxvYWRQYWdlczogMSxcblxuICAvKipcclxuICAgKiBFYXNpbmcgZm9yIENTUyB0cmFuc2l0aW9uLiBGb3IgZXhhbXBsZSwgbGluZWFyLCBlYXNlIG9yIGN1YmljLWJlemllcigpLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKC40MiwuNjUsLjI3LC45OSknLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGtleWJvYXJkIHNob3J0Y3V0c1xyXG4gICAqIC0gdHJ1ZSBvciAnZ2xvYmFsJzogTGlzdGVuIHRvIGtleWRvd24gZXZlbnQgb2YgdGhlIGRvY3VtZW50LlxyXG4gICAqIC0gJ2ZvY3VzZWQnOiBMaXN0ZW4gdG8gdGhlIGtleWRvd24gZXZlbnQgb2YgdGhlIHNsaWRlciByb290IGVsZW1lbnQuIHRhYmluZGV4PVwiMFwiIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQuXHJcbiAgICogLSBmYWxzZTogRGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XHJcbiAgICovXG4gIGtleWJvYXJkOiAnZ2xvYmFsJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFsbG93IG1vdXNlIGRyYWcgYW5kIHRvdWNoIHN3aXBlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGRyYWc6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogVGhlIGFuZ2xlIHRocmVzaG9sZCBmb3IgZHJhZy5cclxuICAgKiBUaGUgc2xpZGVyIHN0YXJ0cyBtb3Zpbmcgb25seSB3aGVuIHRoZSBkcmFnIGFuZ2xlIGlzIGxlc3MgdGhhbiB0aGlzIHRocmVzaG9sZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGRyYWdBbmdsZVRocmVzaG9sZDogMzAsXG5cbiAgLyoqXHJcbiAgICogRGlzdGFuY2UgdGhyZXNob2xkIGZvciBkZXRlcm1pbmluZyBpZiB0aGUgYWN0aW9uIGlzIFwiZmxpY2tcIiBvciBcInN3aXBlXCIuXHJcbiAgICogV2hlbiBhIGRyYWcgZGlzdGFuY2UgaXMgb3ZlciB0aGlzIHZhbHVlLCB0aGUgYWN0aW9uIHdpbGwgYmUgdHJlYXRlZCBhcyBcInN3aXBlXCIsIG5vdCBcImZsaWNrXCIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBzd2lwZURpc3RhbmNlVGhyZXNob2xkOiAxNTAsXG5cbiAgLyoqXHJcbiAgICogVmVsb2NpdHkgdGhyZXNob2xkIGZvciBkZXRlcm1pbmluZyBpZiB0aGUgYWN0aW9uIGlzIFwiZmxpY2tcIiBvciBcInN3aXBlXCIuXHJcbiAgICogQXJvdW5kIDAuNSBpcyByZWNvbW1lbmRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGZsaWNrVmVsb2NpdHlUaHJlc2hvbGQ6IC42LFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBwb3dlciBvZiBmbGljay4gVGhlIGxhcmdlciBudW1iZXIgdGhpcyBpcywgdGhlIGZhcnRoZXIgYSBzbGlkZXIgcnVucyBieSBmbGljay5cclxuICAgKiBBcm91bmQgNTAwIGlzIHJlY29tbWVuZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZmxpY2tQb3dlcjogNjAwLFxuXG4gIC8qKlxyXG4gICAqIExpbWl0IGEgbnVtYmVyIG9mIHBhZ2VzIHRvIG1vdmUgYnkgZmxpY2suXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBmbGlja01heFBhZ2VzOiAxLFxuXG4gIC8qKlxyXG4gICAqIFNsaWRlciBkaXJlY3Rpb24uXHJcbiAgICogLSAnbHRyJzogTGVmdCB0byByaWdodC5cclxuICAgKiAtICdydGwnOiBSaWdodCB0byBsZWZ0LlxyXG4gICAqIC0gJ3R0Yic6IFRvcCB0byBib3R0b20uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICBkaXJlY3Rpb246ICdsdHInLFxuXG4gIC8qKlxyXG4gICAqIFNldCBpbWcgc3JjIHRvIGJhY2tncm91bmQtaW1hZ2Ugb2YgaXRzIHBhcmVudCBlbGVtZW50LlxyXG4gICAqIEltYWdlcyB3aXRoIHZhcmlvdXMgc2l6ZXMgY2FuIGJlIGRpc3BsYXllZCBhcyBzYW1lIGRpbWVuc2lvbiB3aXRob3V0IGNyb3BwaW5nIHdvcmsuXHJcbiAgICogZml4ZWRIZWlnaHQgb3IgaGVpZ2h0UmF0aW8gaXMgcmVxdWlyZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgY292ZXI6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGFjY2Vzc2liaWxpdHkoYXJpYSBhbmQgc2NyZWVuIHJlYWRlciB0ZXh0cykgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGFjY2Vzc2liaWxpdHk6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBhZGQgdGFiaW5kZXg9XCIwXCIgdG8gdmlzaWJsZSBzbGlkZXMgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHNsaWRlRm9jdXM6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIGEgc2xpZGVyIGlzIG5hdmlnYXRpb24gZm9yIGFub3RoZXIuXHJcbiAgICogVXNlIFwic3luY1wiIEFQSSB0byBzeW5jaHJvbml6ZSB0d28gc2xpZGVycy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBpc05hdmlnYXRpb246IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gdHJpbSBzcGFjZXMgYmVmb3JlIHRoZSBmaXN0IHNsaWRlIG9yIGFmdGVyIHRoZSBsYXN0IG9uZSB3aGVuIFwiZm9jdXNcIiBpcyBub3QgMC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB0cmltU3BhY2U6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogVGhlIFwiaXMtYWN0aXZlXCIgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdHJhbnNpdGlvbiBhcyBkZWZhdWx0LlxyXG4gICAqIElmIHRydWUsIGl0IHdpbGwgYmUgYWRkZWQgYmVmb3JlIG1vdmUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdXBkYXRlT25Nb3ZlOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBUaHJvdHRsZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSByZXNpemUgZXZlbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICB0aHJvdHRsZTogMTAwLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZGVzdHJveSBhIHNsaWRlciBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgZGVzdHJveTogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogT3B0aW9ucyBmb3Igc3BlY2lmaWMgYnJlYWtwb2ludHMuXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHtcclxuICAgKiAgIDEwMDA6IHtcclxuICAgKiAgICAgcGVyUGFnZTogMyxcclxuICAgKiAgICAgZ2FwOiAyMFxyXG4gICAqICAgfSxcclxuICAgKiAgIDYwMDoge1xyXG4gICAqICAgICBwZXJQYWdlOiAxLFxyXG4gICAqICAgICBnYXA6IDUsXHJcbiAgICogICB9XHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58T2JqZWN0fVxyXG4gICAqL1xuICBicmVha3BvaW50czogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogQ29sbGVjdGlvbiBvZiBjbGFzcyBuYW1lcy5cclxuICAgKlxyXG4gICAqIEBzZWUgLi9jbGFzc2VzLmpzXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICBjbGFzc2VzOiBFTEVNRU5UX0NMQVNTRVMsXG5cbiAgLyoqXHJcbiAgICogQ29sbGVjdGlvbiBvZiBpMThuIHRleHRzLlxyXG4gICAqXHJcbiAgICogQHNlZSAuL2kxOG4uanNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIGkxOG46IEkxOE5cbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL3N0YXRlcy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBzdGF0ZSBjb25zdGFudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFNwbGlkZSBoYXMgYmVlbiBqdXN0IGNyZWF0ZWQuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xudmFyIENSRUFURUQgPSAxO1xuLyoqXHJcbiAqIEFsbCBjb21wb25lbnRzIGhhdmUgYmVlbiBtb3VudGVkIGFuZCBpbml0aWFsaXplZC5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBNT1VOVEVEID0gMjtcbi8qKlxyXG4gKiBTcGxpZGUgaXMgcmVhZHkgZm9yIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgSURMRSA9IDM7XG4vKipcclxuICogU3BsaWRlIGlzIG1vdmluZy5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBNT1ZJTkcgPSA0O1xuLyoqXHJcbiAqIFNwbGlkZSBpcyBtb3ZpbmcuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgREVTVFJPWUVEID0gNTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9zcGxpZGUuanNcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyoqXHJcbiAqIFRoZSBtYWluIGNsYXNzIGZvciBhcHBseWluZyBTcGxpZGUgdG8gYW4gZWxlbWVudC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cblxuXG5cbi8qKlxyXG4gKiBUaGUgbWFpbiBjbGFzcyBmb3IgYXBwbHlpbmcgU3BsaWRlIHRvIGFuIGVsZW1lbnQsXHJcbiAqIHByb3ZpZGluZyBzb21lIEFQSXMgdG8gY29udHJvbCB0aGUgYmVoYXZpb3IuXHJcbiAqL1xuXG52YXIgU3BsaWRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogU3BsaWRlIGNvbnN0cnVjdG9yLlxyXG4gICAqXHJcbiAgICogQHRocm93cyB7RXJyb3J9IFdoZW4gdGhlIGdpdmVuIHJvb3QgZWxlbWVudCBvciBzZWxlY3RvciBpcyBpbnZhbGlkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gIHJvb3QgICAgICAgLSBBIHNlbGVjdG9yIGZvciBhIHJvb3QgZWxlbWVudCBvciBhbiBlbGVtZW50IGl0c2VsZi5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgb3B0aW9ucyAgICAtIE9wdGlvbmFsLiBPcHRpb25zIHRvIGNoYW5nZSBkZWZhdWx0IGJlaGF2aW91ci5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgQ29tcG9uZW50cyAtIE9wdGlvbmFsLiBDb21wb25lbnRzLlxyXG4gICAqL1xuICBmdW5jdGlvbiBTcGxpZGUocm9vdCwgb3B0aW9ucywgQ29tcG9uZW50cykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoQ29tcG9uZW50cyA9PT0gdm9pZCAwKSB7XG4gICAgICBDb21wb25lbnRzID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gcm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQgPyByb290IDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihyb290KTtcbiAgICBleGlzdCh0aGlzLnJvb3QsICdBbiBpbnZhbGlkIGVsZW1lbnQvc2VsZWN0b3Igd2FzIGdpdmVuLicpO1xuICAgIHRoaXMuQ29tcG9uZW50cyA9IG51bGw7XG4gICAgdGhpcy5FdmVudCA9IGNvcmVfZXZlbnQoKTtcbiAgICB0aGlzLlN0YXRlID0gc3RhdGUoQ1JFQVRFRCk7XG4gICAgdGhpcy5TVEFURVMgPSBzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0O1xuICAgIHRoaXMuX28gPSBtZXJnZShERUZBVUxUUywgb3B0aW9ucyk7XG4gICAgdGhpcy5faSA9IDA7XG4gICAgdGhpcy5fYyA9IENvbXBvbmVudHM7XG4gICAgdGhpcy5fZSA9IHt9OyAvLyBFeHRlbnNpb25zXG5cbiAgICB0aGlzLl90ID0gbnVsbDsgLy8gVHJhbnNpdGlvblxuICB9XG4gIC8qKlxyXG4gICAqIENvbXBvc2UgYW5kIG1vdW50IGNvbXBvbmVudHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gICBFeHRlbnNpb25zIC0gT3B0aW9uYWwuIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBUcmFuc2l0aW9uIC0gT3B0aW9uYWwuIFNldCBhIGN1c3RvbSB0cmFuc2l0aW9uIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1NwbGlkZXx1bmRlZmluZWR9IC0gVGhpcyBpbnN0YW5jZSBvciB1bmRlZmluZWQgaWYgYW4gZXhjZXB0aW9uIG9jY3VycmVkLlxyXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFNwbGlkZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm1vdW50ID0gZnVuY3Rpb24gbW91bnQoRXh0ZW5zaW9ucywgVHJhbnNpdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoRXh0ZW5zaW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBFeHRlbnNpb25zID0gdGhpcy5fZTtcbiAgICB9XG5cbiAgICBpZiAoVHJhbnNpdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBUcmFuc2l0aW9uID0gdGhpcy5fdDtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB0aGUgc3RhdGUuXG4gICAgdGhpcy5TdGF0ZS5zZXQoQ1JFQVRFRCk7XG4gICAgdGhpcy5fZSA9IEV4dGVuc2lvbnM7XG4gICAgdGhpcy5fdCA9IFRyYW5zaXRpb247XG4gICAgdGhpcy5Db21wb25lbnRzID0gY29tcG9zZSh0aGlzLCBtZXJnZSh0aGlzLl9jLCBFeHRlbnNpb25zKSwgVHJhbnNpdGlvbik7XG5cbiAgICB0cnkge1xuICAgICAgZWFjaCh0aGlzLkNvbXBvbmVudHMsIGZ1bmN0aW9uIChjb21wb25lbnQsIGtleSkge1xuICAgICAgICB2YXIgcmVxdWlyZWQgPSBjb21wb25lbnQucmVxdWlyZWQ7XG5cbiAgICAgICAgaWYgKHJlcXVpcmVkID09PSB1bmRlZmluZWQgfHwgcmVxdWlyZWQpIHtcbiAgICAgICAgICBjb21wb25lbnQubW91bnQgJiYgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIF90aGlzLkNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgU3RhdGUgPSB0aGlzLlN0YXRlO1xuICAgIFN0YXRlLnNldChNT1VOVEVEKTtcbiAgICBlYWNoKHRoaXMuQ29tcG9uZW50cywgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50Lm1vdW50ZWQgJiYgY29tcG9uZW50Lm1vdW50ZWQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ21vdW50ZWQnKTtcbiAgICBTdGF0ZS5zZXQoSURMRSk7XG4gICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICAgIGFwcGx5U3R5bGUodGhpcy5yb290LCB7XG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgICB9KTtcbiAgICB0aGlzLm9uKCdtb3ZlIGRyYWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gU3RhdGUuc2V0KE1PVklORyk7XG4gICAgfSkub24oJ21vdmVkIGRyYWdnZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gU3RhdGUuc2V0KElETEUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFNldCBzeW5jIHRhcmdldC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BsaWRlfSBzcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1NwbGlkZX0gLSBUaGlzIGluc3RhbmNlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnN5bmMgPSBmdW5jdGlvbiBzeW5jKHNwbGlkZSkge1xuICAgIHRoaXMuc2libGluZyA9IHNwbGlkZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBSZWdpc3RlciBjYWxsYmFjayBmaXJlZCBvbiB0aGUgZ2l2ZW4gZXZlbnQocykuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICBldmVudHMgIC0gQW4gZXZlbnQgbmFtZS4gVXNlIHNwYWNlIHRvIHNlcGFyYXRlIG11bHRpcGxlIGV2ZW50cy5cclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxzbywgbmFtZXNwYWNlIGlzIGFjY2VwdGVkIGJ5IGRvdCwgc3VjaCBhcyAncmVzaXplLntuYW1lc3BhY2V9Jy5cclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gQSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9ICBlbG0gICAgIC0gT3B0aW9uYWwuIE5hdGl2ZSBldmVudCB3aWxsIGJlIGxpc3RlbmVkIHRvIHdoZW4gdGhpcyBhcmcgaXMgcHJvdmlkZWQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgb3B0aW9ucyAtIE9wdGlvbmFsLiBPcHRpb25zIGZvciBhZGRFdmVudExpc3RlbmVyLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfSAtIFRoaXMgaW5zdGFuY2UuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ub24gPSBmdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIGVsbSwgb3B0aW9ucykge1xuICAgIGlmIChlbG0gPT09IHZvaWQgMCkge1xuICAgICAgZWxtID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5FdmVudC5vbihldmVudHMsIGhhbmRsZXIsIGVsbSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmUgdGhlIGdpdmVuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBldmVudHMgLSBBIGV2ZW50IG5hbWUuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbG0gICAgLSBPcHRpb25hbC4gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhpcyBhcmcgaXMgcHJvdmlkZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV9IC0gVGhpcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnRzLCBlbG0pIHtcbiAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgIGVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5FdmVudC5vZmYoZXZlbnRzLCBlbG0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBBbiBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7Kn0gICAgICBhcmdzICAtIEFueSBudW1iZXIgb2YgYXJndW1lbnRzIHBhc3NlZCB0byBoYW5kbGVycy5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyRFdmVudDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIChfdGhpcyRFdmVudCA9IHRoaXMuRXZlbnQpLmVtaXQuYXBwbHkoX3RoaXMkRXZlbnQsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIEdvIHRvIHRoZSBzbGlkZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGNvbnRyb2wgLSBBIGNvbnRyb2wgcGF0dGVybi5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgIHdhaXQgICAgLSBPcHRpb25hbC4gV2hldGhlciB0byB3YWl0IGZvciB0cmFuc2l0aW9uLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdvID0gZnVuY3Rpb24gZ28oY29udHJvbCwgd2FpdCkge1xuICAgIGlmICh3YWl0ID09PSB2b2lkIDApIHtcbiAgICAgIHdhaXQgPSB0aGlzLm9wdGlvbnMud2FpdEZvclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuU3RhdGUuaXMoSURMRSkgfHwgdGhpcy5TdGF0ZS5pcyhNT1ZJTkcpICYmICF3YWl0KSB7XG4gICAgICB0aGlzLkNvbXBvbmVudHMuQ29udHJvbGxlci5nbyhjb250cm9sLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogVmVyaWZ5IHdoZXRoZXIgdGhlIHNsaWRlciB0eXBlIGlzIHRoZSBnaXZlbiBvbmUgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBBIHNsaWRlciB0eXBlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBzbGlkZXIgdHlwZSBpcyB0aGUgcHJvdmlkZWQgdHlwZSBvciBmYWxzZSBpZiBub3QuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uaXMgPSBmdW5jdGlvbiBpcyh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09IHRoaXMuX28udHlwZTtcbiAgfVxuICAvKipcclxuICAgKiBJbnNlcnQgYSBzbGlkZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IHNsaWRlIC0gQSBzbGlkZSBlbGVtZW50IHRvIGJlIGFkZGVkLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgICAgICAgIGluZGV4IC0gQSBzbGlkZSB3aWxsIGJlIGFkZGVkIGF0IHRoZSBwb3NpdGlvbi5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoc2xpZGUsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgdGhpcy5Db21wb25lbnRzLkVsZW1lbnRzLmFkZChzbGlkZSwgaW5kZXgsIHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIHNsaWRlIGRlc2lnbmF0ZWQgYnkgdGhlIGluZGV4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBzbGlkZSBpbmRleC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLkNvbXBvbmVudHMuRWxlbWVudHMucmVtb3ZlKGluZGV4KTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBEZXN0cm95IGFsbCBTbGlkZSBvYmplY3RzIGFuZCBjbG9uZXMgYW5kIHJlY3JlYXRlIHRoZW0gYWdhaW4uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgdGhpcy5lbWl0KCdyZWZyZXNoOmJlZm9yZScpLmVtaXQoJ3JlZnJlc2gnKS5lbWl0KCdyZXNpemUnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBEZXN0cm95IHRoZSBTcGxpZGUuXHJcbiAgICogXCJDb21wbGV0ZWx5XCIgYm9vbGVhbiBpcyBtYWlubHkgZm9yIGJyZWFrcG9pbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0ZWx5IC0gRGVzdHJveSBjb21wbGV0ZWx5LlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmIChjb21wbGV0ZWx5ID09PSB2b2lkIDApIHtcbiAgICAgIGNvbXBsZXRlbHkgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFBvc3Rwb25lIGRlc3Ryb3kgYmVjYXVzZSBpdCBzaG91bGQgYmUgZG9uZSBhZnRlciBtb3VudC5cbiAgICBpZiAodGhpcy5TdGF0ZS5pcyhDUkVBVEVEKSkge1xuICAgICAgdGhpcy5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuZGVzdHJveShjb21wbGV0ZWx5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbHVlcyh0aGlzLkNvbXBvbmVudHMpLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5kZXN0cm95ICYmIGNvbXBvbmVudC5kZXN0cm95KGNvbXBsZXRlbHkpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIGNvbXBsZXRlbHkpOyAvLyBEZXN0cm95IGFsbCBldmVudCBoYW5kbGVycywgaW5jbHVkaW5nIG9uZXMgZm9yIG5hdGl2ZSBldmVudHMuXG5cbiAgICB0aGlzLkV2ZW50LmRlc3Ryb3koKTtcbiAgICB0aGlzLlN0YXRlLnNldChERVNUUk9ZRUQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBzbGlkZSBpbmRleC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgY3VycmVudCBzbGlkZSBpbmRleC5cclxuICAgLy8gKi9cbiAgO1xuXG4gIF9jcmVhdGVDbGFzcyhTcGxpZGUsIFt7XG4gICAga2V5OiBcImluZGV4XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBpbmRleCAtIEEgbmV3IGluZGV4LlxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGluZGV4KSB7XG4gICAgICB0aGlzLl9pID0gcGFyc2VJbnQoaW5kZXgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJldHVybiBsZW5ndGggb2Ygc2xpZGVzLlxyXG4gICAgICogVGhpcyBpcyBhbiBhbGlhcyBvZiBFbGVtZW50cy5sZW5ndGguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgbnVtYmVyIG9mIHNsaWRlcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5Db21wb25lbnRzLkVsZW1lbnRzLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gT3B0aW9ucyBvYmplY3QuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9wdGlvbnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNldCBvcHRpb25zIHdpdGggbWVyZ2luZyB0aGUgZ2l2ZW4gb2JqZWN0IHRvIHRoZSBjdXJyZW50IG9uZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE5ldyBvcHRpb25zLlxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBjcmVhdGVkID0gdGhpcy5TdGF0ZS5pcyhDUkVBVEVEKTtcblxuICAgICAgaWYgKCFjcmVhdGVkKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX28gPSBtZXJnZSh0aGlzLl9vLCBvcHRpb25zKTtcblxuICAgICAgaWYgKCFjcmVhdGVkKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlZCcsIHRoaXMuX28pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY2xhc3MgbGlzdC5cclxuICAgICAqIFRoaXMgaXMgYW4gYWxpYXMgb2YgU3BsaWRlLm9wdGlvbnMuY2xhc3NMaXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgY2xhc3MgbGlzdC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX28uY2xhc3NlcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGkxOG4gc3RyaW5ncy5cclxuICAgICAqIFRoaXMgaXMgYW4gYWxpYXMgb2YgU3BsaWRlLm9wdGlvbnMuaTE4bi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGkxOG4gc3RyaW5ncy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaTE4blwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX28uaTE4bjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3BsaWRlO1xufSgpO1xuXG5cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL29wdGlvbnMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBpbml0aWFsaXppbmcgb3B0aW9ucy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGluaXRpYWxpemluZyBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qgb3B0aW9ucyA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIG9wdGlvbnMgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUuXHJcbiAgICogTm90ZSB0aGF0IElFMTAgZG9lc24ndCBzdXBwb3J0IGRhdGFzZXQgcHJvcGVydHkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICB2YXIgb3B0aW9ucyA9IGdldEF0dHJpYnV0ZShTcGxpZGUucm9vdCwgJ2RhdGEtc3BsaWRlJyk7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgU3BsaWRlLm9wdGlvbnMgPSBKU09OLnBhcnNlKG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIGlmIChTcGxpZGUuU3RhdGUuaXMoQ1JFQVRFRCkpIHtcbiAgICAgICAgU3BsaWRlLmluZGV4ID0gU3BsaWRlLm9wdGlvbnMuc3RhcnQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2RpcmVjdGlvbnMuanNcbi8qKlxyXG4gKiBFeHBvcnQgbGF5b3V0IG1vZGVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBFbnVtZXJhdGUgc2xpZGVzIGZyb20gbGVmdCB0byByaWdodC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgTFRSID0gJ2x0cic7XG4vKipcclxuICogRW51bWVyYXRlIHNsaWRlcyBmcm9tIHJpZ2h0IHRvIGxlZnQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgUlRMID0gJ3J0bCc7XG4vKipcclxuICogRW51bWVyYXRlIHNsaWRlcyBpbiBhIGNvbC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBUVEIgPSAndHRiJztcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2VsZW1lbnRzL3NsaWRlLmpzXG4vKipcclxuICogVGhlIHN1YiBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGVhY2ggc2xpZGUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG5cbi8qKlxyXG4gKiBFdmVudHMgZm9yIHJlc3RvcmluZyBvcmlnaW5hbCBzdHlsZXMuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1RZTEVfUkVTVE9SRV9FVkVOVFMgPSAndXBkYXRlLnNsaWRlJztcbi8qKlxyXG4gKiBUaGUgc3ViIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgZWFjaCBzbGlkZS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9ICBTcGxpZGUgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtudW1iZXJ9ICBpbmRleCAgICAgLSBBbiB1bmlxdWUgc2xpZGUgaW5kZXguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgcmVhbEluZGV4IC0gQ2xvbmVzIHNob3VsZCBwYXNzIGEgcmVhbCBzbGlkZSBpbmRleC5cclxuICogQHBhcmFtIHtFbGVtZW50fSBzbGlkZSAgICAgLSBBIHNsaWRlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgc3ViIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGVsZW1lbnRzX3NsaWRlID0gKGZ1bmN0aW9uIChTcGxpZGUsIGluZGV4LCByZWFsSW5kZXgsIHNsaWRlKSB7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gdXBkYXRlIFwiaXMtYWN0aXZlXCIgY2xhc3MgYmVmb3JlIG9yIGFmdGVyIHRyYW5zaXRpb24uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdmFyIHVwZGF0ZU9uTW92ZSA9IFNwbGlkZS5vcHRpb25zLnVwZGF0ZU9uTW92ZTtcbiAgLyoqXHJcbiAgICogRXZlbnRzIHdoZW4gdGhlIHNsaWRlIHN0YXR1cyBpcyB1cGRhdGVkLlxyXG4gICAqIEFwcGVuZCBhIG5hbWVzcGFjZSB0byByZW1vdmUgbGlzdGVuZXJzIGxhdGVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cblxuICB2YXIgU1RBVFVTX1VQREFURV9FVkVOVFMgPSAncmVhZHkuc2xpZGUgdXBkYXRlZC5zbGlkZSByZXNpemVkLnNsaWRlIG1vdmVkLnNsaWRlJyArICh1cGRhdGVPbk1vdmUgPyAnIG1vdmUuc2xpZGUnIDogJycpO1xuICAvKipcclxuICAgKiBTbGlkZSBzdWIgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIFNsaWRlID0ge1xuICAgIC8qKlxyXG4gICAgICogU2xpZGUgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgICAqL1xuICAgIHNsaWRlOiBzbGlkZSxcblxuICAgIC8qKlxyXG4gICAgICogU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xuICAgIGluZGV4OiBpbmRleCxcblxuICAgIC8qKlxyXG4gICAgICogUmVhbCBpbmRleCBmb3IgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICByZWFsSW5kZXg6IHJlYWxJbmRleCxcblxuICAgIC8qKlxyXG4gICAgICogQ29udGFpbmVyIGVsZW1lbnQgaWYgYXZhaWxhYmxlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtFbGVtZW50fHVuZGVmaW5lZH1cclxuICAgICAqL1xuICAgIGNvbnRhaW5lcjogY2hpbGQoc2xpZGUsIFNwbGlkZS5jbGFzc2VzLmNvbnRhaW5lciksXG5cbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBpcyBhIGNsb25lZCBzbGlkZSBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICBpc0Nsb25lOiByZWFsSW5kZXggPiAtMSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmlzQ2xvbmUpIHtcbiAgICAgICAgc2xpZGUuaWQgPSBTcGxpZGUucm9vdC5pZCArIFwiLXNsaWRlXCIgKyBwYWQoaW5kZXggKyAxKTtcbiAgICAgIH1cblxuICAgICAgU3BsaWRlLm9uKFNUQVRVU19VUERBVEVfRVZFTlRTLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51cGRhdGUoKTtcbiAgICAgIH0pLm9uKFNUWUxFX1JFU1RPUkVfRVZFTlRTLCByZXN0b3JlU3R5bGVzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTcGxpZGUuZW1pdCgnY2xpY2snLCBfdGhpcyk7XG4gICAgICB9LCBzbGlkZSk7XG4gICAgICAvKlxyXG4gICAgICAgKiBBZGQgXCJpcy1hY3RpdmVcIiBjbGFzcyB0byBhIGNsb25lIGVsZW1lbnQgdGVtcG9yYXJpbHlcclxuICAgICAgICogYW5kIGl0IHdpbGwgYmUgcmVtb3ZlZCBvbiBcIm1vdmVkXCIgZXZlbnQuXHJcbiAgICAgICAqL1xuXG4gICAgICBpZiAodXBkYXRlT25Nb3ZlKSB7XG4gICAgICAgIFNwbGlkZS5vbignbW92ZS5zbGlkZScsIGZ1bmN0aW9uIChuZXdJbmRleCkge1xuICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gcmVhbEluZGV4KSB7XG4gICAgICAgICAgICBfdXBkYXRlKHRydWUsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBNYWtlIHN1cmUgdGhlIHNsaWRlIGlzIHNob3duLlxuXG5cbiAgICAgIGFwcGx5U3R5bGUoc2xpZGUsIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pOyAvLyBIb2xkIHRoZSBvcmlnaW5hbCBzdHlsZXMuXG5cbiAgICAgIHRoaXMuc3R5bGVzID0gZ2V0QXR0cmlidXRlKHNsaWRlLCAnc3R5bGUnKSB8fCAnJztcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIFNwbGlkZS5vZmYoU1RBVFVTX1VQREFURV9FVkVOVFMpLm9mZihTVFlMRV9SRVNUT1JFX0VWRU5UUykub2ZmKCdjbGljaycsIHNsaWRlKTtcbiAgICAgIHJlbW92ZUNsYXNzKHNsaWRlLCB2YWx1ZXMoU1RBVFVTX0NMQVNTRVMpKTtcbiAgICAgIHJlc3RvcmVTdHlsZXMoKTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgJ3N0eWxlJyk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGFjdGl2ZSBhbmQgdmlzaWJsZSBzdGF0dXMuXHJcbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIF91cGRhdGUodGhpcy5pc0FjdGl2ZSgpLCBmYWxzZSk7XG5cbiAgICAgIF91cGRhdGUodGhpcy5pc1Zpc2libGUoKSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGlzIHNsaWRlIGlzIGFjdGl2ZSBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyBhY3RpdmUgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAgICovXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgICAgcmV0dXJuIFNwbGlkZS5pbmRleCA9PT0gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGlzIHNsaWRlIGlzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0IG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIHZpc2libGUgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAgICovXG4gICAgaXNWaXNpYmxlOiBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gICAgICB2YXIgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xuXG4gICAgICBpZiAoU3BsaWRlLmlzKEZBREUpIHx8IGFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2VpbCA9IE1hdGguY2VpbDtcbiAgICAgIHZhciB0cmFja1JlY3QgPSBnZXRSZWN0KFNwbGlkZS5Db21wb25lbnRzLkVsZW1lbnRzLnRyYWNrKTtcbiAgICAgIHZhciBzbGlkZVJlY3QgPSBnZXRSZWN0KHNsaWRlKTtcblxuICAgICAgaWYgKFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCKSB7XG4gICAgICAgIHJldHVybiB0cmFja1JlY3QudG9wIDw9IHNsaWRlUmVjdC50b3AgJiYgc2xpZGVSZWN0LmJvdHRvbSA8PSBjZWlsKHRyYWNrUmVjdC5ib3R0b20pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhY2tSZWN0LmxlZnQgPD0gc2xpZGVSZWN0LmxlZnQgJiYgc2xpZGVSZWN0LnJpZ2h0IDw9IGNlaWwodHJhY2tSZWN0LnJpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgaG93IGZhciB0aGlzIHNsaWRlIGlzIGZyb20gYW5vdGhlciBzbGlkZSBhbmRcclxuICAgICAqIHJldHVybiB0cnVlIGlmIHRoZSBkaXN0YW5jZSBpcyB3aXRoaW4gdGhlIGdpdmVuIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbSAgIC0gSW5kZXggb2YgYSB0YXJnZXQgc2xpZGUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2l0aGluIC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgd2l0aGluIHRoaXMgbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgd2l0aGluIHRoZSBudW1iZXIgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICovXG4gICAgaXNXaXRoaW46IGZ1bmN0aW9uIGlzV2l0aGluKGZyb20sIHdpdGhpbikge1xuICAgICAgdmFyIGRpZmYgPSBNYXRoLmFicyhmcm9tIC0gaW5kZXgpO1xuXG4gICAgICBpZiAoIVNwbGlkZS5pcyhTTElERSkgJiYgIXRoaXMuaXNDbG9uZSkge1xuICAgICAgICBkaWZmID0gTWF0aC5taW4oZGlmZiwgU3BsaWRlLmxlbmd0aCAtIGRpZmYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlmZiA8IHdpdGhpbjtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBjbGFzc2VzIGZvciBhY3Rpdml0eSBvciB2aXNpYmlsaXR5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBhY3RpdmUgICAgICAgIC0gSXMgYWN0aXZlL3Zpc2libGUgb3Igbm90LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yVmlzaWJpbGl0eSAtIFRvZ2dsZSBjbGFzc2VzIGZvciBhY3Rpdml0eSBvciB2aXNpYmlsaXR5LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIF91cGRhdGUoYWN0aXZlLCBmb3JWaXNpYmlsaXR5KSB7XG4gICAgdmFyIHR5cGUgPSBmb3JWaXNpYmlsaXR5ID8gJ3Zpc2libGUnIDogJ2FjdGl2ZSc7XG4gICAgdmFyIGNsYXNzTmFtZSA9IFNUQVRVU19DTEFTU0VTW3R5cGVdO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgYWRkQ2xhc3Moc2xpZGUsIGNsYXNzTmFtZSk7XG4gICAgICBTcGxpZGUuZW1pdChcIlwiICsgdHlwZSwgU2xpZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzQ2xhc3Moc2xpZGUsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGUsIGNsYXNzTmFtZSk7XG4gICAgICAgIFNwbGlkZS5lbWl0KFwiXCIgKyAoZm9yVmlzaWJpbGl0eSA/ICdoaWRkZW4nIDogJ2luYWN0aXZlJyksIFNsaWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogUmVzdG9yZSB0aGUgb3JpZ2luYWwgc3R5bGVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVzdG9yZVN0eWxlcygpIHtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsICdzdHlsZScsIFNsaWRlLnN0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gU2xpZGU7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2VsZW1lbnRzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbWFpbiBlbGVtZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cbi8qKlxyXG4gKiBUaGUgcHJvcGVydHkgbmFtZSBmb3IgVUlEIHN0b3JlZCBpbiBhIHdpbmRvdyBvYmplY3QuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgVUlEX05BTUUgPSAndWlkJztcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBtYWluIGVsZW1lbnRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY29tcG9uZW50c19lbGVtZW50cyA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBjbGFzcyBsaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgY2xhc3NlcyA9IFNwbGlkZS5jbGFzc2VzO1xuICAvKipcclxuICAgKiBTdG9yZSBTbGlkZSBvYmplY3RzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xuXG4gIHZhciBTbGlkZXMgPSBbXTtcbiAgLypcclxuICAgKiBBc3NpZ24gdW5pcXVlIElEIHRvIHRoZSByb290IGVsZW1lbnQgaWYgaXQgZG9lc24ndCBoYXZlIHRoZSBvbmUuXHJcbiAgICogTm90ZSB0aGF0IElFIGRvZXNuJ3Qgc3VwcG9ydCBwYWRTdGFydCgpIHRvIGZpbGwgdGhlIHVpZCBieSAwLlxyXG4gICAqL1xuXG4gIGlmICghcm9vdC5pZCkge1xuICAgIHdpbmRvdy5zcGxpZGUgPSB3aW5kb3cuc3BsaWRlIHx8IHt9O1xuICAgIHZhciB1aWQgPSB3aW5kb3cuc3BsaWRlW1VJRF9OQU1FXSB8fCAwO1xuICAgIHdpbmRvdy5zcGxpZGVbVUlEX05BTUVdID0gKyt1aWQ7XG4gICAgcm9vdC5pZCA9IFwic3BsaWRlXCIgKyBwYWQodWlkKTtcbiAgfVxuICAvKipcclxuICAgKiBFbGVtZW50cyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuXG4gIHZhciBFbGVtZW50cyA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqIENvbGxlY3QgbWFpbiBlbGVtZW50cyBhbmQgc3RvcmUgdGhlbSBhcyBtZW1iZXIgcHJvcGVydGllcy5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgU3BsaWRlLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgX3RoaXMuaW5pdCgpO1xuICAgICAgfSkub24oJ3VwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgICAgIGFkZENsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIFNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICBTbGlkZS5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIFNsaWRlcyA9IFtdO1xuICAgICAgcmVtb3ZlQ2xhc3Mocm9vdCwgZ2V0Q2xhc3NlcygpKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgY29sbGVjdCgpO1xuICAgICAgYWRkQ2xhc3Mocm9vdCwgZ2V0Q2xhc3NlcygpKTtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpbmRleCkge1xuICAgICAgICBfdGhpczIucmVnaXN0ZXIoc2xpZGUsIGluZGV4LCAtMSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIHNsaWRlIHRvIGNyZWF0ZSBhIFNsaWRlIG9iamVjdCBhbmQgaGFuZGxlIGl0cyBiZWhhdmlvci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHNsaWRlICAgICAtIEEgc2xpZGUgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgaW5kZXggICAgIC0gQSB1bmlxdWUgaW5kZXguIFRoaXMgY2FuIGJlIG5lZ2F0aXZlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICByZWFsSW5kZXggLSBBIHJlYWwgaW5kZXggZm9yIGNsb25lcy4gU2V0IC0xIGZvciByZWFsIHNsaWRlcy5cclxuICAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3RlcihzbGlkZSwgaW5kZXgsIHJlYWxJbmRleCkge1xuICAgICAgdmFyIFNsaWRlT2JqZWN0ID0gZWxlbWVudHNfc2xpZGUoU3BsaWRlLCBpbmRleCwgcmVhbEluZGV4LCBzbGlkZSk7XG4gICAgICBTbGlkZU9iamVjdC5tb3VudCgpO1xuICAgICAgU2xpZGVzLnB1c2goU2xpZGVPYmplY3QpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgU2xpZGUgb2JqZWN0IGRlc2lnbmF0ZWQgYnkgdGhlIGluZGV4LlxyXG4gICAgICogTm90ZSB0aGF0IFwiZmluZFwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH0gLSBBIFNsaWRlIG9iamVjdCBpZiBhdmFpbGFibGUuIFVuZGVmaW5lZCBpZiBub3QuXHJcbiAgICAgKi9cbiAgICBnZXRTbGlkZTogZnVuY3Rpb24gZ2V0U2xpZGUoaW5kZXgpIHtcbiAgICAgIHJldHVybiBTbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gU2xpZGUuaW5kZXggPT09IGluZGV4O1xuICAgICAgfSlbMF07XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFsbCBTbGlkZSBvYmplY3RzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNsb25lcyAtIFdoZXRoZXIgdG8gaW5jbHVkZSBjbG9uZWQgc2xpZGVzIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gLSBTbGlkZSBvYmplY3RzLlxyXG4gICAgICovXG4gICAgZ2V0U2xpZGVzOiBmdW5jdGlvbiBnZXRTbGlkZXMoaW5jbHVkZUNsb25lcykge1xuICAgICAgcmV0dXJuIGluY2x1ZGVDbG9uZXMgPyBTbGlkZXMgOiBTbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gIVNsaWRlLmlzQ2xvbmU7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gU2xpZGUgb2JqZWN0cyBiZWxvbmdpbmcgdG8gdGhlIGdpdmVuIHBhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBBIHBhZ2UgbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdFtdfSAtIEFuIGFycmF5IGNvbnRhaW5pbmcgU2xpZGUgb2JqZWN0cy5cclxuICAgICAqL1xuICAgIGdldFNsaWRlc0J5UGFnZTogZnVuY3Rpb24gZ2V0U2xpZGVzQnlQYWdlKHBhZ2UpIHtcbiAgICAgIHZhciBpZHggPSBDb21wb25lbnRzLkNvbnRyb2xsZXIudG9JbmRleChwYWdlKTtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB2YXIgbWF4ID0gb3B0aW9ucy5mb2N1cyAhPT0gZmFsc2UgPyAxIDogb3B0aW9ucy5wZXJQYWdlO1xuICAgICAgcmV0dXJuIFNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gX3JlZi5pbmRleDtcbiAgICAgICAgcmV0dXJuIGlkeCA8PSBpbmRleCAmJiBpbmRleCA8IGlkeCArIG1heDtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIEluc2VydCBhIHNsaWRlIHRvIGEgc2xpZGVyLlxyXG4gICAgICogTmVlZCB0byByZWZyZXNoIFNwbGlkZSBhZnRlciBhZGRpbmcgYSBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge05vZGV8c3RyaW5nfSBzbGlkZSAgICAtIEEgc2xpZGUgZWxlbWVudCB0byBiZSBhZGRlZC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICAgIGluZGV4ICAgIC0gQSBzbGlkZSB3aWxsIGJlIGFkZGVkIGF0IHRoZSBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259ICAgIGNhbGxiYWNrIC0gQ2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBzbGlkZSBpcyBhZGRlZCB0byB0aGUgRE9NIHRyZWUuXHJcbiAgICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChzbGlkZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlID09PSAnc3RyaW5nJykge1xuICAgICAgICBzbGlkZSA9IGRvbWlmeShzbGlkZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzbGlkZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHJlZiA9IHRoaXMuc2xpZGVzW2luZGV4XTsgLy8gVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gbW91bnQoKSBvZiBhIFNsaWRlIGNvbXBvbmVudC5cblxuICAgICAgICBhcHBseVN0eWxlKHNsaWRlLCB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICBiZWZvcmUoc2xpZGUsIHJlZik7XG4gICAgICAgICAgdGhpcy5zbGlkZXMuc3BsaWNlKGluZGV4LCAwLCBzbGlkZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBwZW5kKHRoaXMubGlzdCwgc2xpZGUpO1xuICAgICAgICAgIHRoaXMuc2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9hZGVkKHNsaWRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soc2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSBzbGlkZSBmcm9tIGEgc2xpZGVyLlxyXG4gICAgICogTmVlZCB0byByZWZyZXNoIFNwbGlkZSBhZnRlciByZW1vdmluZyBhIHNsaWRlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbmRleCAtIFNsaWRlIGluZGV4LlxyXG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcbiAgICAgIGRvbV9yZW1vdmUodGhpcy5zbGlkZXMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgZm9yIGVhY2ggU2xpZGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayBmdW5jdGlvbi4gVGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgYmUgdGhlIFNsaWRlIG9iamVjdC5cclxuICAgICAqL1xuICAgIGVhY2g6IGZ1bmN0aW9uIGVhY2goY2FsbGJhY2spIHtcbiAgICAgIFNsaWRlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gc2xpZGVzIGxlbmd0aCB3aXRob3V0IGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gU2xpZGUgbGVuZ3RoLlxyXG4gICAgICovXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIFwiU2xpZGVPYmplY3RzXCIgbGVuZ3RoIGluY2x1ZGluZyBjbG9uZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlIGxlbmd0aCBpbmNsdWRpbmcgY2xvbmVzLlxyXG4gICAgICovXG4gICAgZ2V0IHRvdGFsKCkge1xuICAgICAgcmV0dXJuIFNsaWRlcy5sZW5ndGg7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIENvbGxlY3QgZWxlbWVudHMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICBFbGVtZW50cy5zbGlkZXIgPSBjaGlsZChyb290LCBjbGFzc2VzLnNsaWRlcik7XG4gICAgRWxlbWVudHMudHJhY2sgPSBmaW5kKHJvb3QsIFwiLlwiICsgY2xhc3Nlcy50cmFjayk7XG4gICAgRWxlbWVudHMubGlzdCA9IGNoaWxkKEVsZW1lbnRzLnRyYWNrLCBjbGFzc2VzLmxpc3QpO1xuICAgIGV4aXN0KEVsZW1lbnRzLnRyYWNrICYmIEVsZW1lbnRzLmxpc3QsICdUcmFjayBvciBsaXN0IHdhcyBub3QgZm91bmQuJyk7XG4gICAgRWxlbWVudHMuc2xpZGVzID0gY2hpbGRyZW4oRWxlbWVudHMubGlzdCwgY2xhc3Nlcy5zbGlkZSk7XG4gICAgdmFyIGFycm93cyA9IGZpbmRQYXJ0cyhjbGFzc2VzLmFycm93cyk7XG4gICAgRWxlbWVudHMuYXJyb3dzID0ge1xuICAgICAgcHJldjogZmluZChhcnJvd3MsIFwiLlwiICsgY2xhc3Nlcy5wcmV2KSxcbiAgICAgIG5leHQ6IGZpbmQoYXJyb3dzLCBcIi5cIiArIGNsYXNzZXMubmV4dClcbiAgICB9O1xuICAgIHZhciBhdXRvcGxheSA9IGZpbmRQYXJ0cyhjbGFzc2VzLmF1dG9wbGF5KTtcbiAgICBFbGVtZW50cy5iYXIgPSBmaW5kKGZpbmRQYXJ0cyhjbGFzc2VzLnByb2dyZXNzKSwgXCIuXCIgKyBjbGFzc2VzLmJhcik7XG4gICAgRWxlbWVudHMucGxheSA9IGZpbmQoYXV0b3BsYXksIFwiLlwiICsgY2xhc3Nlcy5wbGF5KTtcbiAgICBFbGVtZW50cy5wYXVzZSA9IGZpbmQoYXV0b3BsYXksIFwiLlwiICsgY2xhc3Nlcy5wYXVzZSk7XG4gICAgRWxlbWVudHMudHJhY2suaWQgPSBFbGVtZW50cy50cmFjay5pZCB8fCByb290LmlkICsgXCItdHJhY2tcIjtcbiAgICBFbGVtZW50cy5saXN0LmlkID0gRWxlbWVudHMubGlzdC5pZCB8fCByb290LmlkICsgXCItbGlzdFwiO1xuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiBjbGFzcyBuYW1lcyBmb3IgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldENsYXNzZXMoKSB7XG4gICAgdmFyIHJvb3RDbGFzcyA9IGNsYXNzZXMucm9vdDtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIHJldHVybiBbcm9vdENsYXNzICsgXCItLVwiICsgb3B0aW9ucy50eXBlLCByb290Q2xhc3MgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbiwgb3B0aW9ucy5kcmFnID8gcm9vdENsYXNzICsgXCItLWRyYWdnYWJsZVwiIDogJycsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uID8gcm9vdENsYXNzICsgXCItLW5hdlwiIDogJycsIFNUQVRVU19DTEFTU0VTLmFjdGl2ZV07XG4gIH1cbiAgLyoqXHJcbiAgICogRmluZCBwYXJ0cyBvbmx5IGZyb20gY2hpbGRyZW4gb2YgdGhlIHJvb3Qgb3IgdHJhY2suXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSAtIEEgZm91bmQgZWxlbWVudCBvciB1bmRlZmluZWQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBmaW5kUGFydHMoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGNoaWxkKHJvb3QsIGNsYXNzTmFtZSkgfHwgY2hpbGQoRWxlbWVudHMuc2xpZGVyLCBjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIEVsZW1lbnRzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jb250cm9sbGVyL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY29udHJvbGxpbmcgdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHRoZSB0cmFjay5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBTdG9yZSBjdXJyZW50IG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgb3B0aW9ucztcbiAgLyoqXHJcbiAgICogVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgTE9PUCBtb2RlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzTG9vcDtcbiAgLyoqXHJcbiAgICogQ29udHJvbGxlciBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQ29udHJvbGxlciA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIGlzTG9vcCA9IFNwbGlkZS5pcyhMT09QKTtcbiAgICAgIGJpbmQoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHRyYWNrIHJ1biBieSB0aGUgZ2l2ZW4gY29udHJvbC5cclxuICAgICAqIC0gXCIre2l9XCIgOiBJbmNyZW1lbnQgdGhlIHNsaWRlIGluZGV4IGJ5IGkuXHJcbiAgICAgKiAtIFwiLXtpfVwiIDogRGVjcmVtZW50IHRoZSBzbGlkZSBpbmRleCBieSBpLlxyXG4gICAgICogLSBcIntpfVwiICA6IEdvIHRvIHRoZSBzbGlkZSB3aG9zZSBpbmRleCBpcyBpLlxyXG4gICAgICogLSBcIj5cIiAgICA6IEdvIHRvIG5leHQgcGFnZS5cclxuICAgICAqIC0gXCI8XCIgICAgOiBHbyB0byBwcmV2IHBhZ2UuXHJcbiAgICAgKiAtIFwiPntpfVwiIDogR28gdG8gcGFnZSBpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY29udHJvbCAgLSBBIGNvbnRyb2wgcGF0dGVybi5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgc2lsZW50bHkgLSBHbyB0byB0aGUgZGVzdGluYXRpb24gd2l0aG91dCBldmVudCBlbWlzc2lvbi5cclxuICAgICAqL1xuICAgIGdvOiBmdW5jdGlvbiBnbyhjb250cm9sLCBzaWxlbnRseSkge1xuICAgICAgdmFyIGRlc3RJbmRleCA9IHRoaXMudHJpbSh0aGlzLnBhcnNlKGNvbnRyb2wpKTtcbiAgICAgIENvbXBvbmVudHMuVHJhY2suZ28oZGVzdEluZGV4LCB0aGlzLnJld2luZChkZXN0SW5kZXgpLCBzaWxlbnRseSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgdGhlIGdpdmVuIGNvbnRyb2wgYW5kIHJldHVybiB0aGUgZGVzdGluYXRpb24gaW5kZXggZm9yIHRoZSB0cmFjay5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29udHJvbCAtIEEgY29udHJvbCB0YXJnZXQgcGF0dGVybi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBwYXJzZWQgdGFyZ2V0LlxyXG4gICAgICovXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGNvbnRyb2wpIHtcbiAgICAgIHZhciBpbmRleCA9IFNwbGlkZS5pbmRleDtcbiAgICAgIHZhciBtYXRjaGVzID0gU3RyaW5nKGNvbnRyb2wpLm1hdGNoKC8oWytcXC08Pl0rKShcXGQrKT8vKTtcbiAgICAgIHZhciBpbmRpY2F0b3IgPSBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6ICcnO1xuICAgICAgdmFyIG51bWJlciA9IG1hdGNoZXMgPyBwYXJzZUludChtYXRjaGVzWzJdKSA6IDA7XG5cbiAgICAgIHN3aXRjaCAoaW5kaWNhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIGluZGV4ICs9IG51bWJlciB8fCAxO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIGluZGV4IC09IG51bWJlciB8fCAxO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBpbmRleCA9IHBhcnNlUGFnZShudW1iZXIsIGluZGV4LCBpbmRpY2F0b3IgPT09ICc8Jyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KGNvbnRyb2wpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ29tcHV0ZSBpbmRleCBmcm9tIHRoZSBnaXZlbiBwYWdlIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIFBhZ2UgbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIGNvbXB1dGVkIHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgdG9JbmRleDogZnVuY3Rpb24gdG9JbmRleChwYWdlKSB7XG4gICAgICBpZiAoaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IFNwbGlkZS5sZW5ndGg7XG4gICAgICB2YXIgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICAgIHZhciBpbmRleCA9IHBhZ2UgKiBwZXJQYWdlO1xuICAgICAgaW5kZXggPSBpbmRleCAtICh0aGlzLnBhZ2VMZW5ndGggKiBwZXJQYWdlIC0gbGVuZ3RoKSAqIGZsb29yKGluZGV4IC8gbGVuZ3RoKTsgLy8gQWRqdXN0bWVudCBmb3IgdGhlIGxhc3QgcGFnZS5cblxuICAgICAgaWYgKGxlbmd0aCAtIHBlclBhZ2UgPD0gaW5kZXggJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSBsZW5ndGggLSBwZXJQYWdlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ29tcHV0ZSBwYWdlIG51bWJlciBmcm9tIHRoZSBnaXZlbiBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBjb21wdXRlZCBwYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIHRvUGFnZTogZnVuY3Rpb24gdG9QYWdlKGluZGV4KSB7XG4gICAgICBpZiAoaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuICAgICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7IC8vIE1ha2UgdGhlIGxhc3QgXCJwZXJQYWdlXCIgbnVtYmVyIG9mIHNsaWRlcyBiZWxvbmcgdG8gdGhlIGxhc3QgcGFnZS5cblxuICAgICAgaWYgKGxlbmd0aCAtIHBlclBhZ2UgPD0gaW5kZXggJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZsb29yKChsZW5ndGggLSAxKSAvIHBlclBhZ2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxvb3IoaW5kZXggLyBwZXJQYWdlKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBUcmltIHRoZSBnaXZlbiBpbmRleCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgbW9kZS5cclxuICAgICAqIEluZGV4IGJlaW5nIHJldHVybmVkIGNvdWxkIGJlIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIGluIExvb3AgbW9kZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBbiBpbmRleCBiZWluZyB0cmltbWVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIHRyaW1tZWQgaW5kZXguXHJcbiAgICAgKi9cbiAgICB0cmltOiBmdW5jdGlvbiB0cmltKGluZGV4KSB7XG4gICAgICBpZiAoIWlzTG9vcCkge1xuICAgICAgICBpbmRleCA9IG9wdGlvbnMucmV3aW5kID8gdGhpcy5yZXdpbmQoaW5kZXgpIDogYmV0d2VlbihpbmRleCwgMCwgdGhpcy5lZGdlSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV3aW5kIHRoZSBnaXZlbiBpbmRleCBpZiBpdCdzIG91dCBvZiByYW5nZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBbiBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSByZXdvdW5kIGluZGV4LlxyXG4gICAgICovXG4gICAgcmV3aW5kOiBmdW5jdGlvbiByZXdpbmQoaW5kZXgpIHtcbiAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlSW5kZXg7XG5cbiAgICAgIGlmIChpc0xvb3ApIHtcbiAgICAgICAgd2hpbGUgKGluZGV4ID4gZWRnZSkge1xuICAgICAgICAgIGluZGV4IC09IGVkZ2UgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgMCkge1xuICAgICAgICAgIGluZGV4ICs9IGVkZ2UgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW5kZXggPiBlZGdlKSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIGluZGV4ID0gZWRnZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGRpcmVjdGlvbiBpcyBcInJ0bFwiIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgXCJydGxcIiBvciBmYWxzZSBpZiBub3QuXHJcbiAgICAgKi9cbiAgICBpc1J0bDogZnVuY3Rpb24gaXNSdGwoKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHBhZ2UgbGVuZ3RoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBNYXggcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cbiAgICBnZXQgcGFnZUxlbmd0aCgpIHtcbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuICAgICAgcmV0dXJuIGhhc0ZvY3VzKCkgPyBsZW5ndGggOiBNYXRoLmNlaWwobGVuZ3RoIC8gb3B0aW9ucy5wZXJQYWdlKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGVkZ2UgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEVkZ2UgaW5kZXguXHJcbiAgICAgKi9cbiAgICBnZXQgZWRnZUluZGV4KCkge1xuICAgICAgdmFyIGxlbmd0aCA9IFNwbGlkZS5sZW5ndGg7XG5cbiAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFzRm9jdXMoKSB8fCBvcHRpb25zLmlzTmF2aWdhdGlvbiB8fCBpc0xvb3ApIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsZW5ndGggLSBvcHRpb25zLnBlclBhZ2U7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgcHJldmlvdXMgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBpbmRleCBvZiB0aGUgcHJldmlvdXMgc2xpZGUgaWYgYXZhaWxhYmxlLiAtMSBvdGhlcndpc2UuXHJcbiAgICAgKi9cbiAgICBnZXQgcHJldkluZGV4KCkge1xuICAgICAgdmFyIHByZXYgPSBTcGxpZGUuaW5kZXggLSAxO1xuXG4gICAgICBpZiAoaXNMb29wIHx8IG9wdGlvbnMucmV3aW5kKSB7XG4gICAgICAgIHByZXYgPSB0aGlzLnJld2luZChwcmV2KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXYgPiAtMSA/IHByZXYgOiAtMTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBuZXh0IHNsaWRlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgaW5kZXggb2YgdGhlIG5leHQgc2xpZGUgaWYgYXZhaWxhYmxlLiAtMSBvdGhlcndpc2UuXHJcbiAgICAgKi9cbiAgICBnZXQgbmV4dEluZGV4KCkge1xuICAgICAgdmFyIG5leHQgPSBTcGxpZGUuaW5kZXggKyAxO1xuXG4gICAgICBpZiAoaXNMb29wIHx8IG9wdGlvbnMucmV3aW5kKSB7XG4gICAgICAgIG5leHQgPSB0aGlzLnJld2luZChuZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFNwbGlkZS5pbmRleCA8IG5leHQgJiYgbmV4dCA8PSB0aGlzLmVkZ2VJbmRleCB8fCBuZXh0ID09PSAwID8gbmV4dCA6IC0xO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBMaXN0ZW4gdG8gc29tZSBldmVudHMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBTcGxpZGUub24oJ21vdmUnLCBmdW5jdGlvbiAobmV3SW5kZXgpIHtcbiAgICAgIFNwbGlkZS5pbmRleCA9IG5ld0luZGV4O1xuICAgIH0pLm9uKCd1cGRhdGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAobmV3T3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG5ld09wdGlvbnMgfHwgb3B0aW9ucztcbiAgICAgIFNwbGlkZS5pbmRleCA9IGJldHdlZW4oU3BsaWRlLmluZGV4LCAwLCBDb250cm9sbGVyLmVkZ2VJbmRleCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogVmVyaWZ5IGlmIHRoZSBmb2N1cyBvcHRpb24gaXMgYXZhaWxhYmxlIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiBhIHNsaWRlciBoYXMgdGhlIGZvY3VzIG9wdGlvbi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGhhc0ZvY3VzKCkge1xuICAgIHJldHVybiBvcHRpb25zLmZvY3VzICE9PSBmYWxzZTtcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIG5leHQgb3IgcHJldmlvdXMgcGFnZSBpbmRleCBjb21wdXRlZCBieSB0aGUgcGFnZSBudW1iZXIgYW5kIGN1cnJlbnQgaW5kZXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gIG51bWJlciAtIFNwZWNpZnkgdGhlIHBhZ2UgbnVtYmVyLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgaW5kZXggIC0gQ3VycmVudCBpbmRleC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZXYgICAtIFByZXYgb3IgbmV4dC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZSBpbmRleC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHBhcnNlUGFnZShudW1iZXIsIGluZGV4LCBwcmV2KSB7XG4gICAgaWYgKG51bWJlciA+IC0xKSB7XG4gICAgICByZXR1cm4gQ29udHJvbGxlci50b0luZGV4KG51bWJlcik7XG4gICAgfVxuXG4gICAgdmFyIHBlck1vdmUgPSBvcHRpb25zLnBlck1vdmU7XG4gICAgdmFyIHNpZ24gPSBwcmV2ID8gLTEgOiAxO1xuXG4gICAgaWYgKHBlck1vdmUpIHtcbiAgICAgIHJldHVybiBpbmRleCArIHBlck1vdmUgKiBzaWduO1xuICAgIH1cblxuICAgIHJldHVybiBDb250cm9sbGVyLnRvSW5kZXgoQ29udHJvbGxlci50b1BhZ2UoaW5kZXgpICsgc2lnbik7XG4gIH1cblxuICByZXR1cm4gQ29udHJvbGxlcjtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvdHJhY2svaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBtb3ZpbmcgbGlzdCBpbiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG52YXIgYWJzID0gTWF0aC5hYnM7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbW92aW5nIGxpc3QgaW4gdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgdHJhY2sgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBMYXlvdXQgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIExheW91dDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgTGF5b3V0IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgbGlzdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIGxpc3Q7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIGlzIHZlcnRpY2FsIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciB0eXBlIGlzIEZBREUgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzRmFkZSA9IFNwbGlkZS5pcyhGQURFKTtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIGRpcmVjdGlvbiBpcyBSVEwgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzUlRMID0gU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEw7XG4gIC8qKlxyXG4gICAqIFRoaXMgd2lsbCBiZSB0cnVlIHdoaWxlIHRyYW5zaXRpb25pbmcgZnJvbSB0aGUgbGFzdCBpbmRleCB0byB0aGUgZmlyc3Qgb25lLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzTG9vcFBlbmRpbmcgPSBmYWxzZTtcbiAgLyoqXHJcbiAgICogU2lnbiBmb3IgdGhlIGRpcmVjdGlvbi4gT25seSBSVEwgbW9kZSB1c2VzIHRoZSBwb3NpdGl2ZSBzaWduLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cblxuICB2YXIgc2lnbiA9IGlzUlRMID8gMSA6IC0xO1xuICAvKipcclxuICAgKiBUcmFjayBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgVHJhY2sgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHB1YmxpYyB0aGUgc2lnbiBkZWZpbmVkIGxvY2FsbHkuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xuICAgIHNpZ246IHNpZ24sXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgICAgIExheW91dCA9IENvbXBvbmVudHMuTGF5b3V0O1xuICAgICAgbGlzdCA9IEVsZW1lbnRzLmxpc3Q7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqIFRoZSByZXNpemUgZXZlbnQgbXVzdCBiZSByZWdpc3RlcmVkIGFmdGVyIHRoZSBMYXlvdXQncyBvbmUgaXMgZG9uZS5cclxuICAgICAqL1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIWlzRmFkZSkge1xuICAgICAgICB0aGlzLmp1bXAoMCk7XG4gICAgICAgIFNwbGlkZS5vbignbW91bnRlZCByZXNpemUgdXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5qdW1wKFNwbGlkZS5pbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgICAqIEFmdGVyIGFycml2aW5nIHRoZXJlLCB0aGUgdHJhY2sgaXMganVtcCB0byB0aGUgbmV3IGluZGV4IHdpdGhvdXQgYW5pbWF0aW9uLCBtYWlubHkgZm9yIGxvb3AgbW9kZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIGRlc3RJbmRleCAtIEEgZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgY2FuIGJlIG5lZ2F0aXZlIG9yIGdyZWF0ZXIgdGhhbiBzbGlkZXMgbGVuZ3RoIGZvciByZWFjaGluZyBjbG9uZXMuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIG5ld0luZGV4ICAtIEFuIGFjdHVhbCBuZXcgaW5kZXguIFRoZXkgYXJlIGFsd2F5cyBzYW1lIGluIFNsaWRlIGFuZCBSZXdpbmQgbW9kZS5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2lsZW50bHkgIC0gSWYgdHJ1ZSwgc3VwcHJlc3MgZW1pdHRpbmcgZXZlbnRzLlxyXG4gICAgICovXG4gICAgZ286IGZ1bmN0aW9uIGdvKGRlc3RJbmRleCwgbmV3SW5kZXgsIHNpbGVudGx5KSB7XG4gICAgICB2YXIgbmV3UG9zaXRpb24gPSBnZXRUcmltbWVkUG9zaXRpb24oZGVzdEluZGV4KTtcbiAgICAgIHZhciBwcmV2SW5kZXggPSBTcGxpZGUuaW5kZXg7IC8vIFByZXZlbnQgYW55IGFjdGlvbnMgd2hpbGUgdHJhbnNpdGlvbmluZyBmcm9tIHRoZSBsYXN0IGluZGV4IHRvIHRoZSBmaXJzdCBvbmUgZm9yIGp1bXAuXG5cbiAgICAgIGlmIChTcGxpZGUuU3RhdGUuaXMoTU9WSU5HKSAmJiBpc0xvb3BQZW5kaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNMb29wUGVuZGluZyA9IGRlc3RJbmRleCAhPT0gbmV3SW5kZXg7XG5cbiAgICAgIGlmICghc2lsZW50bHkpIHtcbiAgICAgICAgU3BsaWRlLmVtaXQoJ21vdmUnLCBuZXdJbmRleCwgcHJldkluZGV4LCBkZXN0SW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMobmV3UG9zaXRpb24gLSB0aGlzLnBvc2l0aW9uKSA+PSAxIHx8IGlzRmFkZSkge1xuICAgICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uc3RhcnQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCB0aGlzLnRvQ29vcmQobmV3UG9zaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgb25UcmFuc2l0aW9uRW5kKGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgc2lsZW50bHkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkZXN0SW5kZXggIT09IHByZXZJbmRleCAmJiBTcGxpZGUub3B0aW9ucy50cmltU3BhY2UgPT09ICdtb3ZlJykge1xuICAgICAgICAgIENvbXBvbmVudHMuQ29udHJvbGxlci5nbyhkZXN0SW5kZXggKyBkZXN0SW5kZXggLSBwcmV2SW5kZXgsIHNpbGVudGx5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblRyYW5zaXRpb25FbmQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBzaWxlbnRseSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRoZSB0cmFjayB0byB0aGUgc3BlY2lmaWVkIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEEgZGVzdGluYXRpb24gaW5kZXggd2hlcmUgdGhlIHRyYWNrIGp1bXBzLlxyXG4gICAgICovXG4gICAganVtcDogZnVuY3Rpb24ganVtcChpbmRleCkge1xuICAgICAgdGhpcy50cmFuc2xhdGUoZ2V0VHJpbW1lZFBvc2l0aW9uKGluZGV4KSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBsaXN0IHBvc2l0aW9uIGJ5IENTUyB0cmFuc2xhdGUgcHJvcGVydHkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBuZXcgcG9zaXRpb24gdmFsdWUuXHJcbiAgICAgKi9cbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uIHRyYW5zbGF0ZShwb3NpdGlvbikge1xuICAgICAgYXBwbHlTdHlsZShsaXN0LCB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVcIiArIChpc1ZlcnRpY2FsID8gJ1knIDogJ1gnKSArIFwiKFwiICsgcG9zaXRpb24gKyBcInB4KVwiXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWwgdGhlIHRyYW5zaXRpb24gYW5kIHNldCB0aGUgbGlzdCBwb3NpdGlvbi5cclxuICAgICAqIEFsc28sIGxvb3AgdGhlIHNsaWRlciBpZiBuZWNlc3NhcnkuXHJcbiAgICAgKi9cbiAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIGlmIChTcGxpZGUuaXMoTE9PUCkpIHtcbiAgICAgICAgdGhpcy5zaGlmdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgYXBwbHlTdHlsZShsaXN0LCB7XG4gICAgICAgIHRyYW5zaXRpb246ICcnXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTaGlmdCB0aGUgc2xpZGVyIGlmIGl0IGV4Y2VlZHMgYm9yZGVycyBvbiB0aGUgZWRnZS5cclxuICAgICAqL1xuICAgIHNoaWZ0OiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGFicyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgIHZhciBsZWZ0ID0gYWJzKHRoaXMudG9Qb3NpdGlvbigwKSk7XG4gICAgICB2YXIgcmlnaHQgPSBhYnModGhpcy50b1Bvc2l0aW9uKFNwbGlkZS5sZW5ndGgpKTtcbiAgICAgIHZhciBpbm5lclNpemUgPSByaWdodCAtIGxlZnQ7XG5cbiAgICAgIGlmIChwb3NpdGlvbiA8IGxlZnQpIHtcbiAgICAgICAgcG9zaXRpb24gKz0gaW5uZXJTaXplO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+IHJpZ2h0KSB7XG4gICAgICAgIHBvc2l0aW9uIC09IGlubmVyU2l6ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmFuc2xhdGUoc2lnbiAqIHBvc2l0aW9uKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBUcmltIHJlZHVuZGFudCBzcGFjZXMgb24gdGhlIGxlZnQgb3IgcmlnaHQgZWRnZSBpZiBuZWNlc3NhcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gUG9zaXRpb24gdmFsdWUgdG8gYmUgdHJpbW1lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVHJpbW1lZCBwb3NpdGlvbi5cclxuICAgICAqL1xuICAgIHRyaW06IGZ1bmN0aW9uIHRyaW0ocG9zaXRpb24pIHtcbiAgICAgIGlmICghU3BsaWRlLm9wdGlvbnMudHJpbVNwYWNlIHx8IFNwbGlkZS5pcyhMT09QKSkge1xuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBlZGdlID0gc2lnbiAqIChMYXlvdXQudG90YWxTaXplKCkgLSBMYXlvdXQuc2l6ZSAtIExheW91dC5nYXApO1xuICAgICAgcmV0dXJuIGJldHdlZW4ocG9zaXRpb24sIGVkZ2UsIDApO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgY2xvc2VzdCBzbGlkZSBpbmRleCBmcm9tIHRoZSBnaXZlbiBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBBIHBvc2l0aW9uIGNvbnZlcnRlZCB0byBhbiBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGNsb3Nlc3Qgc2xpZGUgaW5kZXguXHJcbiAgICAgKi9cbiAgICB0b0luZGV4OiBmdW5jdGlvbiB0b0luZGV4KHBvc2l0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgRWxlbWVudHMuZ2V0U2xpZGVzKHRydWUpLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHZhciBzbGlkZUluZGV4ID0gU2xpZGUuaW5kZXg7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGFicyhfdGhpczIudG9Qb3NpdGlvbihzbGlkZUluZGV4KSAtIHBvc2l0aW9uKTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgaW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gY29vcmRpbmF0ZXMgb2JqZWN0IGJ5IHRoZSBnaXZlbiBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBBIHBvc2l0aW9uIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBBIGNvb3JkaW5hdGVzIG9iamVjdC5cclxuICAgICAqL1xuICAgIHRvQ29vcmQ6IGZ1bmN0aW9uIHRvQ29vcmQocG9zaXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGlzVmVydGljYWwgPyAwIDogcG9zaXRpb24sXG4gICAgICAgIHk6IGlzVmVydGljYWwgPyBwb3NpdGlvbiA6IDBcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIHRoZSB0cmFjayBwb3NpdGlvbiBieSBhIHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBDYWxjdWxhdGVkIHBvc2l0aW9uLlxyXG4gICAgICovXG4gICAgdG9Qb3NpdGlvbjogZnVuY3Rpb24gdG9Qb3NpdGlvbihpbmRleCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gTGF5b3V0LnRvdGFsU2l6ZShpbmRleCkgLSBMYXlvdXQuc2xpZGVTaXplKGluZGV4KSAtIExheW91dC5nYXA7XG4gICAgICByZXR1cm4gc2lnbiAqIChwb3NpdGlvbiArIHRoaXMub2Zmc2V0KGluZGV4KSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IG9mZnNldCB2YWx1ZSwgY29uc2lkZXJpbmcgZGlyZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBPZmZzZXQgYW1vdW50LlxyXG4gICAgICovXG4gICAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoaW5kZXgpIHtcbiAgICAgIHZhciBmb2N1cyA9IFNwbGlkZS5vcHRpb25zLmZvY3VzO1xuICAgICAgdmFyIHNsaWRlU2l6ZSA9IExheW91dC5zbGlkZVNpemUoaW5kZXgpO1xuXG4gICAgICBpZiAoZm9jdXMgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHJldHVybiAtKExheW91dC5zaXplIC0gc2xpZGVTaXplKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAtKHBhcnNlSW50KGZvY3VzKSB8fCAwKSAqIChzbGlkZVNpemUgKyBMYXlvdXQuZ2FwKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9zaXRpb24uXHJcbiAgICAgKiBUaGlzIHJldHVybnMgdGhlIGNvcnJlY3QgcG9zaXRpb24gZXZlbiB3aGlsZSB0cmFuc2l0aW9uaW5nIGJ5IENTUy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ3VycmVudCBwb3NpdGlvbi5cclxuICAgICAqL1xuICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgIHZhciBwcm9wID0gaXNWZXJ0aWNhbCA/ICd0b3AnIDogaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgcmV0dXJuIGdldFJlY3QobGlzdClbcHJvcF0gLSAoZ2V0UmVjdChFbGVtZW50cy50cmFjaylbcHJvcF0gLSBMYXlvdXQucGFkZGluZ1twcm9wXSAqIHNpZ24pO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbmV2ZXIgc2xpZGVzIGFycml2ZSBhdCBhIGRlc3RpbmF0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBkZXN0SW5kZXggLSBBIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgbmV3SW5kZXggIC0gQSBuZXcgaW5kZXguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmV2SW5kZXggLSBBIHByZXZpb3VzIGluZGV4LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2lsZW50bHkgIC0gSWYgdHJ1ZSwgc3VwcHJlc3MgZW1pdHRpbmcgZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHNpbGVudGx5KSB7XG4gICAgYXBwbHlTdHlsZShsaXN0LCB7XG4gICAgICB0cmFuc2l0aW9uOiAnJ1xuICAgIH0pO1xuICAgIGlzTG9vcFBlbmRpbmcgPSBmYWxzZTtcblxuICAgIGlmICghaXNGYWRlKSB7XG4gICAgICBUcmFjay5qdW1wKG5ld0luZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoIXNpbGVudGx5KSB7XG4gICAgICBTcGxpZGUuZW1pdCgnbW92ZWQnLCBuZXdJbmRleCwgcHJldkluZGV4LCBkZXN0SW5kZXgpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBDb252ZXJ0IGluZGV4IHRvIHRoZSB0cmltbWVkIHBvc2l0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIFRyaW1tZWQgcG9zaXRpb24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRUcmltbWVkUG9zaXRpb24oaW5kZXgpIHtcbiAgICByZXR1cm4gVHJhY2sudHJpbShUcmFjay50b1Bvc2l0aW9uKGluZGV4KSk7XG4gIH1cblxuICByZXR1cm4gVHJhY2s7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2Nsb25lcy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNsb25pbmcgc29tZSBzbGlkZXMgZm9yIFwibG9vcFwiIG1vZGUgb2YgdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjbG9uaW5nIHNvbWUgc2xpZGVzIGZvciBcImxvb3BcIiBtb2RlIG9mIHRoZSB0cmFjay5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNsb25lcyA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGluZm9ybWF0aW9uIG9mIGFsbCBjbG9uZXMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG4gIHZhciBjbG9uZXMgPSBbXTtcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGN1cnJlbnQgY2xvbmUgY291bnQgb24gb25lIHNpZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuXG4gIHZhciBjbG9uZUNvdW50ID0gMDtcbiAgLyoqXHJcbiAgICogS2VlcCBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIENsb25lcyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQ2xvbmVzID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKFNwbGlkZS5pcyhMT09QKSkge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIFNwbGlkZS5vbigncmVmcmVzaDpiZWZvcmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICB9KS5vbigncmVmcmVzaCcsIGluaXQpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNsb25lQ291bnQgIT09IGdldENsb25lQ291bnQoKSkge1xuICAgICAgICAgICAgLy8gRGVzdHJveSBiZWZvcmUgcmVmcmVzaCBub3QgdG8gY29sbGVjdCBjbG9uZXMgYnkgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cbiAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgU3BsaWRlLnJlZnJlc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZG9tX3JlbW92ZShjbG9uZXMpO1xuICAgICAgY2xvbmVzID0gW107XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFsbCBjbG9uZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7RWxlbWVudFtdfSAtIENsb25lZCBlbGVtZW50cy5cclxuICAgICAqL1xuICAgIGdldCBjbG9uZXMoKSB7XG4gICAgICByZXR1cm4gY2xvbmVzO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBjbG9uZSBsZW5ndGguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgbGVuZ3RoIG9mIGNsb25lcy5cclxuICAgICAqL1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gY2xvbmVzLmxlbmd0aDtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBDbG9uZXMuZGVzdHJveSgpO1xuICAgIGNsb25lQ291bnQgPSBnZXRDbG9uZUNvdW50KCk7XG4gICAgZ2VuZXJhdGVDbG9uZXMoY2xvbmVDb3VudCk7XG4gIH1cbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgYW5kIGFwcGVuZC9wcmVwZW5kIGNsb25lcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCAtIFRoZSBoYWxmIG51bWJlciBvZiBjbG9uZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNsb25lcyhjb3VudCkge1xuICAgIHZhciBsZW5ndGggPSBFbGVtZW50cy5sZW5ndGgsXG4gICAgICAgIHJlZ2lzdGVyID0gRWxlbWVudHMucmVnaXN0ZXI7XG5cbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICB2YXIgc2xpZGVzID0gRWxlbWVudHMuc2xpZGVzO1xuXG4gICAgICB3aGlsZSAoc2xpZGVzLmxlbmd0aCA8IGNvdW50KSB7XG4gICAgICAgIHNsaWRlcyA9IHNsaWRlcy5jb25jYXQoc2xpZGVzKTtcbiAgICAgIH0gLy8gQ2xvbmVzIGFmdGVyIHRoZSBsYXN0IGVsZW1lbnQuXG5cblxuICAgICAgc2xpZGVzLnNsaWNlKDAsIGNvdW50KS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0sIGluZGV4KSB7XG4gICAgICAgIHZhciBjbG9uZSA9IGNsb25lRGVlcGx5KGVsbSk7XG4gICAgICAgIGFwcGVuZChFbGVtZW50cy5saXN0LCBjbG9uZSk7XG4gICAgICAgIGNsb25lcy5wdXNoKGNsb25lKTtcbiAgICAgICAgcmVnaXN0ZXIoY2xvbmUsIGluZGV4ICsgbGVuZ3RoLCBpbmRleCAlIGxlbmd0aCk7XG4gICAgICB9KTsgLy8gQ2xvbmVzIGJlZm9yZSB0aGUgZmlyc3QgZWxlbWVudC5cblxuICAgICAgc2xpZGVzLnNsaWNlKC1jb3VudCkuZm9yRWFjaChmdW5jdGlvbiAoZWxtLCBpbmRleCkge1xuICAgICAgICB2YXIgY2xvbmUgPSBjbG9uZURlZXBseShlbG0pO1xuICAgICAgICBiZWZvcmUoY2xvbmUsIHNsaWRlc1swXSk7XG4gICAgICAgIGNsb25lcy5wdXNoKGNsb25lKTtcbiAgICAgICAgcmVnaXN0ZXIoY2xvbmUsIGluZGV4IC0gY291bnQsIChsZW5ndGggKyBpbmRleCAtIGNvdW50ICUgbGVuZ3RoKSAlIGxlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIGhhbGYgY291bnQgb2YgY2xvbmVzIHRvIGJlIGdlbmVyYXRlZC5cclxuICAgKiBDbG9uZSBjb3VudCBpcyBkZXRlcm1pbmVkIGJ5OlxyXG4gICAqIC0gXCJjbG9uZXNcIiB2YWx1ZSBpbiB0aGUgb3B0aW9ucy5cclxuICAgKiAtIE51bWJlciBvZiBzbGlkZXMgdGhhdCBjYW4gYmUgcGxhY2VkIGluIGEgdmlldyBpbiBcImZpeGVkXCIgbW9kZS5cclxuICAgKiAtIE1heCBwYWdlcyBhIGZsaWNrIGFjdGlvbiBjYW4gbW92ZS5cclxuICAgKiAtIFdoZXRoZXIgdGhlIHNsaWRlIGxlbmd0aCBpcyBlbm91Z2ggZm9yIHBlclBhZ2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ291bnQgZm9yIGNsb25lcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldENsb25lQ291bnQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcblxuICAgIGlmIChvcHRpb25zLmNsb25lcykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuY2xvbmVzO1xuICAgIH0gLy8gVXNlIHRoZSBzbGlkZSBsZW5ndGggaW4gYXV0b1dpZHRoIG1vZGUgYmVjYXVzZSB0aGUgbnVtYmVyIGNhbm5vdCBiZSBjYWxjdWxhdGVkLlxuXG5cbiAgICB2YXIgYmFzZUNvdW50ID0gb3B0aW9ucy5hdXRvV2lkdGggfHwgb3B0aW9ucy5hdXRvSGVpZ2h0ID8gRWxlbWVudHMubGVuZ3RoIDogb3B0aW9ucy5wZXJQYWdlO1xuICAgIHZhciBkaW1lbnNpb24gPSBvcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCID8gJ0hlaWdodCcgOiAnV2lkdGgnO1xuICAgIHZhciBmaXhlZFNpemUgPSB0b1BpeGVsKFNwbGlkZS5yb290LCBvcHRpb25zW1wiZml4ZWRcIiArIGRpbWVuc2lvbl0pO1xuXG4gICAgaWYgKGZpeGVkU2l6ZSkge1xuICAgICAgLy8gUm91Z2hseSBjYWxjdWxhdGUgdGhlIGNvdW50LiBUaGlzIG5lZWRzIG5vdCB0byBiZSBzdHJpY3QuXG4gICAgICBiYXNlQ291bnQgPSBNYXRoLmNlaWwoRWxlbWVudHMudHJhY2tbXCJjbGllbnRcIiArIGRpbWVuc2lvbl0gLyBmaXhlZFNpemUpO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlQ291bnQgKiAob3B0aW9ucy5kcmFnID8gb3B0aW9ucy5mbGlja01heFBhZ2VzICsgMSA6IDEpO1xuICB9XG4gIC8qKlxyXG4gICAqIENsb25lIGRlZXBseSB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtIC0gQW4gZWxlbWVudCBiZWluZyBkdXBsaWNhdGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Tm9kZX0gLSBBIGNsb25lZCBub2RlKGVsZW1lbnQpLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY2xvbmVEZWVwbHkoZWxtKSB7XG4gICAgdmFyIGNsb25lID0gZWxtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBhZGRDbGFzcyhjbG9uZSwgU3BsaWRlLmNsYXNzZXMuY2xvbmUpOyAvLyBJRCBzaG91bGQgbm90IGJlIGR1cGxpY2F0ZWQuXG5cbiAgICByZW1vdmVBdHRyaWJ1dGUoY2xvbmUsICdpZCcpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIHJldHVybiBDbG9uZXM7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9kaXJlY3Rpb25zL2hvcml6b250YWwuanNcbi8qKlxyXG4gKiBUaGUgcmVzb2x2ZXIgY29tcG9uZW50IGZvciBob3Jpem9udGFsIGxheW91dC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSByZXNvbHZlciBjb21wb25lbnQgZm9yIGhvcml6b250YWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgcmVzb2x2ZXIgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBob3Jpem9udGFsID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgdHJhY2sgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciB0cmFjaztcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgbGF0ZXN0IG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogTWFyZ2luIHByb3BlcnR5IG5hbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xuICAgIG1hcmdpbjogJ21hcmdpbicgKyAob3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTCA/ICdMZWZ0JyA6ICdSaWdodCcpLFxuXG4gICAgLyoqXHJcbiAgICAgKiBBbHdheXMgMCBiZWNhdXNlIHRoZSBoZWlnaHQgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IGlubmVyIGNvbnRlbnRzLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBoZWlnaHQ6IDAsXG5cbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVzaXplIGdhcCBhbmQgcGFkZGluZy5cclxuICAgICAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgb24gaW5pdC5cclxuICAgICAqL1xuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgICAgIHRoaXMuZ2FwID0gdG9QaXhlbChyb290LCBvcHRpb25zLmdhcCk7XG4gICAgICB2YXIgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICAgIHZhciBsZWZ0ID0gdG9QaXhlbChyb290LCBwYWRkaW5nLmxlZnQgfHwgcGFkZGluZyk7XG4gICAgICB2YXIgcmlnaHQgPSB0b1BpeGVsKHJvb3QsIHBhZGRpbmcucmlnaHQgfHwgcGFkZGluZyk7XG4gICAgICB0aGlzLnBhZGRpbmcgPSB7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHJpZ2h0OiByaWdodFxuICAgICAgfTtcbiAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHVuaXQobGVmdCksXG4gICAgICAgIHBhZGRpbmdSaWdodDogdW5pdChyaWdodClcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0b3RhbCB3aWR0aCBmcm9tIHRoZSBsZWZ0IG9mIHRoZSBsaXN0IHRvIHRoZSByaWdodCBvZiB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBwcm92aWRlZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBPcHRpb25hbC4gQSBzbGlkZSBpbmRleC4gSWYgdW5kZWZpbmVkLCB0b3RhbCB3aWR0aCBvZiB0aGUgc2xpZGVyIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRvdGFsIHdpZHRoIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzcGVjaWZpZWQgc2xpZGUsIG9yIDAgZm9yIGFuIGludmFsaWQgaW5kZXguXHJcbiAgICAgKi9cbiAgICB0b3RhbFdpZHRoOiBmdW5jdGlvbiB0b3RhbFdpZHRoKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICBpbmRleCA9IFNwbGlkZS5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG4gICAgICB2YXIgd2lkdGggPSAwO1xuXG4gICAgICBpZiAoU2xpZGUpIHtcbiAgICAgICAgdmFyIHNsaWRlUmVjdCA9IGdldFJlY3QoU2xpZGUuc2xpZGUpO1xuICAgICAgICB2YXIgbGlzdFJlY3QgPSBnZXRSZWN0KEVsZW1lbnRzLmxpc3QpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMKSB7XG4gICAgICAgICAgd2lkdGggPSBsaXN0UmVjdC5yaWdodCAtIHNsaWRlUmVjdC5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRoID0gc2xpZGVSZWN0LnJpZ2h0IC0gbGlzdFJlY3QubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoICs9IHRoaXMuZ2FwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSB3aWR0aCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIHdpZHRoLlxyXG4gICAgICovXG4gICAgc2xpZGVXaWR0aDogZnVuY3Rpb24gc2xpZGVXaWR0aChpbmRleCkge1xuICAgICAgaWYgKG9wdGlvbnMuYXV0b1dpZHRoKSB7XG4gICAgICAgIHZhciBTbGlkZSA9IEVsZW1lbnRzLmdldFNsaWRlKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIFNsaWRlID8gU2xpZGUuc2xpZGUub2Zmc2V0V2lkdGggOiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLmZpeGVkV2lkdGggfHwgKHRoaXMud2lkdGggKyB0aGlzLmdhcCkgLyBvcHRpb25zLnBlclBhZ2UgLSB0aGlzLmdhcDtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIHdpZHRoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlIGhlaWdodCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIGhlaWdodC5cclxuICAgICAqL1xuICAgIHNsaWRlSGVpZ2h0OiBmdW5jdGlvbiBzbGlkZUhlaWdodCgpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBvcHRpb25zLmZpeGVkSGVpZ2h0IHx8IHRoaXMud2lkdGggKiBvcHRpb25zLmhlaWdodFJhdGlvO1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gc2xpZGVyIHdpZHRoIHdpdGhvdXQgcGFkZGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ3VycmVudCBzbGlkZXIgd2lkdGguXHJcbiAgICAgKi9cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICByZXR1cm4gdHJhY2suY2xpZW50V2lkdGggLSB0aGlzLnBhZGRpbmcubGVmdCAtIHRoaXMucGFkZGluZy5yaWdodDtcbiAgICB9XG5cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2RpcmVjdGlvbnMvdmVydGljYWwuanNcbi8qKlxyXG4gKiBUaGUgcmVzb2x2ZXIgY29tcG9uZW50IGZvciB2ZXJ0aWNhbCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgcmVzb2x2ZXIgY29tcG9uZW50IGZvciB2ZXJ0aWNhbCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSByZXNvbHZlciBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHZlcnRpY2FsID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgdHJhY2sgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciB0cmFjaztcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgbGF0ZXN0IG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgb3B0aW9ucztcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIE1hcmdpbiBwcm9wZXJ0eSBuYW1lLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cbiAgICBtYXJnaW46ICdtYXJnaW5Cb3R0b20nLFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlc2l6ZSBnYXAgYW5kIHBhZGRpbmcuXHJcbiAgICAgKiBUaGlzIG11c3QgYmUgY2FsbGVkIG9uIGluaXQuXHJcbiAgICAgKi9cbiAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHRyYWNrID0gRWxlbWVudHMudHJhY2s7XG4gICAgICB0aGlzLmdhcCA9IHRvUGl4ZWwocm9vdCwgb3B0aW9ucy5nYXApO1xuICAgICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgICB2YXIgdG9wID0gdG9QaXhlbChyb290LCBwYWRkaW5nLnRvcCB8fCBwYWRkaW5nKTtcbiAgICAgIHZhciBib3R0b20gPSB0b1BpeGVsKHJvb3QsIHBhZGRpbmcuYm90dG9tIHx8IHBhZGRpbmcpO1xuICAgICAgdGhpcy5wYWRkaW5nID0ge1xuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYm90dG9tOiBib3R0b21cbiAgICAgIH07XG4gICAgICBhcHBseVN0eWxlKHRyYWNrLCB7XG4gICAgICAgIHBhZGRpbmdUb3A6IHVuaXQodG9wKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogdW5pdChib3R0b20pXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdG90YWwgaGVpZ2h0IGZyb20gdGhlIHRvcCBvZiB0aGUgbGlzdCB0byB0aGUgYm90dG9tIG9mIHRoZSBzbGlkZSBzcGVjaWZpZWQgYnkgdGhlIHByb3ZpZGVkIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIE9wdGlvbmFsLiBBIHNsaWRlIGluZGV4LiBJZiB1bmRlZmluZWQsIHRvdGFsIGhlaWdodCBvZiB0aGUgc2xpZGVyIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRvdGFsIGhlaWdodCB0byB0aGUgYm90dG9tIG9mIHRoZSBzcGVjaWZpZWQgc2xpZGUsIG9yIDAgZm9yIGFuIGludmFsaWQgaW5kZXguXHJcbiAgICAgKi9cbiAgICB0b3RhbEhlaWdodDogZnVuY3Rpb24gdG90YWxIZWlnaHQoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGluZGV4ID0gU3BsaWRlLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBTbGlkZSA9IEVsZW1lbnRzLmdldFNsaWRlKGluZGV4KTtcblxuICAgICAgaWYgKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiBnZXRSZWN0KFNsaWRlLnNsaWRlKS5ib3R0b20gLSBnZXRSZWN0KEVsZW1lbnRzLmxpc3QpLnRvcCArIHRoaXMuZ2FwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlIHdpZHRoIGluIHB4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgc2xpZGUgd2lkdGguXHJcbiAgICAgKi9cbiAgICBzbGlkZVdpZHRoOiBmdW5jdGlvbiBzbGlkZVdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgb3B0aW9ucy5maXhlZFdpZHRoIHx8IHRoaXMud2lkdGgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgaGVpZ2h0IGluIHB4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgc2xpZGUgaGVpZ2h0LlxyXG4gICAgICovXG4gICAgc2xpZGVIZWlnaHQ6IGZ1bmN0aW9uIHNsaWRlSGVpZ2h0KGluZGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHZhciBTbGlkZSA9IEVsZW1lbnRzLmdldFNsaWRlKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIFNsaWRlID8gU2xpZGUuc2xpZGUub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuZml4ZWRIZWlnaHQgfHwgKHRoaXMuaGVpZ2h0ICsgdGhpcy5nYXApIC8gb3B0aW9ucy5wZXJQYWdlIC0gdGhpcy5nYXA7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCBoZWlnaHQpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBzbGlkZXIgd2lkdGggd2l0aG91dCBwYWRkaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBDdXJyZW50IHNsaWRlciB3aWR0aC5cclxuICAgICAqL1xuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgIHJldHVybiB0cmFjay5jbGllbnRXaWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gc2xpZGUgaGVpZ2h0IHdpdGhvdXQgcGFkZGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gU2xpZGVyIGhlaWdodC5cclxuICAgICAqL1xuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgdGhpcy53aWR0aCAqIG9wdGlvbnMuaGVpZ2h0UmF0aW87XG4gICAgICBleGlzdChoZWlnaHQsICdcImhlaWdodFwiIG9yIFwiaGVpZ2h0UmF0aW9cIiBpcyBtaXNzaW5nLicpO1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgaGVpZ2h0KSAtIHRoaXMucGFkZGluZy50b3AgLSB0aGlzLnBhZGRpbmcuYm90dG9tO1xuICAgIH1cblxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvdGltZS5qc1xuLyoqXHJcbiAqIEEgcGFja2FnZSBvZiB1dGlsaXR5IGZ1bmN0aW9ucyByZWxhdGVkIHdpdGggdGltZS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogU2ltcGxlIHRocm90dGxlIGZ1bmN0aW9uIHRoYXQgY29udHJvbHMgaG93IG9mdGVuIHRoZSBnaXZlbiBmdW5jdGlvbiBpcyBleGVjdXRlZC5cclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIEEgZnVuY3Rpb24gdG8gYmUgdGhyb3R0bGVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gICB3YWl0IC0gVGltZSBpbiBtaWxsaXNlY29uZCBmb3IgaW50ZXJ2YWwgb2YgZXhlY3V0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gLSBBIGRlYm91bmNlZCBmdW5jdGlvbi5cclxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0OyAvLyBEZWNsYXJlIGZ1bmN0aW9uIGJ5IHRoZSBcImZ1bmN0aW9uXCIga2V5d29yZCB0byBwcmV2ZW50IFwidGhpc1wiIGZyb20gYmVpbmcgaW5oZXJpdGVkLlxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmMoKTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICB9LCB3YWl0KTtcbiAgICB9XG4gIH07XG59XG4vKipcclxuICogQ3VzdG9tIHNldEludGVydmFsIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgcHJvZ3Jlc3MgcmF0ZSBhcyBjYWxsYmFjay5cclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIGV2ZXJ5IHRpbWUgdGhlIGludGVydmFsIHRpbWUgcGFzc2VzLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gICBpbnRlcnZhbCAtIEludGVydmFsIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvZ3Jlc3MgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW5ldmVyIHRoZSBwcm9ncmVzcyBnb2VzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcGxheSgpIGFuZCBwYXVzZSgpIGZ1bmN0aW9ucy5cclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUludGVydmFsKGNhbGxiYWNrLCBpbnRlcnZhbCwgcHJvZ3Jlc3MpIHtcbiAgdmFyIF93aW5kb3cgPSB3aW5kb3csXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBfd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgdmFyIHN0YXJ0LFxuICAgICAgZWxhcHNlLFxuICAgICAgcmF0ZSxcbiAgICAgIF9wYXVzZSA9IHRydWU7XG5cbiAgdmFyIHN0ZXAgPSBmdW5jdGlvbiBzdGVwKHRpbWVzdGFtcCkge1xuICAgIGlmICghX3BhdXNlKSB7XG4gICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgIHN0YXJ0ID0gdGltZXN0YW1wO1xuXG4gICAgICAgIGlmIChyYXRlICYmIHJhdGUgPCAxKSB7XG4gICAgICAgICAgc3RhcnQgLT0gcmF0ZSAqIGludGVydmFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVsYXBzZSA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuICAgICAgcmF0ZSA9IGVsYXBzZSAvIGludGVydmFsO1xuXG4gICAgICBpZiAoZWxhcHNlID49IGludGVydmFsKSB7XG4gICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgcmF0ZSA9IDE7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9ncmVzcykge1xuICAgICAgICBwcm9ncmVzcyhyYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIF9wYXVzZSA9IHRydWU7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfSxcbiAgICBwbGF5OiBmdW5jdGlvbiBwbGF5KHJlc2V0KSB7XG4gICAgICBzdGFydCA9IDA7XG5cbiAgICAgIGlmIChyZXNldCkge1xuICAgICAgICByYXRlID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKF9wYXVzZSkge1xuICAgICAgICBfcGF1c2UgPSBmYWxzZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRpbmcgc2xpZGUgbGF5b3V0cyBhbmQgdGhlaXIgc2l6ZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRpbmcgc2xpZGUgbGF5b3V0cyBhbmQgdGhlaXIgc2l6ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBsYXlvdXQgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzbGlkZXIgaXMgdmVydGljYWwgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzVmVydGljYWwgPSBTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgLyoqXHJcbiAgICogTGF5b3V0IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBMYXlvdXQgPSBvYmplY3RfYXNzaWduKHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIGJpbmQoKTtcbiAgICAgIGluaXQoKTsgLy8gVGhlIHdvcmQgXCJzaXplXCIgbWVhbnMgd2lkdGggZm9yIGEgaG9yaXpvbnRhbCBzbGlkZXIgYW5kIGhlaWdodCBmb3IgYSB2ZXJ0aWNhbCBzbGlkZXIuXG5cbiAgICAgIHRoaXMudG90YWxTaXplID0gaXNWZXJ0aWNhbCA/IHRoaXMudG90YWxIZWlnaHQgOiB0aGlzLnRvdGFsV2lkdGg7XG4gICAgICB0aGlzLnNsaWRlU2l6ZSA9IGlzVmVydGljYWwgPyB0aGlzLnNsaWRlSGVpZ2h0IDogdGhpcy5zbGlkZVdpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudC5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoW0VsZW1lbnRzLmxpc3QsIEVsZW1lbnRzLnRyYWNrXSwgJ3N0eWxlJyk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZXIgaGVpZ2h0IG9uIHRoZSB2ZXJ0aWNhbCBtb2RlIG9yIHdpZHRoIG9uIHRoZSBob3Jpem9udGFsIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gaXNWZXJ0aWNhbCA/IHRoaXMuaGVpZ2h0IDogdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgfSwgaXNWZXJ0aWNhbCA/IHZlcnRpY2FsKFNwbGlkZSwgQ29tcG9uZW50cykgOiBob3Jpem9udGFsKFNwbGlkZSwgQ29tcG9uZW50cykpO1xuICAvKipcclxuICAgKiBJbml0IHNsaWRlciBzdHlsZXMgYWNjb3JkaW5nIHRvIG9wdGlvbnMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBMYXlvdXQuaW5pdCgpO1xuICAgIGFwcGx5U3R5bGUoU3BsaWRlLnJvb3QsIHtcbiAgICAgIG1heFdpZHRoOiB1bml0KFNwbGlkZS5vcHRpb25zLndpZHRoKVxuICAgIH0pO1xuICAgIEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICBTbGlkZS5zbGlkZS5zdHlsZVtMYXlvdXQubWFyZ2luXSA9IHVuaXQoTGF5b3V0LmdhcCk7XG4gICAgfSk7XG4gICAgcmVzaXplKCk7XG4gIH1cbiAgLyoqXHJcbiAgICogTGlzdGVuIHRoZSByZXNpemUgbmF0aXZlIGV2ZW50IHdpdGggdGhyb3R0bGUuXHJcbiAgICogSW5pdGlhbGl6ZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCBvciBvcHRpb25zIGFyZSB1cGRhdGVkLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBTcGxpZGUub24oJ3Jlc2l6ZSBsb2FkJywgdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgU3BsaWRlLmVtaXQoJ3Jlc2l6ZScpO1xuICAgIH0sIFNwbGlkZS5vcHRpb25zLnRocm90dGxlKSwgd2luZG93KS5vbigncmVzaXplJywgcmVzaXplKS5vbigndXBkYXRlZCByZWZyZXNoJywgaW5pdCk7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVzaXplIHRoZSB0cmFjayBhbmQgc2xpZGUgZWxlbWVudHMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICBMYXlvdXQucmVzaXplKCk7XG4gICAgYXBwbHlTdHlsZShFbGVtZW50cy50cmFjaywge1xuICAgICAgaGVpZ2h0OiB1bml0KExheW91dC5oZWlnaHQpXG4gICAgfSk7XG4gICAgdmFyIHNsaWRlSGVpZ2h0ID0gb3B0aW9ucy5hdXRvSGVpZ2h0ID8gbnVsbCA6IHVuaXQoTGF5b3V0LnNsaWRlSGVpZ2h0KCkpO1xuICAgIEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICBhcHBseVN0eWxlKFNsaWRlLmNvbnRhaW5lciwge1xuICAgICAgICBoZWlnaHQ6IHNsaWRlSGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIGFwcGx5U3R5bGUoU2xpZGUuc2xpZGUsIHtcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMuYXV0b1dpZHRoID8gbnVsbCA6IHVuaXQoTGF5b3V0LnNsaWRlV2lkdGgoU2xpZGUuaW5kZXgpKSxcbiAgICAgICAgaGVpZ2h0OiBTbGlkZS5jb250YWluZXIgPyBudWxsIDogc2xpZGVIZWlnaHRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFNwbGlkZS5lbWl0KCdyZXNpemVkJyk7XG4gIH1cblxuICByZXR1cm4gTGF5b3V0O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9kcmFnL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3Igc3VwcG9ydGluZyBtb3VzZSBkcmFnIGFuZCBzd2lwZS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cbnZhciBkcmFnX2FicyA9IE1hdGguYWJzO1xuLyoqXHJcbiAqIElmIHRoZSBhYnNvbHV0ZSB2ZWxvY2l0eSBpcyBncmVhdGVyIHRoYW50IHRoaXMgdmFsdWUsXHJcbiAqIGEgc2xpZGVyIGFsd2F5cyBnb2VzIHRvIGEgZGlmZmVyZW50IHNsaWRlIGFmdGVyIGRyYWcsIG5vdCBhbGxvd2VkIHRvIHN0YXkgb24gYSBjdXJyZW50IHNsaWRlLlxyXG4gKi9cblxudmFyIE1JTl9WRUxPQ0lUWSA9IDAuMTtcbi8qKlxyXG4gKiBBZGp1c3QgaG93IG11Y2ggdGhlIHRyYWNrIGNhbiBiZSBwdWxsZWQgb24gdGhlIGZpcnN0IG9yIGxhc3QgcGFnZS5cclxuICogVGhlIGxhcmdlciBudW1iZXIgdGhpcyBpcywgdGhlIGZhcnRoZXIgdGhlIHRyYWNrIG1vdmVzLlxyXG4gKiBUaGlzIHNob3VsZCBiZSBhcm91bmQgNSAtIDkuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgRlJJQ1RJT05fUkVEVUNFUiA9IDc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBzdXBwb3J0aW5nIG1vdXNlIGRyYWcgYW5kIHN3aXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgZHJhZyA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBNb3ZlIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBUcmFjayA9IENvbXBvbmVudHMuVHJhY2s7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBDb250cm9sbGVyIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENvbnRyb2xsZXIgPSBDb21wb25lbnRzLkNvbnRyb2xsZXI7XG4gIC8qKlxyXG4gICAqIENvb3JkaW5hdGUgb2YgdGhlIHRyYWNrIG9uIHN0YXJ0aW5nIGRyYWcuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBzdGFydENvb3JkO1xuICAvKipcclxuICAgKiBBbmFseXplZCBpbmZvIG9uIHN0YXJ0aW5nIGRyYWcuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XHJcbiAgICovXG5cbiAgdmFyIHN0YXJ0SW5mbztcbiAgLyoqXHJcbiAgICogQW5hbHl6ZWQgaW5mbyBiZWluZyB1cGRhdGVkIHdoaWxlIGRyYWdnaW5nL3N3aXBpbmcuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBjdXJyZW50SW5mbztcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgc2xpZGVzIGFyZSBiZWluZyBkcmFnZ2VkIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0RyYWdnaW5nO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzbGlkZXIgZGlyZWN0aW9uIGlzIHZlcnRpY2FsIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gIC8qKlxyXG4gICAqIEF4aXMgZm9yIHRoZSBkaXJlY3Rpb24uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuXG4gIHZhciBheGlzID0gaXNWZXJ0aWNhbCA/ICd5JyA6ICd4JztcbiAgLyoqXHJcbiAgICogRHJhZyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRHJhZyA9IHtcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgZHJhZ2dpbmcgaXMgZGlzYWJsZWQgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAgICAgdmFyIHRyYWNrID0gRWxlbWVudHMudHJhY2s7XG4gICAgICBTcGxpZGUub24oJ3RvdWNoc3RhcnQgbW91c2Vkb3duJywgc3RhcnQsIHRyYWNrKS5vbigndG91Y2htb3ZlIG1vdXNlbW92ZScsIG1vdmUsIHRyYWNrLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KS5vbigndG91Y2hlbmQgdG91Y2hjYW5jZWwgbW91c2VsZWF2ZSBtb3VzZXVwIGRyYWdlbmQnLCBlbmQsIHRyYWNrKS5vbignbW91bnRlZCByZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQcmV2ZW50IGRyYWdnaW5nIGFuIGltYWdlIG9yIGFuY2hvciBpdHNlbGYuXG4gICAgICAgIGVhY2goRWxlbWVudHMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcsIGEnKSwgZnVuY3Rpb24gKGVsbSkge1xuICAgICAgICAgIFNwbGlkZS5vZmYoJ2RyYWdzdGFydCcsIGVsbSkub24oJ2RyYWdzdGFydCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSwgZWxtLCB7XG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pLm9uKCdtb3VudGVkIHVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gIVNwbGlkZS5vcHRpb25zLmRyYWc7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIHRoZSB0cmFjayBzdGFydHMgdG8gYmUgZHJhZ2dlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VG91Y2hFdmVudHxNb3VzZUV2ZW50fSBlIC0gVG91Y2hFdmVudCBvciBNb3VzZUV2ZW50IG9iamVjdC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBzdGFydChlKSB7XG4gICAgaWYgKCFEcmFnLmRpc2FibGVkICYmICFpc0RyYWdnaW5nKSB7XG4gICAgICAvLyBUaGVzZSBwcmFtcyBhcmUgdXNlZCB0byBldmFsdWF0ZSB3aGV0aGVyIHRoZSBzbGlkZXIgc2hvdWxkIHN0YXJ0IG1vdmluZy5cbiAgICAgIGluaXQoZSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgcGFyYW1ldGVycy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VG91Y2hFdmVudHxNb3VzZUV2ZW50fSBlIC0gVG91Y2hFdmVudCBvciBNb3VzZUV2ZW50IG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGluaXQoZSkge1xuICAgIHN0YXJ0Q29vcmQgPSBUcmFjay50b0Nvb3JkKFRyYWNrLnBvc2l0aW9uKTtcbiAgICBzdGFydEluZm8gPSBhbmFseXplKGUsIHt9KTtcbiAgICBjdXJyZW50SW5mbyA9IHN0YXJ0SW5mbztcbiAgfVxuICAvKipcclxuICAgKiBDYWxsZWQgd2hpbGUgdGhlIHRyYWNrIGJlaW5nIGRyYWdnZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8TW91c2VFdmVudH0gZSAtIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBtb3ZlKGUpIHtcbiAgICBpZiAoc3RhcnRJbmZvKSB7XG4gICAgICBjdXJyZW50SW5mbyA9IGFuYWx5emUoZSwgc3RhcnRJbmZvKTtcblxuICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghU3BsaWRlLmlzKEZBREUpKSB7XG4gICAgICAgICAgdmFyIHBvc2l0aW9uID0gc3RhcnRDb29yZFtheGlzXSArIGN1cnJlbnRJbmZvLm9mZnNldFtheGlzXTtcbiAgICAgICAgICBUcmFjay50cmFuc2xhdGUocmVzaXN0KHBvc2l0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaG91bGRNb3ZlKGN1cnJlbnRJbmZvKSkge1xuICAgICAgICAgIFNwbGlkZS5lbWl0KCdkcmFnJywgc3RhcnRJbmZvKTtcbiAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICBUcmFjay5jYW5jZWwoKTsgLy8gVGhlc2UgcGFyYW1zIGFyZSBhY3R1YWwgZHJhZyBkYXRhLlxuXG4gICAgICAgICAgaW5pdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0byBzdGFydCBtb3ZpbmcgdGhlIHRyYWNrIG9yIG5vdCBieSBkcmFnIGFuZ2xlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBBbiBpbmZvcm1hdGlvbiBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHRyYWNrIHNob3VsZCBiZSBtb3ZlZCBvciBmYWxzZSBpZiBub3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBzaG91bGRNb3ZlKF9yZWYpIHtcbiAgICB2YXIgb2Zmc2V0ID0gX3JlZi5vZmZzZXQ7XG5cbiAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKE1PVklORykgJiYgU3BsaWRlLm9wdGlvbnMud2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4oZHJhZ19hYnMob2Zmc2V0LnkpIC8gZHJhZ19hYnMob2Zmc2V0LngpKSAqIDE4MCAvIE1hdGguUEk7XG5cbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgYW5nbGUgPSA5MCAtIGFuZ2xlO1xuICAgIH1cblxuICAgIHJldHVybiBhbmdsZSA8IFNwbGlkZS5vcHRpb25zLmRyYWdBbmdsZVRocmVzaG9sZDtcbiAgfVxuICAvKipcclxuICAgKiBSZXNpc3QgZHJhZ2dpbmcgdGhlIHRyYWNrIG9uIHRoZSBmaXJzdC9sYXN0IHBhZ2UgYmVjYXVzZSB0aGVyZSBpcyBubyBtb3JlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBwb3NpdGlvbiBiZWluZyBhcHBsaWVkIHRvIHRoZSB0cmFjay5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBBZGp1c3RlZCBwb3NpdGlvbi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlc2lzdChwb3NpdGlvbikge1xuICAgIGlmIChTcGxpZGUuaXMoU0xJREUpKSB7XG4gICAgICB2YXIgc2lnbiA9IFRyYWNrLnNpZ247XG5cbiAgICAgIHZhciBfc3RhcnQgPSBzaWduICogVHJhY2sudHJpbShUcmFjay50b1Bvc2l0aW9uKDApKTtcblxuICAgICAgdmFyIF9lbmQgPSBzaWduICogVHJhY2sudHJpbShUcmFjay50b1Bvc2l0aW9uKENvbnRyb2xsZXIuZWRnZUluZGV4KSk7XG5cbiAgICAgIHBvc2l0aW9uICo9IHNpZ247XG5cbiAgICAgIGlmIChwb3NpdGlvbiA8IF9zdGFydCkge1xuICAgICAgICBwb3NpdGlvbiA9IF9zdGFydCAtIEZSSUNUSU9OX1JFRFVDRVIgKiBNYXRoLmxvZyhfc3RhcnQgLSBwb3NpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID4gX2VuZCkge1xuICAgICAgICBwb3NpdGlvbiA9IF9lbmQgKyBGUklDVElPTl9SRURVQ0VSICogTWF0aC5sb2cocG9zaXRpb24gLSBfZW5kKTtcbiAgICAgIH1cblxuICAgICAgcG9zaXRpb24gKj0gc2lnbjtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgZW5kcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICBzdGFydEluZm8gPSBudWxsO1xuXG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIFNwbGlkZS5lbWl0KCdkcmFnZ2VkJywgY3VycmVudEluZm8pO1xuICAgICAgZ28oY3VycmVudEluZm8pO1xuICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBHbyB0byB0aGUgc2xpZGUgZGV0ZXJtaW5lZCBieSB0aGUgYW5hbHl6ZWQgZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbmZvIC0gQW4gaW5mbyBvYmplY3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnbyhpbmZvKSB7XG4gICAgdmFyIHZlbG9jaXR5ID0gaW5mby52ZWxvY2l0eVtheGlzXTtcbiAgICB2YXIgYWJzViA9IGRyYWdfYWJzKHZlbG9jaXR5KTtcblxuICAgIGlmIChhYnNWID4gMCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciBpbmRleCA9IFNwbGlkZS5pbmRleDtcbiAgICAgIHZhciBzaWduID0gdmVsb2NpdHkgPCAwID8gLTEgOiAxO1xuICAgICAgdmFyIGRlc3RJbmRleCA9IGluZGV4O1xuXG4gICAgICBpZiAoIVNwbGlkZS5pcyhGQURFKSkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSBUcmFjay5wb3NpdGlvbjtcblxuICAgICAgICBpZiAoYWJzViA+IG9wdGlvbnMuZmxpY2tWZWxvY2l0eVRocmVzaG9sZCAmJiBkcmFnX2FicyhpbmZvLm9mZnNldFtheGlzXSkgPCBvcHRpb25zLnN3aXBlRGlzdGFuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbiArPSBzaWduICogTWF0aC5taW4oYWJzViAqIG9wdGlvbnMuZmxpY2tQb3dlciwgQ29tcG9uZW50cy5MYXlvdXQuc2l6ZSAqIChvcHRpb25zLmZsaWNrTWF4UGFnZXMgfHwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzdEluZGV4ID0gVHJhY2sudG9JbmRleChkZXN0aW5hdGlvbik7XG4gICAgICB9XG4gICAgICAvKlxyXG4gICAgICAgKiBEbyBub3QgYWxsb3cgdGhlIHRyYWNrIHRvIGdvIHRvIGEgcHJldmlvdXMgcG9zaXRpb24gaWYgdGhlcmUgaXMgZW5vdWdoIHZlbG9jaXR5LlxyXG4gICAgICAgKiBBbHdheXMgdXNlIHRoZSBhZGphY2VudCBpbmRleCBmb3IgdGhlIGZhZGUgbW9kZS5cclxuICAgICAgICovXG5cblxuICAgICAgaWYgKGRlc3RJbmRleCA9PT0gaW5kZXggJiYgYWJzViA+IE1JTl9WRUxPQ0lUWSkge1xuICAgICAgICBkZXN0SW5kZXggPSBpbmRleCArIHNpZ24gKiBUcmFjay5zaWduO1xuICAgICAgfVxuXG4gICAgICBpZiAoU3BsaWRlLmlzKFNMSURFKSkge1xuICAgICAgICBkZXN0SW5kZXggPSBiZXR3ZWVuKGRlc3RJbmRleCwgMCwgQ29udHJvbGxlci5lZGdlSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBDb250cm9sbGVyLmdvKGRlc3RJbmRleCwgb3B0aW9ucy5pc05hdmlnYXRpb24pO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBBbmFseXplIHRoZSBnaXZlbiBldmVudCBvYmplY3QgYW5kIHJldHVybiBpbXBvcnRhbnQgaW5mb3JtYXRpb24gZm9yIGhhbmRsaW5nIHN3aXBlIGJlaGF2aW9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gICBlICAgICAgICAgIC0gVG91Y2ggb3IgTW91c2UgZXZlbnQgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgc3RhcnRJbmZvICAtIEluZm9ybWF0aW9uIGFuYWx5emVkIG9uIHN0YXJ0IGZvciBjYWxjdWxhdGluZyBkaWZmZXJlbmNlIGZyb20gdGhlIGN1cnJlbnQgb25lLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFuYWx5emVkIGluZm9ybWF0aW9uLCBzdWNoIGFzIG9mZnNldCwgdmVsb2NpdHksIGV0Yy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGFuYWx5emUoZSwgc3RhcnRJbmZvKSB7XG4gICAgdmFyIHRpbWVTdGFtcCA9IGUudGltZVN0YW1wLFxuICAgICAgICB0b3VjaGVzID0gZS50b3VjaGVzO1xuXG4gICAgdmFyIF9yZWYyID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0gOiBlLFxuICAgICAgICBjbGllbnRYID0gX3JlZjIuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IF9yZWYyLmNsaWVudFk7XG5cbiAgICB2YXIgX3JlZjMgPSBzdGFydEluZm8udG8gfHwge30sXG4gICAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgICBmcm9tWCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IGNsaWVudFggOiBfcmVmMyR4LFxuICAgICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgICAgZnJvbVkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyBjbGllbnRZIDogX3JlZjMkeTtcblxuICAgIHZhciBzdGFydFRpbWUgPSBzdGFydEluZm8udGltZSB8fCAwO1xuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB4OiBjbGllbnRYIC0gZnJvbVgsXG4gICAgICB5OiBjbGllbnRZIC0gZnJvbVlcbiAgICB9O1xuICAgIHZhciBkdXJhdGlvbiA9IHRpbWVTdGFtcCAtIHN0YXJ0VGltZTtcbiAgICB2YXIgdmVsb2NpdHkgPSB7XG4gICAgICB4OiBvZmZzZXQueCAvIGR1cmF0aW9uLFxuICAgICAgeTogb2Zmc2V0LnkgLyBkdXJhdGlvblxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvOiB7XG4gICAgICAgIHg6IGNsaWVudFgsXG4gICAgICAgIHk6IGNsaWVudFlcbiAgICAgIH0sXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIHRpbWU6IHRpbWVTdGFtcCxcbiAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gRHJhZztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY2xpY2svaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kbGluZyBhIGNsaWNrIGV2ZW50LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kbGluZyBhIGNsaWNrIGV2ZW50LlxyXG4gKiBDbGljayBzaG91bGQgYmUgZGlzYWJsZWQgZHVyaW5nIGRyYWcvc3dpcGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY2xpY2sgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBXaGV0aGVyIGNsaWNrIGlzIGRpc2FibGVkIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgLyoqXHJcbiAgICogQ2xpY2sgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENsaWNrID0ge1xuICAgIC8qKlxyXG4gICAgICogTW91bnQgb25seSB3aGVuIHRoZSBkcmFnIGlzIGFjdGl2YXRlZCBhbmQgdGhlIHNsaWRlIHR5cGUgaXMgbm90IFwiZmFkZVwiLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmRyYWcsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbignY2xpY2snLCBvbkNsaWNrLCBDb21wb25lbnRzLkVsZW1lbnRzLnRyYWNrLCB7XG4gICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgIH0pLm9uKCdkcmFnJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KS5vbignZHJhZ2dlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBmbGFnIGlzIHJlbGVhc2VkIGFmdGVyIHRoZSBjbGljayBldmVudCBpcyBmaXJlZC5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGEgdHJhY2sgZWxlbWVudCBpcyBjbGlja2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIEEgY2xpY2sgZXZlbnQuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ2xpY2s7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2F1dG9wbGF5L2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgcGxheWluZyBzbGlkZXMgYXV0b21hdGljYWxseS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBTZXQgb2YgcGF1c2UgZmxhZ3MuXHJcbiAqL1xuXG52YXIgUEFVU0VfRkxBR1MgPSB7XG4gIEhPVkVSOiAxLFxuICBGT0NVUzogMixcbiAgTUFOVUFMOiAzXG59O1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHBsYXlpbmcgc2xpZGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICAgICAgLSBBIGNvbXBvbmVudCBuYW1lIGFzIGEgbG93ZXJjYXNlIHN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBhdXRvcGxheSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHBhdXNlIGZsYWdzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xuICB2YXIgZmxhZ3MgPSBbXTtcbiAgLyoqXHJcbiAgICogU3RvcmUgYW4gaW50ZXJ2YWwgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH07XHJcbiAgICovXG5cbiAgdmFyIGludGVydmFsO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEF1dG9wbGF5IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBBdXRvcGxheSA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgYXV0b3BsYXkgb3B0aW9uIGlzIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogU3BsaWRlLm9wdGlvbnMuYXV0b3BsYXksXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqIE5vdGUgdGhhdCBhdXRvcGxheSBzdGFydHMgb25seSBpZiB0aGVyZSBhcmUgc2xpZGVzIG92ZXIgcGVyUGFnZSBudW1iZXIuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuXG4gICAgICBpZiAoRWxlbWVudHMuc2xpZGVzLmxlbmd0aCA+IG9wdGlvbnMucGVyUGFnZSkge1xuICAgICAgICBpbnRlcnZhbCA9IGNyZWF0ZUludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBTcGxpZGUuZ28oJz4nKTtcbiAgICAgICAgfSwgb3B0aW9ucy5pbnRlcnZhbCwgZnVuY3Rpb24gKHJhdGUpIHtcbiAgICAgICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6cGxheWluZ1wiLCByYXRlKTtcblxuICAgICAgICAgIGlmIChFbGVtZW50cy5iYXIpIHtcbiAgICAgICAgICAgIGFwcGx5U3R5bGUoRWxlbWVudHMuYmFyLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiByYXRlICogMTAwICsgXCIlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJpbmQoKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgYXV0b3BsYXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWcgLSBBIHBhdXNlIGZsYWcgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqL1xuICAgIHBsYXk6IGZ1bmN0aW9uIHBsYXkoZmxhZykge1xuICAgICAgaWYgKGZsYWcgPT09IHZvaWQgMCkge1xuICAgICAgICBmbGFnID0gMDtcbiAgICAgIH1cblxuICAgICAgZmxhZ3MgPSBmbGFncy5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYgIT09IGZsYWc7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFmbGFncy5sZW5ndGgpIHtcbiAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnBsYXlcIik7XG4gICAgICAgIGludGVydmFsLnBsYXkoU3BsaWRlLm9wdGlvbnMucmVzZXRQcm9ncmVzcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUGF1c2UgYXV0b3BsYXkuXHJcbiAgICAgKiBOb3RlIHRoYXQgQXJyYXkuaW5jbHVkZXMgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZyAtIEEgcGF1c2UgZmxhZyB0byBiZSBhZGRlZC5cclxuICAgICAqL1xuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZShmbGFnKSB7XG4gICAgICBpZiAoZmxhZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZsYWcgPSAwO1xuICAgICAgfVxuXG4gICAgICBpbnRlcnZhbC5wYXVzZSgpO1xuXG4gICAgICBpZiAoZmxhZ3MuaW5kZXhPZihmbGFnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MucHVzaChmbGFnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsYWdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6cGF1c2VcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBMaXN0ZW4gc29tZSBldmVudHMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIHZhciBzaWJsaW5nID0gU3BsaWRlLnNpYmxpbmc7XG4gICAgdmFyIGVsbXMgPSBbU3BsaWRlLnJvb3QsIHNpYmxpbmcgPyBzaWJsaW5nLnJvb3QgOiBudWxsXTtcblxuICAgIGlmIChvcHRpb25zLnBhdXNlT25Ib3Zlcikge1xuICAgICAgc3dpdGNoT24oZWxtcywgJ21vdXNlbGVhdmUnLCBQQVVTRV9GTEFHUy5IT1ZFUiwgdHJ1ZSk7XG4gICAgICBzd2l0Y2hPbihlbG1zLCAnbW91c2VlbnRlcicsIFBBVVNFX0ZMQUdTLkhPVkVSLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkZvY3VzKSB7XG4gICAgICBzd2l0Y2hPbihlbG1zLCAnZm9jdXNvdXQnLCBQQVVTRV9GTEFHUy5GT0NVUywgdHJ1ZSk7XG4gICAgICBzd2l0Y2hPbihlbG1zLCAnZm9jdXNpbicsIFBBVVNFX0ZMQUdTLkZPQ1VTLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKEVsZW1lbnRzLnBsYXkpIHtcbiAgICAgIFNwbGlkZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gYmUgcmVtb3ZlZCBhIGZvY3VzIGZsYWcgYXQgZmlyc3QuXG4gICAgICAgIEF1dG9wbGF5LnBsYXkoUEFVU0VfRkxBR1MuRk9DVVMpO1xuICAgICAgICBBdXRvcGxheS5wbGF5KFBBVVNFX0ZMQUdTLk1BTlVBTCk7XG4gICAgICB9LCBFbGVtZW50cy5wbGF5KTtcbiAgICB9XG5cbiAgICBpZiAoRWxlbWVudHMucGF1c2UpIHtcbiAgICAgIHN3aXRjaE9uKFtFbGVtZW50cy5wYXVzZV0sICdjbGljaycsIFBBVVNFX0ZMQUdTLk1BTlVBTCwgZmFsc2UpO1xuICAgIH1cblxuICAgIFNwbGlkZS5vbignbW92ZSByZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgQXV0b3BsYXkucGxheSgpO1xuICAgIH0pIC8vIFJld2luZCB0aGUgdGltZXIuXG4gICAgLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgQXV0b3BsYXkucGF1c2UoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBQbGF5IG9yIHBhdXNlIG9uIHRoZSBnaXZlbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBlbG1zICAtIEVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBldmVudCAtIEFuIGV2ZW50IG5hbWUgb3IgbmFtZXMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICAgIGZsYWcgIC0gQSBwYXVzZSBmbGFnIGRlZmluZWQgb24gdGhlIHRvcC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICAgcGxheSAgLSBEZXRlcm1pbmUgd2hldGhlciB0byBwbGF5IG9yIHBhdXNlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3dpdGNoT24oZWxtcywgZXZlbnQsIGZsYWcsIHBsYXkpIHtcbiAgICBlbG1zLmZvckVhY2goZnVuY3Rpb24gKGVsbSkge1xuICAgICAgU3BsaWRlLm9uKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEF1dG9wbGF5W3BsYXkgPyAncGxheScgOiAncGF1c2UnXShmbGFnKTtcbiAgICAgIH0sIGVsbSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gQXV0b3BsYXk7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2NvdmVyL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2hhbmdlIGFuIGltZyBlbGVtZW50IHRvIGJhY2tncm91bmQgaW1hZ2Ugb2YgaXRzIHdyYXBwZXIuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNoYW5nZSBhbiBpbWcgZWxlbWVudCB0byBiYWNrZ3JvdW5kIGltYWdlIG9mIGl0cyB3cmFwcGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY292ZXIgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBIb2xkIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAvKipcclxuICAgKiBDb3ZlciBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQ292ZXIgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gXCJjb3ZlclwiIG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IG9wdGlvbnMuY292ZXIsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbignbGF6eWxvYWQ6bG9hZGVkJywgZnVuY3Rpb24gKGltZykge1xuICAgICAgICBjb3ZlcihpbWcsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHVwZGF0ZWQgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFwcGx5KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgYXBwbHkodHJ1ZSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBBcHBseSBcImNvdmVyXCIgdG8gYWxsIHNsaWRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdW5jb3ZlciAtIElmIHRydWUsIFwiY292ZXJcIiB3aWxsIGJlIGNsZWFyLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFwcGx5KHVuY292ZXIpIHtcbiAgICBDb21wb25lbnRzLkVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICB2YXIgaW1nID0gY2hpbGQoU2xpZGUuc2xpZGUsICdJTUcnKSB8fCBjaGlsZChTbGlkZS5jb250YWluZXIsICdJTUcnKTtcblxuICAgICAgaWYgKGltZyAmJiBpbWcuc3JjKSB7XG4gICAgICAgIGNvdmVyKGltZywgdW5jb3Zlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogU2V0IGJhY2tncm91bmQgaW1hZ2Ugb2YgdGhlIHBhcmVudCBlbGVtZW50LCB1c2luZyBzb3VyY2Ugb2YgdGhlIGdpdmVuIGltYWdlIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGltZyAgICAgLSBBbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdW5jb3ZlciAtIFJlc2V0IFwiY292ZXJcIi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNvdmVyKGltZywgdW5jb3Zlcikge1xuICAgIGFwcGx5U3R5bGUoaW1nLnBhcmVudEVsZW1lbnQsIHtcbiAgICAgIGJhY2tncm91bmQ6IHVuY292ZXIgPyAnJyA6IFwiY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoXFxcIlwiICsgaW1nLnNyYyArIFwiXFxcIilcIlxuICAgIH0pO1xuICAgIGFwcGx5U3R5bGUoaW1nLCB7XG4gICAgICBkaXNwbGF5OiB1bmNvdmVyID8gJycgOiAnbm9uZSdcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBDb3Zlcjtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYXJyb3dzL3BhdGguanNcbi8qKlxyXG4gKiBFeHBvcnQgdmVjdG9yIHBhdGggZm9yIGFuIGFycm93LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBOYW1lc3BhY2UgZGVmaW5pdGlvbiBmb3IgU1ZHIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIFhNTF9OQU1FX1NQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbi8qKlxyXG4gKiBUaGUgYXJyb3cgdmVjdG9yIHBhdGguXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgUEFUSCA9ICdtMTUuNSAwLjkzMi00LjMgNC4zOCAxNC41IDE0LjYtMTQuNSAxNC41IDQuMyA0LjQgMTQuNi0xNC42IDQuNC00LjMtNC40LTQuNC0xNC42LTE0LjZ6Jztcbi8qKlxyXG4gKiBTVkcgd2lkdGggYW5kIGhlaWdodC5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBTSVpFID0gNDA7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9hcnJvd3MvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBhcHBlbmRpbmcgcHJldi9uZXh0IGFycm93cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGFwcGVuZGluZyBwcmV2L25leHQgYXJyb3dzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYXJyb3dzID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMsIG5hbWUpIHtcbiAgLyoqXHJcbiAgICogUHJldmlvdXMgYXJyb3cgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fHVuZGVmaW5lZH1cclxuICAgKi9cbiAgdmFyIHByZXY7XG4gIC8qKlxyXG4gICAqIE5leHQgYXJyb3cgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fHVuZGVmaW5lZH1cclxuICAgKi9cblxuICB2YXIgbmV4dDtcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGNsYXNzIGxpc3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBjbGFzc2VzID0gU3BsaWRlLmNsYXNzZXM7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgYXJyb3dzIGFyZSBjcmVhdGVkIHByb2dyYW1tYXRpY2FsbHkgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGNyZWF0ZWQ7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogQXJyb3dzIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBBcnJvd3MgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCB3aGVuIHRoZSBhcnJvd3Mgb3B0aW9uIGlzIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogU3BsaWRlLm9wdGlvbnMuYXJyb3dzLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICAvLyBBdHRlbXB0IHRvIGdldCBhcnJvd3MgZnJvbSBIVE1MIHNvdXJjZS5cbiAgICAgIHByZXYgPSBFbGVtZW50cy5hcnJvd3MucHJldjtcbiAgICAgIG5leHQgPSBFbGVtZW50cy5hcnJvd3MubmV4dDsgLy8gSWYgYXJyb3dzIHdlcmUgbm90IGZvdW5kIGluIEhUTUwsIGxldCdzIGdlbmVyYXRlIHRoZW0uXG5cbiAgICAgIGlmICgoIXByZXYgfHwgIW5leHQpICYmIFNwbGlkZS5vcHRpb25zLmFycm93cykge1xuICAgICAgICBwcmV2ID0gY3JlYXRlQXJyb3codHJ1ZSk7XG4gICAgICAgIG5leHQgPSBjcmVhdGVBcnJvdyhmYWxzZSk7XG4gICAgICAgIGNyZWF0ZWQgPSB0cnVlO1xuICAgICAgICBhcHBlbmRBcnJvd3MoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXYgJiYgbmV4dCkge1xuICAgICAgICBiaW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyb3dzID0ge1xuICAgICAgICBwcmV2OiBwcmV2LFxuICAgICAgICBuZXh0OiBuZXh0XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciBhbGwgY29tcG9uZW50cyBhcmUgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6bW91bnRlZFwiLCBwcmV2LCBuZXh0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShbcHJldiwgbmV4dF0sICdkaXNhYmxlZCcpO1xuXG4gICAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgICBkb21fcmVtb3ZlKHByZXYucGFyZW50RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBMaXN0ZW4gdG8gbmF0aXZlIGFuZCBjdXN0b20gZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgU3BsaWRlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIFNwbGlkZS5nbygnPCcpO1xuICAgIH0sIHByZXYpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIFNwbGlkZS5nbygnPicpO1xuICAgIH0sIG5leHQpLm9uKCdtb3VudGVkIG1vdmUgdXBkYXRlZCByZWZyZXNoJywgdXBkYXRlRGlzYWJsZWQpO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhIGRpc2FibGVkIGF0dHJpYnV0ZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURpc2FibGVkKCkge1xuICAgIHZhciBfQ29tcG9uZW50cyRDb250cm9sbGUgPSBDb21wb25lbnRzLkNvbnRyb2xsZXIsXG4gICAgICAgIHByZXZJbmRleCA9IF9Db21wb25lbnRzJENvbnRyb2xsZS5wcmV2SW5kZXgsXG4gICAgICAgIG5leHRJbmRleCA9IF9Db21wb25lbnRzJENvbnRyb2xsZS5uZXh0SW5kZXg7XG4gICAgdmFyIGlzRW5vdWdoID0gU3BsaWRlLmxlbmd0aCA+IFNwbGlkZS5vcHRpb25zLnBlclBhZ2UgfHwgU3BsaWRlLmlzKExPT1ApO1xuICAgIHByZXYuZGlzYWJsZWQgPSBwcmV2SW5kZXggPCAwIHx8ICFpc0Vub3VnaDtcbiAgICBuZXh0LmRpc2FibGVkID0gbmV4dEluZGV4IDwgMCB8fCAhaXNFbm91Z2g7XG4gICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnVwZGF0ZWRcIiwgcHJldiwgbmV4dCwgcHJldkluZGV4LCBuZXh0SW5kZXgpO1xuICB9XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHdyYXBwZXIgZWxlbWVudCBhbmQgYXBwZW5kIGFycm93cy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGFwcGVuZEFycm93cygpIHtcbiAgICB2YXIgd3JhcHBlciA9IGNyZWF0ZSgnZGl2Jywge1xuICAgICAgXCJjbGFzc1wiOiBjbGFzc2VzLmFycm93c1xuICAgIH0pO1xuICAgIGFwcGVuZCh3cmFwcGVyLCBwcmV2KTtcbiAgICBhcHBlbmQod3JhcHBlciwgbmV4dCk7XG4gICAgdmFyIHNsaWRlciA9IEVsZW1lbnRzLnNsaWRlcjtcbiAgICB2YXIgcGFyZW50ID0gU3BsaWRlLm9wdGlvbnMuYXJyb3dzID09PSAnc2xpZGVyJyAmJiBzbGlkZXIgPyBzbGlkZXIgOiByb290O1xuICAgIGJlZm9yZSh3cmFwcGVyLCBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBhcnJvdyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwcmV2IC0gRGV0ZXJtaW5lIHRvIGNyZWF0ZSBhIHByZXYgYXJyb3cgb3IgbmV4dCBhcnJvdy5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IC0gQSBjcmVhdGVkIGFycm93IGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJvdyhwcmV2KSB7XG4gICAgdmFyIGFycm93ID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJcIiArIGNsYXNzZXMuYXJyb3cgKyBcIiBcIiArIChwcmV2ID8gY2xhc3Nlcy5wcmV2IDogY2xhc3Nlcy5uZXh0KSArIFwiXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlwiICsgKFwiPHN2ZyB4bWxucz1cXFwiXCIgKyBYTUxfTkFNRV9TUEFDRSArIFwiXFxcIlxcdHZpZXdCb3g9XFxcIjAgMCBcIiArIFNJWkUgKyBcIiBcIiArIFNJWkUgKyBcIlxcXCJcXHR3aWR0aD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiXFx0aGVpZ2h0PVxcXCJcIiArIFNJWkUgKyBcIlxcXCI+XCIpICsgKFwiPHBhdGggZD1cXFwiXCIgKyAoU3BsaWRlLm9wdGlvbnMuYXJyb3dQYXRoIHx8IFBBVEgpICsgXCJcXFwiIC8+XCIpO1xuICAgIHJldHVybiBkb21pZnkoYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIEFycm93cztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRsaW5nIHBhZ2luYXRpb25cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBUaGUgZXZlbnQgbmFtZSBmb3IgdXBkYXRpbmcgc29tZSBhdHRyaWJ1dGVzIG9mIHBhZ2luYXRpb24gbm9kZXMuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVRUUklCVVRFU19VUERBVEVfRVZFTlQgPSAnbW92ZS5wYWdlJztcbi8qKlxyXG4gKiBUaGUgZXZlbnQgbmFtZSBmb3IgcmVjcmVhdGluZyBwYWdpbmF0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFVQREFURV9FVkVOVCA9ICd1cGRhdGVkLnBhZ2UgcmVmcmVzaC5wYWdlJztcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kbGluZyBwYWdpbmF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICAgICAgLSBBIGNvbXBvbmVudCBuYW1lIGFzIGEgbG93ZXJjYXNlIHN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBwYWdpbmF0aW9uID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMsIG5hbWUpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgYWxsIGRhdGEgZm9yIHBhZ2luYXRpb24uXHJcbiAgICogLSBsaXN0OiBBIGxpc3QgZWxlbWVudC5cclxuICAgKiAtIGl0ZW1zOiBBbiBhcnJheSB0aGF0IGNvbnRhaW5zIG9iamVjdHMobGksIGJ1dHRvbiwgaW5kZXgsIHBhZ2UpLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIGRhdGEgPSB7fTtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBQYWdpbmF0aW9uIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBQYWdpbmF0aW9uID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIHBhZ2luYXRpb24gPSBTcGxpZGUub3B0aW9ucy5wYWdpbmF0aW9uO1xuXG4gICAgICBpZiAocGFnaW5hdGlvbikge1xuICAgICAgICBkYXRhID0gY3JlYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICB2YXIgc2xpZGVyID0gRWxlbWVudHMuc2xpZGVyO1xuICAgICAgICB2YXIgcGFyZW50ID0gcGFnaW5hdGlvbiA9PT0gJ3NsaWRlcicgJiYgc2xpZGVyID8gc2xpZGVyIDogU3BsaWRlLnJvb3Q7XG4gICAgICAgIGFwcGVuZChwYXJlbnQsIGRhdGEubGlzdCk7XG4gICAgICAgIFNwbGlkZS5vbihBVFRSSUJVVEVTX1VQREFURV9FVkVOVCwgdXBkYXRlQXR0cmlidXRlcyk7XG4gICAgICB9XG5cbiAgICAgIFNwbGlkZS5vZmYoVVBEQVRFX0VWRU5UKS5vbihVUERBVEVfRVZFTlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUGFnaW5hdGlvbi5kZXN0cm95KCk7XG5cbiAgICAgICAgaWYgKFNwbGlkZS5vcHRpb25zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICBQYWdpbmF0aW9uLm1vdW50KCk7XG4gICAgICAgICAgUGFnaW5hdGlvbi5tb3VudGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciBhbGwgY29tcG9uZW50cyBhcmUgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgICBpZiAoU3BsaWRlLm9wdGlvbnMucGFnaW5hdGlvbikge1xuICAgICAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjptb3VudGVkXCIsIGRhdGEsIHRoaXMuZ2V0SXRlbShpbmRleCkpO1xuICAgICAgICB1cGRhdGVBdHRyaWJ1dGVzKGluZGV4LCAtMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveSB0aGUgcGFnaW5hdGlvbi5cclxuICAgICAqIEJlIGF3YXJlIHRoYXQgbm9kZS5yZW1vdmUoKSBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRvbV9yZW1vdmUoZGF0YS5saXN0KTtcblxuICAgICAgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgU3BsaWRlLm9mZignY2xpY2snLCBpdGVtLmJ1dHRvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBEbyBub3QgcmVtb3ZlIFVQREFURV9FVkVOVCB0byByZWNyZWF0ZSBwYWdpbmF0aW9uIGlmIG5lZWRlZC5cblxuXG4gICAgICBTcGxpZGUub2ZmKEFUVFJJQlVURVNfVVBEQVRFX0VWRU5UKTtcbiAgICAgIGRhdGEgPSB7fTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYW4gaXRlbSBieSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9IC0gQW4gaXRlbSBvYmplY3Qgb24gc3VjY2VzcyBvciB1bmRlZmluZWQgb24gZmFpbHVyZS5cclxuICAgICAqL1xuICAgIGdldEl0ZW06IGZ1bmN0aW9uIGdldEl0ZW0oaW5kZXgpIHtcbiAgICAgIHJldHVybiBkYXRhLml0ZW1zW0NvbXBvbmVudHMuQ29udHJvbGxlci50b1BhZ2UoaW5kZXgpXTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gb2JqZWN0IGNvbnRhaW5pbmcgcGFnaW5hdGlvbiBkYXRhLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBQYWdpbmF0aW9uIGRhdGEgaW5jbHVkaW5nIGxpc3QgYW5kIGl0ZW1zLlxyXG4gICAgICovXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogVXBkYXRlIGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggICAgIC0gQWN0aXZlIGluZGV4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwcmV2SW5kZXggLSBQcmV2IGluZGV4LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZXMoaW5kZXgsIHByZXZJbmRleCkge1xuICAgIHZhciBwcmV2ID0gUGFnaW5hdGlvbi5nZXRJdGVtKHByZXZJbmRleCk7XG4gICAgdmFyIGN1cnIgPSBQYWdpbmF0aW9uLmdldEl0ZW0oaW5kZXgpO1xuICAgIHZhciBhY3RpdmUgPSBTVEFUVVNfQ0xBU1NFUy5hY3RpdmU7XG5cbiAgICBpZiAocHJldikge1xuICAgICAgcmVtb3ZlQ2xhc3MocHJldi5idXR0b24sIGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnIpIHtcbiAgICAgIGFkZENsYXNzKGN1cnIuYnV0dG9uLCBhY3RpdmUpO1xuICAgIH1cblxuICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjp1cGRhdGVkXCIsIGRhdGEsIHByZXYsIGN1cnIpO1xuICB9XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHdyYXBwZXIgYW5kIGJ1dHRvbiBlbGVtZW50cy5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbnMgYWxsIGRhdGEuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgdmFyIGNsYXNzZXMgPSBTcGxpZGUuY2xhc3NlcztcbiAgICB2YXIgbGlzdCA9IGNyZWF0ZSgndWwnLCB7XG4gICAgICBcImNsYXNzXCI6IGNsYXNzZXMucGFnaW5hdGlvblxuICAgIH0pO1xuICAgIHZhciBpdGVtcyA9IEVsZW1lbnRzLmdldFNsaWRlcyhmYWxzZSkuZmlsdGVyKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm9jdXMgIT09IGZhbHNlIHx8IFNsaWRlLmluZGV4ICUgb3B0aW9ucy5wZXJQYWdlID09PSAwO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoU2xpZGUsIHBhZ2UpIHtcbiAgICAgIHZhciBsaSA9IGNyZWF0ZSgnbGknLCB7fSk7XG4gICAgICB2YXIgYnV0dG9uID0gY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICAgIFwiY2xhc3NcIjogY2xhc3Nlcy5wYWdlLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJ1xuICAgICAgfSk7XG4gICAgICBhcHBlbmQobGksIGJ1dHRvbik7XG4gICAgICBhcHBlbmQobGlzdCwgbGkpO1xuICAgICAgU3BsaWRlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU3BsaWRlLmdvKFwiPlwiICsgcGFnZSk7XG4gICAgICB9LCBidXR0b24pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGk6IGxpLFxuICAgICAgICBidXR0b246IGJ1dHRvbixcbiAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgU2xpZGVzOiBFbGVtZW50cy5nZXRTbGlkZXNCeVBhZ2UocGFnZSlcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICBpdGVtczogaXRlbXNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIFBhZ2luYXRpb247XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2xhenlsb2FkL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbG9hZGluZyBzbGlkZXIgaW1hZ2VzIGxhemlseS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSBuYW1lIGZvciBhIGRhdGEgYXR0cmlidXRlIG9mIHNyYy5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBTUkNfREFUQV9OQU1FID0gJ2RhdGEtc3BsaWRlLWxhenknO1xuLyoqXHJcbiAqIFRoZSBuYW1lIGZvciBhIGRhdGEgYXR0cmlidXRlIG9mIHNyY3NldC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBTUkNTRVRfREFUQV9OQU1FID0gJ2RhdGEtc3BsaWRlLWxhenktc3Jjc2V0Jztcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBsb2FkaW5nIHNsaWRlciBpbWFnZXMgbGF6aWx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgbGF6eWxvYWQgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBOZXh0IGluZGV4IGZvciBzZXF1ZW50aWFsIGxvYWRpbmcuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICB2YXIgbmV4dEluZGV4O1xuICAvKipcclxuICAgKiBTdG9yZSBvYmplY3RzIGNvbnRhaW5pbmcgYW4gaW1nIGVsZW1lbnQgYW5kIGEgU2xpZGUgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdFtdfVxyXG4gICAqL1xuXG4gIHZhciBpbWFnZXM7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGxvYWQgaW1hZ2VzIHNlcXVlbnRpYWxseSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNTZXF1ZW50aWFsID0gb3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3NlcXVlbnRpYWwnO1xuICAvKipcclxuICAgKiBMYXp5bG9hZCBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgTGF6eWxvYWQgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBNb3VudCBvbmx5IHdoZW4gdGhlIGxhenlsb2FkIG9wdGlvbiBpcyBwcm92aWRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBvcHRpb25zLmxhenlMb2FkLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ21vdW50ZWQgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBDb21wb25lbnRzLkVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgICAgZWFjaChTbGlkZS5zbGlkZS5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiICsgU1JDX0RBVEFfTkFNRSArIFwiXSwgW1wiICsgU1JDU0VUX0RBVEFfTkFNRSArIFwiXVwiKSwgZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgaWYgKCFpbWcuc3JjICYmICFpbWcuc3Jjc2V0KSB7XG4gICAgICAgICAgICAgIGltYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbWc6IGltZyxcbiAgICAgICAgICAgICAgICBTbGlkZTogU2xpZGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGFwcGx5U3R5bGUoaW1nLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNTZXF1ZW50aWFsKSB7XG4gICAgICAgICAgbG9hZE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghaXNTZXF1ZW50aWFsKSB7XG4gICAgICAgIFNwbGlkZS5vbihcIm1vdW50ZWQgcmVmcmVzaCBtb3ZlZC5cIiArIG5hbWUsIGNoZWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogaW5pdFxuICB9O1xuICAvKipcclxuICAgKiBJbml0aWFsaXplIHBhcmFtZXRlcnMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpbWFnZXMgPSBbXTtcbiAgICBuZXh0SW5kZXggPSAwO1xuICB9XG4gIC8qKlxyXG4gICAqIENoZWNrIGhvdyBjbG9zZSBlYWNoIGltYWdlIGlzIGZyb20gdGhlIGFjdGl2ZSBzbGlkZSBhbmRcclxuICAgKiBkZXRlcm1pbmUgd2hldGhlciB0byBzdGFydCBsb2FkaW5nIG9yIG5vdCwgYWNjb3JkaW5nIHRvIHRoZSBkaXN0YW5jZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEN1cnJlbnQgaW5kZXguXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjaGVjayhpbmRleCkge1xuICAgIGluZGV4ID0gaXNOYU4oaW5kZXgpID8gU3BsaWRlLmluZGV4IDogaW5kZXg7XG4gICAgaW1hZ2VzID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGlmIChpbWFnZS5TbGlkZS5pc1dpdGhpbihpbmRleCwgb3B0aW9ucy5wZXJQYWdlICogKG9wdGlvbnMucHJlbG9hZFBhZ2VzICsgMSkpKSB7XG4gICAgICAgIGxvYWQoaW1hZ2UuaW1nLCBpbWFnZS5TbGlkZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7IC8vIFVuYmluZCBpZiBhbGwgaW1hZ2VzIGFyZSBsb2FkZWQuXG5cbiAgICBpZiAoIWltYWdlc1swXSkge1xuICAgICAgU3BsaWRlLm9mZihcIm1vdmVkLlwiICsgbmFtZSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFN0YXJ0IGxvYWRpbmcgYW4gaW1hZ2UuXHJcbiAgICogQ3JlYXRpbmcgYSBjbG9uZSBvZiB0aGUgaW1hZ2UgZWxlbWVudCBzaW5jZSBzZXR0aW5nIHNyYyBhdHRyaWJ1dGUgZGlyZWN0bHkgdG8gaXRcclxuICAgKiBvZnRlbiBvY2N1cnMgJ2hpdGNoJywgYmxvY2tpbmcgc29tZSBvdGhlciBwcm9jZXNzZXMgb2YgYSBicm93c2VyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBpbWcgICAtIEFuIGltYWdlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBTbGlkZSAtIEEgU2xpZGUgb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbG9hZChpbWcsIFNsaWRlKSB7XG4gICAgYWRkQ2xhc3MoU2xpZGUuc2xpZGUsIFNUQVRVU19DTEFTU0VTLmxvYWRpbmcpO1xuICAgIHZhciBzcGlubmVyID0gY3JlYXRlKCdzcGFuJywge1xuICAgICAgXCJjbGFzc1wiOiBTcGxpZGUuY2xhc3Nlcy5zcGlubmVyXG4gICAgfSk7XG4gICAgYXBwZW5kKGltZy5wYXJlbnRFbGVtZW50LCBzcGlubmVyKTtcblxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsb2FkZWQoaW1nLCBzcGlubmVyLCBTbGlkZSwgZmFsc2UpO1xuICAgIH07XG5cbiAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxvYWRlZChpbWcsIHNwaW5uZXIsIFNsaWRlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgc2V0QXR0cmlidXRlKGltZywgJ3NyY3NldCcsIGdldEF0dHJpYnV0ZShpbWcsIFNSQ1NFVF9EQVRBX05BTUUpIHx8ICcnKTtcbiAgICBzZXRBdHRyaWJ1dGUoaW1nLCAnc3JjJywgZ2V0QXR0cmlidXRlKGltZywgU1JDX0RBVEFfTkFNRSkgfHwgJycpO1xuICB9XG4gIC8qKlxyXG4gICAqIFN0YXJ0IGxvYWRpbmcgYSBuZXh0IGltYWdlIGluIGltYWdlcyBhcnJheS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGxvYWROZXh0KCkge1xuICAgIGlmIChuZXh0SW5kZXggPCBpbWFnZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgaW1hZ2UgPSBpbWFnZXNbbmV4dEluZGV4XTtcbiAgICAgIGxvYWQoaW1hZ2UuaW1nLCBpbWFnZS5TbGlkZSk7XG4gICAgfVxuXG4gICAgbmV4dEluZGV4Kys7XG4gIH1cbiAgLyoqXHJcbiAgICogQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGltYWdlIHdhcyBsb2FkZWQgb3IgbG9hZGluZyB3YXMgYWJvcnRlZCBieSBzb21lIGVycm9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBpbWcgICAgIC0gQW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHNwaW5uZXIgLSBBIHNwaW5uZXIgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gIFNsaWRlICAgLSBBIFNsaWRlIG9iamVjdC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVycm9yICAgLSBUcnVlIGlmIHRoZSBpbWFnZSB3YXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSBvciBmYWxzZSBvbiBlcnJvci5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGxvYWRlZChpbWcsIHNwaW5uZXIsIFNsaWRlLCBlcnJvcikge1xuICAgIHJlbW92ZUNsYXNzKFNsaWRlLnNsaWRlLCBTVEFUVVNfQ0xBU1NFUy5sb2FkaW5nKTtcblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGRvbV9yZW1vdmUoc3Bpbm5lcik7XG4gICAgICBhcHBseVN0eWxlKGltZywge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6bG9hZGVkXCIsIGltZykuZW1pdCgncmVzaXplJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzU2VxdWVudGlhbCkge1xuICAgICAgbG9hZE5leHQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTGF6eWxvYWQ7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvYTExeS5qc1xuLyoqXHJcbiAqIEV4cG9ydCBhcmlhIGF0dHJpYnV0ZSBuYW1lcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtY3VycmVudC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgQVJJQV9DVVJSRU5SVCA9ICdhcmlhLWN1cnJlbnQnO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWNvbnRyb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVJJQV9DT05UUk9MUyA9ICdhcmlhLWNvbnRyb2xzJztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1jb250cm9sLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfTEFCRUwgPSAnYXJpYS1sYWJlbCc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtbGFiZWxsZWRieS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0xBQkVMTEVEQlkgPSAnYXJpYS1sYWJlbGxlZGJ5Jztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1oaWRkZW4uXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVJJQV9ISURERU4gPSAnYXJpYS1oaWRkZW4nO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciB0YWItaW5kZXguXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgVEFCX0lOREVYID0gJ3RhYmluZGV4JztcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2tleWJvYXJkL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY29udHJvbGxpbmcgc2xpZGVzIHZpYSBrZXlib2FyZC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBNYXAgYSBrZXkgdG8gYSBzbGlkZSBjb250cm9sLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cblxudmFyIEtFWV9NQVAgPSB7XG4gIGx0cjoge1xuICAgIEFycm93TGVmdDogJzwnLFxuICAgIEFycm93UmlnaHQ6ICc+JyxcbiAgICAvLyBGb3IgSUUuXG4gICAgTGVmdDogJzwnLFxuICAgIFJpZ2h0OiAnPidcbiAgfSxcbiAgcnRsOiB7XG4gICAgQXJyb3dMZWZ0OiAnPicsXG4gICAgQXJyb3dSaWdodDogJzwnLFxuICAgIC8vIEZvciBJRS5cbiAgICBMZWZ0OiAnPicsXG4gICAgUmlnaHQ6ICc8J1xuICB9LFxuICB0dGI6IHtcbiAgICBBcnJvd1VwOiAnPCcsXG4gICAgQXJyb3dEb3duOiAnPicsXG4gICAgLy8gRm9yIElFLlxuICAgIFVwOiAnPCcsXG4gICAgRG93bjogJz4nXG4gIH1cbn07XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY29udHJvbGxpbmcgc2xpZGVzIHZpYSBrZXlib2FyZC5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGtleWJvYXJkID0gKGZ1bmN0aW9uIChTcGxpZGUpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudHxEb2N1bWVudHx1bmRlZmluZWR9XHJcbiAgICovXG4gIHZhciB0YXJnZXQ7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ21vdW50ZWQgdXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgICAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgICAgICAgdmFyIG1hcCA9IEtFWV9NQVBbb3B0aW9ucy5kaXJlY3Rpb25dO1xuICAgICAgICB2YXIga2V5Ym9hcmQgPSBvcHRpb25zLmtleWJvYXJkO1xuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBTcGxpZGUub2ZmKCdrZXlkb3duJywgdGFyZ2V0KTtcbiAgICAgICAgICByZW1vdmVBdHRyaWJ1dGUocm9vdCwgVEFCX0lOREVYKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlib2FyZCkge1xuICAgICAgICAgIGlmIChrZXlib2FyZCA9PT0gJ2ZvY3VzZWQnKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSByb290O1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlKHJvb3QsIFRBQl9JTkRFWCwgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFNwbGlkZS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAobWFwW2Uua2V5XSkge1xuICAgICAgICAgICAgICBTcGxpZGUuZ28obWFwW2Uua2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9hMTF5L2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZW5oYW5jaW5nIGFjY2Vzc2liaWxpdHkuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBlbmhhbmNpbmcgYWNjZXNzaWJpbGl0eS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGExMXkgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBIb2xkIGEgaTE4biBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgaTE4biA9IFNwbGlkZS5pMThuO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEFsbCBhdHRyaWJ1dGVzIHJlbGF0ZWQgd2l0aCBBMTF5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAqL1xuXG4gIHZhciBhbGxBdHRyaWJ1dGVzID0gW0FSSUFfSElEREVOLCBUQUJfSU5ERVgsIEFSSUFfQ09OVFJPTFMsIEFSSUFfTEFCRUwsIEFSSUFfQ1VSUkVOUlQsICdyb2xlJ107XG4gIC8qKlxyXG4gICAqIEExMXkgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEExMXkgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIGFjY2Vzc2liaWxpdHkgb3B0aW9uIGlzIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogU3BsaWRlLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCd2aXNpYmxlJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHVwZGF0ZVNsaWRlKFNsaWRlLnNsaWRlLCB0cnVlKTtcbiAgICAgIH0pLm9uKCdoaWRkZW4nLCBmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgdXBkYXRlU2xpZGUoU2xpZGUuc2xpZGUsIGZhbHNlKTtcbiAgICAgIH0pLm9uKCdhcnJvd3M6bW91bnRlZCcsIGluaXRBcnJvd3MpLm9uKCdhcnJvd3M6dXBkYXRlZCcsIHVwZGF0ZUFycm93cykub24oJ3BhZ2luYXRpb246bW91bnRlZCcsIGluaXRQYWdpbmF0aW9uKS5vbigncGFnaW5hdGlvbjp1cGRhdGVkJywgdXBkYXRlUGFnaW5hdGlvbikub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZUF0dHJpYnV0ZShDb21wb25lbnRzLkNsb25lcy5jbG9uZXMsIGFsbEF0dHJpYnV0ZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5pc05hdmlnYXRpb24pIHtcbiAgICAgICAgU3BsaWRlLm9uKCduYXZpZ2F0aW9uOm1vdW50ZWQgbmF2aWdhdGlvbjp1cGRhdGVkJywgaW5pdE5hdmlnYXRpb24pLm9uKCdhY3RpdmUnLCBmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uKFNsaWRlLCB0cnVlKTtcbiAgICAgICAgfSkub24oJ2luYWN0aXZlJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbihTbGlkZSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaW5pdEF1dG9wbGF5KCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgQXJyb3dzID0gQ29tcG9uZW50cy5BcnJvd3M7XG4gICAgICB2YXIgYXJyb3dzID0gQXJyb3dzID8gQXJyb3dzLmFycm93cyA6IHt9O1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKEVsZW1lbnRzLnNsaWRlcy5jb25jYXQoW2Fycm93cy5wcmV2LCBhcnJvd3MubmV4dCwgRWxlbWVudHMucGxheSwgRWxlbWVudHMucGF1c2VdKSwgYWxsQXR0cmlidXRlcyk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBVcGRhdGUgc2xpZGUgYXR0cmlidXRlcyB3aGVuIGl0IGdldHMgdmlzaWJsZSBvciBoaWRkZW4uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHNsaWRlICAgLSBBIHNsaWRlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSB2aXNpYmxlIC0gVHJ1ZSB3aGVuIHRoZSBzbGlkZSBnZXRzIHZpc2libGUsIG9yIGZhbHNlIHdoZW4gaGlkZGVuLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlKHNsaWRlLCB2aXNpYmxlKSB7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0hJRERFTiwgIXZpc2libGUpO1xuXG4gICAgaWYgKFNwbGlkZS5vcHRpb25zLnNsaWRlRm9jdXMpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgVEFCX0lOREVYLCB2aXNpYmxlID8gMCA6IC0xKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBhcnJvd3MgaWYgdGhleSBhcmUgYXZhaWxhYmxlLlxyXG4gICAqIEFwcGVuZCBzY3JlZW4gcmVhZGVyIGVsZW1lbnRzIGFuZCBhZGQgYXJpYS1jb250cm9scyBhdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXYgLSBQcmV2aW91cyBhcnJvdyBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbmV4dCAtIE5leHQgYXJyb3cgZWxlbWVudC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGluaXRBcnJvd3MocHJldiwgbmV4dCkge1xuICAgIHZhciBjb250cm9scyA9IEVsZW1lbnRzLnRyYWNrLmlkO1xuICAgIHNldEF0dHJpYnV0ZShwcmV2LCBBUklBX0NPTlRST0xTLCBjb250cm9scyk7XG4gICAgc2V0QXR0cmlidXRlKG5leHQsIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzKTtcbiAgfVxuICAvKipcclxuICAgKiBVcGRhdGUgYXJyb3cgYXR0cmlidXRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcHJldiAgICAgIC0gUHJldmlvdXMgYXJyb3cgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5leHQgICAgICAtIE5leHQgYXJyb3cgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIHByZXZJbmRleCAtIFByZXZpb3VzIHNsaWRlIGluZGV4IG9yIC0xIHdoZW4gdGhlcmUgaXMgbm8gcHJlY2VkZSBzbGlkZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIG5leHRJbmRleCAtIE5leHQgc2xpZGUgaW5kZXggb3IgLTEgd2hlbiB0aGVyZSBpcyBubyBuZXh0IHNsaWRlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlQXJyb3dzKHByZXYsIG5leHQsIHByZXZJbmRleCwgbmV4dEluZGV4KSB7XG4gICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgIHZhciBwcmV2TGFiZWwgPSBwcmV2SW5kZXggPiAtMSAmJiBpbmRleCA8IHByZXZJbmRleCA/IGkxOG4ubGFzdCA6IGkxOG4ucHJldjtcbiAgICB2YXIgbmV4dExhYmVsID0gbmV4dEluZGV4ID4gLTEgJiYgaW5kZXggPiBuZXh0SW5kZXggPyBpMThuLmZpcnN0IDogaTE4bi5uZXh0O1xuICAgIHNldEF0dHJpYnV0ZShwcmV2LCBBUklBX0xBQkVMLCBwcmV2TGFiZWwpO1xuICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0xBQkVMLCBuZXh0TGFiZWwpO1xuICB9XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgcGFnaW5hdGlvbiBpZiBpdCdzIGF2YWlsYWJsZS5cclxuICAgKiBBcHBlbmQgYSBzY3JlZW4gcmVhZGVyIGVsZW1lbnQgYW5kIGFkZCBhcmlhLWNvbnRyb2xzL2xhYmVsIGF0dHJpYnV0ZSB0byBlYWNoIGl0ZW0uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAgICAgICAtIERhdGEgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGl0ZW1zLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3RpdmVJdGVtIC0gQW4gaW5pdGlhbCBhY3RpdmUgaXRlbS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGluaXRQYWdpbmF0aW9uKGRhdGEsIGFjdGl2ZUl0ZW0pIHtcbiAgICBpZiAoYWN0aXZlSXRlbSkge1xuICAgICAgc2V0QXR0cmlidXRlKGFjdGl2ZUl0ZW0uYnV0dG9uLCBBUklBX0NVUlJFTlJULCB0cnVlKTtcbiAgICB9XG5cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB2YXIgdGV4dCA9IG9wdGlvbnMuZm9jdXMgPT09IGZhbHNlICYmIG9wdGlvbnMucGVyUGFnZSA+IDEgPyBpMThuLnBhZ2VYIDogaTE4bi5zbGlkZVg7XG4gICAgICB2YXIgbGFiZWwgPSBzcHJpbnRmKHRleHQsIGl0ZW0ucGFnZSArIDEpO1xuICAgICAgdmFyIGJ1dHRvbiA9IGl0ZW0uYnV0dG9uO1xuICAgICAgdmFyIGNvbnRyb2xzID0gaXRlbS5TbGlkZXMubWFwKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gU2xpZGUuc2xpZGUuaWQ7XG4gICAgICB9KTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzLmpvaW4oJyAnKSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0xBQkVMLCBsYWJlbCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIHBhZ2luYXRpb24gYXR0cmlidXRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgZGF0YSAtIERhdGEgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGl0ZW1zLlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcHJldiAtIEEgcHJldmlvdXMgYWN0aXZlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBjdXJyIC0gQSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFnaW5hdGlvbihkYXRhLCBwcmV2LCBjdXJyKSB7XG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShwcmV2LmJ1dHRvbiwgQVJJQV9DVVJSRU5SVCk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnIpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShjdXJyLmJ1dHRvbiwgQVJJQV9DVVJSRU5SVCwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYXV0b3BsYXkgYnV0dG9ucy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGluaXRBdXRvcGxheSgpIHtcbiAgICBbJ3BsYXknLCAncGF1c2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxtID0gRWxlbWVudHNbbmFtZV07XG5cbiAgICAgIGlmIChlbG0pIHtcbiAgICAgICAgaWYgKCFpc0J1dHRvbihlbG0pKSB7XG4gICAgICAgICAgc2V0QXR0cmlidXRlKGVsbSwgJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRBdHRyaWJ1dGUoZWxtLCBBUklBX0NPTlRST0xTLCBFbGVtZW50cy50cmFjay5pZCk7XG4gICAgICAgIHNldEF0dHJpYnV0ZShlbG0sIEFSSUFfTEFCRUwsIGkxOG5bbmFtZV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgbmF2aWdhdGlvbiBzbGlkZXIuXHJcbiAgICogQWRkIGJ1dHRvbiByb2xlLCBhcmlhLWxhYmVsLCBhcmlhLWNvbnRyb2xzIHRvIHNsaWRlIGVsZW1lbnRzIGFuZCBhcHBlbmQgc2NyZWVuIHJlYWRlciB0ZXh0IHRvIHRoZW0uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwbGlkZX0gbWFpbiAtIEEgbWFpbiBTcGxpZGUgaW5zdGFuY2UuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0TmF2aWdhdGlvbihtYWluKSB7XG4gICAgRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHZhciBzbGlkZSA9IFNsaWRlLnNsaWRlO1xuICAgICAgdmFyIHJlYWxJbmRleCA9IFNsaWRlLnJlYWxJbmRleDtcblxuICAgICAgaWYgKCFpc0J1dHRvbihzbGlkZSkpIHtcbiAgICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCAncm9sZScsICdidXR0b24nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNsaWRlSW5kZXggPSByZWFsSW5kZXggPiAtMSA/IHJlYWxJbmRleCA6IFNsaWRlLmluZGV4O1xuICAgICAgdmFyIGxhYmVsID0gc3ByaW50ZihpMThuLnNsaWRlWCwgc2xpZGVJbmRleCArIDEpO1xuICAgICAgdmFyIG1haW5TbGlkZSA9IG1haW4uQ29tcG9uZW50cy5FbGVtZW50cy5nZXRTbGlkZShzbGlkZUluZGV4KTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCwgbGFiZWwpO1xuXG4gICAgICBpZiAobWFpblNsaWRlKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DT05UUk9MUywgbWFpblNsaWRlLnNsaWRlLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBVcGRhdGUgbmF2aWdhdGlvbiBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBTbGlkZSAgLSBBIHRhcmdldCBTbGlkZSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBhY3RpdmUgLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyBhY3RpdmUgb3IgZmFsc2UgaWYgaW5hY3RpdmUuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uKF9yZWYsIGFjdGl2ZSkge1xuICAgIHZhciBzbGlkZSA9IF9yZWYuc2xpZGU7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ1VSUkVOUlQsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ1VSUkVOUlQpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBidXR0b24gb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbG0gLSBBbiBlbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgYnV0dG9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaXNCdXR0b24oZWxtKSB7XG4gICAgcmV0dXJuIGVsbS50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgfVxuXG4gIHJldHVybiBBMTF5O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9zeW5jL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3Igc3luY2hyb25pemluZyBhIHNsaWRlciB3aXRoIGFub3RoZXIuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGV2ZW50IG5hbWUgZm9yIHN5bmMuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1lOQ19FVkVOVCA9ICdtb3ZlLnN5bmMnO1xuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lcyBmb3IgY2xpY2sgbmF2aWdhdGlvbi5cclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBDTElDS19FVkVOVFMgPSAnbW91c2V1cCB0b3VjaGVuZCc7XG4vKipcclxuICogVGhlIGtleXMgZm9yIHRyaWdnZXJpbmcgdGhlIG5hdmlnYXRpb24gYnV0dG9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7U3RyaW5nW119XHJcbiAqL1xuXG52YXIgVFJJR0dFUl9LRVlTID0gWycgJywgJ0VudGVyJywgJ1NwYWNlYmFyJ107XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3Igc3luY2hyb25pemluZyBhIHNsaWRlciB3aXRoIGFub3RoZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBzeW5jID0gKGZ1bmN0aW9uIChTcGxpZGUpIHtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgc2libGluZyBTcGxpZGUgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7U3BsaWRlfVxyXG4gICAqL1xuICB2YXIgc2libGluZyA9IFNwbGlkZS5zaWJsaW5nO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzaWJsaW5nIHNsaWRlciBpcyBuYXZpZ2F0aW9uIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtTcGxpZGV8Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNOYXZpZ2F0aW9uID0gc2libGluZyAmJiBzaWJsaW5nLm9wdGlvbnMuaXNOYXZpZ2F0aW9uO1xuICAvKipcclxuICAgKiBMYXlvdXQgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIFN5bmMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIHN1YiBzbGlkZXIgaXMgYXZhaWxhYmxlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6ICEhc2libGluZyxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgc3luY01haW4oKTtcbiAgICAgIHN5bmNTaWJsaW5nKCk7XG5cbiAgICAgIGlmIChpc05hdmlnYXRpb24pIHtcbiAgICAgICAgYmluZCgpO1xuICAgICAgICBTcGxpZGUub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiaW5kKCk7XG4gICAgICAgICAgICBzaWJsaW5nLmVtaXQoJ25hdmlnYXRpb246dXBkYXRlZCcsIFNwbGlkZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciBhbGwgY29tcG9uZW50cyBhcmUgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgICBpZiAoaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIHNpYmxpbmcuZW1pdCgnbmF2aWdhdGlvbjptb3VudGVkJywgU3BsaWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0aGUgcHJpbWFyeSBzbGlkZXIgZXZlbnQgdG8gbW92ZSBzZWNvbmRhcnkgb25lLlxyXG4gICAqIE11c3QgdW5iaW5kIGEgaGFuZGxlciBhdCBmaXJzdCB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHN5bmNNYWluKCkge1xuICAgIFNwbGlkZS5vbihTWU5DX0VWRU5ULCBmdW5jdGlvbiAobmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KSB7XG4gICAgICBzaWJsaW5nLm9mZihTWU5DX0VWRU5UKS5nbyhzaWJsaW5nLmlzKExPT1ApID8gZGVzdEluZGV4IDogbmV3SW5kZXgsIGZhbHNlKTtcbiAgICAgIHN5bmNTaWJsaW5nKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogTGlzdGVuIHRoZSBzZWNvbmRhcnkgc2xpZGVyIGV2ZW50IHRvIG1vdmUgcHJpbWFyeSBvbmUuXHJcbiAgICogTXVzdCB1bmJpbmQgYSBoYW5kbGVyIGF0IGZpcnN0IHRvIGF2b2lkIGluZmluaXRlIGxvb3AuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBzeW5jU2libGluZygpIHtcbiAgICBzaWJsaW5nLm9uKFNZTkNfRVZFTlQsIGZ1bmN0aW9uIChuZXdJbmRleCwgcHJldkluZGV4LCBkZXN0SW5kZXgpIHtcbiAgICAgIFNwbGlkZS5vZmYoU1lOQ19FVkVOVCkuZ28oU3BsaWRlLmlzKExPT1ApID8gZGVzdEluZGV4IDogbmV3SW5kZXgsIGZhbHNlKTtcbiAgICAgIHN5bmNNYWluKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogTGlzdGVuIHNvbWUgZXZlbnRzIG9uIGVhY2ggc2xpZGUuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHNpYmxpbmcuQ29tcG9uZW50cy5FbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgc2xpZGUgPSBfcmVmLnNsaWRlLFxuICAgICAgICAgIGluZGV4ID0gX3JlZi5pbmRleDtcblxuICAgICAgLypcclxuICAgICAgICogTGlzdGVuIG1vdXNldXAgYW5kIHRvdWNoZW5kIGV2ZW50cyB0byBoYW5kbGUgY2xpY2suXHJcbiAgICAgICAqL1xuICAgICAgU3BsaWRlLm9mZihDTElDS19FVkVOVFMsIHNsaWRlKS5vbihDTElDS19FVkVOVFMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIElnbm9yZSBhIG1pZGRsZSBvciByaWdodCBjbGljay5cbiAgICAgICAgaWYgKCFlLmJ1dHRvbiB8fCBlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIG1vdmVTaWJsaW5nKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSwgc2xpZGUpO1xuICAgICAgLypcclxuICAgICAgICogU3Vic2NyaWJlIGtleXVwIHRvIGhhbmRsZSBFbnRlciBhbmQgU3BhY2Uga2V5LlxyXG4gICAgICAgKiBOb3RlIHRoYXQgQXJyYXkuaW5jbHVkZXMgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgICAgICovXG5cbiAgICAgIFNwbGlkZS5vZmYoJ2tleXVwJywgc2xpZGUpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChUUklHR0VSX0tFWVMuaW5kZXhPZihlLmtleSkgPiAtMSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBtb3ZlU2libGluZyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNsaWRlLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBNb3ZlIHRoZSBzaWJsaW5nIHRvIHRoZSBnaXZlbiBpbmRleC5cclxuICAgKiBOZWVkIHRvIGNoZWNrIFwiSURMRVwiIHN0YXR1cyBiZWNhdXNlIHNsaWRlcyBjYW4gYmUgbW92aW5nIGJ5IERyYWcgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gVGFyZ2V0IGluZGV4LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbW92ZVNpYmxpbmcoaW5kZXgpIHtcbiAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKElETEUpKSB7XG4gICAgICBzaWJsaW5nLmdvKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gU3luYztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYnJlYWtwb2ludHMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciB1cGRhdGluZyBvcHRpb25zIGFjY29yZGluZyB0byBhIGN1cnJlbnQgd2luZG93IHdpZHRoLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIEludGVydmFsIHRpbWUgZm9yIHRocm90dGxlLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIFRIUk9UVExFID0gNTA7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgdXBkYXRpbmcgb3B0aW9ucyBhY2NvcmRpbmcgdG8gYSBjdXJyZW50IHdpbmRvdyB3aWR0aC5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGJyZWFrcG9pbnRzID0gKGZ1bmN0aW9uIChTcGxpZGUpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgYnJlYWtwb2ludHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fGJvb2xlYW59XHJcbiAgICovXG4gIHZhciBicmVha3BvaW50cyA9IFNwbGlkZS5vcHRpb25zLmJyZWFrcG9pbnRzO1xuICAvKipcclxuICAgKiBUaGUgY2hlY2sgZnVuY3Rpb24gd2hvc2UgZnJlcXVlbmN5IG9mIGNhbGwgaXMgcmVkdWNlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICAgKi9cblxuICB2YXIgdGhyb3R0bGVkQ2hlY2sgPSB0aHJvdHRsZShjaGVjaywgVEhST1RUTEUpO1xuICAvKipcclxuICAgKiBLZWVwIGluaXRpYWwgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGluaXRpYWxPcHRpb25zO1xuICAvKipcclxuICAgKiBBbiBhcnJheSBjb250YWluaW5nIG9iamVjdHMgb2YgcG9pbnQgYW5kIE1lZGlhUXVlcnlMaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdFtdfVxyXG4gICAqL1xuXG4gIHZhciBtYXAgPSBbXTtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgcHJldmlvdXMgYnJlYWtwb2ludC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxyXG4gICAqL1xuXG4gIHZhciBwcmV2UG9pbnQ7XG4gIC8qKlxyXG4gICAqIEJyZWFrcG9pbnRzIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBCcmVha3BvaW50cyA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgYnJlYWtwb2ludHMgZGVmaW5pdGlvbiBpcyBwcm92aWRlZCBhbmQgYnJvd3NlciBzdXBwb3J0cyBtYXRjaE1lZGlhLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IGJyZWFrcG9pbnRzICYmIG1hdGNoTWVkaWEsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIG1hcCA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5zb3J0KGZ1bmN0aW9uIChuLCBtKSB7XG4gICAgICAgIHJldHVybiArbiAtICttO1xuICAgICAgfSkubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgICBtcWw6IG1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOlwiICsgcG9pbnQgKyBcInB4KVwiKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICAvKlxyXG4gICAgICAgKiBUbyBrZWVwIG1vbml0b3JpbmcgcmVzaXplIGV2ZW50IGFmdGVyIGRlc3RydWN0aW9uIHdpdGhvdXQgXCJjb21wbGV0ZWx5XCIsXHJcbiAgICAgICAqIHVzZSBuYXRpdmUgYWRkRXZlbnRMaXN0ZW5lciBpbnN0ZWFkIG9mIFNwbGlkZS5vbi5cclxuICAgICAgICovXG5cbiAgICAgIHRoaXMuZGVzdHJveSh0cnVlKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlZENoZWNrKTsgLy8gS2VlcCBpbml0aWFsIG9wdGlvbnMgdG8gYXBwbHkgdGhlbSB3aGVuIG5vIGJyZWFrcG9pbnQgbWF0Y2hlcy5cblxuICAgICAgaW5pdGlhbE9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIGNoZWNrKCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbXBsZXRlbHkgLSBXaGV0aGVyIHRvIGRlc3Ryb3kgU3BsaWRlIGNvbXBsZXRlbHkuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICAgIGlmIChjb21wbGV0ZWx5KSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlZENoZWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIENoZWNrIHRoZSBicmVha3BvaW50LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIHZhciBwb2ludCA9IGdldFBvaW50KCk7XG5cbiAgICBpZiAocG9pbnQgIT09IHByZXZQb2ludCkge1xuICAgICAgcHJldlBvaW50ID0gcG9pbnQ7XG4gICAgICB2YXIgU3RhdGUgPSBTcGxpZGUuU3RhdGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IGJyZWFrcG9pbnRzW3BvaW50XSB8fCBpbml0aWFsT3B0aW9ucztcbiAgICAgIHZhciBkZXN0cm95ID0gb3B0aW9ucy5kZXN0cm95O1xuXG4gICAgICBpZiAoZGVzdHJveSkge1xuICAgICAgICBTcGxpZGUub3B0aW9ucyA9IGluaXRpYWxPcHRpb25zO1xuICAgICAgICBTcGxpZGUuZGVzdHJveShkZXN0cm95ID09PSAnY29tcGxldGVseScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFN0YXRlLmlzKERFU1RST1lFRCkpIHtcbiAgICAgICAgICBTcGxpZGUubW91bnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNwbGlkZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBicmVha3BvaW50IG1hdGNoaW5nIGN1cnJlbnQgd2luZG93IHdpZHRoLlxyXG4gICAqIE5vdGUgdGhhdCBBcnJheS5wcm90b3R5cGUuZmluZCBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfHN0cmluZ30gLSBBIGJyZWFrcG9pbnQgYXMgbnVtYmVyIG9yIHN0cmluZy4gLTEgaWYgbm8gcG9pbnQgbWF0Y2hlcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFBvaW50KCkge1xuICAgIHZhciBpdGVtID0gbWFwLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0ubXFsLm1hdGNoZXM7XG4gICAgfSlbMF07XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLnBvaW50IDogLTE7XG4gIH1cblxuICByZXR1cm4gQnJlYWtwb2ludHM7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzXG4vKipcclxuICogRXhwb3J0IGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgQ09NUExFVEUgPSB7XG4gIE9wdGlvbnM6IG9wdGlvbnMsXG4gIEJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgQ29udHJvbGxlcjogY29udHJvbGxlcixcbiAgRWxlbWVudHM6IGNvbXBvbmVudHNfZWxlbWVudHMsXG4gIFRyYWNrOiB0cmFjayxcbiAgQ2xvbmVzOiBjbG9uZXMsXG4gIExheW91dDogbGF5b3V0LFxuICBEcmFnOiBkcmFnLFxuICBDbGljazogY2xpY2ssXG4gIEF1dG9wbGF5OiBhdXRvcGxheSxcbiAgQ292ZXI6IGNvdmVyLFxuICBBcnJvd3M6IGFycm93cyxcbiAgUGFnaW5hdGlvbjogcGFnaW5hdGlvbixcbiAgTGF6eUxvYWQ6IGxhenlsb2FkLFxuICBLZXlib2FyZDoga2V5Ym9hcmQsXG4gIFN5bmM6IHN5bmMsXG4gIEExMXk6IGExMXlcbn07XG52YXIgTElHSFQgPSB7XG4gIE9wdGlvbnM6IG9wdGlvbnMsXG4gIENvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gIEVsZW1lbnRzOiBjb21wb25lbnRzX2VsZW1lbnRzLFxuICBUcmFjazogdHJhY2ssXG4gIENsb25lczogY2xvbmVzLFxuICBMYXlvdXQ6IGxheW91dCxcbiAgRHJhZzogZHJhZyxcbiAgQ2xpY2s6IGNsaWNrLFxuICBBcnJvd3M6IGFycm93cyxcbiAgUGFnaW5hdGlvbjogcGFnaW5hdGlvbixcbiAgQTExeTogYTExeVxufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL2J1aWxkL21vZHVsZS9tb2R1bGUuanNcbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcclxuICogRXhwb3J0IFNwbGlkZSBjbGFzcyBmb3IgaW1wb3J0LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIEV4cG9ydCBTcGxpZGUgY2xhc3MgZm9yIGltcG9ydCBmcm9tIG90aGVyIHByb2plY3RzLlxyXG4gKi9cblxudmFyIG1vZHVsZV9TcGxpZGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db3JlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFNwbGlkZSwgX0NvcmUpO1xuXG4gIGZ1bmN0aW9uIFNwbGlkZShyb290LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9Db3JlLmNhbGwodGhpcywgcm9vdCwgb3B0aW9ucywgQ09NUExFVEUpIHx8IHRoaXM7XG4gIH1cblxuICByZXR1cm4gU3BsaWRlO1xufShTcGxpZGUpO1xuXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcbi8qKioqKiovIFx0XHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygzMTEpO1xuLyoqKioqKi8gfSkoKVxuO1xufSk7IiwiaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jb2xvcnMuanNvbic7XG5cbmNsYXNzIFBhbGV0dGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgY29udGFpbmVyLCBwdWJzdWIgfSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucHVic3ViID0gcHVic3ViO1xuXG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciApO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrICkge1xuXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdjb2xvci1jb2x1bW4nKTtcblxuICAgICAgZm9yKCBsZXQgaiA9IDA7IGogPCA2OyBqKysgKSB7XG5cbiAgICAgICAgY29uc3QgeyBuYW1lLCBoZXggfSA9IGNvbG9yc1sgaSsrIF07XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29sb3ItaXRlbScpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lICk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGV4JywgaGV4ICk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgbmFtZSApO1xuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZCA9IGhleDtcblxuICAgICAgICBsaS5hcHBlbmRDaGlsZCggZGl2ICk7XG4gICAgICB9XG5cbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKCBsaSApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKHsgdGFyZ2V0IH0pIHtcbiAgICBpZiggIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbG9yLWl0ZW0nKSApIHJldHVybjtcblxuICAgIGNvbnN0IGhleCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGV4Jyk7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgIHRoaXMucHVic3ViLnB1Ymxpc2goJ2NoYW5nZS1jb2xvcicsIHsgaGV4LCBuYW1lIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbGV0dGU7IiwiaW1wb3J0IFNwbGlkZSBmcm9tICdAc3BsaWRlanMvc3BsaWRlJztcblxuY2xhc3MgU2xpZGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IGNvbnRhaW5lciwgc2xpZGVyQ2xhc3NOYW1lLCBwdWJzdWIgfSkge1xuICAgIHRoaXMucHVic3ViID0gcHVic3ViO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgdGhpcy5zZXRDb2xvciA9IHRoaXMuc2V0Q29sb3IuYmluZCggdGhpcyApO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZSgnY2hhbmdlLWNvbG9yJywgdGhpcy5zZXRDb2xvciApO1xuICAgIHRoaXMuaW5pdCggc2xpZGVyQ2xhc3NOYW1lICk7XG4gIH1cblxuICBpbml0KCBjbGFzc05hbWUgKSB7XG4gICAgbmV3IFNwbGlkZSggY2xhc3NOYW1lLCB7XG4gICAgICB0eXBlICAgOiAnbG9vcCcsXG4gICAgfSApLm1vdW50KCk7XG4gIH1cblxuICBzZXRDb2xvcih7IGhleCB9KSB7XG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGhleDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL1NsaWRlcic7XG5pbXBvcnQgUGFsZXR0ZSBmcm9tICcuL2NvbXBvbmVudHMvUGFsZXR0ZSc7XG5pbXBvcnQgUHViU3ViIGZyb20gJy4vdXRpbHMvUHViU3ViJztcblxuY29uc3QgcHVic3ViID0gbmV3IFB1YlN1YjtcbmNvbnN0IHNlbGVjdGVkQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtY29sb3InKTtcblxubmV3IFNsaWRlcih7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpLFxuICBzbGlkZXJDbGFzc05hbWU6ICcuc3BsaWRlJyxcbiAgcHVic3ViOiBwdWJzdWJcbn0pO1xuXG5uZXcgUGFsZXR0ZSh7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9ycycpLFxuICBwdWJzdWI6IHB1YnN1YlxufSk7XG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ2NoYW5nZS1jb2xvcicsICh7IG5hbWUsIGhleCB9KSA9PiB7XG4gIHNlbGVjdGVkQ29sb3IuaW5uZXJIVE1MID0gYGNvbG9yOiAke25hbWV9YDtcbn0pOyIsImxldCBpbnN0YW5jZTtcblxuY2xhc3MgUHViU3ViIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIGluc3RhbmNlICkgcmV0dXJuIGluc3RhbmNlO1xuICAgIHRoaXMuc3RvcmFnZSA9IHt9O1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIHN1YnNjcmliZSAoIGV2ZW50TmFtZSwgZnVuYyApIHtcbiAgICBpZiAoICF0aGlzLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoIGV2ZW50TmFtZSApICkge1xuICAgICAgICB0aGlzLnN0b3JhZ2VbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmFnZVtldmVudE5hbWVdLnB1c2goIGZ1bmMgKTtcbiAgfVxuXG4gIHB1Ymxpc2ggKCBldmVudE5hbWUsIGRhdGEgKSB7XG4gICAgKCB0aGlzLnN0b3JhZ2VbZXZlbnROYW1lXSB8fCBbXSApLmZvckVhY2goICggZnVuYyApID0+IHsgZnVuYyggZGF0YSApOyB9KTtcbiAgfVxuXG4gIHVuU3Vic2NyaWJlICggZXZlbnROYW1lLCBmdW5jICkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdG9yYWdlW2V2ZW50TmFtZV0uaW5kZXhPZiggZnVuYyApO1xuICAgIGlmICggaW5kZXggPiAtMSApIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlW2V2ZW50TmFtZV0uc3BsaWNlKCBpbmRleCwgMSAgKTtcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWJTdWI7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3B4TEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=