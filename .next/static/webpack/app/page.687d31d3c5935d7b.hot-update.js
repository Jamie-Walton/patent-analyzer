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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CreateFolder(param) {\n    let { onClose, title, analyzePatent } = param;\n    _s();\n    const [selectedFolder, setSelectedFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Function to handle folder selection\n    const handleFolderClick = (folderName)=>{\n        setSelectedFolder(folderName);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-[200px] w-[300px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg p-4 pb-8 justify-between\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative float-right cursor-pointer\",\n                                onClick: onClose,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"#333333\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M6 18L18 6M6 6l12 12\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pl-4 pr-4 -mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-6 pt-10 flex items-center space-x-10\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-medium whitespace-nowrap\",\n                                        children: \"Save the new patent\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center w-full pl-4 pr-4 mt-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap\",\n                                    onClick: analyzePatent,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-[#59808C] text-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-600 text-sm whitespace-nowrap\",\n                                    onClick: analyzePatent,\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/components/modals/CreateFolder.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(CreateFolder, \"2hYDfkKuS5onTt/6wYj6UwZNSwM=\");\n_c = CreateFolder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateFolder);\nvar _c;\n$RefreshReg$(_c, \"CreateFolder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW9kYWxzL0NyZWF0ZUZvbGRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBUzlDLFNBQVNDLGFBQWEsS0FBa0Q7UUFBbEQsRUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBb0IsR0FBbEQ7O0lBQ2xCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBO0lBRXBELHNDQUFzQztJQUN0QyxNQUFNTyxvQkFBb0IsQ0FBQ0M7UUFDdkJGLGtCQUFrQkU7SUFDdEI7SUFHQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFBZ0Q7MEJBQzNELDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQW1IO2tDQUU5SCw4REFBQ0Q7OzBDQUNHLDhEQUFDQTtnQ0FBSUMsV0FBVTtnQ0FBc0NDLFNBQVNUOzBDQUMxRCw0RUFBQ1U7b0NBQUlDLE9BQU07b0NBQTZCSCxXQUFVO29DQUFVSSxNQUFLO29DQUFPQyxTQUFRO29DQUFZQyxRQUFPOzhDQUMvRiw0RUFBQ0M7d0NBQUtDLGVBQWM7d0NBQVFDLGdCQUFlO3dDQUFRQyxhQUFZO3dDQUFJQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUk3RSw4REFBQ1o7Z0NBQUlDLFdBQVU7MENBRVgsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDWTt3Q0FBRVosV0FBVTtrREFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBV2pFLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDYTtvQ0FDR2IsV0FBVTtvQ0FDVkMsU0FBU1A7OENBQWU7Ozs7Ozs4Q0FHNUIsOERBQUNtQjtvQ0FDR2IsV0FBVTtvQ0FDVkMsU0FBU1A7OENBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdCO0dBcERTSDtLQUFBQTtBQXFEVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGFscy9DcmVhdGVGb2xkZXIudHN4PzcwM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9sZGVyLCBGaWxlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIENyZWF0ZUZvbGRlclByb3BzIHtcbiAgICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgICBhbmFseXplUGF0ZW50PzogKCkgPT4gdm9pZDtcbiAgICB0aXRsZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlRm9sZGVyKHtvbkNsb3NlLCB0aXRsZSwgYW5hbHl6ZVBhdGVudH06IENyZWF0ZUZvbGRlclByb3BzKSB7XG4gICAgY29uc3QgW3NlbGVjdGVkRm9sZGVyLCBzZXRTZWxlY3RlZEZvbGRlcl0gPSB1c2VTdGF0ZTxTdHJpbmcgfCB1bmRlZmluZWQ+KClcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBmb2xkZXIgc2VsZWN0aW9uXG4gICAgY29uc3QgaGFuZGxlRm9sZGVyQ2xpY2sgPSAoZm9sZGVyTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkRm9sZGVyKGZvbGRlck5hbWUpO1xuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuXCI+IHsvKiBUaGlzIGRpdiBjZW50ZXJzIHRoZSBtb2RhbCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLVsyMDBweF0gdy1bMzAwcHhdIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0RDRTRFN10gYmctd2hpdGUgc2hhZG93LWxnIHAtNCBwYi04IGp1c3RpZnktYmV0d2VlblwiPiB7LyogTWFrZSB0aGlzIGEgZmxleCBjb2x1bW4gY29udGFpbmVyICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCIjMzMzMzMzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHByLTQgLW10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgcHQtMTAgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXBcIj5TYXZlIHRoZSBuZXcgcGF0ZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogQnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcGwtNCBwci00IG10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLVszMHB4XSBweC00IHB5LTIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1bI0RDRTRFN10gcm91bmRlZC1tZCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMzAwIGhvdmVyOnRleHQtYmxhY2sgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YW5hbHl6ZVBhdGVudH0+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLVszMHB4XSBweC00IHB5LTIgYmctWyM1OTgwOENdIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1bI0RDRTRFN10gcm91bmRlZC1tZCByb3VuZGVkIGhvdmVyOmJnLWdyYXktNjAwIHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FuYWx5emVQYXRlbnR9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUZvbGRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDcmVhdGVGb2xkZXIiLCJvbkNsb3NlIiwidGl0bGUiLCJhbmFseXplUGF0ZW50Iiwic2VsZWN0ZWRGb2xkZXIiLCJzZXRTZWxlY3RlZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwiZm9sZGVyTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/modals/CreateFolder.tsx\n"));

/***/ })

});