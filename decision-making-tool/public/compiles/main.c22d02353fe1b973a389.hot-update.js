"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

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
/* harmony import */ var _builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builders/loadOptions */ "./src/builders/loadOptions.ts");
/* harmony import */ var _builders_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builders/wheel */ "./src/builders/wheel.ts");





const title = (0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.append(title);
(0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
function getFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    return jsonString ? JSON.parse(jsonString) : null;
}
const retrievedObject = getFromLocalStorage('dataFromInputs');
const countElem = getFromLocalStorage('count');
const objData = retrievedObject || {};
window.addEventListener('load', event => {
    if (!localStorage.page) {
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.textContent = '';
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.container.textContent = '';
        localStorage.page = '0';
        location.hash = 'main';
        document.body.append(title);
        (0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
        title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
    }
    if (localStorage.page === '0') {
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.textContent = '';
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.container.textContent = '';
        location.hash = 'main';
        document.body.append(title);
        (0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
        title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
    }
    if (localStorage.page === '1') {
        location.hash = 'decision-maker';
        (0,_builders_wheel__WEBPACK_IMPORTED_MODULE_4__.createChoosePage)();
    }
    (0,_builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__.loadOptions)(objData);
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc9973e50de6b278cd8c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c22d02353fe1b973a389.hot-update.js.map