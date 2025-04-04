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
    const dialogWrong = document.createElement('dialog');
    dialogWrong.classList.add('popup-wrong');
    dialogWrong.textContent = 'Please, enter correct data';
    parent.append(dialogWrong);
    const dialogWrapper = document.createElement('div');
    dialogWrapper.classList.add('dialog-wrapper');
    dialogWrong.append(dialogWrapper);
    const dialogButton = document.createElement('button');
    dialogButton.classList.add('dialog-button');
    dialogButton.innerText = 'OK';
    dialogWrapper.append(dialogButton);
    dialogWrong.showModal();
    dialogWrong.addEventListener('cancel', event => {
        dialogWrong.remove();
        console.log(`remove dialogWrong`);
    });
    dialogButton.addEventListener('click', () => {
        dialogWrong.remove();
    });
    const handleModalClick = (event) => {
        const modalRect = dialogWrong.getBoundingClientRect();
        if (event.clientX < modalRect.left ||
            event.clientX > modalRect.right ||
            event.clientY < modalRect.top ||
            event.clientY > modalRect.bottom) {
            dialogWrong.remove();
        }
    };
    dialogWrong.addEventListener('click', handleModalClick);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("49f6a8057eba908d1ff1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.84be2a374cefb58f2c91.hot-update.js.map