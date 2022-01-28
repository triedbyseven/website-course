/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navigation_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigation/hamburger */ \"./src/modules/navigation/hamburger/index.js\");\n/* harmony import */ var _modules_animations_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animations/hero */ \"./src/modules/animations/hero/index.js\");\n/* harmony import */ var _modules_animations_hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_animations_hero__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_global_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/global/scroll */ \"./src/modules/global/scroll/index.js\");\n\n\n\n(0,_modules_global_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_navigation_hamburger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/animations/about/index.js":
/*!***********************************************!*\
  !*** ./src/modules/animations/about/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction delayAnimation(node, className, delayTime, isScrolledTo) {\n  setTimeout(function () {\n    isScrolledTo ? node.classList.remove(className) : node.classList.add(className);\n  }, delayTime);\n}\n\n;\n\nfunction loadAboutAnimations(isScrolledTo) {\n  var aboutHeadingElement = document.getElementById('aboutHeading');\n  var aboutSubHeadingElement = document.getElementById('aboutSubHeading');\n  var aboutContentElement = document.getElementById('aboutContent');\n  var aboutButtonElement = document.getElementById('aboutButton');\n  delayAnimation(aboutHeadingElement, 'animate', 0, isScrolledTo);\n  delayAnimation(aboutSubHeadingElement, 'animate', 150, isScrolledTo);\n  delayAnimation(aboutContentElement, 'animate', 300, isScrolledTo);\n  delayAnimation(aboutButtonElement, 'animate', 450, isScrolledTo);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutAnimations);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/animations/about/index.js?");

/***/ }),

/***/ "./src/modules/animations/hero/index.js":
/*!**********************************************!*\
  !*** ./src/modules/animations/hero/index.js ***!
  \**********************************************/
/***/ (() => {

eval("// const animationState = {\n//   hasAnimated: false\n// };\n// function delayAnimation(node, className, delayTime) {\n//   setTimeout(() => {\n//     node.classList.remove(className);\n//   }, delayTime);\n// };\n// function delayAnimations(nodes, delayTime) {\n//   console.log('nodes: ', nodes);\n//   setTimeout(() => {\n//     for (let index = 0; index < nodes.length; index++) {\n//       delayAnimation(nodes[index], 'opacity', index * 100);\n//     }\n//   }, delayTime);\n// }\n// function loadHeroAnimations() {\n//   if ( animationState.hasAnimated ) return;\n//   console.log('Hero animations loaded!');\n//   animationState.hasAnimated = !animationState.hasAnimated;\n//   console.log('animationState.hasAnimated', animationState.hasAnimated);\n//   const serviceHeadingElement = document.getElementById('serviceHeading');\n//   const serviceSubHeadingElement = document.getElementById('serviceSubHeading');\n//   const serviceContentElement = document.getElementById('serviceContent');\n//   const cardServicesElements = document.querySelectorAll('#card-services');\n//   delayAnimation(serviceHeadingElement, 'opacity', 0);\n//   delayAnimation(serviceSubHeadingElement, 'opacity', 500);\n//   delayAnimation(serviceContentElement, 'opacity', 1000);\n//   delayAnimations(cardServicesElements, 1500);\n// };\n// export default loadHeroAnimations;\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/animations/hero/index.js?");

/***/ }),

/***/ "./src/modules/animations/services/index.js":
/*!**************************************************!*\
  !*** ./src/modules/animations/services/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar animationState = {\n  hasAnimatedUp: false,\n  hasAnimatedDown: false,\n  direciton: null\n};\n\nfunction delayAnimation(node, className, delayTime, isScrolledTo) {\n  setTimeout(function () {\n    isScrolledTo ? node.classList.remove(className) : node.classList.add(className);\n  }, delayTime);\n}\n\n;\n\nfunction delayAnimations(nodes, delayTime, isScrolledTo) {\n  setTimeout(function () {\n    for (var index = 0; index < nodes.length; index++) {\n      delayAnimation(nodes[index], 'opacity', index * 100, isScrolledTo);\n    }\n  }, delayTime);\n}\n\n;\n\nfunction loadServiceAnimations(isScrolledTo) {\n  var serviceHeadingElement = document.getElementById('serviceHeading');\n  var serviceSubHeadingElement = document.getElementById('serviceSubHeading');\n  var serviceContentElement = document.getElementById('serviceContent');\n  var cardServicesElements = document.querySelectorAll('#card-services');\n  delayAnimation(serviceHeadingElement, 'opacity', 0, isScrolledTo);\n  delayAnimation(serviceSubHeadingElement, 'opacity', 150, isScrolledTo);\n  delayAnimation(serviceContentElement, 'opacity', 300, isScrolledTo);\n  delayAnimations(cardServicesElements, 450, isScrolledTo);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadServiceAnimations);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/animations/services/index.js?");

/***/ }),

