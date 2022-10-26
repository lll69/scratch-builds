(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-clones"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/clones/style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/clones/style.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clone-container-container {\n  display: none;\n  align-items: center;\n  padding: 0.25rem;\n  user-select: none;\n  color: #a065ff;\n}\n\n.clone-container {\n  font-size: 0.625rem;\n  font-weight: bold;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  white-space: nowrap;\n}\n\n.clone-icon {\n  margin: 0.25rem;\n  display: inline-block;\n  background-image: url(" + escape(__webpack_require__(/*! ./cat.svg */ "./src/addons/addons/clones/cat.svg")) + ");\n  height: 16px;\n  width: 16px;\n}\n\n.clone-container-container[data-count=\"none\"] {\n  display: none;\n}\n\n.clone-container-container[data-count=\"full\"] {\n  color: #ff6680;\n}\n\n.clone-container-container[data-count=\"full\"] .clone-icon {\n  background-image: url(" + escape(__webpack_require__(/*! ./300cats.svg */ "./src/addons/addons/clones/300cats.svg")) + ");\n}\n\n.clone-count::after {\n  content: attr(data-str);\n}\n\n.sa-clones-small .clone-container-container {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/clones/300cats.svg":
/*!**********************************************!*\
  !*** ./src/addons/addons/clones/300cats.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/60fb267c5ab0c6f4ed9ab4a891ca7dd5.svg";

/***/ }),

/***/ "./src/addons/addons/clones/_runtime_entry.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/clones/_runtime_entry.js ***!
  \****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/clones/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/clones/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/clones/cat.svg":
/*!******************************************!*\
  !*** ./src/addons/addons/clones/cat.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/8a30520407ffdf5b0e7e06e490db9c1d.svg";

/***/ }),

/***/ "./src/addons/addons/clones/userscript.js":
/*!************************************************!*\
  !*** ./src/addons/addons/clones/userscript.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    global,
    console,
    msg
  } = _ref;
  const vm = addon.tab.traps.vm;
  let showIconOnly = addon.settings.get("showicononly");
  if (addon.tab.redux.state && addon.tab.redux.state.scratchGui.stageSize.stageSize === "small") {
    document.body.classList.add("sa-clones-small");
  }
  document.addEventListener("click", e => {
    if (e.target.closest("[class*='stage-header_stage-button-first']")) {
      document.body.classList.add("sa-clones-small");
    } else if (e.target.closest("[class*='stage-header_stage-button-last']")) {
      document.body.classList.remove("sa-clones-small");
    }
  }, {
    capture: true
  });
  let countContainerContainer = document.createElement("div");
  addon.tab.displayNoneWhileDisabled(countContainerContainer);
  let countContainer = document.createElement("div");
  let count = document.createElement("span");
  let icon = document.createElement("span");
  countContainerContainer.className = "clone-container-container";
  countContainer.className = "clone-container";
  count.className = "clone-count";
  icon.className = "clone-icon";
  countContainerContainer.appendChild(icon);
  countContainerContainer.appendChild(countContainer);
  countContainer.appendChild(count);
  let lastChecked = 0;
  const cache = Array(301).fill().map((_, i) => msg("clones", {
    cloneCount: i
  }));
  function doCloneChecks(force) {
    const v = vm.runtime._cloneCounter;
    // performance
    if (v === lastChecked && !force) return;
    lastChecked = v;
    if (v === 0) {
      countContainerContainer.dataset.count = "none";
    } else if (v >= vm.runtime.runtimeOptions.maxClones) {
      countContainerContainer.dataset.count = "full";
    } else {
      countContainerContainer.dataset.count = "";
    }
    if (showIconOnly) {
      count.dataset.str = v;
    } else {
      count.dataset.str = cache[v] || msg("clones", {
        cloneCount: v
      });
    }
    if (v === 0) countContainerContainer.style.display = "none";else countContainerContainer.style.display = "flex";
  }
  addon.settings.addEventListener("change", () => {
    showIconOnly = addon.settings.get("showicononly");
    doCloneChecks(true);
  });
  const oldStep = vm.runtime._step;
  vm.runtime._step = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const ret = oldStep.call(this, ...args);
    doCloneChecks();
    return ret;
  };
  while (true) {
    await addon.tab.waitForElement('[class*="controls_controls-container"]', {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
    });
    if (addon.tab.editorMode === "editor") {
      addon.tab.appendToSharedSpace({
        space: "afterStopButton",
        element: countContainerContainer,
        order: 2
      });
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-clones.js.map