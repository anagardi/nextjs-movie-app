"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/add",{

/***/ "./components/toolbar-menu.js":
/*!************************************!*\
  !*** ./components/toolbar-menu.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToolbarMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ToolbarMenu() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            flexGrow: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                size: \"large\",\n                edge: \"start\",\n                color: \"inherit\",\n                \"aria-label\": \"menu\",\n                \"aria-controls\": open ? \"basic-menu\" : undefined,\n                \"aria-haspopup\": \"true\",\n                \"aria-expanded\": open ? \"true\" : undefined,\n                onClick: handleClick,\n                sx: {\n                    display: {\n                        xs: \"block\",\n                        sm: \"block\",\n                        md: \"none\",\n                        lg: \"none\"\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                anchorOrigin: {\n                    vertical: \"bottom\",\n                    horizontal: \"left\"\n                },\n                keepMounted: true,\n                transformOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"left\"\n                },\n                anchorEl: anchorEl,\n                open: open,\n                onClose: handleClose,\n                MenuListProps: {\n                    \"aria-labelledby\": \"basic-button\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onClick: handleClose,\n                            sx: {\n                                bgcolor: pathname === \"/\" ? \"secondary.main\" : \"\"\n                            },\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/movie/add\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onClick: handleClose,\n                            sx: {\n                                bgcolor: pathname === \"/movie/add\" ? \"secondary.main\" : \"\"\n                            },\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/about\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onClick: handleClose,\n                            sx: {\n                                bgcolor: pathname === \"/about\" ? \"secondary.main\" : \"\"\n                            },\n                            children: \"About Us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/components/toolbar-menu.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(ToolbarMenu, \"FjMrmJj4LhCHxCWwsrgHxswHU5A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = ToolbarMenu;\nvar _c;\n$RefreshReg$(_c, \"ToolbarMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rvb2xiYXItbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0k7QUFDZTtBQUNGO0FBQ1Y7QUFDUTtBQUNEO0FBQ2hCO0FBRWQsU0FBU1E7O0lBRXBCLE1BQU1DLFdBQVdILDREQUFXQTtJQUU1QixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR1gsMkNBQWMsQ0FBQztJQUUvQyxNQUFNYSxPQUFPQyxRQUFRSjtJQUVyQixNQUFNSyxjQUFjLENBQUNDO1FBQ2pCTCxZQUFZSyxNQUFNQyxhQUFhO0lBQ25DO0lBRUEsTUFBTUMsY0FBYztRQUNoQlAsWUFBWTtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDVix5REFBR0E7UUFBQ2tCLElBQUk7WUFBRUMsVUFBVTtRQUFFOzswQkFDbkIsOERBQUNsQixnRUFBVUE7Z0JBQ1BtQixNQUFLO2dCQUNMQyxNQUFLO2dCQUNMQyxPQUFNO2dCQUNOQyxjQUFXO2dCQUNYQyxpQkFBZVosT0FBTyxlQUFlYTtnQkFDckNDLGlCQUFjO2dCQUNkQyxpQkFBZWYsT0FBTyxTQUFTYTtnQkFDL0JHLFNBQVNkO2dCQUNUSSxJQUFJO29CQUFFVyxTQUFTO3dCQUFFQyxJQUFJO3dCQUFTQyxJQUFJO3dCQUFTQyxJQUFJO3dCQUFRQyxJQUFJO29CQUFPO2dCQUFFOzBCQUNwRSw0RUFBQy9CLGdFQUFRQTs7Ozs7Ozs7OzswQkFHYiw4REFBQ0MsMERBQUlBO2dCQUNEK0IsY0FBYztvQkFDVkMsVUFBVTtvQkFDVkMsWUFBWTtnQkFDaEI7Z0JBQ0FDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtvQkFDYkgsVUFBVTtvQkFDVkMsWUFBWTtnQkFDaEI7Z0JBQ0EzQixVQUFVQTtnQkFDVkcsTUFBTUE7Z0JBQ04yQixTQUFTdEI7Z0JBQ1R1QixlQUFlO29CQUNYLG1CQUFtQjtnQkFDdkI7O2tDQUVBLDhEQUFDbEMsa0RBQUlBO3dCQUFDbUMsTUFBSztrQ0FDUCw0RUFBQ3JDLDhEQUFRQTs0QkFDTHdCLFNBQVNYOzRCQUNUQyxJQUFJO2dDQUFFd0IsU0FBU2xDLGFBQWEsTUFBTSxtQkFBbUI7NEJBQUc7c0NBQzNEOzs7Ozs7Ozs7OztrQ0FJTCw4REFBQ0Ysa0RBQUlBO3dCQUFDbUMsTUFBSztrQ0FDUCw0RUFBQ3JDLDhEQUFRQTs0QkFDTHdCLFNBQVNYOzRCQUNUQyxJQUFJO2dDQUFFd0IsU0FBU2xDLGFBQWEsZUFBZSxtQkFBbUI7NEJBQUc7c0NBQ3BFOzs7Ozs7Ozs7OztrQ0FJTCw4REFBQ0Ysa0RBQUlBO3dCQUFDbUMsTUFBSztrQ0FDUCw0RUFBQ3JDLDhEQUFRQTs0QkFDTHdCLFNBQVNYOzRCQUNUQyxJQUFJO2dDQUFFd0IsU0FBU2xDLGFBQWEsV0FBVyxtQkFBbUI7NEJBQUc7c0NBQ2hFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCckI7R0FwRndCRDs7UUFFSEYsd0RBQVdBOzs7S0FGUkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYmFyLW1lbnUuanM/YzcwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9vbGJhck1lbnUoKSB7XHJcblxyXG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG5cclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDAgfX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gJ2Jhc2ljLW1lbnUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogeyB4czogJ2Jsb2NrJywgc206ICdibG9jaycsIG1kOiAnbm9uZScsIGxnOiAnbm9uZScgfSB9fSAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBNZW51TGlzdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdiYXNpYy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJnY29sb3I6IHBhdGhuYW1lID09PSBcIi9cIiA/IFwic2Vjb25kYXJ5Lm1haW5cIiA6IFwiXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZS9hZGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJnY29sb3I6IHBhdGhuYW1lID09PSBcIi9tb3ZpZS9hZGRcIiA/IFwic2Vjb25kYXJ5Lm1haW5cIiA6IFwiXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBiZ2NvbG9yOiBwYXRobmFtZSA9PT0gXCIvYWJvdXRcIiA/IFwic2Vjb25kYXJ5Lm1haW5cIiA6IFwiXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHsvKiA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvY29udGFjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtwYXRobmFtZSA9PT0gXCIvY29udGFjdHNcIn1cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyBiZ2NvbG9yOiBwYXRobmFtZSA9PT0gXCIvY29udGFjdHNcIiA/IFwic2Vjb25kYXJ5Lm1haW5cIiA6IFwiXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0c1xyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT4gKi99XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiSWNvbkJ1dHRvbiIsIk1lbnVJY29uIiwiTWVudSIsIk1lbnVJdGVtIiwidXNlUGF0aG5hbWUiLCJMaW5rIiwiVG9vbGJhck1lbnUiLCJwYXRobmFtZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInN4IiwiZmxleEdyb3ciLCJzaXplIiwiZWRnZSIsImNvbG9yIiwiYXJpYS1sYWJlbCIsImFyaWEtY29udHJvbHMiLCJ1bmRlZmluZWQiLCJhcmlhLWhhc3BvcHVwIiwiYXJpYS1leHBhbmRlZCIsIm9uQ2xpY2siLCJkaXNwbGF5IiwieHMiLCJzbSIsIm1kIiwibGciLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJrZWVwTW91bnRlZCIsInRyYW5zZm9ybU9yaWdpbiIsIm9uQ2xvc2UiLCJNZW51TGlzdFByb3BzIiwiaHJlZiIsImJnY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/toolbar-menu.js\n"));

/***/ })

});