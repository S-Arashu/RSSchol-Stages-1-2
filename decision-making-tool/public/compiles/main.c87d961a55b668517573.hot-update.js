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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.ts");


function createInput(parentTag, count, valuesOpt, valuesWeight) {
    const liElem = document.createElement('li');
    liElem.classList.add('item');
    parentTag.before(liElem);
    const label = document.createElement('label');
    label.setAttribute('for', `option-#${count}`);
    label.textContent = `#${count}`;
    label.classList.add('label-item');
    liElem.append(label);
    const inputElem = document.createElement('input');
    inputElem.setAttribute('id', `option-#${count}`);
    inputElem.setAttribute('value', `${valuesOpt || ''}`);
    inputElem.setAttribute('placeholder', 'Title');
    inputElem.setAttribute('name', 'title');
    inputElem.classList.add('input-item');
    label.append(inputElem);
    const inputSecondElem = document.createElement('input');
    inputSecondElem.setAttribute('type', 'number');
    inputSecondElem.setAttribute('value', `${valuesWeight || ''}`);
    inputSecondElem.setAttribute('placeholder', 'Weight');
    inputSecondElem.setAttribute('name', 'weight');
    inputSecondElem.classList.add('input-item');
    label.append(inputSecondElem);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('button-item');
    button.textContent = 'Delete';
    label.append(button);
    button.addEventListener('click', () => {
        var _a, _b;
        let previous = button.previousElementSibling;
        if (previous instanceof HTMLInputElement) {
            let doublePrevious = previous.previousElementSibling;
            if (doublePrevious instanceof HTMLInputElement) {
                let nameOfOption = doublePrevious.value;
                let weightOfOption = previous.value;
                console.dir((_a = doublePrevious.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode);
                const parent = (_b = doublePrevious.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
                if (parent instanceof HTMLDivElement || parent instanceof HTMLElement) {
                    parent.remove();
                }
                delete ___WEBPACK_IMPORTED_MODULE_1__.objData[doublePrevious.id];
                delete ___WEBPACK_IMPORTED_MODULE_1__.objData[`#${doublePrevious.id.replace(/\D/g, '')}`];
                const countElem = (0,___WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('count');
                let deleteElem = countElem.indexOf(+doublePrevious.id.replace(/\D/g, ''));
                console.log(deleteElem);
                console.log(doublePrevious.id.replace(/\D/g, ''));
                if (deleteElem != -1) {
                    countElem.splice(deleteElem, 1);
                }
                const jsonString = JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.objData);
                localStorage.setItem('dataFromInputs', jsonString);
                localStorage.setItem('count', JSON.stringify(countElem));
                if (countElem.length === 0) {
                    localStorage.removeItem('count');
                }
            }
        }
    });
    inputElem.oninput = saveData;
    inputSecondElem.oninput = saveData;
    function saveData(event) {
        var _a, _b;
        const current = event.target;
        if (current instanceof HTMLInputElement) {
            if (current.id) {
                ___WEBPACK_IMPORTED_MODULE_1__.objData[current.id] = current.value;
                console.log(___WEBPACK_IMPORTED_MODULE_1__.objData);
            }
            else if (!current.id &&
                current.previousSibling &&
                ((_a = current.previousSibling.previousSibling) === null || _a === void 0 ? void 0 : _a.nodeValue)) {
                ___WEBPACK_IMPORTED_MODULE_1__.objData[(_b = current.previousSibling.previousSibling) === null || _b === void 0 ? void 0 : _b.nodeValue] = current.value;
                console.log(___WEBPACK_IMPORTED_MODULE_1__.objData);
            }
        }
        const jsonString = JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.objData);
        localStorage.setItem('dataFromInputs', jsonString);
    }
    return liElem;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("035d117b9579b34e2967")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c87d961a55b668517573.hot-update.js.map