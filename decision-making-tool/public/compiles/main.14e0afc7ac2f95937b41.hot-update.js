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
function dialogWrongValue(parent) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('popup-wrong');
    dialog.textContent = 'Please, enter correct data';
    parent.append(dialog);
    const dialogButton = document.createElement('button');
    dialogButton.classList.add('dialog-button');
    dialogButton.innerText = 'OK';
    dialog.append(dialogButton);
    dialog.showModal();
    dialog.addEventListener('cancel', event => {
        dialog.remove();
    });
    dialogButton.addEventListener('click', () => {
        dialog.close();
        dialog.remove();
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d72f0a11ca1b2a55978")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.14e0afc7ac2f95937b41.hot-update.js.map