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
    const div = document.createElement('div');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(div);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'selectedOption');
    input.setAttribute('readonly', '');
    div.append(input);
    const button = document.createElement('button');
    button.setAttribute('id', 'startButton');
    button.textContent = 'Start';
    div.append(button);
    const ctx = canvas.getContext('2d');
    let options = (0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('dataFromInputs');
    let angle = 0;
    let spinning = false;
    function drawWheel() {
        const totalOptions = Object.keys(options).length;
        let startAngle = 0;
        let name;
        let size;
        if (ctx) {
            for (const key in options) {
                if (key[0] === 'o') {
                    name = options[key];
                }
                else if (key[0] === '#') {
                    size = options[key];
                }
                const sliceAngle = (parseInt(size) / totalOptions) * (Math.PI * 2);
                ctx.beginPath();
                ctx.moveTo(200, 200);
                ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
                ctx.fillStyle = 'hsl(' + Math.random() * 360 + ', 70%, 50%)';
                ctx.fill();
                ctx.save();
                ctx.translate(200 + Math.cos(startAngle + sliceAngle / 2) * 100, 200 + Math.sin(startAngle + sliceAngle / 2) * 100);
                ctx.rotate(startAngle + sliceAngle / 2);
                ctx.fillStyle = 'white';
                ctx.fillText(name, -ctx.measureText(name).width / 2, 0);
                ctx.restore();
                startAngle += sliceAngle;
            }
        }
    }
    function spinWheel() {
        if (spinning)
            return;
        spinning = true;
        let spinDuration = 3000;
        let finalAngle = Math.random() * (Math.PI * 2);
        const startTime = performance.now();
        function rotate() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            angle = (elapsed / spinDuration) * (Math.PI * 2) + 2 * Math.PI * 3;
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawWheel();
                ctx.save();
                ctx.translate(200, 200);
                ctx.rotate(angle);
                ctx.translate(-200, -200);
                ctx.restore();
            }
            if (elapsed < spinDuration) {
                requestAnimationFrame(rotate);
            }
            else {
                stopWheel();
            }
        }
        rotate();
    }
    function stopWheel() {
        const index = Math.floor((angle % (Math.PI * 2)) / ((Math.PI * 2) / Object.keys(options).length));
        input.value = options[index + 1].name;
        spinning = false;
    }
    button.addEventListener('click', spinWheel);
    drawWheel();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("09c26e27c61d22dde80e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9f25d6174c593ddb8522.hot-update.js.map