"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/mainBlock.ts":
/*!***********************************!*\
  !*** ./src/builders/mainBlock.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/styles.css */ "./public/styles.css");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/builders/buttons.ts");
/* harmony import */ var _inputFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputFields */ "./src/builders/inputFields.ts");



const NAMES_OF_BUTTONS = [
    'Add Option',
    'Paste list',
    'Clear list',
    'Save list to file',
    'Load list from file',
    'Start',
];
const NUM_OF_BUTTONS = 6;
function create(parentTag) {
    if (!localStorage.count) {
        localStorage.count = '1';
    }
    const container = document.createElement('div');
    container.classList.add('container');
    parentTag.append(container);
    for (let i = 0; i < NUM_OF_BUTTONS; i += 1) {
        const button = new _buttons__WEBPACK_IMPORTED_MODULE_1__.Buttons('button', NAMES_OF_BUTTONS[i], 'buttonList');
        const elementOfContainer = button.createButton();
        container.append(elementOfContainer);
        if (i === 0) {
            elementOfContainer.addEventListener('click', () => {
                let numOfElem = localStorage.count;
                numOfElem = +numOfElem + 1;
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_2__.createInput)(container, numOfElem);
                localStorage.count = numOfElem;
            });
        }
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f08d2b832772794f86a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.84b8a94cd34d295e1872.hot-update.js.map