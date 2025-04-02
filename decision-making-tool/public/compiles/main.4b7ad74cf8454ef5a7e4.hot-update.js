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
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            dialogIncorrect.remove();
        }
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c9147eaf47eabc2d0311")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4b7ad74cf8454ef5a7e4.hot-update.js.map