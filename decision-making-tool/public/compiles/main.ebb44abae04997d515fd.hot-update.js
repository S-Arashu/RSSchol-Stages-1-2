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
/* harmony export */   audioWrong: () => (/* binding */ audioWrong),
/* harmony export */   createAudio: () => (/* binding */ createAudio),
/* harmony export */   createAudioWrong: () => (/* binding */ createAudioWrong)
/* harmony export */ });
const audio = document.createElement('audio');
function createAudio(id) {
    audio.setAttribute('id', id);
    document.body.append(audio);
    const source = document.createElement('source');
    source.setAttribute('src', '../sounds/sounds_win.mp3');
    source.setAttribute('type', 'audio/mp3');
    audio.append(source);
}
const audioWrong = document.createElement('audio');
function createAudioWrong(id) {
    audioWrong.setAttribute('id', id);
    document.body.append(audioWrong);
    const source = document.createElement('source');
    source.setAttribute('src', '../sounds/mouse-squeak.mp3');
    source.setAttribute('type', 'audio/mp3');
    audioWrong.append(source);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee71773ac8429e6937ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ebb44abae04997d515fd.hot-update.js.map