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

/***/ "./src/components/RegisterVideo/styles.js":
/*!************************************************!*\
  !*** ./src/components/RegisterVideo/styles.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledRegisterVideo\": function() { return /* binding */ StyledRegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  .add-video {\\n    width: 50px;\\n    height: 50px;\\n    font-size: 20px;\\n    color: inherit;\\n    position: fixed;\\n    bottom: 16px;\\n    right: 16px;\\n    border: 0;\\n    background-color: red;\\n    border-radius: 50%;\\n    z-index: 99;\\n    cursor: pointer;\\n  }\\n  .close-modal {\\n    width: 25px;\\n    height: 25px;\\n    position: absolute;\\n    top: 8px;\\n    right: 16px;\\n    color: inherit;\\n    background-color: transparent;\\n    border: none;\\n    cursor: pointer;\\n  }\\n  button[type=\"submit\"] {\\n    background-color: red;\\n    padding: 8px 16px;\\n    border: none;\\n    border-radius: 2px;\\n    cursor: pointer;\\n    color: inherit;\\n  }\\n  form {\\n    width: 100%;\\n    padding: 5%;\\n    background-color: rgba(0,0,0,0.5);\\n    position: fixed;\\n    top: 0; bottom: 0;\\n    left: 0; right: 0;\\n    z-index: 100;\\n    display: flex;\\n    justify-content: center;\\n    & > div {\\n      flex: 1;\\n      border-radius: 8px;\\n      max-width: 320px;\\n      background-color: ',\n        \";\\n      display: flex;\\n      flex-direction: column;\\n      position: relative;\\n      padding: 16px;\\n      padding-top: 40px;\\n\\n      div{\\n        width: 100%;\\n        img {\\n          width: 100%;\\n        }\\n      }\\n    }\\n  }\\n  input {\\n    border-radius: 2px;\\n    border: 1px solid \",\n        \";\\n    padding: 8px 10px;\\n    margin-bottom: 10px;\\n    outline: none;\\n    color: #222222;\\n    background-color: #f9f9f9;\\n    color: \",\n        \";\\n    background-color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledRegisterVideo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__StyledRegisterVideo\",\n    componentId: \"sc-b88d661a-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundLevel2;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.borderBase;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.backgroundBase;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL3N0eWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsc0JBQXNCRCx3RUFBVTs7O3NCQWdEbkIsU0FBZUc7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUMsZ0JBQWdCO0FBQUQsR0FpQnRDLFNBQWVEO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1FLFVBQVU7QUFBRCxHQU16QyxTQUFlRjtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNRyxhQUFhO0FBQUQsR0FDdEIsU0FBZUg7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUksY0FBYztBQUFELEdBRXhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyVmlkZW8vc3R5bGVzLmpzPzIyYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRSZWdpc3RlclZpZGVvID0gc3R5bGVkLmRpdmBcclxuICAuYWRkLXZpZGVvIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY2xvc2UtbW9kYWwge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwOyBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwOyByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZExldmVsMn07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcblxyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckJhc2V9O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRDb2xvckJhc2V9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kQmFzZX07XHJcbiAgfVxyXG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRSZWdpc3RlclZpZGVvIiwiZGl2IiwidGhlbWUiLCJiYWNrZ3JvdW5kTGV2ZWwyIiwiYm9yZGVyQmFzZSIsInRleHRDb2xvckJhc2UiLCJiYWNrZ3JvdW5kQmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/styles.js\n"));

/***/ })

});