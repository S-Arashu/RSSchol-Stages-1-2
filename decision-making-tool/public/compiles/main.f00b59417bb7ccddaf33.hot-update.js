"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/buttons.ts":
/*!*********************************!*\
  !*** ./src/builders/buttons.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Buttons: () => (/* binding */ Buttons)
/* harmony export */ });
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/styles.css */ "./public/styles.css");

class Buttons {
    constructor(tag, text, className) {
        this.tag = tag;
        this.text = text;
        this.className = className;
    }
    createButton() {
        const button = document.createElement(this.tag);
        button.textContent = this.text;
        button.classList.add(this.className);
        return button;
    }
}


/***/ }),

/***/ "./src/builders/clearList.ts":
/*!***********************************!*\
  !*** ./src/builders/clearList.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearList: () => (/* binding */ clearList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function clearList(elemForClear) {
    localStorage.setItem('dataFromInputs', JSON.stringify({}));
    localStorage.setItem('count', JSON.stringify([]));
    Object.keys(___WEBPACK_IMPORTED_MODULE_0__.objData).forEach(key => delete ___WEBPACK_IMPORTED_MODULE_0__.objData[key]);
    elemForClear.textContent = '';
}


/***/ }),

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
    dialog.classList.add('popup');
    dialog.textContent = 'Please, enter correct data';
    parent.append(dialog);
    dialog.showModal();
}


/***/ }),

/***/ "./src/builders/mainBlock.ts":
/*!***********************************!*\
  !*** ./src/builders/mainBlock.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   containerForOptions: () => (/* binding */ containerForOptions),
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/styles.css */ "./public/styles.css");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/builders/buttons.ts");
/* harmony import */ var _clearList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearList */ "./src/builders/clearList.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/builders/dialog.ts");
/* harmony import */ var _inputFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputFields */ "./src/builders/inputFields.ts");
/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saveData */ "./src/builders/saveData.ts");







const NAMES_OF_BUTTONS = [
    'Add Option',
    'Paste list',
    'Clear list',
    'Save list to file',
    'Load list from file',
    'Start',
];
const NUM_OF_BUTTONS = 6;
const container = document.createElement('div');
const containerForOptions = document.createElement('div');
function create(parentTag) {
    if (!localStorage.count) {
        localStorage.setItem('count', JSON.stringify([1]));
    }
    container.classList.add('container');
    parentTag.after(containerForOptions);
    parentTag.after(container);
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
                (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.dialogWrongValue)(container);
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
                if (countElem.length === 0) {
                    countElem.push(1);
                }
                else {
                    countElem.push(countElem[countElem.length - 1] + 1);
                }
                ___WEBPACK_IMPORTED_MODULE_0__.objData[`#${countElem[countElem.length - 1]}`] = (_a = dataNum[0]) === null || _a === void 0 ? void 0 : _a.replace(',', '');
                ___WEBPACK_IMPORTED_MODULE_0__.objData[`option-#${countElem[countElem.length - 1]}`] = data[0];
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_5__.createInput)(containerForOptions, countElem[countElem.length - 1], data[0], +((_b = dataNum[0]) === null || _b === void 0 ? void 0 : _b.replace(',', '')));
                localStorage.setItem('count', JSON.stringify(countElem));
                const jsonString = JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.objData);
                localStorage.setItem('dataFromInputs', jsonString);
                textarea.value = '';
            }
            else if (dataNum == null) {
                (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.dialogWrongValue)(containerForOptions);
                event.preventDefault();
            }
        });
        if (isNaN(lastSymbol)) {
            (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.dialogWrongValue)(containerForOptions);
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
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_5__.createInput)(containerForOptions, numOfElem[numOfElem.length - 1]);
                localStorage.setItem('count', JSON.stringify(numOfElem));
            });
        }
        if (i === 1) {
            elementOfContainer.addEventListener('click', () => {
                dialog.showModal();
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
            elementOfContainer.addEventListener('change', function (event) {
                elementOfContainer.setAttribute('id', 'loadButton');
                const fileInput = document.createElement('input');
                fileInput.setAttribute('type', 'file');
                fileInput.setAttribute('id', 'fileInput');
                fileInput.setAttribute('accept', '.json');
                fileInput.setAttribute('style', 'display: none;');
            });
        }
    }
}


/***/ }),

/***/ "./src/builders/saveData.ts":
/*!**********************************!*\
  !*** ./src/builders/saveData.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveToFile: () => (/* binding */ saveToFile)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function saveToFile() {
    const jsonString = JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.objData, null, 2);
    function downloadJSON(jsonString, filename) {
        const blob = new Blob([jsonString], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    downloadJSON(jsonString, 'myObject.json');
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   objData: () => (/* binding */ objData)
/* harmony export */ });
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");
/* harmony import */ var _builders_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builders/app */ "./src/builders/app.ts");
/* harmony import */ var _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders/mainBlock */ "./src/builders/mainBlock.ts");
/* harmony import */ var _builders_inputFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builders/inputFields */ "./src/builders/inputFields.ts");




function getFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    return jsonString ? JSON.parse(jsonString) : null;
}
const retrievedObject = getFromLocalStorage('dataFromInputs');
const countElem = getFromLocalStorage('count');
const objData = retrievedObject || {};
window.addEventListener('load', event => {
    if (!localStorage.page) {
        localStorage.page = '0';
        location.hash = 'main';
    }
    if (localStorage.page === '0') {
        location.hash = 'main';
    }
    if (localStorage.page === '1') {
        location.hash = 'decision-maker';
    }
    const count = countElem || [1];
    let valOpt;
    let valW;
    for (let i = 0; i <= count.length - 1; i += 1) {
        valOpt = '';
        valW = 0;
        for (let key of Object.keys(objData)) {
            if (count[i] === +key.replace(/\D/g, '') && key[0] === 'o') {
                valOpt = String(objData[key]);
                console.log('this' + key);
            }
            else if (count[i] === +key.replace(/\D/g, '') && key[0] === '#' && objData[key]) {
                valW = +objData[key];
                console.log('there' + key[key.length - 1]);
            }
            else {
                continue;
            }
        }
        (0,_builders_inputFields__WEBPACK_IMPORTED_MODULE_3__.createInput)(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions, count[i], valOpt, valW);
    }
});
const title = (0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.append(title);
(0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fdf7e5f9822b5c49a332")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.f00b59417bb7ccddaf33.hot-update.js.map