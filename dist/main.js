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
/***/ (() => {

eval("const list = document.querySelector('.list');\r\n\r\nconst todoTasks = [\r\n  {\r\n    index: 0,\r\n    completed: true,\r\n    description: 'Walk the dog'\r\n  },\r\n  {\r\n    index: 1,\r\n    completed: false,\r\n    description: 'Wash the dishes'\r\n  },\r\n  {\r\n    index: 2,\r\n    completed: false,\r\n    description: 'Exercise'\r\n  },\r\n];\r\n\r\n\r\nconst sortedTasks = todoTasks.sort((a,b) => a.index - b.index)\r\nlist.innerHTML = sortedTasks.map((item) => `<li>${item.description}</li>`).join('');\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;