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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n/* harmony import */ var _services_videoServices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/videoServices.js */ \"./src/services/videoServices.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction useForm(param) {\n    let { initialValues  } = param;\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialValues);\n    return {\n        values,\n        handleChange (e) {\n            const value = e.target.value;\n            const name = e.target.name;\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"4lcv5AY4KdEfpz8E2Yi+UXqs8J8=\");\nfunction RegisterVideo() {\n    _s1();\n    const form = useForm({\n        initialValues: {\n            titulo: \"\",\n            url: \"\"\n        }\n    });\n    const [formVisivel, setformVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const PROJECT_URL = \"https://fwrkrlbgrdsacsjzjyfp.supabase.co\";\n    const PUBLIC_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cmtybGJncmRzYWNzanpqeWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODk1OTIsImV4cCI6MTk4Mzk2NTU5Mn0.TNKw_ndwn1A4rWkNu-0tNCfjKWJ72swLcBCDFKU79o4\";\n    const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(PROJECT_URL, PUBLIC_KEY);\n    const service = (0,_services_videoServices_js__WEBPACK_IMPORTED_MODULE_3__.videoService)();\n    function displayForm() {\n        setformVisivel(!formVisivel);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: displayForm,\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            formVisivel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    supabase.from(\"video\").insert({\n                        title: form.values.titulo,\n                        url: form.values.url,\n                        thumb: service.getThumbnail(form.values.url),\n                        playlist: \"\"\n                    }).then((result)=>{\n                        console.log(result);\n                    }).catch((err)=>{\n                        console.log(err);\n                    });\n                    displayForm();\n                    form.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: form.values.url,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: service.getThumbnail(form.values.url),\n                                    alt: \"video\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            }, form.values.url, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"close-modal\",\n                            onClick: displayForm,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Titulo do v\\xeddeo\",\n                            name: \"titulo\",\n                            value: form.values.titulo,\n                            onChange: form.handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            value: form.values.url,\n                            name: \"url\",\n                            onChange: form.handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s1(RegisterVideo, \"di3hskxxvR9K2Tmm+qYxijdc6/k=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3FCO0FBQ2dCO0FBQ1Y7QUFFckQsU0FBU0ksUUFBUSxLQUFpQixFQUFFO1FBQW5CLEVBQUVDLGNBQWEsRUFBRSxHQUFqQjs7SUFDZixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AscURBQWMsQ0FBQ0s7SUFFM0MsT0FBTztRQUNMQztRQUFRRyxjQUFhQyxDQUFDLEVBQUU7WUFDdEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1lBQzVCLE1BQU1FLE9BQU9ILEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSTtZQUMxQk4sVUFBVTtnQkFBRSxHQUFHRCxNQUFNO2dCQUFFLENBQUNPLEtBQUssRUFBRUY7WUFBTTtRQUN2QztRQUNBRyxhQUFZO1lBQ1ZQLFVBQVUsQ0FBQztRQUNiO0lBQ0Y7QUFDRjtHQWJTSDtBQWVNLFNBQVNXLGdCQUFnQjs7SUFDdEMsTUFBTUMsT0FBT1osUUFBUTtRQUFFQyxlQUFlO1lBQUVZLFFBQVE7WUFBSUMsS0FBSztRQUFHO0lBQUU7SUFDOUQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdwQixxREFBYyxDQUFDLEtBQUs7SUFDMUQsTUFBTXFCLGNBQWM7SUFDcEIsTUFBTUMsYUFBYTtJQUNuQixNQUFNQyxXQUFXcEIsbUVBQVlBLENBQUNrQixhQUFhQztJQUMzQyxNQUFNRSxVQUFVdEIsd0VBQVlBO0lBRTVCLFNBQVN1QixjQUFjO1FBQ3JCTCxlQUFlLENBQUNEO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNsQix3REFBbUJBOzswQkFDbEIsOERBQUN5QjtnQkFBT0MsV0FBVTtnQkFBWUMsU0FBU0g7MEJBQWE7Ozs7OztZQUNuRE4sNkJBQ0MsOERBQUNIO2dCQUFLYSxVQUFVLENBQUNuQixJQUFNO29CQUNyQkEsRUFBRW9CLGNBQWM7b0JBRWhCUCxTQUFTUSxJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDO3dCQUM1QkMsT0FBT2pCLEtBQUtWLE1BQU0sQ0FBQ1csTUFBTTt3QkFDekJDLEtBQUtGLEtBQUtWLE1BQU0sQ0FBQ1ksR0FBRzt3QkFDcEJnQixPQUFPVixRQUFRVyxZQUFZLENBQUNuQixLQUFLVixNQUFNLENBQUNZLEdBQUc7d0JBQzNDa0IsVUFBVTtvQkFDWixHQUNHQyxJQUFJLENBQUNDLENBQUFBLFNBQVU7d0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7b0JBQ2QsR0FDQ0csS0FBSyxDQUFDQyxDQUFBQSxNQUFPO3dCQUNaSCxRQUFRQyxHQUFHLENBQUNFO29CQUNkO29CQUVGakI7b0JBQ0FULEtBQUtGLFNBQVM7Z0JBRWhCOzBCQUNFLDRFQUFDNkI7O3NDQUNDLDhEQUFDQTtzQ0FDQyw0RUFBQ0M7Z0NBQUVDLE1BQU03QixLQUFLVixNQUFNLENBQUNZLEdBQUc7MENBQ3RCLDRFQUFDNEI7b0NBQUlDLEtBQUt2QixRQUFRVyxZQUFZLENBQUNuQixLQUFLVixNQUFNLENBQUNZLEdBQUc7b0NBQUc4QixLQUFJOzs7Ozs7K0JBRHhCaEMsS0FBS1YsTUFBTSxDQUFDWSxHQUFHOzs7Ozs7Ozs7O3NDQUloRCw4REFBQ1E7NEJBQU91QixNQUFLOzRCQUFTdEIsV0FBVTs0QkFBY0MsU0FBU0g7c0NBQWE7Ozs7OztzQ0FDcEUsOERBQUN5Qjs0QkFBTUMsYUFBWTs0QkFBa0J0QyxNQUFLOzRCQUFTRixPQUFPSyxLQUFLVixNQUFNLENBQUNXLE1BQU07NEJBQUVtQyxVQUFVcEMsS0FBS1AsWUFBWTs0QkFBRTRDLFFBQVE7Ozs7OztzQ0FDbkgsOERBQUNIOzRCQUFNQyxhQUFZOzRCQUFNeEMsT0FBT0ssS0FBS1YsTUFBTSxDQUFDWSxHQUFHOzRCQUFFTCxNQUFLOzRCQUFNdUMsVUFBVXBDLEtBQUtQLFlBQVk7NEJBQUU0QyxRQUFROzs7Ozs7c0NBQ2pHLDhEQUFDM0I7NEJBQU91QixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQyxDQUFDO0lBbkR1QmxDOztRQUNUWDs7O0tBRFNXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyVmlkZW8vaW5kZXguanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0eWxlZFJlZ2lzdGVyVmlkZW8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdmlkZW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmlkZW9TZXJ2aWNlcy5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZUZvcm0oeyBpbml0aWFsVmFsdWVzIH0pIHtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB2YWx1ZXMsIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJGb3JtKCkge1xyXG4gICAgICBzZXRWYWx1ZXMoe30pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJWaWRlbygpIHtcclxuICBjb25zdCBmb3JtID0gdXNlRm9ybSh7IGluaXRpYWxWYWx1ZXM6IHsgdGl0dWxvOiAnJywgdXJsOiAnJyB9IH0pO1xyXG4gIGNvbnN0IFtmb3JtVmlzaXZlbCwgc2V0Zm9ybVZpc2l2ZWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFBST0pFQ1RfVVJMID0gJ2h0dHBzOi8vZndya3JsYmdyZHNhY3Nqemp5ZnAuc3VwYWJhc2UuY28nXHJcbiAgY29uc3QgUFVCTElDX0tFWSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbVozY210eWJHSm5jbVJ6WVdOemFucHFlV1p3SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTJOamd6T0RrMU9USXNJbVY0Y0NJNk1UazRNemsyTlRVNU1uMC5UTkt3X25kd24xQTRyV2tOdS0wdE5DZmpLV0o3MnN3TGNCQ0RGS1U3OW80J1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFBST0pFQ1RfVVJMLCBQVUJMSUNfS0VZKVxyXG4gIGNvbnN0IHNlcnZpY2UgPSB2aWRlb1NlcnZpY2UoKTtcclxuXHJcbiAgZnVuY3Rpb24gZGlzcGxheUZvcm0oKSB7XHJcbiAgICBzZXRmb3JtVmlzaXZlbCghZm9ybVZpc2l2ZWwpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCIgb25DbGljaz17ZGlzcGxheUZvcm19Pis8L2J1dHRvbj5cclxuICAgICAge2Zvcm1WaXNpdmVsICYmIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBzdXBhYmFzZS5mcm9tKCd2aWRlbycpLmluc2VydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtLnZhbHVlcy50aXR1bG8sXHJcbiAgICAgICAgICAgIHVybDogZm9ybS52YWx1ZXMudXJsLFxyXG4gICAgICAgICAgICB0aHVtYjogc2VydmljZS5nZXRUaHVtYm5haWwoZm9ybS52YWx1ZXMudXJsKSxcclxuICAgICAgICAgICAgcGxheWxpc3Q6ICcnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGRpc3BsYXlGb3JtKCk7XHJcbiAgICAgICAgICBmb3JtLmNsZWFyRm9ybSgpXHJcblxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtmb3JtLnZhbHVlcy51cmx9IGtleT17Zm9ybS52YWx1ZXMudXJsfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZXJ2aWNlLmdldFRodW1ibmFpbChmb3JtLnZhbHVlcy51cmwpfSBhbHQ9XCJ2aWRlb1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXtkaXNwbGF5Rm9ybX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUaXR1bG8gZG8gdsOtZGVvXCIgbmFtZT1cInRpdHVsb1wiIHZhbHVlPXtmb3JtLnZhbHVlcy50aXR1bG99IG9uQ2hhbmdlPXtmb3JtLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVVJMXCIgdmFsdWU9e2Zvcm0udmFsdWVzLnVybH0gbmFtZT1cInVybFwiIG9uQ2hhbmdlPXtmb3JtLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2FkYXN0cmFyPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L1N0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgKVxyXG59ICAgICAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlZFJlZ2lzdGVyVmlkZW8iLCJ2aWRlb1NlcnZpY2UiLCJjcmVhdGVDbGllbnQiLCJ1c2VGb3JtIiwiaW5pdGlhbFZhbHVlcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibmFtZSIsImNsZWFyRm9ybSIsIlJlZ2lzdGVyVmlkZW8iLCJmb3JtIiwidGl0dWxvIiwidXJsIiwiZm9ybVZpc2l2ZWwiLCJzZXRmb3JtVmlzaXZlbCIsIlBST0pFQ1RfVVJMIiwiUFVCTElDX0tFWSIsInN1cGFiYXNlIiwic2VydmljZSIsImRpc3BsYXlGb3JtIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmcm9tIiwiaW5zZXJ0IiwidGl0bGUiLCJ0aHVtYiIsImdldFRodW1ibmFpbCIsInBsYXlsaXN0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImRpdiIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwidHlwZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});