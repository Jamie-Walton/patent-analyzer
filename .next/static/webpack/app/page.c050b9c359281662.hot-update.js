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

/***/ "(app-pages-browser)/./components/modals/SavePatent.tsx":
/*!******************************************!*\
  !*** ./components/modals/SavePatent.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_File_Folder_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=File,Folder!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file.js\");\n/* harmony import */ var _barrel_optimize_names_File_Folder_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=File,Folder!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/folder.js\");\n/* harmony import */ var _CreateFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateFolder */ \"(app-pages-browser)/./components/modals/CreateFolder.tsx\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/hooks */ \"(app-pages-browser)/./lib/hooks.tsx\");\n/* harmony import */ var _lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/features/analyzeSlice */ \"(app-pages-browser)/./lib/features/analyzeSlice.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SavePatent(param) {\n    let { onClose, title, analyzePatent } = param;\n    _s();\n    const [selectedFolder, setSelectedFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const directories = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_4__.folders);\n    // Handles truncating the patent filename if it's too long\n    // function formatTitle(title: string, maxLength: number = 28): string {\n    //     return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;\n    // }\n    // Function to handle folder selection\n    const handleFolderClick = (folderName)=>{\n        setSelectedFolder(folderName);\n    };\n    if (isModalVisible) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateFolder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            onClose: ()=>setIsModalVisible(false),\n            analyzePatent: analyzePatent\n        }, void 0, false, {\n            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n            lineNumber: 31,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-[500px] w-[500px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg p-4 pb-8 justify-between\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative float-right cursor-pointer\",\n                                onClick: onClose,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"#333333\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M6 18L18 6M6 6l12 12\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pl-4 pr-4 -mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-6 pt-10 flex items-center space-x-10\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-medium whitespace-nowrap\",\n                                                children: \"Save the new patent\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center space-x-1 justify-center \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_File_Folder_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        size: 14\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 33\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-xs truncate overflow-ellipsis whitespace-nowrap\",\n                                                        children: title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 33\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col space-y-2\",\n                                        children: directories.map((folder)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center space-x-2 border border-[#DAE5EA] rounded-xl bg-white py-2 px-3 \".concat(selectedFolder === folder.name ? \"!bg-[#BCD3DB]\" : \"hover:bg-[#BCD3DB] cursor-pointer\"),\n                                                style: {\n                                                    boxShadow: \"0px 1px 10px 0px rgba(0, 0, 0, 0.10)\"\n                                                },\n                                                onClick: ()=>handleFolderClick(folder.name),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_File_Folder_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        size: 15\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-sm\",\n                                                        children: folder.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 37\n                                                    }, this)\n                                                ]\n                                            }, folder.name, true, {\n                                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 33\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"py-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            width: \"220\",\n                                            height: \"2\",\n                                            viewBox: \"0 0 352 2\",\n                                            fill: \"none\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M1 1H351\",\n                                                stroke: \"#DAE5EA\",\n                                                \"stroke-linecap\": \"round\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center w-full pl-4 pr-4 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap\",\n                                onClick: ()=>setIsModalVisible(true),\n                                children: \"Create New Folder\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap\",\n                                        onClick: analyzePatent,\n                                        children: \"Skip Saving\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex items-center justify-center h-[30px] px-4 py-2 bg-[#59808C] text-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-600 text-sm whitespace-nowrap\",\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/components/modals/SavePatent.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(SavePatent, \"fckDsVU5dB2o1KndhwGUhXOHAuA=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = SavePatent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SavePatent);\nvar _c;\n$RefreshReg$(_c, \"SavePatent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW9kYWxzL1NhdmVQYXRlbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0Y7QUFDRjtBQUNPO0FBR047QUFRM0MsU0FBU00sV0FBVyxLQUFnRDtRQUFoRCxFQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFrQixHQUFoRDs7SUFDaEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUE7SUFDcEQsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNYyxjQUFjViwwREFBY0EsQ0FBQ0MsK0RBQU9BO0lBRTFDLDBEQUEwRDtJQUMxRCx3RUFBd0U7SUFDeEUsdUZBQXVGO0lBQ3ZGLElBQUk7SUFFSixzQ0FBc0M7SUFDdEMsTUFBTVUsb0JBQW9CLENBQUNDO1FBQ3ZCTCxrQkFBa0JLO0lBQ3RCO0lBRUEsSUFBSUosZ0JBQWdCO1FBQ2hCLHFCQUFPLDhEQUFDVCxxREFBWUE7WUFBQ0ksU0FBUyxJQUFNTSxrQkFBa0I7WUFBUUosZUFBZUE7Ozs7OztJQUNqRjtJQUdBLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVOztZQUF5RDswQkFDcEUsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFBbUg7a0NBRTlILDhEQUFDRDs7MENBQ0csOERBQUNBO2dDQUFJQyxXQUFVO2dDQUFzQ0MsU0FBU1o7MENBQzFELDRFQUFDYTtvQ0FBSUMsT0FBTTtvQ0FBNkJILFdBQVU7b0NBQVVJLE1BQUs7b0NBQU9DLFNBQVE7b0NBQVlDLFFBQU87OENBQy9GLDRFQUFDQzt3Q0FBS0MsZUFBYzt3Q0FBUUMsZ0JBQWU7d0NBQVFDLGFBQVk7d0NBQUlDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSTdFLDhEQUFDWjtnQ0FBSUMsV0FBVTs7a0RBRVgsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ1k7Z0RBQUVaLFdBQVU7MERBQXdDOzs7Ozs7MERBQ3JELDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ1gsOERBQUNoQix1RkFBSUE7d0RBQUM2QixNQUFNOzs7Ozs7a0VBQ1osOERBQUNEO3dEQUFFWixXQUFVO2tFQUF3RFY7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFLN0UsOERBQUNTO3dDQUFJQyxXQUFVO2tEQUNWSixZQUFZa0IsR0FBRyxDQUFDLENBQUNDLHVCQUNkLDhEQUFDaEI7Z0RBRUdDLFdBQVcscUZBQTRLLE9BQXZGUixtQkFBbUJ1QixPQUFPQyxJQUFJLEdBQUcsa0JBQWtCO2dEQUNuSkMsT0FBTztvREFBRUMsV0FBVztnREFBdUM7Z0RBQzNEakIsU0FBUyxJQUFNSixrQkFBa0JrQixPQUFPQyxJQUFJOztrRUFFNUMsOERBQUNqQyx1RkFBTUE7d0RBQUM4QixNQUFNOzs7Ozs7a0VBQ2QsOERBQUNEO3dEQUFFWixXQUFVO2tFQUFXZSxPQUFPQyxJQUFJOzs7Ozs7OytDQU45QkQsT0FBT0MsSUFBSTs7Ozs7Ozs7OztrREFZNUIsOERBQUNqQjt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0U7NENBQUlDLE9BQU07NENBQTZCZ0IsT0FBTTs0Q0FBTUMsUUFBTzs0Q0FBSWYsU0FBUTs0Q0FBWUQsTUFBSztzREFDcEYsNEVBQUNHO2dEQUFLSSxHQUFFO2dEQUFXTCxRQUFPO2dEQUFVZSxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FxQm5FLDhEQUFDdEI7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDc0I7Z0NBQ0d0QixXQUFVO2dDQUNWQyxTQUFTLElBQU1OLGtCQUFrQjswQ0FDaEM7Ozs7OzswQ0FHTCw4REFBQ0k7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDc0I7d0NBQ0d0QixXQUFVO3dDQUNWQyxTQUFTVjtrREFBZTs7Ozs7O2tEQUc1Qiw4REFBQytCO3dDQUFPdEIsV0FBVTtrREFBcUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEvTTtHQXJHU1o7O1FBR2VGLHNEQUFjQTs7O0tBSDdCRTtBQXNHVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGFscy9TYXZlUGF0ZW50LnRzeD9lMmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbGRlciwgRmlsZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgQ3JlYXRlRm9sZGVyIGZyb20gJy4vQ3JlYXRlRm9sZGVyJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vbGliL2hvb2tzJztcbmltcG9ydCB7XG4gICAgZm9sZGVyc1xuICB9IGZyb20gJy4uLy4uL2xpYi9mZWF0dXJlcy9hbmFseXplU2xpY2UnO1xuXG5pbnRlcmZhY2UgU2F2ZVBhdGVudFByb3BzIHtcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICAgIGFuYWx5emVQYXRlbnQ6ICgpID0+IHZvaWQ7XG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gU2F2ZVBhdGVudCh7b25DbG9zZSwgdGl0bGUsIGFuYWx5emVQYXRlbnR9OiBTYXZlUGF0ZW50UHJvcHMpIHtcbiAgICBjb25zdCBbc2VsZWN0ZWRGb2xkZXIsIHNldFNlbGVjdGVkRm9sZGVyXSA9IHVzZVN0YXRlPFN0cmluZyB8IHVuZGVmaW5lZD4oKVxuICAgIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gdXNlQXBwU2VsZWN0b3IoZm9sZGVycyk7XG5cbiAgICAvLyBIYW5kbGVzIHRydW5jYXRpbmcgdGhlIHBhdGVudCBmaWxlbmFtZSBpZiBpdCdzIHRvbyBsb25nXG4gICAgLy8gZnVuY3Rpb24gZm9ybWF0VGl0bGUodGl0bGU6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIgPSAyOCk6IHN0cmluZyB7XG4gICAgLy8gICAgIHJldHVybiB0aXRsZS5sZW5ndGggPiBtYXhMZW5ndGggPyBgJHt0aXRsZS5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoKX0uLi5gIDogdGl0bGU7XG4gICAgLy8gfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvbGRlciBzZWxlY3Rpb25cbiAgICBjb25zdCBoYW5kbGVGb2xkZXJDbGljayA9IChmb2xkZXJOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRGb2xkZXIoZm9sZGVyTmFtZSk7XG4gICAgfTtcblxuICAgIGlmIChpc01vZGFsVmlzaWJsZSkge1xuICAgICAgICByZXR1cm4gPENyZWF0ZUZvbGRlciBvbkNsb3NlPXsoKSA9PiBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSl9IGFuYWx5emVQYXRlbnQ9e2FuYWx5emVQYXRlbnR9IC8+O1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj4gey8qIFRoaXMgZGl2IGNlbnRlcnMgdGhlIG1vZGFsICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtWzUwMHB4XSB3LVs1MDBweF0gcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRENFNEU3XSBiZy13aGl0ZSBzaGFkb3ctbGcgcC00IHBiLTgganVzdGlmeS1iZXR3ZWVuXCI+IHsvKiBNYWtlIHRoaXMgYSBmbGV4IGNvbHVtbiBjb250YWluZXIgKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbG9hdC1yaWdodCBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC01IHctNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cIiMzMzMzMzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgcHItNCAtbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBwdC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlNhdmUgdGhlIG5ldyBwYXRlbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlIHNpemU9ezE0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdHJ1bmNhdGUgb3ZlcmZsb3ctZWxsaXBzaXMgd2hpdGVzcGFjZS1ub3dyYXBcIj57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBGb2xkZXJzIGEgdXNlciBjYW4gc2VsZWN0IGZyb20gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpcmVjdG9yaWVzLm1hcCgoZm9sZGVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Zm9sZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgYm9yZGVyIGJvcmRlci1bI0RBRTVFQV0gcm91bmRlZC14bCBiZy13aGl0ZSBweS0yIHB4LTMgJHtzZWxlY3RlZEZvbGRlciA9PT0gZm9sZGVyLm5hbWUgPyAnIWJnLVsjQkNEM0RCXScgOiAnaG92ZXI6YmctWyNCQ0QzREJdIGN1cnNvci1wb2ludGVyJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiAnMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRm9sZGVyQ2xpY2soZm9sZGVyLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVyIHNpemU9ezE1fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2ZvbGRlci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIyMFwiIGhlaWdodD1cIjJcIiB2aWV3Qm94PVwiMCAwIDM1MiAyXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xIDFIMzUxXCIgc3Ryb2tlPVwiI0RBRTVFQVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBhdGVudHMgdGhhdCB3ZXJlIHByZXZpb3VzbHkgc2F2ZWQhICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXIgYm9yZGVyLVsjREFFNUVBXSByb3VuZGVkLXhsIGJnLXdoaXRlIHB5LTIgcHgtM1wiIHN0eWxlPXt7IGJveFNoYWRvdzogJzBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEwKScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlIHNpemU9ezE1fSBjb2xvcj1cIiNBMEEwQTFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI0EwQTBBMV1cIj5NZXRob2QgYW5kIEFwcGFyYXR1cyBmb3IgSW1hZ2UtQmFzZWQgTmF2aWdhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlciBib3JkZXItWyNEQUU1RUFdIHJvdW5kZWQteGwgYmctd2hpdGUgcHktMiBweC0zXCIgc3R5bGU9e3sgYm94U2hhZG93OiAnMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTApJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGUgc2l6ZT17MTV9IGNvbG9yPVwiI0EwQTBBMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjQTBBMEExXVwiPlNpbmdsZSBzaWRlZCBsaWdodC1hY3R1YXRlZCBtaWNyb2ZsdWlkaWMgZGV2aWNlIHdpdGguLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogQnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcGwtNCBwci00IG10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzMwcHhdIHB4LTQgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRENFNEU3XSByb3VuZGVkLW1kIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6dGV4dC1ibGFjayB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9kYWxWaXNpYmxlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgRm9sZGVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzMwcHhdIHB4LTQgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRENFNEU3XSByb3VuZGVkLW1kIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6dGV4dC1ibGFjayB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthbmFseXplUGF0ZW50fT4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNraXAgU2F2aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMzBweF0gcHgtNCBweS0yIGJnLVsjNTk4MDhDXSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItWyNEQ0U0RTddIHJvdW5kZWQtbWQgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCB0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBTYXZlUGF0ZW50OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvbGRlciIsIkZpbGUiLCJDcmVhdGVGb2xkZXIiLCJ1c2VBcHBTZWxlY3RvciIsImZvbGRlcnMiLCJTYXZlUGF0ZW50Iiwib25DbG9zZSIsInRpdGxlIiwiYW5hbHl6ZVBhdGVudCIsInNlbGVjdGVkRm9sZGVyIiwic2V0U2VsZWN0ZWRGb2xkZXIiLCJpc01vZGFsVmlzaWJsZSIsInNldElzTW9kYWxWaXNpYmxlIiwiZGlyZWN0b3JpZXMiLCJoYW5kbGVGb2xkZXJDbGljayIsImZvbGRlck5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJwIiwic2l6ZSIsIm1hcCIsImZvbGRlciIsIm5hbWUiLCJzdHlsZSIsImJveFNoYWRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwic3Ryb2tlLWxpbmVjYXAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/modals/SavePatent.tsx\n"));

/***/ })

});