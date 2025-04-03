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
    const dialogWrapper = document.createElement('div');
    dialogWrapper.classList.add('dialog-wrapper');
    dialog.append(dialogWrapper);
    const dialogButton = document.createElement('button');
    dialogButton.classList.add('dialog-button');
    dialogButton.innerText = 'OK';
    dialogWrapper.append(dialogButton);
    dialog.showModal();
    dialog.addEventListener('cancel', event => {
        dialog.remove();
    });
    dialogButton.addEventListener('click', () => {
        dialog.close();
        dialog.remove();
    });
    dialog.addEventListener('click', closeOnBackDropClick);
    function closeOnBackDropClick({ currentTarget, target }) {
        const dialogElement = currentTarget;
        if (dialogElement instanceof HTMLDialogElement) {
            const isClickedOnBackDrop = target === dialogElement;
            if (isClickedOnBackDrop && dialogElement) {
                dialogElement.close();
                dialog.remove();
            }
        }
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1c09b2ce84024a92dd8c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.73312bc269b461294030.hot-update.js.map