"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/wheel.ts":
/*!*******************************!*\
  !*** ./src/builders/wheel.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChoosePage: () => (/* binding */ createChoosePage),
/* harmony export */   soundButton: () => (/* binding */ soundButton)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _createAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAudio */ "./src/builders/createAudio.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog */ "./src/builders/dialog.ts");
/* harmony import */ var _loadOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadOptions */ "./src/builders/loadOptions.ts");
/* harmony import */ var _mainBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainBlock */ "./src/builders/mainBlock.ts");





const soundButton = document.createElement('button');
function createChoosePage() {
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.textContent = '';
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.container.textContent = '';
    let isSound = Boolean(Number(localStorage.sound));
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'wheel');
    canvas.setAttribute('width', '400');
    canvas.setAttribute('height', '400');
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.append(canvas);
    const pointer = document.createElement('div');
    pointer.setAttribute('id', 'pointer');
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.append(pointer);
    const output = document.createElement('div');
    output.setAttribute('id', 'selected-option');
    output.textContent = 'Click "Start" to fun!';
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.append(output);
    const startButton = document.createElement('button');
    startButton.setAttribute('id', 'start');
    startButton.textContent = 'Start';
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.append(startButton);
    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'homeButton');
    homeButton.textContent = 'Home';
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.append(homeButton);
    soundButton.setAttribute('id', 'soundButton');
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.append(soundButton);
    const containerForDuration = document.createElement('div');
    containerForDuration.classList.add('container');
    containerForDuration.classList.add('containerForDuration');
    _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.append(containerForDuration);
    const timeIcon = document.createElement('p');
    timeIcon.classList.add('clock-icon');
    timeIcon.textContent = '⏰';
    containerForDuration.append(timeIcon);
    const timeField = document.createElement('input');
    timeField.classList.add('duration-input');
    timeField.setAttribute('type', 'number');
    timeField.setAttribute('placeholder', 'Duration in seconds');
    timeField.setAttribute('value', '5');
    timeField.setAttribute('min', '5');
    timeField.setAttribute('max', '30');
    timeField.setAttribute('title', 'Please enter a duration between 5 and 30 seconds');
    containerForDuration.append(timeField);
    soundButton.addEventListener('click', () => {
        isSound = !isSound;
        if (!isSound) {
            localStorage.sound = '0';
            soundButton.textContent = ___WEBPACK_IMPORTED_MODULE_0__.SOUNDOFF;
        }
        if (isSound) {
            localStorage.sound = '1';
            soundButton.textContent = ___WEBPACK_IMPORTED_MODULE_0__.SOUNDON;
        }
    });
    homeButton.addEventListener('click', () => {
        _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.textContent = '';
        _mainBlock__WEBPACK_IMPORTED_MODULE_4__.container.textContent = '';
        localStorage.page = '0';
        location.hash = 'main';
        document.body.append(___WEBPACK_IMPORTED_MODULE_0__.title);
        (0,_mainBlock__WEBPACK_IMPORTED_MODULE_4__.create)(___WEBPACK_IMPORTED_MODULE_0__.title);
        _mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions.classList.add('containerForOptions');
        ___WEBPACK_IMPORTED_MODULE_0__.title.append(_mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions);
        (0,_loadOptions__WEBPACK_IMPORTED_MODULE_3__.loadOptions)(___WEBPACK_IMPORTED_MODULE_0__.objData);
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
    const sections = Object.keys(options).filter(key => key.startsWith('option-'));
    const weights = Object.keys(options)
        .filter(key => !key.startsWith('option-'))
        .map(key => Number(options[key]));
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    const angles = weights.map(weight => (weight / totalWeight) * (2 * Math.PI));
    let currentSectionIndex = -1;
    let startAngle = 0;
    function drawWheel() {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(centerX, centerY) * 0.9;
            let anglePosition = startAngle;
            sections.forEach((section, index) => {
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, anglePosition, anglePosition + angles[index]);
                ctx.fillStyle = index % 2 === 0 ? '#FFDDC1' : '#FFABAB';
                ctx.fill();
                ctx.stroke();
                const midAngle = anglePosition + angles[index] / 2;
                const textX = centerX + Math.cos(midAngle) * (radius / 2);
                const textY = centerY + Math.sin(midAngle) * (radius / 2);
                ctx.fillStyle = 'black';
                ctx.fillText(options[section], textX - ctx.measureText(options[section]).width / 2, textY);
                anglePosition += angles[index];
                updateOutput();
            });
        }
    }
    function updateOutput() {
        const pointerAngle = startAngle % (2 * Math.PI);
        let cumulativeAngle = 0;
        for (let i = 0; i < angles.length; i++) {
            cumulativeAngle += angles[i];
            if (pointerAngle < cumulativeAngle) {
                output.innerText = options[sections[i]];
                break;
            }
        }
    }
    function spinWheel(duration) {
        let start = null;
        function animate(timestamp) {
            if (!start)
                start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            const easingProgress = easeOutCubic(progress);
            startAngle += Math.PI * 10 * easingProgress;
            drawWheel();
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
            else {
                let finalAngle = startAngle % (2 * Math.PI);
                let cumulativeAngle = 0;
                for (let i = 0; i < angles.length; i++) {
                    cumulativeAngle += angles[i];
                    if (finalAngle < cumulativeAngle) {
                        output.innerText = options[sections[i]];
                        output.style.backgroundColor = 'green';
                        break;
                    }
                }
                if (finalAngle === 0) {
                    output.innerText = options[sections[sections.length - 1]];
                    output.style.backgroundColor = 'green';
                }
            }
        }
        requestAnimationFrame(animate);
    }
    function easeOutCubic(t) {
        return --t * t * t + 1;
    }
    startButton.addEventListener('click', () => {
        if (+timeField.value >= 5 && +timeField.value <= 30) {
            output.innerText = 'Spinning...';
            output.style.backgroundColor = '';
            const durationInputValue = parseInt(document.getElementById('durationInput').value);
            startAngle += Math.random() * (Math.PI * 2);
            spinWheel(durationInputValue);
            homeButton.classList.add('disabled');
            soundButton.classList.add('disabled');
            timeField.classList.add('disabled');
            startButton.classList.add('disabled');
            window.setTimeout(() => {
                homeButton.classList.remove('disabled');
                soundButton.classList.remove('disabled');
                timeField.classList.remove('disabled');
                startButton.classList.remove('disabled');
                (0,_createAudio__WEBPACK_IMPORTED_MODULE_1__.createAudio)('win');
                if (!isSound) {
                    _createAudio__WEBPACK_IMPORTED_MODULE_1__.audio.muted;
                }
                else {
                    _createAudio__WEBPACK_IMPORTED_MODULE_1__.audio.play();
                }
            }, +timeField.value * 1000);
        }
        else {
            (0,_createAudio__WEBPACK_IMPORTED_MODULE_1__.createAudioWrong)('squeak');
            if (!isSound) {
                _createAudio__WEBPACK_IMPORTED_MODULE_1__.audioWrong.muted;
            }
            else {
                _createAudio__WEBPACK_IMPORTED_MODULE_1__.audioWrong.play();
            }
            (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.dialogWrongValue)(_mainBlock__WEBPACK_IMPORTED_MODULE_4__.containerForOptions);
        }
    });
    drawWheel();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a1e04ae88e2b70ec834d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5e02ee11e7f5301ea483.hot-update.js.map