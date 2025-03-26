"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/inputFields.ts":
/*!*************************************!*\
  !*** ./src/builders/inputFields.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInput: () => (/* binding */ createInput)
/* harmony export */ });
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/styles.css */ "./public/styles.css");

function createInput(parentTag, count) {
    const liElem = document.createElement('li');
    liElem.classList.add('item');
    parentTag.append(liElem);
    const label = document.createElement('label');
    label.setAttribute('for', `option-#${count}`);
    label.textContent = `#${count}`;
    label.classList.add('label-item');
    liElem.append(label);
    const inputElem = document.createElement('input');
    inputElem.setAttribute('id', `option-#${count}`);
    inputElem.setAttribute('value', '');
    inputElem.setAttribute('placeholder', 'Title');
    inputElem.setAttribute('name', 'title');
    inputElem.classList.add('input-item');
    label.append(inputElem);
    const inputSecondElem = document.createElement('input');
    inputSecondElem.setAttribute('type', 'number');
    inputSecondElem.setAttribute('value', '');
    inputSecondElem.setAttribute('placeholder', 'Weight');
    inputSecondElem.setAttribute('name', 'weight');
    inputSecondElem.classList.add('input-item');
    inputElem.append(inputSecondElem);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('button-item');
    button.textContent = 'Delete';
    inputSecondElem.append(button);
    return liElem;
}


/***/ }),

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
    const container = document.createElement('div');
    container.classList.add('container');
    parentTag.append(container);
    for (let i = 0; i < NUM_OF_BUTTONS; i += 1) {
        const button = new _buttons__WEBPACK_IMPORTED_MODULE_1__.Buttons('button', NAMES_OF_BUTTONS[i], 'buttonList');
        const elementOfContainer = button.createButton();
        container.append(elementOfContainer);
        if (i === 0) {
            elementOfContainer.addEventListener('click', () => {
                var _a;
                let numOfElem = (_a = localStorage.count) !== null && _a !== void 0 ? _a : '0';
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_2__.createInput)(container, numOfElem);
            });
        }
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("85353c9e37e2ee89539c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c8c34f59a08b85ac0988.hot-update.js.map