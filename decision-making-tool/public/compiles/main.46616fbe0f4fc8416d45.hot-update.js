"use strict";
self["webpackHotUpdatedecision_making_tool"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./public/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: rgba(27, 122, 224, 0.619);
}

body:has(dialog[open]) {
  overflow: hidden;
}

.title {
  text-align: center;
}

.containerForOptions {
  width: 80vw;
  /* height: 10vh; */
  margin: 2% auto;
}

.dialog {
  border: none;
  padding: 0;
}

.dialog-wrapper {
  padding: 1em;
}

.container {
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1% auto;
}

.buttonList {
  cursor: pointer;
  padding: 1%;
  border-radius: 7px;
  margin: 1%;
  transition: all 0.3s ease-in-out;
  width: 80%;
}

.buttonList:hover {
  transform: scale(0.9);
}

.item {
  list-style: none;
  border: 1px solid bisque;
  width: 70%;
  margin: 1% auto;
  border-radius: 20px;
}

.label-item {
  font-size: 1.2vw;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.input-item,
.button-item {
  margin: 2vw;
  border-radius: 10px;
}

.button-item {
  cursor: pointer;
}

.containerForButtons {
  display: flex;
  justify-content: space-around;
}

canvas {
  border: 1px solid #000;
  display: block;
  margin: 20px auto;
}
#pointer {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -5px;
  margin-top: -25px;
  height: 50px;
  width: 10px;
  background: red;
  z-index: 1;
}

.popup-wrong {
  display: none;
  width: 400px;
  height: 50px;
  margin: 10% auto;
  position: absolute;
}

@media (max-width: 900px) {
  .label-item {
    flex-wrap: wrap;
    font-size: 2vw;
    padding: 2% 0;
  }

  .input-item {
    width: 100%;
  }
}
`, "",{"version":3,"sources":["webpack://./public/styles.css"],"names":[],"mappings":"AAAA;EACE,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,UAAU;EACV,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;;EAEE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE;IACE,eAAe;IACf,cAAc;IACd,aAAa;EACf;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["body {\n  background-color: rgba(27, 122, 224, 0.619);\n}\n\nbody:has(dialog[open]) {\n  overflow: hidden;\n}\n\n.title {\n  text-align: center;\n}\n\n.containerForOptions {\n  width: 80vw;\n  /* height: 10vh; */\n  margin: 2% auto;\n}\n\n.dialog {\n  border: none;\n  padding: 0;\n}\n\n.dialog-wrapper {\n  padding: 1em;\n}\n\n.container {\n  width: 80vw;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 1% auto;\n}\n\n.buttonList {\n  cursor: pointer;\n  padding: 1%;\n  border-radius: 7px;\n  margin: 1%;\n  transition: all 0.3s ease-in-out;\n  width: 80%;\n}\n\n.buttonList:hover {\n  transform: scale(0.9);\n}\n\n.item {\n  list-style: none;\n  border: 1px solid bisque;\n  width: 70%;\n  margin: 1% auto;\n  border-radius: 20px;\n}\n\n.label-item {\n  font-size: 1.2vw;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.input-item,\n.button-item {\n  margin: 2vw;\n  border-radius: 10px;\n}\n\n.button-item {\n  cursor: pointer;\n}\n\n.containerForButtons {\n  display: flex;\n  justify-content: space-around;\n}\n\ncanvas {\n  border: 1px solid #000;\n  display: block;\n  margin: 20px auto;\n}\n#pointer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -5px;\n  margin-top: -25px;\n  height: 50px;\n  width: 10px;\n  background: red;\n  z-index: 1;\n}\n\n.popup-wrong {\n  display: none;\n  width: 400px;\n  height: 50px;\n  margin: 10% auto;\n  position: absolute;\n}\n\n@media (max-width: 900px) {\n  .label-item {\n    flex-wrap: wrap;\n    font-size: 2vw;\n    padding: 2% 0;\n  }\n\n  .input-item {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3492f2254996e3c17c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.46616fbe0f4fc8416d45.hot-update.js.map