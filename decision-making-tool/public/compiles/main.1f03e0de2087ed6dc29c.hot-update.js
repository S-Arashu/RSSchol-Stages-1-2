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
    parentTag.prepend(liElem);
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
    label.append(inputSecondElem);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('button-item');
    button.textContent = 'Delete';
    label.append(button);
    button.addEventListener('click', () => {
        let previous = button.previousElementSibling;
        if (previous instanceof HTMLInputElement) {
            let doublePrevious = previous.previousElementSibling;
            if (doublePrevious instanceof HTMLInputElement) {
                let nameOfOption = doublePrevious.value;
                let weightOfOption = previous.value;
            }
        }
    });
    const objData = {};
    inputElem.oninput = saveData;
    inputSecondElem.oninput = saveData;
    function saveData(event) {
        const current = event.target;
        if (current instanceof HTMLInputElement) {
            if (current.id) {
                objData[current.id] = current.value;
                console.log(objData);
            }
            else if (!current.id && current.previousSibling) {
                console.log(current.previousSibling.previousSibling);
            }
        }
    }
    return liElem;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("87db4cb7bd1f1fcf2db5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1f03e0de2087ed6dc29c.hot-update.js.map