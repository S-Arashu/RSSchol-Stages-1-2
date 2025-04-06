"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/dialog.ts":
/*!********************************!*\
  !*** ./src/builders/dialog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialogIncorrectValue: () => (/* binding */ dialogIncorrectValue),
/* harmony export */   dialogWrongValue: () => (/* binding */ dialogWrongValue)
/* harmony export */ });
const dialogIncorrectValue = document.createElement('dialog');
function dialogWrongValue(parent) {
    dialogIncorrectValue.classList.add('popup');
    dialogIncorrectValue.textContent = 'Please, enter correct data';
    parent.append(dialogIncorrectValue);
    dialogIncorrectValue.showModal();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("864555fcd4f166d37483")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1c54a440745fcea2a321.hot-update.js.map