/***/ "./src/modules/global/scroll/index.js":
/*!********************************************!*\
  !*** ./src/modules/global/scroll/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animations_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/services */ \"./src/modules/animations/services/index.js\");\n/* harmony import */ var _animations_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/about */ \"./src/modules/animations/about/index.js\");\n\n\n\nfunction mountScrollOnRevealEventListener() {\n  window.addEventListener('scroll', onScrollEventListener());\n}\n\n;\n\nfunction onScrollEventListener(data) {\n  return function () {\n    var scrolledTo = Math.ceil(window.scrollY + window.innerHeight / 2);\n    reveal(scrolledTo);\n  };\n}\n\n;\n\nfunction reveal(scrolledTo) {\n  var revealElements = document.querySelectorAll('.reveal');\n\n  for (var index = 0; index < revealElements.length; index++) {\n    var revealTopElement = revealElements[index].offsetTop;\n\n    if (scrolledTo > revealTopElement) {\n      onAnimate(revealElements[index].id, true);\n    } else {\n      onAnimate(revealElements[index].id, false);\n    }\n  }\n\n  ;\n}\n\n;\n\nfunction onAnimate(revealElementID, isScrolledTo) {\n  if (revealElementID === 'service') (0,_animations_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isScrolledTo);\n  if (revealElementID === 'about') (0,_animations_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(isScrolledTo);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountScrollOnRevealEventListener);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/global/scroll/index.js?");

/***/ }),

/***/ "./src/modules/navigation/hamburger/global.js":
/*!****************************************************!*\
  !*** ./src/modules/navigation/hamburger/global.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"overlayElement\": () => (/* binding */ overlayElement),\n/* harmony export */   \"isToggled\": () => (/* binding */ isToggled),\n/* harmony export */   \"current\": () => (/* binding */ current),\n/* harmony export */   \"setIsToggled\": () => (/* binding */ setIsToggled),\n/* harmony export */   \"setCurrent\": () => (/* binding */ setCurrent)\n/* harmony export */ });\nvar overlayElement = document.getElementById('hamburger-menu');\nvar isToggled = false;\nvar current = 0; // Setters\n\nfunction setIsToggled(toggleValue) {\n  isToggled = toggleValue;\n}\n;\nfunction setCurrent(currentValue) {\n  current = currentValue;\n}\n;\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/navigation/hamburger/global.js?");

/***/ }),

/***/ "./src/modules/navigation/hamburger/index.js":
/*!***************************************************!*\
  !*** ./src/modules/navigation/hamburger/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/modules/navigation/hamburger/global.js\");\n/* harmony import */ var _menu_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-toggle */ \"./src/modules/navigation/hamburger/menu-toggle.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nfunction loadHamburgerMenu() {\n  var menuItemsElement = document.getElementsByClassName('menu-item');\n\n  var menuItems = _toConsumableArray(menuItemsElement);\n\n  menuItems.forEach(function (menuItem, index) {\n    return menuItem.onclick = function () {\n      menuItems[_global__WEBPACK_IMPORTED_MODULE_0__.current].classList.remove('active');\n      (0,_global__WEBPACK_IMPORTED_MODULE_0__.setCurrent)(index);\n      menuItem.classList.add('active');\n    };\n  });\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHamburgerMenu);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/navigation/hamburger/index.js?");

/***/ }),

/***/ "./src/modules/navigation/hamburger/menu-toggle.js":
/*!*********************************************************!*\
  !*** ./src/modules/navigation/hamburger/menu-toggle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuOpenElement\": () => (/* binding */ menuOpenElement),\n/* harmony export */   \"menuCloseElement\": () => (/* binding */ menuCloseElement)\n/* harmony export */ });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/modules/navigation/hamburger/global.js\");\n\nvar menuOpenElement = document.getElementById('menu-open-button');\nvar menuCloseElement = document.getElementById('menu-close-button');\n\nmenuOpenElement.onclick = function () {\n  (0,_global__WEBPACK_IMPORTED_MODULE_0__.setIsToggled)(!_global__WEBPACK_IMPORTED_MODULE_0__.isToggled);\n  _global__WEBPACK_IMPORTED_MODULE_0__.overlayElement.classList.remove('overlay-hidden');\n  _global__WEBPACK_IMPORTED_MODULE_0__.overlayElement.classList.add('overlay-shown');\n};\n\nmenuCloseElement.onclick = function () {\n  (0,_global__WEBPACK_IMPORTED_MODULE_0__.setIsToggled)(!_global__WEBPACK_IMPORTED_MODULE_0__.isToggled);\n  _global__WEBPACK_IMPORTED_MODULE_0__.overlayElement.classList.remove('overlay-shown');\n  _global__WEBPACK_IMPORTED_MODULE_0__.overlayElement.classList.add('overlay-hidden');\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/navigation/hamburger/menu-toggle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;