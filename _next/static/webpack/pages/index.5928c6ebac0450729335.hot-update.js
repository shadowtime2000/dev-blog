webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer.js":
false,

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
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
var _jsxFileName = "C:\\js-projects\\dev-blog\\components\\Profile.js",
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BlogPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogPost */ "./components/BlogPost.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.js");
var _jsxFileName = "C:\\js-projects\\dev-blog\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 //TODO: Support pagination

function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://dev.to/api/articles?username=".concat("shadowtime2000")).then(function (res) {
      return res.data;
    }).then(function (res) {
      return setPosts(res);
    })["catch"](function (err) {
      return console.log;
    });
  }, []);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "DEV Blog")), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), posts.map(function (post, index) {
    return __jsx(_components_BlogPost__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postTitle: post.title,
      key: index,
      postLink: post.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    });
  })), __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
}

_s(Home, "bG8V4duoIfO0BEPgauWMVT5Qvyw=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJ1c2VTdGF0ZSIsImF2YXRhclVSTCIsInNldEF2YXRhclVSTCIsInByb2Nlc3MiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhdmF0YXJfdXJsIiwic3R5bGVzIiwiZm9vdGVyIiwiSG9tZSIsInBvc3RzIiwic2V0UG9zdHMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwibWFwIiwicG9zdCIsImluZGV4IiwidGl0bGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRXRCQyxTQUZzQjtBQUFBLE1BRVhDLFlBRlc7O0FBQUEsbUJBR0NGLHNEQUFRLENBQUNHLGNBQUQsQ0FIVDtBQUFBLE1BR3RCQyxPQUhzQjtBQUFBLE1BR2JDLFVBSGE7O0FBSzdCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTix3Q0FBMENMLGdCQUExQyxHQUNLTSxJQURMLENBQ1UsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBYjtBQUFBLEtBRFYsRUFFS0YsSUFGTCxDQUVVLFVBQUFDLEdBQUc7QUFBQSxhQUFJUixZQUFZLENBQUNRLEdBQUcsQ0FBQ0UsVUFBTCxDQUFoQjtBQUFBLEtBRmI7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFOLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLG9EQUFzREwsZ0JBQXRELEdBQ0NNLElBREQsQ0FDTSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFSO0FBQUEsS0FEVCxFQUVDRixJQUZELENBRU0sVUFBQUMsR0FBRztBQUFBLGFBQUlMLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDTixPQUFMLENBQWQ7QUFBQSxLQUZUO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQ0k7QUFBUSxhQUFTLEVBQUVTLGdFQUFNLENBQUNDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksTUFBQyxzREFBRDtBQUFNLFFBQUksMkJBQW9CWCxnQkFBcEIsQ0FBVjtBQUFrRSxTQUFLLEVBQUMsU0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtRkEsZ0JBQW5GLENBQUosQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0MsT0FETCxDQUZKLEVBTUk7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFnQixPQUFHLEVBQUVILFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURKO0FBVUg7O0dBM0J1QkYsTTs7S0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J4QjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFFZSxTQUFTZ0IsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUVIZixzREFBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRXRCZ0IsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUk3QlgseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdEQUFLLENBQUNDLEdBQU4sZ0RBQWtETCxnQkFBbEQsR0FDR00sSUFESCxDQUNRLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQVI7QUFBQSxLQURYLEVBRUdGLElBRkgsQ0FFUSxVQUFBQyxHQUFHO0FBQUEsYUFBSU8sUUFBUSxDQUFDUCxHQUFELENBQVo7QUFBQSxLQUZYLFdBR1MsVUFBQVEsR0FBRztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBWjtBQUFBLEtBSFo7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBRVAsOERBQU0sQ0FBQ1EsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUFpQixNQUFDLDREQUFEO0FBQVUsZUFBUyxFQUFFRCxJQUFJLENBQUNFLEtBQTFCO0FBQWlDLFNBQUcsRUFBRUQsS0FBdEM7QUFBNkMsY0FBUSxFQUFFRCxJQUFJLENBQUNHLEdBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBakI7QUFBQSxHQUFWLENBRkgsQ0FKRixFQVFFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFZRDs7R0F2QnVCWCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU5MjhjNmViYWMwNDUwNzI5MzM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHJcbiAgICBjb25zdCBbYXZhdGFyVVJMLCBzZXRBdmF0YXJVUkxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BMQUNFSE9MREVSX1NVTU1BUlkpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VU0VSTkFNRX1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHNldEF2YXRhclVSTChyZXMuYXZhdGFyX3VybCkpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9kZXYudG8vYXBpL3VzZXJzL2J5X3VzZXJuYW1lP3VybD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRTdW1tYXJ5KHJlcy5zdW1tYXJ5KSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8aDM+PExpbmsgaHJlZj17YGh0dHBzOi8vZGV2LnRvLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUk5BTUV9YH0gY29sb3I9XCJpbmhlcml0XCI+e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJOQU1FfTwvTGluaz48L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHdpZHRoPXs1MH0gc3JjPXthdmF0YXJVUkx9IC8+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBCbG9nUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dQb3N0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlJ1xuXG4vL1RPRE86IFN1cHBvcnQgcGFnaW5hdGlvblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2Rldi50by9hcGkvYXJ0aWNsZXM/dXNlcm5hbWU9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VU0VSTkFNRX1gKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxuICAgICAgLnRoZW4ocmVzID0+IHNldFBvc3RzKHJlcykpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+REVWIEJsb2c8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IDxCbG9nUG9zdCBwb3N0VGl0bGU9e3Bvc3QudGl0bGV9IGtleT17aW5kZXh9IHBvc3RMaW5rPXtwb3N0LnVybH0gLz4pfVxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9