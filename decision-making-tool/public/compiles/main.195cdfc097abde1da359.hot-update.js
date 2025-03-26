"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");
/* harmony import */ var _builders_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builders/app */ "./src/builders/app.ts");
/* harmony import */ var _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders/mainBlock */ "./src/builders/mainBlock.ts");



(0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
const title = (0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
const firstButton = new _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.Buttons('button', 'Add Option', 'buttonList');
const but = firstButton.createButton();
title.append(but);
console.log(but);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("068799fc724e2afb9e12")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.195cdfc097abde1da359.hot-update.js.map