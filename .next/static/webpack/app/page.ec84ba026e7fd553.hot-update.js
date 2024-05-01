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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/hooks */ \"(app-pages-browser)/./lib/hooks.tsx\");\n/* harmony import */ var _lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/features/analyzeSlice */ \"(app-pages-browser)/./lib/features/analyzeSlice.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CreateFolder(param) {\n    let { onClose, analyzePatent } = param;\n    _s();\n    const [selectedFolder, setSelectedFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const dispatch = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const directories = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_3__.folders);\n    // Function to handle folder selection\n    const handleFolderClick = (folderName)=>{\n        setSelectedFolder(folderName);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-[200px] w-[400px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg p-4 pb-8 justify-between\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2 -mt-8 pt-10 flex items-center space-x-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-medium whitespace-nowrap\",\n                            children: \"New Folder\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"px-4 py-2 border border=[#C1C1C1] rounded rounded-lg\",\n                        type: \"\",\n                        placeholder: \"Type here...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 18\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end items-center w-full pl-4 pr-4 mt-6 space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap\",\n                                onClick: ()=>onClose(),\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-[#59808C] text-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-600 text-sm whitespace-nowrap\",\n                                onClick: analyzePatent,\n                                children: \"Create\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/CreateFolder.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(CreateFolder, \"ILnbNuZpfQUx/G47TO3zn0KxLHM=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = CreateFolder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateFolder);\nvar _c;\n$RefreshReg$(_c, \"CreateFolder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW9kYWxzL0NyZWF0ZUZvbGRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFFbUI7QUFHdEI7QUFPM0MsU0FBU0ksYUFBYSxLQUEyQztRQUEzQyxFQUFDQyxPQUFPLEVBQUVDLGFBQWEsRUFBb0IsR0FBM0M7O0lBQ2xCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBO0lBQ3BELE1BQU1TLFdBQVdQLDBEQUFjQTtJQUMvQixNQUFNUSxjQUFjVCwwREFBY0EsQ0FBQ0UsK0RBQU9BO0lBRTFDLHNDQUFzQztJQUN0QyxNQUFNUSxvQkFBb0IsQ0FBQ0M7UUFDdkJKLGtCQUFrQkk7SUFDdEI7SUFHQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFBZ0Q7MEJBQzNELDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQW1IO2tDQUc5SCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFFRCxXQUFVO3NDQUF3Qzs7Ozs7Ozs7Ozs7a0NBSXhELDhEQUFDRTt3QkFDRUYsV0FBVTt3QkFDVkcsTUFBSzt3QkFDTEMsYUFBWTs7Ozs7O2tDQVVoQiw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FDR0wsV0FBVTtnQ0FDVk0sU0FBUyxJQUFNZjswQ0FBVzs7Ozs7OzBDQUc5Qiw4REFBQ2M7Z0NBQ0dMLFdBQVU7Z0NBQ1ZNLFNBQVNkOzBDQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7R0FuRFNGOztRQUVZRixzREFBY0E7UUFDWEQsc0RBQWNBOzs7S0FIN0JHO0FBb0RULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9kYWxzL0NyZWF0ZUZvbGRlci50c3g/NzAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb2xkZXIsIEZpbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vbGliL2hvb2tzJztcbmltcG9ydCB7XG4gICAgYWRkRm9sZGVyLCBmb2xkZXJzXG4gIH0gZnJvbSAnLi4vLi4vbGliL2ZlYXR1cmVzL2FuYWx5emVTbGljZSc7XG5cbmludGVyZmFjZSBDcmVhdGVGb2xkZXJQcm9wcyB7XG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgICBhbmFseXplUGF0ZW50OiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBDcmVhdGVGb2xkZXIoe29uQ2xvc2UsIGFuYWx5emVQYXRlbnR9OiBDcmVhdGVGb2xkZXJQcm9wcykge1xuICAgIGNvbnN0IFtzZWxlY3RlZEZvbGRlciwgc2V0U2VsZWN0ZWRGb2xkZXJdID0gdXNlU3RhdGU8U3RyaW5nIHwgdW5kZWZpbmVkPigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCBkaXJlY3RvcmllcyA9IHVzZUFwcFNlbGVjdG9yKGZvbGRlcnMpO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvbGRlciBzZWxlY3Rpb25cbiAgICBjb25zdCBoYW5kbGVGb2xkZXJDbGljayA9IChmb2xkZXJOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRGb2xkZXIoZm9sZGVyTmFtZSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj4gey8qIFRoaXMgZGl2IGNlbnRlcnMgdGhlIG1vZGFsICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtWzIwMHB4XSB3LVs0MDBweF0gcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRENFNEU3XSBiZy13aGl0ZSBzaGFkb3ctbGcgcC00IHBiLTgganVzdGlmeS1iZXR3ZWVuXCI+IHsvKiBNYWtlIHRoaXMgYSBmbGV4IGNvbHVtbiBjb250YWluZXIgKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgLW10LTggcHQtMTAgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwXCI+TmV3IEZvbGRlcjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgey8qIElucHV0ICovfVxuICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyPVsjQzFDMUMxXSByb3VuZGVkIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHsvKiBCdXR0b25zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgdy1mdWxsIHBsLTQgcHItNCBtdC02IHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMzBweF0gcHgtNCBweS0yIGJnLXdoaXRlIGJvcmRlciBib3JkZXItWyNEQ0U0RTddIHJvdW5kZWQtbWQgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTMwMCBob3Zlcjp0ZXh0LWJsYWNrIHRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbG9zZSgpfT4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMzBweF0gcHgtNCBweS0yIGJnLVsjNTk4MDhDXSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItWyNEQ0U0RTddIHJvdW5kZWQtbWQgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FuYWx5emVQYXRlbnR9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUZvbGRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VBcHBTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwiZm9sZGVycyIsIkNyZWF0ZUZvbGRlciIsIm9uQ2xvc2UiLCJhbmFseXplUGF0ZW50Iiwic2VsZWN0ZWRGb2xkZXIiLCJzZXRTZWxlY3RlZEZvbGRlciIsImRpc3BhdGNoIiwiZGlyZWN0b3JpZXMiLCJoYW5kbGVGb2xkZXJDbGljayIsImZvbGRlck5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/modals/CreateFolder.tsx\n"));

/***/ })

});