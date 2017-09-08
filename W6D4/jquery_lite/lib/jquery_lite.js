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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function (arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else {
    const nodeList = document.querySelectorAll(arg);
    const array = Array.from(nodeList);
    return new DOMNodeCollection(array);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (array) {
    this.array = array;
  }

  html(string) {
    if (string) {
      this.array.forEach(el => {
        el.innerHTML = string;
      });
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    this.array.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(arg) {
    if (typeof arg === "string") {
      this.array.forEach(el => {
        el.innerHTML += arg;
      });
    } else {
      arg.forEach(el => {
        this.array.forEach(node => {
          node.innerHTML += el;
        });
      });
    }
  }

  attr(attrName, value) {
    if (value) {
      this.array.forEach(el => {
        el.setAttribute(attrName, value);
      });
    } else {
      return this.array[0].getAttribute(attrName);
    }
  }

  addClass(string) {
    this.array.forEach(el => {
      if (el.className.length > 0) {
        el.className += " ";
      }
      el.className += string;
    });
  }

  removeClass(className) {
    if (className) {
      const classesToRemove = className.split(" ");
      this.array.forEach(el => {
        const replacement = [];
        const currentClasses = el.className.split(" ");
        currentClasses.forEach(name => {
          if (!classesToRemove.includes(name)) { replacement.push(name); }
        });
        el.className = replacement.join(" ");
      });
    } else {
      this.array.forEach(el => {
        el.className = "";
      });
    }
  }

  children() {
    let childNodes = [];

    this.array.forEach(el => {
      const htmlChildren = el.children;
      const array = Array.from(htmlChildren);
      childNodes = childNodes.concat(array);
    });

    return new DOMNodeCollection(childNodes);
  }

  parent() {
    let parentNodes = [];
    this.array.forEach(el => {
      const htmlParent = el.parentNode;
      parentNodes.push(htmlParent);
    });

    return new DOMNodeCollection(parentNodes);
  }

  find(selector) {
    let findings = [];

    this.array.forEach(el => {
      findings = findings.concat(el.querySelectorAll(selector));
    });

    return new DOMNodeCollection(findings);
  }

  remove() {
    this.array.forEach(el => {
      el.remove();
    });

    this.array = [];
  }

  on(type, callback) {
    this.array.forEach(el => {
      el.addEventListener(type, callback);
    });
    this.attr("listener-callback", callback);
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);