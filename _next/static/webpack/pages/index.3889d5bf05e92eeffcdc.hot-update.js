webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Footer.module.css */ "./styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\js-projects\\dev-blog\\components\\Footer.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Footer() {
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

_s(Footer, "fzFeMyGBnKQQ80BQzZX8pX2K2vE=");

_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwidXNlU3RhdGUiLCJhdmF0YXJVUkwiLCJzZXRBdmF0YXJVUkwiLCJwcm9jZXNzIiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXZhdGFyX3VybCIsInN0eWxlcyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFdEJDLFNBRnNCO0FBQUEsTUFFWEMsWUFGVzs7QUFBQSxtQkFHQ0Ysc0RBQVEsQ0FBQ0csY0FBRCxDQUhUO0FBQUEsTUFHdEJDLE9BSHNCO0FBQUEsTUFHYkMsVUFIYTs7QUFLN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLHdDQUEwQ0wsZ0JBQTFDLEdBQ0tNLElBREwsQ0FDVSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsS0FEVixFQUVLRixJQUZMLENBRVUsVUFBQUMsR0FBRztBQUFBLGFBQUlSLFlBQVksQ0FBQ1EsR0FBRyxDQUFDRSxVQUFMLENBQWhCO0FBQUEsS0FGYjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQU4seURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sb0RBQXNETCxnQkFBdEQsR0FDQ00sSUFERCxDQUNNLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQVI7QUFBQSxLQURULEVBRUNGLElBRkQsQ0FFTSxVQUFBQyxHQUFHO0FBQUEsYUFBSUwsVUFBVSxDQUFDSyxHQUFHLENBQUNOLE9BQUwsQ0FBZDtBQUFBLEtBRlQ7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDSTtBQUFRLGFBQVMsRUFBRVMsZ0VBQU0sQ0FBQ0MsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSwyQkFBb0JYLGdCQUFwQixDQUFWO0FBQWtFLFNBQUssRUFBQyxTQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1GQSxnQkFBbkYsQ0FBSixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxPQURMLENBRkosRUFNSTtBQUFLLFNBQUssRUFBRSxFQUFaO0FBQWdCLE9BQUcsRUFBRUgsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREo7QUFVSDs7R0EzQnVCRixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4ODlkNWJmMDVlOTJlZWZmY2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHJcbiAgICBjb25zdCBbYXZhdGFyVVJMLCBzZXRBdmF0YXJVUkxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BMQUNFSE9MREVSX1NVTU1BUlkpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VU0VSTkFNRX1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHNldEF2YXRhclVSTChyZXMuYXZhdGFyX3VybCkpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9kZXYudG8vYXBpL3VzZXJzL2J5X3VzZXJuYW1lP3VybD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRTdW1tYXJ5KHJlcy5zdW1tYXJ5KSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8aDM+PExpbmsgaHJlZj17YGh0dHBzOi8vZGV2LnRvLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUk5BTUV9YH0gY29sb3I9XCJpbmhlcml0XCI+e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfTwvTGluaz48L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHdpZHRoPXs1MH0gc3JjPXthdmF0YXJVUkx9IC8+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9