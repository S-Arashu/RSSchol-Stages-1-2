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
    const sizes = sections.map(section => parseInt(options[section.replace('option-#', '#')]));
    ;
    let startAngle = 0;
    const total = sizes.reduce((a, b) => a + b, 0);
    console.log(sections, sizes, total);
    drawWheel();
    function drawWheel() {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            startAngle = 0;
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
        const rotations = Math.floor(Math.random() * 5) + 5;
        const totalRotation = rotations * 2 * Math.PI + Math.random() * 2 * Math.PI;
        let startTime = null;
        function animate(time) {
            if (!startTime)
                startTime = time;
            const elapsed = time - startTime;
            if (ctx) {
                const progress = Math.min(elapsed / spinTime, 1);
                const rotationAngle = totalRotation * easeOutCubic(progress);
                ctx.setTransform(1, 0, 0, 1, 150, 150);
                ctx.rotate(rotationAngle);
                ctx.clearRect(-150, -150, canvas.width, canvas.height);
                drawWheel();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
                else {
                    const selectedAngle = rotationAngle % (2 * Math.PI);
                    let cumulativeSize = 0;
                    for (let i = 0; i < sizes.length; i++) {
                        cumulativeSize += (sizes[i] / total) * 2 * Math.PI;
                        if (selectedAngle < cumulativeSize) {
                            selectedOption.innerText = `Selected: ${options[sections[i]]}`;
                            break;
                        }
                    }
                }
            }
        }
        requestAnimationFrame(animate);
    }
    function easeOutCubic(t) {
        return --t * t * t + 1;
    }
    startButton.addEventListener('click', spinWheel);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2bba7381bdf4455ba38b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0dd4690c4b6f68b2389f.hot-update.js.map