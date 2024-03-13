"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_movie_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/movie-card */ \"./components/movie-card.js\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loader */ \"./components/loader.js\");\n/* harmony import */ var _public_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/lib */ \"./public/lib.js\");\n/* harmony import */ var _public_movies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/movies */ \"./public/movies.js\");\n/* harmony import */ var _public_genres__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/genres */ \"./public/genres.js\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/InputLabel */ \"./node_modules/@mui/material/InputLabel/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Select */ \"./node_modules/@mui/material/Select/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const port = 8000;\n    const url = \"http://localhost:\".concat(port, \"/api/movie\");\n    const [moviesList, setMoviesList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const moviesListValue = { moviesList, setMoviesList };\n    // const [genres, setGenres] = useState([]);\n    // const genresValue = { genres, setGenres };\n    // const [directors, setDirectors] = useState([]);\n    // const directorsValue = { directors, setDirectors };\n    // const [actors, setActors] = useState([]);\n    // const actrosValue = { actors, setActors };\n    async function postAllMovies() {\n        return _public_movies__WEBPACK_IMPORTED_MODULE_8__[\"default\"].forEach((movie)=>{\n            axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(url, movie).then((response)=>{\n                console.log(response.data);\n            }).catch((error)=>console.error(error));\n        });\n    }\n    async function getMovies() {\n        return await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(url).then((response)=>{\n            if (response.data.length === 0) {\n                postAllMovies();\n            }\n            setMoviesList([\n                ...response.data\n            ]);\n        }).catch((error)=>console.error(error));\n    }\n    //eslint-disable-next-line\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies();\n    }, []);\n    const emptyOption = \" -- \";\n    const ascending = \"year-ascending\";\n    const descending = \"year-descending\";\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [listToShow, setListToShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedGenres, setSelectedGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedSortOption, setSelectedSortOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const genresArray = [\n        ..._public_genres__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n    const sortArray = [\n        ascending,\n        descending\n    ];\n    const optionsGenres = [\n        {\n            value: emptyOption,\n            label: emptyOption\n        },\n        ...genresArray.map((genre, i)=>({\n                value: genre,\n                label: (0,_public_lib__WEBPACK_IMPORTED_MODULE_7__.convertToTitleCase)(genre, \"-\")\n            }))\n    ];\n    const optionsYear = [\n        {\n            value: emptyOption,\n            label: emptyOption\n        },\n        ...sortArray.map((option, i)=>({\n                value: option,\n                label: (0,_public_lib__WEBPACK_IMPORTED_MODULE_7__.convertToTitleCase)(option, \" \")\n            }))\n    ];\n    const sortMoviesToShow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((array, howToSort)=>{\n        function sortAscending(array) {\n            return array.sort((movie1, movie2)=>Number(movie1.year) - Number(movie2.year));\n        }\n        function sortDescending(array) {\n            return array.sort((movie1, movie2)=>Number(movie2.year) - Number(movie1.year));\n        }\n        return array.length > 1 && howToSort === ascending ? sortAscending(array) : sortDescending(array);\n    }, [\n        ascending\n    ]);\n    const handleChangeGenres = (selectedOption)=>{\n        if (selectedOption.value === emptyOption) {\n            setSelectedGenres(null);\n        } else {\n            setSelectedGenres(selectedOption);\n        }\n    };\n    const handleChangeSort = (selectedOption)=>{\n        if (selectedOption.value === emptyOption) {\n            setSelectedSortOption(null);\n        } else {\n            setSelectedSortOption(selectedOption);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (moviesList.length > 0) {\n            if (selectedGenres) {\n                let updatedList = moviesList.filter((movie)=>movie.genres.includes(selectedGenres.value));\n                if (selectedSortOption) {\n                    updatedList = sortMoviesToShow(updatedList, selectedSortOption.value);\n                }\n                setListToShow(updatedList);\n            } else {\n                let updatedList = [\n                    ...moviesList\n                ];\n                if (selectedSortOption) {\n                    updatedList = sortMoviesToShow(updatedList, selectedSortOption.value);\n                }\n                setListToShow(updatedList);\n            }\n        }\n    }, [\n        moviesList,\n        selectedGenres,\n        selectedSortOption,\n        sortMoviesToShow\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (listToShow.length > 0) {\n            isLoading && setTimeout(()=>{\n                setIsLoading(false);\n            }, 500);\n        }\n    }, [\n        listToShow,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: \"Unreal Reel Insights!\",\n        subtitle: \"Explore in-depth information on the movies you love...\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Movie App\"\n                }, void 0, false, {\n                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                    lineNumber: 165,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                lineNumber: 164,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_3_(film)\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    sx: {\n                        display: \"flex\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        component: \"img\",\n                        height: \"340\",\n                        image: \"/static/images/sonic-poster.png\",\n                        alt: \"Sonic 3 poster\",\n                        sx: {\n                            top: \"0\",\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                        lineNumber: 176,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                    lineNumber: 168,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                lineNumber: 167,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    gap: \"10px\",\n                    bgcolor: \"primary\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        children: \"Browse By Genre...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                        lineNumber: 186,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                        variant: \"outlined\",\n                        id: \"genres-select\",\n                        size: \"small\",\n                        value: selectedGenres,\n                        label: \"Browse By Genre...\",\n                        onChange: handleChangeGenres,\n                        sx: {\n                            width: \"200px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                value: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                                    children: emptyOption\n                                }, void 0, false, {\n                                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                                    lineNumber: 197,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                                lineNumber: 196,\n                                columnNumber: 21\n                            }, this),\n                            genresArray.map((genre, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                    value: genre,\n                                    children: (0,_public_lib__WEBPACK_IMPORTED_MODULE_7__.convertToTitleCase)(genre, \"-\")\n                                }, i, false, {\n                                    fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                                    lineNumber: 202,\n                                    columnNumber: 29\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                        lineNumber: 187,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                lineNumber: 185,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    justifyContent: \"space-evenly\",\n                    p: \"40px\",\n                    flexWrap: \"wrap\",\n                    gap: \"40px\"\n                },\n                children: [\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                        lineNumber: 213,\n                        columnNumber: 31\n                    }, this),\n                    !isLoading && listToShow.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_movie_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            id: movie.id,\n                            title: movie.title,\n                            year: movie.year,\n                            runtime: movie.runtime,\n                            genres: movie.genres,\n                            directors: movie.directors,\n                            actors: movie.actors,\n                            plot: movie.plot,\n                            poster_url: movie.poster_url\n                        }, movie.id, false, {\n                            fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                            lineNumber: 216,\n                            columnNumber: 25\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n                lineNumber: 206,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anahitgardishyan/Documents/projects/nextjs-movie-app/pages/home.js\",\n        lineNumber: 161,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"2wItTTq48+rBgZqzboWgoohHEqo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QlQsTUFBTXpDLE1BQU15QyxJQUFJOzRCQUNoQmdDLFNBQVN6RSxNQUFNeUUsT0FBTzs0QkFDdEJwRixRQUFRVyxNQUFNWCxNQUFNOzRCQUNwQnFGLFdBQVcxRSxNQUFNMEUsU0FBUzs0QkFDMUJDLFFBQVEzRSxNQUFNMkUsTUFBTTs0QkFDcEJDLE1BQU01RSxNQUFNNEUsSUFBSTs0QkFDaEJDLFlBQVk3RSxNQUFNNkUsVUFBVTsyQkFUdkI3RSxNQUFNaUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnpDO0dBek53QnhFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3ZpZS1jYXJkXCJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCJcbmltcG9ydCB7IGNvbnZlcnRUb1RpdGxlQ2FzZSB9IGZyb20gXCIvcHVibGljL2xpYlwiXG5pbXBvcnQgbW92aWVzIGZyb20gXCIvcHVibGljL21vdmllc1wiXG5pbXBvcnQgZ2VucmVzIGZyb20gXCIvcHVibGljL2dlbnJlc1wiXG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbCdcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgY29uc3QgcG9ydCA9IDgwMDA7XG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2FwaS9tb3ZpZWA7XG5cbiAgICBjb25zdCBbbW92aWVzTGlzdCwgc2V0TW92aWVzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBjb25zdCBtb3ZpZXNMaXN0VmFsdWUgPSB7IG1vdmllc0xpc3QsIHNldE1vdmllc0xpc3QgfTtcblxuICAgIC8vIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgLy8gY29uc3QgZ2VucmVzVmFsdWUgPSB7IGdlbnJlcywgc2V0R2VucmVzIH07XG5cbiAgICAvLyBjb25zdCBbZGlyZWN0b3JzLCBzZXREaXJlY3RvcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIC8vIGNvbnN0IGRpcmVjdG9yc1ZhbHVlID0geyBkaXJlY3RvcnMsIHNldERpcmVjdG9ycyB9O1xuXG4gICAgLy8gY29uc3QgW2FjdG9ycywgc2V0QWN0b3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICAvLyBjb25zdCBhY3Ryb3NWYWx1ZSA9IHsgYWN0b3JzLCBzZXRBY3RvcnMgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHBvc3RBbGxNb3ZpZXMoKSB7XG5cbiAgICAgICAgcmV0dXJuIG1vdmllcy5mb3JFYWNoKG1vdmllID0+IHtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBvc3QodXJsLCBtb3ZpZSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE1vdmllcygpIHtcblxuICAgICAgICByZXR1cm4gYXdhaXQgYXhpb3NcbiAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RBbGxNb3ZpZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0TW92aWVzTGlzdChbLi4ucmVzcG9uc2UuZGF0YV0pO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgIH1cblxuICAgIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgZ2V0TW92aWVzKCk7IH0sIFtdKTtcblxuXG5cbiAgICBjb25zdCBlbXB0eU9wdGlvbiA9IFwiIC0tIFwiO1xuICAgIGNvbnN0IGFzY2VuZGluZyA9IFwieWVhci1hc2NlbmRpbmdcIjtcbiAgICBjb25zdCBkZXNjZW5kaW5nID0gXCJ5ZWFyLWRlc2NlbmRpbmdcIjtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IFtsaXN0VG9TaG93LCBzZXRMaXN0VG9TaG93XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZEdlbnJlcywgc2V0U2VsZWN0ZWRHZW5yZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NlbGVjdGVkU29ydE9wdGlvbiwgc2V0U2VsZWN0ZWRTb3J0T3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICBjb25zdCBnZW5yZXNBcnJheSA9IFsuLi5nZW5yZXNdO1xuICAgIGNvbnN0IHNvcnRBcnJheSA9IFthc2NlbmRpbmcsIGRlc2NlbmRpbmddO1xuXG4gICAgY29uc3Qgb3B0aW9uc0dlbnJlcyA9IFt7IHZhbHVlOiBlbXB0eU9wdGlvbiwgbGFiZWw6IGVtcHR5T3B0aW9uIH0sIC4uLmdlbnJlc0FycmF5Lm1hcCgoZ2VucmUsIGkpID0+IChcbiAgICAgICAgeyB2YWx1ZTogZ2VucmUsIGxhYmVsOiBjb252ZXJ0VG9UaXRsZUNhc2UoZ2VucmUsIFwiLVwiKSB9XG4gICAgKSldO1xuXG4gICAgY29uc3Qgb3B0aW9uc1llYXIgPSBbeyB2YWx1ZTogZW1wdHlPcHRpb24sIGxhYmVsOiBlbXB0eU9wdGlvbiB9LCAuLi5zb3J0QXJyYXkubWFwKChvcHRpb24sIGkpID0+IChcbiAgICAgICAgeyB2YWx1ZTogb3B0aW9uLCBsYWJlbDogY29udmVydFRvVGl0bGVDYXNlKG9wdGlvbiwgXCIgXCIpIH1cbiAgICApKV07XG5cbiAgICBjb25zdCBzb3J0TW92aWVzVG9TaG93ID0gdXNlQ2FsbGJhY2soKGFycmF5LCBob3dUb1NvcnQpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gc29ydEFzY2VuZGluZyhhcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LnNvcnQoKG1vdmllMSwgbW92aWUyKSA9PiBOdW1iZXIobW92aWUxLnllYXIpIC0gTnVtYmVyKG1vdmllMi55ZWFyKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzb3J0RGVzY2VuZGluZyhhcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LnNvcnQoKG1vdmllMSwgbW92aWUyKSA9PiBOdW1iZXIobW92aWUyLnllYXIpIC0gTnVtYmVyKG1vdmllMS55ZWFyKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYXJyYXkubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICAgIGhvd1RvU29ydCA9PT0gYXNjZW5kaW5nXG4gICAgICAgICAgICAgICAgPyBzb3J0QXNjZW5kaW5nKGFycmF5KVxuICAgICAgICAgICAgICAgIDogc29ydERlc2NlbmRpbmcoYXJyYXkpXG4gICAgICAgICk7XG4gICAgfSwgW2FzY2VuZGluZ10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlR2VucmVzID0gKHNlbGVjdGVkT3B0aW9uKSA9PiB7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLnZhbHVlID09PSBlbXB0eU9wdGlvbikge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRHZW5yZXMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZEdlbnJlcyhzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU29ydCA9IChzZWxlY3RlZE9wdGlvbikgPT4ge1xuXG4gICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi52YWx1ZSA9PT0gZW1wdHlPcHRpb24pIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkU29ydE9wdGlvbihudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkU29ydE9wdGlvbihzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG1vdmllc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkR2VucmVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZWRMaXN0ID0gbW92aWVzTGlzdC5maWx0ZXIoKG1vdmllKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIG1vdmllLmdlbnJlcy5pbmNsdWRlcyhzZWxlY3RlZEdlbnJlcy52YWx1ZSlcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRTb3J0T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRMaXN0ID0gc29ydE1vdmllc1RvU2hvdyh1cGRhdGVkTGlzdCwgc2VsZWN0ZWRTb3J0T3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0TGlzdFRvU2hvdyh1cGRhdGVkTGlzdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkTGlzdCA9IFsuLi5tb3ZpZXNMaXN0XTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRTb3J0T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRMaXN0ID0gc29ydE1vdmllc1RvU2hvdyh1cGRhdGVkTGlzdCwgc2VsZWN0ZWRTb3J0T3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0TGlzdFRvU2hvdyh1cGRhdGVkTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbbW92aWVzTGlzdCwgc2VsZWN0ZWRHZW5yZXMsIHNlbGVjdGVkU29ydE9wdGlvbiwgc29ydE1vdmllc1RvU2hvd10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RUb1Nob3cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaXNMb2FkaW5nXG4gICAgICAgICAgICAgICAgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0sIFtsaXN0VG9TaG93LCBpc0xvYWRpbmddKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dFxuICAgICAgICAgICAgdGl0bGU9XCJVbnJlYWwgUmVlbCBJbnNpZ2h0cyFcIlxuICAgICAgICAgICAgc3VidGl0bGU9XCJFeHBsb3JlIGluLWRlcHRoIGluZm9ybWF0aW9uIG9uIHRoZSBtb3ZpZXMgeW91IGxvdmUuLi5cIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Nb3ZpZSBBcHA8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NvbmljX3RoZV9IZWRnZWhvZ18zXyhmaWxtKVwiPlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM0MFwiXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL3N0YXRpYy9pbWFnZXMvaG9tZS1wb3N0ZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiU29uaWMgMyBwb3N0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzeD17eyB0b3A6IFwiMFwiLCBvYmplY3RGaXQ6IFwiY29udGFpblwiIH19XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvc3RhdGljL2ltYWdlcy9zb25pYy1wb3N0ZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNvbmljIDMgcG9zdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHRvcDogXCIwXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8Qm94IHN4PXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCIxMHB4XCIsIGJnY29sb3I6IFwicHJpbWFyeVwifX0+XG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWw+QnJvd3NlIEJ5IEdlbnJlLi4uPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ2VucmVzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnJlc31cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCcm93c2UgQnkgR2VucmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlR2VucmVzfVxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogXCIyMDBweFwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPntlbXB0eU9wdGlvbn08L2VtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbnJlc0FycmF5Lm1hcCgoZ2VucmUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpfSB2YWx1ZT17Z2VucmV9Pntjb252ZXJ0VG9UaXRsZUNhc2UoZ2VucmUsIFwiLVwiKX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIixcbiAgICAgICAgICAgICAgICBwOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICAgICAgICAgICAgZ2FwOiBcIjQwcHhcIixcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cbiAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIGxpc3RUb1Nob3cubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21vdmllLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXttb3ZpZS55ZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bnRpbWU9e21vdmllLnJ1bnRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VucmVzPXttb3ZpZS5nZW5yZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3JzPXttb3ZpZS5kaXJlY3RvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0b3JzPXttb3ZpZS5hY3RvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxvdD17bW92aWUucGxvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZXJfdXJsPXttb3ZpZS5wb3N0ZXJfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSkpfVxuICAgICAgICAgICAgICAgIHsvKiA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17eyB3aWR0aDogMzgwLCBoZWlnaHQ6IDQwMCwgfX0+PC9pPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9e3sgd2lkdGg6IDM4MCwgaGVpZ2h0OiA0MDAsIH19PjwvaT4gKi99XG5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiTGluayIsIkhlYWQiLCJDYXJkTWVkaWEiLCJheGlvcyIsIkJveCIsIkxheW91dCIsIk1vdmllQ2FyZCIsIkxvYWRlciIsImNvbnZlcnRUb1RpdGxlQ2FzZSIsIm1vdmllcyIsImdlbnJlcyIsIklucHV0TGFiZWwiLCJNZW51SXRlbSIsIlNlbGVjdCIsIkhvbWUiLCJwb3J0IiwidXJsIiwibW92aWVzTGlzdCIsInNldE1vdmllc0xpc3QiLCJwb3N0QWxsTW92aWVzIiwiZm9yRWFjaCIsIm1vdmllIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImdldE1vdmllcyIsImdldCIsImxlbmd0aCIsImVtcHR5T3B0aW9uIiwiYXNjZW5kaW5nIiwiZGVzY2VuZGluZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxpc3RUb1Nob3ciLCJzZXRMaXN0VG9TaG93Iiwic2VsZWN0ZWRHZW5yZXMiLCJzZXRTZWxlY3RlZEdlbnJlcyIsInNlbGVjdGVkU29ydE9wdGlvbiIsInNldFNlbGVjdGVkU29ydE9wdGlvbiIsImdlbnJlc0FycmF5Iiwic29ydEFycmF5Iiwib3B0aW9uc0dlbnJlcyIsInZhbHVlIiwibGFiZWwiLCJtYXAiLCJnZW5yZSIsImkiLCJvcHRpb25zWWVhciIsIm9wdGlvbiIsInNvcnRNb3ZpZXNUb1Nob3ciLCJhcnJheSIsImhvd1RvU29ydCIsInNvcnRBc2NlbmRpbmciLCJzb3J0IiwibW92aWUxIiwibW92aWUyIiwiTnVtYmVyIiwieWVhciIsInNvcnREZXNjZW5kaW5nIiwiaGFuZGxlQ2hhbmdlR2VucmVzIiwic2VsZWN0ZWRPcHRpb24iLCJoYW5kbGVDaGFuZ2VTb3J0IiwidXBkYXRlZExpc3QiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaHJlZiIsInN4IiwiZGlzcGxheSIsImNvbXBvbmVudCIsImhlaWdodCIsImltYWdlIiwiYWx0IiwidG9wIiwib2JqZWN0Rml0IiwiYWxpZ25JdGVtcyIsImdhcCIsImJnY29sb3IiLCJ2YXJpYW50IiwiaWQiLCJzaXplIiwib25DaGFuZ2UiLCJ3aWR0aCIsImVtIiwianVzdGlmeUNvbnRlbnQiLCJwIiwiZmxleFdyYXAiLCJydW50aW1lIiwiZGlyZWN0b3JzIiwiYWN0b3JzIiwicGxvdCIsInBvc3Rlcl91cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});