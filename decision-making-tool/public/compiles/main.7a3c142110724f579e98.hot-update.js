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



window.addEventListener('load', event => {
    if (!localStorage.page) {
        localStorage.page = '0';
        location.hash = 'main';
        (0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
    }
    if (localStorage.page === '0') {
        location.hash = 'main';
        (0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
    }
    if (localStorage.page === '1') {
        location.hash = 'decision-maker';
    }
});
const title = (0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.append(title);
(0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("96ef3390fc748493649c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7a3c142110724f579e98.hot-update.js.map