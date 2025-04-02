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
/* harmony export */   create: () => (/* binding */ create)
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
    const dialogWrapper = document.createElement('div');
    dialogWrapper.classList.add('dialog-wrapper');
    dialog.append(dialogWrapper);
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.classList.add('formForDialog');
    dialogWrapper.append(form);
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
    cancelBut.addEventListener('click', () => {
        dialog.remove();
    });
    form.addEventListener('keypress', function (event) {
        let key = event.key;
        if (key === 'Enter') {
            const lastSymbol = +textarea.value[textarea.value.length - 1];
            if (isNaN(lastSymbol)) {
                (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.dialogWrongValue)(container);
            }
        }
        if (key === 'Escape') {
            dialog.remove();
        }
        console.log(key);
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
        dialog.remove();
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
                container.append(dialog);
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
            elementOfContainer.addEventListener('click', () => {
                (0,_downloadData__WEBPACK_IMPORTED_MODULE_7__.downloadData)(elementOfContainer);
            });
        }
        if (i === 5) {
            elementOfContainer.addEventListener('click', () => {
                if (!localStorage.getItem('dataFromInputs') ||
                    Object.keys((0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('dataFromInputs')).length < 4) {
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
/******/ 	__webpack_require__.h = () => ("f6cf70b204272e377c78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d8a36d479a3d7eac6ea1.hot-update.js.map