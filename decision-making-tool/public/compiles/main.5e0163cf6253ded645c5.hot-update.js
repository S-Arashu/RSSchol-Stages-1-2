"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/createAudio.ts":
/*!*************************************!*\
  !*** ./src/builders/createAudio.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAudio: () => (/* binding */ createAudio)
/* harmony export */ });
function createAudio(id, src) {
    const audio = document.createElement('audio');
    audio.setAttribute('id', id);
    audio.setAttribute('autoplay', 'true');
    document.body.append(audio);
    const source = document.createElement('source');
    source.setAttribute('src', src);
    source.setAttribute('type', 'audio/mp3');
    audio.append(source);
    console.log(`Audio source path: ${src}`);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c101af30e0f4db70ab7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5e0163cf6253ded645c5.hot-update.js.map