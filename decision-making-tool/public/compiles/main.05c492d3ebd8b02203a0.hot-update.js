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
    const pointer = document.createElement('div');
    pointer.setAttribute('id', 'pointer');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(pointer);
    const startButton = document.createElement('button');
    startButton.setAttribute('id', 'start');
    startButton.textContent = 'Start';
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(startButton);
    const output = document.createElement('div');
    output.setAttribute('id', 'selected-option');
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(output);
    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'homeButton');
    homeButton.textContent = 'Home';
    _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.append(homeButton);
    homeButton.addEventListener('click', () => {
        _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.textContent = '';
        _mainBlock__WEBPACK_IMPORTED_MODULE_1__.container.textContent = '';
        localStorage.page = '0';
        location.hash = 'main';
        document.body.append(___WEBPACK_IMPORTED_MODULE_0__.title);
        (0,_mainBlock__WEBPACK_IMPORTED_MODULE_1__.create)(___WEBPACK_IMPORTED_MODULE_0__.title);
        _mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions.classList.add('containerForOptions');
        ___WEBPACK_IMPORTED_MODULE_0__.title.append(_mainBlock__WEBPACK_IMPORTED_MODULE_1__.containerForOptions);
    });
    let top = String(canvas.offsetTop + pointer.offsetHeight / 2);
    let left = String(canvas.offsetLeft + canvas.offsetWidth / 2);
    pointer.style.top = top + 'px';
    pointer.style.left = left + 'px';
    window.addEventListener('resize', () => {
        top = String(canvas.offsetTop + pointer.offsetHeight / 2);
        left = String(canvas.offsetLeft + canvas.offsetWidth / 2);
        pointer.style.top = top + 'px';
        pointer.style.left = left + 'px';
    });
    let options = (0,___WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('dataFromInputs');
    const ctx = canvas.getContext('2d');
    const sections = Object.keys(options).filter(key => key.startsWith('#'));
    const sectionValues = sections.map(key => parseInt(options[key], 10));
    const sectionNames = sections.map(key => options[`option-${key}`]);
    const total = sectionValues.reduce((sum, val) => sum + val, 0);
    const angles = sectionValues.map(value => (value / total) * 2 * Math.PI);
    let startAngle = 0;
    function drawWheel() {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(centerX, centerY) * 0.9;
            sections.forEach((section, index) => {
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, startAngle, startAngle + angles[index]);
                ctx.fillStyle = 'orange';
                ctx.fill();
                ctx.stroke();
                const midAngle = startAngle + angles[index] / 2;
                const textX = centerX + Math.cos(midAngle) * (radius / 2);
                const textY = centerY + Math.sin(midAngle) * (radius / 2);
                ctx.fillStyle = 'black';
                ctx.fillText(sectionNames[index], textX, textY);
                startAngle += angles[index];
            });
        }
    }
    function spinWheel(duration) {
        let start = null;
        const totalDegree = Math.random() * 360 + 720;
        const spinDuration = duration * 1000;
        function animate(timestamp) {
            if (!start)
                start = timestamp;
            if (timestamp && start) {
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / spinDuration, 1);
                const easeOutQuad = progress * (2 - progress);
                const angle = totalDegree * easeOutQuad;
                startAngle = angle * (Math.PI / 180);
                drawWheel();
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
        }
        requestAnimationFrame(animate);
    }
    startButton.addEventListener('click', () => {
        spinWheel(3);
    });
    drawWheel();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6fb03b598324de89c2b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.05c492d3ebd8b02203a0.hot-update.js.map