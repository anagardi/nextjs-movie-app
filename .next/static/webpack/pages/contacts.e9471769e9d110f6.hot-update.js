"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contacts",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_layout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/layout.module.css */ \"./styles/layout.module.css\");\n/* harmony import */ var _styles_layout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/header.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ \"./components/title.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./components/footer.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Divider_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider!=!@mui/material */ \"__barrel_optimize__?names=Box,Divider!=!./node_modules/@mui/material/index.js\");\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title, subtitle, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        className: (_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().page_layout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/layout.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: title,\n                subtitle: subtitle\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/layout.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/layout.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/layout.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/layout.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ25CO0FBQ0Y7QUFDRTtBQUNhO0FBRTNCLFNBQVNNLE9BQU8sS0FBNEI7UUFBNUIsRUFBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUE1QjtJQUMzQixxQkFDSSw4REFBQ0wsZ0ZBQUdBO1FBQUNNLFdBQVdWLDhFQUFrQjs7MEJBQzlCLDhEQUFDQywrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDQyw4Q0FBS0E7Z0JBQUNLLE9BQU9BO2dCQUFPQyxVQUFVQTs7Ozs7OzBCQUMvQiw4REFBQ0k7MEJBQU1IOzs7Ozs7MEJBQ1AsOERBQUNOLCtDQUFNQTs7Ozs7Ozs7Ozs7QUFHbkI7S0FUd0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xheW91dC5tb2R1bGUuY3NzXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi90aXRsZVwiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiXG5pbXBvcnQge0JveCwgRGl2aWRlcn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe3RpdGxlLCBzdWJ0aXRsZSwgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMucGFnZV9sYXlvdXR9PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPFRpdGxlIHRpdGxlPXt0aXRsZX0gc3VidGl0bGU9e3N1YnRpdGxlfS8+XG4gICAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0JveD5cbiAgICApXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYWRlciIsIlRpdGxlIiwiRm9vdGVyIiwiQm94IiwiRGl2aWRlciIsIkxheW91dCIsInRpdGxlIiwic3VidGl0bGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInBhZ2VfbGF5b3V0IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});