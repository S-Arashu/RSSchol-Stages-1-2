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
/******/ 	__webpack_require__.h = () => ("6076eb56994f9ad22fe2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.824630948c16b80736bc.hot-update.js.map