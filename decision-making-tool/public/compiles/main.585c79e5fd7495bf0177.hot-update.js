"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containerForOptions: () => (/* binding */ containerForOptions),
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
    for (let i = count.length - 1; i >= 0; i -= 1) {
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
        (0,_builders_inputFields__WEBPACK_IMPORTED_MODULE_3__.createInput)(containerForOptions, count[i], valOpt, valW);
    }
});
const title = (0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.append(title);
(0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
const containerForOptions = document.createElement('div');
containerForOptions.classList.add('container');
title.append(containerForOptions);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("08270d0b3d3444cdf051")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.585c79e5fd7495bf0177.hot-update.js.map