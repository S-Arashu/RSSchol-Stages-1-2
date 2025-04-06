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
/* harmony export */   objData: () => (/* binding */ objData),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");
/* harmony import */ var _builders_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builders/app */ "./src/builders/app.ts");
/* harmony import */ var _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders/mainBlock */ "./src/builders/mainBlock.ts");
/* harmony import */ var _builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builders/loadOptions */ "./src/builders/loadOptions.ts");
/* harmony import */ var _builders_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builders/wheel */ "./src/builders/wheel.ts");
/* harmony import */ var _builders_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./builders/dialog */ "./src/builders/dialog.ts");
/* harmony import */ var _builders_pasteList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./builders/pasteList */ "./src/builders/pasteList.ts");







const retrievedObject = getFromLocalStorage('dataFromInputs');
const countElem = getFromLocalStorage('count');
const objData = retrievedObject || {};
const title = (0,_builders_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.append(title);
(0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
function getFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    return jsonString ? JSON.parse(jsonString) : null;
}
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
        (0,_builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__.loadOptions)(objData);
    }
    if (localStorage.page === '0') {
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.textContent = '';
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.container.textContent = '';
        location.hash = 'main';
        document.body.append(title);
        (0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
        title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
        (0,_builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__.loadOptions)(objData);
    }
    if (localStorage.page === '1') {
        location.hash = 'decision-maker';
        (0,_builders_wheel__WEBPACK_IMPORTED_MODULE_4__.createChoosePage)();
    }
});
function locationHashChanged() {
    if (location.hash === '#main') {
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.textContent = '';
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.container.textContent = '';
        localStorage.page = '0';
        document.body.append(title);
        (0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
        title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
        (0,_builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__.loadOptions)(objData);
    }
    if (location.hash === '#decision-maker') {
        if (!localStorage.getItem('dataFromInputs') ||
            Object.keys(getFromLocalStorage('dataFromInputs')).length < 4) {
            location.hash = 'main';
            (0,_builders_pasteList__WEBPACK_IMPORTED_MODULE_6__.createPasteList)();
            (0,_builders_dialog__WEBPACK_IMPORTED_MODULE_5__.dialogWrongValue)(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
        }
        else {
            localStorage.page = '1';
            (0,_builders_wheel__WEBPACK_IMPORTED_MODULE_4__.createChoosePage)();
        }
    }
}
window.onhashchange = locationHashChanged;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d76a5424ae3d91e0eaa3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8461093a79c5fa07ada9.hot-update.js.map