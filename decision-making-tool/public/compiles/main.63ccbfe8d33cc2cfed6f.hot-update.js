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
const dialogIncorrect = document.createElement('div');
function dialogWrongValue(parent) {
    dialogIncorrect.classList.add('popup-wrong');
    dialogIncorrect.textContent = 'Please, enter correct data';
    parent.append(dialogIncorrect);
    dialogIncorrect.style.display = 'flex';
}
function deleteWrongDialog() {
    dialogIncorrect.remove();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("46616fbe0f4fc8416d45")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.63ccbfe8d33cc2cfed6f.hot-update.js.map