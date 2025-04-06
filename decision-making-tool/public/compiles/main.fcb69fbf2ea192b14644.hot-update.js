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
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.container.textContent = '';
    const pointer = document.createElement('div');
    pointer.setAttribute('id', 'pointer');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(pointer);
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'wheel');
    canvas.setAttribute('width', '400');
    canvas.setAttribute('height', '400');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(canvas);
    const startButton = document.createElement('button');
    startButton.setAttribute('id', 'start');
    startButton.textContent = 'Start';
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(startButton);
    const output = document.createElement('div');
    output.setAttribute('id', 'output');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(output);
    let top = String(canvas.offsetTop);
    pointer.style.top = top;
    let options = (0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('dataFromInputs');
    const sectionCount = Object.keys(options).filter(key => key.startsWith('option-')).length;
    const ctx = canvas.getContext('2d');
    const drawWheel = () => {
        const angle = (2 * Math.PI) / sectionCount;
        let startAngle = 0;
        if (ctx) {
            for (let i = 0; i < sectionCount; i++) {
                ctx.beginPath();
                ctx.moveTo(200, 200);
                ctx.arc(200, 200, 150, startAngle, startAngle + angle);
                ctx.fillStyle = 'lightblue';
                ctx.fill();
                ctx.stroke();
                ctx.save();
                ctx.translate(200 + Math.cos(startAngle + angle / 2) * 100, 200 + Math.sin(startAngle + angle / 2) * 100);
                ctx.rotate(startAngle + angle / 2);
                ctx.fillStyle = 'black';
                ctx.fillText(options[`option-#${i + 1}`] || `Section ${i + 1}`, -25, 0);
                ctx.restore();
                startAngle += angle;
            }
        }
    };
    drawWheel();
    startButton.addEventListener('click', () => {
        const totalDuration = 3000;
        const spinCount = 5;
        let start = null;
        let degrees = 0;
        function spinWheel(timestamp) {
            if (!start)
                start = timestamp;
            if (timestamp && start && ctx) {
                const elapsed = timestamp - start;
                if (elapsed < totalDuration) {
                    degrees += spinCount * 360 + (elapsed / totalDuration) * 360;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.save();
                    ctx.translate(200, 200);
                    ctx.rotate((degrees * Math.PI) / 180);
                    ctx.translate(-200, -200);
                    drawWheel();
                    ctx.restore();
                    requestAnimationFrame(spinWheel);
                }
                else {
                    const selectedIndex = Math.floor(((degrees % 360) / 360) * sectionCount);
                    output.innerText = `Selected: ${options[`option-${selectedIndex + 1}`]}`;
                }
            }
        }
        requestAnimationFrame(spinWheel);
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1818eea7c10f3ffd9ac6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fcb69fbf2ea192b14644.hot-update.js.map