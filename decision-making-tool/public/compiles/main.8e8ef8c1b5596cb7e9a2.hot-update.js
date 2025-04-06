"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/mainBlock.ts":
/*!***********************************!*\
  !*** ./src/builders/mainBlock.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   containerForOptions: () => (/* binding */ containerForOptions),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   startBut: () => (/* binding */ startBut)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/styles.css */ "./public/styles.css");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/builders/buttons.ts");
/* harmony import */ var _clearList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearList */ "./src/builders/clearList.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/builders/dialog.ts");
/* harmony import */ var _inputFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputFields */ "./src/builders/inputFields.ts");
/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saveData */ "./src/builders/saveData.ts");
/* harmony import */ var _downloadData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./downloadData */ "./src/builders/downloadData.ts");
/* harmony import */ var _wheel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wheel */ "./src/builders/wheel.ts");
/* harmony import */ var _pasteList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pasteList */ "./src/builders/pasteList.ts");










const NAMES_OF_BUTTONS = [
    'Add Option',
    'Paste list',
    'Clear list',
    'Save list to file',
    'Load list from file',
    'Start',
];
let startBut;
const NUM_OF_BUTTONS = 6;
const container = document.createElement('div');
const containerForOptions = document.createElement('div');
function create(parentTag) {
    if (!localStorage.count) {
        localStorage.setItem('count', JSON.stringify([1]));
    }
    containerForOptions.classList.add('container');
    container.classList.add('container');
    parentTag.after(containerForOptions);
    parentTag.after(container);
    for (let i = 0; i < NUM_OF_BUTTONS; i += 1) {
        const button = new _buttons__WEBPACK_IMPORTED_MODULE_2__.Buttons('button', NAMES_OF_BUTTONS[i], 'buttonList');
        const elementOfContainer = button.createButton();
        container.append(elementOfContainer);
        if (i === 0) {
            elementOfContainer.addEventListener('click', () => {
                let numOfElem = (0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('count') || [];
                console.log(numOfElem);
                if (numOfElem.length === 0) {
                    numOfElem.push(1);
                }
                else {
                    numOfElem.push(numOfElem[numOfElem.length - 1] + 1);
                }
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_5__.createInput)(containerForOptions, numOfElem[numOfElem.length - 1]);
                localStorage.setItem('count', JSON.stringify(numOfElem));
            });
        }
        if (i === 1) {
            elementOfContainer.addEventListener('click', () => {
                (0,_pasteList__WEBPACK_IMPORTED_MODULE_9__.createPasteList)();
            });
        }
        if (i === 2) {
            elementOfContainer.addEventListener('click', () => {
                (0,_clearList__WEBPACK_IMPORTED_MODULE_3__.clearList)(containerForOptions);
            });
        }
        if (i === 3) {
            elementOfContainer.addEventListener('click', () => {
                (0,_saveData__WEBPACK_IMPORTED_MODULE_6__.saveToFile)();
            });
        }
        if (i === 4) {
            elementOfContainer.addEventListener('click', () => {
                (0,_downloadData__WEBPACK_IMPORTED_MODULE_7__.downloadData)(elementOfContainer);
            });
        }
        if (i === 5) {
            startBut = elementOfContainer;
            elementOfContainer.addEventListener('click', () => {
                if (!localStorage.getItem('dataFromInputs') ||
                    Object.keys((0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('dataFromInputs')).length < 4) {
                    (0,_pasteList__WEBPACK_IMPORTED_MODULE_9__.createPasteList)();
                    (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.dialogWrongValue)(containerForOptions);
                }
                else {
                    localStorage.page = '1';
                    location.hash = 'decision-maker';
                    (0,_wheel__WEBPACK_IMPORTED_MODULE_8__.createChoosePage)();
                }
            });
        }
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45190d9bf7c7eb2e2fcb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8e8ef8c1b5596cb7e9a2.hot-update.js.map