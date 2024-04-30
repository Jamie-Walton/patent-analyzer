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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_PatentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PatentCard */ \"(app-pages-browser)/./components/PatentCard.tsx\");\n/* harmony import */ var _barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Download!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/download.js\");\n/* harmony import */ var _components_modals_SavePatent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modals/SavePatent */ \"(app-pages-browser)/./components/modals/SavePatent.tsx\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hooks */ \"(app-pages-browser)/./lib/hooks.tsx\");\n/* harmony import */ var _lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/features/analyzeSlice */ \"(app-pages-browser)/./lib/features/analyzeSlice.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [uploadedFile, setUploadedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [uploadedFileName, setUploadedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n    const data = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.examples);\n    const handleUpload = (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            setUploadedFileName(file.name);\n            setUploadedFile(file);\n            setIsModalVisible(true); // Trigger the modal\n        }\n    };\n    function dropHandler(ev) {\n        console.log(\"File(s) dropped\");\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n        if (ev.dataTransfer.items) {\n            // Use DataTransferItemList interface to access the file(s)\n            [\n                ...ev.dataTransfer.items\n            ].forEach((item, i)=>{\n                // If dropped items aren't files, reject them\n                if (item.kind === \"file\") {\n                    const file = item.getAsFile();\n                    console.log(\"… file[\".concat(i, \"].name = \").concat(file.name));\n                    setIsModalVisible(true); // Show the modal\n                }\n            });\n        } else {\n            // Use DataTransfer interface to access the file(s)\n            [\n                ...ev.dataTransfer.files\n            ].forEach((file, i)=>{\n                console.log(\"… file[\".concat(i, \"].name = \").concat(file.name));\n                setUploadedFileName(file.name);\n                setUploadedFile(file);\n                setIsModalVisible(true); // Show the modal\n            });\n        }\n    }\n    function dragOverHandler(ev) {\n        console.log(\"File(s) in drop zone\");\n        ev.preventDefault();\n    }\n    async function storeNewPatent(url) {\n        const uploadedPatent = {\n            title: \"\",\n            tags: [],\n            status: \"\",\n            patentId: \"\",\n            url: url,\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        };\n        dispatch((0,_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.storeFile)(uploadedPatent));\n    }\n    async function storePatent(info) {\n        dispatch((0,_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.storeFile)(info));\n    }\n    function goToPatent(url) {\n        storeNewPatent(url).then(function(value) {\n            router.push(\"/patent\");\n        }, function(error) {\n            console.log(error);\n        });\n    }\n    function goToRecent(info) {\n        storePatent(info).then(function(value) {\n            router.push(\"/patent\");\n        }, function(error) {\n            console.log(error);\n        });\n    }\n    function analyzePatent() {\n        if (uploadedFile) {\n            const url = URL.createObjectURL(uploadedFile);\n            goToPatent(url);\n        }\n    }\n    function renderPatentCard(entry) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PatentCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            info: entry,\n            onClick: ()=>goToRecent(entry)\n        }, void 0, false, {\n            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center pt-[24px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-3/4 mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-normal leading-9\",\n                        children: [\n                            \"Hi, \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-custom-blue\",\n                                children: \"researcher 102-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 58\n                            }, this),\n                            \". Welcome back to your AI patent workspace.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm font-normal leading-6 pt-[6px]\",\n                        children: \"Simply upload a patent document and let our AI analyze the data in seconds. Uncover valuable insights to drive your innovation work.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-normal leading-9 pt-[24px] pb-[12px]\",\n                        children: \"Read a new patent\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col h-[230px] items-center justify-center shrink-0 rounded-lg border border-[#DAE5EA] bg-white\",\n                        style: {\n                            boxShadow: \"0px 1px 10px 0px rgba(0, 0, 0, 0.10)\"\n                        },\n                        id: \"drop_zone\",\n                        onDrop: dropHandler,\n                        onDragOver: dragOverHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-custom-blue rounded-full p-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                size: 18,\n                                                color: \"#ffffff\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xl font-normal whitespace-nowrap\",\n                                            children: \"Upload or drop a file\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        className: \"pl-24\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"upload\",\n                                            className: \"text-sm cursor-pointer flex justify-center items-center\",\n                                            type: \"file\",\n                                            onChange: handleUpload\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-normal leading-9 pt-[24px] pb-[12px]\",\n                        children: \"Recent History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center w-full space-x-4 pb-10\",\n                        children: data.map((patent)=>renderPatentCard(patent))\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            isModalVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_SavePatent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onClose: ()=>setIsModalVisible(false)\n                }, void 0, false, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 171,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Hododk2maiQresjviYc/lGL4y74=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDQyxTQUFXcEIsaUJBQWlCb0I7Ozs7Ozs7Ozs7OztZQU0xQ3BFLGdDQUNELDhEQUFDbUQ7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM5RCxxRUFBVUE7b0JBQUMrRSxTQUFTLElBQU1wRSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJEO0dBakt3Qk47O1FBS1BSLHNEQUFTQTtRQUNQSyxzREFBY0E7UUFDbEJELHNEQUFjQTs7O0tBUExJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IFBhdGVudENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9QYXRlbnRDYXJkXCI7XG5pbXBvcnQgUGF0ZW50SW5mbyBmcm9tIFwiQC9jb21wb25lbnRzL1BhdGVudEluZm9cIjtcbmltcG9ydCBQYXRlbnRVcGxvYWQgZnJvbSBcIkAvY29tcG9uZW50cy9QYXRlbnRVcGxvYWRcIjtcbmltcG9ydCBQYXRlbnRVcGxvYWRMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvUGF0ZW50VXBsb2FkTG9hZGluZ1wiO1xuaW1wb3J0IHtEb3dubG9hZCwgTGluazJ9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCBTYXZlUGF0ZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb2RhbHMvU2F2ZVBhdGVudCc7XG5cbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uL2xpYi9ob29rcydcbmltcG9ydCB7XG4gIHN0b3JlRmlsZSwgZXhhbXBsZXNcbn0gZnJvbSAnLi4vbGliL2ZlYXR1cmVzL2FuYWx5emVTbGljZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbdXBsb2FkZWRGaWxlLCBzZXRVcGxvYWRlZEZpbGVdID0gdXNlU3RhdGU8RmlsZT4oKTtcbiAgY29uc3QgW3VwbG9hZGVkRmlsZU5hbWUsIHNldFVwbG9hZGVkRmlsZU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgZGF0YSA9IHVzZUFwcFNlbGVjdG9yKGV4YW1wbGVzKTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoZXZlbnQ6IHsgdGFyZ2V0OiB7IGZpbGVzOiBhbnk7IH07IH0pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICBzZXRVcGxvYWRlZEZpbGVOYW1lKGZpbGUubmFtZSk7XG4gICAgICBzZXRVcGxvYWRlZEZpbGUoZmlsZSk7XG4gICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTsgLy8gVHJpZ2dlciB0aGUgbW9kYWxcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZHJvcEhhbmRsZXIoZXY6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IGRhdGFUcmFuc2ZlcjogeyBpdGVtczogYW55OyBmaWxlczogYW55OyB9OyB9KSB7XG4gICAgY29uc29sZS5sb2coXCJGaWxlKHMpIGRyb3BwZWRcIik7XG4gIFxuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciAoUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbmVkKVxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIGlmIChldi5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICBbLi4uZXYuZGF0YVRyYW5zZmVyLml0ZW1zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIC8vIElmIGRyb3BwZWQgaXRlbXMgYXJlbid0IGZpbGVzLCByZWplY3QgdGhlbVxuICAgICAgICBpZiAoaXRlbS5raW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDigKYgZmlsZVske2l9XS5uYW1lID0gJHtmaWxlLm5hbWV9YCk7XG4gICAgICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7IC8vIFNob3cgdGhlIG1vZGFsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgRGF0YVRyYW5zZmVyIGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcbiAgICAgIFsuLi5ldi5kYXRhVHJhbnNmZXIuZmlsZXNdLmZvckVhY2goKGZpbGUsIGkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYOKApiBmaWxlWyR7aX1dLm5hbWUgPSAke2ZpbGUubmFtZX1gKTtcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICAgICAgICBzZXRVcGxvYWRlZEZpbGUoZmlsZSk7XG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpOyAvLyBTaG93IHRoZSBtb2RhbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGV2OiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KSB7XG4gICAgY29uc29sZS5sb2coXCJGaWxlKHMpIGluIGRyb3Agem9uZVwiKTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RvcmVOZXdQYXRlbnQodXJsOnN0cmluZykge1xuICAgIGNvbnN0IHVwbG9hZGVkUGF0ZW50ID0ge1xuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICB0YWdzOiBbXSxcbiAgICAgIHN0YXR1czogXCJcIixcbiAgICAgIHBhdGVudElkOiBcIlwiLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBwcm9ibGVtOiBcIlwiLFxuICAgICAgcHJvYmxlbUtleXdvcmRzOiBbXSxcbiAgICAgIHNvbHV0aW9uOiBcIlwiLFxuICAgICAgc29sdXRpb25LZXl3b3JkczogW10sXG4gICAgICBzdW1tYXJ5OiBcIlwiLFxuICAgICAgZnVsbHRleHQ6IFwiXCIsXG4gICAgfVxuICAgIGRpc3BhdGNoKHN0b3JlRmlsZSh1cGxvYWRlZFBhdGVudCkpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RvcmVQYXRlbnQoaW5mbzpQYXRlbnRJbmZvKSB7XG4gICAgZGlzcGF0Y2goc3RvcmVGaWxlKGluZm8pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvVG9QYXRlbnQodXJsOnN0cmluZykge1xuICAgIHN0b3JlTmV3UGF0ZW50KHVybCkudGhlbihcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7cm91dGVyLnB1c2goJy9wYXRlbnQnKTt9LFxuICAgICAgZnVuY3Rpb24oZXJyb3IpIHtjb25zb2xlLmxvZyhlcnJvcik7fVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvVG9SZWNlbnQoaW5mbzpQYXRlbnRJbmZvKSB7XG4gICAgc3RvcmVQYXRlbnQoaW5mbykudGhlbihcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7cm91dGVyLnB1c2goJy9wYXRlbnQnKTt9LFxuICAgICAgZnVuY3Rpb24oZXJyb3IpIHtjb25zb2xlLmxvZyhlcnJvcik7fVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGFuYWx5emVQYXRlbnQoKSB7XG4gICAgaWYgKHVwbG9hZGVkRmlsZSkge1xuICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cGxvYWRlZEZpbGUpO1xuICAgICAgZ29Ub1BhdGVudCh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBhdGVudENhcmQoZW50cnk6UGF0ZW50SW5mbykge1xuICAgIHJldHVybiAoXG4gICAgICA8UGF0ZW50Q2FyZFxuICAgICAgICBpbmZvPXtlbnRyeX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gZ29Ub1JlY2VudChlbnRyeSl9XG4gICAgICAvPik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtWzI0cHhdXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LTMvNCBtdC0xMFwiPlxuICAgICAgICB7LyogSGVhZGVyIHRleHQgKi99XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy05XCI+SGksIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsdWVcIj5yZXNlYXJjaGVyIDEwMi02PC9zcGFuPi4gV2VsY29tZSBiYWNrIHRvIHlvdXIgQUkgcGF0ZW50IHdvcmtzcGFjZS48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ub3JtYWwgbGVhZGluZy02IHB0LVs2cHhdXCI+U2ltcGx5IHVwbG9hZCBhIHBhdGVudCBkb2N1bWVudCBhbmQgbGV0IG91ciBBSSBhbmFseXplIHRoZSBkYXRhIGluIHNlY29uZHMuIFVuY292ZXIgdmFsdWFibGUgaW5zaWdodHMgdG8gZHJpdmUgeW91ciBpbm5vdmF0aW9uIHdvcmsuPC9wPlxuXG4gICAgICAgIHsvKiBgUmVhZCBhIG5ldyBwYXRlbnRgIHNlY3Rpb24gKi99XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy05IHB0LVsyNHB4XSBwYi1bMTJweF1cIj5SZWFkIGEgbmV3IHBhdGVudDwvcD5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtWzIzMHB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjREFFNUVBXSBiZy13aGl0ZVwiIFxuICAgICAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogJzBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEwKScgfX1cbiAgICAgICAgICBpZD1cImRyb3Bfem9uZVwiIG9uRHJvcD17ZHJvcEhhbmRsZXJ9IG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0yJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jdXN0b20tYmx1ZSByb3VuZGVkLWZ1bGwgcC0xXCI+XG4gICAgICAgICAgICAgICAgPERvd25sb2FkIHNpemU9ezE4fSBjb2xvcj1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW5vcm1hbCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlVwbG9hZCBvciBkcm9wIGEgZmlsZTwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+ICBcbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicGwtMjRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9J3VwbG9hZCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2ZpbGUnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWR9XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1cGxvYWRlZEZpbGVOYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gYW5hbHl6ZVBhdGVudCgpfT5HbzwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIFxuXG5cbiAgICAgICAgey8qIGBSZWNlbnQgSGlzdG9yeWAgc2VjdGlvbiAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTkgcHQtWzI0cHhdIHBiLVsxMnB4XVwiPlJlY2VudCBIaXN0b3J5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHNwYWNlLXgtNCBwYi0xMFwiPlxuXG4gICAgICAgICAge2RhdGEubWFwKChwYXRlbnQpID0+IHJlbmRlclBhdGVudENhcmQocGF0ZW50KSl9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L21haW4+XG4gICAgICBcbiAgICAgIHtpc01vZGFsVmlzaWJsZSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTQwXCI+XG4gICAgICAgIDxTYXZlUGF0ZW50IG9uQ2xvc2U9eygpID0+IHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICl9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQYXRlbnRDYXJkIiwiRG93bmxvYWQiLCJTYXZlUGF0ZW50IiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInN0b3JlRmlsZSIsImV4YW1wbGVzIiwiSG9tZSIsInVwbG9hZGVkRmlsZSIsInNldFVwbG9hZGVkRmlsZSIsInVwbG9hZGVkRmlsZU5hbWUiLCJzZXRVcGxvYWRlZEZpbGVOYW1lIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsInJvdXRlciIsImRpc3BhdGNoIiwiZGF0YSIsImhhbmRsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsImRyb3BIYW5kbGVyIiwiZXYiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiaSIsImtpbmQiLCJnZXRBc0ZpbGUiLCJkcmFnT3ZlckhhbmRsZXIiLCJzdG9yZU5ld1BhdGVudCIsInVybCIsInVwbG9hZGVkUGF0ZW50IiwidGl0bGUiLCJ0YWdzIiwic3RhdHVzIiwicGF0ZW50SWQiLCJwcm9ibGVtIiwicHJvYmxlbUtleXdvcmRzIiwic29sdXRpb24iLCJzb2x1dGlvbktleXdvcmRzIiwic3VtbWFyeSIsImZ1bGx0ZXh0Iiwic3RvcmVQYXRlbnQiLCJpbmZvIiwiZ29Ub1BhdGVudCIsInRoZW4iLCJ2YWx1ZSIsInB1c2giLCJlcnJvciIsImdvVG9SZWNlbnQiLCJhbmFseXplUGF0ZW50IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVuZGVyUGF0ZW50Q2FyZCIsImVudHJ5Iiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJwIiwic3BhbiIsInN0eWxlIiwiYm94U2hhZG93IiwiaWQiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwic2l6ZSIsImNvbG9yIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwibWFwIiwicGF0ZW50Iiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});