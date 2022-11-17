"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/RegisterVideo/index.js":
/*!***********************************************!*\
  !*** ./src/components/RegisterVideo/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n/* harmony import */ var _services_videoServices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/videoServices.js */ \"./src/services/videoServices.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction useForm(param) {\n    let { initialValues  } = param;\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialValues);\n    return {\n        values,\n        handleChange (e) {\n            const value = e.target.value;\n            const name = e.target.name;\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"4lcv5AY4KdEfpz8E2Yi+UXqs8J8=\");\nfunction RegisterVideo() {\n    _s1();\n    const form = useForm({\n        initialValues: {\n            titulo: \"\",\n            url: \"\",\n            playlist: \"\"\n        }\n    });\n    const [formVisivel, setformVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const PROJECT_URL = \"https://fwrkrlbgrdsacsjzjyfp.supabase.co\";\n    const PUBLIC_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cmtybGJncmRzYWNzanpqeWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODk1OTIsImV4cCI6MTk4Mzk2NTU5Mn0.TNKw_ndwn1A4rWkNu-0tNCfjKWJ72swLcBCDFKU79o4\";\n    const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(PROJECT_URL, PUBLIC_KEY);\n    const service = (0,_services_videoServices_js__WEBPACK_IMPORTED_MODULE_3__.videoService)();\n    function displayForm() {\n        setformVisivel(!formVisivel);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: displayForm,\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            formVisivel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    supabase.from(\"video\").insert({\n                        title: form.values.titulo,\n                        url: form.values.url,\n                        thumb: service.getThumbnail(form.values.url),\n                        playlist: form.values.playlist\n                    }).then((result)=>{\n                        console.log(result);\n                    }).catch((err)=>{\n                        console.log(err);\n                    });\n                    displayForm();\n                    form.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: form.values.url,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: service.getThumbnail(form.values.url),\n                                    alt: \"video\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            }, form.values.url, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"close-modal\",\n                            onClick: displayForm,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Titulo do v\\xeddeo\",\n                            name: \"titulo\",\n                            value: form.values.titulo,\n                            onChange: form.handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            value: form.values.url,\n                            name: \"url\",\n                            onChange: form.handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Playlist\",\n                            value: form.values.playlist,\n                            name: \"playlist\",\n                            onChange: form.handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s1(RegisterVideo, \"di3hskxxvR9K2Tmm+qYxijdc6/k=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3FCO0FBQ2dCO0FBQ1Y7QUFFckQsU0FBU0ksUUFBUSxLQUFpQixFQUFFO1FBQW5CLEVBQUVDLGNBQWEsRUFBRSxHQUFqQjs7SUFDZixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AscURBQWMsQ0FBQ0s7SUFFM0MsT0FBTztRQUNMQztRQUFRRyxjQUFhQyxDQUFDLEVBQUU7WUFDdEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1lBQzVCLE1BQU1FLE9BQU9ILEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSTtZQUMxQk4sVUFBVTtnQkFBRSxHQUFHRCxNQUFNO2dCQUFFLENBQUNPLEtBQUssRUFBRUY7WUFBTTtRQUN2QztRQUNBRyxhQUFZO1lBQ1ZQLFVBQVUsQ0FBQztRQUNiO0lBQ0Y7QUFDRjtHQWJTSDtBQWVNLFNBQVNXLGdCQUFnQjs7SUFDdEMsTUFBTUMsT0FBT1osUUFBUTtRQUFFQyxlQUFlO1lBQUVZLFFBQVE7WUFBSUMsS0FBSztZQUFJQyxVQUFVO1FBQUc7SUFBRTtJQUM1RSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3JCLHFEQUFjLENBQUMsS0FBSztJQUMxRCxNQUFNc0IsY0FBYztJQUNwQixNQUFNQyxhQUFhO0lBQ25CLE1BQU1DLFdBQVdyQixtRUFBWUEsQ0FBQ21CLGFBQWFDO0lBQzNDLE1BQU1FLFVBQVV2Qix3RUFBWUE7SUFFNUIsU0FBU3dCLGNBQWM7UUFDckJMLGVBQWUsQ0FBQ0Q7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ25CLHdEQUFtQkE7OzBCQUNsQiw4REFBQzBCO2dCQUFPQyxXQUFVO2dCQUFZQyxTQUFTSDswQkFBYTs7Ozs7O1lBQ25ETiw2QkFDQyw4REFBQ0o7Z0JBQUtjLFVBQVUsQ0FBQ3BCLElBQU07b0JBQ3JCQSxFQUFFcUIsY0FBYztvQkFFaEJQLFNBQVNRLElBQUksQ0FBQyxTQUFTQyxNQUFNLENBQUM7d0JBQzVCQyxPQUFPbEIsS0FBS1YsTUFBTSxDQUFDVyxNQUFNO3dCQUN6QkMsS0FBS0YsS0FBS1YsTUFBTSxDQUFDWSxHQUFHO3dCQUNwQmlCLE9BQU9WLFFBQVFXLFlBQVksQ0FBQ3BCLEtBQUtWLE1BQU0sQ0FBQ1ksR0FBRzt3QkFDM0NDLFVBQVVILEtBQUtWLE1BQU0sQ0FBQ2EsUUFBUTtvQkFDaEMsR0FDR2tCLElBQUksQ0FBQ0MsQ0FBQUEsU0FBVTt3QkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtvQkFDZCxHQUNDRyxLQUFLLENBQUNDLENBQUFBLE1BQU87d0JBQ1pILFFBQVFDLEdBQUcsQ0FBQ0U7b0JBQ2Q7b0JBRUZoQjtvQkFDQVYsS0FBS0YsU0FBUztnQkFFaEI7MEJBQ0UsNEVBQUM2Qjs7c0NBQ0MsOERBQUNBO3NDQUNDLDRFQUFDQztnQ0FBRUMsTUFBTTdCLEtBQUtWLE1BQU0sQ0FBQ1ksR0FBRzswQ0FDdEIsNEVBQUM0QjtvQ0FBSUMsS0FBS3RCLFFBQVFXLFlBQVksQ0FBQ3BCLEtBQUtWLE1BQU0sQ0FBQ1ksR0FBRztvQ0FBRzhCLEtBQUk7Ozs7OzsrQkFEeEJoQyxLQUFLVixNQUFNLENBQUNZLEdBQUc7Ozs7Ozs7Ozs7c0NBSWhELDhEQUFDUzs0QkFBT3NCLE1BQUs7NEJBQVNyQixXQUFVOzRCQUFjQyxTQUFTSDtzQ0FBYTs7Ozs7O3NDQUNwRSw4REFBQ3dCOzRCQUFNQyxhQUFZOzRCQUFrQnRDLE1BQUs7NEJBQVNGLE9BQU9LLEtBQUtWLE1BQU0sQ0FBQ1csTUFBTTs0QkFBRW1DLFVBQVVwQyxLQUFLUCxZQUFZOzRCQUFFNEMsUUFBUTs7Ozs7O3NDQUNuSCw4REFBQ0g7NEJBQU1DLGFBQVk7NEJBQU14QyxPQUFPSyxLQUFLVixNQUFNLENBQUNZLEdBQUc7NEJBQUVMLE1BQUs7NEJBQU11QyxVQUFVcEMsS0FBS1AsWUFBWTs0QkFBRTRDLFFBQVE7Ozs7OztzQ0FDakcsOERBQUNIOzRCQUFNQyxhQUFZOzRCQUFXeEMsT0FBT0ssS0FBS1YsTUFBTSxDQUFDYSxRQUFROzRCQUFFTixNQUFLOzRCQUFXdUMsVUFBVXBDLEtBQUtQLFlBQVk7NEJBQUU0QyxRQUFROzs7Ozs7c0NBQ2hILDhEQUFDMUI7NEJBQU9zQixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQyxDQUFDO0lBcER1QmxDOztRQUNUWDs7O0tBRFNXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyVmlkZW8vaW5kZXguanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0eWxlZFJlZ2lzdGVyVmlkZW8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdmlkZW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmlkZW9TZXJ2aWNlcy5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZUZvcm0oeyBpbml0aWFsVmFsdWVzIH0pIHtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB2YWx1ZXMsIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJGb3JtKCkge1xyXG4gICAgICBzZXRWYWx1ZXMoe30pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJWaWRlbygpIHtcclxuICBjb25zdCBmb3JtID0gdXNlRm9ybSh7IGluaXRpYWxWYWx1ZXM6IHsgdGl0dWxvOiAnJywgdXJsOiAnJywgcGxheWxpc3Q6ICcnLH0gfSk7XHJcbiAgY29uc3QgW2Zvcm1WaXNpdmVsLCBzZXRmb3JtVmlzaXZlbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgUFJPSkVDVF9VUkwgPSAnaHR0cHM6Ly9md3JrcmxiZ3Jkc2Fjc2p6anlmcC5zdXBhYmFzZS5jbydcclxuICBjb25zdCBQVUJMSUNfS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSnpkWEJoWW1GelpTSXNJbkpsWmlJNkltWjNjbXR5YkdKbmNtUnpZV056YW5wcWVXWndJaXdpY205c1pTSTZJbUZ1YjI0aUxDSnBZWFFpT2pFMk5qZ3pPRGsxT1RJc0ltVjRjQ0k2TVRrNE16azJOVFU1TW4wLlROS3dfbmR3bjFBNHJXa051LTB0TkNmaktXSjcyc3dMY0JDREZLVTc5bzQnXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoUFJPSkVDVF9VUkwsIFBVQkxJQ19LRVkpXHJcbiAgY29uc3Qgc2VydmljZSA9IHZpZGVvU2VydmljZSgpO1xyXG5cclxuICBmdW5jdGlvbiBkaXNwbGF5Rm9ybSgpIHtcclxuICAgIHNldGZvcm1WaXNpdmVsKCFmb3JtVmlzaXZlbClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkUmVnaXN0ZXJWaWRlbz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdmlkZW9cIiBvbkNsaWNrPXtkaXNwbGF5Rm9ybX0+KzwvYnV0dG9uPlxyXG4gICAgICB7Zm9ybVZpc2l2ZWwgJiYgKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIHN1cGFiYXNlLmZyb20oJ3ZpZGVvJykuaW5zZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IGZvcm0udmFsdWVzLnRpdHVsbyxcclxuICAgICAgICAgICAgdXJsOiBmb3JtLnZhbHVlcy51cmwsXHJcbiAgICAgICAgICAgIHRodW1iOiBzZXJ2aWNlLmdldFRodW1ibmFpbChmb3JtLnZhbHVlcy51cmwpLFxyXG4gICAgICAgICAgICBwbGF5bGlzdDogZm9ybS52YWx1ZXMucGxheWxpc3RcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgZGlzcGxheUZvcm0oKTtcclxuICAgICAgICAgIGZvcm0uY2xlYXJGb3JtKClcclxuXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2Zvcm0udmFsdWVzLnVybH0ga2V5PXtmb3JtLnZhbHVlcy51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlcnZpY2UuZ2V0VGh1bWJuYWlsKGZvcm0udmFsdWVzLnVybCl9IGFsdD1cInZpZGVvXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9e2Rpc3BsYXlGb3JtfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlRpdHVsbyBkbyB2w61kZW9cIiBuYW1lPVwidGl0dWxvXCIgdmFsdWU9e2Zvcm0udmFsdWVzLnRpdHVsb30gb25DaGFuZ2U9e2Zvcm0uaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJVUkxcIiB2YWx1ZT17Zm9ybS52YWx1ZXMudXJsfSBuYW1lPVwidXJsXCIgb25DaGFuZ2U9e2Zvcm0uaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQbGF5bGlzdFwiIHZhbHVlPXtmb3JtLnZhbHVlcy5wbGF5bGlzdH0gbmFtZT1cInBsYXlsaXN0XCIgb25DaGFuZ2U9e2Zvcm0uaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DYWRhc3RyYXI8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvU3R5bGVkUmVnaXN0ZXJWaWRlbz5cclxuICApXHJcbn0gICAgICBcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3R5bGVkUmVnaXN0ZXJWaWRlbyIsInZpZGVvU2VydmljZSIsImNyZWF0ZUNsaWVudCIsInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJuYW1lIiwiY2xlYXJGb3JtIiwiUmVnaXN0ZXJWaWRlbyIsImZvcm0iLCJ0aXR1bG8iLCJ1cmwiLCJwbGF5bGlzdCIsImZvcm1WaXNpdmVsIiwic2V0Zm9ybVZpc2l2ZWwiLCJQUk9KRUNUX1VSTCIsIlBVQkxJQ19LRVkiLCJzdXBhYmFzZSIsInNlcnZpY2UiLCJkaXNwbGF5Rm9ybSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZnJvbSIsImluc2VydCIsInRpdGxlIiwidGh1bWIiLCJnZXRUaHVtYm5haWwiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZGl2IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ0eXBlIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});