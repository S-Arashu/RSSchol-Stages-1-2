"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/dialog.ts":
/*!********************************!*\
  !*** ./src/builders/dialog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteWrongDialog: () => (/* binding */ deleteWrongDialog),
/* harmony export */   dialogWrongValue: () => (/* binding */ dialogWrongValue)
/* harmony export */ });
const dialogIncorrect = document.createElement('dialog');
function dialogWrongValue(parent) {
    dialogIncorrect.classList.add('popup');
    dialogIncorrect.textContent = 'Please, enter correct data';
    parent.append(dialogIncorrect);
    dialogIncorrect.showModal();
}
function deleteWrongDialog() {
    dialogIncorrect.remove();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("842853fc044e383b4d51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3292d1ed166828eba211.hot-update.js.map