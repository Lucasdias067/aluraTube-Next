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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _src_styles_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/Timeline */ \"./src/styles/Timeline.js\");\n/* harmony import */ var _src_assets_Banner_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/Banner.jpg */ \"./src/assets/Banner.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_components_Menu_Reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Menu/Reset */ \"./src/components/Menu/Reset.js\");\n/* harmony import */ var _src_services_videoServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/services/videoServices */ \"./src/services/videoServices.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: \",\n        \";\\n\\n  img{\\n    width: 100%;\\n    height: 250px;\\n  }\\n\\n  section img{\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n  }\\n\\n  .user-info{\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    padding: 16px 32px;\\n    gap: 16px;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [valorDoFiltro, setValorDoFiltro] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(\"\");\n    const [playlists, setPlaylists] = react__WEBPACK_IMPORTED_MODULE_6___default().useState({});\n    const service = (0,_src_services_videoServices__WEBPACK_IMPORTED_MODULE_8__.videoService)();\n    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{\n        service.getAllVideos(setPlaylists);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    valorDoFiltro: valorDoFiltro,\n                    setValorDoFiltro: setValorDoFiltro\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                Object.keys(playlists).length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Timeline, {\n                    playlists: playlists,\n                    valorDoFiltro: valorDoFiltro\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Timeline, {\n                    playlists: _config_json__WEBPACK_IMPORTED_MODULE_2__.playlists,\n                    valorDoFiltro: valorDoFiltro\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Menu_Reset__WEBPACK_IMPORTED_MODULE_7__.Reset, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(HomePage, \"YEWFo2VzviDe0SqEEDforxD3yU4=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"pages__StyledHeader\",\n    componentId: \"sc-c03a3c97-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundLevel1;\n});\n_c1 = StyledHeader;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledHeader, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: _src_assets_Banner_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                width: _src_assets_Banner_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].width,\n                height: _src_assets_Banner_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].height\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"user-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"https://github.com/\".concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.github, \".png\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_2__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_2__.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Header;\n_config_json__WEBPACK_IMPORTED_MODULE_2__;\nfunction Timeline(param) {\n    let { playlists , valorDoFiltro  } = param;\n    const playlistNames = Object.keys(playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_styles_Timeline__WEBPACK_IMPORTED_MODULE_4__.StyledTimeline, {\n        children: playlistNames.map((playlistName)=>{\n            const videos = playlists[playlistName];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: playlistName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, this),\n                    console.log(playlistName),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: videos.filter((video)=>{\n                            return video.title.toLowerCase().includes(valorDoFiltro.toLowerCase());\n                        }).map((video)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: video.url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: video.thumb,\n                                        alt: \"video\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, video.url, true, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 19\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, playlistName, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\pages\\\\index.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_c3 = Timeline;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"StyledHeader\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRztBQUNHO0FBQ2M7QUFDWDtBQUNuQjtBQUMyQjtBQUNRO0FBRTdELFNBQVNRLFdBQVc7O0lBQ2xCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdMLHFEQUFjLENBQUM7SUFDekQsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLHFEQUFjLENBQUMsQ0FBQztJQUNsRCxNQUFNUyxVQUFVUCx5RUFBWUE7SUFFNUJGLHNEQUFlLENBQUMsSUFBTTtRQUNwQlMsUUFDR0UsWUFBWSxDQUFDSDtJQUNsQixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ0k7WUFBSUMsT0FBTztnQkFDVkMsU0FBUztnQkFDVEMsZUFBZTtnQkFDZkMsTUFBTTtZQUNSOzs4QkFDRSw4REFBQ25CLDREQUFJQTtvQkFBQ08sZUFBZUE7b0JBQWVDLGtCQUFrQkE7Ozs7Ozs4QkFDdEQsOERBQUNZOzs7OztnQkFDQUMsT0FBT0MsSUFBSSxDQUFDWixXQUFXYSxNQUFNLGlCQUMxQiw4REFBQ0M7b0JBQVNkLFdBQVdBO29CQUFXSCxlQUFlQTs7Ozs7eUNBQy9DLDhEQUFDaUI7b0JBQVNkLFdBQVdaLG1EQUFnQjtvQkFBRVMsZUFBZUE7Ozs7O3dCQUFpQjs4QkFDM0UsOERBQUNILDZEQUFLQTs7Ozs7Ozs7Ozs7O0FBSWQ7R0ExQlNFO0tBQUFBO0FBNEJULCtEQUFlQSxRQUFRQSxFQUFBO0FBRXZCLE1BQU1tQixlQUFlMUIsd0VBQVU7OztzQkFDVCxTQUFlMkI7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUMsZ0JBQWdCO0FBQUQ7TUFEcERGO0FBdUJOLFNBQVNMLFNBQVM7SUFDaEIscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0c7Z0JBQUlDLEtBQUszQixrRUFBVTtnQkFBRTRCLE9BQU81QixvRUFBWTtnQkFBRTZCLFFBQVE3QixxRUFBYTs7Ozs7OzBCQUNoRSw4REFBQzhCO2dCQUFRQyxXQUFVOztrQ0FDakIsOERBQUNMO3dCQUFJQyxLQUFLLHNCQUFvQyxPQUFkL0IsZ0RBQWEsRUFBQzs7Ozs7O2tDQUM5Qyw4REFBQ2lCOzswQ0FDQyw4REFBQ29COzBDQUFJckMsOENBQVc7Ozs7OzswQ0FDaEIsOERBQUN1QzswQ0FBR3ZDLHFEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDO01BYlNzQjtBQWFQdEIseUNBQU1BO0FBRVIsU0FBUzBCLFNBQVMsS0FBNEIsRUFBRTtRQUE5QixFQUFFZCxVQUFTLEVBQUVILGNBQWEsRUFBRSxHQUE1QjtJQUNoQixNQUFNZ0MsZ0JBQWdCbEIsT0FBT0MsSUFBSSxDQUFDWjtJQUNsQyxxQkFDRSw4REFBQ1QsZ0VBQWNBO2tCQUNac0MsY0FBY0MsR0FBRyxDQUFDQyxDQUFBQSxlQUFnQjtZQUNqQyxNQUFNQyxTQUFTaEMsU0FBUyxDQUFDK0IsYUFBYTtZQUN0QyxxQkFDRSw4REFBQ1Q7O2tDQUNDLDhEQUFDRztrQ0FBSU07Ozs7OztvQkFDSkUsUUFBUUMsR0FBRyxDQUFDSDtrQ0FDYiw4REFBQzFCO2tDQUNFMkIsT0FBT0csTUFBTSxDQUFDQyxDQUFBQSxRQUFTOzRCQUN0QixPQUFPQSxNQUFNQyxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDMUMsY0FBY3lDLFdBQVc7d0JBQ3JFLEdBQUdSLEdBQUcsQ0FBQ00sQ0FBQUEsUUFBUzs0QkFDZCxxQkFDRSw4REFBQ0k7Z0NBQUVDLE1BQU1MLE1BQU1NLEdBQUc7O2tEQUNoQiw4REFBQ3hCO3dDQUFJQyxLQUFLaUIsTUFBTU8sS0FBSzt3Q0FBRUMsS0FBSTs7Ozs7O2tEQUMzQiw4REFBQ0M7a0RBQ0VULE1BQU1DLEtBQUs7Ozs7Ozs7K0JBSFNELE1BQU1NLEdBQUc7Ozs7O3dCQU90Qzs7Ozs7OztlQWZVWDs7Ozs7UUFtQmxCOzs7Ozs7QUFHTjtNQTdCU2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IHsgU3R5bGVkVGltZWxpbmUgfSBmcm9tICcuLi9zcmMvc3R5bGVzL1RpbWVsaW5lJztcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9zcmMvYXNzZXRzL0Jhbm5lci5qcGcnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlc2V0IH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWVudS9SZXNldCc7XHJcbmltcG9ydCB7IHZpZGVvU2VydmljZSB9IGZyb20gJy4uL3NyYy9zZXJ2aWNlcy92aWRlb1NlcnZpY2VzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFt2YWxvckRvRmlsdHJvLCBzZXRWYWxvckRvRmlsdHJvXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGxheWxpc3RzLCBzZXRQbGF5bGlzdHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHNlcnZpY2UgPSB2aWRlb1NlcnZpY2UoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNlcnZpY2VcclxuICAgICAgLmdldEFsbFZpZGVvcyhzZXRQbGF5bGlzdHMpXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICB9fT5cclxuICAgICAgICA8TWVudSB2YWxvckRvRmlsdHJvPXt2YWxvckRvRmlsdHJvfSBzZXRWYWxvckRvRmlsdHJvPXtzZXRWYWxvckRvRmlsdHJvfSAvPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICB7T2JqZWN0LmtleXMocGxheWxpc3RzKS5sZW5ndGhcclxuICAgICAgICAgID8gPFRpbWVsaW5lIHBsYXlsaXN0cz17cGxheWxpc3RzfSB2YWxvckRvRmlsdHJvPXt2YWxvckRvRmlsdHJvfSAvPlxyXG4gICAgICAgICAgOiA8VGltZWxpbmUgcGxheWxpc3RzPXtjb25maWcucGxheWxpc3RzfSB2YWxvckRvRmlsdHJvPXt2YWxvckRvRmlsdHJvfSAvPn1cclxuICAgICAgICA8UmVzZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZExldmVsMX07XHJcblxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24gaW1ne1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAudXNlci1pbmZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgIGdhcDogMTZweDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRIZWFkZXI+XHJcbiAgICAgIDxpbWcgc3JjPXtCYW5uZXIuc3JjfSB3aWR0aD17QmFubmVyLndpZHRofSBoZWlnaHQ9e0Jhbm5lci5oZWlnaHR9IC8+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndXNlci1pbmZvJz5cclxuICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2NvbmZpZy5naXRodWJ9LnBuZ2B9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj57Y29uZmlnLm5hbWV9PC9oMj5cclxuICAgICAgICAgIDxwPntjb25maWcuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L1N0eWxlZEhlYWRlcj5cclxuICApXHJcbn0gY29uZmlnXHJcblxyXG5mdW5jdGlvbiBUaW1lbGluZSh7IHBsYXlsaXN0cywgdmFsb3JEb0ZpbHRybyB9KSB7XHJcbiAgY29uc3QgcGxheWxpc3ROYW1lcyA9IE9iamVjdC5rZXlzKHBsYXlsaXN0cylcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFRpbWVsaW5lPlxyXG4gICAgICB7cGxheWxpc3ROYW1lcy5tYXAocGxheWxpc3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCB2aWRlb3MgPSBwbGF5bGlzdHNbcGxheWxpc3ROYW1lXVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c2VjdGlvbiBrZXk9e3BsYXlsaXN0TmFtZX0+XHJcbiAgICAgICAgICAgIDxoMj57cGxheWxpc3ROYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhwbGF5bGlzdE5hbWUpfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt2aWRlb3MuZmlsdGVyKHZpZGVvID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWRlby50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbG9yRG9GaWx0cm8udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICB9KS5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmlkZW8udXJsfSBrZXk9e3ZpZGVvLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZpZGVvLnRodW1ifSBhbHQ9XCJ2aWRlb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlkZW8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L1N0eWxlZFRpbWVsaW5lPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJjb25maWciLCJzdHlsZWQiLCJNZW51IiwiU3R5bGVkVGltZWxpbmUiLCJCYW5uZXIiLCJSZWFjdCIsIlJlc2V0IiwidmlkZW9TZXJ2aWNlIiwiSG9tZVBhZ2UiLCJ2YWxvckRvRmlsdHJvIiwic2V0VmFsb3JEb0ZpbHRybyIsInVzZVN0YXRlIiwicGxheWxpc3RzIiwic2V0UGxheWxpc3RzIiwic2VydmljZSIsInVzZUVmZmVjdCIsImdldEFsbFZpZGVvcyIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiSGVhZGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlRpbWVsaW5lIiwiU3R5bGVkSGVhZGVyIiwidGhlbWUiLCJiYWNrZ3JvdW5kTGV2ZWwxIiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZ2l0aHViIiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwicGxheWxpc3ROYW1lcyIsIm1hcCIsInBsYXlsaXN0TmFtZSIsInZpZGVvcyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJ2aWRlbyIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImEiLCJocmVmIiwidXJsIiwidGh1bWIiLCJhbHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});