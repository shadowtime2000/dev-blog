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
/* harmony import */ var _styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Profile.module.css */ "./styles/Profile.module.css");
/* harmony import */ var _styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);
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
    className: _styles_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profile,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImF2YXRhclVSTCIsInNldEF2YXRhclVSTCIsInByb2Nlc3MiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhdmF0YXJfdXJsIiwic3R5bGVzIiwicHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFdkJDLFNBRnVCO0FBQUEsTUFFWkMsWUFGWTs7QUFBQSxtQkFHQUYsc0RBQVEsQ0FBQ0csY0FBRCxDQUhSO0FBQUEsTUFHdkJDLE9BSHVCO0FBQUEsTUFHZEMsVUFIYzs7QUFLOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLHdDQUEwQ0wsZ0JBQTFDLEdBQ0tNLElBREwsQ0FDVSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsS0FEVixFQUVLRixJQUZMLENBRVUsVUFBQUMsR0FBRztBQUFBLGFBQUlSLFlBQVksQ0FBQ1EsR0FBRyxDQUFDRSxVQUFMLENBQWhCO0FBQUEsS0FGYjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQU4seURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sb0RBQXNETCxnQkFBdEQsR0FDQ00sSUFERCxDQUNNLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQVI7QUFBQSxLQURULEVBRUNGLElBRkQsQ0FFTSxVQUFBQyxHQUFHO0FBQUEsYUFBSUwsVUFBVSxDQUFDSyxHQUFHLENBQUNOLE9BQUwsQ0FBZDtBQUFBLEtBRlQ7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDSTtBQUFRLGFBQVMsRUFBRVMsaUVBQU0sQ0FBQ0MsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSwyQkFBb0JYLGdCQUFwQixDQUFWO0FBQWtFLFNBQUssRUFBQyxTQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1GQSxnQkFBbkYsQ0FBSixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxPQURMLENBRkosRUFNSTtBQUFLLFNBQUssRUFBRSxFQUFaO0FBQWdCLE9BQUcsRUFBRUgsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREo7QUFVSDs7R0EzQnVCRixPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4YTdkNmQ2MzZkOTRhYjdiOGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG5cclxuICAgIGNvbnN0IFthdmF0YXJVUkwsIHNldEF2YXRhclVSTF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUExBQ0VIT0xERVJfU1VNTUFSWSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gc2V0QXZhdGFyVVJMKHJlcy5hdmF0YXJfdXJsKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2Rldi50by9hcGkvdXNlcnMvYnlfdXNlcm5hbWU/dXJsPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUk5BTUV9YClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFN1bW1hcnkocmVzLnN1bW1hcnkpKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxyXG4gICAgICAgICAgICA8aDM+PExpbmsgaHJlZj17YGh0dHBzOi8vZGV2LnRvLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUk5BTUV9YH0gY29sb3I9XCJpbmhlcml0XCI+e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfTwvTGluaz48L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHdpZHRoPXs1MH0gc3JjPXthdmF0YXJVUkx9IC8+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9