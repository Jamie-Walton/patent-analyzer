"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/modals/CreateFolder.tsx":
/*!********************************************!*\
  !*** ./components/modals/CreateFolder.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CreateFolder(param) {\n    let { onClose, title, analyzePatent } = param;\n    _s();\n    const [selectedFolder, setSelectedFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Function to handle folder selection\n    const handleFolderClick = (folderName)=>{\n        setSelectedFolder(folderName);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-[200px] w-[300px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg p-4 pb-8 justify-between\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative float-right cursor-pointer\",\n                                onClick: onClose,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"#333333\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M6 18L18 6M6 6l12 12\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pl-4 pr-4 -mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-6 pt-10 flex items-center space-x-10\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-medium whitespace-nowrap\",\n                                        children: \"Save the new patent\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center w-full pl-4 pr-4 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap\",\n                                children: \"Create New Folder\"\n                            }, void 0, false, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap\",\n                                        onClick: analyzePatent,\n                                        children: \"Skip Saving\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-[#59808C] text-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-600 text-sm whitespace-nowrap\",\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(CreateFolder, \"2hYDfkKuS5onTt/6wYj6UwZNSwM=\");\n_c = CreateFolder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateFolder);\nvar _c;\n$RefreshReg$(_c, \"CreateFolder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW9kYWxzL0NyZWF0ZUZvbGRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBUzlDLFNBQVNDLGFBQWEsS0FBa0Q7UUFBbEQsRUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBb0IsR0FBbEQ7O0lBQ2xCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBO0lBRXBELHNDQUFzQztJQUN0QyxNQUFNTyxvQkFBb0IsQ0FBQ0M7UUFDdkJGLGtCQUFrQkU7SUFDdEI7SUFHQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFBeUQ7MEJBQ3BFLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQW1IO2tDQUU5SCw4REFBQ0Q7OzBDQUNHLDhEQUFDQTtnQ0FBSUMsV0FBVTtnQ0FBc0NDLFNBQVNUOzBDQUMxRCw0RUFBQ1U7b0NBQUlDLE9BQU07b0NBQTZCSCxXQUFVO29DQUFVSSxNQUFLO29DQUFPQyxTQUFRO29DQUFZQyxRQUFPOzhDQUMvRiw0RUFBQ0M7d0NBQUtDLGVBQWM7d0NBQVFDLGdCQUFlO3dDQUFRQyxhQUFZO3dDQUFJQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUk3RSw4REFBQ1o7Z0NBQUlDLFdBQVU7MENBRVgsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDWTt3Q0FBRVosV0FBVTtrREFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBV2pFLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNhO2dDQUFPYixXQUFVOzBDQUF1Szs7Ozs7OzBDQUN6TCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDYTt3Q0FDR2IsV0FBVTt3Q0FDVkMsU0FBU1A7a0RBQWU7Ozs7OztrREFHNUIsOERBQUNtQjt3Q0FBT2IsV0FBVTtrREFBcUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vTTtHQWhEU1Q7S0FBQUE7QUFpRFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvQ3JlYXRlRm9sZGVyLnRzeD83MDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbGRlciwgRmlsZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBDcmVhdGVGb2xkZXJQcm9wcyB7XG4gICAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG4gICAgYW5hbHl6ZVBhdGVudD86ICgpID0+IHZvaWQ7XG4gICAgdGl0bGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIENyZWF0ZUZvbGRlcih7b25DbG9zZSwgdGl0bGUsIGFuYWx5emVQYXRlbnR9OiBDcmVhdGVGb2xkZXJQcm9wcykge1xuICAgIGNvbnN0IFtzZWxlY3RlZEZvbGRlciwgc2V0U2VsZWN0ZWRGb2xkZXJdID0gdXNlU3RhdGU8U3RyaW5nIHwgdW5kZWZpbmVkPigpXG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9sZGVyIHNlbGVjdGlvblxuICAgIGNvbnN0IGhhbmRsZUZvbGRlckNsaWNrID0gKGZvbGRlck5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZEZvbGRlcihmb2xkZXJOYW1lKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlblwiPiB7LyogVGhpcyBkaXYgY2VudGVycyB0aGUgbW9kYWwgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1bMjAwcHhdIHctWzMwMHB4XSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNEQ0U0RTddIGJnLXdoaXRlIHNoYWRvdy1sZyBwLTQgcGItOCBqdXN0aWZ5LWJldHdlZW5cIj4gey8qIE1ha2UgdGhpcyBhIGZsZXggY29sdW1uIGNvbnRhaW5lciAqL31cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsb2F0LXJpZ2h0IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiIzMzMzMzM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCBwci00IC1tdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IHB0LTEwIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwXCI+U2F2ZSB0aGUgbmV3IHBhdGVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIHBsLTQgcHItNCBtdC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMzBweF0gcHgtNCBweS0yIGJnLXdoaXRlIGJvcmRlciBib3JkZXItWyNEQ0U0RTddIHJvdW5kZWQtbWQgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTMwMCBob3Zlcjp0ZXh0LWJsYWNrIHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIj5DcmVhdGUgTmV3IEZvbGRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzMwcHhdIHB4LTQgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRENFNEU3XSByb3VuZGVkLW1kIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6dGV4dC1ibGFjayB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthbmFseXplUGF0ZW50fT4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNraXAgU2F2aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMzBweF0gcHgtNCBweS0yIGJnLVsjNTk4MDhDXSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItWyNEQ0U0RTddIHJvdW5kZWQtbWQgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRm9sZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNyZWF0ZUZvbGRlciIsIm9uQ2xvc2UiLCJ0aXRsZSIsImFuYWx5emVQYXRlbnQiLCJzZWxlY3RlZEZvbGRlciIsInNldFNlbGVjdGVkRm9sZGVyIiwiaGFuZGxlRm9sZGVyQ2xpY2siLCJmb2xkZXJOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/modals/CreateFolder.tsx\n"));

/***/ })

});