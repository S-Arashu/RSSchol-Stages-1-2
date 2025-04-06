"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/wheel.ts":
/*!*******************************!*\
  !*** ./src/builders/wheel.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChoosePage: () => (/* binding */ createChoosePage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _mainBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainBlock */ "./src/builders/mainBlock.ts");


function createChoosePage() {
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.textContent = '';
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'wheel');
    canvas.setAttribute('width', '400');
    canvas.setAttribute('height', '400');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(canvas);
    const selectedOption = document.createElement('div');
    selectedOption.setAttribute('id', 'selectedOption');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(selectedOption);
    const startButton = document.createElement('button');
    startButton.setAttribute('id', 'startButton');
    startButton.textContent = 'Start';
    selectedOption.append(startButton);
    const ctx = canvas.getContext('2d');
    const options = (0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('dataFromInputs');
    const sections = Object.keys(options).filter(key => key.startsWith('option-'));
    const sizes = sections.map(section => parseInt(options[section.replace('option-', '#')]));
    function drawWheel() {
        const total = sizes.reduce((a, b) => a + b, 0);
        let startAngle = 0;
        if (ctx) {
            sections.forEach((section, index) => {
                const size = (sizes[index] / total) * 2 * Math.PI;
                ctx.beginPath();
                ctx.moveTo(150, 150);
                ctx.arc(150, 150, 100, startAngle, startAngle + size);
                ctx.fillStyle = getRandomColor();
                ctx.fill();
                ctx.stroke();
                startAngle += size;
            });
        }
    }
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function spinWheel() {
        const spinTime = 3000;
        const randomSection = Math.floor(Math.random() * sections.length);
        const selectedAngle = (sizes.slice(0, randomSection).reduce((a, b) => a + b, 0) /
            sizes.reduce((a, b) => a + b, 0)) *
            2 *
            Math.PI;
        selectedOption.innerText = `Selected: ${options[sections[randomSection]]}`;
    }
    drawWheel();
    startButton.addEventListener('click', spinWheel);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68c934be45fde921a6c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.09c26e27c61d22dde80e.hot-update.js.map