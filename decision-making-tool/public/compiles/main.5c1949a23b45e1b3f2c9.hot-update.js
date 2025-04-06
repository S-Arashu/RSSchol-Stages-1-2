"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/loadOptions.ts":
/*!*************************************!*\
  !*** ./src/builders/loadOptions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadOptions: () => (/* binding */ loadOptions)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _inputFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputFields */ "./src/builders/inputFields.ts");
/* harmony import */ var _mainBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainBlock */ "./src/builders/mainBlock.ts");



function loadOptions(object) {
    const count = (0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('count') || [1];
    let valOpt;
    let valW;
    for (let i = 0; i < count.length; i += 1) {
        valOpt = '';
        valW = 0;
        for (let key of Object.keys(object)) {
            console.log(key);
            if (count[i] === +key.replace(/\D/g, '') && key[0] === 'o') {
                valOpt = String(object[key]);
            }
            else if (count[i] === +key.replace(/\D/g, '') && key[0] === '#' && object[key]) {
                valW = +object[key];
            }
            else {
                continue;
            }
        }
        (0,_inputFields__WEBPACK_IMPORTED_MODULE_1__.createInput)(_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions, count[i], valOpt, valW);
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37b4416d99d00fde0eb6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5c1949a23b45e1b3f2c9.hot-update.js.map