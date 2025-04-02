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
const dialog = document.createElement('dialog');
function dialogWrongValue(parent) {
    dialog.classList.add('popup');
    dialog.textContent = 'Please, enter correct data';
    parent.append(dialog);
    dialog.showModal();
}
function deleteWrongDialog() {
    dialog.remove();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e27ddadd20d4c96102c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.842853fc044e383b4d51.hot-update.js.map