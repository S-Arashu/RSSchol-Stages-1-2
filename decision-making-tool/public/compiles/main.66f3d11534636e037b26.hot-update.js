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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './builders/mainBlock'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const title = (0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
const NAMES_OF_BUTTONS = [
    'Add Option',
    'Paste list',
    'Clear list',
    'Save list to file',
    'Load list from file',
    'Start',
];
document.body.append(title);
const firstButton = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './builders/mainBlock'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('button', 'Add Option', 'buttonList');
const but = firstButton.createButton();
title.append(but);
console.log(but);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4890dae87482ec3ae0ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.66f3d11534636e037b26.hot-update.js.map