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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/styles.css */ "./public/styles.css");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/builders/buttons.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog */ "./src/builders/dialog.ts");
/* harmony import */ var _inputFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputFields */ "./src/builders/inputFields.ts");





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
        localStorage.setItem('count', JSON.stringify([1]));
    }
    const container = document.createElement('div');
    container.classList.add('container');
    parentTag.append(container);
    const dialog = document.createElement('dialog');
    dialog.setAttribute('aria-label', 'Paste list');
    dialog.classList.add('popup');
    container.append(dialog);
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.classList.add('formForDialog');
    dialog.append(form);
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.setAttribute('rows', '12');
    textarea.setAttribute('cols', '64');
    textarea.setAttribute('placeholder', `
    Paste a list of new options in a CSV-like format:

title,1                 -> | title                 | 1 |
title with whitespace,2 -> | title with whitespace | 2 |
title , with , commas,3 -> | title , with , commas | 3 |
title with "quotes",4   -> | title with "quotes"   | 4 |`);
    textarea.setAttribute('name', 'table');
    form.append(textarea);
    const containerForButtons = document.createElement('div');
    containerForButtons.classList.add('containerForButtons');
    form.append(containerForButtons);
    const cancel = new _buttons__WEBPACK_IMPORTED_MODULE_2__.Buttons('button', 'Cancel', 'cancelButton');
    const confirm = new _buttons__WEBPACK_IMPORTED_MODULE_2__.Buttons('button', 'Confirm', 'confirmButton');
    const cancelBut = cancel.createButton();
    const confirmBut = confirm.createButton();
    containerForButtons.append(cancelBut);
    containerForButtons.append(confirmBut);
    form.addEventListener('keypress', function (event) {
        let key = event.key;
        if (key === 'Enter') {
            const lastSymbol = +textarea.value[textarea.value.length - 1];
            if (isNaN(lastSymbol)) {
                (0,_dialog__WEBPACK_IMPORTED_MODULE_3__.dialogWrongValue)(container);
            }
        }
        console.log(key);
    });
    confirmBut.addEventListener('click', event => {
        const lastSymbol = +textarea.value[textarea.value.length - 1];
        const dataFromTextarea = textarea.value.split('\n');
        dataFromTextarea.forEach(arrayElem => {
            var _a, _b;
            let data = arrayElem.split(/,[1-9]/);
            let dataNum = /,[1-9]/.exec(arrayElem);
            let countElem = (0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('count') || [];
            console.log(dataNum);
            if (dataNum) {
                ___WEBPACK_IMPORTED_MODULE_0__.objData[`#${countElem[countElem.length - 1] + 1}`] = (_a = dataNum[0]) === null || _a === void 0 ? void 0 : _a.replace(',', '');
                ___WEBPACK_IMPORTED_MODULE_0__.objData[`option-#${countElem[countElem.length - 1] + 1}`] = data[0];
                if (countElem.length === 0) {
                    countElem.push(1);
                }
                else {
                    countElem.push(countElem[countElem.length - 1] + 1);
                }
                localStorage.setItem('count', JSON.stringify(countElem));
                const jsonString = JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.objData);
                localStorage.setItem('dataFromInputs', jsonString);
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_4__.createInput)(container, countElem[countElem.length - 1], data[0], +((_b = dataNum[0]) === null || _b === void 0 ? void 0 : _b.replace(',', '')));
                textarea.value = '';
            }
            else if (dataNum == null) {
                (0,_dialog__WEBPACK_IMPORTED_MODULE_3__.dialogWrongValue)(container);
                event.preventDefault();
            }
        });
        if (isNaN(lastSymbol)) {
            (0,_dialog__WEBPACK_IMPORTED_MODULE_3__.dialogWrongValue)(container);
            event.preventDefault();
        }
    });
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
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_4__.createInput)(container, numOfElem[numOfElem.length - 1]);
                localStorage.setItem('count', JSON.stringify(numOfElem));
            });
        }
        if (i === 1) {
            elementOfContainer.addEventListener('click', () => {
                dialog.showModal();
            });
        }
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2c476056c9d85016e011")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.04daad9fd3e995f6b61e.hot-update.js.map