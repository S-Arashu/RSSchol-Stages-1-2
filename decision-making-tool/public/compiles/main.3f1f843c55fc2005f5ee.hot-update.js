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
    source.setAttribute('src', '../sounds/sounds_win.mp3');
    source.setAttribute('type', 'audio/mp3');
    audio.append(source);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c29363a2a688ce568c54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3f1f843c55fc2005f5ee.hot-update.js.map