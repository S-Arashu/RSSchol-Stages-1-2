"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/sounds/createAudio.ts":
/*!***********************************!*\
  !*** ./src/sounds/createAudio.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAudio: () => (/* binding */ createAudio)
/* harmony export */ });
function createAudio(id) {
    const audio = document.createElement('audio');
    audio.setAttribute('id', id);
    audio.setAttribute('autoplay', 'true');
    document.body.append(audio);
    const source = document.createElement('source');
    source.setAttribute('src', './sounds_win.mp3');
    source.setAttribute('type', 'audio/mp3');
    audio.append(source);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3dead4a49de63d121156")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6a1e8b735f1bcba2593f.hot-update.js.map