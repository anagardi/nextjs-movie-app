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

/***/ "./components/title.js":
/*!*****************************!*\
  !*** ./components/title.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _styles_title_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/title.module.css */ \"./styles/title.module.css\");\n/* harmony import */ var _styles_title_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_title_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Title(param) {\n    let { title, subtitle } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        className: (_styles_title_module_css__WEBPACK_IMPORTED_MODULE_2___default().title_box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                variant: \"h3\",\n                f: true,\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/title.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                variant: \"h6\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/title.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/title.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Title;\nvar _c;\n$RefreshReg$(_c, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RpdGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDQTtBQUVoQyxTQUFTRyxNQUFNLEtBQW1CO1FBQW5CLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQW5CO0lBRTFCLHFCQUNJLDhEQUFDTCxtRkFBR0E7UUFBQ00sV0FBV0osMkVBQWdCOzswQkFDNUIsOERBQUNELDBGQUFVQTtnQkFBQ08sU0FBUTtnQkFBS0MsQ0FBQzswQkFBRUw7Ozs7OzswQkFDNUIsOERBQUNILDBGQUFVQTtnQkFBQ08sU0FBUTswQkFBTUg7Ozs7Ozs7Ozs7OztBQUd0QztLQVJ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aXRsZS5qcz8yOTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90aXRsZS5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUoeyB0aXRsZSwgc3VidGl0bGUgfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9ib3h9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e3N1YnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJCb3giLCJUeXBvZ3JhcGh5Iiwic3R5bGVzIiwiVGl0bGUiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY2xhc3NOYW1lIiwidGl0bGVfYm94IiwidmFyaWFudCIsImYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/title.js\n"));

/***/ })

});