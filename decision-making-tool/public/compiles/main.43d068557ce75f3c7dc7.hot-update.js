"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SOUNDOFF: () => (/* binding */ SOUNDOFF),
/* harmony export */   SOUNDON: () => (/* binding */ SOUNDON),
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   isMusic: () => (/* binding */ isMusic),
/* harmony export */   objData: () => (/* binding */ objData),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");
/* harmony import */ var _builders_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builders/app */ "./src/builders/app.ts");
/* harmony import */ var _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builders/mainBlock */ "./src/builders/mainBlock.ts");
/* harmony import */ var _builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builders/loadOptions */ "./src/builders/loadOptions.ts");
/* harmony import */ var _builders_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builders/wheel */ "./src/builders/wheel.ts");





let isMusic = Boolean(Number(localStorage.sound));
const SOUNDON = 'Sound ON';
const SOUNDOFF = 'Sound OFF';
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
        console.log('page reload with no data');
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
        console.log('page reload with main');
    }
    if (localStorage.page === '1') {
        location.hash = 'decision-maker';
        (0,_builders_wheel__WEBPACK_IMPORTED_MODULE_4__.createChoosePage)();
        console.log('page reload with decision');
    }
    if (!localStorage.sound) {
        isMusic = true;
        localStorage.sound = '1';
        _builders_wheel__WEBPACK_IMPORTED_MODULE_4__.soundButton.textContent = SOUNDON;
        console.log('No sound');
    }
    if (localStorage.sound === '1') {
        isMusic = true;
        _builders_wheel__WEBPACK_IMPORTED_MODULE_4__.soundButton.textContent = SOUNDON;
        console.log('Sound on');
    }
    if (localStorage.sound === '0') {
        isMusic = false;
        _builders_wheel__WEBPACK_IMPORTED_MODULE_4__.soundButton.textContent = SOUNDOFF;
        console.log('Sound off');
    }
});
function locationHashChanged() {
    if (location.hash === '#main') {
        const dataObj = getFromLocalStorage('dataFromInputs');
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.textContent = '';
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.container.textContent = '';
        localStorage.page = '0';
        document.body.append(title);
        (0,_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.create)(title);
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions.classList.add('containerForOptions');
        title.append(_builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
        (0,_builders_loadOptions__WEBPACK_IMPORTED_MODULE_3__.loadOptions)(dataObj);
        console.log('hash changed to main');
    }
    if (location.hash === '#decision-maker') {
        _builders_mainBlock__WEBPACK_IMPORTED_MODULE_2__.startBut.click();
        console.log('hash changed to decision');
    }
}
window.onhashchange = locationHashChanged;
window.addEventListener('keydown', event => {
    console.log(event.target);
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("981cb5c43668f768ab66")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.43d068557ce75f3c7dc7.hot-update.js.map