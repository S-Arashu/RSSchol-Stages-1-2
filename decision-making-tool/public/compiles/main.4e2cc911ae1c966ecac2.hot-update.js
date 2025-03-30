"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/clearList.ts":
/*!***********************************!*\
  !*** ./src/builders/clearList.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearList: () => (/* binding */ clearList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function clearList(elemForClear) {
    localStorage.setItem('dataFromInputs', JSON.stringify({}));
    localStorage.setItem('count', JSON.stringify([]));
    Object.keys(___WEBPACK_IMPORTED_MODULE_0__.objData).forEach(key => delete ___WEBPACK_IMPORTED_MODULE_0__.objData[key]);
    elemForClear.textContent = '';
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93469ecf1e3843d353a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4e2cc911ae1c966ecac2.hot-update.js.map