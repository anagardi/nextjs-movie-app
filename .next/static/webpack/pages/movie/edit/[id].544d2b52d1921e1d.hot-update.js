"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/edit/[id]",{

/***/ "./components/movie-form/form-genres.js":
/*!**********************************************!*\
  !*** ./components/movie-form/form-genres.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_genres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../static/genres */ \"./static/genres.js\");\n/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-layout */ \"./components/form-layout.js\");\n/* harmony import */ var _static_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../static/lib */ \"./static/lib.js\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Checkbox */ \"./node_modules/@mui/material/Checkbox/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"./node_modules/@mui/material/FormControlLabel/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FormGenres(props) {\n    _s();\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.genres);\n    function handleGenresChange(e) {\n        let updatedList = [\n            ...genres\n        ];\n        if (genres.includes(e.target.value)) {\n            updatedList.splice(genres.indexOf(e.target.value), 1);\n        } else {\n            updatedList = [\n                ...genres,\n                e.target.value\n            ];\n        }\n        setGenres(updatedList);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        genres\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Genres:\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            sx: {\n                display: \"flex\",\n                flexWrap: \"wrap\",\n                justifyContent: \"space-between\",\n                // gap: \"5px\",\n                p: \"5px 20px\",\n                fontSize: \"12px\"\n            },\n            children: _static_genres__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((genre, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        checked: genres === null || genres === void 0 ? void 0 : genres.includes(genre),\n                        onChange: handleGenresChange,\n                        value: genre,\n                        color: \"primary.light\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-genres.js\",\n                        lineNumber: 42,\n                        columnNumber: 60\n                    }, void 0),\n                    label: (0,_static_lib__WEBPACK_IMPORTED_MODULE_4__.convertToTitleCase)(genre, \"-\")\n                }, i, false, {\n                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-genres.js\",\n                    lineNumber: 42,\n                    columnNumber: 25\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-genres.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-genres.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(FormGenres, \"3uTEGxj08CUieQZTKbPsnsxSf1Y=\");\n_c = FormGenres;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGenres);\nvar _c;\n$RefreshReg$(_c, \"FormGenres\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vdmllLWZvcm0vZm9ybS1nZW5yZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQ0Q7QUFDVTtBQUNKO0FBQ1Q7QUFDMEI7QUFDcEI7QUFFMUMsU0FBU1UsV0FBV0MsS0FBSzs7SUFFckIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDUyxNQUFNQyxNQUFNO0lBRWpELFNBQVNFLG1CQUFtQkMsQ0FBQztRQUV6QixJQUFJQyxjQUFjO2VBQUlKO1NBQU87UUFFN0IsSUFBSUEsT0FBT0ssUUFBUSxDQUFDRixFQUFFRyxNQUFNLENBQUNDLEtBQUssR0FBRztZQUNqQ0gsWUFBWUksTUFBTSxDQUFDUixPQUFPUyxPQUFPLENBQUNOLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHO1FBRXZELE9BQU87WUFDSEgsY0FBYzttQkFBSUo7Z0JBQVFHLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSzthQUFDO1FBQzdDO1FBQ0FOLFVBQVVHO0lBQ2Q7SUFFQWYsZ0RBQVNBLENBQUMsS0FBUSxHQUFHO1FBQUNXO0tBQU87SUFFN0IscUJBQ0ksOERBQUNSLG9EQUFVQTtRQUFDa0IsT0FBTTtrQkFFZCw0RUFBQ2YseURBQUdBO1lBQUNnQixJQUFJO2dCQUNMQyxTQUFTO2dCQUNUQyxVQUFVO2dCQUNWQyxnQkFBZ0I7Z0JBQ2hCLGNBQWM7Z0JBQ2RDLEdBQUc7Z0JBQ0hDLFVBQVU7WUFDZDtzQkFFUXpCLDBEQUFjLENBQUMsQ0FBQzJCLE9BQU9DLGtCQUNuQiw4REFBQ3ZCLHNFQUFnQkE7b0JBQVN3Qix1QkFBUyw4REFBQzFCLDhEQUFRQTt3QkFBQzJCLE9BQU8sRUFBRXJCLG1CQUFBQSw2QkFBQUEsT0FBUUssUUFBUSxDQUFDYTt3QkFBUUksVUFBVXBCO3dCQUFvQkssT0FBT1c7d0JBQU9LLE9BQU07Ozs7OztvQkFBbUJDLE9BQU8vQiwrREFBa0JBLENBQUN5QixPQUFPO21CQUE5SkM7Ozs7Ozs7Ozs7Ozs7OztBQU0vQztHQXRDU3JCO0tBQUFBO0FBd0NULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW92aWUtZm9ybS9mb3JtLWdlbnJlcy5qcz8wMDEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHZW5yZXNMaXN0IGZyb20gXCIvc3RhdGljL2dlbnJlc1wiO1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vZm9ybS1sYXlvdXRcIlxyXG5pbXBvcnQgeyBjb252ZXJ0VG9UaXRsZUNhc2UgfSBmcm9tIFwiL3N0YXRpYy9saWJcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2hlY2tib3gnXHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5cclxuZnVuY3Rpb24gRm9ybUdlbnJlcyhwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZShwcm9wcy5nZW5yZXMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUdlbnJlc0NoYW5nZShlKSB7XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVkTGlzdCA9IFsuLi5nZW5yZXNdO1xyXG5cclxuICAgICAgICBpZiAoZ2VucmVzLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICB1cGRhdGVkTGlzdC5zcGxpY2UoZ2VucmVzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpLCAxKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBkYXRlZExpc3QgPSBbLi4uZ2VucmVzLCBlLnRhcmdldC52YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEdlbnJlcyh1cGRhdGVkTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgfSwgW2dlbnJlc10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1MYXlvdXQgdGl0bGU9XCJHZW5yZXM6XCI+XHJcblxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgIC8vIGdhcDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHA6IFwiNXB4IDIwcHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIlxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBHZW5yZXNMaXN0Lm1hcCgoZ2VucmUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwga2V5PXtpfSBjb250cm9sPXs8Q2hlY2tib3ggY2hlY2tlZD17Z2VucmVzPy5pbmNsdWRlcyhnZW5yZSl9IG9uQ2hhbmdlPXtoYW5kbGVHZW5yZXNDaGFuZ2V9IHZhbHVlPXtnZW5yZX0gY29sb3I9XCJwcmltYXJ5LmxpZ2h0XCIvPn0gbGFiZWw9e2NvbnZlcnRUb1RpdGxlQ2FzZShnZW5yZSwgXCItXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1HZW5yZXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHZW5yZXNMaXN0IiwiRm9ybUxheW91dCIsImNvbnZlcnRUb1RpdGxlQ2FzZSIsIkNoZWNrYm94IiwiQm94IiwiRm9ybUNvbnRyb2xMYWJlbCIsIkZvcm1Hcm91cCIsIkZvcm1HZW5yZXMiLCJwcm9wcyIsImdlbnJlcyIsInNldEdlbnJlcyIsImhhbmRsZUdlbnJlc0NoYW5nZSIsImUiLCJ1cGRhdGVkTGlzdCIsImluY2x1ZGVzIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJpbmRleE9mIiwidGl0bGUiLCJzeCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwicCIsImZvbnRTaXplIiwibWFwIiwiZ2VucmUiLCJpIiwiY29udHJvbCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImNvbG9yIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/movie-form/form-genres.js\n"));

/***/ })

});