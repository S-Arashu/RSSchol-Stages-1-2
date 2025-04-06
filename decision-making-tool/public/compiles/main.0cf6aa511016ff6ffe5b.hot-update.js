"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/pasteList.ts":
/*!***********************************!*\
  !*** ./src/builders/pasteList.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPasteList: () => (/* binding */ createPasteList),
/* harmony export */   dialogElem: () => (/* binding */ dialogElem)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/builders/buttons.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog */ "./src/builders/dialog.ts");
/* harmony import */ var _inputFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputFields */ "./src/builders/inputFields.ts");
/* harmony import */ var _mainBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainBlock */ "./src/builders/mainBlock.ts");





let dialogElem;
function createPasteList() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('aria-label', 'Paste list');
    dialog.classList.add('popup');
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.container.append(dialog);
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
    const cancel = new _buttons__WEBPACK_IMPORTED_MODULE_1__.Buttons('button', 'Cancel', 'cancelButton');
    const confirm = new _buttons__WEBPACK_IMPORTED_MODULE_1__.Buttons('button', 'Confirm', 'confirmButton');
    const cancelBut = cancel.createButton();
    const confirmBut = confirm.createButton();
    containerForButtons.append(cancelBut);
    containerForButtons.append(confirmBut);
    dialogElem = dialog;
    cancelBut.addEventListener('click', () => {
        dialog.remove();
        location.hash = 'main';
    });
    form.addEventListener('keypress', function (event) {
        let key = event.key;
        if (key === 'Enter') {
            const lastSymbol = +textarea.value[textarea.value.length - 1];
            if (isNaN(lastSymbol)) {
                (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.dialogWrongValue)(_mainBlock__WEBPACK_IMPORTED_MODULE_4__.container);
            }
        }
    });
    const handleModalClick = (event) => {
        const modalRect = dialog.getBoundingClientRect();
        if (event.clientX < modalRect.left ||
            event.clientX > modalRect.right ||
            event.clientY < modalRect.top ||
            event.clientY > modalRect.bottom) {
            dialog.remove();
            location.hash = 'main';
        }
    };
    dialog.addEventListener('click', handleModalClick);
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
                (0,_inputFields__WEBPACK_IMPORTED_MODULE_3__.createInput)(_mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions, countElem[countElem.length - 1], data[0], +((_b = dataNum[0]) === null || _b === void 0 ? void 0 : _b.replace(',', '')));
                localStorage.setItem('count', JSON.stringify(countElem));
                const jsonString = JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.objData);
                localStorage.setItem('dataFromInputs', jsonString);
                textarea.value = '';
            }
            else if (dataNum == null) {
                (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.dialogWrongValue)(_mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions);
                event.preventDefault();
            }
        });
        if (isNaN(lastSymbol)) {
            (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.dialogWrongValue)(_mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions);
            event.preventDefault();
        }
        else {
            dialog.remove();
            location.hash = 'main';
        }
    });
    dialog.addEventListener('cancel', event => {
        dialog.remove();
        document.body.focus();
        location.hash = 'main';
        console.log('Remove dialog');
    });
    dialog.showModal();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e66c0b7c0173592b032a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0cf6aa511016ff6ffe5b.hot-update.js.map