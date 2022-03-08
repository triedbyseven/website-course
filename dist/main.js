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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navigation_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigation/hamburger */ \"./src/modules/navigation/hamburger/index.js\");\n/* harmony import */ var _modules_animations_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animations/hero */ \"./src/modules/animations/hero/index.js\");\n/* harmony import */ var _modules_animations_hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_animations_hero__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_global_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/global/scroll */ \"./src/modules/global/scroll/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n(0,_modules_global_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_navigation_hamburger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar timer = (Math.random() * 10).toFixed() * 1000;\n\nfunction getAllGames(inStock) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (!inStock) reject(new Error('No games are in stock, oh shit were all out!'));\n      resolve([{\n        id: 1,\n        name: 'Fortnite'\n      }, {\n        id: 2,\n        name: 'Halo'\n      }]);\n    }, timer);\n  });\n}\n\n; // async & await\n// try catch blocks\n\nvar instagramPostsData = undefined;\n\nfunction returnAllGames() {\n  return _returnAllGames.apply(this, arguments);\n}\n\nfunction _returnAllGames() {\n  _returnAllGames = _asyncToGenerator(function* () {\n    try {\n      var allGames = yield getAllGames(true);\n      instagramPostsData = allGames;\n      console.log(instagramPostsData);\n    } catch (error) {\n      console.error(error);\n    }\n\n    ;\n  });\n  return _returnAllGames.apply(this, arguments);\n}\n\n;\n\nfunction App() {\n  return _App.apply(this, arguments);\n}\n\nfunction _App() {\n  _App = _asyncToGenerator(function* () {\n    // Running our async code;\n    yield returnAllGames();\n    console.log('instagramPostsData', instagramPostsData);\n  });\n  return _App.apply(this, arguments);\n}\n\n;\nApp();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/animations/about/index.js":
/*!***********************************************!*\
  !*** ./src/modules/animations/about/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction delayAnimation(node, className, delayTime, isScrolledTo) {\n  setTimeout(() => {\n    isScrolledTo ? node.classList.remove(className) : node.classList.add(className);\n  }, delayTime);\n}\n\n;\n\nfunction loadAboutAnimations(isScrolledTo) {\n  var aboutHeadingElement = document.getElementById('aboutHeading');\n  var aboutSubHeadingElement = document.getElementById('aboutSubHeading');\n  var aboutContentElement = document.getElementById('aboutContent');\n  var aboutButtonElement = document.getElementById('aboutButton');\n  delayAnimation(aboutHeadingElement, 'animate', 0, isScrolledTo);\n  delayAnimation(aboutSubHeadingElement, 'animate', 150, isScrolledTo);\n  delayAnimation(aboutContentElement, 'animate', 300, isScrolledTo);\n  delayAnimation(aboutButtonElement, 'animate', 450, isScrolledTo);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutAnimations);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/animations/about/index.js?");

/***/ }),

