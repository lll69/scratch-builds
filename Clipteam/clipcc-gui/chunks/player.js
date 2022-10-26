var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["player"],{

/***/ "./src/playground/player.css":
/*!***********************************!*\
  !*** ./src/playground/player.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"stage-only":"player_stage-only_3WHZN","stageOnly":"player_stage-only_3WHZN","editor":"player_editor_wkTja"});

/***/ }),

/***/ "./src/playground/player.jsx":
/*!***********************************!*\
  !*** ./src/playground/player.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/box/box.jsx */ "./src/components/box/box.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _reducers_mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/mode */ "./src/reducers/mode.js");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player.css */ "./src/playground/player.css");












if (false) {}



const Player = _ref => {
  let {
    isPlayerOnly,
    onSeeInside,
    projectId
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(isPlayerOnly ? _player_css__WEBPACK_IMPORTED_MODULE_11__["default"].stageOnly : _player_css__WEBPACK_IMPORTED_MODULE_11__["default"].editor)
  }, isPlayerOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: onSeeInside
  }, 'See inside'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    canEditTitle: true,
    enableCommunity: true,
    isPlayerOnly: isPlayerOnly,
    projectId: projectId
  }));
};

Player.propTypes = {
  isPlayerOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSeeInside: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

const mapStateToProps = state => ({
  isPlayerOnly: state.scratchGui.mode.isPlayerOnly
});

const mapDispatchToProps = dispatch => ({
  onSeeInside: () => dispatch(Object(_reducers_mode__WEBPACK_IMPORTED_MODULE_10__["setPlayer"])(false))
});

const ConnectedPlayer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Player); // note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.

const WrappedPlayer = Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])(ConnectedPlayer);
const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedPlayer, {
  isPlayerOnly: true
}), appTarget);

/***/ })

},[["./src/playground/player.jsx","lib.min"]]]);
//# sourceMappingURL=player.js.map