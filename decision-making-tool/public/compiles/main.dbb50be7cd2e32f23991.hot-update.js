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
    source.setAttribute('src', src);
    source.setAttribute('type', 'audio/mp3');
    audio.append(source);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf79404b885299bc2e67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.dbb50be7cd2e32f23991.hot-update.js.map