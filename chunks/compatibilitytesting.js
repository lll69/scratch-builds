var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["compatibilitytesting"],{

/***/ "./src/playground/compatibility-testing.jsx":
/*!**************************************************!*\
  !*** ./src/playground/compatibility-testing.jsx ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");





const WrappedGui = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]));
const DEFAULT_PROJECT_ID = '10015059';

class Player extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.updateProject = this.updateProject.bind(this);
    this.state = {
      projectId: window.location.hash.substring(1) || DEFAULT_PROJECT_ID
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.updateProject);

    if (!window.location.hash.substring(1)) {
      window.location.hash = DEFAULT_PROJECT_ID;
    }
  }

  componentWillUnmount() {
    window.addEventListener('hashchange', this.updateProject);
  }

  updateProject() {
    this.setState({
      projectId: window.location.hash.substring(1)
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
      isPlayerOnly: true,
      isFullScreen: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      allowFullScreen: true,
      allowTransparency: true,
      frameBorder: "0",
      height: "402",
      src: "https://scratch.mit.edu/projects/embed/".concat(this.state.projectId, "/?autostart=true"),
      width: "485"
    }));
  }

}

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Player, null), appTarget);

/***/ })

},[["./src/playground/compatibility-testing.jsx","lib.min"]]]);
//# sourceMappingURL=compatibilitytesting.js.map