/***/ "./src/modules/animations/github/index.js":
/*!************************************************!*\
  !*** ./src/modules/animations/github/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar apiUrl = 'https://api.github.com/graphql';\nvar apiToken = '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';\nvar isInitialized = false;\n\nfunction getAllRepositories(apiUrl, apiToken) {\n  return new Promise(function (resolve, reject) {\n    var HTTP = new XMLHttpRequest();\n    HTTP.open('POST', apiUrl);\n    HTTP.setRequestHeader('Authorization', 'Bearer ' + apiToken);\n    HTTP.setRequestHeader('Content-Type', 'application/json');\n    var QUERY = {\n      query: \"{\\n        viewer {\\n          anyPinnableItems\\n          bio\\n          followers(first: 1) {\\n            nodes {\\n              name\\n              email\\n            }\\n            totalCount\\n          }\\n          pinnedItems(first: 6) {\\n            nodes {\\n              ... on Repository {\\n                name\\n                description\\n                url\\n                openGraphImageUrl\\n                repositoryTopics(first: 6) {\\n                  nodes {\\n                    resourcePath\\n                    topic {\\n                      name\\n                    }\\n                    url\\n                  }\\n                }\\n              }\\n            }\\n            totalCount\\n          }\\n        }\\n      }\"\n    };\n\n    HTTP.onload = function () {\n      if (HTTP.status === 200) {\n        var responseJSON = JSON.parse(HTTP.responseText);\n        resolve(responseJSON);\n      }\n    };\n\n    HTTP.onerror = function () {\n      reject(new Error('GraphQL network error occured.'));\n    };\n\n    HTTP.send(JSON.stringify(QUERY));\n  });\n}\n\n;\n\nfunction renderTopics(topics, node) {\n  var fragment = document.createDocumentFragment();\n  topics.forEach(topic => {\n    var topicDiv = document.createElement('div');\n    topicDiv.className = 'topic';\n    topicDiv.innerText = topic.topic.name;\n    fragment.appendChild(topicDiv);\n  });\n  node.replaceChildren(fragment);\n}\n\n;\n\nfunction callGitHubRequest() {\n  return _callGitHubRequest.apply(this, arguments);\n}\n\nfunction _callGitHubRequest() {\n  _callGitHubRequest = _asyncToGenerator(function* () {\n    var response = yield getAllRepositories(apiUrl, apiToken);\n    var githubCardNode = document.getElementById('github-card');\n    var anchorNode = githubCardNode.children[0];\n    var imageNode = githubCardNode.children[0].children[0].children[0];\n    var titleNode = githubCardNode.children[0].children[1].children[0];\n    var paragraphNode = githubCardNode.children[0].children[1].children[1];\n    var topicsNode = githubCardNode.children[0].children[2];\n    var repository = response.data.viewer.pinnedItems.nodes[0];\n    anchorNode.href = repository.url;\n    imageNode.src = repository.openGraphImageUrl;\n    titleNode.innerText = repository.name.replaceAll('-', ' ');\n    paragraphNode.innerText = repository.description;\n    renderTopics(repository.repositoryTopics.nodes, topicsNode);\n    console.log('GitHub response: ', response);\n  });\n  return _callGitHubRequest.apply(this, arguments);\n}\n\n;\n\nfunction loadGithubAnimations(isScrolledTo) {\n  if (isScrolledTo) {\n    if (isInitialized) return;\n    callGitHubRequest();\n    isInitialized = true;\n  }\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGithubAnimations);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/animations/github/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction delayAnimation(node, className, delayTime, isScrolledTo) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      isScrolledTo ? node.classList.remove(className) : node.classList.add(className);\n      resolve(1);\n    }, delayTime);\n  });\n}\n\n;\n\nfunction delayAnimations(nodes, delayTime, isScrolledTo) {\n  setTimeout(() => {\n    for (var index = 0; index < nodes.length; index++) {\n      delayAnimation(nodes[index], 'opacity', index * 100, isScrolledTo);\n    }\n  }, delayTime);\n}\n\n;\n\nfunction loadServiceAnimations(_x) {\n  return _loadServiceAnimations.apply(this, arguments);\n}\n\nfunction _loadServiceAnimations() {\n  _loadServiceAnimations = _asyncToGenerator(function* (isScrolledTo) {\n    var serviceHeadingElement = document.getElementById('serviceHeading');\n    var serviceSubHeadingElement = document.getElementById('serviceSubHeading');\n    var serviceContentElement = document.getElementById('serviceContent'); // const cardServicesElements = document.querySelectorAll('#card-services');\n\n    yield delayAnimation(serviceHeadingElement, 'opacity', 0, isScrolledTo);\n    yield delayAnimation(serviceSubHeadingElement, 'opacity', 150, isScrolledTo);\n    yield delayAnimation(serviceContentElement, 'opacity', 150, isScrolledTo); // delayAnimations(cardServicesElements, 450, isScrolledTo);\n  });\n  return _loadServiceAnimations.apply(this, arguments);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadServiceAnimations);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/animations/services/index.js?");

/***/ }),

/***/ "./src/modules/global/scroll/index.js":
/*!********************************************!*\
  !*** ./src/modules/global/scroll/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animations_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/services */ \"./src/modules/animations/services/index.js\");\n/* harmony import */ var _animations_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/about */ \"./src/modules/animations/about/index.js\");\n/* harmony import */ var _animations_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/github */ \"./src/modules/animations/github/index.js\");\n\n\n\n\nfunction mountScrollOnRevealEventListener() {\n  window.addEventListener('scroll', onScrollEventListener());\n}\n\n;\n\nfunction onScrollEventListener(data) {\n  return function () {\n    var scrolledTo = Math.ceil(window.scrollY + window.innerHeight / 2);\n    reveal(scrolledTo);\n  };\n}\n\n;\n\nfunction reveal(scrolledTo) {\n  var revealElements = document.querySelectorAll('.reveal');\n\n  for (var index = 0; index < revealElements.length; index++) {\n    var revealTopElement = revealElements[index].offsetTop;\n\n    if (scrolledTo > revealTopElement) {\n      onAnimate(revealElements[index].id, true);\n    } else {\n      onAnimate(revealElements[index].id, false);\n    }\n  }\n\n  ;\n}\n\n;\n\nfunction onAnimate(revealElementID, isScrolledTo) {\n  if (revealElementID === 'service') (0,_animations_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isScrolledTo);\n  if (revealElementID === 'about') (0,_animations_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(isScrolledTo);\n  if (revealElementID === 'github') (0,_animations_github__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isScrolledTo);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountScrollOnRevealEventListener);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/global/scroll/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/modules/navigation/hamburger/global.js\");\n/* harmony import */ var _menu_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-toggle */ \"./src/modules/navigation/hamburger/menu-toggle.js\");\n\n\n\nfunction loadHamburgerMenu() {\n  var menuItemsElement = document.getElementsByClassName('menu-item');\n  var menuItems = [...menuItemsElement];\n  menuItems.forEach((menuItem, index) => menuItem.onclick = function () {\n    menuItems[_global__WEBPACK_IMPORTED_MODULE_0__.current].classList.remove('active');\n    (0,_global__WEBPACK_IMPORTED_MODULE_0__.setCurrent)(index);\n    menuItem.classList.add('active');\n  });\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHamburgerMenu);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/navigation/hamburger/index.js?");

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