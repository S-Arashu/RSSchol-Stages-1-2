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
        dialogWrong.close();
        dialogWrong.remove();
    });
    dialogWrong.addEventListener('click', closeOnBackDropClick);
    function closeOnBackDropClick({ currentTarget, target }) {
        const dialogElement = currentTarget;
        if (dialogElement instanceof HTMLDialogElement) {
            const isClickedOnBackDrop = target === dialogElement;
            if (isClickedOnBackDrop && dialogElement) {
                dialogElement.close();
                location.hash = 'main';
            }
        }
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ed172f7f7745300d2dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e90005171edd6400a14d.hot-update.js.map