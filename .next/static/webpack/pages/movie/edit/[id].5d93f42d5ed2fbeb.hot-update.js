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

/***/ "./components/movie-form/form-directors.js":
/*!*************************************************!*\
  !*** ./components/movie-form/form-directors.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _form_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-layout */ \"./components/form-layout.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_CardMedia_IconButton_OutlinedInput_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,CardMedia,IconButton,OutlinedInput!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,CardMedia,IconButton,OutlinedInput!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction FormDirectors(props) {\n    _s();\n    const [directors, setDirectors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.directors);\n    function handleChange(e) {\n    // let currentList = [...directors];\n    // let index = currentList.indexOf(value);\n    // const updatedValue = e.target.value;\n    // setValue(updatedValue);\n    // currentList.splice(index, 1, updatedValue);\n    // setDirectors(currentList);\n    }\n    function handleDelete() {\n    // let index = directors.indexOf(props.value);\n    // let currentList = [...directors];\n    // currentList.splice(index, 1);\n    // setDirectors(currentList);\n    }\n    function handleAdd() {\n    // setDirectors([...directors, ...[\"\"]]);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        directors\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Directors:\",\n        children: [\n            directors === null || directors === void 0 ? void 0 : directors.map((director, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_CardMedia_IconButton_OutlinedInput_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"space-between\",\n                        columnGap: \"5px\",\n                        width: \"100%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_CardMedia_IconButton_OutlinedInput_mui_material__WEBPACK_IMPORTED_MODULE_3__.OutlinedInput, {\n                            placeholder: \"Enter director name\",\n                            value: director,\n                            onChange: handleChange,\n                            sx: {\n                                width: \"100%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-directors.js\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_CardMedia_IconButton_OutlinedInput_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                            \"aria-label\": \"delete\",\n                            size: \"large\",\n                            color: \"primary\",\n                            style: {\n                                borderRadius: 0\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-directors.js\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-directors.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-directors.js\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_CardMedia_IconButton_OutlinedInput_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    display: \"flex\",\n                    width: \"100%\",\n                    justifyContent: \"center\",\n                    mt: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_CardMedia_IconButton_OutlinedInput_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"contained\",\n                    sx: {\n                        backgroundColor: \"primary.light\",\n                        width: \"100px\"\n                    },\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-directors.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-directors.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/movie-form/form-directors.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(FormDirectors, \"nW7+Rru/iVKxA1oq0YgojVVAZGo=\");\n_c = FormDirectors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormDirectors);\nvar _c;\n$RefreshReg$(_c, \"FormDirectors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vdmllLWZvcm0vZm9ybS1kaXJlY3RvcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQzBDO0FBQzlCO0FBRXBELFNBQVNVLGNBQWNDLEtBQUs7O0lBRXhCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQ1MsTUFBTUMsU0FBUztJQUUxRCxTQUFTRSxhQUFhQyxDQUFDO0lBQ25CLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQiw4Q0FBOEM7SUFDOUMsNkJBQTZCO0lBQ2pDO0lBRUEsU0FBU0M7SUFDTCw4Q0FBOEM7SUFDOUMsb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDakM7SUFDQSxTQUFTQztJQUNMLHlDQUF5QztJQUM3QztJQUVBaEIsZ0RBQVNBLENBQUMsS0FBUSxHQUFHO1FBQUNXO0tBQVU7SUFDaEMscUJBQ0ksOERBQUNULG9EQUFVQTtRQUFDZSxPQUFNOztZQUdWTixzQkFBQUEsZ0NBQUFBLFVBQVdPLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxrQkFDdEIsOERBQUNoQixrSEFBR0E7b0JBQVNpQixJQUFJO3dCQUFFQyxTQUFTO3dCQUFRQyxZQUFZO3dCQUFVQyxnQkFBZ0I7d0JBQWlCQyxXQUFXO3dCQUFPQyxPQUFPO29CQUFPOztzQ0FDdkgsOERBQUNyQiw0SEFBYUE7NEJBQUNzQixhQUFZOzRCQUFzQkMsT0FBT1Q7NEJBQVVVLFVBQVVoQjs0QkFBY1EsSUFBSTtnQ0FBRUssT0FBTzs0QkFBTzs7Ozs7O3NDQUM5Ryw4REFBQ3BCLHlIQUFVQTs0QkFBQ3dCLGNBQVc7NEJBQVNDLE1BQUs7NEJBQVFDLE9BQU07NEJBQVVDLE9BQU87Z0NBQUNDLGNBQWM7NEJBQUM7c0NBQ2hGLDRFQUFDMUIsa0VBQVVBOzs7Ozs7Ozs7OzttQkFIVFk7Ozs7OzBCQWVsQiw4REFBQ2hCLGtIQUFHQTtnQkFBQ2lCLElBQUk7b0JBQUNDLFNBQVM7b0JBQVFJLE9BQU87b0JBQVFGLGdCQUFnQjtvQkFBVVcsSUFBSTtnQkFBTTswQkFDMUUsNEVBQUNoQyxxSEFBTUE7b0JBQUNpQyxTQUFRO29CQUFZZixJQUFJO3dCQUFFZ0IsaUJBQWlCO3dCQUFpQlgsT0FBTztvQkFBUTs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEc7R0FqRFNqQjtLQUFBQTtBQW1EVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vdmllLWZvcm0vZm9ybS1kaXJlY3RvcnMuanM/MGY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vZm9ybS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBCb3gsIE91dGxpbmVkSW5wdXQsIEljb25CdXR0b24sIENhcmRNZWRpYSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuXHJcbmZ1bmN0aW9uIEZvcm1EaXJlY3RvcnMocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbZGlyZWN0b3JzLCBzZXREaXJlY3RvcnNdID0gdXNlU3RhdGUocHJvcHMuZGlyZWN0b3JzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIC8vIGxldCBjdXJyZW50TGlzdCA9IFsuLi5kaXJlY3RvcnNdO1xyXG4gICAgICAgIC8vIGxldCBpbmRleCA9IGN1cnJlbnRMaXN0LmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgIC8vIGNvbnN0IHVwZGF0ZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIC8vIHNldFZhbHVlKHVwZGF0ZWRWYWx1ZSk7XHJcbiAgICAgICAgLy8gY3VycmVudExpc3Quc3BsaWNlKGluZGV4LCAxLCB1cGRhdGVkVmFsdWUpO1xyXG4gICAgICAgIC8vIHNldERpcmVjdG9ycyhjdXJyZW50TGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKCkge1xyXG4gICAgICAgIC8vIGxldCBpbmRleCA9IGRpcmVjdG9ycy5pbmRleE9mKHByb3BzLnZhbHVlKTtcclxuICAgICAgICAvLyBsZXQgY3VycmVudExpc3QgPSBbLi4uZGlyZWN0b3JzXTtcclxuICAgICAgICAvLyBjdXJyZW50TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIC8vIHNldERpcmVjdG9ycyhjdXJyZW50TGlzdCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBZGQoKSB7XHJcbiAgICAgICAgLy8gc2V0RGlyZWN0b3JzKFsuLi5kaXJlY3RvcnMsIC4uLltcIlwiXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IH0sIFtkaXJlY3RvcnNdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1MYXlvdXQgdGl0bGU9XCJEaXJlY3RvcnM6XCI+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RvcnM/Lm1hcCgoZGlyZWN0b3IsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17aX0gc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgY29sdW1uR2FwOiBcIjVweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgZGlyZWN0b3IgbmFtZVwiIHZhbHVlPXtkaXJlY3Rvcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJkZWxldGVcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e2JvcmRlclJhZGl1czogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiBzeD17e3dpZHRoOiBcIjM1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL3N0YXRpYy9pbWFnZXMvYmx1ZS1kZWxldGUtYnV0dG9uLnBuZy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJEZWxldGUgaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEJveCBzeD17e2Rpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtdDogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5LmxpZ2h0XCIsIHdpZHRoOiBcIjEwMHB4XCIgfX0+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1EaXJlY3RvcnM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtTGF5b3V0IiwiQnV0dG9uIiwiQm94IiwiT3V0bGluZWRJbnB1dCIsIkljb25CdXR0b24iLCJDYXJkTWVkaWEiLCJEZWxldGVJY29uIiwiRm9ybURpcmVjdG9ycyIsInByb3BzIiwiZGlyZWN0b3JzIiwic2V0RGlyZWN0b3JzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUFkZCIsInRpdGxlIiwibWFwIiwiZGlyZWN0b3IiLCJpIiwic3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sdW1uR2FwIiwid2lkdGgiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJhcmlhLWxhYmVsIiwic2l6ZSIsImNvbG9yIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJtdCIsInZhcmlhbnQiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/movie-form/form-directors.js\n"));

/***/ })

});