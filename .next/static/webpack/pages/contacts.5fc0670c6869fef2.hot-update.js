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

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Logo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"__barrel_optimize__?names=Typography!=!./node_modules/@mui/material/index.js\");\n\n\n\n\nfunction Logo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/images/logo.png\",\n                alt: \"Movie Faker Logo\",\n                width: 100,\n                height: 100,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/logo.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                sx: {\n                    fontFamily: \"Rubik Burned\",\n                    color: \"primary.contrastText\",\n                    fontSize: \"100em\"\n                },\n                children: \"Movie Faker\"\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/logo.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/logo.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Logo;\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDWTtBQUU1QixTQUFTRztJQUVwQixxQkFDSSw4REFBQ0gsa0RBQUlBO1FBQUNJLE1BQUs7OzBCQUNQLDhEQUFDSCxtREFBS0E7Z0JBQ0ZJLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFFBQVE7Ozs7OzswQkFFWiw4REFBQ1Asc0ZBQVVBO2dCQUNQUSxJQUFJO29CQUNBQyxZQUFZO29CQUNaQyxPQUFPO29CQUNQQyxVQUFVO2dCQUNkOzBCQUNIOzs7Ozs7Ozs7Ozs7QUFLYjtLQXRCd0JWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9nby5qcz9hNjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiTW92aWUgRmFrZXIgTG9nb1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSdWJpayBCdXJuZWRcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeS5jb250cmFzdFRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTAwZW1cIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTW92aWUgRmFrZXJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiVHlwb2dyYXBoeSIsIkxvZ28iLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsInN4IiwiZm9udEZhbWlseSIsImNvbG9yIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logo.js\n"));

/***/ })

});