"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/createAudio.ts":
/*!*************************************!*\
  !*** ./src/builders/createAudio.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audio: () => (/* binding */ audio),
/* harmony export */   createAudio: () => (/* binding */ createAudio)
/* harmony export */ });
const audio = document.createElement('audio');
function createAudio(id, src) {
    audio.setAttribute('id', id);
    audio.setAttribute('autoplay', 'true');
    document.body.append(audio);
    const source = document.createElement('source');
    source.setAttribute('src', '../sounds/sounds_win.mp3');
    source.setAttribute('type', 'audio/mp3');
    audio.append(source);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("16e73268a7648b560f55")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9ecaa73a0fb3618e3c31.hot-update.js.map