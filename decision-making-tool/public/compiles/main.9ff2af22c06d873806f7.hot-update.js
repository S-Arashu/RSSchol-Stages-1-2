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
    button.addEventListener('click', event => {
        let target = event.target;
        console.dir(target);
        console.log(target.previousElementSibling.value);
    });
    return liElem;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("299d884ea2430ed3d9f1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9ff2af22c06d873806f7.hot-update.js.map