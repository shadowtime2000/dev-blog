webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Footer.module.css */ "./styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\js-projects\\dev-blog\\components\\Profile.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Profile() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      avatarURL = _useState[0],
      setAvatarURL = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Summary Here"),
      summary = _useState2[0],
      setSummary = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.github.com/users/".concat("shadowtime2000")).then(function (res) {
      return res.data;
    }).then(function (res) {
      return setAvatarURL(res.avatar_url);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://dev.to/api/users/by_username?url=".concat("shadowtime2000")).then(function (res) {
      return res.data;
    }).then(function (res) {
      return setSummary(res.summary);
    });
  }, []);
  return __jsx("footer", {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "https://dev.to/".concat("shadowtime2000"),
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "shadowtime2000")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, summary), __jsx("img", {
    width: 50,
    src: avatarURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }));
}

_s(Profile, "fzFeMyGBnKQQ80BQzZX8pX2K2vE=");

_c = Profile;

var _c;

$RefreshReg$(_c, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImF2YXRhclVSTCIsInNldEF2YXRhclVSTCIsInByb2Nlc3MiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhdmF0YXJfdXJsIiwic3R5bGVzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUV2QkMsU0FGdUI7QUFBQSxNQUVaQyxZQUZZOztBQUFBLG1CQUdBRixzREFBUSxDQUFDRyxjQUFELENBSFI7QUFBQSxNQUd2QkMsT0FIdUI7QUFBQSxNQUdkQyxVQUhjOztBQUs5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sd0NBQTBDTCxnQkFBMUMsR0FDS00sSUFETCxDQUNVLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQWI7QUFBQSxLQURWLEVBRUtGLElBRkwsQ0FFVSxVQUFBQyxHQUFHO0FBQUEsYUFBSVIsWUFBWSxDQUFDUSxHQUFHLENBQUNFLFVBQUwsQ0FBaEI7QUFBQSxLQUZiO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BTix5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixvREFBc0RMLGdCQUF0RCxHQUNDTSxJQURELENBQ00sVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEtBRFQsRUFFQ0YsSUFGRCxDQUVNLFVBQUFDLEdBQUc7QUFBQSxhQUFJTCxVQUFVLENBQUNLLEdBQUcsQ0FBQ04sT0FBTCxDQUFkO0FBQUEsS0FGVDtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUNJO0FBQVEsYUFBUyxFQUFFUyxnRUFBTSxDQUFDQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLDJCQUFvQlgsZ0JBQXBCLENBQVY7QUFBa0UsU0FBSyxFQUFDLFNBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUZBLGdCQUFuRixDQUFKLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLE9BREwsQ0FGSixFQU1JO0FBQUssU0FBSyxFQUFFLEVBQVo7QUFBZ0IsT0FBRyxFQUFFSCxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESjtBQVVIOztHQTNCdUJGLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmJiZTlhYWUyYTY1ZTkzODRhZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuXHJcbiAgICBjb25zdCBbYXZhdGFyVVJMLCBzZXRBdmF0YXJVUkxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BMQUNFSE9MREVSX1NVTU1BUlkpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VU0VSTkFNRX1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHNldEF2YXRhclVSTChyZXMuYXZhdGFyX3VybCkpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9kZXYudG8vYXBpL3VzZXJzL2J5X3VzZXJuYW1lP3VybD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRTdW1tYXJ5KHJlcy5zdW1tYXJ5KSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8aDM+PExpbmsgaHJlZj17YGh0dHBzOi8vZGV2LnRvLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUk5BTUV9YH0gY29sb3I9XCJpbmhlcml0XCI+e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfTwvTGluaz48L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHdpZHRoPXs1MH0gc3JjPXthdmF0YXJVUkx9IC8+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9