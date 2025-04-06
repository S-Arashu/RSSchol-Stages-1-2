"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/dialog.ts":
/*!********************************!*\
  !*** ./src/builders/dialog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialogWrongValue: () => (/* binding */ dialogWrongValue)
/* harmony export */ });
const dialog = document.createElement('dialog');
function dialogWrongValue(parent) {
    dialog.classList.add('popup');
    dialog.textContent = 'Please, enter correct data';
    parent.append(dialog);
    dialog.showModal();
    dialog.addEventListener('cancel', event => {
        dialog.remove();
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("348a4fda8f33e4d91023")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8f447f9cfad988c90c27.hot-update.js.map