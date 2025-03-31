"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./src/builders/downloadData.ts":
/*!**************************************!*\
  !*** ./src/builders/downloadData.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadData: () => (/* binding */ downloadData)
/* harmony export */ });
/* harmony import */ var _clearList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearList */ "./src/builders/clearList.ts");
/* harmony import */ var _loadOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadOptions */ "./src/builders/loadOptions.ts");
/* harmony import */ var _mainBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainBlock */ "./src/builders/mainBlock.ts");



function downloadData(elem) {
    elem.setAttribute('id', 'loadButton');
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('id', 'fileInput');
    fileInput.setAttribute('accept', '.json');
    fileInput.setAttribute('style', 'display: none;');
    elem.after(fileInput);
    elem.addEventListener('click', function () {
        fileInput.click();
    });
    fileInput.addEventListener('change', event => {
        if (event.target && event.target instanceof HTMLInputElement) {
            if (event.target.files) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = e => {
                        var _a, _b;
                        try {
                            console.log(typeof ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) === 'string');
                            if (e.target && typeof ((_b = e.target) === null || _b === void 0 ? void 0 : _b.result) === 'string') {
                                const jsonObject = JSON.parse(e.target.result);
                                console.log(jsonObject);
                                (0,_clearList__WEBPACK_IMPORTED_MODULE_0__.clearList)(_mainBlock__WEBPACK_IMPORTED_MODULE_2__.containerForOptions);
                                let objLength;
                                let weightLength = [];
                                let titleLength = [];
                                let objCount;
                                for (let key of Object.keys(jsonObject)) {
                                    if (weightLength.length > titleLength.length) {
                                        objCount = [...weightLength];
                                    }
                                    else {
                                        objCount = [...titleLength];
                                    }
                                    console.log(key[0] === 'o');
                                    if (key[0] === 'o') {
                                        titleLength.push(+key.replace(/\D/g, ''));
                                    }
                                    else if (key[0] === '#') {
                                        weightLength.push(+key.replace(/\D/g, ''));
                                    }
                                    console.log(`Array 1 - ${titleLength}`, `Array 2 - ${weightLength}`);
                                }
                                const objData = jsonObject;
                                if (objLength) {
                                    localStorage.setItem('count', JSON.stringify(objCount));
                                    (0,_loadOptions__WEBPACK_IMPORTED_MODULE_1__.loadOptions)(objData);
                                    localStorage.setItem('dataFromInputs', JSON.stringify(objData));
                                }
                            }
                        }
                        catch (error) {
                            console.error('Error parsing JSON:', error);
                        }
                    };
                    reader.onerror = error => {
                        console.error('Error reading file:', error);
                    };
                    reader.readAsText(file);
                }
                else {
                    console.error('No file selected');
                }
            }
        }
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89aa0c11454d81ffe115")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6e734503743b1046d875.hot-update.js.map